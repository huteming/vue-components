import './registerServiceWorker'

import 'normalize.css'
import './assets/style/index.scss'
import './assets/iconfont/iconfont.css'

import * as Components from './components'
export * from './components'
export * from './utils'
export * from './constructors'

// 引入样式
// const styleContext = require.context('packages', true, /\/style\/index\.scss$/)
// styleContext.keys().forEach(styleContext)

export default {
    install (Vue, opts = {}) {
        Object.values(Components).forEach(mod => mod.install(Vue))
    }
}
