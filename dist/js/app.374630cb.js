(function(e){function t(t){for(var n,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d05dc":"26b2253d","chunk-2d217a99":"90a2d1e4","chunk-2d21a3d2":"570fb91c","chunk-4e668e14":"1bede760","chunk-5831204f":"627143fa","chunk-5f4ad635":"f0817237","chunk-7be10dc8":"edea8c25","chunk-9d1675fc":"9cf8f26f","chunk-c420df12":"ebc404ed"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-5831204f":1,"chunk-7be10dc8":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0d05dc":"31d6cfe0","chunk-2d217a99":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-4e668e14":"31d6cfe0","chunk-5831204f":"c2507a61","chunk-5f4ad635":"31d6cfe0","chunk-7be10dc8":"fbb7b0b0","chunk-9d1675fc":"31d6cfe0","chunk-c420df12":"31d6cfe0"}[e]+".css",o=s.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],f.parentNode.removeChild(f),r(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4360:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("2b0e"),o=r("2f62"),c=(r("7f7f"),r("59ca")),i=r.n(c),s={actions:{getUserId:function(){var e=i.a.auth().currentUser;return e?e.uid:null},register:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,o=r.email,c=r.password,s=r.name,e.prev=2,e.next=5,i.a.auth().createUserWithEmailAndPassword(o,c);case 5:return e.next=7,n("getUserId");case 7:return u=e.sent,e.next=10,i.a.database().ref("/users/".concat(u,"/info")).set({bill:100,name:s});case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e["catch"](2),a("setError",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));function t(t,r){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.email,o=r.password,e.prev=2,e.next=5,i.a.auth().signInWithEmailAndPassword(a,o);case 5:e.next=11;break;case 7:throw e.prev=7,e.t0=e["catch"](2),n("setError",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[2,7]])})));function t(t,r){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,i.a.auth().signOut();case 3:r("clearInfo");case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},u=(r("8e6e"),r("ac6a"),r("456d"),r("bd86"));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info=""}},actions:{fetchInfo:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,n=t.commit,e.prev=1,e.next=4,r("getUserId");case 4:return a=e.sent,e.next=7,i.a.database().ref("/users/".concat(a,"/info")).once("value");case 7:o=e.sent.val(),n("setInfo",o),e.next=15;break;case 11:throw e.prev=11,e.t0=e["catch"](1),n("setError",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),updateInfo:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,o=t.getters,e.prev=1,e.next=4,n("getUserId");case 4:return c=e.sent,s=d({},o.info,{},r),e.next=8,i.a.database().ref("/users/".concat(c,"/info")).update(s);case 8:a("setInfo",s),e.next=15;break;case 11:throw e.prev=11,e.t0=e["catch"](1),a("setError",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t,r){return e.apply(this,arguments)}return t}()},getters:{info:function(e){return e.info}}};function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={actions:{createRecord:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,e.prev=1,e.next=4,n("getUserId");case 4:return o=e.sent,e.next=7,i.a.database().ref("/users/".concat(o,"/records")).push(r);case 7:e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](1),a("setError",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t,r){return e.apply(this,arguments)}return t}(),fetchRecords:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=t.dispatch,e.prev=1,e.next=4,n("getUserId");case 4:return a=e.sent,e.next=7,i.a.database().ref("/users/".concat(a,"/records")).once("value");case 7:if(e.t0=e.sent.val(),e.t0){e.next=10;break}e.t0={};case 10:return o=e.t0,e.abrupt("return",Object.keys(o).map((function(e){return g({},o[e],{id:e})})));case 14:throw e.prev=14,e.t1=e["catch"](1),r("setError",e.t1),e.t1;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));function t(t){return e.apply(this,arguments)}return t}(),fetchRecordById:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,e.prev=1,e.next=4,a("getUserId");case 4:return o=e.sent,e.next=7,i.a.database().ref("/users/".concat(o,"/records")).child(r).once("value");case 7:if(e.t0=e.sent.val(),e.t0){e.next=10;break}e.t0={};case 10:return c=e.t0,e.abrupt("return",g({},c,{id:r}));case 14:throw e.prev=14,e.t1=e["catch"](1),n("setError",e.t1),e.t1;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),deleteRecordsByCategoryId:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,e.prev=1,e.next=4,a("getUserId");case 4:return o=e.sent,e.next=7,a("fetchRecords");case 7:return c=e.sent,e.next=10,c.filter((function(e){return e.categoryId===r})).forEach((function(e){return i.a.database().ref("/users/".concat(o,"/records")).child(e.id).remove()}));case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e["catch"](1),n("setError",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));function t(t,r){return e.apply(this,arguments)}return t}()}};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={actions:{createCategory:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,o=r.title,c=r.limit,e.prev=2,e.next=5,a("getUserId");case 5:return s=e.sent,e.next=8,i.a.database().ref("/users/".concat(s,"/categories")).push({title:o,limit:c});case 8:return u=e.sent,e.abrupt("return",{title:o,limit:c,id:u.key});case 12:throw e.prev=12,e.t0=e["catch"](2),n("setError",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));function t(t,r){return e.apply(this,arguments)}return t}(),updateCategory:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,o=r.title,c=r.limit,s=r.id,e.prev=2,e.next=5,a("getUserId");case 5:return u=e.sent,e.next=8,i.a.database().ref("/users/".concat(u,"/categories")).child(s).update({title:o,limit:c});case 8:e.next=14;break;case 10:throw e.prev=10,e.t0=e["catch"](2),n("setError",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),deleteCategory:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,e.prev=1,e.next=4,a("getUserId");case 4:return o=e.sent,e.next=7,i.a.database().ref("/users/".concat(o,"/categories")).child(r).remove();case 7:return e.next=9,a("deleteRecordsByCategoryId",r);case 9:e.next=15;break;case 11:throw e.prev=11,e.t0=e["catch"](1),n("setError",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t,r){return e.apply(this,arguments)}return t}(),fetchCategories:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=t.dispatch,e.prev=1,e.next=4,n("getUserId");case 4:return a=e.sent,e.next=7,i.a.database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(e.t0=e.sent.val(),e.t0){e.next=10;break}e.t0={};case 10:return o=e.t0,e.abrupt("return",Object.keys(o).map((function(e){return b({},o[e],{id:e})})));case 14:throw e.prev=14,e.t1=e["catch"](1),r("setError",e.t1),e.t1;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));function t(t){return e.apply(this,arguments)}return t}(),fetchCategoryById:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,e.prev=1,e.next=4,a("getUserId");case 4:return o=e.sent,e.next=7,i.a.database().ref("/users/".concat(o,"/categories")).child(r).once("value");case 7:if(e.t0=e.sent.val(),e.t0){e.next=10;break}e.t0={};case 10:return c=e.t0,e.abrupt("return",b({},c,{id:r}));case 14:throw e.prev=14,e.t1=e["catch"](1),n("setError",e.t1),e.t1;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));function t(t,r){return e.apply(this,arguments)}return t}()}};a["a"].use(o["a"]);t["a"]=new o["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{fetchCurrency:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="f0bf8e9a4763c2506b296738c2b1c0a7",e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,RUB"));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},getters:{error:function(e){return e.error}},modules:{auth:s,info:f,category:v,record:m}})},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("1dce"),o=r.n(a),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grey darken-1 empty-layout"},[r("router-view")],1)},u=[],l=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),d=r("b444"),f=r("2f62");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){Object(l["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={computed:g({},Object(f["c"])(["error"])),watch:{error:function(e){this.$error(d["a"][e.code]||"Что то пошло не так!")}}},h=m,b=r("2877"),v=Object(b["a"])(h,s,u,!1,null,null,null),y=v.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"app-main-layout"},[r("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),r("Sidebar",{key:e.locale,model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),r("main",{staticClass:"app-content",class:{full:!e.isOpen}},[r("div",{staticClass:"app-page"},[e.loading?r("Loader"):r("router-view")],1)]),r("div",{directives:[{name:"tooltip",rawName:"v-tooltip:left",value:e.tooltipCreateNewRecord,expression:"tooltipCreateNewRecord",arg:"left"}],staticClass:"fixed-action-btn"},[r("router-link",{staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)])},w=[],O=(r("96cf"),r("3b8d")),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar orange lighten-1"},[r("div",{staticClass:"nav-wrapper"},[r("div",{staticClass:"navbar-left"},[r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[r("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),r("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),r("ul",{staticClass:"right hide-on-small-and-down"},[r("li",[r("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v("\n          "+e._s(e.name)+"\n          "),r("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),r("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[r("li",[r("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[r("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v(e._s(e._f("localize")("Navbar_Profile"))+"\n            ")])],1),r("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),r("li",[r("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[r("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v(e._s(e._f("localize")("Navbar_LogOff"))+"\n            ")])])])])])])])},x=[],k=(r("7f7f"),{data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("logout");case 2:this.$router.push("/login?message=logout");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},computed:{name:function(){return this.$store.getters.info.name}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=M.Dropdown.init(this.$refs.dropdown,{coverTrigger:!1,constrainWidth:!1})},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}}),E=k,j=Object(b["a"])(E,C,x,!1,null,null,null),P=j.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return r("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},N=[],S=r("e977"),D={props:["value"],data:function(){return{links:[{title:Object(S["a"])("Sidebar_Bill"),url:"/",exact:!0},{title:Object(S["a"])("Sidebar_History"),url:"/history"},{title:Object(S["a"])("Sidebar_Planning"),url:"/planning"},{title:Object(S["a"])("Sidebar_NewRecord"),url:"/record"},{title:Object(S["a"])("Sidebar_Categories"),url:"/categories"}]}},computed:{locale:function(){return this.$store.getters.info.locale}}},H=D,I=Object(b["a"])(H,R,N,!1,null,null,null),A=I.exports,U={name:"main-layout",data:function(){return{isOpen:!0,loading:!0,tooltipCreateNewRecord:Object(S["a"])("Tooltip_CreateNewRecord")}},computed:{locale:function(){return this.$store.getters.info.locale}},mounted:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Object.keys(this.$store.getters.info).length){e.next=3;break}return e.next=3,this.$store.dispatch("fetchInfo");case 3:this.loading=!1;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),components:{Navbar:P,Sidebar:A}},L=U,T=Object(b["a"])(L,_,w,!1,null,null,null),$=T.exports,B={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:y,MainLayout:$}},F=B,z=(r("5c0b"),Object(b["a"])(F,c,i,!1,null,null,null)),V=z.exports,W=r("8832"),Y=r.n(W),J=r("8c4f"),q=r("59ca"),Q=r.n(q);n["a"].use(J["a"]);var K=new J["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return r.e("chunk-5f4ad635").then(r.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return r.e("chunk-c420df12").then(r.bind(null,"73cf"))}},{path:"/categories",name:"categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-5831204f").then(r.bind(null,"58c2"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d217a99").then(r.bind(null,"c84b"))}},{path:"/history",name:"history",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-9d1675fc").then(r.bind(null,"e4bb"))}},{path:"/planning",name:"planning",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d0d05dc").then(r.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-7be10dc8").then(r.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-4e668e14").then(r.bind(null,"43ef"))}}]});K.beforeEach((function(e,t,r){var n=Q.a.auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));!n&&a?r("/login?message=login"):r()}));var G=K,X=r("4360");r("6762"),r("2fdb");function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={},n=X["a"].getters.info.locale;return t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit"),new Intl.DateTimeFormat(n,r).format(new Date(e))}var ee=r("5bb3"),te={install:function(e){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[".concat(Object(S["a"])("Message_Error"),"]: ").concat(e)})}}},re={bind:function(e,t){var r=t.value,n=t.arg;M.Tooltip.init(e,{html:r,position:"".concat(n)})},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}},ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper big active"},[r("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},ae=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])}],oe={computed:{color:function(){var e=["spinner-blue-only","spinner-red-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},ce=oe,ie=Object(b["a"])(ce,ne,ae,!1,null,null,null),se=ie.exports,ue=r("9483");Object(ue["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var le;r("6885"),r("ea7b"),r("66ce");n["a"].config.productionTip=!1,n["a"].use(o.a),n["a"].use(te),n["a"].filter("date",Z),n["a"].filter("currency",ee["a"]),n["a"].filter("localize",S["a"]),n["a"].directive("tooltip",re),n["a"].component("Loader",se),n["a"].component("Paginate",Y.a),Q.a.initializeApp({apiKey:"AIzaSyANiew2FtjFbiQioria3iQrxWbIn4_EwMQ",authDomain:"vue-crm-forhome.firebaseapp.com",databaseURL:"https://vue-crm-forhome.firebaseio.com",projectId:"vue-crm-forhome",storageBucket:"vue-crm-forhome.appspot.com",messagingSenderId:"938416684695",appId:"1:938416684695:web:3108f0e334f4900e0c73d2"}),Q.a.auth().onAuthStateChanged((function(){le||(le=new n["a"]({router:G,store:X["a"],render:function(e){return e(V)}}).$mount("#app"))}))},"5bb3":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EUR";return Intl.NumberFormat("ru-RU",{style:"currency",minimumFractionDigits:0,currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";var n=r("e332"),a=r.n(n);a.a},7704:function(e){e.exports=JSON.parse('{"Profile_Title":"Профиль","Profile_Name":"Имя","Profile_EnterName":"Введите имя","Profile_Update":"Обновить","Profile_NameLarger":"Имя должно быть больше","Profile_Simbols":"символов","Navbar_Profile":"Профиль","Navbar_LogOff":"Выйти","Sidebar_Bill":"Счет","Sidebar_History":"История","Sidebar_Planning":"Планирование","Sidebar_NewRecord":"Новая запись","Sidebar_Categories":"Категории","Home_Title":"Счет","Home_BillInCurrency":"Счет в валюте","Home_ExchangeRates":"Курс валют","Home_Currency":"Валюта","Home_Exchange":"Курс","Home_Date":"Дата","History_RecordsHistory":"История записей","History_NoRecordsYet":"Пока записей нет","History_AddNewRecord":"Добавить новую запись","History_Amount":"Сумма","History_Date":"Дата","History_Category":"Категория","History_Type":"Тип","History_Open":"Открыть","History_ViewRecord":"Посмотреть запись","History_CostsbyCategories":"Расходы по категориям","Pagination_Next":"Вперед","Pagination_Prev":"Назад","Planning_Title":"Планирование","Planning_Of":"из","Planning_ExcessOf":"Превышение на","Planning_Left":"Осталось","Record_NewRecord":"Новая запись","Record_SelectCategory":"Выберите категорию","Record_MinValue":"Минимальное значение","Record_Description":"Описание","Record_EnterDescription":"Введите описание","Record_Create":"Создать","Categories_Title":"Категории","Category_Create":"Создать","Category_Name":"Название","Category_EnterCategoryName":"Введите название категории","Category_Limit":"Лимит","Category_MinValue":"Минимальное значение","Category_Edit":"Редактировать","Category_SelectCategory":"Выберите категорию","Category_Change":"Изменить","Category_Delete":"Удалить","Tooltip_CreateNewRecord":"Создать новую запись","Message_Category":"Категория","Message_Created":"была создана","Message_CategoryChanged":"Категория успешно изменена","Message_Deleted":"была успешно удалена","Message_Logout":"Вы вышли из системы","Message_Login":"Для начала войдите в систему","Message_UserNotFound":"Пользователем с таким email не существует","Message_WrongPassword":"Пароль введен неверно","Message_EmailAlreadyInUse":"Пользователь с таким email уже существует","Message_Error":"Ошибка","HomeAccounting":"Домашняя бухгалтерия","EnterEmail":"Введите Email","EnterCorrectEmail":"Введите корректный Email","Password":"Пароль","EnterPassword":"Введите пароль","LargerPassword":"Пароль должен быть больше","Characters":"символов","Login":"Войти","DontHaveAccount":"Нет аккаунта?","SingUp":"Зарегистрироваться","Name":"Имя","EnterName":"Введите имя","LargerName":"Имя должно быть больше","AcceptRules":"С правилами согласен","HaveAccount":"Уже есть аккаунт?","Amount":"Сумма","Income":"Доход","Outcome":"Расход","NoCategoriesYet":"Категорий пока нет","AddNewCategory":"Добавить новую категорию"}')},b444:function(e,t,r){"use strict";var n=r("e977");t["a"]={logout:Object(n["a"])("Message_Logout"),login:Object(n["a"])("Message_Login"),"auth/user-not-found":Object(n["a"])("Message_UserNotFound"),"auth/wrong-password":Object(n["a"])("Message_WrongPassword"),"auth/email-already-in-use":Object(n["a"])("Message_EmailAlreadyInUse")}},e332:function(e,t,r){},e977:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("4360"),a=r("7704"),o=r("edd4"),c={"ru-RU":a,"en-US":o};function i(e){var t=n["a"].getters.info.locale||"en-US";return c[t][e]||"[Localize Error]: key ".concat(e," not found")}},edd4:function(e){e.exports=JSON.parse('{"Profile_Title":"Profile","Profile_Name":"Name","Profile_EnterName":"Enter name","Profile_Update":"Update","Profile_NameLarger":"Name must be larger than","Profile_Simbols":"characters","Navbar_Profile":"Profile","Navbar_LogOff":"Logout","Sidebar_Bill":"Bill","Sidebar_History":"History","Sidebar_Planning":"Planning","Sidebar_NewRecord":"New Record","Sidebar_Categories":"Categories","Home_Title":"Bill","Home_BillInCurrency":"Bill in currency","Home_ExchangeRates":"Exchange rates","Home_Currency":"Currency","Home_Exchange":"Exchange","Home_Date":"Date","History_RecordsHistory":"Records History","History_NoRecordsYet":"No records yet","History_AddNewRecord":"Add a new record","History_Amount":"Amount","History_Date":"Date","History_Category":"Category","History_Type":"Type","History_Open":"Open","History_ViewRecord":"View record","History_CostsbyCategories":"Costs by Categories","Pagination_Next":"Next","Pagination_Prev":"Prev","Planning_Title":"Planning","Planning_Of":"of","Planning_ExcessOf":"Excess of","Planning_Left":"Left","Record_NewRecord":"New Record","Record_SelectCategory":"Select category","Record_MinValue":"Minimum value","Record_Description":"Description","Record_EnterDescription":"Enter description","Record_Create":"Create","Categories_Title":"Categories","Category_Create":"Create","Category_Name":"Title","Category_EnterCategoryName":"Enter category title","Category_Limit":"Limit","Category_MinValue":"Minimum value","Category_Edit":"Edit","Category_SelectCategory":"Select a category","Category_Change":"Change","Category_Delete":"Delete","Tooltip_CreateNewRecord":"Create new record","Message_Category":"Category","Message_Created":"created","Message_CategoryChanged":"Category changed successfully","Message_Deleted":"deleted successfully","Message_Logout":"You are logged out","Message_Login":"Log in to get started","Message_UserNotFound":"A user with this email does not exist","Message_WrongPassword":"Password entered incorrectly","Message_EmailAlreadyInUse":"A user with this email already exists","Message_Error":"Error","HomeAccounting":"Home Accounting","EnterEmail":"Enter Email","EnterCorrectEmail":"Enter the correct email address","Password":"Password","EnterPassword":"Enter password","LargerPassword":"Password must be greater than","Characters":"characters","Login":"Sign in","DontHaveAccount":"Don\'t have account yet?","SingUp":"Sign up","Name":"Your name","EnterName":"Enter your name","LargerName":"Name must be greater than","AcceptRules":"I agree with the rules","HaveAccount":"Already have an account?","Amount":"Amount","Income":"Income","Outcome":"Outcome","NoCategoriesYet":"No categories yet","AddNewCategory":"Add a new category"}')}});
//# sourceMappingURL=app.374630cb.js.map