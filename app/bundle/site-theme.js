!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}({0:function(t,e,n){"use strict";function o(t,e,n,o,s,a,i,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):s&&(l=r?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return o}))},5:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"uk-margin uk-flex uk-flex-middle uk-flex-between uk-flex-wrap"},[n("div",[n("h2",{staticClass:"uk-h3 uk-margin-remove"},[t._v("\n                "+t._s(t._f("trans")("Theme"))+"\n            ")])]),t._v(" "),n("div",{staticClass:"uk-margin-small"},[n("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"submit"}},[t._v("\n                "+t._s(t._f("trans")("Save"))+"\n            ")])])]),t._v(" "),n("div",{staticClass:"uk-form uk-form-horizontal"},[n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label"},[t._v(t._s(t._f("trans")("Logo Contrast")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input-image",{attrs:{"input-class":"uk-form-width-large"},model:{value:t.config.logo_contrast,callback:function(e){t.$set(t.config,"logo_contrast",e)},expression:"config.logo_contrast"}}),t._v(" "),n("div",{staticClass:"uk-text-meta"},[t._v("\n                    "+t._s(t._f("trans")("Select an alternative logo which looks great on images."))+"\n                ")])],1)]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label"},[t._v(t._s(t._f("trans")("Logo Off-canvas")))]),t._v(" "),n("div",{staticClass:"uk-form-controls"},[n("input-image",{attrs:{"input-class":"uk-form-width-large"},model:{value:t.config.logo_offcanvas,callback:function(e){t.$set(t.config,"logo_offcanvas",e)},expression:"config.logo_offcanvas"}}),t._v(" "),n("div",{staticClass:"uk-text-meta"},[t._v("\n                    "+t._s(t._f("trans")("Select an optional logo for the off-canvas menu."))+"\n                ")])],1)])])])};o._withStripped=!0;var s={section:{label:"Theme",icon:"pk-icon-large-brush",priority:15},data:()=>_.extend({config:{}},window.$theme),events:{"save:settings":function(){this.$http.post("admin/system/settings/config",{name:this.name,config:this.config}).catch((function(t){this.$notify(t.data,"danger")}))}}},a=s;window.Site.components["site-theme"]=s;var i=a,r=n(0),l=Object(r.a)(i,o,[],!1,null,null,null);l.options.__file="app/components/site-theme.vue";e.default=l.exports}});