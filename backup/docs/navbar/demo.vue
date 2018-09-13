<template>
<app-view-box title="navbar demo">
    <base-navbar v-model="active" @change="handleChange">
        <base-navbar-item name="first"> 选项一 </base-navbar-item>
        <base-navbar-item name="second"> 选项二 </base-navbar-item>
        <base-navbar-item name="third"> 选项三 </base-navbar-item>
    </base-navbar>
</app-view-box>
</template>

<script>
export default {
    data () {
        return {
            active: 'second'
        }
    },

    methods: {
        handleChange (val) {
            console.log(val)
        }
    }
}
</script>

<style lang="scss" scoped>
.active {
    color: pink;
}
</style>
