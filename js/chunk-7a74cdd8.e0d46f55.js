(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a74cdd8"],{"2da6":function(a,t,e){},"7a0b":function(a,t,e){"use strict";var n=e("2da6"),i=e.n(n);i.a},"7bd3":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page-example"},[e("div",{staticClass:"container"},[e("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:a.image,alt:""}})])])},i=[],c=e("f25b"),o=e("56d7"),s="https://api.jinghao.com/getImages/wxjhsyimages/tip-01.png",r="http://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKoIvWhsa7vfhaqYMu3SiaLxakMrXm7jqkexeA8dcHu9pVWradOSpxaEmTJSicr95yvD5Xk7iaqNBUZw/132",u="https://api.jinghao.com/getImages/FiqP8Z7S5FZNdYuwc422Ksu-xXW7",d="https://api.jinghao.com/getImages/FjKoX0lUYhvLi8TzCQ6Mx0cwPPiu",m={data:function(){return{image:""}},methods:{draw:function(){var a=new o["k"].ImageConvertor([s,r,u,d]);return a.getImage().then(function(a){var t=Object(c["a"])(a,4),e=t[0],n=t[1],i=t[2],s=t[3],r=new o["k"].CanvasDraw(480,854);return r.use(function(){r.drawRect(0,0,480,854)}),r.use(function(){r.drawImage(e,24,34,88,48),r.drawText("我在静好书院读书",24,93,{color:"RGBA(153, 153, 153, 1)",size:12})}),r.use(function(a){var t=a.context;r.drawArc(400,84,20),t.clip(),r.drawImage(n,400,84,40,40)}),r.use(function(){r.drawImage(i,24,158,430,504)}),r.use(function(){r.drawImage(s,350,706,104,104)}),r.use(function(){r.drawText("识别二维码和我一起读书",24,780,{color:"RGBA(153, 153, 153, 1)",size:10})}),r.done()})}},mounted:function(){var a=this;this.draw().then(function(t){a.image=t})}},w=m,g=(e("7a0b"),e("048f")),p=Object(g["a"])(w,n,i,!1,null,"04916126",null);p.options.__file="basic.vue";t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-7a74cdd8.e0d46f55.js.map