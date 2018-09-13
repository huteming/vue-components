export default [
    {
        path: 'panel',
        name: 'panel',
        meta: { title: 'panel document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'panel/demo',
        name: 'panelDemo',
        meta: { title: 'panel demo' },
        component: r => require(['./demo'], r)
    }
]
