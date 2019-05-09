(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){e.exports=a(236)},134:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(96),c=a.n(s),o=a(6),i=a(237),l=(a(134),a(8)),u=a(9),m=a(11),p=a(10),d=a(12),h=function(){return{type:"RESET"}},b=function(){return{type:"TOGGLE_SIGNIN"}},f=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_BASE_URL,E=a(93),g=a(94),y=a(19),O=a(98),v=a.n(O),j=a(47),N=function(e){return e.ok?e:e.headers.has("content-type")&&e.headers.get("content-type").startsWith("application/json")?e.json().then(function(e){return Promise.reject(e)}):Promise.reject({code:e.status,message:e.statusText})},T=function(){try{localStorage.removeItem("authToken")}catch(e){}},k="SET_AUTH_TOKEN",w="CLEAR_AUTH",S=function(){return{type:w}},_="AUTH_REQUEST",C="AUTH_SUCCESS",I="AUTH_ERROR",U="FETCH_HISTORY",D="FETCH_HISTORY_SUCCESS",R=function(e){return{type:D,history:e}},H="FETCH_HISTORY_ERROR",L="SAVE_HISTORY_REQUEST",A=function(e){return{type:L,values:e}},x="SAVE_HISTORY_SUCCESS",q=function(e){return{type:x}},G="SAVE_HISTORY_ERROR",P=function(e,t){var a=v()(e),n=a.user.username,r=a.user.history;t(function(e){return{type:k,authToken:e}}(e)),t(function(e){return{type:C,currentUser:e}}(n)),t(R(r)),function(e){try{localStorage.setItem("authToken",e)}catch(t){}}(e)},M=function(e,t){return function(a){return a({type:_}),fetch("".concat(f,"/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then(function(e){return N(e)}).then(function(e){return e.json()}).then(function(e){var t=e.authToken;a({type:"TOGGLE_LOGIN"}),P(t,a)}).catch(function(e){var t=401===e.code?"Incorrect username or password":"Unable to login, please try again";return a({type:I,error:e}),Promise.reject(new j.a({_error:t}))})}},Q=function(e){return function(t,a){var n=a().auth.currentUser,r=a().auth.currentUser,s=a().auth.authToken,c=a().tarot.cardsDealt,o=e.comments,i=a().tarot.textQuery;return fetch("".concat(f,"/api/auth"),{method:"PUT",headers:{authorization:"Bearer ".concat(s)},body:{username:n,comments:o,query:i,cardsDealt:c,userId:r}}).then(function(e){return N(e)}).then(function(e){return e.json()}).then(function(e){var a=e.authToken;return P(a,t)}).catch(function(e){T()})}},F=function(e){return e?void 0:"Required"},Y=function(e){return""!==e.trim()?void 0:"Cannot be empty"},K=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return r.a.createElement("div",{className:"register-container"},r.a.createElement("form",{className:"form-container",onSubmit:e},void 0,r.a.createElement("label",{className:"label"},"User Name"),r.a.createElement(E.a,{component:"input",name:"username",label:"username",type:"text",className:"username",validators:[F,Y]}),r.a.createElement("br",null),r.a.createElement("label",{className:"label"},"Password"),r.a.createElement(E.a,{component:"input",name:"password",type:"password",className:"password",validate:[F,Y]}),r.a.createElement("br",null),r.a.createElement("button",{name:"signup-button",type:"submit",className:"signup-button",disabled:this.props.pristine||this.props.submitting},"Join")))}}]),t}(r.a.Component),W=Object(g.a)({form:"register",onSubmit:function(e,t){return t((a=e.username,n=e.password,function(e){return fetch("".concat(f,"/api/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:n})}).then(function(e){return N(e)}).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){var t=e.code;return Promise.reject(new j.a({_error:t}))})})).then(function(){return t(M(e.username,e.password))}).then(function(){return t(b())});var a,n},onSubmitFail:function(e,t){return t(Object(y.a)("login","username"))}})(K);var B=Object(o.b)(function(e){return{login:e.tarot.login}})(W);var J=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this.props.dispatch;var a=this.props.handleSubmit;return this.props.error&&(e=r.a.createElement("div",{className:"form-error","aria-live":"polite"},this.props.error)),!0===this.props.login?!0===this.props.signIn?r.a.createElement(B,null):r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{className:"form-container",onSubmit:a},e,r.a.createElement("button",{name:"newuser-button",id:"newuser-button",type:"button",className:"newuser-button",onClick:function(){t(b())}},"Register"),r.a.createElement("label",{className:"label"},"User Name"),r.a.createElement(E.a,{component:"input",name:"username",label:"username",type:"text",className:"username",validators:[F,Y]}),r.a.createElement("br",null),r.a.createElement("label",{className:"label"},"Password"),r.a.createElement(E.a,{component:"input",name:"password",type:"password",className:"password",validate:[F,Y]}),r.a.createElement("br",null),r.a.createElement("button",{name:"login-button",id:"login-button",type:"submit",className:"login-button",disabled:this.props.pristine||this.props.submitting},"Sign In"))):r.a.createElement("div",null)}}]),t}(r.a.Component),V=Object(g.a)({form:"login",onSubmit:function(e,t){return t(M(e.username,e.password))},onSubmitFail:function(e,t){return t(Object(y.a)("login","username"))}})(J);var X=Object(o.b)(function(e){return{login:e.tarot.login,signIn:e.tarot.signIn}})(V),z=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(!0!==this.props.login&&this.props.cardsDealt.length>0)return r.a.createElement("section",{className:"query-container"},r.a.createElement("h3",null,"Your query:"),r.a.createElement("p",{className:"display-query"},this.props.textQuery));if(!0!==this.props.login){var e=this.props.handleSubmit;return r.a.createElement("section",{className:"query-container"},r.a.createElement("form",{onSubmit:e},r.a.createElement(E.a,{component:"input",name:"textQuery",className:"text-query",type:"text",placeholder:"Ask a question."}),r.a.createElement("label",{className:"spreadNumber-label"},"number of cards to deal: "),r.a.createElement(E.a,{component:"input",name:"spreadNumber",className:"spread-number",type:"number",placeholder:"all",min:1,max:78}),r.a.createElement("br",null),r.a.createElement("button",{name:"deal-button",id:"deal-button",type:"submit",className:"deal-button"},"Deal")))}return r.a.createElement("div",null)}}]),t}(r.a.Component);var $=Object(g.a)({form:"query",onSubmit:function(e,t){t(function(e){return{type:"TRIM_DECK",values:e}}(e.spreadNumber)),t({type:"TAKE_QUERY",textQuery:e.textQuery}),t({type:"SHUFFLE_DECK"})}})(z),Z=Object(o.b)(function(e){return{login:e.tarot.login,deck:e.tarot.deck,cardsDealt:e.tarot.cardsDealt,textQuery:e.tarot.textQuery}})($),ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(){a.props.dispatch(S()),a.props.dispatch(h())},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement("div",null,r.a.createElement("button",{className:"header-link",id:"custom-button",href:"#",onClick:function(t){return e.props.dispatch({type:"OPEN_HISTORY"})}},this.props.currentUser),r.a.createElement("button",{className:"header-link",id:"logout-button",href:"#",onClick:function(t){return e.handleLogout(t)}},"logout")):r.a.createElement("button",{className:"header-link",id:"member-login-button",href:"#",onClick:function(t){return e.props.dispatch({type:"TOGGLE_LOGIN"})}},"Member Login")}}]),t}(r.a.Component);var te=Object(o.b)(function(e){return{currentUser:e.auth.currentUser}})(ee),ae=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return r.a.createElement("div",{className:"header-container"},r.a.createElement("header",{className:"App-header"},r.a.createElement("nav",null,r.a.createElement("a",{className:"header-link purchase-link",href:"https://www.publikwerks.com/thelema-tarot-deck/tarot-deck-pre-order"},"Purchase Deck"),r.a.createElement(te,null)),r.a.createElement("form",{className:"searchBar",onSubmit:e}),r.a.createElement("h1",{className:"banner"},"FORTUNE CARDS")))}}]),t}(r.a.Component),ne=Object(g.a)({form:"search",onSubmit:function(e,t){t({type:"MAKE_SEARCH",searchTerm:e.searchTerm})}})(ae);function re(e){return r.a.createElement("div",{className:"card-description-box",id:e.id},r.a.createElement("h3",null,e.id),r.a.createElement("h4",null,e.name),r.a.createElement("p",{className:"desc-text"},e.desc))}function se(e){var t="card-image card-itself rotate".concat(e.facing);return r.a.createElement("div",{className:"card-image-container"},r.a.createElement("img",{className:t,src:e.img,alt:e.name}))}var ce=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;console.log(this.props),console.log(this.props.currentUser),console.log(this.props.cardsDealt),this.props.error&&(e=r.a.createElement("div",{className:"form-error","aria-live":"polite"},this.props.error));r.a.createElement("div",null);var t=this.props.handleSubmit;return this.props.cardsDealt?(console.log("cards Dealt"),null===this.props.currentUser?r.a.createElement("div",null,r.a.createElement("h3",null,"Sign in to save your readings!")):r.a.createElement("div",{className:"history-form"},r.a.createElement("form",{className:"history-form",onSubmit:t},e,r.a.createElement("label",null,"Comments:"),r.a.createElement(E.a,{component:"input",name:"comments",type:"text",className:"comments",placeholder:"We'll see..."}),r.a.createElement("button",{name:"saveHistory",className:"save-history",id:"save-history",type:"submit"},"Save")))):r.a.createElement("div",null)}}]),t}(r.a.Component);ce=Object(g.a)({form:"save",onSubmit:function(e,t){console.log(e),t(A()),t(Q(e)).then(t(q()))}})(ce);Object(o.b)(function(e){return console.log(e),{cardsDealt:e.tarot.cardsDealt,currentUser:e.auth.currentUser}})(ce);var oe=Object(o.b)(function(e){return{cardsDealt:e.tarot.deck.slice(0,e.tarot.spreadNumber),currentUser:e.auth.currentUser}})(function(e){var t=function(){if(e.cardsDealt.length>0)return r.a.createElement("div",null,r.a.createElement("h2",{className:"reading-heading"},"Your Reading"))}(),a=e.cardsDealt.map(function(e){return r.a.createElement("li",{className:"card-image",key:e.name},r.a.createElement(se,e))}),n=e.cardsDealt.map(function(e,t){return r.a.createElement("li",{className:"card-description",key:e.name},r.a.createElement("span",{className:"position-indicator"},"Card position: ",t+1),r.a.createElement(re,e))});return r.a.createElement("section",{className:"reading-display"},t,r.a.createElement("ul",{className:"spread"},a),r.a.createElement("ul",{className:"spread"},n),r.a.createElement(ce,null))}),ie=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=r.a.createElement("div",null);return this.props.cardsDealt&&this.props.cardsDealt.length>0&&(t=r.a.createElement("button",{className:"reset-button",id:"reset-button",href:"#",onClick:function(t){return e.props.dispatch(h())}},"Clear Reading")),t}}]),t}(r.a.Component);var le=Object(o.b)(function(e){return{cardsDealt:e.tarot.cardsDealt}})(ie),ue=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.user;return!0===this.props.readingHistory?r.a.createElement("section",{className:"history-container"},r.a.createElement("h2",null,t,"'s reading history"),r.a.createElement(function(){return e.props.history.length>0?e.props.history.map(function(e,t){return r.a.createElement("div",{id:t},r.a.createElement("p",null,"Q: ",e.query),r.a.createElement("p",null,"Date: ",e.createdAt))}):r.a.createElement("div",null)},null)):r.a.createElement("div",null)}}]),t}(r.a.Component);var me=Object(o.b)(function(e){return{readingHistory:e.tarot.readingHistory,user:e.auth.currentUser,history:e.auth.history}})(ue);function pe(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"copy-info"},"All images and text \xa9 2019 Publikwerks, LLC."))}var de=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){this.props.dispatch({type:"TOGGLE_INFO"})}},{key:"render",value:function(){var e=this;return!1===this.props.showInfo?r.a.createElement("div",null):r.a.createElement("aside",null,r.a.createElement("section",{className:"landing-modal"},r.a.createElement("button",{className:"hide-info",id:"hide-info",href:"#",onClick:function(t){return e.props.dispatch({type:"TOGGLE_INFO"})}},"hide info"),r.a.createElement("h3",null,"DO WHAT THOU WILL SHALL BE THE WHOLE OF THE LAW."),r.a.createElement("p",null," Science, historically adversarial towards Mysticism, is now finding common ground between the two. Through the phenomenon known as Nonlocal Entanglement Physicists now know that all things are connected outside of time and space. Even a small change in one part of the Universe instantly affects every other part of the Universe, and it happens on a level Science can\u2019t explain. The best it  can do is say that every place is connected, every place is right here, and every time is happening at once. The past, the present, and the future are all being created at the same time, right now. Mystics have long known that everything is connected. They\u2019ve said, \u201cAs above, so below,\u201d and that \u201cthe Microcosm reflects the Macrocosm, and the Macrocosm reflects the Microcosm.\u201d Within the smallest part of any thing is a bit of the Infinte. This idea of the Whole represented in the Part is the basic theory behind Entanglement and Divination, both. If one has an accurate enough model of the Universe, they may periodically consult it to understand the bigger picture. The Tarot is a proven model for the examination of these patterns."),r.a.createElement("h3",null,"love is the law. love under WILL.")))}}]),t}(r.a.Component);var he=Object(o.b)(function(e){return{showInfo:e.tarot.showInfo}})(de),be=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadDeck()}},{key:"loadDeck",value:function(){var e=this;return fetch("".concat(f,"/api/tarotDeck")).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(t){return e.props.dispatch({type:"SET_DECK",deck:t})}).catch(function(t){return e.setState({error:"could not load deck"})})}},{key:"render",value:function(){return r.a.createElement(i.a,null,r.a.createElement("main",{className:"App"},r.a.createElement(ne,null),r.a.createElement(X,null),r.a.createElement(he,null),r.a.createElement(Z,null),r.a.createElement(le,null),r.a.createElement(oe,null),r.a.createElement(le,null),r.a.createElement(me,null),r.a.createElement(pe,null)))}}]),t}(n.Component);var fe=Object(o.b)(function(e){return{deck:e.tarot.deck}})(be),Ee=a(7),ge=a(95),ye=a(99),Oe=a(52),ve=a(235),je={spreadNumber:0,cardsDealt:0,history:[],deck:[{id:"0",name:"fool",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"1",name:"magus",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"2",name:"heirophant",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"3",name:"empress",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"4",name:"emperor",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"5",name:"fifth",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"6",name:"sixth",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"7",name:"seventh",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"8",name:"eighth",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"9",name:"ninth",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0},{id:"10",name:"wheel of fortune",desc:"lorem ipsum",img:"https://static1.squarespace.com/static/590185441b10e3a0176bb2bf/t/599f4e967131a550b1edabed/1530126054227/?format=500w",facing:0}]},Ne={authToken:null,currentUser:null,error:null,loading:!1};var Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ee.d,ke=Object(Ee.c)({form:ge.a,tarot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;if("RESET"===t.type)return Object.assign({},e,{spreadNumber:0,textQuery:null,cardsDealt:0});if("SHUFFLE_DECK"===t.type){var a=ve(e.deck);return a.map(function(e){return e.facing=Math.floor(Math.random()*Math.floor(4))}),Object.assign({},e,{deck:Object(Oe.a)(a)})}if("SET_DECK"===t.type){var n=ve(t.deck);return n.map(function(e){return e.facing=Math.floor(Math.random()*Math.floor(4))}),Object.assign({},e,{deck:Object(Oe.a)(n)})}return"TRIM_DECK"===t.type?Object.assign({},e,{spreadNumber:t.values,cardsDealt:Object(Oe.a)(e.deck.slice(0,t.values))}):"TAKE_QUERY"===t.type?Object.assign({},e,{textQuery:t.textQuery}):"MAKE_SEARCH"===t.type?Object.assign({},e,{searchTerm:t.searchTerm}):"TOGGLE_LOGIN"===t.type?!0===e.login?Object.assign({},e,{login:!1}):Object.assign({},e,{login:!0}):"TOGGLE_SIGNIN"===t.type?e.signin?Object.assign({},e,{signIn:!e.signIn}):Object.assign({},e,{signIn:!0}):"OPEN_HISTORY"===t.type?!0===e.readingHistory?Object.assign({},e,{readingHistory:!1}):Object.assign({},e,{readingHistory:!0}):"TOGGLE_INFO"===t.type?!1===e.showInfo?Object.assign({},e,{showInfo:!0}):Object.assign({},e,{showInfo:!1}):e},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;return t.type===k?Object.assign({},e,{authToken:t.authToken}):t.type===w?Object.assign({},e,{authToken:null,currentUser:null}):t.type===_?Object.assign({},e,{loading:!0,error:null}):t.type===C?Object.assign({},e,{loading:!1,currentUser:t.currentUser}):t.type===I?Object.assign({},e,{loading:!1,error:t.error}):t.type===U?Object.assign({},e,{loading:!0,error:null}):t.type===D?Object.assign({},e,{loading:!1,history:t.history}):t.type===H?Object.assign({},e,{loading:!1,error:t.error}):t.type===L?(console.log("savehistoryrequest ran"),Object.assign({},e,{loading:!0,error:null,comments:t.values.comments})):t.type===x?(console.log("savehistorysuccess ran"),Object.assign({},e,{loading:!1})):t.type===G?Object.assign({},e,{loading:!1,error:t.error}):e}}),we=Object(Ee.e)(ke,Te(Object(Ee.a)(ye.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{store:we},r.a.createElement(i.a,null,r.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[126,2,1]]]);
//# sourceMappingURL=main.32987475.chunk.js.map