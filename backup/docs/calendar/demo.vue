<template>
    <app-view-box title="calendar demo">
        <base-calendar
            :events="events"
            @click="handleDayClick">
            <template slot-scope="scope">
                <font v-if="scope.IsSign === 1">签到</font>
                <font v-if="scope.IsSign === 0">未签到</font>
            </template>
        </base-calendar>

        <div style="height: 100vh;"></div>

        <base-divider>到底了</base-divider>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            events: [
                { date: '2018-7-30', IsSign: 1, sign: 'primary', description: 'default' },
                { date: '2018-08-02', IsSign: 0 },
                { date: '2018-08-03', IsSign: 1, sign: 'primary' },
                { date: '2018-08-06', IsSign: 1, sign: 'primary' }
            ]
        }
    },

    watch: {
    },

    methods: {
        handleDayClick (event) {
            if (event.hasEvent) {
                console.log(event)
            }
        }
    },

    mounted () {
        setTimeout(() => {
            // this.events.push({ date: '2018-08-04', description: '签到' })
        }, 2000)
    }
}
</script>

<style lang="scss" scoped>
.active {
    color: #2A73FD;
}
</style>
