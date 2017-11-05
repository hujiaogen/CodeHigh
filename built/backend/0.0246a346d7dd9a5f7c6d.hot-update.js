exports.id = 0;
exports.modules = {

/***/ "./src/backend/controllers/auth.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _express = __webpack_require__(\"express\");var _express2 = _interopRequireDefault(_express);\nvar _fb = __webpack_require__(\"fb\");var _fb2 = _interopRequireDefault(_fb);\nvar _models = __webpack_require__(\"./src/backend/models/index.js\");\nvar _error = __webpack_require__(\"./src/backend/common/error.js\");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar router = _express2.default.Router();\n\nvar createAuth = function createAuth(req, res, next) {var\n  fb_access_token = req.body.fb_access_token;\n  _fb2.default.setAccessToken(fb_access_token);\n  _fb2.default.options({ Promise: Promise });\n  _fb2.default.api('me').\n  then(function (res) {\n    console.log(res);\n    return _models.User.findOne({ fb_user_id: 'a' }).\n    then(function (user) {\n      if (!user) throw new _error.AuthorizationError();\n      return _models.Auth.sign(user);\n    }).\n    then(function (auth) {return auth.save();}).\n    then(function (auth) {\n      res.cookie('token', auth.token);\n      res.return({ auth: auth });\n    });\n  }).\n  catch(next);\n};\n\nvar destroyAuth = function destroyAuth(req, res, next) {var\n  token = req.cookies.token;\n  _models.Auth.findOne({ token: token }).\n  then(function (auth) {\n    if (!auth) return auth;\n    return auth.remove();\n  }).\n  then(function (auth) {\n    res.cookie('token', '');\n    res.return({ auth: auth });\n  }).\n  catch(next);\n};\n\nrouter.route('/').\npost(createAuth).\ndelete(destroyAuth);exports.default =\n\nrouter;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2VuZC9jb250cm9sbGVycy9hdXRoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tlbmQvY29udHJvbGxlcnMvYXV0aC5qcz8yYWU5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7dmFyIF9leHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO3ZhciBfZXhwcmVzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHByZXNzKTtcbnZhciBfZmIgPSByZXF1aXJlKCdmYicpO3ZhciBfZmIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmIpO1xudmFyIF9tb2RlbHMgPSByZXF1aXJlKCcvbW9kZWxzJyk7XG52YXIgX2Vycm9yID0gcmVxdWlyZSgnL2NvbW1vbi9lcnJvcicpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7cmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07fVxuXG52YXIgcm91dGVyID0gX2V4cHJlc3MyLmRlZmF1bHQuUm91dGVyKCk7XG5cbnZhciBjcmVhdGVBdXRoID0gZnVuY3Rpb24gY3JlYXRlQXV0aChyZXEsIHJlcywgbmV4dCkge3ZhclxuICBmYl9hY2Nlc3NfdG9rZW4gPSByZXEuYm9keS5mYl9hY2Nlc3NfdG9rZW47XG4gIF9mYjIuZGVmYXVsdC5zZXRBY2Nlc3NUb2tlbihmYl9hY2Nlc3NfdG9rZW4pO1xuICBfZmIyLmRlZmF1bHQub3B0aW9ucyh7IFByb21pc2U6IFByb21pc2UgfSk7XG4gIF9mYjIuZGVmYXVsdC5hcGkoJ21lJykuXG4gIHRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgcmV0dXJuIF9tb2RlbHMuVXNlci5maW5kT25lKHsgZmJfdXNlcl9pZDogJ2EnIH0pLlxuICAgIHRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IF9lcnJvci5BdXRob3JpemF0aW9uRXJyb3IoKTtcbiAgICAgIHJldHVybiBfbW9kZWxzLkF1dGguc2lnbih1c2VyKTtcbiAgICB9KS5cbiAgICB0aGVuKGZ1bmN0aW9uIChhdXRoKSB7cmV0dXJuIGF1dGguc2F2ZSgpO30pLlxuICAgIHRoZW4oZnVuY3Rpb24gKGF1dGgpIHtcbiAgICAgIHJlcy5jb29raWUoJ3Rva2VuJywgYXV0aC50b2tlbik7XG4gICAgICByZXMucmV0dXJuKHsgYXV0aDogYXV0aCB9KTtcbiAgICB9KTtcbiAgfSkuXG4gIGNhdGNoKG5leHQpO1xufTtcblxudmFyIGRlc3Ryb3lBdXRoID0gZnVuY3Rpb24gZGVzdHJveUF1dGgocmVxLCByZXMsIG5leHQpIHt2YXJcbiAgdG9rZW4gPSByZXEuY29va2llcy50b2tlbjtcbiAgX21vZGVscy5BdXRoLmZpbmRPbmUoeyB0b2tlbjogdG9rZW4gfSkuXG4gIHRoZW4oZnVuY3Rpb24gKGF1dGgpIHtcbiAgICBpZiAoIWF1dGgpIHJldHVybiBhdXRoO1xuICAgIHJldHVybiBhdXRoLnJlbW92ZSgpO1xuICB9KS5cbiAgdGhlbihmdW5jdGlvbiAoYXV0aCkge1xuICAgIHJlcy5jb29raWUoJ3Rva2VuJywgJycpO1xuICAgIHJlcy5yZXR1cm4oeyBhdXRoOiBhdXRoIH0pO1xuICB9KS5cbiAgY2F0Y2gobmV4dCk7XG59O1xuXG5yb3V0ZXIucm91dGUoJy8nKS5cbnBvc3QoY3JlYXRlQXV0aCkuXG5kZWxldGUoZGVzdHJveUF1dGgpO2V4cG9ydHMuZGVmYXVsdCA9XG5cbnJvdXRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZW5kL2NvbnRyb2xsZXJzL2F1dGguanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2JhY2tlbmQvY29udHJvbGxlcnMvYXV0aC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/backend/controllers/auth.js\n");

/***/ })

};