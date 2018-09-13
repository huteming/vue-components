export default [
    {
        path: 'sticky',
        name: 'sticky',
        meta: { title: '粘性滚动 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'sticky/demo',
        name: 'stickyDemo',
        meta: { title: '粘性滚动 demo' },
        component: r => require(['./demo'], r)
    }
]
