exports.id = 0;
exports.modules = {

/***/ "./src/backend/models/User.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _mongoose = __webpack_require__(\"mongoose\");var _mongoose2 = _interopRequireDefault(_mongoose);\nvar _db = __webpack_require__(\"./src/backend/common/db.js\");var _db2 = _interopRequireDefault(_db);\nvar _plugins = __webpack_require__(\"./src/backend/models/plugins/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var\n\nSchema = _mongoose2.default.Schema;\n\nvar modelName = 'User';\nvar userSchema = new Schema({\n  fb_user_id: { type: String, required: true },\n  name: { type: String, required: true } });\n\n\nuserSchema.plugin(_plugins.authorPlugin, {\n  insert: {\n    guest: true },\n\n  modify: {\n    none: ['fb_user_id'],\n    self: true },\n\n  get: {\n    guest: true },\n\n  remove: {\n    self: true } });\n\n\n\nuserSchema.methods.isUser = function () {\n  return !this.isNew;\n};\n\nuserSchema.methods.isSelf = function (doc) {\n  return this._id.equals(doc._id);\n};\n\nvar User = _db2.default.model(modelName, userSchema);exports.default =\nUser;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9tb2RlbHMvVXNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL21vZGVscy9Vc2VyLmpzPzliM2MiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTt2YXIgX21vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTt2YXIgX21vbmdvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vbmdvb3NlKTtcbnZhciBfZGIgPSByZXF1aXJlKCcvY29tbW9uL2RiJyk7dmFyIF9kYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYik7XG52YXIgX3BsdWdpbnMgPSByZXF1aXJlKCcvbW9kZWxzL3BsdWdpbnMnKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge3JldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O312YXJcblxuU2NoZW1hID0gX21vbmdvb3NlMi5kZWZhdWx0LlNjaGVtYTtcblxudmFyIG1vZGVsTmFtZSA9ICdVc2VyJztcbnZhciB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGZiX3VzZXJfaWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSB9KTtcblxuXG51c2VyU2NoZW1hLnBsdWdpbihfcGx1Z2lucy5hdXRob3JQbHVnaW4sIHtcbiAgaW5zZXJ0OiB7XG4gICAgZ3Vlc3Q6IHRydWUgfSxcblxuICBtb2RpZnk6IHtcbiAgICBub25lOiBbJ2ZiX3VzZXJfaWQnXSxcbiAgICBzZWxmOiB0cnVlIH0sXG5cbiAgZ2V0OiB7XG4gICAgZ3Vlc3Q6IHRydWUgfSxcblxuICByZW1vdmU6IHtcbiAgICBzZWxmOiB0cnVlIH0gfSk7XG5cblxuXG51c2VyU2NoZW1hLm1ldGhvZHMuaXNVc2VyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gIXRoaXMuaXNOZXc7XG59O1xuXG51c2VyU2NoZW1hLm1ldGhvZHMuaXNTZWxmID0gZnVuY3Rpb24gKGRvYykge1xuICByZXR1cm4gdGhpcy5faWQuZXF1YWxzKGRvYy5faWQpO1xufTtcblxudmFyIFVzZXIgPSBfZGIyLmRlZmF1bHQubW9kZWwobW9kZWxOYW1lLCB1c2VyU2NoZW1hKTtleHBvcnRzLmRlZmF1bHQgPVxuVXNlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZW5kL21vZGVscy9Vc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9iYWNrZW5kL21vZGVscy9Vc2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/backend/models/User.js\n");

/***/ })

};