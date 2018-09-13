<template>
    <app-view-box title="checkbox" :to="{ name: 'checkboxDemo' }" :code="code">
        <base-divider>checkbox 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="title"
                subtitle="{string}"
                description="多选列表标题"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="value"
                subtitle="{Array}"
                description="多选框值"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="max"
                subtitle="{Number}"
                description="限制最多选择"
                value="0">
            </base-panel-item>
        </base-panel>

        <base-divider>checkbox item 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="checked"
                subtitle="{any}"
                description="该多选框选中值"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="disabled"
                subtitle="{Boolean}"
                description="禁用状态"
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
                '<base-checkbox title="title" v-model="value"></base-checkbox>',
                '<base-checkbox-item :checked="checked">文字</base-checkbox-item>'
            ]
        }
    }
}
</script>
