import Prototype from './src/message.js'

Prototype.install = function (Vue) {
    Vue.prototype.$message = Prototype
}

export default Prototype
