(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],d=0,l=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-969d963a":"dd89ab5a","chunk-0607a5a0":"61d41534","chunk-1fd9047b":"f0fa903b","chunk-2cb456b0":"622343e0","chunk-6cca2cd5":"f3d1d5d0","chunk-73fdc42c":"aa55c18e","chunk-7b29bb58":"80cd889d","chunk-95126770":"412cc19e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0607a5a0":1,"chunk-1fd9047b":1,"chunk-2cb456b0":1,"chunk-6cca2cd5":1,"chunk-73fdc42c":1,"chunk-7b29bb58":1,"chunk-95126770":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-969d963a":"31d6cfe0","chunk-0607a5a0":"4e0fa36c","chunk-1fd9047b":"2d561e0d","chunk-2cb456b0":"465f69d9","chunk-6cca2cd5":"4e0fa36c","chunk-73fdc42c":"8be57a50","chunk-7b29bb58":"465f69d9","chunk-95126770":"2d561e0d"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container"},[n("md-app",{attrs:{"md-mode":"reveal"}},[n("md-app-toolbar",{staticClass:"md-primary"},[n("md-button",{staticClass:"md-icon-button",on:{click:function(t){e.menuVisible=!e.menuVisible}}},[n("md-icon",[e._v("menu")])],1),n("router-link",{attrs:{to:"/rosters"}},[n("span",{staticClass:"md-title"},[e._v("Store Tool")])])],1),n("md-app-drawer",{attrs:{"md-active":e.menuVisible},on:{"update:mdActive":function(t){e.menuVisible=t},"update:md-active":function(t){e.menuVisible=t}}},[n("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[e._v("Menu")]),n("md-list",[n("md-list-item",{on:{click:function(t){e.menuVisible=!e.menuVisible}}},[n("md-icon",[e._v("home")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/rosters"}},[n("span",{staticClass:"md-list-item-text"},[e._v("Rosters")])])],1),n("md-list-item",{on:{click:function(t){e.menuVisible=!e.menuVisible}}},[n("md-icon",[e._v("add")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/addroster"}},[n("span",{staticClass:"md-list-item-text"},[e._v("+ Roster")])])],1),n("md-list-item",{on:{click:function(t){e.menuVisible=!e.menuVisible}}},[n("md-icon",[e._v("info")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/products"}},[n("span",{staticClass:"md-list-item-text"},[e._v("Products")])])],1),n("md-list-item",{on:{click:function(t){e.menuVisible=!e.menuVisible}}},[n("md-icon",[e._v("add")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/addproduct"}},[n("span",{staticClass:"md-list-item-text"},[e._v("+ Product")])])],1),n("md-list-item",{on:{click:function(t){e.menuVisible=!e.menuVisible}}},[n("md-icon",[e._v("info")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[n("span",{staticClass:"md-list-item-text"},[e._v("+Cart")])])],1)],1)],1),n("md-app-content",[n("router-view")],1)],1),n("notify")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-snackbar",{attrs:{"md-position":e.position,"md-duration":e.isInfinity?1/0:e.duration,"md-active":e.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(t){e.showSnackbar=t},"update:md-active":function(t){e.showSnackbar=t}}},[n("span",[e._v(e._s(e.error))])])},c=[],u={data:function(){return{submitted:!1,showSnackbar:!1,position:"center",duration:4e3,isInfinity:!1,error:""}},created:function(){var e=this;this.$store.subscribe((function(t,n){"errorMessage"===t.type&&(e.error=n.error,e.showSnackbar=!0)}))}},s=u,d=n("2877"),l=Object(d["a"])(s,i,c,!1,null,null,null),f=l.exports,m=n("2f62");r["default"].use(m["a"]);var p=new m["a"].Store({state:{showSnackbar:!1,position:"center",duration:4e3,isInfinity:!1,error:""},mutations:{errorMessage:function(e,t){console.log(e,t,"err"),e.error=t}}}),h={components:{notify:f},name:"app",store:p,data:function(){return{menuVisible:!1}}},b=h,k=(n("034f"),Object(d["a"])(b,a,o,!1,null,null,null)),v=k.exports,g=(n("d3b7"),n("8c4f"));r["default"].use(g["a"]);var y=new g["a"]({mode:"history",routes:[{path:"/",alias:"/rosters",name:"rosters",component:function(){return Promise.all([n.e("chunk-969d963a"),n.e("chunk-6cca2cd5")]).then(n.bind(null,"d250"))}},{path:"/roster/:date",name:"roster-details",component:function(){return Promise.all([n.e("chunk-969d963a"),n.e("chunk-1fd9047b")]).then(n.bind(null,"ae58"))}},{path:"/addroster",name:"addroster",component:function(){return Promise.all([n.e("chunk-969d963a"),n.e("chunk-2cb456b0")]).then(n.bind(null,"3816"))}},{path:"/products",name:"products",component:function(){return Promise.all([n.e("chunk-969d963a"),n.e("chunk-0607a5a0")]).then(n.bind(null,"deb1"))}},{path:"/addProduct",name:"addProduct",component:function(){return Promise.all([n.e("chunk-969d963a"),n.e("chunk-7b29bb58")]).then(n.bind(null,"e3e8"))}},{path:"/product/:id",name:"product-details",component:function(){return Promise.all([n.e("chunk-969d963a"),n.e("chunk-95126770")]).then(n.bind(null,"be6f"))}},{path:"/cart/",name:"product-cart",component:function(){return Promise.all([n.e("chunk-969d963a"),n.e("chunk-73fdc42c")]).then(n.bind(null,"b3b1"))}}]}),_=n("9c30");n("51de"),n("e094");r["default"].config.productionTip=!1,r["default"].use(_["MdTable"]),r["default"].use(_["MdIcon"]),r["default"].use(_["MdButton"]),r["default"].use(_["MdList"]),r["default"].use(_["MdApp"]),r["default"].use(_["MdContent"]),r["default"].use(_["MdToolbar"]),r["default"].use(_["MdDrawer"]),r["default"].use(_["MdField"]),r["default"].use(_["MdSnackbar"]),console.log("production","process.env.NODE_ENV"),new r["default"]({router:y,render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.41b14127.js.map