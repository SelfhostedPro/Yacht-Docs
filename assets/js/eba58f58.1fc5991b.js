"use strict";(self.webpackChunkyacht_docs=self.webpackChunkyacht_docs||[]).push([[9433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||s[h]||l;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const l={title:"Getting Started",description:"Getting started with Yacht",id:"Getting_Started"},r=void 0,i={unversionedId:"Installation/Getting_Started",id:"Installation/Getting_Started",title:"Getting Started",description:"Getting started with Yacht",source:"@site/docs/Installation/gettingstarted.md",sourceDirName:"Installation",slug:"/Installation/Getting_Started",permalink:"/docs/Installation/Getting_Started",draft:!1,editUrl:"https://github.com/SelfhostedPro/Yacht-Docs/edit/master/docs/Installation/gettingstarted.md",tags:[],version:"current",frontMatter:{title:"Getting Started",description:"Getting started with Yacht",id:"Getting_Started"},sidebar:"documentation",previous:{title:"Install Yacht",permalink:"/docs/Installation/Install"},next:{title:"MacOS",permalink:"/docs/Installation/Mac"}},c={},p=[{value:"Beginners Guide",id:"beginners-guide",level:2},{value:"Setting Up Yacht",id:"setting-up-yacht",level:2},{value:"Template Variables",id:"template-variables",level:2},{value:"Adding a Template",id:"adding-a-template",level:2},{value:"Deploying from a Template",id:"deploying-from-a-template",level:2}],d={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"beginners-guide"},"Beginners Guide"),(0,o.kt)("p",null,"This guide will take you through setting up Yacht, adding your first template, and deploying your first app."),(0,o.kt)("h2",{id:"setting-up-yacht"},"Setting Up Yacht"),(0,o.kt)("p",null,"Running Yacht is as simple as running the following two commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create yacht\ndocker run -d -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock -v yacht:/config --name yacht --restart unless-stopped selfhostedpro/yacht\n")),(0,o.kt)("p",null,"After that you can access Yacht on port 8000 on your server in a web browser."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"If you're using Yacht alongside portainer, you'll want to change the 8000 on the left of the ",(0,o.kt)("inlineCode",{parentName:"em"},":")," to 8001, then it will be available on that port on your host.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"If SELinux is enabled on the host, you'll need to pass the ",(0,o.kt)("inlineCode",{parentName:"em"},"--privileged")," flag to docker when deploying Yacht."))),(0,o.kt)("p",null,"Once you're at the login page you can login with the username ",(0,o.kt)("inlineCode",{parentName:"p"},"admin@yacht.local")," and the password ",(0,o.kt)("inlineCode",{parentName:"p"},"pass"),"."),(0,o.kt)("h2",{id:"template-variables"},"Template Variables"),(0,o.kt)("p",null,"We'll setup template variables so that if you're using a template built for Yacht, you'll be able to have all of your files mounted in the correct places."),(0,o.kt)("p",null,"Click on the Settings cog in the left sidebar and then click on Template Variables along the top."),(0,o.kt)("p",null,"Replace the paths on the right with where you want each variable to be mounted. (This will typically be in your file shares if you're using a NAS)."),(0,o.kt)("p",null,"Add any additional Variables you would like and when you're done, hit save at the bottom."),(0,o.kt)("h2",{id:"adding-a-template"},"Adding a Template"),(0,o.kt)("p",null,"To add a template, click on the Folder icon in the left sidebar and then on \"New Template\". If you don't have a template added yet it'll recommend you add the one that I maintain for Yacht. Once you've entered a name and URL you'll click submit."),(0,o.kt)("p",null,'Now that you\'re on the "View Templates" page you can click on the template you added to see all the apps included with your template.'),(0,o.kt)("p",null,'From the "View Templates" page you can also click on the 3 dots and from there you can update if there are any changes, view the template, or delete the template.'),(0,o.kt)("h2",{id:"deploying-from-a-template"},"Deploying from a Template"),(0,o.kt)("p",null,"Now that you have a template added let's deploy an application. Click on your template to view it. Then pick an app to deploy. You can click on view to see any details about the application."),(0,o.kt)("p",null,"Once you've got an app in mind click on deploy and you'll be taken to the deploy form. Everything should be filled out for you but double check that it all looks correct. Click on continue until you get to the last page and then click on Deploy."),(0,o.kt)("p",null,"Now you'll see your running app. You can click on it to view more detailed stats or click on the Arrow to the right of the name to perform an action with it."))}s.isMDXComponent=!0}}]);