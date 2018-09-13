<template>
    <app-view-box title="clocker demo">
        <base-clocker :start-time="maps[activeIndex].start" :end-time="maps[activeIndex].end" @end="handleEnd">
            <template slot-scope="scope">
                <div>{{ scope.whole }}</div>
                <div>{{ scope.days }}</div>
                <div>{{ scope.hours }}</div>
                <div>{{ scope.minutes }}</div>
                <div>{{ scope.seconds }}</div>
            </template>
        </base-clocker>

        <!-- <base-button @click="handleReset">重置</base-button> -->
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            maps: [
                { start: '2017-06-15 20:53:25', end: '2018-07-18 21:54:35' },
                { start: '2018-07-18 21:54:30', end: '2018-07-18 21:54:35' },
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
            console.log('end')
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
    }
}
</script>
