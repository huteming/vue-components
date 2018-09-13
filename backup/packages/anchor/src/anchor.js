const ELEMENT_ATTR_NAME = '@@Anchor'

const defaults = {
    selector: '',
    step: 50
}

const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame

export default {
    name: 'anchor',

    bind (el) {
        el[ELEMENT_ATTR_NAME] = {
            handlerClick: null
        }
    },

    inserted (el, binding) {
        // 获取 self 对象，作为 this 在各函数中共享数据
        if (typeof binding.value === 'string') {
            binding.value = {
                selector: binding.value
            }
        }
        const options = Object.assign({}, defaults, binding.value)

        const self = {
            el,
            binding,
            options,

            scrollEventTarget: getScrollEventTarget(el),
            targetScrollTop: 0,
            currentScrollTop: 0
        }

        // 主要执行操作
        const handlerClick = handleClick.bind(self)
        el.addEventListener('click', handlerClick)

        // 更新生命周期共享数据
        el[ELEMENT_ATTR_NAME].handlerClick = handlerClick
    },

    unbind (el) {
        el.addEventListener('click', el[ELEMENT_ATTR_NAME].handlerClick)
    }
}

/**
 * 获取滚动条位置
 */
function getScrollTop (element) {
    if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
    }

    return element.scrollTop
}

/**
 * 获取需要绑定事件的元素
 */
function getScrollEventTarget (element) {
    let currentNode = element

    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
        const overflowY = getComputedStyle(currentNode).overflowY
        if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode
        }
        currentNode = currentNode.parentNode
    }
    return window
}

/**
 * 锚点跳转
 */
function smartJump () {
    let nextScrollTop

    // 已滚动到目标位置
    const distance = Math.abs(this.targetScrollTop - this.currentScrollTop)
    if (distance === 0) {
        return
    }

    const step = this.options.step
    if (distance <= step) { // 不足一个步长时，取整
        nextScrollTop = this.targetScrollTop
    } else { // 向上滚动减去步长，向下滚动加上步长
        nextScrollTop = this.targetScrollTop > this.currentScrollTop ? this.currentScrollTop + step : this.currentScrollTop - step
    }

    // 设置新的滚动位置
    this.scrollEventTarget.scrollTop = nextScrollTop

    // 保存当前滚动位置
    this.currentScrollTop = nextScrollTop
    requestAnimationFrame(smartJump.bind(this))
}

/**
 * 响应点击事件
 */
function handleClick () {
    const target = document.querySelector(this.options.selector)
    if (!target) {
        console.warn(`selector[${this.options.selector}]有误。未找到指定dom`)
        return
    }

    // 目标元素当前滚动位置
    this.targetScrollTop = target.offsetTop
    // 滚动条当前滚动位置
    this.currentScrollTop = getScrollTop(this.scrollEventTarget)

    requestAnimationFrame(smartJump.bind(this))
}
