<template>
<app-view-box title="range demo">
    <base-range v-model="range" :min="1" :max="99" :step="4" :disabled="disabled" :show-value="showValue" @change="handleChange">
        <div slot="start" v-show="start">
            预设value:
            {{ range }}
        </div>

        <div slot="end" v-show="end">
            预设value:
            {{ range }}
        </div>
    </base-range>

    <base-button @click="disabled = !disabled">toggle disabled</base-button>
    <base-button @click="showValue = !showValue">toggle show value</base-button>
    <base-button @click="start = !start">toggle start</base-button>
    <base-button @click="end = !end">toggle end</base-button>
</app-view-box>
</template>

<script>
export default {
    data () {
        return {
            range: 6,
            disabled: false,
            showValue: false,
            start: false,
            end: false
        }
    },

    methods: {
        handleChange (value) {
            console.log('change', value)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
