<template>
    <app-view-box title="card" :to="{ name: 'cardDemo' }" :code="code">
        <base-divider>插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="内容区域。没有内边距">
            </base-panel-item>

            <base-panel-item
                title="header"
                description="顶部区域。内边距 10px 20px 7px 20px">
            </base-panel-item>

            <base-panel-item
                title="footer"
                description="底部区域。内边距 20px">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-card></base-card>'
            ]
        }
    }
}
</script>
