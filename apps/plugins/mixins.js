import * as tools from './tools/tools.js'
import * as request from './http/http.js'
import wxConfig from './wx/config.js'

const methods = {}
const targets = Object.assign({ wx: wxConfig }, tools, request)

for (let key in targets) {
    methods[`$_${key}`] = targets[key]
}

export default {
    methods
}
