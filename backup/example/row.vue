<template>
    <app-view-box title="row demo">
        <!-- 默认 -->
        <base-row>
            <base-col v-for="item in 4" :key="item" :span="3">
                <div :class="item % 2 === 0 ? 'bg-purple-light' : 'bg-purple'">{{ item }}</div>
            </base-col>
        </base-row>

        <!-- 自定义间距 -->
        <base-row :gutter="15">
            <base-col v-for="item in 4" :key="item" :span="3">
                <div :class="item % 2 === 0 ? 'bg-purple-light' : 'bg-purple'">{{ item }}</div>
            </base-col>
        </base-row>

        <!-- 自定义占行数 -->
        <base-row>
            <base-col :span="0">
                <div class="bg-purple-light">1</div>
            </base-col>
            <base-col :span="0">
                <div class="bg-purple">2</div>
            </base-col>
            <base-col :span="0">
                <div class="bg-purple-light">3</div>
            </base-col>
            <base-col :span="8">
                <div class="bg-purple">4</div>
            </base-col>
            <base-col :span="0">
                <div class="bg-purple-light">5</div>
            </base-col>
        </base-row>

        <base-row>
            <base-col :span="1">
                <div class="bg-purple-light">1</div>
            </base-col>
            <base-col :span="1">
                <div class="bg-purple">2</div>
            </base-col>
        </base-row>

        <!-- 间隔格数 -->
        <base-row>
            <base-col :span="1">
                <div class="bg-purple-light">1</div>
            </base-col>
            <base-col :span="1" :offset="1">
                <div class="bg-purple-light">2</div>
            </base-col>
        </base-row>

        <!-- justify-content -->
        <base-row justify="space-between">
            <base-col :span="1">
                <div class="bg-purple-light">1</div>
            </base-col>
            <base-col :span="1">
                <div class="bg-purple">2</div>
            </base-col>
        </base-row>

        <!-- align-items -->
        <base-row align="center">
            <base-col :span="0">
                <div class="bg-purple-light">1 <br> 1.1 <br> 1.2</div>
            </base-col>
            <base-col :span="0">
                <div class="bg-purple">2</div>
            </base-col>
        </base-row>

        <!-- 内容过长 隐藏 -->
        <base-row align="center">
            <base-col style="text-align: right;">
                <img src="/static/images/dengken.jpg" alt="" width="80" height="80" />
            </base-col>
            <base-col :span="3">
                <div>
                    <div class="bg-purple-light text-ellipsis">很长很长很长很长很长很长的名字</div>
                </div>
            </base-col>
            <base-col :span="0">
                <div class="bg-purple-light text-ellipsis">尾部</div>
            </base-col>
        </base-row>
    </app-view-box>
</template>

<style lang="scss" scoped>
.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.text-ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>
