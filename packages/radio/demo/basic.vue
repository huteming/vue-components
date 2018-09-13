<template>
<div class="page">
    <base-radio title="复选框列表" v-model="checkboxValue">
        <base-radio-item
        v-for="(item, index) in checkboxOptions"
        :key="index"
        :checked="item.value">
        {{ item.label }}
        </base-radio-item>
    </base-radio>

    <base-cell class="spacing" label="选中的值" :value="checkboxValue"></base-cell>

    <base-radio title="disabled" v-model="checkboxValue3">
        <base-radio-item
        v-for="(item, index) in checkboxOptions"
        :key="index"
        :checked="item.value"
        :disabled="item.disabled">
        {{ item.label }}
        </base-radio-item>
    </base-radio>

    <base-cell class="spacing" label="选中的值" :value="checkboxValue3"></base-cell>
</div>
</template>

<script>
import { Cell as BaseCell, Radio as BaseRadio, RadioItem as BaseRadioItem } from 'tommy-ui'

export default {
    data () {
        return {
            checkboxOptions: [
                { label: 'label - 1', value: '1', disabled: true },
                { label: 'label - 2', value: '2' },
                { label: 'label - 3', value: '3' },
                { label: 'label - 4', value: '4' }
            ],
            checkboxValue: '2',
            checkboxValue3: '1'
        }
    },

    methods: {
        handleValueChange (val) {
            console.log(val)
        }
    },

    components: {
        BaseCell,
        BaseRadio,
        BaseRadioItem
    }
}
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
    padding: 20px 0;
    background: #F5F5F9;
    box-sizing: border-box;
}

.spacing {
    margin-top: 20px;
}
</style>
