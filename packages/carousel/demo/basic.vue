<template>
<div class="page">
    <div class="title">定时 2s</div>
    <!-- interval -->
    <base-carousel :play.sync="play1" v-model="current1" :interval="2000" disable-move>
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

    <div class="title">初始化第二页</div>
    <!-- init -->
    <base-carousel :play.sync="play2" v-model="current2" disable-move>
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

    <div class="title">手势滑动</div>
    <!-- init -->
    <base-carousel>
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

    <!-- <base-carousel
        :play.sync="play"
        v-model="currentSwiperIndex"
        :circular="circular"
        :vertical="vertical"
        :disable-move="disableMove"
        :interval="2000"
        :skip="skip"
        height="150px"
        @change="handleChange"
        ref="swiper">
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

    <base-button @click="circular = !circular">循环: {{ circular }}</base-button>
    <base-button @click="vertical = !vertical">竖向: {{ vertical }}</base-button>
    <base-button @click="disableMove = !disableMove">禁止滑动: {{ disableMove }}</base-button>
    <base-button @click="skip = !skip">间断: {{ skip }}</base-button>
    <base-button @click="skip = 4000">间断时间: {{ skip }}</base-button>
    <base-button @click="play = !play">播放: {{ play }}</base-button>
    <base-button @click="$refs.swiper.next()">next</base-button>
    <base-button @click="$refs.swiper.prev()">prev</base-button> -->
</div>
</template>

<script>
import { Carousel, CarouselItem, Button } from 'tommy-ui'

export default {
    data () {
        return {
            play1: true,
            current1: 0,

            play2: true,
            current2: 'second',

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
    },

    components: {
        BaseCarousel: Carousel,
        BaseCarouselItem: CarouselItem,
        BaseButton: Button
    }
}
</script>

<style lang="scss" scoped>
.swiper {
    height: 200px;
    line-height: 200px;
    text-align: center;
}

.title {
    margin-top: 20px;
    padding: 10px;
    text-align: center;
}
</style>
