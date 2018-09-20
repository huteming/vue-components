<template>
<div class="page-example">
    <base-divider>完整示例</base-divider>

    <base-tab v-model="active" @change="handleChange">
        <!-- container -->
        <base-tab-container class="item pink" name="home">
            home
        </base-tab-container>

        <base-tab-container class="item white" name="more">
            more
        </base-tab-container>

        <base-tab-container class="item blue" name="me">
            me
        </base-tab-container>

        <!-- pane -->
        <base-tab-pane name="me">
            <base-icon icon="success"></base-icon>
            我
        </base-tab-pane>

        <base-tab-pane name="more">
            <base-icon icon="success"></base-icon>
            更多
        </base-tab-pane>

        <base-tab-pane name="home">
            <base-icon icon="success"></base-icon>
            主页
        </base-tab-pane>
    </base-tab>

    <base-divider>快捷方式</base-divider>

    <base-tab v-model="active2">
        <base-tab-container class="item pink" icon="success" title="主页" name="home">
            home
        </base-tab-container>

        <base-tab-container class="item white" icon="success" title="更多" name="more">
            more
        </base-tab-container>

        <base-tab-container class="item blue" icon="success" title="我" name="me">
            me
        </base-tab-container>

        <base-tab-container class="item pink" title="其他" name="other">
            other
        </base-tab-container>
    </base-tab>
</div>
</template>

<script>
import { Tab as BaseTab, TabPane as BaseTabPane, TabContainer as BaseTabContainer, Icon as BaseIcon, Divider as BaseDivider } from 'tommy-ui'

export default {
    data () {
        return {
            active: 'me',
            active2: 'other',
        }
    },

    watch: {
        active (val) {
            console.log('watch', val)
        }
    },

    methods: {
        handleChange (name) {
            console.log('change', name)
        }
    },

    components: {
        BaseDivider,
        BaseIcon,
        BaseTab,
        BaseTabPane,
        BaseTabContainer,
    },
}
</script>

<style lang="scss" scoped>
.item {
    height: 100px;
    line-height: 100px;
    text-align: center;
}

.pink {
    background-color: pink;
}

.white {
    background-color: white;
}

.blue {
    background-color: lightblue;
}
</style>
