<template>
<section class="t-navbar" :class="classes">
    <div class="t-navbar-left">
        <slot name="left"></slot>
    </div>

    <div class="t-navbar-center">
        <slot>{{ title }}</slot>
    </div>

    <div class="t-navbar-right">
        <slot name="right"></slot>
    </div>
</section>
</template>

<script>
export default {
    name: 'BaseNavbar',

    props: {
        mode: {
            type: String,
            default: 'dark',
            validator (val) {
                return ['dark', 'light'].indexOf(val) > -1
            }
        },
        title: String
    },

    computed: {
        classes () {
            return [`t-navbar-${this.mode}`]
        }
    }
}
</script>
