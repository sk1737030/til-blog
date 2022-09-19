"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=i,c=m["".concat(l,".").concat(g)]||m[g]||d[g]||a;return n?r.createElement(c,s(s({ref:t},u),{},{components:n})):r.createElement(c,s({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790! 2\ud3b8",description:"Make Custom Rate Limiter With Spring Cloud Gateway 2",slug:"RateLimiter2",authors:"dongle",tags:["SCG","Spring Cloud Gateway","Rate Limiter"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},s=void 0,o={permalink:"/RateLimiter2",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2022-05-01-02-Spring-cloud-gateway-2.md",source:"@site/blog/2022-05-01-02-Spring-cloud-gateway-2.md",title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790! 2\ud3b8",description:"Make Custom Rate Limiter With Spring Cloud Gateway 2",date:"2022-05-01T00:00:00.000Z",formattedDate:"May 1, 2022",tags:[{label:"SCG",permalink:"/tags/scg"},{label:"Spring Cloud Gateway",permalink:"/tags/spring-cloud-gateway"},{label:"Rate Limiter",permalink:"/tags/rate-limiter"}],readingTime:7.98,hasTruncateMarker:!0,authors:[{name:"Dongle",title:"Junior Backend Developer",url:"https://github.com/sk1737030",imageURL:"https://github.com/sk1737030.png",key:"dongle"}],frontMatter:{title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790! 2\ud3b8",description:"Make Custom Rate Limiter With Spring Cloud Gateway 2",slug:"RateLimiter2",authors:"dongle",tags:["SCG","Spring Cloud Gateway","Rate Limiter"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},prevItem:{title:"Container \ud658\uacbd\uc5d0\uc11c\uc758 JVM GC",permalink:"/container-gc"},nextItem:{title:"Request Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790! 1\ud3b8",permalink:"/RateLimiter1"}},l={authorsImageUrls:[void 0]},p=[{value:"Custom Redis limiter",id:"custom-redis-limiter",level:2},{value:"Custom",id:"custom",level:3},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:3},{value:"\uc815\ub9d0 \uc798 \uc791\ub3d9\ud560\uae4c?",id:"\uc815\ub9d0-\uc798-\uc791\ub3d9\ud560\uae4c",level:3},{value:"\uacb0\uacfc",id:"\uacb0\uacfc-1",level:3},{value:"\uc774\uc0c1\uc73c\ub85c",id:"\uc774\uc0c1\uc73c\ub85c",level:2},{value:"\ucd94\uac00\ub85c \ud55c \ubc88 \uace0\ubbfc\ud574\uc57c \ud560 \ubd80\ubd84",id:"\ucd94\uac00\ub85c-\ud55c-\ubc88-\uace0\ubbfc\ud574\uc57c-\ud560-\ubd80\ubd84",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rate Limiter\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790! 2\ud3b8"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sk1737030/til/tree/master/./2022-05-01/spring-cloud-gateway-late-limiter"},"\ubaa8\ub4e0 \uc18c\uc2a4"),"\ub294 \uc694\uae30\uc11c \ud655\uc778\uac00\ub2a5\ud569\ub2c8\ub2e4. :)  "),(0,i.kt)("h1",{id:"spring-cloud-gateway\ub97c-\uc0ac\uc6a9\ud574\uc11c-api-limiter-\uad6c\ud604\uc744-\ud574\ubcf4\uc790-2\ud3b8"},"Spring Cloud Gateway\ub97c \uc0ac\uc6a9\ud574\uc11c API Limiter \uad6c\ud604\uc744 \ud574\ubcf4\uc790! 2\ud3b8"),(0,i.kt)("p",null,"\uc55e\uc11c 1\ud3b8\uc5d0\uc11c \ubcf4\uc558\ub358 \uae30\ubcf8\ub3c4 \uc798 \uc4f8 \uc218 \uc788\uc73c\ub098, \uc870\uae08 \ub354 \ub098\uac00\uc11c ",(0,i.kt)("del",{parentName:"p"},"\uc544\uad6c\ubaac\uc774 \uc9c4\ud654\ud574\uc11c \uadf8\ub808\uc774\ubaac\uc774 \ub418\ub4ef\uc774")," Custom\uc744 \uc870\uae08\ub9cc \ub354 \ud574\uc8fc\uba74 \ub098\ub984 \uad1c\ucc2e\uc740 RateLimiter\uac00 \ub420 \uc218 \uc788\ub2e4. "),(0,i.kt)("h2",{id:"custom-redis-limiter"},"Custom Redis limiter"),(0,i.kt)("p",null,"\uc55e\uc5d0\uc11c \uc0ac\uc6a9\ud588\ub358 Default Redis Limiter\ub294 \uc544\ub798 \uc694\uad6c\uc0ac\ud56d\uc744 \uad6c\ud604\ud558\uae30\uac00 \ud798\ub4e0\ub370"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ud2b9\uc815 \uc0ac\uc6a9\uc790\uc758 \uc8fc\uc2dd \uc870\ud68c \uc694\uccad\uc744 \ubd84\ub2f9 1\ubc88\uc73c\ub85c \uc124\uc815\uc744 \ud558\uace0 \uc8fc\uc2dd \uc8fc\ubb38\uc744 \ucd08\ub2f9 1\ubc88\ub9cc \uac00\ub2a5\ud558\ub2e4\ub358\uc9c0 "),(0,i.kt)("li",{parentName:"ol"},"\uc18d\ub3c4 \ubb38\uc81c\ub85c \ubcf5\uc7a1\ud558\uace0 \ub9ac\uc18c\uc2a4\uac00 \ub9ce\uc774 \ub4dc\ub294 \uc694\uccad\uc77c \uacbd\uc6b0 \ubd84\ub2f9 1\ubc88\ub9cc \uc694\uccad\ud558\uac8c \ud55c\ub2e4\ub358\uc9c0 "),(0,i.kt)("li",{parentName:"ol"},"\uc9c0\uae08 redis\uc5d0\ub294 timestamp\uc640 tokenKey 2\uac1c\ub9cc \ub4e4\uc5b4\uac00 \uc788\ub294\ub370 \ub2e4\ub978 \ucd94\uac00\uc801\uc778 \uc815\ubcf4\ub3c4 \ub123\uace0 \uc2f6\ub2e4\ub4e0\uc9c0"),(0,i.kt)("li",{parentName:"ol"},"Redis TTL\ub97c \ub354 \uae38\uac8c \uc7a1\ub294\ub2e4\ub4e0\uc9c0"),(0,i.kt)("li",{parentName:"ol"},"User \ubcc4\ub85c \uc694\uccad\ub7c9\uc744 \ub2e4\ub974\uac8c \ud558\uace0 \uc2f6\ub2e4\ub4e0\uc9c0")),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c \uc694\uad6c\uc0ac\ud56d\ub4e4\uc744 \ub4e4\uc5b4\uc8fc\ub294 API Limiter\ub97c \ub2e8\uc21c\ud558\uba74\uc11c \uac04\ub2e8\ud558\uac8c(",(0,i.kt)("del",{parentName:"p"},"\ud3c9\ubc94\ud558\uba74\uc11c\ub3c4 \uc6b0\uc544\ud558\ub77c\uace0 \uc6b0\ub9ac\ub124 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc2e4\uc81c\ub85c \ub4e4\uc740 \ub9d0"),") \uad6c\ud604\uc744 \ud55c \ubc88 \ud574\ubcf4\uc790. "),(0,i.kt)("h3",{id:"custom"},"Custom"),(0,i.kt)("p",null,"\uba3c\uc800 \uc6b0\ub9ac\ub294 \uc798 \uad6c\ud604\ub418\uc5b4\uc788\ub294",(0,i.kt)("inlineCode",{parentName:"p"},"RedisRateLimiter"),"\ub97c \uc0c1\uc18d\ubc1b\uc544\uc11c \uc0ac\uc6a9\ud55c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CustomRedisRateLimiter.java"',title:'"CustomRedisRateLimiter.java"'},"@Configuration\n@Slf4j\npublic class CustomRedisRateLimiter extends RedisRateLimiter {\n    ...\n}\n")),(0,i.kt)("p",null,"\ub9cc\uc57d ",(0,i.kt)("strong",{parentName:"p"},"User")," \ubcc4\ub85c \uc694\uccad\ub7c9\uc744 \ub2e4\ub974\uac8c \ud55c\ub2e4\uba74 \uc6b0\ub9ac\ub294 \uc218\uc815\ud574\uc57c \ud560 \uba54\uc11c\ub4dc\uac00 \ud06c\uac8c \ub450 \uac1c\uac00 \uc788\ub294\ub370",(0,i.kt)("br",{parentName:"p"}),"\n","\uba3c\uc800 ",(0,i.kt)("strong",{parentName:"p"},"isAllowed"),", ",(0,i.kt)("strong",{parentName:"p"},"loadConfiguration")," \uc774 \ub450 \uac1c\uc758 \uba54\uc11c\ub4dc\ub97c \uc218\uc815\ud574\uc57c \ud55c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CustomRedisRateLimiter.java"',title:'"CustomRedisRateLimiter.java"'},'@Configuration\n@Slf4j\npublic class CustomRedisRateLimiter extends RedisRateLimiter {\n    ...\n    \n    private final Config userAConfig = new Config().setBurstCapacity(10).setReplenishRate(1).setRequestedTokens(1);\n    private final Config commonUserConfig = new Config().setBurstCapacity(1).setReplenishRate(1).setRequestedTokens(1);\n\n    @Override\n    public Mono<Response> isAllowed(String routeId, String id) {\n        Config routeConfig = loadConfiguration(routeId, id);\n\n        int replenishRate = routeConfig.getReplenishRate();\n        int burstCapacity = routeConfig.getBurstCapacity();\n        int requestedTokens = routeConfig.getRequestedTokens();\n\n        try {\n            List<String> keys = getKeys(id);\n\n            List<String> scriptArgs = Arrays.asList(replenishRate + "", burstCapacity + "", "", requestedTokens + "");\n            Flux<List<Long>> flux = redisTemplate.execute(this.script, keys, scriptArgs);\n            return flux.onErrorResume(throwable -> {\n                if (log.isDebugEnabled()) {\n                    log.debug("Error calling rate limiter lua", throwable);\n                }\n                return Flux.just(Arrays.asList(1L, -1L));\n            }).reduce(new ArrayList<Long>(), (longs, l) -> {\n                longs.addAll(l);\n                return longs;\n            }).map(results -> {\n                boolean allowed = results.get(0) == 1L;\n                Long tokensLeft = results.get(1);\n\n                Response response = new Response(allowed, getHeaders(routeConfig, tokensLeft));\n\n                if (log.isDebugEnabled()) {\n                    log.debug("response: " + response);\n                }\n                return response;\n            });\n        } catch (Exception e) {\n            log.error("Error determining if user allowed from redis", e);\n        }\n\n        return Mono.just(new Response(true, getHeaders(routeConfig, -1L)));\n    }\n\n    Config loadConfiguration(String routeId, String key) {\n        if (key.equals("demo1234")) {\n            return getConfig().getOrDefault(routeId + key, userAConfig);\n        }\n        return getConfig().getOrDefault(routeId, commonUserConfig);\n\n    }\n}\n')),(0,i.kt)("p",null,"\uc6b0\ub9ac\uac00 \uc55e\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"UserKeyResolver"),"\uc5d0\uc11c \uc124\uc815\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"\uac00 \ub4e4\uc5b4\uc624\uac8c \ub418\ub294\ub370, \uc774 \ud0a4\ub97c \uac00\uc9c0\uace0 \uc81c\ud55c\ud558\uace0\uc790 \ud558\ub294 \uc694\uccad\ub7c9\uc744 \uba3c\uc800 Config\ub97c \uc8fc\uc785\ud558\uba74 \ub05d\uc774\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CustomRedisRateLimiter.java"',title:'"CustomRedisRateLimiter.java"'},'@Configuration\n@Slf4j\npublic class CustomRedisRateLimiter extends RedisRateLimiter {\n\n    private final Config userAConfig = new Config().setBurstCapacity(10).setReplenishRate(1).setRequestedTokens(1);\n    private final Config commonUserConfig = new Config().setBurstCapacity(1).setReplenishRate(1).setRequestedTokens(1);\n    private ReactiveStringRedisTemplate redisTemplate;\n\n    private RedisScript<List<Long>> script;\n\n    @Autowired\n    public CustomRedisRateLimiter(ReactiveStringRedisTemplate redisTemplate, RedisScript<List<Long>> script,\n        ConfigurationService configurationService) {\n        super(redisTemplate, script, configurationService);\n        this.redisTemplate = redisTemplate;\n        this.script = script;\n    }\n\n    public CustomRedisRateLimiter(int defaultReplenishRate, int defaultBurstCapacity) {\n        super(defaultReplenishRate, defaultBurstCapacity);\n    }\n\n    public CustomRedisRateLimiter(int defaultReplenishRate, int defaultBurstCapacity, int defaultRequestedTokens) {\n        super(defaultReplenishRate, defaultBurstCapacity, defaultRequestedTokens);\n    }\n\n    static List<String> getKeys(String id) {\n        String prefix = "request_rate_limiter.{" + id;\n        String tokenKey = prefix + "}.tokens";\n        String timestampKey = prefix + "}.timestamp";\n        return Arrays.asList(tokenKey, timestampKey);\n    }\n\n    @Override\n    public Mono<Response> isAllowed(String routeId, String id) {\n        Config routeConfig = loadConfiguration(routeId, id);\n\n        int replenishRate = routeConfig.getReplenishRate();\n        int burstCapacity = routeConfig.getBurstCapacity();\n        int requestedTokens = routeConfig.getRequestedTokens();\n\n        try {\n            List<String> keys = getKeys(id);\n\n            List<String> scriptArgs = Arrays.asList(replenishRate + "", burstCapacity + "", "", requestedTokens + "");\n            Flux<List<Long>> flux = redisTemplate.execute(this.script, keys, scriptArgs);\n            return flux.onErrorResume(throwable -> {\n                if (log.isDebugEnabled()) {\n                    log.debug("Error calling rate limiter lua", throwable);\n                }\n                return Flux.just(Arrays.asList(1L, -1L));\n            }).reduce(new ArrayList<Long>(), (longs, l) -> {\n                longs.addAll(l);\n                return longs;\n            }).map(results -> {\n                boolean allowed = results.get(0) == 1L;\n                Long tokensLeft = results.get(1);\n\n                Response response = new Response(allowed, getHeaders(routeConfig, tokensLeft));\n\n                if (log.isDebugEnabled()) {\n                    log.debug("response: " + response);\n                }\n                return response;\n            });\n        } catch (Exception e) {\n            log.error("Error determining if user allowed from redis", e);\n        }\n\n        return Mono.just(new Response(true, getHeaders(routeConfig, -1L)));\n    }\n\n    Config loadConfiguration(String routeId, String key) {\n        if (key.equals("demo1234")) {\n            return getConfig().getOrDefault(routeId + key, userAConfig);\n        }\n        return getConfig().getOrDefault(routeId, commonUserConfig);\n\n    }\n}\n')),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml")," \ud30c\uc77c\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"rate-limitter")," ",(0,i.kt)("inlineCode",{parentName:"p"},"customRedisRateLimiter"),"\ub97c \ucd94\uac00\ud574\uc900\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="application.yaml"',title:'"application.yaml"'},'spring:\n...\n- name: RequestRateLimiter\n    args:\n        rate-limitter: "#{@customRedisRateLimiter}"\n        key-resolver: "#{@apiKeyResolve}"\n')),(0,i.kt)("h3",{id:"\uacb0\uacfc"},"\uacb0\uacfc"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get localhost:18080/demo?userId=demo1234")," "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(4435).Z,width:"535",height:"131"})),(0,i.kt)("p",null,"Request \uc694\uccad \uc2dc \uc704\uc5d0 \uc124\uc815\ud55c userAConfig\uc5d0 \ub9de\uac8c \uc751\ub2f5 \uac12\uc774 \ub3cc\uc544\uc624\uac8c \ub41c\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get localhost:18080/demo?userId=test")," "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(7304).Z,width:"550",height:"132"})),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Remaining")," \ubcf4\ub2e4 \uc694\uccad\uc744 \ub354 \ub9ce\uc774 \ud558\uac8c \ub418\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"429 Too Many Request")," \uac00 \uc751\ub2f5\uc73c\ub85c \uc624\uac8c \ub41c\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(7725).Z,width:"1017",height:"364"})),(0,i.kt)("p",null,"\ucd94\uac00\ud574\ub3c4 \uc88b\uc744\ub9cc\ud55c \uc635\uc158\uc774 \uc788\ub294\ub370, \ub9cc\uc57d \ub2e4\uc591\ud55c \uc774\uc720\ub85c \uc694\uccad\uc744 \uac70\uc808\ud558\uace0 \uc2f6\uc744 \ub54c \uc608\ub97c \ub4e4\uc5b4 \ud5e4\ub354\uc5d0 \uc57d\uc18d\ub41c \uac12\uc774 \uc5c6\uac70\ub098 \ub4f1\n\uadf8\ub7f4 \ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"deny-empty-key"),"\ub77c\ub294 \uc635\uc158\uc774\ub2e4. (default true)\uc774\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774 \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c ",(0,i.kt)("strong",{parentName:"p"},"_",(0,i.kt)("strong",{parentName:"strong"},"_EMPTY_KEY"))," \uc744 \ub4a4\ub85c \ub118\uaca8\uc8fc\uac8c \ub418\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"FORBIDDEN")," \uc751\ub2f5\uc73c\ub85c \ub3cc\ub824\uc8fc\uac8c \ub41c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="UserKeyResolver.java"',title:'"UserKeyResolver.java"'},'@Bean\npublic KeyResolver apiKeyResolve() {\n    if (!exchange.getRequest().getQueryParams().containsKey("userId")) {\n          return Mono.just("____EMPTY_KEY__");\n    }\n\n    return Mono.just(exchange.getRequest().getQueryParams().getFirst("userId"));\n}\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(2170).Z,width:"1034",height:"260"})),(0,i.kt)("h3",{id:"\uc815\ub9d0-\uc798-\uc791\ub3d9\ud560\uae4c"},"\uc815\ub9d0 \uc798 \uc791\ub3d9\ud560\uae4c?"),(0,i.kt)("p",null,"\uc774 \ubd80\ubd84\uc744 \ud655\uc778\ud558\uae30 \uc704\ud574\uc11c \uc9e7\uc740 \uc2dc\uac04\uc5d0 \ub9ce\uc740 \ubd80\ud558 \ud14c\uc2a4\ud2b8\ub97c \ud574 \ubcfc \uac83\uc774\ub2e4. \uac04\ub2e8\ud558\uac8c ",(0,i.kt)("a",{parentName:"p",href:"https://k6.io/"},"k6")," \ubd80\ud558 \ud14c\uc2a4\ud2b8 \ub3c4\uad6c\ub97c \uc774\uc6a9\ud574\uc11c  \ud14c\uc2a4\ud2b8\ub97c \ud574 \ubcfc \uac81\ub2c8\ub2e4. "),(0,i.kt)("p",null,"\uc870\uac74 \ucd08\ub2f9 1\ud68c \uc694\uccad\uc744 \uac00\ub2a5\ud55c\uc9c0\ub97c \ud14c\uc2a4\ud2b8\ud55c\ub2e4\uba74"),(0,i.kt)("p",null,"limiter \uc124\uc815",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"requestedTokens")," 1",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"burstCapacity")," 1",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"replenishRate")," 1 "),(0,i.kt)("p",null,"k6/loadtest.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="loadtest.js"',title:'"loadtest.js"'},"import http from 'k6/http';\nimport { check, group, sleep } from 'k6';\n\nexport const options = {\n    duration: '10s',\n    vus: '1',\n};\n\nconst BASE_URL = 'http://localhost:18080';\n\nexport default () => {\n    const limiter = http.get(`${BASE_URL}/demo?userId=test`);\n\n    check(limiter, {\n        'success limitter ': (resp) => resp.status === 200\n    });\n};\n")),(0,i.kt)("p",null,"\uc815\ub9d0 \uac04\ub2e8\ud55c \uc2a4\ud06c\ub9bd\ud2b8\ub85c \ubcf4\uba74 \uc54c\uaca0\uc9c0\ub9cc",(0,i.kt)("br",{parentName:"p"}),"\n","10\ucd08 \ub3d9\uc548 get\uc694\uccad\uc744 \ud55c\ub2e4\ub294 \uc2a4\ud06c\ub9bd\ud2b8\uc774\uace0, \uacb0\uacfc\ub85c 200\uc77c \uacbd\uc6b0 \uc131\uacf5\uc73c\ub85c \ubcf4\uaca0\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,i.kt)("h3",{id:"\uacb0\uacfc-1"},"\uacb0\uacfc"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(5921).Z,width:"1570",height:"898"})),(0,i.kt)("p",null,"11\ubc88\uc758 \uc694\uccad\uc774 \uc131\uacf5\uc801\uc73c\ub85c 200\uc73c\ub85c return \ub418\uc5c8\uace0, 6045\ubc88\uc774 \uc2e4\ud328\ud55c \ub0b4\uc5ed\uc774\ub2e4."),(0,i.kt)("h2",{id:"\uc774\uc0c1\uc73c\ub85c"},"\uc774\uc0c1\uc73c\ub85c"),(0,i.kt)("p",null,"\uc774\ub807\uac8c \uac04\ub2e8\ud558\uac8c ",(0,i.kt)("inlineCode",{parentName:"p"},"RateLimiter"),"\ub97c \uad6c\ud604\uc744 \ud574\ubcf4\uc558\ub294\ub5bc, \ucc98\uc74c\uc5d0\ub294 \uad6c\ud604\uc744 \uc5b4\ub5bb\uac8c \ud558\uc9c0\ub77c\uba70 \uace0\ubbfc\uc744 \ud558\uc600\ub294\ub370,",(0,i.kt)("br",{parentName:"p"}),"\n","Redis\ub97c \ub044\uc801\ub044\uc801\uc774\uba70 \uad6c\ud604 \uc911\uc5d0 (",(0,i.kt)("del",{parentName:"p"},"Watch\uc640 Multi\uc640 \ud568\uaed8\ub77c\uba74),"),(0,i.kt)("br",{parentName:"p"}),"\n","Spring \uc9c4\uc601\uc5d0 \uc798 \uad6c\ud604\uc774 \ub418\uc5b4 \uc788\uc5b4\uc11c \uc27d\uac8c \uac00\uc838\uc640\uc11c \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub9de\uac8c \uc0ac\uc6a9\uc744 \ud588\uc5c8\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ubbf8 \uc798 \ub9cc\ub4e4\uc5b4\uc838\uc11c \uc5ed\ud560\uc744 \uc798\ud558\uace0 \uc788\uc73c\uba74 \ube60\ub974\uac8c \uc798 \uc0ac\uc6a9\ud558\ub294 \uac8c \uc5b4\ub824\uc6b4 \uac70\uad6c\ub098 \ub2e4\uc2dc\uae08 \ub290\uaf08\ub2e4."),(0,i.kt)("h3",{id:"\ucd94\uac00\ub85c-\ud55c-\ubc88-\uace0\ubbfc\ud574\uc57c-\ud560-\ubd80\ubd84"},"\ucd94\uac00\ub85c \ud55c \ubc88 \uace0\ubbfc\ud574\uc57c \ud560 \ubd80\ubd84"),(0,i.kt)("p",null,"Gateway\uc5d0\uc11c Request body\ub97c \uc77d\uc5b4\uc11c \ubb34\uc5b8\uac00\ub97c \ucc98\ub9ac \ud55c \ud6c4\uc5d0 \ub2e4\uc74c Filter\ub85c \ub118\uaca8 \uc904 \ub54c\uc5d0\ub294 \uace0\ubbfc\uc744 \ud574\ubd10\uc57c\ud558\ub294\ub370,",(0,i.kt)("br",{parentName:"p"}),"\n","\uc798 \uc54c\ub2e4\uc2dc\ud53c Servlet Request Body\ub97c Filter\uc5d0\uc11c \ud55c \ubc88 \uc77d\uc73c\uba74,",(0,i.kt)("br",{parentName:"p"}),"\n","\ub2e4\uc2dc \ub4a4\uc5d0\uc11c body\ub97c \ubabb \uc77d\ub294\ub2e4\ub294 \ubb38\uc81c\uac00 \uc788\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774 \ubd80\ubd84\uc740 \ud55c \ubc88 \uc77d\uace0 body\ub97c \uce90\uc2f1 \ud574\uc11c \ub2e4\uc2dc body\ub97c \ub123\uc5b4\uc8fc\ub294 \ucd94\uac00 \uc791\uc5c5\uc774 \ud544\uc694\ud558\ub2e4."),(0,i.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.yes24.com/Product/Goods/102819435"},"\uac00\uc0c1 \uba74\uc811 \uc0ac\ub840\ub85c \ubc30\uc6b0\ub294 \ub300\uaddc\ubaa8 \uc2dc\uc2a4\ud15c \uc124\uacc4"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/./2022-05-01/spring-cloud-gateway/docs/current/reference/html/"},"Spring Cloud gateway Docs"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/docs/manual/programmability/eval-intro/"},"https://redis.io/docs/manual/programmability/eval-intro/")))}d.isMDXComponent=!0},5921:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 10-743c5bd798aa8c18e3911f614d961010.png"},4435:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 6-2a24462622b3348b88fd7bb5f1c7d9b9.png"},7304:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 7-4cb98112e0993f41471bedba911596a6.png"},7725:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 8-3124e6119104e3f1247c28dd33a59d96.png"},2170:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled 9-c27ab7d345cdda32e2833f76169d7895.png"}}]);