/**
 * @argument {*Number} width 设计稿上画布宽度
 * @argument {*Number} height 设计稿上画布高度
 *
 * @argument {Number} designWidth 设计稿标准宽度
 */
export class Canvas {
    constructor (width, height, { designWidth = 750 } = {}) {
        const { context, canvas, canvasWidth, canvasHeight, ratio } = getCanvasObject(width, height, designWidth)

        this.context = context
        this.ratio = ratio
        this.canvas = canvas
        this.canvasWidth = canvasWidth // 画布宽度
        this.canvasHeight = canvasHeight // 画布高度

        this.use = this.use.bind(this)
        this.done = this.done.bind(this)

        this.drawArc = drawArc.bind(this)
        this.drawRect = drawRect.bind(this)
        this.drawText = drawText.bind(this)
        this.drawLine = drawLine.bind(this)
        this.drawImage = drawImage.bind(this)
    }

    use (callback) {
        const self = {
            context: this.context,
            ratio: this.ratio,
            canvas: this.canvas,
            width: this.canvasWidth,
            height: this.canvasHeight
        }

        console.log('------------- start -------------')
        this.context.save()

        callback.call(self, self)

        this.context.restore()
        console.log('------------- end -------------')
    }

    done () {
        console.log('done')
        return this.canvas.toDataURL('image/jpeg', 1.0)
    }
}

// helpers -------------------------------------------------------

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
 * @argument {*Number} x 左上角 x 坐标
 * @argument {*Number} y 左上角 y 坐标
 * @argument {*Number} r 半径
 *
 * @argument {Object} options 配置
 */
const defaultArc = {
    startDegrees: 0, // 开始角度
    endDegrees: 360, // 结束角度
    direction: false, // 方向。false: 顺时针, true: 逆时针
    lineWidth: 1,
    color: '#fff', // 画笔颜色
    type: 'stroke' // 闭合方式
}

function drawArc (x, y, r, options = {}) {
    console.log(`draw arc *** x:${x} *** y: ${y} *** r: ${r}`)
    const { context, ratio } = this
    const radians = Math.PI / 180
    const {
        startDegrees,
        endDegrees,
        direction,
        color,
        type,
        lineWidth
    } = Object.assign({}, defaultArc, options)

    x = (x + r) * ratio
    y = (y + r) * ratio
    r *= ratio

    context[`${type}Style`] = color
    context.lineWidth = lineWidth

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
 * @argument {Object} options
 */
const defaultRect = {
    r: 0, // 圆角半径
    lineWidth: 1,
    color: '#fff',
    type: 'fill'
}

function drawRect (x, y, width, height, options = {}) {
    console.log(`draw rect *** x: ${x} *** y: ${y} *** width: ${width} *** height: ${height}`)
    const { context, ratio } = this
    let { type, color, r, lineWidth } = Object.assign({}, defaultRect, options)

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
    context.lineWidth = lineWidth

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
 * @argument {Object} options
 */
const defaultText = {
    prefix: '', // 前缀
    suffix: '', // 后缀
    fix: '.... ', // 过长省略时添加字符串
    maxWidth: 0, // 最长宽度，会在末尾加上 fix 字符串，一般搭配前缀 后缀使用
    style: 'normal', // 字体的风格 normal, italic, oblique
    variant: 'normal', // 字体变体 normal, small-caps
    weight: 'normal', // 字体的粗细 bold bolder lighter 100 200 300 400 500 600 700 800 900
    size: 12, // 字号
    lineHeight: 1, // 行高
    align: 'start', // 对齐方式 start, end, center, left, right
    baseline: 'top', // 文本基线, alphabetic, top, hanging, middle, ideographic, bottom
    lineWidth: 1, // 画笔宽度
    color: '#000',
    type: 'fill'
}

function drawText (text, x, y, options = {}) {
    console.log(`draw text *** text: ${text} *** x: ${x} *** y: ${y}`)
    const { context, ratio } = this
    let {
        prefix = '',
        suffix = '',
        fix = '.... ',
        maxWidth = 0,
        style = 'normal',
        variant = 'normal',
        weight = 'normal',
        size = 12,
        lineHeight = 1,
        lineWidth = 1,
        align = 'start',
        baseline = 'top',
        color,
        type
    } = Object.assign({}, defaultText, options)

    x *= ratio
    y *= ratio
    maxWidth *= ratio

    context.font = `${style} ${variant} ${weight} ${size}px / ${size * lineHeight}px arial`
    context.lineWidth = lineWidth
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
 * @argument {Object} options
 */
const defaultLine = {
    lineWidth: 1, // 画笔宽度
    color: '#000'
}

function drawLine (startX, startY, endX, endY, options = {}) {
    console.log(`draw line *** (${startX}, ${startY}) *** (${endX}, ${endY})`)
    const { context, ratio } = this
    const { color, lineWidth } = Object.assign({}, defaultLine, options)

    startX *= ratio
    startY *= ratio
    endX *= ratio
    endY *= ratio

    context.strokeStyle = color
    context.lineWidth = lineWidth
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
 */
function drawImage (image, x, y, width, height) {
    console.log(`draw image *** x: ${x} *** y: ${y} *** width: ${width} *** height: ${height} *** ${image.src}`)
    const { context, ratio } = this

    x *= ratio
    y *= ratio
    width *= ratio
    height *= ratio

    context.drawImage(image, x, y, width, height)
}
