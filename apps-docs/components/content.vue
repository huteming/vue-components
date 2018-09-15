<template>
<el-scrollbar class="content scrollable" :wrap-class="$style['container-scrollable']">
    <h1 class="markdown-header">
        <template v-if="isComponent">
            <span>{{ meta.english }} {{ meta.chinese }}</span>
            <i class="iconfont icon-qrcode markdown-header-icon" v-popover:qrcode></i>

            <el-popover
                ref="qrcode"
                placement="bottom"
                width="100"
                trigger="hover">
                <img :src="qrcodeImg" alt="" width="100%" height="100%" />
            </el-popover>
        </template>

        <template v-else>
            {{ meta.title }}
        </template>
    </h1>

    <router-view></router-view>
</el-scrollbar>
</template>

<script>
import Qrcode from '../assets/js/qrcode.js'

export default {
    props: {
        isComponent: Boolean
    },

    data () {
        return {
            qrcodeImg: ''
        }
    },

    computed: {
        meta () {
            return this.$route.meta
        },
        examplePath () {
            const { origin, pathname } = location

            return `${origin}${pathname}#${this.$route.path.replace('docs', 'example')}`
        }
    },

    watch: {
        '$route': {
            handler: 'updateQrcode',
            immediate: true
        }
    },

    methods: {
        updateQrcode () {
            const qrcodeDom = new Qrcode({
                render: 'canvas',
                text: this.examplePath
            })

            this.qrcodeImg = qrcodeDom.toDataURL('image/jpeg', 1.0)
        }
    }
}
</script>

<style lang="scss" scoped>
.scrollable {
    height: 100%;
}

.markdown-header {
    display: flex;
    align-items: center;

    &-icon {
        position: relative;
        margin-left: 12px;
        color: #ddd;
        transition: color .3s;

        &:hover {
            color: #2db7f5;
        }
    }
}
</style>

<style lang="scss" module>
.container {
    &-scrollable {
        padding: 10px 20px 40px;
        box-sizing: border-box;
        overflow-x: auto;
    }
}
</style>
