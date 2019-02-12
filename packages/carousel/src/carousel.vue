<script>
import CarouselGroup from './carousel-group'

export default {
    name: 'TmCarousel',

    props: {
        /**
         */
        value: {
            type: Number,
            default: 0,
        },
        loop: {
            type: Boolean,
            default: false,
        },
        /**
         * 是否播放
         */
        play: {
            type: Boolean,
            default: false,
        },
        /**
         * 自动播放的时间间隔
         */
        interval: {
            type: Number,
            default: 3000,
        },
        /**
         * 禁止手势
         */
        disabledTouch: {
            type: Boolean,
            default: false,
        },
    },

    data () {
        return {
            active: this.value,
            totalGroup: 0,
            clientWidth: 0,

            currentPlay: this.play,
            timer: null,
            // 在 touchstart 时标记是否需要重新启动定时器
            restart: false,

            startX: 0,
            startY: 0,
            moveX: 0,
            direction: '' // '', vertical, across
        }
    },

    watch: {
        value (val) {
            this.active = val
        },
        active (val) {
            this.$emit('input', val)
        },
        play (val) {
            this.currentPlay = val
        },
        currentPlay: {
            handler (val) {
                // console.log('currentPlay', val)
                this.$emit('update:play', val)

                if (val) {
                    this.startTimer()
                } else {
                    this.stopTimer()
                }
            },
            immediate: true,
        },
    },

    render (h) {
        // console.log('render')
        const { handleTouchstart, handleTouchmove, handleTouchend, moveX, getRenderData, clientWidth } = this

        const defaults = this.$slots.default || []
        const panes = defaults.filter(item => /CarouselItem/.test(item.tag))

        this.totalGroup = panes.length
        const { prev, current, next } = getRenderData(panes)

        const styleContainer = {
            transform: `translateX(${-clientWidth + moveX}px)`,
        }

        return (
            <div class="t-carousel">
                <div class="t-carousel-container" ref="container" style={ styleContainer }
                    onTouchstart={ handleTouchstart }
                    onTouchmove={ handleTouchmove }
                    onTouchend={ handleTouchend }>
                    <carousel-group ref="prev">
                        { prev }
                    </carousel-group>

                    <carousel-group>
                        { current }
                    </carousel-group>

                    <carousel-group ref="next">
                        { next }
                    </carousel-group>
                </div>
            </div>
        )
    },

    mounted () {
        this.clientWidth = this.$el.clientWidth
    },

    methods: {
        handleTouchstart (event) {
            if (this.disabledTouch) {
                return false
            }

            const finger = event.changedTouches[0]
            this.restart = this.currentPlay
            this.currentPlay = false

            this.startX = finger.pageX
            this.startY = finger.pageY

            this.hasPrev = this.$refs.prev.$children.length
            this.hasNext = this.$refs.next.$children.length
        },
        handleTouchmove (event) {
            const finger = event.changedTouches[0]
            const moveX = finger.pageX - this.startX
            const moveY = finger.pageY - this.startY

            if (!this.direction) {
                // 滑动幅度太小，不处理
                if (Math.abs(moveX) < 4 && Math.abs(moveY) < 4) {
                    return
                }

                this.direction = Math.abs(moveX) / Math.abs(moveY) > 1 ? 'across' : 'vertical'
            }

            this.isRespond = (() => {
                if (this.disabledTouch) {
                    return false
                }
                if (this.direction === 'vertical') {
                    return false
                }
                if (moveX > 0 && !this.hasPrev) {
                    return false
                }
                if (moveX < 0 && !this.hasNext) {
                    return false
                }
                return true
            })()

            if (!this.isRespond) {
                return
            }
            event.preventDefault()

            this.moveX = moveX
        },
        async handleTouchend (event) {
            const { isRespond } = this
            this.direction = ''

            if (!isRespond) {
                return
            }

            const translateAction = (() => {
                if (this.moveX < -70) {
                    return 'next'
                }
                if (this.moveX > 70) {
                    return 'prev'
                }
                return ''
            })()

            this.translate(translateAction, () => {
                this.currentPlay = this.restart
            })
        },
        /**
         * 可选值: 'next', 'prev', '', [number]
         * @returns {Number} -2: 子元素总个数为 0; -1: 子元素总个数为 1
         */
        getCurrentActive (action) {
            const total = this.totalGroup

            if (total <= 1) {
                return total - 2
            }

            let currentActive = (() => {
                if (typeof action === 'number') {
                    return action
                }

                switch (action) {
                case 'next':
                    return this.active + 1
                case 'prev':
                    return this.active - 1
                default:
                    return this.active
                }
            })()
            currentActive = currentActive % total

            return currentActive >= 0 ? currentActive : currentActive + total
        },
        getRenderData (panes) {
            const { loop, totalGroup } = this
            const currentActive = this.getCurrentActive()

            function getGroup (start) {
                return panes.slice(start * 1, start * 1 + 1)
            }

            if (currentActive === -2) {
                return { prev: null, current: null, next: null }
            }
            if (currentActive === -1) {
                return { prev: null, current: getGroup(0), next: null }
            }

            const prev = (() => {
                if (currentActive > 0) {
                    return getGroup(currentActive - 1)
                }
                if (loop) {
                    return getGroup(totalGroup - 1)
                }
                return null
            })()
            const current = getGroup(currentActive)
            const next = (() => {
                if (currentActive < totalGroup - 1) {
                    return getGroup(currentActive + 1)
                }
                if (loop) {
                    return getGroup(0)
                }
                return null
            })()

            return { prev, current, next }
        },
        /**
         * 开始播放
         */
        startTimer () {
            // 如果不是循环且没有下一张，不开始播放
            if (this.tryStopTimer()) {
                return
            }

            this.timer = setInterval(() => {
                this.translate('next', this.tryStopTimer)
            }, this.interval)
        },
        /**
         * 停止播放
         */
        stopTimer () {
            clearInterval(this.timer)
        },
        /**
         * 尝试提前暂停timer
         */
        tryStopTimer () {
            // 提前判断是否还有下一张，没有的话，则停止计时
            if (!this.loop && this.active === this.totalGroup - 1) {
                this.currentPlay = false
                return true
            }
            return false
        },
        /**
         * 下一张
         * action: next, prev, ''
         */
        translate (action, callback) {
            if (!action) {
                this.moveX = 0
                callback()
                return
            }

            const oldActive = this.active

            this.$refs.container.classList.add('t-carousel-transition')
            this.moveX = action === 'next' ? -this.clientWidth : this.clientWidth

            const self = this
            this.$refs.container.addEventListener('webkitTransitionEnd', function handler () {
                self.$refs.container.removeEventListener('webkitTransitionEnd', handler)
                self.active = self.getCurrentActive(action)

                self.moveX = 0
                self.$refs.container.classList.remove('t-carousel-transition')

                callback()
                self.$emit('change', self.active, oldActive)
            })
        },
        setActiveItem (_active) {},
    },

    components: {
        CarouselGroup,
    },
}
</script>

<style lang="scss" scoped>
.t-carousel {
    width: 100%;
    overflow: hidden;

    &-container {
        display: flex;
    }

    &-transition {
        transition: transform 300ms ease-in-out;
    }
}
</style>
