export default [
    {
        path: 'calendar',
        name: 'calendar',
        meta: { title: '日历 document' },
        component: r => require(['./document'], r)
    },
    {
        path: 'calendar/demo',
        name: 'calendarDemo',
        meta: { title: '日历 demo' },
        component: r => require(['./demo'], r)
    }
]
