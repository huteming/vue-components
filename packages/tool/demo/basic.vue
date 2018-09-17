<template>
<div class="page-example">
    <img :src="avatar" alt="" style="max-width: 100%;" />
    <img :src="cover" alt="" style="max-width: 100%;" />
    <img :src="qrcode" alt="" style="max-width: 100%;" />
</div>
</template>

<script>
import { utils, Toast } from 'tommy-ui'
const { loadImages } = utils

const ImgAvatar = 'http://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKoIvWhsa7vfhaqYMu3SiaLxakMrXm7jqkexeA8dcHu9pVWradOSpxaEmTJSicr95yvD5Xk7iaqNBUZw/132'
const ImgCover = 'https://api.jinghao.com/getImages/FiqP8Z7S5FZNdYuwc422Ksu-xXW7'
const ImgQrcode = 'https://api.jinghao.com/getImages/FjKoX0lUYhvLi8TzCQ6Mx0cwPPiu'

export default {
    data () {
        return {
            avatar: '',
            cover: '',
            qrcode: ''
        }
    },

    methods: {
        load () {
            loadImages(ImgAvatar, ImgCover, ImgQrcode)
                .then(([imgAvatar, imgCover, imgQrcode]) => {
                    this.avatar = ImgAvatar
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
