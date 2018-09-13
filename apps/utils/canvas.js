/**
 * @argument {*Number} width 设计稿上画布宽度
 * @argument {*Number} height 设计稿上画布高度
 * 
 * @argument {Number} designWidth 设计稿标准宽度
 */
export default class Canvas {
    constructor (width, height, { designWidth = 750 } = {}) {
        const { context, canvas, canvasWidth, canvasHeight, ratio } = getCanvasObject(width, height, designWidth)

        this.context = context
        this.ratio = ratio
        this.canvas = canvas
        this.canvasWidth = canvasWidth // 画布宽度
        this.canvasHeight = canvasHeight // 画布高度

        this.use = this.use.bind(this)
        this.done = this.done.bind(this)

        this.drawArc = this.drawArc.bind(this)
        this.drawRect = this.drawRect.bind(this)
        this.drawText = this.drawText.bind(this)
        this.drawLine = this.drawLine.bind(this)
        this.drawImage = this.drawImage.bind(this)
    }

    use (callback) {
        const self = {
            context: this.context,
            ratio: this.ratio,
            canvas: this.canvas,
            width: this.canvasWidth,
            height: this.canvasHeight
        }

        console.log('use')
        this.context.save()

        callback.call(self, self)

        this.context.restore()
        console.log('use end')
    }

    done () {
        console.log('done')
        return this.canvas.toDataURL('image/jpeg', 1.0)
    }

    // helpers ----------------------------------------
    /**
     * @argument {*Number} x 圆心x坐标
     * @argument {*Number} y 圆心y坐标
     * @argument {*Number} r 半径
     *
     * @argument {Number} startDegrees 开始角度
     * @argument {Number} endDegrees 结束角度
     * @argument {Boolean} direction 方向。false: 顺时针, true: 逆时针
     * @argument {String} type 闭合方式 stroke, fill
     */
    drawArc (x, y, r, { startDegrees = 0, endDegrees = 360, direction = false, type = 'stroke', color = '#fff' } = {}) {
        console.log('draw arc')
        const { context, ratio } = this
        const radians= Math.PI / 180

        x *= ratio
        y *= ratio
        r *= ratio

        context[`${type}Style`] = color
        context.beginPath()
        context.arc(x, y, r, radians * startDegrees, radians * endDegrees, direction)
        context[type]()
    }

    /**
     * @argument {*Number} x 矩形左上角 x 坐标
     * @argument {*Number} y 矩形左上角 y 坐标
     * @argument {*Number} width 绘制宽度
     * @argument {*Number} height 绘制高度
     * @argument {Number} r 圆角半径
     *
     * @argument {String} type 闭合方式 stroke, fill
     * @argument {String} color 填充颜色
     */
    drawRect (x, y, width, height, r = 0, { type = 'fill', color = '#fff' } = {}) {
        console.log('draw rect')
        const { context, ratio } = this

        x *= ratio
        y *= ratio
        width *= ratio
        height *= ratio
        r *= ratio
    
        const ptA = { x: x + r, y: y }
        const ptB = { x: x + width, y: y }
        const ptC = { x: x + width, y: y + height }
        const ptD = { x: x, y: y + height }
        const ptE = { x: x, y: y }
    
        context[`${type}Style`] = color
        context.beginPath()
        context.moveTo(ptA.x, ptA.y)
        context.arcTo(ptB.x, ptB.y, ptC.x, ptC.y, r)
        context.arcTo(ptC.x, ptC.y, ptD.x, ptD.y, r)
        context.arcTo(ptD.x, ptD.y, ptE.x, ptE.y, r)
        context.arcTo(ptE.x, ptE.y, ptA.x, ptA.y, r)
        context[type]()
    }

    /**
     * @argument {*String} text 文本
     * @argument {*Number} x x 坐标
     * @argument {*Number} y y 坐标
     *
     * @argument {String} prefix 前缀
     * @argument {String} suffix 后缀
     * @argument {String} fix 过长省略时添加字符串
     * @argument {Number} maxWidth 最长宽度，会在末尾加上 fix 字符串，一般搭配前缀 后缀使用
     * @argument {String} color 颜色
     * @argument {String} weight font-weight
     * @argument {Number} size font-size
     * @argument {String} align 对齐 start, end, center, left, right
     * @argument {String} baseline 基线 alphabetic, top, hanging, middle, ideographic, bottom
     */
    drawText (text, x, y, { prefix = '', suffix = '', fix = '.... ', maxWidth = 0, type = 'fill', color = '#000', style = 'normal', variant = 'normal', weight = 'normal', size = 12, lineHeight = 1, width = 1, align = 'start', baseline = 'top' } = {}) {
        console.log('draw text')
        const { context, ratio } = this

        x *= ratio
        y *= ratio
        maxWidth *= ratio
        size *= ratio

        context.font = `${style} ${variant} ${weight} ${size}px / ${size * lineHeight}px arial`
        context.lineWidth = width
        context[`${type}Style`] = color
        context.textAlign = align
        context.textBaseline = baseline

        const prefixWidth = context.measureText(prefix).width
        const textWidth = context.measureText(text).width
        const suffixWidth = context.measureText(suffix).width
        const isBeyond = (maxWidth > 0) && (prefixWidth + textWidth + suffixWidth > maxWidth)

        if (isBeyond) {
            const residueWidth = maxWidth - prefixWidth - suffixWidth - context.measureText(fix).width

            for (let i = text.length - 1; i >= 0; i--) {
                text = text.substring(0, i)

                if (context.measureText(text).width <= residueWidth) {
                    text = `${text}${fix}`
                    break
                }
            }
        }

        context[`${type}Text`](`${prefix}${text}${suffix}`, x, y)
    }

    /**
     * @argument {*Number} startX 线条开始 x 坐标
     * @argument {*Number} startY 线条开始 y 坐标
     * @argument {*Number} endX 线条结束 y 坐标
     * @argument {*Number} endY 线条结束 y 坐标
     *
     * @argument {String} color 填充颜色
     * @argument {Number} width 线宽
     */
    drawLine (startX, startY, endX, endY, { color = '#000', width = 1 } = {}) {
        console.log('draw line')
        const { context, ratio } = this

        startX *= ratio
        startY *= ratio
        endX *= ratio
        endY *= ratio

        context.strokeStyle = color
        context.lineWidth = width
        context.beginPath()
        context.moveTo(startX, startY)
        context.lineTo(endX, endY)
        context.stroke()
    }

    /**
     * @argument {*Image} image 图片对象
     * @argument {*Number} x 图片左上角 x 坐标
     * @argument {*Number} y 图片左上角 y 坐标
     * @argument {*Number} width 绘制宽度
     * @argument {*Number} height 绘制高度
     *
     * @argument {Object} background 背景区域 三个参数（圆: { x, y, r }）, 五个参数（矩形: { x, y, width, height, r }）
     */
    drawImage (image, x, y, width, height, background) {
        const { context, ratio } = this

        x *= ratio
        y *= ratio
        width *= ratio
        height *= ratio

        if (background && background instanceof Object) {
            const keys = Object.keys(background)

            // 参数长度为 3，认为背景为 圆
            if (keys.length === 3) {
                const { x, y, r } = background
                this.drawArc(x, y, r)
            }
            // 长度为 5，认为背景为 矩形
            if (keys.length === 5) {
                const { x, y, width, height, r } = background
                this.drawRect(x, y, width, height, r)
            }

            context.clip()
        }
        console.log('draw image')

        context.drawImage(image, x, y, width, height)
    }
}

/**
 * 获取 canvas 对象
 * @argument {Number} width 设计稿上画布宽度
 * @argument {Number} height 设计稿上画布高度
 * 
 * @return {Object} context, canvas, canvasWidth, canvasHeight, ratio
 */
function getCanvasObject (width, height, designWidth) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    const ratio = document.documentElement.clientWidth / designWidth
    const devicePixelRatio = window.devicePixelRatio || 1
    const backingStorePixelRatio = context.webkitBackingStorePixelRatio ||
                                   context.mozBackingStorePixelRatio ||
                                   context.msBackingStorePixelRatio ||
                                   context.oBackingStorePixelRatio ||
                                   context.backingStorePixelRatio || 1

    const scale = devicePixelRatio / backingStorePixelRatio

    canvas.width = width * ratio * scale
    canvas.height = height * ratio * scale

    context.scale(scale, scale)

    return {
        context,
        canvas,
        canvasWidth: width * ratio,
        canvasHeight: height * ratio,
        ratio
    }
}

/**
 * 批量加载图片
 * @argument {Array} images 
 */
export function loadImages (...images) {
    const promises = images.map(url => {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.setAttribute('crossOrigin', 'anonymous')

            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(`渲染地址错误[${url}]`)
            }

            img.src = `${url}?timestamp=${Date.now()}`
        })
    })

    return Promise.all(promises)
}
