(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5164d302"],{a96e:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-main",{attrs:{app:""}},[e("vue-page-transition",{attrs:{name:"fade-in-left"}},[e("router-view")],1)],1)},i=[],o={name:"CoreView"},r=o,s=e("2877"),c=e("6544"),u=e.n(c),d=e("f6c4"),f=Object(s["a"])(r,a,i,!1,null,null,null);n["default"]=f.exports;u()(f,{VMain:d["a"]})},bd0c:function(t,n,e){},d10f:function(t,n,e){"use strict";var a=e("2b0e");n["a"]=a["default"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},f6c4:function(t,n,e){"use strict";e("bd0c");var a=e("d10f");n["a"]=a["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,e=t.top,a=t.right,i=t.footer,o=t.insetFooter,r=t.bottom,s=t.left;return{paddingTop:"".concat(e+n,"px"),paddingRight:"".concat(a,"px"),paddingBottom:"".concat(i+o+r,"px"),paddingLeft:"".concat(s,"px")}}},render:function(t){var n={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,n,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);