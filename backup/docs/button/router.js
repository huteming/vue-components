export default [
    {
        path: 'button',
        name: 'button',
        meta: { title: '按钮 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'button/demo',
        name: 'buttonDemo',
        meta: { title: '按钮 demo' },
        component: r => require(['./demo'], r)
    }
]
