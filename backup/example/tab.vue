<template>
    <app-view-box title="tab demo">
        <base-tab v-model="activeName" @tab-click="handleTabClick">
            <base-tab-item label="消息">message</base-tab-item>
            <base-tab-item label="帖子">tie</base-tab-item>
            <base-tab-item label="公告">notice</base-tab-item>
        </base-tab>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            activeName: '1'
        }
    },

    watch: {
        activeName (val) {
            console.log(val)
        }
    },

    methods: {
        handleTabClick (activeName) {
            console.log(activeName)
        }
    }
}
</script>
