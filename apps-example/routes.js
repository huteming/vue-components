import configComponent from 'apps/config-component.json'
import configUtil from 'apps/config-util.json'

let routes = [
    {
        path: '',
        name: 'example',
        meta: { title: '示例' },
        component: () => import('./Home')
    }
]

void [...configComponent, ...configUtil].forEach(nav => {
    nav.list.forEach(page => {
        routes.push({
            path: page.name,
            name: `${page.name}Example`,
            meta: { title: `${page.english} ${page.chinese}`, ...page },
            component: () => import(`packages/${page.name}/demo/basic`)
        })
    })
})

export default [
    {
        path: '/example',
        component: () => import('./App'),
        children: routes
    }
]
