// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(24);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(32);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* weex initialized here, please do not move this line */
var router = __webpack_require__(3);
var App = __webpack_require__(67);

/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/register');

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(4);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _home = __webpack_require__(5);

var _home2 = _interopRequireDefault(_home);

var _home3 = __webpack_require__(9);

var _home4 = _interopRequireDefault(_home3);

var _home5 = __webpack_require__(13);

var _home6 = _interopRequireDefault(_home5);

var _all = __webpack_require__(17);

var _all2 = _interopRequireDefault(_all);

var _login = __webpack_require__(21);

var _login2 = _interopRequireDefault(_login);

var _set = __webpack_require__(29);

var _set2 = _interopRequireDefault(_set);

var _register = __webpack_require__(60);

var _register2 = _interopRequireDefault(_register);

var _test = __webpack_require__(64);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default);

module.exports = new _vueRouter2.default({
  routes: [{ path: '/test', component: _test2.default }, { path: '/', component: _home2.default,
    children: [{
      path: '/', component: _home4.default }, { path: '/home2', component: _home6.default }]
  }, { path: '/all', component: _all2.default }, { path: '/login', component: _login2.default }, { path: '/set', component: _set2.default }, { path: '/register', component: _register2.default }]

});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-router] " + message);
  }
}

function warn(condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
  }
}

function isError(err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1;
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children);
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h();
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children);
  }
};

function resolveProps(route, config) {
  switch (typeof config === 'undefined' ? 'undefined' : _typeof(config)) {
    case 'undefined':
      return;
    case 'object':
      return config;
    case 'function':
      return config(route);
    case 'boolean':
      return config ? route.params : undefined;
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "props in \"" + route.path + "\" is a " + (typeof config === 'undefined' ? 'undefined' : _typeof(config)) + ", " + "expecting an object, function or boolean.");
      }
  }
}

function extend(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery;
}

function parseQuery(query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res;
}

function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }

    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route);
}

function clone(value) {
  if (Array.isArray(value)) {
    return value.map(clone);
  } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res;
  } else {
    return value;
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch(record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}

function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;if (query === void 0) query = {};
  var hash = ref.hash;if (hash === void 0) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}

function isSameRoute(a, b) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
  } else if (a.name && b.name) {
    return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
  } else {
    return false;
  }
}

function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {};

  // handle null value #1566
  if (!a || !b) {
    return a === b;
  }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if ((typeof aVal === 'undefined' ? 'undefined' : _typeof(aVal)) === 'object' && (typeof bVal === 'undefined' ? 'undefined' : _typeof(bVal)) === 'object') {
      return isObjectEqual(aVal, bVal);
    }
    return String(aVal) === String(bVal);
  });
}

function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}

function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = location.path ? createRoute(null, location, null, router) : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);

    var handler = function handler(e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default);
  }
};

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return;
  }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) {
    return;
  }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) {
    return;
  }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}

function findAnchor(children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child;
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}

var _Vue;

function install(Vue) {
  if (install.installed && _Vue === Vue) {
    return;
  }
  install.installed = true;

  _Vue = Vue;

  var isDef = function isDef(v) {
    return v !== undefined;
  };

  var registerInstance = function registerInstance(vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this._routerRoot._router;
    }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this._routerRoot._route;
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/');
}

function parsePath(path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  };
}

function cleanPath(path) {
  return path.replace(/\/\//g, '/');
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams(path, params, routeMsg) {
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true });
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, "missing param for " + routeMsg + ": " + e.message);
    }
    return '';
  }
}

/*  */

function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  };
}

function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) {
        return (/^\/?$/.test(child.path)
        );
      })) {
        warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(false, "Duplicate named routes definition: " + "{ name: \"" + name + "\", path: \"" + record.path + "\" }");
    }
  }
}

function compileRouteRegex(path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], "Duplicate param keys in route with path: \"" + path + "\"");
      keys[key.name] = true;
    });
  }
  return regex;
}

function normalizePath(path, parent, strict) {
  if (!strict) {
    path = path.replace(/\/$/, '');
  }
  if (path[0] === '/') {
    return path;
  }
  if (parent == null) {
    return path;
  }
  return cleanPath(parent.path + "/" + path);
}

/*  */

function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next;
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, "path " + current.path);
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next;
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;

  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}

function assign(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
}

/*  */

function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, "Route with name '" + name + "' does not exist");
      }
      if (!record) {
        return _createRoute(null, location);
      }
      var paramNames = record.regex.keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });

      if (_typeof(location.params) !== 'object') {
        location.params = {};
      }

      if (currentRoute && _typeof(currentRoute.params) === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
        return _createRoute(record, location, redirectedFrom);
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    }
    // no match
    return _createRoute(null, location);
  }

  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }
  }

  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }
    return _createRoute(null, location);
  }

  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }
    return createRoute(record, location, redirectedFrom, router);
  }

  return {
    match: match,
    addRoutes: addRoutes
  };
}

function matchRoute(regex, path, params) {
  var m = path.match(regex);

  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true;
}

function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}

/*  */

var positionStore = Object.create(null);

function setupScroll() {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return;
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition(shouldScroll, position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition() {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition() {
  var key = getStateKey();
  if (key) {
    return positionStore[key];
  }
}

function getElementPosition(el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  };
}

function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}

function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}

function normalizeOffset(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  };
}

function isNumber(v) {
  return typeof v === 'number';
}

function scrollToPosition(shouldScroll, position) {
  var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && _typeof(shouldScroll.offset) === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && function () {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }

  return window.history && 'pushState' in window.history;
}();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;

var _key = genKey();

function genKey() {
  return Time.now().toFixed(3);
}

function getStateKey() {
  return _key;
}

function setStateKey(key) {
  _key = key;
}

function pushState(url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState(url) {
  pushState(url, true);
}

/*  */

function runQueue(queue, fn, cb) {
  var step = function step(index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents(matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) {
      next();
    }
  };
}

function flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}

function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var hasSymbol = typeof Symbol === 'function' && _typeof(Symbol.toStringTag) === 'symbol';

function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once(fn) {
  var called = false;
  return function () {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }if (called) {
      return;
    }
    called = true;
    return fn.apply(this, args);
  };
}

/*  */

var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen(cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) {
        cb(err);
      });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1 = this;

  var current = this.current;
  var abort = function abort(err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (isSameRoute(route, current) &&
  // in the case the route map has been dynamically appended to
  route.matched.length === current.matched.length) {
    this.ensureURL();
    return abort();
  }

  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;

  var queue = [].concat(
  // in-component leave guards
  extractLeaveGuards(deactivated),
  // global before hooks
  this.router.beforeHooks,
  // in-component update hooks
  extractUpdateHooks(updated),
  // in-config enter guards
  activated.map(function (m) {
    return m.beforeEnter;
  }),
  // async components
  resolveAsyncComponents(activated));

  this.pending = route;
  var iterator = function iterator(hook, next) {
    if (this$1.pending !== route) {
      return abort();
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function isValid() {
      return this$1.current === route;
    };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort();
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute(route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '');
}

function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}

function extractGuards(records, name, bind, reverse) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}

function extractGuard(def, key) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key];
}

function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}

function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}

function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}

function extractEnterGuards(activated, cbs, isValid) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid);
  });
}

function bindEnterGuard(guard, match, key, cbs, isValid) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    });
  };
}

function poll(cb, // somehow flow cannot infer this is a function
instances, key, isValid) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = function (History$$1) {
  function HTML5History(router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return;
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if (History$$1) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return getLocation(this.base);
  };

  return HTML5History;
}(History);

function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

/*  */

var HashHistory = function (History$$1) {
  function HashHistory(router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return;
    }
    ensureSlash();
  }

  if (History$$1) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return;
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };

  return HashHistory;
}(History);

function checkFallback(base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}

function ensureSlash() {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true;
  }
  replaceHash('/' + path);
  return false;
}

function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1);
}

function getUrl(path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return base + "#" + path;
}

function pushHash(path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash(path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = function (History$$1) {
  function AbstractHistory(router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if (History$$1) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go(n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };

  AbstractHistory.prototype.ensureURL = function ensureURL() {
    // noop
  };

  return AbstractHistory;
}(History);

/*  */

var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, "invalid mode: " + mode);
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};

VueRouter.prototype.init = function init(app /* Vue component instance */) {
  var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return;
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function setupHashListener() {
      history.setupListeners();
    };
    history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};

VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};

VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};

VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back() {
  this.go(-1);
};

VueRouter.prototype.forward = function forward() {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
  if (!route) {
    return [];
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};

VueRouter.prototype.resolve = function resolve(to, current, append) {
  var location = normalizeLocation(to, current || this.history.current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};

VueRouter.prototype.addRoutes = function addRoutes(routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties(VueRouter.prototype, prototypeAccessors);

function registerHook(list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) {
      list.splice(i, 1);
    }
  };
}

function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

exports.default = VueRouter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\src\\components\\home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-63fe3a06"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "day": {
    "fontSize": "72",
    "fontStretch": "ultra-condensed",
    "fontWeight": "600"
  },
  "year": {
    "fontSize": "24",
    "paddingTop": "0",
    "paddingRight": "10",
    "paddingBottom": "0",
    "paddingLeft": "10"
  },
  "time": {
    "left": "480",
    "top": "40"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//    import {WxcMinibar} from 'weex-ui';

exports.default = {
    data: function data() {
        return {};
    },
    //        components:{WxcMinibar},
    created: function created() {},
    methods: {}
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "home"
    }
  }, [_c('div', {
    staticClass: ["heads"]
  }, [_c('router-link', {
    attrs: {
      "to": "/home2"
    }
  }, [_c('div', {
    staticClass: ["flex_row"]
  }, [_c('div', {
    staticClass: ["flex_row", "date"]
  }, [_c('text', {
    staticClass: ["day"]
  }, [_vm._v("00")]), _c('text', {
    staticClass: ["year"]
  }, [_vm._v("Mar.0000")])]), _c('div', {
    staticClass: ["time"]
  }, [_c('text', {}, [_vm._v("00:00")])])])])], 1), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\src\\components\\home\\home-1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3e119932"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "gray": {
    "color": "#818181"
  },
  "fot_26": {
    "fontSize": "26"
  },
  "article": {
    "top": "80"
  },
  "iMg": {
    "height": "450",
    "width": "750"
  },
  "iMgs": {
    "height": "400",
    "width": "690",
    "marginTop": "20",
    "marginRight": 0,
    "marginBottom": "20",
    "marginLeft": 0
  },
  "writer": {
    "fontSize": "28",
    "color": "#666666"
  },
  "content": {
    "width": "600",
    "textAlign": "center",
    "fontSize": "36",
    "color": "#212121"
  },
  "pad": {
    "paddingTop": "5",
    "paddingRight": "30",
    "paddingBottom": "5",
    "paddingLeft": "30"
  },
  "icon": {
    "fontSize": "24",
    "color": "#555555",
    "paddingTop": 0,
    "paddingRight": "5",
    "paddingBottom": 0,
    "paddingLeft": "5"
  },
  "more": {
    "paddingLeft": "333",
    "paddingTop": "15",
    "height": "70",
    "width": "750"
  },
  "pull-down": {
    "marginTop": "10",
    "marginRight": 0,
    "marginBottom": "10",
    "marginLeft": 0,
    "width": "750",
    "borderStyle": "solid",
    "borderColor": "#bababa",
    "borderBottomWidth": "8",
    "borderTopWidth": "8"
  },
  "cel_l": {
    "height": "150",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30"
  },
  "li-st": {
    "display": "none"
  },
  "fot_42": {
    "fontSize": "42",
    "paddingTop": "10",
    "paddingRight": 0,
    "paddingBottom": "10",
    "paddingLeft": 0
  },
  "fot_36": {
    "fontSize": "28"
  },
  "padbom": {
    "paddingBottom": "50"
  },
  "text": {
    "height": "450",
    "width": "750",
    "alignItems": "center"
  },
  "arti": {
    "width": "750",
    "paddingTop": "10",
    "paddingRight": "30",
    "paddingBottom": "10",
    "paddingLeft": "30",
    "borderStyle": "solid",
    "borderColor": "#bababa",
    "borderBottomWidth": "10"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    data: function data() {
        return {
            ls: false
        };
    },
    created: function created() {},
    methods: {
        more: function more() {
            this.ls = !this.ls;
            console.log(1);
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["article"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["pull-down"]
  }, [_c('div', {
    staticClass: ["more"],
    on: {
      "click": _vm.more
    }
  }, [_c('text', {
    staticClass: ["gray", "fot_26"]
  }, [_vm._v("更多")])]), (_vm.ls) ? _c('list', [_vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4), _vm._m(5), _vm._m(6)]) : _vm._e()]), _vm._m(7), _vm._m(8), _vm._m(9)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('image', {
    staticClass: ["iMg"],
    attrs: {
      "src": "src/components/img/01.PNG"
    }
  })]), _c('div', {
    staticClass: ["text", "justify-around"]
  }, [_c('div', [_c('text', {
    staticClass: ["writer"]
  }, [_vm._v("黄宗泽 | 王浩信")])]), _c('div', [_c('text', {
    staticClass: ["content"]
  }, [_vm._v("xxxxxxxxxxxxxxxx考试累怎么办xxxxxxxxxxxxxxxxx")])]), _c('div', [_c('text', {
    staticClass: ["writer"]
  }, [_vm._v("《逃学》")])])]), _c('div', {
    staticClass: ["flex_row", "justify-between", "pad"]
  }, [_c('div', [_c('text', {
    staticClass: ["icon"]
  }, [_vm._v("发现")])]), _c('div', {
    staticClass: ["flex_row"]
  }, [_c('span', [_c('text', {
    staticClass: ["icon"]
  }, [_vm._v("评论")])]), _c('span', [_c('text', {
    staticClass: ["icon"]
  }, [_vm._v("收藏")])]), _c('span', [_c('text', {
    staticClass: ["icon"]
  }, [_vm._v("分享")])]), _c('span', [_c('text', {
    staticClass: ["icon"]
  }, [_vm._v("喜欢")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: ["flex_row", "cel_l"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v(">")]), _c('div', [_c('text', [_vm._v("123456")]), _c('text', [_vm._v("6666666")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: ["flex_row", "cel_l"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v(">")]), _c('div', [_c('text', [_vm._v("223456")]), _c('text', [_vm._v("6666666")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: ["flex_row", "cel_l"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v(">")]), _c('div', [_c('text', [_vm._v("323456")]), _c('text', [_vm._v("6666666")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: ["flex_row", "cel_l"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v(">")]), _c('div', [_c('text', [_vm._v("423456")]), _c('text', [_vm._v("6666666")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: ["flex_row", "cel_l"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v(">")]), _c('div', [_c('text', [_vm._v("523456")]), _c('text', [_vm._v("6666666")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: ["flex_row", "cel_l"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', [_vm._v(">")]), _c('div', [_c('text', [_vm._v("623456")]), _c('text', [_vm._v("6666666")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["arti"]
  }, [_c('div', {
    staticClass: ["margin0"]
  }, [_c('text', {
    staticClass: ["gray", "fot_26"]
  }, [_vm._v("- 标 题 -")])]), _c('div', [_c('text', {
    staticClass: ["fot_42"]
  }, [_vm._v("Big标题")])]), _c('div', [_c('text', {
    staticClass: ["fot_36"]
  }, [_vm._v("writer/作者")])]), _c('div', [_c('image', {
    staticClass: ["iMgs"],
    attrs: {
      "src": "src/components/img/02.PNG"
    }
  }), _c('text', {
    staticClass: ["padbom"]
  }, [_vm._v("文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本")])]), _c('div', {
    staticClass: ["flex_row", "justify-between"]
  }, [_c('div', {
    staticClass: ["time"]
  }, [_c('text', {
    staticClass: ["icon"]
  }, [_vm._v("time")])]), _c('div', {
    staticClass: ["flex_row"]
  }, [_c('text', {
    staticClass: ["icon"]
  }, [_vm._v("喜欢")]), _c('text', {
    staticClass: ["icon"]
  }, [_vm._v("分享")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["arti"]
  }, [_c('div', {
    staticClass: ["margin0"]
  }, [_c('text', {
    staticClass: ["gray", "fot_26"]
  }, [_vm._v("- 标 题 -")])]), _c('div', [_c('text', {
    staticClass: ["fot_42"]
  }, [_vm._v("Big标题")])]), _c('div', [_c('text', {
    staticClass: ["fot_36"]
  }, [_vm._v("writer/作者")])]), _c('div', [_c('image', {
    staticClass: ["iMgs"],
    attrs: {
      "src": "src/components/img/02.PNG"
    }
  }), _c('text', {
    staticClass: ["padbom"]
  }, [_vm._v("文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本")])]), _c('div', {
    staticClass: ["flex_row", "justify-between"]
  }, [_c('div', {
    staticClass: ["time"]
  }, [_c('text', {
    staticClass: ["icon"]
  }, [_vm._v("time")])]), _c('div', {
    staticClass: ["flex_row"]
  }, [_c('text', {
    staticClass: ["icon"]
  }, [_vm._v("喜欢")]), _c('text', {
    staticClass: ["icon"]
  }, [_vm._v("分享")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      height: "300px"
    }
  }, [_c('image'), _c('text', [_vm._v("下一页")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\src\\components\\home\\home-2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3e1fb0b3"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "fl": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    data: function data() {
        return {};
    },
    created: function created() {},
    methods: {}
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('list', [_c('text', [_vm._v("00")]), _c('refresh', [_c('div', {
    staticClass: ["flex_row"]
  }, [_c('div', [_c('image', {
    staticStyle: {
      width: "200px",
      height: "200px"
    }
  }), _c('text', [_vm._v("2018/8/8")])]), _c('div', [_c('image', {
    staticStyle: {
      width: "200px",
      height: "200px"
    }
  }), _c('text', [_vm._v("2018/8/8")])])]), _c('div', {
    staticClass: ["flex_row"]
  }, [_c('div', [_c('image', {
    staticStyle: {
      width: "200px",
      height: "200px"
    }
  }), _c('text', [_vm._v("2018/8/8")])]), _c('div', [_c('image', {
    staticStyle: {
      width: "200px",
      height: "200px"
    }
  }), _c('text', [_vm._v("2018/8/8")])])]), _c('div', {
    staticClass: ["flex_row"]
  }, [_c('div', [_c('image', {
    staticStyle: {
      width: "200px",
      height: "200px"
    }
  }), _c('text', [_vm._v("2018/8/8")])]), _c('div', [_c('image', {
    staticStyle: {
      width: "200px",
      height: "200px"
    }
  }), _c('text', [_vm._v("2018/8/8")])])]), _c('div', {
    staticClass: ["flex_row"]
  }, [_c('div', [_c('image', {
    staticStyle: {
      width: "200px",
      height: "200px"
    }
  }), _c('text', [_vm._v("2018/8/8")])]), _c('div', [_c('image', {
    staticStyle: {
      width: "200px",
      height: "200px"
    }
  }), _c('text', [_vm._v("2018/8/8")])])]), _c('div', {
    staticClass: ["flex_row"]
  }, [_c('div', [_c('image', {
    staticStyle: {
      width: "200px",
      height: "200px"
    }
  }), _c('text', [_vm._v("2018/8/8")])]), _c('div', [_c('image', {
    staticStyle: {
      width: "200px",
      height: "200px"
    }
  }), _c('text', [_vm._v("2018/8/8")])])])])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\src\\components\\all.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2bfc37f3"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "fixed-right": {
    "position": "fixed",
    "right": 0
  },
  "image": {
    "width": "750",
    "height": "450"
  },
  "box": {
    "borderBottomWidth": "20",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#bababa"
  },
  "nav": {
    "width": "750",
    "paddingTop": "15",
    "paddingRight": "30",
    "paddingBottom": "15",
    "paddingLeft": "30",
    "borderBottomWidth": "20",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#bababa"
  },
  "flex_row": {
    "flexWrap": "wrap"
  },
  "im_te": {
    "width": "160",
    "height": "150",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "image2": {
    "width": "160",
    "height": "160"
  },
  "im_te1": {
    "width": "320",
    "height": "160",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "image3": {
    "width": "320",
    "height": "160"
  },
  "slider": {
    "width": "750",
    "height": "450"
  },
  "frame": {
    "width": "750",
    "height": "450",
    "position": "relative"
  },
  "image4": {
    "marginTop": "30",
    "marginRight": 0,
    "marginBottom": "30",
    "marginLeft": 0,
    "width": "690",
    "height": "450"
  },
  "text4": {
    "marginTop": "20",
    "marginRight": "30",
    "marginBottom": "20",
    "marginLeft": "30"
  },
  "botm": {
    "height": "110",
    "width": "750"
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    data: function data() {
        return {};
    },
    created: function created() {},
    methods: {}
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('header', {
    staticClass: ["heads", "flex_row"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["hed"]
  }, [_c('text', [_vm._v("ALL")])]), _c('div', {
    staticClass: ["fixed-right"]
  }, [_c('text', [_vm._v("搜索")])])]), _c('div', {
    staticClass: ["box"]
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true",
      "interval": "3000",
      "infinite": "true"
    }
  }, [_c('div', {
    staticClass: ["frame"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": "src/components/img/03.PNG"
    }
  })]), _c('div', {
    staticClass: ["frame"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": "src/components/img/04.PNG"
    }
  })]), _c('div', {
    staticClass: ["frame"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": "src/components/img/05.PNG"
    }
  })])])]), _c('div', {
    staticClass: ["nav"]
  }, [_c('div', {
    staticClass: ["sort"]
  }, [_c('text', [_vm._v("分类导航")])]), _c('div', {
    staticClass: ["flex_row", "im_text"]
  }, [_c('div', {
    staticClass: ["im_te", "relative"]
  }, [_c('image', {
    staticClass: ["image2"],
    attrs: {
      "src": "src/components/img/06.PNG"
    }
  }), _c('text', {
    staticClass: ["absolute"]
  }, [_vm._v("1")])]), _c('div', {
    staticClass: ["im_te", "relative"]
  }, [_c('image', {
    staticClass: ["image2"],
    attrs: {
      "src": "src/components/img/06.PNG"
    }
  }), _c('text', {
    staticClass: ["absolute"]
  }, [_vm._v("2")])]), _c('div', {
    staticClass: ["im_te1", "relative"]
  }, [_c('image', {
    staticClass: ["image3"],
    attrs: {
      "src": "src/components/img/06.PNG"
    }
  }), _c('text', {
    staticClass: ["absolute"]
  }, [_vm._v("3")])]), _c('div', {
    staticClass: ["im_te", "relative"]
  }, [_c('image', {
    staticClass: ["image2"],
    attrs: {
      "src": "src/components/img/06.PNG"
    }
  }), _c('text', {
    staticClass: ["absolute"]
  }, [_vm._v("4")])]), _c('div', {
    staticClass: ["im_te", "relative"]
  }, [_c('image', {
    staticClass: ["image2"],
    attrs: {
      "src": "src/components/img/06.PNG"
    }
  }), _c('text', {
    staticClass: ["absolute"]
  }, [_vm._v("5")])]), _c('div', {
    staticClass: ["im_te", "relative"]
  }, [_c('image', {
    staticClass: ["image2"],
    attrs: {
      "src": "src/components/img/06.PNG"
    }
  }), _c('text', {
    staticClass: ["absolute"]
  }, [_vm._v("6")])]), _c('div', {
    staticClass: ["im_te", "relative"]
  }, [_c('image', {
    staticClass: ["image2"],
    attrs: {
      "src": "src/components/img/06.PNG"
    }
  }), _c('text', {
    staticClass: ["absolute"]
  }, [_vm._v("7")])])])]), _c('div', {
    staticClass: ["nav"]
  }, [_c('div', [_c('div', [_c('image', {
    staticClass: ["image4"],
    attrs: {
      "src": "src/components/img/06.PNG"
    }
  })]), _c('div', [_c('text', {
    staticClass: ["text4"]
  }, [_vm._v("5555555")])])])]), _c('div', {
    staticClass: ["nav"]
  }, [_c('div', [_c('div', [_c('image', {
    staticClass: ["image4"],
    attrs: {
      "src": "src/components/img/06.PNG"
    }
  })]), _c('div', [_c('text', {
    staticClass: ["text4"]
  }, [_vm._v("5555555")])])])]), _c('div', {
    staticClass: ["botm"]
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(28)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\src\\components\\login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1000633b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  "bgli": {
    "height": "1300",
    "background": "linear-gradient(#5c002c, #ffb5b8)"
  },
  "auto": {
    "width": "750",
    "height": "800"
  },
  "auto1": {
    "width": "200",
    "height": "200"
  },
  "imgstyle": {
    "width": "150",
    "height": "150",
    "backgroundColor": "#000000"
  },
  "textc": {
    "top": "80",
    "left": "45",
    "color": "#ffffff",
    "fontSize": "28"
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMinibar = __webpack_require__(0);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default },
    data: function data() {
        return {};
    },
    created: function created() {},
    methods: {
        jump: function jump(e) {
            this.$router.push(e);
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(27)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\node_modules\\weex-ui\\packages\\wxc-minibar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7c886216"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-minibar": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#009ff0"
  },
  "left": {
    "width": "180",
    "paddingLeft": "32"
  },
  "middle-title": {
    "fontSize": "30",
    "color": "#ffffff",
    "height": "36",
    "lineHeight": "34"
  },
  "right": {
    "width": "180",
    "paddingRight": "32",
    "alignItems": "flex-end"
  },
  "left-button": {
    "width": "21",
    "height": "36"
  },
  "right-button": {
    "width": "32",
    "height": "32"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Navigator = weex.requireModule('navigator');
exports.default = {
  props: {
    backgroundColor: {
      type: String,
      default: '#FFC900'
    },
    leftButton: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'
    },
    textColor: {
      type: String,
      default: '#3D3D3D'
    },
    rightButton: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    useDefaultReturn: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    leftButtonClicked: function leftButtonClicked() {
      var self = this;
      if (self.useDefaultReturn) {
        Navigator.pop({}, function (e) {});
      }
      self.$emit('wxcMinibarLeftButtonClicked', {});
    },
    rightButtonClicked: function rightButtonClicked() {
      var self = this;
      if (self.rightText || self.rightButton) {
        self.$emit('wxcMinibarRightButtonClicked', {});
      }
    }
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wxc-minibar"],
    style: {
      backgroundColor: _vm.backgroundColor
    }
  }, [_c('div', {
    staticClass: ["left"],
    attrs: {
      "ariaLabel": "返回",
      "accessible": true
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [(_vm.leftButton && !_vm.leftText) ? _c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": _vm.leftButton
    }
  }) : _vm._e(), (_vm.leftText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()])], 2), _vm._t("middle", [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('image', {
    staticClass: ["right-button"],
    attrs: {
      "src": _vm.rightButton,
      "ariaHidden": true
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()])], 2)], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bgli"]
  }, [_c('WxcMinibar', {
    attrs: {
      "title": "",
      "backgroundColor": "rgb(107, 0, 50)",
      "textColor": "#ffffff",
      "leftText": "设置"
    }
  }, [_c('text', {
    staticStyle: {
      color: "#ffffff"
    },
    attrs: {
      "slot": "left"
    },
    on: {
      "click": function($event) {
        _vm.jump('set')
      }
    },
    slot: "left"
  }, [_vm._v("设置")])]), _c('div', {
    staticClass: ["auto"]
  }, [_c('div', {
    staticClass: ["auto1", "relative"],
    on: {
      "click": function($event) {
        _vm.jump('register')
      }
    }
  }, [_c('image', {
    staticClass: ["imgstyle"],
    attrs: {
      "src": "src/components/img/home.png"
    }
  }), _c('text', {
    staticClass: ["textc", "absolute"]
  }, [_vm._v("点击登录")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(30)
)

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(59)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\src\\components\\login\\set.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-77b63541"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
  "text1": {
    "height": "60",
    "fontSize": "28",
    "backgroundColor": "#dddddd",
    "color": "#8e8e8e",
    "paddingTop": "10",
    "paddingRight": "5",
    "paddingBottom": "10",
    "paddingLeft": "5"
  },
  "text2": {
    "width": "750",
    "height": "100",
    "borderStyle": "solid",
    "borderBottomColor": "#d6d6d6",
    "borderBottomWidth": "1",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "inp": {
    "position": "absolute",
    "width": "40",
    "height": "40",
    "right": 0
  },
  "fot": {
    "fontSize": "30",
    "color": "rgb(61,61,61)"
  },
  "botm": {
    "height": "130",
    "width": "750"
  },
  "back": {
    "backgroundColor": "#cccccc"
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcDialog = __webpack_require__(1);

var _wxcDialog2 = _interopRequireDefault(_wxcDialog);

var _wxcCheckbox = __webpack_require__(42);

var _wxcCheckbox2 = _interopRequireDefault(_wxcCheckbox);

var _wxcMinibar = __webpack_require__(0);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default, WxcCheckbox: _wxcCheckbox2.default, WxcDialog: _wxcDialog2.default },
    data: function data() {
        return {
            bg: false,
            show: false
        };
    },
    created: function created() {},
    methods: {
        set: function set(e) {
            this.$router.push(e);
        },
        ckbox: function ckbox() {
            this.bg = !this.bg;
        },
        cache: function cache() {
            this.show = true;
        },
        cancel: function cancel() {
            this.show = false;
        },
        confirmation: function confirmation() {
            this.show = false;
        }

    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(33)
)

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(41)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\node_modules\\weex-ui\\packages\\wxc-dialog\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a8977fac"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "dialog-box": {
    "position": "fixed",
    "left": "96",
    "width": "558",
    "backgroundColor": "#FFFFFF"
  },
  "dialog-content": {
    "paddingTop": "36",
    "paddingBottom": "36",
    "paddingLeft": "36",
    "paddingRight": "36"
  },
  "content-title": {
    "color": "#333333",
    "fontSize": "36",
    "textAlign": "center",
    "marginBottom": "24"
  },
  "content-subtext": {
    "color": "#666666",
    "fontSize": "26",
    "lineHeight": "36",
    "textAlign": "center"
  },
  "dialog-footer": {
    "flexDirection": "row",
    "alignItems": "center",
    "borderTopColor": "#F3F3F3",
    "borderTopWidth": "1"
  },
  "footer-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "flex": 1,
    "height": "90"
  },
  "cancel": {
    "borderRightColor": "#F3F3F3",
    "borderRightWidth": "1"
  },
  "btn-text": {
    "fontSize": "36",
    "color": "#666666"
  },
  "no-prompt": {
    "width": "486",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "marginTop": "24"
  },
  "no-prompt-icon": {
    "width": "24",
    "height": "24",
    "marginRight": "12"
  },
  "no-prompt-text": {
    "fontSize": "24",
    "color": "#A5A5A5"
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcOverlay = __webpack_require__(35);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

var _type = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    top: {
      type: Number,
      default: 400
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    mainBtnColor: {
      type: String,
      default: '#EE9900'
    },
    secondBtnColor: {
      type: String,
      default: '#666666'
    },
    showNoPrompt: {
      type: Boolean,
      default: false
    },
    noPromptText: {
      type: String,
      default: '不再提示'
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      noPromptIcon: _type.UN_CHECKED,
      pageHeight: 1334
    };
  },
  created: function created() {
    var _weex$config$env = weex.config.env,
        deviceHeight = _weex$config$env.deviceHeight,
        deviceWidth = _weex$config$env.deviceWidth;

    this.pageHeight = deviceHeight / deviceWidth * 750;
  },

  methods: {
    secondaryClicked: function secondaryClicked() {
      this.$emit('wxcDialogCancelBtnClicked', {
        type: 'cancel'
      });
    },
    primaryClicked: function primaryClicked(e) {
      this.$emit('wxcDialogConfirmBtnClicked', {
        type: 'confirm'
      });
    },
    noPromptClicked: function noPromptClicked(e) {
      var isChecked = !this.isChecked;
      this.noPromptIcon = isChecked ? _type.CHECKED : _type.UN_CHECKED;
      this.$emit('wxcDialogNoPromptClicked', { isChecked: isChecked });
    }
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(36);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(37)
)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(39)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\node_modules\\weex-ui\\packages\\wxc-overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-848e3dec"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2016/10/29.
 */

var CHECKED = exports.CHECKED = 'https://gw.alicdn.com/tfs/TB1UT3VpgMPMeJjy1XdXXasrXXa-42-42.png';
var UN_CHECKED = exports.UN_CHECKED = 'https://gw.alicdn.com/tfs/TB1hE3VpgMPMeJjy1XdXXasrXXa-42-42.png';

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.show) ? _c('wxc-overlay', {
    attrs: {
      "show": true,
      "hasAnimation": false
    }
  }) : _vm._e(), (_vm.show) ? _c('div', {
    staticClass: ["dialog-box"],
    style: {
      top: _vm.top + 'px'
    }
  }, [_c('div', {
    staticClass: ["dialog-content"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["content-title"]
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._t("content", [_c('text', {
    staticClass: ["content-subtext"]
  }, [_vm._v(_vm._s(_vm.content))])]), (_vm.showNoPrompt) ? _c('div', {
    staticClass: ["no-prompt"],
    on: {
      "click": _vm.noPromptClicked
    }
  }, [_c('image', {
    staticClass: ["no-prompt-icon"],
    attrs: {
      "src": _vm.noPromptIcon
    }
  }), _c('text', {
    staticClass: ["no-prompt-text"]
  }, [_vm._v(_vm._s(_vm.noPromptText))])]) : _vm._e()], 2), _c('div', {
    staticClass: ["dialog-footer"]
  }, [(!_vm.single) ? _c('div', {
    staticClass: ["footer-btn", "cancel"],
    on: {
      "click": _vm.secondaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.secondBtnColor
    }
  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e(), _c('div', {
    staticClass: ["footer-btn", "confirm"],
    on: {
      "click": _vm.primaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.mainBtnColor
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])])])]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(43);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(44)
)

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(58)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\node_modules\\weex-ui\\packages\\wxc-checkbox\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e30b8836"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {
  "checkbox": {
    "width": "48",
    "height": "48"
  },
  "title-text": {
    "fontSize": "30"
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcCell = __webpack_require__(46);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _type = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: { WxcCell: _wxcCell2.default },
  props: {
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      require: true
    },
    value: {
      type: [String, Number, Object],
      require: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      icon: [_type.CHECKED, _type.UNCHECKED, _type.CHECKED_DISABLED, _type.UNCHECKED_DISABLED],
      color: '#3D3D3D',
      innerChecked: false
    };
  },
  computed: {
    checkIcon: function checkIcon() {
      var icon = this.icon,
          disabled = this.disabled,
          innerChecked = this.innerChecked,
          config = this.config;

      var mergeIcon = [].concat(_toConsumableArray(icon));
      config.checkedIcon && (mergeIcon[0] = config.checkedIcon);
      config.unCheckedIcon && (mergeIcon[1] = config.unCheckedIcon);
      config.checkedDisabledIcon && (mergeIcon[2] = config.checkedDisabledIcon);
      config.unCheckedDisabledIcon && (mergeIcon[3] = config.unCheckedDisabledIcon);
      if (disabled) {
        return mergeIcon[innerChecked ? 2 : 3];
      } else {
        return mergeIcon[innerChecked ? 0 : 1];
      }
    },
    textColor: function textColor() {
      var innerChecked = this.innerChecked,
          disabled = this.disabled,
          config = this.config;

      var checkedColor = config.checkedColor ? config.checkedColor : '#EE9900';
      return innerChecked && !disabled ? checkedColor : '#3D3D3D';
    }
  },
  watch: {
    checked: function checked(newChecked) {
      this.innerChecked = newChecked;
    }
  },
  created: function created() {
    var checked = this.checked;

    this.innerChecked = checked;
  },

  methods: {
    wxcCellClicked: function wxcCellClicked() {
      var disabled = this.disabled,
          innerChecked = this.innerChecked,
          value = this.value;

      if (!disabled) {
        this.innerChecked = !innerChecked;
        this.$emit('wxcCheckBoxItemChecked', { value: value, checked: this.innerChecked });
      }
    }
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(47);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(48)
)

/* script */
__vue_exports__ = __webpack_require__(49)

/* template */
var __vue_template__ = __webpack_require__(56)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\node_modules\\weex-ui\\packages\\wxc-cell\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c59e8e78"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "height": "100",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "width": "22",
    "height": "22"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4"
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(50);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      var link = this.link;
      this.$emit('wxcCellClicked', { e: e });
      link && _utils2.default.goToH5Page(link, true);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(51);

var _urlParse2 = _interopRequireDefault(_urlParse);

var _weexBindingx = __webpack_require__(54);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },
    supportsEB: function supportsEB() {
      return _weexBindingx2.default.isSupportBinding && !Utils.env.isWeb();
    },


    /**
     * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
     * @returns {boolean}
     */
    supportsEBForAndroid: function supportsEBForAndroid() {
      return Utils.env.isAndroid() && Utils.env.supportsEB();
    },


    /**
     * 判断IOS容器是否支持是否支持expressionBinding
     * @returns {boolean}
     */
    supportsEBForIos: function supportsEBForIos() {
      return Utils.env.isIOS() && Utils.env.supportsEB();
    },


    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(52),
    qs = __webpack_require__(53),
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  loc = loc || global.location || {};

  var finaldestination = {},
      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
      url = this,
      i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query,
      url = this,
      protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (; part = parser.exec(query); result[decode(part[1])] = decode(part[2])) {}

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var a = factory();
    for (var i in a) {
      ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
    }
  }
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      var _universalEnv = __webpack_require__(1);

      var _bindingxParser = __webpack_require__(3);

      function requireModule(moduleName) {
        try {
          if ((typeof weex === 'undefined' ? 'undefined' : _typeof(weex)) !== undefined && weex.requireModule) {
            // eslint-disable-line
            return weex.requireModule(moduleName); // eslint-disable-line
          }
        } catch (err) {}
        return window.require('@weex-module/' + moduleName);
      };

      var isSupportNewBinding = true;
      var isSupportBinding = true;
      var WeexBinding = void 0;
      var WebBinding = {};
      if (_universalEnv.isWeb) {
        WebBinding = __webpack_require__(5);
      } else {
        try {
          WeexBinding = requireModule('bindingx');
          isSupportNewBinding = true;
        } catch (e) {
          isSupportNewBinding = false;
        }
        if (!WeexBinding || !WeexBinding.bind) {
          try {
            WeexBinding = requireModule('binding');
            isSupportNewBinding = true;
          } catch (e) {
            isSupportNewBinding = false;
          }
        }
        isSupportNewBinding = !!(WeexBinding && WeexBinding.bind && WeexBinding.unbind);
        if (!isSupportNewBinding) {
          try {
            WeexBinding = requireModule('expressionBinding');
            isSupportBinding = true;
          } catch (err) {
            isSupportBinding = false;
          }
        }
        isSupportBinding = !!(WeexBinding && (WeexBinding.bind || WeexBinding.createBinding));
      }

      function formatExpression(expression) {
        if (expression === undefined) return;
        try {
          expression = JSON.parse(expression);
        } catch (err) {}
        var resultExpression = {};
        if (typeof expression === 'string') {
          resultExpression.origin = expression;
        } else if (expression) {
          resultExpression.origin = expression.origin;
          resultExpression.transformed = expression.transformed;
        }
        if (!resultExpression.transformed && !resultExpression.origin) return;
        resultExpression.transformed = resultExpression.transformed || (0, _bindingxParser.parse)(resultExpression.origin);
        return resultExpression;
      }

      // 统一回调参数
      function fixCallback(callback) {
        return function () {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (typeof callback === 'function') {
            return callback({
              state: params.state === 'end' ? 'exit' : params.state,
              t: params.t !== undefined ? params.t : params.deltaT
            });
          }
        };
      }

      exports.default = {
        // 是否支持新版本的binding
        isSupportNewBinding: isSupportNewBinding,
        // 是否支持binding
        isSupportBinding: isSupportBinding,
        _bindingInstances: [],
        /**
         * 绑定
         * @param options 参数
         * @example
         {
           anchor:blockRef,
           eventType:'pan',
           props: [
           {
             element:blockRef,
             property:'transform.translateX',
             expression:{
               origin:"x+1",
               transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
             }
           }
          ]
         }
         */
        bind: function bind(options) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

          if (!options) {
            throw new Error('should pass options for binding');
          }

          options.exitExpression = formatExpression(options.exitExpression);

          if (options.props) {
            options.props.forEach(function (prop) {
              prop.expression = formatExpression(prop.expression);
            });
          }

          if (_universalEnv.isWeex) {
            if (WeexBinding && isSupportBinding) {
              if (isSupportNewBinding) {
                return WeexBinding.bind(options, options && options.eventType === 'timing' ? fixCallback(callback) : callback);
              } else {
                WeexBinding.enableBinding(options.anchor, options.eventType);
                // 处理expression的参数格式
                var expressionArgs = options.props.map(function (prop) {
                  return {
                    element: prop.element,
                    property: prop.property,
                    expression: prop.expression.transformed
                  };
                });
                WeexBinding.createBinding(options.anchor, options.eventType, '', expressionArgs, callback);
              }
            }
          } else {
            return WebBinding.bind(options, callback);
          }
        },

        /**
         *  @param {object} options
         *  @example
         *  {eventType:'pan',
         *   token:self.gesToken}
         */
        unbind: function unbind(options) {
          if (!options) {
            throw new Error('should pass options for binding');
          }
          if (_universalEnv.isWeex) {
            if (WeexBinding && isSupportBinding) {
              if (isSupportNewBinding) {
                return WeexBinding.unbind(options);
              } else {
                return WeexBinding.disableBinding(options.anchor, options.eventType);
              }
            }
          } else {
            return WebBinding.unbind(options);
          }
        },
        unbindAll: function unbindAll() {
          if (_universalEnv.isWeex) {
            if (WeexBinding && isSupportBinding) {
              if (isSupportNewBinding) {
                return WeexBinding.unbindAll();
              } else {
                return WeexBinding.disableAll();
              }
            }
          } else {
            return WebBinding.unbindAll();
          }
        },
        getComputedStyle: function getComputedStyle(el) {
          if (_universalEnv.isWeex) {
            if (isSupportNewBinding) {
              return WeexBinding.getComputedStyle(el);
            } else {
              return {};
            }
          } else {
            return WebBinding.getComputedStyle(el);
          }
        }
      };
      module.exports = exports['default'];

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (process) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        // https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
        var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
        var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
        var isWeex = exports.isWeex = typeof callNative === 'function';
        var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
        exports['default'] = module.exports;
        exports.default = module.exports;
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(2));

      /***/
    },
    /* 2 */
    /***/function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = __webpack_require__(4);

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var lex = {
        InputElementDiv: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        InputElementRegExp: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
        ReservedWord: '<Keyword>|<NullLiteral>|<BooleanLiteral>',
        WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/,
        LineTerminator: /[\n\r\u2028\u2029]/,
        Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/,
        NullLiteral: /null(?![_$a-zA-Z0-9])/,
        BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/,
        Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/,
        Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/,
        DivPunctuator: /\/=|\//,
        NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/,
        StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/,
        RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/
      };

      function XRegExp(xregexps, rootname, flag) {
        var expnames = [rootname];

        function buildRegExp(source) {
          var regexp = new RegExp();
          regexp.compile(source.replace(/<([^>]+)>/g, function (all, expname) {
            if (!xregexps[expname]) return '';
            expnames.push(expname);
            if (xregexps[expname] instanceof RegExp) return '(' + xregexps[expname].source + ')';
            return '(' + buildRegExp(xregexps[expname]).source + ')';
          }), flag);
          return regexp;
        }

        var regexp = buildRegExp(xregexps[rootname]);
        this.exec = function (string) {
          var matches = regexp.exec(string);
          if (matches == null) return null;
          var result = new String(matches[0]);
          for (var i = 0; i < expnames.length; i++) {
            if (matches[i]) result[expnames[i]] = matches[i];
          }return result;
        };
        Object.defineProperty(this, 'lastIndex', {
          'get': function get() {
            return regexp.lastIndex;
          },
          'set': function set(v) {
            regexp.lastIndex = v;
          }
        });
      }

      function LexicalParser() {
        var inputElementDiv = new XRegExp(lex, 'InputElementDiv', 'g');
        var inputElementRegExp = new XRegExp(lex, 'InputElementRegExp', 'g');
        var source;
        Object.defineProperty(this, 'source', {
          'get': function get() {
            return source;
          },
          'set': function set(v) {
            source = v;
            inputElementDiv.lastIndex = 0;
            inputElementRegExp.lastIndex = 0;
          }
        });
        this.reset = function () {
          inputElementDiv.lastIndex = 0;
          inputElementRegExp.lastIndex = 0;
        };
        this.getNextToken = function (useDiv) {
          var lastIndex = inputElementDiv.lastIndex;
          var inputElement;
          if (useDiv) inputElement = inputElementDiv;else inputElement = inputElementRegExp;
          var token = inputElement.exec(source);
          if (token && inputElement.lastIndex - lastIndex > token.length) {
            throw new SyntaxError('Unexpected token ILLEGAL');
          }
          inputElementDiv.lastIndex = inputElement.lastIndex;
          inputElementRegExp.lastIndex = inputElement.lastIndex;
          return token;
        };
      }

      var rules = {
        'IdentifierName': [['Identifier']],
        'Literal': [['NullLiteral'], ['BooleanLiteral'], ['NumericLiteral'], ['StringLiteral'], ['RegularExpressionLiteral']],
        'PrimaryExpression': [['Identifier'], ['Literal'], ['(', 'Expression', ')']],
        'CallExpression': [['PrimaryExpression', 'Arguments'], ['CallExpression', 'Arguments']],
        'Arguments': [['(', ')'], ['(', 'ArgumentList', ')']],
        'ArgumentList': [['ConditionalExpression'], ['ArgumentList', ',', 'ConditionalExpression']],
        'LeftHandSideExpression': [['PrimaryExpression'], ['CallExpression']],
        'UnaryExpression': [['LeftHandSideExpression'], ['void', 'UnaryExpression'], ['+', 'UnaryExpression'], ['-', 'UnaryExpression'], ['~', 'UnaryExpression'], ['!', 'UnaryExpression']],
        'ExponentiationExpression': [['UnaryExpression'], ['ExponentiationExpression', '**', 'UnaryExpression']],
        'MultiplicativeExpression': [['MultiplicativeExpression', '/', 'ExponentiationExpression'], ['ExponentiationExpression'], ['MultiplicativeExpression', '*', 'ExponentiationExpression'], ['MultiplicativeExpression', '%', 'ExponentiationExpression']],
        'AdditiveExpression': [['MultiplicativeExpression'], ['AdditiveExpression', '+', 'MultiplicativeExpression'], ['AdditiveExpression', '-', 'MultiplicativeExpression']],
        'ShiftExpression': [['AdditiveExpression'], ['ShiftExpression', '<<', 'AdditiveExpression'], ['ShiftExpression', '>>', 'AdditiveExpression'], ['ShiftExpression', '>>>', 'AdditiveExpression']],
        'RelationalExpression': [['ShiftExpression'], ['RelationalExpression', '<', 'ShiftExpression'], ['RelationalExpression', '>', 'ShiftExpression'], ['RelationalExpression', '<=', 'ShiftExpression'], ['RelationalExpression', '>=', 'ShiftExpression'], ['RelationalExpression', 'instanceof', 'ShiftExpression'], ['RelationalExpression', 'in', 'ShiftExpression']],
        'EqualityExpression': [['RelationalExpression'], ['EqualityExpression', '==', 'RelationalExpression'], ['EqualityExpression', '!=', 'RelationalExpression'], ['EqualityExpression', '===', 'RelationalExpression'], ['EqualityExpression', '!==', 'RelationalExpression']],
        'BitwiseANDExpression': [['EqualityExpression'], ['BitwiseANDExpression', '&', 'EqualityExpression']],
        'BitwiseXORExpression': [['BitwiseANDExpression'], ['BitwiseXORExpression', '^', 'BitwiseANDExpression']],
        'BitwiseORExpression': [['BitwiseXORExpression'], ['BitwiseORExpression', '|', 'BitwiseXORExpression']],
        'LogicalANDExpression': [['BitwiseORExpression'], ['LogicalANDExpression', '&&', 'BitwiseORExpression']],
        'LogicalORExpression': [['LogicalANDExpression'], ['LogicalORExpression', '||', 'LogicalANDExpression']],
        'ConditionalExpression': [['LogicalORExpression'], ['LogicalORExpression', '?', 'LogicalORExpression', ':', 'LogicalORExpression']],
        'Expression': [['ConditionalExpression'], ['Expression', ',', 'ConditionalExpression']],
        'Program': [['Expression']]

      };

      function _Symbol(symbolName, token) {
        this.name = symbolName;
        this.token = token;
        this.childNodes = [];
        this.toString = function (indent) {
          if (!indent) indent = '';
          if (this.childNodes.length == 1) return this.childNodes[0].toString(indent);
          var str = indent + this.name + (this.token != undefined && this.name != this.token ? ':' + this.token : '') + '\n';
          for (var i = 0; i < this.childNodes.length; i++) {
            str += this.childNodes[i].toString(indent + '    ');
          }return str;
        };
      }

      function SyntacticalParser() {
        var currentRule;
        var root = {
          Program: '$'
        };
        var hash = {};

        function closureNode(node) {

          hash[JSON.stringify(node)] = node;

          var queue = Object.getOwnPropertyNames(node);
          while (queue.length) {
            var symbolName = queue.shift();
            if (!rules[symbolName]) continue;
            rules[symbolName].forEach(function (rule) {
              if (!node[rule[0]]) queue.push(rule[0]);
              var rulenode = node;
              var lastnode = null;
              rule.forEach(function (symbol) {
                if (!rulenode[symbol]) rulenode[symbol] = {};
                lastnode = rulenode;
                rulenode = rulenode[symbol];
              });
              if (node[symbolName].$div) rulenode.$div = true;
              rulenode.$reduce = symbolName;
              rulenode.$count = rule.length;
            });
          }

          for (var p in node) {
            if (_typeof2(node[p]) != 'object' || p.charAt(0) == '$' || node[p].$closure) continue;
            if (hash[JSON.stringify(node[p])]) node[p] = hash[JSON.stringify(node[p])];else {
              closureNode(node[p]);
            }
          }
          node.$closure = true;
        }

        closureNode(root);
        var symbolStack = [];
        var statusStack = [root];
        var current = root;
        this.insertSymbol = function insertSymbol(symbol, haveLineTerminator) {
          while (!current[symbol.name] && current.$reduce) {
            var count = current.$count;
            var newsymbol = new _Symbol(current.$reduce);
            while (count--) {
              newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
            }current = statusStack[statusStack.length - 1];
            this.insertSymbol(newsymbol);
          }
          current = current[symbol.name];
          symbolStack.push(symbol), statusStack.push(current);
          if (!current) throw new Error();
          return current.$div;
        };
        this.reset = function () {
          current = root;
          symbolStack = [];
          statusStack = [root];
        };
        Object.defineProperty(this, 'grammarTree', {
          'get': function get() {
            try {
              while (current.$reduce) {
                var count = current.$count;
                var newsymbol = new _Symbol(current.$reduce);
                while (count--) {
                  newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
                }current = statusStack[statusStack.length - 1];
                this.insertSymbol(newsymbol);
              }
              if (symbolStack.length > 0 && current[';']) {
                this.insertSymbol(new _Symbol(';', ';'));
                return this.grammarTree;
              }
              if (symbolStack.length != 1 || symbolStack[0].name != 'Program') throw new Error();
            } catch (e) {
              throw new SyntaxError('Unexpected end of input');
            }
            return symbolStack[0];
          }
        });
      }

      function Parser() {
        this.lexicalParser = new LexicalParser();
        this.syntacticalParser = new SyntacticalParser();
        var terminalSymbols = ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'RegularExpressionLiteral', 'Identifier', '**', '=>', '{', '}', '(', ')', '[', ']', '.', ';', ',', '<', '>', '<=', '>=', '==', '!=', '===', '!==', '+', '-', '*', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=', '*=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', '/', '/=', 'instanceof', 'typeof', 'new', 'void', 'debugger', 'this', 'delete', 'in'];
        var terminalSymbolIndex = {};
        terminalSymbols.forEach(function (e) {
          Object.defineProperty(terminalSymbolIndex, e, {});
        });
        this.reset = function () {
          this.lexicalParser.reset();
          this.syntacticalParser.reset();
        };
        this.parse = function (source, onInputElement) {
          var _this3 = this;

          var token;
          var haveLineTerminator = false;
          this.lexicalParser.source = source;
          var useDiv = false;
          while (token = this.lexicalParser.getNextToken(useDiv)) {
            if (onInputElement) onInputElement(token);
            try {
              if (Object.getOwnPropertyNames(token).some(function (e) {
                if (terminalSymbolIndex.hasOwnProperty(e)) {
                  useDiv = _this3.syntacticalParser.insertSymbol(new _Symbol(e, token), haveLineTerminator);
                  haveLineTerminator = false;
                  return true;
                } else return false;
              })) continue;
              if ((token.Keyword || token.Punctuator || token.DivPunctuator) && terminalSymbolIndex.hasOwnProperty(token.toString())) {
                useDiv = this.syntacticalParser.insertSymbol(new _Symbol(token.toString(), token), haveLineTerminator);
              }
            } catch (e) {
              throw new SyntaxError('Unexpected token ' + token);
            }
          }
          return this.syntacticalParser.grammarTree;
        };
      }

      var parser = new Parser();

      function JavaScriptExpression(text) {
        parser.reset();
        this.tree = parser.parse(text);
        this.paths = [];
        var context = Object.create(null);
        var me = this;
        var pathIndex = Object.create(null);
        this.isSimple;
        this.isConst;
        walk(this.tree);
        checkSimple(this.tree);
        if (this.paths.length === 0) {
          this.isConst = true;
        }
        this.setter = function (path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]]) curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          return {
            isCompleted: function isCompleted() {
              for (var p in pathIndex) {
                if (!pathIndex[p]) return false;
              }return true;
            },
            set: function set(value) {
              if (!pathIndex[path.join('.')]) {
                pathIndex[path.join('.')] = true;
              }
              curr[path[i]] = value;
              if (this.isCompleted()) {
                return me.exec();
              } else {
                return undefined;
              }
            }
          };
        };

        this.valueOf = this.exec = function () {
          try {
            return function () {
              return eval(text);
            }.call(context);
          } catch (e) {}
        };

        function checkSimple(symbol) {

          var curr = symbol;
          while (curr.childNodes.length <= 1 && curr.name !== 'MemberExpression') {
            curr = curr.childNodes[0];
          }
          // TODO: need to point out "[……]"
          if (curr.name === 'MemberExpression') {
            me.isSimple = true;
          } else {
            me.isSimple = false;
          }
        }

        function walk(symbol) {
          if (symbol.name === 'CallExpression' && symbol.childNodes[symbol.childNodes.length - 1].name !== 'CallExpression') {
            var path = getPath(symbol.childNodes[1]);
            walk(symbol.childNodes[0]);
          } else if (symbol.name === 'NewExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol.childNodes[0]);
          } else if (symbol.name === 'MemberExpression' && symbol.childNodes.length === 1) {
            var path = getPath(symbol);
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);
            }
          }
        }

        function getPath(symbol) {
          // [["PrimaryExpression"], ["MemberExpression", "[", "Expression", "]"], ["MemberExpression", ".", "IdentifierName"], ["new", "MemberExpression", "Arguments"]],

          if (symbol.childNodes[0].name === 'IdentifierName') {
            // MemberExpression : MemberExpression "." IdentifierName
            var path = getPath(symbol.childNodes[2]);
            if (path) path = path.concat(symbol.childNodes[0].childNodes[0].token.toString());
            createPath(path);
            return path;
          } else if (symbol.childNodes[0].name === 'PrimaryExpression') {
            // MemberExpression : PrimaryExpression
            if (symbol.childNodes[0].childNodes[0].name === 'Identifier') {
              var path = [symbol.childNodes[0].childNodes[0].token.toString()];
              createPath(path);
              return path;
            } else {
              return null;
            }
          } else if (symbol.childNodes[0].name === ']') {
            // MemberExpression : MemberExpression "[" Expression "]"
            getPath(symbol.childNodes[3]);
            walk(symbol.childNodes[1]);
            return null;
          } else if (symbol.childNodes[0].name === 'Arguments') {
            // MemberExpression : "new" MemberExpression Arguments
            walk(symbol.childNodes[0]);
            walk(symbol.childNodes[1]);
            return null;
          } else {
            for (var i = 0; i < symbol.childNodes.length; i++) {
              walk(symbol.childNodes[i]);
            }
          }
        }

        function createPath(path) {
          var curr = context;
          for (var i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]]) curr[path[i]] = Object.create(null);
            curr = curr[path[i]];
          }
          me.paths.push(path);
          pathIndex[path.join('.')] = false;
        }
      }

      function visit(tree) {
        var childNodes = tree.childNodes.slice().reverse();
        var children = childNodes.filter(function (e) {
          return !e.token || !e.token.Punctuator;
        });
        if (tree.name === 'UnaryExpression') {
          // negative number support
          if (childNodes.length === 2 && childNodes[0].name === '-' && children.length === 1) {
            var res = visit(children[0]);
            res.value = -res.value;
            return res;
          }
        }

        if (tree.name === 'Arguments') {
          var argumentList = [];
          var listNode = children[0];
          while (listNode) {
            if (listNode.childNodes.length === 3) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = listNode.childNodes[2];
            }
            if (listNode.childNodes.length === 1) {
              argumentList.unshift(listNode.childNodes[0]);
              listNode = null;
            }
          }
          return {
            type: 'Arguments',
            children: argumentList.map(function (e) {
              return visit(e);
            })
          };
        }

        if (children && children.length === 1) {
          var res = visit(children[0]);
          return res;
        }

        if (tree.token && ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'Identifier'].some(function (e) {
          return tree.token[e];
        })) {
          var type = Object.keys(tree.token).filter(function (e) {
            return e.match(/Literal/) || e.match(/Identifier/);
          })[0];
          var value = {
            'NullLiteral': null,
            'BooleanLiteral': Boolean(tree.token),
            'NumericLiteral': Number(tree.token),
            'StringLiteral': tree.token,
            'Identifier': tree.token
          }[type];

          return {
            type: type,
            value: value
          };
        }

        if (tree.name === 'CallExpression') return {
          type: 'CallExpression',
          children: [visit(childNodes[0]), visit(childNodes[1])]
        };

        return {
          type: childNodes.filter(function (e) {
            return e.token && e.token.Punctuator;
          })[0].name,
          children: childNodes.filter(function (e) {
            return !e.token || !e.token.Punctuator;
          }).map(function (e) {
            return visit(e);
          })
        };
      }

      function parse(originExp) {
        var exp = new JavaScriptExpression(originExp);
        return JSON.stringify(visit(exp.tree), null);
      }

      module.exports = {
        parse: parse
      };

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      (function webpackUniversalModuleDefinition(root, factory) {
        if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else {
          var a = factory();
          for (var i in a) {
            ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
          }
        }
      })(typeof self !== 'undefined' ? self : this, function () {
        return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
              /******/
              /******/ // Check if module is in cache
              /******/if (installedModules[moduleId]) {
                /******/return installedModules[moduleId].exports;
                /******/
              }
              /******/ // Create a new module (and put it into the cache)
              /******/var module = installedModules[moduleId] = {
                /******/i: moduleId,
                /******/l: false,
                /******/exports: {}
                /******/ };
              /******/
              /******/ // Execute the module function
              /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
              /******/
              /******/ // Flag the module as loaded
              /******/module.l = true;
              /******/
              /******/ // Return the exports of the module
              /******/return module.exports;
              /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
              /******/if (!__webpack_require__.o(exports, name)) {
                /******/Object.defineProperty(exports, name, {
                  /******/configurable: false,
                  /******/enumerable: true,
                  /******/get: getter
                  /******/ });
                /******/
              }
              /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
              /******/var getter = module && module.__esModule ?
              /******/function getDefault() {
                return module['default'];
              } :
              /******/function getModuleExports() {
                return module;
              };
              /******/__webpack_require__.d(getter, 'a', getter);
              /******/return getter;
              /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 8);
            /******/
          }(
          /************************************************************************/
          /******/[
          /* 0 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */

            /* eslint-disable no-unused-vars */

            var getOwnPropertySymbols = Object.getOwnPropertySymbols;
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var propIsEnumerable = Object.prototype.propertyIsEnumerable;

            function toObject(val) {
              if (val === null || val === undefined) {
                throw new TypeError('Object.assign cannot be called with null or undefined');
              }

              return Object(val);
            }

            function shouldUseNative() {
              try {
                if (!Object.assign) {
                  return false;
                }

                // Detect buggy property enumeration order in older V8 versions.

                // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
                test1[5] = 'de';
                if (Object.getOwnPropertyNames(test1)[0] === '5') {
                  return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test2 = {};
                for (var i = 0; i < 10; i++) {
                  test2['_' + String.fromCharCode(i)] = i;
                }
                var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                  return test2[n];
                });
                if (order2.join('') !== '0123456789') {
                  return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test3 = {};
                'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                  test3[letter] = letter;
                });
                if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
                  return false;
                }

                return true;
              } catch (err) {
                // We don't expect any of the above to throw, but better to be safe.
                return false;
              }
            }

            module.exports = shouldUseNative() ? Object.assign : function (target, source) {
              var from;
              var to = toObject(target);
              var symbols;

              for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);

                for (var key in from) {
                  if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key];
                  }
                }

                if (getOwnPropertySymbols) {
                  symbols = getOwnPropertySymbols(from);
                  for (var i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                      to[symbols[i]] = from[symbols[i]];
                    }
                  }
                }
              }

              return to;
            };

            /***/
          },
          /* 1 */
          /***/function (module, exports, __webpack_require__) {

            (function webpackUniversalModuleDefinition(root, factory) {
              if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else {
                var a = factory();
                for (var i in a) {
                  ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
                }
              }
            })(typeof self !== 'undefined' ? self : this, function () {
              return (/******/function (modules) {
                  // webpackBootstrap
                  /******/ // The module cache
                  /******/var installedModules = {};
                  /******/
                  /******/ // The require function
                  /******/function __webpack_require__(moduleId) {
                    /******/
                    /******/ // Check if module is in cache
                    /******/if (installedModules[moduleId]) {
                      /******/return installedModules[moduleId].exports;
                      /******/
                    }
                    /******/ // Create a new module (and put it into the cache)
                    /******/var module = installedModules[moduleId] = {
                      /******/i: moduleId,
                      /******/l: false,
                      /******/exports: {}
                      /******/ };
                    /******/
                    /******/ // Execute the module function
                    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                    /******/
                    /******/ // Flag the module as loaded
                    /******/module.l = true;
                    /******/
                    /******/ // Return the exports of the module
                    /******/return module.exports;
                    /******/
                  }
                  /******/
                  /******/
                  /******/ // expose the modules object (__webpack_modules__)
                  /******/__webpack_require__.m = modules;
                  /******/
                  /******/ // expose the module cache
                  /******/__webpack_require__.c = installedModules;
                  /******/
                  /******/ // define getter function for harmony exports
                  /******/__webpack_require__.d = function (exports, name, getter) {
                    /******/if (!__webpack_require__.o(exports, name)) {
                      /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                      /******/
                    }
                    /******/
                  };
                  /******/
                  /******/ // getDefaultExport function for compatibility with non-harmony modules
                  /******/__webpack_require__.n = function (module) {
                    /******/var getter = module && module.__esModule ?
                    /******/function getDefault() {
                      return module['default'];
                    } :
                    /******/function getModuleExports() {
                      return module;
                    };
                    /******/__webpack_require__.d(getter, 'a', getter);
                    /******/return getter;
                    /******/
                  };
                  /******/
                  /******/ // Object.prototype.hasOwnProperty.call
                  /******/__webpack_require__.o = function (object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                  };
                  /******/
                  /******/ // __webpack_public_path__
                  /******/__webpack_require__.p = "";
                  /******/
                  /******/ // Load entry module and return exports
                  /******/return __webpack_require__(__webpack_require__.s = 0);
                  /******/
                }(
                /************************************************************************/
                /******/[
                /* 0 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  function findIndex(o, condition) {
                    return o.indexOf(find(o, condition));
                  }

                  function dropWhile(o, condition) {
                    var result = [];
                    map(o, function (v, k) {
                      if (!condition(v, k)) {
                        result.push(v);
                      }
                    });
                    return result;
                  }

                  function filter(o, condition) {
                    var result = [];
                    forEach(o, function (v, k) {
                      if (condition(v, k)) {
                        result.push(v);
                      }
                    });
                    return result;
                  }

                  function map(o, fn) {
                    if (o instanceof Array) {
                      return Array.prototype.map.call(o, fn);
                    } else {
                      var result = [];
                      forEach(o, function (v, k) {
                        result.push(fn(v, k));
                      });
                      return result;
                    }
                  }

                  /*
                   forEach({a: 1, b: 2}, (v, k) => {
                   console.log({
                   v, k
                   })
                   })
                  
                   forEach([1,2,3],(v,k)=>{
                   console.log({
                   v,k
                   })
                   })
                   */

                  function forEach(o, fn) {
                    if (o instanceof Array) {
                      return Array.prototype.forEach.call(o, fn);
                    }
                    Object.keys(o).forEach(function (key) {
                      fn(o[key], key);
                    });
                  }

                  /* console.log(
                   find([{name: 1}, {name: 2}], (o) => {
                   return o.name === 2;
                   }))
                  
                   console.log(find([{name: 1,age:2}, {name: 2}], {name:1}))
                   */
                  function find(o, condition) {
                    var result = null;
                    forEach(o, function (v, k) {
                      if (typeof condition === 'function') {
                        if (condition(v, k)) {
                          result = v;
                        }
                      } else {
                        var propName = Object.keys(condition)[0];
                        if (propName && v[propName] === condition[propName]) {
                          result = v;
                        }
                      }
                    });
                    return result;
                  }

                  module.exports = {
                    find: find,
                    forEach: forEach,
                    map: map,
                    filter: filter,
                    dropWhile: dropWhile,
                    findIndex: findIndex
                  };

                  /***/
                }]
                /******/)
              );
            });

            /***/
          },
          /* 2 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _slicedToArray = function () {
              function sliceIterator(arr, i) {
                var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;_e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }return _arr;
              }return function (arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();

            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            /**
             * Transforms matrix into an object
             *
             * @param string matrix
             * @return object
             */

            // TODO matrix4 for 3D
            var matrixToTransformObj = function matrixToTransformObj(matrix) {
              // this happens when there was no rotation yet in CSS
              if (matrix === 'none') {
                matrix = 'matrix(0,0,0,0,0)';
              }
              var obj = {},
                  values = matrix.match(/([-+]?[\d\.]+)/g);

              var _values = _slicedToArray(values, 6),
                  a = _values[0],
                  b = _values[1],
                  c = _values[2],
                  d = _values[3],
                  e = _values[4],
                  f = _values[5];

              obj.rotate = obj.rotateZ = Math.round(Math.atan2(parseFloat(b), parseFloat(a)) * (180 / Math.PI)) || 0;
              obj.translateX = e !== undefined ? pxTo750(e) : 0;
              obj.translateY = f !== undefined ? pxTo750(f) : 0;
              obj.scaleX = Math.sqrt(a * a + b * b);
              obj.scaleY = Math.sqrt(c * c + d * d);
              return obj;
            };

            function pxTo750(n) {
              return n / document.body.clientWidth * 750;
            }

            function px(n) {
              return n / 750 * document.body.clientWidth;
              // return Math.round(n / 750 * document.body.clientWidth);
            }

            function clamp(n, min, max) {
              return n < min ? min : n > max ? max : n;
            }

            var vendor = function () {
              var el = document.createElement('div').style;
              var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                  transform,
                  i = 0,
                  l = vendors.length;
              for (; i < l; i++) {
                transform = vendors[i] + 'ransform';
                if (transform in el) return vendors[i].substr(0, vendors[i].length - 1);
              }
              return false;
            }();

            /**
             *  add vendor to attribute
             *  @memberOf Util
             *  @param {String} attrName name of attribute
             *  @return { String }
             **/
            function prefixStyle(attrName) {
              if (vendor === false) return false;
              if (vendor === '') return attrName;
              return vendor + attrName.charAt(0).toUpperCase() + attrName.substr(1);
            }

            exports.matrixToTransformObj = matrixToTransformObj;
            exports.pxTo750 = pxTo750;
            exports.px = px;
            exports.clamp = clamp;
            exports.prefixStyle = prefixStyle;

            /***/
          },
          /* 3 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }(); /**
                  Copyright 2018 Alibaba Group
                 
                  Licensed under the Apache License, Version 2.0 (the "License");
                  you may not use this file except in compliance with the License.
                  You may obtain a copy of the License at
                 
                  http://www.apache.org/licenses/LICENSE-2.0
                 
                  Unless required by applicable law or agreed to in writing, software
                  distributed under the License is distributed on an "AS IS" BASIS,
                  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                  See the License for the specific language governing permissions and
                  limitations under the License.
                  */

            var _simpleLodash = __webpack_require__(1);

            var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

            var _utils = __webpack_require__(2);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            var TimingHandler = function () {
              function TimingHandler(binding) {
                _classCallCheck(this, TimingHandler);

                this.binding = null;

                this.binding = binding;
                var props = binding.options.props;

                _simpleLodash2.default.map(props, function (prop) {
                  var element = prop.element,
                      config = prop.config;

                  if (config && element) {
                    if (config.perspective) {
                      if (element.parentNode) {
                        element.parentNode.style[(0, _utils.prefixStyle)('transformStyle')] = 'preserve-3d';
                        element.parentNode.style[(0, _utils.prefixStyle)('perspective')] = config.perspective + 'px';
                        element.parentNode.style[(0, _utils.prefixStyle)('perspectiveOrigin')] = '0 0';
                      }
                    }
                    if (config.transformOrigin) {
                      element.style[(0, _utils.prefixStyle)('transformOrigin')] = config.transformOrigin;
                    }
                  }
                });
              }

              _createClass(TimingHandler, [{
                key: 'destroy',
                value: function destroy() {}
              }]);

              return TimingHandler;
            }();

            exports.default = TimingHandler;
            ;

            /***/
          },
          /* 4 */
          /***/function (module, exports, __webpack_require__) {

            (function webpackUniversalModuleDefinition(root, factory) {
              if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else {
                var a = factory();
                for (var i in a) {
                  ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
                }
              }
            })(this, function () {
              return (/******/function (modules) {
                  // webpackBootstrap
                  /******/ // The module cache
                  /******/var installedModules = {};
                  /******/
                  /******/ // The require function
                  /******/function __webpack_require__(moduleId) {
                    /******/
                    /******/ // Check if module is in cache
                    /******/if (installedModules[moduleId]) {
                      /******/return installedModules[moduleId].exports;
                      /******/
                    }
                    /******/ // Create a new module (and put it into the cache)
                    /******/var module = installedModules[moduleId] = {
                      /******/i: moduleId,
                      /******/l: false,
                      /******/exports: {}
                      /******/ };
                    /******/
                    /******/ // Execute the module function
                    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                    /******/
                    /******/ // Flag the module as loaded
                    /******/module.l = true;
                    /******/
                    /******/ // Return the exports of the module
                    /******/return module.exports;
                    /******/
                  }
                  /******/
                  /******/
                  /******/ // expose the modules object (__webpack_modules__)
                  /******/__webpack_require__.m = modules;
                  /******/
                  /******/ // expose the module cache
                  /******/__webpack_require__.c = installedModules;
                  /******/
                  /******/ // define getter function for harmony exports
                  /******/__webpack_require__.d = function (exports, name, getter) {
                    /******/if (!__webpack_require__.o(exports, name)) {
                      /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                      /******/
                    }
                    /******/
                  };
                  /******/
                  /******/ // getDefaultExport function for compatibility with non-harmony modules
                  /******/__webpack_require__.n = function (module) {
                    /******/var getter = module && module.__esModule ?
                    /******/function getDefault() {
                      return module['default'];
                    } :
                    /******/function getModuleExports() {
                      return module;
                    };
                    /******/__webpack_require__.d(getter, 'a', getter);
                    /******/return getter;
                    /******/
                  };
                  /******/
                  /******/ // Object.prototype.hasOwnProperty.call
                  /******/__webpack_require__.o = function (object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                  };
                  /******/
                  /******/ // __webpack_public_path__
                  /******/__webpack_require__.p = "";
                  /******/
                  /******/ // Load entry module and return exports
                  /******/return __webpack_require__(__webpack_require__.s = 3);
                  /******/
                }(
                /************************************************************************/
                /******/[
                /* 0 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  var PI = Math.PI,
                      sin = Math.sin,
                      cos = Math.cos,
                      sqrt = Math.sqrt,
                      pow = Math.pow;

                  var c1 = 1.70158;
                  var c2 = c1 * 1.525;
                  var c3 = c1 + 1;
                  var c4 = 2 * PI / 3;
                  var c5 = 2 * PI / 4.5;

                  // x is the fraction of animation progress, in the range 0..1
                  function bounceOut(x) {
                    var n1 = 7.5625,
                        d1 = 2.75;
                    if (x < 1 / d1) {
                      return n1 * x * x;
                    } else if (x < 2 / d1) {
                      return n1 * (x -= 1.5 / d1) * x + .75;
                    } else if (x < 2.5 / d1) {
                      return n1 * (x -= 2.25 / d1) * x + .9375;
                    } else {
                      return n1 * (x -= 2.625 / d1) * x + .984375;
                    }
                  }

                  var Easing = {
                    linear: function linear(x) {
                      return x;
                    },
                    easeInQuad: function easeInQuad(x) {
                      return x * x;
                    },
                    easeOutQuad: function easeOutQuad(x) {
                      return 1 - (1 - x) * (1 - x);
                    },
                    easeInOutQuad: function easeInOutQuad(x) {
                      return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
                    },
                    easeInCubic: function easeInCubic(x) {
                      return x * x * x;
                    },
                    easeOutCubic: function easeOutCubic(x) {
                      return 1 - pow(1 - x, 3);
                    },
                    easeInOutCubic: function easeInOutCubic(x) {
                      return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
                    },
                    easeInQuart: function easeInQuart(x) {
                      return x * x * x * x;
                    },
                    easeOutQuart: function easeOutQuart(x) {
                      return 1 - pow(1 - x, 4);
                    },
                    easeInOutQuart: function easeInOutQuart(x) {
                      return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
                    },
                    easeInQuint: function easeInQuint(x) {
                      return x * x * x * x * x;
                    },
                    easeOutQuint: function easeOutQuint(x) {
                      return 1 - pow(1 - x, 5);
                    },
                    easeInOutQuint: function easeInOutQuint(x) {
                      return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
                    },
                    easeInSine: function easeInSine(x) {
                      return 1 - cos(x * PI / 2);
                    },
                    easeOutSine: function easeOutSine(x) {
                      return sin(x * PI / 2);
                    },
                    easeInOutSine: function easeInOutSine(x) {
                      return -(cos(PI * x) - 1) / 2;
                    },
                    easeInExpo: function easeInExpo(x) {
                      return x === 0 ? 0 : pow(2, 10 * x - 10);
                    },
                    easeOutExpo: function easeOutExpo(x) {
                      return x === 1 ? 1 : 1 - pow(2, -10 * x);
                    },
                    easeInOutExpo: function easeInOutExpo(x) {
                      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
                    },
                    easeInCirc: function easeInCirc(x) {
                      return 1 - sqrt(1 - pow(x, 2));
                    },
                    easeOutCirc: function easeOutCirc(x) {
                      return sqrt(1 - pow(x - 1, 2));
                    },
                    easeInOutCirc: function easeInOutCirc(x) {
                      return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
                    },
                    easeInElastic: function easeInElastic(x) {
                      return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
                    },
                    easeOutElastic: function easeOutElastic(x) {
                      return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
                    },
                    easeInOutElastic: function easeInOutElastic(x) {
                      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
                    },
                    easeInBack: function easeInBack(x) {
                      return c3 * x * x * x - c1 * x * x;
                    },
                    easeOutBack: function easeOutBack(x) {
                      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
                    },
                    easeInOutBack: function easeInOutBack(x) {
                      return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
                    },
                    easeInBounce: function easeInBounce(x) {
                      return 1 - bounceOut(1 - x);
                    },
                    easeOutBounce: bounceOut,
                    easeInOutBounce: function easeInOutBounce(x) {
                      return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
                    },
                    cubicBezier: function cubicBezier() {}
                  };

                  module.exports = Easing;

                  /***/
                },
                /* 1 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  function Bezier(x1, y1, x2, y2, epsilon) {
                    var curveX = function curveX(t) {
                      var v = 1 - t;
                      return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
                    };

                    var curveY = function curveY(t) {
                      var v = 1 - t;
                      return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
                    };

                    var derivativeCurveX = function derivativeCurveX(t) {
                      var v = 1 - t;
                      return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2;
                    };

                    return function (t) {

                      var x = t,
                          t0,
                          t1,
                          t2,
                          x2,
                          d2,
                          i;

                      // First try a few iterations of Newton's method -- normally very fast.
                      for (t2 = x, i = 0; i < 8; i++) {
                        x2 = curveX(t2) - x;
                        if (Math.abs(x2) < epsilon) return curveY(t2);
                        d2 = derivativeCurveX(t2);
                        if (Math.abs(d2) < 1e-6) break;
                        t2 = t2 - x2 / d2;
                      }

                      t0 = 0, t1 = 1, t2 = x;

                      if (t2 < t0) return curveY(t0);
                      if (t2 > t1) return curveY(t1);

                      // Fallback to the bisection method for reliability.
                      while (t0 < t1) {
                        x2 = curveX(t2);
                        if (Math.abs(x2 - x) < epsilon) return curveY(t2);
                        if (x > x2) t0 = t2;else t1 = t2;
                        t2 = (t1 - t0) * .5 + t0;
                      }

                      // Failure
                      return curveY(t2);
                    };
                  };

                  module.exports = Bezier;

                  /***/
                },
                /* 2 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                  };

                  var cancelRAF = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;

                  module.exports = {
                    raf: raf,
                    cancelRAF: cancelRAF
                  };

                  /***/
                },
                /* 3 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  module.exports = __webpack_require__(4);

                  /***/
                },
                /* 4 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  var easing = __webpack_require__(0);
                  var bezier = __webpack_require__(1);

                  var _require = __webpack_require__(2),
                      raf = _require.raf,
                      cancelRAF = _require.cancelRAF;

                  var assign = __webpack_require__(5);

                  var TYPES = {
                    START: 'start',
                    END: 'end',
                    RUN: 'run',
                    STOP: 'stop'
                  };

                  var noop = function noop() {};

                  var MIN_DURATION = 1;

                  function Timer(cfg) {
                    this.init(cfg);
                  }

                  Timer.prototype = {
                    init: function init(cfg) {
                      this.cfg = assign({
                        easing: 'linear',
                        duration: Infinity,
                        onStart: noop,
                        onRun: noop,
                        onStop: noop,
                        onEnd: noop
                      }, cfg);
                    },
                    run: function run() {
                      var _cfg = this.cfg,
                          duration = _cfg.duration,
                          onStart = _cfg.onStart,
                          onRun = _cfg.onRun;

                      if (duration <= MIN_DURATION) {
                        this.isfinished = true;
                        typeof onRun === 'function' ? onRun({ percent: 1 }) : null;
                        this.stop();
                      }
                      if (this.isfinished) return;
                      this._hasFinishedPercent = this._stop && this._stop.percent || 0;
                      this._stop = null;
                      this.start = Date.now();
                      this.percent = 0;
                      typeof onStart === 'function' ? onStart({ percent: 0, type: TYPES.START }) : null;
                      // epsilon determines the precision of the solved values
                      var epsilon = 1000 / 60 / duration / 4;
                      var b = this.cfg.bezierArgs;
                      this.easingFn = b && b.length === 4 ? bezier(b[0], b[1], b[2], b[3], epsilon) : easing[this.cfg.easing];
                      this._run();
                    },

                    _run: function _run() {
                      var _this = this;

                      var _cfg2 = this.cfg,
                          onRun = _cfg2.onRun,
                          onStop = _cfg2.onStop;

                      cancelRAF(this._raf);
                      this._raf = raf(function () {
                        _this.now = Date.now();
                        _this.t = _this.now - _this.start;
                        _this.duration = _this.now - _this.start >= _this.cfg.duration ? _this.cfg.duration : _this.now - _this.start;
                        _this.progress = _this.easingFn(_this.duration / _this.cfg.duration);
                        _this.percent = _this.duration / _this.cfg.duration + _this._hasFinishedPercent;
                        if (_this.percent >= 1 || _this._stop) {
                          _this.percent = _this._stop && _this._stop.percent ? _this._stop.percent : 1;
                          _this.duration = _this._stop && _this._stop.duration ? _this._stop.duration : _this.duration;

                          typeof onRun === 'function' ? onRun({
                            percent: _this.progress,
                            originPercent: _this.percent,
                            t: _this.t,
                            type: TYPES.RUN
                          }) : null;

                          typeof onStop === 'function' ? onStop({
                            percent: _this.percent,
                            t: _this.t,
                            type: TYPES.STOP
                          }) : null;

                          if (_this.percent >= 1) {
                            _this.isfinished = true;
                            _this.stop();
                          }
                          return;
                        }

                        typeof onRun === 'function' ? onRun({
                          percent: _this.progress,
                          originPercent: _this.percent,
                          t: _this.t,
                          type: TYPES.RUN
                        }) : null;

                        _this._run();
                      });
                    },

                    stop: function stop() {
                      var onEnd = this.cfg.onEnd;

                      this._stop = {
                        percent: this.percent,
                        now: this.now
                      };
                      typeof onEnd === 'function' ? onEnd({
                        percent: 1,
                        t: this.t,
                        type: TYPES.END
                      }) : null;
                      cancelRAF(this._raf);
                    }
                  };

                  Timer.Easing = easing;
                  Timer.Bezier = bezier;
                  Timer.raf = raf;
                  Timer.cancelRAF = cancelRAF;
                  module.exports = Timer;

                  /***/
                },
                /* 5 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";
                  /*
                  object-assign
                  (c) Sindre Sorhus
                  @license MIT
                  */

                  /* eslint-disable no-unused-vars */

                  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
                  var hasOwnProperty = Object.prototype.hasOwnProperty;
                  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

                  function toObject(val) {
                    if (val === null || val === undefined) {
                      throw new TypeError('Object.assign cannot be called with null or undefined');
                    }

                    return Object(val);
                  }

                  function shouldUseNative() {
                    try {
                      if (!Object.assign) {
                        return false;
                      }

                      // Detect buggy property enumeration order in older V8 versions.

                      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
                      test1[5] = 'de';
                      if (Object.getOwnPropertyNames(test1)[0] === '5') {
                        return false;
                      }

                      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                      var test2 = {};
                      for (var i = 0; i < 10; i++) {
                        test2['_' + String.fromCharCode(i)] = i;
                      }
                      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                        return test2[n];
                      });
                      if (order2.join('') !== '0123456789') {
                        return false;
                      }

                      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                      var test3 = {};
                      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                        test3[letter] = letter;
                      });
                      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
                        return false;
                      }

                      return true;
                    } catch (err) {
                      // We don't expect any of the above to throw, but better to be safe.
                      return false;
                    }
                  }

                  module.exports = shouldUseNative() ? Object.assign : function (target, source) {
                    var from;
                    var to = toObject(target);
                    var symbols;

                    for (var s = 1; s < arguments.length; s++) {
                      from = Object(arguments[s]);

                      for (var key in from) {
                        if (hasOwnProperty.call(from, key)) {
                          to[key] = from[key];
                        }
                      }

                      if (getOwnPropertySymbols) {
                        symbols = getOwnPropertySymbols(from);
                        for (var i = 0; i < symbols.length; i++) {
                          if (propIsEnumerable.call(from, symbols[i])) {
                            to[symbols[i]] = from[symbols[i]];
                          }
                        }
                      }
                    }

                    return to;
                  };

                  /***/
                }]
                /******/)
              );
            });

            /***/
          },
          /* 5 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _quaternion = __webpack_require__(6);

            var _quaternion2 = _interopRequireDefault(_quaternion);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function Vector3(x, y, z) {

              this.x = x || 0;
              this.y = y || 0;
              this.z = z || 0;
            }

            Vector3.prototype = {

              constructor: Vector3,

              isVector3: true,

              set: function set(x, y, z) {

                this.x = x;
                this.y = y;
                this.z = z;

                return this;
              },

              applyEuler: function () {

                var quaternion;

                return function applyEuler(euler) {

                  if ((euler && euler.isEuler) === false) {

                    console.error('THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.');
                  }

                  if (quaternion === undefined) quaternion = new _quaternion2.default();

                  return this.applyQuaternion(quaternion.setFromEuler(euler));
                };
              }(),

              applyQuaternion: function applyQuaternion(q) {

                var x = this.x,
                    y = this.y,
                    z = this.z;
                var qx = q.x,
                    qy = q.y,
                    qz = q.z,
                    qw = q.w;

                // calculate quat * vector

                var ix = qw * x + qy * z - qz * y;
                var iy = qw * y + qz * x - qx * z;
                var iz = qw * z + qx * y - qy * x;
                var iw = -qx * x - qy * y - qz * z;

                // calculate result * inverse quat

                this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
                this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
                this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

                return this;
              }

            };

            exports.default = Vector3;

            /***/
          },
          /* 6 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _objectAssign = __webpack_require__(0);

            var _objectAssign2 = _interopRequireDefault(_objectAssign);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function Quaternion(x, y, z, w) {

              this._x = x || 0;
              this._y = y || 0;
              this._z = z || 0;
              this._w = w !== undefined ? w : 1;
            }

            Quaternion.prototype = {

              constructor: Quaternion,

              get x() {

                return this._x;
              },

              set x(value) {

                this._x = value;
                this.onChangeCallback();
              },

              get y() {

                return this._y;
              },

              set y(value) {

                this._y = value;
                this.onChangeCallback();
              },

              get z() {

                return this._z;
              },

              set z(value) {

                this._z = value;
                this.onChangeCallback();
              },

              get w() {

                return this._w;
              },

              set w(value) {

                this._w = value;
                this.onChangeCallback();
              },

              set: function set(x, y, z, w) {

                this._x = x;
                this._y = y;
                this._z = z;
                this._w = w;

                this.onChangeCallback();

                return this;
              },

              clone: function clone() {

                return new this.constructor(this._x, this._y, this._z, this._w);
              },

              copy: function copy(quaternion) {

                this._x = quaternion.x;
                this._y = quaternion.y;
                this._z = quaternion.z;
                this._w = quaternion.w;

                this.onChangeCallback();

                return this;
              },

              setFromEuler: function setFromEuler(euler, update) {

                if ((euler && euler.isEuler) === false) {

                  throw new Error('THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.');
                }

                // http://www.mathworks.com/matlabcentral/fileexchange/
                //  20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
                //  content/SpinCalc.m

                var c1 = Math.cos(euler._x / 2);
                var c2 = Math.cos(euler._y / 2);
                var c3 = Math.cos(euler._z / 2);
                var s1 = Math.sin(euler._x / 2);
                var s2 = Math.sin(euler._y / 2);
                var s3 = Math.sin(euler._z / 2);

                var order = euler.order;

                if (order === 'XYZ') {

                  this._x = s1 * c2 * c3 + c1 * s2 * s3;
                  this._y = c1 * s2 * c3 - s1 * c2 * s3;
                  this._z = c1 * c2 * s3 + s1 * s2 * c3;
                  this._w = c1 * c2 * c3 - s1 * s2 * s3;
                } else if (order === 'YXZ') {

                  this._x = s1 * c2 * c3 + c1 * s2 * s3;
                  this._y = c1 * s2 * c3 - s1 * c2 * s3;
                  this._z = c1 * c2 * s3 - s1 * s2 * c3;
                  this._w = c1 * c2 * c3 + s1 * s2 * s3;
                } else if (order === 'ZXY') {

                  this._x = s1 * c2 * c3 - c1 * s2 * s3;
                  this._y = c1 * s2 * c3 + s1 * c2 * s3;
                  this._z = c1 * c2 * s3 + s1 * s2 * c3;
                  this._w = c1 * c2 * c3 - s1 * s2 * s3;
                } else if (order === 'ZYX') {

                  this._x = s1 * c2 * c3 - c1 * s2 * s3;
                  this._y = c1 * s2 * c3 + s1 * c2 * s3;
                  this._z = c1 * c2 * s3 - s1 * s2 * c3;
                  this._w = c1 * c2 * c3 + s1 * s2 * s3;
                } else if (order === 'YZX') {

                  this._x = s1 * c2 * c3 + c1 * s2 * s3;
                  this._y = c1 * s2 * c3 + s1 * c2 * s3;
                  this._z = c1 * c2 * s3 - s1 * s2 * c3;
                  this._w = c1 * c2 * c3 - s1 * s2 * s3;
                } else if (order === 'XZY') {

                  this._x = s1 * c2 * c3 - c1 * s2 * s3;
                  this._y = c1 * s2 * c3 - s1 * c2 * s3;
                  this._z = c1 * c2 * s3 + s1 * s2 * c3;
                  this._w = c1 * c2 * c3 + s1 * s2 * s3;
                }

                if (update !== false) this.onChangeCallback();

                return this;
              },

              setFromAxisAngle: function setFromAxisAngle(axis, angle) {

                // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

                // assumes axis is normalized

                var halfAngle = angle / 2,
                    s = Math.sin(halfAngle);

                this._x = axis.x * s;
                this._y = axis.y * s;
                this._z = axis.z * s;
                this._w = Math.cos(halfAngle);

                this.onChangeCallback();

                return this;
              },

              // normalize: function() {
              //
              //   var l = this.length();
              //
              //   if (l === 0) {
              //
              //     this._x = 0;
              //     this._y = 0;
              //     this._z = 0;
              //     this._w = 1;
              //
              //   } else {
              //
              //     l = 1 / l;
              //
              //     this._x = this._x * l;
              //     this._y = this._y * l;
              //     this._z = this._z * l;
              //     this._w = this._w * l;
              //
              //   }
              //
              //   this.onChangeCallback();
              //
              //   return this;
              //
              // },

              multiply: function multiply(q, p) {

                if (p !== undefined) {

                  console.warn('THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.');
                  return this.multiplyQuaternions(q, p);
                }

                return this.multiplyQuaternions(this, q);
              },

              multiplyQuaternions: function multiplyQuaternions(a, b) {

                // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

                var qax = a._x,
                    qay = a._y,
                    qaz = a._z,
                    qaw = a._w;
                var qbx = b._x,
                    qby = b._y,
                    qbz = b._z,
                    qbw = b._w;

                this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
                this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
                this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
                this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

                this.onChangeCallback();

                return this;
              },

              slerp: function slerp(qb, t) {

                if (t === 0) return this;
                if (t === 1) return this.copy(qb);

                var x = this._x,
                    y = this._y,
                    z = this._z,
                    w = this._w;

                // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

                var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

                if (cosHalfTheta < 0) {

                  this._w = -qb._w;
                  this._x = -qb._x;
                  this._y = -qb._y;
                  this._z = -qb._z;

                  cosHalfTheta = -cosHalfTheta;
                } else {

                  this.copy(qb);
                }

                if (cosHalfTheta >= 1.0) {

                  this._w = w;
                  this._x = x;
                  this._y = y;
                  this._z = z;

                  return this;
                }

                var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

                if (Math.abs(sinHalfTheta) < 0.001) {

                  this._w = 0.5 * (w + this._w);
                  this._x = 0.5 * (x + this._x);
                  this._y = 0.5 * (y + this._y);
                  this._z = 0.5 * (z + this._z);

                  return this;
                }

                var halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
                var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
                    ratioB = Math.sin(t * halfTheta) / sinHalfTheta;

                this._w = w * ratioA + this._w * ratioB;
                this._x = x * ratioA + this._x * ratioB;
                this._y = y * ratioA + this._y * ratioB;
                this._z = z * ratioA + this._z * ratioB;

                this.onChangeCallback();

                return this;
              },

              onChange: function onChange(callback) {

                this.onChangeCallback = callback;

                return this;
              },

              onChangeCallback: function onChangeCallback() {}

            };

            (0, _objectAssign2.default)(Quaternion, {

              slerp: function slerp(qa, qb, qm, t) {

                return qm.copy(qa).slerp(qb, t);
              },

              slerpFlat: function slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {

                // fuzz-free, array-based Quaternion SLERP operation

                var x0 = src0[srcOffset0 + 0],
                    y0 = src0[srcOffset0 + 1],
                    z0 = src0[srcOffset0 + 2],
                    w0 = src0[srcOffset0 + 3],
                    x1 = src1[srcOffset1 + 0],
                    y1 = src1[srcOffset1 + 1],
                    z1 = src1[srcOffset1 + 2],
                    w1 = src1[srcOffset1 + 3];

                if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {

                  var s = 1 - t,
                      cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
                      dir = cos >= 0 ? 1 : -1,
                      sqrSin = 1 - cos * cos;

                  // Skip the Slerp for tiny steps to avoid numeric problems:
                  if (sqrSin > Number.EPSILON) {

                    var sin = Math.sqrt(sqrSin),
                        len = Math.atan2(sin, cos * dir);

                    s = Math.sin(s * len) / sin;
                    t = Math.sin(t * len) / sin;
                  }

                  var tDir = t * dir;

                  x0 = x0 * s + x1 * tDir;
                  y0 = y0 * s + y1 * tDir;
                  z0 = z0 * s + z1 * tDir;
                  w0 = w0 * s + w1 * tDir;

                  // Normalize in case we just did a lerp:
                  if (s === 1 - t) {

                    var f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);

                    x0 *= f;
                    y0 *= f;
                    z0 *= f;
                    w0 *= f;
                  }
                }

                dst[dstOffset] = x0;
                dst[dstOffset + 1] = y0;
                dst[dstOffset + 2] = z0;
                dst[dstOffset + 3] = w0;
              }

            });

            exports.default = Quaternion;

            /***/
          },
          /* 7 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            var _Math = {
              DEG2RAD: Math.PI / 180,
              RAD2DEG: 180 / Math.PI,
              degToRad: function degToRad(degrees) {
                return degrees * _Math.DEG2RAD;
              },
              radToDeg: function radToDeg(radians) {
                return radians * _Math.RAD2DEG;
              }
            };

            exports.default = _Math;

            /***/
          },
          /* 8 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _simpleLodash = __webpack_require__(1);

            var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

            var _expression = __webpack_require__(9);

            var _expression2 = _interopRequireDefault(_expression);

            var _handlers = __webpack_require__(10);

            var _utils = __webpack_require__(2);

            var _fn = __webpack_require__(18);

            var _fn2 = _interopRequireDefault(_fn);

            var _objectAssign = __webpack_require__(0);

            var _objectAssign2 = _interopRequireDefault(_objectAssign);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            // transform
            var vendorTransform = (0, _utils.prefixStyle)('transform');

            var Binding = function () {
              function Binding(options, callback) {
                _classCallCheck(this, Binding);

                this._eventHandler = null;
                this.elTransforms = [];
                this.token = null;

                this.options = options;
                this.callback = callback;
                this.token = this.genToken();
                this._initElTransforms();
                var eventType = options.eventType;

                switch (eventType) {
                  case 'pan':
                    this._eventHandler = new _handlers.PanHandler(this);
                    break;
                  case 'orientation':
                    this._eventHandler = new _handlers.OrientationHandler(this);
                    break;
                  case 'timing':
                    this._eventHandler = new _handlers.TimingHandler(this);
                    break;
                  case 'scroll':
                    this._eventHandler = new _handlers.ScrollHandler(this);
                    break;
                }
              }

              _createClass(Binding, [{
                key: 'genToken',
                value: function genToken() {
                  return parseInt(Math.random() * 10000000);
                }
              }, {
                key: '_initElTransforms',
                value: function _initElTransforms() {
                  var _options$props = this.options.props,
                      props = _options$props === undefined ? [] : _options$props;

                  var elTransforms = this.elTransforms;
                  props.forEach(function (prop) {
                    var element = prop.element;

                    if (!_simpleLodash2.default.find(elTransforms, function (o) {
                      return o.element === element;
                    })) {
                      elTransforms.push({
                        element: element,
                        transform: {
                          translateX: 0,
                          translateY: 0,
                          translateZ: 0,
                          scaleX: 1,
                          scaleY: 1,
                          scaleZ: 1,
                          rotateX: 0,
                          rotateY: 0,
                          rotateZ: 0
                        }
                      });
                    }
                  });
                }
              }, {
                key: 'getValue',
                value: function getValue(params, expression) {
                  return _expression2.default.execute(expression, (0, _objectAssign2.default)(_fn2.default, params));
                }

                // TODO scroll.contentOffset 待确认及补全

              }, {
                key: 'setProperty',
                value: function setProperty(el, property, val) {
                  var elTransform = _simpleLodash2.default.find(this.elTransforms, function (o) {
                    return o.element === el;
                  });
                  switch (property) {
                    case 'transform.translateX':
                      elTransform.transform.translateX = (0, _utils.px)(val);
                      break;
                    case 'transform.translateY':
                      elTransform.transform.translateY = (0, _utils.px)(val);
                      break;
                    case 'transform.translateZ':
                      elTransform.transform.translateZ = (0, _utils.px)(val);
                      break;
                    case 'transform.rotateX':
                      elTransform.transform.rotateX = val;
                      break;
                    case 'transform.rotateY':
                      elTransform.transform.rotateY = val;
                      break;
                    case 'transform.rotateZ':
                      elTransform.transform.rotateZ = val;
                      break;
                    case 'transform.rotate':
                      elTransform.transform.rotateZ = val;
                      break;
                    case 'transform.scaleX':
                      elTransform.transform.scaleX = val;
                      break;
                    case 'transform.scaleY':
                      elTransform.transform.scaleY = val;
                      break;
                    case 'transform.scale':
                      elTransform.transform.scaleX = val;
                      elTransform.transform.scaleY = val;
                      break;
                    case 'width':
                      el.style.width = (0, _utils.px)(val) + 'px';
                      break;
                    case 'height':
                      el.style.height = (0, _utils.px)(val) + 'px';
                      break;
                    case 'opacity':
                      el.style.opacity = val;
                      break;
                    case 'background-color':
                      el.style['background-color'] = val;
                      break;
                    case 'color':
                      el.style.color = val;
                      break;
                    case 'border-top-left-radius':
                    case 'border-top-right-radius':
                    case 'border-bottom-left-radius':
                    case 'border-bottom-right-radius':
                    case 'border-radius':
                      el.style[property] = (0, _utils.px)(val) + 'px';
                      break;
                  }
                  el.style[vendorTransform] = ['translateX(' + elTransform.transform.translateX + 'px)', 'translateY(' + elTransform.transform.translateY + 'px)', 'translateZ(' + elTransform.transform.translateZ + 'px)', 'scaleX(' + elTransform.transform.scaleX + ')', 'scaleY(' + elTransform.transform.scaleY + ')', 'rotateX(' + elTransform.transform.rotateX + 'deg)', 'rotateY(' + elTransform.transform.rotateY + 'deg)', 'rotateZ(' + elTransform.transform.rotateZ + 'deg)'].join(' ');
                }
              }, {
                key: 'destroy',
                value: function destroy() {
                  this._eventHandler.destroy();
                }
              }]);

              return Binding;
            }();

            module.exports = {
              _bindingInstances: [],
              /**
               * 绑定
               * @param options 参数
               * @example
               {
                 anchor:blockRef,
                 eventType:'pan',
                 props: [
                 {
                   element:blockRef,
                   property:'transform.translateX',
                   expression:{
                     origin:"x+1",
                     transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
                   }
                 }
                ]
               }
               */
              bind: function bind(options) {
                var _this = this;

                var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

                if (!options) {
                  throw new Error('should pass options for binding');
                }
                var existInstances = _simpleLodash2.default.filter(this._bindingInstances, function (instance) {
                  if (options.anchor) {
                    return instance.options.anchor === options.anchor && instance.options.eventType === options.eventType;
                  }
                });
                // 销毁上次实例
                if (existInstances) {
                  _simpleLodash2.default.forEach(existInstances, function (inst) {
                    inst.destroy();
                    _this._bindingInstances = _simpleLodash2.default.dropWhile(_this._bindingInstances, function (bindInst) {
                      return bindInst === inst;
                    });
                  });
                }
                var binding = new Binding(options, callback);
                this._bindingInstances.push(binding);
                return { token: binding.token };
              },

              /**
               *  @param {object} options
               *  @example
               *  {eventType:'pan',
               *   token:self.gesToken}
               */
              unbind: function unbind(options) {
                if (!options) {
                  throw new Error('should pass options for binding');
                }
                var inst = _simpleLodash2.default.find(this._bindingInstances, function (instance) {
                  return instance.options.eventType === options.eventType && instance.token === options.token;
                });
                if (inst) {
                  inst.destroy();
                }
              },
              unbindAll: function unbindAll() {
                this._bindingInstances.forEach(function (inst) {
                  inst.destroy({
                    eventType: inst.options.eventType,
                    token: inst.token
                  });
                });
              },
              getComputedStyle: function getComputedStyle(elRef) {
                var computedStyle = window.getComputedStyle(elRef);
                var style = (0, _utils.matrixToTransformObj)(computedStyle[vendorTransform]);
                style.opacity = Number(computedStyle.opacity);
                style.width = (0, _utils.pxTo750)(computedStyle.width.replace('px', ''));
                style.height = (0, _utils.pxTo750)(computedStyle.height.replace('px', ''));
                style['background-color'] = computedStyle['background-color'];
                style.color = computedStyle.color;
                style.width = (0, _utils.pxTo750)(computedStyle.width.replace('px', ''));
                style.height = (0, _utils.pxTo750)(computedStyle.height.replace('px', ''));
                style['border-top-left-radius'] = (0, _utils.pxTo750)(computedStyle['border-top-left-radius'].replace('px', ''));
                style['border-top-right-radius'] = (0, _utils.pxTo750)(computedStyle['border-top-right-radius'].replace('px', ''));
                style['border-bottom-left-radius'] = (0, _utils.pxTo750)(computedStyle['border-bottom-left-radius'].replace('px', ''));
                style['border-bottom-right-radius'] = (0, _utils.pxTo750)(computedStyle['border-bottom-right-radius'].replace('px', ''));
                return style;
              }
            };

            /***/
          },
          /* 9 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            function toNumber(value) {
              return Number(value);
            }

            function toBoolean(value) {
              return !!value;
            }

            function equal(v1, v2) {
              return v1 == v2;
            }

            function strictlyEqual(v1, v2) {
              return v1 === v2;
            }

            function execute(node, scope) {

              var type = node.type;
              var children = node.children;
              switch (type) {
                case 'StringLiteral':
                  return String(node.value);
                case 'NumericLiteral':
                  return parseFloat(node.value);
                case 'BooleanLiteral':
                  return !!node.value;
                case 'Identifier':
                  return scope[node.value];
                case 'CallExpression':
                  var fn = execute(children[0], scope);
                  // console.log('fn:',fn)
                  var args = [];
                  var jsonArguments = children[1].children;
                  for (var i = 0; i < jsonArguments.length; i++) {
                    args.push(execute(jsonArguments[i], scope));
                  }
                  return fn.apply(null, args);
                case '?':
                  if (execute(children[0], scope)) {
                    return execute(children[1], scope);
                  }
                  return execute(children[2], scope);
                case '+':
                  return toNumber(execute(children[0], scope)) + toNumber(execute(children[1], scope));
                case '-':
                  return toNumber(execute(children[0], scope)) - toNumber(execute(children[1], scope));
                case '*':
                  return toNumber(execute(children[0], scope)) * toNumber(execute(children[1], scope));
                case '/':
                  return toNumber(execute(children[0], scope)) / toNumber(execute(children[1], scope));
                case '%':
                  return toNumber(execute(children[0], scope)) % toNumber(execute(children[1], scope));
                case '**':
                  return Math.pow(toNumber(execute(children[0], scope)), toNumber(execute(children[1], scope)));

                case '>':
                  return toNumber(execute(children[0], scope)) > toNumber(execute(children[1], scope));
                case '<':
                  return toNumber(execute(children[0], scope)) < toNumber(execute(children[1], scope));
                case '>=':
                  return toNumber(execute(children[0], scope)) >= toNumber(execute(children[1], scope));
                case '<=':
                  return toNumber(execute(children[0], scope)) <= toNumber(execute(children[1], scope));

                case '==':
                  return equal(execute(children[0], scope), execute(children[1], scope));
                case '===':
                  return strictlyEqual(execute(children[0], scope), execute(children[1], scope));
                case '!=':
                  return !equal(execute(children[0], scope), execute(children[1], scope));
                case '!==':
                  return !strictlyEqual(execute(children[0], scope), execute(children[1], scope));

                case '&&':
                  var result = void 0;
                  result = execute(children[0], scope);
                  if (!toBoolean(result)) return result;
                  return execute(children[1], scope);
                case '||':
                  result = execute(children[0], scope);
                  if (toBoolean(result)) return result;
                  return execute(children[1], scope);
                case '!':
                  return !toBoolean(execute(children[0], scope));

              }
              return null;
            }

            exports.default = {
              execute: execute
            };

            /***/
          },
          /* 10 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.ScrollHandler = exports.TimingHandler = exports.OrientationHandler = exports.PanHandler = undefined;

            var _pan = __webpack_require__(11);

            var _pan2 = _interopRequireDefault(_pan);

            var _orientation = __webpack_require__(13);

            var _orientation2 = _interopRequireDefault(_orientation);

            var _timing = __webpack_require__(16);

            var _timing2 = _interopRequireDefault(_timing);

            var _scroll = __webpack_require__(17);

            var _scroll2 = _interopRequireDefault(_scroll);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            exports.PanHandler = _pan2.default;
            exports.OrientationHandler = _orientation2.default;
            exports.TimingHandler = _timing2.default;
            exports.ScrollHandler = _scroll2.default;

            /***/
          },
          /* 11 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _pan = __webpack_require__(12);

            var _pan2 = _interopRequireDefault(_pan);

            var _common = __webpack_require__(3);

            var _common2 = _interopRequireDefault(_common);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            function _possibleConstructorReturn(self, call) {
              if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
              }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var PanHandler = function (_CommonHandler) {
              _inherits(PanHandler, _CommonHandler);

              function PanHandler(binding) {
                _classCallCheck(this, PanHandler);

                var _this = _possibleConstructorReturn(this, (PanHandler.__proto__ || Object.getPrototypeOf(PanHandler)).call(this, binding));

                _this._onPan = function (e) {
                  var x = e.deltaX;
                  var y = e.deltaY;
                  var _this$binding$options = _this.binding.options.props,
                      props = _this$binding$options === undefined ? [] : _this$binding$options;

                  props.forEach(function (prop) {
                    var element = prop.element,
                        property = prop.property,
                        expression = prop.expression;

                    var transformed = JSON.parse(expression.transformed);
                    var val = _this.binding.getValue({ x: x, y: y }, transformed);
                    _this.binding.setProperty(element, property, val);
                  });
                };

                _this._onPanStart = function () {
                  _this.binding.callback({ deltaX: 0, state: 'start', deltaY: 0 });
                };

                _this._onPanEnd = function (e) {
                  _this.binding.callback({ deltaX: parseInt(e.deltaX), state: 'end', deltaY: parseInt(e.deltaY) });
                };

                var anchor = binding.options.anchor;

                var panGesture = _this.panGesture = new _pan2.default(anchor, binding.options.options);
                panGesture.on('pan', _this._onPan);
                panGesture.on('panstart', _this._onPanStart);
                panGesture.on('panend', _this._onPanEnd);
                return _this;
              }

              _createClass(PanHandler, [{
                key: 'destroy',
                value: function destroy() {
                  var panGesture = this.panGesture;
                  panGesture.off('pan', this._onPan);
                  panGesture.off('panstart', this._onPanStart);
                  panGesture.off('panend', this._onPanEnd);
                  panGesture.destroy();
                }
              }]);

              return PanHandler;
            }(_common2.default);

            exports.default = PanHandler;
            ;

            /***/
          },
          /* 12 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _simpleLodash = __webpack_require__(1);

            var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

            var _objectAssign = __webpack_require__(0);

            var _objectAssign2 = _interopRequireDefault(_objectAssign);

            var _utils = __webpack_require__(2);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            var abs = Math.abs;

            var DEFAULT_CONFIG = {
              thresholdX: 10,
              thresholdY: 10,
              touchAction: 'auto',
              touchActionRatio: 1 / 2
            };

            var PanGesture = function () {
              function PanGesture(el, config) {
                var _this = this;

                _classCallCheck(this, PanGesture);

                this.startX = null;
                this.startY = null;
                this.panStartX = null;
                this.panStartY = null;
                this.deltaX = 0;
                this.deltaY = 0;
                this.events = {
                  'panstart': [],
                  'pan': [],
                  'panend': [],
                  'pancancel': []
                };

                this.onTouchStart = function (e) {
                  // e.preventDefault();
                };

                this.handlePanStart = function (e) {
                  e.preventDefault();
                  if (_this.panStartX === null || _this.panStartY === null) {
                    _this.panStartX = (0, _utils.pxTo750)(e.touches[0].pageX);
                    _this.panStartY = (0, _utils.pxTo750)(e.touches[0].pageY);
                    _this.events.panstart.forEach(function (handler) {
                      handler(e);
                    });
                    return;
                  }
                };

                this.onTouchMove = function (e) {
                  var _config = _this.config,
                      thresholdX = _config.thresholdX,
                      thresholdY = _config.thresholdY,
                      touchAction = _config.touchAction,
                      touchActionRatio = _config.touchActionRatio;

                  if (_this.startX === null || _this.startY === null) {
                    _this.startX = e.touches[0].pageX;
                    _this.startY = e.touches[0].pageY;
                  }
                  var dx = e.touches[0].pageX - _this.startX;
                  var dy = e.touches[0].pageY - _this.startY;

                  switch (touchAction) {
                    case 'auto':
                      e.preventDefault();
                      if (abs(dx) >= thresholdX || abs(dy) >= thresholdY) {
                        _this.handlePanStart(e);
                      }
                      break;
                    case 'pan-x':
                      if (abs(dx) >= thresholdX && abs(dy / dx) < touchActionRatio && abs(dy) < thresholdY) {
                        _this.handlePanStart(e);
                      }
                      break;
                    case 'pan-y':
                      if (abs(dy) >= thresholdY && abs(dx / dy) < touchActionRatio && abs(dx) < thresholdX) {
                        _this.handlePanStart(e);
                      }
                      break;
                  }

                  if (_this.panStartX !== null && _this.panStartY !== null) {
                    switch (touchAction) {
                      case 'auto':
                        _this.deltaX = (0, _utils.pxTo750)(e.touches[0].pageX) - _this.panStartX;
                        _this.deltaY = (0, _utils.pxTo750)(e.touches[0].pageY) - _this.panStartY;
                        break;
                      case 'pan-x':
                        _this.deltaX = (0, _utils.pxTo750)(e.touches[0].pageX) - _this.panStartX;
                        _this.deltaY = 0;
                        break;
                      case 'pan-y':
                        _this.deltaX = 0;
                        _this.deltaY = (0, _utils.pxTo750)(e.touches[0].pageY) - _this.panStartY;
                        break;
                    }
                    e.deltaX = _this.deltaX;
                    e.deltaY = _this.deltaY;
                    _this.events.pan.forEach(function (handler) {
                      handler(e);
                    });
                  }
                };

                this.onTouchEnd = function (e) {
                  e.deltaX = _this.deltaX;
                  e.deltaY = _this.deltaY;
                  _this.events.panend.forEach(function (handler) {
                    handler(e);
                  });
                };

                this.onTouchCancel = function (e) {
                  e.deltaX = _this.deltaX;
                  e.deltaY = _this.deltaY;
                  _this.events.pancancel.forEach(function (handler) {
                    handler(e);
                  });
                };

                this.el = el;
                this.config = (0, _objectAssign2.default)(DEFAULT_CONFIG, config);
                this.el.addEventListener('touchstart', this.onTouchStart);
                this.el.addEventListener('touchmove', this.onTouchMove);
                this.el.addEventListener('touchend', this.onTouchEnd);
                this.el.addEventListener('touchcancel', this.onTouchCancel);
              }

              _createClass(PanGesture, [{
                key: 'on',
                value: function on(fn, handler) {
                  if (!this.events[fn]) return;
                  this.events[fn].push(handler);
                }
              }, {
                key: 'destroy',
                value: function destroy() {
                  this.el.removeEventListener('touchstart', this.onTouchStart);
                  this.el.removeEventListener('touchmove', this.onTouchMove);
                  this.el.removeEventListener('touchend', this.onTouchEnd);
                  this.el.removeEventListener('touchcancel', this.onTouchCancel);
                  this.offAll();
                  this.startX = null;
                  this.startY = null;
                  this.panStartX = null;
                  this.panStartY = null;
                }
              }, {
                key: 'offAll',
                value: function offAll() {
                  var _this2 = this;

                  _simpleLodash2.default.map(this.events, function (handlers, fn) {
                    _simpleLodash2.default.forEach(handlers, function (handler) {
                      _this2.off(fn, handler);
                    });
                  });
                }
              }, {
                key: 'off',
                value: function off(fn, handler) {
                  if (!fn) return;
                  if (fn && this.events[fn] && this.events[fn].length) {
                    if (!handler) return;
                    var h = _simpleLodash2.default.find(this.events[fn], function (o) {
                      return o === handler;
                    });
                    var i = _simpleLodash2.default.findIndex(this.events[fn], function (o) {
                      return o === handler;
                    });
                    if (h) {
                      this.events[fn].splice(i, 1);
                    }
                  }
                }
              }]);

              return PanGesture;
            }();

            exports.default = PanGesture;

            /***/
          },
          /* 13 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _vector = __webpack_require__(5);

            var _vector2 = _interopRequireDefault(_vector);

            var _orientation_controls = __webpack_require__(14);

            var _orientation_controls2 = _interopRequireDefault(_orientation_controls);

            var _math = __webpack_require__(7);

            var _math2 = _interopRequireDefault(_math);

            var _animationUtil = __webpack_require__(4);

            var _common = __webpack_require__(3);

            var _common2 = _interopRequireDefault(_common);

            var _objectAssign = __webpack_require__(0);

            var _objectAssign2 = _interopRequireDefault(_objectAssign);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            function _possibleConstructorReturn(self, call) {
              if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
              }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var OrientationHandler = function (_CommonHandler) {
              _inherits(OrientationHandler, _CommonHandler);

              function OrientationHandler(binding) {
                _classCallCheck(this, OrientationHandler);

                var _this = _possibleConstructorReturn(this, (OrientationHandler.__proto__ || Object.getPrototypeOf(OrientationHandler)).call(this, binding));

                _this.binding = null;
                _this.control = null;
                _this.start = null;
                _this.timer = null;

                _this._onOrientation = function (e) {
                  var props = _this.binding.options.props;

                  props.forEach(function (prop) {
                    var element = prop.element,
                        property = prop.property,
                        expression = prop.expression;

                    var transformed = JSON.parse(expression.transformed);
                    var val = _this.binding.getValue(e, transformed);
                    _this.binding.setProperty(element, property, val);
                  });
                };

                _this.options = (0, _objectAssign2.default)({
                  sceneType: '2d'
                }, binding.options.options);
                _this.binding = binding;
                if (_this.options.sceneType.toLowerCase() === '2d') {
                  _this.controlX = new _orientation_controls2.default({ beta: 90 });
                  _this.controlY = new _orientation_controls2.default({ gamma: 90, alpha: 0 });
                } else {
                  _this.control = new _orientation_controls2.default();
                }
                _this.run();
                return _this;
              }

              _createClass(OrientationHandler, [{
                key: 'run',
                value: function run() {
                  var _this2 = this;

                  // 2d场景
                  if (this.options.sceneType.toLowerCase() === '2d') {
                    this.controlX.update();
                    this.controlY.update();
                    var _controlX$deviceOrien = this.controlX.deviceOrientation,
                        alpha = _controlX$deviceOrien.alpha,
                        beta = _controlX$deviceOrien.beta,
                        gamma = _controlX$deviceOrien.gamma,
                        dalpha = _controlX$deviceOrien.dalpha,
                        dbeta = _controlX$deviceOrien.dbeta,
                        dgamma = _controlX$deviceOrien.dgamma;

                    var vecX = new _vector2.default(0, 0, 1);
                    vecX.applyQuaternion(this.controlX.quaternion);
                    var vecY = new _vector2.default(0, 1, 1);
                    vecY.applyQuaternion(this.controlY.quaternion);
                    // 0,180 -> -90,90
                    var x = _math2.default.radToDeg(Math.acos(vecX.x)) - 90;
                    var y = _math2.default.radToDeg(Math.acos(vecY.y)) - 90;
                    if (!this.start && !isNaN(x) && !isNaN(y)) {
                      this.start = {
                        x: x,
                        y: y
                      };
                    }
                    if (this.start) {
                      var dx = x - this.start.x;
                      var dy = y - this.start.y;
                      this._onOrientation({
                        x: x, y: y, dx: dx, dy: dy, alpha: alpha, beta: beta, gamma: gamma, dalpha: dalpha, dbeta: dbeta, dgamma: dgamma
                      });
                    }
                  } else {
                    // 3d场景
                    this.control.update();
                    var _control$deviceOrient = this.control.deviceOrientation,
                        _alpha = _control$deviceOrient.alpha,
                        _beta = _control$deviceOrient.beta,
                        _gamma = _control$deviceOrient.gamma,
                        _dalpha = _control$deviceOrient.dalpha,
                        _dbeta = _control$deviceOrient.dbeta,
                        _dgamma = _control$deviceOrient.dgamma;
                    var _control$quaternion = this.control.quaternion,
                        _x = _control$quaternion.x,
                        _y = _control$quaternion.y,
                        z = _control$quaternion.z;

                    this._onOrientation({ alpha: _alpha, beta: _beta, gamma: _gamma, dalpha: _dalpha, dbeta: _dbeta, dgamma: _dgamma, x: _x, y: _y, z: z });
                  }
                  this.timer = (0, _animationUtil.raf)(function () {
                    _this2.run();
                  });
                }
              }, {
                key: 'destroy',
                value: function destroy() {
                  if (this.timer) {
                    (0, _animationUtil.cancelRAF)(this.timer);
                    this.timer = null;
                  }
                }
              }]);

              return OrientationHandler;
            }(_common2.default);

            exports.default = OrientationHandler;

            /***/
          },
          /* 14 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _quaternion = __webpack_require__(6);

            var _quaternion2 = _interopRequireDefault(_quaternion);

            var _vector = __webpack_require__(5);

            var _vector2 = _interopRequireDefault(_vector);

            var _euler = __webpack_require__(15);

            var _euler2 = _interopRequireDefault(_euler);

            var _math = __webpack_require__(7);

            var _math2 = _interopRequireDefault(_math);

            var _objectAssign = __webpack_require__(0);

            var _objectAssign2 = _interopRequireDefault(_objectAssign);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function isNaNOrUndefined(n) {
              return n === undefined || isNaN(n) || n === null;
            }

            function DeviceOrientationControls(object) {
              var scope = this;
              this.object = (0, _objectAssign2.default)({
                alphaOffsetAngle: 0,
                betaOffsetAngle: 0,
                gammaOffsetAngle: 0
              }, object);

              this.alphaOffsetAngle = this.object.alphaOffsetAngle;
              this.betaOffsetAngle = this.object.betaOffsetAngle;
              this.gammaOffsetAngle = this.object.gammaOffsetAngle;

              this.quaternion = new _quaternion2.default(0, 0, 0, 1);
              this.enabled = true;
              this.deviceOrientation = {};
              this.screenOrientation = 0;
              this.start = null;

              this.recordsAlpha = [];

              function formatRecords(records, threshold) {
                var l = records.length;
                var times = 0;
                if (l > 1) {
                  for (var i = 0; i < l; i++) {
                    if (records[i - 1] != undefined && records[i] != undefined) {
                      if (records[i] - records[i - 1] < -threshold / 2) {
                        times = Math.floor(records[i - 1] / threshold) + 1;
                        records[i] = records[i] + times * threshold;
                      }
                      if (records[i] - records[i - 1] > threshold / 2) {
                        records[i] = records[i] - threshold;
                      }
                    }
                  }
                }
                return records;
              }

              var onDeviceOrientationChangeEvent = function onDeviceOrientationChangeEvent(e) {

                var alpha = e.alpha;
                var beta = e.beta;
                var gamma = e.gamma;
                var recordsAlpha = scope.recordsAlpha;

                if (!scope.start) {
                  scope.start = {
                    alpha: alpha,
                    beta: beta,
                    gamma: gamma
                  };
                }
                recordsAlpha.push(alpha);
                if (recordsAlpha.length > 5) {
                  recordsAlpha = formatRecords(recordsAlpha, 360);
                  recordsAlpha.shift();
                }

                var formatAlpha = (recordsAlpha[recordsAlpha.length - 1] - scope.start.alpha) % 360;
                if (!isNaNOrUndefined(alpha) && !isNaNOrUndefined(beta) && !isNaNOrUndefined(gamma)) {
                  scope.enabled = true;
                }

                scope.deviceOrientation = {
                  alpha: alpha,
                  beta: beta,
                  gamma: gamma,
                  formatAlpha: formatAlpha,
                  dalpha: alpha - scope.start.alpha,
                  dbeta: beta - scope.start.beta,
                  dgamma: gamma - scope.start.gamma
                };
              };

              var onScreenOrientationChangeEvent = function onScreenOrientationChangeEvent() {

                scope.screenOrientation = window.orientation || 0;
              };

              // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

              var setObjectQuaternion = function () {

                var zee = new _vector2.default(0, 0, 1);

                var euler = new _euler2.default();

                var q0 = new _quaternion2.default();

                var q1 = new _quaternion2.default(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)); // - PI/2 around the x-axis

                return function (quaternion, alpha, beta, gamma, orient) {

                  euler.set(beta, alpha, -gamma, 'YXZ'); // 'ZXY' for the device, but 'YXZ' for us

                  quaternion.setFromEuler(euler); // orient the device

                  quaternion.multiply(q1); // camera looks out the back of the device, not the top

                  quaternion.multiply(q0.setFromAxisAngle(zee, -orient)); // adjust for screen orientation
                };
              }();

              this.connect = function () {
                onScreenOrientationChangeEvent(); // run once on load
                window.addEventListener('orientationchange', onScreenOrientationChangeEvent, false);
                window.addEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
              };

              this.disconnect = function () {
                window.removeEventListener('orientationchange', onScreenOrientationChangeEvent, false);
                window.removeEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
                scope.enabled = false;
              };

              this.update = function () {
                if (scope.enabled === false) return;
                var alpha = !isNaNOrUndefined(scope.deviceOrientation.formatAlpha) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.alpha) ? scope.object.alpha : scope.deviceOrientation.formatAlpha + scope.alphaOffsetAngle) : 0; // Z
                var beta = !isNaNOrUndefined(scope.deviceOrientation.beta) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.beta) ? scope.object.beta : scope.deviceOrientation.beta + scope.betaOffsetAngle) : 0; // X'
                var gamma = !isNaNOrUndefined(scope.deviceOrientation.gamma) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.gamma) ? scope.object.gamma : scope.deviceOrientation.gamma + scope.gammaOffsetAngle) : 0; // Y''
                var orient = scope.screenOrientation ? _math2.default.degToRad(scope.screenOrientation) : 0; // O
                setObjectQuaternion(scope.quaternion, alpha, beta, gamma, orient);
              };

              this.updateAlphaOffsetAngle = function (angle) {
                this.alphaOffsetAngle = angle;
                this.update();
              };
              this.updateBetaOffsetAngle = function (angle) {
                this.betaOffsetAngle = angle;
                this.update();
              };
              this.updateGammaOffsetAngle = function (angle) {
                this.gammaOffsetAngle = angle;
                this.update();
              };

              this.dispose = function () {
                this.disconnect();
              };

              this.connect();
            };

            exports.default = DeviceOrientationControls;

            /***/
          },
          /* 15 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            var Euler = function () {
              function Euler(x, y, z, order) {
                _classCallCheck(this, Euler);

                this.isEuler = true;
                this._x = 0;
                this._y = 0;
                this._z = 0;

                this._x = x || 0;
                this._y = y || 0;
                this._z = z || 0;
                this._order = order || Euler.DefaultOrder;
              }

              _createClass(Euler, [{
                key: 'set',
                value: function set(x, y, z, order) {
                  this._x = x;
                  this._y = y;
                  this._z = z;
                  this._order = order || this._order;
                  this.onChangeCallback();
                  return this;
                }
              }, {
                key: 'onChange',
                value: function onChange(callback) {
                  this.onChangeCallback = callback;
                  return this;
                }
              }, {
                key: 'onChangeCallback',
                value: function onChangeCallback() {}
              }, {
                key: 'order',
                get: function get() {
                  return this._order;
                },
                set: function set(value) {
                  this._order = value;
                  this.onChangeCallback();
                }
              }]);

              return Euler;
            }();

            Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
            Euler.DefaultOrder = 'XYZ';
            exports.default = Euler;

            /***/
          },
          /* 16 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _extends = Object.assign || function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }return target;
            };

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _animationUtil = __webpack_require__(4);

            var _animationUtil2 = _interopRequireDefault(_animationUtil);

            var _common = __webpack_require__(3);

            var _common2 = _interopRequireDefault(_common);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            function _possibleConstructorReturn(self, call) {
              if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
              }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var TimingHandler = function (_CommonHandler) {
              _inherits(TimingHandler, _CommonHandler);

              function TimingHandler(binding) {
                _classCallCheck(this, TimingHandler);

                var _this = _possibleConstructorReturn(this, (TimingHandler.__proto__ || Object.getPrototypeOf(TimingHandler)).call(this, binding));

                var _this$binding$options = _this.binding.options,
                    _this$binding$options2 = _this$binding$options.props,
                    props = _this$binding$options2 === undefined ? [] : _this$binding$options2,
                    exitExpression = _this$binding$options.exitExpression;

                props.forEach(function (prop) {
                  var expression = prop.expression;

                  if (expression && expression.transformed && typeof expression.transformed === 'string') {
                    expression.transformed = JSON.parse(expression.transformed);
                  }
                });

                var exitTransformed = void 0;
                if (exitExpression && exitExpression.transformed) {
                  exitTransformed = JSON.parse(exitExpression.transformed);
                }

                var animation = _this.animation = new _animationUtil2.default({
                  duration: Infinity,
                  easing: 'linear',
                  onStart: function onStart() {
                    _this.binding.callback({ state: 'start', t: 0 });
                  },
                  onRun: function onRun(e) {
                    if (exitTransformed && _this.binding.getValue({ t: e.t }, exitTransformed)) {
                      _this.animation.stop();
                    }
                    props.forEach(function (prop) {
                      _this.animate(_extends({
                        exitTransformed: exitTransformed,
                        t: e.t
                      }, prop));
                    });
                  },
                  onStop: function onStop(e) {
                    _this.binding.callback({ state: 'exit', t: e.t - 1000 / 60 });
                  }
                });
                animation.run();
                return _this;
              }

              _createClass(TimingHandler, [{
                key: 'animate',
                value: function animate(args) {
                  var element = args.element,
                      property = args.property,
                      expression = args.expression,
                      t = args.t;

                  var value = this.binding.getValue({ t: t }, expression.transformed);
                  this.binding.setProperty(element, property, value);
                }
              }, {
                key: 'destroy',
                value: function destroy() {
                  if (this.animation) {
                    this.animation.stop();
                  }
                }
              }]);

              return TimingHandler;
            }(_common2.default);

            exports.default = TimingHandler;

            /***/
          },
          /* 17 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _common = __webpack_require__(3);

            var _common2 = _interopRequireDefault(_common);

            var _utils = __webpack_require__(2);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            function _possibleConstructorReturn(self, call) {
              if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
              }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            function isTurner(prev, now) {

              return prev / now < 0;
            }

            var ScrollHandler = function (_CommonHandler) {
              _inherits(ScrollHandler, _CommonHandler);

              function ScrollHandler(binding) {
                _classCallCheck(this, ScrollHandler);

                var _this = _possibleConstructorReturn(this, (ScrollHandler.__proto__ || Object.getPrototypeOf(ScrollHandler)).call(this, binding));

                _this.dx = 0;
                _this.dy = 0;
                _this.prevX = null;
                _this.prevY = null;
                _this.tx = 0;
                _this.ty = 0;
                _this.tdx = 0;
                _this.tdy = 0;

                _this._onScroll = function (e) {
                  var props = _this.binding.options.props;

                  var callback = _this.binding.callback;
                  var x = (0, _utils.pxTo750)(e.target.scrollLeft);
                  var y = (0, _utils.pxTo750)(e.target.scrollTop);
                  props.forEach(function (prop) {
                    var element = prop.element,
                        property = prop.property,
                        expression = prop.expression;

                    var transformed = JSON.parse(expression.transformed);
                    var val = _this.binding.getValue({
                      x: x,
                      y: y,
                      dx: _this.dx,
                      dy: _this.dy,
                      tdx: _this.tdx,
                      tdy: _this.tdy
                    }, transformed);

                    _this.binding.setProperty(element, property, val);
                  });

                  if (_this.prevX !== null && _this.prevY !== null) {
                    var dx = x - _this.prevX;
                    var dy = y - _this.prevY;
                    var cbParams = {
                      x: x,
                      y: y
                    };
                    // 拐点
                    if (isTurner(_this.dx, dx)) {
                      _this.tx = x;
                      cbParams.state = 'turn';
                    }
                    if (isTurner(_this.dy, dy)) {
                      _this.ty = y;
                      cbParams.state = 'turn';
                    }

                    _this.dx = cbParams.dx = x - _this.prevX;
                    _this.dy = cbParams.dy = y - _this.prevY;
                    _this.tdx = cbParams.tdx = x - _this.tx;
                    _this.tdy = cbParams.tdy = y - _this.ty;
                    if (cbParams.state) {
                      callback(cbParams);
                    }
                  }

                  _this.prevX = x;
                  _this.prevY = y;
                };

                var anchor = binding.options.anchor;

                _this.tx = (0, _utils.pxTo750)(anchor.scrollLeft);
                _this.ty = (0, _utils.pxTo750)(anchor.scrollTop);
                anchor.addEventListener('scroll', _this._onScroll);
                return _this;
              }

              _createClass(ScrollHandler, [{
                key: 'destroy',
                value: function destroy() {
                  var anchor = this.binding.options.anchor;

                  anchor.removeEventListener('scroll', this._onScroll);
                }
              }]);

              return ScrollHandler;
            }(_common2.default);

            exports.default = ScrollHandler;

            /***/
          },
          /* 18 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _simpleLodash = __webpack_require__(1);

            var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

            var _animationUtil = __webpack_require__(4);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            // inset function
            function colorToDecimal(hexColor) {
              var hex = hexColor.replace(/'|"|#/g, '');
              return parseInt(hex, 16);
            }

            function decToHex(dec) {
              var hex = dec.toString(16);
              var a = [];
              for (var i = 0; i < 6 - hex.length; i++) {
                a.push('0');
              }
              return a.join('') + hex;
            }

            function parseColor(hexColor) {
              var hex = hexColor.replace(/'|"|#/g, '');
              hex = hex.length === 3 ? [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]].join('') : hex;
              var r = '' + hex[0] + hex[1];
              var g = '' + hex[2] + hex[3];
              var b = '' + hex[4] + hex[5];
              return {
                r: r,
                g: g,
                b: b,
                dr: colorToDecimal(r),
                dg: colorToDecimal(g),
                db: colorToDecimal(b)
              };
            }

            var Fn = {
              max: Math.max,
              min: Math.min,
              sin: Math.sin,
              cos: Math.cos,
              tan: Math.tan,
              sqrt: Math.sqrt,
              cbrt: Math.cbrt,
              log: Math.log,
              abs: Math.abs,
              atan: Math.atan,
              floor: Math.floor,
              ceil: Math.ceil,
              pow: Math.pow,
              exp: Math.exp,
              PI: Math.PI,
              E: Math.E,
              acos: Math.acos,
              asin: Math.asin,
              sign: Math.sign,
              atan2: Math.atan2,
              round: Math.round,
              rgb: function rgb(r, g, b) {
                return 'rgb(' + parseInt(r) + ',' + parseInt(g) + ',' + parseInt(b) + ')';
              },
              rgba: function rgba(r, g, b, a) {
                return 'rgb(' + parseInt(r) + ',' + parseInt(g) + ',' + parseInt(b) + ',' + a + ')';
              },
              getArgs: function getArgs() {
                return arguments;
              },
              evaluateColor: function evaluateColor(colorFrom, colorTo, percent) {
                percent = percent > 1 ? 1 : percent;
                var from = parseColor(colorFrom);
                var to = parseColor(colorTo);
                var dr = parseInt((to.dr - from.dr) * percent + from.dr);
                var dg = parseInt((to.dg - from.dg) * percent + from.dg);
                var db = parseInt((to.db - from.db) * percent + from.db);
                var resDec = dr * 16 * 16 * 16 * 16 + dg * 16 * 16 + db;
                return '#' + decToHex(resDec);
              }
            };

            // inset all easing functions
            _simpleLodash2.default.map(_animationUtil.Easing, function (v, k) {
              if (k !== 'cubicBezier') {
                Fn[k] = function (t, begin, offset, duration) {
                  t = Math.max(Math.min(t / duration, 1));
                  return v(t) * offset + begin;
                };
              }
            });

            Fn.cubicBezier = function (t, begin, offset, duration, x1, y1, x2, y2) {
              t = Math.max(Math.min(t / duration, 1));
              var epsilon = 1000 / 60 / duration / 4;
              return (0, _animationUtil.Bezier)(x1, y1, x2, y2, epsilon)(t) * offset + begin; // eslint-disable-line
            };

            exports.default = Fn;

            /***/
          }]
          /******/)
        );
      });

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2017/10/21.
 */

var CHECKED = exports.CHECKED = 'https://gw.alicdn.com/tfs/TB14fp2pwMPMeJjy1XbXXcwxVXa-72-72.png';
var UNCHECKED = exports.UNCHECKED = 'https://gw.alicdn.com/tfs/TB1U6SbpwMPMeJjy1XcXXXpppXa-72-72.png';
var CHECKED_DISABLED = exports.CHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1aPabpwMPMeJjy1XcXXXpppXa-72-72.png';
var UNCHECKED_DISABLED = exports.UNCHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1lTuzpwoQMeJjy0FoXXcShVXa-72-72.png';

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-cell', {
    attrs: {
      "hasTopBorder": _vm.hasTopBorder,
      "accessible": true,
      "ariaLabel": (_vm.title + ",状态为" + (_vm.checked ? '已选中' : '未选中') + "," + (_vm.disabled ? '不可更改' : '点击可切换'))
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('text', {
    staticClass: ["title-text"],
    style: {
      color: _vm.textColor
    },
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _c('image', {
    staticClass: ["checkbox"],
    attrs: {
      "slot": "value",
      "src": _vm.checkIcon
    },
    slot: "value"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: {
      back: _vm.bg
    }
  }, [_c('WxcMinibar', {
    attrs: {
      "title": "设置"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "75px",
      fontStretch: "condensed"
    },
    attrs: {
      "slot": "left"
    },
    on: {
      "click": function($event) {
        _vm.set('login')
      }
    },
    slot: "left"
  }, [_vm._v("<")])]), _c('div', [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("设置")]), _c('div', {
    class: {
      bag: _vm.bg
    }
  }, [_c('WxcCheckbox', {
    attrs: {
      "title": "夜间模式"
    },
    on: {
      "wxcCheckBoxItemChecked": _vm.ckbox
    }
  }), _c('WxcCheckbox', {
    attrs: {
      "title": "流量播放提醒"
    }
  }), _c('div', {
    staticClass: ["text2", "flex_row", "relative"],
    on: {
      "click": _vm.cache
    }
  }, [_c('text', {
    staticClass: ["fot"]
  }, [_vm._v("清除缓存")]), _c('text', {
    staticClass: ["inp", "fot"]
  }, [_vm._v(">")])])], 1)]), _c('div', [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("隐私")]), _c('div', {
    class: {
      bag: _vm.bg
    }
  }, [_c('WxcCheckbox', {
    attrs: {
      "title": "隐藏小记"
    }
  }), _c('WxcCheckbox', {
    attrs: {
      "title": "隐藏歌单"
    }
  }), _c('WxcCheckbox', {
    attrs: {
      "title": "隐藏其他收藏"
    }
  })], 1)]), _vm._m(0), _vm._m(1), _c('WxcDialog', {
    attrs: {
      "title": "确认要清除缓存？",
      "show": _vm.show
    },
    on: {
      "wxcDialogCancelBtnClicked": _vm.cancel,
      "wxcDialogConfirmBtnClicked": _vm.confirmation
    }
  }), _c('div', {
    staticClass: ["botm"]
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("反馈")]), _c('div', [_c('div', {
    staticClass: ["text2", "flex_row", "relative"]
  }, [_c('text', {
    staticClass: ["fot"]
  }, [_vm._v("意见与反馈")]), _c('text', {
    staticClass: ["inp", "fot"]
  }, [_vm._v(">")])]), _c('div', {
    staticClass: ["text2", "flex_row", "relative"]
  }, [_c('text', {
    staticClass: ["fot"]
  }, [_vm._v("关注我们")]), _c('text', {
    staticClass: ["inp", "fot"]
  }, [_vm._v(">")])]), _c('div', {
    staticClass: ["text2", "flex_row", "relative"]
  }, [_c('text', {
    staticClass: ["fot"]
  }, [_vm._v("给一个评分")]), _c('text', {
    staticClass: ["inp", "fot"]
  }, [_vm._v(">")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["text1"]
  }, [_vm._v("关于")]), _c('div', {
    staticClass: ["text2", "flex_row", "relative"]
  }, [_c('text', {
    staticClass: ["fot"]
  }, [_vm._v("用户协议")]), _c('text', {
    staticClass: ["inp", "fot"]
  }, [_vm._v(">")])]), _c('div', {
    staticClass: ["text2", "relative"]
  }, [_c('text', {
    staticClass: ["fot"]
  }, [_vm._v("版本号")]), _c('text', [_vm._v("4.5.2")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(61)
)

/* script */
__vue_exports__ = __webpack_require__(62)

/* template */
var __vue_template__ = __webpack_require__(63)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\src\\components\\login\\register.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1ffa84d4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {
  "bgimg": {
    "backgroundImage": "linear-gradient(to top,#0074D9,#dddddd)"
  },
  "t": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "ta": {
    "width": "550",
    "height": "1000",
    "top": "100"
  },
  "tab": {
    "width": "500",
    "height": "80",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#006600",
    "borderRadius": "10",
    "marginTop": "20",
    "marginRight": 0,
    "marginBottom": "20",
    "marginLeft": 0,
    "textAlign": "center"
  }
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcMinibar = __webpack_require__(0);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcMinibar: _wxcMinibar2.default },
    data: function data() {
        return {};
    },
    created: function created() {},
    methods: {
        set: function set(e) {
            this.$router.push(e);
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bgimg"]
  }, [_c('WxcMinibar', {
    attrs: {
      "title": "登录"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "75px",
      fontStretch: "condensed"
    },
    attrs: {
      "slot": "left"
    },
    on: {
      "click": function($event) {
        _vm.set('login')
      }
    },
    slot: "left"
  }, [_vm._v("<")])]), _c('div', {
    staticClass: ["t"]
  }, [_c('div', {
    staticClass: ["ta"]
  }, [_vm._m(0), _vm._m(1), _vm._m(2), _c('div', [_c('text', [_vm._v("或者")]), _c('text', [_c('i'), _vm._v("使用手机号登录")], 1)])]), _vm._m(3)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tab"]
  }, [_c('text', [_vm._v("微信")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tab"]
  }, [_c('text', [_vm._v("微博")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tab"]
  }, [_c('text', [_vm._v("QQ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('text', [_vm._v("创建账户即代表您同意")])]), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('text', [_vm._v("使用条款和隐私政策")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(65)

/* template */
var __vue_template__ = __webpack_require__(66)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\src\\components\\test.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcDialog = __webpack_require__(1);

var _wxcDialog2 = _interopRequireDefault(_wxcDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { WxcDialog: _wxcDialog2.default },
    data: function data() {
        return {
            bg: false,
            show: false
        };
    },
    created: function created() {},
    methods: {
        open: function open() {
            this.show = true;
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('WxcDialog', {
    attrs: {
      "title": "标题",
      "content": "是是是",
      "show": _vm.show
    }
  }), _c('div', [_c('div', {
    on: {
      "click": _vm.open
    }
  }, [_c('text', [_vm._v("duihuakuang")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(68)
)

/* script */
__vue_exports__ = __webpack_require__(69)

/* template */
var __vue_template__ = __webpack_require__(74)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-567aab6a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _foter = __webpack_require__(70);

var _foter2 = _interopRequireDefault(_foter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'App',
  data: function data() {
    return {};
  },
  components: {
    fot: _foter2.default
  }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(71)
)

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(73)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\xampp\\htdocs\\my-weex\\src\\components\\foter.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3f7bc70a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = {
  "footer": {
    "width": "750",
    "height": "100",
    "borderTopStyle": "solid",
    "borderTopWidth": "1",
    "borderTopColor": "#696969",
    "backgroundColor": "#ffffff",
    "zIndex": 999
  },
  "wit33": {
    "width": 33
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//    import {WxcMinibar} from 'weex-ui';
exports.default = {
    data: function data() {
        return {};
    },
    created: function created() {},
    methods: {}
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["flex_row", "justify-around", "fixed-bottom", "footer"]
  }, [_c('div', {
    staticClass: ["wit33"]
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('text', [_vm._v("home")])])], 1), _c('div', {
    staticClass: ["wit33"]
  }, [_c('router-link', {
    attrs: {
      "to": "/all"
    }
  }, [_c('text', [_vm._v("ALL")])])], 1), _c('div', {
    staticClass: ["wit33"]
  }, [_c('router-link', {
    attrs: {
      "to": "/login"
    }
  }, [_c('text', [_vm._v("ME")])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('router-view'), _c('fot')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);