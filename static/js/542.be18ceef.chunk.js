"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[542],{542:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var i,o,r,c,a=t(439),u=t(791),s=t(168),l=t(686),h=t(87),f=l.Z.div(i||(i=(0,s.Z)(["\n display: flex;\n  // justify-content: center;\n  // align-items: center;\n"]))),d=l.Z.ul(o||(o=(0,s.Z)(["\nlist-style: none;\n  padding: 0;\n"]))),m=l.Z.li(r||(r=(0,s.Z)(["\n margin-bottom: 10px;\n"]))),Z=(0,l.Z)(h.rU)(c||(c=(0,s.Z)(["\n text-decoration: none;\n  color: #007bff;\n  font-weight: bold;\n  \n   &:hover {\n    color: #ff0000;\n  }\n"]))),p=t(184),I=function(){var n=(0,u.useState)([]),e=(0,a.Z)(n,2),t=e[0],i=e[1];return(0,u.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTM5NjE1NGQ2YzQ3ODZkNWQ1YmUyMTI5OWEyZmUzNiIsInN1YiI6IjY0NmY5N2IyNzcwNzAwMDExOTI0MWFkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZAuKwEvcInwBmcDArKOc8GXVez8PoE95w65xznuwwg"}}).then((function(n){return n.json()})).then((function(n){return i(n.results)})).catch((function(n){return console.error(n)}))}),[]),(0,p.jsx)(f,{children:(0,p.jsx)(d,{children:t.map((function(n){return(0,p.jsx)(m,{children:(0,p.jsx)(Z,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})})}}}]);
//# sourceMappingURL=542.be18ceef.chunk.js.map