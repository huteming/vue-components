const ELEMENT_ATTR_NAME = '@@ImagePreload'

const defaults = {
    images: [],
    onload () {},
    onerror () {}
}

export default {
    name: 'ImagePreload',

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
    el[ELEMENT_ATTR_NAME].done = true

    Promise.all(loadImages(options.images))
        .then(images => {
            images.forEach(image => {
                el.appendChild(image)
            })

            vnode.context.$nextTick(options.onload)
        })
        .catch(errorImagePath => {
            el[ELEMENT_ATTR_NAME].done = false
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

            image.setAttribute('style', 'width: 100%;')
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
