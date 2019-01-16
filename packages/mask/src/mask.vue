<template>
<transition
    name="fade"
    @before-enter="handleBeforeEnter"
    @after-enter="handleAfterEnter"
    @before-leave="handleBeforeLeave"
    @after-leave="handleAfterLeave">
    <div class="t-mask" v-show="visible" @click="handleClick" @touchmove.prevent.stop></div>
</transition>
</template>

<script>
export default {
    name: 'BaseMask',

    data () {
        return {
            visible: false,

            callbackClick: null,
            callbackBeforeEnter: null,
            callbackAfterEnter: null,
            callbackBeforeLeave: null,
            callbackAfterLeave: null
        }
    },

    computed: {
    },

    methods: {
        handleClick () {
            if (typeof this.callbackClick === 'function') {
                this.callbackClick()
            }
        },
        /**
         * 动画钩子
         */
        handleBeforeEnter () {
            if (typeof this.callbackBeforeEnter === 'function') {
                this.callbackBeforeEnter()
            }
        },
        handleAfterEnter () {
            if (typeof this.callbackAfterEnter === 'function') {
                this.callbackAfterEnter()
            }
        },
        handleBeforeLeave () {
            if (typeof this.callbackBeforeLeave === 'function') {
                this.callbackBeforeLeave()
            }
        },
        handleAfterLeave () {
            this.handleElementDestroy()

            if (typeof this.callbackAfterLeave === 'function') {
                this.callbackAfterLeave()
            }
        },
        /**
         * helper ------------------
         */
        show () {
            this.visible = true
        },
        hide (options) {
            for (let key in options) {
                this[key] = options[key]
            }

            this.visible = false
        },
        handleElementDestroy () {
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        }
    }
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
