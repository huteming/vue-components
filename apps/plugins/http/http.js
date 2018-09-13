import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 8000
axios.defaults.baseURL = '//jhtest.jinghao.com'
axios.defaults.withCredentials = true

/**
 * Content-Type: ['application/x-www-form-urlencoded', 'application/json;charset=UTF-8', 'multipart/form-data']
 */
export const post = (url, params = {}, configs = {}, customs = 'urlencoded') => {
    switch (customs) {
    case 'json':
        // params = params
        break
    case 'form':
        params = formatToForm(params)
        break
    default:
        params = qs.stringify(params)
        break
    }

    return axios.post(url, params, configs)
}

export const get = (url, params = {}, configs = {}) => {
    const requestConfig = Object.assign({ params }, configs)

    return axios.get(url, requestConfig)
}

/**
 * 转换为 from 表单
 */
function formatToForm (data) {
    const params = new FormData()

    for (let key in data) {
        params.append(key, data[key])
    }

    return params
}
