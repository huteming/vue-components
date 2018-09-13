<template>
<div class="placeholder" :class="classes">
    <slot>Block</slot>
</div>
</template>

<script>
export default {
    name: 'AppPlaceholder',

    props: {
        inline: Boolean,
        small: Boolean,
        large: Boolean
    },

    computed: {
        classes () {
            return {
                inline: this.inline,
                small: this.small,
                large: this.large
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.placeholder {
    background-color: #ebebef;
    color: #bbb;
    text-align: center;
    height: 30px;
    line-height: 30px;
    width: 100%;

    &.inline {
        width: 100px;
    }

    &.small {
        font-size: 12px;
        height: 15px;
        line-height: 15px;
    }

    &.large {
        height: 50px;
        line-height: 50px;
    }
}
</style>
