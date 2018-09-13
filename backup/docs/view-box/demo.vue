<template>
<base-view-box fit="fill" @scroll="handleScroll" ref="viewbox">
    <base-header title="标题" slot="header">
        <base-button type="text" icon="arrow-left" @click="$router.push({ name: 'viewBox' })" slot="left" inline>返回</base-button>
    </base-header>

    <div style="height: 100%; background: pink; text-align: center;">
        <h1 style="margin: 0;">百分百高度</h1>
        <base-button @click="$refs.viewbox.scrollTo(26)">滚动</base-button>
        <base-button @click="handleGetScroll">获取滚动距离</base-button>
        <base-button @click="handleGetContent">获取滚动区域dom</base-button>
    </div>

    <base-divider>开始</base-divider>
    <base-button>按钮</base-button>
    <div v-for="item in 100" :key="item">{{ item }}</div>
    <base-divider>结束</base-divider>

    <div slot="footer">
        <base-header title="标题"></base-header>
    </div>

    <div class="test-absolute" style="" slot="fixed">
        <base-button icon="toast" circle></base-button>
    </div>
</base-view-box>
</template>

<script>
export default {
    data () {
        return {
            test: ''
        }
    },

    methods: {
        handleScroll (event) {
            console.log(event)
        },
        handleGetScroll () {
            alert(this.$refs.viewbox.getScrollTop())
        },
        handleGetContent () {
            console.log(this.$refs.viewbox.getScrollBody() === this.$refs.viewbox.$refs.content)
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    height: 500px;
}

.test-absolute {
    position: absolute;
    bottom: 60px;
    right: 30px;
}
</style>
