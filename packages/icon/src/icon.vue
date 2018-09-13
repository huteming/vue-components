<template>
<i class="iconfont" :class="classes" :style="styles"></i>
</template>

<script>
export default {
    name: 'BaseIcon',

    props: {
        icon: String,
        color: String,
        size: String
    },

    computed: {
        classes () {
            return `icon-${this.icon}`
        },
        styles () {
            return {
                color: this.color,
                'font-size': this.size
            }
        }
    }
}
</script>
