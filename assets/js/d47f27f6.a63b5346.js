"use strict";(self.webpackChunkyacht_docs=self.webpackChunkyacht_docs||[]).push([[3285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),b=n,d=m["".concat(s,".").concat(b)]||m[b]||u[b]||l;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={title:"Template Variables",description:"Template Variable Documentation",hide_table_of_contents:!0,id:"Template_Variables"},o=void 0,i={unversionedId:"Templates/Template_Variables",id:"Templates/Template_Variables",title:"Template Variables",description:"Template Variable Documentation",source:"@site/docs/Templates/variables.md",sourceDirName:"Templates",slug:"/Templates/Template_Variables",permalink:"/docs/Templates/Template_Variables",draft:!1,editUrl:"https://github.com/SelfhostedPro/Yacht-Docs/edit/master/docs/Templates/variables.md",tags:[],version:"current",frontMatter:{title:"Template Variables",description:"Template Variable Documentation",hide_table_of_contents:!0,id:"Template_Variables"},sidebar:"documentation",previous:{title:"Templates Explained",permalink:"/docs/Templates/"},next:{title:"Dashboard",permalink:"/docs/Pages/Dashboard"}},s={},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Template Variables",src:r(4589).Z,width:"858",height:"489"})),(0,n.kt)("p",null,"Template variables are variables you can set in Server Settings > Template Variables. The Variables on the left (In the Variable Field) gets replaced by the replacement on the right. Currently this only is for Volumes but that will be expanded to environment variables shortly."),(0,n.kt)("p",null,"Typically you'll want to set these first thing when you start up Yacht so once you add a template you can deploy apps without needing to change anything."))}u.isMDXComponent=!0},4589:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Yacht-TemplateVariables-ca3465216ad13dbd593bab62b992b88e.png"}}]);