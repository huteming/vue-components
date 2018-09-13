<template>
    <app-view-box title="row" :to="{ name: 'rowDemo' }" :code="code">
        <base-divider>row 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="gutter"
                subtitle="{Number}"
                description="间隔"
                value="8">
            </base-panel-item>

            <base-panel-item
                title="justify"
                subtitle="{String}"
                description="同justify-content属性"
                value="flex-start">
            </base-panel-item>

            <base-panel-item
                title="align"
                subtitle="{String}"
                description="同align-items属性"
                value="stretch">
            </base-panel-item>
        </base-panel>

        <base-divider>col 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="span"
                subtitle="{enum} 0: 自动分配剩余空间, 1 ~ 12: 12份中占有空间格数"
                description="为空时，占原始大小，不放大也不缩小"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="offset"
                subtitle="{enum} 0~11"
                description="左侧的间隔格数"
                value="0">
            </base-panel-item>
        </base-panel>

        <base-divider>col 插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="显示内容">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return [
            '<base-row :gutter="15"></base-row>',
            '<base-col :span="3"><slot /></base-col>'
        ]
    }
}
</script>
