"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{797:function(e,t,r){r.r(t);var a=r(861),n=r(439),c=r(757),i=r.n(c),u=r(243),s=r(87),o=r(791),l=r(184);t.default=function(){var e=(0,o.useState)([]),t=(0,n.Z)(e,2),r=t[0],c=t[1],f=(0,s.useSearchParams)(),h=(0,n.Z)(f,2),p=h[0],m=h[1],v=p.get("filmName");return(0,o.useEffect)((function(){if(null!==v){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"51934b572a5859af92b6c7b46a350a1c",e.prev=1,e.next=4,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("51934b572a5859af92b6c7b46a350a1c","&query=").concat(v));case 4:t=e.sent,c(t.data.results),console.log(t.data.results),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[v]),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m({filmName:e.target[0].value})},children:[(0,l.jsx)("input",{placeholder:"Type movie title"}),(0,l.jsx)("button",{children:"Search"})]}),r.length>0?r.map((function(e){var t="/movies/".concat(e.id);return(0,l.jsx)("p",{children:(0,l.jsx)(s.Link,{to:t,children:e.title})},e.id)})):(0,l.jsx)("p",{children:"Search your fav films"})]})})}}}]);
//# sourceMappingURL=797.231f3027.chunk.js.map