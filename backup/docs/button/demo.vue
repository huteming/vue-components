<template>
<app-view-box title="button demo">
    <base-divider>主题</base-divider>
    <base-button>default</base-button>
    <base-button type="text">text</base-button>
    <base-button type="primary">primary</base-button>
    <base-button type="success">success</base-button>
    <base-button type="warning">warning</base-button>
    <base-button type="info">info</base-button>
    <base-button type="danger">danger</base-button>

    <base-divider>朴素元素 plain</base-divider>
    <base-button plain>default</base-button>
    <base-button type="text" plain>text</base-button>
    <base-button type="primary" plain>primary</base-button>
    <base-button type="success" plain>success</base-button>
    <base-button type="info" plain>info</base-button>
    <base-button type="warning" plain>warning</base-button>
    <base-button type="danger" plain>danger</base-button>

    <base-divider>圆角按钮 round</base-divider>
    <base-button round>default</base-button>
    <base-button type="text" round>text</base-button>
    <base-button type="primary" round>primary</base-button>
    <base-button type="success" round>success</base-button>
    <base-button type="info" round>info</base-button>
    <base-button type="warning" round>warning</base-button>
    <base-button type="danger" round>danger</base-button>

    <base-divider>其他</base-divider>
    <base-button loading>loading</base-button>
    <base-button disabled>disabled</base-button>
    <base-button icon="success">带icon</base-button>
    <base-button type="primary" icon="date" circle></base-button>
    <base-button inline>inline</base-button>
    <base-button inline>inline</base-button>
</app-view-box>
</template>

<script>
export default {
    methods: {
    }
}
</script>

<style lang="scss" scoped>
</style>
