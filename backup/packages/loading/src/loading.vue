<template>
    <transition name="fade-in">
        <div class="loading-wrapper" v-show="visible">
            <div class="loading-icon"></div>

            <p class="loading-message" v-if="message">{{ message }}</p>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'BaseLoading',

    data () {
        return {
            visible: false,
            message: ''
        }
    },

    computed: {
    },

    watch: {
        visible (val) {
            if (val === false) {
                this.$el.addEventListener('transitionend', this.destroyElement)
            }
        }
    },

    methods: {
        close () {
            this.visible = false
        },

        destroyElement () {
            this.$el.removeEventListener('transitionend', this.destroyElement)
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        }
    },

    mounted () {
    }
}
</script>
