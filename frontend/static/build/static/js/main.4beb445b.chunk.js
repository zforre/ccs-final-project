(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{101:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(30),o=t.n(r),c=(t(76),t(77),t(33)),s=t(21),i=t(8),m=t(9),u=t(11),h=t(10),d=t(7),p=t(12),b=t(5),f=t.n(b),g=t(108),E=t(61);t(20);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var v=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={username:"",email:"",password1:"",password2:""},t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.handleChange=t.handleChange.bind(Object(d.a)(t)),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),f.a.post("".concat("https://ccs-final-project-zforre.herokuapp.com","/rest-auth/registration/"),this.state).then((function(e){console.log("two",e),localStorage.setItem("my-app-user",JSON.stringify(e.data)),a.props.history.push("/profilesetup")})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(g.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},l.a.createElement("span",null,"Sign Up")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Username:"),l.a.createElement(g.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Enter username",required:!0})),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Email:"),l.a.createElement(g.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter email",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Password:"),l.a.createElement(g.a.Control,{type:"password",name:"password1",value:this.state.password1,onChange:this.handleChange,placeholder:"Enter password",required:!0})),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"}," Confirm Password:"),l.a.createElement(g.a.Control,{type:"password",name:"password2",value:this.state.password,onChange:this.handleChange,placeholder:"Enter password",required:!0})),l.a.createElement(E.a,{className:"login-Btn",type:"submit"},"Sign Up")))}}]),a}(n.Component),y=t(103),C=t(110),k=t(106);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var j=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={beer_name:"",beer_label:"",beer_label_hd:"",beer_abv:"",beer_ibu:"",beer_style:"",beer_description:"",brewery_name:"",brewery_city:"",brewery_state:"",url:"",groups:[]},t.handleSearch=t.handleSearch.bind(Object(d.a)(t)),t.addBeer=t.addBeer.bind(Object(d.a)(t)),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.handleSearch(),f.a.get("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/")).then((function(a){console.log(a),e.setState({groups:a.data})})).catch((function(e){console.log(e)}))}},{key:"handleSearch",value:function(){var e=this,a=Math.floor(2e3*Math.random())+1;f.a.get("https://api.untappd.com/v4/beer/info/".concat(a,"?client_id=").concat("02706253A36A4FBB44C9CB48DDEF5AEE3046D1ED","&client_secret=").concat("3F9F680A71BDE093C3D8BE1E30B463C8E5FACE5E")).then((function(a){console.log(a),e.setState(a.data.response.beer),e.setState(a.data.response.beer.brewery),e.setState(a.data.response.beer.brewery.contact),e.setState(a.data.response.beer.brewery.location)})).catch((function(e){console.log(e)}))}},{key:"addBeer",value:function(e){console.log(e);var a={beer_label:this.state.beer_label,beer_name:this.state.beer_name,beer_description:this.state.beer_description,beer_abv:this.state.beer_abv,beer_ibu:this.state.beer_ibu,brewery_name:this.state.brewery_name,brewery_city:this.state.brewery_city,brewery_state:this.state.brewery_state};f.a.patch("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/testing/").concat(e,"/"),a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(y.a,{className:"w-50 mt-5"},l.a.createElement(C.a,{className:"custom-card text-white"},l.a.createElement(C.a.Img,{src:this.state.beer_label_hd||this.state.beer_label,variant:"top",className:""}),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null," ",l.a.createElement("h1",null,this.state.beer_name)),l.a.createElement(C.a.Text,null,this.state.beer_style),l.a.createElement(C.a.Text,{className:"text-muted"},"ABV: ",this.state.beer_abv," IBU: ",this.state.beer_ibu),l.a.createElement(C.a.Text,null,this.state.beer_description),l.a.createElement(C.a.Link,{href:this.state.url},this.state.brewery_name),l.a.createElement(C.a.Text,null,this.state.brewery_city,", ",this.state.brewery_state),l.a.createElement("div",{className:"w-100"}),this.state.groups.map((function(a){return l.a.createElement(k.a,{key:a.id},l.a.createElement(k.a.Toggle,{variant:"success",id:"dropdown-basic"},"Add to a Collection"),l.a.createElement(k.a.Menu,null,l.a.createElement(k.a.Item,{onClick:function(){return e.addBeer(a.id)}},a.title)))})),l.a.createElement("div",{className:"w-100"}),l.a.createElement(E.a,{onClick:this.handleSearch,className:"mt-3 outline"},"New Beer")))))}}]),a}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var N=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={user:"",avatar:null,username:"",bio:"",location:"",birthdate:""},t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.handleImage=t.handleImage.bind(Object(d.a)(t)),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=new FormData;a.append("avatar",this.state.avatar),a.append("bio",this.state.bio),a.append("location",this.state.location),a.append("birthdate",this.state.birthdate),console.log(this.state),f.a.post("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/profile/"),a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){console.log(e.target.files);var a=e.target.files[0];this.setState({avatar:a})}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(g.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},l.a.createElement("span",null,"Setup Your Profile")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Bio:"),l.a.createElement(g.a.Control,{as:"textarea",rows:"3",type:"text",name:"bio",value:this.state.bio,onChange:this.handleChange,placeholder:"Tell us about yourself.",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"This will be displayed on your profile page.")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Location:"),l.a.createElement(g.a.Control,{type:"text",name:"location",value:this.state.location,onChange:this.handleChange,placeholder:"Greenville, SC",required:!0})),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"}," Birth date:"),l.a.createElement(g.a.Control,{type:"date",name:"birthdate",value:this.state.birthdate,onChange:this.handleChange,placeholder:"mm/dd/yyyy",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"This will not be displayed on your profile page.")),l.a.createElement(g.a.Group,{className:"mb-5"},l.a.createElement(g.a.Label,null,"Upload an Avatar Image"),l.a.createElement(g.a.Control,{type:"file",name:"avatar",onChange:this.handleImage})),l.a.createElement(E.a,{className:"login-Btn",type:"submit"},"Create Profile")))}}]),a}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var w=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={user:"",avatar:null,username:"",bio:"",location:"",birthdate:""},t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.handleImage=t.handleImage.bind(Object(d.a)(t)),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=new FormData;a.append("avatar",this.state.avatar),a.append("bio",this.state.bio),a.append("location",this.state.location),a.append("birthdate",this.state.birthdate),console.log(this.state),f.a.patch("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/profile/user/"),a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){console.log(e.target.files);var a=e.target.files[0];this.setState({avatar:a})}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(g.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},l.a.createElement("span",null,"Edit Your Profile")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Bio:"),l.a.createElement(g.a.Control,{as:"textarea",rows:"3",type:"text",name:"bio",value:this.state.bio,onChange:this.handleChange,placeholder:"Tell us about yourself.",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"This will be displayed on your profile page.")),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Location:"),l.a.createElement(g.a.Control,{type:"text",name:"location",value:this.state.location,onChange:this.handleChange,placeholder:"Greenville, SC",required:!0})),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"}," Birth date:"),l.a.createElement(g.a.Control,{type:"date",name:"birthdate",value:this.state.birthdate,onChange:this.handleChange,placeholder:"mm/dd/yyyy",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"This will not be displayed on your profile page.")),l.a.createElement(g.a.Group,{className:"mb-5"},l.a.createElement(g.a.Label,null,"Upload an Avatar Image"),l.a.createElement(g.a.Control,{type:"file",name:"avatar",onChange:this.handleImage})),l.a.createElement(E.a,{className:"login-Btn",type:"submit"},"Save Changes")))}}]),a}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var S=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={username:"",email:"",password:""},t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.handleChange=t.handleChange.bind(Object(d.a)(t)),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),console.log("The link was clicked.")}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),f.a.post("".concat("https://ccs-final-project-zforre.herokuapp.com","/rest-auth/login/"),this.state).then((function(e){console.log("one",e),localStorage.setItem("my-app-user",JSON.stringify(e.data)),a.props.history.push("/profile/user")})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center create-profile-container mt-5"},l.a.createElement(g.a,{className:"profile-form",onSubmit:this.handleSubmit},l.a.createElement("h2",{className:"form-title d-flex justify-content-center"},"Login"),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{className:"Form-label"},"Username:"),l.a.createElement(g.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,placeholder:"Enter username",required:!0})),l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(g.a.Label,{className:"Form-label"},"Email:"),l.a.createElement(g.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Enter email",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(g.a.Group,{controlId:"formBasicPassword"},l.a.createElement(g.a.Label,{className:"Form-label"},"Password:"),l.a.createElement(g.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Enter password",required:!0}),l.a.createElement(g.a.Text,{className:"text-muted"},"Don't have an acount? ",l.a.createElement("a",{href:"/signup/"},l.a.createElement("span",{className:"login-Btn SignUp-btn"},"Click here to Sign up.")))),l.a.createElement(E.a,{className:"login-Btn",type:"submit"},"Login")))}}]),a}(n.Component),x=t(70),O=t(104),_=t(105);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var T=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={groups:[],id:"",title:"",description:"",image:null,preview:null,is_public:!0},t.handleDelete=t.handleDelete.bind(Object(d.a)(t)),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"handleDelete",value:function(e){var a=this;console.log(this.state.id),f.a.delete("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/").concat(e.id)).then((function(t){var n=Object(x.a)(a.state.groups),l=n.indexOf(e);n.splice(l,1),a.setState({groups:n})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/")).then((function(a){console.log(a),e.setState({groups:a.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement(O.a,null,l.a.createElement("h3",{className:"mt-5"},"My Collection's"),l.a.createElement("div",{className:"collect ml-5 row"},this.state.groups.map((function(a){return l.a.createElement(y.a,{key:a.id,style:{width:"35rem"}},l.a.createElement(C.a,{bg:"dark",text:"white",className:"mt-5 mr-5 col-sm-12 col-6"},l.a.createElement(_.a,null,l.a.createElement(C.a.Img,{src:a.image,variant:"top",alt:"Uploaded content"})),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null,a.title),l.a.createElement(C.a.Text,null,a.description),l.a.createElement(C.a.Link,{href:"/GroupDetail/".concat(a.id),className:"alert-link"},"View Collection"),l.a.createElement(C.a.Link,{onClick:function(){return e.handleDelete(a)},type:"submit",className:"text-danger"},"Remove"))))}))),l.a.createElement("div",{className:"row"},l.a.createElement(E.a,{href:"/GroupForm",variant:"primary",className:"mt-5 mb-5"},"Create new Collection")))}}]),a}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var I=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={profiles:[],avatatar:"",user:"",username:"",bio:"",location:"",birth_date:""},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/profile/user/")).then((function(a){console.log(a.data),e.setState(a.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement(C.a,{bg:"dark",text:"white",className:"mt-5 ml-5 col-sm-12 col-md-3",key:this.state.user,style:{width:"18rem"}},l.a.createElement(C.a.Img,{variant:"top",src:this.state.avatar}),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null,this.state.user.username),l.a.createElement(C.a.Text,null,this.state.bio),l.a.createElement(C.a.Text,{className:"text-muted"},this.state.location),l.a.createElement(C.a.Link,{href:"/profileedit"},"Edit Profile")))),l.a.createElement(T,null))}}]),a}(n.Component),L=t(109);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var F=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={beers:[],bid:"",beer_name:"",beer_description:"",beer_label:null,beer_abv:"",beer_ibu:"",beer_style:"",brewery_name:"",brewery_city:"",brewery_state:""},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/").concat(this.props.group,"/")).then((function(a){console.log(a.data.beers),e.setState({beers:a.data.beers})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log(this.state.beers),l.a.createElement("div",null,this.state.beers.map((function(e){return l.a.createElement(L.a,{key:e.beer_name,className:"mt-3 mr-3 beeritem"},l.a.createElement(L.a.Image,{width:120,height:120,alt:"beer",src:e.beer_label}),l.a.createElement(L.a.Caption,{className:"text-white"},e.beer_name))})))}}]),a}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var B=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={groups:null,id:"",image:null,title:null,description:null},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props);var a=this.props.match.params.id;f.a.get("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/").concat(a)).then((function(a){console.log(a.data),e.setState((function(){return a.data}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(y.a,{key:this.state.id,className:"mt-5 col-11"},l.a.createElement(C.a,{className:"bg-dark text-white"},l.a.createElement(C.a.Img,{src:this.state.image,variant:"top",className:"blur"}),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null," ",l.a.createElement("h1",null,this.state.title," ")),l.a.createElement(C.a.Text,null,this.state.description),l.a.createElement(C.a.Link,{href:"/GroupUpdate/".concat(this.state.id),className:"alert-link"},"Edit Collection"),l.a.createElement(F,{group:this.props.match.params.id}),l.a.createElement("div",{className:"w-100"}),l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))))}}]),a}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var D=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={title:"",description:"",image:null,is_public:!0},t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.handleImage=t.handleImage.bind(Object(d.a)(t)),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){console.log(e.target.files);var a=e.target.files[0];this.setState({image:a})}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=new FormData;a.append("title",this.state.title),a.append("description",this.state.description),a.append("image",this.state.image),a.append("is_public",!1),console.log(this.state),f.a.post("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/"),a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement(g.a,{onSubmit:this.handleSubmit,className:"justify-content-center"},l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(g.a.Label,null,"Title"),l.a.createElement(g.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Name of the Collection"})),l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(g.a.Label,null,"Description"),l.a.createElement(g.a.Control,{as:"textarea",name:"description",value:this.state.description,onChange:this.handleChange,rows:"3",placeholder:"Short description of the Collection"})),l.a.createElement(g.a.Group,{className:"mb-3"},l.a.createElement(g.a.Label,null,"Upload an Image"),l.a.createElement(g.a.Control,{type:"file",name:"image",onChange:this.handleImage})),l.a.createElement(g.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(g.a.Check,{type:"switch",id:"custom-switch",label:"Make This Collection Private"})),l.a.createElement(E.a,{variant:"primary",type:"submit"},"Submit")))}}]),a}(n.Component);f.a.defaults.xsrfCookieName="csrftoken",f.a.defaults.xsrfHeaderName="X-CSRFToken";var G=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={id:"",title:"",description:"",image:null,is_public:!0},t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.handleImage=t.handleImage.bind(Object(d.a)(t)),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){console.log(e.target.files);var a=e.target.files[0];this.setState({image:a})}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=new FormData;a.append("title",this.state.title),a.append("description",this.state.description),a.append("image",this.state.image),a.append("is_public",!1),console.log(this.state);var t=this.props.match.params.id;f.a.put("".concat("https://ccs-final-project-zforre.herokuapp.com","/api/v1/").concat(t,"/"),a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"d-flex justify-content-center mt-5"},l.a.createElement(g.a,{onSubmit:this.handleSubmit,className:"justify-content-center"},l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(g.a.Label,null,"Title"),l.a.createElement(g.a.Control,{type:"text",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Name of the Collection"})),l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(g.a.Label,null,"Description"),l.a.createElement(g.a.Control,{as:"textarea",name:"description",value:this.state.description,onChange:this.handleChange,rows:"3",placeholder:"Short description of the Collection"})),l.a.createElement(g.a.Group,{className:"mb-3"},l.a.createElement(g.a.Label,null,"Upload an Image"),l.a.createElement(g.a.Control,{type:"file",name:"image",onChange:this.handleImage})),l.a.createElement(g.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(g.a.Check,{type:"switch",id:"custom-switch",label:"Make This Collection Private"})),l.a.createElement(E.a,{variant:"primary",type:"submit"},"Save Changes")))}}]),a}(n.Component),z=t(107),q=t(60),R=t(67),U=t(27);function H(){f.a.post("".concat("https://ccs-final-project-zforre.herokuapp.com","/rest-auth/logout/")).then((function(e){localStorage.removeItem("my-app-user"),console.log("one",e)})).catch((function(e){console.log(e)}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement((function(){return l.a.createElement(R.a,null,l.a.createElement("div",null,l.a.createElement(z.a,{bg:"dark",variant:"dark",defaultactivekey:"/"},l.a.createElement(z.a.Brand,{href:"/"},"brewSpotter"),l.a.createElement(c.a,{className:"mr-auto"},l.a.createElement(c.a.Link,{href:"/profile/user"},"Profile"),l.a.createElement(c.a.Link,{href:"/signup"},"Create an Account"),l.a.createElement(c.a.Link,{href:"/login"},"Log In"),l.a.createElement(c.a.Link,{onClick:H,href:"/login"},"Log Out")),l.a.createElement(g.a,{inline:!0},l.a.createElement(q.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(E.a,{variant:"outline-primary"},"Search"))),l.a.createElement(U.c,null,l.a.createElement(U.a,{path:"/groupform",component:D}),l.a.createElement(U.a,{path:"/groupupdate/:id",component:G}),l.a.createElement(U.a,{path:"/groupdetail/:id",component:B}),l.a.createElement(U.a,{path:"/grouplist",component:T}),l.a.createElement(U.a,{path:"/profile/:user",component:I}),l.a.createElement(U.a,{path:"/login",component:S}),l.a.createElement(U.a,{path:"/signup",component:v}),l.a.createElement(U.a,{path:"/profilesetup",component:N}),l.a.createElement(U.a,{path:"/profileedit",component:w}),l.a.createElement(U.a,{path:"/",exact:!0,component:j}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,a,t){},71:function(e,a,t){e.exports=t(101)},77:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.4beb445b.chunk.js.map