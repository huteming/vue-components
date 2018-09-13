<template>
    <div class="scrollable" ref="scrollable">
        <button v-anchor="'#target'">scroll</button>
        <div id="target" ref="target">target</div>
        <div style="height: 200px;"></div>
    </div>
</template>

<script>
import Anchor from 'packages/anchor/anchor.js'

export default {
    directives: {
        Anchor
    }
}
</script>

<style lang="scss" scoped>
.scrollable {
    position: relative;
    height: 100px;
    width: 100vw;
    overflow: auto;
}
</style>
