<template>
<div class="page-example">
    <base-navbar title="默认"></base-navbar>

    <BaseWhiteSpace />

    <base-navbar title="标题">
        <base-button icon="cell" fill="transparent" slot="left"></base-button>
        <div>左边有 icon</div>
    </base-navbar>

    <BaseWhiteSpace />

    <base-navbar title="两边有icon">
        <BaseButton icon="arrow-left" fill="transparent" slot="left" />

        <div>两边有icon</div>

        <BaseButton icon="more" fill="transparent" slot="right" />
        <BaseButton icon="arrow-right" fill="transparent" slot="right" />
    </base-navbar>
</div>
</template>

<script>
import { Navbar as BaseNavbar, WhiteSpace, Button } from 'tommy-ui'

export default {
    components: {
        BaseNavbar,
        BaseWhiteSpace: WhiteSpace,
        BaseButton: Button,
    }
}
</script>

<style lang="scss" scoped>
.page {
    background: #f6f6f6;
}

.spacing {
    height: 30px;
}
</style>
