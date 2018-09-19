<template>
<div class="page-example">
    <base-button class="space" @click="visible = true">{{ address }}</base-button>
    <base-button class="space" @click="visible = true">{{ addressText }}</base-button>

    <base-picker-address
        :visible.sync="visible"
        v-model="address"
        :value-text.sync="addressText"
        @change="handleChange">
    </base-picker-address>
</div>
</template>

<script>
import { Button as BaseButton, PickerAddress as BasePickerAddress } from 'tommy-ui'

export default {
    data () {
        return {
            address: [33, 3301, 330106],
            addressText: ['浙江省', '杭州市', '西湖区'],

            visible: false
        }
    },

    methods: {
        handleChange () {
            console.log('change', ...arguments)
        }
    },

    mounted () {
        setTimeout(() => {
        }, 2000)
    },

    components: {
        BaseButton,
        BasePickerAddress
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
