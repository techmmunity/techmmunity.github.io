(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6156:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,t,n){var r=n(8),o=n(1506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),a=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,n){"use strict";n(9713);t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),i=(r=n(617))&&r.__esModule?r:{default:r},a=n(3367),s=n(4287),c=n(7845);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var l=f[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var d=o.props[l],p=r[l]||new Set;"name"===l&&a||!p.has(d)?(p.add(d),r[l]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),i=n(3913),a=(n(1506),n(2205)),s=n(8585),c=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),d=function(e){a(n,e);var t=u(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},2740:function(e,t,n){"use strict";n.d(t,{w:function(){return r}});var r={primary:"#2a66f7",darkPrimary:"#0f4cde",background:"#151719",white1000:"#ffffff",black800:"#0a0a0a",black1000:"#000000",gray50:"#d9e3e4",gray100:"#9ba9b4",gray200:"#6a6f82",gray500:"#33363a",gray800:"#222325"}},5295:function(e,t,n){"use strict";n.d(t,{EN:function(){return r}});var r={feedbackSection:{feedbacks:{alessandroRamos:{feedback:'The community is very welcoming, I was always afraid to ask questions in other communities for fear of being "too stupid questions", but at Techmmunity, people understand that nobody is born knowing, answer even the stupid questions without making fun of whoever is asking. It\'s cool to be able to ask questions without fear.'},diegoPinheiro:{feedback:"I have been to several technology communities to seek interaction to share experiences, but none of them met my expectations like the Techmmunity. Organized and with a visionary sense, Techmmunity seeks to integrate people from different areas to produce knowledge and add value in the form of projects, thus enabling better qualifications to obtain a solid position in the job market."},plactronic:{feedback:"If you are looking for a community to learn, be it an exercise of a Bootcamp, college, work or want to understand why your code is returning a NaN or NullPointerException, it arrived on the right server. Always growing and with programmers working in the field for more than 5, 10 years and / or studying at an advanced level the languages they use, Techmmunity is your 127.0.0.1 to increase your networking and progress at the same time."}}},madeForEveryoneSection:{inputs:{dev:{textLabel:"Programming"},graphic:{textLabel:"Graphic Design"},song:{textLabel:"Sound Design"},robotic:{textLabel:"Robotic E."},manager:{textLabel:"Management"}},cards:{dev:{title:"Our programming division",description:"With an increasingly demanding market, professionals who are thinking of working in the area need to know more and more technologies from different areas. With that in mind, we created our programming division, which helps both the beginners and the more experienced to better understand the most used technologies on the market."},graphic:{title:"Our graphic design division",description:"Design is a very creative area, but it requires knowledge of some very specific concepts that are complicated to learn on your own. We created our design division especially for this so that both professionals and aspirants in the field can share their experiences and refine their skills even more."},song:{title:"Our sound design division",description:"When talking about sound design, the first thing that comes to mind is dubbing, however, this universe is much broader and more diverse. Sound design is necessary for almost all projects and we created this division to encourage the growth of the area."},robotic:{title:"Our robotic engineering division",description:"Robotic engineering is a constantly expanding sector, both for industries and the entertainment of the general population. With our technological advancement, the demand for professionals capable of working in this area should grow more and more, so we created our technology sector to prepare professionals for this future demand."},manager:{title:"Our management division",description:"Management encompasses several areas of any company, be it finance, human resources, entrepreneurship, and several others. We created the management division both for people who want to do a better job for the company they are employed in and for people who want to start their own."}}},madeOfSection:{cards:{technology:{title:"Technology",description:"We talk about every technology sector, like programming, graphic design, sound design, robotics, entrepreneurship, human resources, and and many other topics."},community:{title:"Community",description:"We are friendly and without prejudice, we help everyone, regardless of the question! After all, we've all been beginners once, right?"},diversity:{title:"Diversity",description:"Our community is made up of all types of people, who provide a different point of view on a problem, always leading us to different discussions and new learnings."}}},cookiesAlertModal:{alert:"This website uses cookies to ensure you get the best experience on our website.",confirmation:"Got It!"},system:{metas:{ogLocale:"en_US"}}}},6846:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var r=n(5893),o=n(9163),i=n(2740),a=o.ZP.div.withConfig({displayName:"styles__Container",componentId:"wefzlr-0"})(["display:flex;align-items:center;justify-content:center;"]),s=o.ZP.span.withConfig({displayName:"styles__Content",componentId:"wefzlr-1"})(["width:100%;height:1px;background:","80;margin:2rem;"],i.w.gray200),c=function(){return(0,r.jsx)(a,{children:(0,r.jsx)(s,{})})}},8477:function(e,t,n){"use strict";n.d(t,{$:function(){return r}});var r={DISCORD:"https://discord.gg/qCJXz6P4qw",TWITCH:"https://www.twitch.tv/techmmunity",YOUTUBE:"https://www.youtube.com/channel/UCl322bbCTdwW-eOEO4J0Zxw",FACEBOOK:"https://www.facebook.com/techmmunity/",TWITTER:"https://twitter.com/techmmunity1",LINKEDIN:"https://www.linkedin.com/company/71251333/",INSTAGRAM:"https://www.instagram.com/techmmunity/"}},6197:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(5893),o=n(6156),i=n(7294),a=n(9008),s=!1,c=function(e){var t=e.href,n=(0,i.useRef)(!1),r=(0,i.useState)(!1)[1];return(0,i.useEffect)((function(){n.current||(s=!0,n.current=!0,r(!0))}),[]),(0,i.createElement)(a.default,null,(0,i.createElement)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous","data-next-google-fonts":"preconnect",key:"next-google-fonts__preconnect"}),(0,i.createElement)("link",{rel:"preload",as:"style",href:t,"data-next-google-fonts":"preload",key:"next-google-fonts__preload"}),(0,i.createElement)("link",{href:t,rel:"stylesheet",media:s?"all":"print","data-next-google-fonts":"style",key:"next-google-fonts__style"}),(0,i.createElement)("noscript",null,(0,i.createElement)("link",{href:t,rel:"stylesheet","data-next-google-fonts":"style-no-js",key:"next-google-fonts__style-no-js"})))},u=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"}),(0,r.jsxs)(a.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("title",{children:"\ud83e\uddd1\u200d\ud83d\udcbb | Techmmunity"})]})]})},l=n(1664),d=n(9583),f=n(5155),p=n(1649),h=n(6846),m=n(8477),g=n(9163),y=n(2740),w=g.ZP.footer.withConfig({displayName:"styles__Container",componentId:"sc-1e5045h-0"})(["display:flex;align-items:center;justify-content:space-between;margin:0 2.5rem 1rem 2.5rem;@media (max-width:768px){flex-direction:column;}"]),b=g.ZP.div.withConfig({displayName:"styles__RightsReserved",componentId:"sc-1e5045h-1"})(["text-align:center;margin:1rem 0;"]),v=g.ZP.p.withConfig({displayName:"styles__Description",componentId:"sc-1e5045h-2"})(["color:","ba;font-size:1.4rem;"],y.w.gray100),x=g.ZP.ul.withConfig({displayName:"styles__SocialNetworks",componentId:"sc-1e5045h-3"})(["display:flex;align-items:center;justify-content:center;flex-wrap:wrap;"]),j=g.ZP.li.withConfig({displayName:"styles__SocialNetwork",componentId:"sc-1e5045h-4"})(["> a{display:flex;align-items:center;justify-content:center;background:",";color:",";font-size:clamp(18px,1rem + 1vw,1.8rem);border-radius:50%;padding:0.8rem;margin:0.5rem;transition:background-color 0.2s ease-out,color 0.2s ease-out;&:hover,&:focus,&:active{background:",";color:",";}}"],y.w.gray500,y.w.primary,y.w.primary,y.w.white1000),k=[{id:1,url:m.$.DISCORD,Icon:d.j2d},{id:2,url:m.$.TWITCH,Icon:d.aWC},{id:3,url:m.$.YOUTUBE,Icon:d.V2E},{id:4,url:m.$.FACEBOOK,Icon:d.tBk},{id:5,url:m.$.TWITTER,Icon:d.fWC},{id:6,url:m.$.LINKEDIN,Icon:p.gXb},{id:7,url:m.$.INSTAGRAM,Icon:f.Z8w}],O=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.x,{}),(0,r.jsxs)(w,{children:[(0,r.jsx)(b,{children:(0,r.jsx)(v,{children:"\xa9 2020 Techmmunity. All rights reserved."})}),(0,r.jsx)(x,{children:k.map((function(e){var t=e.id,n=e.url,o=e.Icon;return(0,r.jsx)(j,{children:(0,r.jsx)(l.default,{href:n,children:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(o,{})})})},t)}))})]})]})},_=n(5295),C=g.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-4vqj7a-0"})(["position:fixed;left:0;bottom:0;right:0;display:",";align-items:center;justify-content:space-between;background:",";border-radius:5px;padding:1.5rem 2rem;margin:1.5rem 1rem;@media (max-width:380px){flex-direction:column;padding:1.5rem;}"],(function(e){return e.isCookiesAccepted?"none":"flex"}),y.w.black800),P=g.ZP.p.withConfig({displayName:"styles__Description",componentId:"sc-4vqj7a-1"})(["width:75%;font-size:1.5rem;line-height:2.2rem;@media (max-width:380px){width:100%;margin-bottom:1.5rem;}"]),E=g.ZP.button.withConfig({displayName:"styles__ConfirmationButton",componentId:"sc-4vqj7a-2"})(["background:",";color:",";border-radius:3px;font-weight:bold;padding:1rem 1.5rem;transition:background-color 0.2s ease-out;&:hover,&:focus,&:active{background:",";}@media (max-width:380px){align-self:flex-end;}"],y.w.primary,y.w.white1000,y.w.darkPrimary),I=function(){var e=(0,i.useState)(!0),t=e[0],n=e[1];(0,i.useEffect)((function(){var e=localStorage.getItem("cookies-accepted");n(Boolean(e))}),[]);var o=(0,i.useCallback)((function(){localStorage.setItem("cookies-accepted","true"),n(!0)}),[]);return(0,r.jsxs)(C,{isCookiesAccepted:t,children:[(0,r.jsx)(P,{children:_.EN.cookiesAlertModal.alert}),(0,r.jsx)(E,{onClick:o,children:_.EN.cookiesAlertModal.confirmation})]})},S=g.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-18efusu-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]),M=g.ZP.div.withConfig({displayName:"styles__Content",componentId:"sc-18efusu-1"})(["width:100%;max-width:1128px;"]),N=function(e){var t=e.children;return(0,r.jsxs)(S,{children:[(0,r.jsx)(M,{children:t}),(0,r.jsx)(I,{})]})},T=function(e){var t=e.children;return(0,r.jsxs)(N,{children:[t,(0,r.jsx)(O,{})]})},A=function(e){var t=e.children;return(0,r.jsx)(N,{children:t})};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){var t=function(e){switch(e){case"ERROR":return A;default:return T}}(e.children.type.layout);return(0,r.jsx)(t,R(R({},e),{},{children:e.children}))};function W(){var e,t,n=(e=["\n\t * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n\thtml, body {\n\t\tmin-height: 100%;\n\t}\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    background: ",";\n    color: ",';\n    font-family: "Roboto", Arial, Helvetica, sans-serif;\n    font-size: 1.6rem;\n  }\n\n\ta {\n\t\tcolor: ',";\n\t\ttext-decoration: none;\n\t}\n\n\tbutton {\n\t\tborder: transparent;\n\n\t\t&:not(:disabled) {\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n\n\tul {\n\t\tlist-style: none;\n\t}\n\n\t@media (max-width: 768px) {\n    html {\n      font-size: 57.5%;\n    }\n  }\n\n\t@media (max-width: 320px) {\n    html {\n      font-size: 55.5%;\n    }\n  }\n\n\t@media (max-width: 280px) {\n    html {\n      font-size: 52.5%;\n    }\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return W=function(){return n},n}var Z=(0,g.vJ)(W(),y.w.background,y.w.white1000,y.w.white1000);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(z,H(H({},n),{},{children:(0,r.jsx)(t,H({},n))})),(0,r.jsx)(Z,{})]})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6197)}])},9008:function(e,t,n){e.exports=n(7947)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return r.createElement(l,a({attr:a({},e.attr)},t),c(e.child))}}function l(e){var t=function(t){var n,o=e.attr,i=e.size,c=e.title,u=s(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,445,866,158,351,681],(function(){return t(6363),t(2441)}));var n=e.O();_N_E=n}]);