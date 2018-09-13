import Vue from 'vue'
import ImagePreview from './src/image-preview.js'

ImagePreview.install = function () {
    Vue.directive('imagePreview', ImagePreview)
}

export default ImagePreview
