<template>
<div class="page">
    <base-button @click="handleCinfig">config</base-button>
    <base-button @click="handleAlert">alert</base-button>
    <base-button @click="handleConfirm">confirm</base-button>
    <base-button @click="handlePrompt">prompt</base-button>
</div>
</template>

<script>
import { Message, Button } from 'tommy-ui'

export default {
    methods: {
        handleCinfig () {
            Message({
                title: 'Welcome',
                message: '欢迎使用 Ant Design ！！',

                confirmButtonText: '知道了',
                confirmButtonHighlight: true,

                showCancelButton: true,
                cancelButtonText: 'cancel',
                cancelButtonHighlight: true,

                showInput: true,
                inputType: 'password',
                inputValue: 'password',
                inputPlaceholder: 'password',

                // beforeClose (data, done) {
                //     console.log(data)
                //     setTimeout(done, 1500)
                // },
                closeOnClickModal: true
            })
                .then(res => {
                    console.log(res)
                })
                .catch(res => {
                    console.log(res)
                })
        },
        handleAlert () {
            Message.alert(`
                <img src="http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg" width="100" height="100" />
            `, '')
                .then(res => {
                    console.log(res)
                })
        },
        handleConfirm () {
            Message.confirm('确定执行此操作?', '')
                .then(res => {
                    console.log(res)
                })
                .catch(res => {
                    console.log(res)
                })
        },
        handlePrompt () {
            Message.prompt('', '请输入')
                .then(res => {
                    console.log(res)
                })
                .catch(res => {
                    console.log(res)
                })
        }
    },

    components: {
        BaseButton: Button
    }
}
</script>

<style lang="scss" scoped>
</style>
