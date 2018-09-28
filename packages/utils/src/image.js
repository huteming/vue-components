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
        const promises = data.map(previewSingle)
        return Promise.all(promises)
    }

    return previewSingle(data)
}

/**
 * 加载图片 dataURL => ImageElement
 * @argument {String, Array<String>} data 图片地址
 *
 * @return {Promise} image(DOM)
 */
export function load (data) {
    if (Array.isArray(data)) {
        const promises = data.map(loadSingle)
        return Promise.all(promises)
    }

    return loadSingle(data)
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
 * 图片加载，一张
 * @argument {String} data 图片地址
 *
 * @return {Promise} image(DOM)
 */
function loadSingle (data) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.setAttribute('crossOrigin', 'anonymous')

        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject(new Error(`渲染地址错误[${data}]`))
        }

        img.src = `${data}?timestamp=${Date.now()}`
    })
}

/**
 * 图片预览，一张
 * @param {File} data 图片文件
 * @return {Promise} dataURL, image
 */
function previewSingle (data) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onload = function () {
            resolve(reader.result)
        }

        reader.onerror = function (event) {
            reject(event)
        }

        reader.readAsDataURL(data)
    })
}
