<template>
    <app-view-box title="徽章" :to="{ name: 'badgeDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="size"
                subtitle="{enum} mini, normal, large"
                description="徽章尺寸"
                value="normal">
            </base-panel-item>

            <base-panel-item
                title="type"
                subtitle="{enum} primary, danger, success, warning, info"
                description="类型"
                value="primary">
            </base-panel-item>

            <base-panel-item
                title="background"
                subtitle="{String}"
                description="自定义背景"
                value="---">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-badge size="mini">1</base-badge>'
            ]
        }
    }
}
</script>
