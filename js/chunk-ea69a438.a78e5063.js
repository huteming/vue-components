(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea69a438"],{"19b6":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-docs"},[o("header",{staticClass:"header"},[o("div",{staticClass:"header-left",on:{click:function(e){t.visibleNav=!t.visibleNav}}},[o("BaseIcon",{attrs:{icon:"cell"}})],1),o("div",{staticClass:"header-middle"},[t._v("tommy-ui")]),o("div",{staticClass:"header-right"})]),o("main",{staticClass:"container"},[o("section",{staticClass:"container-navbar"},[o("AppNavbar")],1),o("section",{staticClass:"container-main"},[o("AppContent",{attrs:{"is-component":t.isComponent}})],1),o("section",{directives:[{name:"show",rawName:"v-show",value:t.isComponent,expression:"isComponent"}],staticClass:"container-phone"},[o("AppPhone")],1)]),o("base-popup",{attrs:{position:"left"},model:{value:t.visibleNav,callback:function(e){t.visibleNav=e},expression:"visibleNav"}},[o("AppNavbar")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-scrollbar",{staticClass:"scrollable",attrs:{"wrap-style":"overflow-X: auto;",native:!1}},[o("ul",{staticClass:"nav"},[o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-spacing-1",attrs:{to:{path:"/docs/quickstart"}}},[t._v("Quickstart")])],1),o("li",{staticClass:"nav-item-container"},[o("div",{staticClass:"nav-item-title nav-spacing-1"},[t._v("Components")]),t._l(t.navs,function(e){return o("ul",{key:e.title,staticClass:"nav"},[o("li",{staticClass:"nav-item-container"},[o("div",{staticClass:"nav-item-subtitle nav-spacing-2"},[t._v(t._s(e.title))]),o("ul",{staticClass:"nav"},t._l(e.list,function(e){return o("li",{key:e.name,staticClass:"nav-item"},[o("router-link",{staticClass:"nav-spacing-3",attrs:{to:"/docs/"+e.name}},[o("span",[t._v(t._s(e.english))]),o("span",{staticClass:"chinese"},[t._v(t._s(e.chinese))])])],1)}))])])})],2)])])},a=[],s=o("3646"),l={data:function(){return{navs:s}},computed:{}},u=l,c=(o("c687"),o("048f")),h=Object(c["a"])(u,r,a,!1,null,"e7a1c4ac",null);h.options.__file="navbar.vue";var d=h.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-scrollbar",{staticClass:"content scrollable",attrs:{"wrap-class":t.$style["container-scrollable"]}},[o("h1",{staticClass:"markdown-header"},[t.isComponent?[o("span",[t._v(t._s(t.meta.english)+" "+t._s(t.meta.chinese))]),o("i",{directives:[{name:"popover",rawName:"v-popover:qrcode",arg:"qrcode"}],staticClass:"iconfont icon-qrcode markdown-header-icon"}),o("el-popover",{ref:"qrcode",attrs:{placement:"bottom",width:"100",trigger:"hover"}},[o("img",{attrs:{src:t.qrcodeImg,alt:"",width:"100%",height:"100%"}})])]:[t._v("\r\n            "+t._s(t.meta.title)+"\r\n        ")]],2),o("router-view")],1)},v=[];o("aba3"),o("3a0f"),o("a3a3"),o("4d0b"),o("20a2");function f(t){return t<128?[t]:t<2048?(c0=192+(t>>6),c1=128+(63&t),[c0,c1]):(c0=224+(t>>12),c1=128+(t>>6&63),c2=128+(63&t),[c0,c1,c2])}function m(t){for(var e=[],o=0;o<t.length;o++)for(var n=t.charCodeAt(o),i=f(n),r=0;r<i.length;r++)e.push(i[r]);return e}function g(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=m(t),this.make()}g.prototype={constructor:g,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var o=-1;o<=7;o++)if(!(t+o<=-1||this.moduleCount<=t+o))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+o][e+n]=0<=o&&o<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==o||6==o)||2<=o&&o<=4&&2<=n&&n<=4)},createQrcode:function(){for(var t=0,e=0,o=null,n=0;n<8;n++){this.makeImpl(n);var i=w.getLostPoint(this);(0==n||t>i)&&(t=i,e=n,o=this.modules)}this.modules=o,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=w.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var o=0;o<t.length;o++){var n=t[e],i=t[o];if(null==this.modules[n][i])for(var r=-2;r<=2;r++)for(var a=-2;a<=2;a++)this.modules[n+r][i+a]=-2==r||2==r||-2==a||2==a||0==r&&0==a}},setupTypeNumber:function(t){for(var e=w.getBCHTypeNumber(this.typeNumber),o=0;o<18;o++){var n=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3]=n,this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)]=n}},setupTypeInfo:function(t,e){for(var o=_[this.errorCorrectLevel]<<3|e,n=w.getBCHTypeInfo(o),i=0;i<15;i++){var r=!t&&1==(n>>i&1);i<6?this.modules[i][8]=r:i<8?this.modules[i+1][8]=r:this.modules[this.moduleCount-15+i][8]=r;r=!t&&1==(n>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=r:i<9?this.modules[8][15-i-1+1]=r:this.modules[8][15-i-1]=r}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new P,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var o=0,n=this.utf8bytes.length;o<n;o++)t.put(this.utf8bytes[o],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(g.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(g.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,o=0,n=0,i=this.rsBlock.length/3,r=new Array,a=0;a<i;a++)for(var s=this.rsBlock[3*a+0],l=this.rsBlock[3*a+1],u=this.rsBlock[3*a+2],c=0;c<s;c++)r.push([u,l]);for(var h=new Array(r.length),d=new Array(r.length),p=0;p<r.length;p++){var v=r[p][0],f=r[p][1]-v;o=Math.max(o,v),n=Math.max(n,f),h[p]=new Array(v);for(a=0;a<h[p].length;a++)h[p][a]=255&t.buffer[a+e];e+=v;var m=w.getErrorCorrectPolynomial(f),g=new T(h[p],m.getLength()-1),_=g.mod(m);d[p]=new Array(m.getLength()-1);for(a=0;a<d[p].length;a++){var b=a+_.getLength()-d[p].length;d[p][a]=b>=0?_.get(b):0}}var C=new Array(this.totalDataCount),A=0;for(a=0;a<o;a++)for(p=0;p<r.length;p++)a<h[p].length&&(C[A++]=h[p][a]);for(a=0;a<n;a++)for(p=0;p<r.length;p++)a<d[p].length&&(C[A++]=d[p][a]);return C},mapData:function(t,e){for(var o=-1,n=this.moduleCount-1,i=7,r=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var s=0;s<2;s++)if(null==this.modules[n][a-s]){var l=!1;r<t.length&&(l=1==(t[r]>>>i&1));var u=w.getMask(e,n,a-s);u&&(l=!l),this.modules[n][a-s]=l,i--,-1==i&&(r++,i=7)}if(n+=o,n<0||this.moduleCount<=n){n-=o,o=-o;break}}}}},g.PAD0=236,g.PAD1=17;for(var _=[1,0,3,2],b={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},w={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(w.getBCHDigit(e)-w.getBCHDigit(w.G15)>=0)e^=w.G15<<w.getBCHDigit(e)-w.getBCHDigit(w.G15);return(t<<10|e)^w.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(w.getBCHDigit(e)-w.getBCHDigit(w.G18)>=0)e^=w.G18<<w.getBCHDigit(e)-w.getBCHDigit(w.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return w.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case b.PATTERN000:return(e+o)%2==0;case b.PATTERN001:return e%2==0;case b.PATTERN010:return o%3==0;case b.PATTERN011:return(e+o)%3==0;case b.PATTERN100:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case b.PATTERN101:return e*o%2+e*o%3==0;case b.PATTERN110:return(e*o%2+e*o%3)%2==0;case b.PATTERN111:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new T([1],0),o=0;o<t;o++)e=e.multiply(new T([1,C.gexp(o)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,n=0,i=0;i<e;i++)for(var r=0,a=t.modules[i][0],s=0;s<e;s++){var l=t.modules[i][s];if(s<e-6&&l&&!t.modules[i][s+1]&&t.modules[i][s+2]&&t.modules[i][s+3]&&t.modules[i][s+4]&&!t.modules[i][s+5]&&t.modules[i][s+6]&&(s<e-10?t.modules[i][s+7]&&t.modules[i][s+8]&&t.modules[i][s+9]&&t.modules[i][s+10]&&(o+=40):s>3&&t.modules[i][s-1]&&t.modules[i][s-2]&&t.modules[i][s-3]&&t.modules[i][s-4]&&(o+=40)),i<e-1&&s<e-1){var u=0;l&&u++,t.modules[i+1][s]&&u++,t.modules[i][s+1]&&u++,t.modules[i+1][s+1]&&u++,0!=u&&4!=u||(o+=3)}a^l?r++:(a=l,r>=5&&(o+=3+r-5),r=1),l&&n++}for(s=0;s<e;s++)for(r=0,a=t.modules[0][s],i=0;i<e;i++){l=t.modules[i][s];i<e-6&&l&&!t.modules[i+1][s]&&t.modules[i+2][s]&&t.modules[i+3][s]&&t.modules[i+4][s]&&!t.modules[i+5][s]&&t.modules[i+6][s]&&(i<e-10?t.modules[i+7][s]&&t.modules[i+8][s]&&t.modules[i+9][s]&&t.modules[i+10][s]&&(o+=40):i>3&&t.modules[i-1][s]&&t.modules[i-2][s]&&t.modules[i-3][s]&&t.modules[i-4][s]&&(o+=40)),a^l?r++:(a=l,r>=5&&(o+=3+r-5),r=1)}var c=Math.abs(100*n/e/e-50)/5;return o+=10*c,o}},C={glog:function(t){if(t<1)throw new Error("glog("+t+")");return C.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return C.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},A=0;A<8;A++)C.EXP_TABLE[A]=1<<A;for(A=8;A<256;A++)C.EXP_TABLE[A]=C.EXP_TABLE[A-4]^C.EXP_TABLE[A-5]^C.EXP_TABLE[A-6]^C.EXP_TABLE[A-8];for(A=0;A<255;A++)C.LOG_TABLE[C.EXP_TABLE[A]]=A;function T(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var o=0;while(o<t.length&&0==t[o])o++;this.num=new Array(t.length-o+e);for(var n=0;n<t.length-o;n++)this.num[n]=t[n+o]}T.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var n=0;n<t.getLength();n++)e[o+n]^=C.gexp(C.glog(this.get(o))+C.glog(t.get(n)));return new T(e,0)},mod:function(t){var e=this.getLength(),o=t.getLength();if(e-o<0)return this;for(var n=new Array(e),i=0;i<e;i++)n[i]=this.get(i);while(n.length>=o){var r=C.glog(n[0])-C.glog(t.get(0));for(i=0;i<t.getLength();i++)n[i]^=C.gexp(C.glog(t.get(i))+r);while(0==n[0])n.shift()}return new T(n,0)}};var y=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function P(){this.buffer=new Array,this.length=0}g.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=y[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var o=e.length/3,n=0,i=0;i<o;i++){var r=e[3*i+0],a=e[3*i+2];n+=a*r}var s=t>9?2:1;if(this.utf8bytes.length+s<n||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=n;break}}},P.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var o=0;o<e;o++)this.putBit(t>>>e-o-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var x=[],E=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},N=function(t){"string"===typeof t&&(t={text:t}),this.options=Object.assign({},{text:"",render:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",image:"",imageSize:30},t);for(var e=null,o=0,n=x.length;o<n;o++)if(x[o].text==this.options.text&&x[o].text.correctLevel==this.options.correctLevel){e=x[o].obj;break}if(o==n&&(e=new g(this.options.text,this.options.correctLevel),x.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:e})),this.options.render)switch(this.options.render){case"canvas":return this.createCanvas(e);case"table":return this.createTable(e);case"svg":return this.createSVG(e);default:return this.createDefault(e)}return this.createDefault(e)};N.prototype.createDefault=function(t){var e=document.createElement("canvas");if(e.getContext)return this.createCanvas(t);var o="http://www.w3.org/2000/svg";return document.createElementNS&&document.createElementNS(o,"svg").createSVGRect?this.createSVG(t):this.createTable(t)},N.prototype.createCanvas=function(t){var e=this.options,o=document.createElement("canvas"),n=o.getContext("2d"),i=t.getModuleCount(),r=function(t,e){var o=new Image;o.src=t,o.onload=function(){e(this),o.onload=null}},a=(e.size/i).toPrecision(4),s=(e.size/i).toPrecision(4);o.width=e.size,o.height=e.size;for(var l=0;l<i;l++)for(var u=0;u<i;u++){var c=Math.ceil((u+1)*a)-Math.floor(u*a),h=Math.ceil((l+1)*a)-Math.floor(l*a),d=E({row:l,col:u,count:i,options:e});n.fillStyle=t.modules[l][u]?d:e.background,n.fillRect(Math.round(u*a),Math.round(l*s),c,h)}return e.image&&r(e.image,function(t){var o=((e.size-e.imageSize)/2).toFixed(2),i=((e.size-e.imageSize)/2).toFixed(2);n.drawImage(t,o,i,e.imageSize,e.imageSize)}),o},N.prototype.createTable=function(t){var e=this.options,o=t.getModuleCount(),n=Math.floor(e.size/o),i=Math.floor(e.size/o);n<=0&&(n=o<80?2:1),i<=0&&(i=o<80?2:1);var r=[];r.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color:'+e.background+';">');for(var a=0;a<o;a++){r.push('<tr style="border:0px; margin:0px; padding:0px; height:'+i+'px">');for(var s=0;s<o;s++){var l=E({row:a,col:s,count:o,options:e});t.modules[a][s]?r.push('<td style="border:0px; margin:0px; padding:0px; width:'+n+"px; background-color:"+l+'"></td>'):r.push('<td style="border:0px; margin:0px; padding:0px; width:'+n+"px; background-color:"+e.background+'"></td>')}r.push("</tr>")}if(r.push("</table>"),e.image){var u=n*o,c=i*o,h=((u-e.imageSize)/2).toFixed(2),d=((c-e.imageSize)/2).toFixed(2);r.unshift("<div style='position:relative; \n                        width:"+u+"px; \n                        height:"+c+"px;'>"),r.push("<img src='"+e.image+"' \n                        width='"+e.imageSize+"' \n                        height='"+e.imageSize+"' \n                        style='position:absolute;left:"+h+"px; top:"+d+"px;'>"),r.push("</div>")}var p=document.createElement("span");return p.innerHTML=r.join(""),p.firstChild},N.prototype.createSVG=function(t){var e=this.options,o=t.getModuleCount(),n=o/e.size,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("width",e.size),i.setAttribute("height",e.size),i.setAttribute("viewBox","0 0 "+o+" "+o);for(var r=0;r<o;r++)for(var a=0;a<o;a++){var s=document.createElementNS("http://www.w3.org/2000/svg","rect"),l=E({row:r,col:a,count:o,options:e});s.setAttribute("x",a),s.setAttribute("y",r),s.setAttribute("width",1),s.setAttribute("height",1),s.setAttribute("stroke-width",0),t.modules[r][a]?s.setAttribute("fill",l):s.setAttribute("fill",e.background),i.appendChild(s)}if(e.image){var u=document.createElementNS("http://www.w3.org/2000/svg","image");u.setAttributeNS("http://www.w3.org/1999/xlink","href",e.image),u.setAttribute("x",((o-e.imageSize*n)/2).toFixed(2)),u.setAttribute("y",((o-e.imageSize*n)/2).toFixed(2)),u.setAttribute("width",e.imageSize*n),u.setAttribute("height",e.imageSize*n),i.appendChild(u)}return i};var k=N,B={props:{isComponent:Boolean},data:function(){return{qrcodeImg:""}},computed:{meta:function(){return this.$route.meta},examplePath:function(){var t=location,e=t.origin,o=t.pathname;return"".concat(e).concat(o,"#").concat(this.$route.path.replace("docs","example"))}},watch:{$route:{handler:"updateQrcode",immediate:!0}},methods:{updateQrcode:function(){var t=new k({render:"canvas",text:this.examplePath});this.qrcodeImg=t.toDataURL("image/jpeg",1)}}},L=B,z=(o("bbd8"),o("c6a5"));function D(t){this["$style"]=z["default"].locals||z["default"]}var S=Object(c["a"])(L,p,v,!1,D,"5e22d304",null);S.options.__file="content.vue";var M=S.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"phone"},[o("iframe",{staticClass:"demo-page",attrs:{frameborder:"0",src:t.examplePath}})])},G=[],I={name:"phone",computed:{examplePath:function(){var t=location,e=t.origin,o=t.pathname;return"".concat(e).concat(o,"#").concat(this.$route.path.replace("docs","example"))}}},O=I,H=(o("89d1"),Object(c["a"])(O,R,G,!1,null,"2418e357",null));H.options.__file="phone.vue";var q=H.exports,X=o("56d7"),j={data:function(){return{visibleNav:!1,domQrnode:null}},computed:{isComponent:function(){var t=this.$route.path;return-1===t.indexOf("quickstart")}},watch:{$route:function(){this.visibleNav=!1}},components:{AppNavbar:d,AppPhone:q,AppContent:M,BaseIcon:X["k"],BasePopup:X["t"]}},$=j,F=(o("2041"),Object(c["a"])($,n,i,!1,null,"09c0966b",null));F.options.__file="App.vue";e["default"]=F.exports},2041:function(t,e,o){"use strict";var n=o("af5e"),i=o.n(n);i.a},"5e0f":function(t,e,o){},"76bd":function(t,e,o){},"89d1":function(t,e,o){"use strict";var n=o("76bd"),i=o.n(n);i.a},aba3:function(t,e,o){o("9add")("replace",2,function(t,e,o){return[function(n,i){"use strict";var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r,i):o.call(String(r),n,i)},o]})},af5e:function(t,e,o){},b2f9:function(t,e,o){},bbd8:function(t,e,o){"use strict";var n=o("5e0f"),i=o.n(n);i.a},c687:function(t,e,o){"use strict";var n=o("b2f9"),i=o.n(n);i.a},c6a5:function(t,e,o){"use strict";var n=o("d61a"),i=o.n(n);e["default"]=i.a},d61a:function(t,e,o){t.exports={"popup-fade-enter":"content_popup-fade-enter_j89OB","popup-fade-leave-active":"content_popup-fade-leave-active_3y0Rh","popup-slide-top-enter":"content_popup-slide-top-enter_K2mLB","popup-slide-top-leave-active":"content_popup-slide-top-leave-active_2GFYJ","popup-slide-bottom-enter":"content_popup-slide-bottom-enter_17YRE","popup-slide-bottom-leave-active":"content_popup-slide-bottom-leave-active_3He-z","popup-slide-left-enter":"content_popup-slide-left-enter_10Ya7","popup-slide-left-leave-active":"content_popup-slide-left-leave-active_2hDb0","popup-slide-right-enter":"content_popup-slide-right-enter_2FErA","popup-slide-right-leave-active":"content_popup-slide-right-leave-active_2k2Qr","fade-enter":"content_fade-enter_17_dh","fade-leave-to":"content_fade-leave-to_2TG7T","fade-enter-active":"content_fade-enter-active_1D34_","fade-leave-active":"content_fade-leave-active_12-DX","slide-top-out-enter":"content_slide-top-out-enter_ooOkN","slide-top-out-leave-to":"content_slide-top-out-leave-to_2wOzk","slide-bottom-out-enter":"content_slide-bottom-out-enter_3e69b","slide-bottom-out-leave-to":"content_slide-bottom-out-leave-to_11YUR","slide-left-out-enter":"content_slide-left-out-enter_PzCt1","slide-left-out-leave-to":"content_slide-left-out-leave-to_3e-BW","slide-right-out-enter":"content_slide-right-out-enter_2FgkT","slide-right-out-leave-to":"content_slide-right-out-leave-to_3owKS","slide-top-out-enter-active":"content_slide-top-out-enter-active_2xq9s","slide-top-out-leave-active":"content_slide-top-out-leave-active_f5XaG","slide-bottom-out-enter-active":"content_slide-bottom-out-enter-active_3tHQU","slide-bottom-out-leave-active":"content_slide-bottom-out-leave-active_kyqow","slide-left-out-enter-active":"content_slide-left-out-enter-active_3yTp7","slide-left-out-leave-active":"content_slide-left-out-leave-active_2RCqa","slide-right-out-enter-active":"content_slide-right-out-enter-active_o0hxr","slide-right-out-leave-active":"content_slide-right-out-leave-active_33eqJ","slide-top-enter":"content_slide-top-enter_3zPit","slide-bottom-leave-to":"content_slide-bottom-leave-to_Laf01","slide-top-leave-to":"content_slide-top-leave-to_1NGtO","slide-bottom-enter":"content_slide-bottom-enter_2uCea","slide-left-enter":"content_slide-left-enter_1xsHf","slide-right-leave-to":"content_slide-right-leave-to_13oil","slide-right-enter":"content_slide-right-enter_2M-tt","slide-left-leave-to":"content_slide-left-leave-to_FrXWa","slide-top-enter-active":"content_slide-top-enter-active_3-Ke3","slide-top-leave-active":"content_slide-top-leave-active_1-mTR","slide-bottom-enter-active":"content_slide-bottom-enter-active_3CVO7","slide-bottom-leave-active":"content_slide-bottom-leave-active_1fUe4","slide-left-enter-active":"content_slide-left-enter-active_U7bvV","slide-left-leave-active":"content_slide-left-leave-active_2snJ6","slide-right-enter-active":"content_slide-right-enter-active_2sEmC","slide-right-leave-active":"content_slide-right-leave-active_2QCmY","bounce-enter-active":"content_bounce-enter-active_3zbqX","bounce-in":"content_bounce-in_1NzGy","bounce-leave-active":"content_bounce-leave-active_3cghs","container-scrollable":"content_container-scrollable_wu7ga"}}}]);
//# sourceMappingURL=chunk-ea69a438.a78e5063.js.map