(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t(0),c=t(3),i=t.n(c),s=t(2),a=t(6),h=t(15),l=t(16),u=(t(27),t(4)),d=t(5),b=t(8),f=t(7),j="CHANGE_SEARCHFIELD",g="REQUEST_ROBOTS_PENDING",p="REQUEST_ROBOTS_SUCCESS",v="REQUEST_ROBOTS_FAILED",O=function(){return function(e){var n;e({type:g}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:p,payload:n})})).catch((function(n){return e({type:v,payload:n})}))}},w=function(e){var n=e.name,t=e.email,r=e.id;return Object(o.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(o.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200"),width:"200px",height:"200px"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:n}),Object(o.jsx)("p",{children:t})]})]})},m=function(e){var n=e.robots;return Object(o.jsx)(o.Fragment,{children:n.map((function(e,t){return Object(o.jsx)(w,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},x=function(e){e.searchfield;var n=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},y=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"calc(100vh - 187px)"},children:e.children})},R=function(e){Object(b.a)(t,e);var n=Object(f.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(d.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),t}(r.Component),E=(t(28),function(e){Object(b.a)(t,e);var n=Object(f.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,r=e.onSearchChange,c=e.isPending,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(o.jsx)(x,{searchChange:r}),Object(o.jsx)(y,{children:c?Object(o.jsx)("h1",{children:"Loading"}):Object(o.jsx)(R,{children:Object(o.jsx)(m,{robots:i})})})]})}}]),t}(r.Component)),C=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:j,payload:t}));var t},onRequestRobots:function(){return e(O())}}}))(E),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N={searchField:""},F={robots:[],isPending:!0},L=(t(29),Object(l.createLogger)()),P=Object(s.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case g:return Object.assign({},e,{isPending:!0});case p:return Object.assign({},e,{robots:n.payload,isPending:!1});case v:return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case j:return Object.assign({},e,{searchField:n.payload});default:return e}}}),_=Object(s.d)(P,Object(s.a)(h.a,L));i.a.render(Object(o.jsx)(a.a,{store:_,children:Object(o.jsx)(C,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Robofriends","/service-worker.js");S?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.b3c042e8.chunk.js.map