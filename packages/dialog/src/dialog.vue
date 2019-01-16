<template>
<transition name="t-dialog">
    <div class="t-dialog" v-show="currentVisible">
        <div class="t-dialog-content">
            <slot></slot>
        </div>

        <div class="t-dialog-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>

        <div class="t-dialog-cancel" :class="`t-dialog-cancel_${closePosition}`" @click="handleClose" v-if="closePosition">
            <BaseIcon icon="close" size="20px" color="#fff" />
        </div>
    </div>
</transition>
</template>

<script>
import mask from '../../mask'
import BaseIcon from '../../icon'

export default {
    name: 'BaseDialog',

    props: {
        value: Boolean,
        beforeClose: Function,
        /**
         * 可选值 out-right, out-left, in-right, in-left, bottom
         */
        closePosition: {
            type: String,
            default: ''
        },
        closeOnClickModal: {
            type: Boolean,
            default: true
        }
    },

    data () {
        return {
            currentVisible: false,
            maskInstance: null
        }
    },

    computed: {
    },

    watch: {
        value (val) {
            val ? (this.show()) : (this.hide())
        },
        currentVisible (val) {
            this.$emit('input', val)
        }
    },

    methods: {
        show () {
            this.maskInstance = mask.show({ callbackClick: this.callbackOnClickModal }, this.$el)

            this.currentVisible = true

            this.$emit('open')
        },
        hide () {
            const done = () => {
                this.maskInstance.hide({ callbackAfterLeave: this.callbackAfterLeave })

                this.currentVisible = false

                this.$emit('close')
            }

            if (typeof this.beforeClose === 'function') {
                this.beforeClose(done)
            } else {
                done()
            }
        },
        handleClose () {
            this.hide()
        },
        /**
         * 点击 modal 回调
         */
        callbackOnClickModal () {
            if (this.closeOnClickModal) {
                this.hide()
            }
        },
        /**
         * Dialog 关闭动画结束时的回调
         */
        callbackAfterLeave () {
            this.$emit('closed')
        }
    },

    mounted () {
        if (this.value) {
            this.show()
        }
    },

    components: {
        BaseIcon
    }
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
