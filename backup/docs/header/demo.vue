<template>
    <app-view-box title="header demo">
        <base-header title="默认">
            <div slot="left">左侧文字</div>
            <div slot="right">
                <span>右侧文字</span>
            </div>
        </base-header>

        <base-divider></base-divider>

        <base-header title="这是一个很长很长很长很长很长很长很长很长很长很长的标题">
            <div class="text-ellipsis">自定义标题：这是一个很长很长很长很长很长很长很长很长很长很长的标题</div>
            <div slot="left">back</div>
            <div slot="right">more</div>
        </base-header>

        <base-divider></base-divider>

        <base-header title="左侧没有内容">
            <div slot="right">more</div>
        </base-header>

        <base-divider></base-divider>

        <base-header title="右侧没有内容">
            <div slot="left">more</div>
        </base-header>
    </app-view-box>
</template>

<style lang="scss" scoped>
.more {
    font-size: 25px;
}

.text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
