<template>
<div class="page-example">
    <img :src="cover" alt="" style="max-width: 100%;" />
    <img :src="qrcode" alt="" style="max-width: 100%;" />
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
            qrcode: ''
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
        }
    },

    mounted () {
        this.load()
    }
}
</script>
