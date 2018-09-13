const ELEMENT_ATTR_NAME = '@@Sticky'

const defaults = {
    distance: 0
}

export default {
    name: 'Sticky',

    bind (el) {
        el[ELEMENT_ATTR_NAME] = {
            binded: false,
            scrollEventTarget: null,
            handlerScroll: null
        }
    },

    inserted (el, binding) {
        // 合并参数
        const options = Object.assign({}, defaults, binding.value || {})
        // 获取滚动事件容器
        const scrollEventTarget = getScrollEventTarget(el)
        const prevScrollTop = getScrollTop(scrollEventTarget)
        // 获取容器尺寸信息
        let { top: wrapTop, left: wrapLeft, right: wrapRight } = scrollEventTarget.getBoundingClientRect()
        wrapRight = document.body.clientWidth - wrapRight
        // 获取目标元素相关尺寸信息
        const targetTop = el.offsetTop + prevScrollTop
        const targetLeft = el.offsetLeft
        const targetRight = scrollEventTarget.offsetWidth - el.offsetWidth - el.offsetLeft
        const targetHeight = el.offsetHeight
        const targetWidth = el.offsetWidth

        const self = {
            el,
            scrollEventTarget,
            prevScrollTop,

            fixed: false,
            replaceElement: null,

            wrapTop,
            wrapLeft,
            wrapRight,

            targetTop,
            targetLeft,
            targetRight,
            targetHeight,
            targetWidth,

            ...options
        }

        const handlerScroll = handleScroll.bind(self)

        // 创建替代元素
        createReplaceElement.call(self)

        scrollEventTarget.addEventListener('scroll', handlerScroll)

        // 各钩子函数中共享的参数
        el[ELEMENT_ATTR_NAME].binded = true
        el[ELEMENT_ATTR_NAME].scrollEventTarget = scrollEventTarget
        el[ELEMENT_ATTR_NAME].handlerScroll = handlerScroll
    },

    unbind (el) {
        const { binded, scrollEventTarget, handlerScroll } = el[ELEMENT_ATTR_NAME]
        if (binded) {
            scrollEventTarget.removeEventListener('scroll', handlerScroll)
        }
    }
}

function handleScroll () {
    const currentScrollTop = getScrollTop(this.scrollEventTarget)

    // 向下滚动
    if (currentScrollTop > this.prevScrollTop) {
        // 滚动条高度 >= 目标元素距离顶部的距离
        if (!this.fixed && (currentScrollTop >= this.targetTop - this.distance)) {
            showReplaceElement.call(this)
            fixTargetElement.call(this)
            this.fixed = true
        }
    }

    // 向上滚动
    if (currentScrollTop < this.prevScrollTop) {
        if (this.fixed && (currentScrollTop <= this.targetTop - this.distance)) {
            hideReplaceElement.call(this)
            restoreTargetElement.call(this)
            this.fixed = false
        }
    }

    this.prevScrollTop = currentScrollTop
}

/**
 * 获取需要绑定事件的元素
 */
function getScrollEventTarget (element) {
    let currentNode = element
    const getComputedStyle = document.defaultView.getComputedStyle

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
 * 获取滚动条位置
 */
function getScrollTop (element) {
    if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
    }

    return element.scrollTop
}

/**
 * 创建替代元素
 */
function createReplaceElement () {
    const div = document.createElement('div')
    let style = ''
    style += `display: none; `
    style += `position: relative; `
    style += `height: ${this.targetHeight}px; `
    style += `width: ${this.targetWidth}px; `

    div.setAttribute('style', style)
    this.el.parentNode.insertBefore(div, this.el)
    this.replaceElement = div
}

/**
 * 显示替代元素
 */
function showReplaceElement () {
    // console.log('显示替代元素')
    this.replaceElement.style.display = 'block'
}

/**
 * 隐藏替代元素
 */
function hideReplaceElement () {
    // console.log('隐藏替代元素')
    this.replaceElement.style.display = 'none'
}

/**
 * 固定目标元素
 */
function fixTargetElement () {
    // console.log('固定目标元素')
    this.el.style.position = 'fixed'
    this.el.style.top = `${this.wrapTop + this.distance}px`
    this.el.style.left = `${this.targetLeft}px`
    this.el.style.right = `${this.targetRight}px`
}

/**
 * 恢复目标元素
 */
function restoreTargetElement () {
    // console.log('恢复目标元素')
    this.el.style.position = 'relative'
    this.el.style.top = '0'
    this.el.style.left = '0'
    this.el.style.right = '0'
}
