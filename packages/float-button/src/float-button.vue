<template>
<section class="t-float-button" :class="classes" :style="styles">
    <span class="t-float-button-text" v-if="text && textPosition === 'left'">{{ text }}</span>

    <i class="iconfont" :class="`icon-${icon}`"></i>

    <span class="t-float-button-text" v-if="text && textPosition === 'right'">{{ text }}</span>
</section>
</template>

<script>
import color from 'mixins/color'

export default {
    name: 'BaseFloatButton',

    mixins: [color],

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
    },
}
</script>
