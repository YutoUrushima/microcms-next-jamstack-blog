self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles/Header.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles/Header.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Header_container__13qZs {\n  background-color: #eee;\n  width: 31.25%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n@media screen and (max-width: 1000px) {\n  .Header_container__13qZs {\n    left: -100%;\n    width: 100%;\n    z-index: 200;\n  }\n}\n\n.Header_wrap__33215 {\n  width: 40%;\n}\n\n.Header_image__2WTF7 {\n  width: 100%;\n}\n.Header_image__2WTF7 > img {\n  width: 100%;\n}\n\n.Header_name__3ESFm {\n  font-weight: 600;\n  margin-top: 10px;\n}\n\n.Header_text__sa6Z0 {\n  margin-top: 10px;\n}\n\n.Header_sns__3GRcg {\n  display: flex;\n  list-style: none;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 15px;\n}\n\n.Header_icon__jRDJb {\n  width: 30px;\n}\n.Header_icon__jRDJb img {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://Header.module.scss","webpack://_config.scss"],"names":[],"mappings":"AAEA;EACE,sBAAA;EACA,aAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;AADF;ACII;EDZJ;IAWI,WAAA;IACA,WAAA;IACA,YAAA;EACF;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,WAAA;AACF;AAAE;EACE,WAAA;AAEJ;;AAEA;EACE,gBAAA;EACA,gBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,gBAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AAEA;EACE,WAAA;AACF;AAAE;EACE,WAAA;AAEJ","sourcesContent":["@import '_config';\r\n\r\n.container {\r\n  background-color: #eee;\r\n  width: 31.25%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  @include media-sp {\r\n    left: -100%;\r\n    width: 100%;\r\n    z-index: 200;\r\n  }\r\n}\r\n\r\n.wrap {\r\n  width: 40%;\r\n}\r\n\r\n.image {\r\n  width: 100%;\r\n  & > img {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.name {\r\n  font-weight: 600;\r\n  margin-top: 10px;\r\n}\r\n\r\n.text {\r\n  margin-top: 10px;\r\n}\r\n\r\n.sns {\r\n  display: flex;\r\n  list-style: none;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 15px;\r\n}\r\n\r\n.icon {\r\n  width: 30px;\r\n  img {\r\n    width: 100%;\r\n  }\r\n}\r\n","// media-query\r\n$breakpoint: 1000px;\r\n/// @group media-query\r\n$media-pc: 'screen and (min-width: #{$breakpoint + 1px})';\r\n/// @group media-query\r\n$media-sp: 'screen and (max-width: #{$breakpoint})';\r\n\r\n@mixin media-pc {\r\n    @media #{$media-pc} {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin media-sp {\r\n    @media #{$media-sp} {\r\n        @content;\r\n    }\r\n}\r\n\r\n// color\r\n$border-Color: #ccc;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Header_container__13qZs",
	"wrap": "Header_wrap__33215",
	"image": "Header_image__2WTF7",
	"name": "Header_name__3ESFm",
	"text": "Header_text__sa6Z0",
	"sns": "Header_sns__3GRcg",
	"icon": "Header_icon__jRDJb"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hlYWRlci5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxvRUFBb0UsMkJBQTJCLGtCQUFrQixrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLFdBQVcsWUFBWSxHQUFHLHlDQUF5Qyw4QkFBOEIsa0JBQWtCLGtCQUFrQixtQkFBbUIsS0FBSyxHQUFHLHlCQUF5QixlQUFlLEdBQUcsMEJBQTBCLGdCQUFnQixHQUFHLDhCQUE4QixnQkFBZ0IsR0FBRyx5QkFBeUIscUJBQXFCLHFCQUFxQixHQUFHLHlCQUF5QixxQkFBcUIsR0FBRyx3QkFBd0Isa0JBQWtCLHFCQUFxQixtQ0FBbUMsd0JBQXdCLHFCQUFxQixHQUFHLHlCQUF5QixnQkFBZ0IsR0FBRywyQkFBMkIsZ0JBQWdCLEdBQUcsT0FBTyw0R0FBNEcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsMkNBQTJDLG9CQUFvQiw2QkFBNkIsb0JBQW9CLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsYUFBYSxjQUFjLHlCQUF5QixvQkFBb0Isb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssZUFBZSxpQkFBaUIsS0FBSyxnQkFBZ0Isa0JBQWtCLGVBQWUsb0JBQW9CLE9BQU8sS0FBSyxlQUFlLHVCQUF1Qix1QkFBdUIsS0FBSyxlQUFlLHVCQUF1QixLQUFLLGNBQWMsb0JBQW9CLHVCQUF1QixxQ0FBcUMsMEJBQTBCLHVCQUF1QixLQUFLLGVBQWUsa0JBQWtCLFdBQVcsb0JBQW9CLE9BQU8sS0FBSyw2Q0FBNkMsbUVBQW1FLGtCQUFrQixHQUFHLG1FQUFtRSxZQUFZLEdBQUcseUJBQXlCLGlCQUFpQixVQUFVLEVBQUUscUJBQXFCLFNBQVMsS0FBSyx5QkFBeUIsaUJBQWlCLFVBQVUsRUFBRSxxQkFBcUIsU0FBUyxLQUFLLHdDQUF3QyxtQkFBbUI7QUFDcGpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjRiNmU0NThiMTA0NzNjNTljMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5IZWFkZXJfY29udGFpbmVyX18xM3FacyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgd2lkdGg6IDMxLjI1JTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAuSGVhZGVyX2NvbnRhaW5lcl9fMTNxWnMge1xcbiAgICBsZWZ0OiAtMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDIwMDtcXG4gIH1cXG59XFxuXFxuLkhlYWRlcl93cmFwX18zMzIxNSB7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG4uSGVhZGVyX2ltYWdlX18yV1RGNyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLkhlYWRlcl9pbWFnZV9fMldURjcgPiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5IZWFkZXJfbmFtZV9fM0VTRm0ge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5IZWFkZXJfdGV4dF9fc2E2WjAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLkhlYWRlcl9zbnNfXzNHUmNnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi5IZWFkZXJfaWNvbl9falJESmIge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5IZWFkZXJfaWNvbl9falJESmIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vSGVhZGVyLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vX2NvbmZpZy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBREY7QUNJSTtFRFpKO0lBV0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnX2NvbmZpZyc7XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgd2lkdGg6IDMxLjI1JTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXNwIHtcXHJcXG4gICAgbGVmdDogLTEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi53cmFwIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gICYgPiBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvLyBtZWRpYS1xdWVyeVxcclxcbiRicmVha3BvaW50OiAxMDAwcHg7XFxyXFxuLy8vIEBncm91cCBtZWRpYS1xdWVyeVxcclxcbiRtZWRpYS1wYzogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skYnJlYWtwb2ludCArIDFweH0pJztcXHJcXG4vLy8gQGdyb3VwIG1lZGlhLXF1ZXJ5XFxyXFxuJG1lZGlhLXNwOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAjeyRicmVha3BvaW50fSknO1xcclxcblxcclxcbkBtaXhpbiBtZWRpYS1wYyB7XFxyXFxuICAgIEBtZWRpYSAjeyRtZWRpYS1wY30ge1xcclxcbiAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1lZGlhLXNwIHtcXHJcXG4gICAgQG1lZGlhICN7JG1lZGlhLXNwfSB7XFxyXFxuICAgICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBjb2xvclxcclxcbiRib3JkZXItQ29sb3I6ICNjY2M7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSGVhZGVyX2NvbnRhaW5lcl9fMTNxWnNcIixcblx0XCJ3cmFwXCI6IFwiSGVhZGVyX3dyYXBfXzMzMjE1XCIsXG5cdFwiaW1hZ2VcIjogXCJIZWFkZXJfaW1hZ2VfXzJXVEY3XCIsXG5cdFwibmFtZVwiOiBcIkhlYWRlcl9uYW1lX18zRVNGbVwiLFxuXHRcInRleHRcIjogXCJIZWFkZXJfdGV4dF9fc2E2WjBcIixcblx0XCJzbnNcIjogXCJIZWFkZXJfc25zX18zR1JjZ1wiLFxuXHRcImljb25cIjogXCJIZWFkZXJfaWNvbl9falJESmJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9