<template>
<section class="t-loadmore" :style="styles">
    <div class="t-loadmore-content">
        <BaseIcon :icon="icon" size="14px" />
    </div>
</section>
</template>

<script>
import BaseIcon from '../../icon'

export default {
    name: 'BaseLoadmore',

    data () {
        return {
            height: 0,
            disableTransition: false,

            /**
             * state, end, loading, done
             */
            state: 'start'
        }
    },

    computed: {
        styles () {
            return {
                height: `${this.height}px`,
                transition: this.disableTransition ? '' : `height .3s`
            }
        },
        icon () {
            switch (this.state) {
            case 'end': // 松开刷新
                return 'double-arrow-up'
            case 'loading': // 正在刷新
                return 'loading'
            case 'done': // 刷新完成
                return 'loading'
            default: // 下拉刷新
                return 'double-arrow-down'
            }
        }
    },

    methods: {
        updateHeight (height, disableTransition) {
            this.disableTransition = disableTransition
            this.height = height
        },
        updateState (state) {
            this.state = state
        }
    },

    components: {
        BaseIcon
    }
}
</script>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
