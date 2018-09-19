<template>
<section class="t-pickeraddress">
    <base-popup v-model="normalizedVisible" position="bottom">
        <div class="t-pickeraddress-toolbar">
            <div class="t-pickeraddress-toolbar__action" @click="handleCancel">取消</div>
            <div class="t-pickeraddress-toolbar__action" @click="handleConfirm">确定</div>
        </div>

        <base-picker>
            <base-picker-item :options="provinces" v-model="provinceCode"></base-picker-item>
            <base-picker-item :options="cities" v-model="cityCode"></base-picker-item>
            <base-picker-item :options="areas" v-model="areaCode"></base-picker-item>
        </base-picker>
    </base-popup>
</section>
</template>

<script>
import BasePopup from '../../popup'
import BasePicker from '../../picker'
import BasePickerItem from '../../picker-item'

import provinceOptions from './data/provinces.json'
import citieOptions from './data/cities.json'
import areaOptions from './data/areas.json'

export default {
    name: 'BasePickerAddress',

    props: {
        visible: Boolean,
        value: {
            type: Array,
            default () {
                return []
            }
        },
        valueText: {
            type: Array,
            default () {
                return []
            }
        }
    },

    data () {
        return {
            normalizedVisible: this.visible,

            provinceCode: String(this.value[0]),
            cityCode: String(this.value[1]),
            areaCode: String(this.value[2])
        }
    },

    computed: {
        /**
         * 省级
         */
        provinces () {
            return provinceOptions
        },
        /**
         * 城市，默认第一个省级对应的城市
         */
        cities () {
            const codeSelected = this.provinceCode
            const codeDefault = this.provinces[0].value
            const codeRender = citieOptions.find(item => item.provinceCode === codeSelected) ? codeSelected : codeDefault

            return citieOptions.filter(item => item.provinceCode === codeRender)
        },
        /**
         * 地区，默认第一个城市对应的地区
         */
        areas () {
            const codeSelected = this.cityCode
            const codeDefault = this.cities[0].value
            const codeRender = areaOptions.find(item => item.cityCode === codeSelected) ? codeSelected : codeDefault

            return areaOptions.filter(item => item.cityCode === codeRender)
        }
    },

    watch: {
        visible (val) {
            this.normalizedVisible = val
        },
        normalizedVisible (val) {
            this.$emit('update:visible', val)

            if (val) {
                this.initValue()
            }
        },
        value: 'initValue'
    },

    methods: {
        handleConfirm () {
            const data = [Number(this.provinceCode), Number(this.cityCode), Number(this.areaCode)]
            const dataText = [
                this.provinces.find(item => item.value === this.provinceCode).label,
                this.cities.find(item => item.value === this.cityCode).label,
                this.areas.find(item => item.value === this.areaCode).label
            ]

            this.$emit('input', data)
            this.$emit('update:valueText', dataText)
            this.normalizedVisible = false

            this.$nextTick(() => {
                this.$emit('change', data, dataText)
            })
        },
        handleCancel () {
            this.normalizedVisible = false
        },
        /**
         * 初始化选中项
         */
        initValue () {
            const [provinceCode, cityCode, areaCode] = this.value

            this.provinceCode = String(provinceCode)
            this.cityCode = String(cityCode)
            this.areaCode = String(areaCode)
        }
    },

    components: {
        BasePopup,
        BasePicker,
        BasePickerItem
    }
}
</script>
