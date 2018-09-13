export default [
    {
        path: 'icon',
        name: 'icon',
        meta: { title: 'icon document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'icon/demo',
        name: 'iconDemo',
        meta: { title: 'icon demo' },
        component: r => require(['./demo'], r)
    }
]
