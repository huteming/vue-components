<template>
<app-view-box title="loading demo">
    <div class="content" v-loadmore="handleLoadmore">
    <!-- <div class="content"> -->
        <div class="scrollable">
            <div class="area"></div>
        </div>
    </div>
</app-view-box>
</template>

<script>
export default {
    methods: {
        handleLoadmore (done) {
            setTimeout(done, 1000)
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    height: 700px;
    // margin-top: 100px;
    background: pink;
    overflow: auto;
}

.scrollable {
    width: 100%;
    height: 1200px;
}

.area {
    width: 100%;
    height: 100px;
    border: 1px solid black;
    background: blue;
    box-sizing: border-box;
}
</style>
