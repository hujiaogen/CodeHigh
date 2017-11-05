exports.id = 0;
exports.modules = {

/***/ "./src/backend/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.io = exports.app = undefined;var _express = __webpack_require__(\"express\");var _express2 = _interopRequireDefault(_express);\nvar _morgan = __webpack_require__(\"morgan\");var _morgan2 = _interopRequireDefault(_morgan);\nvar _cookieParser = __webpack_require__(\"cookie-parser\");var _cookieParser2 = _interopRequireDefault(_cookieParser);\nvar _bodyParser = __webpack_require__(\"body-parser\");var _bodyParser2 = _interopRequireDefault(_bodyParser);\nvar _controllers = __webpack_require__(\"./src/backend/controllers/index.js\");var _controllers2 = _interopRequireDefault(_controllers);\nvar _db = __webpack_require__(\"./src/backend/common/db.js\");var _db2 = _interopRequireDefault(_db);\nvar _socket = __webpack_require__(\"socket.io\");var _socket2 = _interopRequireDefault(_socket);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar app = (0, _express2.default)();\n_db2.default.on('error', console.error);\n_db2.default.once('open', function () {\n  app.use((0, _morgan2.default)('tiny'));\n  app.use((0, _cookieParser2.default)());\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({ extended: true }));\n  app.use(_controllers2.default);\n});\nvar io = (0, _socket2.default)();\nio.on('connection', function (socket) {\n  socket.emit('GAME_START', 'game started');\n});exports.\n\napp = app;exports.io = io;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2luZGV4LmpzP2VjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtleHBvcnRzLmlvID0gZXhwb3J0cy5hcHAgPSB1bmRlZmluZWQ7dmFyIF9leHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO3ZhciBfZXhwcmVzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHByZXNzKTtcbnZhciBfbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJyk7dmFyIF9tb3JnYW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9yZ2FuKTtcbnZhciBfY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO3ZhciBfY29va2llUGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nvb2tpZVBhcnNlcik7XG52YXIgX2JvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO3ZhciBfYm9keVBhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib2R5UGFyc2VyKTtcbnZhciBfY29udHJvbGxlcnMgPSByZXF1aXJlKCcvY29udHJvbGxlcnMnKTt2YXIgX2NvbnRyb2xsZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRyb2xsZXJzKTtcbnZhciBfZGIgPSByZXF1aXJlKCcvY29tbW9uL2RiJyk7dmFyIF9kYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYik7XG52YXIgX3NvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO3ZhciBfc29ja2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NvY2tldCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtyZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTt9XG5cbnZhciBhcHAgPSAoMCwgX2V4cHJlc3MyLmRlZmF1bHQpKCk7XG5fZGIyLmRlZmF1bHQub24oJ2Vycm9yJywgY29uc29sZS5lcnJvcik7XG5fZGIyLmRlZmF1bHQub25jZSgnb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgYXBwLnVzZSgoMCwgX21vcmdhbjIuZGVmYXVsdCkoJ3RpbnknKSk7XG4gIGFwcC51c2UoKDAsIF9jb29raWVQYXJzZXIyLmRlZmF1bHQpKCkpO1xuICBhcHAudXNlKF9ib2R5UGFyc2VyMi5kZWZhdWx0Lmpzb24oKSk7XG4gIGFwcC51c2UoX2JvZHlQYXJzZXIyLmRlZmF1bHQudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbiAgYXBwLnVzZShfY29udHJvbGxlcnMyLmRlZmF1bHQpO1xufSk7XG52YXIgaW8gPSAoMCwgX3NvY2tldDIuZGVmYXVsdCkoKTtcbmlvLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gKHNvY2tldCkge1xuICBzb2NrZXQuZW1pdCgnR0FNRV9TVEFSVCcsICdnYW1lIHN0YXJ0ZWQnKTtcbn0pO2V4cG9ydHMuXG5cbmFwcCA9IGFwcDtleHBvcnRzLmlvID0gaW87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFja2VuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvYmFja2VuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/backend/index.js\n");

/***/ })

};