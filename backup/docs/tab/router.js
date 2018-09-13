export default [
    {
        path: 'tab',
        name: 'tab',
        meta: { title: 'tab document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'tab/demo',
        name: 'tabDemo',
        meta: { title: 'tab demo' },
        component: r => require(['./demo'], r)
    }
]
