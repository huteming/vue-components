<template>
<div class="page-docs">
    <header class="header">
        <div class="header-left" @click="visibleNav = !visibleNav">
            <BaseIcon icon="cell" />
        </div>

        <div class="header-middle">tommy-ui</div>

        <div class="header-right"></div>
    </header>

    <main class="container">
        <section class="container-navbar">
            <navbar></navbar>
        </section>

        <el-scrollbar class="container-main content"  wrap-style="overflow-X: auto;">
            <router-view></router-view>
        </el-scrollbar>

        <section class="container-phone">
            <phone></phone>
        </section>
    </main>

    <base-popup v-model="visibleNav" position="left">
        <navbar></navbar>
    </base-popup>
</div>
</template>

<script>
import Navbar from './components/navbar'
import Phone from './components/phone'
import { Icon as BaseIcon, Popup as BasePopup } from 'tommy-ui'

export default {
    data () {
        return {
            visibleNav: false
        }
    },

    watch: {
        '$route' () {
            this.visibleNav = false
        }
    },

    components: {
        Navbar,
        Phone,
        BaseIcon,
        BasePopup
    }
}
</script>

<style lang="scss" scoped>
.page-docs {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
}

.header {
    display: none;
    align-items: center;
    height: 40px;
    padding: 0 15px;
    line-height: 40px;
    color: #fff;
    background-color: #108EE9;

    &-left,
    &-right {
        flex: .5;
    }

    &-middle {
        flex: 1;
        text-align: center;
    }
}

.container {
    flex: 1;
    display: flex;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &-navbar {
        flex: 0 0 250px;
    }

    &-main {
        flex: 1;
        margin: 0 20px;
    }

    &-phone {
        flex: 0 0 405px;
        padding-top: 40px;
    }

    &-header {
        display: none;
    }
}

@media screen and (max-width: 768px) {
    .header {
        display: flex;
    }

    .container {
        &-navbar,
        &-phone {
            display: none;
        }
    }
}
</style>

<style lang="scss" module>
</style>
