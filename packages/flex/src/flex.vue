<template>
<section class="t-flexbox" :class="classes" :style="styles">
    <slot></slot>
</section>
</template>

<script>
export default {
    name: 'BaseFlex',

    props: {
        direction: {
            type: String,
            default: 'row',
            validator (val) {
                return ['row', 'row-reverse', 'column', 'column-reverse'].indexOf(val) > -1
            }
        },
        wrap: {
            type: String,
            default: 'nowrap',
            validator (val) {
                return ['nowrap', 'wrap', 'wrap-reverse'].indexOf(val) > -1
            }
        },
        justify: {
            type: String,
            default: 'start',
            validator (val) {
                return ['start', 'center', 'end', 'between', 'around'].indexOf(val) > -1
            }
        },
        align: {
            type: String,
            default: 'center',
            validator (val) {
                return ['start', 'center', 'end', 'baseline', 'stretch'].indexOf(val) > -1
            }
        },
        alignContent: {
            type: String,
            default: 'stretch',
            validator (val) {
                return ['start', 'end', 'center', 'between', 'around', 'stretch'].indexOf(val) > -1
            }
        },
        gutter: {
            type: String,
            default: '0'
        }
    },

    computed: {
        classes () {
            return {
                [`is-direction-${this.direction}`]: true,
                [`is-wrap-${this.wrap}`]: true,
                [`is-justify-${this.justify}`]: true,
                [`is-align-${this.align}`]: true,
                [`is-content-${this.alignContent}`]: true
            }
        },
        styles () {
            return {
                'margin-left': `-${this.gutter}`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
