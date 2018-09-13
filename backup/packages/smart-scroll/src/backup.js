/* eslint-disable */
/**
 * 获取需要绑定事件的元素
 * @returns {Array} 需要绑定事件的dom数组
 */
function getScrollEventTargets (element) {
    let cache = []

    if (isScrollable(element)) {
        cache.push(element)
    }

    const children = Array.prototype.slice.call(element.childNodes)
    for (let i = 0; i < children.length; i++) {
        const node = children[i]
        if (node.nodeType !== 1) continue

        const targets = getScrollEventTargets(node)
        cache = cache.concat(targets)
    }

    return cache
}

function inserted (el) {
    if (el[ELEMENT_ATTR_NAME].binded) {
        return
    }

    const self = {
        el,

        startY: 0,
        maxscroll: 0
    }

    const scrollEventTargets = getScrollEventTargets(el)
    const events = []

    /**
     * 如果没有可滚动元素，那么在el上绑定事件，阻止默认事件
     */
    if (!scrollEventTargets.length) {
        const touchstartHandler = function (event) {
        }
        el.addEventListener('touchstart', touchstartHandler)

        const touchmoveHandler = function (event) {
            if (event.cancelable) {
                event.preventDefault()
            }
        }
        el.addEventListener('touchmove', touchmoveHandler)

        const touchendHandler = function (event) {
        }
        el.addEventListener('touchend', touchendHandler)

        events.push({
            target: el,
            touchstartHandler,
            touchmoveHandler,
            touchendHandler
        })
    } else {
        scrollEventTargets.forEach(element => {
            const _this = Object.assign({
                target: element
            }, self)

            const touchstartHandler = handleTouchstart.bind(_this)
            element.addEventListener('touchstart', touchstartHandler)

            const touchmoveHandler = handleTouchmove.bind(_this)
            element.addEventListener('touchmove', touchmoveHandler)

            const touchendHandler = handleTouchend.bind(_this)
            element.addEventListener('touchend', touchendHandler)

            events.push({
                target: element,
                touchstartHandler,
                touchmoveHandler,
                touchendHandler
            })
        })
    }

    el[ELEMENT_ATTR_NAME].binded = true
    el[ELEMENT_ATTR_NAME].events = events
}
