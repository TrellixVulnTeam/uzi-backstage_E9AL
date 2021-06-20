(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{2781:function(e,t,a){"use strict";a.r(t),a.d(t,"EntityLinksCard",(function(){return y}));var n=a(3),l=a(12),c=a(39),r=a(18),o=a(61),i=a(35),s=a(2755),u=a(2819),m=a(2820),d=a(0),p=a.n(d),b=a(2905),h=a.n(b);const g=Object(c.a)(e=>({code:{borderRadius:6,margin:e.spacing(2)+"px 0px",background:"dark"===e.palette.type?"#444":"#fff"}})),f=()=>{const e=g();return p.a.createElement(p.a.Fragment,null,p.a.createElement(r.a,{variant:"body1"},"No links defined for this entity. You can add links to your entity YAML as shown in the highlighted example below:"),p.a.createElement("div",{className:e.code},p.a.createElement(n.f,{text:"metadata:\n  name: example\n  links:\n    - url: https://dashboard.example.com\n      title: My Dashboard\n      icon: dashboard",language:"yaml",showLineNumbers:!0,highlightedNumbers:[3,4,5,6],customStyle:{background:"inherit",fontSize:"115%"}})),p.a.createElement(o.a,{variant:"contained",color:"primary",target:"_blank",href:"https://backstage.io/docs/features/software-catalog/descriptor-format#links-optional"},"Read more"))},k=Object(c.a)({svgIcon:{display:"inline-block","& svg":{display:"inline-block",fontSize:"inherit",verticalAlign:"baseline"}}}),v=({href:e,text:t,Icon:a})=>{const l=k();return p.a.createElement(i.a,{container:!0,direction:"row",spacing:1},p.a.createElement(i.a,{item:!0},p.a.createElement(r.a,{component:"div",className:l.svgIcon},a?p.a.createElement(a,null):p.a.createElement(h.a,null))),p.a.createElement(i.a,{item:!0},p.a.createElement(n.w,{to:e,target:"_blank",rel:"noopener"},t||e)))},E={xs:1,sm:1,md:1,lg:2,xl:3};const x=({items:e,cols:t})=>{const a=function(e){var t,a;const n=[Object(s.a)(e=>e.breakpoints.up("xl"))?"xl":null,Object(s.a)(e=>e.breakpoints.up("lg"))?"lg":null,Object(s.a)(e=>e.breakpoints.up("md"))?"md":null,Object(s.a)(e=>e.breakpoints.up("sm"))?"sm":null,Object(s.a)(e=>e.breakpoints.up("xs"))?"xs":null];let l=1;if("number"==typeof e)l=e;else{const c=null!=(t=n.find(e=>null!==e))?t:"xs";l=null!=(a=null==e?void 0:e[c])?a:E[c]}return l}(t);return p.a.createElement(u.a,{cellHeight:"auto",cols:a},e.map(({text:e,href:t,Icon:a},n)=>p.a.createElement(m.a,{key:n},p.a.createElement(v,{href:t,text:null!=e?e:t,Icon:a}))))},y=({cols:e,variant:t})=>{var a;const{entity:c}=Object(l.n)(),r=Object(n.Bb)(),o=null==(a=null==c?void 0:c.metadata)?void 0:a.links;return p.a.createElement(n.s,{title:"Links",variant:t},o&&0!==o.length?p.a.createElement(x,{cols:e,items:o.map(({url:e,title:t,icon:a})=>{return{text:null!=t?t:e,href:e,Icon:(n=a,n&&null!=(l=r.getSystemIcon(n))?l:h.a)};var n,l})}):p.a.createElement(f,null))}},2905:function(e,t,a){"use strict";var n=a(17),l=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=l(a(0)),r=(0,n(a(26)).default)(c.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}),"Language");t.default=r}}]);
//# sourceMappingURL=46.c43271d2.chunk.js.map