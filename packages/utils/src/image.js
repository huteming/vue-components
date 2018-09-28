const defaultCompress = {
    maxWidth: 1100,
    maxHeight: 1100,
    mimeType: 'image/png',
    quality: 1.0,
    force: false,
}

/**
 * 图片预览，File => dataURL
 * @argument {File, Array<File>} data 图片文件
 *
 * @return {Promise} dataURL, image
 */
export function preview (data) {
    if (Array.isArray(data)) {
        const promises = data.map(fileToDataURL)
        return Promise.all(promises)
    }

    return fileToDataURL(data)
}

/**
 * 加载图片 dataURL => ImageElement
 * @argument {String, Array<String>} data 图片地址
 *
 * @return {Promise} image(DOM)
 */
export function load (data) {
    if (Array.isArray(data)) {
        const promises = data.map(urlToImage)
        return Promise.all(promises)
    }

    return urlToImage(data)
}

/**
 * 压缩图片 File, dataURL => File
 * @argument {File | dataURL | Array<File, dataURL>} data 图片文件或地址
 * @argument {Object} options 配置参数
 *
 * @return {Promise} file, width, height
 */
export function compress (data, options) {
    if (Array.isArray(data)) {
        const promises = data.map(compressSingle, options)
        return Promise.all(promises)
    }

    return compressSingle(data, options)
}

export function convert (data, from, to, options) {
    if (from === 'url') {
        to = 'image'
    }

    const maps = {
        canvasToImage,
        canvasToFile,
        canvasToDataURL,
        dataURLToCanvas,
        dataURLToImage,
        dataURLToFile,
        imageToCanvas,
        imageToDataURL,
        imageToFile,
        fileToCanvas,
        fileToDataURL,
        fileToImage,
        urlToImage,
    }

    const handler = Object.keys(maps)
        .filter(item => item.startsWith(from))
        .filter(item => {
            to = to.slice(0, 1).toUpperCase() + to.slice(1)
            return item.endsWith(to)
        })
        .shift()

    return maps[handler](data, options)
}

// canvas
function canvasToImage (canvas, options) {
    // console.log('canvas to image')
    return canvasToDataURL(canvas)
        .then(dataURL => {
            return dataURLToImage(dataURL)
        })
}

function canvasToFile (canvas, options) {
    // console.log('canvas to file')
    return new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
            resolve(blob)
        }, 'image/png')
    })
}

function canvasToDataURL (canvas, options) {
    // console.log('canvas to dataURL')
    return Promise.resolve(canvas.toDataURL('image/png'))
}

// dataURL
function dataURLToCanvas (dataURL, options) {
    // console.log('dataURL to canvas')
    return dataURLToImage(dataURL)
        .then(image => {
            return imageToCanvas(image)
        })
}

function dataURLToImage (dataURL, options) {
    // console.log('dataURL to image')
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.setAttribute('crossOrigin', 'anonymous')

        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject(new Error(`dataURL渲染错误[${dataURL}]`))
        }

        img.src = dataURL
    })
}

function dataURLToFile (dataURL, options) {
    // console.log('dataURL to file')
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

// image
function imageToCanvas (image, options) {
    // console.log('image to canvas')
    return new Promise((resolve, reject) => {
        const { width, height } = image
        const { canvas, context } = getCanvas(width, height)

        context.drawImage(image, 0, 0, width, height)

        resolve(canvas)
    })
}

function imageToDataURL (image, options) {
    // console.log('image to dataURL')
    return imageToCanvas(image)
        .then(canvas => {
            return canvasToDataURL(canvas)
        })
}

function imageToFile (image, options) {
    // console.log('image to file')
    image.setAttribute('crossOrigin', 'anonymous')

    return imageToCanvas(image)
        .then(canvas => {
            return canvasToFile(canvas)
        })
}

// file
function fileToCanvas (blob, options) {
    // console.log('file to canvas')
    return fileToImage(blob)
        .then(image => {
            return imageToCanvas(image)
        })
}

function fileToDataURL (blob, options) {
    // console.log('file to dataURL')
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onload = function () {
            resolve(reader.result)
        }

        reader.onerror = function (event) {
            reject(event)
        }

        reader.readAsDataURL(blob)
    })
}

function fileToImage (blob, options) {
    // console.log('file to image')
    return fileToDataURL(blob)
        .then(dataURL => {
            return dataURLToImage(dataURL)
        })
}

// url => image
function urlToImage (url, options) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.setAttribute('crossOrigin', 'anonymous')

        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject(new Error(`渲染地址错误[${url}]`))
        }

        img.src = `${url}?timestamp=${Date.now()}`
    })
}

/**
 * 压缩图片，一张
 * @argument {File | dataURL | Array<File, dataURL>} data 图片文件或地址
 * @argument {Object} options 配置参数
 *
 * @return {Promise} file, width, height
 */
function compressSingle (data, options = {}) {
    // 最大尺寸限制
    const { maxWidth, maxHeight, quality, mimeType, force } = Object.assign({}, defaultCompress, options)
    // 压缩图片需要的一些元素和对象
    const img = new Image()
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    return new Promise((resolve, reject) => {
        // base64地址图片加载完毕后
        img.onload = function () {
            // 图片原始尺寸
            const originWidth = img.width
            const originHeight = img.height
            // 目标尺寸
            let targetWidth = originWidth
            let targetHeight = originHeight
            // 图片尺寸超过限制
            if (originWidth > maxWidth || originHeight > maxHeight) {
                if (originWidth / originHeight > maxWidth / maxHeight) {
                    // 更宽，按照宽度限定尺寸
                    targetWidth = maxWidth
                    targetHeight = Math.round(maxWidth * (originHeight / originWidth))
                } else {
                    targetHeight = maxHeight
                    targetWidth = Math.round(maxHeight * (originWidth / originHeight))
                }
            }

            // canvas对图片进行缩放
            canvas.width = targetWidth
            canvas.height = targetHeight
            // 清除画布
            context.clearRect(0, 0, targetWidth, targetHeight)
            // 图片压缩
            context.drawImage(img, 0, 0, targetWidth, targetHeight)
            // canvas转为blob
            canvas.toBlob(blob => {
                resolve({ file: blob, width: targetWidth, height: targetHeight })
            }, force ? mimeType : (data.type || mimeType), quality)
        }

        if (typeof data === 'string') {
            img.src = data
        } else {
            // 文件base64化，以便获知图片原始尺寸
            const reader = new FileReader()

            reader.onload = function () {
                img.src = reader.result
            }

            reader.onerror = function (event) {
                reject(event)
            }

            reader.readAsDataURL(data)
        }
    })
}

/**
 * 获取 canvas 对象
 * @argument {Number} width 画布宽度
 * @argument {Number} height 画布高度
 *
 * @return {Object} context, canvas
 */
function getCanvas (width, height) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    const devicePixelRatio = window.devicePixelRatio || 1
    const backingStorePixelRatio = context.webkitBackingStorePixelRatio ||
                                   context.mozBackingStorePixelRatio ||
                                   context.msBackingStorePixelRatio ||
                                   context.oBackingStorePixelRatio ||
                                   context.backingStorePixelRatio || 1

    const scale = devicePixelRatio / backingStorePixelRatio

    canvas.width = width * scale
    canvas.height = height * scale

    context.scale(scale, scale)

    return {
        context,
        canvas,
    }
}
