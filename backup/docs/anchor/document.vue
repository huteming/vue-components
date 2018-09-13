<template>
<app-view-box title="锚点" :to="{ name: 'anchorDemo' }" :code="code">
    <base-divider>属性</base-divider>

    <base-panel title="参数为String时，作为selector">
        <base-panel-item
            title="selector"
            description="选择器参数"
            value="---">
        </base-panel-item>

        <base-panel-item
            title="step"
            subtitle="{String}"
            description="每次移动步长。越大，动效时间越短"
            value="50">
        </base-panel-item>
    </base-panel>
</app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<div v-anchor="{ selector: \'#target\', step: 50 }">点击</div>',
                '<div id="target">目标元素</div>'
            ]
        }
    },

    methods: {
    },

    created () {
    },

    mounted () {
    }

    // beforeRouteEnter (to, from, next) {
    //     next(vm => {
    //         vm.$tools.wx.share({
    //             title: '文档 anchor',
    //             link: location.href
    //         })
    //     })
    // }
}
</script>
