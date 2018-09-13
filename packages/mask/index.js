/**
 * 依赖
 * message, actionsheet, popup
 */
import Prototype from './src/mask.js'

Prototype.install = function (Vue) {
    Vue.prototype.$mask = Prototype
}

export default Prototype
