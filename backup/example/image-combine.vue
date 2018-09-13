<template>
    <app-view-box title="image-combine demo">
        <base-button @click="handleImageAdd" block>加载图片</base-button>

        <base-divider :loading="loading">图片一共有 {{ images.length }} 张</base-divider>

        <img alt="" v-image-combine="{ images, onload, onerror }" width="100%" ref="image" />
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            images: [],
            loading: false
        }
    },

    methods: {
        handleImageAdd () {
            this.loading = true
            setTimeout(() => {
                for (let i = 0; i < 15; i++) {
                    this.images.push('/static/images/big.png')
                    // this.$refs.image.dataset.images = this.images
                }
            }, 2000)
        },
        onload () {
            this.loading = false
            this.$toast('done')
        },
        onerror (errImagePath) {
            console.log(errImagePath)
        }
    },

    mounted () {
    }
}
</script>
