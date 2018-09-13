<template>
<app-view-box title="navbar" :to="{ name: 'navbarDemo' }" :code="code">
    <base-divider>navbar 属性</base-divider>

    <base-panel>
        <base-panel-item
            title="value"
            subtitle="{String | Number}"
            description="选中时返回值。返回 item 的 name 值 或者 索引"
            value="0">
        </base-panel-item>
        <base-panel-item
            title="active-class"
            subtitle="{String}"
            description="激活时class类名"
            value="navbar-active">
        </base-panel-item>
    </base-panel>

    <base-divider>navbar 事件</base-divider>

    <base-panel>
        <base-panel-item
            title="change"
            description="参数同 value 值">
        </base-panel-item>
    </base-panel>

    <base-divider>navbar-item 属性</base-divider>

    <base-panel>
        <base-panel-item
            title="name"
            subtitle="{String}"
            description="唯一标识符"
            value="---">
        </base-panel-item>
    </base-panel>
</app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<BaseNavbar v-model="value" />',
                '<base-navbar-item> <slot /> <base-navbar-item>'
            ]
        }
    }
}
</script>
