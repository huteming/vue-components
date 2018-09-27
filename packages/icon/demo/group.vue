<template>
<div class="icon-group">
    <base-icon :icon="icon" :size="size"></base-icon>
    <div>{{ icon }}</div>
</div>
</template>

<script>
import { Icon } from 'tommy-ui'

export default {
    props: {
        icon: {
            type: String,
            default: '',
        },
        size: String,
    },

    components: {
        BaseIcon: Icon,
    },
}
</script>

<style lang="scss" scoped>
.icon-group {
    flex: 1 1 (100% / 3);
    margin-bottom: 15px;
}
</style>
