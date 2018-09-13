<template>
<div class="page">
    <base-divider>主题</base-divider>
    <base-button>default</base-button>
    <base-button type="primary">primary</base-button>
    <base-button type="danger">danger</base-button>

    <base-divider>朴素元素 plain</base-divider>
    <base-button plain>default</base-button>
    <base-button type="primary" plain>primary</base-button>
    <base-button type="danger" plain>danger</base-button>

    <base-divider>disabled</base-divider>
    <base-button disabled>default</base-button>
    <base-button type="primary" disabled>primary</base-button>
    <base-button type="danger" disabled>danger</base-button>

    <base-divider>size</base-divider>
    <base-button size="small">small</base-button>
    <base-button size="small" inline>inline</base-button>
    <base-button size="small" inline>inline</base-button>

    <base-divider>icon</base-divider>
    <base-button icon="actionsheet">icon</base-button>
    <base-button loading>loading</base-button>
    <base-button loading></base-button>

    <base-divider>自定义</base-divider>
    <base-button>
        <base-icon icon="success"></base-icon>
        自定义
        <base-icon icon="error"></base-icon>
    </base-button>
</div>
</template>

<script>
import { Button as BaseButton, Divider as BaseDivider, Icon as BaseIcon } from 'tommy-ui'

export default {
    methods: {
    },

    components: {
        BaseButton,
        BaseDivider,
        BaseIcon
    }
}
</script>

<style lang="scss" scoped>
.page {
    background: #f3f3f3;
}
</style>
