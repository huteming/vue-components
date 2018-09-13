import * as tools from './tools/tools'
import * as request from './http/http'
import wxConfig from './wx/config.js'

function install (Vue, opts = {}) {
    Vue.prototype.$tools = Object.assign({ wx: wxConfig }, request, tools)
}

export default {
    install
}
