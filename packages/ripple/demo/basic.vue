<template>
<div class="page-example">
    <div class="waves ts-btn" v-ripple="{ disabled: disabled, color: '' }">Press me!</div>
    <div class="waves ts-btn" v-ripple="{ disabled: disabled, color: 'purple', opacity: 1 }">Press me!</div>
    <div class="waves ts-btn circle" v-ripple="{ disabled: disabled, center: true }">Press me!</div>

    <div class="waves ts-btn" @click="disabled = !disabled">disabled: {{ disabled.toString() }}</div>
    <!-- <div class="waves ts-btn" @click="handleColorChange">color: {{ color || 'default' }}</div> -->
</div>
</template>

<script>
import { Ripple } from 'tommy-ui'

export default {
    data () {
        return {
            disabled: false,
            color: 'purple',
        }
    },

    methods: {
        handleClick () {
            console.log('click basic')
        },
        handleColorChange () {
            if (!this.color) {
                this.color = 'purple'
                return
            }
            if (this.color === 'purple') {
                this.color = 'blue'
                return
            }
            this.color = ''
        },
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

    &.circle {
        width: 56px;
        border-radius: 50%;
    }
}
</style>
