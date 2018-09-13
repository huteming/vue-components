<template>
    <app-view-box title="datepicker" :to="{ name: 'datepickerDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="visible"
                subtitle="{String}"
                description="是否显示。该值为双向绑定。组件内部会改变值"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="value"
                subtitle="{Date}"
                description="当前日期"
                value="new Date()">
            </base-panel-item>

            <base-panel-item
                title="type"
                subtitle="{enum} year, month, date"
                description="选择器类型"
                value="date">
            </base-panel-item>

            <base-panel-item
                title="start"
                subtitle="{Date}"
                description="限制开始日期"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="end"
                subtitle="{Date}"
                description="限制结束日期"
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
                '<BaseDatepicker :visible.sync="visible" v-model="value" />'
            ]
        }
    }
}
</script>
