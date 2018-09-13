<template>
    <app-view-box title="tab" :to="{ name: 'tabDemo' }" :code="code">
        <base-divider>tab 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="value"
                subtitle="{String}"
                description="选中相同name值的tab-item"
                value="---">
            </base-panel-item>
        </base-panel>

        <base-divider>tab-item 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="name"
                subtitle="{String}"
                description="唯一标识符"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="label"
                subtitle="{String}"
                description="标题文字"
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
                '<base-tab v-model="value"></base-tab>',
                '<base-tab-item><slot /></base-tab-item>'
            ]
        }
    }
}
</script>
