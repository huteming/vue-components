<template>
<div class="page-example">
    <base-button @click="handle1">normal</base-button>
    <base-button @click="handle2">timeout 1s</base-button>
    <base-button @click="handle5">vnode</base-button>
    <base-button @click="handlePosition">位置</base-button>
    <base-button @click="handle6">自定义icon</base-button>
    <base-button @click="handle7">长文字</base-button>
    <base-button @click="handleSuccess">success</base-button>
    <base-button @click="handleError">error</base-button>
    <base-button @click="handleWarning">warning</base-button>
    <base-button @click="handle3">{{ instance ? '关闭' : 'loading' }}</base-button>
</div>
</template>

<script>
import { Toast, Button } from 'tommy-ui'

export default {
    data () {
        return {
            instance: null
        }
    },

    methods: {
        handle1 () {
            Toast('hello normal')
        },
        handle2 () {
            Toast('timeout 1s', 1000)
        },
        handle3 () {
            if (!this.instance) {
                this.instance = Toast.loading()
            } else {
                this.instance.close()
                this.instance = null
            }
        },
        handle5 () {
            Toast(`<strong>这是 <i>HTML</i> 片段</strong>`)
        },
        handle6 () {
            Toast('自定义icon', 0, { icon: 'actionsheet', onClose () { console.log('close') } })
        },
        handle7 () {
            Toast('很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字')
        },
        handleSuccess () {
            Toast.success('hello world')
        },
        handleError () {
            Toast.error('hello world', 0)
        },
        handleWarning () {
            Toast.warning('hello world')
        },
        handlePosition () {
            Toast('提示信息', { position: 'top' })
        }
    },

    components: {
        BaseButton: Button
    }
}
</script>

<style lang="scss" module>
</style>
