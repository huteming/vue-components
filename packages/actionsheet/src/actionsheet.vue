<template>
<transition name="slide-bottom-out">
    <div class="t-actions" v-show="visible">
        <div class="t-actions-title" v-if="title">{{ title }}</div>

        <div class="t-actions-menus"
            v-for="item in menus"
            :key="item.value"
            @click="handleClickMenu(item.value)">
            {{ item.label }}
        </div>

        <template v-if="cancelText">
            <div class="t-actions-spacing"></div>

            <div class="t-actions-menus" @click="handleClickMenu('')">
                {{ cancelText }}
            </div>
        </template>
    </div>
</transition>
</template>

<script>
import mask from '../../mask'

export default {
    name: 'BaseActionsheet',

    props: {
        title: String,
        menus: {
            type: Array,
            default () {
                return []
            }
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        closeOnClickModal: {
            type: Boolean,
            default: true
        }
    },

    data () {
        return {
            visible: false,
            maskInstance: null,
            resolve: null,
            reject: null
        }
    },

    methods: {
        handleClickMenu (actionValue) {
            this.close(actionValue)
        },
        open () {
            this.maskInstance = mask.show({
                callbackClick: () => {
                    if (this.closeOnClickModal) {
                        this.close()
                    }
                }
            })

            this.visible = true
        },
        close (actionValue) {
            this.maskInstance.hide({
                callbackAfterLeave: () => {
                    actionValue ? this.resolve(actionValue) : this.reject()

                    this.destroyElement()
                }
            })

            this.visible = false
        },
        /**
         * 销毁dom
         */
        destroyElement () {
            this.$destroy()
            this.$el.parentNode.removeChild(this.$el)
        }
    }
}
</script>
