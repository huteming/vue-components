<template>
    <app-view-box title="lazyload demo">
        <base-divider>分隔</base-divider>

        <!-- <div style="height: 300px;margin-top: 20px;" v-image-lazyload="{ selector: 'img' }">
            <img :data-src="img" width="200" height="200" id="image" />

            <div style="height: 100vh;"></div>

            <img :data-src="img" width="200" height="200" id="image" />
        </div> -->
        <img v-image-lazyload="{ onload: handleLoad, onerror: handleError }" v-image-preview="images" :data-src="img" width="200" height="200" id="image" />

        <div style="height: 100vh;"></div>

        <div style="height: 300px;margin-top: 20px;">
            <img v-image-lazyload="{ onload: handleLoad, onerror: handleError }" :data-src="img" width="200" height="200" id="image" />
            <img v-image-lazyload="{ onload: handleLoad, onerror: handleError }" :data-src="img" width="200" height="200" id="image" />
        </div>

        <div style="height: 100vh;"></div>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            img: '',
            src: '',
            images: []
        }
    },

    methods: {
        handleLoad (element) {
            console.log('load', element)
        },
        handleError (element) {
            console.log('error', element)
        }
    },

    mounted () {
        setTimeout(() => {
            this.img = 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg'

            this.images = [
                'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg',
                'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=ff6ed7cfa718972bbc3a06cad6cc7b9d/267f9e2f07082838304837cfb499a9014d08f1a0.jpg',
                'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a919d7dfe524b899c13c7f385e071d59/d52a2834349b033bda94010519ce36d3d439bdd5.jpg',
                'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a01da5ed77f40ad10ae4c1e3672d1151/d439b6003af33a87433692cfca5c10385243b588.jpg'
            ]
        }, 1000)
    }
}
</script>
