<template>
<div class="page">
    <base-button class="space" @click="visibleDatetime = true">{{ valueDatetime | date }}</base-button>
    <base-picker-datetime
        :visible.sync="visibleDatetime"
        v-model="valueDatetime"
        :min-date="minDate"
        :max-date="maxDate">
    </base-picker-datetime>

    <base-button class="space" @click="visibleDate = true">{{ valueDate | date }}</base-button>
    <base-picker-datetime
        :visible.sync="visibleDate"
        v-model="valueDate"
        :min-date="minDate"
        :max-date="maxDate"
        mode="date">
    </base-picker-datetime>

    <base-button class="space" @click="visibleTime = true">{{ valueTime | date }}</base-button>
    <base-picker-datetime
        :visible.sync="visibleTime"
        v-model="valueTime"
        :min-date="minDate"
        :max-date="maxDate"
        mode="time">
    </base-picker-datetime>
</div>
</template>

<script>
import { PickerDatetime as BasePickerDatetime, Button as BaseButton } from 'tommy-ui'

export default {
    data () {
        return {
            minDate: new Date(2015, 5),
            maxDate: new Date(2019, 6, 1),

            valueDatetime: new Date(),
            visibleDatetime: false,

            valueDate: new Date(),
            visibleDate: false,

            valueTime: new Date(),
            visibleTime: false
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
            const hour = val.getHours()
            const minute = val.getMinutes()
            return `${year}-${month}-${date} ${hour}:${minute}`
        }
    },

    components: {
        BasePickerDatetime,
        BaseButton
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
