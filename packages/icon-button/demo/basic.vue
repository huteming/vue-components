<template>
<div class="page-example">
    <div class="content">
        <base-icon-button icon="favorite_border"></base-icon-button>
    </div>
</div>
</template>

<script>
import { IconButton } from 'tommy-ui'

export default {
    components: {
        BaseIconButton: IconButton,
    },
}
</script>

<style lang="scss" scoped>
.page-example {
    padding: 20px;
}

.content {
    display: flex;
    justify-content: center;
}
</style>
