<template>
<section class="t-clocker">
    <slot
        :whole="whole"
        :days="days"
        :hours="hours"
        :minutes="minutes"
        :seconds="seconds">
    </slot>
</section>
</template>

<script>
const NOW = Date.now()

export default {
    name: 'BaseClocker',

    props: {
        startTime: {
            type: [String, Number, Date],
            default () {
                return NOW
            }
        },
        endTime: {
            type: [String, Number, Date],
            default () {
                return 0
            }
        },
        format: {
            type: String,
            default: 'D 天 H 时 M 分 S'
        }
    },

    data () {
        return {
            timer: null,

            currentTime: NOW
        }
    },

    computed: {
        milliseconds () {
            const residue = this.normalizedEndTime - this.currentTime

            return residue <= 0 ? 0 : residue
        },
        days () {
            return Math.floor(this.milliseconds / (24 * 3600 * 1000))
        },
        hours () {
            return Math.floor(this.milliseconds / (3600 * 1000))
        },
        minutes () {
            return Math.floor(this.milliseconds / (60 * 1000))
        },
        seconds () {
            return Math.ceil(this.milliseconds / 1000)
        },
        whole () {
            const values = {
                'D+': this.days,
                'H+': this.hours % 24,
                'M+': this.minutes % 60,
                'S+': this.seconds % 60
            }

            let res = this.format
            for (let reg in values) {
                if (new RegExp(`(${reg})`).test(res)) {
                    res = res.replace(RegExp.$1, values[reg])
                }
            }

            return res.replace(/\b(\w)\b/g, '0$1')
        },
        normalizedStartTime () {
            const startTime = this.startTime

            // 不存在
            if (!startTime) return 0

            // 时间对象
            if (startTime instanceof Date) return Date.parse(startTime)

            // 时间字符串
            if (typeof startTime === 'string') return Date.parse(new Date(startTime.replace(/-/g, '/')))

            // 时间戳
            return startTime
        },
        normalizedEndTime () {
            const endTime = this.endTime

            // 不存在
            if (!endTime) return 0

            // 时间对象
            if (endTime instanceof Date) return Date.parse(endTime)

            // 时间字符串
            if (typeof endTime === 'string') return Date.parse(new Date(endTime.replace(/-/g, '/')))

            // 时间戳
            return endTime
        }
    },

    watch: {
        normalizedStartTime: 'execute',
        normalizedEndTime: {
            handler: 'execute',
            immediate: true
        },
        currentTime (val) {
            // console.log('current', val, this.normalizedEndTime)
            if (this.normalizedEndTime <= val) {
                clearInterval(this.timer)
                this.$emit('end')
            }
        }
    },

    methods: {
        execute () {
            if (!this.normalizedEndTime || !this.normalizedStartTime) return

            // 现在时间 已经超过 结束时间
            if (this.normalizedEndTime <= this.normalizedStartTime) {
                this.$emit('end')
                return
            }

            clearInterval(this.timer)
            this.currentTime = this.normalizedStartTime

            this.timer = setInterval(() => {
                this.currentTime += 1000
            }, 1000)
        }
    },

    created () {
    }
}
</script>
