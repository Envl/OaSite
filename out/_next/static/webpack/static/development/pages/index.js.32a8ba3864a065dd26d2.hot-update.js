webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var oapack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! oapack */ "./node_modules/oapack/index.js");
/* harmony import */ var oapack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(oapack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.jsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _MyData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MyData */ "./MyData.js");
/* harmony import */ var flooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flooks */ "./node_modules/flooks/dist/flooks.esm.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_index.scss */ "./pages/_index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "/mnt/d/SourceCode/Web/OaSite/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var filters = {
  state: {
    postType: 'all'
  },
  actions: function actions(_ref) {
    var model = _ref.model,
        setState = _ref.setState;
    return {
      updateType: function updateType(newType) {
        if (newType === 'Interaction') {
          newType = ['Tangible Interaction', 'Interaction Design', 'Interaction'];
        }

        setState({
          postType: newType
        });
      }
    };
  }
};
Object(flooks__WEBPACK_IMPORTED_MODULE_10__["setModel"])('filters', filters);

function Me(_ref2) {
  var setOpts = _ref2.setOpts,
      opts = _ref2.opts;

  var _useModel = Object(flooks__WEBPACK_IMPORTED_MODULE_10__["useModel"])('filters', true),
      updateType = _useModel.updateType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      footCount = _useState[0],
      setFootCount = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetch('https://api.countapi.xyz/get/gnimoay.com/footCount').then(function (res) {
      return res.json();
    }).then(function (data) {
      return setFootCount(data.value);
    });
  }, []);
  return __jsx("div", {
    className: "me-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "me-status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\u2764\uFE0F: \uD83C\uDFAE\uD83C\uDF5F\uD83D\uDCF7\uD83D\uDEB4\u200D\u2642\uFE0F\uD83C\uDFF8\uD83C\uDFB5\uD83C\uDFD3"), __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "toggle",
    className: "btn-hi",
    pressed: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Hi"), __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["DropDown"], {
    name: " I'm Ming YAO",
    className: "dscp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "a UX Designer"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "a Developer")), __jsx("img", {
    src: "https://ik.imagekit.io/za0dxwyrw/oasite/me_g4eRewDwh.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "toggle",
    className: "btn-i",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "I"), __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["FilterGroup"], {
    className: "block-filters",
    initialFilters: [{
      name: 'c',
      pushed: false
    }, {
      name: 'o',
      pushed: false
    }, {
      name: 'd',
      pushed: true
    }, {
      name: 'e',
      pushed: true
    }, {
      name: 's',
      pushed: false
    }, {
      name: 'i',
      pushed: false
    }, {
      name: 'g',
      pushed: false
    }, {
      name: 'n',
      pushed: false
    }, {
      name: ':)',
      pushed: true,
      disabled: true
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["FilterGroup"], {
    className: "site-filters",
    initialFilters: [{
      name: 'about me',
      pushed: opts.includes('about me')
    }, {
      name: 'sidebar',
      pushed: opts.includes('sidebar')
    }, {
      name: 'footer',
      pushed: opts.includes('footer')
    }, {
      name: 'contact me',
      pushed: opts.includes('contact me')
    }],
    onFilterUpdate: function onFilterUpdate(options) {
      setOpts(options);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("a", {
    href: "mailto:yyaomingm@outlook.com",
    target: "_blank",
    className: "me-contact ".concat(opts && opts.includes('contact me') ? 'visible' : 'opt-hide'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "yyaomingm@outlook.com")), __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["FilterGroup"], {
    single: true,
    className: "type-filter",
    onFilterUpdate: function onFilterUpdate(types) {
      updateType(types[0]);
    },
    initialFilters: [{
      name: 'all',
      pushed: true
    }, 'Interaction', 'UX', 'Web', 'Game', 'App'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("div", {
    className: "foot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, footCount, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, " \u4EBA\u6765\u8E29\u8FC7")), __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: function onClick() {
      fetch('https://api.countapi.xyz/hit/gnimoay.com/footCount');
      setFootCount(footCount + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-shoe-prints",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))));
}

function PostList(props) {
  var _useModel2 = Object(flooks__WEBPACK_IMPORTED_MODULE_10__["useModel"])('filters'),
      postType = _useModel2.postType;

  return __jsx("div", {
    className: "posts ".concat(props.className ? props.className : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, _MyData__WEBPACK_IMPORTED_MODULE_9__["postList"].filter(function (item) {
    if (postType === 'all' || typeof postType === 'undefined') {
      return true;
    } else {
      return typeof postType === 'string' ? item.tags.includes(postType) : item.tags.some(function (tag) {
        return postType.includes(tag);
      });
    }
  }).map(function (l) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: l.title,
      className: "post-lr",
      data: l,
      href: '/post/' + l.title.toLowerCase().split(' ').join('-'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, l.brief ? l.brief : '(Coming Soon...)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt diam felis, sed tempor est pellentesque vel.');
  }));
}

function Contents(_ref3) {
  var opts = _ref3.opts;
  return __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("p", {
    className: "job-seek",
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "I'm looking for a fulltime UX Designer/Engineer job after graduation in", ' ', __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Oct. 2020"), ". ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), "The position of Web Engineer would also be cool if the work is interesting."), __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    className: "site-intro ".concat(opts && opts.includes('about me') ? 'visible' : 'opt-hide'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "I often think about our actions in the digital world, and in the real world.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), " \"Is that right? Could it be improved?\" \"Yes, and still yes.\"", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "To confirm my answer, I'm studying Human-Computer Interaction & Design with Innovation & Entrepreneurship Minor at", __jsx("a", {
    className: "oa-hover-underline",
    href: "https://www.kth.se/student/kurser/program/TIVNM/20182/arskurs1?l=en",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "\xA0KTH Royal Institute of Technology\xA0"), "and", __jsx("a", {
    href: "https://www.universite-paris-saclay.fr/en/education/master/m2-hcid-eit-digital#presentation-m2",
    target: "_blank",
    className: "oa-hover-underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "\xA0Universit\xE9 Paris-Sud\xA0")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "With a background of B.E. in Digital Media Technology, I also build\uD83D\uDD28 stuffs.")), __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["CubeMenu"], {
    className: "home-cube",
    u: __jsx("a", {
      href: "https://www.instagram.com/sesampicr/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx("i", {
      className: "fab fa-instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    })),
    f: __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/CV_Ming_YAO.pdf",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, __jsx("a", {
      className: "oa-hover-underline",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, "Resume")),
    r: __jsx("a", {
      className: "oa-hover-underline",
      href: "https://github.com/envl",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, "Github"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), __jsx(PostList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }));
}

function Index(props) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(['job', 'sidebar', 'footer']),
      opts = _useState2[0],
      setOpts = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _hmt = _hmt || [];

    var hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?ae9e7cdc50a29d2859ef293e6caaec12';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s); //---------------------

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-REWTHY2S75');
  }, []);
  return __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["SidebarInjector"], {
    className: opts && opts.includes('sidebar') ? 'visible' : 'opt-hide',
    items: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["SidebarItem"], {
      to: "https://www.notion.so/63b2e83003f240339ae065011afc88a0",
      target: "_blank",
      brief: "\u829D.",
      detail: "\u829D\u9EBB\u5730",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }), __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["SidebarItem"], {
      to: "/CV_Ming_YAO.pdf",
      target: "_blank",
      brief: "CV",
      detail: "CV",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }), __jsx(oapack__WEBPACK_IMPORTED_MODULE_5__["SidebarItem"], {
      to: "/",
      brief: "H.",
      detail: "Home",
      className: "sidebar-active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx("title", {
    className: "hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, "Ming YAO / @GnimOay"), __jsx("link", {
    rel: "icon",
    href: "/icon.png",
    type: "image/jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }), __jsx("script", {
    defer: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-REWTHY2S75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  })), __jsx("div", {
    className: "home-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx("div", {
    className: "home-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, __jsx(Me, {
    setOpts: setOpts,
    opts: opts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }), __jsx(Contents, {
    opts: opts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: opts && opts.includes('footer') ? 'visible' : 'opt-hide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  })));
}

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              ipAddr: {
                a: ctx.req.connection.remoteAddress,
                b: ctx.req.headers['x-forwarded-for']
              }
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.32a8ba3864a065dd26d2.hot-update.js.map