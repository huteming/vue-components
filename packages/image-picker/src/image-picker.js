import Vue from 'vue'
import field from './field.vue'

const CTX = '$$ImagePicker'

const defaults = {
    multiple: false,
    max: Infinity,
    disabled: false,
    onload: (dataURL) => {},
    onerror: (error) => {
        if (process.env.NODE_ENV === 'development') {
            alert(error && error.message)
        } else {
            throw error
        }
    },
}

const Field = Vue.extend(field)

export default {
    name: 'ImagePicker',

    bind (el, binding) {
        if (typeof binding.value === 'function') {
            binding.value = {
                onload: binding.value
            }
        }
        const options = Object.assign({}, defaults, binding.value || {})

        const instance = new Field({
            el: document.createElement('div'),
            propsData: options,
            data () {
                return {
                    max: options.max,
                    disabled: options.disabled,
                }
            },
        })

        el.appendChild(instance.$el)
        el.addEventListener('click', instance.select)

        el[CTX] = {
            options,
            instance,
        }
    },

    componentUpdated (el, binding) {
        const { instance } = el[CTX]

        instance.max = binding.value && binding.value.max
        instance.disabled = binding.value && binding.value.disabled
    },

    unbind (el) {
        const { instance } = el[CTX]

        el.removeEventListener('click', instance.select)
        el.removeChild(instance.$el)
    },
}
