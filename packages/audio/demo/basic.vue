<template>
<div class="page-example">
    <base-audio :url="url2" :title="title" :time="time2"></base-audio>
</div>
</template>

<script>
import { Audio } from 'tommy-ui'

export default {
    data () {
        return {
            title: '走上起跑线，来一场旋风式旅行',

            url: 'http://jhsy-img.caizhu.com/lmdtz8kdhknYebSU3iPJMcrh69yP',
            time: 1216,

            url2: 'http://oocffpuei.bkt.clouddn.com/Fiw-_Pvh52t0LFNpjXKIsJ8XzUrz',
            time2: 17,
        }
    },

    methods: {
    },

    components: {
        BaseAudio: Audio,
    }
}
</script>

<style lang="scss" scoped>
.page-example {
    padding: 20px;
}
</style>
