<template>
    <app-view-box title="button" :to="{ name: 'buttonDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="type"
                subtitle="{enum} default, primary, success, info, warning, danger, text"
                description="类型"
                value="default">
            </base-panel-item>

            <base-panel-item
                title="plain"
                subtitle="{Boolean}"
                description="是否朴素元素"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="round"
                subtitle="{Boolean}"
                description="是否圆角按钮"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="circle"
                subtitle="{Boolean}"
                description="是否圆形按钮"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="loading"
                subtitle="{Boolean}"
                description="加载状态"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="disabled"
                subtitle="{Boolean}"
                description="禁用状态"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="inline"
                subtitle="{Boolean}"
                description="显示为行内元素"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="icon"
                subtitle="{String}"
                description="图标"
                value="---">
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
                '<base-button icon="icon">text</base-button>'
            ]
        }
    }
}
</script>
