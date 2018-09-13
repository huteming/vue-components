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
