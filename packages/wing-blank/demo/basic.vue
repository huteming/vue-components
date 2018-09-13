<template>
<div class="page-example">
    <base-wing-blank size="small">
        <AppPlaceholder />
    </base-wing-blank>

    <BaseWhiteSpace />

    <base-wing-blank>
        <AppPlaceholder />
    </base-wing-blank>

    <BaseWhiteSpace />

    <base-wing-blank size="large">
        <AppPlaceholder />
    </base-wing-blank>
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
