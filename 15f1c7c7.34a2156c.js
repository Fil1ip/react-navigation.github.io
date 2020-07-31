(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(9),o=(n(0),n(489)),r={id:"stack-actions",title:"StackActions reference",sidebar_label:"StackActions"},c={id:"version-3.x/stack-actions",title:"StackActions reference",description:"`StackActions` is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in [`NavigationActions`](navigation-actions.md).",source:"@site/versioned_docs/version-3.x/stack-actions.md",permalink:"/docs/3.x/stack-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-3.x/stack-actions.md",version:"3.x",sidebar_label:"StackActions",sidebar:"version-3.x-docs",previous:{title:"NavigationActions reference",permalink:"/docs/3.x/navigation-actions"},next:{title:"SwitchActions reference",permalink:"/docs/3.x/switch-actions"}},p=[{value:"reset",id:"reset",children:[]},{value:"replace",id:"replace",children:[]},{value:"push",id:"push",children:[]},{value:"pop",id:"pop",children:[]},{value:"popToTop",id:"poptotop",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"StackActions")," is an object containing methods for generating actions specific to stack-based navigators. Its methods expand upon the actions available in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.x/navigation-actions"}),Object(o.b)("inlineCode",{parentName:"a"},"NavigationActions")),"."),Object(o.b)("p",null,"The following actions are supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#reset"}),"Reset")," - Replace current state with a new state"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#replace"}),"Replace")," - Replace a route at a given key with another route"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#push"}),"Push")," - Add a route on the top of the stack, and navigate forward to it"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#pop"}),"Pop")," - Navigate back to previous routes"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#poptotop"}),"PopToTop")," - Navigate to the top route of the stack, dismissing all other routes")),Object(o.b)("h3",{id:"reset"},"reset"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"reset")," action wipes the whole navigation state and replaces it with the result of several actions."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"index")," - ",Object(o.b)("em",{parentName:"li"},"number")," - required - Index of the active route on ",Object(o.b)("inlineCode",{parentName:"li"},"routes")," array in navigation ",Object(o.b)("inlineCode",{parentName:"li"},"state"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"actions")," - ",Object(o.b)("em",{parentName:"li"},"array")," - required - Array of Navigation Actions that will replace the navigation state."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," - ",Object(o.b)("em",{parentName:"li"},"string or null")," - optional - If set, the navigator with the given key will reset. If null, the root navigator will reset.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { StackActions, NavigationActions } from 'react-navigation';\n\nconst resetAction = StackActions.reset({\n  index: 0,\n  actions: [NavigationActions.navigate({ routeName: 'Profile' })],\n});\nthis.props.navigation.dispatch(resetAction);\n")),Object(o.b)("h4",{id:"how-to-use-the-index-parameter"},"How to use the ",Object(o.b)("inlineCode",{parentName:"h4"},"index")," parameter"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"index")," param is used to specify the current active route."),Object(o.b)("p",null,"eg: given a basic stack navigation with two routes ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Settings"),".\nTo reset the state to a point where the active screen was ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," but have it stacked on top of a ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," screen, you would do the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { StackActions, NavigationActions } from 'react-navigation';\n\nconst resetAction = StackActions.reset({\n  index: 1,\n  actions: [\n    NavigationActions.navigate({ routeName: 'Profile' }),\n    NavigationActions.navigate({ routeName: 'Settings' }),\n  ],\n});\nthis.props.navigation.dispatch(resetAction);\n")),Object(o.b)("h3",{id:"replace"},"replace"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"replace")," action replaces the route at the given key with another route."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," - ",Object(o.b)("em",{parentName:"li"},"string")," - Key of the route to replace. If this is not defined, the most recent route will be replaced."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"newKey")," - ",Object(o.b)("em",{parentName:"li"},"string")," - Key to use for the replacement route. Generated automatically if not provided."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"routeName")," - ",Object(o.b)("em",{parentName:"li"},"string")," - ",Object(o.b)("inlineCode",{parentName:"li"},"routeName")," to use for replacement route."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params")," - ",Object(o.b)("em",{parentName:"li"},"object")," - Parameters to pass in to the replacement route."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"action")," - ",Object(o.b)("em",{parentName:"li"},"object")," - Optional sub-action."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"immediate"),Object(o.b)("em",{parentName:"li"}," - ",Object(o.b)("em",{parentName:"em"},"boolean")," - "),"Currently has no effect, this is a placeholder for when stack navigator supports animated replace (it currently does not).")),Object(o.b)("h3",{id:"push"},"push"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"push")," action adds a route on top of the stack and navigates forward to it. This differs from ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," in that ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," will pop back to earlier in the stack if a route of the given name is already present there. ",Object(o.b)("inlineCode",{parentName:"p"},"push")," will always add on top, so a route can be present multiple times."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"routeName")," - ",Object(o.b)("em",{parentName:"li"},"string")," - ",Object(o.b)("inlineCode",{parentName:"li"},"routeName")," to push onto the stack."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params")," - ",Object(o.b)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",Object(o.b)("inlineCode",{parentName:"li"},"this.props.navigation.state.params"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"action")," - (advanced) The sub-action to run in the child router, if the screen is a navigator.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { StackActions } from 'react-navigation';\n\nconst pushAction = StackActions.push({\n  routeName: 'Profile',\n  params: {\n    myUserId: 9,\n  },\n});\n\nthis.props.navigation.dispatch(pushAction);\n")),Object(o.b)("h3",{id:"pop"},"pop"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"pop")," action takes you back to a previous screen in the stack. The ",Object(o.b)("inlineCode",{parentName:"p"},"n")," param allows you to specify how many screens to pop back by."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"n")," - ",Object(o.b)("em",{parentName:"li"},"number")," - The number of screens to pop back by.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { StackActions } from 'react-navigation';\n\nconst popAction = StackActions.pop({\n  n: 1,\n});\n\nthis.props.navigation.dispatch(popAction);\n")),Object(o.b)("h3",{id:"poptotop"},"popToTop"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"popToTop")," action takes you back to the first screen in the stack, dismissing all the others. It's functionally identical to ",Object(o.b)("inlineCode",{parentName:"p"},"StackActions.pop({n: currentIndex})"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { StackActions } from 'react-navigation';\n\nthis.props.navigation.dispatch(StackActions.popToTop());\n")))}s.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||o;return n?i.a.createElement(d,c({ref:t},l,{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);