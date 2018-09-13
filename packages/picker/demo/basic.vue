<template>
<div class="page">
    <base-picker>
        <base-picker-item :options="yearOptions" v-model="yearCurrent"></base-picker-item>
    </base-picker>

    <div class="desc">出生年份: {{ yearCurrent }}</div>

    <base-picker>
        <base-picker-item :options="yearOptions" v-model="year1"></base-picker-item>
        <base-picker-item :options="yearOptions" v-model="year2"></base-picker-item>
    </base-picker>

    <div class="desc">{{ year1 }} ~ {{ year2 }}</div>

    <base-picker>
        <base-picker-item :options="yearOptions" v-model="year3"></base-picker-item>
    </base-picker>

    <div class="desc">动态设置: {{ year3 }}</div>
</div>
</template>

<script>
import { Picker as BasePicker, PickerItem as BasePickerItem } from 'tommy-ui'

export default {
    data () {
        return {
            yearCurrent: 2018,
            year1: 2019,
            year2: 2020,
            year3: 2020
        }
    },

    computed: {
        yearOptions () {
            const options = []
            for (let i = 2018; i < 2028; i++) {
                options.push({
                    label: i,
                    value: i
                })
            }
            return options
        }
    },

    mounted () {
        setInterval(() => {
            const next = this.year3 + 1
            this.year3 = next > 2027 ? 2018 : next
        }, 1500)
    },

    components: {
        BasePicker,
        BasePickerItem
    }
}
</script>

<style lang="scss" scoped>
.desc {
    margin: 10px 0 50px;
}
</style>
