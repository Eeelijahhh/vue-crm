(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217a99"],{c84b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("Loader"):t.record?r("div",[r("div",{staticClass:"breadcrumb-wrap"},[r("router-link",{staticClass:"breadcrumb",attrs:{to:"/history"}},[t._v("История")]),r("a",{staticClass:"breadcrumb",attrs:{href:""},on:{click:function(t){t.preventDefault()}}},[t._v(t._s(t.record.typeText))])],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col s12 m6"},[r("div",{staticClass:"card",class:[t.record.typeClass]},[r("div",{staticClass:"card-content white-text"},[r("p",[t._v("Описание: "+t._s(t.record.description))]),r("p",[t._v("Сумма: "+t._s(t._f("currency")(t.record.amount)))]),r("p",[t._v("Категория: "+t._s(t.record.categoryName))]),r("small",[t._v(t._s(t._f("date")(t.record.date,"datetime")))])])])])])]):r("p",{staticClass:"center"},[t._v("\n    Записи с ID:\n    "),r("strong",[t._v(t._s(t.id))]),t._v(" не существует\n  ")])],1)},c=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),s=(r("96cf"),r("3b8d"));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={name:"detail",data:function(){return{record:null,loading:!0,id:this.$route.params.id}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("fetchRecordById",this.id);case 2:return e=t.sent,t.next=5,this.$store.dispatch("fetchCategoryById",e.categoryId);case 5:r=t.sent,this.record=o({},e,{categoryName:r.title,typeClass:"income"===e.type?"green":"red",typeText:"income"===e.type?"Доход":"Расход"}),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},u=d,l=r("2877"),p=Object(l["a"])(u,n,c,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d217a99.90a2d1e4.js.map