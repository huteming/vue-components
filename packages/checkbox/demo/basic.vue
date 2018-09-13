<template>
<div class="page">
    <base-checkbox title="复选框列表" v-model="checkboxValue">
        <base-checkbox-item
        v-for="(item, index) in checkboxOptions"
        :key="index"
        :checked="item.value">
        {{ item.label }}
        </base-checkbox-item>
    </base-checkbox>

    <base-cell class="spacing" label="选中的值" :value="checkboxValue"></base-cell>

    <base-checkbox title="最多选择 3 项" v-model="checkboxValue2" :max="3">
        <base-checkbox-item
        v-for="(item, index) in checkboxOptions"
        :key="index"
        :checked="item.value">
        {{ item.label }}
        </base-checkbox-item>
    </base-checkbox>

    <base-cell class="spacing" label="选中的值" :value="checkboxValue2"></base-cell>

    <base-checkbox title="disabled" v-model="checkboxValue3">
        <base-checkbox-item
        v-for="(item, index) in checkboxOptions"
        :key="index"
        :checked="item.value"
        :disabled="item.disabled">
        {{ item.label }}
        </base-checkbox-item>
    </base-checkbox>

    <base-cell class="spacing" label="选中的值" :value="checkboxValue3"></base-cell>
</div>
</template>

<script>
import { Cell as BaseCell, Checkbox as BaseCheckbox, CheckboxItem as BaseCheckboxItem } from 'tommy-ui'

export default {
    data () {
        return {
            checkboxOptions: [
                { label: 'label - 1', value: '1', disabled: true },
                { label: 'label - 2', value: '2' },
                { label: 'label - 3', value: '3' },
                { label: 'label - 4', value: '4' }
            ],
            checkboxValue: [],
            checkboxValue2: [],
            checkboxValue3: ['1']
        }
    },

    methods: {
        handleValueChange (val) {
            console.log(val)
        }
    },

    components: {
        BaseCell,
        BaseCheckbox,
        BaseCheckboxItem
    }
}
</script>

<style lang="scss" scoped>
.page {
    padding: 20px 0;
    background: #F5F5F9;
}

.spacing {
    margin-top: 20px;
}
</style>
