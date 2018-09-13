<template>
<div class="page-example">
    <base-divider>basic</base-divider>

    <base-flex class="mb-20" gutter="8px">
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item :order="-1">
            <div class="placeholder">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="mb-20">
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="mb-20">
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
    </base-flex>

    <base-divider>wrap</base-divider>

    <base-flex wrap="wrap" gutter="15px">
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>

        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>

        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>

        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>

        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>

        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>

        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
    </base-flex>

    <base-divider>align</base-divider>

    <base-flex class="mb-20" align="start">
        <base-flex-item>
            <div class="placeholder small">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder large">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="mb-20" align="center">
        <base-flex-item>
            <div class="placeholder small">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder large">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="mb-20" align="end">
        <base-flex-item>
            <div class="placeholder small">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder large">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="mb-20" align="baseline">
        <base-flex-item>
            <div class="placeholder small">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder large">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="mb-20" align="stretch">
        <base-flex-item>
            <div class="placeholder small">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder">Block</div>
        </base-flex-item>
        <base-flex-item>
            <div class="placeholder large">Block</div>
        </base-flex-item>
    </base-flex>

    <base-divider>justify</base-divider>

    <base-flex class="mb-20" justify="start" gutter="8px">
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="mb-20" justify="center" gutter="8px">
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="mb-20" justify="end" gutter="8px">
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="mb-20" justify="between" gutter="8px">
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="mb-20" justify="around" gutter="8px">
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
    </base-flex>

    <base-divider>align content</base-divider>

    <base-flex class="container" wrap="wrap" align-content="start" gutter="8px">
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="container" wrap="wrap" align-content="center" gutter="8px">
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
    </base-flex>

    <base-flex class="container" wrap="wrap" align-content="end" gutter="8px">
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
        <base-flex-item :grow="0">
            <div class="placeholder inline">Block</div>
        </base-flex-item>
    </base-flex>
</div>
</template>

<script>
import { Flex as BaseFlex, FlexItem as BaseFlexItem, Divider as BaseDivider } from 'tommy-ui'

export default {
    methods: {
    },

    components: {
        BaseFlex,
        BaseFlexItem,
        BaseDivider
    }
}
</script>

<style lang="scss" scoped>
.mb-20 {
    margin-bottom: 20px;
}

.container {
    height: 100px;
    margin-bottom: 20px;
    background: #fff;
}

.placeholder {
    background-color: #ebebef;
    color: #bbb;
    text-align: center;
    height: 30px;
    line-height: 30px;
    width: 100%;

    &.inline {
        width: 100px;
    }

    &.small {
        font-size: 12px;
        height: 15px;
        line-height: 15px;
    }

    &.large {
        height: 50px;
        line-height: 50px;
    }
}
</style>
