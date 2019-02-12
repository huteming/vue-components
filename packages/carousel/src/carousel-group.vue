<template>
<div class="t-carousel-group">
    <slot></slot>
</div>
</template>

<script>
export default {
    props: {
    },
}
</script>

<style lang="scss" scoped>
.t-carousel-group {
    width: 100%;
    flex-shrink: 0;
    display: flex;
}
</style>
