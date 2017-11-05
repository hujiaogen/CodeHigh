exports.id = 0;
exports.modules = {

/***/ "./src/backend/socket.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _socket = __webpack_require__(\"socket.io\");var _socket2 = _interopRequireDefault(_socket);\nvar _models = __webpack_require__(\"./src/backend/models/index.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar io = (0, _socket2.default)();\nvar games = [];\nio.on('connection', function (socket) {\n  socket.on('HANDSHAKE', function (data) {var\n    token = data.token;\n    _models.Auth.verify(token).\n    then(function (auth) {return _models.Auth.populate(auth, 'user');}).\n    then(function (auth) {return auth.refresh();}).\n    then(function (auth) {\n      var user_idx = auth.user.idx;\n      assignPlayer(user_idx);\n    }).\n    catch(function () {return socket.destroy();});\n  });\n\n  var assignPlayer = function assignPlayer(user_idx) {\n    var game = games.find(function (game) {return game.started;});\n    if (!game) {\n      game = {\n        started_at: null,\n        players: [],\n        topic_idx: null };\n\n      games.push(game);\n    }\n    game.players.push({\n      user_idx: user_idx,\n      socket: socket,\n      time: null,\n      code: null });\n\n    if (game.players.length === 3) {\n      game.started_at = new Date();\n      User.count().exec(function (err, count) {\n\n        // Get a random entry\n        var random = Math.floor(Math.random() * count);\n\n        // Again query all users but only fetch one offset by our random #\n        User.findOne().skip(random).exec(\n        function (err, result) {\n          // Tada! random user\n          console.log(result);\n        });\n      });\n      game.topic_idx;\n    }\n    updateGame(game);\n  };\n\n  var updateGame = function updateGame(game) {\n    var data = _extends({}, game);\n    data.players = data.players.map(function (_ref) {var user_idx = _ref.user_idx,time = _ref.time;return { user_idx: user_idx, time: time };});\n    socket.emit('GAME_UPDATED', game);\n  };\n});exports.default =\n\nio;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9zb2NrZXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2VuZC9zb2NrZXQuanM/MDA5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO3ZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge2ZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7dmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHt0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO319fXJldHVybiB0YXJnZXQ7fTt2YXIgX3NvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO3ZhciBfc29ja2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NvY2tldCk7XG52YXIgX21vZGVscyA9IHJlcXVpcmUoJy9tb2RlbHMnKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge3JldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O31cblxudmFyIGlvID0gKDAsIF9zb2NrZXQyLmRlZmF1bHQpKCk7XG52YXIgZ2FtZXMgPSBbXTtcbmlvLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gKHNvY2tldCkge1xuICBzb2NrZXQub24oJ0hBTkRTSEFLRScsIGZ1bmN0aW9uIChkYXRhKSB7dmFyXG4gICAgdG9rZW4gPSBkYXRhLnRva2VuO1xuICAgIF9tb2RlbHMuQXV0aC52ZXJpZnkodG9rZW4pLlxuICAgIHRoZW4oZnVuY3Rpb24gKGF1dGgpIHtyZXR1cm4gX21vZGVscy5BdXRoLnBvcHVsYXRlKGF1dGgsICd1c2VyJyk7fSkuXG4gICAgdGhlbihmdW5jdGlvbiAoYXV0aCkge3JldHVybiBhdXRoLnJlZnJlc2goKTt9KS5cbiAgICB0aGVuKGZ1bmN0aW9uIChhdXRoKSB7XG4gICAgICB2YXIgdXNlcl9pZHggPSBhdXRoLnVzZXIuaWR4O1xuICAgICAgYXNzaWduUGxheWVyKHVzZXJfaWR4KTtcbiAgICB9KS5cbiAgICBjYXRjaChmdW5jdGlvbiAoKSB7cmV0dXJuIHNvY2tldC5kZXN0cm95KCk7fSk7XG4gIH0pO1xuXG4gIHZhciBhc3NpZ25QbGF5ZXIgPSBmdW5jdGlvbiBhc3NpZ25QbGF5ZXIodXNlcl9pZHgpIHtcbiAgICB2YXIgZ2FtZSA9IGdhbWVzLmZpbmQoZnVuY3Rpb24gKGdhbWUpIHtyZXR1cm4gZ2FtZS5zdGFydGVkO30pO1xuICAgIGlmICghZ2FtZSkge1xuICAgICAgZ2FtZSA9IHtcbiAgICAgICAgc3RhcnRlZF9hdDogbnVsbCxcbiAgICAgICAgcGxheWVyczogW10sXG4gICAgICAgIHRvcGljX2lkeDogbnVsbCB9O1xuXG4gICAgICBnYW1lcy5wdXNoKGdhbWUpO1xuICAgIH1cbiAgICBnYW1lLnBsYXllcnMucHVzaCh7XG4gICAgICB1c2VyX2lkeDogdXNlcl9pZHgsXG4gICAgICBzb2NrZXQ6IHNvY2tldCxcbiAgICAgIHRpbWU6IG51bGwsXG4gICAgICBjb2RlOiBudWxsIH0pO1xuXG4gICAgaWYgKGdhbWUucGxheWVycy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGdhbWUuc3RhcnRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gICAgICBVc2VyLmNvdW50KCkuZXhlYyhmdW5jdGlvbiAoZXJyLCBjb3VudCkge1xuXG4gICAgICAgIC8vIEdldCBhIHJhbmRvbSBlbnRyeVxuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY291bnQpO1xuXG4gICAgICAgIC8vIEFnYWluIHF1ZXJ5IGFsbCB1c2VycyBidXQgb25seSBmZXRjaCBvbmUgb2Zmc2V0IGJ5IG91ciByYW5kb20gI1xuICAgICAgICBVc2VyLmZpbmRPbmUoKS5za2lwKHJhbmRvbSkuZXhlYyhcbiAgICAgICAgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gICAgICAgICAgLy8gVGFkYSEgcmFuZG9tIHVzZXJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgZ2FtZS50b3BpY19pZHg7XG4gICAgfVxuICAgIHVwZGF0ZUdhbWUoZ2FtZSk7XG4gIH07XG5cbiAgdmFyIHVwZGF0ZUdhbWUgPSBmdW5jdGlvbiB1cGRhdGVHYW1lKGdhbWUpIHtcbiAgICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCBnYW1lKTtcbiAgICBkYXRhLnBsYXllcnMgPSBkYXRhLnBsYXllcnMubWFwKGZ1bmN0aW9uIChfcmVmKSB7dmFyIHVzZXJfaWR4ID0gX3JlZi51c2VyX2lkeCx0aW1lID0gX3JlZi50aW1lO3JldHVybiB7IHVzZXJfaWR4OiB1c2VyX2lkeCwgdGltZTogdGltZSB9O30pO1xuICAgIHNvY2tldC5lbWl0KCdHQU1FX1VQREFURUQnLCBnYW1lKTtcbiAgfTtcbn0pO2V4cG9ydHMuZGVmYXVsdCA9XG5cbmlvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JhY2tlbmQvc29ja2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9iYWNrZW5kL3NvY2tldC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/backend/socket.js\n");

/***/ })

};