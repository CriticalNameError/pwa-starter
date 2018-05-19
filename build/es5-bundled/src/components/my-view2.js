define(["exports","./my-app.js"],function(_exports,_myApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$counterDefault=_exports.decrement=_exports.increment=_exports.DECREMENT=_exports.INCREMENT=_exports.$counter$1=_exports.$counter=void 0;var _templateObject_c64870705a8011e895a4ab27bd64b433=babelHelpers.taggedTemplateLiteral(["\n      ","\n      <style>\n        span { width: 20px; display: inline-block; text-align: center; font-weight: bold;}\n      </style>\n      <div>\n        <p>\n          Clicked: <span>","</span> times.\n          Value is <span>","</span>.\n          <button on-click=\"","\" title=\"Add 1\">","</button>\n          <button on-click=\"","\" title=\"Minus 1\">","</button>\n        </p>\n      </div>\n    "]),_templateObject2_c64870705a8011e895a4ab27bd64b433=babelHelpers.taggedTemplateLiteral(["\n      ","\n      <section>\n        <h2>Redux example: simple counter</h2>\n        <div class=\"circle\">","</div>\n        <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The\n        element is not built in a Redux-y way (you can think of it as being a\n        third-party element you got from someone else), but this page is connected to the\n        Redux store. When the element updates its counter, this page updates the values\n        in the Redux store, and you can see the total number of clicks reflected in\n        the bubble above.</p>\n        <br><br>\n      </section>\n      <section>\n        <p>\n          <counter-element value=\"","\" clicks=\"","\"\n              on-counter-incremented=\"","\"\n              on-counter-decremented=\"","\">\n          </counter-element>\n        </p>\n      </section>\n    "]),INCREMENT="INCREMENT";_exports.INCREMENT=INCREMENT;var DECREMENT="DECREMENT";_exports.DECREMENT=DECREMENT;var increment=function(){return{type:INCREMENT}};_exports.increment=increment;var decrement=function(){return{type:DECREMENT}};_exports.decrement=decrement;_exports.$counter={INCREMENT:INCREMENT,DECREMENT:DECREMENT,increment:increment,decrement:decrement};var CounterElement=function(_LitElement){babelHelpers.inherits(CounterElement,_LitElement);babelHelpers.createClass(CounterElement,[{key:"_render",value:function _render(props){var _this2=this;return(0,_myApp.html)(_templateObject_c64870705a8011e895a4ab27bd64b433,_myApp.ButtonSharedStyles,props.clicks,props.value,function(){return _this2._onIncrement()},_myApp.plusIcon,function(){return _this2._onDecrement()},_myApp.minusIcon)}}],[{key:"properties",get:function get(){return{clicks:Number,value:Number}}}]);function CounterElement(){var _this;babelHelpers.classCallCheck(this,CounterElement);_this=babelHelpers.possibleConstructorReturn(this,(CounterElement.__proto__||Object.getPrototypeOf(CounterElement)).call(this));_this.clicks=0;_this.value=0;return _this}babelHelpers.createClass(CounterElement,[{key:"_onIncrement",value:function _onIncrement(){this.value++;this.clicks++;this.dispatchEvent(new CustomEvent("counter-incremented"))}},{key:"_onDecrement",value:function _onDecrement(){this.value--;this.clicks++;this.dispatchEvent(new CustomEvent("counter-decremented"))}}]);return CounterElement}(_myApp.LitElement);window.customElements.define("counter-element",CounterElement);var counter$1=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{clicks:0,value:0},action=1<arguments.length?arguments[1]:void 0;switch(action.type){case INCREMENT:return{clicks:state.clicks+1,value:state.value+1};case DECREMENT:return{clicks:state.clicks+1,value:state.value-1};default:return state;}};_exports.$counterDefault=counter$1;_exports.$counter$1={default:counter$1};_myApp.store.addReducers({counter:counter$1});var MyView2=function(_connect){babelHelpers.inherits(MyView2,_connect);function MyView2(){babelHelpers.classCallCheck(this,MyView2);return babelHelpers.possibleConstructorReturn(this,(MyView2.__proto__||Object.getPrototypeOf(MyView2)).apply(this,arguments))}babelHelpers.createClass(MyView2,[{key:"_render",value:function _render(props){return(0,_myApp.html)(_templateObject2_c64870705a8011e895a4ab27bd64b433,_myApp.SharedStyles,props._clicks,props._value,props._clicks,function(){return _myApp.store.dispatch(increment())},function(){return _myApp.store.dispatch(decrement())})}},{key:"_stateChanged",value:function _stateChanged(state){this._clicks=state.counter.clicks;this._value=state.counter.value}}],[{key:"properties",get:function get(){return{_clicks:Number,_value:Number}}}]);return MyView2}((0,_myApp.connect)(_myApp.store)(_myApp.PageViewElement));window.customElements.define("my-view2",MyView2)});