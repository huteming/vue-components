<template>
<div class="page-example">
    <div class="content">
        <div class="icon-group">
            <base-icon icon="success"></base-icon>
            <div>success</div>
        </div>

        <div class="icon-group">
            <base-icon icon="actionsheet"></base-icon>
            <div>actionsheet</div>
        </div>

        <div class="icon-group">
            <base-icon icon="calendar"></base-icon>
            <div>calendar</div>
        </div>

        <div class="icon-group">
            <base-icon icon="infinite"></base-icon>
            <div>infinite</div>
        </div>

        <div class="icon-group">
            <base-icon icon="message"></base-icon>
            <div>message</div>
        </div>

        <div class="icon-group">
            <base-icon icon="card"></base-icon>
            <div>card</div>
        </div>
    </div>
</div>
</template>

<script>
import { Icon as BaseIcon } from 'tommy-ui'

export default {
    components: {
        BaseIcon
    }
}
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
}

.icon-group {
    flex: 1 1 (100% / 3);
    margin-bottom: 15px;
}
</style>
