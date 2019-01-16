<template>
<transition name="t-ripple">
    <div class="t-ripple-mask" :style="styles"></div>
</transition>
</template>

<script>
export default {
    props: {
        mergeStyle: Object,
        opacity: Number,
        color: String,
    },

    computed: {
        styles () {
            return {
                opacity: this.opacity,
                'background-color': this.color,

                ...this.mergeStyle,
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import './style/mask.scss';
</style>
