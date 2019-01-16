<template>
<section class="t-white-space" :class="classes">
</section>
</template>

<script>
export default {
    name: 'BaseWhiteSpace',

    props: {
        size: {
            type: String,
            default: 'middle',
            validator (val) {
                return ['small', 'middle', 'large'].indexOf(val) > -1
            }
        }
    },

    computed: {
        classes () {
            return {
                [`is-${this.size}`]: true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
