<template>
<app-view-box title="loadmore" :to="{ name: 'loadmoreDemo' }" :code="code">
    <base-divider>参数</base-divider>

    <base-panel>
        <base-panel-item
            title="disabled"
            subtitle="{Boolean}"
            description="是否禁用"
            value="false">
        </base-panel-item>
        <base-panel-item
            title="distance"
            subtitle="{Number}"
            description="触发的临界值"
            value="50">
        </base-panel-item>
        <base-panel-item
            title="distanceMax"
            subtitle="{Number}"
            description="组件显示的最大高度"
            value="70">
        </base-panel-item>
        <base-panel-item
            title="ratio"
            subtitle="{Number}"
            description="手指移动与组件移动距离的比值"
            value="1.5">
        </base-panel-item>
        <base-panel-item
            title="callback"
            subtitle="{Function*}"
            description="触发执行方法。第一个参数 done，需要执行后组件才会不显示"
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
            ]
        }
    }
}
</script>
