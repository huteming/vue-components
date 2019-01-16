<template>
<section class="t-navbar">
    <div class="t-navbar-left" v-if="$slots.left">
        <slot name="left"></slot>
    </div>

    <div class="t-navbar-center">
        <slot>{{ title }}</slot>
    </div>

    <div class="t-navbar-right" v-if="$slots.right">
        <slot name="right"></slot>
    </div>
</section>
</template>

<script>
export default {
    name: 'BaseNavbar',

    props: {
        title: {
            type: String,
            default: '',
        },
    },

    computed: {
    },
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
