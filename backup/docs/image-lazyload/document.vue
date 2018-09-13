<template>
    <app-view-box title="lazyload" :to="{ name: 'imageLazyloadDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel title="参数为String时，作为selector">
            <base-panel-item
                title="selector"
                subtitle="{String}"
                description="监听得dom选择器。为空代表自身"
                value="---">
            </base-panel-item>
        </base-panel>

        <base-divider>事件</base-divider>

        <base-panel>
            <base-panel-item
                title="onload"
                description="参数: 加载完成的dom">
            </base-panel-item>

            <base-panel-item
                title="onerror"
                description="参数: 加载失败的dom">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<img v-image-lazyload="selector" />'
            ]
        }
    },

    mounted () {
    }
}
</script>
