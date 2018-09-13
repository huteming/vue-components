export default [
    {
        path: 'message',
        name: 'message',
        meta: { title: '消息提示 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'message/demo',
        name: 'messageDemo',
        meta: { title: '消息提示 demo' },
        component: r => require(['./demo'], r)
    }
]
