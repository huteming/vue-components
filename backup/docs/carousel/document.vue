<template>
    <app-view-box title="carousel" :to="{ name: 'carouselDemo' }" :code="code">
        <base-divider>carousel 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="height"
                subtitle="{String}"
                description="高度值"
                value="200px">
            </base-panel-item>

            <base-panel-item
                title="value"
                subtitle="{Number | String}"
                description="初始name值"
                value="0">
            </base-panel-item>

            <base-panel-item
                title="play"
                subtitle="{Boolean}"
                description="播放状态"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="interval"
                subtitle="{Number}"
                description="自动播放的时间间隔"
                value="3000">
            </base-panel-item>

            <base-panel-item
                title="vertical"
                subtitle="{Boolean}"
                description="是否垂直滚动"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="circular"
                subtitle="{Boolean}"
                description="是否循环滚动"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="skip"
                subtitle="{Boolean | Number}"
                description="动画是否连续。当设置为true是，动画不连续。设置为时间时，会有空白状态"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="disable-move"
                subtitle="{Boolean}"
                description="禁止 touchmove 事件"
                value="true">
            </base-panel-item>

            <base-panel-item
                title="disable-direction"
                subtitle="{Boolean}"
                description="禁止 touchmove 事件中判断方向"
                value="false">
            </base-panel-item>
        </base-panel>

        <base-divider>carousel item 属性</base-divider>

        <base-panel>
            <base-panel-item
                title="name"
                subtitle="{String}"
                description="为轮播项设置名字。如果不设置，则默认为 index 序号"
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
                '<base-carousel :play.sync="play" v-model="value"></base-carousel>',
                '<base-carousel-item><slot /></base-carousel-item>'
            ]
        }
    }
}
</script>
