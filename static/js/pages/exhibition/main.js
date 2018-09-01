global.webpackJsonp([7],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(8);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '检索页面'
  }
});

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Fly = __webpack_require__(2);
var fly = new Fly();
/* harmony default export */ __webpack_exports__["a"] = ({
	components: {},

	data: function data() {
		return {
			name: '1111',
			//轮播图参数
			indicatorDots: true,
			autoplay: true,
			interval: 4000,
			duration: 900,
			circular: true,
			logs: [],
			imgUrls: [],
			msg: [],
			bookmsg: [],
			id: ''
		};
	},

	methods: {
		swiperChange: function swiperChange(e) {},
		animationfinish: function animationfinish(e) {}
	},
	onLoad: function onLoad(options) {
		var _this = this;

		this.id = options.id;
		fly.get('http://39.106.221.38:8080/clw-ser/findBookById?bookid=' + this.id).then(function (response) {
			_this.name = response.data.book.name;
			_this.imgUrls = response.data.pic;
			_this.msg = response.data.book;
		});
	}
});

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "bsss"
  }, [_c('div', {
    staticClass: "page__bd page__bd_spacing"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration,
      "circular": _vm.circular,
      "eventid": '0'
    },
    on: {
      "change": _vm.swiperChange,
      "animationfinish": _vm.animationfinish
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item
      }
    })])], 1)
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box-list"
  }, [_c('div', {
    staticClass: "box-introduce"
  }, [_c('div', {
    staticClass: "enen"
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('div', {
    staticClass: "box-key-list"
  }, [_vm._v("\n\t\t\t\t作者："), _c('span', [_vm._v(_vm._s(_vm.msg.author))])]), _vm._v(" "), _c('div', {
    staticClass: "box-key-list"
  }, [_vm._v("出版社："), _c('span', [_vm._v(_vm._s(_vm.msg.press))])]), _vm._v(" "), _c('div', {
    staticClass: "box-key-list"
  }, [_vm._v("状态：\n\t\t\t\t"), (_vm.msg.status == 1) ? _c('icon', {
    attrs: {
      "type": "success",
      "size": "20"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.msg.status == 0) ? _c('icon', {
    attrs: {
      "type": "warn",
      "size": "20"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "ssss"
  }, [_vm._v("内容简介：" + _vm._s(_vm.msg.info) + "\n\t\t\t")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-73e91e17", esExports)
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_12_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_12_mpvue_loader_lib_template_compiler_index_id_data_v_73e91e17_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_12_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(50);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_12_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_12_mpvue_loader_lib_template_compiler_index_id_data_v_73e91e17_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_12_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\exhibition\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73e91e17", Component.options)
  } else {
    hotAPI.reload("data-v-73e91e17", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[16]);
//# sourceMappingURL=main.js.map