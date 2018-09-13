<template>
    <app-view-box title="image-picker" :to="{ name: 'imagePickerDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="value"
                subtitle="{Array}"
                description="图片数组 files"
                value="[]">
            </base-panel-item>

            <base-panel-item
                title="multiple"
                subtitle="{Boolean}"
                description="是否多选"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="max"
                subtitle="{Number}"
                description="最多选择几张图片"
                value="---">
            </base-panel-item>
        </base-panel>

        <base-divider>插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="图片占位。参数 images <Array>">
            </base-panel-item>

            <base-panel-item
                title="selector"
                description="选择框占位">
            </base-panel-item>
        </base-panel>

        <base-divider>事件</base-divider>

        <base-panel>
            <base-panel-item
                title="select"
                description="等同于点击选择框">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<base-image-picker v-model="files">'
            ]
        }
    }
}
</script>
