export default [
    {
        path: 'loadmore',
        name: 'loadmore',
        meta: { title: 'loadmore document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'loadmore/demo',
        name: 'loadmoreDemo',
        meta: { title: 'loadmore demo' },
        component: r => require(['./demo'], r)
    }
]
