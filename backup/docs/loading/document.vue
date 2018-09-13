<template>
    <app-view-box title="loading" :to="{ name: 'loadingDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel title="参数为String时，作为message">
            <base-panel-item
                title="message"
                subtitle="{String}"
                description="提示的文字"
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
                'this.$loading.show(hello world)',
                'this.$loading.hide()'
            ]
        }
    }
}
</script>
