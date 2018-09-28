<template>
<div class="page-example">
    <div class="content" v-image-picker="handleLoad">点击选择</div>
    <img :src="image" alt="" style="max-width: 100%;" />

    <!-- <base-divider>压缩后</base-divider> -->
    <!-- <img :src="imageCompressed" alt="" style="max-width: 100%;" /> -->

    <!-- <button @click="disabled = !disabled">disabled</button> -->

    <div class="content" v-image-picker="{ onload: handleLoadMultiple, multiple: true, max: max }">多选，最多4张</div>
    <img v-for="(item, index) in images" :key="index" :src="item" alt="" style="max-width: 100%;" />
</div>
</template>

<script>
import { ImagePicker, Utils, Divider } from 'tommy-ui'
const { image } = Utils

export default {
    data () {
        return {
            image: '',
            imageCompressed: '',
            images: [],
            disabled: false,
        }
    },

    computed: {
        max () {
            return 4 - this.images.length
        },
    },

    methods: {
        handleLoad (dataURL) {
            this.image = dataURL

            // this.compress(dataURL)
        },
        handleLoadMultiple (images) {
            this.images.push(...images)
        },
        compress (dataURL) {
            image.compress(dataURL, { quality: 0.1, mimeType: 'image/png' })
                .then(({ file, width, height }) => {
                    console.log(width, height, file.size)
                    return image.preview(file)
                })
                .then(dataURL => {
                    this.imageCompressed = dataURL
                })
        },
    },

    mounted () {
    },

    components: {
        BaseDivider: Divider,
    },

    directives: {
        ImagePicker
    },
}
</script>

<style lang="scss" scoped>
.page-example {
    padding: 20px;
}

.content {
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #999;
}
</style>
