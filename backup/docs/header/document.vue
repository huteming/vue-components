<template>
    <app-view-box title="header" :to="{ name: 'headerDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="title"
                subtitle="{String}"
                description="标题文字"
                value="---">
            </base-panel-item>
        </base-panel>

        <base-divider>插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="自定义标题">
            </base-panel-item>

            <base-panel-item
                title="left"
                description="自定义左侧内容">
            </base-panel-item>

            <base-panel-item
                title="right"
                description="自定义右侧内容">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-header title="默认"><slot /></base-header>'
            ]
        }
    }
}
</script>
