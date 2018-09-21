<template>
<section class="t-button" :class="classes" :style="styles"
    :disabled="normalizedDisabled"
    @click="handleClick"
    v-ripple="{ color: rippleColor }"
    data-ripple-disabled="normalizedDisabled">
    <i class="t-button-icon iconfont" :class="`icon-${normalizedIcon}`" v-if="normalizedIcon"></i>

    <span class="t-button-text" v-if="$slots.default"> <slot></slot> </span>
</section>
</template>

<script>
import Ripple from 'packages/ripple'
import BaseIcon from '../../icon'

export default {
    name: 'BaseButton',

    props: {
        icon: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'normal',
            validator (val) {
                return ['small', 'normal', 'large'].indexOf(val) > -1
            }
        },
        raised: {
            type: Boolean,
            default: false,
        },
        fill: {
            type: [Boolean, String],
            default: false,
        },
        outline: {
            type: String,
            default: '',
        },
        inline: {
            type: Boolean,
            default: false,
        },

        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },

    data () {
        return {
        }
    },

    computed: {
        classes () {
            return {
                [`t-button-disabled`]: this.normalizedDisabled,
                [`t-button-raised`]: this.raised,
                [`t-button-size-${this.size}`]: true,
                [`t-button-inline`]: this.inline,
            }
        },
        styles () {
            const styles = {}

            if (this.fill) {
                styles['background-color'] = (typeof this.fill === 'string') ? this.fill : '#7e848c'
                styles['color'] = '#fff'
            }

            if (this.outline) {
                styles['border'] = `2px solid ${this.outline}`
                styles['color'] = this.outline
            }

            return styles
        },
        rippleColor () {
            if (this.fill) {
                return 'rgba(255, 255, 255, 0.4)'
            }

            return 'rgba(0, 0, 0, .1)'
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

    mounted () {
    },

    methods: {
        handleClick () {
            this.$emit('click')
        }
    },

    components: {
        BaseIcon
    },

    directives: {
        Ripple
    },
}
</script>
