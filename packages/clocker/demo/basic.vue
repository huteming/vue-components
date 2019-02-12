<template>
<div class="page-example">
    <tm-divider>倒计时结束</tm-divider>

    <tm-clocker :start-time="maps[1].start" :end-time="maps[1].end" @end="handleEnd">
        <template slot-scope="scope">
            <div>{{ scope.whole }}</div>
            <div>{{ scope.days }}</div>
            <div>{{ scope.hours }}</div>
            <div>{{ scope.minutes }}</div>
            <div>{{ scope.seconds }}</div>
        </template>
    </tm-clocker>

    <tm-divider>持续进行</tm-divider>

    <tm-clocker :start-time="maps[0].start" :end-time="maps[0].end">
        <template slot-scope="scope">
            <div>{{ scope.whole }}</div>
            <div>{{ scope.days }}</div>
            <div>{{ scope.hours }}</div>
            <div>{{ scope.minutes }}</div>
            <div>{{ scope.seconds }}</div>
        </template>
    </tm-clocker>
</div>
</template>

<script>
import { TmClocker, TmDivider } from 'tommy-ui'

export default {
    data () {
        return {
            maps: [
                { start: '2017-06-15 20:53:25', end: '2018-07-18 21:54:35' },
                { start: '2018-07-18 21:54:30', end: '2018-07-18 21:54:35' }, // 5s 结束
                { start: '2018-07-18 21:54:30', end: '2018-07-16 21:54:35' },
                { start: '', end: '' },
                { start: '2018-07-18 21:54:30', end: '' },
                { start: '', end: '2018-07-16 21:54:35' },
                { start: undefined, end: undefined }
            ],
            activeIndex: 1
        }
    },

    methods: {
        handleEnd () {
            alert('end')
        },
        handleReset () {
            const save = this.activeIndex
            this.activeIndex = 100
            this.$nextTick(() => {
                this.activeIndex = save
            })
        }
    },

    mounted () {
        setTimeout(() => {
            // this.activeIndex = 0
        }, 1500)
    },

    components: {
        TmClocker,
        TmDivider,
    }
}
</script>
