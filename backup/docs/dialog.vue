<template>
<app-view-box title="dialog" :to="{ name: 'DialogDemo' }" :code="code">
    <base-divider>属性</base-divider>

    <base-panel>
        <base-panel-item
            title="visible"
            subtitle="{Boolean}"
            description="是否显示 Dialog，支持 .sync 修饰符"
            value="---">
        </base-panel-item>

        <base-panel-item
            title="before-close"
            subtitle="{Function(done)}"
            description="关闭前的回调，会暂停 Dialog 的关闭。done 用于关闭 Dialog"
            value="---">
        </base-panel-item>

        <base-panel-item
            title="close-position"
            subtitle="{enum} out-right, out-left, in-right, in-left, bottom"
            description="关闭按钮的位置。空则不显示"
            value="---">
        </base-panel-item>

        <base-panel-item
            title="close-on-click-modal"
            subtitle="{Boolean}"
            description="点击模态框是否关闭"
            value="true">
        </base-panel-item>
    </base-panel>

    <base-divider>插槽</base-divider>

    <base-panel>
        <base-panel-item
            title="---"
            description="Dialog 的内容">
        </base-panel-item>

        <base-panel-item
            title="footer"
            description="Dialog 按钮操作区的内容">
        </base-panel-item>
    </base-panel>

    <base-divider>事件</base-divider>

    <base-panel>
        <base-panel-item
            title="open"
            description="Dialog 打开的回调">
        </base-panel-item>

        <base-panel-item
            title="close"
            description="Dialog 关闭的回调">
        </base-panel-item>

        <base-panel-item
            title="closed"
            description="Dialog 关闭动画结束时的回调">
        </base-panel-item>
    </base-panel>
</app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-dialog :visible.sync="visible"><slot /></base-dialog>'
            ]
        }
    }
}
</script>
