<template>
<app-view-box title="dialog demo">
    <base-button @click="visibleDialog = true" block>open</base-button>

    <base-dialog :visible.sync="visibleDialog" close-position="bottom" @open="handleOpen" @closed="handleClose">
        <img src="~/apps-example/assets/images/dengken.jpg" alt="" class="image" />

        <base-button slot="footer" type="primary" @click="visibleDialog = false">确认</base-button>
    </base-dialog>
</app-view-box>
</template>

<script>
export default {
    data () {
        return {
            visibleDialog: false
        }
    },

    methods: {
        handleOpen () {
            this.$toast('open')
        },
        handleClose () {
            this.$toast('close')
        },
        handleBeforeClose (done) {
            this.$toast('waiting')
            setTimeout(done, 2000)
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    height: 200px;
    background: #fff;
    // border-radius: 8px;
    overflow: auto;
    // -webkit-overflow-scrolling: touch;
}

.image {
    display: block;
    width: 100%;
    border: none;
    height: 200px;
}

.test {
    background: pink;
}
</style>
