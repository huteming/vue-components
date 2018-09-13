<template>
    <app-view-box title="panel" :to="{ name: 'panelDemo' }" :code="code">
        <base-divider>panel 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="title"
                subtitle="{String}"
                description="标题文字"
                value="---">
            </base-panel-item>
        </base-panel>

        <base-divider>panel item 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="image"
                subtitle="{String}"
                description="左侧图片地址"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="title"
                subtitle="{String}"
                description="中间部分。标题文字"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="subtitle"
                subtitle="{String}"
                description="中间部分。副标题文字"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="description"
                subtitle="{String}"
                description="中间部分。描述文字"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="value"
                subtitle="{String}"
                description="右侧部分。标题文字"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="supplement"
                subtitle="{String}"
                description="右侧部分。补充文字"
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
                '<BasePanel title="title" />',
                '<BasePanelItem title="title" />'
            ]
        }
    }
}
</script>
