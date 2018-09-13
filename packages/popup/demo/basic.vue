<template>
<div class="page">
    <!-- middle -->
    <div style="height: 20px;"></div>
    <base-button @click="visibleDefault = !visibleDefault">default</base-button>

    <base-popup v-model="visibleDefault" class="default">
        <div>popup</div>
        <p>/ ˈpɑpˌʌp /</p>
        <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
        <p>adj. 弹起的; 有自动起跳装置的</p>
    </base-popup>

    <!-- top -->
    <div style="height: 20px;"></div>
    <base-button @click="visibleTop = !visibleTop">top</base-button>

    <base-popup v-model="visibleTop" class="top" position="top">
        <div>更新成功</div>
    </base-popup>

    <!-- bottom -->
    <div style="height: 20px;"></div>
    <base-button @click="visibleBottom = !visibleBottom">bottom</base-button>

    <base-popup class="bottom" v-model="visibleBottom" position="bottom">
        <base-button type="primary" @click="visibleBottom = !visibleBottom">close</base-button>
    </base-popup>

    <!-- left -->
    <div style="height: 20px;"></div>
    <base-button @click="visibleLeft = !visibleLeft">left</base-button>

    <base-popup class="left" v-model="visibleLeft" position="left">
        <base-button type="primary" @click="visibleLeft = !visibleLeft">close</base-button>
    </base-popup>

    <!-- right -->
    <div style="height: 20px;"></div>
    <base-button @click="visibleRight = !visibleRight">right</base-button>

    <base-popup class="right" v-model="visibleRight" position="right">
        <base-button type="primary" @click="visibleRight = !visibleRight">close</base-button>
    </base-popup>

    <!-- event -->
    <div style="height: 20px;"></div>
    <base-button @click="visibleEvent = !visibleEvent">event</base-button>

    <base-popup class="event" v-model="visibleEvent" position="right" @open="handleOpen" @close="handleClose" @closed="handleClosed" :before-close="handleBeforeClose">
        <base-button type="primary" @click="visibleEvent = !visibleEvent">close</base-button>
    </base-popup>
</div>
</template>

<script>
import { Popup, Toast, Button } from 'tommy-ui'

export default {
    data () {
        return {
            visibleDefault: false,
            visibleBottom: false,
            visibleTop: false,
            visibleLeft: false,
            visibleRight: false,
            visibleEvent: false
        }
    },

    computed: {
    },

    methods: {
        handleBeforeClose (done) {
            Toast('close 1.5s later')
            setTimeout(done, 1500)
        },
        handleOpen () {
            Toast('open')
        },
        handleClose () {
            Toast('close')
        },
        handleClosed () {
            Toast('closed')
        }
    },

    components: {
        BasePopup: Popup,
        BaseButton: Button
    }
}
</script>

<style lang="scss" scoped>
.bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
}

.default {
    div {
        font-size: 20px;
        color: #26a2ff;
        font-weight: 400;
        line-height: 2;
    }

    p {
        margin-bottom: 10px;
    }
}

.image {
    display: block;
    width: 100%;
    border: none;
    height: 200px;
}
</style>
