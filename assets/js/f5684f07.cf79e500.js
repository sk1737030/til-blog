"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,c=d["".concat(o,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(c,l(l({ref:t},m),{},{components:n})):r.createElement(c,l({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790! 1\ud3b8",description:"Make Custom Rate Limiter With Spring Cloud Gateway 1",slug:"RateLimiter1",authors:"dongle",tags:["SCG","Spring Cloud Gateway","Rate Limiter"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/RateLimiter1",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2022-05-01-Spring-cloud-gateway-1.md",source:"@site/blog/2022-05-01-Spring-cloud-gateway-1.md",title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790! 1\ud3b8",description:"Make Custom Rate Limiter With Spring Cloud Gateway 1",date:"2022-05-01T00:00:00.000Z",formattedDate:"May 1, 2022",tags:[{label:"SCG",permalink:"/tags/scg"},{label:"Spring Cloud Gateway",permalink:"/tags/spring-cloud-gateway"},{label:"Rate Limiter",permalink:"/tags/rate-limiter"}],readingTime:7.7,hasTruncateMarker:!0,authors:[{name:"Dongle",title:"Junior Backend Developer",url:"https://github.com/sk1737030",imageURL:"https://github.com/sk1737030.png",key:"dongle"}],frontMatter:{title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790! 1\ud3b8",description:"Make Custom Rate Limiter With Spring Cloud Gateway 1",slug:"RateLimiter1",authors:"dongle",tags:["SCG","Spring Cloud Gateway","Rate Limiter"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},prevItem:{title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790! 2\ud3b8",permalink:"/RateLimiter2"}},o={authorsImageUrls:[void 0]},s=[{value:"Api Limitier\uac00 \ud544\uc694\ud55c \uc774\uc720?",id:"api-limitier\uac00-\ud544\uc694\ud55c-\uc774\uc720",level:2},{value:"Spring Cloud Gateway",id:"spring-cloud-gateway",level:2},{value:"Spring Gateway Limiter",id:"spring-gateway-limiter",level:2},{value:"\uae30\ubcf8 \uad6c\ud604",id:"\uae30\ubcf8-\uad6c\ud604",level:3},{value:"\uadf8\ub807\ub2e4\uba74 \ub808\ub514\uc2a4\uc5d0 \uc800\uc7a5\uc740 \uc5b4\ub5bb\uac8c\ub420\uae4c\u2753",id:"\uadf8\ub807\ub2e4\uba74-\ub808\ub514\uc2a4\uc5d0-\uc800\uc7a5\uc740-\uc5b4\ub5bb\uac8c\ub420\uae4c",level:3}],m={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SCG\uc640 \ud568\uaf10 \uac04\ub2e8\ud55c Api Limiter\ub97c \uad6c\ud604\ud574\ubcf4\uc790! 1\ud3b8"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sk1737030/til/tree/master/./2022-05-01/spring-cloud-gateway-late-limiter"},"\ubaa8\ub4e0 \uc18c\uc2a4"),"\ub294 \uc694\uae30\uc11c \ud655\uc778\uac00\ub2a5\ud569\ub2c8\ub2e4. :)  "),(0,a.kt)("h1",{id:"spring-cloud-gateway\ub97c-\uc0ac\uc6a9\ud574\uc11c-api-limiter-\uad6c\ud604\uc744-\ud574\ubcf4\uc790-1\ud3b8"},"Spring Cloud Gateway\ub97c \uc0ac\uc6a9\ud574\uc11c API Limiter \uad6c\ud604\uc744 \ud574\ubcf4\uc790! 1\ud3b8"),(0,a.kt)("h2",{id:"api-limitier\uac00-\ud544\uc694\ud55c-\uc774\uc720"},"Api Limitier\uac00 \ud544\uc694\ud55c \uc774\uc720?"),(0,a.kt)("p",null,"limiter\ub294 \uc65c \ud544\uc694\ud560\uae4c\ub97c \uba3c\uc800 \uc0dd\uac01\ud574\ubcf4\uba74 \ub2e4\uc591\ud55c \uc774\uc720\uac00 \uc788\uaca0\uc9c0\ub9cc, \uc815\ub9d0 \uac04\ub2e8\ud558\uac8c \uc0dd\uac01\ud574\ubcf4\uba74 10\ucd08 \uac78\ub9ac\ub294 \ud5e4\ube44\ud55c api\uac00 \uc788\uc744 \ub54c client\ub4e4\uc774 \uc9e7\uc740 \uc2dc\uac04\uc5d0 API\ub97c \ubb34\ubd84\ubcc4\ud558\uac8c \uc694\uccad\ud558\uac8c \ub418\uba74 \uc6b0\ub9ac\uc758 \uc11c\ubc84\ub294 ",(0,a.kt)("del",{parentName:"p"},"\ub054\ucc0d\ud55c \uacb0\ub9d0"),"\uc744 \ub9de\uac8c \ub420 \uac83\uc774\ub2e4.\n\uc800\ub7f0 \ub2e8\uc21c\ud55c \uc774\uc720\ub9d0\uace0\ub3c4 \uc0ac\uc6a9\uc790\ubcc4 \ucc28\ub4f1(A \uc0ac\uc6a9\uc790\ub294 \ucd08\ub2f9 3\ubc88 \uc694\uccad, B \uc0ac\uc6a9\uc790\ub294 \ucd08\ub2f9 30\ubc88 \uc694\uccad)\uc744 \uc904 \uc218\ub3c4 \uc788\uace0 \ub4f1\ub4f1 \uc5ec\ub7ec \uac00\uc9c0 \uc774\uc810\uc774 \uc0dd\uae34\ub2e4. ",(0,a.kt)("del",{parentName:"p"},"\uadf8\ub7ec\ubbc0\ub85c \uc815\ub9d0 \uaf2d \ud558\ub098\ucbe4\uc740 \uc774\ucc38\uc5d0 \uc7a5\ub9cc\ud558\uc2dc\ub294 \uac8c")),(0,a.kt)("p",null,"\uc5ec\ub7ec \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c\ub3c4 api limiter\ub97c apllicaiton \ub2e8\uc5d0\uc11c \uad6c\ud604\ud560 \uc218 \uc788\uaca0\uc9c0\ub9cc,  \ube60\ub974\uace0 \uc815\ud655\ud558\uace0 serializable\ud558\uac8c  Api Limiter\ub97c \uad6c\ud604\ud558\ub294 \uac74 \uc815\ub9d0 \ud558\ub098\ubd80\ud130 \uc5f4\uae4c\uc9c0 \uc0dd\uac01\ud574\uc57c \ud560 \uac8c \ub9ce\uace0 ",(0,a.kt)("strong",{parentName:"p"},"\ub108\ubb34 \uc5b4\ub835\ub2e4"),"(",(0,a.kt)("del",{parentName:"p"},"\ub098\uc5d0\uac8c\ub294"),"). "),(0,a.kt)("p",null,"\uadf8\ub807\ub2e4\uba74, \uc5b4\ub5bb\uac8c \uc870\uae08 \uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\ub294\uac00\ub97c \ucc3e\uc544\ubcf4\uba74!!  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"http://www.yes24.com/Product/Goods/102819435"},"\uac00\uc0c1 \uba74\uc811 \uc0ac\ub840\ub85c \ubc30\uc6b0\ub294 \ub300\uaddc\ubaa8 \uc2dc\uc2a4\ud15c \uc124\uacc4 \uae30\ucd08\ub77c\ub294 \ucc45\uc5d0\uc11c")),"  \ud78c\ud2b8\ub97c \uc5bb\uc744 \uc218 \uc788\ub294\ub370,\n\ud575\uc2ec\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"Redis + Lua Script"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uad6c\ud604\ud558\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("admonition",{title:"\uc65c Lua Script\uc77c\uae4c??",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Redis Document\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\ub294\ub370, \ub8e8\uc544 \uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc2e4\ud589\ub418\ub294 \ub3d9\uc548 \uc77c\ub2e8 \ub808\ub514\uc2a4\ub294 blocked \uc0c1\ud0dc\uac00 \ub41c\ub2e4. \uc989 \ub808\ub514\uc2a4\ub294 \ub8e8\uc544 \uc2a4\ud06c\ub9bd\ud2b8\uac00 atomic \ud558\uac8c \uc2e4\ud589\ud558\ub294 \uac78 \ubcf4\uc7a5\ud558\uae30 \ub54c\ubb38\uc5d0 RateLimite\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uac8c \ub41c\ub2e4.")),(0,a.kt)("p",null,"\uadf8\ub807\ub2e4\uba74, \uc815\ub9d0 \uc870\uae08\ub9cc \ub354\uc6b1\ub354 \uc695\uc2ec\uc744 \ub0b4\uc11c \uc694\uc998\uac19\uc774 \ub300 MS \uc2dc\ub300\uc5d0 \uc5ec\ub7ec Applicaiton\uc5d0 Route \uc5ed\ud560\ub3c4 \ud558\uace0 Gateway \uc5ed\ud560\ub3c4 \ud558\uba74\uc11c \uac70\uae30\uc5d0 \ub354\ud558\uc5ec Limiter\uae4c\uc9c0 \uc9c0\uc6d0\ud55c\ub2e4\uba74 \uc5bc\ub9c8\ub098 \uc88b\uc744\uae4c?\n\uadfc\ub370 \uadf8\ub7f0 \ud314\ubc29\ubbf8\uc778\uc758 \ubb34-\uce5c \uce90\ub9ac\uba38\uc2e0\uc774 \uc788\uc73c\ub2c8"),(0,a.kt)("h2",{id:"spring-cloud-gateway"},(0,a.kt)("a",{parentName:"h2",href:"https://docs.spring.io/./2022-05-01/spring-cloud-gateway/docs/2.2.9.RELEASE/reference/html/"},"Spring Cloud Gateway")),(0,a.kt)("p",null,"Spring Cloud Gateway\ub97c \uc815\ub9d0 \uc815-\ub9d0 \uac04\ub2e8\ud558\uac8c  \uc18c\uac1c\ud558\uba74 \uadf8\ub0e5 Gateway \uc5ed\ud560\uc744 \ud55c\ub2e4."),(0,a.kt)("p",null,"\uc6b0\ub9ac\uc758 \uc704\ud0a4\uc5d0\ub294 Gateway\ub97c \uc124\uba85 \uc798\ud574\ub1a8\ub294\ub370, ",(0,a.kt)("strong",{parentName:"p"},"\uac8c\uc774\ud2b8\uc6e8\uc774"),"\ub294 \ucef4\ud4e8\ud130 \ub2e4\ub978 \ub124\ud2b8\uc6cc\ud06c\ub85c \ub4e4\uc5b4\uac00\ub294 \uc785\uad6c \uc5ed\ud560\uc744 \ud558\ub294 \ub124\ud2b8\uc6cc\ud06c \ud3ec\uc778\ud2b8\uc774\ub2e4. \ub113\uc740 \uc758\ubbf8\ub85c\ub294 \uc885\ub958\uac00 \ub2e4\ub978 \ub124\ud2b8\uc6cc\ud06c \uac04\uc758 \ud1b5\ub85c\uc758 \uc5ed\ud560\uc744 \ud558\ub294 \uc7a5\uce58\uc774\ub2e4. \uc27d\uac8c \uc608\ub97c \ub4e4\uc790\uba74 \ud574\uc678\uc5ec\ud589\uc744 \ub4e4 \uc218 \uc788\ub294\ub370 \ud574\uc678\ub85c \ub098\uac00\uae30 \uc704\ud574\uc11c \uaf2d \ud1b5\uacfc\ud574\uc57c \ud558\ub294 \uacf5\ud56d\uc774 \uac8c\uc774\ud2b8\uc6e8\uc774\uc640 \uac19\uc740 \uac1c\ub150\uc774\ub2e4. MSA\ud658\uacbd\uc5d0\uc11c \uc815\ub9d0 \ube7c\ub193\uc744 \uc218 \uc5c6\ub294 \uad6c\ud604\ud574\uc57c \ud560 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc911 \ud558\ub098\uc774\ub2e4."),(0,a.kt)("p",null,"\ub300\ud45c\uc801\uc778 \uae30\ub2a5\uc73c\ub85c \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc9c0\ub9cc \ub0b4\uac00 \uc0ac\uc6a9\ud558\ub294 \uae30\ub2a5\ub4e4\ub9cc \ucd94\ub9ac\uba74  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Router \uc5ed\ud560"),(0,a.kt)("li",{parentName:"ul"},"\uac01\uc885 Filter"),(0,a.kt)("li",{parentName:"ul"},"LB \uae30\ub2a5"),(0,a.kt)("li",{parentName:"ul"},"Security")),(0,a.kt)("p",null,"\ub4f1\ub4f1 \uc9c4\uc9dc \uc218\ub9ce\uc740 \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uace0 \uc788\uc73c\ub2c8 \uc54c\uc544\ubcf4\uba74 \ub098\uc911\uc5d0 \ud55c \ubc88\uc529 \uc368\uba39\uac8c\ub41c\ub2e4. "),(0,a.kt)("p",null,"\uadf8 \uc911 Gateway Filter \uc911\uc5d0 RequestRateLimiter \ub77c\ub294 \ub140\uc11d\uc774 \uc788\ub294\ub370 \uc774 \ub140\uc11d\uc744 \uc798 \uc368\uba39\uc73c\uba74 \uc190 \ud55c \ubc88 \uae4c\ub531\uc73c\ub85c Api Limiter\uac00 \uc9dc\ub780 \uad6c\ud604\uc774\ub41c\ub2e4."),(0,a.kt)("h2",{id:"spring-gateway-limiter"},"Spring Gateway Limiter"),(0,a.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c Spring Gateway\ub294 RateLimite\ub97c Redis\uc640 lua\ub97c \uc0ac\uc6a9\ud558\uc5ec \uad6c\ud604\uc744\ud574\ub1a8\ub294\ub370 \uc6b0\ub9ac\ub294 \uc774\uac78\ub85c \uc0ac\uc6a9\ud558\uae30\ub9cc \ud558\uba74 \ub41c\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"ext {\n    set('springCloudVersion', \"2020.0.5\")\n}\n\ndependencies {\n    implementation 'org.springframework.cloud:spring-cloud-starter-gateway'\n    implementation 'org.springframework.boot:spring-boot-starter-data-redis-reactive'\n    runtimeOnly 'com.h2database:h2'\n\n    testImplementation 'org.springframework.boot:spring-boot-starter-test'\n    testImplementation 'org.junit.jupiter:junit-jupiter:5.7.1'\n}\n\ndependencyManagement {\n    imports {\n        mavenBom \"org.springframework.cloud:spring-cloud-dependencies:${springCloudVersion}\"\n    }\n}\n\ntasks.named('test') {\n    useJUnitPlatform()\n}\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\uae30\ubcf8-\uad6c\ud604"},"\uae30\ubcf8 \uad6c\ud604"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class CustomUserKeyResolver() {\n    @Bean\n    KeyResolver userKeyResolver() {\n        return exchange -> Mono.just(exchange.getRequest().getQueryParams().getFirst("userId"));    \n    }\n}\n')),(0,a.kt)("p",null,"keyResolver\ub97c \uc138\ud305\uc744 \uba3c\uc800 \ud574\uc900\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","return\ud574\uc8fc\ub294 key\ub97c \uac00\uc9c0\uace0 \ub4a4\uc5d0\uc11c \uad6c\ubd84\uc744 \ud558\ubbc0\ub85c \ud544\uc218\uc801\uc73c\ub85c \uad6c\ud604\uc744 \ud574\uc57c \ud55c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","getParameter\ub85c userId\uac00 \ub4e4\uc5b4\uc628\ub2e4\ub294 \uac00\uc815\ud558\uc5d0 \uad6c\ud604\ud558\uc600\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},'spring:\n  cloud:\n    gateway:\n      routes:\n      - id: rate_limiter_route\n        uri: http://localhost:19000\n        filters:\n        - name: RequestRateLimiter\n          args:\n            key-resolver: "#{@userKeyResolver}"\n            redis-rate-limiter.replenishRate: 1\n            redis-rate-limiter.burstCapacity: 10\n            redis-rate-limiter.requestedTokens: 1\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"key-resolver")," \uc6b0\ub9ac\uac00 \uc120\uc5b8\ud55c bean\uc774\ub984\uc744 \uc8fc\uc785 \ud574 \uc900\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"requestedTokens")," \uc694\uccad\uc2dc\uc5d0 \uc18c\ubaa8\ub418\ub294 \ud1a0\ud070\uc758 \uac1c\uc218",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"burstCapacity")," \ubc84\ud0b7\uc758 \ub2f4\uaca8\uc838\uc788\ub294 \ucd5c\ub300\ub7c9",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"replenishRate")," \ucd08\ub2f9 \ubc84\ud0b7 \ud68c\ubcf5\ub7c9   "),(0,a.kt)("br",null),(0,a.kt)("admonition",{title:"RateLimiter \uc54c\uace0\ub9ac\uc998",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"  ",(0,a.kt)("inlineCode",{parentName:"p"},"[Token bucket")," \uc54c\uace0\ub9ac\uc998\uc744](",(0,a.kt)("a",{parentName:"p",href:"https://dev.to/satrobit/rate-limiting-using-the-token-bucket-algorithm-3cjh"},"https://dev.to/satrobit/rate-limiting-using-the-token-bucket-algorithm-3cjh"),") \ub530\ub978\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\uc124\uc815\uc744 \ub2e4 \ud588\uc73c\ub2c8 \ud55c \ubc88 \uc694\uccad\uc744 \ud574\ubcf4\uba74"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(4832).Z,width:"1259",height:"399"})),(0,a.kt)("p",null,"\uc124\uc815\ud55c burstCapacity 10 \uc5d0\uc11c -1 \uc774 \ub41c 9\uac00 remain\uc73c\ub85c header\uc5d0 \uc751\ub2f5\uc774 \uc624\uac8c \ub41c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub3cc\uc544\uc624\ub294 \uc751\ub2f5 \ud5e4\ub354\uac00 \uad81\uae08\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisRateLimiter")," \uc5d0 \uc120\uc5b8\ub418\uc5b4\uc788\ub294 Header\uc5d0\uc11c \ucd94\uac00\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(8566).Z,width:"958",height:"383"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\uadf8\ub807\ub2e4\uba74-\ub808\ub514\uc2a4\uc5d0-\uc800\uc7a5\uc740-\uc5b4\ub5bb\uac8c\ub420\uae4c"},"\uadf8\ub807\ub2e4\uba74 \ub808\ub514\uc2a4\uc5d0 \uc800\uc7a5\uc740 \uc5b4\ub5bb\uac8c\ub420\uae4c\u2753"),(0,a.kt)("p",null,"\uc77c\ub2e8 \ub808\ub514\uc2a4\uc5d0 \uc800\uc7a5\ub418\ub294 \ub370\uc774\ud130 \uc14b\uc744 \ubcf8\ub2e4\uba74",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"redis data",src:n(5163).Z,width:"442",height:"250"})),(0,a.kt)("p",null,"\uc65c \uc774\ub807\uac8c \uc800\uc7a5\ub418\ub294\uc9c0\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisRateLimiter.java"),"\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"getKeys"),"\ub77c\ub294 \uba54\uc18c\ub4dc\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub294\ub370 "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(9606).Z,width:"595",height:"389"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\uc774\uc0c1\uc73c\ub85c \uc6b0\ub9ac\uc758 \ub808\ub514\uc2a4\ub97c \ud65c\uc6a9\ud55c ",(0,a.kt)("del",{parentName:"p"},"\uc6b0\uc544\ud558\uace0 \uae54\ub054\ud55c")," ",(0,a.kt)("strong",{parentName:"p"},"RateLimiter"),"\uac00 \uc644\uc131\ub410\ub2e4!  "),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(2133).Z,width:"420",height:"400"}),"   "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\uc0ac\uc2e4 \uc694\uae30\uae4c\uc9c0\ub9cc\ud574\ub3c4 \uadf8\ub0e5 \uc4f0\uae30\uc5d0\ub3c4 \ub098\uc058\uc9c0 \uc54a\uc9c0\ub9cc \uc870\uae08 \uc544\uc27d\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uadf8\ub7ec\ub098 \uc6b0\ub9ac\uc758 \uae30\ud68d\uc790\ub098 \ube44\uc9c0\ub2c8\uc2a4 \uc694\uad6c\uc0ac\ud56d\uc740 \uc774\ub807\uac8c \uac04\ub2e8\ud558\uc9c0 \uc54a\ub2e4. "),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4,  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ud2b9\uc815 \uc0ac\uc6a9\uc790\uc758 \uc8fc\uc2dd \uc870\ud68c \uc694\uccad\uc744 \ubd84\ub2f9 1\ubc88\uc73c\ub85c \uc124\uc815\uc744 \ud558\uace0 \uc8fc\uc2dd \uc8fc\ubb38\uc744 \ucd08\ub2f9 1\ubc88\ub9cc \uac00\ub2a5\ud558\ub2e4\ub358\uc9c0 "),(0,a.kt)("li",{parentName:"ol"},"\uc18d\ub3c4 \ubb38\uc81c\ub85c \ubcf5\uc7a1\ud558\uace0 \ub9ac\uc18c\uc2a4\uac00 \ub9ce\uc774 \ub4dc\ub294 \uc694\uccad\uc77c \uacbd\uc6b0 \ubd84\ub2f9 1\ubc88\ub9cc \uc694\uccad\ud558\uac8c \ud55c\ub2e4\ub358\uc9c0 "),(0,a.kt)("li",{parentName:"ol"},"\uc9c0\uae08 redis\uc5d0\ub294 timestamp\uc640 tokenKey 2\uac1c\ub9cc \ub4e4\uc5b4\uac00 \uc788\ub294\ub370 \ub2e4\ub978 \ucd94\uac00\uc801\uc778 \uc815\ubcf4\ub3c4 \ub123\uace0 \uc2f6\ub2e4\ub4e0\uc9c0"),(0,a.kt)("li",{parentName:"ol"},"Redis TTL\uc744 \ub354 \uae38\uac8c \uc7a1\ub294\ub2e4\ub4e0\uc9c0"),(0,a.kt)("li",{parentName:"ol"},"User \ubcc4\ub85c \uc694\uccad\ub7c9\uc744 \ub2e4\ub974\uac8c \ud558\uace0 \uc2f6\ub2e4\ub4e0\uc9c0 ")),(0,a.kt)("p",null,"\ub0c9\ud639\ud55c \ube44\uc988\ub2c8\uc2a4 \uc138\uacc4\uc5d0\uc11c\ub294 \uc774\uac83\ubcf4\ub2e4\ub3c4 \ub354 \ub9ce\uc740 ",(0,a.kt)("strong",{parentName:"p"},"Limiter"),"\ub85c\uc368\uc758 \ub354 \ub9ce\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\uc5ed\ud560"),"\uacfc ",(0,a.kt)("strong",{parentName:"p"},"\ucc45\uc784")," \uc744 \uc694\uad6c\ud558\uac8c \ub418\ub294\ub370, \uae30\ubcf8\uc801\uc73c\ub85c \uc81c\uacf5\ud558\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"RateLimiter"),"\ub85c\ub294 \uc791\uc5c5\uc774 \uc5b4\ub835\ub2e4. \uadf8\ub798\uc11c \uc870\uae08\uc758 \ucee4\uc2a4\ud140\uc744 \ud574\uc57c \ud560 \ud544\uc694\uac00 \uc788\ub2e4. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://sk1737030.github.io/RateLimiter2"},"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790! 2\ud3b8")))}u.isMDXComponent=!0},4832:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 1-4ef26521487f3e6eb404c129a7202a71.png"},8566:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 2-ffeaf9a6b2278df65cb324c3025fb3bb.png"},5163:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 3-ad19f11a4a537ede38836d094218f5d6.png"},9606:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 4-6f82ffe1e1d20de59fd1ef77f2691d8b.png"},2133:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 5-973e34629559a1b47cececb37fc445fd.png"}}]);