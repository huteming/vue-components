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
            img.onerror = function () {
                reject(new Error(`渲染地址错误[${url}]`))
            }

            img.src = `${url}?timestamp=${Date.now()}`
        })
    })

    return Promise.all(promises)
}
