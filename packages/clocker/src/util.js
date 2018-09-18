/* eslint-disable */
/**
 * Year   YY   70 71 ... 29 30
 *        YYYY 1970 1971 ... 2029 2030
 *
 * Month  M    1 2 ... 11 12
 *        MM   01 02 ... 11 12
 *
 * Day    D    1 2 ... 30 31
 *        DD   01 02 ... 30 31
 *
 * Hour   h    0 1 ... 22 23
 *        h   00 01 ... 22 23
 *
 * Minute m    0 1 ... 58 59
 *        mm   00 01 ... 58 59
 *
 * Second s    0 1 ... 58 59
 *        ss   00 01 ... 58 59
 */
function format (date, layout) {
    const values = {
        'M+': date.getMonth() + 1, // month
        'D+': date.getDate(), // day
        'h+': date.getHours(), // hour
        'm+': date.getMinutes(), // minute
        's+': date.getSeconds() // second
    }
    if (/(Y+)/.test(layout)) {
        layout = layout.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length))
    }
    for (let reg in values) {
        if (new RegExp(`(${reg})`).test(layout)) {
            layout = layout.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
        }
    }
    return layout
}
