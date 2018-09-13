<template>
<el-scrollbar class="scrollable" wrap-style="overflow-X: auto;" :native="false">
    <nav class="nav">
        <ul>
            <li>
                <router-link class="nav-link" :to="{ path: '/docs/quickstart' }">Quickstart</router-link>
            </li>

            <template v-for="(group, index) in navs">
                <div :key="group.title" class="nav-label">
                    {{ group.title }}
                </div>

                <ul :key="index">
                    <li v-for="item in group.list" :key="item.name">
                        <router-link class="nav-link" :to="`/docs/${item.name}`" active-class="is-active">
                            {{ item.desc }}
                        </router-link>
                    </li>
                </ul>
            </template>
        </ul>
    </nav>
</el-scrollbar>
</template>

<script>
import configNavs from 'apps/config-doc-nav.json'

export default {
    data () {
        return {
            navs: configNavs
        }
    }
}
</script>

<style lang="scss" scoped>
.scrollable {
    height: 100%;
}

.nav {
    height: 100%;
    padding: 42px 0 42px 20px;
    background-color: #f9fafb;
    color: #4c555a;
    font-size: 14px;
    box-sizing: border-box;

    &-label {
        display: block;
        padding: 8px;
        color: #9da5b3;
        font-weight: bold;
    }

    &-link {
        padding: 8px;
        display: block;
        text-decoration: none;
        color: inherit;
        transition: color .2s;

        &.is-active {
            color: #4078c0;
            border-right: 2px solid;
        }

        &:hover {
            color: #4078c0;
        }
    }
}
</style>
