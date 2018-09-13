<template>
<label class="t-checkbox-item" :class="{ 't-checkbox-disabled': normalizedDisabled }">
    <input class="t-checkbox-input"
        type="checkbox"
        v-model="currentValue"
        :value="checked"
        :disabled="normalizedDisabled" />

    <div class="t-checkbox-item-icon">
        <BaseIcon icon="success-reverse" color="#26a2ff" size="20px" v-show="isSelected" />
    </div>

    <div class="t-checkbox-item-title">
        <slot></slot>
    </div>
</label>
</template>

<script>
import BaseIcon from '../../icon'

export default {
    name: 'BaseCheckboxItem',

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
        max () {
            return this.$parent.max || Infinity
        },
        isSelected () {
            return this.currentValue.indexOf(this.checked) > -1
        },
        limitMessage () {
            if (this.currentValue.length >= this.max) {
                return 'over-max'
            }
            return ''
        },
        normalizedDisabled () {
            return this.disabled || (!!this.limitMessage && !this.isSelected)
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
