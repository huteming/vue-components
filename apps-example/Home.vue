<template>
<div class="page-example page-example-home">
    <div class="title">vue components mobile</div>

    <div class="subtitle">vue移动端组件库</div>

    <AppAccordion
        v-for="(item, index) in navs"
        :key="index"
        :title="item.title"
        :list="item.list" />
</div>
</template>

<script>
import configNavs from 'apps/config-doc-nav.json'
import AppAccordion from './components/accordion'

export default {
    data () {
        return {
            navs: configNavs
        }
    },

    computed: {
    },

    methods: {
    },

    mounted () {
    },

    components: {
        AppAccordion
    }
}
</script>

<style lang="scss">
.page-example {
    min-height: 100%;
    background: #f5f5f9;

    &-home {
        padding: 27px 16px;
    }
}
</style>

<style lang="scss" scoped>
.title {
    margin-bottom: 15px;
    color: rgba(0, 0, 0, 0.75);
    font-size: 21px;
    font-weight: normal;
}

.subtitle {
    margin-bottom: 27px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.75);
    font-weight: normal;
}
</style>
