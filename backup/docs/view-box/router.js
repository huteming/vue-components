export default [
    {
        path: 'view-box',
        name: 'viewBox',
        meta: { title: 'view-box document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'view-box/demo',
        name: 'viewBoxDemo',
        meta: { title: 'view-box demo' },
        component: r => require(['./demo'], r)
    }
]
