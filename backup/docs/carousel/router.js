export default [
    {
        path: 'carousel',
        name: 'carousel',
        meta: { title: 'carousel document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'carousel/demo',
        name: 'carouselDemo',
        meta: { title: 'carousel demo' },
        component: r => require(['./demo'], r)
    }
]
