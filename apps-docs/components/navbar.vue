<template>
<el-scrollbar class="scrollable" wrap-style="overflow-X: auto;" :native="false">
    <ul class="nav">
        <li class="nav-item">
            <router-link class="nav-spacing-1" :to="{ path: '/docs/quickstart' }">Quickstart</router-link>
        </li>

        <li class="nav-item-container" v-for="(nav, type) in navs" :key="type">
            <div class="nav-item-title nav-spacing-1">{{ type }}</div>

            <ul class="nav" v-for="group in nav" :key="group.title">
                <li class="nav-item-container">
                    <div class="nav-item-subtitle nav-spacing-2">{{ group.title }}</div>

                    <ul class="nav">
                        <li class="nav-item" v-for="item in group.list" :key="item.name">
                            <router-link class="nav-spacing-3" :to="`/docs/${item.name}`">
                                <span>{{ item.english }}</span>
                                <span class="chinese">{{ item.chinese }}</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</el-scrollbar>
</template>

<script>
import configComponent from 'apps/config-component.json'
import configUtil from 'apps/config-util.json'

export default {
    data () {
        return {
            navs: {
                Utils: configUtil,
                Components: configComponent
            }
        }
    },

    computed: {
    }
}
</script>

<style lang="scss" scoped>
.scrollable {
    height: 100%;
    padding: 42px 0;
    background-color: #f9fafb;
    box-sizing: border-box;
}

.nav {
    height: 100%;
    font-size: 14px;
    line-height: 40px;
    box-sizing: border-box;

    &-item {
        &-title {
            color: rgba(0, 0, 0, 0.85);
            font-weight: bold;
        }

        &-subtitle {
            color: rgba(0, 0, 0, 0.45);
        }

        > a {
            display: block;
            height: 40px;
            color: rgba(0, 0, 0, 0.65);
            transition: color .3s ease;
            box-sizing: border-box;

            &.router-link-active,
            &:hover {
                color: #1890ff;
            }

            &.router-link-active {
                border-right: 3px solid #1890ff;
                background-color: #e6f7ff;
            }
        }

        .chinese {
            font-size: 12px;
            margin-left: 6px;
            font-weight: normal;
            opacity: .67;
        }

        &.is-active {
            color: #4078c0;
            border-right: 2px solid;
        }
    }

    &-spacing {
        &-1 {
            padding-left: 25px;
        }

        &-2 {
            padding-left: 50px;
        }

        &-3 {
            padding-left: 75px;
        }
    }
}
</style>
