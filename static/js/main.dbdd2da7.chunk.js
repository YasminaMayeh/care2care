(this.webpackJsonpcare2care=this.webpackJsonpcare2care||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var i,c,a=n(0),o=n(9),r=n.n(o),s=n(5),l=n(2),b=n(4),j=Object(l.b)(i||(i=Object(b.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  }\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;\n  font-size: 14px;\n  line-height: 1.5;\n  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]))),h={light:{bg:"#f5f5f5"},dark:{bg:"#0D1117"}},d=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(i){return console.log(i),t}})),i=Object(s.a)(n,2),c=i[0],o=i[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(i){console.log(i)}}]},g=n.p+"static/media/smallLogo.401a1b69.svg",f=n(1),u=function(){return Object(f.jsxs)(p,{children:[Object(f.jsx)("img",{src:g,alt:""}),[{title:"Home",path:""},{title:"Profile",path:"profile"},{title:"Patient",path:"patient"},{title:"Add New Record",path:"add"},{title:"Check Records",path:"check"},{title:"Settings",path:"settings"}].map((function(e,t){return Object(f.jsx)("a",{href:"/"+e.path,children:e.title},t)}))]})},p=l.c.nav(c||(c=Object(b.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n"]))),m=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(10)]).then(n.bind(null,42))})),O=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(a.Suspense,{fallback:Object(f.jsx)("div",{children:"Loading"}),children:Object(f.jsx)(m,{})})})},x=function(){var e=d("theme","dark"),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(f.jsxs)(l.a,{theme:h[n],children:[Object(f.jsx)(j,{changeTheme:function(){i("dark"===n?"light":"dark")}}),Object(f.jsx)(u,{}),Object(f.jsx)(O,{})]})},w=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,43)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))},y=document.getElementById("root");r.a.render(Object(f.jsx)(a.StrictMode,{children:Object(f.jsx)(x,{})}),y),w()}},[[20,1,2]]]);
//# sourceMappingURL=main.dbdd2da7.chunk.js.map