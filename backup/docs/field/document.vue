<template>
    <app-view-box title="field" :to="{ name: 'fieldDemo' }" :code="code">
        <base-divider>属性</base-divider>

        <base-panel>
            <base-panel-item
                title="icon"
                subtitle="{String}"
                description="图标"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="label"
                subtitle="{String}"
                description="左侧标题"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="value"
                subtitle="{any}"
                description="表单绑定值"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="type"
                subtitle="{enum} text, number, email, url, tel, date, datetime, password, textarea"
                description="表单类型"
                value="text">
            </base-panel-item>

            <base-panel-item
                title="rows"
                subtitle="{Number}"
                description="行数。type为textarea时生效"
                value="3">
            </base-panel-item>

            <base-panel-item
                title="state"
                subtitle="{enum} success, error, warning"
                description="验证状态"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="disable-clear"
                subtitle="{Boolean}"
                description="禁用清空按钮"
                value="false">
            </base-panel-item>

            <base-panel-item
                title="placeholder"
                subtitle="{String}"
                description="输入框占位符"
                value="请输入">
            </base-panel-item>
        </base-panel>

        <base-divider>插槽</base-divider>

        <base-panel>
            <base-panel-item
                title="default"
                description="自定义右侧区域。如验证码等">
            </base-panel-item>

            <base-panel-item
                title="icon"
                description="自定义图标">
            </base-panel-item>

            <base-panel-item
                title="label"
                description="自定义标题">
            </base-panel-item>
        </base-panel>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            code: [
                '<BaseField icon="icon-success" label="input" v-model="value">'
            ]
        }
    }
}
</script>
