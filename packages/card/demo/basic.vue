<template>
<div class="page-example">
    <base-card media="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg"
        title="Our Changing Planet"
        subtitle="by Kurt Wagner"
        description="Visit ten places on our planet that are undergoing the biggest changes today.">
    </base-card>

    <base-card
        title="Our Changing Planet"
        subtitle="by Kurt Wagner"
        description="Visit ten places on our planet that are undergoing the biggest changes today.">
        <base-button slot="button">read</base-button>
        <base-button slot="button">bookmark</base-button>

        <base-icon-button icon="more" slot="icon"></base-icon-button>
        <base-icon-button icon="arrow-right" slot="icon"></base-icon-button>
    </base-card>
</div>
</template>

<script>
import { Card as BaseCard, Button, IconButton } from 'tommy-ui'

export default {
    components: {
        BaseButton: Button,
        BaseIconButton: IconButton,
        BaseCard,
    }
}
</script>

<style lang="scss" scoped>
.page-example {
    padding: 30px;
}

.text {
    font-size: 14px;
}

.item {
}
</style>
