/*! For license information please see cafedc52.8e39c4c2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{415:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(1),i=a(9),r=(a(0),a(489)),o=a(491),b=a(492),l={id:"material-top-tab-navigator",title:"createMaterialTopTabNavigator",sidebar_label:"createMaterialTopTabNavigator"},c={id:"version-5.x/material-top-tab-navigator",title:"createMaterialTopTabNavigator",description:"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately.",source:"@site/versioned_docs/version-5.x/material-top-tab-navigator.md",permalink:"/docs/material-top-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/material-top-tab-navigator.md",version:"5.x",sidebar_label:"createMaterialTopTabNavigator",sidebar:"version-5.x/docs",previous:{title:"createMaterialBottomTabNavigator",permalink:"/docs/material-bottom-tab-navigator"},next:{title:"useNavigation",permalink:"/docs/use-navigation"}},s=[{value:"API Definition",id:"api-definition",children:[{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]},{value:"Events",id:"events",children:[]},{value:"Helpers",id:"helpers",children:[]}]},{value:"Example",id:"example",children:[]}],p={rightToc:s};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately."),Object(r.b)("p",null,"This wraps ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-tab-view"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-tab-view")),"."),Object(r.b)("div",{style:{display:"flex",margin:"16px 0"}},Object(r.b)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},Object(r.b)("source",{src:"/assets/navigators/tabs/material-top-tabs.mov"}))),Object(r.b)("p",null,"To use this navigator, ensure that you have ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started"}),Object(r.b)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/material-top-tabs"}),Object(r.b)("inlineCode",{parentName:"a"},"@react-navigation/material-top-tabs")),":"),Object(r.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @react-navigation/material-top-tabs react-native-tab-view\n"))),Object(r.b)(b.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-navigation/material-top-tabs react-native-tab-view\n")))),Object(r.b)("h2",{id:"api-definition"},"API Definition"),Object(r.b)("p",null,"To use this tab navigator, import it from ",Object(r.b)("inlineCode",{parentName:"p"},"@react-navigation/material-top-tabs"),":"),Object(r.b)("samp",{id:"material-top-tab-based-navigation-minimal"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { createMaterialTopTabNavigator } from \'@react-navigation/material-top-tabs\';\n\nconst Tab = createMaterialTopTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/tab-based-navigation.html"}),"Tab Navigation"))),Object(r.b)("h3",{id:"props"},"Props"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),Object(r.b)("h4",{id:"initialroutename"},Object(r.b)("inlineCode",{parentName:"h4"},"initialRouteName")),Object(r.b)("p",null,"The name of the route to render on first load of the navigator."),Object(r.b)("h4",{id:"screenoptions"},Object(r.b)("inlineCode",{parentName:"h4"},"screenOptions")),Object(r.b)("p",null,"Default options to use for the screens in the navigator."),Object(r.b)("h4",{id:"backbehavior"},Object(r.b)("inlineCode",{parentName:"h4"},"backBehavior")),Object(r.b)("p",null,"Behavior of back button handling."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"order")," to return to previous tab (in the order they are shown in the tab bar)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"history")," to return to last visited tab"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"none")," to not handle back button")),Object(r.b)("h4",{id:"tabbarposition"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarPosition")),Object(r.b)("p",null,"Position of the tab bar in the tab view. Possible values are ",Object(r.b)("inlineCode",{parentName:"p"},"'top'")," and ",Object(r.b)("inlineCode",{parentName:"p"},"'bottom'"),". Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"'top'"),"."),Object(r.b)("h4",{id:"lazy"},Object(r.b)("inlineCode",{parentName:"h4"},"lazy")),Object(r.b)("p",null,"Boolean indicating whether to lazily render the scenes. When this is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", screens will be rendered as they come into the viewport. By default all scenes are rendered to provide a smoother swipe experience. But you might want to defer the rendering of screens out of the viewport until the user sees them. To enable lazy rendering, set ",Object(r.b)("inlineCode",{parentName:"p"},"lazy")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("p",null,"When you enable ",Object(r.b)("inlineCode",{parentName:"p"},"lazy"),", the lazy loaded screens will usually take some time to render when they come into the viewport. You can use the ",Object(r.b)("inlineCode",{parentName:"p"},"lazyPlaceholder")," prop to customize what the user sees during this short period."),Object(r.b)("h4",{id:"lazypreloaddistance"},Object(r.b)("inlineCode",{parentName:"h4"},"lazyPreloadDistance")),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"lazy")," is enabled, you can specify how many adjacent routes should be preloaded in advance with this prop. This value defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"0")," which means lazy pages are loaded as they come into the viewport."),Object(r.b)("h4",{id:"lazyplaceholder"},Object(r.b)("inlineCode",{parentName:"h4"},"lazyPlaceholder")),Object(r.b)("p",null,"Function that returns a React element to render for routes that haven't been rendered yet. Receives an object containing the route as the argument. The ",Object(r.b)("inlineCode",{parentName:"p"},"lazy")," prop also needs to be enabled."),Object(r.b)("p",null,"This view is usually only shown for a split second. Keep it lightweight."),Object(r.b)("p",null,"By default, this renders ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h4",{id:"removeclippedsubviews"},Object(r.b)("inlineCode",{parentName:"h4"},"removeClippedSubviews")),Object(r.b)("p",null,"Boolean indicating whether to remove invisible views (such as unfocused screens) from the native view hierarchy to improve memory usage. Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Don't enable this on iOS where this is buggy and views don't re-appear.")),Object(r.b)("h4",{id:"keyboarddismissmode"},Object(r.b)("inlineCode",{parentName:"h4"},"keyboardDismissMode")),Object(r.b)("p",null,"String indicating whether the keyboard gets dismissed in response to a drag gesture. Possible values are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'auto'")," (default): the keyboard is dismissed when the index changes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'on-drag'"),": the keyboard is dismissed when a drag begins."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"'none'"),": drags do not dismiss the keyboard.")),Object(r.b)("h4",{id:"swipeenabled"},Object(r.b)("inlineCode",{parentName:"h4"},"swipeEnabled")),Object(r.b)("p",null,"Boolean indicating whether to enable swipe gestures. Swipe gestures are enabled by default. Passing ",Object(r.b)("inlineCode",{parentName:"p"},"false")," will disable swipe gestures, but the user can still switch tabs by pressing the tab bar."),Object(r.b)("h4",{id:"swipevelocityimpact"},Object(r.b)("inlineCode",{parentName:"h4"},"swipeVelocityImpact")),Object(r.b)("p",null,"Determines how relevant is a velocity while calculating next position while swiping. Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"0.2"),"."),Object(r.b)("h4",{id:"timingconfig"},Object(r.b)("inlineCode",{parentName:"h4"},"timingConfig")),Object(r.b)("p",null,"Configuration object for the timing animation which occurs when tapping on tabs. Supported properties are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"duration")," (",Object(r.b)("inlineCode",{parentName:"li"},"number"),")")),Object(r.b)("h4",{id:"springconfig"},Object(r.b)("inlineCode",{parentName:"h4"},"springConfig")),Object(r.b)("p",null,"Configuration object for the spring animation which occurs after swiping. Supported properties are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"damping")," (",Object(r.b)("inlineCode",{parentName:"li"},"number"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mass")," (",Object(r.b)("inlineCode",{parentName:"li"},"number"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stiffness")," (",Object(r.b)("inlineCode",{parentName:"li"},"number"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," (",Object(r.b)("inlineCode",{parentName:"li"},"number"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," (",Object(r.b)("inlineCode",{parentName:"li"},"number"),")")),Object(r.b)("h4",{id:"springvelocityscale"},Object(r.b)("inlineCode",{parentName:"h4"},"springVelocityScale")),Object(r.b)("p",null,"Number for determining how meaningful is gesture velocity for calculating initial velocity of spring animation. Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"."),Object(r.b)("h4",{id:"initiallayout"},Object(r.b)("inlineCode",{parentName:"h4"},"initialLayout")),Object(r.b)("p",null,"Object containing the initial height and width of the screens. Passing this will improve the initial rendering performance. For most apps, this is a good default:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{ width: Dimensions.get('window').width }}\n")),Object(r.b)("h4",{id:"position"},Object(r.b)("inlineCode",{parentName:"h4"},"position")),Object(r.b)("p",null,"Animated (from ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-reanimated"),") value to listen to the position updates. The passed position value will be kept in sync with the current position of the tabs. It's useful for accessing the animated value outside the tab view."),Object(r.b)("h4",{id:"scenecontainerstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"sceneContainerStyle")),Object(r.b)("p",null,"Style to apply to the view wrapping each screen. You can pass this to override some default styles such as overflow clipping:"),Object(r.b)("h4",{id:"style"},Object(r.b)("inlineCode",{parentName:"h4"},"style")),Object(r.b)("p",null,"Style to apply to the tab view container."),Object(r.b)("h4",{id:"gesturehandlerprops"},Object(r.b)("inlineCode",{parentName:"h4"},"gestureHandlerProps")),Object(r.b)("p",null,"An object with props to be passed to underlying ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://software-mansion.github.io/react-native-gesture-handler/docs/handler-pan.html#properties"}),Object(r.b)("inlineCode",{parentName:"a"},"PanGestureHandler")),". For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"gestureHandlerProps={{\n  maxPointers: 1,\n  waitFor: [someRef]\n}}\n")),Object(r.b)("h4",{id:"pager"},Object(r.b)("inlineCode",{parentName:"h4"},"pager")),Object(r.b)("p",null,"Function that returns a React element to use as the pager. The pager handles swipe gestures and page switching. By default we use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-gesture-handler"))," for handling gestures. You can switch out the pager for a different implementation to customize the experience."),Object(r.b)("p",null,"For example, to use pager backed by the native ",Object(r.b)("inlineCode",{parentName:"p"},"ViewPager"),", you can use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-tab-view-viewpager-adapter"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-tab-view-viewpager-adapter")),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';\n\n// ...\n\n<Tab.Navigator pager={props => <ViewPagerAdapter {...props} />}>\n  {...}\n</Tab.Navigator>\n")),Object(r.b)("h4",{id:"tabbar"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBar")),Object(r.b)("p",null,"Function that returns a React element to display as the tab bar."),Object(r.b)("p",null,"Example:"),Object(r.b)("samp",{id:"material-top-tab-custom-tab-bar"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { View, TouchableOpacity } from 'react-native';\nimport Animated from 'react-native-reanimated';\n\nfunction MyTabBar({ state, descriptors, navigation, position }) {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      {state.routes.map((route, index) => {\n        const { options } = descriptors[route.key];\n        const label =\n          options.tabBarLabel !== undefined\n            ? options.tabBarLabel\n            : options.title !== undefined\n            ? options.title\n            : route.name;\n\n        const isFocused = state.index === index;\n\n        const onPress = () => {\n          const event = navigation.emit({\n            type: 'tabPress',\n            target: route.key,\n            canPreventDefault: true,\n          });\n\n          if (!isFocused && !event.defaultPrevented) {\n            navigation.navigate(route.name);\n          }\n        };\n\n        const onLongPress = () => {\n          navigation.emit({\n            type: 'tabLongPress',\n            target: route.key,\n          });\n        };\n\n        const inputRange = state.routes.map((_, i) => i);\n        const opacity = Animated.interpolate(position, {\n          inputRange,\n          outputRange: inputRange.map(i => (i === index ? 1 : 0)),\n        });\n\n        return (\n          <TouchableOpacity\n            accessibilityRole=\"button\"\n            accessibilityStates={isFocused ? ['selected'] : []}\n            accessibilityLabel={options.tabBarAccessibilityLabel}\n            testID={options.tabBarTestID}\n            onPress={onPress}\n            onLongPress={onLongPress}\n            style={{ flex: 1 }}\n          >\n            <Animated.Text style={{ opacity }}>\n              {label}\n            </Animated.Text>\n          </TouchableOpacity>\n        );\n      })}\n    </View>\n  );\n}\n\n// ...\n\n<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>\n  {...}\n</Tab.Navigator>\n")),Object(r.b)("p",null,"This example will render a basic tab bar with labels."),Object(r.b)("p",null,"Note that you ",Object(r.b)("strong",{parentName:"p"},"cannot")," use the ",Object(r.b)("inlineCode",{parentName:"p"},"useNavigation")," hook inside the ",Object(r.b)("inlineCode",{parentName:"p"},"tabBar")," since ",Object(r.b)("inlineCode",{parentName:"p"},"useNavigation")," is only available inside screens. You get a ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop for your ",Object(r.b)("inlineCode",{parentName:"p"},"tabBar")," which you can use instead:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function MyTabBar({ navigation }) {\n  return (\n    <Button\n      title=\"Go somewhere\"\n      onPress={() => {\n        // Navigate using the `navigation` prop that you received\n        navigation.navigate('SomeScreen');\n      }}\n    />\n  );\n}\n")),Object(r.b)("h4",{id:"tabbaroptions"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarOptions")),Object(r.b)("p",null,"An object containing the props for the tab bar component. It can contain the following properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"showIcon")," - Whether to show icon for tab, default is false."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pressColor")," - Color for material ripple (Android >= 5.0 only)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pressOpacity")," - Opacity for pressed tab (iOS and Android < 5.0 only)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"scrollEnabled")," - Whether to enable scrollable tabs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"indicatorStyle")," - Style object for the tab indicator (line at the bottom of the tab)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label. Specifying a color here will override the color specified in ",Object(r.b)("inlineCode",{parentName:"li"},"activeTintColor")," and ",Object(r.b)("inlineCode",{parentName:"li"},"inactiveTintColor")," for the label."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"iconStyle")," - Style object for the tab icon."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"renderIndicator")," - Function which takes an object with the current route and returns a custom React Element to be used as a tab indicator.")),Object(r.b)("p",null,"Example:"),Object(r.b)("samp",{id:"material-top-tab-options"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<Tab.Navigator\n  tabBarOptions={{\n    labelStyle: { fontSize: 12 },\n    tabStyle: { width: 100 },\n    style: { backgroundColor: 'powderblue' },\n  }}\n>\n  {/* ... */}\n</Tab.Navigator>\n")),Object(r.b)("h3",{id:"options"},"Options"),Object(r.b)("p",null,"The following ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/screen-options"}),"options")," can be used to configure the screens in the navigator:"),Object(r.b)("h4",{id:"title"},Object(r.b)("inlineCode",{parentName:"h4"},"title")),Object(r.b)("p",null,"Generic title that can be used as a fallback for ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),Object(r.b)("h4",{id:"tabbaricon"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarIcon")),Object(r.b)("p",null,"Function that given ",Object(r.b)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in the tab bar."),Object(r.b)("h4",{id:"tabbarlabel"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarLabel")),Object(r.b)("p",null,"Title string of a tab displayed in the tab bar or a function that given ",Object(r.b)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",Object(r.b)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),Object(r.b)("h4",{id:"tabbaraccessibilitylabel"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),Object(r.b)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),Object(r.b)("h4",{id:"tabbartestid"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarTestID")),Object(r.b)("p",null,"ID to locate this tab button in tests."),Object(r.b)("h3",{id:"events"},"Events"),Object(r.b)("p",null,"The navigator can ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/navigation-events"}),"emit events")," on certain actions. Supported events are:"),Object(r.b)("h4",{id:"tabpress"},Object(r.b)("inlineCode",{parentName:"h4"},"tabPress")),Object(r.b)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),Object(r.b)("li",{parentName:"ul"},"If the tab is already focused:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, you can use ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/use-scroll-to-top"}),Object(r.b)("inlineCode",{parentName:"a"},"useScrollToTop"))," to scroll it to top"),Object(r.b)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",Object(r.b)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),Object(r.b)("p",null,"To prevent the default behavior, you can call ",Object(r.b)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),Object(r.b)("samp",{id:"material-top-tab-prevent-default"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', e => {\n    // Prevent default behavior\n    e.preventDefault();\n\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),Object(r.b)("h4",{id:"tablongpress"},Object(r.b)("inlineCode",{parentName:"h4"},"tabLongPress")),Object(r.b)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar for an extended period."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabLongPress', e => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),Object(r.b)("h3",{id:"helpers"},"Helpers"),Object(r.b)("p",null,"The tab navigator adds the following methods to the navigation prop:"),Object(r.b)("h4",{id:"jumpto"},Object(r.b)("inlineCode",{parentName:"h4"},"jumpTo")),Object(r.b)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - ",Object(r.b)("em",{parentName:"li"},"string")," - Name of the route to jump to."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"params")," - ",Object(r.b)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",Object(r.b)("inlineCode",{parentName:"li"},"route.params"),").")),Object(r.b)("samp",{id:"material-top-tab-jump-to"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigation.jumpTo('Profile', { name: 'Micha\u015b' });\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("samp",{id:"material-top-tab-example"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';\n\nconst Tab = createMaterialTopTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName=\"Feed\"\n      tabBarOptions={{\n        activeTintColor: '#e91e63',\n        labelStyle: { fontSize: 12 },\n        style: { backgroundColor: 'powderblue' },\n      }}\n    >\n      <Tab.Screen\n        name=\"Feed\"\n        component={Feed}\n        options={{ tabBarLabel: 'Home' }}\n      />\n      <Tab.Screen\n        name=\"Notifications\"\n        component={Notifications}\n        options={{ tabBarLabel: 'Updates' }}\n      />\n      <Tab.Screen\n        name=\"Profile\"\n        component={Profile}\n        options={{ tabBarLabel: 'Profile' }}\n      />\n    </Tab.Navigator>\n  );\n}\n")))}u.isMDXComponent=!0},489:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return a?i.a.createElement(m,b({ref:t},c,{components:a})):i.a.createElement(m,b({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},490:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=i.apply(null,n);o&&e.push(o)}else if("object"===r)for(var b in n)a.call(n,b)&&n[b]&&e.push(b)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},491:function(e,t,a){"use strict";a(23),a(17),a(18);var n=a(0),i=a.n(n),r=a(490),o=a.n(r),b=a(120),l=a.n(b),c=37,s=39;t.a=function(e){var t=e.block,a=e.children,r=e.defaultValue,b=e.values,p=Object(n.useState)(r),u=p[0],d=p[1],m=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:o()("tab-item",l.a.tabItem,{"tab-item--active":u===t}),key:t,ref:function(e){return m.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(m,e.target,e)},onFocus:function(){return d(t)},onClick:function(){return d(t)}},a)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===u}))[0]))}},492:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);