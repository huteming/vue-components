import 'sushi-ui'
import 'highlight.js/styles/github-gist.css'
import './assets/style/md.scss'
import 'element-ui/lib/theme-chalk/index.css'
import configNavs from 'apps/config-doc-nav.json'

let routes = [
    {
        path: 'quickstart',
        name: 'quickstart',
        meta: { title: '快速开始' },
        component: () => import('./pages/quickstart.md')
    }
]

configNavs.forEach(nav => {
    nav.list.forEach(page => {
        routes.push({
            path: page.name,
            name: page.name,
            meta: { title: `${page.english} ${page.chinese}`, ...page },
            component: () => import(`packages/${page.name}/README.md`)
            // components: {
            //     default: ,
            //     example: () => import(`packages/${page.name}/demo/basic`)
            // }
        })
    })
})

export default [
    {
        path: '/docs',
        redirect: '/docs/quickstart',
        component: () => import('./App'),
        children: routes
    }
]
