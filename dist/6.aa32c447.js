(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/pages/home/categorys/index.jsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),c=n("./node_modules/react-redux/es/index.js"),a=n("./src/redux-file/actions-creators.js"),i=(n("./src/pages/home/categorys/index.less"),n("./node_modules/better-scroll/dist/bscroll.esm.js"));function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).apply(this,arguments))}var n,c,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["PureComponent"]),n=t,(c=[{key:"componentDidMount",value:function(){this.props.reqCategoryModule()}},{key:"componentDidUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){var e=document.querySelectorAll(".swiper-wrap");this.myScroll||(this.myScroll=new i.default(document.querySelector(".categorys")),e&&e.forEach(function(e){new i.default(e,{scrollX:!0,scrollY:!1})})),this.myScroll.refresh()}},{key:"render",value:function(){var e=this.props.categorys;return this.myScroll&&this.myScroll.refresh(),o.a.createElement("div",{className:"categorys"},o.a.createElement("div",null,e.map(function(e,t){return o.a.createElement("div",{key:t,className:"category-container"},o.a.createElement("img",{src:e.titlePicUrl,alt:""}),o.a.createElement("div",{className:"swiper-wrap"},o.a.createElement("div",{className:"subList"},e.itemList.map(function(e){return o.a.createElement("div",{className:"itemList",key:e.id},o.a.createElement("img",{src:e.scenePicUrl,height:200,offset:150}),o.a.createElement("span",null,e.name))}))))})))}}])&&l(n.prototype,c),a&&l(n,a),t}();t.default=Object(c.connect)(function(e){return{categorys:e.CategoryModule}},function(e){return{reqCategoryModule:function(){var t=Object(a.a)();e(t)}}})(y)},"./src/pages/home/categorys/index.less":function(e,t,n){}}]);