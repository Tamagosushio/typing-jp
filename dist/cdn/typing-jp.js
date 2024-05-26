(()=>{var e={439:e=>{"use strict";e.exports={ZE:{start:65281,end:65374},HE:{start:33,end:126},HG:{start:12353,end:12438},KK:{start:12449,end:12534},HS:{regexp:/(\s|\u00A0)/g,list:[" "," "]},ZS:{regexp:/(\u3000)/g,list:["　","　"]},HK:{regexp:/([\uff66-\uff9c]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])/g,list:["｡","｢","｣","､","･","ｦ","ｧ","ｨ","ｩ","ｪ","ｫ","ｬ","ｭ","ｮ","ｯ","ｰ","ｱ","ｲ","ｳ","ｴ","ｵ","ｶ","ｷ","ｸ","ｹ","ｺ","ｻ","ｼ","ｽ","ｾ","ｿ","ﾀ","ﾁ","ﾂ","ﾃ","ﾄ","ﾅ","ﾆ","ﾇ","ﾈ","ﾉ","ﾊ","ﾋ","ﾌ","ﾍ","ﾎ","ﾏ","ﾐ","ﾑ","ﾒ","ﾓ","ﾔ","ﾕ","ﾖ","ﾗ","ﾘ","ﾙ","ﾚ","ﾛ","ﾜ","ﾝ","ﾞ","ﾟ","ｦﾞ","ｳﾞ","ｶﾞ","ｷﾞ","ｸﾞ","ｹﾞ","ｺﾞ","ｻﾞ","ｼﾞ","ｽﾞ","ｾﾞ","ｿﾞ","ﾀﾞ","ﾁﾞ","ﾂﾞ","ﾃﾞ","ﾄﾞ","ﾊﾞ","ﾊﾟ","ﾋﾞ","ﾋﾟ","ﾌﾞ","ﾌﾟ","ﾍﾞ","ﾍﾟ","ﾎﾞ","ﾎﾟ","ﾜﾞ"]},ZK:{regexp:/([\u3001-\u30fc])/g,list:["。","「","」","、","・","ヲ","ァ","ィ","ゥ","ェ","ォ","ャ","ュ","ョ","ッ","ー","ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ン","゛","゜","ヺ","ヴ","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","パ","ビ","ピ","ブ","プ","ベ","ペ","ボ","ポ","ヷ"]}}},547:e=>{"use strict";function t(e,t){this.origin=t,this._result=this.origin,this._mojisyu=e}t.prototype.toString=function(){return this._result},t.prototype.convert=function(e,t){var n=this._mojisyu[e],r=this._mojisyu[t];return"range"===this._mojisyuType(n)&&"range"===this._mojisyuType(r)?(this._result=this._rangeConvert(n,r),this):"regexp"===this._mojisyuType(n)&&"regexp"===this._mojisyuType(r)?(this._result=this._regexpConvert(n,r),this):void 0},t.prototype._rangeConvert=function(e,t){var n=t.start-e.start;return this._rangeMap(e,(function(e,t,r){return t?String.fromCharCode(r+n):e})).join("")},t.prototype._regexpConvert=function(e,t){return this._regexpMap(e,(function(e,n,r){return n?t.list[r]:e}))},t.prototype.filter=function(e){var t=this._mojisyu[e];return"range"===this._mojisyuType(t)?(this._result=this._rangeFilter(t),this):"regexp"===this._mojisyuType(t)?(this._result=this._regexpFilter(t),this):void 0},t.prototype._rangeFilter=function(e){return this._rangeMap(e,(function(e,t){return t?e:""})).join("")},t.prototype._regexpFilter=function(e){var t=[];return this._regexpMap(e,(function(e,n){n&&t.push(e)})),t.join("")},t.prototype.reject=function(e){var t=this._mojisyu[e];return"range"===this._mojisyuType(t)?(this._result=this._rangeReject(t),this):"regexp"===this._mojisyuType(t)?(this._result=this._regexpReject(t),this):void 0},t.prototype._rangeReject=function(e){return this._rangeMap(e,(function(e,t){return t?"":e})).join("")},t.prototype._regexpReject=function(e){var t=this._regexpFilter(e);return this._result.replace(t,"")},t.prototype._mojisyuType=function(e){return e.start&&e.end?"range":e.regexp&&e.list?"regexp":""},t.prototype._rangeMap=function(e,t){return this._result.split("").map((function(n){var r=n.charCodeAt(0),o=r>=e.start&&r<=e.end;return t.call(this,n,o,r)}))},t.prototype._regexpMap=function(e,t){return this._result.replace(e.regexp,(function(n){var r=e.list.indexOf(n),o=r>=0;return t.call(this,n,o,r)}))},e.exports=t},624:(e,t,n)=>{"use strict";var r=n(547),o=n(229),a=n(439),c=n(228),u=c({},a);o.call(r.prototype);var i=function(e){return new r(u,e)};i.addMojisyu=function(e){u=c(u,e)},e.exports=i},229:e=>{e.exports=function(){return this.trim=function(){return this._result=this._result.trim(),this},this.match=function(e){var t=this._result.match(e);return t&&e?(this._result=t.toString(),this):this},this.replace=function(e,t){return this._result=this._result.replace(e,t),this},this}},228:e=>{"use strict";var t=Object.prototype.propertyIsEnumerable;function n(e){var n=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e))),n.filter((function(n){return t.call(e,n)}))}e.exports=Object.assign||function(e,t){for(var r,o,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){r=arguments[c],o=n(Object(r));for(var u=0;u<o.length;u++)a[o[u]]=r[o[u]]}return a}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(624),t=n.n(e),r="unmatch",o="incomplete",a="complete",c="partially_complete";function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s(r.key),r)}}function s(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}var f=function(){return e=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.nextChar=null,this.expectRomanArray=n,this.nextExpectRomanIndex=0,this.divisionCharChain=null,this.ignoreCapsLock=r,this.name.length>1&&(this.divisionCharChain=function(e){for(var t=null,n=null,r=0;r<e.length;r++){var o=L(e[r]);0===r&&(t=o),null!==n&&(n.nextChar=o),n=o}return t}(this.name))},t=[{key:"expectRoman",value:function(){return this.expectRomanArray.length>0?this.expectRomanArray[0]:""}},{key:"inputRoman",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this.ignoreCapsLock?e.toLowerCase():e,n=this.inputThisCharRoman(t);return n===r&&null!==this.divisionCharChain?this.inputDivisionCharRoman(t):n}},{key:"inputThisCharRoman",value:function(e){var t=this,n=this.expectRomanArray.filter((function(n){return e===n[t.nextExpectRomanIndex]}));return 0===n.length?r:(this.expectRomanArray=n,this.nextExpectRomanIndex+=1,this.nextExpectRomanIndex<this.expectRomanArray[0].length?o:a)}},{key:"inputDivisionCharRoman",value:function(e){for(var t=this.divisionCharChain,n=0;n<this.nextExpectRomanIndex;n++)if(t.inputRoman(this.expectRomanArray[0][n])===r)return t.nextExpectRomanIndex=0,r;var a=t.inputRoman(e);if(a===r)return r;for(var c=t.nextChar;;){if(null===c.nextChar){c.nextChar=this.nextChar;break}c=c.nextChar}return a===o?t:t.nextChar}}],t&&i(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function l(e,t,n){return t=w(t),function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,n||[],w(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}var b=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,t,[e,n,!0])}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),n=t,Object.defineProperty(n,"prototype",{writable:!1}),n;var n}(f);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function d(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}function x(e,t,n){return t=O(t),function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,g()?Reflect.construct(t,n||[],O(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}var R=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=x(this,t,["っ",["xtu","xtsu","ltu","ltsu"]])).regex=/^(?=[a-z])(?!(a|i|u|e|o|n)).$/,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(t,e),n=t,o=[{key:"expectRoman",value:function(){if(null===this.nextChar||"っ"===this.nextChar.name)return j(O(t.prototype),"expectRoman",this).call(this);if(this.nextExpectRomanIndex>0)return this.expectRomanArray[0];if(/^[a-zA-Z]$/.test(this.nextChar.name))return j(O(t.prototype),"expectRoman",this).call(this);var e=this.nextChar.expectRoman()[0];return this.regex.test(e)?e:j(O(t.prototype),"expectRoman",this).call(this)}},{key:"inputRoman",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this.ignoreCapsLock?e.toLowerCase():e,o=j(O(t.prototype),"inputRoman",this).call(this,n);return this.nextExpectRomanIndex>0?o:null==this.nextChar?r:this.regex.test(n)?/^[a-zA-Z]$/.test(this.nextChar.name)||this.nextChar.inputRoman(n)===r?r:(this.nextChar.nextExpectRomanIndex=0,null!==this.nextChar.divisionCharChain&&(this.nextChar.divisionCharChain.inputRoman(n),this.nextChar.divisionCharChain.nextExpectRomanIndex=0),c):r}}],o&&v(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o}(b);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}function P(e){var t=function(e,t){if("object"!=C(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==C(t)?t:t+""}function E(e,t,n){return t=M(t),function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,k()?Reflect.construct(t,n||[],M(e).constructor):t.apply(e,n))}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}var q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,t,["ん",["nn","n'","xn"]])}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(t,e),n=t,c=[{key:"expectRoman",value:function(){if(null===this.nextChar)return T(M(t.prototype),"expectRoman",this).call(this);var e=this.nextChar.expectRoman()[0];return/^(n|'|a|i|u|e|o|y)$/.test(e)?T(M(t.prototype),"expectRoman",this).call(this):this.nextExpectRomanIndex>1||1===this.nextExpectRomanIndex&&"x"===this.expectRomanArray[0][0]?this.expectRomanArray[0]:"n"}},{key:"inputRoman",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this.ignoreCapsLock?e.toLowerCase():e,c=T(M(t.prototype),"inputRoman",this).call(this,n);if(c!==r||0===this.nextExpectRomanIndex||null===this.nextChar)return c;if(/^(a|i|u|e|o|y)$/.test(this.nextChar.expectRoman()[0]))return r;switch(this.nextChar.inputRoman(n)){case r:return r;case o:return this.nextChar;case a:return null===this.nextChar.nextChar?a:this.nextChar.nextChar}}}],c&&S(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,c}(b);function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function A(e){var t="function"==typeof Map?new Map:void 0;return A=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return function(e,t,n){if(B())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var o=new(e.bind.apply(e,r));return n&&D(o,n.prototype),o}(e,arguments,K(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),D(n,e)},A(e)}function B(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(B=function(){return!!e})()}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var F=function(e){function t(){var e,n,r,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Charの生成に失敗しました";return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=this,r=t,o=[a],r=K(r),e=function(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(n,B()?Reflect.construct(r,o||[],K(n).constructor):r.apply(n,o))).name="CharCreationError",e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(t,e),n=t,Object.defineProperty(n,"prototype",{writable:!1}),n;var n}(A(Error));function L(e){switch(e){case"あ":return new b(e,["a"]);case"い":return new b(e,["i","yi"]);case"う":return new b(e,["u","wu","whu"]);case"え":return new b(e,["e"]);case"お":return new b(e,["o"]);case"いぇ":return new b(e,["ye"]);case"うぁ":return new b(e,["wha"]);case"うぃ":return new b(e,["wi","whi"]);case"うぇ":return new b(e,["we","whe"]);case"うぉ":return new b(e,["who"]);case"ゐ":return new b(e,["wi"]);case"ゑ":return new b(e,["we"]);case"ぁ":return new b(e,["xa","la"]);case"ぃ":return new b(e,["xi","li","xyi","lyi"]);case"ぅ":return new b(e,["xu","lu"]);case"ぇ":return new b(e,["xe","le","xye","lye"]);case"ぉ":return new b(e,["xo","lo"]);case"か":return new b(e,["ka","ca"]);case"き":return new b(e,["ki"]);case"く":return new b(e,["ku","cu","qu"]);case"け":return new b(e,["ke"]);case"こ":return new b(e,["ko","co"]);case"きゃ":return new b(e,["kya"]);case"きぃ":return new b(e,["kyi"]);case"きゅ":return new b(e,["kyu"]);case"きぇ":return new b(e,["kye"]);case"きょ":return new b(e,["kyo"]);case"くゃ":return new b(e,["qya"]);case"くゅ":return new b(e,["qyu"]);case"くょ":return new b(e,["qyo"]);case"くぁ":return new b(e,["qa","qwa","kwa"]);case"くぃ":return new b(e,["qi","qwi","qyi"]);case"くぅ":return new b(e,["qwu"]);case"くぇ":return new b(e,["qe","qwe","qye"]);case"くぉ":return new b(e,["qo","qwo"]);case"が":return new b(e,["ga"]);case"ぎ":return new b(e,["gi"]);case"ぐ":return new b(e,["gu"]);case"げ":return new b(e,["ge"]);case"ご":return new b(e,["go"]);case"ぎゃ":return new b(e,["gya"]);case"ぎぃ":return new b(e,["gyi"]);case"ぎゅ":return new b(e,["gyu"]);case"ぎぇ":return new b(e,["gye"]);case"ぎょ":return new b(e,["gyo"]);case"ぐぁ":return new b(e,["gwa"]);case"ぐぃ":return new b(e,["gwi"]);case"ぐぅ":return new b(e,["gwu"]);case"ぐぇ":return new b(e,["gwe"]);case"ぐぉ":return new b(e,["gwo"]);case"ゕ":return new b(e,["xka","lka"]);case"ゖ":return new b(e,["xke","lke"]);case"さ":return new b(e,["sa"]);case"し":return new b(e,["si","ci","shi"]);case"す":return new b(e,["su"]);case"せ":return new b(e,["se","ce"]);case"そ":return new b(e,["so"]);case"しゃ":return new b(e,["sya","sha"]);case"しぃ":return new b(e,["syi"]);case"しゅ":return new b(e,["syu","shu"]);case"しぇ":return new b(e,["sye","she"]);case"しょ":return new b(e,["syo","sho"]);case"すぁ":return new b(e,["swa"]);case"すぃ":return new b(e,["swi"]);case"すぅ":return new b(e,["swu"]);case"すぇ":return new b(e,["swe"]);case"すぉ":return new b(e,["swo"]);case"ざ":return new b(e,["za"]);case"じ":return new b(e,["zi","ji"]);case"ず":return new b(e,["zu"]);case"ぜ":return new b(e,["ze"]);case"ぞ":return new b(e,["zo"]);case"じゃ":return new b(e,["zya","ja","jya"]);case"じぃ":return new b(e,["zyi","jyi"]);case"じゅ":return new b(e,["zyu","ju","jyu"]);case"じぇ":return new b(e,["zye","je","jye"]);case"じょ":return new b(e,["zyo","jo","jyo"]);case"た":return new b(e,["ta"]);case"ち":return new b(e,["ti","chi"]);case"つ":return new b(e,["tu","tsu"]);case"て":return new b(e,["te"]);case"と":return new b(e,["to"]);case"ちゃ":return new b(e,["tya","cha","cya"]);case"ちぃ":return new b(e,["tyi","cyi"]);case"ちゅ":return new b(e,["tyu","chu","cyu"]);case"ちぇ":return new b(e,["tye","che","cye"]);case"ちょ":return new b(e,["tyo","cho","cyo"]);case"つぁ":return new b(e,["tsa"]);case"つぃ":return new b(e,["tsi"]);case"つぇ":return new b(e,["tse"]);case"つぉ":return new b(e,["tso"]);case"てゃ":return new b(e,["tha"]);case"てぃ":return new b(e,["thi"]);case"てゅ":return new b(e,["thu"]);case"てぇ":return new b(e,["the"]);case"てょ":return new b(e,["tho"]);case"とぁ":return new b(e,["twa"]);case"とぃ":return new b(e,["twi"]);case"とぅ":return new b(e,["twu"]);case"とぇ":return new b(e,["twe"]);case"とぉ":return new b(e,["two"]);case"だ":return new b(e,["da"]);case"ぢ":return new b(e,["di"]);case"づ":return new b(e,["du"]);case"で":return new b(e,["de"]);case"ど":return new b(e,["do"]);case"ぢゃ":return new b(e,["dya"]);case"ぢぃ":return new b(e,["dyi"]);case"ぢゅ":return new b(e,["dyu"]);case"ぢぇ":return new b(e,["dye"]);case"ぢょ":return new b(e,["dyo"]);case"でゃ":return new b(e,["dha"]);case"でぃ":return new b(e,["dhi"]);case"でゅ":return new b(e,["dhu"]);case"でぇ":return new b(e,["dhe"]);case"でょ":return new b(e,["dho"]);case"どぁ":return new b(e,["dwa"]);case"どぃ":return new b(e,["dwi"]);case"どぅ":return new b(e,["dwu"]);case"どぇ":return new b(e,["dwe"]);case"どぉ":return new b(e,["dwo"]);case"っ":return new R;case"な":return new b(e,["na"]);case"に":return new b(e,["ni"]);case"ぬ":return new b(e,["nu"]);case"ね":return new b(e,["ne"]);case"の":return new b(e,["no"]);case"にゃ":return new b(e,["nya"]);case"にぃ":return new b(e,["nyi"]);case"にゅ":return new b(e,["nyu"]);case"にぇ":return new b(e,["nye"]);case"にょ":return new b(e,["nyo"]);case"は":return new b(e,["ha"]);case"ひ":return new b(e,["hi"]);case"ふ":return new b(e,["hu","fu"]);case"へ":return new b(e,["he"]);case"ほ":return new b(e,["ho"]);case"ひゃ":return new b(e,["hya"]);case"ひぃ":return new b(e,["hyi"]);case"ひゅ":return new b(e,["hyu"]);case"ひぇ":return new b(e,["hye"]);case"ひょ":return new b(e,["hyo"]);case"ふぁ":return new b(e,["fa","fwa"]);case"ふぃ":return new b(e,["fi","fwi","fyi"]);case"ふぅ":return new b(e,["fwu"]);case"ふぇ":return new b(e,["fe","fwe","fye"]);case"ふぉ":return new b(e,["fo","fwo"]);case"ふゃ":return new b(e,["fya"]);case"ふゅ":return new b(e,["fyu"]);case"ふょ":return new b(e,["fyo"]);case"ば":return new b(e,["ba"]);case"び":return new b(e,["bi"]);case"ぶ":return new b(e,["bu"]);case"べ":return new b(e,["be"]);case"ぼ":return new b(e,["bo"]);case"びゃ":return new b(e,["bya"]);case"びぃ":return new b(e,["byi"]);case"びゅ":return new b(e,["byu"]);case"びぇ":return new b(e,["bye"]);case"びょ":return new b(e,["byo"]);case"ゔぁ":return new b(e,["va"]);case"ゔぃ":return new b(e,["vi","vyi"]);case"ゔ":return new b(e,["vu"]);case"ゔぇ":return new b(e,["ve","vye"]);case"ゔぉ":return new b(e,["vo"]);case"ゔゃ":return new b(e,["vya"]);case"ゔゅ":return new b(e,["vyu"]);case"ゔょ":return new b(e,["vyo"]);case"ぱ":return new b(e,["pa"]);case"ぴ":return new b(e,["pi"]);case"ぷ":return new b(e,["pu"]);case"ぺ":return new b(e,["pe"]);case"ぽ":return new b(e,["po"]);case"ぴゃ":return new b(e,["pya"]);case"ぴぃ":return new b(e,["pyi"]);case"ぴゅ":return new b(e,["pyu"]);case"ぴぇ":return new b(e,["pye"]);case"ぴょ":return new b(e,["pyo"]);case"ま":return new b(e,["ma"]);case"み":return new b(e,["mi"]);case"む":return new b(e,["mu"]);case"め":return new b(e,["me"]);case"も":return new b(e,["mo"]);case"みゃ":return new b(e,["mya"]);case"みぃ":return new b(e,["myi"]);case"みゅ":return new b(e,["myu"]);case"みぇ":return new b(e,["mye"]);case"みょ":return new b(e,["myo"]);case"や":return new b(e,["ya"]);case"ゆ":return new b(e,["yu"]);case"よ":return new b(e,["yo"]);case"ゃ":return new b(e,["xya","lya"]);case"ゅ":return new b(e,["xyu","lyu"]);case"ょ":return new b(e,["xyo","lyo"]);case"ら":return new b(e,["ra"]);case"り":return new b(e,["ri"]);case"る":return new b(e,["ru"]);case"れ":return new b(e,["re"]);case"ろ":return new b(e,["ro"]);case"りゃ":return new b(e,["rya"]);case"りぃ":return new b(e,["ryi"]);case"りゅ":return new b(e,["ryu"]);case"りぇ":return new b(e,["rye"]);case"りょ":return new b(e,["ryo"]);case"わ":return new b(e,["wa"]);case"を":return new b(e,["wo"]);case"ん":return new q;case"ゎ":return new b(e,["xwa","lwa"]);case"a":case"ａ":return new f(e,["a"]);case"b":case"ｂ":return new f(e,["b"]);case"c":case"ｃ":return new f(e,["c"]);case"d":case"ｄ":return new f(e,["d"]);case"e":case"ｅ":return new f(e,["e"]);case"f":case"ｆ":return new f(e,["f"]);case"g":case"ｇ":return new f(e,["g"]);case"h":case"ｈ":return new f(e,["h"]);case"i":case"ｉ":return new f(e,["i"]);case"j":case"ｊ":return new f(e,["j"]);case"k":case"ｋ":return new f(e,["k"]);case"l":case"ｌ":return new f(e,["l"]);case"m":case"ｍ":return new f(e,["m"]);case"n":case"ｎ":return new f(e,["n"]);case"o":case"ｏ":return new f(e,["o"]);case"p":case"ｐ":return new f(e,["p"]);case"q":case"ｑ":return new f(e,["q"]);case"r":case"ｒ":return new f(e,["r"]);case"s":case"ｓ":return new f(e,["s"]);case"t":case"ｔ":return new f(e,["t"]);case"u":case"ｕ":return new f(e,["u"]);case"v":case"ｖ":return new f(e,["v"]);case"w":case"ｗ":return new f(e,["w"]);case"x":case"ｘ":return new f(e,["x"]);case"y":case"ｙ":return new f(e,["y"]);case"z":case"ｚ":return new f(e,["z"]);case"A":case"Ａ":return new f(e,["A"]);case"B":case"Ｂ":return new f(e,["B"]);case"C":case"Ｃ":return new f(e,["C"]);case"D":case"Ｄ":return new f(e,["D"]);case"E":case"Ｅ":return new f(e,["E"]);case"F":case"Ｆ":return new f(e,["F"]);case"G":case"Ｇ":return new f(e,["G"]);case"H":case"Ｈ":return new f(e,["H"]);case"I":case"Ｉ":return new f(e,["I"]);case"J":case"Ｊ":return new f(e,["J"]);case"K":case"Ｋ":return new f(e,["K"]);case"L":case"Ｌ":return new f(e,["L"]);case"M":case"Ｍ":return new f(e,["M"]);case"N":case"Ｎ":return new f(e,["N"]);case"O":case"Ｏ":return new f(e,["O"]);case"P":case"Ｐ":return new f(e,["P"]);case"Q":case"Ｑ":return new f(e,["Q"]);case"R":case"Ｒ":return new f(e,["R"]);case"S":case"Ｓ":return new f(e,["S"]);case"T":case"Ｔ":return new f(e,["T"]);case"U":case"Ｕ":return new f(e,["U"]);case"V":case"Ｖ":return new f(e,["V"]);case"W":case"Ｗ":return new f(e,["W"]);case"X":case"Ｘ":return new f(e,["X"]);case"Y":case"Ｙ":return new f(e,["Y"]);case"Z":case"Ｚ":return new f(e,["Z"]);case"0":case"０":return new f(e,["0"]);case"1":case"１":return new f(e,["1"]);case"2":case"２":return new f(e,["2"]);case"3":case"３":return new f(e,["3"]);case"4":case"４":return new f(e,["4"]);case"5":case"５":return new f(e,["5"]);case"6":case"６":return new f(e,["6"]);case"7":case"７":return new f(e,["7"]);case"8":case"８":return new f(e,["8"]);case"9":case"９":return new f(e,["9"]);case" ":case"　":return new f(e,[" "]);case"!":case"！":return new f(e,["!"]);case'"':case"”":return new f(e,['"']);case"#":case"＃":return new f(e,["#"]);case"$":case"＄":return new f(e,["$"]);case"%":case"％":return new f(e,["%"]);case"&":case"＆":return new f(e,["&"]);case"'":case"’":return new f(e,["'"]);case"(":case"（":return new f(e,["("]);case")":case"）":return new f(e,[")"]);case"*":case"＊":return new f(e,["*"]);case"+":case"＋":return new f(e,["+"]);case",":case"、":return new f(e,[","]);case"-":case"ー":return new f(e,["-"]);case".":case"。":return new f(e,["."]);case"/":case"・":return new f(e,["/"]);case":":case"：":return new f(e,[":"]);case";":case"；":return new f(e,[";"]);case"<":case"＜":return new f(e,["<"]);case"=":case"＝":return new f(e,["="]);case">":case"＞":return new f(e,[">"]);case"?":case"？":return new f(e,["?"]);case"@":case"＠":return new f(e,["@"]);case"[":case"「":return new f(e,["["]);case"\\":case"￥":return new f(e,["\\"]);case"]":case"」":return new f(e,["]"]);case"^":case"＾":return new f(e,["^"]);case"_":case"＿":return new f(e,["_"]);case"`":case"‘":return new f(e,["`"]);case"{":case"｛":return new f(e,["{"]);case"|":case"｜":return new f(e,["|"]);case"}":case"｝":return new f(e,["}"]);case"~":case"～":return new f(e,["~"]);default:throw new F("Charの生成に失敗しました：name = ".concat(e))}}function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function $(e){var t="function"==typeof Map?new Map:void 0;return $=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return function(e,t,n){if(H())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var o=new(e.bind.apply(e,r));return n&&Z(o,n.prototype),o}(e,arguments,G(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Z(n,e)},$(e)}function H(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(H=function(){return!!e})()}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Z(e,t)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var N=function(e){function t(){var e,n,r,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"テキストが空です";return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=this,r=t,o=[a],r=G(r),e=function(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(n,H()?Reflect.construct(r,o||[],G(n).constructor):r.apply(n,o))).name="EmptyTextError",e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}(t,e),n=t,Object.defineProperty(n,"prototype",{writable:!1}),n;var n}($(Error));function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function J(e){var t="function"==typeof Map?new Map:void 0;return J=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return function(e,t,n){if(Q())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var o=new(e.bind.apply(e,r));return n&&U(o,n.prototype),o}(e,arguments,X(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),U(n,e)},J(e)}function Q(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Q=function(){return!!e})()}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var Y=function(e){function t(){var e,n,r,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"入力すべき文字がありません";return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=this,r=t,o=[a],r=X(r),e=function(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(n,Q()?Reflect.construct(r,o||[],X(n).constructor):r.apply(n,o))).name="NoRemainingInputError",e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(t,e),n=t,Object.defineProperty(n,"prototype",{writable:!1}),n;var n}(J(Error)),ee="incomplete";function te(e){return te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te(e)}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,re(r.key),r)}}function re(e){var t=function(e,t){if("object"!=te(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=te(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==te(t)?t:t+""}function oe(e,t,n){ae(e,t),t.set(e,n)}function ae(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function ce(e,t,n){return e.set(ie(e,t),n),n}function ue(e,t){return e.get(ie(e,t))}function ie(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}var se=new WeakMap,fe=new WeakMap,pe=new WeakMap,le=new WeakMap,ye=new WeakMap,we=new WeakMap,he=new WeakSet,be=function(){return e=function e(n){var r,o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ae(this,r=he),r.add(this),oe(this,se,""),oe(this,fe,""),oe(this,pe,""),oe(this,le,""),oe(this,ye,""),oe(this,we,!1);var a=o?n.replace(/\s|　/g,""):n.replace(/\t\f\r\n/g,"");if(""===a)throw new N;ce(se,this,t()(a).convert("HK","ZK").convert("KK","HG").toString()),this.char=function(e){if(1===e.length)return L(e[0]);for(var t=null,n=null,r=!0,o=0;o<e.length;o++){var a=e[o],c=null,u=null;if(o!==e.length-1){var i=e[o+1];/^(ぁ|ぃ|ぅ|ぇ|ぉ|ゃ|ゅ|ょ)$/.test(i)&&(c=a+i)}if(null===c)u=L(a);else try{u=L(c),o++}catch(e){u=L(a)}r&&(r=!1,t=u),null!==n&&(n.nextChar=u),n=u}return t}(ue(se,this)),ce(ye,this,"");for(var c=this.char;null!==c;)ce(ye,this,ue(ye,this)+c.expectRoman()),c=c.nextChar;ce(pe,this,ue(ye,this))},n=[{key:"text",get:function(){return ue(se,this)}},{key:"completedText",get:function(){return ue(fe,this)}},{key:"remainingText",get:function(){return this.text.substring(ue(fe,this).length)}},{key:"roman",get:function(){return ue(pe,this)}},{key:"completedRoman",get:function(){return ue(le,this)}},{key:"remainingRoman",get:function(){return ue(ye,this)}},{key:"inputKey",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null===this.char)throw new Y;var n=this.char.expectRoman().length,u=this.char.inputRoman(e,t);switch(u){case r:return"unmatch";case o:return ce(le,this,ue(le,this)+e),ie(he,this,me).call(this,n),ee;case c:ce(we,this,!0),ce(le,this,ue(le,this)+e);var i=this.char;return this.char=this.char.nextChar,ie(he,this,me).call(this,n,i),ee;case a:ue(we,this)&&(ce(fe,this,ue(fe,this)+"っ"),ce(we,this,!1)),ce(fe,this,ue(fe,this)+this.char.name),ce(le,this,ue(le,this)+e);var s=this.char;return this.char=this.char.nextChar,ie(he,this,me).call(this,n,s),""===ue(ye,this)?"complete":ee;default:ce(le,this,ue(le,this)+e);var f=this.char;return this.char=u,ie(he,this,me).call(this,f),ee}}}],u=[{key:"isValidInputKey",value:function(e){return/^[ -~]$/.test(e)}}],n&&ne(e.prototype,n),u&&ne(e,u),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n,u}();function me(e,t){switch(te(e)){case"number":var n=e,r=void 0===t?this.char:t,o=r.expectRoman();if(n===o.length){if("っ"===r.name&&1===n){var a=L(this.char.name).expectRoman(),c=this.char.expectRoman();if(a[0]!==c[0])return void ce(ye,this,c+ue(ye,this).slice(a.length+1))}return void ce(ye,this,ue(ye,this).slice(1))}var u=n-r.nextExpectRomanIndex+1,i=void 0===t?o.slice(this.char.nextExpectRomanIndex):"";return void ce(ye,this,i+ue(ye,this).slice(u));case"object":var s=e;if("ん"===s.name){if(s.nextChar!==this.char)ce(ye,this,ue(ye,this).slice(1));else{var f=L(this.char.name),p=this.char.expectRoman().slice(1),l=ue(ye,this).slice(f.expectRoman().length);ce(ye,this,p+l)}return}for(var y="",w=ue(ye,this).slice(s.expectRoman().length-s.nextExpectRomanIndex),h=this.char;y+=h.expectRoman(),h.nextChar!==s.nextChar&&(h=h.nextChar).nextChar!==s.nextChar;);return void ce(ye,this,y+w)}}window.TypingText=be})()})();