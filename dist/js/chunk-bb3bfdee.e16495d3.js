(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb3bfdee"],{d85a:function(t,e,n){"use strict";var c=n("f952"),s=n.n(c);s.a},deb1:function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list row"},[n("input",{attrs:{type:"text"}}),n("md-list",t._l(t.products,(function(e,c){return n("md-list-item",{key:c,staticClass:"list-group-item"},[n("div",{staticClass:"md-list-item-text"},[n("span",[t._v(t._s(e.name))]),n("span",[t._v(t._s(e.cost))]),n("span",[t._v(t._s(e.price))]),n("span",[t._v(t._s(e.qty))]),n("span",[t._v(t._s(e.code))])]),n("a",[n("md-button",{staticClass:"md-icon-button md-list-action",attrs:{href:"/product/"+e.id}},[n("md-icon",{staticClass:"md"},[t._v("edit")])],1)],1)])})),1)],1)},s=[],a=n("d4ec"),u=n("bee2"),o=n("c427"),i=function(){function t(){Object(a["a"])(this,t)}return Object(u["a"])(t,[{key:"getAll",value:function(){return o["a"].get("/product/get")}},{key:"get",value:function(t){return o["a"].get("/product/get/".concat(t))}},{key:"create",value:function(t){return o["a"].post("/product/insert",t)}},{key:"update",value:function(t,e){return o["a"].put("/product/update/".concat(t),e)}}]),t}(),r=new i,d={name:"Product-list",data:function(){return{products:[]}},methods:{retrieveProducts:function(){var t=this;r.getAll().then((function(e){t.products=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.retrieveProducts()}},l=d,p=(n("d85a"),n("2877")),f=Object(p["a"])(l,c,s,!1,null,null,null);e["default"]=f.exports},f952:function(t,e,n){}}]);
//# sourceMappingURL=chunk-bb3bfdee.e16495d3.js.map