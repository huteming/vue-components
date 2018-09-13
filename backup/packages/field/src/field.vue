<template>
    <section class="field-wrapper">
        <div class="field-icon" v-if="icon || $slots.icon">
            <slot name="icon">
                <base-icon :icon="icon"></base-icon>
            </slot>
        </div>

        <div class="field-hd" :style="stylesHead" v-if="label || $slots.label">
            <slot name="label">
                <span class="field-hd-label"> {{ label }} </span>
            </slot>
        </div>

        <div class="field-bd">
            <textarea
                v-if="type === 'textarea'"
                v-bind="$attrs"
                :rows="rows"
                v-model="currentValue"
                :placeholder="placeholder"
                @blur="handleBlur"
                @focus="handleFocus"
                @change="$emit('change', currentValue)">
            </textarea>

            <input
                v-else
                :type="type"
                v-bind="$attrs"
                :value="currentValue"
                :placeholder="placeholder"
                @input="handleInput"
                @blur="handleBlur"
                @focus="handleFocus"
                @change="$emit('change', currentValue)" />
        </div>

        <div class="field-clear" v-if="!disableClear">
            <base-icon icon="error" class="field-ft-clear" @click.native="currentValue = ''" v-if="currentValue"></base-icon>
        </div>

        <div class="field-ft" v-if="state">
            <base-icon icon="success" class="field-ft-success" v-if="state === 'success'"></base-icon>
            <base-icon icon="error" class="field-ft-error" v-if="state === 'error'"></base-icon>
            <base-icon icon="warning" class="field-ft-warning" v-if="state === 'warning'"></base-icon>
        </div>

        <div class="field-slot" v-if="$slots.default">
            <slot></slot>
        </div>
    </section>
</template>

<script>
import BaseIcon from '../../icon'

export default {
    name: 'BaseField',

    props: {
        icon: {
            type: String
        },
        label: {
            type: String
        },
        value: {},
        type: {
            type: String,
            default: 'text'
        },
        rows: {
            type: Number,
            default: 3
        },
        /**
         * 验证状态。可选值 success, error, warning
         */
        state: {
            type: String,
            default: ''
        },
        disableClear: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: '请输入'
        }
    },

    data () {
        return {
            currentValue: this.value
        }
    },

    computed: {
        stylesHead () {
            const styles = {}

            styles['width'] = this.labelWidth

            return styles
        }
    },

    watch: {
        value (val) {
            this.currentValue = val
        },
        currentValue (val) {
            this.$emit('input', val)
        }
    },

    methods: {
        handleBlur () {
            this.$emit('blur', this.currentValue)
        },
        handleFocus () {
            this.$emit('focus', this.currentValue)
        },
        handleInput (evt) {
            this.currentValue = evt.target.value
        }
    },

    components: {
        BaseIcon
    }
}
</script>
