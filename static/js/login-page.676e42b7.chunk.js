(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{83:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(35);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!e||a.length!==e);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},84:function(t,e,a){t.exports={form:"Form_form__1dm_z",box_form:"Form_box_form__3Lero",input:"Form_input__oJlhq",title:"Form_title__1povQ",button:"Form_button__1d3jr"}},91:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(83),o=a(9),c=a(12),i=a(84),l=a.n(i),s=a(1);function u(){var t=Object(n.useState)(""),e=Object(r.a)(t,2),a=e[0],i=e[1],u=Object(n.useState)(""),b=Object(r.a)(u,2),m=b[0],j=b[1],f=Object(o.b)(),p=Object(n.useCallback)((function(t){f(c.a.logIn(t))}),[f]),d=Object(n.useCallback)((function(t){i(t.target.value)}),[]),h=Object(n.useCallback)((function(t){j(t.target.value)}),[]),O=Object(n.useCallback)((function(t){t.preventDefault(),p({email:a,password:m}),j(""),i("")}),[p,a,m]);return Object(s.jsxs)("form",{onSubmit:O,className:l.a.form,children:[Object(s.jsxs)("label",{className:l.a.title,children:["Email",Object(s.jsx)("input",{className:l.a.input,type:"email",name:"email",value:a,placeholder:"Enter email",onChange:d})]}),Object(s.jsxs)("label",{className:l.a.title,children:["Password",Object(s.jsx)("input",{className:l.a.input,type:"password",name:"password",value:m,placeholder:"Enter password",onChange:h})]}),Object(s.jsx)("button",{className:l.a.button,type:"submit",children:"Log in"})]})}var b=a(49),m=a.n(b);e.default=function(){return Object(s.jsxs)("div",{className:m.a.page_logins,children:[Object(s.jsx)("h1",{children:"Log in "}),Object(s.jsx)(u,{})]})}}}]);
//# sourceMappingURL=login-page.676e42b7.chunk.js.map