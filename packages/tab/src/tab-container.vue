<template>
<div class="t-tab-container" v-show="active">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'BaseTabContainer',

    props: {
        name: {
            type: String,
            required: true
        }
    },

    data () {
        return {
        }
    },

    computed: {
        active () {
            return this.$parent.swiping || this.$parent.value === this.name
        },
    },

    methods: {
    },
}
</script>

<style lang="scss" scoped>
@import './style/container.scss';
</style>
