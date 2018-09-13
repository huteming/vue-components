<template>
    <section class="t-card is-always-shadow">
        <div class="t-card-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>

        <div class="t-card-content">
            <slot></slot>
        </div>

        <div class="t-card-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BaseCard'
}
</script>
