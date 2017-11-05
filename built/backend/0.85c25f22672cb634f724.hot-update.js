exports.id = 0;
exports.modules = {

/***/ "./src/backend/models/Testcase.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _mongoose = __webpack_require__(\"mongoose\");var _mongoose2 = _interopRequireDefault(_mongoose);\nvar _db = __webpack_require__(\"./src/backend/common/db.js\");var _db2 = _interopRequireDefault(_db);\nvar _plugins = __webpack_require__(\"./src/backend/models/plugins/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var\n\nSchema = _mongoose2.default.Schema;var\nObjectId = Schema.Types.ObjectId;\n\nvar modelName = 'Testcase';\nvar testcaseSchema = new Schema({\n  topic: { type: ObjectId, ref: 'Topic', required: true },\n  eval: { type: String, required: true },\n  public: { type: Boolean, required: true } });\n\n\ntestcaseSchema.plugin(_plugins.authorPlugin, {\n  set: {\n    none: true },\n\n  get: {\n    guest: true },\n\n  remove: {\n    none: true } });\n\n\n\nvar Testcase = _db2.default.model(modelName, testcaseSchema);exports.default =\nTestcase;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9tb2RlbHMvVGVzdGNhc2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2VuZC9tb2RlbHMvVGVzdGNhc2UuanM/ZmI1NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO3ZhciBfbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO3ZhciBfbW9uZ29vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9uZ29vc2UpO1xudmFyIF9kYiA9IHJlcXVpcmUoJy9jb21tb24vZGInKTt2YXIgX2RiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RiKTtcbnZhciBfcGx1Z2lucyA9IHJlcXVpcmUoJy9tb2RlbHMvcGx1Z2lucycpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7cmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07fXZhclxuXG5TY2hlbWEgPSBfbW9uZ29vc2UyLmRlZmF1bHQuU2NoZW1hO3ZhclxuT2JqZWN0SWQgPSBTY2hlbWEuVHlwZXMuT2JqZWN0SWQ7XG5cbnZhciBtb2RlbE5hbWUgPSAnVGVzdGNhc2UnO1xudmFyIHRlc3RjYXNlU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIHRvcGljOiB7IHR5cGU6IE9iamVjdElkLCByZWY6ICdUb3BpYycsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGV2YWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBwdWJsaWM6IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUgfSB9KTtcblxuXG50ZXN0Y2FzZVNjaGVtYS5wbHVnaW4oX3BsdWdpbnMuYXV0aG9yUGx1Z2luLCB7XG4gIHNldDoge1xuICAgIG5vbmU6IHRydWUgfSxcblxuICBnZXQ6IHtcbiAgICBndWVzdDogdHJ1ZSB9LFxuXG4gIHJlbW92ZToge1xuICAgIG5vbmU6IHRydWUgfSB9KTtcblxuXG5cbnZhciBUZXN0Y2FzZSA9IF9kYjIuZGVmYXVsdC5tb2RlbChtb2RlbE5hbWUsIHRlc3RjYXNlU2NoZW1hKTtleHBvcnRzLmRlZmF1bHQgPVxuVGVzdGNhc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFja2VuZC9tb2RlbHMvVGVzdGNhc2UuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2JhY2tlbmQvbW9kZWxzL1Rlc3RjYXNlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/backend/models/Testcase.js\n");

/***/ })

};