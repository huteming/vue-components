<template>
<section class="t-navbarItem" :class="classes" @click="handleSelect">
    <slot></slot>
</section>
</template>

<script>
export default {
    name: 'BaseNavbarItem',

    props: {
        name: {
            type: String
        }
    },

    computed: {
        /**
         * 组件名称 或者 在父组件中的位置
         */
        currentName () {
            return this.name || this.$parent.items.indexOf(this)
        },
        isActive () {
            return this.currentName === this.$parent.currentName
        },
        classes () {
            const activeClass = this.$parent.activeClass

            return {
                [activeClass]: this.isActive
            }
        }
    },

    methods: {
        handleSelect () {
            this.$parent.updateCurrent(this.currentName)
        }
    },

    mounted () {
        this.$parent.updateItems(this)
    },

    destroyed () {
        this.$parent.updateItems(this)
    }
}
</script>
