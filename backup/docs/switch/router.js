export default [
    {
        path: 'switch',
        name: 'switch',
        meta: { title: 'switch document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'switch/demo',
        name: 'switchDemo',
        meta: { title: 'switch demo' },
        component: r => require(['./demo'], r)
    }
]
