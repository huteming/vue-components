<template>
    <transition name="fade" @after-leave="handleElementDestroy">
        <section class="t-preview" v-show="visible" @click="handleHide" @touchmove.prevent>
            <base-carousel height="100%" :value="currentIndex" :disable-move="false" disable-direction>
                <base-carousel-item v-for="image in images" :key="image">
                    <img class="t-preview-image" :src="image" alt="" width="100%" />
                </base-carousel-item>
            </base-carousel>
        </section>
    </transition>
</template>

<script>
import BaseCarousel from '../../carousel'
import BaseCarouselItem from '../../carousel-item'

export default {
    data () {
        return {
            visible: false,

            current: '',
            images: []
        }
    },

    computed: {
        currentIndex () {
            return this.images.findIndex(item => item === this.current)
        }
    },

    methods: {
        show (current, images) {
            this.visible = true

            this.$nextTick(() => {
                this.current = current
                this.images = images
            })
        },
        handleHide () {
            this.visible = false
        },
        handleElementDestroy () {
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        }
    },

    mounted () {
    },

    components: {
        BaseCarousel,
        BaseCarouselItem
    }
}
</script>
