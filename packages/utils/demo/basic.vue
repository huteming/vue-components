<template>
<div class="page-example">
    <img :src="cover" alt="" style="max-width: 100%;" />
    <img :src="qrcode" alt="" style="max-width: 100%;" />

    <!-- <img src="https://api.jinghao.com/getImages/FiqP8Z7S5FZNdYuwc422Ksu-xXW7" crossorigin="anonymous" alt="" style="max-width: 100%;" ref="image" /> -->
    <!-- <img :src="imgExchange" alt="" /> -->
    <!-- <button @click="convert">start</button> -->
    <!-- <input type="file" name="" id="" @change="handleFileChange" /> -->
</div>
</template>

<script>
import { Utils, Toast } from 'tommy-ui'
const { image } = Utils

const ImgCover = 'https://api.jinghao.com/getImages/FiqP8Z7S5FZNdYuwc422Ksu-xXW7'
const ImgQrcode = 'https://api.jinghao.com/getImages/FjKoX0lUYhvLi8TzCQ6Mx0cwPPiu'

export default {
    data () {
        return {
            cover: '',
            qrcode: '',
            imgExchange: '',
        }
    },

    methods: {
        load () {
            image.load([ImgCover, ImgQrcode])
                .then(([imgCover, imgQrcode]) => {
                    this.cover = ImgCover
                    this.qrcode = ImgQrcode
                })
                .then(() => {
                    Toast('加载完成')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getImage () {
            return this.$refs.image
        },
        getCanvas () {
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')
            canvas.width = 200
            canvas.height = 200
            context.drawImage(this.getImage(), 0, 0, 200, 200)

            return canvas
        },
        getDataURL () {
            return this.getCanvas().toDataURL('image/png')
        },
        handleFileChange (event) {
            const files = Array.from(event.target.files)
            this.convert(files[0])
            event.target.value = ''
        },
        convert (file) {
            // image.convert(this.getCanvas(), 'canvas', 'dataURL')
            // image.convert(this.getCanvas(), 'canvas', 'image')
            // image.convert(this.getCanvas(), 'canvas', 'file')

            // image.convert(this.getDataURL(), 'dataURL', 'canvas')
            // image.convert(this.getDataURL(), 'dataURL', 'image')
            // image.convert(this.getDataURL(), 'dataURL', 'file')

            // image.convert(this.getImage(), 'image', 'canvas')
            // image.convert(this.getImage(), 'image', 'dataURL')
            // image.convert(this.getImage(), 'image', 'file')

            // image.convert(file, 'file', 'canvas')
            // image.convert(file, 'file', 'dataURL')
            // image.convert(file, 'file', 'image')

            image.convert(ImgCover, 'url', 'image')
                .then(res => {
                    console.log(res)
                    // this.imgExchange = res
                    this.$el.appendChild(res)
                })
        }
    },

    mounted () {
        this.load()
    }
}
</script>
