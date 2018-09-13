<template>
<section class="t-progress">
    <div class="t-progress-start" v-if="$slots.start">
        <slot name="start"></slot>
    </div>

    <div class="t-progress-content">
        <div class="t-progress-progress" :style="styleProgress"></div>

        <div class="t-progress-runway" :style="styleRunWay"></div>
    </div>

    <div class="t-progress-end" v-if="$slots.end">
        <slot name="end"></slot>
    </div>
</section>
</template>

<script>
export default {
    name: 'BaseProgress',

    props: {
        // 进度条的值（%）
        value: {
            type: Number,
            default: 0,
            validator (val) {
                return val >= 0 && val <= 100
            }
        },
        // 进度条的线宽（像素）
        barHeight: {
            type: Number,
            default: 3
        }
    },

    data () {
        return {
        }
    },

    computed: {
        styleProgress () {
            return {
                width: `${this.value}%`,
                height: `${this.barHeight}px`
            }
        },
        styleRunWay () {
            return {
                width: `${100 - this.value}%`,
                height: `${this.barHeight}px`
            }
        }
    },

    methods: {
    }
}
</script>
