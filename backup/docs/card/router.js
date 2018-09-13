export default [
    {
        path: 'card',
        name: 'card',
        meta: { title: '卡片 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'card/demo',
        name: 'cardDemo',
        meta: { title: '卡片 demo' },
        component: r => require(['./demo'], r)
    }
]
