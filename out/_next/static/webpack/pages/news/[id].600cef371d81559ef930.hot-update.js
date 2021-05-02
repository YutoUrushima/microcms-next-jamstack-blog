self["webpackHotUpdate_N_E"]("pages/news/[id]",{

/***/ "./pages/news/[id].js":
/*!****************************!*\
  !*** ./pages/news/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ BlogId; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Single.module.scss */ "./styles/Single.module.scss");
/* harmony import */ var _styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\\u88D5\u4EBA\\Desktop\\works\\microcms-next-jamstack-blog\\pages\\news\\[id].js";

 // pages/news/[id].js

var __N_SSG = true;
function BlogId(_ref) {
  var blog = _ref.blog;
  console.log(blog);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
      children: blog.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date),
      children: [blog.updatedAt.slice(0, 10).replace(/-/g, '/'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_2___default().category),
        children: blog.category.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_2___default().image),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: blog.image.url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      dangerouslySetInnerHTML: {
        __html: "".concat(blog.content)
      },
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_2___default().post)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_2___default().back),
          children: "to Index"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
} // 静的生成のためのパスを指定します

_c = BlogId;

var _c;

$RefreshReg$(_c, "BlogId");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9baWRdLmpzIl0sIm5hbWVzIjpbIkJsb2dJZCIsImJsb2ciLCJjb25zb2xlIiwibG9nIiwic2luZ2xlIiwidGl0bGUiLCJ1cGRhdGVkQXQiLCJzbGljZSIsInJlcGxhY2UiLCJjYXRlZ29yeSIsIm5hbWUiLCJpbWFnZSIsInVybCIsIl9faHRtbCIsImNvbnRlbnQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7OztBQUNlLFNBQVNBLE1BQVQsT0FBMEI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0Esc0JBQ0U7QUFBTSxhQUFTLEVBQUVHLHdFQUFqQjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFFQSx5RUFBZjtBQUFBLGdCQUE4QkgsSUFBSSxDQUFDSTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFHLGVBQVMsRUFBRUQsd0VBQWQ7QUFBQSxpQkFDR0gsSUFBSSxDQUFDSyxTQUFMLENBQWVDLEtBQWYsQ0FBcUIsQ0FBckIsRUFBd0IsRUFBeEIsRUFBNEJDLE9BQTVCLENBQW9DLElBQXBDLEVBQTBDLEdBQTFDLENBREgsZUFFRTtBQUFNLGlCQUFTLEVBQUVKLDRFQUFqQjtBQUFBLGtCQUFtQ0gsSUFBSSxDQUFDUSxRQUFMLENBQWNDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQU1FO0FBQUssZUFBUyxFQUFFTix5RUFBaEI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUgsSUFBSSxDQUFDVSxLQUFMLENBQVdDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFTRTtBQUNFLDZCQUF1QixFQUFFO0FBQ3ZCQyxjQUFNLFlBQUtaLElBQUksQ0FBQ2EsT0FBVjtBQURpQixPQUQzQjtBQUlFLGVBQVMsRUFBRVYsd0VBQVdXO0FBSnhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQWVFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVYLDBFQUFoQjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRUEsd0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJELEMsQ0FFRDs7S0E3QndCSixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld3MvW2lkXS42MDBjZWYzNzFkODE1NTllZjkzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNpbmdsZSBmcm9tICcuLi8uLi9zdHlsZXMvU2luZ2xlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy8gcGFnZXMvbmV3cy9baWRdLmpzXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dJZCh7IGJsb2cgfSkge1xyXG4gIGNvbnNvbGUubG9nKGJsb2cpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3NpbmdsZS5tYWlufT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c2luZ2xlLnRpdGxlfT57YmxvZy50aXRsZX08L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3NpbmdsZS5kYXRlfT5cclxuICAgICAgICB7YmxvZy51cGRhdGVkQXQuc2xpY2UoMCwgMTApLnJlcGxhY2UoLy0vZywgJy8nKX1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3NpbmdsZS5jYXRlZ29yeX0+e2Jsb2cuY2F0ZWdvcnkubmFtZX08L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3NpbmdsZS5pbWFnZX0+XHJcbiAgICAgICAgPGltZyBzcmM9e2Jsb2cuaW1hZ2UudXJsfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICBfX2h0bWw6IGAke2Jsb2cuY29udGVudH1gLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzaW5nbGUucG9zdH1cclxuICAgICAgLz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2luZ2xlLmJ1dHRvbn0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3NpbmdsZS5iYWNrfT5cclxuICAgICAgICAgICAgdG8gSW5kZXhcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuICBcclxuLy8g6Z2Z55qE55Sf5oiQ44Gu44Gf44KB44Gu44OR44K544KS5oyH5a6a44GX44G+44GZXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuY29uc3Qga2V5ID0ge1xyXG4gICAgaGVhZGVyczogeydYLUFQSS1LRVknOiBwcm9jZXNzLmVudi5BUElfS0VZfSxcclxufTtcclxuY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL3l1dG91cnVzaGltYS5taWNyb2Ntcy5pby9hcGkvdjEvbmV3cycsIGtleSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLmNhdGNoKCgpID0+IG51bGwpO1xyXG5jb25zdCBwYXRocyA9IGRhdGEuY29udGVudHMubWFwKGNvbnRlbnQgPT4gYC9uZXdzLyR7Y29udGVudC5pZH1gKTtcclxucmV0dXJuIHtwYXRocywgZmFsbGJhY2s6IGZhbHNlfTtcclxufTtcclxuXHJcbi8vIOODh+ODvOOCv+OCkuODhuODs+ODl+ODrOODvOODiOOBq+WPl+OBkea4oeOBmemDqOWIhuOBruWHpueQhuOCkuiomOi/sOOBl+OBvuOBmVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcclxuY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcclxuY29uc3Qga2V5ID0ge1xyXG4gICAgaGVhZGVyczogeydYLUFQSS1LRVknOiBwcm9jZXNzLmVudi5BUElfS0VZfSxcclxufTtcclxuY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgJ2h0dHBzOi8veXV0b3VydXNoaW1hLm1pY3JvY21zLmlvL2FwaS92MS9uZXdzLycgKyBpZCxcclxuICAgIGtleSxcclxuKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAuY2F0Y2goKCkgPT4gbnVsbCk7XHJcbnJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgYmxvZzogZGF0YSxcclxuICAgIH0sXHJcbn07XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==