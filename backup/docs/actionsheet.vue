<template>
<app-view-box title="actionsheet" :to="{ name: 'ActionsheetDemo' }" :code="code">
    <base-divider>属性</base-divider>

    <base-panel title="参数为Array时，作为menus">
        <base-panel-item
            title="menus"
            subtitle="Array"
            description="label, value的对象数组"
            value="[]">
        </base-panel-item>

        <base-panel-item
            title="cancelText"
            subtitle="String"
            description="取消按钮文本，空为不显示"
            value="取消">
        </base-panel-item>

        <base-panel-item
            title="closeOnClickModal"
            subtitle="Boolean"
            description="点击模态框是否关闭"
            value="true">
        </base-panel-item>
    </base-panel>

    <base-divider>返回</base-divider>

    <base-panel>
        <base-panel-item
            title="promise"
            description="resolve(menus中对应的value值), reject()">
        </base-panel-item>
    </base-panel>
</app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                'this.$actionsheet({ menus })'
            ]
        }
    },

    methods: {
    }
}
</script>
