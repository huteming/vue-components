<template>
<app-view-box title="range" :to="{ name: 'rangeDemo' }" :code="code">
    <base-divider>属性</base-divider>

    <base-panel>
        <base-panel-item
            title="value"
            subtitle="{Number}"
            description="当前取值"
            value="0">
        </base-panel-item>
        <base-panel-item
            title="min"
            subtitle="{Number}"
            description="最小值"
            value="0">
        </base-panel-item>
        <base-panel-item
            title="max"
            subtitle="{Number}"
            description="最大值"
            value="100">
        </base-panel-item>
        <base-panel-item
            title="step"
            subtitle="{Number}"
            description="步长"
            value="1">
        </base-panel-item>
        <base-panel-item
            title="show-value"
            subtitle="{Boolean}"
            description="是否显示当前 value"
            value="false">
        </base-panel-item>
        <base-panel-item
            title="disabled"
            subtitle="{Boolean}"
            description="是否禁用"
            value="false">
        </base-panel-item>
    </base-panel>

    <base-divider>事件</base-divider>

    <base-panel>
        <base-panel-item
            title="change"
            value="---"
            description="参数: 当前取值">
        </base-panel-item>
    </base-panel>
</app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<BaseRange v-model="value" />'
            ]
        }
    }
}
</script>
