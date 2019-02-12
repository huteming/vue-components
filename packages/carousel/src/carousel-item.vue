<template>
<div class="tm-carousel-item">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'TmCarouselItem',

    data () {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
.tm-carousel-item {
    width: 100%;
}
</style>
