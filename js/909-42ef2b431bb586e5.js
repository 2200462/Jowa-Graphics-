(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{2077:function(e,l,n){"use strict";n.d(l,{Z:function(){return a}});var o=n(5893),t=n(1664),s=n.n(t),i=n(6494),r=n(1996);function a(e){var l,n,t,a,c,u,d,h,v,f,m=e.button,g=e.type,x=e.website,p=e.action,y=e.loading,b=e.className,j={background:"outline"===(null==x||null===(l=x.button)||void 0===l?void 0:l.style)?"transparent":(null==x||null===(n=x.button)||void 0===n?void 0:n.background)||(null==x?void 0:x.secondaryColor),borderRadius:isNaN(null==x||null===(t=x.button)||void 0===t?void 0:t.cornerRadius)?8:x.button.cornerRadius,color:"outline"===(null==x||null===(a=x.button)||void 0===a?void 0:a.style)?null==x||null===(c=x.button)||void 0===c?void 0:c.background:(0,r.$O)((null==x||null===(u=x.button)||void 0===u?void 0:u.background)||(null==x?void 0:x.secondaryColor)),border:"2px solid ".concat((null==x||null===(d=x.button)||void 0===d?void 0:d.background)||(null==x||null===(h=x.button)||void 0===h?void 0:h.background)||(null==x?void 0:x.secondaryColor))};return p&&"function"==typeof p||"submit"===g?(0,o.jsx)("button",{type:"submit"===g?"submit":"button",onClick:p,className:(0,r.AK)("button primary",b),style:j,disabled:y,children:y?(0,o.jsx)(i.Z,{}):m.label}):(0,o.jsx)(s(),{href:function(e){if(e){if("email"===e.type)return"mailto:"+e.link;if("phone"===e.type)return"tel:"+e.link;if("page"===e.type){var l,n=null==x||null===(l=x.pages)||void 0===l?void 0:l.find((function(l){return l._id===e.page}));return(null==n?void 0:n.slug)||"/"}var o,t=null===(o=e.link)||void 0===o?void 0:o.replace(/https?:\/\//gi,"");return t&&"#"!==t?"https://"+t:"#"}return"/"}(m),children:(0,o.jsx)("a",{className:(0,r.AK)("button primary",b),target:!0===m.newPage?"_blank":(null==x||null===(v=x.button)||void 0===v?void 0:v.target)?null==x||null===(f=x.button)||void 0===f?void 0:f.target:"_self",style:j,children:m.label})})}},4429:function(e,l,n){"use strict";n.d(l,{Z:function(){return $}});var o=n(7568),t=n(6042),s=n(9534),i=n(414),r=n(5893),a=n(1996),c=n(7294),u=n(2077),d=n(387),h=n(1664),v=n.n(h),f=n(445),m=n(1029),g=n(5296),x=n(4171),p=n(3180),y=n(151),b=n(6234),j=n(6909),w=n(9791),N=n(8239),k=n(8192),Z=n(4206),A=n(3487),C=n(5710),F=n(3751),S=[{id:"facebook",host:"facebook.com"},{id:"twitter",host:"twitter.com"},{id:"linkedin",host:"linkedin.com"},{id:"youtube",host:"youtube.com"},{id:"pinterest",host:"pinterest.com"},{id:"instagram",host:"instagram.com"},{id:"tiktok",host:"tiktok.com"},{id:"thumbtack",host:"thumbtack.com"},{id:"homeadvisor",host:"homeadvisor.com"},{id:"angi",host:"angi.com"},{id:"behance",host:"behance.net"},{id:"dribbble",host:"dribbble.com"}];function _(e){var l,n,o,s=e.website,i=(e.office,(0,a.ac)("(max-width: 1023px)")),h=(0,c.useState)(!1),_=h[0],E=h[1],O=(0,c.useState)("#FFFFFF"),I=O[0],K=O[1],L=(0,c.useState)("#000000"),P=L[0],z=L[1],B=(0,d.useRouter)(),R=null==s?void 0:s.header,T=null===(n=null===(l=s.pages)||void 0===l?void 0:l.filter((function(e){return(!0===e.showOnHeader||void 0===e.showOnHeader)&&null!==e.slug})))||void 0===n?void 0:n.map((function(e){return{href:"/".concat(e.slug||""),name:e.label,current:B.asPath==="/".concat(e.slug||"")}})),H=function(e,l){var n=l?"w-6 h-6 lg:w-8 lg:h-8":"w-8 h-8";return"angi"===e?(0,r.jsx)(m.Z,{className:n,style:{color:P}}):"behance"===e?(0,r.jsx)(g.Z,{className:n,style:{color:P}}):"dribbble"===e?(0,r.jsx)(x.Z,{className:n,style:{color:P}}):"facebook"===e?(0,r.jsx)(p.Z,{className:n,style:{color:P}}):"homeadvisor"===e?(0,r.jsx)(y.Z,{className:n,style:{color:P}}):"instagram"===e?(0,r.jsx)(b.Z,{className:n,style:{color:P}}):"linkedin"===e?(0,r.jsx)(j.Z,{className:n,style:{color:P}}):"pinterest"===e?(0,r.jsx)(w.Z,{className:n,style:{color:P}}):"tiktok"===e?(0,r.jsx)(N.Z,{className:n,style:{color:P}}):"thumbtack"===e?(0,r.jsx)(k.Z,{className:n,style:{color:P}}):"twitter"===e?(0,r.jsx)(Z.Z,{className:n,style:{color:P}}):"youtube"===e?(0,r.jsx)(A.Z,{className:n,style:{color:P}}):void 0},q=function(){return(0,r.jsx)("div",{className:(0,a.AK)("hidden lg:flex items-center flex-shrink-0"),children:(0,r.jsx)(u.Z,{className:"xl !text-2xl !py-1.5",button:null==R?void 0:R.button,website:s})})},M=function(e,l){return(0,r.jsx)("ul",{className:(0,a.AK)("lg:flex items-center gap-x-4 gap-y-2 flex-wrap","full-center"!==e?"justify-end":"",!l&&"hidden"),children:Array.isArray(s.social)&&s.social.map((function(e,n){var o=S.find((function(l){return l.id===e.type})),t=e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,"").replace(/https?:/g,"").replace(/^\/\/?/g,"");return t=t.replace(null==o?void 0:o.host,""),(0,r.jsx)("li",{children:(0,r.jsx)(v(),{href:"https://".concat(null==o?void 0:o.host,"/").concat(t),children:(0,r.jsx)("a",{target:"_blank",children:H(e.type,l)})})},"social-icon-header-".concat(n))}))})},$=function(){var e,l,n,o,i,c,u,d;return(null==R?void 0:R.showLogo)&&"branding"===(null==R?void 0:R.source)&&(null==s?void 0:s.logo)?(0,r.jsx)(v(),{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{className:"hidden lg:block transition-all object-contain",src:null==s||null===(e=s.logo)||void 0===e?void 0:e.url,alt:null==R?void 0:R.siteName,style:{height:(null==R||null===(l=R.logoDesktop)||void 0===l?void 0:l.height)+"px"}}),(0,r.jsx)("img",{className:"lg:hidden transition-all object-contain",src:null==s||null===(n=s.logo)||void 0===n?void 0:n.url,alt:null==R?void 0:R.siteName,style:{height:(null==R||null===(o=R.logoMobile)||void 0===o?void 0:o.height)+"px"}})]})}):(null==R?void 0:R.showLogo)&&"upload"===(null==R?void 0:R.source)&&(null==R?void 0:R.customLogo)?(0,r.jsx)(v(),{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{className:"hidden lg:block transition-all object-contain",src:null==R||null===(i=R.customLogo)||void 0===i?void 0:i.url,alt:null==R?void 0:R.siteName,style:{height:(null==R||null===(c=R.logoDesktop)||void 0===c?void 0:c.height)+"px"}}),(0,r.jsx)("img",{className:"lg:hidden transition-all object-contain",src:null==R||null===(u=R.customLogo)||void 0===u?void 0:u.url,alt:null==R?void 0:R.siteName,style:{height:(null==R||null===(d=R.logoMobile)||void 0===d?void 0:d.height)+"px"}})]})}):(0,r.jsx)(v(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("h1",{className:"text-h6 lg:text-h4 xl:text-h3 font-medium max-w-60 md:max-w-100 truncate",style:(0,t.Z)({color:P},(0,a.j2)(s)),children:null==R?void 0:R.siteName})})})},V=function(e){return 0===T.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("ul",{className:(0,a.AK)("hidden lg:flex items-center flex-wrap gap-x-6","left"===e&&"justify-end","full-center"===e&&"justify-center"),style:{color:P},children:null==T?void 0:T.map((function(e){return(0,r.jsx)("li",{className:"border-b-2",style:{borderColor:e.current?"".concat(P):"transparent"},children:(0,r.jsx)(v(),{href:e.href,children:(0,r.jsx)("a",{className:"block py-1.5 text-xl font-light whitespace-nowrap",children:e.name})})},"page-link-".concat(e.href))}))})};return(0,c.useEffect)((function(){var e,l,n;R&&(K(R.background),(null===R.siteName||void 0===R.siteName)&&(R.siteName=null==s||null===(n=s.Business)||void 0===n?void 0:n.name),R.style||(R.style="left"),(null===(e=R.logoDesktop)||void 0===e?void 0:e.height)||(R.logoDesktop={height:80}),(null===(l=R.logoMobile)||void 0===l?void 0:l.height)||(R.logoMobile={height:40}))}),[R]),(0,c.useEffect)((function(){I&&z((0,a.$O)(I))}),[I]),(0,c.useEffect)((function(){E(!1)}),[B,i]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{className:(0,a.AK)((null==R?void 0:R.sticky)?"sticky top-0 shadow-sm":"",(null==R?void 0:R.sticky)&&!_?"!z-max":""),style:{backgroundColor:I,color:P},children:(0,r.jsx)("div",{className:(0,a.AK)("grid items-center lg:gap-6 xl:gap-10 mx-auto py-6",(null==R?void 0:R.fullWidth)?"px-6 lg:px-12":"container"),style:(o=null==R?void 0:R.style,"center"===o?{gridTemplateColumns:"1fr auto 1fr"}:"full-center"===o&&T.length>6?{gridTemplateColumns:"1fr 4fr 1fr"}:{gridTemplateColumns:"1fr 1fr 1fr"}),children:"center"===(null==R?void 0:R.style)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"w-9 lg:w-auto",children:V(null==R?void 0:R.style)}),(0,r.jsx)("div",{className:"flex justify-center",children:$()}),(0,r.jsxs)("div",{className:"flex justify-end",children:[(0,r.jsxs)("div",{className:"hidden lg:flex item-center gap-10",children:[(null==R?void 0:R.showSocial)&&M(null==R?void 0:R.style),(null==R?void 0:R.button)&&q()]}),(0,r.jsxs)("div",{className:"ml-auto lg:hidden",children:[((null==R?void 0:R.button)||(null==T?void 0:T.length)>0||(null==R?void 0:R.showSocial)&&Array.isArray(null==s?void 0:s.social)&&(null==s?void 0:s.social.length)>1)&&(0,r.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none",style:{color:P},onClick:function(){return E(!0)},children:(0,r.jsx)(C.Z,{className:"block h-5 w-5","aria-hidden":"true"})}),!(null==R?void 0:R.button)&&0===(null==T?void 0:T.length)&&(null==R?void 0:R.showSocial)&&Array.isArray(null==s?void 0:s.social)&&1===(null==s?void 0:s.social.length)&&M(null==R?void 0:R.style,!0)]})]})]}):"full-center"===(null==R?void 0:R.style)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"w-9 lg:w-auto",children:(null==R?void 0:R.showSocial)&&M(null==R?void 0:R.style)}),(0,r.jsxs)("div",{className:"flex-1 flex flex-col items-center gap-4",children:[(0,r.jsx)("div",{className:"flex justify-center w-full",children:$()}),V(null==R?void 0:R.style)]}),(0,r.jsxs)("div",{className:"flex justify-end",children:[(null==R?void 0:R.button)&&q(),(0,r.jsxs)("div",{className:"ml-auto lg:hidden",children:[((null==R?void 0:R.button)||(null==T?void 0:T.length)>0||(null==R?void 0:R.showSocial)&&Array.isArray(null==s?void 0:s.social)&&(null==s?void 0:s.social.length)>1)&&(0,r.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none",style:{color:P},onClick:function(){return E(!0)},children:(0,r.jsx)(C.Z,{className:"block h-5 w-5","aria-hidden":"true"})}),!(null==R?void 0:R.button)&&0===(null==T?void 0:T.length)&&(null==R?void 0:R.showSocial)&&Array.isArray(null==s?void 0:s.social)&&1===(null==s?void 0:s.social.length)&&M(null==R?void 0:R.style,!0)]})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"col-span-2 lg:col-span-1",children:$()}),(0,r.jsxs)("div",{className:"hidden lg:flex item-center justify-end gap-10 lg:col-span-2",children:[V(null==R?void 0:R.style),(null==R?void 0:R.showSocial)&&M(null==R?void 0:R.style),(null==R?void 0:R.button)&&q()]}),(0,r.jsxs)("div",{className:"ml-auto lg:hidden",children:[((null==R?void 0:R.button)||(null==T?void 0:T.length)>0||(null==R?void 0:R.showSocial)&&Array.isArray(null==s?void 0:s.social)&&(null==s?void 0:s.social.length)>1)&&(0,r.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none",style:{color:P},onClick:function(){return E(!0)},children:(0,r.jsx)(C.Z,{className:"block h-5 w-5","aria-hidden":"true"})}),!(null==R?void 0:R.button)&&0===(null==T?void 0:T.length)&&(null==R?void 0:R.showSocial)&&Array.isArray(null==s?void 0:s.social)&&1===(null==s?void 0:s.social.length)&&M(null==R?void 0:R.style,!0)]})]})})}),(0,r.jsx)(f.V,{open:_,onClose:function(){return E(!1)},className:"relative z-50 h-full",children:(0,r.jsx)(f.V.Panel,{className:"fixed inset-0 flex flex-col h-full",style:{backgroundColor:I,color:P},children:(0,r.jsxs)("div",{className:"flex-1 flex flex-col h-full container mx-auto",children:[(0,r.jsxs)("div",{className:(0,a.AK)("items-center gap-3 py-6","left"!==(null==R?void 0:R.style)?"grid":"flex justify-between"),style:"left"!==(null==R?void 0:R.style)?{gridTemplateColumns:"1fr auto 1fr"}:{},children:[("center"===(null==R?void 0:R.style)||"full-center"===(null==R?void 0:R.style))&&(0,r.jsx)("div",{}),$(),(0,r.jsx)("div",{className:"ml-auto lg:hidden",children:(0,r.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none",style:{color:P},onClick:function(){return E(!1)},children:(0,r.jsx)(F.Z,{className:"block h-5 w-5","aria-hidden":"true"})})})]}),(null==T?void 0:T.length)>0&&(0,r.jsx)("div",{className:"flex-1 py-6",children:(0,r.jsx)("ul",{className:(0,a.AK)("flex flex-col gap-4 w-full max-h-[55vh] overflow-auto","center"===(null==R?void 0:R.style)||"full-center"===(null==R?void 0:R.style)?"text-center":""),style:{color:P},children:null==T?void 0:T.map((function(e){return(0,r.jsx)("li",{className:(0,a.AK)("font-light text-2xl py-2 border-b-2"),style:{borderColor:e.current?"".concat(s.secondaryColor):"transparent"},children:(0,r.jsx)(v(),{href:e.href,children:(0,r.jsx)("a",{className:"block w-full",children:e.name})})},"page-link-".concat(e.href))}))})}),(0,r.jsxs)("div",{className:(0,a.AK)("flex flex-col max-w-[100vw]","center"===(null==R?void 0:R.style)||"full-center"===(null==R?void 0:R.style)?"items-center":"",(null==T?void 0:T.length)>0?"":"h-full justify-center"),children:[(null==R?void 0:R.showSocial)&&(0,r.jsx)("ul",{className:"flex items-center gap-x-4 gap-y-2 flex-wrap py-6",children:Array.isArray(s.social)&&s.social.map((function(e,l){var n=S.find((function(l){return l.id===e.type})),o=e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,"").replace(/https?:/g,"").replace(/^\/\/?/g,"");return o=o.replace(null==n?void 0:n.host,""),(0,r.jsx)("li",{children:(0,r.jsx)(v(),{href:"https://".concat(null==n?void 0:n.host,"/").concat(o),children:(0,r.jsx)("a",{target:"_blank",children:H(e.type)})})},"social-icon-header-".concat(l))}))}),(null==R?void 0:R.button)&&(0,r.jsx)("div",{className:"py-6",children:(0,r.jsx)(u.Z,{className:"xl !font-normal !py-1.5",button:R.button,website:s})})]})]})})})]})}var E=n(9008),O=n.n(E),I=(n(5675),[{id:"facebook",host:"facebook.com"},{id:"twitter",host:"twitter.com"},{id:"linkedin",host:"linkedin.com"},{id:"youtube",host:"youtube.com"},{id:"pinterest",host:"pinterest.com"},{id:"instagram",host:"instagram.com"},{id:"tiktok",host:"tiktok.com"},{id:"thumbtack",host:"thumbtack.com"},{id:"homeadvisor",host:"homeadvisor.com"},{id:"angi",host:"angi.com"},{id:"behance",host:"behance.net"},{id:"dribbble",host:"dribbble.com"}]);function K(e){var l,n,o=e.website,s=e.office,i=(0,c.useState)("#FFFFFF"),h=i[0],f=i[1],C=(0,c.useState)("#111827"),F=C[0],S=C[1],_=(0,d.useRouter)(),E=null==o?void 0:o.footer,O=null===(n=null===(l=o.pages)||void 0===l?void 0:l.filter((function(e){return!0===e.showOnFooter||void 0===e.showOnFooter})))||void 0===n?void 0:n.map((function(e){return{href:"/".concat(e.slug||""),name:e.label,current:_.asPath==="/".concat(e.slug||"")}})),K=function(e){var l="w-8 h-8";return"angi"===e?(0,r.jsx)(m.Z,{className:l,style:{color:F}}):"behance"===e?(0,r.jsx)(g.Z,{className:l,style:{color:F}}):"dribbble"===e?(0,r.jsx)(x.Z,{className:l,style:{color:F}}):"facebook"===e?(0,r.jsx)(p.Z,{className:l,style:{color:F}}):"homeadvisor"===e?(0,r.jsx)(y.Z,{className:l,style:{color:F}}):"instagram"===e?(0,r.jsx)(b.Z,{className:l,style:{color:F}}):"linkedin"===e?(0,r.jsx)(j.Z,{className:l,style:{color:F}}):"pinterest"===e?(0,r.jsx)(w.Z,{className:l,style:{color:F}}):"tiktok"===e?(0,r.jsx)(N.Z,{className:l,style:{color:F}}):"thumbtack"===e?(0,r.jsx)(k.Z,{className:l,style:{color:F}}):"twitter"===e?(0,r.jsx)(Z.Z,{className:l,style:{color:F}}):"youtube"===e?(0,r.jsx)(A.Z,{className:l,style:{color:F}}):void 0};return(0,c.useEffect)((function(){var e;E&&(f(E.background||"#FFFFFF"),!E.showName||null!==E.businessName&&void 0!==E.businessName||(E.businessName=null==o||null===(e=o.Business)||void 0===e?void 0:e.name),!E.showAddress||null!==E.businessAddress&&void 0!==E.businessAddress||(E.businessAddress=function(){var e="";return(null==s?void 0:s.address)&&(e+=s.address.line1?s.address.line1+" ":"",e+=s.address.line2?s.address.line2+" ":"",e+=s.address.city?s.address.city+" ":"",e+=s.address.state?s.address.state+" ":"",e+=s.address.country?s.address.country+" ":"",e+=s.address.postalCode?s.address.postalCode:""),e.trim()}()))}),[E]),(0,c.useEffect)((function(){h&&S((0,a.$O)(h))}),[h]),(0,r.jsx)("footer",{className:"flex-1",style:{backgroundColor:h,color:F},children:(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row items-center gap-12 lg:gap-3 container mx-auto py-12 lg:py-14 xl:py-20",children:[(0,r.jsxs)("div",{className:"flex-1 w-full lg:w-auto",children:[(null==E?void 0:E.showName)&&(0,r.jsx)("h3",{className:"text-xl lg:text-2xl xl:text-h3 mb-6",style:(0,t.Z)({color:F},(0,a.j2)(o)),children:null==E?void 0:E.businessName}),(0,r.jsx)("div",{className:"flex flex-col lg:flex-row gap-6 lg:gap-16",children:(null==E?void 0:E.showAddress)&&(0,r.jsx)("div",{style:{color:F},children:null==E?void 0:E.businessAddress})})]}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-14 w-full lg:w-auto max-w-[100vw]",children:[O&&(0,r.jsx)("ul",{className:"flex flex-col lg:flex-row lg:items-center gap-6",style:{color:F},children:null==O?void 0:O.map((function(e){return(0,r.jsx)("li",{className:(0,a.AK)("border-b-2"),style:{borderColor:e.current?"".concat(F):"transparent"},children:(0,r.jsx)(v(),{href:e.href,children:(0,r.jsx)("a",{className:"block py-1.5 text-2xl font-light",children:e.name})})},"page-link-".concat(e.href))}))}),(null==E?void 0:E.showSocial)&&(0,r.jsx)("ul",{className:"flex items-center gap-x-4 gap-y-2 flex-wrap",children:Array.isArray(o.social)&&o.social.map((function(e,l){var n=I.find((function(l){return l.id===e.type})),o=e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,"").replace(/https?:/g,"").replace(/^\/\/?/g,"");return o=o.replace(null==n?void 0:n.host,""),(0,r.jsx)("li",{children:(0,r.jsx)(v(),{href:"https://".concat(null==n?void 0:n.host,"/").concat(o),children:(0,r.jsx)("a",{target:"_blank",children:K(e.type)})})},"social-icon-footer-".concat(l))}))}),(null==E?void 0:E.button)&&(0,r.jsx)(u.Z,{className:"lg !py-2",button:E.button,website:o})]})]})})}var L,P=n(5935),z=n(9490),B=n(5518),R=n(4865),T=n.n(R),H=n(1163),q=n.n(H),M=[];T().configure({showSpinner:!1}),q().events.on("routeChangeStart",(function(e){T().start()})),q().events.on("routeChangeComplete",(function(){return T().done()})),q().events.on("routeChangeError",(function(){return T().done()}));var $=function(e){var l,u,h,v,f,m,g,x,p,y,b,j,w,N,k,Z,A,C,F,S,E,I,R,T,H,q,$,V,U=e.children,W=e.website,D=e.office,J=e.page,G=e.apiUrl,Y=e.ipAddress,Q=(0,d.useRouter)(),X=(0,c.useState)(0),ee=X[0],le=X[1],ne=(0,c.useState)(!1),oe=ne[0],te=ne[1],se=(0,c.useState)(null),ie=se[0],re=se[1],ae=(0,c.useState)(0),ce=ae[0],ue=ae[1],de=new a.bl(G),he=null!==(V=W.seo)&&void 0!==V?V:{},ve=he.headCode,fe=he.footerCode,me=(0,s.Z)(he,["headCode","footerCode"]),ge=(0,t.Z)({globalHeadCode:ve,globalFooterCode:fe},me,null==J?void 0:J.seo),xe=(0,c.useCallback)(function(){var e=(0,o.Z)((function(e){return(0,i.__generator)(this,(function(l){switch(l.label){case 0:return 0!==e.target.scrollTop&&0!==ee||le(e.target.scrollTop),oe?[3,2]:[4,ye("scroll")];case 1:l.sent(),te(!0),l.label=2;case 2:return[2]}}))}));return function(l){return e.apply(this,arguments)}}(),[oe]),pe=c.Children.map(U,(function(e){return c.isValidElement(e)?c.cloneElement(e,(0,t.Z)({},e.props)):e})),ye=function(){var e=(0,o.Z)((function(e){var l,o,t,s,r,a,c,u,d,h;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return(c=JSON.parse(localStorage.getItem("user")||"{}"))&&c.ip&&!(z.ou.now().diff(z.ou.fromISO(c.date),"hours").hours>24)&&c.hash?[3,4]:(u=Y||"0.0.0.0",window.unsupportedBrowser||Y?[3,3]:[4,n.e(216).then(n.bind(n,6216))]);case 1:return[4,i.sent().publicIpv4()];case 2:u=i.sent(),i.label=3;case 3:d=z.ou.now().toMillis(),localStorage.setItem("user",JSON.stringify({ip:u,date:z.ou.now().startOf("day").toISO(),hash:d})),c.ip=u,c.hash=d,i.label=4;case 4:h={idWebsite:W._id,url:document.location.pathname,event:e,platform:(null===window||void 0===window||null===(l=window.navigator)||void 0===l?void 0:l.platform)?null===window||void 0===window||null===(o=window.navigator)||void 0===o||null===(t=o.platform)||void 0===t?void 0:t.toString():(null===window||void 0===window||null===(s=window.navigator)||void 0===s?void 0:s.oscpu)?null===window||void 0===window||null===(r=window.navigator)||void 0===r?void 0:r.oscpu:"bot",title:document.title.split(" - ")[0]||"Home",device:/bot|googlebot|crawler|spider|robot|crawling/i.test(null===window||void 0===window||null===(a=window.navigator)||void 0===a?void 0:a.userAgent)?"bot":B.tq?"mobile":"desktop",ip:c.ip,hash:c.hash},M.find((function(e){return e.event===h.event}))||(M.push(h),console.log("Action registered",h)),i.label=5;case 5:return[2]}}))}));return function(l){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){return ce<6&&(clearInterval(L),L=setInterval((0,o.Z)((function(){return(0,i.__generator)(this,(function(e){return ye("ping"),ue(ce+1),[2]}))})),3e4)),ie!==Q.asPath&&(ye("open"),re(Q.asPath),ue(0),te(!1)),function(){ce>=6&&ue(0),clearInterval(L),te(!1)}}),[Q,ce]),(0,c.useEffect)((function(){var e,l=function(){var e=(0,o.Z)((function(){var e;return(0,i.__generator)(this,(function(l){switch(l.label){case 0:return(null==M?void 0:M.length)>0&&(e=M.shift())?[4,de.post("/website/register-user-action",e)]:[3,2];case 1:l.sent(),l.label=2;case 2:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return l(),e=setInterval((function(){l()}),500),document.querySelector("body").addEventListener("scroll",xe),window.addEventListener("scroll",xe),function(){clearInterval(e),document.querySelector("body").removeEventListener("scroll",xe),window.removeEventListener("scroll",xe)}}),[oe]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(O(),{children:[(0,r.jsx)("meta",{name:"theme-color",content:function(){var e;return(null==W||null===(e=W.header)||void 0===e?void 0:e.background)||(null==W?void 0:W.primaryColor)}()}),(0,r.jsx)("link",{rel:"icon",href:(null===(l=W.favicon)||void 0===l?void 0:l.url)||"/favicon.ico"}),(0,r.jsx)("title",{children:(null==ge?void 0:ge.title)?ge.title:(null===(u=W.Business)||void 0===u?void 0:u.name)+" | "+(null===(h=W.Business)||void 0===h||null===(v=h.type)||void 0===v?void 0:v.name)}),(0,r.jsx)("meta",{name:"description",content:(null==ge?void 0:ge.description)?ge.description:""}),(0,r.jsx)("meta",{name:"keywords",content:(null==ge?void 0:ge.keywords)?ge.keywords:(null==W||null===(f=W.Business)||void 0===f||null===(m=f.name)||void 0===m?void 0:m.split(" ").join(","))+","+(null==W||null===(g=W.Business)||void 0===g||null===(x=g.type)||void 0===x||null===(p=x.name)||void 0===p?void 0:p.split(" ").join(","))}),(0,r.jsx)("meta",{property:"og:title",content:(null==ge?void 0:ge.title)?ge.title:(null===(y=W.Business)||void 0===y?void 0:y.name)+" | "+(null===(b=W.Business)||void 0===b||null===(j=b.type)||void 0===j?void 0:j.name)}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:description",content:(null==ge?void 0:ge.description)?ge.description:""}),(null==ge||null===(w=ge.Image)||void 0===w?void 0:w.url)&&(0,r.jsx)("meta",{property:"og:image",content:ge.Image.url}),(null==ge?void 0:ge.globalHeadCode)&&(0,P.ZP)(ge.globalHeadCode),(null==ge?void 0:ge.headCode)&&(0,P.ZP)(ge.headCode),(null==W||null===(N=W.fonts)||void 0===N||null===(k=N.head)||void 0===k?void 0:k.name)&&(null==W||null===(Z=W.fonts)||void 0===Z||null===(A=Z.body)||void 0===A?void 0:A.name)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=".concat(null==W||null===(C=W.fonts)||void 0===C||null===(F=C.head)||void 0===F||null===(S=F.name)||void 0===S?void 0:S.replace(/ /gi,"+"),":wght@").concat(null==W||null===(E=W.fonts)||void 0===E||null===(I=E.head)||void 0===I?void 0:I.weight,"&family=").concat(null==W||null===(R=W.fonts)||void 0===R||null===(T=R.body)||void 0===T||null===(H=T.name)||void 0===H?void 0:H.replace(/ /gi,"+"),":wght@").concat(null==W||null===(q=W.fonts)||void 0===q||null===($=q.body)||void 0===$?void 0:$.weight,"&display=swap"),rel:"stylesheet"})]}),(null==W?void 0:W.searchIndexing)?(0,r.jsx)("meta",{name:"robots",content:"all"}):(0,r.jsx)("meta",{name:"robots",content:"noindex,nofollow"})]}),(0,r.jsxs)("div",{onScroll:function(e){return xe(e)},className:"min-h-full w-full flex flex-col smooth-scroll break-word",style:(0,a.SV)(W),children:[(0,r.jsx)(_,{scrollY:ee,website:W,office:D}),pe,(0,r.jsx)(K,{website:W,office:D})]}),(null==ge?void 0:ge.globalFooterCode)&&(0,P.ZP)(ge.globalFooterCode),(null==ge?void 0:ge.footerCode)&&(0,P.ZP)(ge.footerCode)]})}},6494:function(e,l,n){"use strict";n.d(l,{Z:function(){return s}});var o=n(5893),t=n(1996);function s(e){var l=e.text,n=e.className;switch(e.variant){case"form":return(0,o.jsx)("div",{className:"w-full max-w-screen-sm my-8",children:(0,o.jsxs)("div",{className:"animate-pulse flex space-y-8 flex-col",children:[(0,o.jsxs)("div",{className:"space-y-3",children:[(0,o.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/2"}),(0,o.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,o.jsx)("div",{className:"h-2 bg-gray-100 rounded w-5/6"})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"space-y-3",children:[(0,o.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/4"}),(0,o.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,o.jsx)("div",{className:"h-2 bg-gray-100 rounded w-1/2"})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"space-y-3",children:[(0,o.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/4"}),(0,o.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,o.jsx)("div",{className:"h-2 bg-gray-100 rounded w-1/2"})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"space-y-3",children:[(0,o.jsx)("div",{className:"h-4 bg-gray-100 rounded w-1/6"}),(0,o.jsx)("div",{className:"h-9 bg-gray-100 rounded"}),(0,o.jsx)("div",{className:"h-2 bg-gray-100 rounded w-3/4"})]}),(0,o.jsx)("div",{className:"h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"})]})});case"table":return(0,o.jsx)("div",{className:"w-full my-8",children:(0,o.jsxs)("div",{className:"animate-pulse flex space-y-2 flex-col",children:[(0,o.jsxs)("div",{className:"space-x-2 flex",children:[(0,o.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,o.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,o.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,o.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,o.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"}),(0,o.jsx)("div",{className:"h-9 bg-gray-200 rounded w-full"})]}),[1,2,3,4,5,6].map((function(e){return(0,o.jsxs)("div",{className:"space-x-2 flex",children:[(0,o.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,o.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,o.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,o.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,o.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"}),(0,o.jsx)("div",{className:"h-9 bg-gray-100 rounded w-full"})]},e)}))]})});default:return(0,o.jsxs)("div",{className:(0,t.AK)("inline-flex items-center",n),children:[(0,o.jsxs)("svg",{className:(0,t.AK)("animate-spin ml-1 mr-3 h-4 w-4",n&&"text-indigo-600"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,o.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,o.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),l||""===l?l:"Loading..."]})}}},1996:function(e,l,n){"use strict";n.d(l,{bl:function(){return h},$O:function(){return b},Z9:function(){return m},SV:function(){return Z},AK:function(){return p},p$:function(){return N},G0:function(){return A},j2:function(){return k},mR:function(){return j},ac:function(){return w},oH:function(){return y}});var o=n(5893),t=n(7568),s=n(1438),i=n(4924),r=n(414),a=n(9669),c=n.n(a),u=n(782),d=n(3454),h=function e(l){(0,s.Z)(this,e),(0,i.Z)(this,"get",function(){var e=(0,t.Z)((function(e,l){return(0,r.__generator)(this,(function(n){return[2,new Promise((function(n,o){c().get(e,{params:l||{},headers:{"Content-Type":"application/json",Accept:"*/*"}}).then(function(){var e=(0,t.Z)((function(e){return(0,r.__generator)(this,(function(l){return n(e.data),[2]}))}));return function(l){return e.apply(this,arguments)}}()).catch((function(e){e.response?n({status:!1,message:e.response.data.message}):e.request?n({status:!1,message:e.request.message}):n({status:!1,message:e.message}),n({status:!1,message:e.config})}))}))]}))}));return function(l,n){return e.apply(this,arguments)}}()),(0,i.Z)(this,"post",function(){var e=(0,t.Z)((function(e,l,n){return(0,r.__generator)(this,(function(o){return[2,new Promise((function(o,t){c().post(e,l||{},{headers:{"Content-Type":n?"multipart/form-data":"application/json",Accept:"*/*"}}).then((function(e){o(e.data)})).catch((function(e){e.response?o(e.response.data):e.request?o({status:!1,message:e.request}):o({status:!1,message:e.message}),o({status:!1,message:e.config})}))}))]}))}));return function(l,n,o){return e.apply(this,arguments)}}()),c().defaults.withCredentials=!0,c().defaults.baseURL=l||d.env.API_URL||"https://api.durable.co"},v=n(5506),f=function(e){var l=e.closeToast;return(0,o.jsx)(v.Z,{className:"h-5 w-5 text-gray-600",onClick:l})},m={default:function(e){(0,u.Am)(e)},info:function(e){u.Am.info(e)},success:function(e){u.Am.success(e)},warn:function(e){u.Am.warn(e)},error:function(e){u.Am.error(e,{autoClose:!1,closeButton:(0,o.jsx)(f,{})})}},g=n(4429),x=n(7294);function p(){for(var e=arguments.length,l=new Array(e),n=0;n<e;n++)l[n]=arguments[n];return l.filter(Boolean).join(" ")}function y(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function b(e){var l=!1;if(!e||!e[0])return e;"#"===e[0]&&(e=e.slice(1),l=!0);var n=parseInt(6===e.length?e:"".concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2]),16),o=((n>>16)+(255&n)+(n>>8&255))/3;return(l?"#":"")+(o>128?"000000":"FFFFFF")}n(3775),n(9981);var j=function(e,l){var n;return l/=100,/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)?(3===(n=e.substring(1).split("")).length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]),"rgba("+[(n="0x"+n.join(""))>>16&255,n>>8&255,255&n].join(",")+","+l+")"):e};function w(e){var l=(0,x.useState)(!0),n=l[0],o=l[1];return(0,x.useEffect)((function(){var l=window.matchMedia(e);l.matches!==n&&o(l.matches);var t=function(){o(l.matches)};return l.addListener(t),function(){return l.removeListener(t)}}),[n,e]),n}function N(e){return JSON.parse(JSON.stringify(e))}var k=function(e){var l,n,o,t;return{fontFamily:(null==e||null===(l=e.fonts)||void 0===l||null===(n=l.head)||void 0===n?void 0:n.family)||'"Space Grotesk", sans-serif',fontWeight:(null==e||null===(o=e.fonts)||void 0===o||null===(t=o.head)||void 0===t?void 0:t.weight)||500}},Z=function(e){var l,n,o,t;return{fontFamily:(null==e||null===(l=e.fonts)||void 0===l||null===(n=l.body)||void 0===n?void 0:n.family)||'"Space Grotesk", sans-serif',fontWeight:(null==e||null===(o=e.fonts)||void 0===o||null===(t=o.body)||void 0===t?void 0:t.weight)||500}};function A(e){var l=e.props.children[0].props.website,n=e.props.children[0].props.page,t=e.props.children[0].props.office,s=e.props.children[0].props.apiUrl;return(0,o.jsx)(g.Z,{page:n,website:l,apiUrl:s,office:t,children:e})}},2480:function(){}}]);