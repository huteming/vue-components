import Vue from 'vue'
import VueRouter from 'vue-router'
import routesExample from 'apps-example/routes.js'
import routesDocs from 'apps-docs/routes.js'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'app',
        redirect: '/docs'
    },

    ...routesExample,
    ...routesDocs
]

const router = new VueRouter({
    // mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    // 设置文档标题
    const title = to.meta && to.meta.title
    document.title = title || '移动端组件'

    next()
})

export default router
