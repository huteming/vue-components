<template>
<div class="page-example">
    <base-audio :url="url" :title="title" :time="time"></base-audio>
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
