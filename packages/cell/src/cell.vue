<template>
<section class="t-cell" @click="handleClick">
    <div class="t-cell-icon" v-if="icon || $slots.icon">
        <slot name="icon">
            <BaseIcon :icon="icon" size="22px" color="#108EE9" />
        </slot>
    </div>

    <div class="t-cell-body">
        <slot name="title">
            <div class="t-cell-body__title">{{ title }}</div>

            <div class="t-cell-body__subtitle" v-if="subtitle">{{ subtitle }}</div>
        </slot>
    </div>

    <div class="t-cell-value" v-if="value || $slots.default">
        <slot> {{ value }} </slot>
    </div>

    <div class="t-cell-link" v-if="isLink"></div>
</section>
</template>

<script>
import BaseIcon from '../../icon'

export default {
    name: 'BaseCell',

    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        value: {},
        /**
         * vue-router 的路由参数
         */
        to: {},
        /**
         * 显示箭头
         */
        isLink: {
            type: Boolean,
            default: false
        }
    },

    computed: {
    },

    methods: {
        handleClick () {
            if (this.to) {
                if (this.$router) {
                    this.$router.push(this.to)
                } else {
                    location.assign(this.to)
                }
            }
        }
    },

    components: {
        BaseIcon
    }
}
</script>
