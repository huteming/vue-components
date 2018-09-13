<template>
    <app-view-box title="switch demo">
        <base-switch v-model="switchValue" @change="handleChange">default</base-switch>
        <base-switch disabled>disabled</base-switch>
        <base-switch :value="true" disabled>disabled</base-switch>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            switchValue: true
        }
    },

    methods: {
        handleChange (val) {
            console.log('change', val)
        }
    }
}
</script>
