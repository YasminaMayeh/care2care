(this.webpackJsonpcare2care=this.webpackJsonpcare2care||[]).push([[0],{23:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var c,i=e(8),r=e(4).c.button(c||(c=Object(i.a)(["\n  height: 40px;\n  width: 100px;\n  border: none;\n  border-radius: 10px;\n  color: #f5f5f5;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n"])))},46:function(t,n,e){"use strict";e.r(n);var c,i,r,o,a,s=e(0),l=e(24),b=e.n(l),j=function(t){t&&t instanceof Function&&e.e(9).then(e.bind(null,52)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),c(t),i(t),r(t),o(t)}))},d=e(15),h=e(9),u=e(16),g=e(4),f=e(8),O=Object(g.b)(c||(c=Object(f.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  }\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;\n  font-size: 14px;\n  line-height: 1.5;\n  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]))),x={light:{bg:"#f5f5f5",accent1:"#1C7293"},dark:{bg:"#0D1117",accent1:"#51ADE2"}},p=function(t,n){var e=Object(s.useState)((function(){try{var e=window.localStorage.getItem(t);return e?JSON.parse(e):n}catch(c){return console.log(c),n}})),c=Object(u.a)(e,2),i=c[0],r=c[1];return[i,function(n){try{var e=n instanceof Function?n(i):n;r(e),window.localStorage.setItem(t,JSON.stringify(e))}catch(c){console.log(c)}}]},m=e(23),w=e(1),v=function(){var t=Object(h.b)().loginWithRedirect;return Object(w.jsx)(y,{onClick:t,children:"Log In"})},y=Object(g.c)(m.a)(i||(i=Object(f.a)(["\n  background: rgb(31, 193, 27);\n"]))),k=e.p+"static/media/smallLogo.fc6b04ec.svg",S=function(){return Object(w.jsxs)(I,{children:[Object(w.jsx)("img",{src:k,alt:""}),[{title:"Profile",path:"/profile"},{title:"Patient",path:"/patient"},{title:"Add New Record",path:"/add"},{title:"Check Records",path:"/check"},{title:"Settings",path:"/settings"}].map((function(t,n){return Object(w.jsx)(d.b,{to:t.path,children:t.title},n)}))]})},I=g.c.nav(r||(r=Object(f.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n"]))),F=Object(s.lazy)((function(){return e.e(8).then(e.bind(null,53))})),C=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(s.Suspense,{fallback:Object(w.jsx)("div",{children:"Loading"}),children:Object(w.jsx)(F,{})})})},L=e.p+"static/media/logo.a12f9b50.svg",P=e(29),z=function(){return Object(w.jsxs)(E,{children:[Object(w.jsx)(U,{src:L,alt:""}),Object(w.jsx)(v,{})]})},A=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S,{}),Object(w.jsx)(C,{})]})},E=g.c.div(o||(o=Object(f.a)(["\n  background: ",";\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])),(function(t){return t.theme.bg})),U=Object(g.c)(P.a)(a||(a=Object(f.a)(["\n  max-width: 90vw;\n  width: 350px;\n\n  & path {\n    fill: ",";\n  }\n"])),(function(t){return t.theme.accent1})),J=function(){return Object(h.b)().isAuthenticated?Object(w.jsx)(A,{}):Object(w.jsx)(z,{})},T=function(){var t=p("theme","light"),n=Object(u.a)(t,2),e=n[0],c=n[1];return Object(h.b)().isLoading?Object(w.jsx)("div",{children:"Loading..."}):Object(w.jsxs)(g.a,{theme:x[e],children:[Object(w.jsx)(O,{changeTheme:function(){c("light"===e?"dark":"light")}}),Object(w.jsx)(J,{})]})},B=document.getElementById("root");b.a.render(Object(w.jsx)(h.a,{domain:"archianne.eu.auth0.com",clientId:"9ciI61OkjK0UPi8c8TG0EGUjX6tQHPjq",redirectUri:window.location.origin,children:Object(w.jsx)(d.a,{children:Object(w.jsx)(T,{})})}),B),j()}},[[46,1,2]]]);
//# sourceMappingURL=main.b74043d1.chunk.js.map