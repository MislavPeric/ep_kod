(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(4),a=n.n(s),o=(n(9),n(2)),r=(n(10),n(0));var j=function(){var e=Object(c.useState)([{id:1,task_name:"Prvi izazov",completed:!1},{id:2,task_name:"Drugi izazov",completed:!1}]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),a=Object(o.a)(s,2),j=a[0],d=a[1],l=Object(c.useState)(""),u=Object(o.a)(l,2),b=u[0],h=u[1];return Object(c.useEffect)((function(){fetch("http://127.0.0.1:8000/api/tasks").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[j]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("p",{style:{fontSize:48,padding:20},children:"Todo list"}),Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("div",{className:"outerContainer",children:n.map((function(e,t){return Object(r.jsxs)("div",{className:"taskContainer",children:[Object(r.jsxs)("label",{className:"container",children:[Object(r.jsx)("input",{type:"checkbox",checked:e.completed,onChange:function(){return function(e){var t=n.map((function(t,n){return e===n?(t.completed=!t.completed,t):t}));d(!j),i(t)}(t)}}),Object(r.jsx)("span",{className:"checkmark"})]}),Object(r.jsx)("p",{className:"deletable",onClick:function(){return t=e.id,fetch("http://127.0.0.1:8000/api/tasks/insert",{method:"DELETE",body:JSON.stringify({i:t})}),void d(!j);var t},children:e.task_name})]})}))}),Object(r.jsx)("button",{onClick:function(){fetch("http://127.0.0.1:8000/api/tasks/check_all"),d(!j)},children:"Ozna\u0107i sve todo kao gotove"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("p",{style:{fontSize:24},children:"Unesi ime novog taska"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:b,onChange:function(e){return h(e.target.value)}})," ",Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){fetch("http://127.0.0.1:8000/api/tasks/insert",{method:"PUT",body:JSON.stringify({name:b})}),d(!j)},children:"Dodaj novi todo"})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.889c3f50.chunk.js.map