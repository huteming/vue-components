export default [
    {
        path: 'image-lazyload',
        name: 'imageLazyload',
        meta: { title: 'lazyload' },
        component: r => require(['./document'], r)
    },
    {
        path: 'image-lazyload/demo',
        name: 'imageLazyloadDemo',
        meta: { title: 'lazyload demo' },
        component: r => require(['./demo'], r)
    }
]
