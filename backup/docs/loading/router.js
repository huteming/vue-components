export default [
    {
        path: 'loading',
        name: 'loading',
        meta: { title: '加载状态 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'loading/demo',
        name: 'loadingDemo',
        meta: { title: '加载状态 demo' },
        component: r => require(['./demo'], r)
    }
]
