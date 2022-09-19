"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9395],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),g=r,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={title:"Container \ud658\uacbd\uc5d0\uc11c\uc758 JVM GC",description:"\ucee8\ud14c\uc774\ub108 \ud658\uacbd\uc5d0\uc11c\uc758 JVM GC\ub294 \ubb34\uc5c7\uc774 \uc120\ud0dd\ub420\uae4c?",slug:"container-gc",authors:"dongle",tags:["Kubernate","Container","JVM","Java"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},i=void 0,o={permalink:"/container-gc",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2022-05-02-JVM-GC-IN-KUBERNATE.md",source:"@site/blog/2022-05-02-JVM-GC-IN-KUBERNATE.md",title:"Container \ud658\uacbd\uc5d0\uc11c\uc758 JVM GC",description:"\ucee8\ud14c\uc774\ub108 \ud658\uacbd\uc5d0\uc11c\uc758 JVM GC\ub294 \ubb34\uc5c7\uc774 \uc120\ud0dd\ub420\uae4c?",date:"2022-05-02T00:00:00.000Z",formattedDate:"May 2, 2022",tags:[{label:"Kubernate",permalink:"/tags/kubernate"},{label:"Container",permalink:"/tags/container"},{label:"JVM",permalink:"/tags/jvm"},{label:"Java",permalink:"/tags/java"}],readingTime:7.58,hasTruncateMarker:!0,authors:[{name:"Dongle",title:"Junior Backend Developer",url:"https://github.com/sk1737030",imageURL:"https://github.com/sk1737030.png",key:"dongle"}],frontMatter:{title:"Container \ud658\uacbd\uc5d0\uc11c\uc758 JVM GC",description:"\ucee8\ud14c\uc774\ub108 \ud658\uacbd\uc5d0\uc11c\uc758 JVM GC\ub294 \ubb34\uc5c7\uc774 \uc120\ud0dd\ub420\uae4c?",slug:"container-gc",authors:"dongle",tags:["Kubernate","Container","JVM","Java"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},prevItem:{title:"\uae4c\uba39\uc5b4\uc11c \ub2e4\uc2dc \ubcf4\ub294 Generic",permalink:"/generic"},nextItem:{title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790! 2\ud3b8",permalink:"/RateLimiter2"}},s={authorsImageUrls:[void 0]},c=[{value:"Jdk 11\uc758 GC\ub294 \ubb34\uc870\uac74 G1GC\uc8e0!",id:"jdk-11\uc758-gc\ub294-\ubb34\uc870\uac74-g1gc\uc8e0",level:2},{value:"\ubc1c\ub2e8",id:"\ubc1c\ub2e8",level:3},{value:"\uc815\ub9d0\uc77c\uae4c?",id:"\uc815\ub9d0\uc77c\uae4c",level:3},{value:"\uc758\uc2ec",id:"\uc758\uc2ec",level:3},{value:"\uce68\ucc29",id:"\uce68\ucc29",level:3},{value:"Serail Collector",id:"serail-collector",level:3},{value:"G1GC",id:"g1gc",level:3},{value:"\uc6d0\uc778",id:"\uc6d0\uc778",level:3},{value:"\ubcc0\uacbd",id:"\ubcc0\uacbd",level:3}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ub2f9\uc5f0\ud788 \uc6b0\ub9ac\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 GC\ub294 \ub2f9\uc5f0\ud788 G1GC\ub97c \uc4f0\uace0 \uc788\uaca0\uc9c0\ub77c\uace0 \ud55c\uce58\uc758 \uc758\uc2ec \uc5c6\uc774 \uc0dd\uac01\uc744 \ud588\uc5c8\ub2e4. \uc544\ub2c8 \uc801\uc5b4\ub3c4 Jdk 11\uc744 \uc0ac\uc6a9\ud558\uba74\uc11c GC\ub97c zgc vs g1gc\ub97c \ubb58 \uc368\uc57c \ub354 \uc88b\uc744\uae4c \uc774\ub7f0 \uc0dd\uac01\ub9cc \ud588\uc5c8\uc9c0 \uc124\ub9c8 ",(0,r.kt)("strong",{parentName:"p"},"G1GC vs Serial\xa0Collector"),"\ub97c \uace0\ubbfc\uc744 \ud558\uace0 \uc788\uc744 \uc904\uc774\uc57c! \uafc8\uc5d0\uc11c\ub3c4 \uc0dd\uac01\uc744 \ubabb\ud588\ub2e4. \uacb0\ub860\ubd80\ud130 \ub9d0\ud558\uc790\uba74 Container \ud658\uacbd\uc5d0\uc11c Cpu\uc640 \uba54\ubaa8\ub9ac\uc5d0 \ub530\ub77c\uc11c GC\uc120\ud0dd\uc774 g1gc\uac00 \ub420 \uc218\ub3c4 \uc788\uace0 \uc544\ub2d0 \uc218\ub3c4 \uc788\ub2e4."),(0,r.kt)("h2",{id:"jdk-11\uc758-gc\ub294-\ubb34\uc870\uac74-g1gc\uc8e0"},"Jdk 11\uc758 GC\ub294 \ubb34\uc870\uac74 G1GC\uc8e0!"),(0,r.kt)("p",null,"\ub2f9\uc5f0\ud788 \uc6b0\ub9ac\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 GC\ub294 \ub2f9\uc5f0\ud788 G1GC\ub97c \uc4f0\uace0 \uc788\uaca0\uc9c0\ub77c\uace0 \ud55c\uce58\uc758 \uc758\uc2ec \uc5c6\uc774 \uc0dd\uac01\uc744 \ud588\uc5c8\ub2e4. \uc544\ub2c8 \uc801\uc5b4\ub3c4 Jdk 11\uc744 \uc0ac\uc6a9\ud558\uba74\uc11c GC\ub97c zgc vs g1gc\ub97c \ubb58 \uc368\uc57c \ub354 \uc88b\uc744\uae4c \uc774\ub7f0 \uc0dd\uac01\ub9cc \ud588\uc5c8\uc9c0 \uc124\ub9c8 ",(0,r.kt)("strong",{parentName:"p"},"G1GC vs Serial\xa0Collector"),"\ub97c \uace0\ubbfc\uc744 \ud558\uace0 \uc788\uc744 \uc904\uc774\uc57c! \uafc8\uc5d0\uc11c\ub3c4 \uc0dd\uac01\uc744 \ubabb\ud588\ub2e4. \uacb0\ub860\ubd80\ud130 \ub9d0\ud558\uc790\uba74 Container \ud658\uacbd\uc5d0\uc11c Cpu\uc640 \uba54\ubaa8\ub9ac\uc5d0 \ub530\ub77c\uc11c GC\uc120\ud0dd\uc774 g1gc\uac00 \ub420 \uc218\ub3c4 \uc788\uace0 \uc544\ub2d0 \uc218\ub3c4 \uc788\ub2e4."),(0,r.kt)("h3",{id:"\ubc1c\ub2e8"},"\ubc1c\ub2e8"),(0,r.kt)("p",null,"\uc77c\ub2e8 \uc6b0\ub9ac\ub294 \ud754\ud558\ub514 \ud754\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubernate"),"\uc758 \uba4b\uc788\ub294 \uc624\ucf00\uc2a4\ud2b8\ub77c\ub97c \uc5f0\uc8fc\ub97c \ud558\uba70 ",(0,r.kt)("inlineCode",{parentName:"p"},"Container"),"\ud658\uacbd\uc5d0\uc11c app\uc744 \ubc30\ud3ec\ud558\uace0 \uad00\ub9ac\ud558\uace0 \uc788\ub2e4. \uc5b4\ub290\ub0a0 Slack\uc5d0 \ud06c\ub8e8 \uc911 \ub204\uad70\uac00\uac00 \uc6b0\ub9ac \ub2f9\uc5f0\ud788 g1gc \uc4f0\uace0 \uc788\uc8e0? \ub77c\uace0 \uc62c\ub77c\uc640\uc11c \ub098\ub294 \uc5e5? \ub2f9\uc5f0\ud55c \uac70 \uc544\ub2cc\uac00\ub77c\uace0 \uc0dd\uac01\uc744 \ud558\uace0 \ub2e4\ub978 \uc77c\uc744 \ud588\ub294\ub370 \ub2e4\ub978 \ud06c\ub8e8\uac00 \uc6b0\ub9ac ",(0,r.kt)("strong",{parentName:"p"},"Serial\xa0Collector")," \uc778 \uac70 \uac19\uc740\ub370\uc694??? \ub77c\uace0 \ub2f5\uc7a5\uc744 \ub2ec\uc558\ub2e4.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\uc544\ub2c8 \uc774\uac8c \ubb54 \uac1c \uc18c\ub9ac\uc57c!",src:a(7733).Z,width:"236",height:"213"}),"  "),(0,r.kt)("h3",{id:"\uc815\ub9d0\uc77c\uae4c"},"\uc815\ub9d0\uc77c\uae4c?"),(0,r.kt)("p",null,"\ub098\ub294 \uc6b0\ub9ac jdk11 \ubc84\uc804 \uc4f0\ub294\ub370? \uadf8\ub7f4 \ub9ac\uac00 \uc788\uc5b4? \uc5d0\uc774 \uc798\ubabb \ubd24\uaca0\uc9c0\ub77c\uace0 \uc0dd\uac01\uc744 \ud558\uace0 \uc88b\uc544 \ub0b4 \ub208\uc73c\ub85c \ud655\uc778\uc744 \ud574\ubd10\uc57c\uc9c0\ub77c\uba70 container\uc5d0  \ub4e4\uc5b4\uac00\uc11c \ud655\uc778\uc744 \ud574 \ubd24\ub294\ub370"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'> java -XX:+PrintCommandLineFlags -version\n\nPicked up JAVA_TOOL_OPTIONS:\n...\n-XX:+SegmentedCodeCache \n-XX:+UseCompressedClassPointers \n-XX:+UseCompressedOops \n**-XX:+UseSerialGC** \n\nopenjdk version "11.0.13" 2021-10-19\nOpenJDK Runtime Environment (build 11.0.13+8-post-Debian-1deb11u1)\nOpenJDK 64-Bit Server VM (build 11.0.13+8-post-Debian-1deb11u1, mixed mode)\n')),(0,r.kt)("p",null,"\uc77c\ub2e8 \ub2e4\ub978 Java_Tool Option\uc774 \uc788\uc5c8\uc9c0\ub9cc \ub2e4 \uc0dd\ub7b5\ud558\uace0 \uba3c\uc800 OpenJdk \uc0ac\uc6a9 \uc911\uc774\uace0 Version\uc740 11.0.13\uc744 \uc0ac\uc6a9\ud558\ub294 \uac78 \ud655\uc778\ud558\uace0, \uc635\uc158\uc744 \ubd24\ub294\ub370 ",(0,r.kt)("inlineCode",{parentName:"p"},"-XX:+UseSerialGC"),"  (",(0,r.kt)("del",{parentName:"p"},"\uc544\ub2c8 \ud615\uc774 \uc65c \uc694\uae30\uc11c \ub098\uc640"),")  "),(0,r.kt)("h3",{id:"\uc758\uc2ec"},"\uc758\uc2ec"),(0,r.kt)("p",null,"\ub108\ubb34 \ub180\ub77c\uc11c, \uc9c0\uae08 \uc0dd\uac01\ud574\ubcf4\uba74 \ub9d0\ub3c4 \uc548 \ub418\ub294 \uc5ec\ub7ec \uc758\uc2ec\ub4e4\uc744 \ud588\ub294\ub370 "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc800 JDK \ubc84\uc804\uc774 \ubb38\uc81c\uac00 \uc788\uc5b4\uc11c \ubb34\uc870\uac74 SerialGC\ub97c \uc8fc\uc785 \ud560 \uac83\uc774\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub77c\uace0 \uc0dd\uac01\uc744 \ud588\uc9c0\ub9cc, \uc0ac\uc2e4 \ub9d0\ub3c4 \uc548 \ub41c\ub2e4 \ubb34\uc2a8 \ub3d9\ub124 OpenJdk\ub3c4 \uc544\ub2c8\uace0 \uc774 \uc0dd\uac01\uc740 \uae08\ubc29 \ub118\uc5b4\uac14\ub2e4"))),(0,r.kt)("li",{parentName:"ol"},"\ub204\uad70\uac00\uac00 \uc8fc\uc785\uc744 \ud588\uc744 \uac83\uc774\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub204\uad70\uac00\uac00 build\ub97c \ud560 \ub54c \uc8fc\uc785\uc744 \ud574\ub1a8\uc744 \uac70\ub77c\uace0 \uc0dd\uac01\uc744 \ud558\uace0 build\ubd80\ubd84\uc744 \uc720\uc2ec\ud788 \ubd24\uc9c0\ub9cc SerialGC\uc758 S\ub3c4 \ucc3e\uc544\ubcfc \uc218 \uc5c6\uc5c8\ub2e4."))),(0,r.kt)("li",{parentName:"ol"},"\uc800 \uc635\uc158\uc774 \ubcf4\uc5ec\uc8fc\ub294 \uac74 \uac00\uc9dc\uc57c!")),(0,r.kt)("p",null,"\ub4f1\ub4f1 \uc9c4\uc9dc \ub9d0\ub3c4 \uc548 \ub418\ub294 \uc758\uc2ec\ub4e4\uc744 \ud558\uae30 \uc2dc\uc791\ud588\ub2e4."),(0,r.kt)("h3",{id:"\uce68\ucc29"},"\uce68\ucc29"),(0,r.kt)("p",null,"\uc0ac\uc2e4 \uc704\uc5d0 \uc800\ub7f0 \uc758\uc2ec \ub9d0\uace0\ub3c4 \uc5ec\ub7ec \uac00\uc815\uacfc \uc218\ub9ce\uc740 \uc758\uc2ec\ub4e4\uc744 \ud588\uc5c8\ub2e4. \uadf8\ub7ec\ub2e4\uac00 \ud604\uc2e4\uc744 \ubc1b\uc544\ub4e4\uc774\uace0 \uc65c SerialGC\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uc5c8\uc744\uae4c\ub77c\uace0 \uc0dd\uac01\uc744 \ud588\ub2e4. \uc0ac\uc2e4 \ub09c \ub098\ubcf4\ub2e4 Kube\ud658\uacbd\uc5d0\uc11c\uc758 Container\uac00 \uc790\ub3d9\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\uc800\ub807\uac8c \uc124\uc815\ud55c \uc774\uc720\uac00 \uc788\uaca0\uc9c0\ub77c\uace0")," \ub354 \ubbff\uae30 \ub54c\ubb38\uc5d0 \uc624\ub79c\ub9cc\uc5d0 SeraliGC\uc640 G1GC\ub97c \ub2e4\uc2dc \ud655\uc778\ud574 \ubcf4\uae30\ub85c \ud588\ub2e4."),(0,r.kt)("h3",{id:"serail-collector"},"Serail Collector"),(0,r.kt)("p",null,"The serial collector uses a single thread to perform all garbage collection work, which makes it relatively efficient because there is no communication overhead between threads."),(0,r.kt)("p",null,"It's best-suited to single processor machines because it can't take advantage of multiprocessor hardware, although it can be useful on multiprocessors for applications with small data sets (up to approximately 100 MB). The serial collector is selected by default on certain hardware and operating system configurations, or can be explicitly enabled with the option\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"-XX:+UseSerialGC"),"."),(0,r.kt)("p",null,"\uac00\uc7a5 \uc911\uc694\ud55c \ud575\uc2ec\uc740 ",(0,r.kt)("strong",{parentName:"p"},"Single processor")," \uc77c \ub54c Best Suite\uc774\ub2e4. \ubb3c\ub860 \uc791\uc740 \uba54\ubaa8\ub9ac \ub370\uc774\ud130\uc14b(up to approximately 100 MB)\uc744 \uc0ac\uc6a9\ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\ub294 \uba40\ud2f0 \ud504\ub85c\uc138\uc11c\uc77c \uacbd\uc6b0 \uc4f8\ub9cc\ud558\uae34 \ud558\ub098 \ubcc4\ub85c \uc0ac\uc6a9\uc744 \uc548 \ud55c\ub2e4."),(0,r.kt)("h3",{id:"g1gc"},"G1GC"),(0,r.kt)("p",null,"java 9 \ubd80\ud130 \ucc44\ud0dd\ud55c default GC\uc774\ub2e4. "),(0,r.kt)("p",null,"The Garbage-First (G1) garbage collector is targeted for ",(0,r.kt)("strong",{parentName:"p"},"multiprocessor machines")," ",(0,r.kt)("strong",{parentName:"p"},"with a large amount of memory"),". It attempts to meet garbage collection pause-time goals with high probability while achieving high throughput with little need for configuration. G1 aims to provide the best balance between latency and throughput using current target applications and environments whose features include:\n\u3139\ub9d0\ub3c4\n\uac00\uc7a5 \uc911\uc694\ud55c \ud575\uc2ec\uc740 Gabage First GC\uc740 \ub192\uc740 \uba54\ubaa8\ub9ac \ub7c9\uacfc \ub2e4\uc911 \ud504\ub85c\uc138\uc11c\ub97c \ud0c0\uae43\uc73c\ub85c \uc0bc\uace0, \ube60\ub978 \ucc98\ub9ac\ub97c \uc9c0\uc6d0\ud558\uc5ec STW\ub97c \uc904\uc778\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,r.kt)("h3",{id:"\uc6d0\uc778"},"\uc6d0\uc778"),(0,r.kt)("p",null,"\uc6d0\uc778\uc740 ",(0,r.kt)("a",{parentName:"p",href:"https://developers.redhat.com/articles/2022/04/19/java-17-whats-new-openjdks-container-awareness#tuning_defaults_for_containers"},"RedHat\ubb38\uc11c"),"\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc5c8\ub294\ub370"),(0,r.kt)("admonition",{title:"Java 11GC In Container",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For Java 11+ it's also useful to know which GC is being used, and you can display this information via\xa0-Xlog:gc=info. For example, when container limits allow only a single CPU to be active, the Serial GC will be selected. ",(0,r.kt)("inlineCode",{parentName:"p"},"If more than one CPU is active and sufficient memory (at least 2GB) is allocated to the container, the G1 GC will be selected in Java 11 and later versions:"))),(0,r.kt)("p",null,"Container\ud658\uacbd\uc5d0\uc11c\ub294 CPU Core\ub97c 2\uac1c \uc774\uc0c1 \uc0ac\uc6a9\ud558\uba74\uc11c Memory\uac00 2G \uc774\uc0c1\uc774\uc5ec\uc57c G1GC\uac00 \ucc44\ud0dd\ub41c\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.redhat.com/articles/2022/04/19/best-practices-java-single-core-containers#the_jvm_as_a_dynamic_execution_platform"},"\uc544\ub9c8\ub3c4  \ucf54\ub4dc\uc5d0\uc11c\ub294 \uc774\ub7f0 \ub290\ub08c\uc774\uc9c0 \uc54a\uc744\uae4c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"void GCConfig::select_gc_ergonomically() {\n  if (os::is_server_class_machine()) {\n#if INCLUDE_G1GC\n    FLAG_SET_ERGO_IF_DEFAULT(UseG1GC, true);\n#elif INCLUDE_PARALLELGC\n    FLAG_SET_ERGO_IF_DEFAULT(UseParallelGC, true);\n#elif INCLUDE_SERIALGC\n    FLAG_SET_ERGO_IF_DEFAULT(UseSerialGC, true);\n#endif\n  } else {\n#if INCLUDE_SERIALGC\n    FLAG_SET_ERGO_IF_DEFAULT(UseSerialGC, true);\n#endif\n  }\n}\n\n// This is the working definition of a server class machine:\n// >= 2 physical CPU's and >=2GB of memory\n")),(0,r.kt)("h3",{id:"\ubcc0\uacbd"},"\ubcc0\uacbd"),(0,r.kt)("p",null,"\uc6d0\uc778\uc740 \uc77c\ub2e8 \uc54c\uc558\uc73c\ub2c8\uae4c \uae30\uc874\uc5d0 \ub530\ub85c \uc9c0\uc815\uc744 \uc548 \ud588\ub358 CPU processor\ub97c \ub298\ub9ac\uace0 \uba54\ubaa8\ub9ac\ub3c4 \uc99d\uac00\ub97c \uc2dc\ud0a8 \uacb0\uacfc  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/ # java -XX:+PrintCommandLineFlags -version\nPicked up JAVA_TOOL_OPTIONS: -javaagent:/opt/agent/apm-agent.jar\n-XX:G1ConcRefinementThreads=2 -XX:GCDrainStackTargetSize=64 \n...\n-XX:+UseCompressedOops \n**-XX:+UseG1GC** \nopenjdk version "11.0.13" 2021-10-19\n\nOpenJDK 64-Bit Server VM (build 11.0.13+8-post-Debian-1deb11u1, mixed mode)\n')),(0,r.kt)("p",null,"\uadf8 \ud6c4 \uba70\uce60 \uac04\uaca9\uc73c\ub85c \ubaa8\ub2c8\ud130\ub9c1\uc744 \ud574\ubcf8 \uacb0\uacfc "),(0,r.kt)("p",null,"\uae30\uc874 SerialGC \uc0ac\uc6a9\ud560 \ub54c\uc5d0\ub294 GC\uac00 \uc77c\uc5b4\ub0a0 \ub54c \uc804\ubc18\uc801\uc73c\ub85c pause time\uc774 \uae38\uc5c8\uc2b5\ub2c8\ub2e4. 100ms "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:a(6921).Z,width:"1050",height:"546"}),"  "),(0,r.kt)("p",null,"\ubcc0\uacbd \ud6c4  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:a(857).Z,width:"1028",height:"536"}),"  "),(0,r.kt)("p",null,"\ub354 \ubaa8\ub2c8\ud130\ub9c1\uc744 \ud574 \ubd10\uc57c\uaca0\uc9c0\ub9cc \ub2e4\uc18c 150ms\ub098 \uba39\uc5c8\ub358 Major GC\ubd80\ubd84\uc774 heap size \ubcc0\uacbd \ubc0f cpu processor\uc99d\uac00 GC \ubcc0\uacbd \ud6c4\uc5d0 \uc544\uc9c1 \uc77c\uc5b4\ub098\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucc38\uc870",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/9/gctuning/available-collectors.htm#GUID-45794DA6-AB96-4856-A96D-FDE5F7DEE498"},"https://docs.oracle.com/javase/9/gctuning/available-collectors.htm#GUID-45794DA6-AB96-4856-A96D-FDE5F7DEE498"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://johngrib.github.io/wiki/java-gc-tuning/#serial-collector"},"https://johngrib.github.io/wiki/java-gc-tuning/#serial-collector"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://d2.naver.com/helloworld/1329"},"https://d2.naver.com/helloworld/1329")," - Naver\uc758 GC\uc815\ub9ac\ub294 \ub098\ub9cc \uc77d\uace0 \uc2f6\uc740 Docs \uc911 \ud558\ub098",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/9/gctuning/garbage-first-garbage-collector.htm#JSGCT-GUID-0394E76A-1A8F-425E-A0D0-B48A3DC82B42"},"https://docs.oracle.com/javase/9/gctuning/garbage-first-garbage-collector.htm#JSGCT-GUID-0394E76A-1A8F-425E-A0D0-B48A3DC82B42"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/tutorials/tutorials-1876574.html"},"https://www.oracle.com/technetwork/tutorials/tutorials-1876574.html")," g1gc"))}u.isMDXComponent=!0},6921:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Untitled 1-69ab52e668ab54bc5f495b2da6969372.png"},857:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Untitled 2-09e5e763a52808557fcfbd1cc5897173.png"},7733:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Untitled-1da7573e785643ce48b7c5d578a645bc.png"}}]);