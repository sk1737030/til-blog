"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85],{6416:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});var l=n(7294),t=n(6010),i=n(3570),c=n(8704),s=n(4853),m=n(7556),r="mdxPageWrapper_zHyg";function o(e){var a=e.content,n=a.metadata,o=n.title,d=n.description,v=n.frontMatter,u=v.wrapperClassName,N=v.hide_table_of_contents;return l.createElement(m.FG,{className:(0,t.Z)(null!=u?u:m.kM.wrapper.mdxPages,m.kM.page.mdxPage)},l.createElement(m.d,{title:o,description:d}),l.createElement(i.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,t.Z)("row",r)},l.createElement("div",{className:(0,t.Z)("col",!N&&"col--8")},l.createElement(c.Z,null,l.createElement(a,null))),!N&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(s.Z,{toc:a.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level}))))))}},4853:function(e,a,n){n.d(a,{Z:function(){return u}});var l=n(7462),t=n(3366),i=n(7294),c=n(6010),s=n(7556),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,l=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}function o(e){var a=e.toc,n=e.className,c=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,N=e.minHeadingLevel,f=e.maxHeadingLevel,g=(0,t.Z)(e,m),_=(0,s.LU)(),k=null!=N?N:_.tableOfContents.minHeadingLevel,C=null!=f?f:_.tableOfContents.maxHeadingLevel,E=(0,s.b9)({toc:a,minHeadingLevel:k,maxHeadingLevel:C}),b=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:k,maxHeadingLevel:C}}),[d,u,k,C]);return(0,s.Si)(b),i.createElement(r,(0,l.Z)({toc:E,className:c,linkClassName:d},g))}var d="tableOfContents_cNA8",v=["className"];function u(e){var a=e.className,n=(0,t.Z)(e,v);return i.createElement("div",{className:(0,c.Z)(d,"thin-scrollbar",a)},i.createElement(o,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);