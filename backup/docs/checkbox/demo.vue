<template>
    <app-view-box title="checkbox demo">
        <base-cell label="选中的值" :value="checkboxValue"></base-cell>

        <base-checkbox
            title="hello world"
            v-model="checkboxValue"
            @change="handleValueChange"
            :max="max">
              <base-checkbox-item
                v-for="(item, index) in checkboxOptions"
                :key="index"
                :checked="item.value"
                :disabled="item.disabled">
                {{ item.label }}
              </base-checkbox-item>
        </base-checkbox>

        <base-divider></base-divider>
        <base-button @click="max ? max = 0 : max = 2" block>max {{ max }}</base-button>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            max: 2,
            checkboxOptions: [
                { label: 'label - 1', value: 'value - 1' },
                { label: 'label - 2', value: 'value - 2' },
                { label: 'label - 3', value: 'value - 3' },
                { label: 'label - 4', value: 'value - 4' }
            ],
            checkboxValue: ['value - 1', 'value - 2', 'value - 3']
        }
    },

    methods: {
        handleValueChange (val) {
            console.log(val)
        }
    }
}
</script>
