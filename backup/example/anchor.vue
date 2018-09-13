<template>
    <app-view-box title="锚点 demo">
        <base-button v-anchor="{ selector: '#target', step: 50 }" block>锚点</base-button>

        <pre style="height: 120vh;"></pre>

        <base-divider id="target">看到我啦</base-divider>

        <pre style="height: 120vh;"></pre>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
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
    //             title: '示例 anchor',
    //             link: location.href
    //         })
    //     })
    // }
}
</script>
