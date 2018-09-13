<template>
    <app-view-box title="card demo">
        <div class="content">
            <base-card>
                <base-row justify="space-between" slot="header">
                    <base-col>卡片名称</base-col>
                    <base-col>操作按钮</base-col>
                </base-row>

                <div>
                    <img src="/static/images/dengken.jpg" alt="" width="100%" style="display: block;" />
                </div>

                <div v-for="o in 4" :key="o" class="text item" slot="footer">
                    {{ '列表内容 ' + o }}
                </div>
            </base-card>
        </div>
    </app-view-box>
</template>

<style lang="scss" scoped>
.content {
    padding: 30px;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
</style>
