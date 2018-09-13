<template>
    <app-view-box title="switch" :to="{ name: 'switchDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="value"
                subtitle="{Boolean}"
                description="是否选中"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="disabled"
                subtitle="{Boolean}"
                description="是否禁用"
                value="false">
            </base-panel-item>
        </base-panel>

        <base-divider>插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="显示文本">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-switch v-model="value"><slot /></base-switch>'
            ]
        }
    }
}
</script>
