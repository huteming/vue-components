<template>
<div class="phone">
    <iframe class="phone-page" frameborder="0" :src="examplePath">
    </iframe>

    <!-- <el-scrollbar class="phone-page" :wrap-class="$style['container-scrollable']">
        <router-view name="example"></router-view>
    </el-scrollbar> -->
</div>
</template>

<script>
export default {
    name: 'phone',

    computed: {
        examplePath () {
            const { origin, pathname } = location

            return `${origin}${pathname}#${this.$route.path.replace('docs', 'example')}`
        }
    }
}
</script>

<style lang="scss" scoped>
.phone {
    width: 405px;
    height: 100%;
    margin-left: 20px;
    padding: 100px 15px;
    background-image: url('../assets/images/phone.png');
    background-repeat: no-repeat;
    background-size: 100%;
    box-sizing: border-box;

    &-page {
        width: 100%;
        height: 667px;
        background-color: #fff;
    }
}
</style>
