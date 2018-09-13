import * as request from '../http/http.js'

/**
 * sessionStorage
 */
export function getSessionStorage (key) {
    let value = sessionStorage.getItem(key)
    try {
        value = JSON.parse(value)
    } catch (err) {
        // console.log(err)
    }
    return value
}

export function setSessionStorage (key, value) {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    sessionStorage.setItem(key, value)
}

export function removeSessionStorage (key) {
    sessionStorage.removeItem(key)
}

/**
 * localStorage
 */
export function getLocalStorage (key) {
    let value = localStorage.getItem(key)
    try {
        value = JSON.parse(value)
    } catch (err) {
        // console.log(err)
    }
    return value
}

export function setLocalStorage (key, value) {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
}

export function removeLocalStorage (key) {
    localStorage.removeItem(key)
}

/**
 * helpers
 */
export function isPhoneNumber (value) {
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/
    return reg.test(value.toString())
}

/**
 * 微信支付
 */
export function wxpay (params) {
    return new Promise((resolve, reject) => {
        request.post('/api/weixin/getPayParameters', params)
            .then(res => {
                const { flag, msg, data } = res.data
                if (flag !== 1) {
                    throw msg
                }

                const payHandler = onBridgeReady(data, resolve, reject)

                if (typeof WeixinJSBridge !== 'undefined') {
                    payHandler()
                    return
                }

                document.addEventListener('WeixinJSBridgeReady', payHandler, false)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 统计接口
 */
export function sign (itemSign, itemRemark) {
    return request.post('api/system/pageStat', { itemRemark, itemSign })
}

/**
 * 图片预览
 * @param {File} data 图片文件
 * @return {Promise} dataURL, image
 */
export function preview (data) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        const img = new Image()

        reader.onload = function () {
            img.src = reader.result
        }

        img.onload = function () {
            resolve({
                dataURL: reader.result,
                image: img
            })
        }

        reader.onerror = function (event) {
            reject(event)
        }

        img.onerror = function (event) {
            reject(event)
        }

        reader.readAsDataURL(data)
    })
}

/**
 * 上传图片
 * @param {File | dataURL | Array<File | dataURL>} 图片文件
 * @return {Promise} Object | Array<Object> url(图片在七牛的地址), width, height
 */
export async function upload (data) {
    const { domain, token } = await getUploadData()
    let promise

    if (Array.isArray(data)) {
        const promises = data.map(file => uploadSimple(domain, token, file))
        promise = Promise.all(promises)
    } else {
        promise = uploadSimple(domain, token, data)
    }

    return promise
}

/**
 * 压缩图片
 * @param {File | dataURL} data 图片文件
 * @return {Promise} file, width, height
 */
export function compress (data) {
    // 最大尺寸限制
    const maxWidth = 1100
    const maxHeight = 1100
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
            }, data.type || 'image/png')
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
 * 上传单张图片
 * @param {String} domain
 * @param {String} token
 * @param {File | dataURL} data
 * @return {Promise} url(图片在七牛的地址), width, height
 */
async function uploadSimple (domain, token, data) {
    const { file, width, height } = await compress(data)

    const params = {
        token: token,
        file,
        'unique_names': true,
        'save_key': true
    }

    const { data: { key } } = await request.post('https://up.qbox.me', params, { withCredentials: false }, 'form')

    return { url: `${domain}${key}`, width, height }
}

/**
 * 微信支付
 */
function onBridgeReady (paramsStr, resolve, reject) {
    return function () {
        // eslint-disable-next-line
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest',
            JSON.parse(paramsStr),
            function (res) {
                switch (res.err_msg) {
                case 'get_brand_wcpay_request:ok': // 支付成功
                    resolve()
                    break
                default: // 统一认为支付失败（可能为取消支付）
                    reject(res.err_msg)
                    break
                }
            }
        )
    }
}

/**
 * 获取上传参数
 * @returns {Object} domain, token
 */
async function getUploadData () {
    const { data: { flag, msg, data } } = await request.post('/api/system/getUploadToken')
    if (flag !== 1) {
        throw new Error(msg)
    }

    return data
}

/**
 * dataURL => file
 */
export function dataURLtoFile (dataurl) {
    let arr = dataurl.split(',')
    let mime = arr[0].match(/:(.*?);/)[1]
    let suffix = mime.split('/')[1]
    let bstr = atob(arr[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }

    return new File([u8arr], `file.${suffix}`, { type: mime })
}
