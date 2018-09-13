<template>
    <app-view-box title="badge demo">
        <div class="container">
            <base-badge>1</base-badge>
            <base-badge>new</base-badge>
            <base-badge></base-badge>
            <base-badge>
                <base-icon icon="more"></base-icon>
            </base-badge>
        </div>
    </app-view-box>
</template>

<style lang="scss" scoped>
.container {
    padding: 40px;
}
</style>
