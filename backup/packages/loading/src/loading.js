import Vue from 'vue'
import LoadingComponent from './loading.vue'

const LoadingConstructor = Vue.extend(LoadingComponent)
let instance = null

export default {
    show (options) {
        if (instance) return

        if (typeof options === 'string') {
            options = {
                message: options
            }
        }

        instance = new LoadingConstructor({
            el: document.createElement('div'),
            data: options
        })
        document.body.appendChild(instance.$el)

        Vue.nextTick(() => {
            instance.visible = true
        })
    },

    hide () {
        if (instance) {
            instance.visible = false
            instance = null
        }
    }
}
