export default [
    {
        path: 'badge',
        name: 'badge',
        meta: { title: '徽章 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'badge/demo',
        name: 'badgeDemo',
        meta: { title: '徽章 demo' },
        component: r => require(['./demo'], r)
    }
]
