"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[233],{233:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(861),r=a(439),s=a(757),c=a.n(s),i=a(243),o="FilmDetails_wrapper__xTWAq",u="FilmDetails_title__nl6+w",l="FilmDetails_image__sj8N7",d="FilmDetails_background__rMImu",h=a(791),v=a(184),m=a(87),p=m.useParams,f=m.useNavigate,x=m.useLocation,_=m.Link,j=function(){var e=p().filmId,t=(0,h.useState)(e),a=(0,r.Z)(t,1)[0],s=(0,h.useState)({}),m=(0,r.Z)(s,2),j=m[0],b=m[1],k=f(),w=x();(0,h.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"51934b572a5859af92b6c7b46a350a1c",e.prev=1,e.next=4,i.Z.get("https://api.themoviedb.org/3/movie/".concat(a,"?api_key=").concat("51934b572a5859af92b6c7b46a350a1c"));case 4:t=e.sent,b(t.data),console.log(t.data),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)(_,{to:function(){var e,t;return null!==(e=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"}(),children:"Go Back"}),(0,v.jsxs)("div",{className:o,children:[(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(j.poster_path),alt:"".concat(j.title," poster"),width:"300",height:"400",className:l})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{className:u,children:j.title}),(0,v.jsx)("p",{children:j.overview}),(0,v.jsxs)("p",{children:["Status: ",j.status]}),(0,v.jsxs)("p",{children:["Average vote: ",Math.round(j.vote_average),"/10",(0,v.jsx)("br",{}),"Vote count: ",j.vote_count]})]})]}),(0,v.jsx)("button",{onClick:function(){k("/movies/".concat(a,"/cast"))},children:"Show cast"}),(0,v.jsx)("button",{onClick:function(){k("/movies/".concat(a,"/reviews"))},children:"Reviews"})]})},b=a(689),k=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j,{}),(0,v.jsx)(b.j3,{})]})}}}]);
//# sourceMappingURL=233.6fa0a525.chunk.js.map