<template>
    <app-view-box title="field demo">
        <base-field icon="success" label="input" v-model="value"></base-field>
        <base-field placeholder="没有label" v-model="value" autofocus></base-field>
        <base-field label="password" type="password" ></base-field>
        <base-field label="disabled" disabled ></base-field>
        <base-field label="disabled clear" disable-clear ></base-field>
        <base-field label="success" disable-clear state="success"></base-field>
        <base-field label="success" state="success"></base-field>
        <base-field label="error" state="error"></base-field>
        <base-field label="warning" state="warning"></base-field>
        <base-field label="textarea" type="textarea" :rows="6" ></base-field>
        <base-field label="textarea">
            <img src="/static/images/logo.png" alt="" height="48" />
        </base-field>
        <base-field label="textarea">
            <span>0.00</span>
        </base-field>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            value: ''
        }
    }
}
</script>
