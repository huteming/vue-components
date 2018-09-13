<template>
    <app-view-box title="carousel demo">
        <base-cell label="current name" :value="currentSwiperIndex"></base-cell>

        <base-carousel
            :play="play"
            v-model="currentSwiperIndex"
            :circular="circular"
            :vertical="vertical"
            :disable-move="disableMove"
            :interval="2000"
            :skip="skip"
            height="200px"
            @change="handleChange" ref="swiper">
            <base-carousel-item name="first">
                <div class="swiper" style="background: blue;">1</div>
            </base-carousel-item>

            <base-carousel-item name="second">
                <div class="swiper" style="background: yellow;">2</div>
            </base-carousel-item>

            <base-carousel-item name="third">
                <div class="swiper" style="background: pink;">3</div>
            </base-carousel-item>
        </base-carousel>

        <base-button @click="circular = !circular" block>循环: {{ circular }}</base-button>
        <base-button @click="vertical = !vertical" block>竖向: {{ vertical }}</base-button>
        <base-button @click="disableMove = !disableMove" block>禁止滑动: {{ disableMove }}</base-button>
        <base-button @click="skip = !skip" block>间断: {{ skip }}</base-button>
        <base-button @click="skip = 4000" block>间断时间: {{ skip }}</base-button>
        <base-button @click="play = !play" block>播放: {{ play }}</base-button>
        <base-button @click="$refs.swiper.next()" block>next</base-button>
        <base-button @click="$refs.swiper.prev()" block>prev</base-button>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            play: true,
            circular: false,
            vertical: true,
            skip: true,
            disableMove: false,
            currentSwiperIndex: 'first',

            swiperItem: [
                { label: 'label - 1', value: 'value - 1' },
                { label: 'label - 2', value: 'value - 2' },
                { label: 'label - 3', value: 'value - 3' }
            ]
        }
    },

    methods: {
        handleChange (val) {
            console.log('change', val)
        }
    },

    created () {
    }
}
</script>

<style lang="scss" scoped>
.swiper {
    height: 200px;
    line-height: 200px;
    text-align: center;
}
</style>
