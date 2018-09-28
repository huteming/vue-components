<template>
<div class="page-example">
    <div class="container">
        <img :src="image" alt="" style="width: 100%; display: block;" />
    </div>
</div>
</template>

<script>
import { Utils, Constructors } from 'tommy-ui'
const { image } = Utils
const { Canvas } = Constructors

const ImgTime = 'https://api.jinghao.com/getImages/wxjhsyimages/tip-01.png'
const ImgAvatar = 'http://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKoIvWhsa7vfhaqYMu3SiaLxakMrXm7jqkexeA8dcHu9pVWradOSpxaEmTJSicr95yvD5Xk7iaqNBUZw/132'
const ImgCover = 'https://api.jinghao.com/getImages/FiqP8Z7S5FZNdYuwc422Ksu-xXW7'
const ImgQrcode = 'https://api.jinghao.com/getImages/FjKoX0lUYhvLi8TzCQ6Mx0cwPPiu'

export default {
    data () {
        return {
            image: ''
        }
    },

    methods: {
        draw () {
            return image.load([ImgTime, ImgAvatar, ImgCover, ImgQrcode])
                .then(([imgTime, imgAvatar, imgCover, imgQrcode]) => {
                    const instance = new Canvas(480, 854)

                    // 背景
                    instance.use(() => {
                        instance.drawRect(0, 0, 480, 854)
                    })

                    // 问候语
                    instance.use(() => {
                        instance.drawImage(imgTime, 24, 34, 88, 48)
                        instance.drawText('我在静好书院读书', 24, 93, { color: 'RGBA(153, 153, 153, 1)', size: 12 })
                    })

                    // 头像
                    instance.use(({ context }) => {
                        instance.drawArc(400, 84, 20)
                        context.clip()
                        instance.drawImage(imgAvatar, 400, 84, 40, 40)
                    })

                    // 封面
                    instance.use(() => {
                        instance.drawImage(imgCover, 24, 158, 430, 504)
                    })

                    // 二维码
                    instance.use(() => {
                        instance.drawImage(imgQrcode, 350, 706, 104, 104)
                    })

                    // tips
                    instance.use(() => {
                        instance.drawText('识别二维码和我一起读书', 24, 780, { color: 'RGBA(153, 153, 153, 1)', size: 10 })
                    })

                    return instance.done()
                })
        }
    },

    mounted () {
        this.draw()
            .then(image => {
                this.image = image
            })
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 240px;
    margin: 0 auto;
    padding: 20px;
}
</style>
