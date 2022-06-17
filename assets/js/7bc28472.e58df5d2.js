"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[669],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||r;return n?a.createElement(d,i(i({ref:e},u),{},{components:n})):a.createElement(d,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5287:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="Defining Multiblocks",c={unversionedId:"patchouli-basics/multiblocks",id:"patchouli-basics/multiblocks",isDocsHomePage:!1,title:"Defining Multiblocks",description:"Patchouli comes with a system that allows you to define multiblocks and then visualize",source:"@site/docs/patchouli-basics/multiblocks.md",sourceDirName:"patchouli-basics",slug:"/patchouli-basics/multiblocks",permalink:"/Patchouli/docs/patchouli-basics/multiblocks",editUrl:"https://github.com/VazkiiMods/Patchouli/edit/1.18.x/web/docs/patchouli-basics/multiblocks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Giving Books to New Players",permalink:"/Patchouli/docs/patchouli-basics/giving-new"},next:{title:"Default Page Types",permalink:"/Patchouli/docs/patchouli-basics/page-types"}},u=[{value:"Multiblock Format",id:"multiblock-format",children:[{value:"The Mapping",id:"the-mapping",children:[]},{value:"The Pattern",id:"the-pattern",children:[]},{value:"Extra Notes on the Pattern",id:"extra-notes-on-the-pattern",children:[]},{value:"Some Extra Things",id:"some-extra-things",children:[]},{value:"Adding Everything Together",id:"adding-everything-together",children:[]}]}],p={toc:u};function h(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"defining-multiblocks"},"Defining Multiblocks"),(0,r.kt)("p",null,"Patchouli comes with a system that allows you to define multiblocks and then visualize\nthem in the world. These multiblocks can be either defined in code by modders (using the\nAPI), or defined in JSON inline with the entry data."),(0,r.kt)("p",null,"This page is written like a tutorial to get you to understand how multiblock objects work,\nas writing the object structure formally wouldn't properly convey how to construct it."),(0,r.kt)("p",null,"The page focuses on creating multiblocks using JSON, but the fundamentals also apply to\ndoing so using code. Making multiblocks with code allows you to create state matchers\nusing arbitrary predicates and using the multiblock for server-side validation and\nplacement (if you make Patchouli a required dependency). You can look into the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Vazkii/Patchouli/tree/master/src/main/java/vazkii/patchouli/api"},"Patchouli\nAPI"),"\nfor how to do this, or see an example of it being done\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Vazkii/Patchouli/blob/master/Xplat/src/main/java/vazkii/patchouli/common/multiblock/MultiblockRegistry.java"},"here"),"."),(0,r.kt)("h2",{id:"multiblock-format"},"Multiblock Format"),(0,r.kt)("p",null,"A Multiblock is composed of a 2 dimensional String Array (the pattern), and a mapping of characters present in the pattern to state matchers."),(0,r.kt)("p",null,"As a demonstration of how to create a multiblock, we'll be using the following... thing as a demonstration:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/M6Fw6nP.png",alt:null})),(0,r.kt)("p",null,"A multiblock can be defined using a JSON object. Let's begin with an empty one and add in as we go."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"multiblock": {\n\n}\n')),(0,r.kt)("h3",{id:"the-mapping"},"The Mapping"),(0,r.kt)("p",null,"We'll begin by discussing which types of blocks we have here. Looking at the pic we have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gold Blocks"),(0,r.kt)("li",{parentName:"ul"},"Red Terracotta"),(0,r.kt)("li",{parentName:"ul"},"Magenta Wool (which for this demo we want to allow it to be any color)"),(0,r.kt)("li",{parentName:"ul"},"Note Block (tuned to note 4)"),(0,r.kt)("li",{parentName:"ul"},"Air"),(0,r.kt)("li",{parentName:"ul"},"A few corners we can't see, but let's say they're allowed to be any block")),(0,r.kt)("p",null,"Once we know what types of blocks this structure uses, we assign a letter to each:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"G"),": Gold Blocks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"B"),": Note Block (note 4)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R"),": Red Terracotta"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"W"),": Any Wool")),(0,r.kt)("p",null,"Patchouli already provides built in characters for Air and (Any Block), which are\nrespectively a space, and an underscore, so we don't have to account for those."),(0,r.kt)("p",null,"Now, we need to convert these to data the game can understand. Patchouli uses the same\nvanilla logic to parse blockstate predicate as, for example, the\n",(0,r.kt)("inlineCode",{parentName:"p"},"/execute if block ~ ~ ~ <PREDICATE>"),"\ncommand. This means you can use block ID's, tags, as well as specify\nblockstate properties you want to constraint. Therefore, we have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"G"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"minecraft:gold_block")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"B"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"minecraft:note_block[note=4]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"minecraft:red_terracotta")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"W"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"#minecraft:wool"))),(0,r.kt)("p",null,'Looks good. Let\'s put these mappings into our json using a "mapping" block:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"multiblock": {\n    "mapping": {\n         "G": "minecraft:gold_block",\n         "B": "minecraft:note_block[note=4]",\n         "R": "minecraft:red_terracotta",\n         "W": "#minecraft:wool"\n     }\n}\n')),(0,r.kt)("h3",{id:"the-pattern"},"The Pattern"),(0,r.kt)("p",null,"Now that we told the multiblock what blocks to use, we need to tell it the shape. To do\nthis, we go from the top to bottom, layer by layer, and translate each layer to a string\narray."),(0,r.kt)("p",null,"Terse explanation of the format: the pattern attribute is an array of array of strings. It\nis indexed in the following order: y (top to bottom), x (west to east), then z (north to\nsouth)."),(0,r.kt)("p",null,"Full explanation:\nLet's start with the first layer with the plus made of terracotta. It would look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n" GRG ",\n"GGRGG",\n"RRRRR",\n"GGRGG",\n" GRG "\n]\n')),(0,r.kt)("p",null,"Recall that G is gold, R is red terracotta, and empty spaces are air. We can compress this\na little so it doesn't look as bulky now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[ " GRG ", "GGRGG", "RRRRR", "GGRGG", " GRG " ]\n')),(0,r.kt)("p",null,"It doesn't look as readable now that we aren't projecting it as a bird's eye view, but\ndon't worry, it'll look good in a second. With that said, we put it into the \"pattern\"\narray, and follow through, adding in all the following layers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"pattern": [\n    [ " GRG ", "GGRGG", "RRRRR", "GGRGG", " GRG " ],\n    [\n        "GG GG",\n        "G   G",\n        "     ",\n        "G   G",\n        "GG GG"\n    ],\n    [\n        "G   G",\n        "     ",\n        "     ",\n        "     ",\n        "G   G"\n    ], \n    [\n        "G   G",\n        "     ",\n        "     ",\n        "     ",\n        "G   G"\n    ], \n    [\n         "_WWW_",\n         "WWWWW",\n         "WWWWW",\n         "WWWWW",\n         "_WWW_"\n    ]\n]\n')),(0,r.kt)("p",null,"...and compressing them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"pattern": [\n    [ " GRG ", "GGRGG", "RRRRR", "GGRGG", " GRG " ], \n    [ "GG GG", "G   G", "     ", "G   G", "GG GG" ],\n    [ "G   G", "     ", "     ", "     ", "G   G" ], \n    [ "G   G", "     ", "     ", "     ", "G   G" ], \n    [ "_WWW_", "WWWWW", "WWWWW", "WWWWW", "_WWW_" ]\n]\n')),(0,r.kt)("p",null,"Look at that! We now have a side view of the structure. Just one last thing left to do. We need to tell the game where the center of the multiblock is. It might be intuitive that it's in the geometrical center, but in some cases you may have multiblocks that extend outwards, and the center doesn't exactly fall there. "),(0,r.kt)("p",null,'We specify the center by replacing one of the characters in the pattern with a zero. By default the zero is mapped to Air, but if you need to map it to something else, you can always just put a "0" in the mappings with whatever you want it to be.'),(0,r.kt)("p",null,'The "zero" of the multiblock is placed at the player\'s world cursor. On less fancy words, if you were to place a block, where it would end up is where the zero ends up. '),(0,r.kt)("p",null,"Knowing that, the ideal right place for the zero of this structure would be in the geometrical center, but one block down so that it's right above the W:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"pattern": [\n    [ " GRG ", "GGRGG", "RRRRR", "GGRGG", " GRG " ], \n    [ "GG GG", "G   G", "     ", "G   G", "GG GG" ],\n    [ "G   G", "     ", "     ", "     ", "G   G" ], \n    [ "G   G", "     ", "  0  ", "     ", "G   G" ], \n    [ "_WWW_", "WWWWW", "WWWWW", "WWWWW", "_WWW_" ]\n]\n')),(0,r.kt)("h3",{id:"extra-notes-on-the-pattern"},"Extra Notes on the Pattern"),(0,r.kt)("p",null,"Observe carefully that the pattern directions conform to programming conventions, not to the cardinal directions.\nFor example, to lay out stairs with their ",(0,r.kt)("inlineCode",{parentName:"p"},"facing")," property set to the appropriate side of the multiblock, you would have to do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"pattern": [\n  [\n    " W ",\n    "N S",\n    " E "\n  ]\n],\n"mapping": {\n  "W": "minecraft:oak_stairs[facing=west]",\n  "N": "minecraft:oak_stairs[facing=north]",\n  "S": "minecraft:oak_stairs[facing=south]",\n  "E": "minecraft:oak_stairs[facing=east]",\n}\n')),(0,r.kt)("p",null,"This is due to the fact that the inner array is indexed by x (later entries being further east), then the strings are indexed by z (later characters being further south)."),(0,r.kt)("h3",{id:"some-extra-things"},"Some Extra Things"),(0,r.kt)("p",null,"There's a few more values a multiblock can have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"symmetrical")," (boolean)")),(0,r.kt)("p",null,"Defaults to false. Set this to true if the multiblock is symmetrical around the vertical axis of its center (if rotating it around in 90\xba increments doesn't change its look in the world). It's not obligatory, but if you do it, Patchouli won't check all rotations so it's better for performance."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset")," (int Array, 3 values)")),(0,r.kt)("p",null,"An int array of 3 values (","[X, Y, Z]",") to offset the multiblock relative to its center."),(0,r.kt)("p",null,"For our case, we'll be setting symmetrical to true, and not specifying offset, as we already put the 0 in the right place."),(0,r.kt)("h3",{id:"adding-everything-together"},"Adding Everything Together"),(0,r.kt)("p",null,"Let's add our pattern, mapping, and other values together, and we get:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"multiblock": {\n    "pattern": [\n        [ " GRG ", "GGRGG", "RRRRR", "GGRGG", " GRG " ], \n        [ "GG GG", "G   G", "     ", "G   G", "GG GG" ],\n        [ "G   G", "     ", "     ", "     ", "G   G" ], \n        [ "G   G", "     ", "  0  ", "     ", "G   G" ], \n        [ "_WWW_", "WWWWW", "WWWWW", "WWWWW", "_WWW_" ]\n    ],\n    "mapping": {\n        "G": "minecraft:gold_block",\n        "W": "minecraft:wool",\n        "R": "minecraft:stained_hardened_clay[color=red]"\n    },\n    "symmetrical": true\n}\n')),(0,r.kt)("p",null,'Which, if we transplant onto a "multiblock" page (see ',(0,r.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/page-types#multiblock-pages"},"Default Page Types"),"), and click Visualize, will show up just fine ingame!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/1lfoaA1.png",alt:null})))}h.isMDXComponent=!0}}]);