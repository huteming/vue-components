import configNavs from 'apps/config-doc-nav.json'

let routes = [
    {
        path: '',
        name: 'example',
        meta: { title: '示例' },
        component: () => import('./Home')
    }
]

configNavs.forEach(nav => {
    nav.list.forEach(page => {
        routes.push({
            path: page.name,
            name: `${page.name}Example`,
            meta: { title: page.desc },
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
