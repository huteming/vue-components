<template>
<app-view-box title="view-box" :to="{ name: 'viewBoxDemo' }" :code="code">
    <base-divider>属性</base-divider>

    <base-panel>
        <base-panel-item
            title="fit"
            subtitle="{enum} fill, contain"
            value="fill"
            description="容器适配方式。fill为填满，contain为保持宽高比">
        </base-panel-item>
        <base-panel-item
            title="justify"
            subtitle="{enum} start, center, end"
            value="center"
            description="当fit为contain时,容器横向摆放位置">
        </base-panel-item>
        <base-panel-item
            title="align"
            subtitle="{enum} start, center, end"
            value="center"
            description="当fit为contain时,容器纵向摆放位置">
        </base-panel-item>
        <base-panel-item
            title="loadmore"
            subtitle="{Object | Function}"
            value="---"
            description="下拉刷新配置">
        </base-panel-item>
    </base-panel>

    <base-divider>事件</base-divider>

    <base-panel>
        <base-panel-item
            title="scroll"
            subtitle="{event}"
            description="滚动事件">
        </base-panel-item>
    </base-panel>

    <base-divider>方法</base-divider>

    <base-panel>
        <base-panel-item
            title="scrollTo"
            description="滚动到指定位置">
        </base-panel-item>
        <base-panel-item
            title="getScrollTop"
            description="获取滚动距离；注意：滚动过程中这个返回值可能并不准确">
        </base-panel-item>
        <base-panel-item
            title="getScrollBody"
            description="获取滚动区域dom">
        </base-panel-item>
    </base-panel>

    <base-divider>插槽</base-divider>

    <base-panel>
        <base-panel-item
            title="default"
            description="内容区域，可滚动">
        </base-panel-item>

        <base-panel-item
            title="header"
            description="顶部固定区域">
        </base-panel-item>

        <base-panel-item
            title="footer"
            description="底部固定区域">
        </base-panel-item>

        <base-panel-item
            title="fixed"
            description="独立的元素。建议放一些绝对定位元素">
        </base-panel-item>
    </base-panel>
</app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-view-box><slot /></base-view-box>'
            ]
        }
    }
}
</script>
