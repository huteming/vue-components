<template>
<section class="t-audio">
    <div class="t-audio-action" @click="handleAudioToggle">
        <i class="iconfont" :class="normalizedActionIcon" style="font-size: 32px;"></i>
    </div>

    <div class="t-audio-container" @touchstart="handleTouchstart" @touchmove="handleTouchmove" @touchend="handleTouchend">
        <div class="t-audio-title">{{ title }}</div>

        <div class="t-audio-range" ref="range">
            <div class="t-audio-range-progress" ref="progress" :style="styleProgress"></div>

            <div class="t-audio-range-thumb" ref="thumb"></div>

            <div class="t-audio-range-runway" ref="runway"></div>
        </div>

        <div class="t-audio-time">{{ currentTime | countdown(duration) }}</div>
    </div>

    <audio
        ref="audio"
        :src="url"
        preload="auto"
        @play="state = 'playing'"
        @pause="state = 'pause'"
        @waiting="state = 'waiting'"
        @canplay="handleCanPlay"
        @canplaythrough="handleCanPlayThrough"
        @timeupdate="handleAudioTimeUpdate"
        @progress="handleDownload"
        @ended="handleAudioEnd">
    </audio>
</section>
</template>

<script>
import { storage } from 'packages/utils'

export default {
    name: 'BaseAudio',

    props: {
        url: {
            type: String,
            default: '',
        },
        title: String,
        time: [String, Number],
    },

    data () {
        return {
            // 播放状态
            state: 'pause',
            // 当前播放时间
            currentTime: 0,
            // 音频总时长
            duration: Number(this.time) || 0,
            // 下载进度
            downloadPercent: 0,

            moving: false,
            startX: 0,
            startRate: 0,

            widthRange: 0,

            ready: false,
            timerPlay: null,
        }
    },

    computed: {
        rate () {
            const { currentTime, duration } = this
            return currentTime / duration
        },
        styleProgress () {
            return {
                width: `${this.rate * this.widthRange}px`,
            }
        },
        normalizedActionIcon () {
            switch (this.state) {
            case 'playing':
                return 'icon-pause_circle'
            case 'pause':
                return 'icon-play_circle'
            case 'waiting':
                return 'icon-loading'
            }
        },
    },

    mounted () {
        this.getCurrentTimeFromCache()
        this.widthRange = this.$refs.range.clientWidth - this.$refs.thumb.clientWidth
    },

    methods: {
        /**
         * audio 准备就绪
         */
        handleCanPlay (event) {
            this.duration = Math.round(this.$refs.audio.duration)

            if (!this.ready) {
                this.getCurrentTimeFromCache()
                this.ready = true
            }
        },
        handleCanPlayThrough () {
            if (this.state === 'waiting') {
                this.state = 'playing'
            }
        },
        /**
         * audio 下载中
         */
        handleDownload () {
            const audio = this.$refs.audio
            const downloadTime = audio.buffered.end(0) || 0

            requestAnimationFrame(() => {
                this.downloadPercent = downloadTime / this.duration * 100
            })
        },
        /**
         * audio 开始播放 / 暂停
         */
        handleAudioToggle () {
            if (this.state === 'waiting') return

            clearTimeout(this.timerPlay)
            const audio = this.$refs.audio

            if (this.state === 'playing') {
                audio.pause()
            } else {
                audio.play()

                // 0 - 没有关于音频/视频是否就绪的信息
                // fix 首次播放可能会无效（猜测可能是文件来不及加载），自动在 1 秒后尝试重新播放
                if (audio.readyState === 0) {
                    this.timerPlay = setTimeout(() => {
                        if (audio.played.length === 0) {
                            audio.pause()
                            audio.play()
                        }
                    }, 1000)
                }
            }
        },
        /**
         * audio 播放中
         */
        handleAudioTimeUpdate () {
            this.$nextTick(() => {
                const nextTime = Math.round(this.$refs.audio.currentTime)
                this.updateCurrentTime(nextTime, false, !this.moving)
            })
        },
        /**
         * audio 播放完
         */
        handleAudioEnd () {
            this.$nextTick(() => {
                this.updateCurrentTime(0, false, !this.moving)
            })
        },
        /**
         * 手势滑动
         */
        handleTouchstart (event) {
            this.moving = true
            const finger = event.changedTouches[0]

            this.startX = finger.pageX
            this.startRate = this.rate
        },
        handleTouchmove (event) {
            const finger = event.changedTouches[0]
            const moveX = finger.pageX - this.startX

            const addRate = moveX / this.widthRange
            let nextTime = Math.round((this.startRate + addRate) * this.duration)

            if (nextTime < 0) {
                nextTime = 0
            } else if (nextTime > this.duration) {
                nextTime = this.duration
            }

            this.updateCurrentTime(nextTime, false, true)
        },
        handleTouchend (event) {
            this.updateCurrentTime(this.currentTime, true, true)
            this.moving = false
        },
        /**
         * 更新进度
         */
        updateCurrentTime (value, isSetAudio = false, isSetStyle = false) {
            if (isSetStyle) {
                this.currentTime = value
            }

            if (isSetAudio) {
                this.$refs.audio.currentTime = value
            }

            this.setCurrentTimeInCache()
        },
        /**
         * 从缓存读取进度
         */
        getCurrentTimeFromCache () {
            const cache = storage.getSession('cache-audio-percent') || []
            const cacheItem = cache.find(item => item.url === this.url)
            if (cacheItem) {
                this.updateCurrentTime(cacheItem.currentTime, true, true)
            }
        },
        // 保存进度
        setCurrentTimeInCache () {
            const cache = storage.getSession('cache-audio-percent') || []
            const newCacheItem = {
                url: this.url,
                currentTime: this.currentTime
            }
            const index = cache.findIndex(item => item.url === this.url)

            if (index > -1) {
                cache.splice(index, 1, newCacheItem)
            } else {
                cache.push(newCacheItem)
            }

            storage.setSession('cache-audio-percent', cache)
        },
    },

    filters: {
        audioTime (val) {
            if (!val) {
                return '00:00'
            }

            let layout = ''
            const time = Math.round(val)
            const minutes = Math.floor(time / 60)
            const seconds = time % 60

            layout += minutes === 0
                ? '00'
                : minutes < 10
                    ? `0${minutes}`
                    : minutes.toString()

            layout += ':'

            layout += seconds < 10 ? `0${seconds}` : seconds.toString()

            return layout
        },
        countdown (currentTime, duration) {
            const remaining = duration - currentTime
            let minutes = parseInt(remaining / 60)
            let seconds = parseInt((remaining % 60))

            function fix (value) {
                return value <= 9 ? `0${value}` : value.toString()
            }

            return `${fix(minutes)}:${fix(seconds)}`
        },
    }
}
</script>
