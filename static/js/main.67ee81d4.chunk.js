(this["webpackJsonppopular-games"]=this["webpackJsonppopular-games"]||[]).push([[0],{124:function(e,t,a){e.exports={overlay:"Header_overlay__1cgJz"}},135:function(e,t,a){e.exports=a(201)},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=a(22),i=a.n(c),s=a(43),u=a(30),m=a(88),d=a.n(m),p="https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31",f=function(){var e=Object(s.a)(i.a.mark((function e(t,a){var n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p,n=t&&a?"https://api.rawg.io/api/games?dates=".concat(t,"-01-01,").concat(t,"-12-31&genres=").concat(a):t?"https://api.rawg.io/api/games?dates=".concat(t,"-01-01,").concat(t,"-12-31"):a?"https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&genres=".concat(a):p,e.prev=2,e.next=5,d.a.get(n);case 5:return r=e.sent,l=r.data.results,e.abrupt("return",l);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://api.rawg.io/api/genres");case 3:return t=e.sent,a=t.data.results,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),b=a(114),h=a(224),v=a(237),E=a(236),y=a(238),x=a(106),k=Object(x.a)((function(e){return{filterContainer:Object(b.a)({margin:e.spacing(2,0),zIndex:10},e.breakpoints.down("xs"),{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%"}),formControl:{margin:e.spacing(1,2),minWidth:150}}})),w=function(e){var t=e.year,a=e.setYear,n=e.fetchedGenres,l=e.genre,o=e.setGenre,c=e.listSize,i=e.setListSize,s=k(),u=(new Date).getUTCFullYear(),m=Array(u-(u-30)).fill("").map((function(e,t){return u-t}));return r.a.createElement("div",{className:s.filterContainer},r.a.createElement(h.a,{variant:"outlined",className:s.formControl},r.a.createElement(v.a,{id:"demo-simple-select-outlined-label"},"Year"),r.a.createElement(E.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:t||"",onChange:function(e){a(e.target.value)},label:"Years"},m.map((function(e,t){return r.a.createElement(y.a,{key:t,value:e},e)})))),r.a.createElement(h.a,{variant:"outlined",className:s.formControl},r.a.createElement(v.a,{id:"demo-simple-select-outlined-label"},"Genre"),r.a.createElement(E.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:l||"",onChange:function(e){o(e.target.value)},label:"Genre"},r.a.createElement(y.a,{value:""},r.a.createElement("em",null,"All")),n.map((function(e){return r.a.createElement(y.a,{key:e.id,value:e.slug},e.name)})))),r.a.createElement(h.a,{variant:"outlined",className:s.formControl},r.a.createElement(v.a,{id:"demo-simple-select-outlined-label"},"List Size"),r.a.createElement(E.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:c||"",onChange:function(e){i(e.target.value)},label:"List Size"},r.a.createElement(y.a,{key:4,value:4},"4"),r.a.createElement(y.a,{key:8,value:8},"8"),r.a.createElement(y.a,{key:12,value:12},"12"),r.a.createElement(y.a,{key:16,value:16},"16"),r.a.createElement(y.a,{key:20,value:20},"20"))))},j=a(228),O=a(229),S=a(230),C=a(81),N=a(231),I=a(118),z=a.n(I),M=(a(163),a(76)),_=a(119),G=a(120),L=a(121),P=a.n(L),B=a(127),Y=Object(x.a)((function(){return{card:{borderRadius:"1rem",boxShadow:"none",position:"relative",minWidth:250,minHeight:360,"&:after":{content:'""',display:"block",position:"absolute",width:"100%",height:"64%",bottom:0,zIndex:1,background:"linear-gradient(to top, #000, rgba(0,0,0,0))"}},content:{position:"absolute",zIndex:2,bottom:0,width:"100%"},CircularProgress:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50px, -50px)"}}})),A=r.a.memo((function(e){var t=e.items,a=e.muted,n=e.listSize,l=Object(G.useCoverCardMediaStyles)({bgPosition:"top"}),o=Y();return r.a.createElement(r.a.Fragment,null,t.slice(0,n).map((function(e){return r.a.createElement(j.a,{item:!0,xs:12,sm:6,md:6,lg:3,xl:3,key:e.id},r.a.createElement(B.a,{className:o.HoverVideoPlayer,videoSrc:e.clip?e.clip.clips.full:null,sizingMode:"overlay",preload:"metadata",muted:a,unloadVideoOnPaused:!0,videoStyle:{borderRadius:"1rem"},pausedOverlay:r.a.createElement(P.a,{animateIn:"animate__fadeIn",offset:140,duration:.6,animateOnce:!0},r.a.createElement(O.a,{className:o.card},r.a.createElement(S.a,{classes:l,image:e.background_image}),r.a.createElement(C.a,{py:3,px:2,className:o.content},r.a.createElement(M.Info,{useStyles:_.useGalaxyInfoStyles},r.a.createElement(M.InfoTitle,null,e.name),r.a.createElement(M.InfoCaption,null,"Metacritic:"," ",r.a.createElement("span",null,r.a.createElement(z.a,{end:e.metacritic?e.metacritic:0,delay:.4,duration:3}))))))),loadingOverlay:e.clip?r.a.createElement(N.a,{className:o.CircularProgress}):null}))})))})),D=Object(x.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(0,2)}}})),W=function(e){var t=e.isLoading,a=e.items,n=e.muted,l=e.setMuted,o=e.listSize,c=D();return t?r.a.createElement(N.a,null):r.a.createElement("div",{className:c.root},r.a.createElement(j.a,{container:!0,spacing:2},r.a.createElement(A,{items:a,muted:n,setMuted:l,listSize:o})))},F=a(87),T=a(232),H=a(233),J=a(234),R=a(122),V=a.n(R),K=a(123),Q=a.n(K);function U(){return r.a.createElement(F.a,{variant:"body2"},"Copyright \xa9 ",r.a.createElement(T.a,{color:"inherit",href:"https://kovacsmarkakos.github.io/popular-games"},"Popular Games")," ",(new Date).getFullYear(),".")}var q=Object(x.a)((function(e){return{footer:{display:"flex",justifyContent:"space-around",alignItems:"center",width:"100vw",height:"18vh",padding:e.spacing(3,2),marginTop:e.spacing(2),backgroundColor:e.palette.grey[900],color:e.palette.grey[400],"@media (min-width: 1280px)":{padding:e.spacing(3,10),height:"16vh"}},footerIcons:{display:"flex",justifyContent:"flex-end"},iconButton:{color:e.palette.grey[200],"&:hover":{backgroundColor:e.palette.grey[800],color:"#f5da55"}},madeBy:{color:"#fff"},a:{textDecoration:"none",color:"#fff","&:hover":{color:"#f5da55"}}}})),X=function(){var e=q();return r.a.createElement("footer",{className:e.footer},r.a.createElement(H.a,null,r.a.createElement(F.a,{variant:"body1",className:e.madeBy},"Made by"," ",r.a.createElement("a",{href:"https://markkovacs.com",target:"_blank",rel:"noopener noreferrer",className:e.a},"Mark Kovacs")),r.a.createElement(U,null)),r.a.createElement(H.a,{className:e.footerIcons},r.a.createElement("a",{href:"https://github.com/kovacsmarkakos",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(J.a,{"aria-label":"linkedin",className:e.iconButton},r.a.createElement(V.a,null))),r.a.createElement("a",{href:"https://www.linkedin.com/in/m\xe1rk-kov\xe1cs-0363b61b7/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(J.a,{"aria-label":"github",className:e.iconButton},r.a.createElement(Q.a,null)))))},Z=a(124),$=a.n(Z),ee=a(125),te=a.n(ee),ae=a(126),ne=a.n(ae),re=function(e){var t=e.muted,a=e.setMuted;return r.a.createElement(te.a,{wrapperStyle:{cursor:"pointer"},reverse:t,onClick:function(){a(!t)},size:40,animation:ne.a})},le=a(40),oe=a(113),ce=a(227),ie=Object(x.a)((function(e){return{header:{display:"flex",position:"relative",flexDirection:"column",justifyContent:"center",width:"100vw",height:"40vh",alignItems:"center",margin:e.spacing(0,0,3,0),padding:e.spacing(4,2),textAlign:"center",textShadow:"0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)",backgroundColor:"#3b3c38",zIndex:1},rawg:{position:"absolute",top:10,right:10,textShadow:"none"},rawgLink:{textDecoration:"none",color:"#f3f3f3",cursor:"pointer","&:hover":{color:"#f5da55"}}}})),se=function(e){var t=e.muted,a=e.setMuted,n=ie(),l=Object(le.a)();return l=Object(oe.a)(l),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:n.header},r.a.createElement("div",{className:$.a.overlay}),r.a.createElement(ce.a,{theme:l},r.a.createElement(F.a,{variant:"h1"},r.a.createElement(C.a,{fontWeight:"fontWeightBold",color:"#f5da55",m:1},"Popular Games")),r.a.createElement(F.a,{variant:"h6",component:"h2"},r.a.createElement(C.a,{fontWeight:"600",letterSpacing:4,color:"#fff",m:1},"The most popular games by Year and Genre")),r.a.createElement(F.a,{variant:"caption",display:"block",className:n.rawg},r.a.createElement("a",{href:"https://rawg.io/apidocs",target:"_blank",rel:"noopener noreferrer",className:n.rawgLink},"Source: RAWG API")))),r.a.createElement(re,{muted:t,setMuted:a}))},ue=a(89),me=a.n(ue),de=a(235),pe=Object(le.a)({palette:{primary:{main:"#3b3c38"},secondary:{main:"#f5da55"}}}),fe=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!0),c=Object(u.a)(o,2),m=c[0],d=c[1],p=Object(n.useState)(0),b=Object(u.a)(p,2),h=b[0],v=b[1],E=Object(n.useState)([]),y=Object(u.a)(E,2),x=y[0],k=y[1],j=Object(n.useState)(""),O=Object(u.a)(j,2),S=O[0],C=O[1],N=Object(n.useState)(!0),I=Object(u.a)(N,2),z=I[0],M=I[1],_=Object(n.useState)(12),G=Object(u.a)(_,2),L=G[0],P=G[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=k,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[k]),Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(h,S);case 2:t=e.sent,l(t),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h,S]),m?"":r.a.createElement(r.a.Fragment,null,r.a.createElement(de.a,null),r.a.createElement(ce.a,{theme:pe},r.a.createElement("div",{className:me.a.container},r.a.createElement(se,{muted:z,setMuted:M}),r.a.createElement(w,{className:me.a.filters,year:h,setYear:v,genre:S,setGenre:C,fetchedGenres:x,listSize:L,setListSize:P}),r.a.createElement(W,{isLoading:m,setIsLoading:d,items:a,muted:z,setMuted:M,listSize:L}),r.a.createElement(X,null))))};o.a.render(r.a.createElement(fe,null),document.getElementById("root"))},89:function(e,t,a){e.exports={container:"App_container__1MQN3"}}},[[135,1,2]]]);
//# sourceMappingURL=main.67ee81d4.chunk.js.map