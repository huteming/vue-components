<template>
<transition name="bounce">
    <section class="t-message" v-show="visible" ref="msgbox">
        <div class="t-message-container">
            <div class="t-message-title" v-if="title">{{ title }}</div>

            <div class="t-message-subtitle" v-if="message" v-html="message"></div>

            <div class="t-message-field" v-if="showInput">
                <input class="t-message-field__input" :type="inputType" :value="normalizedInputValue" @input="handleInput" :placeholder="inputPlaceholder" autofocus />
            </div>
        </div>

        <div class="t-message-footer">
            <div class="t-message-footer-btn t-message-footer-btn__cancel" :class="{ 'text-bold': cancelButtonHighlight }" v-if="showCancelButton" @click="handleClose('cancel')">
                {{ cancelButtonText }}
            </div>

            <div class="t-message-footer-btn t-message-footer-btn__confirm" :class="{ 'text-bold': confirmButtonHighlight }" @click="handleClose('confirm')">
                {{ confirmButtonText }}
            </div>
        </div>
    </section>
</transition>
</template>

<script>
import mask from '../../mask'

export default {
    props: {
        // 提示框的标题
        title: {
            type: String,
            default: '提示'
        },
        // 提示框的内容
        message: {
            type: String,
            default: ''
        },

        // 确认按钮的文本
        confirmButtonText: {
            type: String,
            default: '确定'
        },
        // 是否将确认按钮的文本加粗显示
        confirmButtonHighlight: {
            type: Boolean,
            default: false
        },

        // 是否显示取消按钮
        showCancelButton: {
            type: Boolean,
            default: false
        },
        // 取消按钮的文本
        cancelButtonText: {
            type: String,
            default: '取消'
        },
        // 是否将取消按钮的文本加粗显示
        cancelButtonHighlight: {
            type: Boolean,
            default: false
        },

        // 是否显示一个输入框
        showInput: {
            type: Boolean,
            default: false
        },
        // 输入框的类型
        inputType: {
            type: String,
            default: 'text'
        },
        // 输入框的值
        inputValue: {
            default: ''
        },
        // 输入框的占位符
        inputPlaceholder: {
            type: String,
            default: '请输入'
        },

        // 关闭前的回调，会暂停 message 的关闭。done 用于关闭 message
        beforeClose: Function,
        // 是否在点击遮罩时关闭提示框(alert 为 false)
        closeOnClickModal: {
            type: Boolean,
            default: true
        }
    },

    data () {
        return {
            visible: false,
            maskInstance: null,

            normalizedInputValue: this.inputValue,

            resolve: null,
            reject: null
        }
    },

    computed: {
        instanceType () {
            const { showCancelButton, showInput } = this

            if (showInput) {
                return 'prompt'
            } else if (showCancelButton) {
                return 'confirm'
            } else {
                return 'alert'
            }
        }
    },

    methods: {
        handleInput (evt) {
            this.normalizedInputValue = evt.target.value
        },
        handleClose (action) {
            this.hide(action)
        },
        show () {
            this.maskInstance = mask.show({
                callbackClick: () => {
                    if (this.instanceType !== 'alert' && this.closeOnClickModal) {
                        this.hide('cancel')
                    }
                }
            })

            this.visible = true
        },
        hide (action) {
            const data = {
                action,
                inputValue: this.normalizedInputValue
            }

            const done = () => {
                this.maskInstance.hide({
                    callbackAfterLeave: () => {
                        this.getCallback(action)(data)
                        this.destroyElement()
                    }
                })

                this.visible = false
            }

            if (typeof this.beforeClose === 'function') {
                this.beforeClose(data, done)
            } else {
                done()
            }
        },
        getCallback (action) {
            switch (this.instanceType) {
            case 'alert':
                return this.resolve
            default:
                return action === 'confirm' ? this.resolve : this.reject
            }
        },
        destroyElement () {
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        }
    },

    mounted () {
    }
}
</script>
