(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7947:function(e,t,n){"use strict";n(9713);t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),a=(r=n(617))&&r.__esModule?r:{default:r},i=n(3367),c=n(4287),s=n(7845);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;"name"===l&&i||!p.has(f)?(p.add(f),r[l]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),c=n(8585),s=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),f=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},2740:function(e,t,n){"use strict";n.d(t,{w:function(){return r}});var r={primary:"#2a66f7",darkPrimary:"#0f4cde",background:"#151719",white:"#ffffff",black:"#000000",gray:"#33363a",darkGray:"#222325",lightGray:"#9ba9b4",halfLightGray:"#6a6f82"}},1526:function(e,t,n){"use strict";n.d(t,{Hj:function(){return r},xC:function(){return o},kl:function(){return a},uV:function(){return i},v:function(){return c},at:function(){return s},Rq:function(){return u},T8:function(){return l},WY:function(){return f},om:function(){return d},_I:function(){return p},oQ:function(){return h}});var r="https://discord.gg/qCJXz6P4qw",o="https://www.twitch.tv/techmmunity",a="https://www.youtube.com/channel/UCl322bbCTdwW-eOEO4J0Zxw",i="https://www.facebook.com/techmmunity/",c="https://twitter.com/techmmunity1",s="https://www.linkedin.com/company/71251333/",u="https://nextjs.org/",l="https://nestjs.com/",f="https://nodejs.org/en/about/",d="https://reactjs.org/",p="https://www.typescriptlang.org/",h="https://docker.com/"},1444:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(5893);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(1664),i=n(9583),c=n(1649),s=n(1526),u=n(9163),l=n(2740),f=u.ZP.footer.withConfig({displayName:"styles__Container",componentId:"sc-1e5045h-0"})(["display:flex;align-items:center;justify-content:space-between;margin:2.5rem 2.5rem 4.5rem 2.5rem;@media (max-width:768px){flex-direction:column;}"]),d=u.ZP.div.withConfig({displayName:"styles__RightsReserved",componentId:"sc-1e5045h-1"})(["text-align:center;margin:1rem 0;"]),p=u.ZP.p.withConfig({displayName:"styles__Description",componentId:"sc-1e5045h-2"})(["color:","80;font-size:clamp(14px,1rem + 1vw,1.4rem);"],l.w.lightGray),h=u.ZP.div.withConfig({displayName:"styles__SocialNetworks",componentId:"sc-1e5045h-3"})(["display:flex;align-items:center;justify-content:center;> a{display:flex;align-items:center;justify-content:center;background:",";color:",";font-size:clamp(18px,1rem + 1vw,1.8rem);text-decoration:none;border-radius:50%;padding:0.8rem;margin:0.5rem;}"],l.w.gray,l.w.primary),m=function(){return(0,r.jsxs)(f,{children:[(0,r.jsx)(d,{children:(0,r.jsx)(p,{children:"\xa9 2020 Techmmunity. All rights reserved."})}),(0,r.jsxs)(h,{children:[(0,r.jsx)(a.default,{href:s.Hj,children:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(i.j2d,{})})}),(0,r.jsx)(a.default,{href:s.xC,children:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(i.aWC,{})})}),(0,r.jsx)(a.default,{href:s.kl,children:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(i.V2E,{})})}),(0,r.jsx)(a.default,{href:s.uV,children:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(i.tBk,{})})}),(0,r.jsx)(a.default,{href:s.v,children:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(i.fWC,{})})}),(0,r.jsx)(a.default,{href:s.at,children:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(c.gXb,{})})})]})]})},y=n(7294),g=n(9008),x=!1,v=function(e){var t=e.href,n=(0,y.useRef)(!1),r=(0,y.useState)(!1)[1];return(0,y.useEffect)((function(){n.current||(x=!0,n.current=!0,r(!0))}),[]),(0,y.createElement)(g.default,null,(0,y.createElement)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous","data-next-google-fonts":"preconnect",key:"next-google-fonts__preconnect"}),(0,y.createElement)("link",{rel:"preload",as:"style",href:t,"data-next-google-fonts":"preload",key:"next-google-fonts__preload"}),(0,y.createElement)("link",{href:t,rel:"stylesheet",media:x?"all":"print","data-next-google-fonts":"style",key:"next-google-fonts__style"}),(0,y.createElement)("noscript",null,(0,y.createElement)("link",{href:t,rel:"stylesheet","data-next-google-fonts":"style-no-js",key:"next-google-fonts__style-no-js"})))},w=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"}),(0,r.jsxs)(g.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("title",{children:"\ud83e\uddd1\u200d\ud83d\udcbb | Techmmunity"})]})]})},b=u.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-18efusu-0"})(["position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;"]),j=u.ZP.div.withConfig({displayName:"styles__Content",componentId:"sc-18efusu-1"})(["width:100%;max-width:1128px;"]),_=function(e){var t=e.children;return(0,r.jsx)(b,{children:(0,r.jsx)(j,{children:t})})};function k(){var e,t,n=(e=["\n\t * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n\thtml, body {\n\t\tmin-height: 100%;\n\t}\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    background: ",";\n    color: ",';\n    font-family: "Roboto", Arial, Helvetica, sans-serif;\n    font-size: 1.6rem;\n  }\n\n\t@media (max-width: 768px) {\n    html {\n      font-size: 57.5%;\n    }\n  }\n\n\t@media (max-width: 320px) {\n    html {\n      font-size: 55.5%;\n    }\n  }\n\n\t@media (max-width: 280px) {\n    html {\n      font-size: 52.5%;\n    }\n  }\n'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return k=function(){return n},n}var O=(0,u.vJ)(k(),l.w.background,l.w.white);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{}),(0,r.jsxs)(_,{children:[(0,r.jsx)(t,P({},n)),(0,r.jsx)(m,{})]}),(0,r.jsx)(O,{})]})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1444)}])},9008:function(e,t,n){e.exports=n(7947)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,866,445,351,755],(function(){return t(6363),t(2441)}));var n=e.O();_N_E=n}]);