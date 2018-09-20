<template>
<div class="t-tab-content">
    <slot></slot>
</div>
</template>

<script>
export default {
    props: {
        value: String
    },

    data () {
        return {
            swiping: false,
            eleWidth: 0
        }
    },

    watch: {
        value (newValue, oldValue) {
            const lastIndex = this.$children.findIndex(item => item.name === oldValue)

            this.swipeTransition(lastIndex)
        },
    },

    mounted () {
        this.eleWidth = this.$el.clientWidth
    },

    methods: {
        swipeTransition (lastIndex) {
            this.swipeMove(lastIndex)

            const index = this.$children.findIndex(item => item.name === this.value)

            setTimeout(() => {
                const self = this

                this.$el.classList.add('t-tab-transition')
                this.swipeMove(index)

                this.$el.addEventListener('webkitTransitionEnd', function handler () {
                    self.$el.classList.remove('t-tab-transition')
                    self.$el.removeEventListener('webkitTransitionEnd', handler)
                    self.$el.style.webkitTransform = ''
                    self.swiping = false
                })
            }, 0)
        },
        swipeMove (index) {
            this.$el.style.webkitTransform = `translate3d(${-index * this.eleWidth}px, 0, 0)`
            this.swiping = true
        },
    },
}
</script>
