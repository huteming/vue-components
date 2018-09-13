<template>
    <section class="t-badge" :class="classes" :style="styles">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'BaseBadge',

    props: {
        /**
         * 可选值, primary, danger, success, warning, info
         */
        type: {
            type: String,
            default: 'primary'
        },
        background: String
    },

    computed: {
        classes () {
            const classSize = `is-size-normal`
            const classType = `is-type-${this.type}`
            return [classSize, classType]
        },
        styles () {
            return {
                background: this.background
            }
        }
    }
}
</script>
