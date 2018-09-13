const ELEMENT_ATTR_NAME = '@@ImageCombine'

const defaults = {
    images: [],
    onload () {},
    onerror () {}
}

export default {
    name: 'ImageCombine',

    bind (el) {
        if (!el[ELEMENT_ATTR_NAME]) {
            el[ELEMENT_ATTR_NAME] = {
                done: false
            }
        }
    },

    inserted: execute,
    update: execute
}

/**
 * 执行主要函数
 */
function execute (el, binding, vnode) {
    // 防止重复执行
    if (el[ELEMENT_ATTR_NAME].done) {
        return
    }

    // 格式化参数
    if (typeof binding.value === 'function') {
        binding.value = {
            onload: binding.value
        }
    }
    if (binding.value instanceof Array) {
        binding.value = {
            images: binding.value
        }
    }
    if (el.dataset.images) {
        binding.value.images = el.dataset.images.split(',')
    }

    // 执行过程中所需参数
    const options = Object.assign({}, defaults, binding.value)

    if (!options.images || !options.images.length) return

    Promise.all(loadImages(options.images))
        .then(images => {
            const { width, height } = getCanvasRect(el, images)
            const { canvas, context } = getCanvasObject(width, height)

            // 将所有图片画到画布上
            let prevImageHeightTotal = 0

            images.forEach(image => {
                const drawHeight = width * image.height / image.width
                context.drawImage(image, 0, prevImageHeightTotal, width, drawHeight)
                prevImageHeightTotal += drawHeight
            })

            /**
             * 转换成 img.src 所需要的参数格式 dataURL
             */
            el.src = canvas.toDataURL('image/jpeg', 1.0)

            vnode.context.$nextTick(options.onload)
        })
        .then(() => {
            el[ELEMENT_ATTR_NAME].done = true
        })
        .catch(errorImagePath => {
            options.onerror(errorImagePath)
        })
}

/**
 * 将图片地址转成图片
 * @argument {Array} images 图片地址
 * @returns {Array} promises数组，promise参数是 image 对象
 */
function loadImages (images) {
    return images.map(path => {
        return new Promise((resolve, reject) => {
            const image = new Image()
            /**
             * 解决问题（跨域问题）
             * Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported
             */
            image.setAttribute('crossOrigin', 'anonymous')
            image.onload = function () {
                resolve(image)
            }
            image.onerror = function (event) {
                const path = event.path[0].src
                reject(path)
            }
            image.src = path
        })
    })
}

/**
 * 获取 canvas 大小信息
 * @argument {Object} el dom对象
 * @argument {Array} images 图片对象数组
 *
 * @returns {Object} width, height
 */
function getCanvasRect (el, images) {
    const width = el.clientWidth

    let height = 0
    images.forEach(image => {
        // 高度是所有图片高度的累加
        height += width * image.height / image.width
    })

    return { width, height }
}

/**
 * 获取 canvas 对象
 * @argument {Number} width
 * @argument {Number} height
 *
 * @returns {Object} canvas, context
 */
function getCanvasObject (width, height) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    const devicePixelRatio = window.devicePixelRatio || 1
    const backingStorePixelRatio = context.webkitBackingStorePixelRatio ||
                                   context.mozBackingStorePixelRatio ||
                                   context.msBackingStorePixelRatio ||
                                   context.oBackingStorePixelRatio ||
                                   context.backingStorePixelRatio || 1

    const ratio = devicePixelRatio / backingStorePixelRatio

    canvas.width = width * ratio
    canvas.height = height * ratio

    context.scale(ratio, ratio)

    return { canvas, context }
}
