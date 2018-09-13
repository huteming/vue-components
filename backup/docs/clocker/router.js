export default [
    {
        path: 'clocker/document',
        name: 'clocker',
        meta: { title: '倒计时 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'clocker/demo',
        name: 'clockerDemo',
        meta: { title: '倒计时 demo' },
        component: r => require(['./demo'], r)
    }
]
