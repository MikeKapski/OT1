(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{282:function(module,exports,__webpack_require__){__webpack_require__(283),__webpack_require__(429),__webpack_require__(430),__webpack_require__(627),module.exports=__webpack_require__(637)},347:function(module,exports){},430:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(431)},637:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(174);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(639)],module)}.call(this,__webpack_require__(638)(module))},639:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":652};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=639},652:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ButtonOne",(function(){return index_stories_ButtonOne})),__webpack_require__.d(__webpack_exports__,"ClickCounterButtonStory",(function(){return index_stories_ClickCounterButtonStory})),__webpack_require__.d(__webpack_exports__,"HeaderD",(function(){return index_stories_HeaderD})),__webpack_require__.d(__webpack_exports__,"HelloWorld",(function(){return index_stories_HelloWorld}));var react=__webpack_require__(33),react_default=__webpack_require__.n(react),dist=__webpack_require__(175),addon_knobs_dist=__webpack_require__(60),ClickCounterButton_ClickCounterButton=function ClickCounterButton(_ref){var increment=_ref.increment,_ref$children=_ref.children,children=void 0===_ref$children?0:_ref$children;return react_default.a.createElement("button",{onClick:increment},"Clicked ",children," times!")},index_stories_ButtonOne=(__webpack_exports__.default={title:"ClickCounterButton",decorators:[addon_knobs_dist.withKnobs]},function ButtonOne(){return react_default.a.createElement("button",null,Object(addon_knobs_dist.text)("Name","Пример кнопки"))}),index_stories_ClickCounterButtonStory=function ClickCounterButtonStory(){var count=Object(addon_knobs_dist.number)("Number",0);return react_default.a.createElement(ClickCounterButton_ClickCounterButton,{increment:Object(dist.action)("Increment")},count)},index_stories_HeaderD=function HeaderD(){return react_default.a.createElement("h1",{onClick:Object(dist.action)("Hesd")},Object(addon_knobs_dist.text)("Header","MegaHeader"))},index_stories_HelloWorld=function HelloWorld(){return react_default.a.createElement("h1",null,"Привет, ",Object(addon_knobs_dist.text)("Имя","Вася Пупкин"))}}},[[282,1,2]]]);
//# sourceMappingURL=main.645f79229806de5838be.bundle.js.map