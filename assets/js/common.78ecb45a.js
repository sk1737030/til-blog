"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[592],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8665:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(3366),a=n(7294),o=n(6010),l=n(3570),c=n(9960),i="sidebar_a9qW",s="sidebarItemTitle_uKok",u="sidebarItemList_Kvuv",m="sidebarItem_CF0Q",p="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",y=n(5999);function f(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,o.Z)(i,"thin-scrollbar"),"aria-label":(0,y.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,o.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:u},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:d},e.title))}))))}var g=["sidebar","toc","children"];function h(e){var t=e.sidebar,n=e.toc,c=e.children,i=(0,r.Z)(e,g),s=t&&t.items.length>0;return a.createElement(l.Z,i,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(f,{sidebar:t})),a.createElement("main",{className:(0,o.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&a.createElement("div",{className:"col col--2"},n))))}},8704:function(e,t,n){n.d(t,{Z:function(){return X}});var r=n(7294),a=n(3905),o=n(7462),l=n(3366),c=n(5742),i=["mdxType","originalType"];var s=n(6010),u={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},m={Prism:n(7410).default,theme:u};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var y=/\r\n|\r|\n/,f=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=d({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=d({},n,{backgroundColor:null}),a};function v(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var b=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=d({},v(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?d({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=d({},v(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?d({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),p(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=g(u,m.type),m.alias&&(u=g(u,m.alias)),s=m.content),"string"==typeof s){var p=s.split(y),d=p.length;c.push({types:u,content:p[0]});for(var h=1;h<d;h++)f(c),i.push(c=[]),c.push({types:u,content:p[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return f(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),k=b,E=n(7556);var N=n(5999),Z="copyButton_eDfN",O="copyButtonCopied_ljy5",T="copyButtonIcons_W9eQ",_="copyButtonIcon_XEyF",j="copyButtonSuccessIcon_i9w9";function w(e){var t=e.code,n=(0,r.useState)(!1),a=n[0],o=n[1],l=(0,r.useRef)(void 0),c=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(t),o(!0),l.current=window.setTimeout((function(){o(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),r.createElement("button",{type:"button","aria-label":a?(0,N.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,N.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,N.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)(Z,"clean-btn",a&&O),onClick:c},r.createElement("span",{className:T,"aria-hidden":"true"},r.createElement("svg",{className:_,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:j,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var C="codeBlockContainer_I0IT",x="codeBlockContent_wNvx",P="codeBlockTitle_BvAR",L="codeBlock_jd64",A="codeBlockStandalone_csWH",B="codeBlockLines_mRuA";function S(e){var t,n=e.children,a=e.className,l=void 0===a?"":a,c=e.metastring,i=e.title,u=e.language,p=(0,E.LU)().prism,d=(0,r.useState)(!1),y=d[0],f=d[1];(0,r.useEffect)((function(){f(!0)}),[]);var g=(0,E.bc)(c)||i,h=(0,E.pJ)();if(r.Children.toArray(n).some((function(e){return(0,r.isValidElement)(e)})))return r.createElement(k,(0,o.Z)({},m,{key:String(y),theme:h,code:"",language:"text"}),(function(e){var t=e.className,a=e.style;return r.createElement("pre",{tabIndex:0,className:(0,s.Z)(t,A,"thin-scrollbar",C,l,E.kM.common.codeBlock),style:a},r.createElement("code",{className:B},n))}));var v=Array.isArray(n)?n.join(""):n,b=null!=(t=null!=u?u:(0,E.Vo)(l))?t:p.defaultLanguage,N=(0,E.nZ)(v,c,b),Z=N.highlightLines,O=N.code;return r.createElement(k,(0,o.Z)({},m,{key:String(y),theme:h,code:O,language:null!=b?b:"text"}),(function(e){var t,n=e.className,a=e.style,c=e.tokens,i=e.getLineProps,u=e.getTokenProps;return r.createElement("div",{className:(0,s.Z)(C,l,(t={},t["language-"+b]=b&&!l.includes("language-"+b),t),E.kM.common.codeBlock)},g&&r.createElement("div",{style:a,className:P},g),r.createElement("div",{className:x,style:a},r.createElement("pre",{tabIndex:0,className:(0,s.Z)(n,L,"thin-scrollbar")},r.createElement("code",{className:B},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=i({line:e,key:t});return Z.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,o.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},u({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement(w,{code:O})))}))}var I=n(9960);var D="details_BAp3";function R(e){var t=Object.assign({},e);return r.createElement(E.PO,(0,o.Z)({},t,{className:(0,s.Z)("alert alert--info",D,t.className)}))}var V="anchorWithStickyNavbar_mojV",H="anchorWithHideOnScrollNavbar_R0VQ",z=["as","id"],F=["as"];function M(e){var t=e.as,n=e.id,a=(0,l.Z)(e,z),c=(0,E.LU)().navbar.hideOnScroll;return n?r.createElement(t,(0,o.Z)({},a,{className:(0,s.Z)("anchor",c?H:V),id:n}),a.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,N.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,a)}function W(e){var t=e.as,n=(0,l.Z)(e,F);return"h1"===t?r.createElement("h1",(0,o.Z)({},n,{id:void 0}),n.children):r.createElement(M,(0,o.Z)({as:t},n))}function Q(e){return r.createElement(W,e)}var K="img_E7b_";var U={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,l.Z)(a,i));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(c.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(S,e)},a:function(e){return r.createElement(I.Z,e)},pre:function(e){var t;return r.createElement(S,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(R,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,s.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,K))}));var t},h1:function(e){return r.createElement(Q,(0,o.Z)({as:"h1"},e))},h2:function(e){return r.createElement(Q,(0,o.Z)({as:"h2"},e))},h3:function(e){return r.createElement(Q,(0,o.Z)({as:"h3"},e))},h4:function(e){return r.createElement(Q,(0,o.Z)({as:"h4"},e))},h5:function(e){return r.createElement(Q,(0,o.Z)({as:"h5"},e))},h6:function(e){return r.createElement(Q,(0,o.Z)({as:"h6"},e))}};function X(e){var t=e.children;return r.createElement(a.Zo,{components:U},t)}},7774:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),o=n(9960),l="tag_hD8n",c="tagRegular_D6E_",i="tagWithCount_i0QQ";function s(e){var t=e.permalink,n=e.name,s=e.count;return r.createElement(o.Z,{href:t,className:(0,a.Z)(l,s?i:c)},n,s&&r.createElement("span",null,s))}}}]);