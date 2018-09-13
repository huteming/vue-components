<template>
<section class="t-wing-blank" :class="classes">
    <slot></slot>
</section>
</template>

<script>
export default {
    name: 'BaseWingBlank',

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
