import Vue from 'vue'
import LoadmoreComponent from './loadmore.vue'
const ELEMENT_ATTR_NAME = '@@Loadmore'

const defaults = {
    disabled: false,

    distance: 50,
    distanceMax: 70,
    ratio: 1.5, // move的转换比率，削弱滑动效果，否则可能太灵敏

    // callback (done) {
    //     done()
    // }
    callback: null
}

export default {
    name: 'Loadmore',

    bind (el) {
        el[ELEMENT_ATTR_NAME] = {
            touchstartHandler: null,
            touchmoveHandler: null,
            touchendHandler: null
        }
    },

    inserted (el, binding) {
        const options = getOptions(el, binding)
        const instance = insertElement(el, options)

        const self = {
            el,
            instance,
            options,

            startY: 0,
            scrollTop: 0,
            disabled: false
        }
        const touchstartHandler = handleTouchstart.bind(self)
        const touchmoveHandler = handleTouchmove.bind(self)
        const touchendHandler = handleTouchend.bind(self)

        el.addEventListener('touchstart', touchstartHandler)
        el.addEventListener('touchmove', touchmoveHandler)
        el.addEventListener('touchend', touchendHandler)

        el[ELEMENT_ATTR_NAME].touchstartHandler = touchstartHandler
        el[ELEMENT_ATTR_NAME].touchmoveHandler = touchmoveHandler
        el[ELEMENT_ATTR_NAME].touchendHandler = touchendHandler
    },

    unbind (el) {
        const { touchstartHandler, touchmoveHandler, touchendHandler } = el[ELEMENT_ATTR_NAME]

        el.removeEventListener('touchstart', touchstartHandler)
        el.removeEventListener('touchmove', touchmoveHandler)
        el.removeEventListener('touchend', touchendHandler)
    }
}

/**
 * 监听 touch 事件
 */
function handleTouchstart (event) {
    const finger = event.changedTouches[0]

    this.startY = finger.pageY
    this.disabled = this.el.getBoundingClientRect().top !== this.el.childNodes[0].getBoundingClientRect().top
    this.instance.updateState('start')
}

function handleTouchmove (event) {
    const { disabled, distance, distanceMax, ratio } = this.options
    if (this.disabled || disabled) return

    const finger = event.changedTouches[0]
    const moveY = (finger.pageY - this.startY) / ratio

    if (moveY < 0) return
    event.preventDefault()
    event.stopPropagation()

    // 根据滑动调整显示高度
    const height = moveY >= distanceMax ? distanceMax : moveY
    this.instance.updateHeight(height, true)

    // 调整显示的状态
    if (moveY >= distance) {
        this.instance.updateState('end')
    } else {
        this.instance.updateState('start')
    }
}

function handleTouchend (event) {
    const { disabled, distance, ratio } = this.options
    if (this.disabled || disabled) return

    const finger = event.changedTouches[0]
    const moveY = (finger.pageY - this.startY) / ratio

    if (moveY < distance) {
        this.instance.updateHeight(0, false)
    } else {
        this.instance.updateHeight(35, false)
        this.instance.updateState('loading')

        this.options.callback(() => {
            // this.instance.updateState('done')

            Vue.nextTick(() => {
                this.instance.updateHeight(0, false)
            })
        })
    }
}

/**
 * 将组件插入文档
 */
function insertElement (el, options) {
    const LoadmoreConstructor = Vue.extend(LoadmoreComponent)
    const instance = new LoadmoreConstructor({
        el: document.createElement('div'),
        data: options
    })
    el.insertBefore(instance.$el, el.childNodes[0])

    return instance
}

/**
 * 整理参数格式
 */
function getOptions (el, binding) {
    binding.value = binding.value || {}

    if (typeof binding.value === 'function') {
        binding.value = {
            callback: binding.value
        }
    }

    // 如果没有 callback，则将 disabled 设为 true
    if (typeof binding.value.callback !== 'function') {
        binding.value.disabled = true
    }

    return Object.assign({}, defaults, binding.value)
}
