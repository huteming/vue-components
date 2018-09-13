<template>
    <app-view-box title="message" :to="{ name: 'messageDemo' }" :code="code">
        <base-divider>alert,confirm,prompt 常用属性</base-divider>

        <base-panel title="参数不是对象。按照以下顺序排列">
            <base-panel-item
                title="message"
                subtitle="{String}"
                description="提示的文字"
                value="---">
            </base-panel-item>

            <base-panel-item
                title="title"
                subtitle="{String}"
                description="标题文字"
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
                'this.$message.alert(\'提示文字\')',
                'this.$message.confirm(\'确定执行此操作?\', \'\')',
                'this.$message.prompt(\'\', \'请输入\')'
            ]
        }
    }
}
</script>
