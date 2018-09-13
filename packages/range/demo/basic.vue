<template>
<div class="page">
    <base-range v-model="range1" class="spacing">
        <div slot="start">
            <div>默认</div>
            <div>value: {{ range1 }}</div>
        </div>
    </base-range>

    <base-range v-model="range2" class="spacing">
        <div slot="start">
            <div>初始化</div>
            <div>value: {{ range2 }}</div>
        </div>
    </base-range>

    <base-range v-model="range3" show-value class="spacing">
        <div slot="start">
            <div>显示阈值</div>
            <div>value: {{ range3 }}</div>
        </div>
    </base-range>

    <base-range v-model="range4" :step="3" class="spacing">
        <div slot="start">
            <div>步长</div>
            <div>value: {{ range4 }}</div>
        </div>
    </base-range>

    <base-range v-model="range5" :min="40" :max="60" class="spacing">
        <div slot="start">
            <div>阈值</div>
            <div>value: {{ range5 }}</div>
        </div>
    </base-range>

    <base-range v-model="range6" disabled class="spacing">
        <div slot="start">
            <div>无效</div>
            <div>value: {{ range6 }}</div>
        </div>
    </base-range>

    <base-range v-model="range7" :bar-height="3" class="spacing">
        <div slot="start">
            <div>线宽</div>
        </div>

        <div slot="end" class="end">value: {{ range7 }}</div>
    </base-range>
</div>
</template>

<script>
import { Range as BaseRange, Button } from 'tommy-ui'

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
        BaseButton: Button,
        BaseRange
    }
}
</script>

<style lang="scss" scoped>
.spacing {
    margin-bottom: 15px;
}

.end {
    width: 75px;
    text-align: right;
}
</style>
