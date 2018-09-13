<template>
    <app-view-box title="loading demo">
        <base-button @click="handleClick">打开</base-button>
        <base-button @click="handleClose">关闭</base-button>
    </app-view-box>
</template>

<script>
export default {
    methods: {
        handleClick () {
            // this.$loading.show()
            // this.$loading.show('很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字')
            this.$loading.show('hello world')
        },
        handleClose () {
            this.$loading.hide()
        }
    }
}
</script>
