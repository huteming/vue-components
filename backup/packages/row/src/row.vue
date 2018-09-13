<template>
    <div class="row" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BaseRow',

    props: {
        gutter: {
            type: Number,
            default: 8
        },
        justify: {
            type: String,
            default: 'flex-start'
        },
        align: {
            type: String,
            default: 'stretch'
        }
    },

    computed: {
        styles () {
            return {
                'margin-left': `-${this.gutter}px`
            }
        },
        classes () {
            return {
                [`is-justify-${this.justify}`]: true,
                [`is-align-${this.align}`]: true
            }
        }
    }
}
</script>
