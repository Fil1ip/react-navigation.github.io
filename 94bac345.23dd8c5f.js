(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return h}));var i=n(1),a=n(9),r=(n(0),n(489)),o={id:"pitch",title:"Pitch & anti-pitch",sidebar_label:"Pitch & anti-pitch"},s={id:"version-2.x/pitch",title:"Pitch & anti-pitch",description:'It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please [submit a pull request](https://github.com/react-navigation/website) if you believe we have omitted important information!',source:"@site/versioned_docs/version-2.x/pitch.md",permalink:"/docs/2.x/pitch",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/pitch.md",version:"2.x",sidebar_label:"Pitch & anti-pitch",sidebar:"version-2.x-docs",previous:{title:"More Resources",permalink:"/docs/2.x/more-resources"},next:{title:"Alternative libraries",permalink:"/docs/2.x/alternatives"}},c=[{value:"Pitch",id:"pitch",children:[]},{value:"Anti-pitch",id:"anti-pitch",children:[]}],u={rightToc:c};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please ',Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/react-navigation/website"}),"submit a pull request")," if you believe we have omitted important information!"),Object(r.b)("h2",{id:"pitch"},"Pitch"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Everything is written in JavaScript on top of React Native primitives ","\u2014"," for example, animations use the ",Object(r.b)("inlineCode",{parentName:"li"},"Animated")," API and its native driver option in order to run the animations on the main thread and produce smooth 60 fps transitions. Writing everything except the low-level primitives like animations and gestures in JavaScript has a lot of benefits:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Easy OTA updates"),Object(r.b)("li",{parentName:"ul"},"Debuggable"),Object(r.b)("li",{parentName:"ul"},"Customizable"))),Object(r.b)("li",{parentName:"ul"},"Most apps heavily customize navigation, to do this with an API that wraps native navigation you will need to write a lot of native code."),Object(r.b)("li",{parentName:"ul"},"It's easy to write your own navigators that integrate cleanly with standard navigators, or to fork the standard navigators and create your own version of them with the exact look and feel you want in your app.")),Object(r.b)("h2",{id:"anti-pitch"},"Anti-pitch"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The API is sometimes unintuitive and difficult to use, improvements may require breaking changes. We are working to make ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.quora.com/What-is-the-origin-of-the-phrase-make-the-easy-things-easy-and-the-hard-things-possible"}),'"easy things easy and hard things possible"')," and this may require us to change the API at times."),Object(r.b)("li",{parentName:"ul"},"React Navigation does not directly use the native navigation APIs on iOS and Android; rather, it re-creates some subset of those APIs. This is a conscious choice in order to make it possible for users to customize any part of the navigation experience (because it's implemented in JavaScript) and to be able to debug issues that they encounter without needing to learn Objective C / Swift / Java / Kotlin.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If you need the exact platform behavior you are better off using another library that wraps the platform APIs. Read more about these in ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/2.x/alternatives"}),"Alternatives")," and be sure to understand the tradeoffs that they make before digging in!"))),Object(r.b)("li",{parentName:"ul"},"Because much of the logic for React Navigation runs in JavaScript rather than in native, the usual concerns about blocking the JavaScript thread come into play.")))}h.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),h=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},l=function(e){var t=h(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=h(n),d=i,b=l["".concat(o,".").concat(d)]||l[d]||p[d]||r;return n?a.a.createElement(b,s({ref:t},u,{components:n})):a.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);