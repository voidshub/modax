!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.modalx=e():t.modalx=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var i=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1},a=(i(o,r),o.locals?o.locals:{});t.exports=a},function(t,e,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},i=[],o=0;o<t.length;o++){var r=t[o],l=e.base?r[0]+e.base:r[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:_(f,e),references:1}),i.push(d)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function f(t,e,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function m(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p=null,h=0;function _(t,e){var n,i,o;if(e.singleton){var r=h++;n=p||(p=c(e)),i=f.bind(null,n,r,!1),o=f.bind(null,n,r,!0)}else n=c(e),i=m.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var o=s(n[i]);a[o].references--}for(var r=l(t,e),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=r}}}},function(t,e,n){(e=n(3)(!1)).push([t.i,'@keyframes mx-fade-in{from{opacity:0}to{opacity:1}}@keyframes mx-fade-out{from{opacity:1}to{opacity:0}}@keyframes mx-slide-down{from{transform:translateY(-50%) scale(0.9);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}@keyframes mx-slide-up{to{transform:translateY(-50%) scale(0.8);opacity:0}}@keyframes mx-spin{to{transform:rotate(1turn)}}.mx-overlay{position:fixed;left:0;right:0;top:0;bottom:0;z-index:999;background-color:rgba(0,0,0,0.5);text-align:center;vertical-align:middle;overflow:auto;opacity:0;transform-origin:center;animation:mx-fade-in 0.2s forwards ease-out}.mx-overlay::after{content:"";vertical-align:middle;display:inline-block;width:0;height:100%}.mx-toast-wrap{position:fixed;pointer-events:none;top:10px;left:0;right:0;z-index:999}.mx-toast{text-align:center;padding:0.2rem 0;overflow:hidden;animation:mx-slide-down 0.2s}.mx-toast__content{padding:0.5rem 1rem;background:gray;color:#fff;border-radius:2px;display:inline-block;box-sizing:border-box}.mx-toast__btns{list-style:none;margin:0 0 0 0.5rem;padding:0 0 0 0.5rem;display:inline-block;border-left:solid 1px #999}.mx-toast__btns:empty{display:none}.mx-toast__btns li{color:#ccc;pointer-events:all;margin-left:0.1rem;display:inline-block;cursor:pointer;line-height:100%;position:relative;z-index:2;transform:scale(0.85)}.mx-toast__btns li:not(:last-child){margin-right:0.2rem}.mx-toast__btns li:hover{color:#fff}.mx--hide{animation:mx-fade-out 0.2s forwards ease-in !important}.mx--hide .mx{animation:mx-slide-up 0.2s}.mx{background-color:#fff;width:400px;display:inline-flex;border-radius:2px;text-align:left;padding:5px;vertical-align:middle;animation:mx-slide-down 0.1s forwards ease-out;position:relative;flex-direction:column;margin:20px 0;box-shadow:0 5px 10px -2px rgba(0,0,0,0.1);border:solid 1px #e6e6e6}.mx__body{flex-grow:1}.mx__content{padding:1rem}.mx__title{border-bottom:solid 1px #f2f2f2;padding:0.5rem;color:#888}.mx__footer{border-top:solid 1px #f2f2f2;padding:0.5rem;text-align:right}.mx__input{display:block;width:100%;padding:0 0.5em;box-sizing:border-box;transition:all 0.2s;outline:none;border:solid 1px #ccc;border-radius:2px;resize:vertical;padding:0.5rem}.mx__input--multi{font-size:1rem;font-weight:normal;padding:5px 10px;min-height:50px}.mx__input--multi:empty::before{content:attr(data-placeholder)}.mx__input:focus{border-color:#158cba;box-shadow:0 0 4px 1px rgba(21,140,186,0.5)}.mx__btn{background-color:#fff;outline:none;border:none;padding:0.5rem 1rem;cursor:pointer;display:inline-flex;align-items:center;outline:none;margin-left:5px;transition:background 0.2s;border-radius:2px;vertical-align:middle;line-height:100%;font-size:1rem}.mx__btn *{pointer-events:none}.mx__btn .mx__loading{margin-right:5px;width:0.8rem;height:0.8rem;border-color:#fafafa}.mx__btn .mx__loading span::after{border-color:inherit;border-width:1px}.mx__btn.disabled{opacity:0.5;cursor:not-allowed;pointer-events:none}.mx__btn--cancel:hover{background-color:#f2f2f2}.mx__btn--cancel:active{background-color:#e6e6e6}.mx__btn--ok,.mx__btn--danger{background-color:#158cba;color:#fff}.mx__btn--ok .mx__loading,.mx__btn--danger .mx__loading{border-color:#fff}.mx__btn--ok:hover,.mx__btn--danger:hover{background-color:#127ba3}.mx__btn--ok:active,.mx__btn--danger:active{background-color:#106a8c}.mx__btn--danger{background-color:#ff0039}.mx__btn--danger:hover{background-color:#e60033}.mx__btn--danger:active{background-color:#cc002e}.mx__loading-wrapper{display:inline-block;color:#888}.mx__loading-wrapper .mx__loading+span{margin-left:10px;vertical-align:middle}.mx__loading{display:inline-block;width:24px;height:24px;font-size:0;line-height:0;position:relative;box-sizing:border-box;animation:mx-spin 1s infinite linear;vertical-align:middle}.mx__loading span{transform:translateY(50%);position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;box-sizing:border-box}.mx__loading span::after{box-sizing:border-box;display:inline-block;position:absolute;content:"";left:0;top:0;right:0;bottom:0;border-radius:50%;border:solid 2px #888;transform:translateY(-50%)}.mx__page{width:100%;border:0}\n',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([o]).join("\n")}var a,s,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return N}));n(0);function i(t){return"number"==typeof t}function o(t){return"string"==typeof t}function r(t){return"function"==typeof t}function a(t){return"boolean"==typeof t}function s(){return Math.random().toString(36).slice(-8)}const l=["object","string","array","boolean","number","function"];function c(t){const e=t=>{const n=Object.prototype.toString.call(t).slice(8,-1).toLowerCase();if(!l.includes(n))return null;if("object"===n){if(!t)return null;const n={};for(let i in t)"_"!==i[0]&&(n[i]=e(t[i]));return n}return"array"===n?t.map(t=>e(t)):t},n={};for(let i in t)"_"!==i[0]&&(n[i]=e(t[i]));return n}function d(t,e){const n=function(t){return t.replace(/(['"`]).*?\1/g,"").replace(/\.\w+/g,"").match(/\w+/g)}(t);if(!n)return Function.prototype;const i=Array.from(new Set(n)).map(t=>`const {${t}} = ctx`).join(";");return new Function("ctx",`${i};return ${t}`).call(null,e)}function u(t){const e=document.createElement("div");e.innerHTML=t;const n=e.firstElementChild;if(!n)return;const i=(t,e=null)=>{const{dataset:n}=t,o={tag:t.tagName.toLowerCase(),staticClasses:[...t.classList],staticText:t.textContent,children:[],...n,on:{}};t.getAttributeNames().filter(t=>/^on-/.test(t)).forEach(e=>{o.on[e.replace("on-","")]=t.getAttribute(e)});const r=[...t.children];for(let t of r)o.children.push(i(t,o));return o};return i(n)}function f(t,e,n,i){const{_el:r,_index:a,tag:s,text:l,classes:u,staticClasses:m,each:p,key:h,on:_,style:x}=e;if(p)return void function(t,e,n,i){const{each:o}=e,r=o.replace(/\s+/g," ").split(/\sof\s/),a=n[r[1]];let s=a.length;const l=e._eachNodes=e._eachNodes||[];for(l.length=s,l.forEach(t=>{t&&t._el&&t._el.remove()});s--;){const t=a[s],o={[r[0]]:t},u=d(e.key,o),m=l[s];a[s];m&&u===m.key||(l[s]=c(e)),o.__proto__=n;const p=l[s];delete p.each,p._index=s,p[r[0]]=t,f(i._el,p,o,i)}}(0,e,n,i);if(o(e.visible)&&e.visible&&!d(e.visible,n))return;const b=e._el=r||document.createElement(s);for(let t in _){const e=n.handlers[_[t]];"click"===t?b["_on"+t]=e||d(_[t],n):b["on"+t]=e}b._index=a;const g=m.slice();if(u){const t=d(u,n);o(t)&&g.push(...t.split(" ")),v=t,Array.isArray(v)&&g.push(...t.filter(Boolean))}var v;if(x){const t=d(x,n);for(let e in t)b.style[e]=t[e]}if(b.className=g.join(" "),l)b.innerHTML=d(l,n);else{b.innerText=e.staticText.replace(/\s/g,"");for(let t=0,i=e.children.length;t<i;t++)f(b,e.children[t],n,e)}b.parentElement&&b.parentElement===t||t.appendChild(b)}function m(){this._node=u("\n<div class='mx' data-style='{width}'>\n    <div class='mx__title' data-text='title' data-visible='!!title'></div>\n    <div class='mx__body'>\n        <div class='mx__content'>\n            <div data-visible='!!content' data-text='content'></div>\n            <input class='mx__input' data-visible='!!prompt' autofocus='autofocus' on-input='onInputChange'/>\n        </div>\n    </div>\n    <div class='mx__footer'>\n        <div class='mx__btn' \n        on-click='item.click'\n        data-each='item of actions' \n        data-visible='item.visible'\n        data-classes='[\"mx__btn--\"+item.type,item.loading?\"disabled\":\"\"]' \n        data-key='item.key'>\n            <div class='mx__loading' data-visible='!!item.loading'><span/></div>\n            <span data-text='item.text'></span>\n        </div>\n    </div>\n</div>\n")}function p(t){const{_index:e,_onclick:n}=t;if(!r(n))return;let i=void 0===e?null:this._actions[e];const o=n.call(this,this._inputVal);!function(t){return t&&t.constructor===Promise}(o)?a(o)&&o&&C(this._id):(i&&(i.loading=!0),o.then(t=>{a(t)?t&&C(this._id):C(this._id)},()=>{i&&(i.loading=!1)})),this._actions=[...this._actions]}function h(){const{_el:t}=this;if(this["__mx-evt"])return;const e=t=>{t.stopPropagation(),"mx-overlay"===t.target.className&&this._shadowClose?C(this._id):p.call(this,t.target)},n=t=>{t.target===this._el&&(this._isShow?(this._el.remove(),this._isShow=!1,i()):this._isShow=!0)},i=()=>{t.removeEventListener("animationend",n),t.removeEventListener("click",e),delete this["__mx-evt"]};t.addEventListener("animationend",n),t.addEventListener("click",e),Object.defineProperty(this,"__mx-evt",{value:!0,configurable:!0})}document.addEventListener("keydown",t=>{const e=k[k.length-1];27===t.keyCode&&e&&e._escClose&&e._isShow&&C(e._id)});var _={okText:"确定",cancelText:"取消",titleText:"提示",loadingText:"",width:null,height:null,toastTime:3e3,shadowType:"dark",placeholder:"请输入"};function x(t,e,n){const i=this;Reflect.defineProperty(t,e,{configurable:!0,get:()=>n,set(t){if(t===n)return;n=t;const{_isShow:e,_el:o,_data:r,_node:a}=i;e&&f(o,a,r)}})}const b=()=>!0;function g(){const t=this,e={text:"确定",type:"ok",click:b,key:s(),visible:!0},n={text:"取消",type:"cancel",click:b,key:s(),visible:!0},i=this._data={title:_.titleText,content:"",okAction:e,cancelAction:n,prompt:null,width:_.width,height:_.height,actions:[e,n],handlers:{onInputChange(e){t._inputVal=e.target.value}}};for(let t in i)x.call(this,i,t,i[t]);return function(t,e){for(let n in e)Reflect.defineProperty(t,"_"+n,{get:()=>e[n],set(t){e[n]=t}})}(this,i),i}let v=0;function y(t,...e){if(1===e.length&&(a(e[0])?t.visible=e[0]:t[r(e[0])?"click":"text"]=e[0]),2===e.length){if(r(e[0]))throw new Error("invalid parameter");t.text=e[0],t.click=e[1]}return this}class w{constructor(t){this.init(t||"mx-"+v++),this._container=document.body}init(){(this._el=document.createElement("div")).className="mx-overlay",g.call(this),m.call(this),h.call(this),this._id=this._id||arguments[0],this._el.className="mx-overlay",this.escClose(!0),this.shadowClose(!1),this.shadowType(_.shadowType)}shadowType(t){if("dark"===t||"light"===t)return this._shadowType=t,this._toast||(this._el.style.backgroundColor="dark"===t?"rgba(0,0,0,.5)":"rgba(255,255,255,.5)"),this}escClose(t){return this._escClose=!!t,this}shadowClose(t){return this._shadowClose=!!t,this}title(t){return this._title=t,this}content(t){return this._content=t,this}width(t){return this._width=i(t)?t+"px":t,this}height(t){return this._height=i(t)?t+"px":t,this}ok(){return y.call(this,this._okAction,...arguments)}cancel(){return y.call(this,this._cancelAction,...arguments)}action(t){return this._actions=[...this._actions,Object.assign({visible:!0},t)],this}close(){return this._tid&&clearTimeout(this._tid),this._el.classList.add("mx--hide"),this}show(t){return this._container.appendChild(this._el),setTimeout(()=>{f(this._el,this._node,this._data)},0),this}}const k=[];function C(t){if(0===!k.length)return;let e=k.length;if(void 0!==t){const n=o(t)||i(t)?t:t._id;for(;e--;)n===k[e]._id&&(k[e].close(),k.splice(e,1))}else{for(;e--;)k[e].close();k.length=0}}const T={multline:!1,placeholder:"",rows:"6",value:"",type:"text"};let j;const S=w.prototype.plugins={};function E(t,e,n={}){if(S[t])return void console.warn(`plugin ${t} has been installed!`);if(!e)return void console.warn("invalid plugin");const{template:i,data:r,container:a}=n;w.prototype[t]=function(){if(r&&(this._data=r),i&&(this._node=u(i)),a){const t=o(a)?document.querySelector(a):a;t&&(this._container=t)}return e.apply(this,arguments),this}}function N(t){return function(t){const e=new w(t);return k.push(e),e}(t)}E("prompt",(function(t=T){return this._content="",this._prompt=t,this})),E("loading",(function(t,e){this.escClose(!1),this.shadowClose(!1),this.title(e),t&&(this._tid=setTimeout(()=>{C(this._id)},t))}),{template:"\n<div class='mx__loading-wrapper'>\n    <div class='mx__loading'><span/></div>\n    <span data-visible='title' data-text='title'></span>\n</div>\n"}),E("toast",(function(t,e=_.toastTime){return this._title=t,this._el.className="mx-toast",this._el.style.cssText="",this.ok(!1),this.cancel(!1),j||(j=document.createElement("div"),j.className="mx-toast-wrap",document.body.appendChild(j)),this._container=j,e&&(this._tid=setTimeout(()=>{C(this._id)},e)),this}),{template:"<div class='mx-toast__content'>\n    <span data-text='title'></span>\n    <ul class='mx-toast__btns'>\n        <li class='mx-toast__btn' \n        on-click='item.click'\n        data-each='item of actions' \n        data-text='item.text' \n        data-visible='item.visible'\n        data-key='item.key'></li>\n    </ul>\n</div>\n"}),N.close=function(t){C(t)},N.defaults=_,N.plugin=E}]).default}));