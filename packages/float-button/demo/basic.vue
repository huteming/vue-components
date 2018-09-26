<template>
<div class="page-example">
    <base-float-button icon="add"></base-float-button>

    <BaseWhiteSpace />

    <base-float-button icon="add" mini></base-float-button>

    <BaseWhiteSpace />

    <base-float-button icon="add" text="create"></base-float-button>

    <BaseWhiteSpace />

    <base-float-button icon="add" text="create" text-position="right"></base-float-button>
</div>
</template>

<script>
import { FloatButton, WhiteSpace } from 'tommy-ui'

export default {
    components: {
        BaseFloatButton: FloatButton,
        BaseWhiteSpace: WhiteSpace,
    },
}
</script>

<style lang="scss" scoped>
.page-example {
    padding: 20px;
}
</style>
