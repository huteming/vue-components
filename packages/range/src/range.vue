<template>
<section class="t-range">
    <div class="t-range-start" v-if="$slots.start">
        <slot name="start"></slot>
    </div>

    <div class="t-range-min" v-if="showValue">{{ min }}</div>

    <div class="t-range-content" :class="{ 'disabled': disabled }" ref="content">
        <div class="t-range-progress" :style="styleProgress"></div>

        <div class="t-range-thumb" ref="thumb" @touchstart="handleTouchstart" @touchmove="handleTouchmove" @touchend="handleTouchend"></div>

        <div class="t-range-runway" :style="styleRunWay"></div>
    </div>

    <div class="t-range-max" v-if="showValue">{{ max }}</div>

    <div class="t-range-end" v-if="$slots.end">
        <slot name="end"></slot>
    </div>
</section>
</template>

<script>
export default {
    name: 'BaseRange',

    props: {
        value: {
            type: Number,
            default: 0
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 1
        },
        showValue: {
            type: Boolean,
            default: false
        },
        barHeight: {
            type: Number,
            default: 1
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            startX: 0,
            startValue: 0
        }
    },

    computed: {
        progress () {
            const value = this.value || 0
            return Math.floor((value - this.min) / (this.max - this.min) * 100)
        },
        stepCount () {
            return Math.ceil((this.max - this.min) / this.step)
        },
        styleProgress () {
            return {
                height: `${this.barHeight}px`,
                width: `${this.progress}%`
            }
        },
        styleRunWay () {
            return {
                height: `${this.barHeight}px`,
                width: `${100 - this.progress}%`
            }
        }
    },

    methods: {
        handleTouchstart (event) {
            const finger = event.changedTouches[0]

            this.startX = finger.pageX
            this.startValue = this.value
        },
        handleTouchmove (event) {
            if (this.disabled) return

            const finger = event.changedTouches[0]
            const moveX = finger.pageX - this.startX
            const contentWidth = this.$refs.content.clientWidth - this.$refs.thumb.clientWidth

            const stepMove = Math.round(moveX / (contentWidth / this.stepCount))
            let newValue = stepMove * this.step + this.startValue

            if (newValue < this.min) {
                newValue = this.min
            } else if (newValue > this.max) {
                newValue = this.max
            }

            this.$emit('input', newValue)
        },
        handleTouchend (event) {
            if (this.disabled) return

            this.$emit('change', this.value)
        }
    }
}
</script>
