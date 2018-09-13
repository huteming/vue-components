import Vue from 'vue'
import Component from './image-preview.vue'
import './image-preview.scss'

const ELEMENT_ATTR_NAME = '@@ImagePreview'
const Constructor = Vue.extend(Component)

const defaults = {
    current: '', // 默认当前dom的src属性
    images: []
}

export default {
    bind (el, binding) {
        const self = {
            el,
            options: getOptions(el, binding)
        }
        self.clickHandler = handleClick.bind(self)

        el.addEventListener('click', self.clickHandler)

        el[ELEMENT_ATTR_NAME] = self
    },

    componentUpdated (el, binding) {
        el[ELEMENT_ATTR_NAME].options = getOptions(el, binding)
    },

    unbind (el) {
        el.removeEventListener('click', el[ELEMENT_ATTR_NAME].clickHandler)
    }
}

/**
 * 处理点击事件
 */
function handleClick () {
    const { current, images } = this.options
    if (!current) {
        console.warn('图片地址不存在')
        return
    }

    const instance = new Constructor({
        el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)

    instance.show(current, images)
}

/**
 * 获取配置对象
 */
function getOptions (el, binding) {
    const current = el.src

    if (!binding.value) {
        binding.value = {
            current,
            images: [current]
        }
    } else if (binding.value instanceof Array) {
        binding.value = {
            current,
            images: binding.value
        }
    }

    return Object.assign({}, defaults, binding.value)
}
