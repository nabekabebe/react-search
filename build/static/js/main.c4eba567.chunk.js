(this["webpackJsonpmonsters-rodex"]=this["webpackJsonpmonsters-rodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),l=n(6),m=n(5),u=(n(13),function(e){var t=e.monster;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://robohash.org/".concat(t.id,"/set2&size180x180"),alt:"monster"}),r.a.createElement("h2",{key:t.id},t.name),r.a.createElement("p",null,t.email))}),h=(n(14),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(u,{monster:e})})))}),d=(n(15),function(e){var t=e.placeHolder,n=e.onChange;return r.a.createElement("input",{className:"search-field",type:"search",placeholder:t,onChange:n})}),f=(n(16),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleSearch=function(e){a.setState({searchField:e.target.value})},a.state={monsters:[{id:1,name:"saks"},{id:2,name:"wow"},{id:3,name:"diii"},{id:4,name:"zmblo"}],searchField:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})).catch(console.log("error api"))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLocaleLowerCase().startsWith(n.toLocaleLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Card"),r.a.createElement(d,{placeHolder:"search monster",onChange:this.handleSearch}),r.a.createElement(h,{monsters:a}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c4eba567.chunk.js.map