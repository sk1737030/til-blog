"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,b=d["".concat(o,".").concat(u)]||d[u]||c[u]||l;return r?n.createElement(b,m(m({ref:t},s),{},{components:r})):n.createElement(b,m({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,m=new Array(l);m[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,m[1]=i;for(var p=2;p<l;p++)m[p]=r[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8343:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"\ub0b4\uac00 \uacaa\uc740 N + 1 \ubb38\uc81c",description:"Spring Boot N+1 JPA",slug:"my_n+1",authors:"dongle",tags:["SpringBoot","JPA","N+1","Hibernate"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},m=void 0,i={permalink:"/my_n+1",source:"@site/blog/2022-05-28-jpaN+1.md",title:"\ub0b4\uac00 \uacaa\uc740 N + 1 \ubb38\uc81c",description:"Spring Boot N+1 JPA",date:"2022-05-28T00:00:00.000Z",formattedDate:"May 28, 2022",tags:[{label:"SpringBoot",permalink:"/tags/spring-boot"},{label:"JPA",permalink:"/tags/jpa"},{label:"N+1",permalink:"/tags/n-1"},{label:"Hibernate",permalink:"/tags/hibernate"}],readingTime:7.395,hasTruncateMarker:!0,authors:[{name:"Dongle",title:"Junior Backend Developer",url:"https://github.com/sk1737030",imageURL:"https://github.com/sk1737030.png",key:"dongle"}],frontMatter:{title:"\ub0b4\uac00 \uacaa\uc740 N + 1 \ubb38\uc81c",description:"Spring Boot N+1 JPA",slug:"my_n+1",authors:"dongle",tags:["SpringBoot","JPA","N+1","Hibernate"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},prevItem:{title:"Spring Kafka Graceful Shutdown",permalink:"/kafkashutodwn"},nextItem:{title:"DB transaction Isolation\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\uc790",permalink:"/db-isolation"}},o={authorsImageUrls:[void 0]},p=[{value:"N + 1 \ubb38\uc81c",id:"n--1-\ubb38\uc81c",level:2},{value:"\ub0b4\uac00 \uadf8\ub9b0 \uadf8\ub9b0 \ucffc\ub9ac",id:"\ub0b4\uac00-\uadf8\ub9b0-\uadf8\ub9b0-\ucffc\ub9ac",level:3},{value:"Fetch\ub97c \uc4f0\uc790",id:"fetch\ub97c-\uc4f0\uc790",level:3},{value:"\ub514\ubc84\uae45\ud558\uba74\uc11c\uc758 \ucd94\uce21",id:"\ub514\ubc84\uae45\ud558\uba74\uc11c\uc758-\ucd94\uce21",level:3},{value:"\ubb38\ub4dd",id:"\ubb38\ub4dd",level:3}],s={toc:p};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"JPA\ub97c \uc4f0\uba74\uc11c \uc6b0\ub9ac\uac00 \uc77c\ubc18\uc801\uc73c\ub85c \ubc1c\uc0dd\ud558\uc5ec\uc11c \ud574\ubcfc \uac74 \ub2e4 \ud574\ubd10\ub3c4 \uc548\ub410\uc5c8\ub358 N+1 \ubb38\uc81c "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sk1737030/til/tree/master/til-jpa"},"\ubaa8\ub4e0 \uc18c\uc2a4\ub294 \uc774\uacf3"),"\uc5d0\uc11c \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4 :)"),(0,a.kt)("h2",{id:"n--1-\ubb38\uc81c"},"N + 1 \ubb38\uc81c"),(0,a.kt)("p",null,"JPA\ub97c \uc4f0\uba74\uc11c \uc6b0\ub9ac\uac00 \uc77c\ubc18\uc801\uc73c\ub85c \ubc1c\uc0dd\ud558\uc5ec\uc11c \ud574\ubcfc \uac74 \ub2e4 \ud574\ubd10\ub3c4 \uc548\ub410\uc5c8\ub358 N+1 \ubb38\uc81c",(0,a.kt)("br",{parentName:"p"}),"\n","\uc77c\ubc18\uc801\uc73c\ub85c \uc6b0\ub9ac\uac00 \ud754\ud788 N+1\ubb38\uc81c\uac00 \ubc1c\uc0dd\uc744 \ud560 \uc218 \uc788\ub294\ub370 \uc774\ubbf8 \ub9ce\uc740 \uc0ac\ub78c\uc774 \uc54c\uaca0\uc9c0\ub9cc \ud0b9\uac13\uc601\ud658\ub2d8\uc758 \ucc45\uc744 \ubcf4\uac70\ub098 \uac15\uc758\ub97c \ubcf4\uba74 \uc9c4\uc9dc \ub2e4 \ud574\uacb0\uc774 \uac00\ub2a5\ud588\ub294\ub370",(0,a.kt)("br",{parentName:"p"}),"\n","\ub0b4\uac00 \ub9c8\uc8fc\ud55c \ubb38\uc81c\ub294 \ud574\uacb0\uc774 \uc548 \ub410\uc5c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \ud574\uacb0\uc744 \uc704\ud574 \uadf8\uc5d0 \uc0c1\ud669\ub9c8\ub2e4 \ub2e4\ub974\uaca0\uc9c0\ub9cc \ud754\ud558\uac8c \uac00\uc7a5 \uba3c\uc800 lazy\ub85c \ubcc0\uacbd, fetch join, fetch size\uc870\uc815 \ub4f1 \uc5ec\ub7ec \uc791\uc5c5\uc744 \ud588\ub294\ub370",(0,a.kt)("br",{parentName:"p"}),"\n","\ud574\uacb0\uc774 \uc548 \ub410\uc5c8\ub2e4."),(0,a.kt)("p",null,"\ucf54\ub4dc\uac00 \ub9ce\uc774 \ub2e4\ub974\uace0 \ub3c4\uba54\uc778\ub3c4 \ub2e4\ub974\uc9c0\ub9cc \uadf8\ub098\ub9c8 \ube44\uc2b7\ud558\uac8c \ucf54\ub4dc\ub97c \uc7ac\ud604 \ud574\ubcf4\uc790\uba74"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\n@NoArgsConstructor(access = AccessLevel.PROTECTED)\n@AllArgsConstructor(access = AccessLevel.PROTECTED)\n@Getter\npublic class Member  {\n    @Id\n  @Column(name = "member_id")\n  private Long id;\n    \n    private String memberEmail;\n\n    @OneToMany(mappedBy = "Member", cascacde = CascadeType.ALL, orphanRemoval = true)\n    private Set<Order>  orders = LinkedHashSet<>();\n\n    ...\n}\n\n@Entity\n@NoArgsConstructor(access = AccessLevel.PROTECTED)\n@AllArgsConstructor(access = AccessLevel.PROTECTED)\n@Getter\npublic class Order  {\n    @ID\n    @Column(name = "order_id")\n    priate Long id;\n    \n    @ManyToOne(fetch = FetchType.LAZY)\n  @JoinColumn(name = "memberEmail", referencedColumnName = "memberEmail", nullable = false, updatable = false)\n    private Set<Order>  order = LinkedHashSet<>();\n\n    ...\n}\n\n')),(0,a.kt)("p",null,"\uc774\ub7f0 \ub290\ub08c\uc758 Entity\uc600\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\ub54c\uc758 \ub098 \ube7c\uace0 \uc5d4\ud2f0\ud2f0\uac00 \uc5b4\ub5a4 \ubb38\uc81c\uac00 \uc788\ub294\uc9c0 \uc54c\uaca0\uc9c0\ub9cc \uc774\ub54c\uae4c\uc9c0\ub294 \ub098\ub294 \uafc8\uc5d0\ub3c4 \ubab0\ub790\ub2e4. ",(0,a.kt)("del",{parentName:"p"},"5\uc2dc\uac04\uc744 \ubc84\ub9b4 \uc904\uc740 \ubab0\ub790\ub2e4!"),"  "),(0,a.kt)("p",null,"\uae30\ud68d: \ud68c\uc6d0\uc73c\ub85c \uc8fc\ubb38 \uc815\ubcf4\ub97c \ubcfc \uc218 \uc788\uac8c \ud574\uc8fc\uc138\uc694",(0,a.kt)("br",{parentName:"p"}),"\n","\ub098: members \uae30\uc900\uc73c\ub85c Order\ub97c \ub2e4 \uac00\uc838\uc624\uba74 \ub418\uaca0\uad6c\ub098! \uc74c \uadf8\ub7ec\uba74 \uac00\uc838\uc62c \ub54c \uc18d\ub3c4\ub97c \uc704\ud574 fetch join \ud574\uc11c \uac00\uc838\uc640\uc57c\uc9c0!",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Untitled",src:r(866).Z,width:"400",height:"242"})),(0,a.kt)("p",null,"\uadf8\ub807\uac8c \ub2e4\uc12f\uc2dc\uac04\uc744 \uc7a1\uc544\uba39\uc744 \uc904\uc740 \ubab0\ub790\uc5c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc544\ub2c8 \uc9c4\uc9dc \ud551\uacc4\ub97c \ub300\uc790\uba74 \uc774\ub807\uac8c \uc5d4\ud2f0\ud2f0\ub97c \uad6c\uc131\ud55c \uac74 \ub0b4\uac00 \uc544\ub2c8\ub77c \uae30\uc874 \ucf54\ub4dc\ub97c \uac00\uc9c0\uace0 \ub2e4\ub978 \uacf3\uc5d0\uc11c \uc4f0\ub2e4\uac00 \uc774\ub807\uace0 \uc800\ub807\uace0.. \uad6c\uad6c\uc808\uc808 ",(0,a.kt)("del",{parentName:"p"},(0,a.kt)("strong",{parentName:"del"},"\ud560\ub9d0\ud558\uc548"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(2492).Z,width:"225",height:"225"})),(0,a.kt)("h3",{id:"\ub0b4\uac00-\uadf8\ub9b0-\uadf8\ub9b0-\ucffc\ub9ac"},"\ub0b4\uac00 \uadf8\ub9b0 \uadf8\ub9b0 \ucffc\ub9ac"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select a.*, b.*\nfrom member m \ninner join order o on m.memberEmail = o.memberEmail;\n")),(0,a.kt)("p",null,"\uc774\ub7f0 \ub290\ub08c\uc758 (",(0,a.kt)("del",{parentName:"p"},"\ub108\ub3c4 \ud55c\ubc29 \ub098\ub3c4\ud55c\ubc29"),")\ucffc\ub9ac\ub97c \uc6d0\ud574\uc11c"),(0,a.kt)("h3",{id:"fetch\ub97c-\uc4f0\uc790"},"Fetch\ub97c \uc4f0\uc790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\npublic interface ProblemRepository extends JpaRepository<Member, Long> {\n        private final JPAQueryFactory queryFactory;\n\n        @Query("SELECT distinct m FROM Member m join fetch m.orders")\n    List<Member> findAllFetch();\n}\n')),(0,a.kt)("p",null,"\uc774\ub807\uac8c \uc870\ud68c\ub97c \ud588\ub294\ub370 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Test\nvoid save() {\n       // Given\n\n    for (int i = 0; i < 2; i++) {\n        Member memFixture = new Member( i + "@naver.com");\n        Order orderFixture = new Order(i + "delivery");\n        memFixture.addOrder(orderFixture);\n        problemRepository.save(memFixture);\n        em.flush();\n        em.clear();\n    }\n\n    List<Member> members = problemRepository.findAllFetch();\n\n    assertThat(members.size()).isEqualTo(2);\n    assertThat(members.get(0).getOrders().size()).isEqualTo(1);\n    assertThat(members.get(1).getOrders().size()).isEqualTo(1);\n}\n')),(0,a.kt)("p",null,"\ud3b8\uc758\ub97c \uc704\ud574\uc11c \ub300\ucda9 \uc774\ub807\uac8c \ud588\ub2e4 \uac00\uc815\ud558\uace0..  \ud14c\uc2a4\ud2b8\ub97c \ub3cc\ub824\uc11c \ud655\uc778\ud574\ubcf4\ub2c8  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Hibernate: \n\nselect\n  distinct member0_.member_id as member_i1_0_0_,\n  orders1_.order_id as order_id1_1_1_,\n  member0_.member_email as member_e2_0_0_,\n  orders1_.member_email as member_e3_1_1_,\n  orders1_.order_status as order_st2_1_1_,\n  orders1_.member_email as member_e3_1_0__,\n  orders1_.order_id as order_id1_1_0__ \nfrom\n  t_member member0_ \ninner join\n  t_order orders1_ \n      on member0_.member_email=orders1_.member_email\n")),(0,a.kt)("p",null,"\uc74c .. \uc608\uc0c1\ud55c \ucffc\ub9ac\ub124 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Hibernate: \n    /* load com.example.tiljpa.problem.Member */ select\n        member0_.member_id as member_i1_0_0_,\n        member0_.member_email as member_e2_0_0_ \n    from\n        t_member member0_ \n    where\n        member0_.member_email=?\nHibernate: \n    /* load com.example.tiljpa.problem.Member */ select\n        member0_.member_id as member_i1_0_0_,\n        member0_.member_email as member_e2_0_0_ \n    from\n        t_member member0_ \n    where\n        member0_.member_email=?\n")),(0,a.kt)("p",null,"?????? \uc774\ub7f0 \ucffc\ub9ac\ub4e4\uc774 \uc870\ud68c\ud55c \uba64\ubc84 \uc218\ub9cc\ud07c \ub2e4\uc2dc \ucffc\ub9ac\uac00 \ucad8\ub77c\ub77c\ub77c\ub77c\ub77c\ub77c\ub77c\ub77c\ub77c\ub77c\ub77c\ub77c\ub77c\ub77d \ub098\uac00\ubc84\ub838\ub2e4.."),(0,a.kt)("p",null,"\uc774\ub54c \uc5e5..? \uc65c fetch join\uc744 \ud558\uace0 \ucffc\ub9ac\ub97c \uac00\uc838\uc654\ub294\ub370 \ub2e4\uc2dc member\ucffc\ub9ac\uac00 \ub098\uac00\uc9c0?? "),(0,a.kt)("p",null,"\uc774\ub584\ubd80\ud130 \uba58\ubd95\uc758 \uc2dc\uc791\uc774\uc600\ub2e4."),(0,a.kt)("h3",{id:"\ub514\ubc84\uae45\ud558\uba74\uc11c\uc758-\ucd94\uce21"},"\ub514\ubc84\uae45\ud558\uba74\uc11c\uc758 \ucd94\uce21"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc77c\ub2e8 fetch mode\ub97c eager\ub85c \ubc14\uafd4\ubcf4\uc790.. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc2e4\ud328"))),(0,a.kt)("li",{parentName:"ol"},"querydsl\ub85c join\uc744 \ud558\uba74 \ub2e4\ub97c\uae4c? ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc2e4\ud328"))),(0,a.kt)("li",{parentName:"ol"},"equals\ub791 hashcode\ub97c \ub123\uc5b4\ubcf4\uc790",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc2e4\ud328"))),(0,a.kt)("li",{parentName:"ol"},"\uc544 \uc774\uac74\uc544\ub2cc\uac70\uac19\uc740\ub370 yml\uc5d0 batch size\ub97c \ub123\uc5b4\ubcf4\uc790 ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub2f9\uc5f0\ud788 \uc2e4\ud328"))),(0,a.kt)("li",{parentName:"ol"},"transacton(readonly=true) \ub54c\ubb38\uc5d0 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uc77c\uc744 \uc548\ud558\ub098? \uc88b\uc544 transaction\uc73c\ub85c\ub9cc \ud558\uc790 ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc2e4\ud328"))),(0,a.kt)("li",{parentName:"ol"},"\uc544 \uc88b\uc544 \uc77c\ub2e8 \ub514\ubc84\uae45\uc744 \ud574\ubcf4\uc790 ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"- \ub514\ubc84\uae45 \ud558\uba74\uc11c \ubcf4\ub2e4\ubcf4\ub2c8 \ucd5c\ucd08 fetch\ub85c \ubc1b\uc740 member \uac1d\uccb4\uc758 \uc8fc\uc18c\uc640 order\uac00 \uac00\uc9c0\uace0 \uc788\ub294 member\uac1d\uccb4\uc758 \uc8fc\uc18c\uac00 \ud655\uc5f0\ud788 \ub2ec\ub790\ub2e4.  \n![Untitled](./2022-05-28/Untitled%202.png)          \n")),"\uc5b4 \ubb50\uc57c \uc65c\ub2ec\ub77c... \uc774\ub584\ubd80\ud130 \ubb34\ud55c \ucc57\ubc14\ud034 \ub3cc\ub4ef \uadf8\ub7ec\uba74 order\uc758 mode\ub97c eager\ub85c \ubc14\uafb8\uc790! (\uc0ac\uc2e4 \uc774\ubbf8 \ud574\ubd24\ub358\uac70\uc600\ub2e4) \ub2f9\uc5f0\ud788 \uc2e4\ud328",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("img",{alt:"Untitled",src:r(3984).Z,width:"224",height:"225"}))),(0,a.kt)("p",null,"\ub3c4\uc800\ud788 \uc88b\uc740 \uc0dd\uac01\uc774 \ub5a0\uc624\ub974\uc9c0 \uc54a\uc544 \uc0b0\ucc45\uc744\ud558\uace0 \uc628 \ud6c4 "),(0,a.kt)("h3",{id:"\ubb38\ub4dd"},"\ubb38\ub4dd"),(0,a.kt)("p",null,"\ubb38\ub4dd \uc6b0\ub9ac\uac00 join\uc744 \ud558\uba74 rdb\uc5d0\uc11c \ub2f9\uc5f0\ud788 \uc5ec\ub7ec \uac1c \ub098\uc624\ub294 \ubb38\uc81c\ub97c \uc6b0\ub9ac\ub294 \ud754\ud788 distnct\ub97c \ud558\ub294\ub370 \uc774\ub54c jpa\uc5d0\uc11c\ub294 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Entity\uc758 @Id")),"\ub85c \uc911\ubcf5\uc744 \uc81c\uac70\ud558\ub294 \uac8c \uc0dd\uac01\uc774 \uc9c0\ub098\uac00\ub294\ub370 \uc544 \uadf8\ub7ec\uba74 ",(0,a.kt)("strong",{parentName:"p"},"fetchjoin"),"\ud55c \uc774\ud6c4 \uac00\uc838\uc654\uc5c8\uc744 \ub54c \uc601\uc18d\uc131 \ucee8\ud14c\uc2a4\ud2b8\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"**@Id"),"** \ub85c \uad6c\ubd84\uc744 \ud55c\ub2e4\uace0 \uc0dd\uac01\uc774 \ub4e4\uc5b4 \uae30\uc874 ",(0,a.kt)("inlineCode",{parentName:"p"},"JoinColumn\uc5d0 member_email"),"\ub85c \ub418\uc5b4\uc788\ub294 \ucf54\ub4dc\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"member_id"),"\ub85c \ubcc0\uacbd\ud588\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\n@Entity\n@NoArgsConstructor(access = AccessLevel.PROTECTED)\n@AllArgsConstructor(access = AccessLevel.PROTECTED)\n@Getter\npublic class Order  {\n    @ID\n    @Column(name = "order_id")\n    priate Long id;\n    \n    @ManyToOne(fetch = FetchType.LAZY)\n  @JoinColumn(name = "member_id", referencedColumnName = "member_id", nullable = false, updatable = false)\n    private Set<Member> members = LinkedHashSet<>();\n\n    ...\n}\n\n')),(0,a.kt)("p",null,"\ub208 \uc218\uc220 \ud6c4 \uac74\uc870\ud55c \ub208 \ub54c\ubb38\uc5d0 \ub208\uc744 \uac1c\uc2a4\uce20\ub984\ud55c \ub208\ube5b\uc73c\ub85c \ubaa8\ub2c8\ud130\ub97c \ub6ab\uc5b4\uc9c0\uac8c \ubcf4\uba70 \uc0dd\uac01 \uc911\uc5d0 \uc2a4\uccd0 \uac00\ub294 \uc0dd\uac01\uc774 \uc788\uc5c8\ub294\ub370, Hibernate \uc785\uc7a5\uc5d0\uc11c \uc0dd\uac01(\ub1cc \ucf54\ub529)\uc744 \ud574\ubcf8\ub2e4\uba74 \ub2f9\uc5f0 \ud560 \uc218 \ubc16\uc5d0 \uc5c6\uad6c\ub098\ub77c\ub294 \uc0dd\uac01\uc774 \ub4e4\uc5c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ucffc\ub9ac\ub97c jqpl\ub85c \ub0a0\ub824 \ubcf4\ub0b4\uace0 \uc628 \ud6c4\uc5d0 ",(0,a.kt)("strong",{parentName:"p"},"\uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uce5c\uad6c\ub97c memberId\ub97c \uae30\uc900\uc73c\ub85c \ucee8\ud14d\uc2a4\ud2b8 \ud14c\uc774\ube14\uc5d0 \uac12\uc744 \ub123\uc5b4\ub193\uace0,")," order\ub97c \ubcf4\ub294\ub370 \uc548\uc5d0 Lazy\uac00 \ub5a1\ud558\ub2c8 \uc120\uc5b8\ub418\uc5b4 \uc788\ub294 \uac78 \ubcf4\uace0 \ud5c8\uac81\uc9c0\uac81 \ub2e4\uc2dc \ucc3e\uc73c\ub824\uace0 \ucee8\ud14d\uc2a4\ud2b8\uc5d0\uc11c \ucc3e\uc558\ub294\ub370 \uc548\ubcf4\uc600\ub358 \uac83\uc774\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uadf8\ub798\uc11c 1\ucc28 \uce90\uc2dc\uc5d0 \uc5c6\ub124(Joincolumn\uc5d0 \uc120\uc5b8\ub41c member_email\uc744 \uac00\uc9c0\uace0 key\ub97c \ucc3e\ub2e4 \ubcf4\ub2c8 \uc2e4\uc81c\ub85c\ub294 fetchjoin\uc73c\ub85c \ub123\uc5c8\ub358 key\ub294 memberId\uc774\uc600\uc5b4\uc11c) \uadf8\ub7ec\uba74 db\uc5d0\uc11c \uc870\ud68c\ud574\uc57c\uaca0\ub2e4\uace0 \ud310\ub2e8\ud558\uace0 \ub2e4\uc2dc lazy\uc870\uc778\uc744 \ub0a0\ub824 \ubc1c\uc0dd\ud55c \ubb38\uc81c\uc778 \uac70\uc9c0 \uc54a\uc744\uae4c?"),(0,a.kt)("h1",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-JPA-API%EA%B0%9C%EB%B0%9C-%EC%84%B1%EB%8A%A5%EC%B5%9C%EC%A0%81%ED%99%94/"},"Inflearn \uc601\ud658\ub2d8 \uac15\uc758"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788960777330"},"JPA \ud504\ub85c\uadf8\ub798\ubc0d"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-data/jpa/docs/2.5.11/reference/html/"},"docs")))}c.isMDXComponent=!0},2492:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Untitled 1-38ae4d40957764c77112ba335338f0c4.png"},3984:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Untitled 3-1368a6ee87c516b456e672ef751bd824.png"},866:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Untitled-9b8cd5d5174ff20668e14bba4284770a.png"}}]);