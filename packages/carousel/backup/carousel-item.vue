<template>
<transition :name="transitionName">
    <template v-if="ready">
        <section class="t-carousel-item" :style="styles" v-show="active">
            <slot></slot>
        </section>
    </template>
</transition>
</template>

<script>
export default {
    name: 'BaseCarouselItem',

    props: {
        name: String
    },

    data () {
        return {
            styles: null,
            translate: 0,

            active: true,
            ready: false
        }
    },

    computed: {
        vertical () {
            return this.$parent.vertical
        },
        skip () {
            return this.$parent.skip
        },
        transitionName () {
            if (!this.skip) return ''
            return this.vertical ? 'slide-bottom' : 'slide-right'
        }
    },

    methods: {
        translateItem (index, activeIndex) {
            const { offsetHeight, offsetWidth } = this.$parent.$el
            const parentEle = this.vertical ? offsetHeight : offsetWidth
            const translate = parentEle * (index - activeIndex)

            this.styles = {
                transform: this.vertical ? `translateY(${translate}px)` : `translateX(${translate}px)`,
                transition: 'transform .4s ease-in-out'
            }

            this.translate = translate
            this.active = true
            this.ready = true
        },
        toggleItem (index, activeIndex) {
            this.active = index === activeIndex

            this.styles = null
            this.ready = true
        },
        hideItem () {
            this.active = false
        },
        moveItem (moveX, moveY) {
            this.styles = {
                transform: this.vertical ? `translateY(${this.translate + moveY}px)` : `translateX(${this.translate + moveX}px)`
            }
        }
    },

    created () {
        this.$parent && this.$parent.updateItems()
    },

    destroyed () {
        this.$parent && this.$parent.updateItems()
    }
}
</script>

<style lang="scss" scoped>
@import './style/item.scss';
</style>
