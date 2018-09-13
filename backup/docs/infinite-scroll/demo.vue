<template>
    <app-view-box title="infinite-scroll demo">
        <div class="content" v-infinite-scroll="handleReachBottom">
            <div class="item" v-for="item in lists" :key="item">{{ item }}</div>

            <base-divider :loading="loading">到底了</base-divider>
        </div>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            loading: false
        }
    },

    methods: {
        handleReachBottom () {
            this.loading = true
            setTimeout(() => {
                const length = this.lists.length
                for (let i = 1; i < 30; i++) {
                    this.lists.push(length + i)
                }
                this.loading = false
            }, 2000)
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    height: 45px;
    font-size: 15px;
    line-height: 45px;
    text-align: center;
    border-bottom: 1px solid #f6f6f6;
    background: #fff;
}
</style>
