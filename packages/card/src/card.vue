<template>
<section class="t-card is-always-shadow">
    <div class="t-card-media" v-if="media">
        <img :src="media" alt="" width="100%" style="display: block;" />
    </div>

    <div class="t-card-header">
        <div class="t-card-header__title">{{ title }}</div>
        <div class="t-card-header__subtitle">{{ subtitle }}</div>
    </div>

    <div class="t-card-content">{{ description }}</div>

    <div class="t-card-actions" v-if="$slots.button || $slots.icon">
        <div class="t-card-actions__buttons">
            <slot name="button"></slot>
        </div>

        <div class="t-card-actions__icons">
            <slot name="icon"></slot>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'BaseCard',

    props: {
        media: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
            deafult: '',
        },
        description: {
            type: String,
            default: '',
        },
    },
}
</script>
