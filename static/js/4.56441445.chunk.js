(this.webpackJsonpcare2care=this.webpackJsonpcare2care||[]).push([[4],{64:function(n,e,t){"use strict";var c,i=t(4),r=t(3),a=t(2);e.a=function(){return Object(a.jsx)(s,{children:Object(a.jsx)("p",{children:"No Patient Selected"})})};var s=r.d.div(c||(c=Object(i.a)(["\n  text-align: center;\n"])))},66:function(n,e,t){"use strict";t.r(e);var c,i,r=t(4),a=t(7),s=t(1),o=t(28),p=t(27),d=t(64),x=t(13),l=t(3),j=t(12),h=t(2);e.default=function(){var n=Object(o.a)("https://docs.google.com/spreadsheets/d/e/2PACX-1vRylb8I0x2LH26SwEXfv7HXfN_91VfLiOlEWxFDWp7VDxiS76XdGIqOoM8nNE9Yx2-dtVR0CyXjpRSh/pub?output=csv"),e=Object(a.a)(n,1)[0],t=Object(s.useContext)(p.a),c=e.filter((function(n){return n.Patient.includes(t.patient)})),i=Array.isArray(c)&&c.map((function(n,e){return Object(h.jsxs)(b,{children:[Object(h.jsxs)("div",{className:"title-time",children:[Object(h.jsx)("h3",{children:n.Records}),Object(h.jsx)("p",{children:n.Timestamp})]}),Object(h.jsx)("p",{children:n.Comments}),Object(h.jsxs)("div",{className:"posted-by",children:[Object(h.jsxs)("p",{children:["Posted by: ",n.Email]}),Object(h.jsx)("p",{children:n.Job_Title})]})]})})),r=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"patient-selected",children:[Object(h.jsx)(j.b,{to:"/patient",children:"See Profile"}),Object(h.jsx)("h3",{children:t.patient})]}),i]})};return Object(h.jsxs)(u,{children:[Object(h.jsx)("h1",{children:"Daily Logs"}),Object(h.jsx)("div",{children:t.patient?Object(h.jsx)(r,{}):Object(h.jsx)(d.a,{})})]})};var u=l.d.div(c||(c=Object(r.a)(["\n  height: calc(100vh - 140px);\n  \n  a {\n    text-decoration: none;\n    color: ",";\n    background-color: ",";\n    padding: 5px 10px;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n\n  .patient-selected {\n    ","\n    justify-content: space-around;\n    max-width: 600px;\n    margin: 30px auto 40px;\n  }\n"])),(function(n){return n.theme.fontColor1}),(function(n){return n.theme.accent2}),x.a),b=l.d.div(i||(i=Object(r.a)(["\n  max-width: 600px;\n  margin: 30px auto 50px;\n  padding: 0 15px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n\n  h3 {\n    margin: 10px 0;\n  }\n\n  .title-time {\n    ","\n    justify-content: space-between;\n\n    p {\n      background: ",";\n      color: ",";\n      font-size: 12px;\n      padding: 2px 3px 4px;\n      border-radius: 10px;\n      position: relative;\n      width: 50%;\n      text-align: center;\n      top: -22px;\n      right: -10px;\n    }\n\n    h3 {\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      width: 50%;\n    }\n  }\n\n  .posted-by {\n    ","\n    justify-content: space-between;\n    font-size: 10px;\n\n    p {\n      color: ",";\n      margin: 15px 0 5px;\n      border-radius: 10px;\n    }\n  }\n"])),x.a,(function(n){return n.theme.accent1}),(function(n){return n.theme.fontColor1}),x.a,(function(n){return n.theme.menuBg}))}}]);
//# sourceMappingURL=4.56441445.chunk.js.map