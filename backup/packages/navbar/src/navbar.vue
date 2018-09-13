<template>
<section class="t-navbar">
    <slot></slot>
</section>
</template>

<script>
export default {
    name: 'BaseNavbar',

    props: {
        value: {
            type: [String, Number],
            default: 0
        },
        activeClass: {
            type: String,
            default: 'navbar-active'
        }
    },

    data () {
        return {
            items: [],

            currentName: this.value
        }
    },

    watch: {
        value (val) {
            this.currentName = val
        },
        currentName (val) {
            this.$emit('input', val)
            this.$emit('change', val)
        }
    },

    methods: {
        updateCurrent (currentName) {
            this.currentName = currentName
        },
        updateItems (context) {
            const index = this.$slots.default.indexOf(context.$vnode)

            this.items.splice(index, 0, context)
        }
    }
}
</script>
