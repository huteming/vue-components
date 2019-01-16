<template>
<div class="t-tab-pane" :class="{ 't-tab-pane-active': active }" @click="handleClick">
    <slot>
        <i class="iconfont" :class="`icon-${icon}`" v-if="icon"></i>
        <span v-if="title">{{ title }}</span>
    </slot>

    <transition name="spread-center">
        <div class="t-tab-pane-line" v-show="active"></div>
    </transition>
</div>
</template>

<script>
export default {
    name: 'BaseTabPane',

    props: {
        icon: String,
        title: String,
        name: {
            type: String,
            required: true
        }
    },

    data () {
        return {
        }
    },

    computed: {
        active () {
            return this.$parent.value === this.name
        }
    },

    methods: {
        handleClick () {
            this.$parent.$emit('change', this.name)
        },
    },
}
</script>

<style lang="scss" scoped>
@import './style/pane.scss';
</style>
