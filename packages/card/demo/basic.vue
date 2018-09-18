<template>
<div class="page-example">
    <base-card>
        <base-flex justify="between" slot="header">
            <base-flex-item>卡片名称</base-flex-item>
            <base-flex-item :grow="0">操作按钮</base-flex-item>
        </base-flex>

        <div>
            <img src="~/apps-example/assets/images/dengken.jpg" alt="" width="100%" style="display: block;" />
        </div>

        <div class="text item" slot="footer">
            辅助说明
        </div>
    </base-card>

    <base-card>
        <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
        </div>
    </base-card>
</div>
</template>

<script>
import { Card as BaseCard, Flex as BaseFlex, FlexItem as BaseFlexItem } from 'tommy-ui'

export default {
    components: {
        BaseCard,
        BaseFlex,
        BaseFlexItem
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
