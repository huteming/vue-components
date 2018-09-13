import Vue from 'vue'
import ToastComponent from './toast.vue'

const ToastConstructor = Vue.extend(ToastComponent)
let instance = null

const open = function (options) {
    if (instance) {
        instance.close()
    }

    instance = new ToastConstructor({
        el: document.createElement('div'),
        propsData: options
    })
    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
        instance.open()
    })

    return instance
}

const expandMethods = {
    success: {
        icon: 'success'
    },
    error: {
        icon: 'error'
    },
    warning: {
        icon: 'warning'
    },
    loading: {
        icon: 'loading',
        duration: 0
    }
}

const Toast = function (message, duration = 3000, options = {}, expandOptions = {}) {
    let params = expandOptions

    if (message instanceof Object) {
        params = Object.assign({}, message, params)
    } else if (duration instanceof Object) {
        params = Object.assign({ message }, duration, params)
    } else {
        params = Object.assign({}, { message, duration }, options, params)
    }

    return open(params)
}

for (let method in expandMethods) {
    Toast[method] = (...args) => {
        args[3] = expandMethods[method]
        return Toast(...args)
    }
}

export default Toast
