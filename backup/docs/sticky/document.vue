<template>
    <app-view-box title="sticky" :to="{ name: 'stickyDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel title="参数是对象">
            <base-panel-item
                title="distance"
                subtitle="{Number}"
                description="距离顶部的位置"
                value="0">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<div class="sticky" v-sticky></div>'
            ]
        }
    }
}
</script>
