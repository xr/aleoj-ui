(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{183:function(e,t,n){},185:function(e,t,n){},195:function(e,t,n){},316:function(e,t,n){},339:function(e,t,n){},340:function(e,t,n){},342:function(e,t,n){},343:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(17),a=n.n(r),i=(n(183),n(116)),o=n(117),l=n(126),j=n(125),b=n(52),d=n(13),u=n(22),h=n.n(u),p=n(30),O=n(18),m=(n(185),n(346)),x=n(127),f=(n(188),n(189),n(192),n(193),n(194),n(195),n(118)),g=n(2);var v=function(e){var t=e.code,n=e.setCode;return Object(g.jsx)(f.Controlled,{value:t,options:{mode:"text/x-c++src",theme:"monokai",keyMap:"sublime",lineNumbers:!0,autoCloseBrackets:!0,dragDrop:!1,indentUnit:2,tabSize:2},onBeforeChange:function(e,t,c){n(c)}})},k=n(119),C=n.n(k),N=n(31),y=n.n(N),w="http://api.liang.fi/oj",S=n(120),E=n.n(S);n(316);var A=function(e){var t=e.problemId,n=Object(c.useState)(null),s=Object(O.a)(n,2),r=s[0],a=s[1],i=Object(c.useState)(null),o=Object(O.a)(i,2),l=o[0],j=o[1];return Object(c.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y()("".concat(w,"/problems/").concat(t));case 3:n=e.sent,a(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),null!=l?Object(g.jsx)(m.b,{intent:"danger",icon:"error",title:l,className:"bp3-dark"}):r?Object(g.jsx)(C.a,{plugins:[E.a],children:r.description}):Object(g.jsx)(m.g,{})},T=(n(339),{TLE:"Time Limit Exceeded",MLE:"Memory Limit Exceeded",RE:"Runtime Error",WA:"Wrong Answer",ACE:"Accepted",ERR:"Error"});var I=function(e){var t=e.result,n=e.problemId,s=Object(c.useState)([]),r=Object(O.a)(s,2),a=r[0],i=r[1];Object(c.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()("".concat(w,"/solutions?problem_id=").concat(n,"&page=1&per=10"));case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var o="ACE"===t.status,l="WA"===t.status;return Object(g.jsxs)("div",{children:[t.status&&Object(g.jsxs)(m.b,{intent:o?"success":"danger",icon:o?"tick":"error",title:T[t.status],className:"bp3-dark submission-result",children:[t.error&&Object(g.jsx)("code",{className:"submission-code",children:t.error}),t.time&&Object(g.jsxs)("div",{children:["Runtime: ",Object(g.jsxs)("strong",{children:[t.time," ms "]})," "]}),t.memory&&Object(g.jsxs)("div",{children:["Memory Usage: ",Object(g.jsxs)("strong",{children:[Math.ceil(t.memory/1024)," KB "]})]}),l&&Object(g.jsxs)("div",{children:[Object(g.jsxs)("code",{className:"submission-code",children:["Case: ",t.case]}),Object(g.jsxs)("code",{className:"submission-code",children:["Expect: ",t.expect]}),Object(g.jsxs)("code",{className:"submission-code",children:["Got: ",t.actual]})]})]}),Object(g.jsx)("br",{}),a.length&&Object(g.jsxs)("table",{className:"aleoj-submission-table bp3-html-table bp3-html-table-bordered bp3-html-table-striped bp3-dark",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Time Submitted"}),Object(g.jsx)("th",{children:"Status"}),Object(g.jsx)("th",{children:"Runtime"}),Object(g.jsx)("th",{children:"Memory"}),Object(g.jsx)("th",{children:"Language"}),Object(g.jsx)("th",{children:"Author"})]})}),Object(g.jsx)("tbody",{children:a.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:new Date(e.timestamp).toLocaleDateString()}),Object(g.jsxs)("td",{children:["ACE"===e.status?Object(g.jsx)(m.e,{icon:"tick",intent:"success"}):Object(g.jsx)(m.e,{icon:"error",intent:"danger"})," ",T[e.status]]}),Object(g.jsxs)("td",{children:[e.time," ms"]}),Object(g.jsxs)("td",{children:[Math.ceil(e.memory/1024)," KB"]}),Object(g.jsx)("td",{children:e.language}),Object(g.jsx)("td",{children:e.author})]},e.id)}))})]}),Object(g.jsx)("div",{className:"aleoj-submission-notes",children:"only show last 10 submissions"})]})};n(340);var L=function(e){var t=e.close,n=e.onChoose,s=Object(c.useState)([]),r=Object(O.a)(s,2),a=r[0],i=r[1],o=Object(d.f)(),l=function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()("".concat(w,"/problems?page=1&per=1000"));case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[]),Object(g.jsx)("table",{className:"aleoj-problems-table bp3-html-table bp3-html-table-bordered bp3-interactive bp3-html-table-striped",children:Object(g.jsx)("tbody",{children:a.data&&a.data.map((function(e){return Object(g.jsxs)("tr",{onClick:function(){o.push("/problems/".concat(e.id)),n(e.id),t()},children:[Object(g.jsxs)("td",{className:"id",children:["#",e.id]}),Object(g.jsx)("td",{children:e.title}),Object(g.jsx)("td",{className:"tag",children:Object(g.jsx)("span",{className:"bp3-tag bp3-round bp3-intent-success bp3-minimal",children:e.tag})})]},e.id)}))})})},R=n(1);n(342);var D=function(e){return Object(g.jsx)(m.c,{className:"bp3-dark",icon:"help",isOpen:e.show,canOutsideClickClose:!0,onClose:function(){return e.toggle(!1)},title:"About AleOJ",children:Object(g.jsxs)("div",{className:R.a.DIALOG_BODY,children:[Object(g.jsx)("p",{children:Object(g.jsx)("strong",{children:"What?"})}),Object(g.jsx)("p",{children:'An Free Online Judger that you could use to practice "data structures and algorithms".'}),Object(g.jsx)("p",{children:Object(g.jsx)("strong",{children:"Why?"})}),Object(g.jsx)("p",{children:"Simple, fast and highly customizable, yet another hobby project."}),Object(g.jsx)("p",{children:Object(g.jsx)("strong",{children:"How?"})}),Object(g.jsxs)("p",{children:["This project is built from scratch by ",Object(g.jsx)("a",{href:"http://liang.fi",target:"_blank",rel:"noreferrer",children:"liang.fi"}),'. The frontend is written in "React" while the "Judger core" and "backend" is written in Go. Avaiable docker image for the ',Object(g.jsx)("a",{href:"https://hub.docker.com/repository/docker/liangular/aleoj",target:"_blank",rel:"noreferrer",children:"Judger Core"}),"."]})]})})},G=n(46);var B=function(e){return Object(g.jsxs)(m.f,{className:"bp3-dark aleoj-navbar",children:[Object(g.jsx)(m.f.Group,{align:G.a.LEFT,children:Object(g.jsx)(m.f.Heading,{className:"bp3-monospace-text",children:"ALEOJ"})}),Object(g.jsxs)(m.f.Group,{align:G.a.RIGHT,children:[Object(g.jsx)(m.f.Divider,{}),Object(g.jsx)(m.a,{className:"bp3-minimal",icon:"help",onClick:function(){return e.toggleAbout(!0)}})]})]})};var F=function(e){var t=e.onProblemsClick,n=e.onSubmitClick,c=e.isSubmiting;return Object(g.jsxs)(m.f,{className:"bp3-dark aleoj-footer",children:[Object(g.jsx)(m.f.Group,{align:G.a.LEFT,children:Object(g.jsx)(m.a,{className:"bp3-button bp3-intent-success bp3-minimal",icon:"list-detail-view",text:"Problems",onClick:t})}),Object(g.jsxs)(m.f.Group,{align:G.a.RIGHT,children:[Object(g.jsx)(m.f.Divider,{}),Object(g.jsx)(m.a,{loading:c,disabled:c,className:"bp3-button bp3-intent-success bp3-minimal",icon:"saved",text:"Submit",onClick:n})]})]})},J="#include <iostream>\nusing namespace std;\n\nint main() {\n  return 0;\n}";var M=function(e){var t=Object(c.useState)("des"),n=Object(O.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(!1),i=Object(O.a)(a,2),o=i[0],l=i[1],j=Object(c.useState)(!1),b=Object(O.a)(j,2),u=b[0],f=b[1],k=Object(c.useState)(!1),C=Object(O.a)(k,2),N=C[0],S=C[1],E=Object(c.useState)({}),T=Object(O.a)(E,2),R=T[0],G=T[1],M=Object(c.useState)(J),P=Object(O.a)(M,2),W=P[0],_=P[1],z=Object(d.g)().id||27,H=function(){var e=Object(p.a)(h.a.mark((function e(){var t,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,t={problem_id:z,language:"c++",author:"guest",code:W},e.next=5,y.a.post("".concat(w,"/solutions"),t);case 5:n=e.sent,G(n.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),c=e.t0.response.data.error,G({status:"ERR",error:c});case 13:return e.prev=13,r("sub"),S(!1),e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[1,9,13,17]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"aleoj-container",children:[Object(g.jsx)(D,{toggle:f,show:u}),Object(g.jsx)(B,{toggleAbout:f}),Object(g.jsxs)(x.a,{className:"split aleoj-main",gutterSize:5,minSize:400,children:[Object(g.jsx)("div",{className:"aleoj-preview",children:Object(g.jsxs)(m.i,{renderActiveTabPanelOnly:!0,animate:!0,selectedTabId:s,onChange:function(e){return r(e)},children:[Object(g.jsx)(m.h,{id:"des",title:"Description",panel:Object(g.jsx)(A,{problemId:z}),panelClassName:"aleoj-preview-panel-description"}),Object(g.jsx)(m.h,{id:"sub",title:"Submissions",panel:Object(g.jsx)(I,{result:R,problemId:z}),panelClassName:"aleoj-preview-panel-submission"})]})}),Object(g.jsx)("div",{className:"aleoj-editor",children:Object(g.jsx)(v,{code:W,setCode:_})})]}),Object(g.jsx)(F,{onProblemsClick:function(){l(!0)},onSubmitClick:H,isSubmiting:N}),Object(g.jsx)(m.d,{className:"aleoj-problems-drawer bp3-dark",isOpen:o,position:"left",canOutsideClickClose:!0,onClose:function(){return l(!1)},children:Object(g.jsx)(L,{close:function(){return l(!1)},onChoose:function(e){parseInt(e)!==parseInt(z)&&(r("des"),_(J))}})})]})},P=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)(b.a,{children:Object(g.jsxs)(d.c,{children:[Object(g.jsx)(d.a,{exact:!0,path:"/",children:Object(g.jsx)(M,{})}),Object(g.jsx)(d.a,{path:"/problems/:id",children:Object(g.jsx)(M,{})}),Object(g.jsx)(d.a,{path:"/solutions/:id",children:Object(g.jsx)("h1",{children:"solutions"})})]})})}}]),n}(s.a.Component),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,347)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(g.jsx)(P,{}),document.getElementById("root")),W()}},[[343,1,2]]]);
//# sourceMappingURL=main.1390fe8e.chunk.js.map