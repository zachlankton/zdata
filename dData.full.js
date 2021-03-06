/*
        d-data web directive
        written by: Zach Lankton & Gavin McGraw 2017       
*/

//DEPENDENCIES -- 
	// PouchDB 6.3.4		
		!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.PouchDB=e()}}(function(){var e;return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments.length;if(t){for(var n=[],r=-1;++r<t;)n[r]=arguments[r];return e.call(this,n)}return e.call(this,[])}}t.exports=r},{}],2:[function(e,t,n){(function(r){function o(){return!("undefined"==typeof window||!window||void 0===window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document&&"WebkitAppearance"in document.documentElement.style||"undefined"!=typeof window&&window&&window.console&&(console.firebug||console.exception&&console.table)||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),t){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,r)}}function a(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(e){}}function u(){var e;try{e=n.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}n=t.exports=e(3),n.log=a,n.formatArgs=i,n.save=s,n.load=u,n.useColors=o,n.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},n.enable(u())}).call(this,e(9))},{3:3,9:9}],3:[function(e,t,n){function r(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return n.colors[Math.abs(r)%n.colors.length]}function o(e){function t(){if(t.enabled){var e=t,r=+new Date,o=r-(c||r);e.diff=o,e.prev=c,e.curr=r,c=r;for(var i=new Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];i[0]=n.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(t,r){if("%%"===t)return t;s++;var o=n.formatters[r];if("function"==typeof o){var a=i[s];t=o.call(e,a),i.splice(s,1),s--}return t}),n.formatArgs.call(e,i);(t.log||n.log||console.log.bind(console)).apply(e,i)}}return t.namespace=e,t.enabled=n.enabled(e),t.useColors=n.useColors(),t.color=r(e),"function"==typeof n.init&&n.init(t),t}function i(e){n.save(e),n.names=[],n.skips=[];for(var t=("string"==typeof e?e:"").split(/[\s,]+/),r=t.length,o=0;o<r;o++)t[o]&&(e=t[o].replace(/\*/g,".*?"),"-"===e[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))}function a(){n.enable("")}function s(e){var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}n=t.exports=o.debug=o.default=o,n.coerce=u,n.disable=a,n.enable=i,n.enabled=s,n.humanize=e(8),n.names=[],n.skips=[],n.formatters={};var c},{8:8}],4:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function i(e){return"number"==typeof e}function a(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,i,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}if(n=this._events[e],s(n))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),n.apply(this,i)}else if(a(n))for(i=Array.prototype.slice.call(arguments,1),c=n.slice(),r=c.length,u=0;u<r;u++)c[u].apply(this,i);return!0},r.prototype.addListener=function(e,t){var n;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(n=s(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,i,s;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],i=n.length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(n)){for(s=i;s-- >0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],o(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],5:[function(e,t,n){(function(e){"use strict";function n(){f=!0;for(var e,t,n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}f=!1}function r(e){1!==l.push(e)||f||o()}var o,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,s=new i(n),u=e.document.createTextNode("");s.observe(u,{characterData:!0}),o=function(){u.data=a=++a%2}}else if(e.setImmediate||void 0===e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){n(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(n,0)};else{var c=new e.MessageChannel;c.port1.onmessage=n,o=function(){c.port2.postMessage(0)}}var f,l=[];t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],7:[function(e,t,n){"use strict";function r(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=_,this.queue=[],this.outcome=void 0,e!==r&&u(this,e)}function i(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function a(e,t,n){p(function(){var r;try{r=t(n)}catch(t){return v.reject(e,t)}r===e?v.reject(e,new TypeError("Cannot resolve promise with itself")):v.resolve(e,r)})}function s(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function u(e,t){function n(t){i||(i=!0,v.reject(e,t))}function r(t){i||(i=!0,v.resolve(e,t))}function o(){t(r,n)}var i=!1,a=c(o);"error"===a.status&&n(a.value)}function c(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}function f(e){return e instanceof this?e:v.resolve(new this(r),e)}function l(e){var t=new this(r);return v.reject(t,e)}function d(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,o=!1;if(!n)return this.resolve([]);for(var i=new Array(n),a=0,s=-1,u=new this(r);++s<n;)!function(e,r){function s(e){i[r]=e,++a!==n||o||(o=!0,v.resolve(u,i))}t.resolve(e).then(s,function(e){o||(o=!0,v.reject(u,e))})}(e[s],s);return u}function h(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,o=!1;if(!n)return this.resolve([]);for(var i=-1,a=new this(r);++i<n;)!function(e){t.resolve(e).then(function(e){o||(o=!0,v.resolve(a,e))},function(e){o||(o=!0,v.reject(a,e))})}(e[i]);return a}var p=e(5),v={},g=["REJECTED"],y=["FULFILLED"],_=["PENDING"];t.exports=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===y||"function"!=typeof t&&this.state===g)return this;var n=new this.constructor(r);if(this.state!==_){a(n,this.state===y?e:t,this.outcome)}else this.queue.push(new i(n,e,t));return n},i.prototype.callFulfilled=function(e){v.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){a(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){v.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){a(this.promise,this.onRejected,e)},v.resolve=function(e,t){var n=c(s,t);if("error"===n.status)return v.reject(e,n.value);var r=n.value;if(r)u(e,r);else{e.state=y,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},v.reject=function(e,t){e.state=g,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},o.resolve=f,o.reject=l,o.all=d,o.race=h},{5:5}],8:[function(e,t,n){function r(e){if(e=String(e),!(e.length>1e4)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*l;case"days":case"day":case"d":return n*f;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*u;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function o(e){return e>=f?Math.round(e/f)+"d":e>=c?Math.round(e/c)+"h":e>=u?Math.round(e/u)+"m":e>=s?Math.round(e/s)+"s":e+"ms"}function i(e){return a(e,f,"day")||a(e,c,"hour")||a(e,u,"minute")||a(e,s,"second")||e+" ms"}function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var s=1e3,u=60*s,c=60*u,f=24*c,l=365.25*f;t.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return r(e);if("number"===n&&!1===isNaN(e))return t.long?i(e):o(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],9:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function s(){g&&p&&(g=!1,p.length?v=p.concat(v):y=-1,v.length&&u())}function u(){if(!g){var e=i(s);g=!0;for(var t=v.length;t;){for(p=v,v=[];++y<t;)p&&p[y].run();y=-1,t=v.length}p=null,g=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var l,d,h=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var p,v=[],g=!1,y=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new c(e,t)),1!==v.length||g||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=f,h.addListener=f,h.once=f,h.off=f,h.removeListener=f,h.removeAllListeners=f,h.emit=f,h.prependListener=f,h.prependOnceListener=f,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],10:[function(t,n,r){!function(t){if("object"==typeof r)n.exports=t();else if("function"==typeof e&&e.amd)e(t);else{var o;try{o=window}catch(e){o=self}o.SparkMD5=t()}}(function(e){"use strict";function t(e,t){var n=e[0],r=e[1],o=e[2],i=e[3];n+=(r&o|~r&i)+t[0]-680876936|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+t[1]-389564586|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+t[2]+606105819|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+t[3]-1044525330|0,r=(r<<22|r>>>10)+o|0,n+=(r&o|~r&i)+t[4]-176418897|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+t[5]+1200080426|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+t[6]-1473231341|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+t[7]-45705983|0,r=(r<<22|r>>>10)+o|0,n+=(r&o|~r&i)+t[8]+1770035416|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+t[9]-1958414417|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+t[10]-42063|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+t[11]-1990404162|0,r=(r<<22|r>>>10)+o|0,n+=(r&o|~r&i)+t[12]+1804603682|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+t[13]-40341101|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+t[14]-1502002290|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+t[15]+1236535329|0,r=(r<<22|r>>>10)+o|0,n+=(r&i|o&~i)+t[1]-165796510|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+t[6]-1069501632|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+t[11]+643717713|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+t[0]-373897302|0,r=(r<<20|r>>>12)+o|0,n+=(r&i|o&~i)+t[5]-701558691|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+t[10]+38016083|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+t[15]-660478335|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+t[4]-405537848|0,r=(r<<20|r>>>12)+o|0,n+=(r&i|o&~i)+t[9]+568446438|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+t[14]-1019803690|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+t[3]-187363961|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+t[8]+1163531501|0,r=(r<<20|r>>>12)+o|0,n+=(r&i|o&~i)+t[13]-1444681467|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+t[2]-51403784|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+t[7]+1735328473|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+t[12]-1926607734|0,r=(r<<20|r>>>12)+o|0,n+=(r^o^i)+t[5]-378558|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+t[8]-2022574463|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+t[11]+1839030562|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+t[14]-35309556|0,r=(r<<23|r>>>9)+o|0,n+=(r^o^i)+t[1]-1530992060|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+t[4]+1272893353|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+t[7]-155497632|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+t[10]-1094730640|0,r=(r<<23|r>>>9)+o|0,n+=(r^o^i)+t[13]+681279174|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+t[0]-358537222|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+t[3]-722521979|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+t[6]+76029189|0,r=(r<<23|r>>>9)+o|0,n+=(r^o^i)+t[9]-640364487|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+t[12]-421815835|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+t[15]+530742520|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+t[2]-995338651|0,r=(r<<23|r>>>9)+o|0,n+=(o^(r|~i))+t[0]-198630844|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+t[7]+1126891415|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+t[14]-1416354905|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+t[5]-57434055|0,r=(r<<21|r>>>11)+o|0,n+=(o^(r|~i))+t[12]+1700485571|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+t[3]-1894986606|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+t[10]-1051523|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+t[1]-2054922799|0,r=(r<<21|r>>>11)+o|0,n+=(o^(r|~i))+t[8]+1873313359|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+t[15]-30611744|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+t[6]-1560198380|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+t[13]+1309151649|0,r=(r<<21|r>>>11)+o|0,n+=(o^(r|~i))+t[4]-145523070|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+t[11]-1120210379|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+t[2]+718787259|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+t[9]-343485551|0,r=(r<<21|r>>>11)+o|0,e[0]=n+e[0]|0,e[1]=r+e[1]|0,e[2]=o+e[2]|0,e[3]=i+e[3]|0}function n(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return n}function r(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return n}function o(e){var r,o,i,a,s,u,c=e.length,f=[1732584193,-271733879,-1732584194,271733878];for(r=64;r<=c;r+=64)t(f,n(e.substring(r-64,r)));for(e=e.substring(r-64),o=e.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<o;r+=1)i[r>>2]|=e.charCodeAt(r)<<(r%4<<3);if(i[r>>2]|=128<<(r%4<<3),r>55)for(t(f,i),r=0;r<16;r+=1)i[r]=0;return a=8*c,a=a.toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),u=parseInt(a[1],16)||0,i[14]=s,i[15]=u,t(f,i),f}function i(e){var n,o,i,a,s,u,c=e.length,f=[1732584193,-271733879,-1732584194,271733878];for(n=64;n<=c;n+=64)t(f,r(e.subarray(n-64,n)));for(e=n-64<c?e.subarray(n-64):new Uint8Array(0),o=e.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0;n<o;n+=1)i[n>>2]|=e[n]<<(n%4<<3);if(i[n>>2]|=128<<(n%4<<3),n>55)for(t(f,i),n=0;n<16;n+=1)i[n]=0;return a=8*c,a=a.toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),u=parseInt(a[1],16)||0,i[14]=s,i[15]=u,t(f,i),f}function a(e){var t,n="";for(t=0;t<4;t+=1)n+=p[e>>8*t+4&15]+p[e>>8*t&15];return n}function s(e){var t;for(t=0;t<e.length;t+=1)e[t]=a(e[t]);return e.join("")}function u(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function c(e,t){var n,r=e.length,o=new ArrayBuffer(r),i=new Uint8Array(o);for(n=0;n<r;n+=1)i[n]=e.charCodeAt(n);return t?i:o}function f(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function l(e,t,n){var r=new Uint8Array(e.byteLength+t.byteLength);return r.set(new Uint8Array(e)),r.set(new Uint8Array(t),e.byteLength),n?r:r.buffer}function d(e){var t,n=[],r=e.length;for(t=0;t<r-1;t+=2)n.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,n)}function h(){this.reset()}var p=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];return"5d41402abc4b2a76b9719d911017c592"!==s(o("hello"))&&function(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n},"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return e=0|e||0,e<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(n,r){var o,i,a,s,u=this.byteLength,c=t(n,u),f=u;return r!==e&&(f=t(r,u)),c>f?new ArrayBuffer(0):(o=f-c,i=new ArrayBuffer(o),a=new Uint8Array(i),s=new Uint8Array(this,c,o),a.set(s),i)}}(),h.prototype.append=function(e){return this.appendBinary(u(e)),this},h.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var r,o=this._buff.length;for(r=64;r<=o;r+=64)t(this._hash,n(this._buff.substring(r-64,r)));return this._buff=this._buff.substring(r-64),this},h.prototype.end=function(e){var t,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<o;t+=1)i[t>>2]|=r.charCodeAt(t)<<(t%4<<3);return this._finish(i,o),n=s(this._hash),e&&(n=d(n)),this.reset(),n},h.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},h.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},h.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},h.prototype._finish=function(e,n){var r,o,i,a=n;if(e[a>>2]|=128<<(a%4<<3),a>55)for(t(this._hash,e),a=0;a<16;a+=1)e[a]=0;r=8*this._length,r=r.toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(r[2],16),i=parseInt(r[1],16)||0,e[14]=o,e[15]=i,t(this._hash,e)},h.hash=function(e,t){return h.hashBinary(u(e),t)},h.hashBinary=function(e,t){var n=o(e),r=s(n);return t?d(r):r},h.ArrayBuffer=function(){this.reset()},h.ArrayBuffer.prototype.append=function(e){var n,o=l(this._buff.buffer,e,!0),i=o.length;for(this._length+=e.byteLength,n=64;n<=i;n+=64)t(this._hash,r(o.subarray(n-64,n)));return this._buff=n-64<i?new Uint8Array(o.buffer.slice(n-64)):new Uint8Array(0),this},h.ArrayBuffer.prototype.end=function(e){var t,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<o;t+=1)i[t>>2]|=r[t]<<(t%4<<3);return this._finish(i,o),n=s(this._hash),e&&(n=d(n)),this.reset(),n},h.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.ArrayBuffer.prototype.getState=function(){var e=h.prototype.getState.call(this);return e.buff=f(e.buff),e},h.ArrayBuffer.prototype.setState=function(e){return e.buff=c(e.buff,!0),h.prototype.setState.call(this,e)},h.ArrayBuffer.prototype.destroy=h.prototype.destroy,h.ArrayBuffer.prototype._finish=h.prototype._finish,h.ArrayBuffer.hash=function(e,t){var n=i(new Uint8Array(e)),r=s(n);return t?d(r):r},h})},{}],11:[function(e,t,n){var r=e(14),o=e(15),i=o;i.v1=r,i.v4=o,t.exports=i},{14:14,15:15}],12:[function(e,t,n){function r(e,t){var n=t||0,r=o;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}for(var o=[],i=0;i<256;++i)o[i]=(i+256).toString(16).substr(1);t.exports=r},{}],13:[function(e,t,n){(function(e){var n,r=e.crypto||e.msCrypto;if(r&&r.getRandomValues){var o=new Uint8Array(16);n=function(){return r.getRandomValues(o),o}}if(!n){var i=new Array(16);n=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],14:[function(e,t,n){function r(e,t,n){var r=t&&n||0,o=t||[];e=e||{};var a=void 0!==e.clockseq?e.clockseq:u,l=void 0!==e.msecs?e.msecs:(new Date).getTime(),d=void 0!==e.nsecs?e.nsecs:f+1,h=l-c+(d-f)/1e4;if(h<0&&void 0===e.clockseq&&(a=a+1&16383),(h<0||l>c)&&void 0===e.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=l,f=d,u=a,l+=122192928e5;var p=(1e4*(268435455&l)+d)%4294967296;o[r++]=p>>>24&255,o[r++]=p>>>16&255,o[r++]=p>>>8&255,o[r++]=255&p;var v=l/4294967296*1e4&268435455;o[r++]=v>>>8&255,o[r++]=255&v,o[r++]=v>>>24&15|16,o[r++]=v>>>16&255,o[r++]=a>>>8|128,o[r++]=255&a;for(var g=e.node||s,y=0;y<6;++y)o[r+y]=g[y];return t||i(o)}var o=e(13),i=e(12),a=o(),s=[1|a[0],a[1],a[2],a[3],a[4],a[5]],u=16383&(a[6]<<8|a[7]),c=0,f=0;t.exports=r},{12:12,13:13}],15:[function(e,t,n){function r(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var s=0;s<16;++s)t[r+s]=a[s];return t||i(a)}var o=e(13),i=e(12);t.exports=r},{12:12,13:13}],16:[function(e,t,n){"use strict";function r(e,t,n){var r=n[n.length-1];e===r.element&&(n.pop(),r=n[n.length-1]);var o=r.element,i=r.index;if(Array.isArray(o))o.push(e);else if(i===t.length-2){var a=t.pop();o[a]=e}else t.push(e)}n.stringify=function(e){var t=[];t.push({obj:e});for(var n,r,o,i,a,s,u,c,f,l,d,h="";n=t.pop();)if(r=n.obj,o=n.prefix||"",i=n.val||"",h+=o,i)h+=i;else if("object"!=typeof r)h+=void 0===r?null:JSON.stringify(r);else if(null===r)h+="null";else if(Array.isArray(r)){for(t.push({val:"]"}),a=r.length-1;a>=0;a--)s=0===a?"":",",t.push({obj:r[a],prefix:s});t.push({val:"["})}else{u=[];for(c in r)r.hasOwnProperty(c)&&u.push(c);for(t.push({val:"}"}),a=u.length-1;a>=0;a--)f=u[a],l=r[f],d=a>0?",":"",d+=JSON.stringify(f)+":",t.push({obj:l,prefix:d});t.push({val:"{"})}return h},n.parse=function(e){for(var t,n,o,i,a,s,u,c,f,l=[],d=[],h=0;;)if("}"!==(t=e[h++])&&"]"!==t&&void 0!==t)switch(t){case" ":case"\t":case"\n":case":":case",":break;case"n":h+=3,r(null,l,d);break;case"t":h+=3,r(!0,l,d);break;case"f":h+=4,r(!1,l,d);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"-":for(n="",h--;;){if(o=e[h++],!/[\d\.\-e\+]/.test(o)){h--;break}n+=o}r(parseFloat(n),l,d);break;case'"':for(i="",a=void 0,s=0;;){if('"'===(u=e[h++])&&("\\"!==a||s%2!=1))break;i+=u,a=u,"\\"===a?s++:s=0}r(JSON.parse('"'+i+'"'),l,d);break;case"[":c={element:[],index:l.length},l.push(c.element),d.push(c);break;case"{":f={element:{},index:l.length},l.push(f.element),d.push(f);break;default:throw new Error("unexpectedly reached end of input: "+t)}else{if(1===l.length)return l.pop();r(l.pop(),l,d)}}},{}],17:[function(e,t,n){(function(n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}function i(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}function a(e){if(e instanceof ArrayBuffer)return i(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}function s(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&go.call(n)==yo}function u(e){var t,n,r;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=u(e[n]);return t}if(e instanceof Date)return e.toISOString();if(o(e))return a(e);if(!s(e))return e;t={};for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=u(e[n]);void 0!==i&&(t[n]=i)}return t}function c(e){var t=!1;return so(function(n){if(t)throw new Error("once called more than once");t=!0,e.apply(this,n)})}function f(e){return so(function(t){t=u(t);var n=this,r="function"==typeof t[t.length-1]&&t.pop(),o=new vo(function(r,o){var i;try{var a=c(function(e,t){e?o(e):r(t)});t.push(a),i=e.apply(n,t),i&&"function"==typeof i.then&&r(i)}catch(e){o(e)}});return r&&o.then(function(e){r(null,e)},r),o})}function l(e,t,n){if(e.constructor.listeners("debug").length){for(var r=["api",e.name,t],o=0;o<n.length-1;o++)r.push(n[o]);e.constructor.emit("debug",r);var i=n[n.length-1];n[n.length-1]=function(n,r){var o=["api",e.name,t];o=o.concat(n?["error",n]:["success",r]),e.constructor.emit("debug",o),i(n,r)}}}function d(e,t){return f(so(function(n){if(this._closed)return vo.reject(new Error("database is closed"));if(this._destroyed)return vo.reject(new Error("database is destroyed"));var r=this;return l(r,e,n),this.taskqueue.isReady?t.apply(this,n):new vo(function(t,o){r.taskqueue.addTask(function(i){i?o(i):t(r[e].apply(r,n))})})}))}function h(e){return"$"+e}function p(e){return e.substring(1)}function v(){this._store={}}function g(e){if(this._store=new v,e&&Array.isArray(e))for(var t=0,n=e.length;t<n;t++)this.add(e[t])}function y(e,t){for(var n={},r=0,o=t.length;r<o;r++){var i=t[r];i in e&&(n[i]=e[i])}return n}function _(e){return e}function m(e){return[{ok:e}]}function b(e,t,n){function r(){var e=[];d.forEach(function(t){t.docs.forEach(function(n){e.push({id:t.id,docs:[n]})})}),n(null,{results:e})}function o(){++l===f&&r()}function i(e,t,n){d[e]={id:t,docs:n},o()}function a(){if(!(p>=h.length)){var e=Math.min(p+wo,h.length),t=h.slice(p,e);s(t,p),p+=t.length}}function s(n,r){n.forEach(function(n,o){var s=r+o,u=c.get(n),f=y(u[0],["atts_since","attachments"]);f.open_revs=u.map(function(e){return e.rev}),f.open_revs=f.open_revs.filter(_);var l=_;0===f.open_revs.length&&(delete f.open_revs,l=m),["revs","attachments","binary","ajax","latest"].forEach(function(e){e in t&&(f[e]=t[e])}),e.get(n,f,function(e,t){var r;r=e?[{error:e}]:l(t),i(s,n,r),a()})})}var u=t.docs,c=new mo;u.forEach(function(e){c.has(e.id)?c.get(e.id).push(e):c.set(e.id,[e])});var f=c.size,l=0,d=new Array(f),h=[];c.forEach(function(e,t){h.push(t)});var p=0;a()}function w(){return"undefined"!=typeof chrome&&void 0!==chrome.storage&&void 0!==chrome.storage.local}function E(){return bo}function k(e){w()?chrome.storage.onChanged.addListener(function(t){null!=t.db_name&&e.emit(t.dbName.newValue)}):E()&&("undefined"!=typeof addEventListener?addEventListener("storage",function(t){e.emit(t.key)}):window.attachEvent("storage",function(t){e.emit(t.key)}))}function S(){uo.EventEmitter.call(this),this._listeners={},k(this)}function q(e){if("undefined"!==console&&e in console){var t=Array.prototype.slice.call(arguments,1);console[e].apply(console,t)}}function A(e,t){return e=parseInt(e,10)||0,t=parseInt(t,10),t!==t||t<=e?t=(e||1)<<1:t+=1,t>6e5&&(e=3e5,t=6e5),~~((t-e)*Math.random()+e)}function x(e){var t=0;return e||(t=2e3),A(e,t)}function T(e,t){q("info","The above "+e+" is totally normal. "+t)}function O(e,t,n){Error.call(this,n),this.status=e,this.name=t,this.message=n,this.error=!0}function j(e,t){function n(t){for(var n in e)"function"!=typeof e[n]&&(this[n]=e[n]);void 0!==t&&(this.reason=t)}return n.prototype=O.prototype,new n(t)}function C(e){if("object"!=typeof e){var t=e;e=jo,e.data=t}return"error"in e&&"conflict"===e.error&&(e.name="conflict",e.status=409),"name"in e||(e.name=e.error||"unknown"),"status"in e||(e.status=500),"message"in e||(e.message=e.message||e.reason),e}function L(e,t,n){try{return!e(t,n)}catch(e){var r="Filter function threw: "+e.toString();return j(Do,r)}}function I(e){var t={},n=e.filter&&"function"==typeof e.filter;return t.query=e.query_params,function(r){r.doc||(r.doc={});var o=n&&L(e.filter,r.doc,t);if("object"==typeof o)return o;if(o)return!1;if(e.include_docs){if(!e.attachments)for(var i in r.doc._attachments)r.doc._attachments.hasOwnProperty(i)&&(r.doc._attachments[i].stub=!0)}else delete r.doc;return!0}}function D(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function R(){}function N(e){var t;if(e?"string"!=typeof e?t=j(xo):/^_/.test(e)&&!/^_(design|local)/.test(e)&&(t=j(Oo)):t=j(To),t)throw t}function B(e){return"boolean"==typeof e._remote?e._remote:"function"==typeof e.type&&(q("warn","db.type() is deprecated and will be removed in a future version of PouchDB"),"http"===e.type())}function $(e,t){return"listenerCount"in e?e.listenerCount(t):uo.EventEmitter.listenerCount(e,t)}function F(e){if(!e)return null;var t=e.split("/");return 2===t.length?t:1===t.length?[e,e]:null}function M(e){var t=F(e);return t?t.join("/"):null}function P(e){for(var t=Ho.exec(e),n={},r=14;r--;){var o=Po[r],i=t[r]||"",a=-1!==["user","password"].indexOf(o);n[o]=a?decodeURIComponent(i):i}return n[Uo]={},n[Po[12]].replace(Jo,function(e,t,r){t&&(n[Uo][t]=r)}),n}function U(e,t){var n=[],r=[];for(var o in t)t.hasOwnProperty(o)&&(n.push(o),r.push(t[o]));return n.push(e),Function.apply(null,n).apply(null,r)}function J(e,t,n){return new vo(function(r,o){e.get(t,function(i,a){if(i){if(404!==i.status)return o(i);a={}}var s=a._rev,u=n(a);if(!u)return r({updated:!1,rev:s});u._id=t,u._rev=s,r(H(e,u,n))})})}function H(e,t,n){return e.put(t).then(function(e){return{updated:!0,rev:e.rev}},function(r){if(409!==r.status)throw r;return J(e,t._id,n)})}function W(){return io.v4().replace(/-/g,"").toLowerCase()}function z(e){for(var t,n,r,o,i=e.rev_tree.slice();o=i.pop();){var a=o.ids,s=a[2],u=o.pos;if(s.length)for(var c=0,f=s.length;c<f;c++)i.push({pos:u+1,ids:s[c]});else{var l=!!a[1].deleted,d=a[0];t&&!(r!==l?r:n!==u?n<u:t<d)||(t=d,n=u,r=l)}}return n+"-"+t}function K(e,t){for(var n,r=e.slice();n=r.pop();)for(var o=n.pos,i=n.ids,a=i[2],s=t(0===a.length,o,i[0],n.ctx,i[1]),u=0,c=a.length;u<c;u++)r.push({pos:o+1,ids:a[u],ctx:s})}function X(e,t){return e.pos-t.pos}function G(e){var t=[];K(e,function(e,n,r,o,i){e&&t.push({rev:n+"-"+r,pos:n,opts:i})}),t.sort(X).reverse();for(var n=0,r=t.length;n<r;n++)delete t[n].pos;return t}function V(e){for(var t=z(e),n=G(e.rev_tree),r=[],o=0,i=n.length;o<i;o++){var a=n[o];a.rev===t||a.opts.deleted||r.push(a.rev)}return r}function Q(e){var t=[];return K(e.rev_tree,function(e,n,r,o,i){"available"!==i.status||e||(t.push(n+"-"+r),i.status="missing")}),t}function Y(e){for(var t,n=[],r=e.slice();t=r.pop();){var o=t.pos,i=t.ids,a=i[0],s=i[1],u=i[2],c=0===u.length,f=t.history?t.history.slice():[];f.push({id:a,opts:s}),c&&n.push({pos:o+1-f.length,ids:f});for(var l=0,d=u.length;l<d;l++)r.push({pos:o+1,ids:u[l],history:f})}return n.reverse()}function Z(e,t){return e.pos-t.pos}function ee(e,t,n){for(var r,o=0,i=e.length;o<i;)r=o+i>>>1,n(e[r],t)<0?o=r+1:i=r;return o}function te(e,t,n){var r=ee(e,t,n);e.splice(r,0,t)}function ne(e,t){for(var n,r,o=t,i=e.length;o<i;o++){var a=e[o],s=[a.id,a.opts,[]];r?(r[2].push(s),r=s):n=r=s}return n}function re(e,t){return e[0]<t[0]?-1:1}function oe(e,t){for(var n=[{tree1:e,tree2:t}],r=!1;n.length>0;){var o=n.pop(),i=o.tree1,a=o.tree2;(i[1].status||a[1].status)&&(i[1].status="available"===i[1].status||"available"===a[1].status?"available":"missing");for(var s=0;s<a[2].length;s++)if(i[2][0]){for(var u=!1,c=0;c<i[2].length;c++)i[2][c][0]===a[2][s][0]&&(n.push({tree1:i[2][c],tree2:a[2][s]}),u=!0);u||(r="new_branch",te(i[2],a[2][s],re))}else r="new_leaf",i[2][0]=a[2][s]}return{conflicts:r,tree:e}}function ie(e,t,n){var r,o=[],i=!1,a=!1;if(!e.length)return{tree:[t],conflicts:"new_leaf"};for(var s=0,u=e.length;s<u;s++){var c=e[s];if(c.pos===t.pos&&c.ids[0]===t.ids[0])r=oe(c.ids,t.ids),o.push({pos:c.pos,ids:r.tree}),i=i||r.conflicts,a=!0;else if(!0!==n){var f=c.pos<t.pos?c:t,l=c.pos<t.pos?t:c,d=l.pos-f.pos,h=[],p=[];for(p.push({ids:f.ids,diff:d,parent:null,parentIdx:null});p.length>0;){var v=p.pop();if(0!==v.diff)for(var g=v.ids[2],y=0,_=g.length;y<_;y++)p.push({ids:g[y],diff:v.diff-1,parent:v.ids,parentIdx:y});else v.ids[0]===l.ids[0]&&h.push(v)}var m=h[0];m?(r=oe(m.ids,l.ids),m.parent[2][m.parentIdx]=r.tree,o.push({pos:f.pos,ids:f.ids}),i=i||r.conflicts,a=!0):o.push(c)}else o.push(c)}return a||o.push(t),o.sort(Z),{tree:o,conflicts:i||"internal_node"}}function ae(e,t){for(var n,r,o=Y(e),i=0,a=o.length;i<a;i++){var s,u=o[i],c=u.ids;if(c.length>t){n||(n={});var f=c.length-t;s={pos:u.pos+f,ids:ne(c,f)};for(var l=0;l<f;l++){var d=u.pos+l+"-"+c[l].id;n[d]=!0}}else s={pos:u.pos,ids:ne(c,0)};r=r?ie(r,s,!0).tree:[s]}return n&&K(r,function(e,t,r){delete n[t+"-"+r]}),{tree:r,revs:n?Object.keys(n):[]}}function se(e,t,n){var r=ie(e,t),o=ae(r.tree,n);return{tree:o.tree,stemmedRevs:o.revs,conflicts:r.conflicts}}function ue(e,t){for(var n,r=e.slice(),o=t.split("-"),i=parseInt(o[0],10),a=o[1];n=r.pop();){if(n.pos===i&&n.ids[0]===a)return!0;for(var s=n.ids[2],u=0,c=s.length;u<c;u++)r.push({pos:n.pos+1,ids:s[u]})}return!1}function ce(e){return e.ids}function fe(e,t){t||(t=z(e));for(var n,r=t.substring(t.indexOf("-")+1),o=e.rev_tree.map(ce);n=o.pop();){if(n[0]===r)return!!n[1].deleted;o=o.concat(n[2])}}function le(e){return/^_local/.test(e)}function de(e,t){for(var n,r=t.rev_tree.slice();n=r.pop();){var o=n.pos,i=n.ids,a=i[0],s=i[1],u=i[2],c=0===u.length,f=n.history?n.history.slice():[];if(f.push({id:a,pos:o,opts:s}),c)for(var l=0,d=f.length;l<d;l++){var h=f[l],p=h.pos+"-"+h.id;if(p===e)return o+"-"+a}for(var v=0,g=u.length;v<g;v++)r.push({pos:o+1,ids:u[v],history:f})}throw new Error("Unable to resolve latest revision for id "+t.id+", rev "+e)}function he(e,t){try{e.emit("change",t)}catch(e){q("error",'Error in .on("change", function):',e)}}function pe(e,t,n){function r(){o.cancel()}uo.EventEmitter.call(this);var o=this;this.db=e,t=t?u(t):{};var i=t.complete=c(function(t,n){t?$(o,"error")>0&&o.emit("error",t):o.emit("complete",n),o.removeAllListeners(),e.removeListener("destroyed",r)});n&&(o.on("complete",function(e){n(null,e)}),o.on("error",n)),e.once("destroyed",r),t.onChange=function(e){o.isCancelled||he(o,e)};var a=new vo(function(e,n){t.complete=function(t,r){t?n(t):e(r)}});o.once("cancel",function(){e.removeListener("destroyed",r),t.complete(null,{status:"cancelled"})}),this.then=a.then.bind(a),this.catch=a.catch.bind(a),this.then(function(e){i(null,e)},i),e.taskqueue.isReady?o.validateChanges(t):e.taskqueue.addTask(function(e){e?t.complete(e):o.isCancelled?o.emit("cancel"):o.validateChanges(t)})}function ve(e,t,n){var r=[{rev:e._rev}];"all_docs"===n.style&&(r=G(t.rev_tree).map(function(e){return{rev:e.rev}}));var o={id:t.id,changes:r,doc:e};return fe(t,e._rev)&&(o.deleted=!0),n.conflicts&&(o.doc._conflicts=V(t),o.doc._conflicts.length||delete o.doc._conflicts),o}function ge(e,t){return e<t?-1:e>t?1:0}function ye(e,t){return function(n,r){n||r[0]&&r[0].error?(n=n||r[0],n.docId=t,e(n)):e(null,r.length?r[0]:r)}}function _e(e){for(var t=0;t<e.length;t++){var n=e[t];if(n._deleted)delete n._attachments;else if(n._attachments)for(var r=Object.keys(n._attachments),o=0;o<r.length;o++){var i=r[o];n._attachments[i]=y(n._attachments[i],["data","digest","content_type","length","revpos","stub"])}}}function me(e,t){var n=ge(e._id,t._id);return 0!==n?n:ge(e._revisions?e._revisions.start:0,t._revisions?t._revisions.start:0)}function be(e){var t={},n=[];return K(e,function(e,r,o,i){var a=r+"-"+o;return e&&(t[a]=0),void 0!==i&&n.push({from:i,to:a}),a}),n.reverse(),n.forEach(function(e){void 0===t[e.from]?t[e.from]=1+t[e.to]:t[e.from]=Math.min(t[e.from],1+t[e.to])}),t}function we(e,t,n){var r="limit"in t?t.keys.slice(t.skip,t.limit+t.skip):t.skip>0?t.keys.slice(t.skip):t.keys;if(t.descending&&r.reverse(),!r.length)return e._allDocs({limit:0},n);var o={offset:t.skip};return vo.all(r.map(function(n){var r=ko({key:n,deleted:"ok"},t);return["limit","skip","keys"].forEach(function(e){delete r[e]}),new vo(function(t,i){e._allDocs(r,function(e,r){if(e)return i(e);o.total_rows=r.total_rows,t(r.rows[0]||{key:n,error:"not_found"})})})})).then(function(e){return o.rows=e,o})}function Ee(e){var t=e._compactionQueue[0],n=t.opts,r=t.callback;e.get("_local/compaction").catch(function(){return!1}).then(function(t){t&&t.last_seq&&(n.last_seq=t.last_seq),e._compact(n,function(t,n){t?r(t):r(null,n),fo(function(){e._compactionQueue.shift(),e._compactionQueue.length&&Ee(e)})})})}function ke(e){return"_"===e.charAt(0)&&e+" is not a valid attachment name, attachment names cannot start with '_'"}function Se(){uo.EventEmitter.call(this)}function qe(){this.isReady=!1,this.failed=!1,this.queue=[]}function Ae(e,t){var n=e.match(/([a-z-]*):\/\/(.*)/);if(n)return{name:/https?/.test(n[1])?n[1]+"://"+n[2]:n[2],adapter:n[1]};var r=Te.adapters,o=Te.preferredAdapters,i=Te.prefix,a=t.adapter;if(!a)for(var s=0;s<o.length;++s){a=o[s];{if(!("idb"===a&&"websql"in r&&E()&&localStorage["_pouch__websqldb_"+i+e]))break;q("log",'PouchDB is downgrading "'+e+'" to WebSQL to avoid data loss, because it was already opened with WebSQL.')}}var u=r[a];return{name:u&&"use_prefix"in u&&!u.use_prefix?e:i+e,adapter:a}}function xe(e){function t(t){e.removeListener("closed",n),t||e.constructor.emit("destroyed",e.name)}function n(){e.removeListener("destroyed",t),e.constructor.emit("unref",e)}e.once("destroyed",t),e.once("closed",n),e.constructor.emit("ref",e)}function Te(e,t){if(!(this instanceof Te))return new Te(e,t);var n=this;if(t=t||{},e&&"object"==typeof e&&(t=e,e=t.name,delete t.name),this.__opts=t=u(t),n.auto_compaction=t.auto_compaction,n.prefix=Te.prefix,"string"!=typeof e)throw new Error("Missing/invalid DB name");var r=(t.prefix||"")+e,o=Ae(r,t);if(t.name=o.name,t.adapter=t.adapter||o.adapter,n.name=e,n._adapter=t.adapter,Te.emit("debug",["adapter","Picked adapter: ",t.adapter]),!Te.adapters[t.adapter]||!Te.adapters[t.adapter].valid())throw new Error("Invalid Adapter: "+t.adapter);Se.call(n),n.taskqueue=new qe,n.adapter=t.adapter,Te.adapters[t.adapter].call(n,t,function(e){if(e)return n.taskqueue.fail(e);xe(n),n.emit("created",n),Te.emit("created",n.name),n.taskqueue.ready(n)})}function Oe(e){e.debug=lo;var t={};e.on("debug",function(e){var n=e[0],r=e.slice(1);t[n]||(t[n]=lo("pouchdb:"+n)),t[n].apply(null,r)})}function je(e,t){for(var n=e,r=0,o=t.length;r<o;r++){if(!(n=n[t[r]]))break}return n}function Ce(e,t){return e<t?-1:e>t?1:0}function Le(e){for(var t=[],n="",r=0,o=e.length;r<o;r++){var i=e[r];"."===i?r>0&&"\\"===e[r-1]?n=n.substring(0,n.length-1)+".":(t.push(n),n=""):n+=i}return t.push(n),t}function Ie(e){return Ko.indexOf(e)>-1}function De(e){return Object.keys(e)[0]}function Re(e){return e[De(e)]}function Ne(e){var t={};return e.forEach(function(e){Object.keys(e).forEach(function(n){var r=e[n];if("object"!=typeof r&&(r={$eq:r}),Ie(n))r instanceof Array?t[n]=r.map(function(e){return Ne([e])}):t[n]=Ne([r]);else{var o=t[n]=t[n]||{};Object.keys(r).forEach(function(e){var t=r[e];return"$gt"===e||"$gte"===e?Be(e,t,o):"$lt"===e||"$lte"===e?$e(e,t,o):"$ne"===e?Fe(t,o):"$eq"===e?Me(t,o):void(o[e]=t)})}})}),t}function Be(e,t,n){void 0===n.$eq&&(void 0!==n.$gte?"$gte"===e?t>n.$gte&&(n.$gte=t):t>=n.$gte&&(delete n.$gte,n.$gt=t):void 0!==n.$gt?"$gte"===e?t>n.$gt&&(delete n.$gt,n.$gte=t):t>n.$gt&&(n.$gt=t):n[e]=t)}function $e(e,t,n){void 0===n.$eq&&(void 0!==n.$lte?"$lte"===e?t<n.$lte&&(n.$lte=t):t<=n.$lte&&(delete n.$lte,n.$lt=t):void 0!==n.$lt?"$lte"===e?t<n.$lt&&(delete n.$lt,n.$lte=t):t<n.$lt&&(n.$lt=t):n[e]=t)}function Fe(e,t){"$ne"in t?t.$ne.push(e):t.$ne=[e]}function Me(e,t){delete t.$gt,delete t.$gte,delete t.$lt,delete t.$lte,delete t.$ne,t.$eq=e}function Pe(e){var t=u(e),n=!1;"$and"in t&&(t=Ne(t.$and),n=!0),["$or","$nor"].forEach(function(e){e in t&&t[e].forEach(function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n],o=e[r];"object"==typeof o&&null!==o||(e[r]={$eq:o})}})}),"$not"in t&&(t.$not=Ne([t.$not]));for(var r=Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i];"object"!=typeof a||null===a?a={$eq:a}:"$ne"in a&&!n&&(a.$ne=[a.$ne]),t[i]=a}return t}function Ue(e,t,n){for(var r="",o=n-e.length;r.length<o;)r+=t;return r}function Je(e,t,n){return Ue(e,t,n)+e}function He(e,t){if(e===t)return 0;e=We(e),t=We(t);var n=et(e),r=et(t);if(n-r!=0)return n-r;switch(typeof e){case"number":return e-t;case"boolean":return e<t?-1:1;case"string":return Ye(e,t)}return Array.isArray(e)?Qe(e,t):Ze(e,t)}function We(e){switch(typeof e){case"undefined":return null;case"number":return e===1/0||e===-1/0||isNaN(e)?null:e;case"object":var t=e;if(Array.isArray(e)){var n=e.length;e=new Array(n);for(var r=0;r<n;r++)e[r]=We(t[r])}else{if(e instanceof Date)return e.toJSON();if(null!==e){e={};for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];void 0!==i&&(e[o]=We(i))}}}}return e}function ze(e){if(null!==e)switch(typeof e){case"boolean":return e?1:0;case"number":return tt(e);case"string":return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"");case"object":var t=Array.isArray(e),n=t?e:Object.keys(e),r=-1,o=n.length,i="";if(t)for(;++r<o;)i+=Ke(n[r]);else for(;++r<o;){var a=n[r];i+=Ke(a)+Ke(e[a])}return i}return""}function Ke(e){return e=We(e),et(e)+Vo+ze(e)+"\0"}function Xe(e,t){var n,r=t;if("1"===e[t])n=0,t++;else{var o="0"===e[t];t++;var i="",a=e.substring(t,t+Go),s=parseInt(a,10)+Xo;for(o&&(s=-s),t+=Go;;){var u=e[t];if("\0"===u)break;i+=u,t++}i=i.split("."),n=1===i.length?parseInt(i,10):parseFloat(i[0]+"."+i[1]),o&&(n-=10),0!==s&&(n=parseFloat(n+"e"+s))}return{num:n,length:t-r}}function Ge(e,t){var n=e.pop();if(t.length){var r=t[t.length-1];n===r.element&&(t.pop(),r=t[t.length-1]);var o=r.element,i=r.index;if(Array.isArray(o))o.push(n);else if(i===e.length-2){var a=e.pop();o[a]=n}else e.push(n)}}function Ve(e){for(var t=[],n=[],r=0;;){var o=e[r++];if("\0"!==o)switch(o){case"1":t.push(null);break;case"2":t.push("1"===e[r]),r++;break;case"3":var i=Xe(e,r);t.push(i.num),r+=i.length;break;case"4":for(var a="";;){var s=e[r];if("\0"===s)break;a+=s,r++}a=a.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""),t.push(a);break;case"5":var u={element:[],index:t.length};t.push(u.element),n.push(u);break;case"6":var c={element:{},index:t.length};t.push(c.element),n.push(c);break;default:throw new Error("bad collationIndex or unexpectedly reached end of input: "+o)}else{if(1===t.length)return t.pop();Ge(t,n)}}}function Qe(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var o=He(e[r],t[r]);if(0!==o)return o}return e.length===t.length?0:e.length>t.length?1:-1}function Ye(e,t){return e===t?0:e>t?1:-1}function Ze(e,t){for(var n=Object.keys(e),r=Object.keys(t),o=Math.min(n.length,r.length),i=0;i<o;i++){var a=He(n[i],r[i]);if(0!==a)return a;if(0!==(a=He(e[n[i]],t[r[i]])))return a}return n.length===r.length?0:n.length>r.length?1:-1}function et(e){var t=["boolean","number","string","object"],n=t.indexOf(typeof e);return~n?null===e?1:Array.isArray(e)?5:n<3?n+2:n+3:Array.isArray(e)?5:void 0}function tt(e){if(0===e)return"1";var t=e.toExponential().split(/e\+?/),n=parseInt(t[1],10),r=e<0,o=r?"0":"2",i=(r?-n:n)-Xo,a=Je(i.toString(),"0",Go);o+=Vo+a;var s=Math.abs(parseFloat(t[0]));r&&(s=10-s);var u=s.toFixed(20);return u=u.replace(/\.?0+$/,""),o+=Vo+u}function nt(e){function t(t){return e.map(function(e){var n=De(e),r=Le(n);return je(t,r)})}return function(e,n){var r=t(e.doc),o=t(n.doc),i=He(r,o);return 0!==i?i:Ce(e.doc._id,n.doc._id)}}function rt(e,t,n){if(e=e.filter(function(e){return ot(e.doc,t.selector,n)}),t.sort){var r=nt(t.sort);e=e.sort(r),"string"!=typeof t.sort[0]&&"desc"===Re(t.sort[0])&&(e=e.reverse())}if("limit"in t||"skip"in t){var o=t.skip||0,i=("limit"in t?t.limit:e.length)+o;e=e.slice(o,i)}return e}function ot(e,t,n){return n.every(function(n){var r=t[n],o=Le(n),i=je(e,o);return Ie(n)?at(n,r,e):it(r,e,o,i)})}function it(e,t,n,r){return!e||Object.keys(e).every(function(o){var i=e[o];return st(o,t,i,n,r)})}function at(e,t,n){return"$or"===e?t.some(function(e){return ot(n,e,Object.keys(e))}):"$not"===e?!ot(n,t,Object.keys(t)):!t.find(function(e){return ot(n,e,Object.keys(e))})}function st(e,t,n,r,o){if(!Qo[e])throw new Error('unknown operator "'+e+'" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');return Qo[e](t,n,r,o)}function ut(e){return void 0!==e&&null!==e}function ct(e){return void 0!==e}function ft(e,t){var n=t[0],r=t[1];if(0===n)throw new Error("Bad divisor, cannot divide by zero");if(parseInt(n,10)!==n)throw new Error("Divisor is not an integer");if(parseInt(r,10)!==r)throw new Error("Modulus is not an integer");return parseInt(e,10)===e&&e%n===r}function lt(e,t){return t.some(function(t){return e instanceof Array?e.indexOf(t)>-1:e===t})}function dt(e,t){return t.every(function(t){return e.indexOf(t)>-1})}function ht(e,t){return e.length===t}function pt(e,t){return new RegExp(t).test(e)}function vt(e,t){switch(t){case"null":return null===e;case"boolean":return"boolean"==typeof e;case"number":return"number"==typeof e;case"string":return"string"==typeof e;case"array":return e instanceof Array;case"object":return"[object Object]"==={}.toString.call(e)}throw new Error(t+" not supported as a type.Please use one of object, string, array, number, boolean or null.")}function gt(e,t){if("object"!=typeof t)throw new Error("Selector error: expected a JSON object");t=Pe(t);var n={doc:e},r=rt([n],{selector:t},Object.keys(t));return r&&1===r.length}function yt(e){return U('"use strict";\nreturn '+e+";",{})}function _t(e){return U(["return function(doc) {",'  "use strict";',"  var emitted = false;","  var emit = function (a, b) {","    emitted = true;","  };","  var view = "+e+";","  view(doc);","  if (emitted) {","    return true;","  }","};"].join("\n"),{})}function mt(e,t){if(e.selector&&e.filter&&"_selector"!==e.filter){var n="string"==typeof e.filter?e.filter:"function";return t(new Error('selector invalid for filter "'+n+'"'))}t()}function bt(e){e.view&&!e.filter&&(e.filter="_view"),e.selector&&!e.filter&&(e.filter="_selector"),e.filter&&"string"==typeof e.filter&&("_view"===e.filter?e.view=M(e.view):e.filter=M(e.filter))}function wt(e,t){return t.filter&&"string"==typeof t.filter&&!t.doc_ids&&!B(e.db)}function Et(e,t){var n=t.complete;if("_view"===t.filter){if(!t.view||"string"!=typeof t.view){var r=j(Do,"`view` filter parameter not found or invalid.");return n(r)}var o=F(t.view);e.db.get("_design/"+o[0],function(r,i){if(e.isCancelled)return n(null,{status:"cancelled"});if(r)return n(C(r));var a=i&&i.views&&i.views[o[1]]&&i.views[o[1]].map;if(!a)return n(j(qo,i.views?"missing json key: "+o[1]:"missing json key: views"));t.filter=_t(a),e.doChanges(t)})}else if(t.selector)t.filter=function(e){return gt(e,t.selector)},e.doChanges(t);else{var i=F(t.filter);e.db.get("_design/"+i[0],function(r,o){if(e.isCancelled)return n(null,{status:"cancelled"});if(r)return n(C(r));var a=o&&o.filters&&o.filters[i[1]];if(!a)return n(j(qo,o&&o.filters?"missing json key: "+i[1]:"missing json key: filters"));t.filter=yt(a),e.doChanges(t)})}}function kt(e){e._changesFilterPlugin={validate:mt,normalize:bt,shouldFilter:wt,filter:Et}}function St(e){return e.reduce(function(e,t){return e[t]=!0,e},{})}function qt(e){if(!/^\d+-./.test(e))return j($o);var t=e.indexOf("-"),n=e.substring(0,t),r=e.substring(t+1);return{prefix:parseInt(n,10),id:r}}function At(e,t){for(var n=e.start-e.ids.length+1,r=e.ids,o=[r[0],t,[]],i=1,a=r.length;i<a;i++)o=[r[i],{status:"missing"},[o]];return[{pos:n,ids:o}]}function xt(e,t){var n,r,o,i={status:"available"};if(e._deleted&&(i.deleted=!0),t)if(e._id||(e._id=Wo()),r=W(),e._rev){if(o=qt(e._rev),o.error)return o;e._rev_tree=[{pos:o.prefix,ids:[o.id,{status:"missing"},[[r,i,[]]]]}],n=o.prefix+1}else e._rev_tree=[{pos:1,ids:[r,i,[]]}],n=1;else if(e._revisions&&(e._rev_tree=At(e._revisions,i),n=e._revisions.start,r=e._revisions.ids[0]),!e._rev_tree){if(o=qt(e._rev),o.error)return o;n=o.prefix,r=o.id,e._rev_tree=[{pos:n,ids:[r,i,[]]}]}N(e._id),e._rev=n+"-"+r;var a={metadata:{},data:{}};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var u="_"===s[0];if(u&&!Zo[s]){var c=j(Io,s);throw c.message=Io.message+": "+s,c}u&&!ei[s]?a.metadata[s.slice(1)]=e[s]:a.data[s]=e[s]}return a}function Tt(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if("TypeError"!==i.name)throw i;for(var n="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,r=new n,o=0;o<e.length;o+=1)r.append(e[o]);return r.getBlob(t.type)}}function Ot(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}function jt(e,t){return Tt([Ot(e)],{type:t})}function Ct(e,t){return jt(ti(e),t)}function Lt(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,o=0;o<r;o++)t+=String.fromCharCode(n[o]);return t}function It(e,t){if("undefined"==typeof FileReader)return t(Lt((new FileReaderSync).readAsArrayBuffer(e)));var n=new FileReader,r="function"==typeof n.readAsBinaryString;n.onloadend=function(e){var n=e.target.result||"";if(r)return t(n);t(Lt(n))},r?n.readAsBinaryString(e):n.readAsArrayBuffer(e)}function Dt(e,t){It(e,function(e){t(e)})}function Rt(e,t){Dt(e,function(e){t(ni(e))})}function Nt(e,t){if("undefined"==typeof FileReader)return t((new FileReaderSync).readAsArrayBuffer(e));var n=new FileReader;n.onloadend=function(e){var n=e.target.result||new ArrayBuffer(0);t(n)},n.readAsArrayBuffer(e)}function Bt(e){return ni(e)}function $t(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.slice(t,n)}function Ft(e,t,n,r,o){(n>0||r<t.size)&&(t=$t(t,n,r)),Nt(t,function(t){e.append(t),o()})}function Mt(e,t,n,r,o){(n>0||r<t.length)&&(t=t.substring(n,r)),e.appendBinary(t),o()}function Pt(e,t){function n(){ri(o)}function r(){var e=f.end(!0),n=Bt(e);t(n),f.destroy()}function o(){var t=c*s,o=t+s;c++,c<u?l(f,e,t,o,n):l(f,e,t,o,r)}var i="string"==typeof e,a=i?e.length:e.size,s=Math.min(oi,a),u=Math.ceil(a/s),c=0,f=i?new ho:new ho.ArrayBuffer,l=i?Mt:Ft;o()}function Ut(e){return ho.hash(e)}function Jt(e){try{return ti(e)}catch(e){var t=j(Co,"Attachment is not a valid base64 string");return{error:t}}}function Ht(e,t,n){var r=Jt(e.data);if(r.error)return n(r.error);e.length=r.length,e.data="blob"===t?jt(r,e.content_type):"base64"===t?ni(r):r,Pt(r,function(t){e.digest="md5-"+t,n()})}function Wt(e,t,n){Pt(e.data,function(r){e.digest="md5-"+r,e.length=e.data.size||e.data.length||0,"binary"===t?Dt(e.data,function(t){e.data=t,n()}):"base64"===t?Rt(e.data,function(t){e.data=t,n()}):n()})}function zt(e,t,n){if(e.stub)return n();"string"==typeof e.data?Ht(e,t,n):Wt(e,t,n)}function Kt(e,t,n){function r(){i++,e.length===i&&(o?n(o):n())}if(!e.length)return n();var o,i=0;e.forEach(function(e){function n(e){o=e,++a===i.length&&r()}var i=e.data&&e.data._attachments?Object.keys(e.data._attachments):[],a=0;if(!i.length)return r();for(var s in e.data._attachments)e.data._attachments.hasOwnProperty(s)&&zt(e.data._attachments[s],t,n)})}function Xt(e,t,n,r,o,i,a,s){if(ue(t.rev_tree,n.metadata.rev))return r[o]=n,i();var u=t.winningRev||z(t),c="deleted"in t?t.deleted:fe(t,u),f="deleted"in n.metadata?n.metadata.deleted:fe(n.metadata),l=/^1-/.test(n.metadata.rev);if(c&&!f&&s&&l){var d=n.data;d._rev=u,d._id=n.metadata.id,n=xt(d,s)}var h=se(t.rev_tree,n.metadata.rev_tree[0],e);if(s&&(c&&f&&"new_leaf"!==h.conflicts||!c&&"new_leaf"!==h.conflicts||c&&!f&&"new_branch"===h.conflicts)){var p=j(Ao);return r[o]=p,i()}var v=n.metadata.rev;n.metadata.rev_tree=h.tree,n.stemmedRevs=h.stemmedRevs||[],t.rev_map&&(n.metadata.rev_map=t.rev_map);var g,y=z(n.metadata),_=fe(n.metadata,y),m=c===_?0:c<_?-1:1;g=v===y?_:fe(n.metadata,v),a(n,y,_,g,!0,m,o,i)}function Gt(e){return"missing"===e.metadata.rev_tree[0].ids[1].status}function Vt(e,t,n,r,o,i,a,s,u){function c(e,t,n){var r=z(e.metadata),o=fe(e.metadata,r);if("was_delete"in s&&o)return i[t]=j(qo,"deleted"),n();if(l&&Gt(e)){var u=j(Ao);return i[t]=u,n()}a(e,r,o,o,!1,o?0:1,t,n)}function f(){++h===p&&u&&u()}e=e||1e3;var l=s.new_edits,d=new mo,h=0,p=t.length;t.forEach(function(e,t){if(e._id&&le(e._id)){var r=e._deleted?"_removeLocal":"_putLocal";return void n[r](e,{ctx:o},function(e,n){i[t]=e||n,f()})}var a=e.metadata.id;d.has(a)?(p--,d.get(a).push([e,t])):d.set(a,[[e,t]])}),d.forEach(function(t,n){function o(){++u<t.length?s():f()}function s(){var s=t[u],f=s[0],d=s[1];if(r.has(n))Xt(e,r.get(n),f,i,d,o,a,l);else{var h=se([],f.metadata.rev_tree[0],e);f.metadata.rev_tree=h.tree,f.stemmedRevs=h.stemmedRevs||[],c(f,d,o)}}var u=0;s()})}function Qt(e){try{return JSON.parse(e)}catch(t){return po.parse(e)}}function Yt(e){try{return JSON.stringify(e)}catch(t){return po.stringify(e)}}function Zt(e){return function(t){var n="unknown_error";t.target&&t.target.error&&(n=t.target.error.name||t.target.error.message),e(j(No,n,t.type))}}function en(e,t,n){return{data:Yt(e),winningRev:t,deletedOrLocal:n?"1":"0",seq:e.seq,id:e.id}}function tn(e){if(!e)return null;var t=Qt(e.data);return t.winningRev=e.winningRev,t.deleted="1"===e.deletedOrLocal,t.seq=e.seq,t}function nn(e){if(!e)return e;var t=e._doc_id_rev.lastIndexOf(":");return e._id=e._doc_id_rev.substring(0,t-1),e._rev=e._doc_id_rev.substring(t+1),delete e._doc_id_rev,e}function rn(e,t,n,r){n?r(e?"string"!=typeof e?e:Ct(e,t):Tt([""],{type:t})):e?"string"!=typeof e?It(e,function(e){r(ni(e))}):r(e):r("")}function on(e,t,n,r){function o(){++s===a.length&&r&&r()}function i(e,t){var r=e._attachments[t],i=r.digest;n.objectStore(ui).get(i).onsuccess=function(e){r.body=e.target.result.body,o()}}var a=Object.keys(e._attachments||{});if(!a.length)return r&&r();var s=0;a.forEach(function(n){t.attachments&&t.include_docs?i(e,n):(e._attachments[n].stub=!0,o())})}function an(e,t){return vo.all(e.map(function(e){if(e.doc&&e.doc._attachments){var n=Object.keys(e.doc._attachments);return vo.all(n.map(function(n){var r=e.doc._attachments[n];if("body"in r){var o=r.body,i=r.content_type;return new vo(function(a){rn(o,i,t,function(t){e.doc._attachments[n]=ko(y(r,["digest","content_type"]),{data:t}),a()})})}}))}}))}function sn(e,t,n){function r(){--c||o()}function o(){i.length&&i.forEach(function(e){u.index("digestSeq").count(IDBKeyRange.bound(e+"::",e+"::�",!1,!1)).onsuccess=function(t){t.target.result||s.delete(e)}})}var i=[],a=n.objectStore(si),s=n.objectStore(ui),u=n.objectStore(ci),c=e.length;e.forEach(function(e){var n=a.index("_doc_id_rev"),o=t+"::"+e;n.getKey(o).onsuccess=function(e){var t=e.target.result;if("number"!=typeof t)return r();a.delete(t),u.index("seq").openCursor(IDBKeyRange.only(t)).onsuccess=function(e){var t=e.target.result;if(t){var n=t.value.digestSeq.split("::")[0];i.push(n),u.delete(t.primaryKey),t.continue()}else r()}}})}function un(e,t,n){try{return{txn:e.transaction(t,n)}}catch(e){return{error:e}}}function cn(e,t,n,r,o,i){function a(){var e=[ai,si,ui,li,ci,fi],t=un(o,e,"readwrite");if(t.error)return i(t.error);m=t.txn,m.onabort=Zt(i),m.ontimeout=Zt(i),m.oncomplete=l,b=m.objectStore(ai),w=m.objectStore(si),E=m.objectStore(ui),k=m.objectStore(ci),S=m.objectStore(fi),S.get(fi).onsuccess=function(e){A=e.target.result,c()},h(function(e){if(e)return N=!0,i(e);f()})}function s(){L=!0,c()}function u(){Vt(e.revs_limit,x,r,R,m,D,p,n,s)}function c(){A&&L&&(A.docCount+=I,S.put(A))}function f(){function e(){++n===x.length&&u()}function t(t){var n=tn(t.target.result);n&&R.set(n.id,n),e()}if(x.length)for(var n=0,r=0,o=x.length;r<o;r++){var i=x[r];if(i._id&&le(i._id))e();else{var a=b.get(i.metadata.id);a.onsuccess=t}}}function l(){N||(hi.notify(r._meta.name),i(null,D))}function d(e,t){E.get(e).onsuccess=function(n){if(n.target.result)t();else{var r=j(Fo,"unknown stub attachment with digest "+e);r.status=412,t(r)}}}function h(e){function t(){++o===n.length&&e(r)}var n=[];if(x.forEach(function(e){e.data&&e.data._attachments&&Object.keys(e.data._attachments).forEach(function(t){var r=e.data._attachments[t];r.stub&&n.push(r.digest)})}),!n.length)return e();var r,o=0;n.forEach(function(e){d(e,function(e){e&&!r&&(r=e),t()})})}function p(e,t,n,r,o,i,a,s){e.metadata.winningRev=t,e.metadata.deleted=n;var u=e.data;if(u._id=e.metadata.id,u._rev=e.metadata.rev,r&&(u._deleted=!0),u._attachments&&Object.keys(u._attachments).length)return g(e,t,n,o,a,s);I+=i,c(),v(e,t,n,o,a,s)}function v(e,t,n,o,i,a){function s(i){var a=e.stemmedRevs||[];o&&r.auto_compaction&&(a=a.concat(Q(e.metadata))),a&&a.length&&sn(a,e.metadata.id,m),l.seq=i.target.result;var s=en(l,t,n);b.put(s).onsuccess=c}function u(e){e.preventDefault(),e.stopPropagation(),w.index("_doc_id_rev").getKey(f._doc_id_rev).onsuccess=function(e){w.put(f,e.target.result).onsuccess=s}}function c(){D[i]={ok:!0,id:l.id,rev:l.rev},R.set(e.metadata.id,e.metadata),y(e,l.seq,a)}var f=e.data,l=e.metadata;f._doc_id_rev=l.id+"::"+l.rev,delete f._id,delete f._rev;var d=w.put(f);d.onsuccess=s,d.onerror=u}function g(e,t,n,r,o,i){function a(){c===f.length&&v(e,t,n,r,o,i)}function s(){c++,a()}var u=e.data,c=0,f=Object.keys(u._attachments);f.forEach(function(n){var r=e.data._attachments[n];if(r.stub)c++,a();else{var o=r.data;delete r.data,r.revpos=parseInt(t,10);_(r.digest,o,s)}})}function y(e,t,n){function r(){++o===i.length&&n()}var o=0,i=Object.keys(e.data._attachments||{});if(!i.length)return n();for(var a=0;a<i.length;a++)!function(n){var o=e.data._attachments[n].digest,i=k.put({seq:t,digestSeq:o+"::"+t});i.onsuccess=r,i.onerror=function(e){e.preventDefault(),e.stopPropagation(),r()}}(i[a])}function _(e,t,n){E.count(e).onsuccess=function(r){if(r.target.result)return n();var o={digest:e,body:t};E.put(o).onsuccess=n}}for(var m,b,w,E,k,S,q,A,x=t.docs,T=0,O=x.length;T<O;T++){var C=x[T];C._id&&le(C._id)||(C=x[T]=xt(C,n.new_edits),C.error&&!q&&(q=C))}if(q)return i(q);var L=!1,I=0,D=new Array(x.length),R=new mo,N=!1,B=r._meta.blobSupport?"blob":"base64";Kt(x,B,function(e){if(e)return i(e);a()})}function fn(e,t,n,r,o){function i(e){f=e.target.result,c&&o(c,f,l)}function a(e){c=e.target.result,f&&o(c,f,l)}function s(){if(!c.length)return o();var n,s=c[c.length-1];if(t&&t.upper)try{n=IDBKeyRange.bound(s,t.upper,!0,t.upperOpen)}catch(e){if("DataError"===e.name&&0===e.code)return o()}else n=IDBKeyRange.lowerBound(s,!0);t=n,c=null,f=null,e.getAll(t,r).onsuccess=i,e.getAllKeys(t,r).onsuccess=a}function u(e){var t=e.target.result;if(!t)return o();o([t.key],[t.value],t)}var c,f,l,d="function"==typeof e.getAll&&"function"==typeof e.getAllKeys&&r>1&&!n;d?(l={continue:s},e.getAll(t,r).onsuccess=i,e.getAllKeys(t,r).onsuccess=a):n?e.openCursor(t,"prev").onsuccess=u:e.openCursor(t).onsuccess=u}function ln(e,t,n){function r(e){var t=e.target.result;t?(o.push(t.value),t.continue()):n({target:{result:o}})}if("function"==typeof e.getAll)return void(e.getAll(t).onsuccess=n);var o=[];e.openCursor(t).onsuccess=r}function dn(e,t,n,r,o){try{if(e&&t)return o?IDBKeyRange.bound(t,e,!n,!1):IDBKeyRange.bound(e,t,!1,!n);if(e)return o?IDBKeyRange.upperBound(e):IDBKeyRange.lowerBound(e);if(t)return o?IDBKeyRange.lowerBound(t,!n):IDBKeyRange.upperBound(t,!n);if(r)return IDBKeyRange.only(r)}catch(e){return{error:e}}return null}function hn(e,t,n){function r(t,n,r){var o=t.id+"::"+r;q.get(o).onsuccess=function(r){if(n.doc=nn(r.target.result),e.conflicts){var o=V(t);o.length&&(n.doc._conflicts=o)}on(n.doc,e,b)}}function o(t,n){var o={id:n.id,key:n.id,value:{rev:t}},i=n.deleted;"ok"===e.deleted?(A.push(o),i?(o.value.deleted=!0,o.doc=null):e.include_docs&&r(n,o,t)):!i&&h--<=0&&(A.push(o),e.include_docs&&r(n,o,t))}function i(e){for(var t=0,n=e.length;t<n&&A.length!==p;t++){var r=e[t],i=tn(r);o(i.winningRev,i)}}function a(e,t,n){n&&(i(t),A.length<p&&n.continue())}function s(t){var n=t.target.result;e.descending&&(n=n.reverse()),i(n)}function u(){n(null,{total_rows:w,offset:e.skip,rows:A})}function c(){e.attachments?an(A,e.binary).then(u):u()}var f="startkey"in e&&e.startkey,l="endkey"in e&&e.endkey,d="key"in e&&e.key,h=e.skip||0,p="number"==typeof e.limit?e.limit:-1,v=!1!==e.inclusive_end,g=dn(f,l,v,d,e.descending),y=g&&g.error;if(y&&("DataError"!==y.name||0!==y.code))return n(j(No,y.name,y.message));var _=[ai,si,fi];e.attachments&&_.push(ui);var m=un(t,_,"readonly");if(m.error)return n(m.error);var b=m.txn;b.oncomplete=c,b.onabort=Zt(n);var w,E=b.objectStore(ai),k=b.objectStore(si),S=b.objectStore(fi),q=k.index("_doc_id_rev"),A=[];return S.get(fi).onsuccess=function(e){w=e.target.result.docCount},y||0===p?void 0:-1===p?ln(E,g,s):void fn(E,g,e.descending,p+h,a)}function pn(e){return new vo(function(t){var n=Tt([""]);e.objectStore(di).put(n,"key").onsuccess=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)},e.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)}}).catch(function(){return!1})}function vn(e,t){e.objectStore(ai).index("deletedOrLocal").count(IDBKeyRange.only("0")).onsuccess=function(e){t(e.target.result)}}function gn(e,t,n,r){try{e(t,n)}catch(t){r.emit("error",t)}}function yn(){!pi&&vi.length&&(pi=!0,vi.shift()())}function _n(e,t,n){vi.push(function(){e(function(e,r){gn(t,e,r,n),pi=!1,fo(function(){yn(n)})})}),yn()}function mn(e,t,n,r){function o(t,n,r){function o(t,n){var r=e.processChange(n,t,e);d=r.seq=t.seq;var o=w(r);if("object"==typeof o)return e.complete(o);o&&(b++,p&&m.push(r),e.attachments&&e.include_docs?on(n,e,v,function(){an([r],e.binary).then(function(){e.onChange(r)})}):e.onChange(r))}function i(){for(var e=0,t=s.length;e<t&&b!==h;e++){var n=s[e];if(n){o(u[e],n)}}b!==h&&r.continue()}if(r&&t.length){var s=new Array(t.length),u=new Array(t.length),c=0;n.forEach(function(e,n){a(nn(e),t[n],function(e,r){u[n]=e,s[n]=r,++c===t.length&&i()})})}}function i(e,t,n,r){if(n.seq!==t)return r();if(n.winningRev===e._rev)return r(n,e);var o=e._id+"::"+n.winningRev;_.get(o).onsuccess=function(e){r(n,nn(e.target.result))}}function a(e,t,n){if(l&&!l.has(e._id))return n();var r=E.get(e._id);if(r)return i(e,t,r,n);y.get(e._id).onsuccess=function(o){r=tn(o.target.result),E.set(e._id,r),i(e,t,r,n)}}function s(){e.complete(null,{results:m,last_seq:d})}function c(){!e.continuous&&e.attachments?an(m).then(s):s()}if(e=u(e),e.continuous){var f=n+":"+Wo();return hi.addListener(n,f,t,e),hi.notify(n),{cancel:function(){hi.removeListener(n,f)}}}var l=e.doc_ids&&new _o(e.doc_ids);e.since=e.since||0;var d=e.since,h="limit"in e?e.limit:-1;0===h&&(h=1);var p;p="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var v,g,y,_,m=[],b=0,w=I(e),E=new mo,k=[ai,si];e.attachments&&k.push(ui);var S=un(r,k,"readonly");if(S.error)return e.complete(S.error);v=S.txn,v.onabort=Zt(e.complete),v.oncomplete=c,g=v.objectStore(si),y=v.objectStore(ai),_=g.index("_doc_id_rev"),fn(g,e.since&&!e.descending?IDBKeyRange.lowerBound(e.since,!0):null,e.descending,h,o)}function bn(e,t){var n=this;_n(function(t){wn(n,e,t)},t,n.constructor)}function wn(e,t,n){function r(e){var t=e.createObjectStore(ai,{keyPath:"id"});e.createObjectStore(si,{autoIncrement:!0}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.createObjectStore(ui,{keyPath:"digest"}),e.createObjectStore(fi,{keyPath:"id",autoIncrement:!1}),e.createObjectStore(di),t.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),e.createObjectStore(li,{keyPath:"_id"});var n=e.createObjectStore(ci,{autoIncrement:!0});n.createIndex("seq","seq"),n.createIndex("digestSeq","digestSeq",{unique:!0})}function o(e,t){var n=e.objectStore(ai);n.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),n.openCursor().onsuccess=function(e){var r=e.target.result;if(r){var o=r.value,i=fe(o);o.deletedOrLocal=i?"1":"0",n.put(o),r.continue()}else t()}}function i(e){e.createObjectStore(li,{keyPath:"_id"}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0})}function a(e,t){var n=e.objectStore(li),r=e.objectStore(ai),o=e.objectStore(si);r.openCursor().onsuccess=function(e){var i=e.target.result;if(i){var a=i.value,s=a.id,u=le(s),c=z(a);if(u){var f=s+"::"+c,l=s+"::",d=s+"::~",h=o.index("_doc_id_rev"),p=IDBKeyRange.bound(l,d,!1,!1),v=h.openCursor(p);v.onsuccess=function(e){if(v=e.target.result){var t=v.value;t._doc_id_rev===f&&n.put(t),o.delete(v.primaryKey),v.continue()}else r.delete(i.primaryKey),i.continue()}}else i.continue()}else t&&t()}}function s(e){var t=e.createObjectStore(ci,{autoIncrement:!0});t.createIndex("seq","seq"),t.createIndex("digestSeq","digestSeq",{unique:!0})}function u(e,t){var n=e.objectStore(si),r=e.objectStore(ui),o=e.objectStore(ci);r.count().onsuccess=function(e){if(!e.target.result)return t();n.openCursor().onsuccess=function(e){var n=e.target.result;if(!n)return t();for(var r=n.value,i=n.primaryKey,a=Object.keys(r._attachments||{}),s={},u=0;u<a.length;u++)s[r._attachments[a[u]].digest]=!0;var c=Object.keys(s);for(u=0;u<c.length;u++){var f=c[u];o.put({seq:i,digestSeq:f+"::"+i})}n.continue()}}}function c(e){function t(e){return e.data?tn(e):(e.deleted="1"===e.deletedOrLocal,e)}var n=e.objectStore(si),r=e.objectStore(ai);r.openCursor().onsuccess=function(e){function o(){var e=en(a,a.winningRev,a.deleted);r.put(e).onsuccess=function(){i.continue()}}var i=e.target.result;if(i){var a=t(i.value);if(a.winningRev=a.winningRev||z(a),a.seq)return o();!function(){var e=a.id+"::",t=a.id+"::�",r=n.index("_doc_id_rev").openCursor(IDBKeyRange.bound(e,t)),i=0;r.onsuccess=function(e){var t=e.target.result;if(!t)return a.seq=i,o();var n=t.primaryKey;n>i&&(i=n),t.continue()}}()}}}var l=t.name,d=null;e._meta=null,e._remote=!1,e.type=function(){return"idb"},e._id=f(function(t){t(null,e._meta.instanceId)}),e._bulkDocs=function(n,r,o){cn(t,n,r,e,d,o)},e._get=function(e,t,n){function r(){n(a,{doc:o,metadata:i,ctx:s})}var o,i,a,s=t.ctx;if(!s){var u=un(d,[ai,si,ui],"readonly");if(u.error)return n(u.error);s=u.txn}s.objectStore(ai).get(e).onsuccess=function(e){if(!(i=tn(e.target.result)))return a=j(qo,"missing"),r();var n;if(t.rev)n=t.latest?de(t.rev,i):t.rev;else{n=i.winningRev;if(fe(i))return a=j(qo,"deleted"),r()}var u=s.objectStore(si),c=i.id+"::"+n;u.index("_doc_id_rev").get(c).onsuccess=function(e){if(o=e.target.result,o&&(o=nn(o)),!o)return a=j(qo,"missing"),r();r()}}},e._getAttachment=function(e,t,n,r,o){var i;if(r.ctx)i=r.ctx;else{var a=un(d,[ai,si,ui],"readonly");if(a.error)return o(a.error);i=a.txn}var s=n.digest,u=n.content_type;i.objectStore(ui).get(s).onsuccess=function(e){rn(e.target.result.body,u,r.binary,function(e){o(null,e)})}},e._info=function(t){var n,r,o=un(d,[fi,si],"readonly");if(o.error)return t(o.error);var i=o.txn;i.objectStore(fi).get(fi).onsuccess=function(e){r=e.target.result.docCount},i.objectStore(si).openCursor(null,"prev").onsuccess=function(e){var t=e.target.result;n=t?t.key:0},i.oncomplete=function(){t(null,{doc_count:r,update_seq:n,idb_attachment_format:e._meta.blobSupport?"binary":"base64"})}},e._allDocs=function(e,t){hn(e,d,t)},e._changes=function(t){return mn(t,e,l,d)},e._close=function(e){d.close(),gi.delete(l),e()},e._getRevisionTree=function(e,t){var n=un(d,[ai],"readonly");if(n.error)return t(n.error);n.txn.objectStore(ai).get(e).onsuccess=function(e){var n=tn(e.target.result);n?t(null,n.rev_tree):t(j(qo))}},e._doCompaction=function(e,t,n){var r=[ai,si,ui,ci],o=un(d,r,"readwrite");if(o.error)return n(o.error);var i=o.txn;i.objectStore(ai).get(e).onsuccess=function(n){var r=tn(n.target.result);K(r.rev_tree,function(e,n,r,o,i){var a=n+"-"+r;-1!==t.indexOf(a)&&(i.status="missing")}),sn(t,e,i);var o=r.winningRev,a=r.deleted;i.objectStore(ai).put(en(r,o,a))},i.onabort=Zt(n),i.oncomplete=function(){n()}},e._getLocal=function(e,t){var n=un(d,[li],"readonly");if(n.error)return t(n.error);var r=n.txn,o=r.objectStore(li).get(e);o.onerror=Zt(t),o.onsuccess=function(e){var n=e.target.result;n?(delete n._doc_id_rev,t(null,n)):t(j(qo))}},e._putLocal=function(e,t,n){"function"==typeof t&&(n=t,t={}),delete e._revisions;var r=e._rev,o=e._id;e._rev=r?"0-"+(parseInt(r.split("-")[1],10)+1):"0-1";var i,a=t.ctx;if(!a){var s=un(d,[li],"readwrite");if(s.error)return n(s.error);a=s.txn,a.onerror=Zt(n),a.oncomplete=function(){i&&n(null,i)}}var u,c=a.objectStore(li);r?(u=c.get(o),u.onsuccess=function(o){var a=o.target.result;if(a&&a._rev===r){c.put(e).onsuccess=function(){i={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,i)}}else n(j(Ao))}):(u=c.add(e),u.onerror=function(e){n(j(Ao)),e.preventDefault(),e.stopPropagation()},u.onsuccess=function(){i={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,i)})},e._removeLocal=function(e,t,n){"function"==typeof t&&(n=t,t={});var r=t.ctx;if(!r){var o=un(d,[li],"readwrite");if(o.error)return n(o.error);r=o.txn,r.oncomplete=function(){i&&n(null,i)}}var i,a=e._id,s=r.objectStore(li),u=s.get(a);u.onerror=Zt(n),u.onsuccess=function(r){var o=r.target.result;o&&o._rev===e._rev?(s.delete(a),i={ok:!0,id:a,rev:"0-0"},t.ctx&&n(null,i)):n(j(qo))}},e._destroy=function(e,t){hi.removeAllListeners(l);var n=yi.get(l);n&&n.result&&(n.result.close(),gi.delete(l));var r=indexedDB.deleteDatabase(l);r.onsuccess=function(){yi.delete(l),E()&&l in localStorage&&delete localStorage[l],t(null,{ok:!0})},r.onerror=Zt(t)};var h=gi.get(l);if(h)return d=h.idb,e._meta=h.global,fo(function(){n(null,e)});var p;p=t.storage?En(l,t.storage):indexedDB.open(l,ii),yi.set(l,p),p.onupgradeneeded=function(e){function t(){var e=l[d-1];d++,e&&e(f,t)}var n=e.target.result;if(e.oldVersion<1)return r(n);var f=e.currentTarget.transaction;e.oldVersion<3&&i(n),e.oldVersion<4&&s(n);var l=[o,a,u,c],d=e.oldVersion;t()},p.onsuccess=function(t){function r(){void 0!==s&&f&&(e._meta={name:l,instanceId:u,blobSupport:s},gi.set(l,{idb:d,global:e._meta}),n(null,e))}function o(){if(void 0!==a&&void 0!==i){var e=l+"_id";e in i?u=i[e]:i[e]=u=Wo(),i.docCount=a,c.objectStore(fi).put(i)}}d=t.target.result,d.onversionchange=function(){d.close(),gi.delete(l)},d.onabort=function(e){q("error","Database has a global failure",e.target.error),d.close(),gi.delete(l)};var i,a,s,u,c=d.transaction([fi,di,ai],"readwrite"),f=!1;c.objectStore(fi).get(fi).onsuccess=function(e){i=e.target.result||{id:fi},o()},vn(c,function(e){a=e,o()}),Yo||(Yo=pn(c)),Yo.then(function(e){s=e,r()}),c.oncomplete=function(){f=!0,r()}},p.onerror=function(){var e="Failed to open indexedDB, are you in private browsing mode?";q("error",e),n(j(No,e))}}function En(e,t){try{return indexedDB.open(e,{version:ii,storage:t})}catch(t){return indexedDB.open(e,ii)}}function kn(e){return decodeURIComponent(escape(e))}function Sn(e){return e<65?e-48:e-55}function qn(e,t,n){for(var r="";t<n;)r+=String.fromCharCode(Sn(e.charCodeAt(t++))<<4|Sn(e.charCodeAt(t++)));return r}function An(e,t,n){for(var r="";t<n;)r+=String.fromCharCode(Sn(e.charCodeAt(t+2))<<12|Sn(e.charCodeAt(t+3))<<8|Sn(e.charCodeAt(t))<<4|Sn(e.charCodeAt(t+1))),t+=4;return r}function xn(e,t){return"UTF-8"===t?kn(qn(e,0,e.length)):An(e,0,e.length)}function Tn(e){return"'"+e+"'"}function On(e){return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"")}function jn(e){return e.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,"")}function Cn(e){return delete e._id,delete e._rev,JSON.stringify(e)}function Ln(e,t,n){return e=JSON.parse(e),e._id=t,e._rev=n,e}function In(e){for(var t="(";e--;)t+="?",e&&(t+=",");return t+")"}function Dn(e,t,n,r,o){return"SELECT "+e+" FROM "+("string"==typeof t?t:t.join(" JOIN "))+(n?" ON "+n:"")+(r?" WHERE "+("string"==typeof r?r:r.join(" AND ")):"")+(o?" ORDER BY "+o:"")}function Rn(e,t,n){function r(){++i===e.length&&o()}function o(){if(a.length){var e="SELECT DISTINCT digest AS digest FROM "+qi+" WHERE seq IN "+In(a.length);n.executeSql(e,a,function(e,t){for(var n=[],r=0;r<t.rows.length;r++)n.push(t.rows.item(r).digest);if(n.length){var o="DELETE FROM "+qi+" WHERE seq IN ("+a.map(function(){return"?"}).join(",")+")";e.executeSql(o,a,function(e){var t="SELECT digest FROM "+qi+" WHERE digest IN ("+n.map(function(){return"?"}).join(",")+")";e.executeSql(t,n,function(e,t){for(var r=new _o,o=0;o<t.rows.length;o++)r.add(t.rows.item(o).digest);n.forEach(function(t){r.has(t)||(e.executeSql("DELETE FROM "+qi+" WHERE digest=?",[t]),e.executeSql("DELETE FROM "+Ei+" WHERE digest=?",[t]))})})})}})}}if(e.length){var i=0,a=[];e.forEach(function(e){var o="SELECT seq FROM "+wi+" WHERE doc_id=? AND rev=?";n.executeSql(o,[t,e],function(e,t){if(!t.rows.length)return r();var n=t.rows.item(0).seq;a.push(n),e.executeSql("DELETE FROM "+wi+" WHERE seq=?",[n],r)})})}}function Nn(e){return function(t){q("error","WebSQL threw an error",t);var n=t&&t.constructor.toString().match(/function ([^(]+)/),r=n&&n[1]||t.type,o=t.target||t.message;e(j(Bo,o,r))}}function Bn(e){return"size"in e?1e6*e.size:"undefined"!=typeof navigator&&/Android/.test(navigator.userAgent)?5e6:1}function $n(e,t,n,r,o,i,a){function s(){if(m)return a(m);i.notify(r._name),a(null,b)}function u(e,t){var n="SELECT count(*) as cnt FROM "+Ei+" WHERE digest=?";_.executeSql(n,[e],function(n,r){if(0===r.rows.item(0).cnt){var o=j(Fo,"unknown stub attachment with digest "+e);t(o)}else t()})}function c(e){function t(){++o===n.length&&e(r)}var n=[];if(g.forEach(function(e){e.data&&e.data._attachments&&Object.keys(e.data._attachments).forEach(function(t){var r=e.data._attachments[t];r.stub&&n.push(r.digest)})}),!n.length)return e();var r,o=0;n.forEach(function(e){u(e,function(e){e&&!r&&(r=e),t()})})}function f(e,t,n,o,i,a,s,u){function c(){function t(e,t){function r(){return++o===i.length&&t(),!1}var o=0,i=Object.keys(n._attachments||{});if(!i.length)return t();for(var a=0;a<i.length;a++)!function(t){var o="INSERT INTO "+qi+" (digest, seq) VALUES (?,?)",i=[n._attachments[t].digest,e];_.executeSql(o,i,r,r)}(i[a])}var n=e.data,r=o?1:0,i=n._id,a=n._rev,s=Cn(n),u="INSERT INTO "+wi+" (doc_id, rev, json, deleted) VALUES (?, ?, ?, ?);",c=[i,a,s,r];_.executeSql(u,c,function(e,n){var r=n.insertId;t(r,function(){d(e,r)})},function(){var e=Dn("seq",wi,null,"doc_id=? AND rev=?");return _.executeSql(e,[i,a],function(e,n){var o=n.rows.item(0).seq,u="UPDATE "+wi+" SET json=?, deleted=? WHERE doc_id=? AND rev=?;",c=[s,r,i,a];e.executeSql(u,c,function(e){t(o,function(){d(e,o)})})}),!1})}function f(e){p||(e?(p=e,u(p)):v===g.length&&c())}function l(e){v++,f(e)}function d(n,o){var a=e.metadata.id,c=e.stemmedRevs||[];i&&r.auto_compaction&&(c=Q(e.metadata).concat(c)),c.length&&Rn(c,a,n),e.metadata.seq=o;var f=e.metadata.rev;delete e.metadata.rev;var l=i?"UPDATE "+bi+" SET json=?, max_seq=?, winningseq=(SELECT seq FROM "+wi+" WHERE doc_id="+bi+".id AND rev=?) WHERE id=?":"INSERT INTO "+bi+" (id, winningseq, max_seq, json) VALUES (?,?,?,?);",d=Yt(e.metadata),h=i?[d,o,t,a]:[a,o,o,d];n.executeSql(l,h,function(){b[s]={ok:!0,id:e.metadata.id,rev:f},w.set(a,e.metadata),u()})}var p=null,v=0;e.data._id=e.metadata.id,e.data._rev=e.metadata.rev;var g=Object.keys(e.data._attachments||{});o&&(e.data._deleted=!0),g.forEach(function(n){var r=e.data._attachments[n];if(r.stub)v++,f();else{var o=r.data;delete r.data,r.revpos=parseInt(t,10);h(r.digest,o,l)}}),g.length||c()}function l(){Vt(e.revs_limit,g,r,w,_,b,f,n)}function d(e){function t(){++n===g.length&&e()}if(!g.length)return e();var n=0;g.forEach(function(e){if(e._id&&le(e._id))return t();var n=e.metadata.id;_.executeSql("SELECT json FROM "+bi+" WHERE id = ?",[n],function(e,r){if(r.rows.length){var o=Qt(r.rows.item(0).json);w.set(n,o)}t()})})}function h(e,t,n){var r="SELECT digest FROM "+Ei+" WHERE digest=?";_.executeSql(r,[e],function(o,i){if(i.rows.length)return n();r="INSERT INTO "+Ei+" (digest, body, escaped) VALUES (?,?,1)",o.executeSql(r,[e,On(t)],function(){n()},function(){return n(),!1})})}var p=n.new_edits,v=t.docs,g=v.map(function(e){return e._id&&le(e._id)?e:xt(e,p)}),y=g.filter(function(e){return e.error});if(y.length)return a(y[0]);var _,m,b=new Array(g.length),w=new mo;Kt(g,"binary",function(e){if(e)return a(e);o.transaction(function(e){_=e,c(function(e){e?m=e:d(l)})},Nn(a),s)})}function Fn(e){return e.websql(e.name,e.version,e.description,e.size)}function Mn(e){try{return{db:Fn(e)}}catch(e){return{error:e}}}function Pn(e){var t=Ai.get(e.name);return t||(t=Mn(e),Ai.set(e.name,t)),t}function Un(e,t,n,r,o){function i(){++u===s.length&&o&&o()}function a(e,o){var a=e._attachments[o],s={binary:t.binary,ctx:r};n._getAttachment(e._id,o,a,s,function(t,n){e._attachments[o]=ko(y(a,["digest","content_type"]),{data:n}),i()})}var s=Object.keys(e._attachments||{});if(!s.length)return o&&o();var u=0;s.forEach(function(n){t.attachments&&t.include_docs?a(e,n):(e._attachments[n].stub=!0,i())})}function Jn(e,t){function n(){E()&&(window.localStorage["_pouch__websqldb_"+m._name]=!0),t(null,m)}function r(e,t){e.executeSql(Ci),e.executeSql("ALTER TABLE "+wi+" ADD COLUMN deleted TINYINT(1) DEFAULT 0",[],function(){e.executeSql(Oi),e.executeSql("ALTER TABLE "+bi+" ADD COLUMN local TINYINT(1) DEFAULT 0",[],function(){e.executeSql("CREATE INDEX IF NOT EXISTS 'doc-store-local-idx' ON "+bi+" (local, id)");var n="SELECT "+bi+".winningseq AS seq, "+bi+".json AS metadata FROM "+wi+" JOIN "+bi+" ON "+wi+".seq = "+bi+".winningseq";e.executeSql(n,[],function(e,n){for(var r=[],o=[],i=0;i<n.rows.length;i++){var a=n.rows.item(i),s=a.seq,u=JSON.parse(a.metadata);fe(u)&&r.push(s),le(u.id)&&o.push(u.id)}e.executeSql("UPDATE "+bi+"SET local = 1 WHERE id IN "+In(o.length),o,function(){e.executeSql("UPDATE "+wi+" SET deleted = 1 WHERE seq IN "+In(r.length),r,t)})})})})}function o(e,t){var n="CREATE TABLE IF NOT EXISTS "+ki+" (id UNIQUE, rev, json)";e.executeSql(n,[],function(){var n="SELECT "+bi+".id AS id, "+wi+".json AS data FROM "+wi+" JOIN "+bi+" ON "+wi+".seq = "+bi+".winningseq WHERE local = 1";e.executeSql(n,[],function(e,n){function r(){if(!o.length)return t(e);var n=o.shift(),i=JSON.parse(n.data)._rev;e.executeSql("INSERT INTO "+ki+" (id, rev, json) VALUES (?,?,?)",[n.id,i,n.data],function(e){e.executeSql("DELETE FROM "+bi+" WHERE id=?",[n.id],function(e){e.executeSql("DELETE FROM "+wi+" WHERE seq=?",[n.seq],function(){r()})})})}for(var o=[],i=0;i<n.rows.length;i++)o.push(n.rows.item(i));r()})})}function i(e,t){function n(n){function r(){if(!n.length)return t(e);var o=n.shift(),i=xn(o.hex,_),a=i.lastIndexOf("::"),s=i.substring(0,a),u=i.substring(a+2),c="UPDATE "+wi+" SET doc_id=?, rev=? WHERE doc_id_rev=?";e.executeSql(c,[s,u,i],function(){r()})}r()}var r="ALTER TABLE "+wi+" ADD COLUMN doc_id";e.executeSql(r,[],function(e){var t="ALTER TABLE "+wi+" ADD COLUMN rev";e.executeSql(t,[],function(e){e.executeSql(ji,[],function(e){var t="SELECT hex(doc_id_rev) as hex FROM "+wi;e.executeSql(t,[],function(e,t){for(var r=[],o=0;o<t.rows.length;o++)r.push(t.rows.item(o));n(r)})})})})}function a(e,t){function n(e){var n="SELECT COUNT(*) AS cnt FROM "+Ei;e.executeSql(n,[],function(e,n){function r(){var n=Dn(Ri+", "+bi+".id AS id",[bi,wi],Di,null,bi+".id ");n+=" LIMIT "+i+" OFFSET "+o,o+=i,e.executeSql(n,[],function(e,n){if(!n.rows.length)return t(e);for(var o={},i=0;i<n.rows.length;i++)for(var a=n.rows.item(i),s=Ln(a.data,a.id,a.rev),u=Object.keys(s._attachments||{}),c=0;c<u.length;c++){var f=s._attachments[u[c]];!function(e,t){var n=o[e]=o[e]||[];-1===n.indexOf(t)&&n.push(t)}(f.digest,a.seq)}var l=[];if(Object.keys(o).forEach(function(e){o[e].forEach(function(t){l.push([e,t])})}),!l.length)return r();var d=0;l.forEach(function(t){var n="INSERT INTO "+qi+" (digest, seq) VALUES (?,?)";e.executeSql(n,t,function(){++d===l.length&&r()})})})}if(!n.rows.item(0).cnt)return t(e);var o=0,i=10;r()})}var r="CREATE TABLE IF NOT EXISTS "+qi+" (digest, seq INTEGER)";e.executeSql(r,[],function(e){e.executeSql(Ii,[],function(e){e.executeSql(Li,[],n)})})}function s(e,t){var n="ALTER TABLE "+Ei+" ADD COLUMN escaped TINYINT(1) DEFAULT 0";e.executeSql(n,[],t)}function c(e,t){var n="ALTER TABLE "+bi+" ADD COLUMN max_seq INTEGER";e.executeSql(n,[],function(e){var n="UPDATE "+bi+" SET max_seq=(SELECT MAX(seq) FROM "+wi+" WHERE doc_id=id)";e.executeSql(n,[],function(e){var n="CREATE UNIQUE INDEX IF NOT EXISTS 'doc-max-seq-idx' ON "+bi+" (max_seq)";e.executeSql(n,[],t)})})}function l(e,t){e.executeSql('SELECT HEX("a") AS hex',[],function(e,n){var r=n.rows.item(0).hex;_=2===r.length?"UTF-8":"UTF-16",t()})}function d(){for(;k.length>0;){k.pop()(null,b)}}function h(e,t){if(0===t){var n="CREATE TABLE IF NOT EXISTS "+Si+" (dbid, db_version INTEGER)",u="CREATE TABLE IF NOT EXISTS "+Ei+" (digest UNIQUE, escaped TINYINT(1), body BLOB)",f="CREATE TABLE IF NOT EXISTS "+qi+" (digest, seq INTEGER)",l="CREATE TABLE IF NOT EXISTS "+bi+" (id unique, json, winningseq, max_seq INTEGER UNIQUE)",h="CREATE TABLE IF NOT EXISTS "+wi+" (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, json, deleted TINYINT(1), doc_id, rev)",p="CREATE TABLE IF NOT EXISTS "+ki+" (id UNIQUE, rev, json)";e.executeSql(u),e.executeSql(p),e.executeSql(f,[],function(){e.executeSql(Li),e.executeSql(Ii)}),e.executeSql(l,[],function(){e.executeSql(Ci),e.executeSql(h,[],function(){e.executeSql(Oi),e.executeSql(ji),e.executeSql(n,[],function(){var t="INSERT INTO "+Si+" (db_version, dbid) VALUES (?,?)";b=Wo();var n=[mi,b];e.executeSql(t,n,function(){d()})})})})}else{var v=function(){t<mi&&e.executeSql("UPDATE "+Si+" SET db_version = "+mi);var n="SELECT dbid FROM "+Si;e.executeSql(n,[],function(e,t){b=t.rows.item(0).dbid,d()})},g=[r,o,i,a,s,c,v],y=t,_=function(e){g[y-1](e,_),y++};_(e)}}function p(e){var t="SELECT sql FROM sqlite_master WHERE tbl_name = "+Si;e.executeSql(t,[],function(e,t){t.rows.length?/db_version/.test(t.rows.item(0).sql)?e.executeSql("SELECT db_version FROM "+Si,[],function(e,t){h(e,t.rows.item(0).db_version)}):e.executeSql("ALTER TABLE "+Si+" ADD COLUMN db_version INTEGER",[],function(){h(e,1)}):h(e,0)})}function v(e,t){var n="SELECT MAX(seq) AS seq FROM "+wi;e.executeSql(n,[],function(e,n){var r=n.rows.item(0).seq||0;t(r)})}function g(e,t){var n=Dn("COUNT("+bi+".id) AS 'num'",[bi,wi],Di,wi+".deleted=0");e.executeSql(n,[],function(e,n){t(n.rows.item(0).num)})}function y(e,t,n,r,o){var i=Dn(Ri,[bi,wi],Di,bi+".id=?"),a=[t];e.executeSql(i,a,function(e,t){if(!t.rows.length){var i=j(qo,"missing");return o(i)}var a=t.rows.item(0),s=Qt(a.metadata);r(de(n,s))})}var _,m=this,b=null,w=Bn(e),k=[];m._name=e.name;var S=ko({},e,{version:Ti,description:e.name,size:w}),q=Pn(S);if(q.error)return Nn(t)(q.error);var A=q.db;"function"!=typeof A.readTransaction&&(A.readTransaction=A.transaction),function(){A.transaction(function(e){l(e,function(){p(e)})},Nn(t),n)}(),m._remote=!1,m.type=function(){return"websql"},m._id=f(function(e){e(null,b)}),m._info=function(e){var t,n;A.readTransaction(function(e){v(e,function(e){t=e}),g(e,function(e){n=e})},Nn(e),function(){e(null,{doc_count:n,update_seq:t,websql_encoding:_})})},m._bulkDocs=function(t,n,r){$n(e,t,n,m,A,xi,r)},m._get=function(e,t,n){function r(e){n(e,{doc:o,metadata:i,ctx:a})}var o,i,a=t.ctx;if(!a)return A.readTransaction(function(r){m._get(e,ko({ctx:r},t),n)});var s,u;if(t.rev){if(t.latest)return void y(a,e,t.rev,function(r){t.latest=!1,t.rev=r,m._get(e,t,n)},r);s=Dn(Ri,[bi,wi],bi+".id="+wi+".doc_id",[wi+".doc_id=?",wi+".rev=?"]),u=[e,t.rev]}else s=Dn(Ri,[bi,wi],Di,bi+".id=?"),u=[e];a.executeSql(s,u,function(e,n){if(!n.rows.length){return r(j(qo,"missing"))}var a=n.rows.item(0);if(i=Qt(a.metadata),a.deleted&&!t.rev){return r(j(qo,"deleted"))}o=Ln(a.data,i.id,a.rev),r()})},m._allDocs=function(e,t){var n,r=[],o="startkey"in e&&e.startkey,i="endkey"in e&&e.endkey,a="key"in e&&e.key,s="descending"in e&&e.descending,u="limit"in e?e.limit:-1,c="skip"in e?e.skip:0,f=!1!==e.inclusive_end,l=[],d=[];if(!1!==a)d.push(bi+".id = ?"),l.push(a);else if(!1!==o||!1!==i){if(!1!==o&&(d.push(bi+".id "+(s?"<=":">=")+" ?"),l.push(o)),!1!==i){var h=s?">":"<";f&&(h+="="),d.push(bi+".id "+h+" ?"),l.push(i)}!1!==a&&(d.push(bi+".id = ?"),l.push(a))}"ok"!==e.deleted&&d.push(wi+".deleted = 0"),A.readTransaction(function(t){if(g(t,function(e){n=e}),0!==u){var o=Dn(Ri,[bi,wi],Di,d,bi+".id "+(s?"DESC":"ASC"));o+=" LIMIT "+u+" OFFSET "+c,t.executeSql(o,l,function(t,n){for(var o=0,i=n.rows.length;o<i;o++){var a=n.rows.item(o),s=Qt(a.metadata),u=s.id,c=Ln(a.data,u,a.rev),f=c._rev,l={id:u,key:u,value:{rev:f}};if(e.include_docs){if(l.doc=c,l.doc._rev=f,e.conflicts){var d=V(s);d.length&&(l.doc._conflicts=d)}Un(l.doc,e,m,t)}if(a.deleted){if("ok"!==e.deleted)continue;l.value.deleted=!0,l.doc=null}r.push(l)}})}},Nn(t),function(){t(null,{total_rows:n,offset:e.skip,rows:r})})},m._changes=function(e){if(e=u(e),e.continuous){var t=m._name+":"+Wo();return xi.addListener(m._name,t,m,e),xi.notify(m._name),{cancel:function(){xi.removeListener(m._name,t)}}}var n=e.descending;e.since=e.since&&!n?e.since:0;var r="limit"in e?e.limit:-1;0===r&&(r=1);var o;o="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var i=[],a=0;!function(){var t=bi+".json AS metadata, "+bi+".max_seq AS maxSeq, "+wi+".json AS winningDoc, "+wi+".rev AS winningRev ",s=bi+" JOIN "+wi,u=bi+".id="+wi+".doc_id AND "+bi+".winningseq="+wi+".seq",c=["maxSeq > ?"],f=[e.since];e.doc_ids&&(c.push(bi+".id IN "+In(e.doc_ids.length)),f=f.concat(e.doc_ids));var l="maxSeq "+(n?"DESC":"ASC"),d=Dn(t,s,u,c,l),h=I(e);e.view||e.filter||(d+=" LIMIT "+r);var p=e.since||0;A.readTransaction(function(t){t.executeSql(d,f,function(t,n){function s(t){return function(){e.onChange(t)}}for(var u=0,c=n.rows.length;u<c;u++){var f=n.rows.item(u),l=Qt(f.metadata);p=f.maxSeq;var d=Ln(f.winningDoc,l.id,f.winningRev),v=e.processChange(d,l,e);v.seq=f.maxSeq;var g=h(v);if("object"==typeof g)return e.complete(g);if(g&&(a++,o&&i.push(v),e.attachments&&e.include_docs?Un(d,e,m,t,s(v)):s(v)()),a===r)break}})},Nn(e.complete),function(){e.continuous||e.complete(null,{results:i,last_seq:p})})}()},m._close=function(e){e()},m._getAttachment=function(e,t,n,r,o){var i,a=r.ctx,s=n.digest,u=n.content_type,c="SELECT escaped, CASE WHEN escaped = 1 THEN body ELSE HEX(body) END AS body FROM "+Ei+" WHERE digest=?";a.executeSql(c,[s],function(e,t){var n=t.rows.item(0),a=n.escaped?jn(n.body):xn(n.body,_);i=r.binary?jt(a,u):ni(a),o(null,i)})},m._getRevisionTree=function(e,t){A.readTransaction(function(n){var r="SELECT json AS metadata FROM "+bi+" WHERE id = ?";n.executeSql(r,[e],function(e,n){if(n.rows.length){var r=Qt(n.rows.item(0).metadata);t(null,r.rev_tree)}else t(j(qo))})})},m._doCompaction=function(e,t,n){if(!t.length)return n();A.transaction(function(n){var r="SELECT json AS metadata FROM "+bi+" WHERE id = ?";n.executeSql(r,[e],function(n,r){var o=Qt(r.rows.item(0).metadata);K(o.rev_tree,function(e,n,r,o,i){var a=n+"-"+r;-1!==t.indexOf(a)&&(i.status="missing")});var i="UPDATE "+bi+" SET json = ? WHERE id = ?";n.executeSql(i,[Yt(o),e])}),Rn(t,e,n)},Nn(n),function(){n()})},m._getLocal=function(e,t){A.readTransaction(function(n){var r="SELECT json, rev FROM "+ki+" WHERE id=?";n.executeSql(r,[e],function(n,r){if(r.rows.length){var o=r.rows.item(0),i=Ln(o.json,e,o.rev);t(null,i)}else t(j(qo))})})},m._putLocal=function(e,t,n){function r(e){var r,c;i?(r="UPDATE "+ki+" SET rev=?, json=? WHERE id=? AND rev=?",c=[o,u,a,i]):(r="INSERT INTO "+ki+" (id, rev, json) VALUES (?,?,?)",c=[a,o,u]),e.executeSql(r,c,function(e,r){r.rowsAffected?(s={ok:!0,id:a,rev:o},t.ctx&&n(null,s)):n(j(Ao))},function(){return n(j(Ao)),!1})}"function"==typeof t&&(n=t,t={}),delete e._revisions;var o,i=e._rev,a=e._id;o=e._rev=i?"0-"+(parseInt(i.split("-")[1],10)+1):"0-1";var s,u=Cn(e);t.ctx?r(t.ctx):A.transaction(r,Nn(n),function(){s&&n(null,s)})},m._removeLocal=function(e,t,n){function r(r){var i="DELETE FROM "+ki+" WHERE id=? AND rev=?",a=[e._id,e._rev];r.executeSql(i,a,function(r,i){if(!i.rowsAffected)return n(j(qo));o={ok:!0,id:e._id,rev:"0-0"},t.ctx&&n(null,o)})}"function"==typeof t&&(n=t,t={});var o;t.ctx?r(t.ctx):A.transaction(r,Nn(n),function(){o&&n(null,o)})},m._destroy=function(e,t){xi.removeAllListeners(m._name),A.transaction(function(e){[bi,wi,Ei,Si,ki,qi].forEach(function(t){e.executeSql("DROP TABLE IF EXISTS "+t,[])})},Nn(t),function(){E()&&(delete window.localStorage["_pouch__websqldb_"+m._name],delete window.localStorage[m._name]),t(null,{ok:!0})})}}function Hn(){try{return openDatabase("_pouch_validate_websql",1,"",1),!0}catch(e){return!1}}function Wn(){if("undefined"==typeof indexedDB||null===indexedDB||!/iP(hone|od|ad)/.test(navigator.userAgent))return!0;var e=E(),t="_pouch__websqldb_valid_"+navigator.userAgent;if(e&&localStorage[t])return"1"===localStorage[t];var n=Hn();return e&&(localStorage[t]=n?"1":"0"),n}function zn(){return"function"==typeof openDatabase&&Wn()}function Kn(e,t,n,r){return openDatabase(e,t,n,r)}function Xn(e,t){var n=ko({websql:Kn},e);Jn.call(this,n,t)}function Gn(){for(var e={},t=new vo(function(t,n){e.resolve=t,e.reject=n}),n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.promise=t,vo.resolve().then(function(){return fetch.apply(null,n)}).then(function(t){e.resolve(t)}).catch(function(t){e.reject(t)}),e}function Vn(e,t){var n,r,o,i=new Headers,a={method:e.method,credentials:"include",headers:i};return e.json&&(i.set("Accept","application/json"),i.set("Content-Type",e.headers["Content-Type"]||"application/json")),e.body&&e.processData&&"string"!=typeof e.body?a.body=JSON.stringify(e.body):a.body="body"in e?e.body:null,Object.keys(e.headers).forEach(function(t){e.headers.hasOwnProperty(t)&&i.set(t,e.headers[t])}),n=Gn(e.url,a),e.timeout>0&&(r=setTimeout(function(){n.reject(new Error("Load timeout for resource: "+e.url))},e.timeout)),n.promise.then(function(t){return o={statusCode:t.status},e.timeout>0&&clearTimeout(r),o.statusCode>=200&&o.statusCode<300?e.binary?t.blob():t.text():t.json()}).then(function(e){o.statusCode>=200&&o.statusCode<300?t(null,o,e):(e.status=o.statusCode,t(e))}).catch(function(e){e||(e=new Error("canceled")),t(e)}),{abort:n.reject}}function Qn(e,t){var n,r,o=!1,i=function(){n.abort(),u()},a=function(){o=!0,n.abort(),u()},s={abort:i},u=function(){clearTimeout(r),s.abort=function(){},n&&(n.onprogress=void 0,n.upload&&(n.upload.onprogress=void 0),n.onreadystatechange=void 0,n=void 0)};n=e.xhr?new e.xhr:new XMLHttpRequest;try{n.open(e.method,e.url)}catch(e){return t(new Error(e.name||"Url is invalid"))}n.withCredentials=!("withCredentials"in e)||e.withCredentials,"GET"===e.method?delete e.headers["Content-Type"]:e.json&&(e.headers.Accept="application/json",e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json",e.body&&e.processData&&"string"!=typeof e.body&&(e.body=JSON.stringify(e.body))),e.binary&&(n.responseType="arraybuffer"),"body"in e||(e.body=null);for(var c in e.headers)e.headers.hasOwnProperty(c)&&n.setRequestHeader(c,e.headers[c]);return e.timeout>0&&(r=setTimeout(a,e.timeout),n.onprogress=function(){clearTimeout(r),4!==n.readyState&&(r=setTimeout(a,e.timeout))},void 0!==n.upload&&(n.upload.onprogress=n.onprogress)),n.onreadystatechange=function(){if(4===n.readyState){var r={statusCode:n.status};if(n.status>=200&&n.status<300){var i;i=e.binary?Tt([n.response||""],{type:n.getResponseHeader("Content-Type")}):n.responseText,t(null,r,i)}else{var a={};if(o)a=new Error("ETIMEDOUT"),a.code="ETIMEDOUT";else if("string"==typeof n.response)try{a=JSON.parse(n.response)}catch(e){}a.status=n.status,t(a)}u()}},e.body&&e.body instanceof Blob?Nt(e.body,function(e){n.send(e)}):n.send(e.body),s}function Yn(e,t){return Bi||e.xhr?Qn(e,t):Vn(e,t)}function Zn(){return""}function er(e,t){function n(t,n,r){if(!e.binary&&e.json&&"string"==typeof t)try{t=JSON.parse(t)}catch(e){return r(e)}Array.isArray(t)&&(t=t.map(function(e){return e.error||e.missing?C(e):e})),e.binary&&$i(t,n),r(null,t,n)}return e=u(e),e=ko({method:"GET",headers:{},json:!0,processData:!0,timeout:1e4,cache:!1},e),e.json&&(e.binary||(e.headers.Accept="application/json"),e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json"),e.binary&&(e.encoding=null,e.json=!1),e.processData||(e.json=!1),Yn(e,function(r,o,i){if(r)return t(C(r));var a,s=o.headers&&o.headers["content-type"],u=i||Zn();if(!e.binary&&(e.json||!e.processData)&&"object"!=typeof u&&(/json/.test(s)||/^[\s]*\{/.test(u)&&/\}[\s]*$/.test(u)))try{u=JSON.parse(u.toString())}catch(e){}o.statusCode>=200&&o.statusCode<300?n(u,o,t):(a=C(u),a.status=o.statusCode,t(a))})}function tr(e,t){var n=navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",r=-1!==n.indexOf("safari")&&-1===n.indexOf("chrome"),o=-1!==n.indexOf("msie"),i=-1!==n.indexOf("edge"),a=r||(o||i)&&"GET"===e.method,s=!("cache"in e)||e.cache;if(!/^blob:/.test(e.url)&&(a||!s)){var u=-1!==e.url.indexOf("?");e.url+=(u?"&":"?")+"_nonce="+Date.now()}return er(e,t)}function nr(e,t){return new vo(function(n,r){function o(){f++,e[l++]().then(a,s)}function i(){++d===h?c?r(c):n():u()}function a(){f--,i()}function s(e){f--,c=c||e,i()}function u(){for(;f<t&&l<h;)o()}var c,f=0,l=0,d=0,h=e.length;u()})}function rr(e){var t=e.doc&&e.doc._attachments;t&&Object.keys(t).forEach(function(e){var n=t[e];n.data=Ct(n.data,n.content_type)})}function or(e){return/^_design/.test(e)?"_design/"+encodeURIComponent(e.slice(8)):/^_local/.test(e)?"_local/"+encodeURIComponent(e.slice(7)):encodeURIComponent(e)}function ir(e){return e._attachments&&Object.keys(e._attachments)?vo.all(Object.keys(e._attachments).map(function(t){var n=e._attachments[t];if(n.data&&"string"!=typeof n.data)return new vo(function(e){Rt(n.data,e)}).then(function(e){n.data=e})})):vo.resolve()}function ar(e){if(!e.prefix)return!1;var t=P(e.prefix).protocol;return"http"===t||"https"===t}function sr(e,t){if(ar(t)){var n=t.name.substr(t.prefix.length);e=t.prefix+encodeURIComponent(n)}var r=P(e);(r.user||r.password)&&(r.auth={username:r.user,password:r.password});var o=r.path.replace(/(^\/|\/$)/g,"").split("/");return r.db=o.pop(),-1===r.db.indexOf("%")&&(r.db=encodeURIComponent(r.db)),r.path=o.join("/"),r}function ur(e,t){return cr(e,e.db+"/"+t)}function cr(e,t){var n=e.path?"/":"";return e.protocol+"://"+e.host+(e.port?":"+e.port:"")+"/"+e.path+n+t}function fr(e){return"?"+Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}function lr(e,t){function n(e,t,n){var r=e.ajax||{},o=ko(u(l),r,t),i=u(l.headers||{});return o.headers=ko(i,r.headers,t.headers||{}),s.constructor.listeners("debug").length&&s.constructor.emit("debug",["http",o.method,o.url]),s._ajax(o,n)}function r(e,t){return new vo(function(r,o){n(e,t,function(e,t){if(e)return o(e);r(t)})})}function o(e,t){return d(e,so(function(e){i().then(function(){return t.apply(this,e)}).catch(function(t){e.pop()(t)})}))}function i(){return e.skipSetup||e.skip_setup?vo.resolve():g||(g=r({},{method:"GET",url:f}).catch(function(e){return e&&e.status&&404===e.status?(T(404,"PouchDB is just detecting if the remote exists."),r({},{method:"PUT",url:f})):vo.reject(e)}).catch(function(e){return!(!e||!e.status||412!==e.status)||vo.reject(e)}),g.catch(function(){g=null}),g)}function a(e){return e.split("/").map(encodeURIComponent).join("/")}var s=this,c=sr(e.name,e),f=ur(c,"");e=u(e);var l=e.ajax||{};if(e.auth||c.auth){var h=e.auth||c.auth,p=h.username+":"+h.password,v=ni(unescape(encodeURIComponent(p)));l.headers=l.headers||{},l.headers.Authorization="Basic "+v}s._ajax=tr;var g;fo(function(){t(null,s)}),s._remote=!0,s.type=function(){return"http"},s.id=o("id",function(e){n({},{method:"GET",url:cr(c,"")},function(t,n){var r=n&&n.uuid?n.uuid+c.db:ur(c,"");e(null,r)})}),s.request=o("request",function(e,t){e.url=ur(c,e.url),n({},e,t)}),s.compact=o("compact",function(e,t){"function"==typeof e&&(t=e,e={}),e=u(e),n(e,{url:ur(c,"_compact"),method:"POST"},function(){function n(){s.info(function(r,o){o&&!o.compact_running?t(null,{ok:!0}):setTimeout(n,e.interval||200)})}n()})}),s.bulkGet=d("bulkGet",function(e,t){function r(t){var r={};e.revs&&(r.revs=!0),e.attachments&&(r.attachments=!0),e.latest&&(r.latest=!0),n(e,{url:ur(c,"_bulk_get"+fr(r)),method:"POST",body:{docs:e.docs}},t)}function o(){for(var n=Mi,r=Math.ceil(e.docs.length/n),o=0,a=new Array(r),s=0;s<r;s++){var u=y(e,["revs","attachments","latest"]);u.ajax=l,u.docs=e.docs.slice(s*n,Math.min(e.docs.length,(s+1)*n)),b(i,u,function(e){return function(n,i){a[e]=i.results,++o===r&&t(null,{results:D(a)})}}(s))}}var i=this,a=cr(c,""),s=Ji[a];"boolean"!=typeof s?r(function(e,n){e?(Ji[a]=!1,T(e.status,"PouchDB is just detecting if the remote supports the _bulk_get API."),o()):(Ji[a]=!0,t(null,n))}):s?r(t):o()}),s._info=function(e){i().then(function(){n({},{method:"GET",url:ur(c,"")},function(t,n){if(t)return e(t);n.host=ur(c,""),e(null,n)})}).catch(e)},s.get=o("get",function(e,t,n){function o(e){function n(n){var i=o[n],s=or(e._id)+"/"+a(n)+"?rev="+e._rev;return r(t,{method:"GET",url:ur(c,s),binary:!0}).then(function(e){return t.binary?e:new vo(function(t){Rt(e,t)})}).then(function(e){delete i.stub,delete i.length,i.data=e})}var o=e._attachments,i=o&&Object.keys(o);if(o&&i.length){return nr(i.map(function(e){return function(){return n(e)}}),5)}}function i(e){return Array.isArray(e)?vo.all(e.map(function(e){if(e.ok)return o(e.ok)})):o(e)}"function"==typeof t&&(n=t,t={}),t=u(t);var s={};t.revs&&(s.revs=!0),t.revs_info&&(s.revs_info=!0),t.latest&&(s.latest=!0),t.open_revs&&("all"!==t.open_revs&&(t.open_revs=JSON.stringify(t.open_revs)),s.open_revs=t.open_revs),t.rev&&(s.rev=t.rev),t.conflicts&&(s.conflicts=t.conflicts),e=or(e);var f={method:"GET",url:ur(c,e+fr(s))};r(t,f).then(function(e){return vo.resolve().then(function(){if(t.attachments)return i(e)}).then(function(){n(null,e)})}).catch(function(t){t.docId=e,n(t)})}),s.remove=o("remove",function(e,t,r,o){var i;"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof r&&(o=r,r={})):(i=e,"function"==typeof t?(o=t,r={}):(o=r,r=t));var a=i._rev||r.rev;n(r,{method:"DELETE",url:ur(c,or(i._id))+"?rev="+a},o)}),s.getAttachment=o("getAttachment",function(e,t,r,o){"function"==typeof r&&(o=r,r={});var i=r.rev?"?rev="+r.rev:"";n(r,{method:"GET",url:ur(c,or(e))+"/"+a(t)+i,binary:!0},o)}),s.removeAttachment=o("removeAttachment",function(e,t,r,o){n({},{method:"DELETE",url:ur(c,or(e)+"/"+a(t))+"?rev="+r},o)}),s.putAttachment=o("putAttachment",function(e,t,r,o,i,s){"function"==typeof i&&(s=i,i=o,o=r,r=null);var u=or(e)+"/"+a(t),f=ur(c,u);if(r&&(f+="?rev="+r),"string"==typeof o){var d;try{d=ti(o)}catch(e){return s(j(Co,"Attachment is not a valid base64 string"))}o=d?jt(d,i):""}n({},{headers:{"Content-Type":i},method:"PUT",url:f,processData:!1,body:o,timeout:l.timeout||6e4},s)}),s._bulkDocs=function(e,t,r){e.new_edits=t.new_edits,i().then(function(){return vo.all(e.docs.map(ir))}).then(function(){n(t,{method:"POST",url:ur(c,"_bulk_docs"),timeout:t.timeout,body:e},function(e,t){if(e)return r(e);t.forEach(function(e){e.ok=!0}),r(null,t)})}).catch(r)},s._put=function(e,t,r){i().then(function(){return ir(e)}).then(function(){n(t,{method:"PUT",url:ur(c,or(e._id)),body:e},function(t,n){if(t)return t.docId=e&&e._id,r(t);r(null,n)})}).catch(r)},s.allDocs=o("allDocs",function(e,t){"function"==typeof e&&(t=e,e={}),e=u(e);var n,o={},i="GET";e.conflicts&&(o.conflicts=!0),e.descending&&(o.descending=!0),e.include_docs&&(o.include_docs=!0),e.attachments&&(o.attachments=!0),e.key&&(o.key=JSON.stringify(e.key)),e.start_key&&(e.startkey=e.start_key),e.startkey&&(o.startkey=JSON.stringify(e.startkey)),e.end_key&&(e.endkey=e.end_key),e.endkey&&(o.endkey=JSON.stringify(e.endkey)),void 0!==e.inclusive_end&&(o.inclusive_end=!!e.inclusive_end),void 0!==e.limit&&(o.limit=e.limit),void 0!==e.skip&&(o.skip=e.skip);var a=fr(o);void 0!==e.keys&&(i="POST",n={keys:e.keys}),r(e,{method:i,url:ur(c,"_all_docs"+a),body:n}).then(function(n){e.include_docs&&e.attachments&&e.binary&&n.rows.forEach(rr),t(null,n)}).catch(t)}),s._changes=function(e){var t="batch_size"in e?e.batch_size:Fi;e=u(e),!e.continuous||"heartbeat"in e||(e.heartbeat=Ui);var r="timeout"in e?e.timeout:"timeout"in l?l.timeout:3e4;"timeout"in e&&e.timeout&&r-e.timeout<Pi&&(r=e.timeout+Pi),"heartbeat"in e&&e.heartbeat&&r-e.heartbeat<Pi&&(r=e.heartbeat+Pi);var o={};"timeout"in e&&e.timeout&&(o.timeout=e.timeout);var a,s=void 0!==e.limit&&e.limit;a="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var f=s;if(e.style&&(o.style=e.style),(e.include_docs||e.filter&&"function"==typeof e.filter)&&(o.include_docs=!0),e.attachments&&(o.attachments=!0),e.continuous&&(o.feed="longpoll"),e.conflicts&&(o.conflicts=!0),e.descending&&(o.descending=!0),"heartbeat"in e&&e.heartbeat&&(o.heartbeat=e.heartbeat),e.filter&&"string"==typeof e.filter&&(o.filter=e.filter),e.view&&"string"==typeof e.view&&(o.filter="_view",o.view=e.view),e.query_params&&"object"==typeof e.query_params)for(var d in e.query_params)e.query_params.hasOwnProperty(d)&&(o[d]=e.query_params[d]);var h,p="GET";e.doc_ids?(o.filter="_doc_ids",p="POST",h={doc_ids:e.doc_ids}):e.selector&&(o.filter="_selector",p="POST",h={selector:e.selector});var v,g,y=function(a,u){if(!e.aborted){o.since=a,"object"==typeof o.since&&(o.since=JSON.stringify(o.since)),e.descending?s&&(o.limit=f):o.limit=!s||f>t?t:f;var l={method:p,url:ur(c,"_changes"+fr(o)),timeout:r,body:h};g=a,e.aborted||i().then(function(){v=n(e,l,u)}).catch(u)}},_={results:[]},m=function(n,r){if(!e.aborted){var o=0;if(r&&r.results){o=r.results.length,_.last_seq=r.last_seq;({}).query=e.query_params,r.results=r.results.filter(function(t){f--;var n=I(e)(t);return n&&(e.include_docs&&e.attachments&&e.binary&&rr(t),a&&_.results.push(t),e.onChange(t)),n})}else if(n)return e.aborted=!0,void e.complete(n);r&&r.last_seq&&(g=r.last_seq);var i=s&&f<=0||r&&o<t||e.descending;(!e.continuous||s&&f<=0)&&i?e.complete(null,_):fo(function(){y(g,m)})}};return y(e.since||0,m),{cancel:function(){e.aborted=!0,v&&v.abort()}}},s.revsDiff=o("revsDiff",function(e,t,r){"function"==typeof t&&(r=t,t={}),n(t,{method:"POST",url:ur(c,"_revs_diff"),body:e},r)}),s._close=function(e){e()},s._destroy=function(e,t){n(e,{url:ur(c,""),method:"DELETE"},function(e,n){if(e&&e.status&&404!==e.status)return t(e);t(null,n)})}}function dr(e){this.status=400,this.name="query_parse_error",this.message=e,this.error=!0;try{Error.captureStackTrace(this,dr)}catch(e){}}function hr(e){this.status=404,this.name="not_found",this.message=e,this.error=!0;try{Error.captureStackTrace(this,hr)}catch(e){}}function pr(e){this.status=500,this.name="invalid_value",this.message=e,this.error=!0;try{Error.captureStackTrace(this,pr)}catch(e){}}function vr(e,t){return t&&e.then(function(e){fo(function(){t(null,e)})},function(e){fo(function(){t(e)})}),e}function gr(e){return so(function(t){var n=t.pop(),r=e.apply(this,t);return"function"==typeof n&&vr(r,n),r})}function yr(e,t){return e.then(function(e){return t().then(function(){return e})},function(e){return t().then(function(){throw e})})}function _r(e,t){return function(){var n=arguments,r=this;return e.add(function(){return t.apply(r,n)})}}function mr(e){var t=new _o(e),n=new Array(t.size),r=-1;return t.forEach(function(e){n[++r]=e}),n}function br(e){var t=new Array(e.size),n=-1;return e.forEach(function(e,r){t[++n]=r}),t}function wr(e){return new pr("builtin "+e+" function requires map values to be numbers or number arrays")}function Er(e){for(var t=0,n=0,r=e.length;n<r;n++){var o=e[n];if("number"!=typeof o){if(!Array.isArray(o))throw wr("_sum");t="number"==typeof t?[t]:t;for(var i=0,a=o.length;i<a;i++){var s=o[i];if("number"!=typeof s)throw wr("_sum");void 0===t[i]?t.push(s):t[i]+=s}}else"number"==typeof t?t+=o:t[0]+=o}return t}function kr(e,t){return U("return ("+e.replace(/;\s*$/,"")+");",{emit:t,sum:Er,log:Wi,isArray:zi,toJSON:Ki})}function Sr(){this.promise=new vo(function(e){e()})}function qr(e){if(!e)return"undefined";switch(typeof e){case"function":case"string":return e.toString();default:return JSON.stringify(e)}}function Ar(e,t){return qr(e)+qr(t)+"undefined"}function xr(e,t,n,r,o,i){var a,s=Ar(n,r);if(!o&&(a=e._cachedViews=e._cachedViews||{},a[s]))return a[s];var u=e.info().then(function(u){function c(e){e.views=e.views||{};var n=t;-1===n.indexOf("/")&&(n=t+"/"+t);var r=e.views[n]=e.views[n]||{};if(!r[f])return r[f]=!0,e}var f=u.db_name+"-mrview-"+(o?"temp":Ut(s));return J(e,"_local/"+i,c).then(function(){return e.registerDependentDatabase(f).then(function(t){var o=t.db;o.auto_compaction=!0;var i={name:f,db:o,sourceDB:e,adapter:e.adapter,mapFun:n,reduceFun:r};return i.db.get("_local/lastSeq").catch(function(e){if(404!==e.status)throw e}).then(function(e){return i.seq=e?e.seq:0,a&&i.db.once("destroyed",function(){delete a[s]}),i})})})});return a&&(a[s]=u),u}function Tr(e){return-1===e.indexOf("/")?[e,e]:e.split("/")}function Or(e){return 1===e.length&&/^1-/.test(e[0].rev)}function jr(e,t){try{e.emit("error",t)}catch(e){q("error","The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."),q("error",t)}}function Cr(e){if(/^_sum/.test(e))return Qi._sum;if(/^_count/.test(e))return Qi._count;if(/^_stats/.test(e))return Qi._stats;if(/^_/.test(e))throw new Error(e+" is not a supported reduce function.")}function Lr(e,t){if("function"==typeof e&&2===e.length){var n=e;return function(e){return n(e,t)}}return kr(e.toString(),t)}function Ir(e){var t=e.toString(),n=Cr(t);return n||kr(t)}function Dr(e,t){var n=e.views&&e.views[t];if("string"!=typeof n.map)throw new hr("ddoc "+e._id+" has no string view named "+t+", instead found object of type: "+typeof n.map)}function Rr(e,t,n){return Yi.query.call(this,e,t,n)}function Nr(e){return Yi.viewCleanup.call(this,e)}function Br(e){return/^1-/.test(e)}function $r(e,t,n){return!e._attachments||!e._attachments[n]||e._attachments[n].digest!==t._attachments[n].digest}function Fr(e,t){var n=Object.keys(t._attachments);return vo.all(n.map(function(n){return e.getAttachment(t._id,n,{rev:t._rev})}))}function Mr(e,t,n){var r=B(t)&&!B(e),o=Object.keys(n._attachments);return r?e.get(n._id).then(function(r){return vo.all(o.map(function(o){return $r(r,n,o)?t.getAttachment(n._id,o):e.getAttachment(r._id,o)}))}).catch(function(e){if(404!==e.status)throw e;return Fr(t,n)}):Fr(t,n)}function Pr(e){var t=[];return Object.keys(e).forEach(function(n){e[n].missing.forEach(function(e){t.push({id:n,rev:e})})}),{docs:t,revs:!0,latest:!0}}function Ur(e,t,n,r){function o(){var o=Pr(n);if(o.docs.length)return e.bulkGet(o).then(function(n){if(r.cancelled)throw new Error("cancelled");return vo.all(n.results.map(function(n){return vo.all(n.docs.map(function(n){var r=n.ok;return n.error&&(d=!1),r&&r._attachments?Mr(t,e,r).then(function(e){var t=Object.keys(r._attachments);return e.forEach(function(e,n){var o=r._attachments[t[n]];delete o.stub,delete o.length,o.data=e}),r}):r}))})).then(function(e){l=l.concat(D(e).filter(Boolean))})})}function i(e){return e._attachments&&Object.keys(e._attachments).length>0}function a(e){return e._conflicts&&e._conflicts.length>0}function s(t){return e.allDocs({keys:t,include_docs:!0,conflicts:!0}).then(function(e){if(r.cancelled)throw new Error("cancelled");e.rows.forEach(function(e){e.deleted||!e.doc||!Br(e.value.rev)||i(e.doc)||a(e.doc)||(e.doc._conflicts&&delete e.doc._conflicts,l.push(e.doc),delete n[e.id])})})}function c(){var e=Object.keys(n).filter(function(e){var t=n[e].missing;return 1===t.length&&Br(t[0])});if(e.length>0)return s(e)}function f(){return{ok:d,docs:l}}n=u(n);var l=[],d=!0;return vo.resolve().then(c).then(o).then(f)}function Jr(e,t,n,r,o){return e.get(t).catch(function(n){if(404===n.status)return"http"!==e.adapter&&"https"!==e.adapter||T(404,"PouchDB is just checking if a remote checkpoint exists."),{session_id:r,_id:t,history:[],replicator:ta,version:ea};throw n}).then(function(i){if(!o.cancelled&&i.last_seq!==n)return i.history=(i.history||[]).filter(function(e){return e.session_id!==r}),i.history.unshift({last_seq:n,session_id:r}),i.history=i.history.slice(0,na),i.version=ea,i.replicator=ta,i.session_id=r,i.last_seq=n,e.put(i).catch(function(i){if(409===i.status)return Jr(e,t,n,r,o);throw i})})}function Hr(e,t,n,r,o){this.src=e,this.target=t,this.id=n,this.returnValue=r,this.opts=o}function Wr(e,t){return e.session_id===t.session_id?{last_seq:e.last_seq,history:e.history}:zr(e.history,t.history)}function zr(e,t){var n=e[0],r=e.slice(1),o=t[0],i=t.slice(1);return n&&0!==t.length?Kr(n.session_id,t)?{last_seq:n.last_seq,history:e}:Kr(o.session_id,r)?{last_seq:o.last_seq,history:i}:zr(r,i):{last_seq:ra,history:[]}}function Kr(e,t){var n=t[0],r=t.slice(1);return!(!e||0===t.length)&&(e===n.session_id||Kr(e,r))}function Xr(e){return"number"==typeof e.status&&4===Math.floor(e.status/100)}function Gr(e,t,n,r){if(!1===e.retry)return t.emit("error",n),void t.removeAllListeners();if("function"!=typeof e.back_off_function&&(e.back_off_function=x),t.emit("requestError",n),"active"===t.state||"pending"===t.state){t.emit("paused",n),t.state="stopped";var o=function(){e.current_back_off=ia},i=function(){t.removeListener("active",o)};t.once("paused",i),t.once("active",o)}e.current_back_off=e.current_back_off||ia,e.current_back_off=e.back_off_function(e.current_back_off),setTimeout(r,e.current_back_off)}function Vr(e){return Object.keys(e).sort(He).reduce(function(t,n){return t[n]=e[n],t},{})}function Qr(e,t,n){var r=n.doc_ids?n.doc_ids.sort(He):"",o=n.filter?n.filter.toString():"",i="",a="",s="";return n.selector&&(s=JSON.stringify(n.selector)),n.filter&&n.query_params&&(i=JSON.stringify(Vr(n.query_params))),n.filter&&"_view"===n.filter&&(a=n.view.toString()),vo.all([e.id(),t.id()]).then(function(e){var t=e[0]+e[1]+o+a+i+r+s;return new vo(function(e){Pt(t,e)})}).then(function(e){return"_local/"+(e=e.replace(/\//g,".").replace(/\+/g,"_"))})}function Yr(e,t,n,r,o){function i(){return k?vo.resolve():Qr(e,t,n).then(function(o){E=o;var i={};i=!1===n.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!1}:"source"===n.checkpoint?{writeSourceCheckpoint:!0,writeTargetCheckpoint:!1}:"target"===n.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!0}:{writeSourceCheckpoint:!0,writeTargetCheckpoint:!0},k=new Hr(e,t,E,r,i)})}function a(){if($=[],0!==w.docs.length){var e=w.docs,i={timeout:n.timeout};return t.bulkDocs({docs:e,new_edits:!1},i).then(function(t){if(r.cancelled)throw p(),new Error("cancelled");var n=Object.create(null);t.forEach(function(e){e.error&&(n[e.id]=e)});var i=Object.keys(n).length;o.doc_write_failures+=i,o.docs_written+=e.length-i,e.forEach(function(e){var t=n[e._id];if(t){if(o.errors.push(t),"unauthorized"!==t.name&&"forbidden"!==t.name)throw t;r.emit("denied",u(t))}else $.push(e)})},function(t){throw o.doc_write_failures+=e.length,t})}}function s(){if(w.error)throw new Error("There was a problem getting docs.");o.last_seq=O=w.seq;var e=u(o);return $.length&&(e.docs=$,r.emit("change",e)),A=!0,k.writeCheckpoint(w.seq,F).then(function(){if(A=!1,r.cancelled)throw p(),new Error("cancelled");w=void 0,_()}).catch(function(e){throw b(e),e})}function c(){var e={};return w.changes.forEach(function(t){"_user/"!==t.id&&(e[t.id]=t.changes.map(function(e){return e.rev}))}),t.revsDiff(e).then(function(e){if(r.cancelled)throw p(),new Error("cancelled");w.diffs=e})}function f(){return Ur(e,t,w.diffs,r).then(function(e){w.error=!e.ok,e.docs.forEach(function(e){delete w.diffs[e._id],o.docs_read++,w.docs.push(e)})})}function l(){if(!r.cancelled&&!w){if(0===S.length)return void d(!0);w=S.shift(),c().then(f).then(a).then(s).then(l).catch(function(e){h("batch processing terminated with error",e)})}}function d(e){if(0===q.changes.length)return void(0!==S.length||w||((C&&M.live||x)&&(r.state="pending",r.emit("paused")),x&&p()));(e||x||q.changes.length>=L)&&(S.push(q),q={seq:0,changes:[],docs:[]},"pending"!==r.state&&"stopped"!==r.state||(r.state="active",r.emit("active")),l())}function h(e,t){T||(t.message||(t.message=e),o.ok=!1,o.status="aborting",S=[],q={seq:0,changes:[],docs:[]},p(t))}function p(i){T||r.cancelled&&(o.status="cancelled",A)||(o.status=o.status||"complete",o.end_time=new Date,o.last_seq=O,T=!0,i?(i=j(i),i.result=o,"unauthorized"===i.name||"forbidden"===i.name?(r.emit("error",i),r.removeAllListeners()):Gr(n,r,i,function(){Yr(e,t,n,r)})):(r.emit("complete",o),r.removeAllListeners()))}function v(e){if(r.cancelled)return p();I(n)(e)&&(q.seq=e.seq,q.changes.push(e),d(0===S.length&&M.live))}function g(e){if(R=!1,r.cancelled)return p();if(e.results.length>0)M.since=e.last_seq,_(),d(!0);else{var t=function(){C?(M.live=!0,_()):x=!0,d(!0)};w||0!==e.results.length?t():(A=!0,k.writeCheckpoint(e.last_seq,F).then(function(){A=!1,o.last_seq=O=e.last_seq,t()}).catch(b))}}function y(e){if(R=!1,r.cancelled)return p();h("changes rejected",e)}function _(){function t(){i.cancel()}function o(){r.removeListener("cancel",t)}if(!R&&!x&&S.length<D){R=!0,r._changes&&(r.removeListener("cancel",r._abortChanges),r._changes.cancel()),r.once("cancel",t);var i=e.changes(M).on("change",v);i.then(o,o),i.then(g).catch(y),n.retry&&(r._changes=i,r._abortChanges=t)}}function m(){i().then(function(){return r.cancelled?void p():k.getCheckpoint().then(function(e){O=e,M={since:O,limit:L,batch_size:L,style:"all_docs",doc_ids:N,selector:B,return_docs:!0},n.filter&&("string"!=typeof n.filter?M.include_docs=!0:M.filter=n.filter),"heartbeat"in n&&(M.heartbeat=n.heartbeat),"timeout"in n&&(M.timeout=n.timeout),n.query_params&&(M.query_params=n.query_params),n.view&&(M.view=n.view),_()})}).catch(function(e){h("getCheckpoint rejected with ",e)})}function b(e){A=!1,h("writeCheckpoint completed with error",e)}var w,E,k,S=[],q={seq:0,changes:[],docs:[]},A=!1,x=!1,T=!1,O=0,C=n.continuous||n.live||!1,L=n.batch_size||100,D=n.batches_limit||10,R=!1,N=n.doc_ids,B=n.selector,$=[],F=Wo();o=o||{ok:!0,start_time:new Date,docs_read:0,docs_written:0,doc_write_failures:0,errors:[]};var M={};if(r.ready(e,t),r.cancelled)return void p();r._addedListeners||(r.once("cancel",p),"function"==typeof n.complete&&(r.once("error",n.complete),r.once("complete",function(e){n.complete(null,e)})),r._addedListeners=!0),void 0===n.since?m():i().then(function(){return A=!0,k.writeCheckpoint(n.since,F)}).then(function(){if(A=!1,r.cancelled)return void p();O=n.since,m()}).catch(b)}function Zr(){uo.EventEmitter.call(this),this.cancelled=!1,this.state="pending";var e=this,t=new vo(function(t,n){e.once("complete",t),e.once("error",n)});e.then=function(e,n){return t.then(e,n)},e.catch=function(e){return t.catch(e)},e.catch(function(){})}function eo(e,t){var n=t.PouchConstructor;return"string"==typeof e?new n(e,t):e}function to(e,t,n,r){if("function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),n.doc_ids&&!Array.isArray(n.doc_ids))throw j(Do,"`doc_ids` filter parameter is not a list.");n.complete=r,n=u(n),n.continuous=n.continuous||n.live,n.retry="retry"in n&&n.retry,n.PouchConstructor=n.PouchConstructor||this;var o=new Zr(n);return Yr(eo(e,n),eo(t,n),n,o),o}function no(e,t,n,r){return"function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),n=u(n),n.PouchConstructor=n.PouchConstructor||this,e=eo(e,n),t=eo(t,n),new ro(e,t,n,r)}function ro(e,t,n,r){function o(e){p.emit("change",{direction:"pull",change:e})}function i(e){p.emit("change",{direction:"push",change:e})}function a(e){p.emit("denied",{direction:"push",doc:e})}function s(e){p.emit("denied",{direction:"pull",doc:e})}function u(){p.pushPaused=!0,p.pullPaused&&p.emit("paused")}function c(){p.pullPaused=!0,p.pushPaused&&p.emit("paused")}function f(){p.pushPaused=!1,p.pullPaused&&p.emit("active",{direction:"push"})}function l(){p.pullPaused=!1,p.pushPaused&&p.emit("active",{direction:"pull"})}function d(e){return function(t,n){var r="change"===t&&(n===o||n===i),d="denied"===t&&(n===s||n===a),h="paused"===t&&(n===c||n===u),v="active"===t&&(n===l||n===f);(r||d||h||v)&&(t in y||(y[t]={}),y[t][e]=!0,2===Object.keys(y[t]).length&&p.removeAllListeners(t))}}function h(e,t,n){-1==e.listeners(t).indexOf(n)&&e.on(t,n)}var p=this;this.canceled=!1;var v=n.push?ko({},n,n.push):n,g=n.pull?ko({},n,n.pull):n;this.push=to(e,t,v),this.pull=to(t,e,g),this.pushPaused=!0,this.pullPaused=!0;var y={};n.live&&(this.push.on("complete",p.pull.cancel.bind(p.pull)),this.pull.on("complete",p.push.cancel.bind(p.push))),this.on("newListener",function(e){"change"===e?(h(p.pull,"change",o),h(p.push,"change",i)):"denied"===e?(h(p.pull,"denied",s),h(p.push,"denied",a)):"active"===e?(h(p.pull,"active",l),h(p.push,"active",f)):"paused"===e&&(h(p.pull,"paused",c),h(p.push,"paused",u))}),this.on("removeListener",function(e){"change"===e?(p.pull.removeListener("change",o),p.push.removeListener("change",i)):"denied"===e?(p.pull.removeListener("denied",s),p.push.removeListener("denied",a)):"active"===e?(p.pull.removeListener("active",l),p.push.removeListener("active",f)):"paused"===e&&(p.pull.removeListener("paused",c),p.push.removeListener("paused",u))}),this.pull.on("removeListener",d("pull")),this.push.on("removeListener",d("push"));var _=vo.all([this.push,this.pull]).then(function(e){var t={push:e[0],pull:e[1]};return p.emit("complete",t),r&&r(null,t),p.removeAllListeners(),t},function(e){if(p.cancel(),r?r(e):p.emit("error",e),p.removeAllListeners(),r)throw e});this.then=function(e,t){return _.then(e,t)},this.catch=function(e){return _.catch(e)}}function oo(e){e.replicate=to,e.sync=no,Object.defineProperty(e.prototype,"replicate",{get:function(){var e=this;return{from:function(t,n,r){return e.constructor.replicate(t,e,n,r)},to:function(t,n,r){return e.constructor.replicate(e,t,n,r)}}}}),e.prototype.sync=function(e,t,n){return this.constructor.sync(this,e,t,n)}}var io=r(e(11)),ao=r(e(7)),so=r(e(1)),uo=e(4),co=r(e(6)),fo=r(e(5)),lo=r(e(2)),ho=r(e(10)),po=r(e(16)),vo="function"==typeof Promise?Promise:ao,go=Function.prototype.toString,yo=go.call(Object);v.prototype.get=function(e){var t=h(e);return this._store[t]},v.prototype.set=function(e,t){var n=h(e);return this._store[n]=t,!0},v.prototype.has=function(e){return h(e)in this._store},v.prototype.delete=function(e){var t=h(e),n=t in this._store;return delete this._store[t],n},v.prototype.forEach=function(e){for(var t=Object.keys(this._store),n=0,r=t.length;n<r;n++){var o=t[n],i=this._store[o];o=p(o),e(i,o)}},Object.defineProperty(v.prototype,"size",{get:function(){return Object.keys(this._store).length}}),g.prototype.add=function(e){return this._store.set(e,!0)},g.prototype.has=function(e){return this._store.has(e)},g.prototype.forEach=function(e){this._store.forEach(function(t,n){e(n)})},Object.defineProperty(g.prototype,"size",{get:function(){return this._store.size}});var _o,mo;!function(){if("undefined"==typeof Symbol||"undefined"==typeof Map||"undefined"==typeof Set)return!1;var e=Object.getOwnPropertyDescriptor(Map,Symbol.species);return e&&"get"in e&&Map[Symbol.species]===Map}()?(_o=g,mo=v):(_o=Set,mo=Map);var bo,wo=6;if(w())bo=!1;else try{localStorage.setItem("_pouch_check_localstorage",1),bo=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){bo=!1}co(S,uo.EventEmitter),S.prototype.addListener=function(e,t,n,r){function o(){function e(){a=!1}if(i._listeners[t]){if(a)return void(a="waiting");a=!0;var s=y(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary"]);n.changes(s).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===a&&fo(o),a=!1}).on("error",e)}}if(!this._listeners[t]){var i=this,a=!1;this._listeners[t]=o,this.on(e,o)}},S.prototype.removeListener=function(e,t){t in this._listeners&&(uo.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},S.prototype.notifyLocalWindows=function(e){w()?chrome.storage.local.set({dbName:e}):E()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},S.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)};var Eo;Eo="function"==typeof Object.assign?Object.assign:function(e){for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t};var ko=Eo;co(O,Error),O.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};var So=(new O(401,"unauthorized","Name or password is incorrect."),new O(400,"bad_request","Missing JSON list of 'docs'")),qo=new O(404,"not_found","missing"),Ao=new O(409,"conflict","Document update conflict"),xo=new O(400,"bad_request","_id field must contain a string"),To=new O(412,"missing_id","_id is required for puts"),Oo=new O(400,"bad_request","Only reserved document ids may start with underscore."),jo=(new O(412,"precondition_failed","Database not open"),new O(500,"unknown_error","Database encountered an unknown error")),Co=new O(500,"badarg","Some query argument is invalid"),Lo=(new O(400,"invalid_request","Request was invalid"),new O(400,"query_parse_error","Some query parameter is invalid")),Io=new O(500,"doc_validation","Bad special document member"),Do=new O(400,"bad_request","Something wrong with the request"),Ro=new O(400,"bad_request","Document must be a JSON object"),No=(new O(404,"not_found","Database not found"),new O(500,"indexed_db_went_bad","unknown")),Bo=new O(500,"web_sql_went_bad","unknown"),$o=(new O(500,"levelDB_went_went_bad","unknown"),new O(403,"forbidden","Forbidden by design doc validate_doc_update function"),new O(400,"bad_request","Invalid rev format")),Fo=(new O(412,"file_exists","The database could not be created, the file already exists."),new O(412,"missing_stub","A pre-existing attachment stub wasn't found")),Mo=(new O(413,"invalid_url","Provided URL is invalid"),R.name);var Po=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],Uo="queryKey",Jo=/(?:^|&)([^&=]*)=?([^&]*)/g,Ho=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Wo=io.v4;co(pe,uo.EventEmitter),pe.prototype.cancel=function(){this.isCancelled=!0,this.db.taskqueue.isReady&&this.emit("cancel")},pe.prototype.validateChanges=function(e){var t=e.complete,n=this;Te._changesFilterPlugin?Te._changesFilterPlugin.validate(e,function(r){if(r)return t(r);n.doChanges(e)}):n.doChanges(e)},pe.prototype.doChanges=function(e){var t=this,n=e.complete;if(e=u(e),"live"in e&&!("continuous"in e)&&(e.continuous=e.live),e.processChange=ve,"latest"===e.since&&(e.since="now"),e.since||(e.since=0),"now"===e.since)return void this.db.info().then(function(r){if(t.isCancelled)return void n(null,{status:"cancelled"});e.since=r.update_seq,t.doChanges(e)},n);if(Te._changesFilterPlugin){if(Te._changesFilterPlugin.normalize(e),Te._changesFilterPlugin.shouldFilter(this,e))return Te._changesFilterPlugin.filter(this,e)}else["doc_ids","filter","selector","view"].forEach(function(t){t in e&&q("warn",'The "'+t+'" option was passed in to changes/replicate, but pouchdb-changes-filter plugin is not installed, so it was ignored. Please install the plugin to enable filtering.')});"descending"in e||(e.descending=!1),e.limit=0===e.limit?1:e.limit,e.complete=n;var r=this.db._changes(e);if(r&&"function"==typeof r.cancel){var o=t.cancel;t.cancel=so(function(e){r.cancel(),o.apply(this,e)})}},co(Se,uo.EventEmitter),Se.prototype.post=d("post",function(e,t,n){if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(j(Ro));this.bulkDocs({docs:[e]},t,ye(n,e._id))}),Se.prototype.put=d("put",function(e,t,n){function r(n){"function"==typeof o._put&&!1!==t.new_edits?o._put(e,t,n):o.bulkDocs({docs:[e]},t,ye(n,e._id))}if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(j(Ro));if(N(e._id),le(e._id)&&"function"==typeof this._putLocal)return e._deleted?this._removeLocal(e,n):this._putLocal(e,n);var o=this;t.force&&e._rev?(!function(){var n=e._rev.split("-"),r=n[1],o=parseInt(n[0],10),i=o+1,a=W();e._revisions={start:i,ids:[a,r]},e._rev=i+"-"+a,t.new_edits=!1}(),r(function(t){var r=t?null:{ok:!0,id:e._id,rev:e._rev};n(t,r)})):r(n)}),Se.prototype.putAttachment=d("putAttachment",function(e,t,n,r,o){function i(e){var n="_rev"in e?parseInt(e._rev,10):0;return e._attachments=e._attachments||{},e._attachments[t]={content_type:o,data:r,revpos:++n},a.put(e)}var a=this;return"function"==typeof o&&(o=r,r=n,n=null),void 0===o&&(o=r,r=n,n=null),o||q("warn","Attachment",t,"on document",e,"is missing content_type"),a.get(e).then(function(e){if(e._rev!==n)throw j(Ao);return i(e)},function(t){if(t.reason===qo.message)return i({_id:e});throw t})}),Se.prototype.removeAttachment=d("removeAttachment",function(e,t,n,r){var o=this;o.get(e,function(e,i){return e?void r(e):i._rev!==n?void r(j(Ao)):i._attachments?(delete i._attachments[t],0===Object.keys(i._attachments).length&&delete i._attachments,void o.put(i,r)):r()})}),Se.prototype.remove=d("remove",function(e,t,n,r){var o;"string"==typeof t?(o={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(o=e,"function"==typeof t?(r=t,n={}):(r=n,n=t)),n=n||{},n.was_delete=!0;var i={_id:o._id,_rev:o._rev||n.rev};if(i._deleted=!0,le(i._id)&&"function"==typeof this._removeLocal)return this._removeLocal(o,r);this.bulkDocs({docs:[i]},n,ye(r,i._id))}),Se.prototype.revsDiff=d("revsDiff",function(e,t,n){function r(e,t){s.has(e)||s.set(e,{missing:[]}),s.get(e).missing.push(t)}function o(t,n){var o=e[t].slice(0);K(n,function(e,n,i,a,s){var u=n+"-"+i,c=o.indexOf(u);-1!==c&&(o.splice(c,1),"available"!==s.status&&r(t,u))}),o.forEach(function(e){r(t,e)})}"function"==typeof t&&(n=t,t={});var i=Object.keys(e);if(!i.length)return n(null,{});var a=0,s=new mo;i.map(function(t){this._getRevisionTree(t,function(r,u){if(r&&404===r.status&&"missing"===r.message)s.set(t,{missing:e[t]});else{if(r)return n(r);o(t,u)}if(++a===i.length){var c={};return s.forEach(function(e,t){c[t]=e}),n(null,c)}})},this)}),Se.prototype.bulkGet=d("bulkGet",function(e,t){b(this,e,t)}),Se.prototype.compactDocument=d("compactDocument",function(e,t,n){var r=this;this._getRevisionTree(e,function(o,i){if(o)return n(o);var a=be(i),s=[],u=[];Object.keys(a).forEach(function(e){a[e]>t&&s.push(e)}),K(i,function(e,t,n,r,o){var i=t+"-"+n;"available"===o.status&&-1!==s.indexOf(i)&&u.push(i)}),r._doCompaction(e,u,n)})}),Se.prototype.compact=d("compact",function(e,t){"function"==typeof e&&(t=e,e={});var n=this;e=e||{},n._compactionQueue=n._compactionQueue||[],n._compactionQueue.push({opts:e,callback:t}),1===n._compactionQueue.length&&Ee(n)}),Se.prototype._compact=function(e,t){function n(e){a.push(o.compactDocument(e.id,0))}function r(e){var n=e.last_seq;vo.all(a).then(function(){return J(o,"_local/compaction",function(e){return(!e.last_seq||e.last_seq<n)&&(e.last_seq=n,e)})}).then(function(){t(null,{ok:!0})}).catch(t)}var o=this,i={return_docs:!1,last_seq:e.last_seq||0},a=[];o.changes(i).on("change",n).on("complete",r).on("error",t)},Se.prototype.get=d("get",function(e,t,n){function r(){var r=[],a=o.length;if(!a)return n(null,r);o.forEach(function(o){i.get(e,{rev:o,revs:t.revs,latest:t.latest,attachments:t.attachments},function(e,t){if(e)r.push({missing:o});else{for(var i,s=0,u=r.length;s<u;s++)if(r[s].ok&&r[s].ok._rev===t._rev){i=!0;break}i||r.push({ok:t})}--a||n(null,r)})})}if("function"==typeof t&&(n=t,t={}),"string"!=typeof e)return n(j(xo));if(le(e)&&"function"==typeof this._getLocal)return this._getLocal(e,n);var o=[],i=this;if(!t.open_revs)return this._get(e,t,function(r,o){if(r)return r.docId=e,n(r);var a=o.doc,s=o.metadata,u=o.ctx;if(t.conflicts){var c=V(s);c.length&&(a._conflicts=c)}if(fe(s,a._rev)&&(a._deleted=!0),t.revs||t.revs_info){for(var f=a._rev.split("-"),l=parseInt(f[0],10),d=f[1],h=Y(s.rev_tree),p=null,v=0;v<h.length;v++){var g=h[v],y=g.ids.map(function(e){return e.id}).indexOf(d);(y===l-1||!p&&-1!==y)&&(p=g)}var _=p.ids.map(function(e){return e.id}).indexOf(a._rev.split("-")[1])+1,m=p.ids.length-_;if(p.ids.splice(_,m),p.ids.reverse(),t.revs&&(a._revisions={start:p.pos+p.ids.length-1,ids:p.ids.map(function(e){return e.id})}),t.revs_info){var b=p.pos+p.ids.length;a._revs_info=p.ids.map(function(e){return b--,{rev:b+"-"+e.id,status:e.opts.status}})}}if(t.attachments&&a._attachments){var w=a._attachments,E=Object.keys(w).length;if(0===E)return n(null,a);Object.keys(w).forEach(function(e){this._getAttachment(a._id,e,w[e],{rev:a._rev,binary:t.binary,ctx:u},function(t,r){var o=a._attachments[e];o.data=r,delete o.stub,delete o.length,--E||n(null,a)})},i)}else{if(a._attachments)for(var k in a._attachments)a._attachments.hasOwnProperty(k)&&(a._attachments[k].stub=!0);n(null,a)}});if("all"===t.open_revs)this._getRevisionTree(e,function(e,t){if(e)return n(e);o=G(t).map(function(e){return e.rev}),r()});else{if(!Array.isArray(t.open_revs))return n(j(jo,"function_clause"));o=t.open_revs;for(var a=0;a<o.length;a++){var s=o[a];if("string"!=typeof s||!/^\d+-/.test(s))return n(j($o))}r()}}),Se.prototype.getAttachment=d("getAttachment",function(e,t,n,r){var o=this;n instanceof Function&&(r=n,n={}),this._get(e,n,function(i,a){return i?r(i):a.doc._attachments&&a.doc._attachments[t]?(n.ctx=a.ctx,n.binary=!0,o._getAttachment(e,t,a.doc._attachments[t],n,r),void 0):r(j(qo))})}),Se.prototype.allDocs=d("allDocs",function(e,t){if("function"==typeof e&&(t=e,e={}),e.skip=void 0!==e.skip?e.skip:0,e.start_key&&(e.startkey=e.start_key),e.end_key&&(e.endkey=e.end_key),"keys"in e){if(!Array.isArray(e.keys))return t(new TypeError("options.keys must be an array"));var n=["startkey","endkey","key"].filter(function(t){return t in e})[0];if(n)return void t(j(Lo,"Query parameter `"+n+"` is not compatible with multi-get"));if(!B(this))return we(this,e,t)}return this._allDocs(e,t)}),Se.prototype.changes=function(e,t){return"function"==typeof e&&(t=e,e={}),new pe(this,e,t)},Se.prototype.close=d("close",function(e){return this._closed=!0,this.emit("closed"),this._close(e)}),Se.prototype.info=d("info",function(e){var t=this;this._info(function(n,r){if(n)return e(n);r.db_name=r.db_name||t.name,r.auto_compaction=!(!t.auto_compaction||B(t)),r.adapter=t.adapter,e(null,r)})}),Se.prototype.id=d("id",function(e){return this._id(e)}),Se.prototype.type=function(){return"function"==typeof this._type?this._type():this.adapter},Se.prototype.bulkDocs=d("bulkDocs",function(e,t,n){if("function"==typeof t&&(n=t,t={}),t=t||{},Array.isArray(e)&&(e={docs:e}),!e||!e.docs||!Array.isArray(e.docs))return n(j(So));for(var r=0;r<e.docs.length;++r)if("object"!=typeof e.docs[r]||Array.isArray(e.docs[r]))return n(j(Ro));var o;if(e.docs.forEach(function(e){e._attachments&&Object.keys(e._attachments).forEach(function(t){o=o||ke(t),e._attachments[t].content_type||q("warn","Attachment",t,"on document",e._id,"is missing content_type")})}),o)return n(j(Do,o));"new_edits"in t||(t.new_edits=!("new_edits"in e)||e.new_edits);var i=this;t.new_edits||B(i)||e.docs.sort(me),_e(e.docs);var a=e.docs.map(function(e){return e._id});return this._bulkDocs(e,t,function(e,r){if(e)return n(e);if(t.new_edits||(r=r.filter(function(e){return e.error})),!B(i))for(var o=0,s=r.length;o<s;o++)r[o].id=r[o].id||a[o];n(null,r)})}),Se.prototype.registerDependentDatabase=d("registerDependentDatabase",function(e,t){function n(t){return t.dependentDbs=t.dependentDbs||{},!t.dependentDbs[e]&&(t.dependentDbs[e]=!0,t)}var r=new this.constructor(e,this.__opts);J(this,"_local/_pouch_dependentDbs",n).then(function(){t(null,{db:r})}).catch(t)}),Se.prototype.destroy=d("destroy",function(e,t){function n(){r._destroy(e,function(e,n){if(e)return t(e);r._destroyed=!0,r.emit("destroyed"),t(null,n||{ok:!0})})}"function"==typeof e&&(t=e,e={});var r=this,o=!("use_prefix"in r)||r.use_prefix;if(B(r))return n();r.get("_local/_pouch_dependentDbs",function(e,i){if(e)return 404!==e.status?t(e):n();var a=i.dependentDbs,s=r.constructor,u=Object.keys(a).map(function(e){var t=o?e.replace(new RegExp("^"+s.prefix),""):e;return new s(t,r.__opts).destroy()});vo.all(u).then(n,t)})}),qe.prototype.execute=function(){var e;if(this.failed)for(;e=this.queue.shift();)e(this.failed);else for(;e=this.queue.shift();)e()},qe.prototype.fail=function(e){this.failed=e,this.execute()},qe.prototype.ready=function(e){this.isReady=!0,this.db=e,this.execute()},qe.prototype.addTask=function(e){this.queue.push(e),this.failed&&this.execute()},co(Te,Se),Te.adapters={},Te.preferredAdapters=[],Te.prefix="_pouch_";var zo=new uo.EventEmitter;!function(e){Object.keys(uo.EventEmitter.prototype).forEach(function(t){"function"==typeof uo.EventEmitter.prototype[t]&&(e[t]=zo[t].bind(zo))});var t=e._destructionListeners=new mo;e.on("ref",function(e){t.has(e.name)||t.set(e.name,[]),t.get(e.name).push(e)}),e.on("unref",function(e){if(t.has(e.name)){var n=t.get(e.name),r=n.indexOf(e);r<0||(n.splice(r,1),n.length>1?t.set(e.name,n):t.delete(e.name))}}),e.on("destroyed",function(e){if(t.has(e)){var n=t.get(e);t.delete(e),n.forEach(function(e){e.emit("destroyed",!0)})}})}(Te),Te.adapter=function(e,t,n){t.valid()&&(Te.adapters[e]=t,n&&Te.preferredAdapters.push(e))},Te.plugin=function(e){if("function"==typeof e)e(Te);else{if("object"!=typeof e||0===Object.keys(e).length)throw new Error('Invalid plugin: got "'+e+'", expected an object or a function');Object.keys(e).forEach(function(t){Te.prototype[t]=e[t]})}return this.__defaults&&(Te.__defaults=ko({},this.__defaults)),Te},Te.defaults=function(e){function t(e,n){if(!(this instanceof t))return new t(e,n);n=n||{},e&&"object"==typeof e&&(n=e,e=n.name,delete n.name),n=ko({},t.__defaults,n),Te.call(this,e,n)}return co(t,Te),t.preferredAdapters=Te.preferredAdapters.slice(),Object.keys(Te).forEach(function(e){e in t||(t[e]=Te[e])}),t.__defaults=ko({},this.__defaults,e),t};var Ko=["$or","$nor","$not"],Xo=-324,Go=3,Vo="",Qo={$elemMatch:function(e,t,n,r){return!!Array.isArray(r)&&(0!==r.length&&("object"==typeof r[0]?r.some(function(e){return ot(e,t,Object.keys(t))}):r.some(function(r){return it(t,e,n,r)})))},$allMatch:function(e,t,n,r){return!!Array.isArray(r)&&(0!==r.length&&("object"==typeof r[0]?r.every(function(e){return ot(e,t,Object.keys(t))}):r.every(function(r){return it(t,e,n,r)})))},$eq:function(e,t,n,r){return ct(r)&&0===He(r,t)},$gte:function(e,t,n,r){return ct(r)&&He(r,t)>=0},$gt:function(e,t,n,r){return ct(r)&&He(r,t)>0},$lte:function(e,t,n,r){return ct(r)&&He(r,t)<=0},$lt:function(e,t,n,r){return ct(r)&&He(r,t)<0},$exists:function(e,t,n,r){return t?ct(r):!ct(r)},$mod:function(e,t,n,r){return ut(r)&&ft(r,t)},$ne:function(e,t,n,r){return t.every(function(e){return 0!==He(r,e)})},$in:function(e,t,n,r){return ut(r)&&lt(r,t)},$nin:function(e,t,n,r){return ut(r)&&!lt(r,t)},$size:function(e,t,n,r){return ut(r)&&ht(r,t)},$all:function(e,t,n,r){return Array.isArray(r)&&dt(r,t)},$regex:function(e,t,n,r){return ut(r)&&pt(r,t)},$type:function(e,t,n,r){return vt(r,t)}};Te.plugin(Oe),Te.plugin(kt),Te.version="6.3.4";var Yo,Zo=St(["_id","_rev","_attachments","_deleted","_revisions","_revs_info","_conflicts","_deleted_conflicts","_local_seq","_rev_tree","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats","_removed"]),ei=St(["_attachments","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats"]),ti=function(e){return atob(e)},ni=function(e){return btoa(e)},ri=n.setImmediate||n.setTimeout,oi=32768,ii=5,ai="document-store",si="by-sequence",ui="attach-store",ci="attach-seq-store",fi="meta-store",li="local-store",di="detect-blob-support",hi=new S,pi=!1,vi=[],gi=new mo,yi=new mo;bn.valid=function(){return!("undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform))&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange};var _i=function(e){e.adapter("idb",bn,!0)},mi=7,bi=Tn("document-store"),wi=Tn("by-sequence"),Ei=Tn("attach-store"),ki=Tn("local-store"),Si=Tn("metadata-store"),qi=Tn("attach-seq-store"),Ai=new mo,xi=new S,Ti=1,Oi="CREATE INDEX IF NOT EXISTS 'by-seq-deleted-idx' ON "+wi+" (seq, deleted)",ji="CREATE UNIQUE INDEX IF NOT EXISTS 'by-seq-doc-id-rev' ON "+wi+" (doc_id, rev)",Ci="CREATE INDEX IF NOT EXISTS 'doc-winningseq-idx' ON "+bi+" (winningseq)",Li="CREATE INDEX IF NOT EXISTS 'attach-seq-seq-idx' ON "+qi+" (seq)",Ii="CREATE UNIQUE INDEX IF NOT EXISTS 'attach-seq-digest-idx' ON "+qi+" (digest, seq)",Di=wi+".seq = "+bi+".winningseq",Ri=wi+".seq AS seq, "+wi+".deleted AS deleted, "+wi+".json AS data, "+wi+".rev AS rev, "+bi+".json AS metadata";Xn.valid=zn,Xn.use_prefix=!0;var Ni=function(e){e.adapter("websql",Xn,!0)},Bi=function(){try{return new XMLHttpRequest,!0}catch(e){return!1}}(),$i=function(){},Fi=25,Mi=50,Pi=5e3,Ui=1e4,Ji={};lr.valid=function(){return!0};var Hi=function(e){e.adapter("http",lr,!1),e.adapter("https",lr,!1)};co(dr,Error),co(hr,Error),co(pr,Error);var Wi=q.bind(null,"log"),zi=Array.isArray,Ki=JSON.parse;Sr.prototype.add=function(e){return this.promise=this.promise.catch(function(){}).then(function(){return e()}),this.promise},Sr.prototype.finish=function(){return this.promise};var Xi={},Gi=new Sr,Vi=50,Qi={_sum:function(e,t){return Er(t)},_count:function(e,t){return t.length},_stats:function(e,t){return{sum:Er(t),min:Math.min.apply(null,t),max:Math.max.apply(null,t),count:t.length,sumsqr:function(e){for(var t=0,n=0,r=e.length;n<r;n++){var o=e[n];t+=o*o}return t}(t)}}},Yi=function(e,t,n,r){function o(e,t,n){try{t(n)}catch(t){jr(e,t)}}function i(e,t,n,r,o){try{return{output:t(n,r,o)}}catch(t){return jr(e,t),{error:t}}}function a(e,t){var n=He(e.key,t.key);return 0!==n?n:He(e.value,t.value)}function s(e,t,n){return n=n||0,"number"==typeof t?e.slice(n,t+n):n>0?e.slice(n):e}function u(e){var t=e.value;return t&&"object"==typeof t&&t._id||e.id}function c(e){e.rows.forEach(function(e){var t=e.doc&&e.doc._attachments;t&&Object.keys(t).forEach(function(e){var n=t[e];t[e].data=Ct(n.data,n.content_type)})})}function f(e){return function(t){return e.include_docs&&e.attachments&&e.binary&&c(t),t}}function l(e,t,n,r){var o=t[e];void 0!==o&&(r&&(o=encodeURIComponent(JSON.stringify(o))),n.push(e+"="+o))}function d(e){if(void 0!==e){var t=Number(e);return isNaN(t)||t!==parseInt(e,10)?e:t}}function h(e){return e.group_level=d(e.group_level),e.limit=d(e.limit),e.skip=d(e.skip),e}function p(e){if(e){if("number"!=typeof e)return new dr('Invalid value for integer: "'+e+'"');if(e<0)return new dr('Invalid value for positive integer: "'+e+'"')}}function v(e,t){var n=e.descending?"endkey":"startkey",r=e.descending?"startkey":"endkey";if(void 0!==e[n]&&void 0!==e[r]&&He(e[n],e[r])>0)throw new dr("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");if(t.reduce&&!1!==e.reduce){if(e.include_docs)throw new dr("{include_docs:true} is invalid for reduce");if(e.keys&&e.keys.length>1&&!e.group&&!e.group_level)throw new dr("Multi-key fetches for reduce views must use {group: true}")}["group_level","limit","skip"].forEach(function(t){var n=p(e[t]);if(n)throw n})}function g(e,t,n){var r,o=[],i="GET";if(l("reduce",n,o),l("include_docs",n,o),l("attachments",n,o),l("limit",n,o),l("descending",n,o),l("group",n,o),l("group_level",n,o),l("skip",n,o),l("stale",n,o),l("conflicts",n,o),l("startkey",n,o,!0),l("start_key",n,o,!0),l("endkey",n,o,!0),l("end_key",n,o,!0),l("inclusive_end",n,o),l("key",n,o,!0),o=o.join("&"),o=""===o?"":"?"+o,void 0!==n.keys){var a="keys="+encodeURIComponent(JSON.stringify(n.keys));a.length+o.length+1<=2e3?o+=("?"===o[0]?"&":"?")+a:(i="POST","string"==typeof t?r={keys:n.keys}:t.keys=n.keys)}if("string"==typeof t){var s=Tr(t);return e.request({method:i,url:"_design/"+s[0]+"/_view/"+s[1]+o,body:r}).then(function(e){return e.rows.forEach(function(e){if(e.value&&e.value.error&&"builtin_reduce_error"===e.value.error)throw new Error(e.reason)}),e}).then(f(n))}return r=r||{},Object.keys(t).forEach(function(e){Array.isArray(t[e])?r[e]=t[e]:r[e]=t[e].toString()}),e.request({method:"POST",url:"_temp_view"+o,body:r}).then(f(n))}function y(e,t,n){return new vo(function(r,o){e._query(t,n,function(e,t){if(e)return o(e);r(t)})})}function _(e){return new vo(function(t,n){e._viewCleanup(function(e,r){if(e)return n(e);t(r)})})}function m(e){return function(t){if(404===t.status)return e;throw t}}function b(e,t,n){function r(e){return e.keys.length?t.db.allDocs({keys:e.keys,include_docs:!0}):vo.resolve({rows:[]})}function o(e,t){for(var n=[],r=new _o,o=0,i=t.rows.length;o<i;o++){var a=t.rows[o],s=a.doc;if(s&&(n.push(s),r.add(s._id),s._deleted=!u.has(s._id),!s._deleted)){var c=u.get(s._id);"value"in c&&(s.value=c.value)}}var f=br(u);return f.forEach(function(e){if(!r.has(e)){var t={_id:e},o=u.get(e);"value"in o&&(t.value=o.value),n.push(t)}}),e.keys=mr(f.concat(e.keys)),n.push(e),n}var i="_local/doc_"+e,a={_id:i,keys:[]},s=n.get(e),u=s[0],c=s[1];return function(){return Or(c)?vo.resolve(a):t.db.get(i).catch(m(a))}().then(function(e){return r(e).then(function(t){return o(e,t)})})}function w(e,t,n){return e.db.get("_local/lastSeq").catch(m({_id:"_local/lastSeq",seq:0})).then(function(r){var o=br(t);return vo.all(o.map(function(n){return b(n,e,t)})).then(function(t){var o=D(t);return r.seq=n,o.push(r),e.db.bulkDocs({docs:o})})})}function E(e){var t="string"==typeof e?e:e.name,n=Xi[t];return n||(n=Xi[t]=new Sr),n}function k(e){return _r(E(e),function(){return S(e)})()}function S(e){function n(e,t){var n={id:l._id,key:We(e)};void 0!==t&&null!==t&&(n.value=We(t)),f.push(n)}function r(t,n){return function(){return w(e,t,n)}}function i(){return e.sourceDB.changes({conflicts:!0,include_docs:!0,style:"all_docs",since:h,limit:Vi}).then(s)}function s(e){var t=e.results;if(t.length){var n=u(t);if(p.add(r(n,h)),!(t.length<Vi))return i()}}function u(t){for(var n=new mo,r=0,i=t.length;r<i;r++){var s=t[r];if("_"!==s.doc._id[0]){f=[],l=s.doc,l._deleted||o(e.sourceDB,d,l),f.sort(a);var u=c(f);n.set(s.doc._id,[u,s.changes])}h=s.seq}return n}function c(e){for(var t,n=new mo,r=0,o=e.length;r<o;r++){var i=e[r],a=[i.key,i.id];r>0&&0===He(i.key,t)&&a.push(r),n.set(Ke(a),i),t=i.key}return n}var f,l,d=t(e.mapFun,n),h=e.seq||0,p=new Sr;return i().then(function(){return p.finish()}).then(function(){e.seq=h})}function q(e,t,r){0===r.group_level&&delete r.group_level;var o=r.group||r.group_level,a=n(e.reduceFun),u=[],c=isNaN(r.group_level)?Number.POSITIVE_INFINITY:r.group_level;t.forEach(function(e){var t=u[u.length-1],n=o?e.key:null;if(o&&Array.isArray(n)&&(n=n.slice(0,c)),t&&0===He(t.groupKey,n))return t.keys.push([e.key,e.id]),void t.values.push(e.value);u.push({keys:[[e.key,e.id]],values:[e.value],groupKey:n})}),t=[];for(var f=0,l=u.length;f<l;f++){var d=u[f],h=i(e.sourceDB,a,d.keys,d.values,!1);if(h.error&&h.error instanceof pr)throw h.error;t.push({value:h.error?null:h.output,key:d.groupKey})}return{rows:s(t,r.limit,r.skip)}}function A(e,t){return _r(E(e),function(){return x(e,t)})()}function x(e,t){function n(t){return t.include_docs=!0,e.db.allDocs(t).then(function(e){return o=e.total_rows,e.rows.map(function(e){if("value"in e.doc&&"object"==typeof e.doc.value&&null!==e.doc.value){var t=Object.keys(e.doc.value).sort(),n=["id","key","value"];if(!(t<n||t>n))return e.doc.value}var r=Ve(e.doc._id);return{key:r[0],id:r[1],value:"value"in e.doc?e.doc.value:null}})})}function r(n){var r;if(r=i?q(e,n,t):{total_rows:o,offset:a,rows:n},t.include_docs){var s=mr(n.map(u));return e.sourceDB.allDocs({keys:s,include_docs:!0,conflicts:t.conflicts,attachments:t.attachments,binary:t.binary}).then(function(e){var t=new mo;return e.rows.forEach(function(e){t.set(e.id,e.doc)}),n.forEach(function(e){var n=u(e),r=t.get(n);r&&(e.doc=r)}),r})}return r}var o,i=e.reduceFun&&!1!==t.reduce,a=t.skip||0;if(void 0===t.keys||t.keys.length||(t.limit=0,delete t.keys),void 0!==t.keys){var s=t.keys,c=s.map(function(e){return n({startkey:Ke([e]),endkey:Ke([e,{}])})});return vo.all(c).then(D).then(r)}var f,l,d={descending:t.descending};if("start_key"in t&&(f=t.start_key),"startkey"in t&&(f=t.startkey),"end_key"in t&&(l=t.end_key),"endkey"in t&&(l=t.endkey),void 0!==f&&(d.startkey=Ke(t.descending?[f,{}]:[f])),void 0!==l){var h=!1!==t.inclusive_end;t.descending&&(h=!h),d.endkey=Ke(h?[l,{}]:[l])}if(void 0!==t.key){var p=Ke([t.key]),v=Ke([t.key,{}]);d.descending?(d.endkey=p,d.startkey=v):(d.startkey=p,d.endkey=v)}return i||("number"==typeof t.limit&&(d.limit=t.limit),d.skip=a),n(d).then(r)}function T(e){return e.request({method:"POST",url:"_view_cleanup"})}function O(t){return t.get("_local/"+e).then(function(e){var n=new mo;Object.keys(e.views).forEach(function(e){var t=Tr(e),r="_design/"+t[0],o=t[1],i=n.get(r);i||(i=new _o,n.set(r,i)),i.add(o)});var r={keys:br(n),include_docs:!0};return t.allDocs(r).then(function(r){var o={};r.rows.forEach(function(t){var r=t.key.substring(8);n.get(t.key).forEach(function(n){var i=r+"/"+n;e.views[i]||(i=n);var a=Object.keys(e.views[i]),s=t.doc&&t.doc.views&&t.doc.views[n];a.forEach(function(e){o[e]=o[e]||s})})});var i=Object.keys(o).filter(function(e){return!o[e]}),a=i.map(function(e){return _r(E(e),function(){return new t.constructor(e,t.__opts).destroy()})()});return vo.all(a).then(function(){return{ok:!0}})})},m({ok:!0}))}function j(t,n,o){if("function"==typeof t._query)return y(t,n,o);if(B(t))return g(t,n,o);if("string"!=typeof n)return v(o,n),Gi.add(function(){return xr(t,"temp_view/temp_view",n.map,n.reduce,!0,e).then(function(e){return yr(k(e).then(function(){return A(e,o)}),function(){return e.db.destroy()})})}),Gi.finish();var i=n,a=Tr(i),s=a[0],u=a[1];return t.get("_design/"+s).then(function(n){var a=n.views&&n.views[u];if(!a)throw new hr("ddoc "+n._id+" has no view named "+u);return r(n,u),v(o,a),xr(t,i,a.map,a.reduce,!1,e).then(function(e){return"ok"===o.stale||"update_after"===o.stale?("update_after"===o.stale&&fo(function(){k(e)}),A(e,o)):k(e).then(function(){return A(e,o)})})})}function C(e,t,n){var r=this;"function"==typeof t&&(n=t,t={}),t=t?h(t):{},"function"==typeof e&&(e={map:e});var o=vo.resolve().then(function(){return j(r,e,t)});return vr(o,n),o}return{query:C,viewCleanup:gr(function(){var e=this;return"function"==typeof e._viewCleanup?_(e):B(e)?T(e):O(e)})}}("mrviews",Lr,Ir,Dr),Zi={query:Rr,viewCleanup:Nr},ea=1,ta="pouchdb",na=5,ra=0;Hr.prototype.writeCheckpoint=function(e,t){var n=this;return this.updateTarget(e,t).then(function(){return n.updateSource(e,t)})},Hr.prototype.updateTarget=function(e,t){return this.opts.writeTargetCheckpoint?Jr(this.target,this.id,e,t,this.returnValue):vo.resolve(!0)},Hr.prototype.updateSource=function(e,t){if(this.opts.writeSourceCheckpoint){var n=this;return this.readOnlySource?vo.resolve(!0):Jr(this.src,this.id,e,t,this.returnValue).catch(function(e){if(Xr(e))return n.readOnlySource=!0,!0;throw e})}return vo.resolve(!0)};var oa={undefined:function(e,t){return 0===He(e.last_seq,t.last_seq)?t.last_seq:0},1:function(e,t){return Wr(t,e).last_seq}};Hr.prototype.getCheckpoint=function(){var e=this;return e.target.get(e.id).then(function(t){return e.readOnlySource?vo.resolve(t.last_seq):e.src.get(e.id).then(function(e){if(t.version!==e.version)return ra;var n;return n=t.version?t.version.toString():"undefined",n in oa?oa[n](t,e):ra},function(n){if(404===n.status&&t.last_seq)return e.src.put({_id:e.id,last_seq:ra}).then(function(){return ra},function(n){return Xr(n)?(e.readOnlySource=!0,t.last_seq):ra});throw n})}).catch(function(e){if(404!==e.status)throw e;return ra})};var ia=0;co(Zr,uo.EventEmitter),Zr.prototype.cancel=function(){this.cancelled=!0,this.state="cancelled",this.emit("cancel")},Zr.prototype.ready=function(e,t){function n(){o.cancel()}function r(){e.removeListener("destroyed",n),t.removeListener("destroyed",n)}var o=this;o._readyCalled||(o._readyCalled=!0,e.once("destroyed",n),t.once("destroyed",n),o.once("complete",r))},co(ro,uo.EventEmitter),ro.prototype.cancel=function(){this.canceled||(this.canceled=!0,this.push.cancel(),this.pull.cancel())},Te.plugin(_i).plugin(Ni).plugin(Hi).plugin(Zi).plugin(oo),t.exports=Te}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1,10:10,11:11,16:16,2:2,4:4,5:5,6:6,7:7}]},{},[17])(17)});
		

	// Pouch DB 6.3.4 Find
		!function e(t,n,r){function i(u,s){if(!n[u]){if(!t[u]){var a="function"==typeof require&&require;if(!s&&a)return a(u,!0);if(o)return o(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[u]={exports:{}};t[u][0].call(f.exports,function(e){var n=t[u][1][e];return i(n||e)},f,f.exports,e,t,n,r)}return n[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments.length;if(t){for(var n=[],r=-1;++r<t;)n[r]=arguments[r];return e.call(this,n)}return e.call(this,[])}}t.exports=r},{}],2:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"number"==typeof e}function u(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!o(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,o,a,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||u(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}if(n=this._events[e],s(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(u(n))for(o=Array.prototype.slice.call(arguments,1),c=n.slice(),r=c.length,a=0;a<r;a++)c[a].apply(this,o);return!0},r.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?u(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,u(this._events[e])&&!this._events[e].warned&&(n=s(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,o,s;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(u(n)){for(s=o;s-- >0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],3:[function(e,t,n){(function(e){"use strict";function n(){f=!0;for(var e,t,n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}f=!1}function r(e){1!==l.push(e)||f||i()}var i,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var u=0,s=new o(n),a=e.document.createTextNode("");s.observe(a,{characterData:!0}),i=function(){a.data=u=++u%2}}else if(e.setImmediate||void 0===e.MessageChannel)i="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){n(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(n,0)};else{var c=new e.MessageChannel;c.port1.onmessage=n,i=function(){c.port2.postMessage(0)}}var f,l=[];t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],5:[function(e,t,n){"use strict";function r(){}function i(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=m,this.queue=[],this.outcome=void 0,e!==r&&a(this,e)}function o(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function u(e,t,n){v(function(){var r;try{r=t(n)}catch(t){return p.reject(e,t)}r===e?p.reject(e,new TypeError("Cannot resolve promise with itself")):p.resolve(e,r)})}function s(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function a(e,t){function n(t){o||(o=!0,p.reject(e,t))}function r(t){o||(o=!0,p.resolve(e,t))}function i(){t(r,n)}var o=!1,u=c(i);"error"===u.status&&n(u.value)}function c(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}function f(e){return e instanceof this?e:p.resolve(new this(r),e)}function l(e){var t=new this(r);return p.reject(t,e)}function d(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);for(var o=new Array(n),u=0,s=-1,a=new this(r);++s<n;)!function(e,r){function s(e){o[r]=e,++u!==n||i||(i=!0,p.resolve(a,o))}t.resolve(e).then(s,function(e){i||(i=!0,p.reject(a,e))})}(e[s],s);return a}function h(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);for(var o=-1,u=new this(r);++o<n;)!function(e){t.resolve(e).then(function(e){i||(i=!0,p.resolve(u,e))},function(e){i||(i=!0,p.reject(u,e))})}(e[o]);return u}var v=e(3),p={},y=["REJECTED"],g=["FULFILLED"],m=["PENDING"];t.exports=i,i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){if("function"!=typeof e&&this.state===g||"function"!=typeof t&&this.state===y)return this;var n=new this.constructor(r);if(this.state!==m){u(n,this.state===g?e:t,this.outcome)}else this.queue.push(new o(n,e,t));return n},o.prototype.callFulfilled=function(e){p.resolve(this.promise,e)},o.prototype.otherCallFulfilled=function(e){u(this.promise,this.onFulfilled,e)},o.prototype.callRejected=function(e){p.reject(this.promise,e)},o.prototype.otherCallRejected=function(e){u(this.promise,this.onRejected,e)},p.resolve=function(e,t){var n=c(s,t);if("error"===n.status)return p.reject(e,n.value);var r=n.value;if(r)a(e,r);else{e.state=g,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},p.reject=function(e,t){e.state=y,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},i.resolve=f,i.reject=l,i.all=d,i.race=h},{3:3}],6:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function u(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function s(){y&&v&&(y=!1,v.length?p=v.concat(p):g=-1,p.length&&a())}function a(){if(!y){var e=o(s);y=!0;for(var t=p.length;t;){for(v=p,p=[];++g<t;)v&&v[g].run();g=-1,t=p.length}v=null,y=!1,u(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var l,d,h=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}}();var v,p=[],y=!1,g=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new c(e,t)),1!==p.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=f,h.addListener=f,h.once=f,h.off=f,h.removeListener=f,h.removeAllListeners=f,h.emit=f,h.prependListener=f,h.prependOnceListener=f,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],7:[function(e,t,n){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var r;try{r=window}catch(e){r=self}r.SparkMD5=e()}}(function(e){"use strict";function t(e,t){var n=e[0],r=e[1],i=e[2],o=e[3];n+=(r&i|~r&o)+t[0]-680876936|0,n=(n<<7|n>>>25)+r|0,o+=(n&r|~n&i)+t[1]-389564586|0,o=(o<<12|o>>>20)+n|0,i+=(o&n|~o&r)+t[2]+606105819|0,i=(i<<17|i>>>15)+o|0,r+=(i&o|~i&n)+t[3]-1044525330|0,r=(r<<22|r>>>10)+i|0,n+=(r&i|~r&o)+t[4]-176418897|0,n=(n<<7|n>>>25)+r|0,o+=(n&r|~n&i)+t[5]+1200080426|0,o=(o<<12|o>>>20)+n|0,i+=(o&n|~o&r)+t[6]-1473231341|0,i=(i<<17|i>>>15)+o|0,r+=(i&o|~i&n)+t[7]-45705983|0,r=(r<<22|r>>>10)+i|0,n+=(r&i|~r&o)+t[8]+1770035416|0,n=(n<<7|n>>>25)+r|0,o+=(n&r|~n&i)+t[9]-1958414417|0,o=(o<<12|o>>>20)+n|0,i+=(o&n|~o&r)+t[10]-42063|0,i=(i<<17|i>>>15)+o|0,r+=(i&o|~i&n)+t[11]-1990404162|0,r=(r<<22|r>>>10)+i|0,n+=(r&i|~r&o)+t[12]+1804603682|0,n=(n<<7|n>>>25)+r|0,o+=(n&r|~n&i)+t[13]-40341101|0,o=(o<<12|o>>>20)+n|0,i+=(o&n|~o&r)+t[14]-1502002290|0,i=(i<<17|i>>>15)+o|0,r+=(i&o|~i&n)+t[15]+1236535329|0,r=(r<<22|r>>>10)+i|0,n+=(r&o|i&~o)+t[1]-165796510|0,n=(n<<5|n>>>27)+r|0,o+=(n&i|r&~i)+t[6]-1069501632|0,o=(o<<9|o>>>23)+n|0,i+=(o&r|n&~r)+t[11]+643717713|0,i=(i<<14|i>>>18)+o|0,r+=(i&n|o&~n)+t[0]-373897302|0,r=(r<<20|r>>>12)+i|0,n+=(r&o|i&~o)+t[5]-701558691|0,n=(n<<5|n>>>27)+r|0,o+=(n&i|r&~i)+t[10]+38016083|0,o=(o<<9|o>>>23)+n|0,i+=(o&r|n&~r)+t[15]-660478335|0,i=(i<<14|i>>>18)+o|0,r+=(i&n|o&~n)+t[4]-405537848|0,r=(r<<20|r>>>12)+i|0,n+=(r&o|i&~o)+t[9]+568446438|0,n=(n<<5|n>>>27)+r|0,o+=(n&i|r&~i)+t[14]-1019803690|0,o=(o<<9|o>>>23)+n|0,i+=(o&r|n&~r)+t[3]-187363961|0,i=(i<<14|i>>>18)+o|0,r+=(i&n|o&~n)+t[8]+1163531501|0,r=(r<<20|r>>>12)+i|0,n+=(r&o|i&~o)+t[13]-1444681467|0,n=(n<<5|n>>>27)+r|0,o+=(n&i|r&~i)+t[2]-51403784|0,o=(o<<9|o>>>23)+n|0,i+=(o&r|n&~r)+t[7]+1735328473|0,i=(i<<14|i>>>18)+o|0,r+=(i&n|o&~n)+t[12]-1926607734|0,r=(r<<20|r>>>12)+i|0,n+=(r^i^o)+t[5]-378558|0,n=(n<<4|n>>>28)+r|0,o+=(n^r^i)+t[8]-2022574463|0,o=(o<<11|o>>>21)+n|0,i+=(o^n^r)+t[11]+1839030562|0,i=(i<<16|i>>>16)+o|0,r+=(i^o^n)+t[14]-35309556|0,r=(r<<23|r>>>9)+i|0,n+=(r^i^o)+t[1]-1530992060|0,n=(n<<4|n>>>28)+r|0,o+=(n^r^i)+t[4]+1272893353|0,o=(o<<11|o>>>21)+n|0,i+=(o^n^r)+t[7]-155497632|0,i=(i<<16|i>>>16)+o|0,r+=(i^o^n)+t[10]-1094730640|0,r=(r<<23|r>>>9)+i|0,n+=(r^i^o)+t[13]+681279174|0,n=(n<<4|n>>>28)+r|0,o+=(n^r^i)+t[0]-358537222|0,o=(o<<11|o>>>21)+n|0,i+=(o^n^r)+t[3]-722521979|0,i=(i<<16|i>>>16)+o|0,r+=(i^o^n)+t[6]+76029189|0,r=(r<<23|r>>>9)+i|0,n+=(r^i^o)+t[9]-640364487|0,n=(n<<4|n>>>28)+r|0,o+=(n^r^i)+t[12]-421815835|0,o=(o<<11|o>>>21)+n|0,i+=(o^n^r)+t[15]+530742520|0,i=(i<<16|i>>>16)+o|0,r+=(i^o^n)+t[2]-995338651|0,r=(r<<23|r>>>9)+i|0,n+=(i^(r|~o))+t[0]-198630844|0,n=(n<<6|n>>>26)+r|0,o+=(r^(n|~i))+t[7]+1126891415|0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~r))+t[14]-1416354905|0,i=(i<<15|i>>>17)+o|0,r+=(o^(i|~n))+t[5]-57434055|0,r=(r<<21|r>>>11)+i|0,n+=(i^(r|~o))+t[12]+1700485571|0,n=(n<<6|n>>>26)+r|0,o+=(r^(n|~i))+t[3]-1894986606|0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~r))+t[10]-1051523|0,i=(i<<15|i>>>17)+o|0,r+=(o^(i|~n))+t[1]-2054922799|0,r=(r<<21|r>>>11)+i|0,n+=(i^(r|~o))+t[8]+1873313359|0,n=(n<<6|n>>>26)+r|0,o+=(r^(n|~i))+t[15]-30611744|0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~r))+t[6]-1560198380|0,i=(i<<15|i>>>17)+o|0,r+=(o^(i|~n))+t[13]+1309151649|0,r=(r<<21|r>>>11)+i|0,n+=(i^(r|~o))+t[4]-145523070|0,n=(n<<6|n>>>26)+r|0,o+=(r^(n|~i))+t[11]-1120210379|0,o=(o<<10|o>>>22)+n|0,i+=(n^(o|~r))+t[2]+718787259|0,i=(i<<15|i>>>17)+o|0,r+=(o^(i|~n))+t[9]-343485551|0,r=(r<<21|r>>>11)+i|0,e[0]=n+e[0]|0,e[1]=r+e[1]|0,e[2]=i+e[2]|0,e[3]=o+e[3]|0}function n(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return n}function r(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return n}function i(e){var r,i,o,u,s,a,c=e.length,f=[1732584193,-271733879,-1732584194,271733878];for(r=64;r<=c;r+=64)t(f,n(e.substring(r-64,r)));for(e=e.substring(r-64),i=e.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<i;r+=1)o[r>>2]|=e.charCodeAt(r)<<(r%4<<3);if(o[r>>2]|=128<<(r%4<<3),r>55)for(t(f,o),r=0;r<16;r+=1)o[r]=0;return u=8*c,u=u.toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(u[2],16),a=parseInt(u[1],16)||0,o[14]=s,o[15]=a,t(f,o),f}function o(e){var n,i,o,u,s,a,c=e.length,f=[1732584193,-271733879,-1732584194,271733878];for(n=64;n<=c;n+=64)t(f,r(e.subarray(n-64,n)));for(e=n-64<c?e.subarray(n-64):new Uint8Array(0),i=e.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0;n<i;n+=1)o[n>>2]|=e[n]<<(n%4<<3);if(o[n>>2]|=128<<(n%4<<3),n>55)for(t(f,o),n=0;n<16;n+=1)o[n]=0;return u=8*c,u=u.toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(u[2],16),a=parseInt(u[1],16)||0,o[14]=s,o[15]=a,t(f,o),f}function u(e){var t,n="";for(t=0;t<4;t+=1)n+=v[e>>8*t+4&15]+v[e>>8*t&15];return n}function s(e){var t;for(t=0;t<e.length;t+=1)e[t]=u(e[t]);return e.join("")}function a(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function c(e,t){var n,r=e.length,i=new ArrayBuffer(r),o=new Uint8Array(i);for(n=0;n<r;n+=1)o[n]=e.charCodeAt(n);return t?o:i}function f(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function l(e,t,n){var r=new Uint8Array(e.byteLength+t.byteLength);return r.set(new Uint8Array(e)),r.set(new Uint8Array(t),e.byteLength),n?r:r.buffer}function d(e){var t,n=[],r=e.length;for(t=0;t<r-1;t+=2)n.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,n)}function h(){this.reset()}var v=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];return"5d41402abc4b2a76b9719d911017c592"!==s(i("hello"))&&function(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n},"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return e=0|e||0,e<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(n,r){var i,o,u,s,a=this.byteLength,c=t(n,a),f=a;return r!==e&&(f=t(r,a)),c>f?new ArrayBuffer(0):(i=f-c,o=new ArrayBuffer(i),u=new Uint8Array(o),s=new Uint8Array(this,c,i),u.set(s),o)}}(),h.prototype.append=function(e){return this.appendBinary(a(e)),this},h.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var r,i=this._buff.length;for(r=64;r<=i;r+=64)t(this._hash,n(this._buff.substring(r-64,r)));return this._buff=this._buff.substring(r-64),this},h.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r.charCodeAt(t)<<(t%4<<3);return this._finish(o,i),n=s(this._hash),e&&(n=d(n)),this.reset(),n},h.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},h.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},h.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},h.prototype._finish=function(e,n){var r,i,o,u=n;if(e[u>>2]|=128<<(u%4<<3),u>55)for(t(this._hash,e),u=0;u<16;u+=1)e[u]=0;r=8*this._length,r=r.toString(16).match(/(.*?)(.{0,8})$/),i=parseInt(r[2],16),o=parseInt(r[1],16)||0,e[14]=i,e[15]=o,t(this._hash,e)},h.hash=function(e,t){return h.hashBinary(a(e),t)},h.hashBinary=function(e,t){var n=i(e),r=s(n);return t?d(r):r},h.ArrayBuffer=function(){this.reset()},h.ArrayBuffer.prototype.append=function(e){var n,i=l(this._buff.buffer,e,!0),o=i.length;for(this._length+=e.byteLength,n=64;n<=o;n+=64)t(this._hash,r(i.subarray(n-64,n)));return this._buff=n-64<o?new Uint8Array(i.buffer.slice(n-64)):new Uint8Array(0),this},h.ArrayBuffer.prototype.end=function(e){var t,n,r=this._buff,i=r.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<i;t+=1)o[t>>2]|=r[t]<<(t%4<<3);return this._finish(o,i),n=s(this._hash),e&&(n=d(n)),this.reset(),n},h.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.ArrayBuffer.prototype.getState=function(){var e=h.prototype.getState.call(this);return e.buff=f(e.buff),e},h.ArrayBuffer.prototype.setState=function(e){return e.buff=c(e.buff,!0),h.prototype.setState.call(this,e)},h.ArrayBuffer.prototype.destroy=h.prototype.destroy,h.ArrayBuffer.prototype._finish=h.prototype._finish,h.ArrayBuffer.hash=function(e,t){var n=o(new Uint8Array(e)),r=s(n);return t?d(r):r},h})},{}],8:[function(e,t,n){var r=e(11),i=e(12),o=i;o.v1=r,o.v4=i,t.exports=o},{11:11,12:12}],9:[function(e,t,n){function r(e,t){var n=t||0,r=i;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}for(var i=[],o=0;o<256;++o)i[o]=(o+256).toString(16).substr(1);t.exports=r},{}],10:[function(e,t,n){(function(e){var n,r=e.crypto||e.msCrypto;if(r&&r.getRandomValues){var i=new Uint8Array(16);n=function(){return r.getRandomValues(i),i}}if(!n){var o=new Array(16);n=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],11:[function(e,t,n){function r(e,t,n){var r=t&&n||0,i=t||[];e=e||{};var u=void 0!==e.clockseq?e.clockseq:a,l=void 0!==e.msecs?e.msecs:(new Date).getTime(),d=void 0!==e.nsecs?e.nsecs:f+1,h=l-c+(d-f)/1e4;if(h<0&&void 0===e.clockseq&&(u=u+1&16383),(h<0||l>c)&&void 0===e.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=l,f=d,a=u,l+=122192928e5;var v=(1e4*(268435455&l)+d)%4294967296;i[r++]=v>>>24&255,i[r++]=v>>>16&255,i[r++]=v>>>8&255,i[r++]=255&v;var p=l/4294967296*1e4&268435455;i[r++]=p>>>8&255,i[r++]=255&p,i[r++]=p>>>24&15|16,i[r++]=p>>>16&255,i[r++]=u>>>8|128,i[r++]=255&u;for(var y=e.node||s,g=0;g<6;++g)i[r+g]=y[g];return t||o(i)}var i=e(10),o=e(9),u=i(),s=[1|u[0],u[1],u[2],u[3],u[4],u[5]],a=16383&(u[6]<<8|u[7]),c=0,f=0;t.exports=r},{10:10,9:9}],12:[function(e,t,n){function r(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var u=e.random||(e.rng||i)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,t)for(var s=0;s<16;++s)t[r+s]=u[s];return t||o(u)}var i=e(10),o=e(9);t.exports=r},{10:10,9:9}],13:[function(e,t,n){(function(t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function r(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}function i(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}function o(e){if(e instanceof ArrayBuffer)return i(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}function u(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&Yt.call(n)==Ht}function s(e){var t,n,i;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,i=e.length;n<i;n++)t[n]=s(e[n]);return t}if(e instanceof Date)return e.toISOString();if(r(e))return o(e);if(!u(e))return e;t={};for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=s(e[n]);void 0!==a&&(t[n]=a)}return t}function a(e){var t=!1;return Vt(function(n){if(t)throw new Error("once called more than once");t=!0,e.apply(this,n)})}function c(e){return Vt(function(t){t=s(t);var n=this,r="function"==typeof t[t.length-1]&&t.pop(),i=new Gt(function(r,i){var o;try{var u=a(function(e,t){e?i(e):r(t)});t.push(u),o=e.apply(n,t),o&&"function"==typeof o.then&&r(o)}catch(e){i(e)}});return r&&i.then(function(e){r(null,e)},r),i})}function f(e){return"$"+e}function l(e){return e.substring(1)}function d(){this._store={}}function h(e){if(this._store=new d,e&&Array.isArray(e))for(var t=0,n=e.length;t<n;t++)this.add(e[t])}function v(e,t){for(var n={},r=0,i=t.length;r<i;r++){var o=t[r];o in e&&(n[o]=e[o])}return n}function p(){return"undefined"!=typeof chrome&&void 0!==chrome.storage&&void 0!==chrome.storage.local}function y(){return en}function g(e){p()?chrome.storage.onChanged.addListener(function(t){null!=t.db_name&&e.emit(t.dbName.newValue)}):y()&&("undefined"!=typeof addEventListener?addEventListener("storage",function(t){e.emit(t.key)}):window.attachEvent("storage",function(t){e.emit(t.key)}))}function m(){Jt.EventEmitter.call(this),this._listeners={},g(this)}function _(e){if("undefined"!==console&&e in console){var t=Array.prototype.slice.call(arguments,1);console[e].apply(console,t)}}function w(e,t,n){Error.call(this,n),this.status=e,this.name=t,this.message=n,this.error=!0}function b(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function k(){}function $(e){return"boolean"==typeof e._remote?e._remote:"function"==typeof e.type&&(_("warn","db.type() is deprecated and will be removed in a future version of PouchDB"),"http"===e.type())}function x(e,t,n){return new Gt(function(r,i){e.get(t,function(o,u){if(o){if(404!==o.status)return i(o);u={}}var s=u._rev,a=n(u);if(!a)return r({updated:!1,rev:s});a._id=t,a._rev=s,r(j(e,a,n))})})}function j(e,t,n){return e.put(t).then(function(e){return{updated:!0,rev:e.rev}},function(r){if(409!==r.status)throw r;return x(e,t._id,n)})}function E(e){return e=s(e),e.index||(e.index={}),["type","name","ddoc"].forEach(function(t){e.index[t]&&(e[t]=e.index[t],delete e.index[t])}),e.fields&&(e.index.fields=e.fields,delete e.fields),e.type||(e.type="json"),e}function O(e,t,n){t=E(t),e.request({method:"POST",url:"_index",body:t},n)}function A(e,t,n){e.request({method:"POST",url:"_find",body:t},n)}function q(e,t,n){e.request({method:"POST",url:"_explain",body:t},n)}function S(e,t){e.request({method:"GET",url:"_index"},t)}function L(e,t,n){var r=t.ddoc,i=t.type||"json",o=t.name;if(!r)return n(new Error("you must provide an index's ddoc"));if(!o)return n(new Error("you must provide an index's name"));var u="_index/"+[r,i,o].map(encodeURIComponent).join("/");e.request({method:"DELETE",url:u},n)}function B(e,t){for(var n=e,r=0,i=t.length;r<i;r++){if(!(n=n[t[r]]))break}return n}function T(e,t,n){for(var r=0,i=t.length;r<i-1;r++){e=e[t[r]]={}}e[t[i-1]]=n}function M(e,t){return e<t?-1:e>t?1:0}function C(e){for(var t=[],n="",r=0,i=e.length;r<i;r++){var o=e[r];"."===o?r>0&&"\\"===e[r-1]?n=n.substring(0,n.length-1)+".":(t.push(n),n=""):n+=o}return t.push(n),t}function D(e){return on.indexOf(e)>-1}function I(e){return Object.keys(e)[0]}function U(e){return e[I(e)]}function F(e){var t={};return e.forEach(function(e){Object.keys(e).forEach(function(n){var r=e[n];if("object"!=typeof r&&(r={$eq:r}),D(n))r instanceof Array?t[n]=r.map(function(e){return F([e])}):t[n]=F([r]);else{var i=t[n]=t[n]||{};Object.keys(r).forEach(function(e){var t=r[e];return"$gt"===e||"$gte"===e?N(e,t,i):"$lt"===e||"$lte"===e?P(e,t,i):"$ne"===e?R(t,i):"$eq"===e?z(t,i):void(i[e]=t)})}})}),t}function N(e,t,n){void 0===n.$eq&&(void 0!==n.$gte?"$gte"===e?t>n.$gte&&(n.$gte=t):t>=n.$gte&&(delete n.$gte,n.$gt=t):void 0!==n.$gt?"$gte"===e?t>n.$gt&&(delete n.$gt,n.$gte=t):t>n.$gt&&(n.$gt=t):n[e]=t)}function P(e,t,n){void 0===n.$eq&&(void 0!==n.$lte?"$lte"===e?t<n.$lte&&(n.$lte=t):t<=n.$lte&&(delete n.$lte,n.$lt=t):void 0!==n.$lt?"$lte"===e?t<n.$lt&&(delete n.$lt,n.$lte=t):t<n.$lt&&(n.$lt=t):n[e]=t)}function R(e,t){"$ne"in t?t.$ne.push(e):t.$ne=[e]}function z(e,t){delete t.$gt,delete t.$gte,delete t.$lt,delete t.$lte,delete t.$ne,t.$eq=e}function V(e){var t=s(e),n=!1;"$and"in t&&(t=F(t.$and),n=!0),["$or","$nor"].forEach(function(e){e in t&&t[e].forEach(function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n],i=e[r];"object"==typeof i&&null!==i||(e[r]={$eq:i})}})}),"$not"in t&&(t.$not=F([t.$not]));for(var r=Object.keys(t),i=0;i<r.length;i++){var o=r[i],u=t[o];"object"!=typeof u||null===u?u={$eq:u}:"$ne"in u&&!n&&(u.$ne=[u.$ne]),t[o]=u}return t}function J(e,t,n){for(var r="",i=n-e.length;r.length<i;)r+=t;return r}function K(e,t,n){return J(e,t,n)+e}function W(e,t){if(e===t)return 0;e=X(e),t=X(t);var n=re(e),r=re(t);if(n-r!=0)return n-r;switch(typeof e){case"number":return e-t;case"boolean":return e<t?-1:1;case"string":return te(e,t)}return Array.isArray(e)?ee(e,t):ne(e,t)}function X(e){switch(typeof e){case"undefined":return null;case"number":return e===1/0||e===-1/0||isNaN(e)?null:e;case"object":var t=e;if(Array.isArray(e)){var n=e.length;e=new Array(n);for(var r=0;r<n;r++)e[r]=X(t[r])}else{if(e instanceof Date)return e.toJSON();if(null!==e){e={};for(var i in t)if(t.hasOwnProperty(i)){var o=t[i];void 0!==o&&(e[i]=X(o))}}}}return e}function G(e){if(null!==e)switch(typeof e){case"boolean":return e?1:0;case"number":return ie(e);case"string":return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"");case"object":var t=Array.isArray(e),n=t?e:Object.keys(e),r=-1,i=n.length,o="";if(t)for(;++r<i;)o+=Y(n[r]);else for(;++r<i;){var u=n[r];o+=Y(u)+Y(e[u])}return o}return""}function Y(e){return e=X(e),re(e)+an+G(e)+"\0"}function H(e,t){var n,r=t;if("1"===e[t])n=0,t++;else{var i="0"===e[t];t++;var o="",u=e.substring(t,t+sn),s=parseInt(u,10)+un;for(i&&(s=-s),t+=sn;;){var a=e[t];if("\0"===a)break;o+=a,t++}o=o.split("."),n=1===o.length?parseInt(o,10):parseFloat(o[0]+"."+o[1]),i&&(n-=10),0!==s&&(n=parseFloat(n+"e"+s))}return{num:n,length:t-r}}function Q(e,t){var n=e.pop();if(t.length){var r=t[t.length-1];n===r.element&&(t.pop(),r=t[t.length-1]);var i=r.element,o=r.index;if(Array.isArray(i))i.push(n);else if(o===e.length-2){var u=e.pop();i[u]=n}else e.push(n)}}function Z(e){for(var t=[],n=[],r=0;;){var i=e[r++];if("\0"!==i)switch(i){case"1":t.push(null);break;case"2":t.push("1"===e[r]),r++;break;case"3":var o=H(e,r);t.push(o.num),r+=o.length;break;case"4":for(var u="";;){var s=e[r];if("\0"===s)break;u+=s,r++}u=u.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""),t.push(u);break;case"5":var a={element:[],index:t.length};t.push(a.element),n.push(a);break;case"6":var c={element:{},index:t.length};t.push(c.element),n.push(c);break;default:throw new Error("bad collationIndex or unexpectedly reached end of input: "+i)}else{if(1===t.length)return t.pop();Q(t,n)}}}function ee(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=W(e[r],t[r]);if(0!==i)return i}return e.length===t.length?0:e.length>t.length?1:-1}function te(e,t){return e===t?0:e>t?1:-1}function ne(e,t){for(var n=Object.keys(e),r=Object.keys(t),i=Math.min(n.length,r.length),o=0;o<i;o++){var u=W(n[o],r[o]);if(0!==u)return u;if(0!==(u=W(e[n[o]],t[r[o]])))return u}return n.length===r.length?0:n.length>r.length?1:-1}function re(e){var t=["boolean","number","string","object"],n=t.indexOf(typeof e);return~n?null===e?1:Array.isArray(e)?5:n<3?n+2:n+3:Array.isArray(e)?5:void 0}function ie(e){if(0===e)return"1";var t=e.toExponential().split(/e\+?/),n=parseInt(t[1],10),r=e<0,i=r?"0":"2",o=(r?-n:n)-un,u=K(o.toString(),"0",sn);i+=an+u;var s=Math.abs(parseFloat(t[0]));r&&(s=10-s);var a=s.toFixed(20);return a=a.replace(/\.?0+$/,""),i+=an+a}function oe(e){function t(t){return e.map(function(e){var n=I(e),r=C(n);return B(t,r)})}return function(e,n){var r=t(e.doc),i=t(n.doc),o=W(r,i);return 0!==o?o:M(e.doc._id,n.doc._id)}}function ue(e,t,n){if(e=e.filter(function(e){return se(e.doc,t.selector,n)}),t.sort){var r=oe(t.sort);e=e.sort(r),"string"!=typeof t.sort[0]&&"desc"===U(t.sort[0])&&(e=e.reverse())}if("limit"in t||"skip"in t){var i=t.skip||0,o=("limit"in t?t.limit:e.length)+i;e=e.slice(i,o)}return e}function se(e,t,n){return n.every(function(n){var r=t[n],i=C(n),o=B(e,i);return D(n)?ce(n,r,e):ae(r,e,i,o)})}function ae(e,t,n,r){return!e||Object.keys(e).every(function(i){var o=e[i];return fe(i,t,o,n,r)})}function ce(e,t,n){return"$or"===e?t.some(function(e){return se(n,e,Object.keys(e))}):"$not"===e?!se(n,t,Object.keys(t)):!t.find(function(e){return se(n,e,Object.keys(e))})}function fe(e,t,n,r,i){if(!cn[e])throw new Error('unknown operator "'+e+'" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');return cn[e](t,n,r,i)}function le(e){return void 0!==e&&null!==e}function de(e){return void 0!==e}function he(e,t){var n=t[0],r=t[1];if(0===n)throw new Error("Bad divisor, cannot divide by zero");if(parseInt(n,10)!==n)throw new Error("Divisor is not an integer");if(parseInt(r,10)!==r)throw new Error("Modulus is not an integer");return parseInt(e,10)===e&&e%n===r}function ve(e,t){return t.some(function(t){return e instanceof Array?e.indexOf(t)>-1:e===t})}function pe(e,t){return t.every(function(t){return e.indexOf(t)>-1})}function ye(e,t){return e.length===t}function ge(e,t){return new RegExp(t).test(e)}function me(e,t){switch(t){case"null":return null===e;case"boolean":return"boolean"==typeof e;case"number":return"number"==typeof e;case"string":return"string"==typeof e;case"array":return e instanceof Array;case"object":return"[object Object]"==={}.toString.call(e)}throw new Error(t+" not supported as a type.Please use one of object, string, array, number, boolean or null.")}function _e(e){return function(){for(var t=arguments.length,n=new Array(t),r=-1;++r<t;)n[r]=arguments[r];return e.call(this,n)}}function we(e){return _e(function(t){var n=t.pop(),r=e.apply(this,t);return be(r,n),r})}function be(e,n){return e.then(function(e){t.nextTick(function(){n(null,e)})},function(e){t.nextTick(function(){n(e)})}),e}function ke(e){for(var t={},n=0,r=e.length;n<r;n++)t=nn(t,e[n]);return t}function $e(e,t){for(var n={},r=0,i=t.length;r<i;r++){var o=C(t[r]),u=B(e,o);void 0!==u&&T(n,o,u)}return n}function xe(e,t){for(var n=0,r=Math.min(e.length,t.length);n<r;n++)if(e[n]!==t[n])return!1;return!0}function je(e,t){return!(e.length>t.length)&&xe(e,t)}function Ee(e,t){e=e.slice();for(var n=0,r=t.length;n<r;n++){var i=t[n];if(!e.length)break;var o=e.indexOf(i);if(-1===o)return!1;e.splice(o,1)}return!0}function Oe(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n]]=!0;return t}function Ae(e,t){for(var n=null,r=-1,i=0,o=e.length;i<o;i++){var u=e[i],s=t(u);s>r&&(r=s,n=u)}return n}function qe(e,t){if(e.length!==t.length)return!1;for(var n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Se(e){for(var t={},n=0;n<e.length;n++)t["$"+e[n]]=!0;return Object.keys(t).map(function(e){return e.substring(1)})}function Le(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if("TypeError"!==o.name)throw o;for(var n="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,r=new n,i=0;i<e.length;i+=1)r.append(e[i]);return r.getBlob(t.type)}}function Be(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function Te(e,t){return Le([Be(e)],{type:t})}function Me(e,t){return Te(ln(e),t)}function Ce(){this.promise=new Gt(function(e){e()})}function De(e){return Xt.hash(e)}function Ie(e){if(!e)return"undefined";switch(typeof e){case"function":case"string":return e.toString();default:return JSON.stringify(e)}}function Ue(e,t){return Ie(e)+Ie(t)+"undefined"}function Fe(e,t,n,r,i,o){var u,s=Ue(n,r);if(!i&&(u=e._cachedViews=e._cachedViews||{},u[s]))return u[s];var a=e.info().then(function(a){function c(e){e.views=e.views||{};var n=t;-1===n.indexOf("/")&&(n=t+"/"+t);var r=e.views[n]=e.views[n]||{};if(!r[f])return r[f]=!0,e}var f=a.db_name+"-mrview-"+(i?"temp":De(s));return x(e,"_local/"+o,c).then(function(){return e.registerDependentDatabase(f).then(function(t){var i=t.db;i.auto_compaction=!0;var o={name:f,db:i,sourceDB:e,adapter:e.adapter,mapFun:n,reduceFun:r};return o.db.get("_local/lastSeq").catch(function(e){if(404!==e.status)throw e}).then(function(e){return o.seq=e?e.seq:0,u&&o.db.once("destroyed",function(){delete u[s]}),o})})})});return u&&(u[s]=a),a}function Ne(e){this.status=400,this.name="query_parse_error",this.message=e,this.error=!0;try{Error.captureStackTrace(this,Ne)}catch(e){}}function Pe(e){this.status=404,this.name="not_found",this.message=e,this.error=!0;try{Error.captureStackTrace(this,Pe)}catch(e){}}function Re(e){this.status=500,this.name="invalid_value",this.message=e,this.error=!0;try{Error.captureStackTrace(this,Re)}catch(e){}}function ze(e,t){return t&&e.then(function(e){Wt(function(){t(null,e)})},function(e){Wt(function(){t(e)})}),e}function Ve(e){return Vt(function(t){var n=t.pop(),r=e.apply(this,t);return"function"==typeof n&&ze(r,n),r})}function Je(e,t){return e.then(function(e){return t().then(function(){return e})},function(e){return t().then(function(){throw e})})}function Ke(e,t){return function(){var n=arguments,r=this;return e.add(function(){return t.apply(r,n)})}}function We(e){var t=new Qt(e),n=new Array(t.size),r=-1;return t.forEach(function(e){n[++r]=e}),n}function Xe(e){var t=new Array(e.size),n=-1;return e.forEach(function(e,r){t[++n]=r}),t}function Ge(e){return-1===e.indexOf("/")?[e,e]:e.split("/")}function Ye(e){return 1===e.length&&/^1-/.test(e[0].rev)}function He(e,t){try{e.emit("error",t)}catch(e){_("error","The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."),_("error",t)}}function Qe(e,t){return function(n){for(var r=[],i=0,o=e.length;i<o;i++){for(var u=C(e[i]),s=n,a=0,c=u.length;a<c;a++){if(!(s=s[u[a]]))return}r.push(s)}t(r)}}function Ze(e,t){var n=C(e);return function(e){for(var r=e,i=0,o=n.length;i<o;i++){if(!(r=r[n[i]]))return}t(r)}}function et(e,t){return function(n){t(n[e])}}function tt(e,t){return function(n){for(var r=[],i=0,o=e.length;i<o;i++)r.push(n[e[i]]);t(r)}}function nt(e){for(var t=0,n=e.length;t<n;t++){if(-1!==e[t].indexOf("."))return!1}return!0}function rt(e,t){var n=nt(e),r=1===e.length;return n?r?et(e[0],t):tt(e,t):r?Ze(e[0],t):Qe(e,t)}function it(e,t){return rt(Object.keys(e.fields),t)}function ot(){throw new Error("reduce not supported")}function ut(e,t){var n=e.views[t];if(!n.map||!n.map.fields)throw new Error("ddoc "+e._id+" with view "+t+" doesn't have map.fields defined. maybe it wasn't created by this plugin?")}function st(e){if(!Array.isArray(e))throw new Error("invalid sort json - should be an array");return e.map(function(e){if("string"==typeof e){var t={};return t[e]="asc",t}return e})}function at(e){var t=[];return"string"==typeof e?t.push(e):t=e,t.map(function(e){return e.replace("_design/","")})}function ct(e){return e.fields=e.fields.map(function(e){if("string"==typeof e){var t={};return t[e]="asc",t}return e}),e}function ft(e,t){for(var n=[],r=0;r<t.def.fields.length;r++){var i=I(t.def.fields[r]);n.push(e[i])}return n}function lt(e,t,n){for(var r=n.def.fields,i=0,o=e.length;i<o;i++){var u=e[i],s=ft(u.doc,n);if(1===r.length)s=s[0];else for(;s.length>t.length;)s.pop();if(Math.abs(W(s,t))>0)break}return i>0?e.slice(i):e}function dt(e){var t=s(e);return delete t.startkey,delete t.endkey,delete t.inclusive_start,delete t.inclusive_end,"endkey"in e&&(t.startkey=e.endkey),"startkey"in e&&(t.endkey=e.startkey),"inclusive_start"in e&&(t.inclusive_end=e.inclusive_start),"inclusive_end"in e&&(t.inclusive_start=e.inclusive_end),t}function ht(e){var t=e.fields.filter(function(e){return"asc"===U(e)});if(0!==t.length&&t.length!==e.fields.length)throw new Error("unsupported mixed sorting")}function vt(e,t){if(t.defaultUsed&&e.sort){var n=e.sort.filter(function(e){return"_id"!==Object.keys(e)[0]}).map(function(e){return Object.keys(e)[0]});if(n.length>0)throw new Error('Cannot sort on field(s) "'+n.join(",")+'" when using the default index')}t.defaultUsed}function pt(e){if("object"!=typeof e.selector)throw new Error("you must provide a selector when you find()")}function yt(e,t){var n,r=Object.keys(e),i=t?t.map(I):[];return n=r.length>=i.length?r:i,0===i.length?{fields:n}:(n=n.sort(function(e,t){var n=i.indexOf(e);-1===n&&(n=Number.MAX_VALUE);var r=i.indexOf(t);return-1===r&&(r=Number.MAX_VALUE),n<r?-1:n>r?1:0}),{fields:n,sortOrder:t.map(I)})}function gt(e,t){function n(){return o||(o=De(JSON.stringify(t)))}function r(e){return e._rev&&"query"!==e.language&&(f=!0),e.language="query",e.views=e.views||{},!(l=!!e.views[u])&&(e.views[u]={map:{fields:ke(t.index.fields)},reduce:"_count",options:{def:i}},e)}t=E(t);var i=s(t.index);t.index=ct(t.index),ht(t.index);var o,u=t.name||"idx-"+n(),a=t.ddoc||"idx-"+n(),c="_design/"+a,f=!1,l=!1;return e.constructor.emit("debug",["find","creating index",c]),x(e,c,r).then(function(){if(f)throw new Error('invalid language for ddoc with id "'+c+'" (should be "query")')}).then(function(){var t=a+"/"+u;return pn.query.call(e,t,{limit:0,reduce:!1}).then(function(){return{id:c,name:u,result:l?"exists":"created"}})})}function mt(e){return e.allDocs({startkey:"_design/",endkey:"_design/�",include_docs:!0}).then(function(e){var t={indexes:[{ddoc:null,name:"_all_docs",type:"special",def:{fields:[{_id:"asc"}]}}]};return t.indexes=fn(t.indexes,e.rows.filter(function(e){return"query"===e.doc.language}).map(function(e){return(void 0!==e.doc.views?Object.keys(e.doc.views):[]).map(function(t){var n=e.doc.views[t];return{ddoc:e.id,name:t,type:"json",def:ct(n.options.def)}})})),t.indexes.sort(function(e,t){return M(e.name,t.name)}),t.total_rows=t.indexes.length,t})}function _t(e,t){for(var n=e.def.fields.map(I),r=0,i=n.length;r<i;r++){if(t===n[r])return!0}return!1}function wt(e,t){return"$eq"!==I(e[t])}function bt(e,t){var n=t.def.fields.map(I);return e.slice().sort(function(e,t){var r=n.indexOf(e),i=n.indexOf(t);return-1===r&&(r=Number.MAX_VALUE),-1===i&&(i=Number.MAX_VALUE),M(r,i)})}function kt(e,t,n){n=bt(n,e);for(var r=!1,i=0,o=n.length;i<o;i++){var u=n[i];if(r||!_t(e,u))return n.slice(i);i<o-1&&wt(t,u)&&(r=!0)}return[]}function $t(e){var t=[];return Object.keys(e).forEach(function(n){var r=e[n];Object.keys(r).forEach(function(e){"$ne"===e&&t.push(n)})}),t}function xt(e,t,n,r){return bt(Se(fn(e,kt(t,n,r),$t(n))),t)}function jt(e,t,n){if(t){var r=je(t,e),i=xe(n,e);return r&&i}return Ee(n,e)}function Et(e){return-1===mn.indexOf(e)}function Ot(e,t){var n=e[0],r=t[n];return void 0===r||!!Object.keys(r).some(function(e){return!Et(e)})&&!(1===Object.keys(r).length&&"$ne"===I(r))}function At(e,t,n,r){var i=e.def.fields.map(I);return!!jt(i,t,n)&&Ot(i,r)}function qt(e,t,n,r){return r.reduce(function(r,i){return At(i,n,t,e)&&r.push(i),r},[])}function St(e,t,n,r,i){function o(e){for(var t=e.def.fields.map(I),n=0,r=0,i=t.length;r<i;r++){var o=t[r];a[o]&&n++}return n}var u=qt(e,t,n,r);if(0===u.length){if(i)throw{error:"no_usable_index",message:"There is no index available for this selector."};var s=r[0];return s.defaultUsed=!0,s}if(1===u.length&&!i)return u[0];var a=Oe(t);if(i){var c="_design/"+i[0],f=2===i.length&&i[1],l=u.find(function(e){return!(!f||e.ddoc!==c||f!==e.name)||e.ddoc===c});if(!l)throw{error:"unknown_error",message:"Could not find that index or could not use that index for the query"};return l}return Ae(u,o)}function Lt(e,t){switch(e){case"$eq":return{key:t};case"$lte":return{endkey:t};case"$gte":return{startkey:t};case"$lt":return{endkey:t,inclusive_end:!1};case"$gt":return{startkey:t,inclusive_start:!1}}}function Bt(e,t){var n,r=I(t.def.fields[0]),i=e[r]||{},o=[],u=Object.keys(i);return u.forEach(function(e){if(Et(e))return void o.push(r);var t=i[e],u=Lt(e,t);n=n?ke([n,u]):u}),{queryOpts:n,inMemoryFields:o}}function Tt(e,t){switch(e){case"$eq":return{startkey:t,endkey:t};case"$lte":return{endkey:t};case"$gte":return{startkey:t};case"$lt":return{endkey:t,inclusive_end:!1};case"$gt":return{startkey:t,inclusive_start:!1}}}function Mt(e,t){function n(e){!1!==r&&s.push(yn),!1!==i&&a.push(gn),u=o.slice(e)}for(var r,i,o=t.def.fields.map(I),u=[],s=[],a=[],c=0,f=o.length;c<f;c++){var l=o[c],d=e[l];if(!d||!Object.keys(d).length){n(c);break}if(c>0){if(Object.keys(d).some(Et)){n(c);break}var h="$gt"in d||"$gte"in d||"$lt"in d||"$lte"in d,v=Object.keys(e[o[c-1]]),p=qe(v,["$eq"]),y=qe(v,Object.keys(d));if(h&&!p&&!y){n(c);break}}for(var g=Object.keys(d),m=null,_=0;_<g.length;_++){var w=g[_],b=d[w],k=Tt(w,b);m=m?ke([m,k]):k}s.push("startkey"in m?m.startkey:yn),a.push("endkey"in m?m.endkey:gn),"inclusive_start"in m&&(r=m.inclusive_start),"inclusive_end"in m&&(i=m.inclusive_end)}var $={startkey:s,endkey:a};return void 0!==r&&($.inclusive_start=r),void 0!==i&&($.inclusive_end=i),{queryOpts:$,inMemoryFields:u}}function Ct(e){return{queryOpts:{startkey:null},inMemoryFields:[Object.keys(e)]}}function Dt(e,t){return t.defaultUsed?Ct(e,t):1===t.def.fields.length?Bt(e,t):Mt(e,t)}function It(e,t){var n=e.selector,r=e.sort,i=yt(n,r),o=i.fields,u=i.sortOrder,s=St(n,o,u,t,e.use_index),a=Dt(n,s);return{queryOpts:a.queryOpts,index:s,inMemoryFields:xt(a.inMemoryFields,s,n,o)}}function Ut(e){return e.ddoc.substring(8)+"/"+e.name}function Ft(e,t){var n=s(t);return n.descending?("endkey"in n&&"string"!=typeof n.endkey&&(n.endkey=""),"startkey"in n&&"string"!=typeof n.startkey&&(n.limit=0)):("startkey"in n&&"string"!=typeof n.startkey&&(n.startkey=""),"endkey"in n&&"string"!=typeof n.endkey&&(n.limit=0)),"key"in n&&"string"!=typeof n.key&&(n.limit=0),e.allDocs(n).then(function(e){return e.rows=e.rows.filter(function(e){return!/^_design\//.test(e.id)}),e})}function Nt(e,t,n){return t.selector&&(t.selector=V(t.selector)),t.sort&&(t.sort=st(t.sort)),t.use_index&&(t.use_index=at(t.use_index)),pt(t),mt(e).then(function(r){e.constructor.emit("debug",["find","planning query",t]);var i=It(t,r.indexes);e.constructor.emit("debug",["find","query plan",i]);var o=i.index;vt(t,o);var u=nn({include_docs:!0,reduce:!1},i.queryOpts);return"startkey"in u&&"endkey"in u&&W(u.startkey,u.endkey)>0?{docs:[]}:(t.sort&&"string"!=typeof t.sort[0]&&"desc"===U(t.sort[0])&&(u.descending=!0,u=dt(u)),i.inMemoryFields.length||("limit"in t&&(u.limit=t.limit),"skip"in t&&(u.skip=t.skip)),n?Gt.resolve(i,u):Gt.resolve().then(function(){if("_all_docs"===o.name)return Ft(e,u);var t=Ut(o);return pn.query.call(e,t,u)}).then(function(e){!1===u.inclusive_start&&(e.rows=lt(e.rows,u.startkey,o)),i.inMemoryFields.length&&(e.rows=ue(e.rows,t,i.inMemoryFields));var n={docs:e.rows.map(function(e){var n=e.doc;return t.fields?$e(n,t.fields):n})};return o.defaultUsed&&(n.warning="no matching index found, create an index to optimize query time"),n}))})}function Pt(e,t){return Nt(e,t,!0).then(function(n){return{dbname:e.name,index:n.index,selector:t.selector,range:{start_key:n.queryOpts.startkey,end_key:n.queryOpts.endkey},opts:{use_index:t.use_index||[],bookmark:"nil",limit:t.limit,skip:t.skip,sort:t.sort||{},fields:t.fields,conflicts:!1,r:[49]},limit:t.limit,skip:t.skip||0,fields:t.fields}})}function Rt(e,t){function n(e){return 1===Object.keys(e.views).length&&e.views[i]?{_id:r,_deleted:!0}:(delete e.views[i],e)}if(!t.ddoc)throw new Error("you must supply an index.ddoc when deleting");if(!t.name)throw new Error("you must supply an index.name when deleting");var r=t.ddoc,i=t.name;return x(e,r,n).then(function(){return pn.viewCleanup.apply(e)}).then(function(){return{ok:!0}})}var zt=(n(e(8)),n(e(5))),Vt=n(e(1)),Jt=e(2),Kt=n(e(4)),Wt=n(e(3)),Xt=n(e(7)),Gt="function"==typeof Promise?Promise:zt,Yt=Function.prototype.toString,Ht=Yt.call(Object);d.prototype.get=function(e){var t=f(e);return this._store[t]},d.prototype.set=function(e,t){var n=f(e);return this._store[n]=t,!0},d.prototype.has=function(e){return f(e)in this._store},d.prototype.delete=function(e){var t=f(e),n=t in this._store;return delete this._store[t],n},d.prototype.forEach=function(e){for(var t=Object.keys(this._store),n=0,r=t.length;n<r;n++){var i=t[n],o=this._store[i];i=l(i),e(o,i)}},Object.defineProperty(d.prototype,"size",{get:function(){return Object.keys(this._store).length}}),h.prototype.add=function(e){return this._store.set(e,!0)},h.prototype.has=function(e){return this._store.has(e)},h.prototype.forEach=function(e){this._store.forEach(function(t,n){e(n)})},Object.defineProperty(h.prototype,"size",{get:function(){return this._store.size}});var Qt,Zt;!function(){if("undefined"==typeof Symbol||"undefined"==typeof Map||"undefined"==typeof Set)return!1;var e=Object.getOwnPropertyDescriptor(Map,Symbol.species);return e&&"get"in e&&Map[Symbol.species]===Map}()?(Qt=h,Zt=d):(Qt=Set,Zt=Map);var en;if(p())en=!1;else try{localStorage.setItem("_pouch_check_localstorage",1),en=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){en=!1}Kt(m,Jt.EventEmitter),m.prototype.addListener=function(e,t,n,r){function i(){function e(){u=!1}if(o._listeners[t]){if(u)return void(u="waiting");u=!0;var s=v(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary"]);n.changes(s).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===u&&Wt(i),u=!1}).on("error",e)}}if(!this._listeners[t]){var o=this,u=!1;this._listeners[t]=i,this.on(e,i)}},m.prototype.removeListener=function(e,t){t in this._listeners&&(Jt.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},m.prototype.notifyLocalWindows=function(e){p()?chrome.storage.local.set({dbName:e}):y()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},m.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)};var tn;tn="function"==typeof Object.assign?Object.assign:function(e){for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t};var nn=tn;Kt(w,Error),w.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};var rn=(new w(401,"unauthorized","Name or password is incorrect."),new w(400,"bad_request","Missing JSON list of 'docs'"),new w(404,"not_found","missing"),new w(409,"conflict","Document update conflict"),new w(400,"bad_request","_id field must contain a string"),new w(412,"missing_id","_id is required for puts"),new w(400,"bad_request","Only reserved document ids may start with underscore."),new w(412,"precondition_failed","Database not open"),new w(500,"unknown_error","Database encountered an unknown error"),new w(500,"badarg","Some query argument is invalid"),new w(400,"invalid_request","Request was invalid"),new w(400,"query_parse_error","Some query parameter is invalid"),new w(500,"doc_validation","Bad special document member"),new w(400,"bad_request","Something wrong with the request"),new w(400,"bad_request","Document must be a JSON object"),new w(404,"not_found","Database not found"),new w(500,"indexed_db_went_bad","unknown"),new w(500,"web_sql_went_bad","unknown"),new w(500,"levelDB_went_went_bad","unknown"),new w(403,"forbidden","Forbidden by design doc validate_doc_update function"),new w(400,"bad_request","Invalid rev format"),new w(412,"file_exists","The database could not be created, the file already exists."),new w(412,"missing_stub","A pre-existing attachment stub wasn't found"),new w(413,"invalid_url","Provided URL is invalid"),k.name);var on=["$or","$nor","$not"],un=-324,sn=3,an="",cn={$elemMatch:function(e,t,n,r){return!!Array.isArray(r)&&(0!==r.length&&("object"==typeof r[0]?r.some(function(e){return se(e,t,Object.keys(t))}):r.some(function(r){return ae(t,e,n,r)})))},$allMatch:function(e,t,n,r){return!!Array.isArray(r)&&(0!==r.length&&("object"==typeof r[0]?r.every(function(e){return se(e,t,Object.keys(t))}):r.every(function(r){return ae(t,e,n,r)})))},$eq:function(e,t,n,r){return de(r)&&0===W(r,t)},$gte:function(e,t,n,r){return de(r)&&W(r,t)>=0},$gt:function(e,t,n,r){return de(r)&&W(r,t)>0},$lte:function(e,t,n,r){return de(r)&&W(r,t)<=0},$lt:function(e,t,n,r){return de(r)&&W(r,t)<0},$exists:function(e,t,n,r){return t?de(r):!de(r)},$mod:function(e,t,n,r){return le(r)&&he(r,t)},$ne:function(e,t,n,r){return t.every(function(e){return 0!==W(r,e)})},$in:function(e,t,n,r){return le(r)&&ve(r,t)},$nin:function(e,t,n,r){return le(r)&&!ve(r,t)},$size:function(e,t,n,r){return le(r)&&ye(r,t)},$all:function(e,t,n,r){return Array.isArray(r)&&pe(r,t)},$regex:function(e,t,n,r){return le(r)&&ge(r,t)},$type:function(e,t,n,r){return me(r,t)}},fn=_e(function(e){for(var t=[],n=0,r=e.length;n<r;n++){var i=e[n];Array.isArray(i)?t=t.concat(fn.apply(null,i)):t.push(i)}return t}),ln=function(e){return atob(e)};Ce.prototype.add=function(e){return this.promise=this.promise.catch(function(){}).then(function(){return e()}),this.promise},Ce.prototype.finish=function(){return this.promise},Kt(Ne,Error),Kt(Pe,Error),Kt(Re,Error);var dn={},hn=new Ce,vn=50,pn=function(e,t,n,r){function i(e,t,n){try{t(n)}catch(t){He(e,t)}}function o(e,t,n,r,i){try{return{output:t(n,r,i)}}catch(t){return He(e,t),{error:t}}}function u(e,t){var n=W(e.key,t.key);return 0!==n?n:W(e.value,t.value)}function s(e,t,n){return n=n||0,"number"==typeof t?e.slice(n,t+n):n>0?e.slice(n):e}function a(e){var t=e.value;return t&&"object"==typeof t&&t._id||e.id}function c(e){e.rows.forEach(function(e){var t=e.doc&&e.doc._attachments;t&&Object.keys(t).forEach(function(e){var n=t[e];t[e].data=Me(n.data,n.content_type)})})}function f(e){return function(t){return e.include_docs&&e.attachments&&e.binary&&c(t),t}}function l(e,t,n,r){var i=t[e];void 0!==i&&(r&&(i=encodeURIComponent(JSON.stringify(i))),n.push(e+"="+i))}function d(e){if(void 0!==e){var t=Number(e);return isNaN(t)||t!==parseInt(e,10)?e:t}}function h(e){return e.group_level=d(e.group_level),e.limit=d(e.limit),e.skip=d(e.skip),e}function v(e){if(e){if("number"!=typeof e)return new Ne('Invalid value for integer: "'+e+'"');if(e<0)return new Ne('Invalid value for positive integer: "'+e+'"')}}function p(e,t){var n=e.descending?"endkey":"startkey",r=e.descending?"startkey":"endkey";if(void 0!==e[n]&&void 0!==e[r]&&W(e[n],e[r])>0)throw new Ne("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");if(t.reduce&&!1!==e.reduce){if(e.include_docs)throw new Ne("{include_docs:true} is invalid for reduce");if(e.keys&&e.keys.length>1&&!e.group&&!e.group_level)throw new Ne("Multi-key fetches for reduce views must use {group: true}")}["group_level","limit","skip"].forEach(function(t){var n=v(e[t]);if(n)throw n})}function y(e,t,n){var r,i=[],o="GET";if(l("reduce",n,i),l("include_docs",n,i),l("attachments",n,i),l("limit",n,i),l("descending",n,i),l("group",n,i),l("group_level",n,i),l("skip",n,i),l("stale",n,i),l("conflicts",n,i),l("startkey",n,i,!0),l("start_key",n,i,!0),l("endkey",n,i,!0),l("end_key",n,i,!0),l("inclusive_end",n,i),l("key",n,i,!0),i=i.join("&"),i=""===i?"":"?"+i,void 0!==n.keys){var u="keys="+encodeURIComponent(JSON.stringify(n.keys));u.length+i.length+1<=2e3?i+=("?"===i[0]?"&":"?")+u:(o="POST","string"==typeof t?r={keys:n.keys}:t.keys=n.keys)}if("string"==typeof t){var s=Ge(t);return e.request({method:o,url:"_design/"+s[0]+"/_view/"+s[1]+i,body:r}).then(function(e){return e.rows.forEach(function(e){if(e.value&&e.value.error&&"builtin_reduce_error"===e.value.error)throw new Error(e.reason)}),e}).then(f(n))}return r=r||{},Object.keys(t).forEach(function(e){Array.isArray(t[e])?r[e]=t[e]:r[e]=t[e].toString()}),e.request({method:"POST",url:"_temp_view"+i,body:r}).then(f(n))}function g(e,t,n){return new Gt(function(r,i){e._query(t,n,function(e,t){if(e)return i(e);r(t)})})}function m(e){return new Gt(function(t,n){e._viewCleanup(function(e,r){if(e)return n(e);t(r)})})}function _(e){return function(t){if(404===t.status)return e;throw t}}function w(e,t,n){function r(e){return e.keys.length?t.db.allDocs({keys:e.keys,include_docs:!0}):Gt.resolve({rows:[]})}function i(e,t){for(var n=[],r=new Qt,i=0,o=t.rows.length;i<o;i++){var u=t.rows[i],s=u.doc;if(s&&(n.push(s),r.add(s._id),s._deleted=!a.has(s._id),!s._deleted)){var c=a.get(s._id);"value"in c&&(s.value=c.value)}}var f=Xe(a);return f.forEach(function(e){if(!r.has(e)){var t={_id:e},i=a.get(e);"value"in i&&(t.value=i.value),n.push(t)}}),e.keys=We(f.concat(e.keys)),n.push(e),n}var o="_local/doc_"+e,u={_id:o,keys:[]},s=n.get(e),a=s[0],c=s[1];return function(){return Ye(c)?Gt.resolve(u):t.db.get(o).catch(_(u))}().then(function(e){return r(e).then(function(t){return i(e,t)})})}function k(e,t,n){return e.db.get("_local/lastSeq").catch(_({_id:"_local/lastSeq",seq:0})).then(function(r){var i=Xe(t);return Gt.all(i.map(function(n){return w(n,e,t)})).then(function(t){var i=b(t);return r.seq=n,i.push(r),e.db.bulkDocs({docs:i})})})}function x(e){var t="string"==typeof e?e:e.name,n=dn[t];return n||(n=dn[t]=new Ce),n}function j(e){return Ke(x(e),function(){return E(e)})()}function E(e){function n(e,t){var n={id:l._id,key:X(e)};void 0!==t&&null!==t&&(n.value=X(t)),f.push(n)}function r(t,n){return function(){return k(e,t,n)}}function o(){return e.sourceDB.changes({conflicts:!0,include_docs:!0,style:"all_docs",since:h,limit:vn}).then(s)}function s(e){var t=e.results;if(t.length){var n=a(t);if(v.add(r(n,h)),!(t.length<vn))return o()}}function a(t){for(var n=new Zt,r=0,o=t.length;r<o;r++){var s=t[r];if("_"!==s.doc._id[0]){f=[],l=s.doc,l._deleted||i(e.sourceDB,d,l),f.sort(u);var a=c(f);n.set(s.doc._id,[a,s.changes])}h=s.seq}return n}function c(e){for(var t,n=new Zt,r=0,i=e.length;r<i;r++){var o=e[r],u=[o.key,o.id];r>0&&0===W(o.key,t)&&u.push(r),n.set(Y(u),o),t=o.key}return n}var f,l,d=t(e.mapFun,n),h=e.seq||0,v=new Ce;return o().then(function(){return v.finish()}).then(function(){e.seq=h})}function O(e,t,r){0===r.group_level&&delete r.group_level;var i=r.group||r.group_level,u=n(e.reduceFun),a=[],c=isNaN(r.group_level)?Number.POSITIVE_INFINITY:r.group_level;t.forEach(function(e){var t=a[a.length-1],n=i?e.key:null;if(i&&Array.isArray(n)&&(n=n.slice(0,c)),t&&0===W(t.groupKey,n))return t.keys.push([e.key,e.id]),void t.values.push(e.value);a.push({keys:[[e.key,e.id]],values:[e.value],groupKey:n})}),t=[];for(var f=0,l=a.length;f<l;f++){var d=a[f],h=o(e.sourceDB,u,d.keys,d.values,!1);if(h.error&&h.error instanceof Re)throw h.error;t.push({value:h.error?null:h.output,key:d.groupKey})}return{rows:s(t,r.limit,r.skip)}}function A(e,t){return Ke(x(e),function(){return q(e,t)})()}function q(e,t){function n(t){return t.include_docs=!0,e.db.allDocs(t).then(function(e){return i=e.total_rows,e.rows.map(function(e){if("value"in e.doc&&"object"==typeof e.doc.value&&null!==e.doc.value){var t=Object.keys(e.doc.value).sort(),n=["id","key","value"];if(!(t<n||t>n))return e.doc.value}var r=Z(e.doc._id);return{key:r[0],id:r[1],value:"value"in e.doc?e.doc.value:null}})})}function r(n){var r;if(r=o?O(e,n,t):{total_rows:i,offset:u,rows:n},t.include_docs){var s=We(n.map(a));return e.sourceDB.allDocs({keys:s,include_docs:!0,conflicts:t.conflicts,attachments:t.attachments,binary:t.binary}).then(function(e){var t=new Zt;return e.rows.forEach(function(e){t.set(e.id,e.doc)}),n.forEach(function(e){var n=a(e),r=t.get(n);r&&(e.doc=r)}),r})}return r}var i,o=e.reduceFun&&!1!==t.reduce,u=t.skip||0;if(void 0===t.keys||t.keys.length||(t.limit=0,delete t.keys),void 0!==t.keys){var s=t.keys,c=s.map(function(e){return n({startkey:Y([e]),endkey:Y([e,{}])})});return Gt.all(c).then(b).then(r)}var f,l,d={descending:t.descending};if("start_key"in t&&(f=t.start_key),"startkey"in t&&(f=t.startkey),"end_key"in t&&(l=t.end_key),"endkey"in t&&(l=t.endkey),void 0!==f&&(d.startkey=Y(t.descending?[f,{}]:[f])),void 0!==l){var h=!1!==t.inclusive_end;t.descending&&(h=!h),d.endkey=Y(h?[l,{}]:[l])}if(void 0!==t.key){var v=Y([t.key]),p=Y([t.key,{}]);d.descending?(d.endkey=v,d.startkey=p):(d.startkey=v,d.endkey=p)}return o||("number"==typeof t.limit&&(d.limit=t.limit),d.skip=u),n(d).then(r)}function S(e){return e.request({method:"POST",url:"_view_cleanup"})}function L(t){return t.get("_local/"+e).then(function(e){var n=new Zt;Object.keys(e.views).forEach(function(e){var t=Ge(e),r="_design/"+t[0],i=t[1],o=n.get(r);o||(o=new Qt,n.set(r,o)),o.add(i)});var r={keys:Xe(n),include_docs:!0};return t.allDocs(r).then(function(r){var i={};r.rows.forEach(function(t){var r=t.key.substring(8);n.get(t.key).forEach(function(n){var o=r+"/"+n;e.views[o]||(o=n);var u=Object.keys(e.views[o]),s=t.doc&&t.doc.views&&t.doc.views[n];u.forEach(function(e){i[e]=i[e]||s})})});var o=Object.keys(i).filter(function(e){return!i[e]}),u=o.map(function(e){return Ke(x(e),function(){return new t.constructor(e,t.__opts).destroy()})()});return Gt.all(u).then(function(){return{ok:!0}})})},_({ok:!0}))}function B(t,n,i){if("function"==typeof t._query)return g(t,n,i);if($(t))return y(t,n,i);if("string"!=typeof n)return p(i,n),hn.add(function(){return Fe(t,"temp_view/temp_view",n.map,n.reduce,!0,e).then(function(e){return Je(j(e).then(function(){return A(e,i)}),function(){return e.db.destroy()})})}),hn.finish();var o=n,u=Ge(o),s=u[0],a=u[1];return t.get("_design/"+s).then(function(n){var u=n.views&&n.views[a];if(!u)throw new Pe("ddoc "+n._id+" has no view named "+a);return r(n,a),p(i,u),Fe(t,o,u.map,u.reduce,!1,e).then(function(e){return"ok"===i.stale||"update_after"===i.stale?("update_after"===i.stale&&Wt(function(){j(e)}),A(e,i)):j(e).then(function(){return A(e,i)})})})}function T(e,t,n){var r=this;"function"==typeof t&&(n=t,t={}),t=t?h(t):{},"function"==typeof e&&(e={map:e});var i=Gt.resolve().then(function(){return B(r,e,t)});return ze(i,n),i}return{query:T,viewCleanup:Ve(function(){var e=this;return"function"==typeof e._viewCleanup?m(e):$(e)?S(e):L(e)})}}("indexes",it,ot,ut),yn=null,gn={"�":{}},mn=["$eq","$gt","$gte","$lt","$lte"],_n=we(gt),wn=we(Nt),bn=we(Pt),kn=we(mt),$n=we(Rt),xn={};xn.createIndex=c(function(e,t){if("object"!=typeof e)return t(new Error("you must provide an index to create"));($(this)?O:_n)(this,e,t)}),xn.find=c(function(e,t){if(void 0===t&&(t=e,e=void 0),"object"!=typeof e)return t(new Error("you must provide search parameters to find()"));($(this)?A:wn)(this,e,t)}),xn.explain=c(function(e,t){if(void 0===t&&(t=e,e=void 0),"object"!=typeof e)return t(new Error("you must provide search parameters to explain()"));($(this)?q:bn)(this,e,t)}),xn.getIndexes=c(function(e){($(this)?S:kn)(this,e)}),xn.deleteIndex=c(function(e,t){if("object"!=typeof e)return t(new Error("you must provide an index to delete"));($(this)?L:$n)(this,e,t)}),"undefined"==typeof PouchDB?_("error",'pouchdb-find plugin error: Cannot find global "PouchDB" object! Did you remember to include pouchdb.js?'):PouchDB.plugin(xn)}).call(this,e(6))},{1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8}]},{},[13]);

		
	// Pouch DB Authentication
		!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.PouchAuthentication=e()}}(function(){var e;return function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){(function(t){"use strict";function r(e){return"function"==typeof e.getUrl?e.getUrl().replace(/\/[^\/]+\/?$/,""):e.name.replace(/\/[^\/]+\/?$/,"")}var o=e(13),i=e(16);n.getUsersUrl=function(e){return i(r(e),"/_users")},n.getSessionUrl=function(e){return i(r(e),"/_session")},n.once=function(e){var t=!1;return n.getArguments(function(n){if(t)throw console.trace(),new Error("once called  more than once");t=!0,e.apply(this,n)})},n.getArguments=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=-1;++r<t;)n[r]=arguments[r];return e.call(this,n)}},n.toPromise=function(e){return n.getArguments(function(r){var i,s=this,a="function"==typeof r[r.length-1]&&r.pop();a&&(i=function(e,n){t.nextTick(function(){a(e,n)})});var u=new o(function(t,o){try{var i=n.once(function(e,n){e?o(e):t(n)});r.push(i),e.apply(s,r)}catch(e){o(e)}});return i&&u.then(function(e){i(null,e)},i),u.cancel=function(){return this},u})},n.inherits=e(7),n.extend=e(12),n.ajax=e(11),n.clone=function(e){return n.extend(!0,{},e)},n.uuid=e(14).uuid,n.Promise=o}).call(this,e(15))},{11:11,12:12,13:13,14:14,15:15,16:16,7:7}],2:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments.length;if(t){for(var n=[],r=-1;++r<t;)n[r]=arguments[r];return e.call(this,n)}return e.call(this,[])}}t.exports=r},{}],3:[function(e,t,n){function r(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var e=arguments,t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),!t)return e;var r="color: "+this.color;e=[e[0],r,"color: inherit"].concat(Array.prototype.slice.call(e,1));var o=0,i=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,r),e}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(e){}}function a(){var e;try{e=n.storage.debug}catch(e){}return e}function u(){try{return window.localStorage}catch(e){}}n=t.exports=e(4),n.log=i,n.formatArgs=o,n.save=s,n.load=a,n.useColors=r,n.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){return JSON.stringify(e)},n.enable(a())},{4:4}],4:[function(e,t,n){function r(){return n.colors[f++%n.colors.length]}function o(e){function t(){}function o(){var e=o,t=+new Date,i=t-(c||t);e.diff=i,e.prev=c,e.curr=t,c=t,null==e.useColors&&(e.useColors=n.useColors()),null==e.color&&e.useColors&&(e.color=r());var s=Array.prototype.slice.call(arguments);s[0]=n.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var a=0;s[0]=s[0].replace(/%([a-z%])/g,function(t,r){if("%%"===t)return t;a++;var o=n.formatters[r];if("function"==typeof o){var i=s[a];t=o.call(e,i),s.splice(a,1),a--}return t}),"function"==typeof n.formatArgs&&(s=n.formatArgs.apply(e,s));var u=o.log||n.log||console.log.bind(console);u.apply(e,s)}t.enabled=!1,o.enabled=!0;var i=n.enabled(e)?o:t;return i.namespace=e,i}function i(e){n.save(e);for(var t=(e||"").split(/[\s,]+/),r=t.length,o=0;o<r;o++)t[o]&&(e=t[o].replace(/\*/g,".*?"),"-"===e[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))}function s(){n.enable("")}function a(e){var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}n=t.exports=o,n.coerce=u,n.disable=s,n.enable=i,n.enabled=a,n.humanize=e(10),n.names=[],n.skips=[],n.formatters={};var c,f=0},{10:10}],5:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function i(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,i,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}if(n=this._events[e],a(n))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),n.apply(this,i)}else if(s(n))for(i=Array.prototype.slice.call(arguments,1),c=n.slice(),r=c.length,u=0;u<r;u++)c[u].apply(this,i);return!0},r.prototype.addListener=function(e,t){var n;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,i,a;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],i=n.length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=i;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],o(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],6:[function(e,t,n){(function(e){"use strict";function n(){f=!0;for(var e,t,n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}f=!1}function r(e){1!==l.push(e)||f||o()}var o,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var s=0,a=new i(n),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),o=function(){u.data=s=++s%2}}else if(e.setImmediate||"undefined"==typeof e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){n(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(n,0)};else{var c=new e.MessageChannel;c.port1.onmessage=n,o=function(){c.port2.postMessage(0)}}var f,l=[];t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],8:[function(e,t,n){(function(e){e("object"==typeof n?n:this)}).call(this,function(e){var t=Array.prototype.slice,n=Array.prototype.forEach,r=function(e){if("object"!=typeof e)throw e+" is not an object";var o=t.call(arguments,1);return n.call(o,function(t){if(t)for(var n in t)"object"==typeof t[n]&&e[n]?r.call(e,e[n],t[n]):e[n]=t[n]}),e};e.extend=r})},{}],9:[function(e,t,n){"use strict";function r(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,e!==r&&u(this,e)}function i(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function s(e,t,n){p(function(){var r;try{r=t(n)}catch(t){return y.reject(e,t)}r===e?y.reject(e,new TypeError("Cannot resolve promise with itself")):y.resolve(e,r)})}function a(e){var t=e&&e.then;if(e&&"object"==typeof e&&"function"==typeof t)return function(){t.apply(e,arguments)}}function u(e,t){function n(t){i||(i=!0,y.reject(e,t))}function r(t){i||(i=!0,y.resolve(e,t))}function o(){t(r,n)}var i=!1,s=c(o);"error"===s.status&&n(s.value)}function c(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}function f(e){return e instanceof this?e:y.resolve(new this(r),e)}function l(e){var t=new this(r);return y.reject(t,e)}function d(e){function t(e,t){function r(e){s[t]=e,++a!==o||i||(i=!0,y.resolve(c,s))}n.resolve(e).then(r,function(e){i||(i=!0,y.reject(c,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var s=new Array(o),a=0,u=-1,c=new this(r);++u<o;)t(e[u],u);return c}function h(e){function t(e){n.resolve(e).then(function(e){i||(i=!0,y.resolve(a,e))},function(e){i||(i=!0,y.reject(a,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var s=-1,a=new this(r);++s<o;)t(e[s]);return a}var p=e(6),y={},v=["REJECTED"],m=["FULFILLED"],g=["PENDING"];t.exports=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===m||"function"!=typeof t&&this.state===v)return this;var n=new this.constructor(r);if(this.state!==g){var o=this.state===m?e:t;s(n,o,this.outcome)}else this.queue.push(new i(n,e,t));return n},i.prototype.callFulfilled=function(e){y.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){s(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){y.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){s(this.promise,this.onRejected,e)},y.resolve=function(e,t){var n=c(a,t);if("error"===n.status)return y.reject(e,n.value);var r=n.value;if(r)u(e,r);else{e.state=m,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},y.reject=function(e,t){e.state=v,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},o.resolve=f,o.reject=l,o.all=d,o.race=h},{6:6}],10:[function(e,t,n){function r(e){if(e=""+e,!(e.length>1e4)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*l;case"days":case"day":case"d":return n*f;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*u;case"seconds":case"second":case"secs":case"sec":case"s":return n*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n}}}}function o(e){return e>=f?Math.round(e/f)+"d":e>=c?Math.round(e/c)+"h":e>=u?Math.round(e/u)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function i(e){return s(e,f,"day")||s(e,c,"hour")||s(e,u,"minute")||s(e,a,"second")||e+" ms"}function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var a=1e3,u=60*a,c=60*u,f=24*c,l=365.25*f;t.exports=function(e,t){return t=t||{},"string"==typeof e?r(e):t.long?i(e):o(e)}},{}],11:[function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if("TypeError"!==i.name)throw i;for(var n="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,r=new n,o=0;o<e.length;o+=1)r.append(e[o]);return r.getBlob(t.type)}}function i(e,t){if("undefined"==typeof FileReader)return t((new FileReaderSync).readAsArrayBuffer(e));var n=new FileReader;n.onloadend=function(e){var n=e.target.result||new ArrayBuffer(0);t(n)},n.readAsArrayBuffer(e)}function s(){for(var e={},t=new A(function(t,n){e.resolve=t,e.reject=n}),n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.promise=t,A.resolve().then(function(){return fetch.apply(null,n)}).then(function(t){e.resolve(t)}).catch(function(t){e.reject(t)}),e}function a(e,t){var n,r,o,a=new Headers,u={method:e.method,credentials:"include",headers:a};return e.json&&(a.set("Accept","application/json"),a.set("Content-Type",e.headers["Content-Type"]||"application/json")),e.body&&e.body instanceof Blob?i(e.body,function(e){u.body=e}):e.body&&e.processData&&"string"!=typeof e.body?u.body=JSON.stringify(e.body):"body"in e?u.body=e.body:u.body=null,Object.keys(e.headers).forEach(function(t){e.headers.hasOwnProperty(t)&&a.set(t,e.headers[t])}),n=s(e.url,u),e.timeout>0&&(r=setTimeout(function(){n.reject(new Error("Load timeout for resource: "+e.url))},e.timeout)),n.promise.then(function(t){return o={statusCode:t.status},e.timeout>0&&clearTimeout(r),o.statusCode>=200&&o.statusCode<300?e.binary?t.blob():t.text():t.json()}).then(function(e){o.statusCode>=200&&o.statusCode<300?t(null,o,e):t(e,o)}).catch(function(e){t(e,o)}),{abort:n.reject}}function u(e,t){var n,r,s=!1,a=function(){n.abort(),f()},u=function(){s=!0,n.abort(),f()},c={abort:a},f=function(){clearTimeout(r),c.abort=function(){},n&&(n.onprogress=void 0,n.upload&&(n.upload.onprogress=void 0),n.onreadystatechange=void 0,n=void 0)};n=e.xhr?new e.xhr:new XMLHttpRequest;try{n.open(e.method,e.url)}catch(e){return t(new Error(e.name||"Url is invalid"))}n.withCredentials=!("withCredentials"in e)||e.withCredentials,"GET"===e.method?delete e.headers["Content-Type"]:e.json&&(e.headers.Accept="application/json",e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json",e.body&&e.processData&&"string"!=typeof e.body&&(e.body=JSON.stringify(e.body))),e.binary&&(n.responseType="arraybuffer"),"body"in e||(e.body=null);for(var l in e.headers)e.headers.hasOwnProperty(l)&&n.setRequestHeader(l,e.headers[l]);return e.timeout>0&&(r=setTimeout(u,e.timeout),n.onprogress=function(){clearTimeout(r),4!==n.readyState&&(r=setTimeout(u,e.timeout))},"undefined"!=typeof n.upload&&(n.upload.onprogress=n.onprogress)),n.onreadystatechange=function(){if(4===n.readyState){var r={statusCode:n.status};if(n.status>=200&&n.status<300){var i;i=e.binary?o([n.response||""],{type:n.getResponseHeader("Content-Type")}):n.responseText,t(null,r,i)}else{var a={};if(s)a=new Error("ETIMEDOUT"),a.code="ETIMEDOUT";else if("string"==typeof n.response)try{a=JSON.parse(n.response)}catch(e){}a.status=n.status,t(a)}f()}},e.body&&e.body instanceof Blob?i(e.body,function(e){n.send(e)}):n.send(e.body),c}function c(){try{return new XMLHttpRequest,!0}catch(e){return!1}}function f(e,t){return q||e.xhr?u(e,t):a(e,t)}function l(e){Error.call(this,e.reason),this.status=e.status,this.name=e.error,this.message=e.reason,this.error=!0}function d(e){if("object"!=typeof e){var t=e;e=P,e.data=t}return"error"in e&&"conflict"===e.error&&(e.name="conflict",e.status=409),"name"in e||(e.name=e.error||"unknown"),"status"in e||(e.status=500),"message"in e||(e.message=e.message||e.reason),e}function h(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}function p(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}function y(e){if(e instanceof ArrayBuffer)return p(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}function v(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&B.call(n)==D}function m(e){var t,n,r;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=m(e[n]);return t}if(e instanceof Date)return e.toISOString();if(h(e))return y(e);if(!v(e))return e;t={};for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=m(e[n]);"undefined"!=typeof o&&(t[n]=o)}return t}function g(e,t){for(var n={},r=0,o=t.length;r<o;r++){var i=t[r];i in e&&(n[i]=e[i])}return n}function w(){return"undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage&&"undefined"!=typeof chrome.storage.local}function b(){return U}function _(e){w()?chrome.storage.onChanged.addListener(function(t){null!=t.db_name&&e.emit(t.dbName.newValue)}):b()&&("undefined"!=typeof addEventListener?addEventListener("storage",function(t){e.emit(t.key)}):window.attachEvent("storage",function(t){e.emit(t.key)}))}function j(){C.EventEmitter.call(this),this._listeners={},_(this)}function x(){return""}function E(e,t){function n(t,n,r){if(!e.binary&&e.json&&"string"==typeof t)try{t=JSON.parse(t)}catch(e){return r(e)}Array.isArray(t)&&(t=t.map(function(e){return e.error||e.missing?d(e):e})),e.binary&&N(t,n),r(null,t,n)}e=m(e);var r={method:"GET",headers:{},json:!0,processData:!0,timeout:1e4,cache:!1};return e=S.extend(r,e),e.json&&(e.binary||(e.headers.Accept="application/json"),e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json"),e.binary&&(e.encoding=null,e.json=!1),e.processData||(e.json=!1),f(e,function(r,o,i){if(r)return t(d(r));var s,a=o.headers&&o.headers["content-type"],u=i||x();if(!e.binary&&(e.json||!e.processData)&&"object"!=typeof u&&(/json/.test(a)||/^[\s]*\{/.test(u)&&/\}[\s]*$/.test(u)))try{u=JSON.parse(u.toString())}catch(e){}o.statusCode>=200&&o.statusCode<300?n(u,o,t):(s=d(u),s.status=o.statusCode,t(s))})}function T(e,t){var n=navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",r=n.indexOf("safari")!==-1&&n.indexOf("chrome")===-1,o=n.indexOf("msie")!==-1,i=n.indexOf("edge")!==-1,s=r||(o||i)&&"GET"===e.method,a=!("cache"in e)||e.cache,u=/^blob:/.test(e.url);if(!u&&(s||!a)){var c=e.url.indexOf("?")!==-1;e.url+=(c?"&":"?")+"_nonce="+Date.now()}return E(e,t)}var O=r(e(9)),S=e(8),L=r(e(7)),k=(r(e(2)),r(e(3))),C=e(5),A="function"==typeof Promise?Promise:O,q=c();L(l,Error),l.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};var U,P=(new l({status:401,error:"unauthorized",reason:"Name or password is incorrect."}),new l({status:400,error:"bad_request",reason:"Missing JSON list of 'docs'"}),new l({status:404,error:"not_found",reason:"missing"}),new l({status:409,error:"conflict",reason:"Document update conflict"}),new l({status:400,error:"bad_request",reason:"_id field must contain a string"}),new l({status:412,error:"missing_id",reason:"_id is required for puts"}),new l({status:400,error:"bad_request",reason:"Only reserved document ids may start with underscore."}),new l({status:412,error:"precondition_failed",reason:"Database not open"}),new l({status:500,error:"unknown_error",reason:"Database encountered an unknown error"})),B=(new l({status:500,error:"badarg",reason:"Some query argument is invalid"}),new l({status:400,error:"invalid_request",reason:"Request was invalid"}),new l({status:400,error:"query_parse_error",reason:"Some query parameter is invalid"}),new l({status:500,error:"doc_validation",reason:"Bad special document member"}),new l({status:400,error:"bad_request",reason:"Something wrong with the request"}),new l({status:400,error:"bad_request",reason:"Document must be a JSON object"}),new l({status:404,error:"not_found",reason:"Database not found"}),new l({status:500,error:"indexed_db_went_bad",reason:"unknown"}),new l({status:500,error:"web_sql_went_bad",reason:"unknown"}),new l({status:500,error:"levelDB_went_went_bad",reason:"unknown"}),new l({status:403,error:"forbidden",reason:"Forbidden by design doc validate_doc_update function"}),new l({status:400,error:"bad_request",reason:"Invalid rev format"}),new l({status:412,error:"file_exists",reason:"The database could not be created, the file already exists."}),new l({status:412,error:"missing_stub"}),new l({status:413,error:"invalid_url",reason:"Provided URL is invalid"}),Function.prototype.toString),D=B.call(Object);k("pouchdb:api");if(w())U=!1;else try{localStorage.setItem("_pouch_check_localstorage",1),U=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){U=!1}L(j,C.EventEmitter),j.prototype.addListener=function(e,t,n,r){function o(){function e(){s=!1}if(i._listeners[t]){if(s)return void(s="waiting");s=!0;var a=g(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary"]);n.changes(a).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===s&&setTimeout(function(){o()},0),s=!1}).on("error",e)}}if(!this._listeners[t]){var i=this,s=!1;this._listeners[t]=o,this.on(e,o)}},j.prototype.removeListener=function(e,t){t in this._listeners&&(C.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},j.prototype.notifyLocalWindows=function(e){w()?chrome.storage.local.set({dbName:e}):b()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},j.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)};var N=("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),function(){});t.exports=T},{2:2,3:3,5:5,7:7,8:8,9:9}],12:[function(e,t,n){"use strict";function r(e){return null===e?String(e):"object"==typeof e||"function"==typeof e?c[h.call(e)]||"object":typeof e}function o(e){return null!==e&&e===e.window}function i(e){if(!e||"object"!==r(e)||e.nodeType||o(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}var t;for(t in e);return void 0===t||p.call(e,t)}function s(e){return"function"===r(e)}function a(){for(var e=[],t=-1,n=arguments.length,r=new Array(n);++t<n;)r[t]=arguments[t];var o={};e.push({args:r,result:{container:o,key:"key"}});for(var i;i=e.pop();)u(e,i.args,i.result);return o.key}function u(e,t,n){var r,o,a,u,c,f,l,d=t[0]||{},h=1,p=t.length,v=!1,m=/\d+/;for("boolean"==typeof d&&(v=d,d=t[1]||{},h=2),"object"==typeof d||s(d)||(d={}),p===h&&(d=this,--h);h<p;h++)if(null!=(r=t[h])){l=y(r);for(o in r)if(!(o in Object.prototype)){if(l&&!m.test(o))continue;if(a=d[o],u=r[o],d===u)continue;v&&u&&(i(u)||(c=y(u)))?(c?(c=!1,f=a&&y(a)?a:[]):f=a&&i(a)?a:{},e.push({args:[v,f,u],result:{container:d,key:o}})):void 0!==u&&(y(r)&&s(u)||(d[o]=u))}}n.container[n.key]=d}for(var c={},f=["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],l=0;l<f.length;l++){var d=f[l];c["[object "+d+"]"]=d.toLowerCase()}var h=c.toString,p=c.hasOwnProperty,y=Array.isArray||function(e){return"array"===r(e)};t.exports=a},{}],13:[function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r(e(9)),i="function"==typeof Promise?Promise:o;t.exports=i},{9:9}],14:[function(e,t,n){(function(t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}function i(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}function s(e){if(e instanceof ArrayBuffer)return i(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}function a(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&K.call(n)==V}function u(e){var t,n,r;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=u(e[n]);return t}if(e instanceof Date)return e.toISOString();if(o(e))return s(e);if(!a(e))return e;t={};for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=u(e[n]);"undefined"!=typeof i&&(t[n]=i)}return t}function c(e){var t=!1;return $(function(n){if(t)throw new Error("once called more than once");t=!0,e.apply(this,n)})}function f(e){return $(function(n){n=u(n);var r,o=this,i="function"==typeof n[n.length-1]&&n.pop();i&&(r=function(e,n){t.nextTick(function(){i(e,n)})});var s=new H(function(t,r){var i;try{var s=c(function(e,n){e?r(e):t(n)});n.push(s),i=e.apply(o,n),i&&"function"==typeof i.then&&t(i)}catch(e){r(e)}});return r&&s.then(function(e){r(null,e)},r),s})}function l(e,t){function n(e,t,n){if(X.enabled){for(var r=[e.name,t],o=0;o<n.length-1;o++)r.push(n[o]);X.apply(null,r);var i=n[n.length-1];n[n.length-1]=function(n,r){var o=[e.name,t];o=o.concat(n?["error",n]:["success",r]),X.apply(null,o),i(n,r)}}}return f($(function(r){if(this._closed)return H.reject(new Error("database is closed"));if(this._destroyed)return H.reject(new Error("database is destroyed"));var o=this;return n(o,e,r),this.taskqueue.isReady?t.apply(this,r):new H(function(t,n){o.taskqueue.addTask(function(i){i?n(i):t(o[e].apply(o,r))})})}))}function d(e,t){for(var n={},r=0,o=t.length;r<o;r++){var i=t[r];i in e&&(n[i]=e[i])}return n}function h(e){return e}function p(e){return[{ok:e}]}function y(e,t,n){function r(){var e=[];y.forEach(function(t){t.docs.forEach(function(n){e.push({id:t.id,docs:[n]})})}),n(null,{results:e})}function o(){++l===f&&r()}function i(e,t,n){y[e]={id:t,docs:n},o()}function s(){if(!(m>=v.length)){var e=Math.min(m+Q,v.length),t=v.slice(m,e);a(t,m),m+=t.length}}function a(n,r){n.forEach(function(n,o){var a=r+o,u=c[n],f=d(u[0],["atts_since","attachments"]);f.open_revs=u.map(function(e){return e.rev}),f.open_revs=f.open_revs.filter(h);var l=h;0===f.open_revs.length&&(delete f.open_revs,l=p),["revs","attachments","binary","ajax"].forEach(function(e){e in t&&(f[e]=t[e])}),e.get(n,f,function(e,t){var r;r=e?[{error:e}]:l(t),i(a,n,r),s()})})}var u=t.docs,c={};u.forEach(function(e){e.id in c?c[e.id].push(e):c[e.id]=[e]});var f=Object.keys(c).length,l=0,y=new Array(f),v=Object.keys(c),m=0;s()}function v(){return"undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage&&"undefined"!=typeof chrome.storage.local}function m(){return J}function g(e){v()?chrome.storage.onChanged.addListener(function(t){null!=t.db_name&&e.emit(t.dbName.newValue)}):m()&&("undefined"!=typeof addEventListener?addEventListener("storage",function(t){e.emit(t.key)}):window.attachEvent("storage",function(t){e.emit(t.key)}))}function w(){W.EventEmitter.call(this),this._listeners={},g(this)}function b(e){if("undefined"!==console&&e in console){var t=Array.prototype.slice.call(arguments,1);console[e].apply(console,t)}}function _(e,t){var n=6e5;e=parseInt(e,10)||0,t=parseInt(t,10),t!==t||t<=e?t=(e||1)<<1:t+=1,t>n&&(e=n>>1,t=n);var r=Math.random(),o=t-e;return~~(o*r+e)}function j(e){var t=0;return e||(t=2e3),_(e,t)}function x(e,t){b("info","The above "+e+" is totally normal. "+t)}function E(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=u(t[n]);"undefined"!=typeof r&&(e[n]=r)}}function T(e,t,n){return E(e,t),n&&E(e,n),e}function O(e){Error.call(this,e.reason),this.status=e.status,this.name=e.error,this.message=e.reason,this.error=!0}function S(e,t){function n(t){for(var n in e)"function"!=typeof e[n]&&(this[n]=e[n]);void 0!==t&&(this.reason=t)}return n.prototype=O.prototype,new n(t)}function L(e,t,n){try{return!e(t,n)}catch(e){var r="Filter function threw: "+e.toString();return S(re,r)}}function k(e){var t={},n=e.filter&&"function"==typeof e.filter;return t.query=e.query_params,function(r){r.doc||(r.doc={});var o=n&&L(e.filter,r.doc,t);if("object"==typeof o)return o;if(o)return!1;if(e.include_docs){if(!e.attachments)for(var i in r.doc._attachments)r.doc._attachments.hasOwnProperty(i)&&(r.doc._attachments[i].stub=!0)}else delete r.doc;return!0}}function C(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function A(){}function q(e){var t;if(e?"string"!=typeof e?t=S(ee):/^_/.test(e)&&!/^_(design|local)/.test(e)&&(t=S(ne)):t=S(te),t)throw t}function U(){return"undefined"!=typeof cordova||"undefined"!=typeof PhoneGap||"undefined"!=typeof phonegap}function P(e,t){return"listenerCount"in e?e.listenerCount(t):W.EventEmitter.listenerCount(e,t)}function B(e){if(!e)return null;var t=e.split("/");return 2===t.length?t:1===t.length?[e,e]:null}function D(e){var t=B(e);return t?t.join("/"):null}function N(e){for(var t=ce.exec(e),n={},r=14;r--;){var o=se[r],i=t[r]||"",s=["user","password"].indexOf(o)!==-1;n[o]=s?decodeURIComponent(i):i}return n[ae]={},n[se[12]].replace(ue,function(e,t,r){t&&(n[ae][t]=r)}),n}function M(e,t,n){return new H(function(r,o){e.get(t,function(i,s){if(i){if(404!==i.status)return o(i);s={}}var a=s._rev,u=n(s);return u?(u._id=t,u._rev=a,void r(R(e,u,n))):r({updated:!1,rev:a})})})}function R(e,t,n){return e.put(t).then(function(e){return{updated:!0,rev:e.rev}},function(r){if(409!==r.status)throw r;return M(e,t._id,n)})}function I(e){return 0|Math.random()*e}function F(e,t){t=t||fe.length;var n="",r=-1;if(e){for(;++r<e;)n+=fe[I(t)];return n}for(;++r<36;)switch(r){case 8:case 13:case 18:case 23:n+="-";break;case 19:n+=fe[3&I(16)|8];break;default:n+=fe[I(16)]}return n}Object.defineProperty(n,"__esModule",{value:!0});var J,z=r(e(9)),$=r(e(2)),G=r(e(3)),W=e(5),Y=r(e(7)),H="function"==typeof Promise?Promise:z,K=Function.prototype.toString,V=K.call(Object),X=G("pouchdb:api"),Q=6;if(v())J=!1;else try{localStorage.setItem("_pouch_check_localstorage",1),J=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){J=!1}Y(w,W.EventEmitter),w.prototype.addListener=function(e,t,n,r){function o(){function e(){s=!1}if(i._listeners[t]){if(s)return void(s="waiting");s=!0;var a=d(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary"]);n.changes(a).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===s&&setTimeout(function(){o()},0),s=!1}).on("error",e)}}if(!this._listeners[t]){var i=this,s=!1;this._listeners[t]=o,this.on(e,o)}},w.prototype.removeListener=function(e,t){t in this._listeners&&(W.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},w.prototype.notifyLocalWindows=function(e){v()?chrome.storage.local.set({dbName:e}):m()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},w.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)},Y(O,Error),O.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};var Z,ee=(new O({status:401,error:"unauthorized",reason:"Name or password is incorrect."}),new O({status:400,error:"bad_request",reason:"Missing JSON list of 'docs'"}),new O({status:404,error:"not_found",reason:"missing"}),new O({status:409,error:"conflict",reason:"Document update conflict"}),new O({status:400,error:"bad_request",reason:"_id field must contain a string"})),te=new O({status:412,error:"missing_id",reason:"_id is required for puts"}),ne=new O({status:400,error:"bad_request",reason:"Only reserved document ids may start with underscore."}),re=(new O({status:412,error:"precondition_failed",reason:"Database not open"}),new O({status:500,error:"unknown_error",reason:"Database encountered an unknown error"}),new O({status:500,error:"badarg",reason:"Some query argument is invalid"}),new O({status:400,error:"invalid_request",reason:"Request was invalid"}),new O({status:400,error:"query_parse_error",reason:"Some query parameter is invalid"}),new O({status:500,error:"doc_validation",reason:"Bad special document member"}),new O({status:400,error:"bad_request",reason:"Something wrong with the request"})),oe=(new O({status:400,error:"bad_request",reason:"Document must be a JSON object"}),new O({status:404,error:"not_found",reason:"Database not found"}),new O({status:500,error:"indexed_db_went_bad",reason:"unknown"}),new O({status:500,error:"web_sql_went_bad",reason:"unknown"}),new O({status:500,error:"levelDB_went_went_bad",reason:"unknown"}),new O({status:403,error:"forbidden",reason:"Forbidden by design doc validate_doc_update function"}),new O({status:400,error:"bad_request",reason:"Invalid rev format"}),new O({status:412,error:"file_exists",reason:"The database could not be created, the file already exists."}),new O({status:412,error:"missing_stub"}),new O({status:413,error:"invalid_url",reason:"Provided URL is invalid"}),A.name);Z=oe?function(e){return e.name}:function(e){return e.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]};var ie=Z,se=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],ae="queryKey",ue=/(?:^|&)([^&=]*)=?([^&]*)/g,ce=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,fe="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");n.adapterFun=l,n.bulkGetShim=y,n.changesHandler=w,n.clone=u,n.defaultBackOff=j,n.explainError=x,n.extend=T,n.filterChange=k,n.flatten=C,n.functionName=ie,n.guardedConsole=b,n.hasLocalStorage=m,n.invalidIdError=q,n.isChromeApp=v,n.isCordova=U,n.listenerCount=P,n.normalizeDdocFunctionName=D,n.once=c,n.parseDdocFunctionName=B,n.parseUri=N,n.pick=d,n.toPromise=f,n.upsert=M,n.uuid=F}).call(this,e(15))},{15:15,2:2,3:3,5:5,7:7,9:9}],15:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function s(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){v&&p&&(v=!1,p.length?y=p.concat(y):m=-1,y.length&&u())}function u(){if(!v){var e=i(a);v=!0;for(var t=y.length;t;){for(p=y,y=[];++m<t;)p&&p[m].run();m=-1,t=y.length}p=null,v=!1,s(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var l,d,h=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var p,y=[],v=!1,m=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new c(e,t)),1!==y.length||v||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=f,h.addListener=f,h.once=f,h.off=f,h.removeListener=f,h.removeAllListeners=f,h.emit=f,h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],16:[function(t,n,r){!function(t,r,o){"undefined"!=typeof n&&n.exports?n.exports=o():"function"==typeof e&&e.amd?e(o):r[t]=o()}("urljoin",this,function(){function e(e,t){return e=e.replace(/:\//g,"://"),e=e.replace(/([^:\s])\/+/g,"$1/"),e=e.replace(/\/(\?|&|#[^!])/g,"$1"),e=e.replace(/(\?.+)\?/g,"$1&")}return function(){var t=arguments,n={};"object"==typeof arguments[0]&&(t=arguments[0],n=arguments[1]||{});var r=[].slice.call(t,0).join("/");return e(r,n)}})},{}],17:[function(e,t,n){"use strict";function r(e){return function(t,n){return t&&"unknown_error"===t.name&&(t.message=(t.message||"")+" Unknown error!  Did you remember to enable CORS?"),e(t,n)}}function o(e,t,n,o){var a=["name","password","roles","type","salt","metadata"];if(n.metadata){for(var u in n.metadata)if(n.hasOwnProperty(u)&&(a.indexOf(u)!==-1||u.startsWith("_")))return o(new i('cannot use reserved word in metadata: "'+u+'"'));t=s.extend(!0,t,n.metadata)}var c=s.getUsersUrl(e)+"/"+encodeURIComponent(t._id),f=s.extend(!0,{method:"PUT",url:c,body:t},n.ajax||{});s.ajax(f,r(o))}function i(e){this.status=400,this.name="authentication_error",this.message=e,this.error=!0;try{Error.captureStackTrace(this,i)}catch(e){}}var s=e(1);n.signup=s.toPromise(function(e,t,n,r){var s=this;if("undefined"==typeof r&&(r="undefined"==typeof n?"undefined"==typeof t?e:t:n,n={}),["http","https"].indexOf(s.type())===-1)return r(new i('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));if(!e)return r(new i("You must provide a username"));if(!t)return r(new i("You must provide a password"));var a="org.couchdb.user:"+e,u={name:e,password:t,roles:n.roles||[],type:"user",_id:a};o(s,u,n,r)}),n.signUp=n.signup,n.login=s.toPromise(function(e,t,n,o){var a=this;if("undefined"==typeof o&&(o=n,n={}),["http","https"].indexOf(a.type())===-1)return o(new i("this plugin only works for the http/https adapter"));if(!e)return o(new i("you must provide a username"));if(!t)return o(new i("you must provide a password"));var u=s.extend(!0,{method:"POST",url:s.getSessionUrl(a),headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,password:t})},n.ajax||{});s.ajax(u,r(o))}),n.logIn=n.login,n.logout=s.toPromise(function(e,t){var n=this;"undefined"==typeof t&&(t=e,e={});var o=s.extend(!0,{method:"DELETE",url:s.getSessionUrl(n)},e.ajax||{});s.ajax(o,r(t))}),n.logOut=n.logout,n.getSession=s.toPromise(function(e,t){var n=this;"undefined"==typeof t&&(t=e,e={});var o=s.getSessionUrl(n),i=s.extend(!0,{method:"GET",url:o},e.ajax||{});s.ajax(i,r(t))}),n.getUser=s.toPromise(function(e,t,n){var o=this;if("undefined"==typeof n&&(n="undefined"==typeof t?e:t,t={}),!e)return n(new i("you must provide a username"));var a=s.getUsersUrl(o),u=s.extend(!0,{method:"GET",url:a+"/"+encodeURIComponent("org.couchdb.user:"+e)},t.ajax||{});s.ajax(u,r(n))}),n.putUser=s.toPromise(function(e,t,n){var r=this;return"undefined"==typeof n&&(n="undefined"==typeof t?e:t,t={}),["http","https"].indexOf(r.type())===-1?n(new i('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.')):e?r.getUser(e,t,function(e,i){return e?n(e):void o(r,i,t,n)}):n(new i("You must provide a username"))}),n.changePassword=s.toPromise(function(e,t,n,o){var a=this;return"undefined"==typeof o&&(o="undefined"==typeof n?"undefined"==typeof t?e:t:n,n={}),["http","https"].indexOf(a.type())===-1?o(new i('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.')):e?t?a.getUser(e,n,function(e,i){if(e)return o(e);i.password=t;var u=s.getUsersUrl(a)+"/"+encodeURIComponent(i._id),c=s.extend(!0,{method:"PUT",url:u,body:i},n.ajax||{});s.ajax(c,r(o))}):o(new i("You must provide a password")):o(new i("You must provide a username"))}),n.changeUsername=s.toPromise(function(e,t,n,o){var a=this,u="org.couchdb.user:",c=function(e){return new s.Promise(function(t,n){s.ajax(e,r(function(e,r){return e?n(e):void t(r)}))})},f=function(e,t){var n=s.getUsersUrl(a)+"/"+encodeURIComponent(e._id),r=s.extend(!0,{method:"PUT",url:n,body:e},t.ajax);return c(r)};return"undefined"==typeof o&&(o=n,n={}),n.ajax=n.ajax||{},["http","https"].indexOf(a.type())===-1?o(new i('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.')):t?e?a.getUser(t,n).then(function(){var e=new i("user already exists");throw e.taken=!0,e},function(){return a.getUser(e,n)}).then(function(e){var r=s.clone(e);return delete r._rev,r._id=u+t,r.name=t,r.roles=n.roles||e.roles||{},f(r,n).then(function(){return e._deleted=!0,f(e,n)})}).then(function(e){o(null,e)}).catch(o):o(new i("You must provide a username to rename")):o(new i("You must provide a new username"))}),s.inherits(i,Error),"undefined"!=typeof window&&window.PouchDB&&window.PouchDB.plugin(n)},{1:1}]},{},[17])(17)});


dData = {};  // dData Global Object
dData.extensions = []; // An array to store d-data extensions
dData.elementRenderHandler = {}; // An Object to store custom element render handlers;
dData.elementValueHandler = {}; // An Object to store custom element value handlers

// Polyfill for element.isConnected
(function (supported){
  if (supported) return;
  Object.defineProperty(window.Node.prototype, 'isConnected', {get})
  function get() {
    return document.contains(this);
  }
})('isConnected' in window.Node.prototype);




//==========================dData MUTATION OBSERVER ================================// 
/* 
	This is where the majority of the "Magic" of dData comes from... instead of needing to 
	call a function or initialize functionality in a script somewhere, the mutation observer
	watches for elements with the d-data attribute and registers the "Magic" automatically.
	
*/
(function(){

    // this mutation observer watches for elements with the d-data attribute and registers them
    var dDataObserver = new MutationObserver(function(mutations){
        if (typeof(mutationDoneTimer) !== "undefined"){
            clearTimeout(mutationDoneTimer)};
            mutationDoneTimer = setTimeout(function(){
                var mutationDoneEvent = new Event("MutationDone");
                document.dispatchEvent(mutationDoneEvent);
            }, 100);
        mutations.forEach(function(mutation){
            if (mutation.type == "childList"){
                var nodes = mutation.addedNodes;
                for(var i=0;i<nodes.length;i++){
                    if (nodes[i].nodeType === 1 && nodes[i].hasAttribute("d-data") ){
                        registerDData(nodes[i]);
                    }else{
                        findNestedDData(nodes[i]);
                    }
                }
                
            }
            if (mutation.type == "attributes"){
                if (mutation.target.nodeType === 1 && mutation.target.hasAttribute("d-data") ){
                    registerDData(mutation.target);
                }
                else{
                    findNestedDData(mutation.target);
                }

            }
        });
    });


    dDataObserver.observe(document, {
        childList: true,
        subtree: true
    });

})();

function findNestedDData(element){
    var children = element.children;
    if (children === undefined){return 0;}
    var childLen = children.length;
    for (var i=0; i<childLen; i++){
        var el = children[i];
        if (el.hasAttribute("d-data")){ registerDData(el); }
        else{ findNestedDData(el); }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////// D-DATA REGISTRATION FUNCTION ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// This function is typically called by the DOM Mutation observer above.
// It is also called by itself internally in many locations where recursive functionality exists.
// In rare cases a user (developer) may call this directly to register a d-data element that
// somehow was not registered else where.

// the dDataProto argument is expected to be a DOM Element Prototype

function registerDData(dDataProto){  
        
    if (dDataProto.hasOwnProperty("value") ){
        return 0; /* this element has already been registered */ 
    }
    
    // these are the core properties of d-data which provide its main functionality
    Object.defineProperty(dDataProto, "value", { get: valueGetter, set: dataRender, enumerable: true }  );
    Object.defineProperty(dDataProto, "valueElementTree", { get: valueElementTree}  );
    Object.defineProperty(dDataProto, "name", { get: nameAttributeGetter,   set: nameAttributeSetter });

    // these are the public methods that are available on an element with the d-data attribute
    dDataProto.add = addSibling;
    dDataProto.remove = removeSibling;

    // these are public utility functions for working with descendant elements of d-data elements
    // these are available in the global dData Object and can be used by extensions or any other custom code
    dData.findRootDData = findRootDData;
    dData.findNearestDDataParent = findNearestDDataParent;
    dData.findTemplateParent = findTemplateParent;

    // Initialize this element
    init(dDataProto);

    function init(dDataProto){
        // all elements with the d-data attribute need a name attribute
        if (dDataProto.getAttribute("name") == "") {throw ("d-data elements require a name attribute")}

        // Templates are used to replicate d-data children nodes
        // Instead of requiring the user to create templates before hand
        // We use the html that was defined inside of d-data and create 
        // templates from that
        
        // we can only setup child templates on elements that are connected to the dom, becuase they need a parentElement
        setupTemplates(dDataProto);
        setupChildTemplates(dDataProto);

        // Setup any extensions that may be available in dData.extensions
        evaluateElementForExtensions(dDataProto, dDataProto);
        setupExtensions(dDataProto, dDataProto); 

        // if this is a root d-data element, setup scope and initial data
        setupRootDData(dDataProto);

        // Dispatch Event for builtins to respond to
        var dDataInitEvent = new CustomEvent("dDataInitialized", {bubbles:true});
        dDataProto.dispatchEvent(dDataInitEvent);

    }


	// This function clones the d-data children and stores them in the template parent element (d-data parent element)
    function setupTemplates(dDataProto){
        if (dDataProto.isConnected){
            var templateParent = dDataProto.parentElement;
            if ( findRootDData(dDataProto) == dDataProto ){ templateParent = dDataProto; }
            if (!templateParent.childTemplates){ templateParent.childTemplates = {}; }
            if ( !templateParent.childTemplates[dDataProto.getAttribute("name")] ){
                templateParent.childTemplates[dDataProto.getAttribute("name")] = dDataCloneNode(dDataProto);    
                templateParent.setAttribute("has-d-data-children", true);
            } 
        }  
    }

	// This function looks for nested d-data children and calls the above "setupTemplates" on them
    function setupChildTemplates(dDataProto){
        var childDDataElements = dDataProto.querySelectorAll("[d-data]");
        var childLen = childDDataElements.length;
        for (var i=0; i<childLen; i++){
            setupTemplates(childDDataElements[i]);
            registerDData(childDDataElements[i]);
        }
    }

	
    function setupRootDData(dDataProto){
        if ( findRootDData(dDataProto) == dDataProto ){  // if this is the root d-data element

            var scope = dData;      // Setup Scope.  This is the global dData Object
            if ( dDataProto.hasAttribute("scope") ){ // or use a user defined scope
                var scope = setupScope(dDataProto);
                var initialData = lookForInitialData(scope, dDataProto);
            }

			// Setup some shortcut access members to the global scope (dData)
            if (scope[dDataProto.name] == undefined || dDataProto.isConnected){
                Object.defineProperty(scope, dDataProto.name, { get: valueGetter, set: dataRender, enumerable: true, configurable: true } );    
            }
            
            if (initialData) {scope[dDataProto.name] = initialData;}
        } 
    }


	// Scope can be a dot notated string that will be converted into a global object.
	// ie: scope="myScope.test" will create a global object 'myScope' with a member 'test'
	// the last element in the dot notation will be the recipient of the d-data elements and functions
	// if this global object already exists it will be used instead of being overwritten.
    
    function setupScope(dDataProto){
        
        var scope = dDataProto.getAttribute("scope");
        if (scope == ""){ return window; }
        var paths = scope.split(".");
        var path = window;

        for (i=0; i<paths.length; i++){
            if ( typeof(path[paths[i]])=="undefined" ){
                path[paths[i]] = {};
            }
            path = path[paths[i]];
        }

        return path;
    }

	// if there is a global scope object with data then this function will automatically
	// populate d-data elements with the data
	
    function lookForInitialData(scope, dDataProto){
        if (scope.hasOwnProperty(dDataProto.name) ){ // Look for initial data on the scope
            return Object.assign({}, scope[dDataProto.name]);
        }
        return false;
    }


	// Self explanatory utility functions
    function findRootDData(element){
        var ddRoot = element;
        if (!element.isConnected){return null;}
        while (element = element.parentElement){
            if (element.hasAttribute("d-data") ) {ddRoot = element}
        }
        return ddRoot;
    }

    function findNearestDDataParent(element){
        var ddRoot = element;
        while (element = element.parentElement){
            if (element.hasAttribute("d-data") ) {ddRoot = element; break;}
        }
        return ddRoot;
    }
    
    
	// dataRender gets called when the user sets new data to the d-data element or object
    function dataRender(v){
        if (Object.keys(v).length == 0){ // if no data is sent
            resetValues();				// then reset the values to nothing
        }
        deleteExtraElements(dDataProto); // delete Extra Elements clears everything so we can build fresh
        renderValues(v, dDataProto);	// renders direct children elements values
        renderChildren(v, dDataProto);  // renders d-data children objects

        // dispatch dDataRendered Event for Builtins to respond to
        emitDataRendered(dDataProto);
    };

    function resetValues(){
        var dataSet = dDataProto.value;
        var keys = Object.keys(dataSet);
        var keysLen = keys.length;
        for (var i=0; i<keysLen; i++){
            var key = keys[i];
            dataSet[key] = undefined;
        } 
    }

    function emitDataRendered(element){
        var dDataInitEvent = new CustomEvent("dDataRendered", {bubbles:true, cancelable: true});
        element.dispatchEvent(dDataInitEvent);
    }

    function deleteExtraElements(element){
        
        var extraElements = element.querySelectorAll("[d-data]");

        for (var i=0; i<extraElements.length; i++){
            var ee = extraElements[i];
            var eeParent = ee.parentElement;
            eeParent.removeChild(ee);
        } 
    }

    function renderValues(values, element){
        // these are elements that have a name attriute and can be get or set
        var tree = element.valueElementTree;  
        
        for (var key in values){
            if (tree.hasOwnProperty(key)){  // check to make sure our value tree has this attribute
                elementRenderHandler(tree[key], values[key])  // run builtin or user defined element render function
            }else if(typeof(values[key]) !== "object" ) { // if there is no element on the DOM to render
                createHiddenInput(element, values, key)   // then create a hidden input field
            }
        }
    }

    function createHiddenInput(element, values, key){
        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = key;
        hiddenInput.value = values[key];
        element.append(hiddenInput);
    }

    
    // this function allows for custom element render functions for any type of element
    // that may need some special handling... like radios and check boxes where
    // simply setting the value or innerHTML is not enough.
    
    function elementRenderHandler( element, value ){
        var tagName = element.nodeName;
        var erHandler = dData.elementRenderHandler;  
        if (erHandler[tagName]){			// if there is a builtin or user defined element render handler
            erHandler[tagName](element, value);  // use that
            return 0;
        }

        // default element handler works with value and innerHTML;
        if (typeof(element.value) == "string" ){
            element.value = value;    
        } else {
            element.innerHTML = value;    
        }  
    }

    function renderChildren(value, element){
        var elemName = element.getAttribute("name");
        var parent = element.parentElement;
        var templateParent = findTemplateParent(element, elemName);
        if (!templateParent){return 0;}
        var childTemplate = templateParent.childTemplates[elemName];
        var templateValue = childTemplate.value;
        for (var key in value){
            if (value[key]==null){continue;}
            if (typeof(value[key]) == "object" && templateValue.hasOwnProperty(key) )  {
                renderList(element, value[key], key);
            } else if (Array.isArray(value[key]) ){
                renderHiddenList(element, value[key], key);
            }
        }
    }

    function renderList(element, value, name){
        for (var i=0; i<value.length; i++){
            element.add(name, value[i]);
        };
    }

    function renderHiddenList(element, value, name){
        var div = document.createElement("div");
        div.setAttribute("d-data", "");
        div.setAttribute("name", name);
        element.append(div);
        registerDData(div);
        element.removeChild(div);
        renderList(element, value, name);
    }

    function addSibling(childName, data){
        if (childName){
            var name = childName;
            var parent = findTemplateParent(dDataProto, name);
            var element = parent.childTemplates[name];
            var clone = dDataCloneNode(element);
        }else{
            var name = dDataProto.getAttribute("name");
            var parent = dDataProto.parentElement;
            var element = parent.childTemplates[name];
            var clone = dDataCloneNode(element);
        }

        parent.appendChild(clone);
        setupTemplates(clone);
        setupChildTemplates(clone);

        var inpVals = clone.querySelectorAll("[name]"); //clear all values that may have leaked into the template;
        for (var i=0; i<inpVals.length;i++){
            if (inpVals[i].hasAttribute("d-data")){continue;}
            elementRenderHandler(inpVals[i], ""); 
        }
        
        if(data){ clone.value = data; }

        return clone;
    }

    function removeSibling() {
        var parent = dDataProto.parentElement;
        parent.removeChild(dDataProto);
        emitDataRendered(parent);
    }

    function getLastSibling(parent, name){
        var siblings = parent.querySelectorAll("[name='"+name+"']");
        var lastSiblingIndex = siblings.length - 1;
        return siblings[lastSiblingIndex];
    }

    function findTemplateParent(element, name){
        if ( element.hasAttribute("has-d-data-children") && element.childTemplates[name]){
            return element;
        }else{
            var templateParent = element.querySelectorAll( "[has-d-data-children]" );
            for (var i=0; i<templateParent.length;i++){
                if (templateParent[i].childTemplates[name]){
                    return templateParent[i];
                    break;
                }
            } 
            while (element = element.parentElement){
                if (element.hasAttribute("has-d-data-children") && element.childTemplates[name] ) {return element; break;}
            }  
        }
    }

    function dDataCloneNode(element){
        var clone = element.cloneNode(true);
        return registerDData(clone);
    }
    
    function valueElementTree(){
        return valueGetter(undefined,dDataProto,true);
    }

    function valueGetter(data, element, getElementTree){
        var rootElement = false;
        if (data == undefined){rootElement = true;}
        var data = data || {};
        var element = element || dDataProto;

        for(var i=0; i<element.childElementCount; i++){
            var child = element.children[i];
            evaluateChild(data, child, getElementTree);
        };

        if (rootElement){
            Object.defineProperty(data, "add", {get: function(){
                return element.add;
            } });
            Object.defineProperty(data, "element", {get: function(){
                return dDataProto;
            }} );
            Object.defineProperty(data, "elementTree", {get: valueElementTree} );
        }
        
        return data;
    }

    function evaluateChild(data, child, getElementTree){
        if      (child.hasAttribute("d-data") )     { getNestedDData(data, child, getElementTree)   }
        else if (child.hasAttribute("name"))    { getElementValue(data, child, getElementTree)  }
        else                                    { valueGetter(data, child, getElementTree)  } //descend into child dom elements recursively
    }

    function getNestedDData(data, child, getElementTree){
        var childName = child.getAttribute("name");
        if (data[childName] == undefined){
            data[childName] = [];
            data[childName].add = function(data){
                child.add(null, data);
            };
            data[childName].remove = function(index){
                child.parentElement.querySelectorAll("[name='"+childName+"']")[index].remove();
            }
        }
        if ( getElementTree ){ data[childName].push(child.valueElementTree); }
        else { data[childName].push(child.value); }
    }

    function getElementValue(data, child, getElementTree){
        child.name = child.name || child.getAttribute("name");
        var childName = child.name;
        if ( getElementTree ) { data[childName] = child;  }
        else { 
            elementValueHandler(data, child, childName);
        } 
    }

    function elementValueHandler(data, child, childName){
        var tagName = child.nodeName;
        var evHandler = dData.elementValueHandler;
        if (evHandler[tagName]){
            evHandler[tagName](data, child, childName, emitDataRendered);
            return;
        }

        // default Element Value Handler works with value attribute and innerHTML
        var childAttr = "";
        if (typeof(child.value)=="string" ) 
            { childAttr = "value"; }
        else{ childAttr = "innerHTML"; } 

        Object.defineProperty(data, childName, {
            get: function(){ return child[childAttr]; }, 
            set: function(newVal){ child[childAttr] = newVal; emitDataRendered(child);},
            enumerable: true,
        }); 
    }

    function nameAttributeGetter(){return dDataProto.getAttribute("name") || ""; };
    function nameAttributeSetter(newVal){ dDataProto.setAttribute("name", newVal) };

    function setupExtensions(element, dDataElement){
        // extensions provide additional functionality when a given attribute is present on 
        // any descendant element of d-data, these attributes can be custom or native
        // multiple extensions for the same attribute may be possible, but collisions may occur, this has not been tested
        var children = element.children;
        for (var i=0; i<children.length; i++){
            var child = children[i];
            if (child.hasAttribute("d-data")){  //then descend no further  
            }else{
                evaluateElementForExtensions(child, dDataElement);
                setupExtensions(child, dDataElement); //continue looking through immediate children
            }
        }
    }

    function evaluateElementForExtensions(element, ddata){
        // extension objects = {attribute: "attribute name", setup: function(element, dData, attributeValue) }
        var ext = dData.extensions
        for (var i=0; i<ext.length; i++){
            if ( element.hasAttribute( ext[i].attribute ) ){ 
                var attrVal = element.getAttribute( ext[i].attribute );
                ext[i].setup(element, ddata, attrVal) 
            }
        }   
    }

    return dDataProto;
}





/////////////////////////////////////////////////////////////////////////////////////
// EXTENSIONS //////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////
// ADD AND REMOVE EXTENSIONS   //
/////////////////////////////////

( function dDataChildAdderExtension(){
    dData.extensions.push({attribute: "add", setup: setupAdder });

    function setupAdder(element, dDataElement, attrVal){
        element.addEventListener("click", function(event){
            var attrSplit = attrVal.split(":");
            var childToAdd = attrSplit[0];
            var elementToFocus = attrSplit[1];
            var childAdded = dDataElement.add(childToAdd);
            if (elementToFocus){
                childAdded.querySelector("[name='"+elementToFocus+"']").focus();
            }else{
                var input = childAdded.querySelector("input");
                if (input){input.focus();}
            }
        })
    }
})();

( function dDataChildRemoverExtension(){
    dData.extensions.push({attribute: "remove", setup: setupRemover });

    function setupRemover(element, dDataElement, attrVal){
        element.addEventListener("click", function(event){
            dDataElement.remove();
        })
    }
})();

/////////////////////////////////
// COMPUTED PROPERTY EXTENSION //
/////////////////////////////////

( function dDataComputers(){
    
    dData.extensions.push({attribute: "computer", setup: setupComputer});

    document.addEventListener("dDataInitialized", function(event){
        event.target.addEventListener("change", function(event){
            runComputers(event.target);
        });
    });
    
    function setupComputer(element, dDataElement){
        
        var computer = eval(element.getAttribute("computer"));
        var dParent = dData.findNearestDDataParent(element);
        var root = dData.findRootDData(element);
        if (!dParent.computedProps){ dParent.computedProps = []; }

        var fun = function(dDataElement, root){
            if (!typeof(computer) == 'function' ){ return 0; }/* Make sure computer function is defined */ 
            if (element.value){
                element.value = computer( dDataElement, root ) ;
            } else {
                element.innerHTML = computer( dDataElement, root ) ;
            }

        }
        dParent.computedProps.push(fun);

        dParent.addEventListener("dDataRendered", function(event){ 
            runComputers(element) 
        });
        runComputers(element);
    }


    function runComputers(element){
        var root = dData.findRootDData(element);
        var dDataElement = dData.findNearestDDataParent(element)
        var computers = dDataElement.computedProps
        if (computers){
            for (var i=0; i<computers.length; i++){
                computers[i](dDataElement, root);
            }
        }
    }
})();


///////////////////////
// FILTER  EXTENSION //
///////////////////////

( function dDataFilterExtension(){

    dData.extensions.push({attribute: "filter", setup: setupFilter});

    function setupFilter(filter, dDataElement, attrVal){
        
        filter.addEventListener("input", filterItems);
        dDataElement.addEventListener("dDataRendered", filterItems);

        function filterItems(event){
            var attrSplit = attrVal.split(":");
            var dataToFilter = attrSplit[0];
            var keyToFilterOn = attrSplit[1];

            var searchKeys = filter.value.split(" ");
            var parent = dData.findNearestDDataParent(filter);
            var children = parent.querySelectorAll("[name='"+dataToFilter+"']");
            for (var i=0; i<children.length; i++){
                var f = filterArr_AND(children[i].value, keyToFilterOn, searchKeys);
                if (f || filter.value == "") {
                    children[i].hidden = false ;   
                }else{
                    children[i].hidden = true;
                }

            }
        };      
    }

    function filterArr(obj, keyToFilterOn, searchVal){ 
        // this function will filter a nested array to elements containing searchVal  
        if ( Array.isArray(obj) ){
            var results = []
            for (var i=0; i<obj.length; i++){
                 var r = filterArr( obj[i], keyToFilterOn, searchVal ) 
                 if (r) { results.push(r) }
            }
            if (results.length == 0 ){ return false } else { return results }
        } else if (typeof(obj)=="object" ) {
            var results = {};
            for (var key in obj) {
                if (keyToFilterOn != undefined && key != keyToFilterOn){ continue; }
                var r = filterArr( obj[key], keyToFilterOn, searchVal )
                if (r != undefined && r != false) { results[key] = r } 
            }
            if (Object.keys(results).length == 0) { return false } else { return obj }
        } else {
            if (obj != undefined && obj.toString().toLowerCase().indexOf(searchVal.toLowerCase()) > -1 ) { return obj; } else { return undefined; }
        }
    }

    function filterArr_AND(obj, keyToFilterOn, searchKeys){
        // this function will filter a nested array to elements including all search keys
        var results = obj;
        for (var i=0; i<searchKeys.length;i++ ){
            var test = filterArr(results, keyToFilterOn, searchKeys[i]);
            if (test.length == 0 || test == false) {break;}
        }
        return test;
    }

})();


///////////////////////
// SORTING EXTENSION //
///////////////////////

( function dDataSortExtension(){

    /* naturalSort https://github.com/overset/javascript-natural-sort */
    function naturalSort(e,a){var r,t,n=/(^([+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|^0x[\da-fA-F]+$|\d+)/g,l=/^\s+|\s+$/g,i=/\s+/g,s=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,c=/^0x[0-9a-f]+$/i,p=/^0/,u=function(e){return(naturalSort.insensitive&&(""+e).toLowerCase()||""+e).replace(l,"")},d=u(e),f=u(a),o=d.replace(n,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),h=f.replace(n,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),w=parseInt(d.match(c),16)||1!==o.length&&Date.parse(d),$=parseInt(f.match(c),16)||w&&f.match(s)&&Date.parse(f)||null,m=function(e,a){return(!e.match(p)||1==a)&&parseFloat(e)||e.replace(i," ").replace(l,"")||0};if($){if(w<$)return-1;if(w>$)return 1}for(var g=0,N=o.length,x=h.length,v=Math.max(N,x);g<v;g++){if(r=m(o[g]||"",N),t=m(h[g]||"",x),isNaN(r)!==isNaN(t))return isNaN(r)?1:-1;if(/[^\x00-\x80]/.test(r+t)&&r.localeCompare){var C=r.localeCompare(t);return C/Math.abs(C)}if(r<t)return-1;if(r>t)return 1}}

    dData.extensions.push({attribute: "sort", setup: setupSort});

    function setupSort(element, dDataElement, attributeValue){
        element.addEventListener("click", function(event){
            var listToSort = attributeValue.split(":")[0];
            var key = attributeValue.split(":")[1];
            var dir = attributeValue.split(":")[2];
            var zParent = dData.findNearestDDataParent(element);
            var children = qsa(zParent, "[name='"+listToSort+"']");
            var chParent = children[0].parentElement;
            children.sort(function(a,b){
                return sort(a,b,key,dir);
            });
            for (var i=0; i<children.length; i++){
                chParent.appendChild(children[i]);
            }
        });
    }

    // this function is needed to return an array of elements instead of a nodeList
    function qsa(parent, selector){return [].slice.call(parent.querySelectorAll(selector) )}

    function sort(a, b, key, dir) {
        if (dir == "desc"){ return naturalSort(b.value[key].toLowerCase(), a.value[key].toLowerCase() ); }
        else { return naturalSort(a.value[key].toLowerCase(), b.value[key].toLowerCase() ) }   
    }

})();

///////////
// CLASS //
///////////

( function(){  // Usage: d-class="className:fieldToWatch:valueToMatch[:classNameifValueDoesn'tMatch]"  
               // Example d-class="completed:is_complete:true:notComplete"
               //       If the "is_complete" field contains the value "true"
               //       Then add class "completed" to this element
               //       Else notComplete is added to the class attribute
    
    dData.extensions.push({attribute: "d-class", setup: setupDClass});

    function setupDClass(element, dDataElement, attrVal){
        var attrSplit = attrVal.split(":");
        var classTrue = attrSplit[0];
        var name = attrSplit[1];
        var expression = attrSplit[2];
	var classFalse = "";
	if (attrSplit.length > 2){ // if there is a third argument
            classFalse = attrSplit[3];
	}
        
        var elements = dDataElement.querySelectorAll("[name='"+name+"']");
        for (var i=0; i<elements.length; i++){
            elements[i].addEventListener("change", dClass);
            elements[i].addEventListener("dDataRendered", dClass);    
        }
        
        dDataElement.addEventListener("dDataRendered", dClass);

        function dClass(event){
            if (dDataElement.value[name] == undefined){return 0;}
            if (dDataElement.value[name].toString() == expression ){
                element.classList.remove(classFalse);
                element.classList.add(classTrue);
            }else{
                element.classList.remove(classTrue);
                element.classList.add(classFalse);
            }
        }
        dClass();
    }
})();


//////////
// HIDE //
//////////

(function(){  /* Usage: hide="nameOfFunction" <--- the function needs to return true of false
                 Example: hide="test"         <---  element.hidden == test()    
                 function test(){  return expr ? true : false; }               
*/  
    dData.extensions.push({attribute: "hide", setup: setupShow});

    function setupShow(element, dDataElement, attrVal){

        dDataElement.addEventListener("dDataRendered", showHide);
        dDataElement.addEventListener("change", showHide);

        function showHide(){
            var attrSplit = attrVal.split(".");
            var func = window;
            var i=0;
            while (typeof(func) != "function" ){
                func = func[attrSplit[i]];
                i++;
            }
            element.hidden = func(); 
        }
        showHide();
    }

})();

////////////////////////////////////////////////////////////////////////
////////////////// DEFAULT ELEMENT HANDLER EXTENSION ///////////////////
////////////////////////////////////////////////////////////////////////


( function(){
    var evHandler = dData.elementValueHandler;
    var ERHandler = dData.elementRenderHandler;

    ERHandler.INPUT = function(element, value){
        var elmAttr = "";
        if (element.type == "checkbox"){elmAttr = "checked";}
        else if (element.type == "radio"){ setRadio(element, value); return;}
        else { elmAttr = "value";}

        element[elmAttr] = value || "";
    }
    function setRadio(element,value){
        var name = element.getAttribute("name");
        if (value == undefined){
            var elem = document.querySelector("input[name='"+name+"']:checked");
            elem.checked = false;
            elem.dispatchEvent(new Event("dDataRendered"));
            return 0;
        }
        var dParent = dData.findNearestDDataParent(element);
        var elem = dParent.querySelector("input[value='"+value+"']")
        elem.checked = true;
        elem.dispatchEvent(new Event("dDataRendered"));
    }

    evHandler.INPUT = function(data, element, elementName, emitDataRendered){
        var elmAttr = "";
        
        if (element.type == "checkbox"){elmAttr = "checked";}
        else if (element.type == "radio"){ handleRadios(data, element, elementName, emitDataRendered); return; }
        else { elmAttr = "value";} 

        Object.defineProperty(data, elementName, {
            get: function(){ return element[elmAttr]; }, 
            set: function(newVal){ element[elmAttr] = newVal || ""; emitDataRendered(element);},
            enumerable: true
        }); 
    }

    function handleRadios(data, element, elementName, emitDataRendered){
        
        var radioGet = function(){
            var dParent = dData.findNearestDDataParent(element);
            var radios = dParent.querySelectorAll("[name='"+elementName+"']");
            var radioCount = radios.length;
            for (var i=0; i<radioCount; i++){
                if (radios[i].checked){return radios[i].value}
            }
        }

        var radioSet = function(newVal){
            setRadio(element,newVal);
            emitDataRendered(element);
        }

        var propObj = {
            get: radioGet,
            set: radioSet,
            enumerable: true
        }

        var isDefined = data.hasOwnProperty(elementName);
        if ( isDefined ){
            return ;
        }else {
            Object.defineProperty(data, elementName, propObj);    
        }
        
    }
       
})();

////////////////////////////////////////////////////////////////////////
////////////////// DDATA LOAD INITIAL VALUE EXTENSION ///////////////////
////////////////////////////////////////////////////////////////////////


( function dDataSetValue(){
    dData.extensions.push({attribute: "load", setup: setValue });

    function setValue(element, dDataElement, attrVal){

            var name = element.getAttribute("name");
            if (!dDataElement.isConnected){return 0;}
            var val = eval(attrVal);
            if (val.then){                       // if value is a promise
                val.then(function(result){
                    updateValue(result);
                });
            }else{
                updateValue(val);
            }

            function updateValue(value){
                if (element.hasAttribute('d-data')){
                    dDataElement.value = value;
                }else{
                    dDataElement.value[name] = value;    
                } 
            }
            
    }

})();

////////////////////////////////////////////////////////////////////////
////////////////// DDATA PUSH TO ARRAY ON CLICK EXTENSION ///////////////////
////////////////////////////////////////////////////////////////////////

( function dDataPush(){
    dData.extensions.push({attribute: "push", setup: pushValue });

    function pushValue(element, dDataElement, attrVal){
        element.addEventListener("click", function(){
            var arr = eval(attrVal);
            arr.push(dDataElement.value); 
        });
    }


})();

////////////////////////////////////////////////////////////////////////
////////////////// DDATA OBJ ASSIGN ON CLICK EXTENSION ///////////////////
////////////////////////////////////////////////////////////////////////

( function dDataSave(){
    dData.extensions.push({attribute: "assign", setup: saveValue });

    function saveValue(element, dDataElement, attrVal){
        element.addEventListener("click", function(){
            var obj = eval(attrVal);  // GET OBJECT TO SAVE TO
            var keys = Object.keys(obj);
            var keyLen = keys.length;
            for (var i=0; i<keyLen; i++){
                var key = keys[i];
                obj[key] = dDataElement.value[key];
            }
        });
    }


})();

////////////////////////////////////////////////////////////////////////
////////////////// DDATA EVAL ON CLICK EXTENSION ///////////////////
////////////////////////////////////////////////////////////////////////

( function dDataEval(){
    dData.extensions.push({attribute: "eval", setup: deleteValue });

    function deleteValue(element, dDataElement, attrVal){
        element.addEventListener("click", function(){
            eval(attrVal);
        })
    }


})();

////////////////////////////////////////////////////////////////////////
////////////////// dDATA ROUTER EXTENSION ///////////////////
////////////////////////////////////////////////////////////////////////

( function(){
    window.router = {};
    var _router = {};
    router.updateHash = updateHash;
    var dont_update_view = false;
    var hash = location.hash.substr(1);
    var viewPort = undefined;
    var templates = undefined;
    var errorTemplate = undefined;
    var templateRouteIndex = [];
    var currentRoute = null;

    if (hash == ""){
        location.hash = "/";
    }

    document.addEventListener("DOMContentLoaded", function(){
        viewPort = document.querySelector("[router-view]");

        templates = document.getElementsByTagName("template");

        errorTemplate = document.getElementById("errorTemplate");
        updateRouteIndex();

        updateView();
    });

    window.addEventListener("hashchange", function(){
        if (dont_update_view){dont_update_view = false; return 0;}
        hash = location.hash.substr(1);
        if (hash == ""){
            location.hash = "/";
        }
        updateView();

    });

    function updateHash(newHash){
        
        if (decodeURI(location.hash.substr(1)) == newHash){return 0;}
        dont_update_view = true;
        location.hash = newHash;
    }

    function updateView(){
        if (viewPort == null){return 0;} // There is no view port
        var template = getTemplate();
        if (template == null){
            console.log("dData Router Template Not Defined: " + hash)
        }
        template = template || errorTemplate;
        var clone = document.importNode(template.content, true);
        viewPort.innerHTML = "";
        viewPort.appendChild(clone);
    }

    function updateRouteIndex(){
        var tempLen = templates.length;
        for (var i=0; i<tempLen; i++){
            if (!templates[i].hasAttribute("route")){continue;}
            var routes = templates[i].getAttribute("route").split("/");
            
            templateRouteIndex.push({routes});
        }
    }

    function getTemplate(){
        var len = templateRouteIndex.length;
        
        var hashRoutes = hash.split("/");
        var hashRouteLen = hashRoutes.length;

        for (var i=0; i<len; i++){  // search through the index to find a matching route
            var tempRoutes = templateRouteIndex[i].routes;
            var tempRouteLen = tempRoutes.length;

            // if the template route does not have the same number of arguments, continue
            if (hashRouteLen != tempRouteLen){ continue; }

            if ( routes_match(tempRoutes, hashRoutes) ){ 
                currentRoute = templateRouteIndex[i];
                return templates[i]; 
            }

        }
    }

    function routes_match(templateRoute, hashRoute){
        var len = templateRoute.length;

        for (var i=0; i<len; i++){
            var tr = templateRoute[i];
            var hr = hashRoute[i];
            if( tr.indexOf(":") == 0 ){ // if this parameter is a variable
                var param = tr.substr(1);
                setupRouteVarObserver(param);
                _router[param] = decodeURI(hr);
                continue;
            } 
            if (tr != hr){return false;}
        }

        return true;
    }

    function setupRouteVarObserver(param, hr){
        if (window.router[param] != undefined){return 0;}
        Object.defineProperty(window.router, param, {get: getParam, set: setParam});


        function getParam(){
            return _router[param];
        }

        function setParam(newVal){
            _router[param] = newVal;
        }
    }

    dData.extensions.push({ attribute: "route-bind", setup: routeBind });

    var routeBindEv = {};

    function routeBind(element, dDataElement, attrVal){
        Object.defineProperty(element, "value", {get: getElVal, set: setElVal});

        function getElVal(){
            return window.router[attrVal];
        }

        function setElVal(newVal){
            window.router[attrVal] = newVal;
        }
           
        
        if (dDataElement.routerRenderEv == undefined){
            dDataElement.routerRenderEv = true;
            dDataElement.addEventListener("dDataRendered", routeUpdateRender);    
        }
        

        function routeUpdateRender(ev){
            updateRoute();
        }
        
        
    }

    function updateRoute(){

        var routeVars = currentRoute.routes;
        var len = routeVars.length;
        var newRouteArr = [];

        for (var i=0; i<len; i++){
            if (routeVars[i] == ""){continue;}
            var routeVar = routeVars[i].substr(1);
            if (_router[routeVar] == undefined){continue;}
            newRouteArr[i] = _router[routeVar];
        }
        
        updateHash(newRouteArr.join("/"));
    }

    
} )();


( function dDataSetRoute(){
    dData.extensions.push({attribute: "set-route", setup: setRoute });

    function setRoute(element, dDataElement, attrVal){
        
        element.addEventListener("click", function(){
            var hashRoute = attrVal.split("/");
            hashRoute.shift();
            var len = hashRoute.length;
            var hashStr = "";
            for (var i=0; i<len; i++){
                var param = hashRoute[i];
                if (param.indexOf(":") == 0){ param = dDataElement.value[ param.substr(1) ]; }
                hashStr += "/" + param;
            }
            location.hash = hashStr;
        });
        
    }
})();



///////////////////////////////////////////////////////////////////////
//////////////////////// HTML Include Extension ///////////////////////
///////////////////////////////////////////////////////////////////////

/* use ' html-src="path/to/file" ' to append html to the element with this attribute
this attribute will be removed from the element after the html is appended */


(function() {

    elements_being_loaded = 0;

    var html_src_Observer = new MutationObserver(function(mutations) {
        if (typeof (mutationDoneTimer) !== "undefined") {
            clearTimeout(mutationDoneTimer)
        }
        mutationDoneTimer = setTimeout(function() {
            var mutationDoneEvent = new Event("MutationDone");
            document.dispatchEvent(mutationDoneEvent);
        }, 100);
        mutations.forEach(function(mutation) {
            if (mutation.type == "childList") {
                var nodes = mutation.addedNodes;
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].nodeType === 1 && nodes[i].hasAttribute("html-src")) {
                        loadHTML(nodes[i]);
                    } else if (nodes[i].nodeType === 1) {
                        findNestedElements(nodes[i]);
                    }
                }

            }
            if (mutation.type == "attributes") {
                if (mutation.target.nodeType === 1 && mutation.target.hasAttribute("html-src")) {
                    loadHTML(mutation.target);
                }

            }
        });
    }
    );

    html_src_Observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: true
    });

    async function loadHTML(element) {

        // because this function is async this variable can be manipulated by multiple calls in parallel
        elements_being_loaded += 1;

        element.innerHTML = "<h1>Loading...</h1>";
        path = element.getAttribute("html-src");
        element.removeAttribute("html-src");

        var html = await get(path);
        element.innerHTML = html;
        element.setAttribute("html-src-loaded", path);
        findNestedElements(element);
        elements_being_loaded -= 1;

        // after all the html-src attributes are finished then emit DOMContentLoaded
        if (document.querySelector("[html-src]") == null && elements_being_loaded == 0) {
            var e = new Event("DOMContentLoaded");
            document.dispatchEvent(e);
            elements_being_loaded = Infinity;
            //Don't fire this event again.
        }
    }

    function findNestedElements(element) {
        //         console.log(element.cloneNode(true))
        var childList = element.querySelectorAll("[html-src]");
        //         console.log(childList);
        var childLen = childList.length;
        for (var i = 0; i < childLen; i++) {
            loadHTML(childList[i]);
        }
    }

}
)();

function get(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        }
        ;
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        }
        ;
        xhr.send();
    }
    );
}



////////////////////////////////////////////////////////////////////////
////////////////// FORMAT EXTENSION ///////////////////
////////////////////////////////////////////////////////////////////////


Number.prototype.formatMoney = function(c, d, t) {
    var n = this
      , c = isNaN(c = Math.abs(c)) ? 2 : c
      , d = d == undefined ? "." : d
      , t = t == undefined ? "," : t
      , s = n < 0 ? "- $ " : "$ "
      , i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)))
      , j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

(function formatExtension() {

    dData.extensions.push({
        attribute: "format",
        setup: setupFormat
    });

    function setupFormat(element, dDataElement, attributeValue) {
        dDataElement.addEventListener("dDataRendered", function() {
            switch (attributeValue) {
            case "money":
                _formatMoney(element, dDataElement);
                break;
            case "date":
                _formatDate(element, dDataElement);
                break;
            }
        })
    }

    function _formatMoney(element, dDataElement) {
        var value = dDataElement.value[element.name];
        if (!value.includes("$")){
            element.innerHTML = Number(value).formatMoney(2);    
        }
    }

    function _formatDate(element, dDataElement) {
        var value = dDataElement.value[element.name];
        element.innerHTML = new Date(value).toLocaleDateString();
    }

})();


////////////////////////////////////////////////////////////////////////
////////////////// POUCHDB EXTENSION ///////////////////
////////////////////////////////////////////////////////////////////////

var dDataDBName = dDataDBName || "dDataPouchDB";
var db = new PouchDB(dDataDBName);
var dbChangeHandlers = {};

db.createIndex({
  index: {fields: ['type']}
});

function removeDoc(id){
    db.get(id).then(function(doc){db.remove(doc)});
}

function removeAllDocs(){
    db.allDocs({include_docs:true}).then(function(allDocs){
        var docs = allDocs.rows;
        var len = docs.length;
        for (var i=0; i<len; i++){
            db.remove(docs[i].doc);
        }
    }); 
}

function generateUUID() {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxx-xxxxxx'.replace(/[xy]/g, function(c) {
		var r = (d + Math.random()*16)%16 | 0;
		d = Math.floor(d/16);
		return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});
	return uuid;
};

( function dDataPouchDBExtension(){
	dData.extensions.push({attribute: "pouch-list", setup: setupList });
	dData.extensions.push({attribute: "pouch-load", setup: setupLoad });
	dData.extensions.push({attribute: "new", setup: setupNew });
	dData.extensions.push({attribute: "save", setup: setupSave });
	dData.extensions.push({attribute: "delete", setup: setupDelete });
	dData.extensions.push({attribute: "form", setup: setupForm });
	var selfSaved = false;

	function setupNew(element, dDataElement, attrVal){
		var dRoot = dData.findRootDData(element);
		attrVal = attrVal || dDataElement.getAttribute("name");
		element.addEventListener("click", function(event){
			dRoot.value = {};
			dRoot.value.type = attrVal;
		});
	};

	function setupLoad(element, dDataElement, attrVal){

		function refresh(){
			var dParent = dData.findRootDData(dDataElement);
			var childName = dDataElement.getAttribute("name");
			var val = eval(attrVal);
			if (dDataElement.isConnected){
				db.get(val).then(function(doc){
					dDataElement.value = doc;
				}).catch(function(err){
					console.log(err);
					alert("There was an error loading this document!")
				});
		   }
		}

		refresh();
	}

	function setupDelete(element, dDataElement, attrVal){
	   
			element.addEventListener("click", function(event){
				event.stopPropagation();
				var id = dDataElement.value._id;
				if (confirm("Are you sure you want to delete?")){
					db.get(id).then(function(doc){
						db.remove(doc);
					});
				};
			});
	   
	}

	function setupForm(element, dDataElement, attrVal){
		var dDataObj = attrVal.split(".");
		var scope = window[dDataObj[0]];
		var obj = dDataObj[1];
		
		 dDataElement.addEventListener("click", function(event){
			if (event.target.hasAttribute("d-data")){
				var dElem = event.target;
			}else{
				var dElem = dData.findNearestDDataParent(event.target);
			}
			
			scope[obj] = dElem.value;
		});

		
	};

	function setupSave(element, dDataElement, attrVal){
		if (attrVal == ""){
			console.log(element);
			throw "dData PouchDB Extension: save attribute requires an argument!";
		}
		if (dbChangeHandlers[attrVal] == undefined){dbChangeHandlers[attrVal] = {};}
		var dRoot = dData.findRootDData(element);

		dbChangeHandlers[attrVal].form = function(change){
            var dRoot = dData.findRootDData(element)
            var id = dDataElement.value._id;
            if (id == undefined){return 0;} // This is a new record
            if (change.doc._id == id && !selfSaved){
                if (change.deleted){
                    dRoot.value._id = "";
                    dRoot.value._rev = "";
                    alert("The Original document was deleted by someone else... make sure you save your work if you want to keep this document alive.");
                    return 0;
                }
                if (confirm("A newer version of this document is available.  \n Would you like to refresh?")) { 
                    db.get(id).then(function(doc){
                        dRoot.value = doc;
                    }).catch(function(err){
                        console.log(err);
                    });
                }
            }else if (change.doc._id == id){
                selfSaved = false;
                db.get(id).then(function(doc){
                    dRoot.value = doc;
                }).catch(function(err){
                    console.log(err);
                });;
            }else{selfSaved = false;}
        }
		
		 element.addEventListener("click", function(event){
			var obj = dRoot.value;
			obj._id = obj._id || generateUUID();
			obj.type = obj.type || attrVal;
			selfSaved = true;
			db.put(obj).then(function(doc){
				dRoot.value = {_id: doc.id, _rev: doc.rev};
			}).catch(function(err){
				if (err.name == "conflict"){
					if (confirm(`Couldn't Save... a newer version of this document is available.  \n Would you like to refresh?  
					\n Refreshing will replace your work with the latest doc.`)) { 
						db.get(err.docId).then(function(doc){
							dRoot.value = doc;
						});
					}
				}
			});
		});
	};

	var pouch_list_style_sheet = (function() {
        // Create the <style> tag
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        return style.sheet;
    })();

    pouch_list_style_sheet.insertRule("pl-paging { display:none; }");

	function setupList(element, dDataElement, attrVal){

		var dParent = dData.findRootDData(dDataElement);
		if (dParent != null){
		    dParent.updatePaging = updatePaging;    
	    }
		
		var paging = getPaging(dParent);  
		setupSortingButtons(); 
		setupFilterInput();
		setupPageButtons();
		setupSpinner();

		var childName = dDataElement.getAttribute("name");
		attrVal = attrVal || childName;

		if (dbChangeHandlers[attrVal] == undefined){dbChangeHandlers[attrVal] = {};};
		   
		if (dParent){
			dbChangeHandlers[attrVal].list = function(change){
				refresh();
			};
		}

		function setupSpinner(){
		    if (dParent == null){return 0;}
		    var spinner = dParent.querySelector("[pl-spinner]");
		    if (spinner == null){return 0;}

		    dParent.addEventListener("plFetchingData", function(ev){
		        
		        spinner.hidden = false;
		        var pLists = dParent.querySelectorAll("[pouch-list]");
		        for (var i=0; i<pLists.length; i++){
		            pLists[i].hidden = true;
		        }
		    });

		    dParent.addEventListener("pListRefreshed", function(ev){
		        spinner.hidden = true;
		    });
		}


		function updatePaging(){
		    paging = getPaging(dParent); 
		    emitPagingUpdated();
		    refresh();
		}

		function emitPagingUpdated(){
		    var pagingUpdated = new CustomEvent("plPagingUpdated", {bubbles:true, detail: paging});
            dParent.dispatchEvent(pagingUpdated);
		}

        function setupPageButtons(){
            if (dParent == null){return 0;}
            var plFirst = dParent.querySelector("[pl-first]");
            var plPrev = dParent.querySelector("[pl-prev]");
            var plNext = dParent.querySelector("[pl-next]");
            var plLast = dParent.querySelector("[pl-last]");
            if (plFirst != null){setupFirst();}
            if (plPrev != null){setupPrev();}
            if (plNext != null){setupNext();}
            if (plLast != null){setupLast();}

            function setupFirst(){
                plFirst.addEventListener("click", function(){
                    if (paging.limit == "*"){return 0;}
                    paging.skip = 0;
                    emitPagingUpdated();
                    refresh();
                });
            }

            function setupPrev(){
                plPrev.addEventListener("click", function(){
                    if (paging.limit == "*"){return 0;}
                    paging.skip -= paging.limit;
                    if (paging.skip < 0){paging.skip = 0; return 0;}
                    emitPagingUpdated();
                    refresh();
                });
            }
            
            function setupNext(){
                plNext.addEventListener("click", function(){
                    if (paging.limit == "*"){return 0;}
                    var total = dParent.value.pl_total_rows;
                    paging.skip += paging.limit;
                    if (paging.skip >= total){paging.skip -= paging.limit; return 0;}
                    emitPagingUpdated();
                    refresh();
                });
            }
            
            function setupLast(){
                plLast.addEventListener("click", function(){
                    if (paging.limit == "*"){return 0;}
                    var total = dParent.value.pl_total_rows;
                    paging.skip = Math.floor(total / paging.limit) * paging.limit;
                    if (paging.skip >= total){paging.skip -= paging.limit;}
                    emitPagingUpdated();
                    refresh();
                });
                
            }
        }

        function setupFilterInput(){
            var filterDeBounce;
            if (dParent == null){return 0;}
            var fInput = dParent.querySelector("[pl-filter]");
            if (fInput == null){return 0;}
            fInput.addEventListener("keyup", function(ev){
                if (filterDeBounce == undefined){
                    filterDeBounce = setTimeout(updateFilter, 500);
                }else{
                    clearTimeout(filterDeBounce);
                    filterDeBounce = setTimeout(updateFilter, 500);
                }
            });
            function updateFilter(){
                paging.filter = fInput.value;
                paging.skip = 0;
                emitPagingUpdated();
                refresh();
            }
        }

        function setupSortingButtons(){
            if (dParent == null){return 0;}
            var sButtons = dParent.querySelectorAll("[pl-sort]");
            if (sButtons.length == 0){return 0;}
            var sbLen = sButtons.length;
            
            for (var i=0; i<sbLen; i++){
                setupButton(sButtons[i]);
            }

            function setupButton(sButton){
                var elSpan = document.createElement("span");
                sButton.appendChild(elSpan);
                var column = sButton.getAttribute("pl-sort");
                setupInitialSortIcon(elSpan, column);
                sButton.addEventListener("click", function(ev){
                    toggleSortIcon(elSpan, column);
                    emitPagingUpdated();
                    refresh();
                })
            }

            function setupInitialSortIcon(el, column){
                if (paging.sort.indexOf(column + ":desc") > -1){
                    el.classList.add("desc");
                    return 0;
                }
                else if (paging.sort.indexOf(column) > -1){
                    el.classList.add("asc");
                    return 0;
                }
            }

            function toggleSortIcon(el, column){
                if (el.classList.contains("asc")){
                    el.classList.remove("asc"); 
                    el.classList.add("desc");
                    updateSortString(column, column+":desc");
                }
                else if (el.classList.contains("desc")){
                    el.classList.remove("desc");
                    updateSortString(column+":desc", "");
                }
                else {
                    el.classList.add("asc"); 
                    updateSortString(column);
                }
            }

            function updateSortString(oldStr, newStr){
                var sortArr = paging.sort.split(",");
                if (paging.sort==""){sortArr = [];}
                var index = sortArr.indexOf(oldStr);
                
                if (newStr == undefined) {
                    sortArr.push(oldStr);
                }else if (newStr == ""){
                    sortArr.splice(index, 1);
                }else{
                    sortArr.splice(index, 1);
                    sortArr.push(newStr);
                }

                paging.sort = sortArr.join();  
            }
        }

		function getPaging(dParent){
		    if (dParent != null){
		        var values = dParent.value;
		        if(values.paging == undefined){
		            return {
		                skip: 0,
		                limit: "*",
		                filter: "",
		                sort: "",
		                groupby: "",
		                sum: "",
		                avg: "",
		                join_first: "",
		                join_last: ""
		            }
		        }else{
		            var p = values.paging;

		            return {
		                skip: Number(p[0].skip) || 0,
		                limit: isNaN(p[0].limit) ? p[0].limit : Number(p[0].limit) || "*",
		                filter: p[0].filter || "",
		                sort: p[0].sort || "",
		                groupby: p[0].groupby || "",
		                sum: p[0].sum || "",
		                avg: p[0].avg || "",
		                join_first: p[0].join_first || "",
		                join_last: p[0].join_last   || ""
		            }
		        }
		    }
		}

		
        async function join(docs, joinStr){
            //expects that joinStr is formatted as "docType:docTypeField=parentField"
            
            //example: po_item:parent=name
            // assume current docs are a PO list
            // po_item is the doctype being joined to the current docs (in 'docs' variable argument).
            // parent is a field in the doctype being joined
            // name is a field in the current docs that should match for the join to take place
		    if (joinStr == ""){return docs;}
            var docLen = docs.length;
            var strSplit = joinStr.split(":");
            var doctype = strSplit[0];
            var docField = strSplit[1].split("=")[0];
            var parentField = strSplit[1].split("=")[1];
            var jDocs = await db.find({
                selector: {
                    type: doctype
                }
            });
            var allJDocs = jDocs.docs;

            for (var i = 0; i<docLen; i++){
                var pFieldVal = docs[i][parentField];
                var selector = {};
                selector[docField] = pFieldVal;
                var jDocs = allJDocs.getAll(selector);
                docs[i][doctype] = jDocs.slice();
            }
            
            return docs;
            
		}

		function filterAndSort(docs){
		    var filteredDocs = plFilter(docs);
		    var sortedDocs = plSort(filteredDocs);
		    return sortedDocs;
		}

		

		function plFilter(docs){ // split the search string and find records that containg combinations of keywords
		    if (paging.filter == ""){return docs;}
		    var keys = paging.filter.split(",");
		    var keyLen = keys.length;
		    for (var i=0; i<keyLen; i++){
		        docs = _plFilter(docs, keys[i]);
		    }
		    return docs;
		}

		function _plFilter(docs, key){
		    if ( key.includes('">"') ){
                return _plFilterAdvanced(docs, key, '>');

		    }else if ( key.includes('"<"') ){
                return _plFilterAdvanced(docs, key, '<');

		    }else if ( key.includes('"<="') ){
                return _plFilterAdvanced(docs, key, '<=');

		    }else if ( key.includes('">="') ){
		        return _plFilterAdvanced(docs, key, '>=');

		    }else if ( key.includes('"!="') ){
		        return _plFilterAdvanced(docs, key, '!=');

		    }else if ( key.includes('"="') ){
		        return _plFilterAdvanced(docs, key, '=');

		    }else {
		        return _plFilterSimple(docs, key);
		    }
		}

		function _plFilterSimple(docs, key){
            var filteredDocs = [];
		    var docLen = docs.length;
		    for (var i=0; i<docLen; i++){
		        var jStr = JSON.stringify(docs[i]).toLowerCase();
		        var idx = jStr.indexOf(key.toLowerCase());
		        if (idx > -1) {
		            filteredDocs.push(docs[i]);
		        }
		    }
		    return filteredDocs;
		}

		function _plFilterAdvanced(docs, key, sign){
		    var keySplit = key.split(sign);
		    var key = keySplit[0] + ':"';
		    var kVal = keySplit[1];
		    kVal = kVal.substr(1, kVal.length - 2); // remove quotes
            kVal = getType(kVal); // get number, date, or string

            var filteredDocs = [];
		    var docLen = docs.length;
		    for (var i=0; i<docLen; i++){
		        var jStr = JSON.stringify(docs[i]).toLowerCase();
		        var idx = jStr.indexOf(key.toLowerCase());
		        var rValStart = idx + key.length;
		        var rValEnd = jStr.indexOf('"', rValStart);
		        var rVal = jStr.substring(rValStart, rValEnd);
		        rVal = getType(rVal); // get number, date, or string
		        
		        switch(sign){
		            case ">": 
                        if (rVal > kVal){ filteredDocs.push(docs[i]) } break;
		            case "<": 
		                if (rVal < kVal){ filteredDocs.push(docs[i]) } break;
		            case ">=": 
		                if (rVal >= kVal){ filteredDocs.push(docs[i]) } break;
		            case "<=": 
		                if (rVal <= kVal){ filteredDocs.push(docs[i]) } break;
		            case "!=":
		                if (rVal != kVal){ filteredDocs.push(docs[i]) } break;
		            case "=":
		                if (rVal == kVal){ filteredDocs.push(docs[i]) } break;
		        }


		    }
		    return filteredDocs;
		}

		function getType(_var){
            var _a = Number(_var);  // Check to see if its a number
            if (isNaN(_a)){
                _a = new Date(_var).getTime();  // Check to see if its a valid date string
            }
            if (isNaN(_a)){
                _a = _var.toLowerCase();  // else use regular string sort
            }
            return _a;
        }

        // expects a comma seperated string list of columns to sort
        // with an optional ':desc' to sort descending
        // example: "date:desc,customer,item"
        
		function plSort(docs){
		    if (paging.sort == ""){return docs;}
		    var keys = paging.sort.split(","); // get individual keys
		    var keyLen = keys.length;
		    
		    docs.sort(plCompare);

		    return docs;

		    function plCompare(a,b){
                for (var i=0; i<keyLen; i++){
                    var keySplit = keys[i].split(":"); //extract :desc 
                    var key = keySplit[0];
                    var _a = getType(a[key]);
                    var _b = getType(b[key]);
                    if (keySplit.length > 1){ // if :desc is present, sort descending;
                        if (_a > _b) {return -1;}
                        if (_a < _b) {return 1;}
                    }else{
                        if (_a < _b) {return -1;}
                        if (_a > _b) {return 1;}
                    }
                }
                return 0;
		    }

		}

		

		function groupBy(docs){
		    if (paging.groupby == ""){return docs;}
		    var groups = paging.groupby.split(",");
		    var groupLen = groups.length;
		    var groupedDocs = [];
		    var docLen = docs.length;
		    for (var i=0; i<docLen; i++){
                var gName = getGroupName(docs[i]);
                if (groupedDocs[gName] == undefined){ groupedDocs[gName] = []; } //create unique group
                groupedDocs[gName].push(docs[i]);  // push records into existing group
		    }
		    reFormatGroupedDocs();  // reformat object structure to work with d-data
		    return groupedDocs;

            // this function is primarily for groupby's that use more than one column
            // it works with single column groupby's as well
		    function getGroupName(doc){  
                var gName = "";
                for (var x=0; x<groupLen; x++){
                    var col = groups[x];
                    var cVal = doc[col];
                    gName += "%/%" + cVal;
                }

                return gName.substr(3);
		    }

		    function reFormatGroupedDocs(){
		        var formattedDocs = [];
		        var groupedDocsLen = groupedDocs.length;
		        for (var groupVal in groupedDocs){   // loop through all the groups
		            if (!Array.isArray(groupedDocs[groupVal])){continue;}  // skip prototype properties
		            var groupVals = groupVal.split("%/%");
		            var newDoc = {};  // create empty root object
		            expandGroupColumnValues(newDoc);  // expand group column values into the newdoc
		            newDoc.records = groupedDocs[groupVal].slice();  // nest all the grouped records into the root object
		            newDoc._record_count = newDoc.records.length; // add record count property
		            formattedDocs.push(newDoc);  // push root doc into the formatted docs array
		        }

		        function expandGroupColumnValues(){
		            for (var x=0; x<groupLen; x++){
		                var col = groups[x];  // get property name
		                newDoc[col] = groupVals[x];  // groupVals is defined above
		            }
		        }
		        groupedDocs = formattedDocs;
		    }



		}

		// Sum and/or Average sinlge or multi column
		// expects sum or avg to be comma seperated string of column names
		function sumAndOrAvg(docs){
		    if (paging.sum == "" && paging.avg == ""){return docs;}
		    var sumSplit = paging.sum.split(",");
		    var avgSplit = paging.avg.split(",");

		    if (sumSplit[0] == ""){ sumSplit.pop(); }
		    if (avgSplit[0] == ""){ avgSplit.pop(); }
		    if (paging.groupby == ""){
                docs = [{records: docs}]; // group all records if no groupby has been performed
		    }

		    sum();
		    avg();
            return docs;

		    function sum(){
		        for (var i=0; i<sumSplit.length; i++){ // for each column to sum
                    _sumGroup( sumSplit[i] );
		        }
		    }

		    function avg(){
		        for (var i=0; i<avgSplit.length; i++){ // for each column to avg
                    _avgGroup( avgSplit[i] );
		        }
		    }

		    function _sumGroup( col ){
                for (var i=0; i<docs.length; i++){ // for each group sum this column
                    var sumName = "sum_"+col;
                    docs[i][sumName] = _sum( docs[i].records, col );
                }
		    }

		    function _avgGroup( col ){
                for (var i=0; i<docs.length; i++){ // for each group avg this column
                    var avgName = "avg_"+col;
                    docs[i][avgName] = _avg( docs[i].records, col );
                }
		    }

		    function _sum( docs, col ){
                var sum = 0;
                for (var i=0; i<docs.length; i++){
                    sum += Number(docs[i][col]);
                }
                return sum;
		    }

		    function _avg( docs, col){
                var sum = 0;
                for (var i=0; i<docs.length; i++){
                    sum += Number(docs[i][col]);
                }
                return sum / docs.length;
		    }

		    
		}

            

		function paginate(sortedDocs){
		    var skip = Number(paging.skip);
		    var limit = Number(paging.limit) + skip;
		    if (paging.limit == "*"){limit = sortedDocs.length}
		    var docs = sortedDocs.slice(skip, limit);
		    return docs;
		}

		
		function refresh(){
			attrVal = attrVal || childName;
			if (dParent && dParent.isConnected){
				var plFetchingData = new CustomEvent("plFetchingData", {bubbles:true});
                dParent.dispatchEvent(plFetchingData);

				db.find({
				  selector: {
					type: attrVal
				  },
				}).then(async function(data){
				    var joinedDocs = await join(data.docs, paging.join_first); // join_first if set
				    var fsDocs = filterAndSort(joinedDocs);
				    var gDocs = groupBy(fsDocs);
				    var saDocs = sumAndOrAvg(gDocs);
					var pDocs = paginate(saDocs);
					var joinedDocs = await join(pDocs, paging.join_last); // join_last if set
					var docs = {};
					docs[childName] = pDocs;
					var p = docs.paging = [];
					p.push({});

                    p[0].skip = paging.skip;
                    p[0].limit = paging.limit;
					p[0].filter = paging.filter;
					p[0].sort = paging.sort;
					p[0].groupby = paging.groupby;
					p[0].sum = paging.sum;
					p[0].avg = paging.avg;
					p[0].join_first = paging.join_first;
					p[0].join_last = paging.join_last;


                    docs.pl_first_record_shown = paging.skip + 1;
                    docs.pl_last_record_shown = Math.min(gDocs.length, paging.skip + paging.limit);
                    if (isNaN(docs.pl_last_record_shown)){docs.pl_last_record_shown = gDocs.length;}
                    docs.pl_total_rows = gDocs.length;
					dParent.value = docs;

                    var plRefresh = new CustomEvent("pListRefreshed", {bubbles:true});
                    dParent.dispatchEvent(plRefresh);
				});		 
		   }
		}
	   
	   refresh();
	   
	};
	
	var dbChanges = db.changes({
		  since: 'now',
		  live: true,
		  include_docs: true
	}).on('change', function(change) {

		var type = change.doc.type;
		if (change.deleted){
			type = getDeletedType(change);
		}else{
			runChangeHandlers(type,change);
		}

	}).on('error', function (err) {
		console.log(err);
	});

	function runChangeHandlers(type, change){
		var keys = [];
		if (dbChangeHandlers[type]){
			keys = Object.keys(dbChangeHandlers[type])
		}
		var keyLen = keys.length;
		for (var i=0; i<keyLen; i++){
			var key = keys[i];
			dbChangeHandlers[type][key](change);
		}
	}

	function getDeletedType(change){
		return db.get(change.id, {revs:true,  open_revs: 'all'}).then(function(revs){
			var id = revs[0].ok._id;
			var prevRev = revs[0].ok._revisions.ids[1];
			var revNo = revs[0].ok._revisions.start - 1;
			var revStr = revNo + "-" + prevRev;
			return db.get(id, {rev:revStr}).then(function(doc){
				runChangeHandlers(doc.type, change);
			});
		});
	}
})();





////////////////////////////////////////////////////////////////////////
////////////////// UTILITY EXTENSIONS ///////////////////
////////////////////////////////////////////////////////////////////////

Array.prototype.get = function(obj){

    // this function searches an array of objects
    // and returns the first object that matches 
    // the keys/values inside the search Object
    // Syntax: arr.get({id: "123"});

    var len = this.length;
    var keys = Object.keys(obj);
    var keyLen = keys.length;

    for (var i=0; i<len; i++){
        if( match_keys(this[i], obj) ){return this[i];}
    }

    return {};

    function match_keys(arr, obj){
        for (var x=0; x<keyLen; x++){
            var key = keys[x];
            if (arr[key] == obj[key]){ 
                continue; 
            }else{
                return false;
            }
        }
        return true;
    }
}

Array.prototype.getAll = function(obj){

    // this function searches an array of objects
    // and returns all objects that match
    // the keys/values inside the search Object
    // Syntax: arr.get({id: "123"});

    var len = this.length;
    var keys = Object.keys(obj);
    var keyLen = keys.length;
    var objs = [];

    for (var i=0; i<len; i++){
        if( match_keys(this[i], obj) ){objs.push(this[i]);}
    }

    return objs;

    function match_keys(arr, obj){
        for (var x=0; x<keyLen; x++){
            var key = keys[x];
            if (arr[key] == obj[key]){ 
                continue; 
            }else{
                return false;
            }
        }
        return true;
    }
}

Array.prototype.delete = function(obj){

    // this function finds an object in an array of objects
    // that matches the keys/values in the search object 
    // and performs an Array slice operation on that index
    // Syntax: arr.delete({id: "123"});

    var len = this.length;
    var keys = Object.keys(obj);
    var keyLen = keys.length;

    for (var i=0; i<len; i++){
        if( match_keys(this[i], obj) ){return this.splice(i,1);}
    }

    return {};

    function match_keys(arr, obj){
        for (var x=0; x<keyLen; x++){
            var key = keys[x];
            if (arr[key] == obj[key]){ 
                continue; 
            }else{
                return false;
            }
        }
        return true;
    }
}