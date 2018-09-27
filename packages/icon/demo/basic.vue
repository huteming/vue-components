<template>
<div class="page-example">
    <div class="content">
        <AppGroup icon="satisfied_deep" size="30px" />
        <AppGroup icon="navigate-next" size="30px" />
        <AppGroup icon="navigate-before" size="30px" />
        <AppGroup icon="success" />
        <AppGroup icon="favorite_border" />
        <AppGroup icon="arrow-up" />
        <AppGroup icon="arrow-down" />
        <AppGroup icon="arrow-left" />
        <AppGroup icon="arrow-right" />
        <AppGroup icon="add" />
    </div>
</div>
</template>

<script>
import AppGroup from './group'

export default {
    components: {
        AppGroup,
    },
}
</script>

<style lang="scss" scoped>
.content {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
}
</style>
