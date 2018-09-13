<template>
<div class="page">
    <base-navbar title="dark">
    </base-navbar>

    <div class="spacing"></div>

    <base-navbar title="light" mode="light">
    </base-navbar>

    <div class="spacing"></div>

    <base-navbar title="标题">
        <div slot="left">左侧文字</div>
    </base-navbar>

    <div class="spacing"></div>

    <base-navbar title="标题">
        <div slot="right">右侧文字</div>
    </base-navbar>

    <div class="spacing"></div>

    <base-navbar title="过长的标题将会被省略过长的标题将会被省略过长的标题将会被省略过长的标题将会被省略">
    </base-navbar>
</div>
</template>

<script>
import { Navbar as BaseNavbar } from 'tommy-ui'

export default {
    components: {
        BaseNavbar
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
