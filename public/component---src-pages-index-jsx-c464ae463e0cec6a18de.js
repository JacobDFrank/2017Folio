webpackJsonp([0xc23565d713b7,61550623477757,0x95dc3967fc91,0xc0541ef03b3d,0x8670f667a0a5],{98:function(e,t){function n(e,t){for(var n in t)e.setAttribute(n,t[n])}function a(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var l=document.head||document.getElementsByTagName("head")[0],u=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},u.type=t.type||"text/javascript",u.charset=t.charset||"utf8",u.async=!("async"in t)||!!t.async,u.src=e,t.attrs&&n(u,t.attrs),t.text&&(u.text=""+t.text);var c="onload"in u?a:r;c(u,o),u.onload||a(u,o),l.appendChild(u)}},69:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=a(u),i="/assets/bubble.js",s=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.componentDidMount=function(){var e=n(98);e(""+i,function(e,t){e||console.log(t.src)})},t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement("canvas",{id:"bubble",width:"720",height:"720"}),c.default.createElement("canvas",{style:{display:"none"},width:"2560",height:"2560"}),c.default.createElement("canvas",{style:{display:"none"},width:"2560",height:"2560"}),c.default.createElement("canvas",{style:{display:"none"},width:"2560",height:"2560"}),c.default.createElement("canvas",{style:{display:"none"},width:"2560",height:"2560"}))},t}(c.default.Component);t.default=s,e.exports=t.default},37:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=a(u),i=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("footer",null,c.default.createElement("div",{className:"footer-container"},c.default.createElement("div",{className:"copyright"},"© ",c.default.createElement("span",{id:"copyright"},"2017")),c.default.createElement("div",{className:"courtesy"},c.default.createElement("div",{className:"email"},"Email me"),c.default.createElement("a",{href:"https://www.jacobdfrank.com/media/Jacob_Frank_Resume.pdf"},"Resume"),c.default.createElement("a",{href:"https://github.com/JacobDFrank"},"Github"),c.default.createElement("a",{href:"https://www.linkedin.com/in/jacobdfrank"},"LinkedIn"),c.default.createElement("a",{href:"https://twitter.com/jacobdfrank"},"Twitter"))))},t}(c.default.Component);t.default=i,e.exports=t.default},38:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),l=n(31),u=a(l),c=function(){return o.default.createElement("header",null,o.default.createElement(u.default,{to:"/",className:"faux-link"},"Jacob Frank"))};t.default=c,e.exports=t.default},70:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),l=function(){return o.default.createElement("section",{className:"projects"},o.default.createElement("h2",null,o.default.createElement("b",null,"Hey hey"),"—",o.default.createElement("b",null,"I'm Jacob Frank, a creative developer, designer, and 3rd year student at RIT")))};t.default=l,e.exports=t.default},195:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(2),o=(a(r),n(31)),l=(a(o),n(37)),u=(a(l),n(70)),c=(a(u),n(38)),i=(a(c),n(69));a(i)}});
//# sourceMappingURL=component---src-pages-index-jsx-c464ae463e0cec6a18de.js.map