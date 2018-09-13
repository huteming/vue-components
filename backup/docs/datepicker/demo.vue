<template>
    <app-view-box title="datepicker demo">
        <base-button class="space" @click="visiblePopup = true" block>{{ date | date }}</base-button>

        <base-datepicker
            :visible.sync="visiblePopup"
            v-model="date"
            :start="start"
            :end="end"
            @change="handleDateChange">
        </base-datepicker>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            date: new Date(2018, 4, 5),
            start: new Date(2015, 5),
            end: new Date(2018, 6, 1),

            visiblePopup: false
        }
    },

    methods: {
        handleDateChange (date) {
            console.log('change date', date)
        }
    },

    filters: {
        date (val) {
            const year = val.getFullYear()
            const month = val.getMonth() + 1
            const date = val.getDate()
            return `${year}-${month}-${date}`
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
    min-height: 100vh;
}

.space {
    margin-bottom: 20px;
}
</style>
