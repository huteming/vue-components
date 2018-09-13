export default [
    {
        path: 'picker',
        name: 'picker',
        meta: { title: 'picker document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'picker/demo',
        name: 'pickerDemo',
        meta: { title: 'picker demo' },
        component: r => require(['./demo'], r)
    }
]
