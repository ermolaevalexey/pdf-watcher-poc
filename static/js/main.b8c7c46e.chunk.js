(this["webpackJsonppdf-watcher"]=this["webpackJsonppdf-watcher"]||[]).push([[0],{22:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=22},42:function(e,t,a){e.exports=a(94)},47:function(e,t,a){},48:function(e,t,a){},53:function(e,t){},55:function(e,t){},56:function(e,t){},57:function(e,t){},58:function(e,t){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(40),l=a.n(r),o=(a(47),a(19)),s=(a(48),a(2)),u=a.n(s),i=a(28),m=a(41),p=a(20);a(93);function d(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(0),d=Object(o.a)(s,2),f=d[0],h=d[1],E=Object(n.useRef)(null),b=Object(n.useCallback)(Object(i.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n=e.fileUrl,fetch(n,{headers:{Accept:"application/pdf"}}).then((function(e){return e.blob()}));case 2:a=t.sent,l(a);case 4:case"end":return t.stop()}var n}),t)}))),[e.fileUrl]),w=Object(n.useCallback)((function(e){var t=e.numPages;h(t)}),[h]);return Object(n.useEffect)((function(){Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:case"end":return e.stop()}}),e)})))()}),[b]),r&&c.a.createElement("div",{ref:E},c.a.createElement(p.Document,{className:"document",file:r,onLoadSuccess:w},!!f&&Object(m.range)(1,f+1).map((function(e){return c.a.createElement(p.Page,{className:"page",key:e,pageNumber:e,width:E.current&&E.current.clientWidth||0})}))))}p.pdfjs.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(p.pdfjs.version,"/pdf.worker.js");var f=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useCallback)((function(e){r(e.currentTarget.value)}),[a,r]);return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"PDF watcher POC")),c.a.createElement("div",{className:"App-Content"},c.a.createElement("h2",null,"Enter a URL with PDF file of choice*"),c.a.createElement("h3",null,"Examples:"),c.a.createElement("ul",{className:"links"},c.a.createElement("li",null,c.a.createElement("code",null,"https://raw.githubusercontent.com/diegomura/react-pdf/master/examples/resume/output.pdf")),c.a.createElement("li",null,c.a.createElement("code",null,"https://raw.githubusercontent.com/diegomura/react-pdf/master/examples/pageWrap/output.pdf")),c.a.createElement("li",null,c.a.createElement("code",null,"https://raw.githubusercontent.com/diegomura/react-pdf/master/examples/knobs/output.pdf")),c.a.createElement("li",null,c.a.createElement("code",null,"/a-sample-pdf.pdf")),c.a.createElement("li",null,c.a.createElement("code",null,"/gre_research_validity_data.pdf"))),c.a.createElement("div",{className:"App-Form"},c.a.createElement("input",{type:"text",value:a,onChange:l}),c.a.createElement("span",{className:"disclaimer"},"*External urls will work only with allowed cross-domain access")),c.a.createElement("div",{className:"Watcher-container"},a&&c.a.createElement(d,{fileUrl:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.b8c7c46e.chunk.js.map