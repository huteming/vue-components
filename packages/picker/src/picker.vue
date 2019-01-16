<template>
<section class="t-picker">
    <div class="t-picker-container">
        <slot></slot>
    </div>
</section>
</template>

<script>
export default {
    name: 'BasePicker'
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
