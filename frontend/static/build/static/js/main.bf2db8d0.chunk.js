(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{19:function(e,t,a){},62:function(e,t,a){e.exports=a(92)},68:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(28),r=a.n(o),c=(a(67),a(68),a(26)),i=a(21),s=a(8),m=a(9),u=a(11),h=a(10),d=a(7),p=a(12),f=a(5),g=a.n(f),b=a(97),E=a(94);a(19);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("".concat("http://localhost:3000","/rest-auth/registration/"),this.state).then((function(e){console.log("two",e),localStorage.setItem("my-app-user",JSON.stringify(e.data)),t.props.history.push("/")})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(b.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},l.a.createElement("span",null,"Sign Up")),l.a.createElement(b.a.Group,null,l.a.createElement(b.a.Label,{className:"Form-label"},"Username:"),l.a.createElement(b.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Enter username",required:!0})),l.a.createElement(b.a.Group,null,l.a.createElement(b.a.Label,{className:"Form-label"},"Email:"),l.a.createElement(b.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter email",required:!0}),l.a.createElement(b.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(b.a.Group,null,l.a.createElement(b.a.Label,{className:"Form-label"},"Password:"),l.a.createElement(b.a.Control,{type:"password",name:"password1",value:this.state.password1,onChange:this.handleChange,placeholder:"Enter password",required:!0})),l.a.createElement(b.a.Group,null,l.a.createElement(b.a.Label,{className:"Form-label"}," Confirm Password:"),l.a.createElement(b.a.Control,{type:"password",name:"password2",value:this.state.password,onChange:this.handleChange,placeholder:"Enter password",required:!0})),l.a.createElement(E.a,{className:"login-Btn",type:"submit"},"Sign Up")))}}]),t}(n.Component);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),console.log("The link was clicked.")}},{key:"handleSubmit",value:function(e){e.preventDefault(),g.a.post("".concat("http://localhost:3000","/rest-auth/login/"),this.state).then((function(e){console.log("one",e),localStorage.setItem("my-app-user",JSON.stringify(e.data)),window.location.reload(!1)})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(b.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},"Login"),l.a.createElement(b.a.Group,null,l.a.createElement(b.a.Label,{className:"Form-label"},"Username:"),l.a.createElement(b.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Enter username",required:!0})),l.a.createElement(b.a.Group,{controlId:"formBasicEmail"},l.a.createElement(b.a.Label,{className:"Form-label"},"Email:"),l.a.createElement(b.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter email",required:!0}),l.a.createElement(b.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(b.a.Group,{controlId:"formBasicPassword"},l.a.createElement(b.a.Label,{className:"Form-label"},"Password:"),l.a.createElement(b.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Enter password",required:!0}),l.a.createElement(b.a.Text,{className:"text-muted"},"Don't have an acount? ",l.a.createElement("a",{href:"/signup/"},l.a.createElement("span",{className:"login-Btn SignUp-btn"},"Click here to Sign up.")))),l.a.createElement(E.a,{to:"/",className:"login-Btn",type:"submit"},"Login")))}}]),t}(n.Component),k=a(61),y=a(95),j=a(99);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={groups:[],id:"",title:"",description:"",image:null,preview:null,is_public:!0},a.handleDelete=a.handleDelete.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleDelete",value:function(e){var t=this;console.log(this.state.id),g.a.delete("".concat("http://localhost:3000","/api/v1/").concat(e.id)).then((function(a){console.log(a),console.log(a.data);var n=Object(k.a)(t.state.groups),l=n.indexOf(e);n.splice(l,1),t.setState({groups:n})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("http://localhost:3000","/api/v1/")).then((function(t){console.log(t),e.setState({groups:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log("group list",this.props),console.log(this.state.groups),l.a.createElement("div",{className:"collect ml-5"},l.a.createElement("h2",{className:"mt-5"},"Profile info goes here!"),this.state.groups.map((function(t){return l.a.createElement(y.a,{key:t.id,style:{width:"35rem"}},l.a.createElement(j.a,{bg:"dark",text:"white",className:"mt-5 mr-5"},l.a.createElement(j.a.Img,{src:t.image,variant:"top",alt:"Uploaded content"}),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null,t.title),l.a.createElement(j.a.Text,null,t.description),l.a.createElement(j.a.Link,{href:"/GroupDetail/".concat(t.id),className:"alert-link"},"View Collection"),l.a.createElement(j.a.Link,{onClick:function(){return e.handleDelete(t)},type:"submit",className:"text-danger"},"Remove"))))})),l.a.createElement(E.a,{href:"/GroupForm",variant:"primary",className:"mt-5 mb-5"},"Create new Collection"))}}]),t}(n.Component);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={user:null,username:"",bio:"",location:"",birth_date:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("http://localhost:3000","/api/v1/profile")).then((function(t){console.log(t),e.setState({user:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N,null))}}]),t}(n.Component),S=a(98);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={beers:[],name:"",description:"",image:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("http://localhost:3000","/api/v1/beer")).then((function(t){console.log(t),e.setState({beers:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.beers.map((function(e){return l.a.createElement(S.a,{key:e.id,className:"mt-3 mr-3 beeritem"},l.a.createElement(S.a.Image,{width:120,height:120,alt:"beer",src:e.image}),l.a.createElement(S.a.Caption,{className:"text-white"},e.name))})))}}]),t}(n.Component);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={groups:null,id:"",image:null,title:null,description:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;g.a.get("".concat("http://localhost:3000","/api/v1/").concat(t)).then((function(t){e.setState((function(){return t.data}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(y.a,{key:this.state.id,className:"mt-5 col-11"},l.a.createElement(j.a,{className:"bg-dark text-white"},l.a.createElement(j.a.Img,{src:this.state.image,variant:"top",className:"blur"}),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null," ",l.a.createElement("h1",null,this.state.title," ")),l.a.createElement(j.a.Text,null,l.a.createElement("p",null,this.state.description)),l.a.createElement(j.a.Link,{href:"/GroupUpdate/".concat(this.state.id),className:"alert-link"},"Edit Collection"),l.a.createElement(w,null),l.a.createElement("div",{className:"w-100"}),l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))))}}]),t}(n.Component);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={title:"",description:"",image:null,is_public:!0},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleImage=a.handleImage.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){console.log(e.target.files);var t=e.target.files[0];this.setState({image:t})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("title",this.state.title),t.append("description",this.state.description),t.append("image",this.state.image),t.append("is_public",!1),console.log(this.state),g.a.post("".concat("http://localhost:3000","/api/v1/"),t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement(b.a,{onSubmit:this.handleSubmit,className:"justify-content-center"},l.a.createElement(b.a.Group,{controlId:"formBasicEmail"},l.a.createElement(b.a.Label,null,"Title"),l.a.createElement(b.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Name of the Collection"})),l.a.createElement(b.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(b.a.Label,null,"Description"),l.a.createElement(b.a.Control,{as:"textarea",name:"description",value:this.state.description,onChange:this.handleChange,rows:"3",placeholder:"Short description of the Collection"})),l.a.createElement(b.a.Group,{className:"mb-3"},l.a.createElement(b.a.Label,null,"Upload an Image"),l.a.createElement(b.a.Control,{type:"file",name:"image",onChange:this.handleImage})),l.a.createElement(b.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(b.a.Check,{type:"switch",id:"custom-switch",label:"Make This Collection Private"})),l.a.createElement(E.a,{variant:"primary",type:"submit"},"Submit")))}}]),t}(n.Component);g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={title:"",description:"",image:null,is_public:!0},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleImage=a.handleImage.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){console.log(e.target.files);var t=e.target.files[0];this.setState({image:t})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("title",this.state.title),t.append("description",this.state.description),t.append("image",this.state.image),t.append("is_public",!1),console.log(this.state);var a=this.props.match.params.id;g.a.patch("".concat("http://localhost:3000","/api/v1/").concat(a),t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement(b.a,{onSubmit:this.handleSubmit,className:"justify-content-center"},l.a.createElement(b.a.Group,{controlId:"formBasicEmail"},l.a.createElement(b.a.Label,null,"Title"),l.a.createElement(b.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Name of the Collection"})),l.a.createElement(b.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(b.a.Label,null,"Description"),l.a.createElement(b.a.Control,{as:"textarea",name:"description",value:this.state.description,onChange:this.handleChange,rows:"3",placeholder:"Short description of the Collection"})),l.a.createElement(b.a.Group,{className:"mb-3"},l.a.createElement(b.a.Label,null,"Upload an Image"),l.a.createElement(b.a.Control,{type:"file",name:"image",onChange:this.handleImage})),l.a.createElement(b.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(b.a.Check,{type:"switch",id:"custom-switch",label:"Make This Collection Private"})),l.a.createElement(E.a,{variant:"primary",type:"submit"},"Save Changes")))}}]),t}(n.Component),G=a(96),T=a(53),F=a(54),D=a(23);function B(){return l.a.createElement("h2",null,"Home")}function U(){g.a.post("".concat("http://localhost:3000","/rest-auth/logout/")).then((function(e){localStorage.removeItem("my-app-user"),console.log("one",e)})).catch((function(e){console.log(e)}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement((function(){return l.a.createElement(F.a,null,l.a.createElement("div",null,l.a.createElement(G.a,{bg:"dark",variant:"dark",defaultactivekey:"/home"},l.a.createElement(G.a.Brand,{href:"/"},"brewSpotter"),l.a.createElement(c.a,{className:"mr-auto"},l.a.createElement(c.a.Link,{href:"/Profile"},"Profile"),l.a.createElement(c.a.Link,{href:"/SignUp"},"Sign Up"),l.a.createElement(c.a.Link,{href:"/Login"},"Log In"),l.a.createElement(c.a.Link,{onClick:U},"Log Out")),l.a.createElement(b.a,{inline:!0},l.a.createElement(T.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(E.a,{variant:"outline-primary"},"Search"))),l.a.createElement(D.c,null,l.a.createElement(D.a,{path:"/GroupForm",component:L}),l.a.createElement(D.a,{path:"/GroupUpdate",component:I}),l.a.createElement(D.a,{path:"/GroupDetail/:id",component:x}),l.a.createElement(D.a,{path:"/Beer",component:w}),l.a.createElement(D.a,{path:"/GroupList",component:N}),l.a.createElement(D.a,{path:"/Profile",component:O}),l.a.createElement(D.a,{path:"/LogIn",component:C}),l.a.createElement(D.a,{path:"/SignUp",component:v}),l.a.createElement(D.a,{path:"/"},l.a.createElement(B,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.bf2db8d0.chunk.js.map