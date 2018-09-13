<template>
<div class="page" v-infinite-scroll="{ callback: handleReachBottom }" data-infinite-scroll-disabled="disabled" data-infinite-scroll-event="on-emit">
    <!-- <button @click="handleEmit">触发 事件</button> -->

    <div class="item" v-for="item in lists" :key="item">{{ item }}</div>

    <!-- <div class="btn" @click="disabled = !disabled">∩</div> -->
</div>
</template>

<script>
import { InfiniteScroll } from 'tommy-ui'

export default {
    data () {
        return {
            // lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            loading: false,
            disabled: false
        }
    },

    methods: {
        handleReachBottom (done) {
            console.log('reach')
            setTimeout(() => {
                const length = this.lists.length
                for (let i = 1; i < 10; i++) {
                    this.lists.push(length + i)
                }
                done()
            }, 2000)
        },
        handleEmit () {
            console.log('emit')
            this.$emit('on-emit')
        }
    },

    directives: {
        InfiniteScroll
    }
}
</script>

<style lang="scss" scoped>
.btn {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    background: #f6f6f6;
}

.item {
    height: 45px;
    font-size: 15px;
    line-height: 45px;
    text-align: center;
    border-bottom: 1px solid #f6f6f6;
}

.page {
    position: relative;
    // height: 400px;
    // overflow: auto;
}
</style>
