<template>
    <app-view-box title="infinite-scroll" :to="{ name: 'infiniteScrollDemo' }" :code="code">
        <bae-divider>属性</bae-divider>

        <base-panel title="参数为Function时，作为callback">
            <base-panel-item
                title="callback"
                subtitle="{Function}"
                description="到达底部时触发事件"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="distance"
                subtitle="{Number}"
                description="距离底部多少px时触发事件"
                value="50">
            </base-panel-item>

            <base-panel-item
                title="timeout"
                subtitle="{Number}"
                description="多少事件内只会触发一次"
                value="1000">
            </base-panel-item>

            <base-panel-item
                title="disabled"
                subtitle="{Boolean}"
                description="禁用"
                value="false">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<div v-infinite-scroll="{ callback }">'
            ]
        }
    }
}
</script>
