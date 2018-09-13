<template>
<app-view-box title="popup" :to="{ name: 'PopupDemo' }" :code="code">
    <base-divider>属性</base-divider>

    <base-panel>
        <base-panel-item
            title="visible"
            subtitle="{Boolean}"
            description="是否显示 Popup，支持 .sync 修饰符"
            value="false">
        </base-panel-item>

        <base-panel-item
            title="width"
            subtitle="{String}"
            description="width值。设置显示宽度"
            value="80%">
        </base-panel-item>

        <base-panel-item
            title="height"
            subtitle="{String}"
            description="height值。设置显示高度"
            value="auto">
        </base-panel-item>

        <base-panel-item
            title="before-close"
            subtitle="{Function(done)}"
            description="关闭前的回调，会暂停 Popup 的关闭。done 用于关闭 Popup"
            value="---">
        </base-panel-item>

        <base-panel-item
            title="position"
            subtitle="{enum} top, bottom, left, right"
            description="显示位置"
            value="bottom">
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
            description="Popup 的内容">
        </base-panel-item>
    </base-panel>

    <base-divider>事件</base-divider>

    <base-panel>
        <base-panel-item
            title="open"
            description="打开的回调">
        </base-panel-item>

        <base-panel-item
            title="close"
            description="关闭的回调">
        </base-panel-item>

        <base-panel-item
            title="closed"
            description="关闭动画结束时的回调">
        </base-panel-item>
    </base-panel>
</app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-popup :visible.sync="visible"><slot /></base-popup>'
            ]
        }
    }
}
</script>
