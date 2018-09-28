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
 * 图片预览，一张
 * @param {File} data 图片文件
 * @return {Promise} dataURL, image
 */
function previewSingle (data) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        const img = new Image()
        img.setAttribute('crossOrigin', 'anonymous')

        reader.onload = function () {
            img.src = reader.result
        }

        reader.onerror = function (event) {
            reject(event)
        }

        img.onload = function () {
            resolve({
                dataURL: reader.result,
                image: img
            })
        }

        img.onerror = function (event) {
            reject(event)
        }

        reader.readAsDataURL(data)
    })
}
