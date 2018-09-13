<template>
<section class="t-button"
    :class="classes"
    :disabled="normalizedDisabled"
    @click="handleClick">
    <base-icon class="t-button-icon" :icon="normalizedIcon" v-if="normalizedIcon"></base-icon>
    <span v-if="$slots.default"> <slot></slot> </span>
</section>
</template>

<script>
import BaseIcon from '../../icon'

export default {
    name: 'BaseButton',

    props: {
        /**
         * 可选值。default, primary, danger
         */
        type: {
            type: String,
            default: 'default',
            validator (val) {
                return ['default', 'primary', 'danger'].indexOf(val) > -1
            }
        },
        plain: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'normal',
            validator (val) {
                return ['normal', 'small'].indexOf(val) > -1
            }
        },

        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        inline: {
            type: Boolean,
            default: false
        },

        icon: {
            type: String,
            default: ''
        }
    },

    computed: {
        classes () {
            const clsType = `t-button-${this.type}`
            const clsPlain = this.plain ? `${clsType}-plain` : clsType

            const suffixBlock = this.inline ? 'inline' : 'block'

            return {
                't-button-disabled': this.normalizedDisabled,
                [`t-button-${this.size}`]: true,
                [`t-button-${suffixBlock}`]: true,
                [`${clsPlain}`]: true
            }
        },
        normalizedIcon () {
            if (this.loading) {
                return 'loading'
            }
            return this.icon
        },
        normalizedDisabled () {
            return this.disabled || this.loading
        }
    },

    methods: {
        handleClick () {
            this.$emit('click')
        }
    },

    components: {
        BaseIcon
    }
}
</script>
