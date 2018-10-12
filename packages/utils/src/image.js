import EXIF from 'exif-js'

const defaultOptions = {
    compress: false,

    orientation: 1,

    maxWidth: 1100,
    maxHeight: 1100,
    mimeType: 'image/png',
    quality: 1.0,
}

const methodsConvert = {
    canvas2image,
    canvas2canvas,
    canvas2file,
    canvas2dataURI,

    dataURI2image,
    dataURI2canvas,
    dataURI2file,
    dataURI2dataURI,

    image2image,
    image2canvas,
    image2file,
    image2dataURI,

    file2image,
    file2canvas,
    file2file,
    file2dataURI,

    url2image,
    url2canvas,
    url2file,
    url2dataURI,
}

export default class Convertor {
    constructor (values, options) {
        if (Array.isArray(values)) { // => [{ value, options }]
            this.values = values.map(value => {
                if (!value.options) {
                    value = { value }
                }
                value.options = Object.assign({}, defaultOptions, options || {}, value.options || {})

                return value
            })
        } else { // => value, options
            this.values = values
            this.options = Object.assign({}, defaultOptions, options || {})
        }

        this.getImage = this._getResult('image').bind(this)
        this.getDataURI = this._getResult('dataURI').bind(this)
        this.getFile = this._getResult('file').bind(this)
        this.getCanvas = this._getResult('canvas').bind(this)
    }

    _getResult (to) {
        return function (options) {
            if (Array.isArray(this.values)) {
                const promises = this.values.map(value => {
                    options = Object.assign({}, value.options, options || {})

                    return this._getHandler(value.value, to)(value.value, options)
                })
                return Promise.all(promises)
            }

            options = Object.assign({}, this.options, options || {})

            return this._getHandler(this.values, to)(this.values, options)
        }
    }

    _getHandler (value, to) {
        let type = 'url'
        if (value instanceof HTMLImageElement) {
            type = 'image'
        } else if (value instanceof HTMLCanvasElement) {
            type = 'canvas'
        } else if (/^data:/i.test(value)) {
            type = 'dataURI'
        } else if (value instanceof Blob || value instanceof File) {
            type = 'file'
        }

        const name = Object.keys(methodsConvert)
            .filter(item => item.startsWith(type))
            .filter(item => item.endsWith(to))
            .shift()

        const handler = methodsConvert[name]
        if (typeof handler !== 'function') {
            throw new Error(`转换类型错误 [${type} to ${to}]`)
        }

        return handler
    }
}

// url
function url2image (url, options) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.setAttribute('crossOrigin', 'anonymous')

        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject(new Error(`渲染地址错误[${url}]`))
        }

        const separator = url.indexOf('?') > -1 ? '&' : '?'

        img.src = `${url}${separator}timestamp=${Date.now()}`
    })
}

function url2canvas (url, options) {
    return url2image(url, options)
        .then(image => {
            return image2canvas(image, options)
        })
}

function url2file (url, options) {
    return url2image(url, options)
        .then(image => {
            return image2file(image, options)
        })
}

function url2dataURI (url, options) {
    return url2image(url, options)
        .then(image => {
            return image2dataURI(image, options)
        })
}

// file
function file2canvas (file, options) {
    return file2image(file, options)
        .then(image => {
            return image2canvas(image, options)
        })
}

function file2dataURI (file, options) {
    return new Promise((resolve, reject) => {
        EXIF.getData(file, () => {
            options.orientation = EXIF.getTag(file, 'Orientation')
            const reader = new FileReader()

            reader.onload = function () {
                dataURI2image(reader.result, options)
                    .then(image => {
                        return image2canvas(image, options)
                    })
                    .then(canvas => {
                        return canvas2dataURI(canvas, options)
                    })
                    .then(dataURI => {
                        resolve(dataURI)
                    })
            }

            reader.onerror = function (error) {
                reject(error)
            }

            reader.readAsDataURL(file)
        })
    })
}

function file2image (file, options) {
    return file2dataURI(file, options)
        .then(dataURI => {
            return dataURI2image(dataURI, options)
        })
}

function file2file (file) {
    return Promise.resolve(file)
}

// image
function image2canvas (image, options) {
    // 最大尺寸限制
    const { maxWidth, maxHeight, compress, orientation } = options

    return new Promise((resolve, reject) => {
        // 图片原始尺寸
        const originWidth = image.width
        const originHeight = image.height
        // 目标尺寸
        let targetWidth = originWidth
        let targetHeight = originHeight
        // 图片尺寸超过限制
        if (compress && (originWidth > maxWidth || originHeight > maxHeight)) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
                // 更宽，按照宽度限定尺寸
                targetWidth = maxWidth
                targetHeight = Math.round(maxWidth * (originHeight / originWidth))
            } else {
                targetHeight = maxHeight
                targetWidth = Math.round(maxHeight * (originWidth / originHeight))
            }
        }

        // fix 图片旋转问题
        let canvasWidth = targetWidth
        let canvasHeight = targetHeight
        let regRotate = 0
        let canvasX = 0
        let canvasY = 0

        if (orientation && orientation !== 1) {
            switch (orientation) {
            case 6: // 旋转90度
                canvasWidth = targetHeight
                canvasHeight = targetWidth
                regRotate = Math.PI / 2
                canvasX = 0
                canvasY = -targetHeight
                break
            case 3: // 旋转180度
                canvasWidth = targetWidth
                canvasHeight = targetHeight
                regRotate = Math.PI
                canvasX = -targetWidth
                canvasY = -targetHeight
                break
            case 8: // 旋转-90度
                canvasWidth = targetWidth
                canvasHeight = targetHeight
                regRotate = 3 * Math.PI / 2
                canvasX = -targetWidth
                canvasY = 0
                break
            }
        }

        const { canvas, context } = getCanvasObj(canvasWidth, canvasHeight)
        context.rotate(regRotate)
        context.drawImage(image, canvasX, canvasY, targetWidth, targetHeight)

        resolve(canvas)
    })
}

function image2dataURI (image, options) {
    return image2canvas(image, options)
        .then(canvas => {
            return canvas2dataURI(canvas, options)
        })
}

function image2file (image, options) {
    image.setAttribute('crossOrigin', 'anonymous')

    return image2canvas(image, options)
        .then(canvas => {
            return canvas2file(canvas, options)
        })
}

function image2image (image) {
    return Promise.resolve(image)
}

// dataURI
function dataURI2image (dataURI, options) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.setAttribute('crossOrigin', 'anonymous')

        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject(new Error(`渲染错误[${dataURI}]`))
        }

        img.src = dataURI
    })
}

function dataURI2canvas (dataURI, options) {
    return dataURI2image(dataURI, options)
        .then(image => {
            return image2canvas(image, options)
        })
}

function dataURI2file (dataURL, options) {
    const arr = dataURL.split(',')
    const type = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }

    return Promise.resolve(new Blob([u8arr], { type }))
}

function dataURI2dataURI (dataURI) {
    return Promise.resolve(dataURI)
}

// canvas
function canvas2image (canvas, options) {
    return canvas2dataURI(canvas, options)
        .then(dataURI => {
            return dataURI2image(dataURI, options)
        })
}

function canvas2dataURI (canvas, options) {
    const { mimeType, quality } = options

    return Promise.resolve(canvas.toDataURL(mimeType, quality))
}

function canvas2file (canvas, options) {
    const { mimeType, quality } = options

    return new Promise((resolve, reject) => {
        try {
            canvas.toBlob(blob => {
                resolve(blob)
            }, mimeType, quality)
        } catch (err) {
            reject(err)
        }
    })
}

function canvas2canvas (canvas, options) {
    return Promise.resolve(canvas)
}

/**
 * 获取 canvas 对象
 * @argument {Number} width 画布宽度
 * @argument {Number} height 画布高度
 *
 * @return {Object} context, canvas
 */
function getCanvasObj (width, height) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    const devicePixelRatio = window.devicePixelRatio || 1
    const backingStorePixelRatio = context.webkitBackingStorePixelRatio ||
                                   context.mozBackingStorePixelRatio ||
                                   context.msBackingStorePixelRatio ||
                                   context.oBackingStorePixelRatio ||
                                   context.backingStorePixelRatio || 1

    const scale = devicePixelRatio / backingStorePixelRatio
    width *= scale
    height *= scale

    canvas.width = width
    canvas.height = height

    // 清除画布
    context.scale(scale, scale)
    context.clearRect(0, 0, width, height)

    return {
        context,
        canvas,
        scale,
    }
}
