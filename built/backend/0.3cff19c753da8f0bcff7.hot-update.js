exports.id = 0;
exports.modules = {

/***/ "./src/backend/socket.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _socket = __webpack_require__(\"socket.io\");var _socket2 = _interopRequireDefault(_socket);\nvar _models = __webpack_require__(\"./src/backend/models/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar io = (0, _socket2.default)();\nvar games = [];\nio.on('connection', function (socket) {\n  socket.on('HANDSHAKE', function (data) {var\n    token = data.token;\n    console.log(token);\n  });\n\n  var assignPlayer = function assignPlayer(user_idx) {\n    var game = games.find(function (game) {return game.started;});\n    if (!game) {\n      game = {\n        started_at: null,\n        players: [],\n        topic_idx: null };\n\n      games.push(game);\n    }\n    game.players.push({\n      user_idx: user_idx,\n      socket: socket,\n      time: null,\n      code: null });\n\n    if (game.players.length < 3) {\n      updateGame(game);\n    } else {\n      game.started_at = new Date();\n      _models.Topic.count().\n      then(function (count) {\n        var random = Math.random() * count | 0;\n        return _models.Topic.findOne().skip(random);\n      }).\n      then(function (topic) {\n        game.topic_idx = topic.idx;\n        updateGame(game);\n      });\n    }\n  };\n\n  var updateGame = function updateGame(game) {\n    var data = _extends({}, game);\n    data.players = data.players.map(function (_ref) {var user_idx = _ref.user_idx,time = _ref.time;return { user_idx: user_idx, time: time };});\n    socket.emit('GAME_UPDATED', game);\n  };\n});exports.default =\n\nio;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9zb2NrZXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2VuZC9zb2NrZXQuanM/MDA5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO3ZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge2ZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7dmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHt0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO319fXJldHVybiB0YXJnZXQ7fTt2YXIgX3NvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO3ZhciBfc29ja2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NvY2tldCk7XG52YXIgX21vZGVscyA9IHJlcXVpcmUoJy9tb2RlbHMnKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge3JldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O31cblxudmFyIGlvID0gKDAsIF9zb2NrZXQyLmRlZmF1bHQpKCk7XG52YXIgZ2FtZXMgPSBbXTtcbmlvLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gKHNvY2tldCkge1xuICBzb2NrZXQub24oJ0hBTkRTSEFLRScsIGZ1bmN0aW9uIChkYXRhKSB7dmFyXG4gICAgdG9rZW4gPSBkYXRhLnRva2VuO1xuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgfSk7XG5cbiAgdmFyIGFzc2lnblBsYXllciA9IGZ1bmN0aW9uIGFzc2lnblBsYXllcih1c2VyX2lkeCkge1xuICAgIHZhciBnYW1lID0gZ2FtZXMuZmluZChmdW5jdGlvbiAoZ2FtZSkge3JldHVybiBnYW1lLnN0YXJ0ZWQ7fSk7XG4gICAgaWYgKCFnYW1lKSB7XG4gICAgICBnYW1lID0ge1xuICAgICAgICBzdGFydGVkX2F0OiBudWxsLFxuICAgICAgICBwbGF5ZXJzOiBbXSxcbiAgICAgICAgdG9waWNfaWR4OiBudWxsIH07XG5cbiAgICAgIGdhbWVzLnB1c2goZ2FtZSk7XG4gICAgfVxuICAgIGdhbWUucGxheWVycy5wdXNoKHtcbiAgICAgIHVzZXJfaWR4OiB1c2VyX2lkeCxcbiAgICAgIHNvY2tldDogc29ja2V0LFxuICAgICAgdGltZTogbnVsbCxcbiAgICAgIGNvZGU6IG51bGwgfSk7XG5cbiAgICBpZiAoZ2FtZS5wbGF5ZXJzLmxlbmd0aCA8IDMpIHtcbiAgICAgIHVwZGF0ZUdhbWUoZ2FtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbWUuc3RhcnRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gICAgICBfbW9kZWxzLlRvcGljLmNvdW50KCkuXG4gICAgICB0aGVuKGZ1bmN0aW9uIChjb3VudCkge1xuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIGNvdW50IHwgMDtcbiAgICAgICAgcmV0dXJuIF9tb2RlbHMuVG9waWMuZmluZE9uZSgpLnNraXAocmFuZG9tKTtcbiAgICAgIH0pLlxuICAgICAgdGhlbihmdW5jdGlvbiAodG9waWMpIHtcbiAgICAgICAgZ2FtZS50b3BpY19pZHggPSB0b3BpYy5pZHg7XG4gICAgICAgIHVwZGF0ZUdhbWUoZ2FtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVwZGF0ZUdhbWUgPSBmdW5jdGlvbiB1cGRhdGVHYW1lKGdhbWUpIHtcbiAgICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCBnYW1lKTtcbiAgICBkYXRhLnBsYXllcnMgPSBkYXRhLnBsYXllcnMubWFwKGZ1bmN0aW9uIChfcmVmKSB7dmFyIHVzZXJfaWR4ID0gX3JlZi51c2VyX2lkeCx0aW1lID0gX3JlZi50aW1lO3JldHVybiB7IHVzZXJfaWR4OiB1c2VyX2lkeCwgdGltZTogdGltZSB9O30pO1xuICAgIHNvY2tldC5lbWl0KCdHQU1FX1VQREFURUQnLCBnYW1lKTtcbiAgfTtcbn0pO2V4cG9ydHMuZGVmYXVsdCA9XG5cbmlvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JhY2tlbmQvc29ja2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9iYWNrZW5kL3NvY2tldC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/backend/socket.js\n");

/***/ })

};