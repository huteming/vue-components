<template>
<section class="t-icon-button" v-ripple>
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
