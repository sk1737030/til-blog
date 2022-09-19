"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,k=m["".concat(i,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Concurrent Hash Map\uc744 \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc790. - 1\ud3b8",description:"Make Verrrrry Simple My Concurrent Hash Map -1",slug:"ConcurrentHashMap",authors:"dongle",tags:["Java","Map","ConcurrentHashMap"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/ConcurrentHashMap",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2022-07-30-my-concurrentHashMap.md",source:"@site/blog/2022-07-30-my-concurrentHashMap.md",title:"Concurrent Hash Map\uc744 \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc790. - 1\ud3b8",description:"Make Verrrrry Simple My Concurrent Hash Map -1",date:"2022-07-30T00:00:00.000Z",formattedDate:"July 30, 2022",tags:[{label:"Java",permalink:"/tags/java"},{label:"Map",permalink:"/tags/map"},{label:"ConcurrentHashMap",permalink:"/tags/concurrent-hash-map"}],readingTime:6.97,hasTruncateMarker:!0,authors:[{name:"Dongle",title:"Junior Backend Developer",url:"https://github.com/sk1737030",imageURL:"https://github.com/sk1737030.png",key:"dongle"}],frontMatter:{title:"Concurrent Hash Map\uc744 \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc790. - 1\ud3b8",description:"Make Verrrrry Simple My Concurrent Hash Map -1",slug:"ConcurrentHashMap",authors:"dongle",tags:["Java","Map","ConcurrentHashMap"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},prevItem:{title:"\uc2e0\ub8b0\uc758 \uacfc\ud559\uc601\uc0c1\uc744 \ubcf4\uace0",permalink:"/persuasion"},nextItem:{title:"\ub808\ub514\uc2a4 Atomic Operation\uc704\ud574 multi \uc640 luascript\uc758 \ucc28\uc774",permalink:"/redis-multi-lua"}},i={authorsImageUrls:[void 0]},c=[{value:"ConcurrentHashMap",id:"concurrenthashmap",level:2},{value:"ConcurrentMap",id:"concurrentmap",level:3},{value:"\uadf8\ub807\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ub3d9\uc2dc\uc131\uc744 \ubcf4\uc7a5\ud560\uae4c?",id:"\uadf8\ub807\ub2e4\uba74-\uc5b4\ub5bb\uac8c-\ub3d9\uc2dc\uc131\uc744-\ubcf4\uc7a5\ud560\uae4c",level:2},{value:"\uac04\ub2e8\ud55c \uc131\ub2a5\ud14c\uc2a4\ud2b8",id:"\uac04\ub2e8\ud55c-\uc131\ub2a5\ud14c\uc2a4\ud2b8",level:2}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ConcurrentHashMap \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc790"),(0,r.kt)("p",null,"\ubaa8\ub4e0 \uc18c\uc2a4\ucf54\ub4dc\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sk1737030/til/tree/master/simple-concurrenthashmap"},"\uc774\uacf3"),"\uc5d0\uc11c \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4!  "),(0,r.kt)("h1",{id:"concurrenthashmap-\uac04\ub2e8\ud558\uac8c-\ub9cc\ub4e4\uc5b4\ubcf4\uc790"},"ConcurrentHashMap \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc790"),(0,r.kt)("p",null,"\ub3d9\uc2dc\uc131 \ubb38\uc81c \ubc0f \uc77c\uad00\uc131\uc744 \uc704\ud574 Key Value \uad6c\uc870\ub85c \uc0ac\uc6a9\ud560 \ub54c \uac00\uc7a5 \uc27d\uac8c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"CoucurrentHashMap")," \uc774\uc600\uc9c0\ub9cc \ubd80\ub044\ub7fd\uac8c\ub3c4 \ud56d\uc0c1 \ub0b4\ubd80\uad6c\uc870\ub97c \ubcf4\uace0 \uc774\ub807\uac8c \ub3d9\uc2dc\uc131\uc744 \ubcf4\uc7a5\ud558\ub294 \uac70\uad6c\ub098\ub77c\uace0 \uc0dd\uac01\ub9cc \ud558\uace0 \ub9e4\ubc88 \ub118\uacbc\uc5c8\ub294\ub370 \uc774\ubc88 \uae30\ud68c\uc5d0 \uc815\ub9ac\ud558\uace0 \ud55c \ubc88 \uc2a5-\uc0ad \ub9cc\ub4e4\uc5b4 \ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4. \uadf8\ub798\uc11c \uacb0\uc815\ud55c \uc81c\ubaa9\uc740 \uac04\ub2e8\ud558\uac8c ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap")," \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4\ubcf4\uc790"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"concurrenthashmap"},"ConcurrentHashMap"),(0,r.kt)("p",null,"\ubb50 \uc5ec\ud0c0 \ub2e4\ub978 \ub9d0\uc744 \uc0dd\ub7b5\ud558\uace0 ConcurrentHashMap \ub9d0\uace0\ub3c4 \uc5ec\ub7ec Map\uc758 \uad6c\ud604\uccb4\ub4e4\uc774 \uc788\ub294\ub370, \uc65c \ud544\uc694\ub85c \ud588\uc744\uae4c\ub97c \uba3c\uc800 \uc0dd\uac01\ud574\ubcf8\ub2e4\uba74 \ud06c\uac8c 2\uac00\uc9c0 \uc815\ub3c4\uac00 \uc788\uc744 \uac70 \uac19\uc740\ub370\uc694.  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc6b0\ub9ac\uac00 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"thread-safe")," \ud558\uc9c0 \uc54a\uc740 java collection\uc785\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Hashtable"),"\uc740 ",(0,r.kt)("strong",{parentName:"p"},"thread-safe"),"\ud558\ub098 synchronized method \ub808\ubca8\uc5d0 \uc0ac\uc6a9\uc744\ud558\uc5ec \ube44\uc6a9\uc774 \ub9e4\uc6b0 \ube44\uc309\ub2c8\ub2e4."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc989 \ub2e4\uc2dc \ub9d0\ud574 \ube44\uc6a9\uc774 \ub9ce\uc774\ub4dc\ub294 \uc774\uc720\ub294 Race condition(\uacbd\uc7c1\uc0c1\ud0dc)\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 code block\uc744 synchronized \ud0a4\uc6cc\ub4dc\ub85c \uac10\uc2f8\uba74, \ud558\ub098\uc758 \uc2a4\ub808\ub4dc\ub9cc \uc774 \uc9c4\uc785\ud560 \uc218 \uc788\ub294\ub370, ",(0,r.kt)("inlineCode",{parentName:"li"},"HashTable"),"\uc740 \uba54\uc18c\ub4dc \ub808\ubca8\uc5d0\uc11c synchronized\ub97c \uac78\uc5b4\ubc84\ub824\uc11c \ub2e4\ub978 \uc2a4\ub808\ub4dc\uac00 \uba3c\uc800 \uc9c4\uc785\ud55c \uc2a4\ub808\ub4dc\uac00 \uc774 code block\uc744 \ub098\uac08 \ub54c\uae4c\uc9c0 \uacc4\uc18d \uae30\ub2e4\ub824\uc57c \ud574\uc11c \ube44\uc6a9\uc801\uc73c\ub85c \ub9e4\uc6b0 \ube44\uc2fc Collection\uc785\ub2c8\ub2e4.  ")),(0,r.kt)("br",null),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// \ud574\uc2dc\ud14c\uc774\ube14\uc758 put\npublic synchronized V put(K key, V value) {\n    ...\n}\n")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \uc774\uc720\ub85c \uba40\ud2f0 \uc2a4\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c\uc758 map\uc774 \ud544\uc694\ud574\uc84c\ub294\ub370 \uc131\ub2a5\uae4c\uc9c0 \uc2e0\uacbd \uc368\uc57c \ud558\ub294 \ubb38\uc81c\uac00 \uc788\uc5b4\uc11c \ub4f1\uc7a5\ud55c \uac83\uc774 \ub3d9\uc2dc\uc131 \uc131\ub2a5\uae4c\uc9c0 \ucc59\uae30\uac8c \ub418\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap"),"\uc785\ub2c8\ub2e4. \ucc38\uace0\ub85c \uc790\ubc14 1.5\ubc84\uc804\ubd80\ud130 \ub4e4\uc5b4\uc624\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.  "),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"`ConcurrentHashMap`\uc740 `ConcurrentMap`\uc744 \uad6c\ud604\ud55c \ud574\uc26c\ub9f5\uc774\ub2e4.  ",src:n(6791).Z,width:"769",height:"294"}),(0,r.kt)("br",{parentName:"p"}),"\n","\ud83d\udca1",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap"),"\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap"),"\uc744 \uad6c\ud604\ud55c \ud574\uc26c\ub9f5\uc785\ub2c8\ub2e4.  "),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"concurrentmap"},"ConcurrentMap"),(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap"),"\uc740 \uba40\ud2f0\uc2a4\ub808\ub529 \ud658\uacbd\uc5d0\uc11c \ud0a4/\uac12 \uc791\uc5c5\uc5d0 \ub300\ud55c \uba54\ubaa8\ub9ac \uc77c\uad00\uc131\uc744 \ubcf4\uc7a5\ud558\ub294 java.util.concurrent\uc758 \ud328\ud0a4\uc9c0\uc5d0 \uc788\uace0 \uad6c\ud604\uccb4\ub85c\ub294 ",(0,r.kt)("strong",{parentName:"p"},"ConcurrentSkipListMap, ConcurrentSkipListMap")," \ub450 \uac1c\uac00 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.concurrent;\n\npublic interface ConcurrentMap<K,V> extends Map<K,V> {\n    ...\n}\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uadf8\ub807\ub2e4\uba74-\uc5b4\ub5bb\uac8c-\ub3d9\uc2dc\uc131\uc744-\ubcf4\uc7a5\ud560\uae4c"},"\uadf8\ub807\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ub3d9\uc2dc\uc131\uc744 \ubcf4\uc7a5\ud560\uae4c?"),(0,r.kt)("p",null,"\uc0ac\uc2e4 \ub3d9\uc2dc\uc131\uc744 \ubcf4\uc7a5\ud558\ub294 \ubc29\ubc95 \uc911 \uac00\uc7a5 \uc27d\uac8c\ub294  synchronized\ub97c \uc4f0\uba74 \uc548\uc804\ud558\uac8c \ub3d9\uc2dc\uc131\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\uc9c0\ub9cc \uc4f0\uae30\uc5d0 \ub530\ub77c\uc11c \uc131\ub2a5 \uc774\uc288\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \uc704\uc5d0\uc11c \ud55c \ubc88 \uc598\uae30 \ud588\uc9c0\ub9cc,  HashTable \uc5d0\uc11c \uc598\uae30\ub410\ub358 \uc131\ub2a5\uc774 \uac00\uc7a5 \ud070 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c ConcurrentHashMap\uc740 \uc815\ub9d0 \uba4b\uc9c0\uace0 \uc5b4-\uc378\ud55c \uc5ec\ub7ec\uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uac1c-\uc120\uc744 \ud588\ub294\ub370 \ud06c\uac8c \ub450 \uac00\uc9c0 \ubc29\ubc95\ub4e4\ub85c \ud574\uacb0\ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://howtodoinjava.com/java/multi-threading/compare-and-swap-cas-algorithm/"},"CAS(Compare And Swap) \uc54c\uace0\ub9ac\uc998")," "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"final V putVal(K key, V value, boolean onlyIfAbsent) {\n    int hash = spread(key.hashCode());\n...\n    else if ((f = tabAt(tab, i = (n - 1) & hash)) == null) {\n          if (casTabAt(tab, i, null, new Node<K,V>(hash, key, value)))\n              break;                   // no lock when adding to empty bin\n      }\n...\n")))),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc774\ubbf8 \ubc84\ud0b7\uc5d0 \ub178\ub4dc\uac00 \uc874\uc7ac\ud55c\ub2e4\uba74 \ubc84\ud0b7\ubcc4\ub85c synchronized \uc0ac\uc6a9\ud569\ub2c8\ub2e4.  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"final V putVal(K key, V value, boolean onlyIfAbsent) {\nint hash = spread(key.hashCode());\n    ...\n    synchronized (f) {\n    if (tabAt(tab, i) == f) {\n        if (fh >= 0) {\n            binCount = 1;\n            for (Node<K,V> e = f;; ++binCount) {\n                K ek;\n                if (e.hash == hash &&\n                    ((ek = e.key) == key ||\n                     (ek != null && key.equals(ek)))) {\n                    oldVal = e.val;\n                    if (!onlyIfAbsent)\n                        e.val = value;\n                    break;\n                }\n                Node<K,V> pred = e;\n                if ((e = e.next) == null) {\n                    pred.next = new Node<K,V>(hash, key, value);\n                    break;\n                }\n            }\n        }\n    ...\n")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uac04\ub2e8\ud55c-\uc131\ub2a5\ud14c\uc2a4\ud2b8"},"\uac04\ub2e8\ud55c \uc131\ub2a5\ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \uc815\ub9d0 \uc131\ub2a5\uc5d0\uc11c \ub9ce\uc740 \ucc28\uc774\uac00 \ub0a0\uae4c? get\uacfc put\uc5d0 \ub300\ud55c \uac04\ub2e8\ud55c \ubca4\uce58\ub9c8\ud06c\ub97c \uc791\uc131\ud558\uba74\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Hashtable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"concurrentHashMap"),"\uc640 \uc131\ub2a5\uc744 \ube44\uad50\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uac04\ub2e8\ud558\uac8c 5\uac1c \uc2a4\ub808\ub4dc\ub97c \ub9cc\ub4e4\uace0 1,000,000 \uac1c \uc815\ub3c4 \ub370\uc774\ud130\ub97c \ub123\uace0 get\uc744 \ud558\ub294 \ud589\uc704\ub97c \ud1b5\ud574\uc11c \ube44\uad50\ub97c \ud574\ubcf4\uba74  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n    private static final Map<Integer, Integer> testHashTable = new Hashtable<>();\n    private static final Map<Integer, Integer> testConcurrentHashMap = new ConcurrentHashMap<>();\n\n    @Test\n    void test() throws Exception {\n        long hashTableAvgTime = measure_GetPut(testHashTable);\n        long concurrentHashMapAvgTime = measure_GetPut(testConcurrentHashMap);\n\n        System.out.println("hashTableAvgTime = " + hashTableAvgTime);\n        System.out.println("concurrentHashMapAvgTime = " + concurrentHashMapAvgTime);\n\n    }\n\n    private static long measure_GetPut(Map<Integer, Integer> map) throws InterruptedException {\n        ExecutorService executor = Executors.newFixedThreadPool(4);\n\n        long startTime = System.nanoTime();\n\n        for (int i = 0; i < 5; i++) {\n            executor.submit(() -> {\n                for (int j = 0; j < 1_000_000; j++) {\n                    int value = ThreadLocalRandom\n                        .current()\n                        .nextInt(100_000);\n                    map.put(value, value);\n                    map.get(value);\n                }\n            });\n        }\n        executor.shutdown();\n        if (executor.awaitTermination(30, TimeUnit.SECONDS)) {\n            System.out.println(map.getClass());\n        } else {\n            executor.shutdownNow();\n        }\n        long endTime = System.nanoTime();\n\n        return (endTime - startTime) / 5_000_000;\n    }\n')),(0,r.kt)("admonition",{title:"Random vs ThreadLocalRandom",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\uc798 \uc815\ub9ac\ub41c \uc0ac\uc774\ud2b8\uac00 \uc788\uc5b4\uc11c \uc62c\ub9ac\uc9c0\ub9cc \uc694\uc57d\ud558\uc790\uba74 Random\uc740 \uba40\ud2f0 \uc2a4\ub808\ub4dc\uc5d0\uc11c \ud558\ub098\uc758 Random \uc778\uc2a4\ud134\uc2a4\ub97c \uacf5\uc720\ud558\uc5ec \uc804\uc5ed\uc801\uc73c\ub85c \ub3d9\uc791\ud574\uc11c \uc120\ud615 \ud569\ub3d9 \uc0dd\uc131\uae30 \uc54c\uace0\ub9ac\uc998\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc18\uba74 ThreadLocalRandom \uac01 \uc2a4\ub808\ub4dc\ub9c8\ub2e4 \ub2e4\ub978 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://velog.io/@sojukang/Random-%EB%8C%80%EC%8B%A0-ThreadLocalRandom%EC%9D%84-%EC%8D%A8%EC%95%BC-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0"},"https://velog.io/@sojukang/Random-\ub300\uc2e0-ThreadLocalRandom\uc744-\uc368\uc57c-\ud558\ub294-\uc774\uc720"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\ucc38\uace0\ub85c \ud658\uacbd\uc740 ",(0,r.kt)("a",{parentName:"p",href:"https://www.apple.com/kr/macbook-pro-14-and-16/specs/"},"m1book Pro"),", 16GB\uc5d0\uc11c \ud14c\uc2a4\ud2b8 \ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.  "),(0,r.kt)("p",null,"\ub300\ub7b5 10\ubc88 \uc815\ub3c4\uc758 \ud14c\uc2a4\ud2b8 \ud6c4\uc5d0 \ub098\uc628 \uacb0\uacfc \uac12\uc785\ub2c8\ub2e4.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"hashTableAvgTime = 1228\nconcurrentHashMapAvgTime = 317\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\ud655\uc2e4\ud788, \uba54\uc18c\ub4dc \ub808\ubca8\uc5d0\uc11c \ub77d\uc744 \uac70\ub294 \ubc29\ubc95\uc73c\ub85c put\uc744 \ucc98\ub9ac\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"hashtable"),"\uacfc \ub2ec\ub9ac ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap"),"\uc740 \ubc84\ud0b7\ub2f9\uc73c\ub85c lock\uc744 \uac78\uace0 cas \uc54c\uace0\ub9ac\uc998\uc744 \uc0ac\uc6a9\ud558\ub294\ub4f1\uc744 \ud1b5\ud55c \uc5ec\ub7ec \uae30\ubc95\ub4e4\ub85c \uc131\ub2a5\uc0c1 \uc0c1\uc2b9\uc774 \ub098\ud0c0\ub09c \uac78\ub85c \ubcf4\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uae38\uc5c8\ub294\ub370 \ub9cc\ub4e4\uc5b4\ubcf4\ub294 \uac74 \ub2e4\uc74c 2\ud3b8\uc5d0\uc11c:)"),(0,r.kt)("p",null,"\ucc38\uace0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentMap.html"},"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentMap.html"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/java-concurrent-map"},"https://www.baeldung.com/java-concurrent-map"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.programiz.com/java-programming/concurrenthashmap"},"https://www.programiz.com/java-programming/concurrenthashmap"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/concurrenthashmap-in-java/"},"https://www.geeksforgeeks.org/concurrenthashmap-in-java/"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://bcho.tistory.com/1072"},"https://bcho.tistory.com/1072"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hash_table"},"https://en.wikipedia.org/wiki/Hash_table"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html"},"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://howtodoinjava.com/java/multi-threading/compare-and-swap-cas-algorithm/"},"CAS"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://d2.naver.com/helloworld/831311"},"https://d2.naver.com/helloworld/831311"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://velog.io/@sojukang/Random-%EB%8C%80%EC%8B%A0-ThreadLocalRandom%EC%9D%84-%EC%8D%A8%EC%95%BC-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0"},"https://velog.io/@sojukang/Random-\ub300\uc2e0-ThreadLocalRandom\uc744-\uc368\uc57c-\ud558\ub294-\uc774\uc720")))}u.isMDXComponent=!0},6791:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled-0a2d3d2c3c8b41ec1b5ba29ed6097963.png"}}]);