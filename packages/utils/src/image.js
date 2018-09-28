/**
 * 图片预览
 * @param {File, Array<File>} data 图片文件
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
 * 加载图片
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
