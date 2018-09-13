<template>
    <div class="t-panel">
        <div class="t-panel-header" v-if="title || $slots.title">
            <slot name="title">{{ title }}</slot>
        </div>

        <div class="t-panel-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BasePanel',

    props: {
        title: String
    }
}
</script>
