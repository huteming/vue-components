<template>
<section class="t-ripple-container"
    @touchstart="handleTouchStart"
    @touchend="end"
    @touchcancel="end"
    @mousedown="handleMouseDown"
    @mouseup="end"
    @mouseleave="end">
    <ripple-mask v-for="item in ripples" :key="item.key" :color="item.color" :opacity="item.opacity" :merge-style="item.style"></ripple-mask>
</section>
</template>

<script>
import RippleMask from './mask'
import color from 'mixins/color'

export default {
    mixins: [color('#000')],

    props: {
        opacity: Number,
        center: Boolean,
    },

    data () {
        return {
            nextKey: 0,
            ripples: [],

            startX: 0,
            startY: 0,
            startTime: 0,

            disabled: Boolean,
        }
    },

    methods: {
        handleMouseDown (event) {
            if (event.button === 0) {
                this.start(event)
            }
        },
        handleTouchStart (event) {
            this.startX = event.touches[0].clientX
            this.startY = event.touches[0].clientY
            this.startTime = Date.now()

            this.start(event.touches[0])

            document.body.addEventListener('touchmove', this.handleTouchMove, false)
        },
        handleTouchMove (event) {
            const deltaX = Math.abs(event.touches[0].clientX - this.startX)
            const deltaY = Math.abs(event.touches[0].clientY - this.startY)
            // 判断滚动 6px
            if (deltaY > 6 || deltaX > 6) this.end()
        },
        end () {
            if (this.ripples.length === 0) return

            this.ripples.splice(0, 1)

            document.body.removeEventListener('touchmove', this.handleTouchMove, false)
        },
        start (event) {
            if (this.disabled) return

            this.ripples.push({
                key: this.nextKey++,
                color: this.$_normalizedColor,
                opacity: this.opacity,
                style: this.center ? {} : this.getRippleStyle(event),
            })
        },
        getRippleStyle (event) {
            const offset = this.getOffset(this.$el)
            const elHeight = this.$el.offsetHeight
            const elWidth = this.$el.offsetWidth
            const isTouchEvent = event.touches && event.touches.length

            const pageX = isTouchEvent ? event.touches[0].pageX : event.pageX
            const pageY = isTouchEvent ? event.touches[0].pageY : event.pageY
            const pointerX = pageX - offset.left
            const pointerY = pageY - offset.top

            const topLeftDiag = this.calcDiag(pointerX, pointerY)
            const topRightDiag = this.calcDiag(elWidth - pointerX, pointerY)
            const botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY)
            const botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY)

            const rippleRadius = Math.max(
                topLeftDiag, topRightDiag, botRightDiag, botLeftDiag
            )

            const rippleSize = rippleRadius * 2
            const left = pointerX - rippleRadius
            const top = pointerY - rippleRadius

            return {
                height: rippleSize + 'px',
                width: rippleSize + 'px',
                top: top + 'px',
                left: left + 'px',
            }
        },
        calcDiag (a, b) {
            return Math.sqrt((a * a) + (b * b))
        },
        getOffset (element) {
            const box = element.getBoundingClientRect()
            const body = document.body

            const clientTop = element.clientTop || body.clientTop || 0
            const clientLeft = element.clientLeft || body.clientLeft || 0
            const scrollTop = window.pageYOffset || element.scrollTop
            const scrollLeft = window.pageXOffset || element.scrollLeft

            return {
                top: box.top + scrollTop - clientTop,
                left: box.left + scrollLeft - clientLeft,
            }
        },
    },

    components: {
        RippleMask,
    },
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
