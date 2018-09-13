<template>
    <app-view-box title="image-picker demo">
        <base-image-picker v-model="files" ref="imagePicker">
            <template slot-scope="scope">
                <div class="images" v-for="(item, index) in scope.images" :key="item">
                    <div class="images-remove" @click="files.splice(index, 1)">X</div>
                    <img class="images-file" :src="item" alt="" />
                </div>
            </template>

            <template slot="selector">
                <!-- <div class="box">
                    <div class="box-selector"></div>
                </div> -->
                <!-- <div ref="selector"></div> -->
            </template>
        </base-image-picker>

        <div class="box" @click="handleSelect">
            <div class="box-selector"></div>
        </div>
    </app-view-box>
</template>

<script>
export default {
    data () {
        return {
            files: [],
            show: true
        }
    },

    methods: {
        handleTest () {
            console.log('outside')
        },
        handleSimulate () {
            this.$refs.selector.click()
        },
        handleSelect () {
            this.$refs.imagePicker.select()
        }
    },

    mounted () {
    }
}
</script>

<style lang="scss" scoped>
.images {
    position: relative;
    display: inline-block;
    height: 100px;
    width: 100px;

    &-file {
        position: relative;
        display: block;
        width: 100px;
        height: 100px;
        z-index: 1;
    }

    &-remove {
        position: absolute;
        width: 15px;
        height: 15px;
        right: 6px;
        top: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #fff;
        border-radius: 50%;
        background: rgba(0, 0, 0, .3);
        z-index: 2;
    }
}

.box {
    position: relative;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #ddd;
    background-color: #fff;

    &-selector {
        &:before {
            width: 1px;
            height: 25px;
            content: " ";
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            background-color: #ccc;
        }

        &:after {
            width: 25px;
            height: 1px;
            content: " ";
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            background-color: #ccc;
        }
    }
}
</style>
