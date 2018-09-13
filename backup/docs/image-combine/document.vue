<template>
    <app-view-box title="合并图片" :to="{ name: 'imageCombineDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel title="参数为Function时，作为onload。为Array时，作为images">
            <base-panel-item
                title="images"
                subtitle="{Array}"
                description="图片地址。该参数也可以通过dataset传递"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="onload"
                subtitle="{Function}"
                description="正确执行完的回调函数"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="onerror"
                subtitle="{Function}"
                description="错误的回调函数，参数为发生错误的图片地址"
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
                '<img alt="" data-images="images" v-image-combine="{ images, onload, onerror }" />'
            ]
        }
    }
}
</script>
