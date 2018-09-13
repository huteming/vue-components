import axios from 'axios'

// wx配置方法
const jsApiList = [
    'hideAllNonBaseMenuItem',
    'closeWindow',
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'showMenuItems',
    'hideMenuItems',
    'previewImage',
    'uploadImage',
    'downloadImage',
    'getLocalImgData',
    'chooseImage'
]

// 签名出错时，最多重新请求 3 次
let count = 0

export default {
    // 签名地址
    url: '',

    /**
     * 保存首页地址
     * 因为ios配置地址必须为进入单页应用的首页，andriod配置地址为当前页面
     */
    saveURL (url) {
        this.url = url
    },

    /**
     * 配置签名
     */
    sign () {
        return new Promise((resolve, reject) => {
            this.config()
                .then(this.waiting)
                .then(() => {
                    count = 0
                    resolve()
                })
                .catch(err => {
                    count++

                    if (count <= 3) {
                        this.sign()
                            .then(() => {
                                count = 0
                                resolve()
                            })
                            .catch(err => {
                                count = 0
                                reject(err)
                            })
                    } else {
                        count = 0
                        reject(err)
                    }
                })
        })
    },

    /**
     * 隐藏工具栏
     */
    hideMenuItems () {
        wx.ready(() => {
            wx.hideMenuItems({
                menuList: [
                    'menuItem:share:timeline',
                    'menuItem:share:appMessage'
                ]
            })
        })
    },

    /**
     * 分享
     */
    share (options) {
        wx.ready(() => {
            wx.showMenuItems({
                menuList: [
                    'menuItem:share:timeline',
                    'menuItem:share:appMessage'
                ]
            })
            wx.onMenuShareTimeline(options)
            wx.onMenuShareAppMessage(options)
        })
    },

    /**
     * 配置
     */
    config () {
        const url = window.__wxjs_is_wkwebview ? this.url : location.href

        return new Promise((resolve, reject) => {
            axios.get('/api/user/shareParam', { params: { url: url.split('#')[0], flag: process.env.NODE_ENV === 'testing' ? 'test_mark' : 'test_tommy' } })
                .then(res => {
                    const { flag, msg, data } = res.data
                    if (flag !== 1) {
                        throw msg
                    }

                    wx.config({
                        debug: false,
                        appId: data.AppId,
                        timestamp: data.Timestamp,
                        nonceStr: data.NonceStr,
                        signature: data.Signature,
                        jsApiList: jsApiList
                    })

                    resolve()
                })
                .catch(err => {
                    reject(new Error(`第 ${count} 次，获取签名参数失败;${err}`))
                })
        })
    },

    /**
     * 等待配置结果
     */
    waiting () {
        return new Promise((resolve, reject) => {
            wx.error(() => {
                reject(new Error(`第 ${count} 次，签名失败`))
            })

            wx.ready(() => {
                setTimeout(resolve, 800)
            })
        })
    }
}
