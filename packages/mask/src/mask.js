
import Vue from 'vue'
import Component from './mask.vue'

const Constructor = Vue.extend(Component)

export default {
    show (options, element) {
        if (typeof options === 'function') {
            options = {
                callbackClick: options
            }
        }

        const instance = new Constructor({
            el: document.createElement('div'),
            data: options
        })

        const node = element ? element.parentNode : document.body
        node.appendChild(instance.$el)

        Vue.nextTick(() => {
            instance.show()
        })

        return instance
    }
}
