<template>
    <transition
        name="fade"
        @before-enter="handleBeforeEnter"
        @after-enter="handleAfterEnter"
        @before-leave="handleBeforeLeave"
        @after-leave="handleAfterLeave">
        <div class="t-modal" v-show="visible" @click="handleClick" @touchmove.prevent.stop></div>
    </transition>
</template>

<script>
export default {
    name: 'BaseModal',

    props: {
        visible: Boolean
    },

    data () {
        return {
        }
    },

    methods: {
        handleClick () {
            this.$emit('click')
        },
        /**
         * 动画钩子
         */
        handleBeforeEnter () {
            this.$emit('before-enter')
        },
        handleAfterEnter () {
            this.$emit('after-enter')
        },
        handleBeforeLeave () {
            this.$emit('before-leave')
        },
        handleAfterLeave () {
            this.$emit('after-leave')
        }
    }
}
</script>
