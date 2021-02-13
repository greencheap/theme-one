/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/components/widget-theme.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/widget-theme.vue":
/*!*****************************************!*\
  !*** ./app/components/widget-theme.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widget_theme_vue_vue_type_template_id_f9d9c066___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-theme.vue?vue&type=template&id=f9d9c066& */ \"./app/components/widget-theme.vue?vue&type=template&id=f9d9c066&\");\n/* harmony import */ var _widget_theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget-theme.vue?vue&type=script&lang=js& */ \"./app/components/widget-theme.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _widget_theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _widget_theme_vue_vue_type_template_id_f9d9c066___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _widget_theme_vue_vue_type_template_id_f9d9c066___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app/components/widget-theme.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/components/widget-theme.vue?");

/***/ }),

/***/ "./app/components/widget-theme.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./app/components/widget-theme.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./widget-theme.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/widget-theme.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_theme_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/components/widget-theme.vue?");

/***/ }),

/***/ "./app/components/widget-theme.vue?vue&type=template&id=f9d9c066&":
/*!************************************************************************!*\
  !*** ./app/components/widget-theme.vue?vue&type=template&id=f9d9c066& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_theme_vue_vue_type_template_id_f9d9c066___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./widget-theme.vue?vue&type=template&id=f9d9c066& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/widget-theme.vue?vue&type=template&id=f9d9c066&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_theme_vue_vue_type_template_id_f9d9c066___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_theme_vue_vue_type_template_id_f9d9c066___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/components/widget-theme.vue?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/widget-theme.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/components/widget-theme.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar WidgetTheme = {\n  section: {\n    label: 'Theme',\n    priority: 90\n  },\n  props: ['widget', 'config']\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WidgetTheme);\nwindow.Widgets.components.theme = WidgetTheme;\n\n//# sourceURL=webpack:///./app/components/widget-theme.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/widget-theme.vue?vue&type=template&id=f9d9c066&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/widget-theme.vue?vue&type=template&id=f9d9c066& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"uk-form-horizontal\" }, [\n    _c(\"div\", { staticClass: \"uk-margin\" }, [\n      _c(\"span\", { staticClass: \"uk-form-label\" }, [\n        _vm._v(_vm._s(_vm._f(\"trans\")(\"Title\")))\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-form-controls uk-form-controls-text\" }, [\n        _c(\"label\", [\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.widget.theme.title_hide,\n                expression: \"widget.theme.title_hide\"\n              }\n            ],\n            staticClass: \"uk-checkbox\",\n            attrs: { type: \"checkbox\" },\n            domProps: {\n              checked: Array.isArray(_vm.widget.theme.title_hide)\n                ? _vm._i(_vm.widget.theme.title_hide, null) > -1\n                : _vm.widget.theme.title_hide\n            },\n            on: {\n              change: function($event) {\n                var $$a = _vm.widget.theme.title_hide,\n                  $$el = $event.target,\n                  $$c = $$el.checked ? true : false\n                if (Array.isArray($$a)) {\n                  var $$v = null,\n                    $$i = _vm._i($$a, $$v)\n                  if ($$el.checked) {\n                    $$i < 0 &&\n                      _vm.$set(\n                        _vm.widget.theme,\n                        \"title_hide\",\n                        $$a.concat([$$v])\n                      )\n                  } else {\n                    $$i > -1 &&\n                      _vm.$set(\n                        _vm.widget.theme,\n                        \"title_hide\",\n                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))\n                      )\n                  }\n                } else {\n                  _vm.$set(_vm.widget.theme, \"title_hide\", $$c)\n                }\n              }\n            }\n          }),\n          _vm._v(\" \" + _vm._s(_vm._f(\"trans\")(\"Hide Title\")))\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"uk-margin\" }, [\n      _c(\n        \"label\",\n        {\n          staticClass: \"uk-form-label\",\n          attrs: { for: \"form-theme-title-size\" }\n        },\n        [_vm._v(_vm._s(_vm._f(\"trans\")(\"Title Size\")))]\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n        _c(\n          \"select\",\n          {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.widget.theme.title_size,\n                expression: \"widget.theme.title_size\"\n              }\n            ],\n            staticClass: \"uk-form-width-large uk-select\",\n            attrs: { id: \"form-theme-title-size\" },\n            on: {\n              change: function($event) {\n                var $$selectedVal = Array.prototype.filter\n                  .call($event.target.options, function(o) {\n                    return o.selected\n                  })\n                  .map(function(o) {\n                    var val = \"_value\" in o ? o._value : o.value\n                    return val\n                  })\n                _vm.$set(\n                  _vm.widget.theme,\n                  \"title_size\",\n                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]\n                )\n              }\n            }\n          },\n          [\n            _c(\"option\", { attrs: { value: \"uk-panel-title\" } }, [\n              _vm._v(\n                \"\\n                    \" +\n                  _vm._s(_vm._f(\"trans\")(\"Default\")) +\n                  \"\\n                \"\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"option\", { attrs: { value: \"uk-h1 uk-margin-remove-top\" } }, [\n              _vm._v(\n                \"\\n                    \" +\n                  _vm._s(_vm._f(\"trans\")(\"H1\")) +\n                  \"\\n                \"\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"option\", { attrs: { value: \"uk-h2 uk-margin-remove-top\" } }, [\n              _vm._v(\n                \"\\n                    \" +\n                  _vm._s(_vm._f(\"trans\")(\"H2\")) +\n                  \"\\n                \"\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"option\", { attrs: { value: \"uk-h3 uk-margin-remove-top\" } }, [\n              _vm._v(\n                \"\\n                    \" +\n                  _vm._s(_vm._f(\"trans\")(\"H3\")) +\n                  \"\\n                \"\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"option\", { attrs: { value: \"uk-h4 uk-margin-remove-top\" } }, [\n              _vm._v(\n                \"\\n                    \" +\n                  _vm._s(_vm._f(\"trans\")(\"H4\")) +\n                  \"\\n                \"\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"option\",\n              { attrs: { value: \"uk-heading-large uk-margin-remove-top\" } },\n              [_vm._v(\"\\n                    Extra Large\\n                \")]\n            )\n          ]\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"uk-margin\" }, [\n      _c(\"span\", { staticClass: \"uk-form-label\" }, [\n        _vm._v(_vm._s(_vm._f(\"trans\")(\"Alignment\")))\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-form-controls uk-form-controls-text\" }, [\n        _c(\"label\", [\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.widget.theme.alignment,\n                expression: \"widget.theme.alignment\"\n              }\n            ],\n            staticClass: \"uk-checkbox\",\n            attrs: { type: \"checkbox\" },\n            domProps: {\n              checked: Array.isArray(_vm.widget.theme.alignment)\n                ? _vm._i(_vm.widget.theme.alignment, null) > -1\n                : _vm.widget.theme.alignment\n            },\n            on: {\n              change: function($event) {\n                var $$a = _vm.widget.theme.alignment,\n                  $$el = $event.target,\n                  $$c = $$el.checked ? true : false\n                if (Array.isArray($$a)) {\n                  var $$v = null,\n                    $$i = _vm._i($$a, $$v)\n                  if ($$el.checked) {\n                    $$i < 0 &&\n                      _vm.$set(_vm.widget.theme, \"alignment\", $$a.concat([$$v]))\n                  } else {\n                    $$i > -1 &&\n                      _vm.$set(\n                        _vm.widget.theme,\n                        \"alignment\",\n                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))\n                      )\n                  }\n                } else {\n                  _vm.$set(_vm.widget.theme, \"alignment\", $$c)\n                }\n              }\n            }\n          }),\n          _vm._v(\" \" + _vm._s(_vm._f(\"trans\")(\"Center the title and content.\")))\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"uk-margin\" }, [\n      _c(\n        \"label\",\n        { staticClass: \"uk-form-label\", attrs: { for: \"form-theme-badge\" } },\n        [_vm._v(_vm._s(_vm._f(\"trans\")(\"HTML Class\")))]\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.widget.theme.html_class,\n              expression: \"widget.theme.html_class\"\n            }\n          ],\n          staticClass: \"uk-form-width-large uk-input\",\n          attrs: { id: \"form-theme-badge\", type: \"text\" },\n          domProps: { value: _vm.widget.theme.html_class },\n          on: {\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.$set(_vm.widget.theme, \"html_class\", $event.target.value)\n            }\n          }\n        })\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"uk-margin\" }, [\n      _c(\n        \"label\",\n        { staticClass: \"uk-form-label\", attrs: { for: \"form-theme-panel\" } },\n        [_vm._v(_vm._s(_vm._f(\"trans\")(\"Panel Style\")))]\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n        _c(\n          \"select\",\n          {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.widget.theme.panel,\n                expression: \"widget.theme.panel\"\n              }\n            ],\n            staticClass: \"uk-form-width-large uk-select\",\n            attrs: { id: \"form-theme-panel\" },\n            on: {\n              change: function($event) {\n                var $$selectedVal = Array.prototype.filter\n                  .call($event.target.options, function(o) {\n                    return o.selected\n                  })\n                  .map(function(o) {\n                    var val = \"_value\" in o ? o._value : o.value\n                    return val\n                  })\n                _vm.$set(\n                  _vm.widget.theme,\n                  \"panel\",\n                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]\n                )\n              }\n            }\n          },\n          [\n            _c(\"option\", { attrs: { value: \"\" } }, [\n              _vm._v(\n                \"\\n                    \" +\n                  _vm._s(_vm._f(\"trans\")(\"None\")) +\n                  \"\\n                \"\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"option\", { attrs: { value: \"uk-card uk-card-default\" } }, [\n              _vm._v(\n                \"\\n                    \" +\n                  _vm._s(_vm._f(\"trans\")(\"Card\")) +\n                  \"\\n                \"\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"option\", { attrs: { value: \"uk-card uk-card-primary\" } }, [\n              _vm._v(\n                \"\\n                    \" +\n                  _vm._s(_vm._f(\"trans\")(\"Card Primary\")) +\n                  \"\\n                \"\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"option\", { attrs: { value: \"uk-card uk-card-secondary\" } }, [\n              _vm._v(\n                \"\\n                    \" +\n                  _vm._s(_vm._f(\"trans\")(\"Card Secondary\")) +\n                  \"\\n                \"\n              )\n            ])\n          ]\n        )\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/components/widget-theme.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ });