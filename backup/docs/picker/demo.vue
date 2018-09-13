<template>
    <app-view-box title="picker demo">
        <div>pickedValue: {{ month }}</div>
        <div>pickedValue: {{ day }}</div>
            <base-picker-item :options="listData2" v-model="day"></base-picker-item>
        <!-- <base-picker style="position: fixed;bottom: 0;" slot="fixed">
            <base-picker-item :options="listData" v-model="month"></base-picker-item>
            <base-picker-item :options="listData2" v-model="day"></base-picker-item>
        </base-picker> -->
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            listData: Array.from({length: 3}, (value, index) => ({ label: 1 + index, value: 'dataValue' + (index + 1) })),
            listData2: Array.from({length: 30}, (value, index) => ({ label: 1 + index, value: 'customValue' + (index + 1) })),
            month: 'dataValue1',
            day: 'customValue1'
        }
    },

    mounted () {
        setTimeout(() => {
            // this.month = 'dataValue2'
        }, 2000)
    }
}
</script>
