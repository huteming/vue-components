<template>
<div class="page-example">
    <img src="https://api.jinghao.com/getImages/FiqP8Z7S5FZNdYuwc422Ksu-xXW7" crossorigin="anonymous" alt="" style="max-width: 100%;" ref="image" />
    <button @click="convert">start</button>
    <!-- <input type="file" name="" id="" @change="handleFileChange" /> -->
</div>
</template>

<script>
import { Constructors } from 'tommy-ui'
const { ImageConvertor } = Constructors

export default {
    data () {
        return {
            cover: 'https://api.jinghao.com/getImages/FiqP8Z7S5FZNdYuwc422Ksu-xXW7',
        }
    },

    methods: {
        getURL () {
            return this.cover
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
            // const instance = new ImageConvertor(this.getCanvas())
            // const instance = new ImageConvertor(this.getDataURL())
            // const instance = new ImageConvertor(this.getImage())
            // const instance = new ImageConvertor(file)
            // const instance = new ImageConvertor(this.getURL())

            const instance = new ImageConvertor([this.getURL()])

            instance.getImage()
                .then(res => {
                    console.log(res)
                })

            instance.getDataURI()
                .then(res => {
                    console.log(res)
                })

            instance.getFile()
                .then(res => {
                    console.log(res)
                })

            instance.getCanvas()
                .then(res => {
                    console.log(res)
                })
        }
    },
}
</script>
