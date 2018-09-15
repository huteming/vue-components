import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'

import Plugins from './plugins/plugins.js'

import AppViewBox from './components/ViewBox'
import AppPlaceholder from './components/Placeholder'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.use(Plugins)
Vue.component(AppViewBox.name, AppViewBox)
Vue.component(AppPlaceholder.name, AppPlaceholder)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
