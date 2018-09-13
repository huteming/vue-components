<template>
<div class="page">
    <base-divider>单行列表</base-divider>
    <base-cell icon="warning" title="标题文字">
        <BaseIcon icon="success" color="#108EE9" />
    </base-cell>
    <base-cell icon="warning" title="标题文字">
        <BaseSwitch />
    </base-cell>
    <base-cell icon="warning" title="标题文字" to="/" is-link>
    </base-cell>
    <base-cell icon="warning" title="我时单行标题文字" value="详细信息" is-link>
    </base-cell>

    <base-divider>双行列表</base-divider>
    <BaseCell title="双行列表" subtitle="描述信息" value="详细信息" is-link />
    <BaseCell icon="warning" title="双行列表" subtitle="描述信息" value="详细信息" is-link />

    <base-divider>说明内容</base-divider>
    <base-cell title="单行列表" is-link>
        <div style="width: 29px; height: 29px; background: #f3f3f3;"></div>
    </base-cell>
    <base-cell title="单行列表" is-link>
        <div>是描述信息</div>
    </base-cell>

    <base-divider>单项选择</base-divider>
    <base-cell title="单项">
        <BaseIcon icon="success" color="#108EE9" />
    </base-cell>
    <base-cell title="单项">
        <BaseIcon icon="success" color="#108EE9" />
    </base-cell>

    <base-divider>多项选择</base-divider>
    <base-cell title="多项选择">
        <BaseIcon icon="success-reverse" color="#108EE9" slot="icon" />
    </base-cell>
    <base-cell title="多项选择">
        <BaseIcon icon="success-reverse" color="#108EE9" slot="icon" />
    </base-cell>
</div>
</template>

<script>
import { Divider as BaseDivider, Cell as BaseCell, Icon as BaseIcon, Switch as BaseSwitch } from 'tommy-ui'

export default {
    methods: {
    },

    components: {
        BaseDivider,
        BaseCell,
        BaseIcon,
        BaseSwitch
    }
}
</script>

<style lang="scss" scoped>
.page {
    padding: 20px 0;
    background: #F5F5F9;
}
</style>
