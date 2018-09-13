<template>
<transition name="fade" @after-leave="handleAfterLeave">
    <div class="t-toast" :class="classes" v-show="visible">
        <div class="t-toast-header" v-if="icon">
            <BaseIcon size="36px" :icon="icon" />
        </div>

        <div class="t-toast-content" v-if="message" v-html="message">
        </div>
    </div>
</transition>
</template>

<script>
import BaseIcon from '../../icon'

export default {
    name: 'BaseToast',

    props: {
        message: String,
        position: {
            type: String,
            default: 'middle',
            validator (val) {
                return ['top', 'middle', 'bottom'].indexOf(val) > -1
            }
        },
        duration: {
            type: Number,
            default: 3000
        },
        icon: String,
        onClose: Function
    },

    data () {
        return {
            visible: false
        }
    },

    computed: {
        classes () {
            return [`t-toast-${this.position}`]
        }
    },

    methods: {
        handleAfterLeave () {
            this.destroyElement()
        },
        open () {
            this.visible = true
        },
        close () {
            if (typeof this.onClose === 'function') {
                this.onClose()
            }

            this.visible = false
        },
        destroyElement () {
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        }
    },

    mounted () {
        if (this.duration > 0) {
            setTimeout(this.close, this.duration)
        }
    },

    components: {
        BaseIcon
    }
}
</script>
