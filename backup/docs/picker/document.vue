<template>
    <app-view-box title="picker" :to="{ name: 'pickerDemo' }" :code="code">
        <base-divider>picker 属性</base-divider>

        <base-divider>picker item 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="options"
                subtitle="{Array<Object>} label, value对象数组"
                description="选项"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="value"
                subtitle="{any}"
                description="选中值"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="type"
                subtitle="{enum} line, cycle"
                description="滚动类型。cycle为无限滚动"
                value="line">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-picker> </base-picker>',
                '<base-picker-item :options="options" v-model="value"></base-picker-item>'
            ]
        }
    }
}
</script>
