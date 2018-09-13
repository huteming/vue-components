<template>
    <app-view-box title="radio" :to="{ name: 'radioDemo' }" :code="code">
        <base-divider>radio 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="title"
                subtitle="{String}"
                description="标题文字"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="value"
                subtitle="{any}"
                description="radio选中值"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="display"
                subtitle="{Boolean}"
                description="是否仅作为展示用"
                value="false">
            </base-panel-item>
        </base-panel>

        <base-divider>radio item 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="value"
                subtitle="{any}"
                description="单独使用时，radio选中值"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="checked"
                subtitle="{any}"
                description="选中值"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="disabled"
                subtitle="{Boolean}"
                description="是否禁用"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="display"
                subtitle="{Boolean}"
                description="是否仅作为展示"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="radio-type"
                subtitle="{enum} simple, circle"
                description="选中按钮样式"
                value="simple">
            </base-panel-item>

            <base-panel-item
                title="radio-position"
                subtitle="{enum} left, right"
                description="选中按钮位置"
                value="right">
            </base-panel-item>

            <base-panel-item
                title="theme-color"
                subtitle="{String}"
                description="主题色。主要影响的是: 选择框颜色样式"
                value="#26a2ff">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-radio v-model="value"></base-radio>',
                '<base-radio-item :checked="checked"><slot /></base-radio-item>'
            ]
        }
    }
}
</script>
