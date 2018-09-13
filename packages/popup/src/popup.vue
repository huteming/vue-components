<template>
<transition :name="transition" @after-leave="handleAfterLeave">
    <div class="t-popup" v-show="visible" :class="classes">
        <slot></slot>
    </div>
</transition>
</template>

<script>
import mask from '../../mask'

export default {
    name: 'BasePopup',

    props: {
        // 显示弹框
        value: {
            type: Boolean,
            default: false
        },
        beforeClose: Function,
        // 显示位置
        position: {
            type: String,
            default: 'middle',
            validator (val) {
                return ['middle', 'top', 'bottom', 'left', 'right'].indexOf(val) > -1
            }
        },
        closeOnClickModal: {
            type: Boolean,
            default: true
        }
    },

    data () {
        return {
            visible: this.value,
            maskInstance: null
        }
    },

    computed: {
        classes () {
            return {
                [`t-popup-${this.position}`]: true
            }
        },
        transition () {
            switch (this.position) {
            case 'top':
                return 'popup-slide-top'
            case 'bottom':
                return 'popup-slide-bottom'
            case 'left':
                return 'popup-slide-left'
            case 'right':
                return 'popup-slide-right'
            default:
                return 'popup-fade'
            }
        }
    },

    watch: {
        value (val) {
            val ? (this.show()) : (this.hide())
        },
        visible (val) {
            this.$emit('input', val)
        }
    },

    methods: {
        handleAfterLeave () {
            this.$emit('closed')
        },
        show () {
            if (['middle', 'bottom', 'left'].indexOf(this.position) > -1) {
                this.maskInstance = mask.show({
                    callbackClick: () => {
                        if (this.closeOnClickModal) {
                            this.hide()
                        }
                    }
                }, this.$el)
            }

            this.visible = true

            this.$emit('open')
        },
        hide () {
            const done = () => {
                if (this.maskInstance) {
                    this.maskInstance.hide()
                }

                this.visible = false

                this.$emit('close')
            }

            if (typeof this.beforeClose === 'function') {
                this.beforeClose(done)
            } else {
                done()
            }
        }
    },

    mounted () {
        if (this.value) {
            this.show()
        }
    }
}
</script>
