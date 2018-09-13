<template>
    <app-view-box title="message demo">
        <base-button @click="handleAlert" block>alert</base-button>
        <base-button @click="handleConfirm" block>confirm</base-button>
        <base-button @click="handlePrompt" block>prompt</base-button>
    </app-view-box>
</template>

<script>
export default {
    methods: {
        handleAlert () {
            this.$message.alert(`
                <img src="http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg" width="100" height="100" />
            `, '')
                .then(action => console.log('confirm', action))
        },
        handleConfirm () {
            this.$message.confirm('确定执行此操作?', '')
                .then(action => console.log('confirm', action))
                .catch(action => console.log('cancel', action))
        },
        handlePrompt () {
            this.$message.prompt('', '请输入')
                .then(value => console.log('confirm', value))
        }
    }
}
</script>
