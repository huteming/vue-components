<template>
<div class="page-group">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'App',

    data () {
        return {
        }
    },

    watch: {
        // '$route': function () {
        //     const configWX = this.$route.meta && this.$route.meta.configWX

        //     this.$tools.wx.sign()
        //         .then(() => {
        //             if (configWX === 'hide' || !configWX) {
        //                 this.$tools.wx.hideMenuItems()
        //             }
        //         })
        //         .catch(err => {
        //             console.error(err)
        //         })
        // }
    },

    methods: {
    },

    mounted () {
        this.$tools.wx.saveURL(location.href)
    },
}
</script>

<style lang="scss">
body, html {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 26px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

html {
    font-size: calc(100vw / 7.5);
}

a {
    text-decoration: none;
}

.page-group {
    height: 100%;
}
</style>
