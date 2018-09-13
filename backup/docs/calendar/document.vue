<template>
    <app-view-box title="calendar" :to="{ name: 'calendarDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="events"
                subtitle="{Array<Object>} date（例2018-06-08），sign(primary, warning)标记状态"
                description="需要标记的日期。该对象会包含在点击对应日期事件参数对象中"
                value="---">
            </base-panel-item>
        </base-panel>

        <base-divider>事件</base-divider>

        <base-panel>
            <base-panel-item
                title="click"
                subtitle="{Object}"
                description="对应的event对象">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<BaseDatepicker :events="events" />'
            ]
        }
    }
}
</script>
