<template>
<div class="page">
    <div class="cell">
        <div class="cell-title">默认</div>

        <div class="cell-value">
            <base-progress></base-progress>
        </div>
    </div>

    <div class="cell">
        <div class="cell-title">设置value</div>

        <div class="cell-value">
            <base-progress :value="48.55"></base-progress>
        </div>
    </div>

    <div class="cell">
        <div class="cell-title">左右文字</div>

        <div class="cell-value">
            <base-progress :value="48.55">
                <div slot="start">0%</div>
                <div slot="end">100%</div>
            </base-progress>
        </div>
    </div>

    <div class="cell">
        <div class="cell-title">定义线宽</div>

        <div class="cell-value">
            <base-progress :value="48.55" :bar-height="5">
            </base-progress>
        </div>
    </div>
</div>
</template>

<script>
import { Progress as BaseProgress } from 'tommy-ui'

export default {
    data () {
        return {
            range1: 0,
            range2: 46,
            range3: 0,

            range4: 0,
            range5: 50,
            range6: 70,

            range7: 6
        }
    },

    methods: {
        handleChange (value) {
            console.log('change', value)
        }
    },

    components: {
        BaseProgress
    }
}
</script>

<style lang="scss" scoped>
.cell {
    display: flex;
    align-items: center;

    &-title {
        flex: 0 0 80px;
    }

    &-value {
        flex: 1;
    }
}

.spacing {
    margin-bottom: 15px;
}

.end {
    width: 75px;
    text-align: right;
}
</style>
