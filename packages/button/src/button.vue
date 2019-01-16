<template>
<section class="t-button" :class="classes" :style="styles"
    :disabled="normalizedDisabled"
    @click="handleClick"
    v-ripple="{ color: rippleColor }"
    data-ripple-disabled="normalizedDisabled">
    <i class="iconfont t-button-icon" :class="`icon-${normalizedIcon}`" v-if="normalizedIcon"></i>

    <span class="t-button-text" v-if="$slots.default"> <slot></slot> </span>
</section>
</template>

<script>
import Ripple from 'packages/ripple'
import color from 'mixins/color'

export default {
    name: 'BaseButton',

    mixins: [color('grey')],

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
            type: Boolean,
            default: false,
        },
        outline: {
            type: Boolean,
            default: false,
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
        styleText () {
            return {
                color: this.fill ? '#fff' : this.$_normalizedColor,
            }
        },
        styleBorder () {
            return {
                border: this.outline ? `2px solid ${this.$_normalizedColor}` : 'none',
            }
        },
        styleBackground () {
            return {
                background: this.fill ? `${this.$_normalizedColor}` : 'none',
            }
        },
        styles () {
            const { styleText, styleBorder, styleBackground } = this
            return { ...styleText, ...styleBorder, ...styleBackground }
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
    },

    directives: {
        Ripple
    },
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
