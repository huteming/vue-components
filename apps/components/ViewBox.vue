<template>
<base-viewbox :loadmore="loadmore">
    <base-navbar :title="title" slot="header">
        <base-button slot="left" type="text" icon="arrow-left" @click="$router.go(-1)" inline>返回</base-button>

        <base-button type="text" slot="right" @click="$router.push(to)" v-if="to" inline>
            <span>demo</span>
            <base-icon icon="arrow-right" style="margin-left: 5px;"></base-icon>
        </base-button>
    </base-navbar>

    <template v-if="code">
        <base-divider>基础用法</base-divider>
        <code v-if="code instanceof Array" v-for="(item, index) in code" :key="index">{{ item }}</code>
        <code v-else>{{ code }}</code>
    </template>

    <slot></slot>

    <div slot="fixed" v-if="$slots.fixed">
        <slot name="fixed"></slot>
    </div>
</base-viewbox>
</template>

<script>
import { Viewbox } from 'tommy-ui'

export default {
    name: 'AppViewbox',

    props: {
        title: {},
        /**
         * 不存在，认为是 demo 文件，demo就不显示 header 右边按钮
         */
        to: {},
        /**
         * 代码展示
         */
        code: [String, Array],
        loadmore: {}
    },

    components: {
        BaseViewbox: Viewbox
    }
}
</script>

<style lang="scss" scoped>
.content {
    min-height: 100%;
    // width: 100%;
    // height: 100%;
    background: #f6f6f6;
    box-sizing: border-box;
}

code {
    display: block;
    padding: 5px 20px;
    background: #fff;
}
</style>
