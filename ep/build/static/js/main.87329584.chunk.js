(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(4),a=n.n(i),o=(n(9),n(2)),r=(n(10),n(0));var j=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),a=Object(o.a)(i,2),j=a[0],u=a[1],d=Object(c.useState)(""),l=Object(o.a)(d,2),b=l[0],h=l[1];return Object(c.useEffect)((function(){fetch("/api/tasks").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[j]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("p",{style:{fontSize:48,padding:20},children:"Todo list"}),Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("div",{className:"outerContainer",children:n.map((function(e,t){return Object(r.jsxs)("div",{className:"taskContainer",children:[Object(r.jsxs)("label",{className:"container",children:[Object(r.jsx)("input",{type:"checkbox",checked:e.completed,onChange:function(){return function(e){var t=n.map((function(t,n){return e===n?(t.completed=!t.completed,t):t}));u(!j),s(t)}(t)}}),Object(r.jsx)("span",{className:"checkmark"})]}),Object(r.jsx)("p",{className:"deletable",onClick:function(){return t=e.id,fetch("/api/tasks/insert",{method:"DELETE",body:JSON.stringify({i:t})}),void u(!j);var t},children:e.task_name})]})}))}),Object(r.jsx)("button",{onClick:function(){fetch("/api/tasks/check_all"),u(!j)},children:"Ozna\u0107i sve todo kao gotove"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("p",{style:{fontSize:24},children:"Unesi ime novog taska"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:b,onChange:function(e){return h(e.target.value)}})," ",Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){fetch("/api/tasks/insert",{method:"PUT",body:JSON.stringify({name:b})}),u(!j)},children:"Dodaj novi todo"})]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.87329584.chunk.js.map