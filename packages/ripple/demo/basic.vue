<template>
<div class="page-example">
    <span class="waves ts-btn" v-ripple>Press me!</span>
</div>
</template>

<script>
import { Ripple } from 'tommy-ui'

export default {
    directives: {
        Ripple
    }
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
