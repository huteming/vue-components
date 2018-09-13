export default [
    {
        path: 'image-combine',
        name: 'imageCombine',
        meta: { title: '合并多张图片 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'image-combine/demo',
        name: 'imageCombineDemo',
        meta: { title: '合并多张图片 demo' },
        component: r => require(['./demo'], r)
    }
]
