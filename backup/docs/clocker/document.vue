<template>
    <app-view-box title="clocker document" :to="{ name: 'clockerDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="start-time"
                subtitle="{String, Number, Date}"
                description="开始时间"
                value="now">
            </base-panel-item>

            <base-panel-item
                title="end-time"
                subtitle="{String, Number, Date}"
                description="结束时间"
                value="0">
            </base-panel-item>

            <base-panel-item
                title="format"
                subtitle="{String}"
                description="显示格式"
                value="D 天 H 时 M 分 S">
            </base-panel-item>
        </base-panel>

        <base-divider>插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="自定义内容。参数 whole[String], days[Number], hours[Number], minutes[Number], seconds[Number]">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<BaseClocker end-time="endTime" />'
            ]
        }
    }
}
</script>
