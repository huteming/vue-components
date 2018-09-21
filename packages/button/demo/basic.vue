<template>
<div class="page-example">
    <!-- basic -->
    <template>
        <base-divider>basic Buttons</base-divider>

        <base-flex gutter="10px">
            <base-flex-item>
                <base-button>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button>Button</base-button>
            </base-flex-item>
        </base-flex>
    </template>

    <!-- icon -->
    <template>
        <base-divider>icon Buttons</base-divider>

        <base-flex gutter="10px">
            <base-flex-item>
                <base-button icon="success">Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button icon="success" fill="#4caf50">Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button icon="success" outline="#4caf50">Button</base-button>
            </base-flex-item>
        </base-flex>
    </template>

    <!-- size -->
    <template>
        <base-divider>Size Buttons</base-divider>

        <base-flex gutter="10px">
            <base-flex-item>
                <base-button size="small" raised>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button raised>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button size="large" raised>Button</base-button>
            </base-flex-item>
        </base-flex>
    </template>

    <!-- raised -->
    <template>
        <base-divider>Raised Buttons</base-divider>

        <base-flex gutter="10px">
            <base-flex-item>
                <base-button raised>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button raised>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button raised>Button</base-button>
            </base-flex-item>
        </base-flex>
    </template>

    <!-- fill raised -->
    <template>
        <base-divider>Raised Fill Buttons</base-divider>

        <base-flex gutter="10px">
            <base-flex-item>
                <base-button raised fill>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button raised fill="#ff5252">Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button raised fill="#2196f3">Button</base-button>
            </base-flex-item>
        </base-flex>
    </template>

    <!-- outline -->
    <template>
        <base-divider>Raised Outline Buttons</base-divider>

        <base-flex gutter="10px">
            <base-flex-item>
                <base-button>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button outline="#ff5252">Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button outline="#2196f3">Button</base-button>
            </base-flex-item>
        </base-flex>
    </template>

    <base-divider>Color Buttons</base-divider>

    <base-flex gutter="10px" style="margin-bottom: 20px;">
        <base-flex-item>
            <base-button raised fill>Button</base-button>
        </base-flex-item>
        <base-flex-item>
            <base-button raised fill="#ff5252">Button</base-button>
        </base-flex-item>
        <base-flex-item>
            <base-button raised fill="#2196f3">Button</base-button>
        </base-flex-item>
    </base-flex>

    <base-flex gutter="10px">
        <base-flex-item>
            <base-button raised fill="#4caf50">Button</base-button>
        </base-flex-item>
        <base-flex-item>
            <base-button raised fill="#ffc107">Button</base-button>
        </base-flex-item>
    </base-flex>

    <base-divider>其他</base-divider>

    <base-flex gutter="10px" style="margin-bottom: 20px;">
        <base-flex-item :grow="0">
            <base-button fill>inline</base-button>
        </base-flex-item>
        <base-flex-item :grow="0">
            <base-button fill loading>loading</base-button>
        </base-flex-item>
        <base-flex-item :grow="0">
            <base-button fill disabled>disabled</base-button>
        </base-flex-item>
    </base-flex>
</div>
</template>

<script>
import { Button as BaseButton, Divider as BaseDivider, Icon as BaseIcon, Flex, FlexItem } from 'tommy-ui'

export default {
    methods: {
    },

    components: {
        BaseButton,
        BaseDivider,
        BaseIcon,
        BaseFlex: Flex,
        BaseFlexItem: FlexItem,
    }
}
</script>

<style lang="scss" scoped>
.page-example {
    padding: 20px;
}
</style>
