export default [
    {
        path: 'image-picker/document',
        name: 'imagePicker',
        component: r => require(['./document'], r)
    },
    {
        path: 'image-picker/demo',
        name: 'imagePickerDemo',
        component: r => require(['./demo'], r)
    }
]
