(this["webpackJsonppractice-app"]=this["webpackJsonppractice-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(69)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),s=a.n(i),c=a(7),l=a(6),u=a(14),o=a(10),m=a(11),d=a(13),p=a(12),h=a(15),v=a(16),b=a.n(v),g=function(){return b.a.get("https://dog.ceo/api/breeds/image/random")},f=function(e){return b.a.get("https://dog.ceo/api/breed/"+e+"/images")},E=function(){return b.a.get("https://dog.ceo/api/breeds/list")};a(55);var N=function(e){return r.a.createElement("button",Object.assign({onClick:e.onClick,className:"card-btn ".concat(e["data-value"])},e))};a(56);var y=function(e){return r.a.createElement("div",{className:"card",style:{backgroundImage:e.image?"url(".concat(e.image,")"):"none"}},!e.image&&r.a.createElement("i",{className:"fa fa-spinner fa-spin","aria-hidden":"true"}),r.a.createElement(N,{style:{opacity:e.image?1:0},onClick:e.handleBtnClick,"data-value":"pass"}),r.a.createElement(N,{style:{opacity:e.image?1:0},onClick:e.handleBtnClick,"data-value":"pick"}))};var k=function(e){return r.a.createElement("div",{role:"alert",className:"alert alert-".concat(e.type," fade in"),style:Object(u.a)({width:"80%",margin:"0 auto",marginTop:18},e.style)},e.children)},C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={image:"",match:!1,matchCount:0},a.handleBtnClick=function(e){var t=e.target.attributes.getNamedItem("data-value").value,n=Object(u.a)({},a.state);"pick"===t?(n.match=1===Math.floor(5*Math.random())+1,n.matchCount=n.match?n.matchCount+1:n.matchCount):n.match=!1,a.setState(n),a.loadNextDog()},a.loadNextDog=function(){g().then((function(e){return a.setState({image:e.data.message})})).catch((function(e){return console.log(e)}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadNextDog()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Make New Friends"),r.a.createElement("h3",{className:"text-center"},"Thumbs up on any pups you'd like to meet!"),r.a.createElement(y,{image:this.state.image,handleBtnClick:this.handleBtnClick}),r.a.createElement("h1",{className:"text-center"},"Made friends with ",this.state.matchCount," pups so far!"),r.a.createElement(k,{style:{opacity:this.state.match?1:0},type:"success"},"Yay! That Pup Liked You Too!!!"))}}]),t}(n.Component);a(57);var q=function(e){return r.a.createElement("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children)};var j=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};var w=function(e){return r.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};var O=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",Object.assign({className:t},e))};var x=function(){return r.a.createElement("div",null,r.a.createElement(q,{backgroundImage:"https://i.imgur.com/qkdpN.jpg"},r.a.createElement("h1",null,"Pupster"),r.a.createElement("h2",null,"They're the Good Boys and Girls")),r.a.createElement(j,{style:{marginTop:30}},r.a.createElement(w,null,r.a.createElement(O,{size:"md-12"},r.a.createElement("h1",null,"Welcome To Pupster!"))),r.a.createElement(w,null,r.a.createElement(O,{size:"md-12"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis."),r.a.createElement("p",null,"Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas. Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh."),r.a.createElement("p",null,"Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem. Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa.")))))};a(58);var S=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"breed"},"Breed Name:"),r.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"breed",list:"breeds",type:"text",className:"form-control",placeholder:"Type in a dog breed to begin",id:"breed"}),r.a.createElement("datalist",{id:"breeds"},e.breeds.map((function(e){return r.a.createElement("option",{value:e,key:e})}))),r.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success"},"Search")))};a(59);var P=function(e){return r.a.createElement("ul",{className:"list-group search-results"},e.results.map((function(e){return r.a.createElement("li",{key:e,className:"list-group-item"},r.a.createElement("img",{alt:"Dog",src:e,className:"img-fluid"}))})))},B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",breeds:[],results:[],error:""},a.handleInputChange=function(e){a.setState({search:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),f(a.state.search).then((function(e){if("error"===e.data.status)throw new Error(e.data.message);a.setState({results:e.data.message,error:""})})).catch((function(e){return a.setState({error:e.message})}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){return e.setState({breeds:t.data.message})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,{style:{minHeight:"80%"}},r.a.createElement("h1",{className:"text-center"},"Search By Breed!"),r.a.createElement(k,{type:"danger",style:{opacity:this.state.error?1:0,marginBottom:10}},this.state.error),r.a.createElement(S,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,breeds:this.state.breeds}),r.a.createElement(P,{results:this.state.results})))}}]),t}(n.Component);a(60);var D=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(c.b,{className:"navbar-brand",to:"/employee_directory"},"Pupster"),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/employee_directory",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/discover",className:"/discover"===window.location.pathname?"nav-link active":"nav-link"},"Discover")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search")))))};a(66);var M=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Pupster 2017"))};a(67);var I=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};var T=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(I,null,r.a.createElement(l.a,{exact:!0,path:"/employee_directory",component:x}),r.a.createElement(l.a,{exact:!0,path:"/discover",component:C}),r.a.createElement(l.a,{exact:!0,path:"/search",component:B})),r.a.createElement(M,null)))};a(68);s.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ab86a10a.chunk.js.map