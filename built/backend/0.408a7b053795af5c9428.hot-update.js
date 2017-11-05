exports.id = 0;
exports.modules = {

/***/ "./src/backend/models/Rating.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _mongoose = __webpack_require__(\"mongoose\");var _mongoose2 = _interopRequireDefault(_mongoose);\nvar _db = __webpack_require__(\"./src/backend/common/db.js\");var _db2 = _interopRequireDefault(_db);\nvar _plugins = __webpack_require__(\"./src/backend/models/plugins/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var\n\nSchema = _mongoose2.default.Schema;var\nObjectId = Schema.Types.ObjectId;\n\nvar modelName = 'Rating';\nvar ratingSchema = new Schema({\n  solution: { type: ObjectId, ref: 'Solution', required: true },\n  number: { type: Number, required: true, min: 1, max: 5, validate: Number.isInteger } });\n\nratingSchema.index({ solution: 1, authors: 1 });\n\nratingSchema.plugin(_plugins.authorPlugin, {\n  authorsField: true,\n  set: {\n    owner: true },\n\n  get: {\n    guest: true },\n\n  remove: {\n    owner: true } });\n\n\n\nvar Rating = _db2.default.model(modelName, ratingSchema);exports.default =\nRating;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9tb2RlbHMvUmF0aW5nLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tlbmQvbW9kZWxzL1JhdGluZy5qcz9hY2I5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7dmFyIF9tb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7dmFyIF9tb25nb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb25nb29zZSk7XG52YXIgX2RiID0gcmVxdWlyZSgnL2NvbW1vbi9kYicpO3ZhciBfZGIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGIpO1xudmFyIF9wbHVnaW5zID0gcmVxdWlyZSgnL21vZGVscy9wbHVnaW5zJyk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtyZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTt9dmFyXG5cblNjaGVtYSA9IF9tb25nb29zZTIuZGVmYXVsdC5TY2hlbWE7dmFyXG5PYmplY3RJZCA9IFNjaGVtYS5UeXBlcy5PYmplY3RJZDtcblxudmFyIG1vZGVsTmFtZSA9ICdSYXRpbmcnO1xudmFyIHJhdGluZ1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBzb2x1dGlvbjogeyB0eXBlOiBPYmplY3RJZCwgcmVmOiAnU29sdXRpb24nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBudW1iZXI6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgbWluOiAxLCBtYXg6IDUsIHZhbGlkYXRlOiBOdW1iZXIuaXNJbnRlZ2VyIH0gfSk7XG5cbnJhdGluZ1NjaGVtYS5pbmRleCh7IHNvbHV0aW9uOiAxLCBhdXRob3JzOiAxIH0pO1xuXG5yYXRpbmdTY2hlbWEucGx1Z2luKF9wbHVnaW5zLmF1dGhvclBsdWdpbiwge1xuICBhdXRob3JzRmllbGQ6IHRydWUsXG4gIHNldDoge1xuICAgIG93bmVyOiB0cnVlIH0sXG5cbiAgZ2V0OiB7XG4gICAgZ3Vlc3Q6IHRydWUgfSxcblxuICByZW1vdmU6IHtcbiAgICBvd25lcjogdHJ1ZSB9IH0pO1xuXG5cblxudmFyIFJhdGluZyA9IF9kYjIuZGVmYXVsdC5tb2RlbChtb2RlbE5hbWUsIHJhdGluZ1NjaGVtYSk7ZXhwb3J0cy5kZWZhdWx0ID1cblJhdGluZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZW5kL21vZGVscy9SYXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2JhY2tlbmQvbW9kZWxzL1JhdGluZy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/backend/models/Rating.js\n");

/***/ })

};