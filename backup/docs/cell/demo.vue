<template>
    <app-view-box title="cell demo">
        <base-cell label="label" value="value"></base-cell>
        <base-cell label="label" is-link></base-cell>
        <base-cell label="label" value="value" is-link></base-cell>
        <base-cell icon="success" label="label" value="value"></base-cell>

        <base-cell label="label" value="value">
            <base-icon icon="warning"></base-icon>
            <div slot="label">slot</div>
        </base-cell>

        <base-cell
            label="很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长"
            value="很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长"
            is-link>
        </base-cell>
    </app-view-box>
</template>

<script>
export default {
    methods: {
    }
}
</script>
