(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),i=n.n(a),o=(n(9),n(2)),r=(n(10),n(0));var j=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(o.a)(a,2),j=i[0],l=i[1],d=Object(c.useState)(""),u=Object(o.a)(d,2),b=u[0],h=u[1];return Object(c.useEffect)((function(){fetch("/api/tasks/get_all/").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[j]),0===n.length?null:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("p",{style:{fontSize:48,padding:20},children:"Todo list"}),Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("div",{className:"outerContainer",children:n.map((function(e,t){return Object(r.jsxs)("div",{className:"taskContainer",children:[Object(r.jsxs)("label",{className:"container",children:[Object(r.jsx)("input",{type:"checkbox",checked:e.completed,onChange:function(){return function(e){var t=n.map((function(t,n){return e===n?(t.completed=!t.completed,t):t}));l(!j),s(t)}(t)}}),Object(r.jsx)("span",{className:"checkmark"})]}),Object(r.jsx)("p",{className:"deletable",onClick:function(){return t=e.id,fetch("/api/tasks/delete_selected/",{method:"DELETE",body:JSON.stringify({i:t})}),void l(!j);var t},children:e.task_name})]})}))}),Object(r.jsx)("button",{onClick:function(){fetch("/api/tasks/check_all"),l(!j)},children:"Ozna\u0107i sve todo kao gotove"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("p",{style:{fontSize:24},children:"Unesi ime novog taska"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",value:b,onChange:function(e){return h(e.target.value)}})," ",Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){fetch("/api/tasks/insert/",{method:"PUT",body:JSON.stringify({name:b})}),l(!j)},children:"Dodaj novi todo"})]})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.88c671f9.chunk.js.map