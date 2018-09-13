<template>
<div class="t-picker-item"
    @touchstart.prevent="handleTouchStart"
    @touchmove.prevent="handleTouchMove"
    @touchend.prevent="handleTouchEnd">
    <div class="t-picker-item__line is-top"></div>
    <div class="t-picker-item__line is-bottom"></div>

    <div class="t-picker-item__container" :style="styleContainer">
        <div class="t-picker-item__container-piece"
            v-for="(item, index) in renderOptions"
            :key="index"
            :class="item.class"
            :style="item.style">
            {{ item.label }}
        </div>
    </div>
</div>
</template>

<script>
const ITEM_HEIGHT = 34

export default {
    name: 'BasePickerItem',

    props: {
        /**
         * 选项列表，{ label, value } 结构的键值对数组
         */
        options: {
            type: Array,
            default () {
                return []
            },
            required: true
        },
        value: {}
    },

    data () {
        return {
            currentValue: this.value,

            startY: 0,
            currentMoveY: 0,

            startTime: 0,
            duration: 0
        }
    },

    computed: {
        currentIndex: {
            get () {
                const index = this.options.findIndex(item => item.value === this.currentValue)

                if (index === -1 && this.options.length) {
                    // eslint-disable-next-line
                    this.currentValue = this.options[0].value
                }

                return index > -1 ? index : 0
            },
            set (val) {
                this.currentValue = this.options[val].value
            }
        },
        prevMoveY: {
            get () {
                return this.currentIndex * ITEM_HEIGHT
            },
            set (val) {
                this.currentIndex = Math.round(val / ITEM_HEIGHT)
            }
        },
        /**
         * 根据当前值计算滑过的角度
         * 向上为正，向下为负
         */
        moveDeg () {
            return (Math.round(this.prevMoveY / ITEM_HEIGHT) + this.currentMoveY / ITEM_HEIGHT) * 20
        },
        /**
         * 取值范围
         */
        range () {
            const moveItem = Math.round(this.moveDeg / 20)
            const start = -9 + moveItem
            return {
                start,
                end: start + 18
            }
        },
        renderOptions () {
            const { start, end } = this.range
            const length = this.options.length
            const data = []

            for (let i = start; i < end; i++) {
                const index = i % length
                const normalizedIndex = index >= 0 ? index : index + length
                const isHidden = i < 0 || i > length - 1

                const classes = isHidden ? 'hidden' : ''
                const styles = {
                    transform: `rotateX(${-20 * i % 360}deg) translateZ(90px)`
                }

                const item = Object.assign({ class: classes, style: styles, index: i }, this.options[normalizedIndex])
                data.push(item)
            }

            return data
        },
        styleContainer () {
            return {
                transform: `rotateX(${this.moveDeg}deg)`,
                transition: this.duration > 0 ? `transform ${this.duration}ms cubic-bezier(0.19, 1, 0.22, 1)` : ''
            }
        }
    },

    watch: {
        value (val) {
            this.currentValue = val
        },
        currentValue (val) {
            this.$emit('input', val)
        }
    },

    methods: {
        handleTouchStart (event) {
            const finger = event.changedTouches[0]

            this.duration = 0
            this.startY = finger.pageY
            this.startTime = event.timestamp || Date.now()
        },
        handleTouchMove (event) {
            const finger = event.changedTouches[0]

            this.currentMoveY = this.dealEdge(this.startY - finger.pageY)
        },
        handleTouchEnd (event) {
            const finger = event.changedTouches[0]

            let move = this.startY - finger.pageY
            let duration = event.timestamp || Date.now() - this.startTime

            if (duration <= 300) {
                move = move * 1.8
                duration = 1000 + duration * 1.8
            }

            this.duration = duration
            this.prevMoveY = this.prevMoveY + this.dealEdge(move)
            this.currentMoveY = 0
        },
        /**
         * 处理边界
         */
        dealEdge (move) {
            const topDistance = this.currentIndex * ITEM_HEIGHT
            const maxIndex = this.options.length - 1
            const bottomDistance = (maxIndex - this.currentIndex) * ITEM_HEIGHT

            if (move > 0 && move > bottomDistance) {
                return bottomDistance
            }
            if (move < 0 && -move > topDistance) {
                return -topDistance
            }
            return move
        }
    },

    mounted () {
    }
}
</script>
