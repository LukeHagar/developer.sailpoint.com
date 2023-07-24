"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[87630],{79036:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var n=a(67294),r=a(39960),s=a(52263),o=a(56866);var c=a(44996);const i={gridContainer:"gridContainer_wmJy",center:"center_z7cf",headerText:"headerText_SIki",headerTextOne:"headerTextOne_Z7G1",spanLeft:"spanLeft_o5gG",imageContainer:"imageContainer_rBIR",ambassadorImage:"ambassadorImage_WId0",ambassadorPurposeContainer:"ambassadorPurposeContainer_FlCG",ambassadorPurposeText:"ambassadorPurposeText_zDg8",ambassadorPurposeImage:"ambassadorPurposeImage_Zyt2",button:"button_ZyG0",link:"link_phLT"},l="gridContainer_q0P0",m="center_W7Ds",u="noFound_D0Kc",d="spinnerCenter_EWas",p="link_OyZm",f="card__zgg",v="cardFaceContainer_z3MF",g="cardFace_KBcZ",h="cardNameContainer_a5fz",b="name__h7N",y="bio_y3IL",_="cardData_mCxA",w="cardEye_Rfr7",E="cardCommentText_BYGh",O="cardDataLower_WM3E";a(50941);function N(e){let{data:t}=e;return n.createElement(r.Z,{to:t.link,className:p},n.createElement("div",{className:f},n.createElement("div",{className:v},n.createElement("img",{className:g,src:(0,c.Z)(t.creatorImage)}),n.createElement("div",{className:h},n.createElement("div",{className:b},t.name))),n.createElement("div",{className:y,dangerouslySetInnerHTML:{__html:t.bio}}),n.createElement("div",{className:_},n.createElement("img",{className:w,src:(0,c.Z)("/icons/square-check-regular.svg")}),n.createElement("div",{className:E},t.answers," solutions")),n.createElement("div",{className:O},n.createElement("img",{className:w,src:(0,c.Z)("/icons/calendar-clock-light.svg")}),n.createElement("div",{className:E},"member since ",t.member_since))))}var j=a(39121),x=a.n(j),C=a(23625),P=a(35012);function k(e){let{expert:t}=e;const[a,r]=n.useState(),[s,o]=n.useState(!0);return n.useEffect((()=>{(async()=>{const e=await(0,P.IN)(t),a=[];if(e.members){const t=await(0,P.ZS)(e.members.map((e=>e.id)));for(const n of e.members){const e=t.users.filter((e=>e.id===n.id))[0];n.avatar_template.includes("developer.sailpoint.com")&&e.bio_excerpt&&e.bio_excerpt.length>150&&a.push(await S(n,e))}a.sort(((e,t)=>e.date-t.date)),r(a)}else r(void 0);o(!1)})(),r(void 0),o(!0)}),[]),a?n.createElement("div",{className:m},n.createElement("div",{className:l},a.map((function(e,t){return n.createElement(N,{key:e.link,data:e})})))):s?n.createElement(x(),{className:d,color:"#0033a1",loading:!0,size:150,"aria-label":"Loading Spinner","data-testid":"loader"}):n.createElement("div",{className:u}," ","No Ambassadors Found with the Given Search Criteria")}async function S(e,t){return{name:e.name,creatorImage:I(e.avatar_template),title:e.title,bio:t.bio_excerpt,member_since:new Date(e.added_at).toLocaleString("default",{month:"long"})+" "+new Date(e.added_at).toISOString().slice(0,4),badge_count:t.badge_count,answers:t.accepted_answers,location:t.location,website:t.website_name,link:(0,C.O$)()+"u/"+e.username+"/summary"}}function I(e){return e.includes((0,C.gK)())?"https://"+(0,C.gK)()+e.replace("{size}","120"):e.replace("{size}","120")}function Z(){const{siteConfig:e}=(0,s.Z)();return n.createElement(o.Z,{description:"The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions."},n.createElement("main",null,n.createElement("div",{className:i.ambassadorPurposeContainer},n.createElement("img",{className:i.ambassadorPurposeImage,src:(0,c.Z)("/ambassador/Ambassador-Program-Banner.png")}),n.createElement("div",{className:i.ambassadorPurposeText},"Our Ambassador Program offers not just exclusive benefits but also an enriching learning experience on SailPoint; it's a journey to expertise. As an Ambassador, your contributions foster community growth, enabling knowledge-sharing among experts like you.",n.createElement(r.Z,{className:i.link,to:"https://developer.sailpoint.com/discuss/t/announcing-the-developer-community-ambassador-program/10634"},n.createElement("div",{className:i.button},"Become an Ambassador")))),n.createElement("div",{className:i.headerText},n.createElement("div",{className:i.headerTextOne},"Expert Ambassadors")),n.createElement("div",{className:i.imageContainer},n.createElement("div",{className:i.spanLeft}),n.createElement("img",{className:i.ambassadorImage,src:(0,c.Z)("/icons/ExpertAmbassador.svg")}),n.createElement("div",{className:i.spanLeft})),n.createElement("div",{className:i.ambassadorCardContainer},n.createElement(k,{expert:!0})),n.createElement("div",{className:i.headerText},n.createElement("div",{className:i.headerTextOne},"Ambassadors")),n.createElement("div",{className:i.imageContainer},n.createElement("div",{className:i.spanLeft}),n.createElement("img",{className:i.ambassadorImage,src:(0,c.Z)("/icons/Ambassador.svg")}),n.createElement("div",{className:i.spanLeft})),n.createElement("div",{className:i.ambassadorCardContainer},n.createElement(k,{expert:!1}))))}},35012:(e,t,a)=>{a.d(t,{BN:()=>l,FO:()=>i,IN:()=>s,KG:()=>r,NJ:()=>d,RS:()=>u,ZS:()=>o,e:()=>p,u3:()=>c,xt:()=>m});var n=a(23625);async function r(){try{const e=await fetch((0,n.O$)()+"top.json");return await e.json()}catch(e){return[]}}async function s(e){try{if(e){const e=await fetch((0,n.O$)()+"groups/ambassador_expert/members.json");return await e.json()}{const e=await fetch((0,n.O$)()+"groups/ambassador/members.json");return await e.json()}}catch(t){return[]}}async function o(e){try{const t=await fetch((0,n.O$)()+"user-cards.json?user_ids="+e.join(","));return await t.json()}catch(t){return[]}}async function c(e){let t="";t=e?(0,n.O$)()+"search.json?q=category:blog-posts+tags:"+e:(0,n.O$)()+"search.json?q=category:blog-posts";try{const e=await fetch(t);return await e.json()}catch(a){return[]}}async function i(e,t){let a="marketplace";t&&(a=t);let r="";r=e?(0,n.O$)()+"search.json?q=category:"+a+"+tags:"+e:(0,n.O$)()+"search.json?q=category:"+a;try{const e=await fetch(r);return await e.json()}catch(s){return[]}}async function l(e){try{const t=await fetch((0,n.O$)()+"t/"+e+".json");return await t.json()}catch(t){return[]}}async function m(e){try{const t=await fetch((0,n.O$)()+"t/"+e+".json");return await t.json()}catch(t){return[]}}async function u(e){try{const t=await fetch((0,n.O$)()+"raw/"+e+".json");return await t.text()}catch(t){return[]}}async function d(){try{const e=await fetch((0,n.O$)()+"tags.json");return await e.json()}catch(e){return[]}}async function p(){try{const e=await fetch((0,n.O$)()+"categories.json");return await e.json()}catch(e){return[]}}},23625:(e,t,a)=>{function n(e){const t=e.split(".");return t[0]+"-dark."+t[1]}function r(){return"https://developer.sailpoint.com/discuss/"}function s(){return"developer.sailpoint.com"}a.d(t,{O$:()=>r,ZT:()=>n,gK:()=>s})},39121:function(e,t,a){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return s(t,e),t},c=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var i=o(a(67294)),l=a(96657),m=(0,a(60010).createAnimation)("BounceLoader","0% {transform: scale(0)} 50% {transform: scale(1.0)} 100% {transform: scale(0)}","bounce");t.default=function(e){var t=e.loading,a=void 0===t||t,r=e.color,s=void 0===r?"#000000":r,o=e.speedMultiplier,u=void 0===o?1:o,d=e.cssOverride,p=void 0===d?{}:d,f=e.size,v=void 0===f?60:f,g=c(e,["loading","color","speedMultiplier","cssOverride","size"]),h=function(e){var t=1===e?"".concat(1/u,"s"):"0s";return{position:"absolute",height:(0,l.cssValue)(v),width:(0,l.cssValue)(v),backgroundColor:s,borderRadius:"100%",opacity:.6,top:0,left:0,animationFillMode:"both",animation:"".concat(m," ").concat(2.1/u,"s ").concat(t," infinite ease-in-out")}},b=n({display:"inherit",position:"relative",width:(0,l.cssValue)(v),height:(0,l.cssValue)(v)},p);return a?i.createElement("span",n({style:b},g),i.createElement("span",{style:h(1)}),i.createElement("span",{style:h(2)})):null}},60010:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,a){var n="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return n;var r=document.createElement("style");document.head.appendChild(r);var s=r.sheet,o="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(o,0),n}},96657:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return a[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}}}]);