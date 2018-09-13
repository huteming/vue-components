export default [
    {
        path: 'anchor',
        name: 'anchor',
        meta: { title: '锚点 document', configWX: 'custom' },
        component: r => require(['./document'], r)
    },
    {
        path: 'anchor/demo',
        name: 'anchorDemo',
        meta: { title: '锚点 demo', configWX: 'custom' },
        component: r => require(['./demo'], r)
    }
]
