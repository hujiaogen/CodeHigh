exports.id = 0;
exports.modules = {

/***/ "./src/backend/models/Like.js":
false,

/***/ "./src/backend/models/Rating.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _mongoose = __webpack_require__(\"mongoose\");var _mongoose2 = _interopRequireDefault(_mongoose);\nvar _db = __webpack_require__(\"./src/backend/common/db.js\");var _db2 = _interopRequireDefault(_db);\nvar _plugins = __webpack_require__(\"./src/backend/models/plugins/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var\n\nSchema = _mongoose2.default.Schema;var\nObjectId = Schema.Types.ObjectId;\n\nvar modelName = 'Like';\nvar likeSchema = new Schema({\n  solution: { type: ObjectId, ref: 'Solution', required: true },\n  number: { type: Number, required: true, min: 1, max: 5, validate: Number.isInteger } });\n\n\nlikeSchema.plugin(_plugins.authorPlugin, {\n  authorsField: true,\n  set: {\n    owner: true },\n\n  get: {\n    guest: true },\n\n  remove: {\n    owner: true } });\n\n\n\nvar Like = _db2.default.model(modelName, likeSchema);exports.default =\nLike;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9tb2RlbHMvUmF0aW5nLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tlbmQvbW9kZWxzL1JhdGluZy5qcz9hY2I5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7dmFyIF9tb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7dmFyIF9tb25nb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb25nb29zZSk7XG52YXIgX2RiID0gcmVxdWlyZSgnL2NvbW1vbi9kYicpO3ZhciBfZGIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGIpO1xudmFyIF9wbHVnaW5zID0gcmVxdWlyZSgnL21vZGVscy9wbHVnaW5zJyk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtyZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTt9dmFyXG5cblNjaGVtYSA9IF9tb25nb29zZTIuZGVmYXVsdC5TY2hlbWE7dmFyXG5PYmplY3RJZCA9IFNjaGVtYS5UeXBlcy5PYmplY3RJZDtcblxudmFyIG1vZGVsTmFtZSA9ICdMaWtlJztcbnZhciBsaWtlU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIHNvbHV0aW9uOiB7IHR5cGU6IE9iamVjdElkLCByZWY6ICdTb2x1dGlvbicsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIG51bWJlcjogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBtaW46IDEsIG1heDogNSwgdmFsaWRhdGU6IE51bWJlci5pc0ludGVnZXIgfSB9KTtcblxuXG5saWtlU2NoZW1hLnBsdWdpbihfcGx1Z2lucy5hdXRob3JQbHVnaW4sIHtcbiAgYXV0aG9yc0ZpZWxkOiB0cnVlLFxuICBzZXQ6IHtcbiAgICBvd25lcjogdHJ1ZSB9LFxuXG4gIGdldDoge1xuICAgIGd1ZXN0OiB0cnVlIH0sXG5cbiAgcmVtb3ZlOiB7XG4gICAgb3duZXI6IHRydWUgfSB9KTtcblxuXG5cbnZhciBMaWtlID0gX2RiMi5kZWZhdWx0Lm1vZGVsKG1vZGVsTmFtZSwgbGlrZVNjaGVtYSk7ZXhwb3J0cy5kZWZhdWx0ID1cbkxpa2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFja2VuZC9tb2RlbHMvUmF0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9iYWNrZW5kL21vZGVscy9SYXRpbmcuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/backend/models/Rating.js\n");

/***/ }),

/***/ "./src/backend/models/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _Auth = __webpack_require__(\"./src/backend/models/Auth.js\");Object.defineProperty(exports, 'Auth', { enumerable: true, get: function get() {return _interopRequireDefault(_Auth).default;} });var _Rating = __webpack_require__(\"./src/backend/models/Rating.js\");Object.defineProperty(exports, 'Like', { enumerable: true, get: function get() {return _interopRequireDefault(_Rating).\n    default;} });var _Solution = __webpack_require__(\"./src/backend/models/Solution.js\");Object.defineProperty(exports, 'Solution', { enumerable: true, get: function get() {return _interopRequireDefault(_Solution).\n    default;} });var _Testcase = __webpack_require__(\"./src/backend/models/Testcase.js\");Object.defineProperty(exports, 'Testcase', { enumerable: true, get: function get() {return _interopRequireDefault(_Testcase).\n    default;} });var _Topic = __webpack_require__(\"./src/backend/models/Topic.js\");Object.defineProperty(exports, 'Topic', { enumerable: true, get: function get() {return _interopRequireDefault(_Topic).\n    default;} });var _User = __webpack_require__(\"./src/backend/models/User.js\");Object.defineProperty(exports, 'User', { enumerable: true, get: function get() {return _interopRequireDefault(_User).\n    default;} });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9tb2RlbHMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2VuZC9tb2RlbHMvaW5kZXguanM/ODcwMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO3ZhciBfQXV0aCA9IHJlcXVpcmUoJy4vQXV0aCcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQXV0aCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F1dGgpLmRlZmF1bHQ7fSB9KTt2YXIgX1JhdGluZyA9IHJlcXVpcmUoJy4vUmF0aW5nJyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaWtlJywgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmF0aW5nKS5cbiAgICBkZWZhdWx0O30gfSk7dmFyIF9Tb2x1dGlvbiA9IHJlcXVpcmUoJy4vU29sdXRpb24nKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NvbHV0aW9uJywgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU29sdXRpb24pLlxuICAgIGRlZmF1bHQ7fSB9KTt2YXIgX1Rlc3RjYXNlID0gcmVxdWlyZSgnLi9UZXN0Y2FzZScpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnVGVzdGNhc2UnLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0Y2FzZSkuXG4gICAgZGVmYXVsdDt9IH0pO3ZhciBfVG9waWMgPSByZXF1aXJlKCcuL1RvcGljJyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdUb3BpYycsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvcGljKS5cbiAgICBkZWZhdWx0O30gfSk7dmFyIF9Vc2VyID0gcmVxdWlyZSgnLi9Vc2VyJyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdVc2VyJywgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlcikuXG4gICAgZGVmYXVsdDt9IH0pO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7cmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JhY2tlbmQvbW9kZWxzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9iYWNrZW5kL21vZGVscy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/backend/models/index.js\n");

/***/ })

};