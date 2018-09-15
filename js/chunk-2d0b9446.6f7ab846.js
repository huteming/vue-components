(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9446"],{"31e7":function(s,t,a){"use strict";a.r(t);var l=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("blockquote",[a("p",[s._v("无限滚动指令。")])]),a("hr"),a("h2",[s._v("引入")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { InfiniteScroll } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'tommy-ui'")]),s._v("\n\nVue.directive(InfiniteScroll.name, InfiniteScroll)\nVue.use(InfiniteScroll)\n")])]),a("h2",[s._v("例子")]),a("p",[s._v("为 HTML 元素添加 "),a("code",{pre:!0},[s._v("v-infinite-scroll")]),s._v(" 指令即可使用无限滚动。滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值（通过 "),a("code",{pre:!0},[s._v("infinite-scroll-distance")]),s._v(" 设置）时，绑定到 "),a("code",{pre:!0},[s._v("v-infinite-scroll")]),s._v(" 指令的方法就会被触发。")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-infinite-scroll")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"loadMore"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("data-infinite-scroll-disabled")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"loading"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item in list"')]),s._v(">")]),s._v("{{ item }}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(">")]),s._v("\n")])]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[s._v("loadMore (done) {\n    setTimeout("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" last = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".list["),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".list.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("; i <= "),a("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v("; i++) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".list.push(last + i)\n        }\n\n        done()\n    }, "),a("span",{attrs:{class:"hljs-number"}},[s._v("2500")]),s._v(")\n}\n")])]),a("h2",[s._v("API")]),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("说明")]),a("th",[s._v("类型")]),a("th",[s._v("可选值")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("callback")]),a("td",[s._v("触发的回调函数")]),a("td",[s._v("Function(done)")]),a("td"),a("td")]),a("tr",[a("td",[s._v("distance")]),a("td",[s._v("触发加载方法的滚动距离阈值（像素））")]),a("td",[s._v("Number")]),a("td"),a("td",[a("code",{pre:!0},[s._v("50")])])]),a("tr",[a("td",[s._v("immediate")]),a("td",[s._v("若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。")]),a("td",[s._v("Boolean")]),a("td"),a("td",[a("code",{pre:!0},[s._v("true")])])]),a("tr",[a("td",[s._v("infinite-scroll-disabled")]),a("td",[s._v("若为真，则无限滚动不会被触发")]),a("td",[s._v("Boolean")]),a("td"),a("td",[a("code",{pre:!0},[s._v("false")])])]),a("tr",[a("td",[s._v("infinite-scroll-listen-event")]),a("td",[s._v("一个 event，被执行时会立即检查是否需要执行加载方法。")]),a("td",[s._v("Function")]),a("td"),a("td")])])])])])}],e=a("048f"),r={},v=Object(e["a"])(r,l,n,!1,null,null,null);v.options.__file="README.md";t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0b9446.6f7ab846.js.map