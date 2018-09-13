export default [
    {
        path: 'row',
        name: 'row',
        meta: { title: '布局 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'row/demo',
        name: 'rowDemo',
        meta: { title: '布局 demo' },
        component: r => require(['./demo'], r)
    }
]
