<template>
    <app-view-box title="cell document" :to="{ name: 'cellDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="icon"
                subtitle="{String}"
                description="图标"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="label"
                subtitle="{String}"
                description="左侧标题"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="value"
                subtitle="{any}"
                description="右侧内容"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="to"
                subtitle="{any}"
                description="vue-router的参数"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="is-link"
                subtitle="{Boolean}"
                description="是否显示向右的箭头"
                value="false">
            </base-panel-item>
        </base-panel>

        <base-divider>插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="自定义内容">
            </base-panel-item>

            <base-panel-item
                title="icon"
                description="自定义图标">
            </base-panel-item>

            <base-panel-item
                title="label"
                description="自定义标题">
            </base-panel-item>

            <base-panel-item
                title="addon"
                description="自定义其他内容">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-cell label="label" value="value"></base-cell>'
            ]
        }
    }
}
</script>
