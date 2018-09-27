<template>
<i class="iconfont" :class="classes" :style="styles"></i>
</template>

<script>
import color from 'mixins/color'

export default {
    name: 'BaseIcon',

    mixins: [color('#000')],

    props: {
        icon: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            default: '',
        },
    },

    computed: {
        classes () {
            return `icon-${this.icon}`
        },
        styles () {
            return {
                color: this.$_normalizedColor,
                'font-size': this.size,
            }
        }
    }
}
</script>
