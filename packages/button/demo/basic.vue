<template>
<div class="page-example">
    <!-- text -->
    <template>
        <base-divider>text Buttons</base-divider>

        <base-flex gutter="10px">
            <base-flex-item>
                <base-button size="small">Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button icon="success">Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button size="large">Button</base-button>
            </base-flex-item>
        </base-flex>
    </template>

    <!-- raised fill -->
    <template>
        <base-divider>Raised Fill Buttons</base-divider>

        <base-flex gutter="10px">
            <base-flex-item>
                <base-button size="small" raised fill>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button icon="success" raised fill>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button size="large" raised fill>Button</base-button>
            </base-flex-item>
        </base-flex>
    </template>

    <!-- raised -->
    <template>
        <base-divider>Fill Buttons</base-divider>

        <base-flex gutter="10px">
            <base-flex-item>
                <base-button size="small" fill>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button icon="success" fill>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button size="large" fill>Button</base-button>
            </base-flex-item>
        </base-flex>
    </template>

    <!-- outline -->
    <template>
        <base-divider>Outline Buttons</base-divider>

        <base-flex gutter="10px">
            <base-flex-item>
                <base-button size="small" outline>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button icon="success" outline>Button</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button size="large" outline>Button</base-button>
            </base-flex-item>
        </base-flex>
    </template>

    <!-- color -->
    <template>
        <base-divider>Color Buttons</base-divider>

        <base-flex gutter="10px">
            <base-flex-item>
                <base-button color="blue" size="small" raised fill>blue</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button color="teal" icon="success" raised fill>teal</base-button>
            </base-flex-item>
            <base-flex-item>
                <base-button color="green" size="large" raised fill>green</base-button>
            </base-flex-item>
        </base-flex>
    </template>

    <!-- 其他 -->
    <template>
        <base-divider>其他</base-divider>

        <base-flex gutter="10px">
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
    </template>
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
