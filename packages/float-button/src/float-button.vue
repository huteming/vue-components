<template>
<section class="t-float-button" :class="classes" :style="styles" v-ripple>
    <span class="t-float-button-text" :class="{ 'right': textPosition === 'right' }" v-if="text">{{ text }}</span>

    <i class="iconfont" :class="`icon-${icon}`" :style="styleIcon"></i>
</section>
</template>

<script>
import color from 'mixins/color'
import Ripple from 'packages/ripple'

export default {
    name: 'BaseFloatButton',

    mixins: [color('grey')],

    props: {
        icon: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        },
        textPosition: {
            type: String,
            default: 'left',
            validator (val) {
                return ['left', 'right'].indexOf(val) > -1
            },
        },
        mini: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        styles () {
            return {
                background: this.$_normalizedColor,
            }
        },
        classes () {
            return {
                't-float-button--extended': this.text,
                't-float-button--mini': (this.mini && !this.text),
            }
        },
        styleIcon () {
            if (!this.text) return {}

            if (this.textPosition === 'left') {
                return {
                    'margin-left': '12px',
                    'margin-right': '-8px',
                }
            }

            return {
                'margin-left': '-8px',
                'margin-right': '12px',
            }
        }
    },

    directives: {
        Ripple,
    },
}
</script>
