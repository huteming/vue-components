<template>
<div class="page-example">
    <div class="waves ts-btn" data-ripple-disabled="disabled" v-ripple>Press me!</div>
    <div class="waves ts-btn" @click="disabled = !disabled">{{ disabled.toString() }}</div>
</div>
</template>

<script>
import { Ripple } from 'tommy-ui'

export default {
    data () {
        return {
            disabled: true
        }
    },

    directives: {
        Ripple
    },
}
</script>

<style lang="scss" scoped>
.waves {
    position:relative;
    cursor:pointer;
    display:inline-block;
    overflow:hidden;
    text-align: center;
    -webkit-tap-highlight-color:transparent;
    z-index:1;
}

.ts-btn {
    width: 200px;
    height: 56px;
    line-height: 56px;
    background: #f57035;
    color: #fff;
    border-radius: 5px;
}
</style>
