<template>
    <app-view-box title="picker-address demo">
        <base-button class="space" @click="visiblePopup = true" block>{{ address }} - {{ addressText }}</base-button>

        <base-picker-address
            :visible.sync="visiblePopup"
            v-model="address"
            :value-text.sync="addressText"
            @change="handleDateChange">
        </base-picker-address>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            address: [],
            addressText: [],

            visiblePopup: false
        }
    },

    methods: {
        handleDateChange () {
            console.log('change', ...arguments)
        }
    },

    mounted () {
        setTimeout(() => {
            this.address = ['51', '5103', '510311']
        }, 2000)
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
