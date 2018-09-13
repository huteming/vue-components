<template>
<base-viewbox fit="fill" ref="viewbox">
    <base-navbar title="固定头部" slot="header"></base-navbar>

    <div v-for="item in 100" :key="item">{{ item }}</div>

    <base-navbar title="固定底部" slot="footer"></base-navbar>

    <div class="test-absolute" style="" slot="fixed">+</div>
</base-viewbox>
</template>

<script>
import { Viewbox as BaseViewbox, Navbar as BaseNavbar, Button as BaseButton } from 'tommy-ui'

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
    },

    components: {
        BaseViewbox,
        BaseNavbar,
        BaseButton
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
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 50%;
    background-color: lightblue;
}
</style>
