<template>
<transition :name="transitionName" mode="out-in">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</transition>
</template>

<script>
export default {
    name: 'components',

    data () {
        return {
            transitionName: 'move-left'
        }
    },

    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'move-right' : 'move-left'
        }
    }
}
</script>

<style lang="scss" scoped>
.move-left-enter-active,
.move-left-leave-active,
.move-right-enter-active,
.move-right-leave-active {
    transition: all .5s cubic-bezier(.55,0,.1,1);
}

.move-left-enter,
.move-right-leave-to {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}

.move-left-leave-to,
.move-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
</style>

<style lang="scss">
.page-example {
    min-height: 100%;
    background: #f5f5f9;
    box-sizing: border-box;

    &-home {
        padding: 27px 16px;
    }
}

// 滚动条整体部分
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

// 滚动条两端的按钮
::-webkit-scrollbar-button {
    display: none;
}

// 外层轨道
::-webkit-scrollbar-track {
}

// 内层滚动槽
::-webkit-scrollbar-track-piece {
    background-color: #f3f3f3;
}

// 滚动的滑块
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(144, 147, 153, .5);
    transition: .3s background-color;
}

::-webkit-scrollbar-thumb:vertical:hover {
    background-color: rgba(144, 147, 153, .7);
}
</style>
