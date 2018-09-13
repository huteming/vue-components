export default [
    {
        path: 'divider',
        name: 'divider',
        meta: { title: 'divider document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'divider/demo',
        name: 'dividerDemo',
        meta: { title: 'divider demo' },
        component: r => require(['./demo'], r)
    }
]
