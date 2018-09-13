<template>
    <app-view-box title="divider" :to="{ name: 'dividerDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="loading"
                subtitle="{Boolean}"
                description="加载状态"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="text"
                subtitle="{String}"
                description="显示内容"
                value="---">
            </base-panel-item>
        </base-panel>

        <base-divider>插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="自定义显示内容">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-divider loading>text</base-divider>'
            ]
        }
    }
}
</script>
