"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[311],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6403:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="Gating Content with Advancements",s={unversionedId:"patchouli-basics/advancement-locking",id:"patchouli-basics/advancement-locking",isDocsHomePage:!1,title:"Gating Content with Advancements",description:"Entries in your Patchouli books can be locked until certain Advancements are",source:"@site/docs/patchouli-basics/advancement-locking.md",sourceDirName:"patchouli-basics",slug:"/patchouli-basics/advancement-locking",permalink:"/patchouli/docs/patchouli-basics/advancement-locking",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/patchouli-basics/advancement-locking.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entry JSON Format",permalink:"/patchouli/docs/patchouli-basics/entry-json"},next:{title:"Category JSON Format",permalink:"/patchouli/docs/patchouli-basics/category-json"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gating-content-with-advancements"},"Gating Content with Advancements"),(0,o.kt)("p",null,"Entries in your Patchouli books can be locked until certain Advancements are\naccomplished. This page will give you a quick primer on how to accomplish this."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First things first, create your advancement. If you're a modder, make it as you usually\nwould (",(0,o.kt)("a",{parentName:"p",href:"https://minecraft.gamepedia.com/Advancements"},"Minecraft Wiki reference"),"), and\nplace it in /data/MODID/advancements. If you're a modpack maker, you'll need to create\nyour advancements using the ",(0,o.kt)("a",{parentName:"p",href:"https://minecraft.curseforge.com/projects/triumph"},"Triumph"),"\nmod.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Once your advancement is done, grab its ID (which would be in the namespace:path\nformat). For the sake of demonstration, we\'ll pretend the ID is "mymod:myadv".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Open the .json file for the entry you want, and fill in the "advancement" field with the ID: ',(0,o.kt)("inlineCode",{parentName:"p"},'"advancement": "mymod:myadv"'),". "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"/docs/patchouli-basics/entry-json"},"Entry JSON Format")," for more info."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open the book.json file for the book that contains the entry you just locked. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'If the the "advancement_namespaces" array isn\'t present yet, create it:\n',(0,o.kt)("inlineCode",{parentName:"li"},'"advancement_namespaces": []')),(0,o.kt)("li",{parentName:"ul"},'Add the namespace to the "advancement_namespaces" array: ',(0,o.kt)("inlineCode",{parentName:"li"},'"advancement_namespaces":\n[ "mymod" ]')),(0,o.kt)("li",{parentName:"ul"},"Adding the namespace here tells patchouli that it needs to keep track of\nadvancements in that namespace. You only have to do it once per namespace. If you\nhave multiple books that use the namespace, only one needs it, but it's good\npractice to have it in all of them."),(0,o.kt)("li",{parentName:"ul"},"As of Patchouli 1.15.2-1.2-28, this is no longer necessary, and any advancement may\nbe used to gate your content."),(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"/docs/patchouli-basics/book-json"},"Book JSON Format")," for more info."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You may also lock individual pages behind advancements. This is allowed but not exactly\nencouraged, as it can be confusing to players if you aren't conveying the information\nproperly."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'To lock a page, simply fill the "advancement" field next to the page\'s "type" field,\nthe same way you would for the entry itself.'),(0,o.kt)("li",{parentName:"ul"},'Locked pages do not display any "locked" indicator, they are simply completely\nhidden.'),(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"/docs/patchouli-basics/page-types"},"Default Page Types")," for more info."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some final pointers:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"All advancement locks can be disabled by the player with the config."),(0,o.kt)("li",{parentName:"ul"},"Entries show up locked unless there's at least one unlocked entry within them."),(0,o.kt)("li",{parentName:"ul"},'You can make invisible advancements by not including a "display" block in your\nadvancement .json, which can be useful if you want to make a lot of small locks but\ndon\'t want a horribly cluttered interface.')))))}m.isMDXComponent=!0}}]);