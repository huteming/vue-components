<template>
<section class="t-icon-button" v-ripple="{ color: 'rgba(0, 0, 0, .1)' }">
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

    directives: {
        Ripple
    },
}
</script>
