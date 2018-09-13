export default [
    {
        path: 'datepicker',
        name: 'datepicker',
        meta: { title: '日期选择 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'datepicker/demo',
        name: 'datepickerDemo',
        meta: { title: '日期选择 demo' },
        component: r => require(['./demo'], r)
    }
]
