webpackJsonp([69035246684044,0xd207643ce197],{362:function(e,t){e.exports={people:[{image:"ethel.png",name:"Ethelia Lung",title:"head potato",bio:"Ethelia has an affinity for naps and tuna wraps. Crafting delightful experiences is her main hustle. Her weakness is that she's deathly afraid of Asian F’s - you didn't hear it from me."},{image:"adi.png",name:"Aditi Khazanchi",title:"usurper",bio:"Aditi has got the travel bug! She wishes to see every place on earth. When she’s not planning her next trip, she can be found glued to the monitor in the lab working and drinking way too much coffee."},{image:"abba.png",name:"Abbey Lee",title:"the money bags",bio:"Abbey is part pixel pusher, part mountain goat. When she’s not in front of a screen cultivating her vastly growing collections of GIFS, she’s off deep in the wilderness fulfilling her dreams of finding and promptly high fiving her hero: Big Foot. "},{image:"chrif.png",name:"Chris Locke",title:"social butterfly",bio:"Chris has never met a poutine he doesn’t like. Raised in Rochester, NY, Chris is obsessed with food, design, comic books, and Pusheen."},{image:"jake.png",name:"Jacob Frank",title:"H4X0R",bio:'The young lad who makes the webs and crawls the walls. Late one night, when Jacob was asked the question  "What\'s your favorite food?" he answered with a muddled response of "pizza, pizza, and pizza."'},{image:"maddy.png",name:"Maddy Baker",title:"plans them events",bio:"If prompted, Maddy can talk in depth about her crystal collection, her favorite hiking trails, or the half-finished digital paintings on her hard drive. But whatever you do, don’t mention her pet Axolotl. You’ll never hear the end."}]}},203:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(1),s=n(l),d=a(76),c=n(d),u=a(362),h=n(u),f=function(e){function t(){var a,n,r;o(this,t);for(var l=arguments.length,d=Array(l),u=0;u<l;u++)d[u]=arguments[u];return a=n=i(this,e.call.apply(e,[this].concat(d))),n.createPerson=function(e){return s.default.createElement(c.default,{imageURL:e.image,key:e.name,name:e.name,title:e.title,bio:e.bio})},n.createPeople=function(e){return e.map(n.createPerson)},r=a,i(n,r)}return r(t,e),t.prototype.render=function(){return s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"eboard"},s.default.createElement("h1",{className:"eboard-header"},"Brought to you by"),s.default.createElement("div",{className:"eboard-people"},this.createPeople(h.default.people))))},t}(s.default.Component);t.default=f,e.exports=t.default},76:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(1),i=n(o),r=function(e){var t="./assets/"+e.imageURL;return i.default.createElement("div",{className:"eboard-person grid grid__col grid__col--3-of-6 "},i.default.createElement("div",{className:"eboard-image grid__col grid__col--m-6-of-6"},i.default.createElement("img",{src:""+t})),i.default.createElement("div",{className:"eboard-content grid__col grid__col--m-6-of-6"},i.default.createElement("p",{className:"eboard-title"},e.title),i.default.createElement("h2",{className:"eboard-name"},e.name),i.default.createElement("p",{className:"eboard-bio"},e.bio)))};t.default=r,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-eboard-jsx-08fc2f5ed5186c3fa5b6.js.map