<template>
<section class="t-icon-button" v-ripple="{ color: 'rgba(0, 0, 0, .3)', center: true }">
    <i class="iconfont" :class="`icon-${icon}`"></i>
</section>
</template>

<script>
import Ripple from 'packages/ripple'

export default {
    name: 'BaseIconButton',

    props: {
        icon: {
            type: String,
            default: '',
        }
    },

    data () {
        return {
        }
    },

    mounted () {
    },

    directives: {
        Ripple
    },
}
</script>
