"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[280],{280:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var o,r,i,c,a,u,l=t(439),s=t(87),f=t(689),d=t(791),h=t(168),p=t(686),Z=p.Z.div(o||(o=(0,h.Z)(["\n  margin-bottom: 10px;\n"]))),m=p.Z.input(r||(r=(0,h.Z)(["\noutline:transparent;\n  padding: 5px;\n  font-size: 16px;\n"]))),x=p.Z.button(i||(i=(0,h.Z)(["\n  padding: 8px 16px;\n  font-size: 16px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n"]))),g=p.Z.ul(c||(c=(0,h.Z)(["\n  list-style-type: none;\n  padding: 0;\n"]))),b=p.Z.li(a||(a=(0,h.Z)(["\n  margin-bottom: 10px;\n"]))),I=(0,p.Z)(s.rU)(u||(u=(0,h.Z)(["\n text-decoration: none;\n  color: #007bff;\n  font-weight: bold;\n  \n   &:hover {\n    color: #ff0000;\n  }\n"]))),v=t(184),j=function(){var n,e=(0,s.lr)(),t=(0,l.Z)(e,2),o=t[0],r=t[1],i=(0,d.useState)(null!==(n=o.get("movie"))&&void 0!==n?n:""),c=(0,l.Z)(i,2),a=c[0],u=c[1],h=(0,d.useState)([]),p=(0,l.Z)(h,2),j=p[0],w=p[1],N=(0,d.useState)(!1),y=(0,l.Z)(N,2),z=y[0],k=y[1],J=(0,f.TH)();(0,d.useEffect)((function(){if(z){fetch("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=".concat(a),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTM5NjE1NGQ2YzQ3ODZkNWQ1YmUyMTI5OWEyZmUzNiIsInN1YiI6IjY0NmY5N2IyNzcwNzAwMDExOTI0MWFkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZAuKwEvcInwBmcDArKOc8GXVez8PoE95w65xznuwwg"}}).then((function(n){return n.json()})).then((function(n){w(n.results)})).catch((function(n){return console.error(n)})),k(!1),u("")}}),[a,z]);return(0,v.jsxs)(Z,{children:[(0,v.jsx)(m,{type:"text",value:a,onChange:function(n){var e=n.target.value;u(e),""===e&&r({})}}),(0,v.jsx)(x,{onClick:function(){r({movie:a}),k(!0)},children:"Search"}),(0,v.jsx)(g,{children:j.map((function(n){return(0,v.jsx)(b,{children:(0,v.jsx)(I,{to:"".concat(n.id),state:{from:J},children:n.title})},n.id)}))})]})}}}]);
//# sourceMappingURL=280.5e3e1c4a.chunk.js.map