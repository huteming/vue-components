<template>
<div class="page-example">
    <base-button @click="visibleDialog = true">open</base-button>

    <base-dialog v-model="visibleDialog" close-position="bottom" :before-close="handleBeforeClose" @closed="handleClosed">
        <img src="~/apps-example/assets/images/dengken.jpg" alt="" class="image" />

        <base-button slot="footer" type="primary" @click="visibleDialog = false">确认</base-button>
    </base-dialog>
</div>
</template>

<script>
import { Button as BaseButton, Dialog as BaseDialog, Toast } from 'tommy-ui'

export default {
    data () {
        return {
            visibleDialog: false
        }
    },

    methods: {
        handleOpen () {
            Toast('open')
        },
        handleClose () {
            Toast('close')
        },
        handleClosed () {
            Toast('closed')
        },
        handleBeforeClose (done) {
            Toast('close 2s later')
            setTimeout(done, 2000)
        }
    },

    components: {
        BaseButton,
        BaseDialog
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
