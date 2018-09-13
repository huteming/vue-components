<template>
<div class="t-divider">
    <div class="t-divider-line"></div>

    <div class="t-divider-tips">
        <span class="t-divider-loading" v-if="loading"></span>

        <span v-else-if="text || $slots.default">
            <slot> {{ text }} </slot>
        </span>

        <span class="t-divider-dot" v-else></span>
    </div>

    <div class="t-divider-line"></div>
</div>
</template>

<script>
export default {
    name: 'BaseDivider',

    props: {
        loading: Boolean,
        text: String
    },

    computed: {
    }
}
</script>
