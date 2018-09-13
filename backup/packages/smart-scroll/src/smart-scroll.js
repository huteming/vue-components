const ELEMENT_ATTR_NAME = '@@SmartScroll'

export default {
    name: 'SmartScroll',

    bind (el) {
        el[ELEMENT_ATTR_NAME] = {
            binded: false,
            event: {}
        }
    },

    inserted (el) {
        if (el[ELEMENT_ATTR_NAME].binded) {
            return
        }

        const self = {
            el,

            scrollable: null,
            startY: 0
        }
        const handlerTouchstart = handleTouchstart.bind(self)
        const handlerTouchmove = handleTouchmove.bind(self)
        const handlerTouchend = handleTouchend.bind(self)

        el.addEventListener('touchstart', handlerTouchstart)
        el.addEventListener('touchmove', handlerTouchmove)
        el.addEventListener('touchend', handlerTouchend)

        el[ELEMENT_ATTR_NAME].binded = true
        el[ELEMENT_ATTR_NAME].event = {
            handlerTouchstart,
            handlerTouchmove,
            handlerTouchend
        }
    },

    unbind (el) {
        const { handlerTouchstart, handlerTouchmove, handlerTouchend } = el[ELEMENT_ATTR_NAME].event
        el.removeEventListener('touchstart', handlerTouchstart)
        el.removeEventListener('touchmove', handlerTouchmove)
        el.removeEventListener('touchend', handlerTouchend)

        el[ELEMENT_ATTR_NAME].binded = false
    }
}

/**
 * 验证是否可以滚动
 */
function isScrollable (node) {
    const maxscroll = node.scrollHeight - node.clientHeight
    const overflowY = getComputedStyle(node).overflowY
    return maxscroll > 0 && (overflowY === 'scroll' || overflowY === 'auto')
}

/**
 * 获取需要绑定事件的元素
 */
function getScrollEventTarget (node, el) {
    let currentNode = node

    while (currentNode && currentNode !== el) {
        if (isScrollable(currentNode)) {
            return currentNode
        }
        currentNode = currentNode.parentNode
    }
    return el
}

function handleTouchstart (event) {
    const finger = event.changedTouches[0]

    // 垂直位置标记
    this.startY = finger.pageY
    // 获取可滚动元素
    this.scrollable = getScrollEventTarget(event.target, this.el)
}

function handleTouchmove (event) {
    const finger = event.changedTouches[0]
    const maxscroll = this.scrollable.scrollHeight - this.scrollable.clientHeight
    // 当前的滚动高度
    const scrollTop = this.scrollable.scrollTop
    // 滑动距离。向下为正，向上为负
    const moveY = finger.pageY - this.startY

    // 如果不足于滚动，则禁止触发整个窗体元素的滚动
    if (maxscroll <= 0) {
        if (event.cancelable) {
            event.preventDefault()
        }
        return
    }

    // 上边缘检测
    if (moveY > 0 && scrollTop === 0) {
        if (event.cancelable) {
            event.preventDefault()
        }
        return
    }

    // 下边缘检测
    if (moveY < 0 && scrollTop + 1 >= maxscroll) {
        if (event.cancelable) {
            event.preventDefault()
        }
    }
}

function handleTouchend (event) {
}
