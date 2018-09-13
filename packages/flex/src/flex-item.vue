<template>
<div class="t-flexbox-item" :style="styles">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'BaseFlexItem',

    props: {
        order: {
            type: Number,
            default: 0
        },
        grow: {
            type: Number,
            default: 1
        },
        shrink: {
            type: Number,
            default: 1
        },
        basis: {
            type: String,
            default: 'auto'
        },
        align: {
            type: String,
            default: 'auto',
            validator (val) {
                return ['auto', 'start', 'center', 'end', 'baseline', 'stretch'].indexOf(val) > -1
            }
        }
    },

    computed: {
        gutter () {
            return this.$parent.gutter
        },
        styles () {
            return {
                order: this.order,
                'flex-grow': this.grow,
                'flex-shrink': this.shrink,
                'flex-basis': this.basis,
                'padding-left': this.gutter
            }
        },
        classes () {
            return {
                [`is-self-${this.align}`]: true
            }
        }
    }
}
</script>
