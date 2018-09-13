const CTX = '@@InfiniteScroll'
const defaults = {
    callback (done) {
        console.log('请传递回调函数')
    },
    distance: 50,
    timeout: 1000,
    immediate: true, // 绑定指令时，检查是否需要执行方法
    disabled: false
}

export default {
    name: 'InfiniteScroll',

    bind (el, binding, vnode) {
        if (typeof binding.value === 'function') {
            binding.value = {
                callback: binding.value
            }
        }

        const options = Object.assign({}, defaults, binding.value)

        // 防抖处理
        options.callback = debounce(options.callback, options.timeout)

        el[CTX] = {
            binded: false,
            loading: false,

            el,
            vm: vnode.context,
            options,

            scrollEventTarget: null,
            scrollListener: null
        }

        const self = el[CTX]

        const cb = function () {
            self.vm.$nextTick(function () {
                if (isAttached(el)) {
                    doBind.call(self)
                }

                self.bindTryCount = 0

                const tryBind = function () {
                    if (self.bindTryCount > 10) return

                    self.bindTryCount++
                    if (isAttached(el)) {
                        doBind.call(self)
                    } else {
                        setTimeout(tryBind, 50)
                    }
                }

                tryBind()
            })
        }

        if (self.vm._isMounted) {
            cb()
            return
        }
        self.vm.$on('hook:mounted', cb)
    },

    unbind (el) {
        if (el[CTX] && el[CTX].scrollEventTarget) {
            el[CTX].scrollEventTarget.removeEventListener('scroll', el[CTX].scrollListener)
        }
    }
}

function doBind () {
    if (this.binded) return
    this.binded = true

    const directive = this

    directive.scrollEventTarget = getScrollEventTarget(directive.el)
    directive.beforeScrollTop = getScrollTop(directive.scrollEventTarget)
    directive.scrollListener = throttle(checkReachBottom.bind(directive), 200)
    directive.scrollEventTarget.addEventListener('scroll', directive.scrollListener)

    const disabledExpr = directive.el.dataset.infiniteScrollDisabled
    if (disabledExpr) {
        directive.vm.$watch(disabledExpr, function (val) {
            directive.options.disabled = val
        })
    }

    if (directive.options.immediate) {
        checkReachBottom.call(directive)
    }

    const eventName = directive.el.dataset.infiniteScrollListenEvent
    if (eventName) {
        directive.vm.$on(eventName, function () {
            checkReachBottom.call(directive)
        })
    }
}

/**
 * 判断是否滑动到底部
 */
function checkReachBottom () {
    if (this.options.disabled || this.loading) return

    const viewportScrollTop = getScrollTop(this.scrollEventTarget)
    const viewportBottom = viewportScrollTop + getVisibleHeight(this.scrollEventTarget) + this.options.distance
    const isSlideDown = viewportScrollTop >= this.beforeScrollTop
    this.beforeScrollTop = viewportScrollTop

    if (!isSlideDown) {
        return false
    }

    let shouldTrigger = false

    if (this.scrollEventTarget === this.el) {
        shouldTrigger = viewportBottom >= this.scrollEventTarget.scrollHeight
    } else {
        const elementBottom = getElementTop(this.el) - getElementTop(this.scrollEventTarget) + this.el.offsetHeight + viewportScrollTop

        shouldTrigger = viewportBottom >= elementBottom
    }

    if (shouldTrigger) {
        this.loading = true

        this.options.callback(() => {
            this.loading = false
        })
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

function getElementTop (element) {
    if (element === window) {
        return getScrollTop(window)
    }

    return element.getBoundingClientRect().top + getScrollTop(window)
}

/**
 * 获取元素可见高度
 */
function getVisibleHeight (element) {
    if (element === window) {
        return document.documentElement.clientHeight
    }

    return element.clientHeight
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
 * 防抖动函数
 */
function debounce (fn, delay) {
    let now
    let lastExec
    let context
    let args

    const execute = function () {
        fn.apply(context, args)
        lastExec = now
    }

    return function () {
        context = this
        args = arguments

        now = Date.now()

        if (lastExec) {
            if (now - lastExec > delay) {
                execute()
            }
        } else {
            execute()
        }
    }
}

/**
 * 节流函数
 */
function throttle (fn, delay) {
    let now
    let lastExec
    let timer
    let context
    let args

    const execute = function () {
        fn.apply(context, args)
        lastExec = now
    }

    return function () {
        context = this
        args = arguments

        now = Date.now()

        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        if (lastExec) {
            const diff = delay - (now - lastExec)
            if (diff < 0) {
                execute()
            } else {
                timer = setTimeout(() => {
                    execute()
                }, diff)
            }
        } else {
            execute()
        }
    }
}

function isAttached (element) {
    var currentNode = element.parentNode

    while (currentNode) {
        if (currentNode.tagName === 'HTML') {
            return true
        }
        if (currentNode.nodeType === 11) {
            return false
        }
        currentNode = currentNode.parentNode
    }

    return false
}
