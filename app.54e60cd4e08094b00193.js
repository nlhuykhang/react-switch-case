webpackJsonp([0],{295:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=o(u),l=n(81),p=(o(l),n(304)),f=function(e){var t=e.text;return s.default.createElement("div",null,t)};f.propTypes={};var d=function(e){function t(){return r(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.default.createElement("div",null,this.props.text)}}]),t}(s.default.Component);d.propTypes={};var m=function(){return s.default.createElement(p.Switch,null,s.default.createElement(p.Case,{cond:!1,component:f}),s.default.createElement(p.Case,{cond:!0,component:d,componentProps:{text:"case 2"}}),s.default.createElement(p.Case,{cond:!1,component:f,componentProps:{text:"case 3"}}),s.default.createElement(p.Default,{component:function(e){var t=e.text;return s.default.createElement("div",null,t)},componentProps:{text:"default text"}}))};t.default=m},297:function(e,t,n){var o=n(1),r=n(166);r.__esModule&&(r=r.default),e.exports=o.createClass({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(637)}},componentWillMount:function(){},render:function(){return o.createElement(r,Object.assign({},this.props,{content:this.state.content}))}})},298:function(e,t){},299:function(e,t){},301:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(1),a=o(c),i=n(74),u=o(i),s=n(300),l=o(s),p=n(296);n(299),n(298);var f={},d=[{path:"/",title:"Introduction",component:n(297)},{path:"test",title:"Test",component:n(295).default}];u.default.render(a.default.createElement("div",null,a.default.createElement(l.default,{href:"https://github.com/khangnlh/react-switchcase-condition",bannerColor:"#fff",octoColor:"#000",width:80,height:80,direction:"right"}),a.default.createElement(p.Catalog,{imports:f,pages:d,specimens:{javascript:function(e){return a.default.createElement(p.CodeSpecimen,r({},e,{lang:"javascript"}))},js:function(e){return a.default.createElement(p.CodeSpecimen,r({},e,{lang:"javascript"}))},jsx:function(e){return a.default.createElement(p.ReactSpecimen,e)}},title:"react-switchcase-condition v0.0.10"})),document.getElementById("app"))},302:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=o(u),l=n(81),p=(o(l),function(e){function t(){return r(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.componentProps;return s.default.createElement("div",{className:""},s.default.createElement(t,n))}}]),t}(u.Component));t.default=p,p.componentName="Case",p.propTypes={},p.defaultProps={componentProps:{}}},303:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=o(u),l=n(81),p=(o(l),function(e){function t(){return r(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.componentProps;return s.default.createElement("div",{className:""},s.default.createElement(t,n))}}]),t}(u.Component));t.default=p,p.componentName="Default",p.propTypes={},p.defaultProps={componentProps:{}}},304:function(e,t,n){"use strict";e.exports={Switch:n(305).default,Case:n(302).default,Default:n(303).default}},305:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=o(u),l=n(81),p=(o(l),function(e){function t(){return r(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=u.Children.toArray(this.props.children),t=e.filter(function(e){return"Case"===e.type.componentName&&e.props.cond})[0],n=e.filter(function(e){return"Default"===e.type.componentName});if(1!==n.length||!n[0])throw new Error("There has to be exact one Default component");var o=t||n[0];return s.default.createElement("div",{className:""},o)}}]),t}(u.Component));t.default=p,p.componentName="Switch",p.propTypes={}},637:function(e,t){e.exports="# React Switch Case Condition\n\n[![Build Status](https://travis-ci.org/nlhuykhang/react-switch-case.svg?branch=master)](https://travis-ci.org/nlhuykhang/react-switch-case)\n\n\x3c!-- [![bitHound Score](https://www.bithound.io/github/survivejs/react-component-boilerplate/badges/score.svg)](https://www.bithound.io/github/survivejs/react-component-boilerplate) [![Dependency Status](https://david-dm.org/survivejs/react-component-boilerplate.svg)](https://david-dm.org/survivejs/react-component-boilerplate) --\x3e\n\nDeclarative way to render components conditionally\n\n## Demo\n\n## Install\n\n```\nnpm install --save react-switchcase-condition\n# OR\nyarn add react-switchcase-condition\n```\n\n## Usage\n\n```js\nimport {\n  Switch,\n  Case,\n  Default,\n} from 'react-switchcase-condition';\n\nconst Test1 = ({ text }) => <div>{text}</div>;\nconst Test2 = ({ text }) => <div>{text}</div>;\nconst Test3 = ({ text }) => <div>{text}</div>;\n\nconst Demo = () => (\n  <Switch>\n    <Case\n      cond={false}\n      component={Test1}\n      componentProps={{ text: 'This will not be rendered', }}\n    />\n    <Case\n      cond={true}\n      component={Test2}\n      componentProps={{ text: 'This will be render', }}\n    />\n    <Default\n      component={Test3}\n      componentProps={{ text: 'This is the default render' }}\n    />\n  </Switch>\n);\n```\n\n## Components\n\n### Switch\n\nWrapper component to declare the Switch block. Its children must contain at least one Case and exact one Default component. The first Case whose `cond` is `true` will be rendered. If there is no cond-true Case, Default will be rendered.\n\n### Case\n\nDeclare a render case\n\n| Prop Name | Type | Required | Default | Description |\n|-----------|------|----------|---------|-------------|\n| cond | bool | true |  |Condition to determine render. Render if true and is the first Case in children list  |\n| component | React component | true | | Component to render if `cond` is `true` |\n| componentProps | object | false | {} | Props passed to `component` to render if `cond` is `true` |\n\n### Default\n\nDeclare the default render case\n\n| Prop Name | Type | Required | Default | Description |\n|-----------|------|----------|---------|-------------|\n| component | React component | true | | Component to render if there is no cond-true `Case` |\n| componentProps | object | false | {} | Props passed to `component` to render |\n\n## License\n\n[MIT](LICENSE)\n"}},[301]);