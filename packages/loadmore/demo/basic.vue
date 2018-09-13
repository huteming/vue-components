<template>
<div class="page" v-loadmore="handleLoadmore">
    <div class="area">
        <div class="area-item" v-for="item in numbers" :key="item">{{ item }}</div>
    </div>
</div>
</template>

<script>
import { Loadmore } from 'tommy-ui'

export default {
    data () {
        return {
            numbers: [0, 1, 2, 3]
        }
    },

    methods: {
        handleLoadmore (done) {
            setTimeout(() => {
                for (let i = 10; i > 0; i--) {
                    this.numbers.unshift(this.numbers[0] - 1)
                }
                done()
            }, 1500)
        }
    },

    directives: {
        Loadmore
    }
}
</script>

<style lang="scss" scoped>
.area {
    width: 100%;
    height: 100px;
    box-sizing: border-box;

    &-item {
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgba(200, 200, 200, .5);
    }
}
</style>
