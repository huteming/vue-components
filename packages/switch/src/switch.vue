<template>
<label class="t-switch" :class="disabled ? 'is-disabled' : ''">
    <input class="t-switch-input" type="checkbox" :disabled="disabled" v-model="currentValue" />

    <span class="t-switch-core"></span>

    <div class="t-switch-label" v-if="$slots.default">
        <slot></slot>
    </div>
</label>
</template>

<script>
export default {
    name: 'BaseSwitch',

    props: {
        value: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            currentValue: this.value
        }
    },

    computed: {
    },

    watch: {
        value (val) {
            this.currentValue = val
        },
        currentValue (val) {
            this.$emit('input', val)

            this.$nextTick(() => {
                this.$emit('change', val)
            })
        }
    },

    methods: {
    }
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
