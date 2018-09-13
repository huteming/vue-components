<template>
    <div class="t-calendar-day" @click="handleClick">
        <div class="t-calendar-day-group" :class="{ 'active': single._isToday }">
            <div class="day" :class="{ 'disabled': !single._isCurrentMonth }">
                {{ single._date | day }}
            </div>

            <div class="intro" :class="single.sign ? `is-${single.sign}` : ''">
                <slot v-bind="single"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        single: Object
    },

    methods: {
        handleClick () {
            this.$parent.$emit('click', this.single)
        }
    },

    mounted () {
    },

    filters: {
        day (val) {
            return Number(val.split('-')[2])
        }
    }
}
</script>
