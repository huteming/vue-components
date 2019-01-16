<template>
<div class="t-checkbox">
    <div class="t-checkbox-header">
        {{ title }}
    </div>

    <div class="t-checkbox-container">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'BaseCheckbox',

    props: {
        title: String,
        value: Array,
        max: {
            type: Number,
            default: 0
        }
    },

    data () {
        return {
        }
    },

    computed: {
    },

    watch: {
    },

    methods: {
    },

    created () {
    }
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
