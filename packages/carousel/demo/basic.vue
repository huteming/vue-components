<template>
<div class="test-carousel">
    <tm-divider>基础用法</tm-divider>
    <tm-carousel :loop="loop" :play="play">
        <tm-carousel-item name="first">
            <div class="swiper swiper-blue">1</div>
        </tm-carousel-item>

        <tm-carousel-item name="second">
            <div class="swiper swiper-yellow">2</div>
        </tm-carousel-item>

        <tm-carousel-item name="third">
            <div class="swiper swiper-pink">3</div>
        </tm-carousel-item>
    </tm-carousel>

<!--
    <tm-divider>分组</tm-divider>
    <tm-carousel :loop="loop" :play="play">
        <tm-carousel-item name="first" class="swiper-container">
            <div class="swiper swiper-small swiper-blue">1</div>
            <div class="swiper swiper-small swiper-blue">1</div>
        </tm-carousel-item>

        <tm-carousel-item name="second" class="swiper-container">
            <div class="swiper swiper-small swiper-yellow">2</div>
            <div class="swiper swiper-small swiper-yellow">2</div>
        </tm-carousel-item>

        <tm-carousel-item name="third" class="swiper-container">
            <div class="swiper swiper-small swiper-pink">3</div>
            <div class="swiper swiper-small swiper-pink">3</div>
        </tm-carousel-item>
    </tm-carousel>
-->

    <tm-divider>禁止手势</tm-divider>
    <tm-carousel v-model="current" :loop="loop" :play="false" disabled-touch>
        <tm-carousel-item name="first">
            <div class="swiper swiper-blue">1</div>
        </tm-carousel-item>

        <tm-carousel-item name="second">
            <div class="swiper swiper-yellow">2</div>
        </tm-carousel-item>

        <tm-carousel-item name="third">
            <div class="swiper swiper-pink">3</div>
        </tm-carousel-item>
    </tm-carousel>
    <button @click="current - 1">prev</button>
    <button @click="current + 1">next</button>
</div>
</template>

<script>
import { TmCarousel, TmCarouselItem, TmDivider } from 'tommy-ui'

export default {
    data () {
        return {
            loop: true,
            play: true,
            current: 0,
        }
    },

    methods: {
        handleChange (...val) {
            console.log('change', val)
        }
    },

    created () {
    },

    mounted () {
        setTimeout(() => {
            // this.text = 'bbb'
        }, 1000)
    },

    components: {
        TmCarousel,
        TmCarouselItem,
        TmDivider,
    }
}
</script>

<style lang="scss" scoped>
.swiper {
    height: 200px;
    width: 7.5rem;
    line-height: 200px;
    text-align: center;

    &-container {
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-small {
        width: 3rem;
    }

    &-blue {
        background-color: blue;
    }

    &-pink {
        background-color: pink;
    }

    &-yellow {
        background-color: yellow;
    }
}
</style>
