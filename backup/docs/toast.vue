<template>
<app-view-box title="toast" :to="{ name: 'ToastDemo' }" :code="code">
    <base-divider>属性</base-divider>

    <base-panel>
        <base-panel-item
            title="message"
            subtitle="{String}"
            description="显示文本"
            value="---">
        </base-panel-item>

        <base-panel-item
            title="duration"
            subtitle="{Number}"
            description="显示时间, 毫秒。设为 0 则不会自动关闭"
            value="3000">
        </base-panel-item>

        <base-panel-item
            title="icon"
            subtitle="{String}"
            description="自定义图标的类名"
            value="---">
        </base-panel-item>

        <base-panel-item
            title="position"
            subtitle="{anum} top, middle, bottom"
            description="显示位置。top: 50px; bottom: 50px;"
            value="middle">
        </base-panel-item>

        <base-panel-item
            title="onClose"
            subtitle="{Function}"
            description="关闭时的回调函数"
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
                'this.$toast(\'hello\')',
                'this.$toast.success(\'hello\')',
                'this.$toast.error(\'hello\')',
                'this.$toast.warning(\'hello\')',
                'this.$toast.loading(\'hello\')'
            ]
        }
    }
}
</script>
