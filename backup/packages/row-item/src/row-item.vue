<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BaseCol',

    props: {
        /**
         * 可选值. 0: 自动分配剩余空间, 其他数值: 12份中占有空间格数
         */
        span: {
            type: Number
        },
        offset: {
            type: Number,
            default: 0
        }
    },

    computed: {
        gutter () {
            return this.$parent.gutter
        },
        styles () {
            return {
                'padding-left': `${this.gutter}px`
            }
        },
        classes () {
            return {
                [`col-${this.span}`]: this.span >= 0,
                [`col-offset-${this.offset}`]: true
            }
        }
    }
}
</script>
