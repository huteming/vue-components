import Vue from 'vue'
import ActionsComponent from './actionsheet.vue'

const ActionsConstructor = Vue.extend(ActionsComponent)

function show ({ options, resolve, reject }) {
    const instance = new ActionsConstructor({
        el: document.createElement('div'),
        propsData: options,
        data: {
            resolve,
            reject
        }
    })

    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
        instance.open()
    })

    return instance
}

function Actionsheet (options) {
    if (options instanceof Array) {
        options = {
            menus: options
        }
    }

    return new Promise((resolve, reject) => {
        show({
            options,
            resolve,
            reject
        })
    })
}

export default Actionsheet
