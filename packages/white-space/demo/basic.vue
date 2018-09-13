<template>
<div class="page-example">
    <app-placeholder></app-placeholder>
    <base-white-space size="small"></base-white-space>

    <app-placeholder></app-placeholder>
    <base-white-space size="middle"></base-white-space>

    <app-placeholder></app-placeholder>
    <base-white-space size="large"></base-white-space>

    <app-placeholder></app-placeholder>
</div>
</template>

<script>
import { WingBlank as BaseWingBlank, WhiteSpace as BaseWhiteSpace } from 'tommy-ui'

export default {
    data () {
        return {
        }
    },

    components: {
        BaseWingBlank,
        BaseWhiteSpace
    }
}
</script>

<style lang="scss" scoped>
</style>
