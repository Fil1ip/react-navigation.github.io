(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{349:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(1),i=t(9),a=(t(0),t(489)),r={id:"function-after-focusing-screen",title:"Call a function when focused screen changes",sidebar_label:"Call a function when focused screen changes"},c={id:"version-3.x/function-after-focusing-screen",title:"Call a function when focused screen changes",description:"In this guide we will call an action on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app.",source:"@site/versioned_docs/version-3.x/function-after-focusing-screen.md",permalink:"/docs/3.x/function-after-focusing-screen",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-3.x/function-after-focusing-screen.md",version:"3.x",sidebar_label:"Call a function when focused screen changes",sidebar:"version-3.x-docs",previous:{title:"React Navigation on the Web",permalink:"/docs/3.x/web-support"},next:{title:"Navigation prop reference",permalink:"/docs/3.x/navigation-prop"}},s=[{value:"Triggering an action with the <code>withNavigationFocus</code> higher order component",id:"triggering-an-action-with-the-withnavigationfocus-higher-order-component",children:[{value:"Example",id:"example",children:[]}]},{value:"Triggering an action with a <code>&#39;didFocus&#39;</code> event listener",id:"triggering-an-action-with-a-didfocus-event-listener",children:[{value:"Example",id:"example-1",children:[]}]}],l={rightToc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this guide we will call an action on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app."),Object(a.b)("p",null,"There are two approaches to calling an action on screen focusing:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Using the ",Object(a.b)("inlineCode",{parentName:"li"},"withNavigationFocus")," higher order component provided by react-navigation."),Object(a.b)("li",{parentName:"ol"},"Listening to the ",Object(a.b)("inlineCode",{parentName:"li"},"'didFocus'")," event with an event listener.")),Object(a.b)("h2",{id:"triggering-an-action-with-the-withnavigationfocus-higher-order-component"},"Triggering an action with the ",Object(a.b)("inlineCode",{parentName:"h2"},"withNavigationFocus")," higher order component"),Object(a.b)("p",null,"react-navigation provides a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/higher-order-components.html"}),"higher order component")," that passes an ",Object(a.b)("inlineCode",{parentName:"p"},"isFocused")," prop to our component, along with the ",Object(a.b)("inlineCode",{parentName:"p"},"navigation")," object we'd normally get with ",Object(a.b)("inlineCode",{parentName:"p"},"withNavigation"),"."),Object(a.b)("p",null,"When the ",Object(a.b)("inlineCode",{parentName:"p"},"isFocused")," prop is passed to our component, it will pass ",Object(a.b)("inlineCode",{parentName:"p"},"true")," when the screen is focused and ",Object(a.b)("inlineCode",{parentName:"p"},"false")," when our component is no longer focused. This enables us to call actions on a user entering or leaving a screen. This is particularly handy when we are trying to stop something when the page is unfocused, like stopping a video or audio file from playing, or stopping the tracking of a user's location."),Object(a.b)("p",null,"Since ",Object(a.b)("inlineCode",{parentName:"p"},"withNavigationFocus")," passes a prop on every focus change, it will cause our component to re-render when we focus and unfocus a screen. Using this higher order component may introduce unnecessary component re-renders as a screen comes in and out of focus. This could cause issues depending on the type of action we're calling on focusing."),Object(a.b)("p",null,"For instance, if we are attempting to make an API call on focus to fetch some data, we only want to fetch data when the component is focused and not when the component becomes unfocused. To prevent extra component re-renders, we could write some logic in ",Object(a.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," to control when the component renders itself, however we may be better off using the event listener method detailed below. The event listener will only call an action and render the component when the screen is focused and will do nothing when a screen becomes unfocused."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'import React, { Component } from "react";\nimport { View } from "react-native";\nimport { withNavigationFocus } from "react-navigation";\n\nclass TabScreen extends Component {\n  componentDidUpdate(prevProps) {\n    if (prevProps.isFocused !== this.props.isFocused) {\n      // Use the `this.props.isFocused` boolean\n      // Call any action\n    }\n  }\n\n  render() {\n    return <View />;\n  }\n}\n\n// withNavigationFocus returns a component that wraps TabScreen and passes\n// in the navigation prop\nexport default withNavigationFocus(TabScreen);\n')),Object(a.b)("p",null,"This example is also documented in the ",Object(a.b)("a",{href:"/docs/en/with-navigation-focus.html"},Object(a.b)("inlineCode",{parentName:"p"},"withNavigationFocus")," API documentation"),"."),Object(a.b)("h2",{id:"triggering-an-action-with-a-didfocus-event-listener"},"Triggering an action with a ",Object(a.b)("inlineCode",{parentName:"h2"},"'didFocus'")," event listener"),Object(a.b)("p",null,"We can also listen to the ",Object(a.b)("inlineCode",{parentName:"p"},"'didFocus'")," event with an event listener. After setting up an event listener, we must also stop listening to the event when the screen is unmounted."),Object(a.b)("p",null,"With this approach, we will only be able to call an action when the screen focuses. This is great for fetching data with an API call when a screen becomes focused, or any other action that needs to happen once the screen comes into view."),Object(a.b)("h3",{id:"example-1"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'import React, { Component } from "react";\nimport { View } from "react-native";\nimport { withNavigation } from "react-navigation";\n\nclass TabScreen extends Component {\n  componentDidMount() {\n    const { navigation } = this.props;\n    this.focusListener = navigation.addListener("didFocus", () => {\n      // The screen is focused\n      // Call any action\n    });\n  }\n\n  componentWillUnmount() {\n    // Remove the event listener\n    this.focusListener.remove();\n  }\n\n  render() {\n    return <View />;\n  }\n}\n\nexport default withNavigation(TabScreen);\n')))}p.isMDXComponent=!0},489:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},h=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,b=u["".concat(r,".").concat(h)]||u[h]||d[h]||a;return t?i.a.createElement(b,c({ref:n},l,{components:t})):i.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=h;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<a;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);