"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=c(r),s=n,h=k["".concat(p,".").concat(s)]||k[s]||u[s]||l;return r?a.createElement(h,i(i({ref:t},m),{},{components:r})):a.createElement(h,i({ref:t},m))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={title:"\ub9cc\ub4e4\uba74\uc11c \ubc30\uc6b0\ub294 \ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98 \uc815\ub9ac - 2",description:"Clean Architecture Study - 2",slug:"clean-arch-2",authors:"dongle",tags:["Spring Boot","Clean Architecture","Book"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},i=void 0,o={permalink:"/clean-arch-2",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2022-06-27-clean-architecture-2.md",source:"@site/blog/2022-06-27-clean-architecture-2.md",title:"\ub9cc\ub4e4\uba74\uc11c \ubc30\uc6b0\ub294 \ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98 \uc815\ub9ac - 2",description:"Clean Architecture Study - 2",date:"2022-06-27T00:00:00.000Z",formattedDate:"June 27, 2022",tags:[{label:"Spring Boot",permalink:"/tags/spring-boot"},{label:"Clean Architecture",permalink:"/tags/clean-architecture"},{label:"Book",permalink:"/tags/book"}],readingTime:9.385,hasTruncateMarker:!0,authors:[{name:"Dongle",title:"Junior Backend Developer",url:"https://github.com/sk1737030",imageURL:"https://github.com/sk1737030.png",key:"dongle"}],frontMatter:{title:"\ub9cc\ub4e4\uba74\uc11c \ubc30\uc6b0\ub294 \ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98 \uc815\ub9ac - 2",description:"Clean Architecture Study - 2",slug:"clean-arch-2",authors:"dongle",tags:["Spring Boot","Clean Architecture","Book"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},prevItem:{title:"\ub808\ub514\uc2a4 Atomic Operation\uc704\ud574 multi \uc640 luascript\uc758 \ucc28\uc774",permalink:"/redis-multi-lua"},nextItem:{title:"\ub9cc\ub4e4\uba74\uc11c \ubc30\uc6b0\ub294 \ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98 \uc815\ub9ac - 1",permalink:"/clean-arch-1"}},p={authorsImageUrls:[void 0]},c=[{value:"\ud14c\uc2a4\ud2b8 \uc804\ub7b5",id:"\ud14c\uc2a4\ud2b8-\uc804\ub7b5",level:3},{value:"\ud14c\uc2a4\ud2b8\ub97c \uc791\uc131 \ud560 \ub54c \uc9c0\uae08\ud558\ub824\ub294 \ubaa9\uc801\uc774 \ubb54\uc9c0 \uc0dd\uac01\ud574\uc57c\ud55c\ub2e4.",id:"\ud14c\uc2a4\ud2b8\ub97c-\uc791\uc131-\ud560-\ub54c-\uc9c0\uae08\ud558\ub824\ub294-\ubaa9\uc801\uc774-\ubb54\uc9c0-\uc0dd\uac01\ud574\uc57c\ud55c\ub2e4",level:3},{value:"\uc5bc\ub9c8\ub9cc\ud07c\uc758 \ud14c\uc2a4\ud2b8\uba74 \ucda9\ubd84\ud560\uae4c?",id:"\uc5bc\ub9c8\ub9cc\ud07c\uc758-\ud14c\uc2a4\ud2b8\uba74-\ucda9\ubd84\ud560\uae4c",level:3},{value:"\uc544\ud0a4\ud14d\ucc98 \uacbd\uacc4 \uac15\uc81c\ud558\uae30",id:"\uc544\ud0a4\ud14d\ucc98-\uacbd\uacc4-\uac15\uc81c\ud558\uae30",level:3},{value:"\uae68\uc9c4\ucc3d\ubb38\uc774\ub860",id:"\uae68\uc9c4\ucc3d\ubb38\uc774\ub860",level:3},{value:"\uc758\uc2dd\uc801\uc73c\ub85c \uc9c0\ub984\uae38\uc744 \uc0ac\uc6a9\ud558\uae30",id:"\uc758\uc2dd\uc801\uc73c\ub85c-\uc9c0\ub984\uae38\uc744-\uc0ac\uc6a9\ud558\uae30",level:3},{value:"\ub3c4\uba54\uc778\uc774 \uc655\uc774\ub2e4",id:"\ub3c4\uba54\uc778\uc774-\uc655\uc774\ub2e4",level:3},{value:"\uacbd\ud5d8\uc774 \uc5ec\uc655\uc774\ub2e4.",id:"\uacbd\ud5d8\uc774-\uc5ec\uc655\uc774\ub2e4",level:3}],m={toc:c};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ub9cc\ub4e4\uba74\uc11c \ubc30\uc6b0\ub294 \ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98\ub97c \uc77d\uace0 \uacf5\ubd80\ud55c \ub0b4\uc6a9\uc744 \uc815\ub9ac. - 2"),(0,n.kt)("p",null,"\ubaa8\ub4e0 \uc18c\uc2a4\ub294 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sk1737030/til/tree/master/clean-architecture"},"\uc774\uacf3\uc5d0")," \uc788\uc2b5\ub2c8\ub2e4:)"),(0,n.kt)("h3",{id:"\ud14c\uc2a4\ud2b8-\uc804\ub7b5"},"\ud14c\uc2a4\ud2b8 \uc804\ub7b5"),(0,n.kt)("p",null,"\ub9cc\ub4dc\ub294 \ube44\uc6a9\uc774 \uc801\uace0, \uc720\uc9c0\ubcf4\uc218\ud558\uae30 \uc27d\uace0, \ube68\ub9ac \uc2e4\ud589\ub418\uace0, \uc548\uc815\uc801\uc778 \uc791\uc740 \ud06c\uae30\uc758 \ud14c\uc2a4\ud2b8\ub4e4\uc5d0 \ub300\ud574 \ub192\uc740 \ucee4\ubc84\ub9ac\uc9c0\ub97c \uc720\uc9c0\ud574\uc57c \ud55c\ub2e4\ub294 \uac83\uc774\ub2e4. \uac00\uc7a5 \ud655\uc2e4\ud55c \uac74 \ud558\ub098\uc758 \ud074\ub798\uc2a4\uac00 \uc81c\ub300\ub85c \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\ub294 ",(0,n.kt)("strong",{parentName:"p"},"\ub2e8\uc704\ud14c\uc2a4\ud2b8"),"\uc774\ub2e4.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"\ud14c\uc2a4\ud2b8\ud53c\ub77c\ubbf8\ub4dc [https://martinfowler.com/bliki/TestPyramid.html](https://martinfowler.com/bliki/TestPyramid.html)",src:r(443).Z,width:"560",height:"300"}),(0,n.kt)("br",{parentName:"p"}),"\n","\ud14c\uc2a4\ud2b8\ud53c\ub77c\ubbf8\ub4dc ",(0,n.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/TestPyramid.html"},"https://martinfowler.com/bliki/TestPyramid.html"),(0,n.kt)("br",{parentName:"p"}),"\n","\uc704\ub85c \uc62c\ub77c \uac08 \uc218\ub85d \ube44\uc6a9\uc774 \ube44\uc2f8\uc9c4\ub2e4.  "),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\ud14c\uc2a4\ud2b8\ub97c-\uc791\uc131-\ud560-\ub54c-\uc9c0\uae08\ud558\ub824\ub294-\ubaa9\uc801\uc774-\ubb54\uc9c0-\uc0dd\uac01\ud574\uc57c\ud55c\ub2e4"},"\ud14c\uc2a4\ud2b8\ub97c \uc791\uc131 \ud560 \ub54c \uc9c0\uae08\ud558\ub824\ub294 \ubaa9\uc801\uc774 \ubb54\uc9c0 \uc0dd\uac01\ud574\uc57c\ud55c\ub2e4."),(0,n.kt)("p",null,"\ud14c\uc2a4\ud2b8\ub294 \uc11c\ube44\uc2a4\uac00 \ubaa8\ud0b9\ub41c \ub300\uc0c1\uc758 \ud2b9\uc815 \uba54\uc11c\ub4dc\uc640 \uc0c1\ud638\uc791\uc6a9\ud588\ub294\uc9c0 \uc5ec\ubd80\ub97c \uac80\uc0ac \ud560 \uc218 \uc788\ub294\ub370 \ub9cc\uc57d \ubaa8\ub4e0 \uac83\uc744 \uac80\uc99d\ud558\ub824\ub2e4 \ubcf4\uba74 \ud074\ub798\uc2a4\uac00 \uc870\uae08\uc774\ub77c\ub3c4 \ubcc0\uacbd\ub418\uba74 \ud14c\uc2a4\ud2b8\uac00 \uc27d\uac8c \ubcc0\uacbd\uc774\ub41c\ub2e4. \uc774\ub294 \ud14c\uc2a4\ud2b8\uc758 \ubcf8\uc9c8\uc744 \ub5a8\uc5b4\ub728\ub9ac\ub294 \ud589\uc704\uae30 \ub54c\ubb38\uc5d0 \ubd88\ud544\uc694\ud55c \ubd80\ubd84\uc740 \ud14c\uc2a4\ud2b8\ub97c \ud558\uc9c0 \uc54a\uace0 ",(0,n.kt)("strong",{parentName:"p"},"\uc911\uc694\ud55c \ud575\uc2ec \ube44\uc9c0\ub2c8\uc2a4\ub9cc \uac80\uc99d"),"\uc744 \ud558\ub294 \uac83\uc774 \ub354 \ub0ab\ub2e4."),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\uc5bc\ub9c8\ub9cc\ud07c\uc758-\ud14c\uc2a4\ud2b8\uba74-\ucda9\ubd84\ud560\uae4c"},"\uc5bc\ub9c8\ub9cc\ud07c\uc758 \ud14c\uc2a4\ud2b8\uba74 \ucda9\ubd84\ud560\uae4c?"),(0,n.kt)("p",null,"\ub77c\uc778 \ucee4\ubc84\ub9ac\uc9c0\ub294 \uc911\uc694\ud558\uc9c0 \uc54a\ub2e4. 80% \ub85c\ub4e0 \uc2ec\uc9c0\uc5b4 100%\ub85c\ub4e0 \ubc84\uadf8\uac00 \uc5c6\ub2e4\uace0 \ud560 \uc218 \uc5c6\ub2e4. \uc0ac\ub78c\ub9c8\ub2e4 \ub2e4\ub974\uaca0\uc9c0\ub9cc \uadf8\ub0e5 \ub0b4\uac00 \ub9c8\uc74c\uc774 \ubd88\uc548\ud558\uc9c0\uc54a\uace0 \ud3b8\ud558\ub2e4\uba74 \ucda9\ubd84\ud558\ub2e4\uace0 \uc0dd\uac01\uc774\ub4e0\ub2e4. \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589 \ud6c4\uc5d0 \ub9c8\uc74c\uc774 \ud3b8\uc548\ud55c \uc0c1\ud0dc\ub85c \ubc30\ud3ec\ub97c \ud560 \uc218 \uc788\uc73c\uba74 \ucda9\ubd84\ud558\ub2e4\uace0 \ubcf8\ub2e4.\n\uc721\uac01\ud615 \uc544\ud0a4\ud14d\ucc98\uc5d0\uc11c\uc758 \ud14c\uc2a4\ud2b8 \uc804\ub7b5\uc740 "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub3c4\uba54\uc778 \uc5d4\ud2f0\ud2f0\ub97c \uad6c\ud604\ud560 \ub54c\uc5d0\ub294 ",(0,n.kt)("strong",{parentName:"p"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub85c")," \ucee4\ubc84  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc720\uc2a4\ucf00\uc774\uc2a4\ub97c \uad6c\ud604 \ud560 \ub54c\ub294 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/sk1737030/til/blob/master/clean-architecture/src/test/java/com/clean/architecture/hexagonal/account/application/service/SendMoneyServiceTest.java"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub85c"))," \ucee4\ubc84")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc5b4\ub311\ud130\ub97c \uad6c\ud604\ud560 \ub54c\ub294 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/sk1737030/til/blob/master/clean-architecture/src/test/java/com/clean/architecture/hexagonal/account/adapter/in/web/SendMoneyControllerTest.java"},"\ud1b5\ud569 \ud14c\uc2a4\ud2b8\ub85c"))," \ucee4\ubc84")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc0ac\uc6a9\uc790\uac00 \ucde8\ud560 \uc218 \uc788\ub294 \uc911\uc694 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uacbd\ub85c\ub294 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sk1737030/til/blob/e41051a996d373182946204aa5d94a51b7ab0f20/clean-architecture/src/test/java/com/clean/architecture/hexagonal/SendMoneySystemTest.java"},"\uc2dc\uc2a4\ud15c \ud14c\uc2a4\ud2b8\ub85c")," \ucee4\ubc84"),(0,n.kt)("br",null))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\uc2dc\uc2a4\ud15c \ud14c\uc2a4\ud2b8"),"\uc640 ",(0,n.kt)("inlineCode",{parentName:"p"},"\ud1b5\ud569\ud14c\uc2a4\ud2b8")," \uc758 \ubaa9\uc801\uc740 \ub2e4\ub974\ub2e4."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"\ud1b5\ud569\ud14c\uc2a4\ud2b8\ub294")," \uc8fc\ub85c  ",(0,n.kt)("inlineCode",{parentName:"p"},"@WebMvcTest")," \uc560\ub108\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ud504\ub9c1\uc774 \ud2b9\uc815 \uc694\uccad \uacbd\ub85c, \uc790\ubc14\uc640 JSON\uac04\uc758 \ub9e4\ud551, http \uc785\ub825 \uac80\uc99d, \uc751\ub2f5 \uac12 \uac80\uc99d \ub4f1\uc5d0 \ud544\uc694\ud55c \uc804\uccb4 \uac1d\uccb4 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc778\uc2a4\ud134\uc2a4\ud654\ud558\ub3c4\ub85d \ub9cc\ub4e0\ub2e4. \uadf8\ub9ac\uace0 \ud14c\uc2a4\ud2b8\uc5d0\uc11c\ub294 \uc6f9 \ucee8\ud2b8\ub864\ub7ec\uac00 \ub124\ud2b8\uc6cc\ud06c\uc758 \uc77c\ubd80\ub85c\uc11c \uc798 \ub3d9\uc791\ud558\ub294\uc9c0 \uac80\uc99d\ud558\uae30 \ub54c\ubb38\uc5d0 \ud544\uc694\ud558\ub2e4.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\uc0c8\ub85c\uc6b4 \ud544\ub4dc\ub97c \ucd94\uac00\ud560 \ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ub97c \uace0\uce58\ub294 \ub370 \ud55c \uc2dc\uac04\uc744 \uc368\uc57c \ud55c\ub2e4\uba74 \ubb54\uac00 \uc798\ubabb\ub41c\uac83\uc774\ub2e4!!!! \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub3c4 \ub9ac\ud329\ud1a0\ub9c1 \ub300\uc0c1\uc774\ub2e4. \ubaa8\ud0b9\ud558\ub294 \uac83\uc774 \ub108\ubb34 \ubc84\uac70\uc6cc\uc9c0\uac70\ub098 \ucf54\ub4dc\uc758 \ud2b9\uc815 \ubd80\ubd84\uc744 \ucee4\ubc84\ud558\uae30 \uc704\ud574 \uc5b4\ub5a4 \uc885\ub958\uc758 \ud14c\uc2a4\ud2b8\ub97c \uc368\uc57c \ud560\uc9c0 \ubaa8\ub974\uaca0\ub2e4\uba74 \uc774\ub294 ",(0,n.kt)("strong",{parentName:"p"},"\uacbd\uace0 \uc2e0\ud638"),"\uc774\ub2e4.")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\uc544\ud0a4\ud14d\ucc98-\uacbd\uacc4-\uac15\uc81c\ud558\uae30"},"\uc544\ud0a4\ud14d\ucc98 \uacbd\uacc4 \uac15\uc81c\ud558\uae30"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"[https://reflectoring.io/book/](https://reflectoring.io/book/)",src:r(2150).Z,width:"638",height:"639"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://reflectoring.io/book/"},"https://reflectoring.io/book/")," "),(0,n.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uacc4\uce35\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ube44\uc2a4\uc548\uc5d0 \uc720\uc2a4\ucf00\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uae30 \uc704\ud574 \ub3c4\uba54\uc778 \uc5d4\ud2f0\ud2f0\uc5d0 \uc811\uadfc\ud55c\ub2e4.",(0,n.kt)("br",{parentName:"p"}),"\n","\uc5b4\ub311\ud130\ub294 \uc778\ucee4\ubc0d \ud3ec\ud2b8\ub97c\ud1b5\ud574 \uc11c\ube44\uc2a4\uc5d0 \uc811\uadfc\ud558\uace0, \ubc18\ub300\ub85c \uc11c\ube44\uc2a4\ub294 \uc544\uc6c3\uace0\uc789 \ud3ec\ud2b8\ub97c \ud1b5\ud574 \uc5b4\ub311\ud130\uc5d0 \uc811\uadfc\ud55c\ub2e4.",(0,n.kt)("br",{parentName:"p"}),"\n","\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc124\uc815 \uacc4\uce35\uc740 \uc5b4\ub311\ud130\uc640 \uc11c\ube44\uc2a4 \uac1d\uccb4\ub97c \uc0dd\uc131\ud560 \ud329\ud130\ub9ac\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uace0, \uc758\uc874\uc131 \uc8fc\uc2ed \uba54\ucee4\ub2c8\uc998\uc744 \uc81c\uacf5\ud55c\ub2e4.",(0,n.kt)("br",{parentName:"p"}),"\n","\uc758\uc874\uc131 \uaddc\uce59\uc5d0 \ub530\ub974\uba74 \uacc4\uce35 \uacbd\uacc4\ub97c \ub118\ub294 \uc758\uc874\uc131\uc740 \ud56d\uc0c1 \uc548\ucabd\ubc29\ud5a5\uc73c\ub85c \ud5a5\ud574\uc57c \ud55c\ub2e4.  "),(0,n.kt)("br",null),(0,n.kt)("p",null,"\uacbd\uacc4\ud45c\uc2dc\ub97c \uc704\ud574\uc11c \uc790\ubc14\uc5d0\uc11c \ub9ce\uc774 \uc4f0\ub294 \ubc29\ubc95\uc774  \uc811\uadfc\uc81c\ud55c\uc790\ub97c \uc4f0\ub294 \uac83\uc774\ub2e4. ",(0,n.kt)("inlineCode",{parentName:"p"},"package-private(default)"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"protectect"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"private")," \ub97c \uc0ac\uc6a9\ud55c\ub2e4."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"package-private"),"\ub294 \ub9cc\ub2a5\uc774 \uc544\ub2c8\ub2e4. \ud328\ud0a4\uc9c0 \ub0b4\uc5d0 \ud074\ub798\uc2a4\uac00 \ud2b9\uc815 \uac1c\uc218\ub97c \ub118\uc5b4\uac00\uae30 \uc2dc\uc791\ud558\uba74 \ud558\ub098\uc758 \ud328\ud0a4\uc9c0\uc5d0 \ub108\ubb34 \ub9ce\uc740 \ud074\ub798\uc2a4\ub97c \ud3ec\ud568\ud558\ub294 \uac83\uc774 \ud63c\ub780\uc2a4\ub7ec\uc6cc\uc9c0\uac8c \ub41c\ub2e4. \uc774\ub807\uac8c \ub418\uba74 \ucf54\ub4dc\ub97c \uc27d\uac8c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ud558\uc704 \ud328\ud0a4\uc9c0\ub97c \ub450\uac8c \ub418\ub294\ub370 \uc790\ubc14\ub294 \ud558\uc704 \ud328\ud0a4\uc9c0\ub97c \ub2e4\ub978 \ud328\ud0a4\uc9c0\ub85c \ucde8\uae09\ud558\uae30 \ub54c\ubb38\uc5d0 \ud558\uc704 \ud328\ud0a4\uc9c0\uc758 package-private \uba64\ubc84\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\uac8c \ub41c\ub2e4. \uadf8\ub798\uc11c \ud558\uc704 \ud328\ud0a4\uc9c0\uc758 \uba64\ubc84\ub294 public\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc11c \ubc14\uae65 \uc138\uacc4\uc5d0 \ub178\ucd9c\uc2dc\ucf1c\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \uaddc\uce59\uc774 \uae68\uc9c8 \uc218 \uc788\ub2e4.")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\uae68\uc9c4\ucc3d\ubb38\uc774\ub860"},"\uae68\uc9c4\ucc3d\ubb38\uc774\ub860"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud488\uc9c8\uc774 \ub5a8\uc5b4\uc9c4 \ucf54\ub4dc\uc5d0\uc11c \uc791\uc5c5\ud560 \ub54c \ub354 \ub0ae\uc740 \ud488\uc9c8\uc758 \ucf54\ub4dc\ub97c \ucd94\uac00\ud558\uae30\uac00 \uc27d\ub2e4.  "),(0,n.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ucf54\ub4dc\uac00 \uc5c6\ub294 \ucf54\ub4dc\ub294 \ud14c\uc2a4\ud2b8\ucf54\ub4dc\ub97c \ucd94\uac00\ud558\uc9c0 \uc54a\uae30 \uc27d\ub2e4.  "),(0,n.kt)("li",{parentName:"ul"},"\uc9c0\ub984\uae38\uc744 \ub9ce\uc774 \uc0ac\uc6a9\ud55c \ucf54\ub4dc\uc5d0\uc11c \uc791\uc5c5\ud560 \ub54c \ub610 \ub2e4\ub978 \uc9c0\ub984\uae38\uc744 \ucd94\uac00\ud558\uae30 \uc27d\ub2e4.  "),(0,n.kt)("li",{parentName:"ul"},"\ucf54\ub529 \ud050\uce59\uc744 \ub9ce\uc774 \uc5b4\uae34 \ucf54\ub4dc\uc5d0\uc11c \uc791\uc5c5\ud560 \ub54c \ub610 \ub2e4\ub978 \ud050\uce59\uc744 \uc5b4\uae30\uae30\ub3c4 \uc27d\ub2e4.  "),(0,n.kt)("li",{parentName:"ul"},"\uae43 \ube0c\ub79c\uce58\ub97c \uc5b4\uc9c0\ub7fd\uac8c \ud558\uba74 \uc810\uc810 \ub354 \uc5b4\uc9c0\ub7ec\uc6cc\uc9c4\ub2e4.  ")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\uc758\uc2dd\uc801\uc73c\ub85c-\uc9c0\ub984\uae38\uc744-\uc0ac\uc6a9\ud558\uae30"},"\uc758\uc2dd\uc801\uc73c\ub85c \uc9c0\ub984\uae38\uc744 \uc0ac\uc6a9\ud558\uae30"),(0,n.kt)("p",null,"\uc9c0\ub984\uae38\uc774 \uaf2d \ub098\uc05c\uac74 \uc544\ub2c8\ub2e4. \ub54c\ub85c\ub294 \uc2dc\uac04\uc801, \uacbd\uc81c\uc801\ub4f1 \ub2e4\uc591\ud55c\uc774\uc720\ub85c \uc0ac\uc6a9 \ud560 \uc218 \uc788\ub2e4. \uc774\ub54c\uc5d0\ub294 \uc758\ub3c4\uc801\uc73c\ub85c \uc9c0\ub984\uae38\uc744 \uc0ac\uc6a9\ud588\ub2e4\ub294 \uc0ac\uc2e4\uc744 \ubb38\uc11c\ub85c \ub0a8\uae30\uace0 \ud300\uc5d0 \uacf5\uc720\ud558\uc790 \uadf8\ub7ec\uba74 \uae68\uc9c4 \ucc3d\ubb38 \uc774\ub860\uc758 \uc601\ud5a5\uc744 \ub354 \uc904\uc77c \uc218 \uc788\uc744 \uac83\uc774\ub2e4.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc778\ucee4\ubc0d \ud3ec\ud2b8 \uac74\ub108\ub6f0\uae30",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c \uc11c\ube44\uc2a4 \ubc14\ub85c \uc811\uadfc\ud558\uae30"))),(0,n.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ube44\uc2a4 \uac74\ub108\ub6f0\uae30",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub864\ub7ec\uc5d0\uc11c \ub808\ud3ec\uc9c0\ud1a0\ub9ac \ubc14\ub85c \uc811\uadfc\ud558\uae30"))),(0,n.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uc5d4\ud2f0\ud2f0\ub97c \uc785\ucd9c\ub825 \ubaa8\ub378\ub85c \uc0ac\uc6a9\ud558\uae30"),(0,n.kt)("li",{parentName:"ul"},"\uc720\uc2a4\ucf00\uc774\uc2a4\uac04 \uac19\uc740 \ubaa8\ub378 \uacf5\uc720\ud558\uae30",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \uc720\uc2a4\ucf00\uc774\uc2a4\uc778\ub370 \uac19\uc740 \ubaa8\ub378\uc744 \uacf5\uc720")))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\ub3c4\uba54\uc778\uc774-\uc655\uc774\ub2e4"},"\ub3c4\uba54\uc778\uc774 \uc655\uc774\ub2e4"),(0,n.kt)("p",null,"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c \ud560 \ub54c \ub3c4\uba54\uc778\uc774 \uc815\ub9d0 \uc911\uc694\ud558\ub2e4\uba74, \uc721\uac01\ud615 \uc544\ud0a4\ud14d\ucc98\ub97c \uc0ac\uc6a9 \ud560 \uc218 \uc788\ub2e4. ",(0,n.kt)("inlineCode",{parentName:"p"},"\uc678\ubd80\uc758 \uc601\ud5a5\uc744 \ubc1b\uc9c0 \uc54a\uace0 \ub3c4\uba54\uc778 \ucf54\ub4dc\ub97c \uc790\uc720\ub86d\uac8c \ubc1c\uc804\uc2dc\ud0ac \uc218 \uc788\ub2e4\ub294 \uac83\uc740 \uc721\uac01\ud615 \uc544\ud0a4\ud14d\ucc98 \uc2a4\ud0c0\uc77c\uc774 \ub0b4\uc138\uc6b0\ub294 \uac00\uc7a5 \uc911\uc694\ud55c \uac00\uce58\ub2e4."),"  \uc721\uac01\ud615 \uc544\ud0a4\ud14d\ucc98\ub294 \ub2f9\uc5f0\ud55c \ub9d0\uc774\uaca0\uc9c0\ub9cc DDD\uc758 \uc870\ub825\uc790\uc774\ub2e4.   "),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\uacbd\ud5d8\uc774-\uc5ec\uc655\uc774\ub2e4"},"\uacbd\ud5d8\uc774 \uc5ec\uc655\uc774\ub2e4."),(0,n.kt)("p",null,"\uc778\uac04\uc740 \uc2b5\uad00\uc758 \ub3d9\ubb3c\uc774\uae30 \ub54c\ubb38\uc5d0 \ud3b8\uc548\ud55c \uae38\ub85c \uac00\ub824\uace0\ud55c\ub2e4. \ubb3c\ub860 \uc774\uac8c \ub098\uc05c \uacb0\uc815\uc774 \uc544\ub2c8\uc9c0\ub9cc \ub2e4\ub978 \uacbd\ud5d8\ub3c4 \ud574\ubcf4\uba74 \ub354 \uc88b\uc740 \uae38\uc744 \ucc3e\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \uc791\uc740 \ubaa8\ub4c8\ubd80\ud130 \uc2dc\uc791\uc744 \ud574\uc11c \uacbd\ud5d8\uc744 \ud574\ub098\uac00\ub294 \uc5f0\uc2b5\uc744 \uac00\uc9c0\uc790. \ub0b4\uac00 \uc0dd\uac01 \ud588\uc744 \ub54c\ub294  \uc911\uc694\ud55c \uac83\uc740 ",(0,n.kt)("inlineCode",{parentName:"p"},"\uc815\ub2f5\uc740 \uc5c6\ub2e4")," \uadf8\ub54c\uadf8\ub54c \ub2e4\ub974\ub2e4 \ub3c4\uba54\uc778\ub9c8\ub2e4 \ub2e4\ub974\uace0 \uc5b4\ub5a4 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ub9cc\ub4dc\ub0d0\uc5d0 \ub2e4\ub974\uace0 \ud300\uc758 \uacbd\ud5d8\uc5d0 \ub530\ub77c \ub2e4\ub974\ub2e4 \uadf8\ub9ac\uace0 \ub0b4 \ub9c8\uc74c\uc5d0 \ub4dc\ub290\ub0d0\uc5d0 \ub530\ub77c\uc11c\ub3c4 \ub2e4\ub974\ub2c8 \uc815\ub2f5\uc774 \uc5c6\ub2e4.  "),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h1",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791158392758&orderClick=LAG&Kc="},"\ub9cc\ub4e4\uba74\uc11c \ubc30\uc6b0\ub294 \ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"},"\ub85c\ubc84\ud2b8\ub9c8\ub974\ud2f4\ud615\uc758\uc6d0\ubb38")," \u2192 ",(0,n.kt)("a",{parentName:"p",href:"https://blog.coderifleman.com/2017/12/18/the-clean-architecture/"},"\ud55c\uae00\ubc88\uc5ed"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/TestPyramid.html"},"\ub9c8\ud2f4\ud615\uc758\ud14c\uc2a4\ud2b8\ud53c\ub77c\ubbf8\ub4dc")))}u.isMDXComponent=!0},443:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Untitled 6-5ecf2d0767fd338463575c9a68deb301.png"},2150:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Untitled 7-816662776ea7dd431b8eb0f2653b63d4.png"}}]);