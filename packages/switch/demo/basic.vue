<template>
<div class="page">
    <base-switch v-model="value1">{{ value1.toString() }}</base-switch>
    <base-switch v-model="value2">{{ value2.toString() }}</base-switch>

    <base-cell :title="`选项 ${value3.toString()}`">
        <BaseSwitch v-model="value3" />
    </base-cell>

    <base-cell :title="`选项 ${value4.toString()}`">
        <BaseSwitch v-model="value4" />
    </base-cell>

    <base-cell title="disabled">
        <BaseSwitch disabled />
    </base-cell>
</div>
</template>

<script>
import { Switch as BaseSwitch, Cell as BaseCell } from 'tommy-ui'

export default {
    data () {
        return {
            value1: false,
            value2: true,
            value3: false,
            value4: true
        }
    },

    methods: {
        handleChange (val) {
            console.log('change', val)
        }
    },

    components: {
        BaseSwitch,
        BaseCell
    }
}
</script>

<style lang="scss" scoped>
.page {
    padding: 20px 0;
    background: #F5F5F9;
}
</style>
