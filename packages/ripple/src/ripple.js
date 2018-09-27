import Vue from 'vue'
import container from './container.vue'

const CTX = '@@Ripple'
const Container = Vue.extend(container)

const defaults = {
    color: 'rgba(255, 255, 255)',
    opacity: 0.3,
    center: false,
    disabled: false,
}

export default {
    name: 'Ripple',

    bind (el, binding, vnode) {
        const options = Object.assign({}, defaults, binding.value || {})

        const instance = new Container({
            el: document.createElement('div'),
            propsData: options,
            data () {
                return {
                    disabled: options.disabled,
                }
            },
        })

        el.appendChild(instance.$el)

        el[CTX] = {
            instance,
            options,
        }
    },

    componentUpdated (el, binding) {
        const { instance } = el[CTX]

        const disabled = binding.value && binding.value.disabled
        if (typeof disabled === 'boolean') {
            instance.disabled = disabled
        }
    },

    unbind (el) {
        const { instance } = el[CTX]

        el.parentNode.removeChild(instance.$el)
    },
}
