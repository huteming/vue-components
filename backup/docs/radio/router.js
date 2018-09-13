export default [
    {
        path: 'radio',
        name: 'radio',
        meta: { title: '单选 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'radio/demo',
        name: 'radioDemo',
        meta: { title: '单选 demo' },
        component: r => require(['./demo'], r)
    }
]
