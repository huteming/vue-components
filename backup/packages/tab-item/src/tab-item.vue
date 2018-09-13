<template>
    <div class="tab-item-wrapper" v-show="ready">
        <transition name="fade" mode="out-in">
            <div class="tab-item__content" v-show="active">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'BaseTabItem',

    props: {
        label: String,
        name: String
    },

    data () {
        return {
            active: false,
            translate: 0,
            tabName: this.name,
            ready: false
        }
    },

    computed: {
        styles () {
            return {
                transform: `translateX(${this.translate}px)`
            }
        }
    },

    methods: {
        translateItem (index, activeIndex) {
            const parentEle = this.$parent.$el.offsetWidth

            this.translate = parentEle * (index - activeIndex)
            this.active = index === activeIndex
            if (!this.tabName) {
                this.tabName = index.toString()
            }

            this.ready = true
        },
        setTabName (index) {
            if (!this.tabName) {
                this.tabName = index.toString()
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
