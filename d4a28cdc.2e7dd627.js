(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{425:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),i=(n(0),n(489)),r={id:"typescript",title:"Type checking with TypeScript",sidebar_label:"Type checking with TypeScript"},c={id:"version-5.x/typescript",title:"Type checking with TypeScript",description:"React Navigation is written with TypeScript and exports type definitions for TypeScript projects.",source:"@site/versioned_docs/version-5.x/typescript.md",permalink:"/docs/typescript",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/typescript.md",version:"5.x",sidebar_label:"Type checking with TypeScript",sidebar:"version-5.x/docs",previous:{title:"Testing with Jest",permalink:"/docs/testing"},next:{title:"Redux integration",permalink:"/docs/redux-integration"}},p=[{value:"Type checking the navigator",id:"type-checking-the-navigator",children:[]},{value:"Type checking screens",id:"type-checking-screens",children:[]},{value:"Nesting navigators",id:"nesting-navigators",children:[]},{value:"Annotating <code>useNavigation</code>",id:"annotating-usenavigation",children:[]},{value:"Annotating <code>useRoute</code>",id:"annotating-useroute",children:[]},{value:"Annotating <code>options</code> and <code>screenOptions</code>",id:"annotating-options-and-screenoptions",children:[]},{value:"Annotating <code>ref</code> on <code>NavigationContainer</code>",id:"annotating-ref-on-navigationcontainer",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"React Navigation is written with TypeScript and exports type definitions for TypeScript projects."),Object(i.b)("h3",{id:"type-checking-the-navigator"},"Type checking the navigator"),Object(i.b)("p",null,"To type check our route name and params, the first thing we need to do is to create an object type with mappings for route name to the params of the route. For example, say we have a route called ",Object(i.b)("inlineCode",{parentName:"p"},"Profile")," in our root navigator which should have a param ",Object(i.b)("inlineCode",{parentName:"p"},"userId"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"type RootStackParamList = {\n  Profile: { userId: string };\n};\n")),Object(i.b)("p",null,"Similarly, we need to do the same for each route:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"type RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n")),Object(i.b)("p",null,"Specifying ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," means that the route doesn't have params. An union type with ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," (",Object(i.b)("inlineCode",{parentName:"p"},"SomeType | undefined"),") means that params are optional."),Object(i.b)("p",null,"After we have defined the mappings, we need to tell our navigator to use it. To do that, we can pass it as a generic to the ",Object(i.b)("inlineCode",{parentName:"p"},"createXNavigator")," functions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { createStackNavigator } from '@react-navigation/stack';\n\nconst RootStack = createStackNavigator<RootStackParamList>();\n")),Object(i.b)("p",null,"And then we can use it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<RootStack.Navigator initialRouteName="Home">\n  <RootStack.Screen name="Home" component={Home} />\n  <RootStack.Screen\n    name="Profile"\n    component={Profile}\n    initialParams={{ userId: user.id }}\n  />\n  <RootStack.Screen name="Feed" component={Feed} />\n</RootStack.Navigator>\n')),Object(i.b)("p",null,"This will provide type checking and intelliSense for props of the ",Object(i.b)("inlineCode",{parentName:"p"},"Navigator")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Screen")," components."),Object(i.b)("h3",{id:"type-checking-screens"},"Type checking screens"),Object(i.b)("p",null,"To type check our screens, we need to annotate the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop and the ",Object(i.b)("inlineCode",{parentName:"p"},"route")," prop received by a screen."),Object(i.b)("p",null,"To annotate the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop, we need to import the corresponding type from the navigator. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"StackNavigationProp")," for ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/stack"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { StackNavigationProp } from '@react-navigation/stack';\n\ntype ProfileScreenNavigationProp = StackNavigationProp<\n  RootStackParamList,\n  'Profile'\n>;\n\ntype Props = {\n  navigation: ProfileScreenNavigationProp;\n};\n")),Object(i.b)("p",null,"The type for the navigation prop takes 2 generics, the param list object we defined earlier, and the name of the current route. This allows us to type check route names and params which you're navigating using ",Object(i.b)("inlineCode",{parentName:"p"},"navigate"),", ",Object(i.b)("inlineCode",{parentName:"p"},"push")," etc. The name of the current route is necessary to type check the params when you call ",Object(i.b)("inlineCode",{parentName:"p"},"setParams"),"."),Object(i.b)("p",null,"Similarly, you can import ",Object(i.b)("inlineCode",{parentName:"p"},"DrawerNavigationProp")," from ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),", ",Object(i.b)("inlineCode",{parentName:"p"},"BottomTabNavigationProp")," from ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs")," etc."),Object(i.b)("p",null,"To annotate the ",Object(i.b)("inlineCode",{parentName:"p"},"route")," prop, we need to use the ",Object(i.b)("inlineCode",{parentName:"p"},"RouteProp")," type from ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/native"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { RouteProp } from '@react-navigation/native';\n\ntype ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;\n\ntype Props = {\n  route: ProfileScreenRouteProp;\n};\n")),Object(i.b)("p",null,"This allows us to type check the route object, such as ",Object(i.b)("inlineCode",{parentName:"p"},"route.params"),"."),Object(i.b)("p",null,"To summarize:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { RouteProp } from '@react-navigation/native';\nimport { StackNavigationProp } from '@react-navigation/stack';\n\ntype RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n\ntype ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;\n\ntype ProfileScreenNavigationProp = StackNavigationProp<\n  RootStackParamList,\n  'Profile'\n>;\n\ntype Props = {\n  route: ProfileScreenRouteProp;\n  navigation: ProfileScreenNavigationProp;\n};\n")),Object(i.b)("p",null,"Alternatively, you can also import a generic type to define types for both the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," and ",Object(i.b)("inlineCode",{parentName:"p"},"route")," props from the corresponding navigator:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { StackScreenProps } from '@react-navigation/stack';\n\ntype RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n\ntype Props = StackScreenProps<RootStackParamList, 'Profile'>;\n")),Object(i.b)("p",null,"Similarly, you can import ",Object(i.b)("inlineCode",{parentName:"p"},"DrawerScreenProps")," from ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),", ",Object(i.b)("inlineCode",{parentName:"p"},"BottomTabScreenProps")," from ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs")," etc."),Object(i.b)("p",null,"Then you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"Props")," type to annotate your component."),Object(i.b)("p",null,"For function components:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"function ProfileScreen({ route, navigation }: Props) {\n  // ...\n}\n")),Object(i.b)("p",null,"For class components:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class ProfileScreen extends React.Component<Props> {\n  render() {\n    // ...\n  }\n}\n")),Object(i.b)("p",null,"We recommend creating a separate ",Object(i.b)("inlineCode",{parentName:"p"},"types.tsx")," file where you keep the types and import them in your component files instead of repeating them in each file."),Object(i.b)("h3",{id:"nesting-navigators"},"Nesting navigators"),Object(i.b)("p",null,"When we nest navigators, the navigation prop of the screen is a combination of multiple navigation props. For example, if we have a tab inside a stack, the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop will have both ",Object(i.b)("inlineCode",{parentName:"p"},"jumpTo")," (from the tab navigator) and ",Object(i.b)("inlineCode",{parentName:"p"},"push")," (from the stack navigator). To make it easier to combine types from multiple navigator, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"CompositeNavigationProp")," type:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CompositeNavigationProp } from '@react-navigation/native';\nimport { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';\nimport { StackNavigationProp } from '@react-navigation/stack';\n\ntype ProfileScreenNavigationProp = CompositeNavigationProp<\n  BottomTabNavigationProp<TabParamList, 'Profile'>,\n  StackNavigationProp<StackParamList>\n>;\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"CompositeNavigationProp")," type takes 2 parameters, first parameter is the primary navigation type (type for the navigator that owns this screen, in our case the tab navigator which contains the ",Object(i.b)("inlineCode",{parentName:"p"},"Profile")," screen) and second parameter is the secondary navigation type (type for a parent navigator). The primary navigation type should always have the screen's route name as it's second parameter."),Object(i.b)("p",null,"For multiple parent navigators, this secondary type should be nested:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type ProfileScreenNavigationProp = CompositeNavigationProp<\n  BottomTabNavigationProp<TabParamList, 'Profile'>,\n  CompositeNavigationProp<\n    StackNavigationProp<StackParamList>,\n    DrawerNavigationProp<DrawerParamList>\n  >\n>;\n")),Object(i.b)("h3",{id:"annotating-usenavigation"},"Annotating ",Object(i.b)("inlineCode",{parentName:"h3"},"useNavigation")),Object(i.b)("p",null,"To annotate the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop that we get from ",Object(i.b)("inlineCode",{parentName:"p"},"useNavigation"),", we can use a type parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const navigation = useNavigation<ProfileScreenNavigationProp>();\n")),Object(i.b)("p",null,"It's important to note that this isn't completely type-safe because the type parameter you use may not be correct and we cannot statically verify it."),Object(i.b)("h3",{id:"annotating-useroute"},"Annotating ",Object(i.b)("inlineCode",{parentName:"h3"},"useRoute")),Object(i.b)("p",null,"To annotate the ",Object(i.b)("inlineCode",{parentName:"p"},"route")," prop that we get from ",Object(i.b)("inlineCode",{parentName:"p"},"useRoute"),", we can use a type parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const route = useRoute<ProfileScreenRouteProp>();\n")),Object(i.b)("p",null,"It's important to note that this isn't completely type-safe, similar to ",Object(i.b)("inlineCode",{parentName:"p"},"useNavigation"),"."),Object(i.b)("h3",{id:"annotating-options-and-screenoptions"},"Annotating ",Object(i.b)("inlineCode",{parentName:"h3"},"options")," and ",Object(i.b)("inlineCode",{parentName:"h3"},"screenOptions")),Object(i.b)("p",null,"When you pass the ",Object(i.b)("inlineCode",{parentName:"p"},"options")," to a ",Object(i.b)("inlineCode",{parentName:"p"},"Screen")," or ",Object(i.b)("inlineCode",{parentName:"p"},"screenOptions")," prop to a ",Object(i.b)("inlineCode",{parentName:"p"},"Navigator")," component, they are already type-checked and you don't need to do anything special. However, sometimes you might want to extract the options to a separate object, and you might want to annotate it."),Object(i.b)("p",null,"To annotate the options, we need to import the corresponding type from the navigator. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"StackNavigationOptions")," for ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/stack"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { StackNavigationProp } from '@react-navigation/stack';\n\nconst options: StackNavigationOptions = {\n  headerShown: false,\n}\n")),Object(i.b)("p",null,"Similarly, you can import ",Object(i.b)("inlineCode",{parentName:"p"},"DrawerNavigationOptions")," from ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),", ",Object(i.b)("inlineCode",{parentName:"p"},"BottomTabNavigationOptions")," from ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/bottom-tabs")," etc."),Object(i.b)("h3",{id:"annotating-ref-on-navigationcontainer"},"Annotating ",Object(i.b)("inlineCode",{parentName:"h3"},"ref")," on ",Object(i.b)("inlineCode",{parentName:"h3"},"NavigationContainer")),Object(i.b)("p",null,"When adding a ",Object(i.b)("inlineCode",{parentName:"p"},"ref")," to ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationContainer"),", you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationContainerRef")," type to annotate it."),Object(i.b)("p",null,"Example when using ",Object(i.b)("inlineCode",{parentName:"p"},"React.useRef")," hook:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { NavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = React.useRef<NavigationContainerRef>(null)\n")),Object(i.b)("p",null,"Example when using ",Object(i.b)("inlineCode",{parentName:"p"},"React.createRef"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { NavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = React.createRef<NavigationContainerRef>()\n")))}l.isMDXComponent=!0},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,d=b["".concat(r,".").concat(u)]||b[u]||m[u]||i;return n?o.a.createElement(d,c({ref:t},s,{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);