export default [
    {
        path: 'range',
        name: 'range',
        meta: { title: 'range document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'range/demo',
        name: 'rangeDemo',
        meta: { title: 'range demo' },
        component: r => require(['./demo'], r)
    }
]
