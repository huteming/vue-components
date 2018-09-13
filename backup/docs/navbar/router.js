export default [
    {
        path: 'navbar',
        name: 'navbar',
        meta: { title: 'navbar document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'navbar/demo',
        name: 'navbarDemo',
        meta: { title: 'navbar demo' },
        component: r => require(['./demo'], r)
    }
]
