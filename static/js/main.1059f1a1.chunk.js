(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var a=c(5),n=c.n(a),s=c(6),b=c(7),i=c(2),d=(c(12),c(13),c(14),c(0)),l=function(t){var e=t.tab,c=t.selectedTab,a=t.onTabSelected,n=e.title,s=e.id,b=c===e;return Object(d.jsx)("li",{className:b&&"is-active","data-cy":"Tab",children:Object(d.jsx)("a",{onClick:function(){b||a(e)},href:"#".concat(s),"data-cy":"TabLink",children:n})})},o=function(t){var e=t.tabs,c=t.selectedTab,a=t.onTabSelected,n=e.id;return Object(d.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)(l,{tab:t,selectedTab:c,onTabSelected:a},n)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:c.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(b.a)(r),e=Object(i.useState)(t[0]),c=Object(s.a)(e,2),a=c[0],n=c[1];return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a.title)}),Object(d.jsx)(o,{tabs:t,selectedTab:a,onTabSelected:n})]})};n.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1059f1a1.chunk.js.map