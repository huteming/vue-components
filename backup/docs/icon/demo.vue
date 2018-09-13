<template>
<app-view-box title="icon demo">
    <div class="content">
        <div class="icon-group">
            <base-icon icon="error-reverse" color="pink"></base-icon>
            <div>error-reverse</div>
        </div>

        <div class="icon-group">
            <base-icon icon="actionsheet" color="blue"></base-icon>
            <div>actionsheet</div>
        </div>

        <div class="icon-group">
            <base-icon icon="calendar" color="purple"></base-icon>
            <div>calendar</div>
        </div>

        <div class="icon-group">
            <base-icon icon="infinite" size="20px"></base-icon>
            <div>infinite</div>
        </div>

        <div class="icon-group">
            <base-icon icon="message" size="25px"></base-icon>
            <div>message</div>
        </div>

        <div class="icon-group">
            <base-icon icon="card" size="30px"></base-icon>
            <div>card</div>
        </div>
    </div>
</app-view-box>
</template>

<style lang="scss" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
}

.icon-group {
    flex: 1 1 (100% / 3);
    margin-bottom: 15px;
}
</style>
