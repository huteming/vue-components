<template>
<label class="t-radio-item" :class="{ 't-radio-disabled': normalizedDisabled }">
    <input class="t-radio-input"
        type="radio"
        v-model="currentValue"
        :value="checked"
        :disabled="normalizedDisabled" />

    <div class="t-radio-item-icon">
        <BaseIcon icon="success-reverse" color="#26a2ff" size="20px" v-show="isSelected" />
    </div>

    <div class="t-radio-item-title">
        <slot></slot>
    </div>
</label>
</template>

<script>
import BaseIcon from '../../icon'

export default {
    name: 'BaseRadioItem',

    props: {
        checked: {},
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
        }
    },

    computed: {
        isSelected () {
            return this.currentValue === this.checked
        },
        normalizedDisabled () {
            return this.disabled
        },
        currentValue: {
            get () {
                return this.$parent.value
            },
            set (val) {
                this.$parent.$emit('input', val)
                this.$parent.$emit('change', val)
            }
        }
    },

    methods: {
    },

    components: {
        BaseIcon
    }
}
</script>

<style lang="scss" scoped>
@import './style/item.scss';
</style>
