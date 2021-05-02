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
/* harmony import */ var _styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Single.module.scss */ "./styles/Single.module.scss");
/* harmony import */ var _styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\\u88D5\u4EBA\\Desktop\\works\\microcms-next-jamstack-blog\\pages\\news\\[id].js";
 // pages/news/[id].js

var __N_SSG = true;
function BlogId(_ref) {
  var blog = _ref.blog;
  console.log(blog);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default().main),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),
      children: blog.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default().date),
      children: blog.updatedAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default().image),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: blog.image.url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      dangerouslySetInnerHTML: {
        __html: "".concat(blog.content)
      },
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default().post)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9baWRdLmpzIl0sIm5hbWVzIjpbIkJsb2dJZCIsImJsb2ciLCJjb25zb2xlIiwibG9nIiwic2luZ2xlIiwidGl0bGUiLCJ1cGRhdGVkQXQiLCJpbWFnZSIsInVybCIsIl9faHRtbCIsImNvbnRlbnQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7O0FBQ2UsU0FBU0EsTUFBVCxPQUEwQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxzQkFDRTtBQUFNLGFBQVMsRUFBRUcsd0VBQWpCO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUVBLHlFQUFmO0FBQUEsZ0JBQThCSCxJQUFJLENBQUNJO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUcsZUFBUyxFQUFFRCx3RUFBZDtBQUFBLGdCQUE0QkgsSUFBSSxDQUFDSztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFLLGVBQVMsRUFBRUYseUVBQWhCO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVILElBQUksQ0FBQ00sS0FBTCxDQUFXQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBTUU7QUFDRSw2QkFBdUIsRUFBRTtBQUN2QkMsY0FBTSxZQUFLUixJQUFJLENBQUNTLE9BQVY7QUFEaUIsT0FEM0I7QUFJRSxlQUFTLEVBQUVOLHdFQUFXTztBQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRCxDLENBRUQ7O0tBbkJ3QlgsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdzL1tpZF0uZjViMWZlZWY1YTk1ZjhlOWEyMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5nbGUgZnJvbSAnLi4vLi4vc3R5bGVzL1NpbmdsZS5tb2R1bGUuc2NzcydcclxuXHJcbi8vIHBhZ2VzL25ld3MvW2lkXS5qc1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nSWQoeyBibG9nIH0pIHtcclxuICBjb25zb2xlLmxvZyhibG9nKTtcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzaW5nbGUubWFpbn0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3NpbmdsZS50aXRsZX0+e2Jsb2cudGl0bGV9PC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzaW5nbGUuZGF0ZX0+e2Jsb2cudXBkYXRlZEF0fTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3NpbmdsZS5pbWFnZX0+XHJcbiAgICAgICAgPGltZyBzcmM9e2Jsb2cuaW1hZ2UudXJsfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICBfX2h0bWw6IGAke2Jsb2cuY29udGVudH1gLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzaW5nbGUucG9zdH1cclxuICAgICAgLz5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiAgXHJcbi8vIOmdmeeahOeUn+aIkOOBruOBn+OCgeOBruODkeOCueOCkuaMh+WumuOBl+OBvuOBmVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbmNvbnN0IGtleSA9IHtcclxuICAgIGhlYWRlcnM6IHsnWC1BUEktS0VZJzogcHJvY2Vzcy5lbnYuQVBJX0tFWX0sXHJcbn07XHJcbmNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly95dXRvdXJ1c2hpbWEubWljcm9jbXMuaW8vYXBpL3YxL25ld3MnLCBrZXkpXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC5jYXRjaCgoKSA9PiBudWxsKTtcclxuY29uc3QgcGF0aHMgPSBkYXRhLmNvbnRlbnRzLm1hcChjb250ZW50ID0+IGAvbmV3cy8ke2NvbnRlbnQuaWR9YCk7XHJcbnJldHVybiB7cGF0aHMsIGZhbGxiYWNrOiBmYWxzZX07XHJcbn07XHJcblxyXG4vLyDjg4fjg7zjgr/jgpLjg4bjg7Pjg5fjg6zjg7zjg4jjgavlj5fjgZHmuKHjgZnpg6jliIbjga7lh6bnkIbjgpLoqJjov7DjgZfjgb7jgZlcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XHJcbmNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcbmNvbnN0IGtleSA9IHtcclxuICAgIGhlYWRlcnM6IHsnWC1BUEktS0VZJzogcHJvY2Vzcy5lbnYuQVBJX0tFWX0sXHJcbn07XHJcbmNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcclxuICAgICdodHRwczovL3l1dG91cnVzaGltYS5taWNyb2Ntcy5pby9hcGkvdjEvbmV3cy8nICsgaWQsXHJcbiAgICBrZXksXHJcbilcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLmNhdGNoKCgpID0+IG51bGwpO1xyXG5yZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgIGJsb2c6IGRhdGEsXHJcbiAgICB9LFxyXG59O1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=