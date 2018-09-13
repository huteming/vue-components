<template>
<section class="t-radio">
    <div class="t-radio-header">
        {{ title }}
    </div>

    <div class="t-radio-container">
        <slot></slot>
    </div>
</section>
</template>

<script>
export default {
    name: 'BaseRadio',

    props: {
        title: String,
        value: {}
    },

    data () {
        return {
        }
    },

    computed: {
    },

    watch: {
    },

    methods: {
    },

    created () {
    }
}
</script>
