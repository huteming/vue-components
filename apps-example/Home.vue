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
import configComponent from 'apps/config-component.json'
import configUtil from 'apps/config-util.json'
import AppAccordion from './components/accordion'

export default {
    data () {
        return {
            navs: [...configComponent, ...configUtil]
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
