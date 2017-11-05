exports.id = 0;
exports.modules = {

/***/ "./src/backend/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.io = exports.app = undefined;var _express = __webpack_require__(\"express\");var _express2 = _interopRequireDefault(_express);\nvar _morgan = __webpack_require__(\"morgan\");var _morgan2 = _interopRequireDefault(_morgan);\nvar _cookieParser = __webpack_require__(\"cookie-parser\");var _cookieParser2 = _interopRequireDefault(_cookieParser);\nvar _bodyParser = __webpack_require__(\"body-parser\");var _bodyParser2 = _interopRequireDefault(_bodyParser);\nvar _controllers = __webpack_require__(\"./src/backend/controllers/index.js\");var _controllers2 = _interopRequireDefault(_controllers);\nvar _db = __webpack_require__(\"./src/backend/common/db.js\");var _db2 = _interopRequireDefault(_db);\nvar _socket = __webpack_require__(\"./src/backend/socket.js\");var _socket2 = _interopRequireDefault(_socket);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar app = (0, _express2.default)();\n_db2.default.on('error', console.error);\n_db2.default.once('open', function () {\n  app.use((0, _morgan2.default)('tiny'));\n  app.use((0, _cookieParser2.default)());\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({ extended: true }));\n  app.use(_controllers2.default);\n});exports.\n\n\napp = app;exports.io = _socket2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZW5kL2luZGV4LmpzP2VjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtleHBvcnRzLmlvID0gZXhwb3J0cy5hcHAgPSB1bmRlZmluZWQ7dmFyIF9leHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO3ZhciBfZXhwcmVzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHByZXNzKTtcbnZhciBfbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJyk7dmFyIF9tb3JnYW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9yZ2FuKTtcbnZhciBfY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO3ZhciBfY29va2llUGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nvb2tpZVBhcnNlcik7XG52YXIgX2JvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO3ZhciBfYm9keVBhcnNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib2R5UGFyc2VyKTtcbnZhciBfY29udHJvbGxlcnMgPSByZXF1aXJlKCcvY29udHJvbGxlcnMnKTt2YXIgX2NvbnRyb2xsZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRyb2xsZXJzKTtcbnZhciBfZGIgPSByZXF1aXJlKCcvY29tbW9uL2RiJyk7dmFyIF9kYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYik7XG52YXIgX3NvY2tldCA9IHJlcXVpcmUoJy4vc29ja2V0Jyk7dmFyIF9zb2NrZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc29ja2V0KTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge3JldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O31cblxudmFyIGFwcCA9ICgwLCBfZXhwcmVzczIuZGVmYXVsdCkoKTtcbl9kYjIuZGVmYXVsdC5vbignZXJyb3InLCBjb25zb2xlLmVycm9yKTtcbl9kYjIuZGVmYXVsdC5vbmNlKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICBhcHAudXNlKCgwLCBfbW9yZ2FuMi5kZWZhdWx0KSgndGlueScpKTtcbiAgYXBwLnVzZSgoMCwgX2Nvb2tpZVBhcnNlcjIuZGVmYXVsdCkoKSk7XG4gIGFwcC51c2UoX2JvZHlQYXJzZXIyLmRlZmF1bHQuanNvbigpKTtcbiAgYXBwLnVzZShfYm9keVBhcnNlcjIuZGVmYXVsdC51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuICBhcHAudXNlKF9jb250cm9sbGVyczIuZGVmYXVsdCk7XG59KTtleHBvcnRzLlxuXG5cbmFwcCA9IGFwcDtleHBvcnRzLmlvID0gX3NvY2tldDIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9iYWNrZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/backend/index.js\n");

/***/ }),

/***/ "./src/backend/socket.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _socket = __webpack_require__(\"socket.io\");var _socket2 = _interopRequireDefault(_socket);\nvar _models = __webpack_require__(\"./src/backend/models/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar io = (0, _socket2.default)();\nvar games = [];\nio.on('connection', function (socket) {\n  socket.on('HANDSHAKE', function (data) {var\n    token = data.token;\n    _models.Auth.verify(token).\n    then(function (auth) {return _models.Auth.populate(auth, 'user');}).\n    then(function (auth) {return auth.refresh();}).\n    then(function (auth) {\n      var user_idx = auth.user.idx;\n      addPlayer(user_idx);\n    }).\n    catch(next);\n  });\n\n  var addPlayer = function addPlayer(user_idx) {\n    var game = games.find(function (game) {return game.started;});\n    if (!game) {\n      game = {\n        started: false,\n        players: [],\n        topic_idx: null };\n\n      games.push(game);\n    }\n    game.players.push({\n      user_idx: user_idx,\n      socket: socket,\n      submitted_at: null,\n      code: null });\n\n\n    socket.emit('GAME_UPDATED', game);\n  };\n});exports.default =\n\nio;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9zb2NrZXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2VuZC9zb2NrZXQuanM/MDA5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO3ZhciBfc29ja2V0ID0gcmVxdWlyZSgnc29ja2V0LmlvJyk7dmFyIF9zb2NrZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc29ja2V0KTtcbnZhciBfbW9kZWxzID0gcmVxdWlyZSgnL21vZGVscycpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7cmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07fVxuXG52YXIgaW8gPSAoMCwgX3NvY2tldDIuZGVmYXVsdCkoKTtcbnZhciBnYW1lcyA9IFtdO1xuaW8ub24oJ2Nvbm5lY3Rpb24nLCBmdW5jdGlvbiAoc29ja2V0KSB7XG4gIHNvY2tldC5vbignSEFORFNIQUtFJywgZnVuY3Rpb24gKGRhdGEpIHt2YXJcbiAgICB0b2tlbiA9IGRhdGEudG9rZW47XG4gICAgX21vZGVscy5BdXRoLnZlcmlmeSh0b2tlbikuXG4gICAgdGhlbihmdW5jdGlvbiAoYXV0aCkge3JldHVybiBfbW9kZWxzLkF1dGgucG9wdWxhdGUoYXV0aCwgJ3VzZXInKTt9KS5cbiAgICB0aGVuKGZ1bmN0aW9uIChhdXRoKSB7cmV0dXJuIGF1dGgucmVmcmVzaCgpO30pLlxuICAgIHRoZW4oZnVuY3Rpb24gKGF1dGgpIHtcbiAgICAgIHZhciB1c2VyX2lkeCA9IGF1dGgudXNlci5pZHg7XG4gICAgICBhZGRQbGF5ZXIodXNlcl9pZHgpO1xuICAgIH0pLlxuICAgIGNhdGNoKG5leHQpO1xuICB9KTtcblxuICB2YXIgYWRkUGxheWVyID0gZnVuY3Rpb24gYWRkUGxheWVyKHVzZXJfaWR4KSB7XG4gICAgdmFyIGdhbWUgPSBnYW1lcy5maW5kKGZ1bmN0aW9uIChnYW1lKSB7cmV0dXJuIGdhbWUuc3RhcnRlZDt9KTtcbiAgICBpZiAoIWdhbWUpIHtcbiAgICAgIGdhbWUgPSB7XG4gICAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICBwbGF5ZXJzOiBbXSxcbiAgICAgICAgdG9waWNfaWR4OiBudWxsIH07XG5cbiAgICAgIGdhbWVzLnB1c2goZ2FtZSk7XG4gICAgfVxuICAgIGdhbWUucGxheWVycy5wdXNoKHtcbiAgICAgIHVzZXJfaWR4OiB1c2VyX2lkeCxcbiAgICAgIHNvY2tldDogc29ja2V0LFxuICAgICAgc3VibWl0dGVkX2F0OiBudWxsLFxuICAgICAgY29kZTogbnVsbCB9KTtcblxuXG4gICAgc29ja2V0LmVtaXQoJ0dBTUVfVVBEQVRFRCcsIGdhbWUpO1xuICB9O1xufSk7ZXhwb3J0cy5kZWZhdWx0ID1cblxuaW87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFja2VuZC9zb2NrZXQuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2JhY2tlbmQvc29ja2V0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/backend/socket.js\n");

/***/ })

};