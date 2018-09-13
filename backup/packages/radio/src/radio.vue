<template>
    <section class="t-radio-group">
        <div class="t-radio-group-header">{{ title }}</div>

        <div class="t-radio-group-content">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BaseRadio',

    props: {
        title: String,
        value: {},
        /**
         * 仅展示，禁用单选功能
         */
        display: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
        }
    },

    computed: {
    },

    methods: {
    },

    created () {
    }
}
</script>
