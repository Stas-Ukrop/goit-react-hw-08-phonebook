(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{83:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(35);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},84:function(e,t,a){e.exports={form:"Form_form__1dm_z",box_form:"Form_box_form__3Lero",input:"Form_input__oJlhq",title:"Form_title__1povQ",button:"Form_button__1d3jr"}},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(83),o=a(12),c=a(9),i=a(84),l=a.n(i),s=a(1);function u(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],i=t[1],u=Object(n.useState)(""),b=Object(r.a)(u,2),m=b[0],j=b[1],p=Object(n.useState)(""),d=Object(r.a)(p,2),f=d[0],h=d[1],O=Object(c.b)(),v=Object(n.useCallback)((function(e){O(o.a.register(e))}),[O]),_=Object(n.useCallback)((function(e){i(e.target.value)}),[]),y=Object(n.useCallback)((function(e){h(e.target.value)}),[]),x=Object(n.useCallback)((function(e){j(e.target.value)}),[]),g=Object(n.useCallback)((function(e){e.preventDefault(),v({name:a,password:f,email:m})}),[v,f,a,m]);return Object(s.jsxs)("form",{onSubmit:g,className:l.a.form,children:[Object(s.jsxs)("label",{className:l.a.title,children:["Name",Object(s.jsx)("input",{type:"text",value:a,placeholder:"Enter name",onChange:_,name:"name",className:l.a.input,required:!0})]}),Object(s.jsxs)("label",{className:l.a.title,children:["Email",Object(s.jsx)("input",{className:l.a.input,type:"email",name:"email",value:m,placeholder:"Enter email",onChange:x,required:!0})]}),Object(s.jsxs)("label",{className:l.a.title,children:["Password",Object(s.jsx)("input",{className:l.a.input,type:"password",name:"password",value:f,onChange:y,placeholder:"Enter password",required:!0})]}),Object(s.jsx)("button",{className:l.a.button,type:"submit",children:"Sing in"})]})}var b=a(49),m=a.n(b);t.default=function(){return Object(s.jsxs)("div",{className:m.a.page_register,children:[Object(s.jsx)("h1",{children:"Sign in"}),Object(s.jsx)(u,{})]})}}}]);
//# sourceMappingURL=register-page.69bb25b8.chunk.js.map