(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=l,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(i=n(617))&&i.__esModule?i:{default:i},s=n(3367),u=n(4287),d=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,u=m.length;s<u;s++){var d=m[s];if(o.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var f=o.props[d],l=r[d]||new Set;"name"===d&&a||!l.has(f)?(l.add(f),r[d]=l):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:i})}))}function y(e){var t=e.children,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)}y.rewind=function(){};var b=y;t.default=b},617:function(e,t,n){"use strict";var r=n(3115),o=n(2553),i=n(2012),a=(n(450),n(9807)),c=n(7690),s=n(9828);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),f=function(e){a(n,e);var t=u(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},6686:function(e,t,n){"use strict";n.d(t,{w:function(){return a}});var r=n(6265);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=i(i({},{background:"#202124",white1000:"#ffffff",black1000:"#000000",gray50:"#d9e3e4",gray100:"#9ba9b4",gray200:"#6a6f82",gray300:"#a7a7a7",gray500:"#33363a",gray800:"#2b2c2f",discord:"#7289DA",github:"#181717",google:"#4285F4",linkedin:"#0A66C2",stackOverFlow:"#F58025",dribbble:"#EA4C89",behance:"#1769FF"}),{},{primary:"#2a66f7",darkPrimary:"#0f4cde",black800:"#0a0a0a"})},7834:function(e,t,n){"use strict";n.d(t,{g:function(){return r}});var r={discord:"https://discord.gg/qCJXz6P4qw",twitch:"https://www.twitch.tv/techmmunity",youtube:"https://www.youtube.com/channel/UCl322bbCTdwW-eOEO4J0Zxw",facebook:"https://www.facebook.com/techmmunity/",twitter:"https://twitter.com/techmmunity1",linkedin:"https://www.linkedin.com/company/techmmunity/",instagram:"https://www.instagram.com/techmmunity/"}},8598:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(3226),o=n(5893),i=n(6265),a=n(1163),c=n(7294),s=n(9008),u=function(){return(0,o.jsxs)(s.default,{children:[(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("title",{children:"Techmmunity"})]})},d=n(1361),f=n(9583),l=n(5155),p=n(1649),m=n(7834),h=n(9163),y=n(6686),b=h.ZP.footer.withConfig({displayName:"styles__Container",componentId:"dxeisy-0"})(["display:flex;align-items:center;justify-content:space-between;padding:0 2rem;margin-bottom:5.5rem;@media (max-width:810px){flex-direction:column-reverse;}"]),g=h.ZP.p.withConfig({displayName:"styles__Copyright",componentId:"dxeisy-1"})(["text-align:center;color:",";font-size:1.8rem;margin:2rem 0;"],y.w.gray100),w=h.ZP.ul.withConfig({displayName:"styles__SocialNetworks",componentId:"dxeisy-2"})(["display:grid;grid-template:1fr / repeat(7,1fr);align-items:center;justify-content:center;gap:1.2rem;@media (max-width:360px){grid-template:repeat(2,1fr) / repeat(3,1fr);}"]),v=h.ZP.li.withConfig({displayName:"styles__SocialNetwork",componentId:"dxeisy-3"})(["&:last-child{@media (max-width:360px){justify-self:center;grid-column:1 / 4;grid-row:3 / 4;}}> a{display:flex;align-items:center;justify-content:center;background:",";color:",";font-size:2.6rem;border-radius:50%;padding:1rem;transition:background-color 0.2s ease-out,color 0.2s ease-out;&:hover,&:focus,&:active{background:",";color:",";}}"],y.w.gray500,y.w.primary,y.w.primary,y.w.white1000),O=n(9689),j=n(3357),x=[{id:1,name:"Discord",url:m.g.discord,Icon:f.j2d},{id:2,name:"Twitch",url:m.g.twitch,Icon:f.aWC},{id:3,name:"Youtube",url:m.g.youtube,Icon:f.V2E},{id:4,name:"Facebook",url:m.g.facebook,Icon:f.tBk},{id:5,name:"Twitter",url:m.g.twitter,Icon:f.fWC},{id:6,name:"Linkedin",url:m.g.linkedin,Icon:p.gXb},{id:7,name:"Instagram",url:m.g.instagram,Icon:l.Z8w}],k=function(){var e=(0,r.$G)().t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O.x,{}),(0,o.jsxs)(b,{children:[(0,o.jsx)(g,{children:e("footer.copyright")}),(0,o.jsx)(w,{children:x.map((function(e){var t=e.id,n=e.name,r=e.url,i=e.Icon;return(0,o.jsx)(v,{children:(0,o.jsx)(j.r,{href:r,blank:!0,"aria-label":n,children:(0,o.jsx)(i,{})})},t)}))})]})]})},P=h.ZP.div.withConfig({displayName:"styles__Container",componentId:"cderyn-0"})(["position:fixed;left:0;bottom:0;right:0;display:",";align-items:center;justify-content:space-between;background:",";border-radius:5px;padding:1.5rem 2rem;margin:1.5rem 1rem;@media (max-width:380px){flex-direction:column;padding:1.5rem;}"],(function(e){return e.isCookiesAccepted?"none":"flex"}),y.w.black800),_=h.ZP.p.withConfig({displayName:"styles__Description",componentId:"cderyn-1"})(["width:75%;font-size:1.5rem;line-height:2.8rem;@media (max-width:380px){width:100%;margin-bottom:1.5rem;}"]),C=h.ZP.button.withConfig({displayName:"styles__ConfirmationButton",componentId:"cderyn-2"})(["background:",";color:",";border-radius:3px;font-weight:bold;padding:1rem 1.5rem;transition:background-color 0.2s ease-out;cursor:pointer;&:hover,&:focus{background:",";}@media (max-width:380px){align-self:flex-end;}"],y.w.primary,y.w.white1000,y.w.darkPrimary),E=function(){var e=(0,c.useState)(!0),t=e[0],n=e[1],i=(0,r.$G)().t;(0,c.useEffect)((function(){var e=localStorage.getItem("cookies-accepted");n(Boolean(e))}),[]);var a=(0,c.useCallback)((function(){localStorage.setItem("cookies-accepted","true"),n(!0)}),[]);return(0,o.jsxs)(P,{isCookiesAccepted:t,children:[(0,o.jsx)(_,{children:i("cookiesAlertModal.alert")}),(0,o.jsx)(C,{onClick:a,children:i("cookiesAlertModal.confirmation")})]})},M=h.ZP.main.withConfig({displayName:"styles__Container",componentId:"sc-1vdu8w-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;@media (max-width:768px){padding:0 2rem;}"]),S=h.ZP.div.withConfig({displayName:"styles__Content",componentId:"sc-1vdu8w-1"})(["width:100%;max-width:1128px;"]),D=function(e){var t=e.children;return(0,o.jsxs)(M,{children:[(0,o.jsx)(S,{children:t}),(0,o.jsx)(E,{})]})},I=function(e){var t=e.children;return(0,o.jsxs)(D,{children:[t,(0,o.jsx)(k,{})]})},A=function(e){var t=e.children;return(0,o.jsx)(D,{children:t})};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t=function(e){switch(e){case d.Q.ERROR:return A;case d.Q.NONE:return function(e){var t=e.children;return(0,o.jsx)(o.Fragment,{children:t})};case d.Q.DEFAULT:default:return I}}(e.children.type.layout);return(0,o.jsx)(t,R(R({},e),{},{children:e.children}))};function F(){var e,t,n=(e=["\n\t * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n\t\t&:focus-visible {\n\t\t\toutline: 3px solid transparent;\n\t\t \tbox-shadow: 0 0 0 3px ",";\n\t\t}\n  }\n\n\thtml, body {\n\t\tmin-height: 100%;\n\t}\n\n  html {\n    font-size: 62.5%;\n\t\tscroll-behavior: smooth;\n  }\n\n  body {\n    background: ",";\n    color: ",';\n    font-family: "Roboto", Arial, Helvetica, sans-serif;\n    font-size: 1.6rem;\n  }\n\n\ta {\n\t\tcolor: ',";\n\t\ttext-decoration: none;\n\t}\n\n\tbutton, input {\n\t\tfont-size: 1.6rem;\n\t\tborder: transparent;\n\t}\n\n\tul {\n\t\tlist-style: none;\n\t}\n\n\t::-webkit-scrollbar {\n\t\twidth: 1rem;\n\t\theight: 1rem;\n\t}\n\n\t::-webkit-scrollbar-track {\n\t\tbackground: ","50;\n\t\tborder-radius: 4px;\n\t}\n\n\t::-webkit-scrollbar-thumb {\n\t\tbackground: ",";\n\t\tborder-radius: 4px;\n\t}\n\n\t::-webkit-scrollbar-corner {\n\t\tbackground: transparent;\n\t}\n\n\t@media (max-width: 768px) {\n    html {\n      font-size: 57.5%;\n    }\n  }\n\n\t@media (max-width: 320px) {\n    html {\n      font-size: 55.5%;\n    }\n  }\n\n\t@media (max-width: 280px) {\n    html {\n      font-size: 52.5%;\n    }\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return F=function(){return n},n}var z=(0,h.vJ)(F(),y.w.white1000,y.w.background,y.w.white1000,y.w.white1000,y.w.black1000,y.w.gray300);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=(0,r.Jc)((function(e){var t=e.Component,n=e.pageProps;return(0,c.useEffect)((function(){var e=function(e){return function(e){var t={event:"pageview",page:e};return window.dataLayer?window.dataLayer.push(t):window.dataLayer=[t],t}(e)};return a.Router.events.on("routeChangeComplete",e),function(){a.Router.events.off("routeChangeComplete",e)}}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{}),(0,o.jsx)(Z,H(H({},n),{},{children:(0,o.jsx)(t,H({},n))})),(0,o.jsx)(z,{})]})}))},1361:function(e,t,n){"use strict";var r;n.d(t,{Q:function(){return r}}),function(e){e.DEFAULT="DEFAULT",e.ERROR="ERROR",e.NONE="NONE"}(r||(r={}))},9689:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(5893),o=n(9163),i=n(6686),a=o.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-11er50j-0"})(["display:flex;align-items:center;justify-content:center;"]),c=o.ZP.span.withConfig({displayName:"styles__Content",componentId:"sc-11er50j-1"})(["width:100%;height:1px;background:","80;margin:7.5rem 2rem;"],i.w.gray200),s=function(){return(0,r.jsx)(a,{children:(0,r.jsx)(c,{})})}},3357:function(e,t,n){"use strict";n.d(t,{r:function(){return u}});var r=n(6265),o=n(5893),i=n(8347),a=n(1664);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.href,n=e.blank,r=e.disabled,c=e.children,u=(0,i.Z)(e,["href","blank","disabled","children"]);return(0,o.jsx)(a.default,{href:t,children:(0,o.jsx)("a",s(s({style:{pointerEvents:r?"none":"auto"},target:n?"_blank":"_self",rel:"noopener noreferrer"},u),{},{children:c}))})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8598)}])},9008:function(e,t,n){e.exports=n(7947)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},450:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},9828:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},9807:function(e,t,n){var r=n(1914);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7690:function(e,t,n){var r=n(7917),o=n(450);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},3115:function(e,t,n){var r=n(8164),o=n(7381),i=n(3585),a=n(5725);e.exports=function(e){return r(e)||o(e)||i(e)||a()}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,445,866,158,351,479,750],(function(){return t(6363),t(2441)}));var n=e.O();_N_E=n}]);