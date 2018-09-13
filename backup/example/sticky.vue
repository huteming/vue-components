<template>
    <app-view-box title="sticky demo">
        <div class="wrapper">
            <div class="content">
                <div v-for="item in 20" :key="`before-${item}`">{{ item }}</div>
            </div>

            <div class="sticky" v-sticky>test sticky 1</div>

            <div class="content">
                <div v-for="item in 20" :key="`middle-${item}`">{{ item }}</div>
            </div>

            <div class="sticky" v-sticky="{ distance: 30 }">test sticky 2</div>

            <div class="content">
                <div v-for="item in 100" :key="`after-${item}`">{{ item }}</div>
            </div>
        </div>
    </app-view-box>
</template>

<script>
export default {
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 0 20px;
}

.sticky {
    height: 30px;
    line-height: 30px;
    background: pink;
}
</style>
