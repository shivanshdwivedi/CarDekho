(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{"./girnarsoft-react-common/widgets/usedCar/UcbookingentrypointSrpHomePage.js":function(e,t,n){"use strict";n.r(t);var a=n("react"),s=n.n(a),r=(n("./src/static/scss/components/elements/Ucbookingentrypoint.scss"),n("./girnarsoft-react-common/elements/index.js")),i=n("./cd/configs/index.js"),o=n("./cd/utils/global.js"),c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,s=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{!a&&o.return&&o.return()}finally{if(s)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function l(e){if(e.retailCount<1||e.shimmer)return null;var t=Object(a.useState)(e),n=c(t,2);const l=n[0];n[1];return s.a.createElement("div",{className:"entrypointHolder entrypointHolderHomepage"},s.a.createElement("div",{className:"entrypointContainerSRPB"},s.a.createElement("div",{className:"heading",dangerouslySetInnerHTML:{__html:l.heading}}),s.a.createElement("div",{className:"subheading"},e.subheading),s.a.createElement("ul",null,l.items&&l.items.map((e,t)=>s.a.createElement("li",{key:t,className:"BookingFCard clearfix"},s.a.createElement("div",{className:"tickArrow"},s.a.createElement(r.i,{className:"location",src:i.b.imgPath1+"pwa/img/UCdetailNew/whiteTick.svg",shimmer:!1,alt:"TrustMark",type:"image","data-lazy":!0})),s.a.createElement("span",{className:"feaText"},e.Ftext)))),s.a.createElement(r.c,{urlKey:"urlWithoutBackslash",onClick:()=>{o.a.setDataLayer(null,null,!0,!1,{event:"pwaClick",pwaComponentName:"UsedCarsBookingFlow",pwaAction:"ExploreClicked",pwaLinkLabel:e.pagename})},className:"button",default:!1,slug:`${e.url}${u=e.usedCarCity,u.replace(" ","-").toLowerCase()}`},"Explore")));var u}l.defaultProps={heading:"Buy Used Cars Online with  <span>CarDekho Assurance</span>",subheading:"A New Way to Buy Used Cars in India",button:"View All Cars",url:"/buy-used-cars+in+",isMainSrp:!1,pagename:"HomePage",items:[{Ftext:" 7 Days money back guarantee"},{Ftext:"6 Months comprehensive warranty"},{Ftext:"6 Months pan India RSA"},{Ftext:"Test own the car for 7 days"}]},t.default=l},"./node_modules/file-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/static/scss/components/elements/Ucbookingentrypoint.scss":function(e,t,n){"use strict";n.r(t),t.default=n.p+"../../css/Ucbookingentrypoint.fe69be835bedc27763bb9e9916a13f6c.css"},"./node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js":function(e,t,n){"use strict";var a,s=(a={},function(e){if(void 0===a[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}a[e]=t}return a[e]});e.exports=function(e,t){if((t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},void 0===t.attributes.nonce){var a=n.nc;a&&(t.attributes.nonce=a)}var r=document.createElement("link");if(r.rel="stylesheet",r.href=e,Object.keys(t.attributes).forEach((function(e){r.setAttribute(e,t.attributes[e])})),"function"==typeof t.insert)t.insert(r);else{var i=s(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return function(e){"string"==typeof e?r.href=e:r.parentNode.removeChild(r)}}},"./src/static/scss/components/elements/Ucbookingentrypoint.scss":function(e,t,n){var a=n("./node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),s=n("./node_modules/file-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/static/scss/components/elements/Ucbookingentrypoint.scss"),r={injectType:"linkTag",insert:("body","body")};a(s=s.__esModule?s.default:s,r)}}]);