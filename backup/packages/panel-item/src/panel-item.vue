<template>
    <div class="t-panel-item">
        <div class="t-panel-item-left" v-if="image">
            <slot>
                <img :src="image" height="100%" width="100%" />
            </slot>
        </div>

        <div class="t-panel-item-middle">
            <div class="t-panel-item-title">
                <slot name="title">
                    {{ title }}
                </slot>
            </div>

            <div class="t-panel-item-subtitle" v-if="subtitle">
                {{ subtitle }}
            </div>

            <div class="t-panel-item-description" v-if="description">
                {{ description }}
            </div>
        </div>

        <div class="t-panel-item-right">
            <div class="t-panel-item-value">
                {{ value }}
            </div>

            <div class="t-panel-item-supplement">
                {{ supplement }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BasePanelItem',

    props: {
        image: String,

        title: String,
        subtitle: String,
        description: String,

        value: [String, Number],
        supplement: String
    },

    computed: {
    }
}
</script>
