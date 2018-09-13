import 'intersection-observer'

const CTX = '@@ImageLazyload'

/**
 * dataset 数据
 * @argument {String} src 真实图片地址
 * @argument {String} state 是否进入可视区域 enter, leave
 */
const defaults = {
    selector: '', // 可选。为空时，观察指令所在dom本身
    distance: 30,

    onload (target) {},
    onerror (traget) {}
}

export default {
    name: 'ImageLazyload',

    bind (el, binding) {
        // 周期函数共享数据
        el[CTX] = {
            observer: null
        }
    },

    inserted (el, binding) {
        const options = getOptions(binding)
        const targets = getTargets(el, options)
        const observer = getObserver(el, options)

        // 设置观察器
        targets.forEach(target => {
            // 监听图片进入可视区域
            observer.observe(target)

            // 监听图片加载
            target.onload = () => {
                options.onload(target)

                observer.unobserve(target)
            }

            target.onerror = () => {
                options.onerror(target)
            }
        })

        el[CTX].observer = observer
    },

    componentUpdated (el, binding) {
        const options = getOptions(binding)
        const targets = getTargets(el, options)

        // 如果当前在可视区域内，且为设置过图片真实地址得话，立即设置真实地址
        targets.forEach(target => {
            const { state, src } = target.dataset
            if (!target.src && state === 'enter' && src) {
                target.src = src
            }
        })
    },

    unbind (el) {
        el[CTX].observer.disconnect()
    }
}

/**
 * 获取观察器
 */
function getObserver (el, options) {
    const observer = new IntersectionObserver(changes => {
        changes.forEach(change => {
            const target = change.target
            const ratio = change.intersectionRatio
            const src = target.dataset.src

            target.dataset.state = ratio > 0 ? 'enter' : 'leave'
            target.dataset.ratio = ratio

            if (ratio > 0 && src) {
                target.src = src
            }
        })
    }, {
        root: options.selector ? el : null,
        rootMargin: `${options.distance}px`,
        threshold: [0, 0.25, 0.5, 0.75, 1]
    })

    return observer
}

/**
 * 获取需要观察的对象数组
 */
function getTargets (el, options) {
    if (options.selector) {
        return Array.from(el.querySelectorAll(options.selector))
    } else {
        return [el]
    }
}

/**
 * 获取配置对象
 */
function getOptions (binding) {
    if (typeof binding.value === 'string') {
        binding.value = {
            selector: binding.value
        }
    }

    return Object.assign({}, defaults, binding.value || {})
}
