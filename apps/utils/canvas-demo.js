import Canvas, { loadImages } from 'utils/canvas.js'

export default (avatar, cover, qrcode, nickname, price) => {
    return loadImages(avatar, cover)
        .then(([avatar, cover]) => {
            const instance = new Canvas(670, 1052)

            // 背景
            instance.use(() => instance.drawRect(0, 0, 670, 1052))
            // 头像
            instance.use(() => instance.drawImage(avatar, 266, 48, 140, 140, { x: 336, y: 118, r: 70 }))
            // 描述文字
            instance.use(() => {
                const options = { weight: 'bold', size: 34, align: 'center', color: 'RGBA(0, 0, 0, 1)', suffix: '送你了一张课程学习卡', maxWidth: 540 }
                // instance.drawText('一二三四五六', 670 / 2, 260, options)
                instance.drawText(nickname, 670 / 2, 260, options)
            })
            // 小课封面
            instance.use(() => instance.drawImage(cover, 40, 332, 590, 398, { x: 40, y: 332, width: 590, height: 398, r: 7 }))
            // 二维码
            instance.use(() => instance.drawImage(qrcode, 40, 792, 200, 200))
            // 领取提示
            instance.use(() => {
                const options = { weight: 'bold', size: 40, color: 'RGBA(255, 84, 5, 1)' }
                instance.drawText('扫码立即免费领取', 268, 792, options)
                instance.drawText('课程', 268, 850, options)
            })
            // 价格
            instance.use(() => {
                instance.drawText(`原价：￥${price}`, 272, 992, { weight: 'bold', size: 34, baseline: 'bottom' })
                instance.drawLine(268, 972, 468, 972, { width: 2 })
            })

            return instance.done()
        })
}
