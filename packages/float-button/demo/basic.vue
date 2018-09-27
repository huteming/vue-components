<template>
<div class="page-example">
    <base-float-button icon="favorite_border"></base-float-button>

    <BaseWhiteSpace size="large" />

    <base-float-button icon="favorite_border" mini></base-float-button>

    <BaseWhiteSpace size="large" />

    <base-float-button icon="add" text="create"></base-float-button>

    <BaseWhiteSpace size="large" />

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
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 20px;
}
</style>
