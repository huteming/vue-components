<template>
    <app-view-box title="radio demo">
        <base-cell label="当前选中" :value="radioValue"></base-cell>

        <base-divider>group</base-divider>

        <base-radio v-model="radioValue" title="仅展示" @change="handleGroupChange" display>
            <base-radio-item
                v-for="item in radioOptions"
                :key="`default-${item.value}`"
                :checked="item.value"
                @change="handleItemChange">
                {{ item.label }}
            </base-radio-item>
        </base-radio>

        <base-divider>单独使用</base-divider>

        <base-radio-item class="item"
            v-for="item in radioOptions"
            :key="`custom-${item.value}`"
            theme-color="#FF5405"
            radio-type="circle"
            :checked="item.value"
            v-model="radioValue"
            @change="handleItemChange">
            <span class="text">{{ item.label }}</span>
        </base-radio-item>

        <base-divider>单独使用</base-divider>

        <base-radio-item class="item" :class="item.value === radioValue ? 'selected' : ''"
            v-for="item in radioOptions"
            :key="`selected-${item.value}`"
            theme-color="#FF5405"
            radio-type="circle"
            radio-position="left"
            :checked="item.value"
            v-model="radioValue"
            @change="handleItemChange">
            <span class="text">{{ item.label }}</span>
        </base-radio-item>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            radioOptions: [
                { label: 'label - 1', value: 'value - 1', disabled: true },
                { label: 'label - 2', value: 'value - 2' },
                { label: 'label - 3', value: 'value - 3' }
            ],
            radioValue: undefined
        }
    },

    computed: {
    },

    methods: {
        handleGroupChange (val) {
            console.log('group change', val)
        },
        handleItemChange (val) {
            console.log('item change', val)
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    height: 68px;

    &.selected {
        background: rgba(255, 84, 5, 0.1);
        color: #FF5405
    }

    .text {
        font-size: 17px;
        line-height: 24px;
    }
}
</style>
