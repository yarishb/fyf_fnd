(this.webpackJsonpfitness=this.webpackJsonpfitness||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(32),c=a.n(o),r=a(23),i=a.n(r),s=a(29),m=a(10),u=(a(59),a(12)),d=(a(64),a(7)),h=a(5),f=a(8),g=a.n(f),E=Object(n.createContext)(null);a(81);var p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"errorBox"},l.a.createElement("div",{className:"foundErrorText"},e.errorHappend)))},v=a(18),b=a(19),_=a(21),N=a(20),O=a(34),C=a.n(O),y=a(51),k=a.n(y);C.a.initializeApp({apiKey:"AIzaSyAUMne6_lR6OYaJ4U3-EEwdfRWIp9BZa38",authDomain:"fitnessyarish.firebaseapp.com"});var j=function(e){Object(_.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={isSignedIn:!1},e.uiConfig={signInFlow:"popup",signInSuccessUrl:"/fyf_fnd/#/main",signInOptions:[C.a.auth.GoogleAuthProvider.PROVIDER_ID]},e}return Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k.a,{uiConfig:this.uiConfig,firebaseAuth:C.a.auth()}))}}]),a}(n.Component);var w=Object(u.b)((function(e){return{loginIsOpened:e.modal.login,isReg:e.modal.successfully_registred}}),(function(e){return{closed:function(){return e({type:"CLOSED_MODAL"})},chooseLogin:function(){return e({type:"LOGIN"})},chooseReg:function(){return e({type:"REGISTER"})},register_success:function(){return e({type:"REGISTRED"})},login_success:function(){return e({type:"LOGED"})}}}))((function(e){var t=Object(n.useState)(),a=Object(m.a)(t,2),o=a[0],c=a[1],r=Object(n.useState)(),u=Object(m.a)(r,2),f=u[0],v=u[1],b=Object(n.useState)(),_=Object(m.a)(b,2),N=_[0],O=_[1],C=Object(n.useState)(),y=Object(m.a)(C,2),k=y[0],w=y[1],T=Object(n.useState)(!1),I=Object(m.a)(T,2),S=I[0],L=I[1],x=Object(n.useState)(!1),F=Object(m.a)(x,2),M=F[0],A=F[1],D=Object(n.useState)(),B=Object(m.a)(D,2),Y=B[0],R=B[1],G=Object(n.useContext)(E).setUserData,H=Object(d.f)(),U=function(){var t=Object(s.a)(i.a.mark((function t(a){var n,l,c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,n={email:o,password:f,passwordCheck:N,displayName:k},t.next=5,g.a.post("https://peaceful-basin-44949.herokuapp.com/users/register",n);case 5:return t.next=7,g.a.post("https://peaceful-basin-44949.herokuapp.com/users/login",{emailLogin:o,passwordLogin:f});case 7:l=t.sent,G({token:l.data.token,user:l.data.user}),localStorage.setItem("auth-token",l.data.token),H.push("/"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),t.t0.response?(r=function(){e.foundError()},console.log(t.t0.response),c=t.t0.response.data.msg,R(c),console.log(Y),console.log(r)):(e.register_success(),A(!0));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}();Y&&setTimeout((function(){R(!1)}),2500),S&&setTimeout((function(){L(!1)}),2500);var P=Object(n.useState)(),q=Object(m.a)(P,2),V=q[0],W=q[1],J=Object(n.useState)(),z=Object(m.a)(J,2),Q=z[0],K=z[1],Z=Object(n.useState)(),X=Object(m.a)(Z,2),$=X[0],ee=X[1],te=Object(n.useContext)(E).setUserDataLogin,ae=function(){var t=Object(s.a)(i.a.mark((function t(a){var n,l,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,n={emailLogin:Q,passwordLogin:$},t.next=5,g.a.post("https://peaceful-basin-44949.herokuapp.com/users/login",n);case 5:l=t.sent,te({token:l.data.token,user:l.data.user}),localStorage.setItem("auth-token",l.data.token),H.push("/main"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),t.t0.response?(console.log(t.t0.response),o=t.t0.response.data.msg,W(o),console.log(V)):(e.login_success(),A(!0));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return V&&setTimeout((function(){W(!1)}),2500),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modalFull",onClick:function(){return e.closed()}}),l.a.createElement("div",{className:"modalCenter"},l.a.createElement("div",{className:e.loginIsOpened?"modal loginModal":"modal"},l.a.createElement("div",{className:"headerModal"},"FEEL YOUR FIT"),l.a.createElement("form",{onSubmit:e.loginIsOpened?ae:U},!e.loginIsOpened&&l.a.createElement("div",{className:"form__group field"},l.a.createElement("input",{type:"input",className:"form__field",placeholder:"Name",name:"name",id:"name1",required:!0,onChange:function(e){w(e.target.value)}}),l.a.createElement("label",{for:"name1",className:"form__label"},"Name")),e.loginIsOpened?l.a.createElement("div",{className:"form__group field"},l.a.createElement("input",{type:"email",className:"form__field",placeholder:"Name",name:"email",id:"name2",required:!0,onChange:function(e){K(e.target.value)}}),l.a.createElement("label",{for:"name2",className:"form__label"},"Email")):l.a.createElement("div",{className:"form__group field"},l.a.createElement("input",{type:"email",className:"form__field",placeholder:"Name",name:"email",id:"name2",required:!0,onChange:function(e){c(e.target.value)}}),l.a.createElement("label",{for:"name2",className:"form__label"},"Email")),e.loginIsOpened?l.a.createElement("div",{className:"form__group field"},l.a.createElement("input",{type:"password",className:"form__field",placeholder:"Name",name:"password",id:"name3",required:!0,onChange:function(e){ee(e.target.value)}}),l.a.createElement("label",{for:"name3",className:"form__label"},"Password")):l.a.createElement("div",{className:"form__group field"},l.a.createElement("input",{type:"password",className:"form__field",placeholder:"Name",name:"password",id:"name3",required:!0,onChange:function(e){v(e.target.value)}}),l.a.createElement("label",{for:"name3",className:"form__label"},"Password")),!e.loginIsOpened&&l.a.createElement("div",{className:"form__group field"},l.a.createElement("input",{type:"password",className:"form__field",placeholder:"Name",name:"password",id:"name4",required:!0,onChange:function(e){O(e.target.value)}}),l.a.createElement("label",{for:"name4",className:"form__label"},"Confirm password")),e.loginIsOpened?l.a.createElement("div",{className:"question reg",onClick:function(){return e.chooseReg()}},l.a.createElement("div",{className:"questionText"},"haven't got an account yet?"),"\xa0",l.a.createElement("div",null,"Click to Register")):l.a.createElement("div",{className:"question",onClick:function(){return e.chooseLogin()}},l.a.createElement("div",{className:"questionText"},"already have an account?"),"\xa0",l.a.createElement("div",null,"Click to Login")),l.a.createElement(j,null),e.loginIsOpened?M||S?l.a.createElement(h.b,{className:"link",to:"/main"},l.a.createElement("div",{className:"regButton login"},"Get Started")):l.a.createElement("button",{type:"submit",className:"regButton login"},"LOGIN"):S||M?l.a.createElement(h.b,{className:"link",to:"/main"},l.a.createElement("div",{className:"regButton"},"Get Started")):l.a.createElement("button",{type:"submit",className:"regButton"},"REGISTER")),e.loginIsOpened?V&&l.a.createElement(p,{errorHappend:V}):Y&&l.a.createElement(p,{errorHappend:Y}))))}));var T=Object(u.b)((function(e){return{open:e.modal.opened}}),(function(e){return{opened:function(){return e({type:"OPENED_MODAL"})},closed:function(){return e({type:"CLOSED_MODAL"})}}}))((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"fullPage"},e.open&&l.a.createElement(w,null),l.a.createElement("div",{className:"textBlock"},l.a.createElement("div",{className:"header"},"FEEL YOUR FIT"),l.a.createElement("div",{className:"subheading"},"keep your body in the best shape"),l.a.createElement("div",{className:"getStarted",onClick:function(){e.opened()}},"Get started")),l.a.createElement("div",{className:"photoBlock"})))}));a(100);var I=function(e){return l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",id:"main-navigation-toggle",class:"btn btn--close",title:"Toggle main navigation"}),l.a.createElement("label",{for:"main-navigation-toggle"},l.a.createElement("span",null)),l.a.createElement("nav",{id:"main-navigation",class:"nav-main"},l.a.createElement("ul",{class:"menu"},l.a.createElement("li",{class:"menu__item"},l.a.createElement(h.b,{class:"menu__link",to:"/main"},"Main")),l.a.createElement("li",{class:"menu__item"},l.a.createElement(h.b,{class:"menu__link",to:"/bmi"},"BMI calculator")),l.a.createElement("li",{class:"menu__item"},l.a.createElement(h.b,{class:"menu__link",to:"/todo"},"TODO List")),l.a.createElement("li",{class:"menu__item"},l.a.createElement(h.b,{class:"menu__link",to:"/calories-gender"},"Calories counter")),l.a.createElement("li",{class:"menu__item"},l.a.createElement(h.b,{class:"menu__link",to:"/calories-calendar"},"Calories calendar")),l.a.createElement("li",{class:"menu__item"},l.a.createElement(h.b,{class:"menu__link",to:"/timer"},"Timer")))))};a(101);var S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"fullMain"},window.innerWidth<700&&l.a.createElement(I,null),l.a.createElement("div",{className:"navBlock"},l.a.createElement(h.b,{to:"/todo"},l.a.createElement("div",{className:"firstItem"},l.a.createElement("div",{className:"itemText"},"Todo List"),l.a.createElement("div",{className:"itemSubText"},"Here you can leave your targets and complete them"))),l.a.createElement(h.b,{to:"/timer"},l.a.createElement("div",{className:"secondBlock "},l.a.createElement("div",{className:"itemText"},"Timer"),l.a.createElement("div",{className:"itemSubText"},"Here is the timer for your training"))),l.a.createElement(h.b,{to:"/calories-gender"},l.a.createElement("div",{className:"secondBlock third"},l.a.createElement("div",{className:"itemText"},"Calories Counter"),l.a.createElement("div",{className:"itemSubText"},"Here you can count how many calories you can eat daily to lose or get weight.")," ")),l.a.createElement(h.b,{to:"/calories-calendar"},l.a.createElement("div",{className:"fourth"},l.a.createElement("div",{className:"fourthText"},"Calories Calendar"),l.a.createElement("div",{className:"itemSubText"},"Here you can store and count food with calories you have eaten."))),l.a.createElement(h.b,{to:"/bmi"},l.a.createElement("div",{className:"thirdBlock"},l.a.createElement("div",{className:"itemText"},"BMI calculator"),l.a.createElement("div",{className:"itemSubText"},"Here you can calculate you body mass index."))))))},L=(a(102),a(103),function(e){Object(_.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={action:""},e.addTodo=function(){var t={action:e.state.action};t.action&&t.action.length>0?g.a.post("https://peaceful-basin-44949.herokuapp.com/users/todos",t).then((function(t){t.data&&(e.props.getTodos(),e.setState({action:""}))})).catch((function(e){return console.log(e)})):console.log("input field required")},e.handleChange=function(t){e.setState({action:t.target.value})},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state.action;return l.a.createElement("div",{className:"todoInputArea"},l.a.createElement("div",{className:"form__group field todo"},l.a.createElement("input",{style:{paddingTop:"17px"},value:e,onChange:this.handleChange,className:"form__field todoInput",placeholder:"Add your target"}),l.a.createElement("label",{for:"name3",className:"form__label todoInput"},"Add your target")),l.a.createElement("div",{className:"todoButton",onClick:this.addTodo},"+"))}}]),a}(n.Component)),x=(a(104),function(e){var t=e.todos,a=e.deleteTodo;return l.a.createElement(l.a.Fragment,null,t.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"todoItemsDiv"},l.a.createElement("div",{className:"todoItem",key:e._id},l.a.createElement("input",{onClick:function(){return a(e._id)},className:"checkbox",type:"checkbox"}),e.action)))})))}),F=function(e){Object(_.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={todos:[]},e.getTodos=function(){g.a.get("https://peaceful-basin-44949.herokuapp.com/users/todos").then((function(t){t.data&&e.setState({todos:t.data})})).catch((function(e){return console.log(e)}))},e.deleteTodo=function(t){g.a.delete("https://peaceful-basin-44949.herokuapp.com/users/todos/".concat(t)).then((function(t){t.data&&e.getTodos()})).catch((function(e){return console.log(e)}))},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getTodos()}},{key:"render",value:function(){var e=this.state.todos;return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null),l.a.createElement("div",{className:"fullPage"},l.a.createElement("div",null,l.a.createElement("div",{className:"inputTodo"},l.a.createElement("div",{className:"todoText"},l.a.createElement("div",{className:"headerTodo"},"FEEL YOUR FIT")),l.a.createElement("div",{className:"usageTodo"},l.a.createElement(L,{getTodos:this.getTodos}),l.a.createElement(x,{todos:e,deleteTodo:this.deleteTodo}))))))}}]),a}(n.Component),M=a(9),A=(a(105),function(e){Object(_.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={weight:null,height:null,bmi:null,message:"",optimalweight:""},n.submitMe=n.submitMe.bind(Object(M.a)(n)),n.heightchange=n.heightchange.bind(Object(M.a)(n)),n.weightchange=n.weightchange.bind(Object(M.a)(n)),n.calculateBMI=n.calculateBMI.bind(Object(M.a)(n)),n}return Object(b.a)(a,[{key:"heightchange",value:function(e){this.setState({height:e.target.value}),e.preventDefault()}},{key:"weightchange",value:function(e){this.setState({weight:e.target.value}),e.preventDefault()}},{key:"calculateBMI",value:function(){var e=this.state.height/100*this.state.height/100,t=this.state.weight/e,a=Math.round(18.5*e),n=Math.round(24.99*e),l="";t>=18.5&&t<=24.99?l="You are in a healthy weight range":t>=25&&t<=29.9?l="You are overweight":t>=30?l="You are obese":t<18.5&&(l="You are under weight"),this.setState({message:l}),this.setState({optimalweight:"Your suggested weight range is between "+a+" - "+n}),this.setState({bmi:Math.round(100*t)/100})}},{key:"submitMe",value:function(e){e.preventDefault(),this.calculateBMI()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null),l.a.createElement("div",{className:"bmiFull"},l.a.createElement("div",{className:"App-header"},l.a.createElement("div",{className:"hederLogo"},"FEEL YOUR FIT"),l.a.createElement("div",{className:"headerSubHeading"},"BMI calculator")),l.a.createElement("form",{onSubmit:this.submitMe},l.a.createElement("div",{className:"inputArea"},l.a.createElement("div",{className:"form__group field bmi"},l.a.createElement("input",{type:"text",className:"form__field bmiLabel",value:this.state.height,onChange:this.heightchange,id:"height",placeholder:"Your height",name:"height"}),l.a.createElement("label",{for:"height",className:"form__label bmiLabel"},"Your height")),l.a.createElement("div",{className:"form__group field bmi"},l.a.createElement("input",{type:"text",className:"form__field bmiLabel",placeholder:"Your weight",value:this.state.weight,onChange:this.weightchange,name:"weight",id:"weight"}),l.a.createElement("label",{for:"weight",className:"form__label bmiLabel"},"Your weight"))),l.a.createElement("button",{className:"submitButtonBMI bmiButton",type:"submit",value:"Submit"},"Count")),l.a.createElement("div",{className:"message"},l.a.createElement("label",null,this.state.checked,l.a.createElement("div",{className:"yourBmi"},this.state.bmi&&this.state.bmi+" - Your BMI")),l.a.createElement("label",null,this.state.message,"."),l.a.createElement("label",null,""+this.state.optimalweight))),l.a.createElement("div",{className:"photoBmi"}))}}]),a}(n.Component));a(106);var D=Object(u.b)((function(e){return{}}),(function(e){return{female_choose:function(){return e({type:"FEMALE_CHOOSEN"})},male_choose:function(){return e({type:"MALE_CHOOSEN"})}}}))((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"genderFull"},l.a.createElement("div",{className:"photoGender"}),l.a.createElement("div",{className:"mainBlockGender"},l.a.createElement("div",{className:"genderHeader"},"FEEL YOUR FIT"),l.a.createElement("div",{className:"chooseQuestionGender"},"choose your gender"),l.a.createElement("div",{className:"chooseButtons"},l.a.createElement(h.b,{className:"link",to:"/calories-wish"},l.a.createElement("div",{className:"femaleChoose",onClick:function(){return e.female_choose()}},"female")),l.a.createElement(h.b,{className:"link",to:"/calories-wish"},l.a.createElement("div",{className:"maleChoose",onClick:function(){return e.male_choose()}},"male"))))))}));a(107);var B=Object(u.b)((function(e){return{}}),(function(e){return{lose_weight:function(){return e({type:"LOSE_WEIGHT"})},get_weight:function(){return e({type:"GET_WEIGHT"})}}}))((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"wishesPhoto"}),l.a.createElement("div",{className:"fullWishesPage"},l.a.createElement("div",{className:"wishesHeader"},"FEEL YOUR FIT"),l.a.createElement("div",{className:"wishTarget"},"choose your target"),l.a.createElement("div",{className:"wishOptions"},l.a.createElement(h.b,{className:"link",to:"/calories-activity"},l.a.createElement("div",{onClick:function(){return e.lose_weight()},className:"wishButton"},"lose weight")),l.a.createElement(h.b,{className:"link",to:"/calories-activity"},l.a.createElement("div",{onClick:function(){return e.get_weight()},className:"wishButton"},"get weight")))))})),Y=(a(108),function(e){Object(_.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).getCalories=function(e){g.a.get("http://localhost:5000/users/calories").then((function(e){if(e.data){for(var t in console.log(e.data),e.data){console.log(e.data[t].caloriesLeft);var a=e.data[t].foodCalories;n.setState({foodCalories:a}),n.setState({ateCalories:e.data[t].caloriesLeft})}n.setState({ateCalories:n.state.ateCalories-n.state.foodCalories}),n.setState({data:e.data})}})).catch((function(e){return console.log(e)}))},n.state={weight:null,height:null,age:null,calories:null,food:"",foodCalories:null,data:[],ateCalories:null,message:!1},n.submitMe=n.submitMe.bind(Object(M.a)(n)),n.agechange=n.agechange.bind(Object(M.a)(n)),n.heightchange=n.heightchange.bind(Object(M.a)(n)),n.weightchange=n.weightchange.bind(Object(M.a)(n)),n.calculateCalories=n.calculateCalories.bind(Object(M.a)(n)),n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getCalories()}},{key:"heightchange",value:function(e){this.setState({height:e.target.value}),e.preventDefault()}},{key:"weightchange",value:function(e){this.setState({weight:e.target.value}),e.preventDefault()}},{key:"agechange",value:function(e){this.setState({age:e.target.value}),e.preventDefault()}},{key:"submitMe",value:function(e){e.preventDefault(),this.calculateCalories()}},{key:"calculateCalories",value:function(){var e=9.99*this.state.weight+6.25*this.state.height-4.92*this.state.age;!0===this.props.female?e-=5:!0===this.props.male&&(e-=156),!0===this.props.no_activity?e*=1.2:!0===this.props.low_activity?e*=1.375:!0===this.props.mid_activity?e*=1.55:!0===this.props.hight_activity&&(e*=1.725),!0===this.props.lose_weight?e-=200:!0===this.props.get_weight&&(e+=300),this.setState({calories:Math.round(100*e)/100}),this.setState({message:!0})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null),l.a.createElement("div",{className:"fullPageCalories"},l.a.createElement("div",{className:"caloriesCalculateImg"}),l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"headerCalories"},"FEEL YOUR FIT"),l.a.createElement("div",{className:"subtitle"},"average daily calories counter"),l.a.createElement("form",{className:"leftForm",onSubmit:this.submitMe},l.a.createElement("div",{className:"form__group field bmi"},l.a.createElement("input",{type:"text",className:"form__field bmiLabel",id:"age",value:this.state.age,onChange:this.agechange,placeholder:"Your age",name:"age"}),l.a.createElement("label",{for:"age",className:"form__label bmiLabel"},"Your age:")),l.a.createElement("button",{className:"submitButtonBMI",type:"submit",value:"Submit"},"Count"),l.a.createElement("div",{className:"form__group field bmi"},l.a.createElement("input",{type:"text",className:"form__field bmiLabel",id:"height",value:this.state.height,onChange:this.heightchange,placeholder:"Your height",name:"height"}),l.a.createElement("label",{for:"height",className:"form__label bmiLabel"},"Your height:")),l.a.createElement("div",{className:"form__group field bmi"},l.a.createElement("input",{type:"text",className:"form__field bmiLabel",placeholder:"Your weight",value:this.state.weight,onChange:this.weightchange,name:"weight",id:"weight"}),l.a.createElement("label",{for:"weight",className:"form__label bmiLabel"},"Your weight:"))),l.a.createElement("div",{className:this.state.message?"messageText":"none"},!0===this.props.lose_weight?"In order to lose weight you have to eat ":!0===this.props.get_weight&&"In order to get weight you have to eat ",null===this.state.calories?"":Math.round(100*this.state.calories)/100+" "," calories daily"))))}}]),a}(n.Component));var R=Object(u.b)((function(e){return{female:e.calories.female_choosen,male:e.calories.male_choosen,lose_weight:e.calories.lose_weight,get_weight:e.calories.get_weight,no_activity:e.calories.no_activity,low_activity:e.calories.low_activity,mid_activity:e.calories.mid_activity,hight_activity:e.calories.hight_activity}}))(Y);a(109);var G=Object(u.b)((function(e){return{}}),(function(e){return{no_activity:function(){return e({type:"NO_ACTIVITY"})},low_activity:function(){return e({type:"LOW_ACTIVITY"})},mid_activity:function(){return e({type:"MID_ACTIVITY"})},hight_activity:function(){return e({type:"HIGHT_ACTIVITY"})}}}))((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"activityPhoto"}),l.a.createElement("div",{className:"fullActivityText"},l.a.createElement("div",{className:"genderHeader activityHeader"},"FEEL YOUR FIT"),l.a.createElement("div",{className:"chooseQuestionGender activity"},"choose your activity"),l.a.createElement("div",{className:"activityButtons"},l.a.createElement("div",{className:"pair"},l.a.createElement(h.b,{className:"link",to:"/calories-counter"},l.a.createElement("div",{onClick:function(){return e.no_activity()},className:"button small"},"no activity")),l.a.createElement(h.b,{className:"link",to:"/calories-counter"},l.a.createElement("div",{onClick:function(){return e.low_activity()},className:"button change"},"1-2 days per week"))),l.a.createElement("div",{className:"pair"},l.a.createElement(h.b,{className:"link",to:"/calories-counter"},l.a.createElement("div",{onClick:function(){return e.mid_activity()},className:"button"},"3-5 days per week")),l.a.createElement(h.b,{className:"link",to:"/calories-counter"},l.a.createElement("div",{onClick:function(){return e.hight_activity()},className:"button small"},"every day"))))))})),H=(a(110),a(111),function(e){var t=e.data;return l.a.createElement("div",null,t.map((function(e){return l.a.createElement("div",{className:"element"},l.a.createElement("div",{className:"foodFound"},l.a.createElement("div",{className:"explain"},"food:"),l.a.createElement("div",null,e.food),l.a.createElement("div",{className:"explain explainCalories"},"calories:"),l.a.createElement("div",null,e.foodCalories)))})))}),U=function(e){Object(_.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).getCalories=function(e){g.a.get("https://peaceful-basin-44949.herokuapp.com/users/calories").then((function(e){if(e.data){for(var t in console.log(e.data),e.data){console.log(e.data[t].caloriesLeft);var a=e.data[t].foodCalories;n.setState({foodCalories:a}),n.setState({ateCalories:e.data[t].caloriesLeft})}n.setState({ateCalories:n.state.ateCalories-n.state.foodCalories}),n.setState({data:e.data})}})).catch((function(e){return console.log(e)}))},n.addAteFood=function(){var e={food:n.state.food,foodCalories:n.state.foodCalories,caloriesLeft:n.state.ateCalories};e.foodCalories?g.a.post("https://peaceful-basin-44949.herokuapp.com/users/calories",e).then((function(e){e.data&&n.getCalories()})).catch((function(e){return console.log(e)})):console.log("input field required")},n.deleteElemets=function(){g.a.delete("https://peaceful-basin-44949.herokuapp.com/users/calories/delete").then((function(e){e.data&&(n.setState({ateCalories:null+n.state.foodCalories}),n.getCalories())})).catch((function(e){return console.log(e)}))},n.state={food:"",foodCalories:null,data:[],ateCalories:null},n.foodCaloriesChange=n.foodCaloriesChange.bind(Object(M.a)(n)),n.ateCaloriesChange=n.ateCaloriesChange.bind(Object(M.a)(n)),n.foodChange=n.foodChange.bind(Object(M.a)(n)),n.submit=n.submit.bind(Object(M.a)(n)),n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getCalories()}},{key:"foodChange",value:function(e){this.setState({food:e.target.value}),e.preventDefault()}},{key:"foodCaloriesChange",value:function(e){this.setState({foodCalories:e.target.value})}},{key:"ateCaloriesChange",value:function(e){this.setState({ateCalories:e.target.value}),e.preventDefault()}},{key:"submit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null),l.a.createElement("div",{className:"right"},l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("div",{className:"rightSubtitle"},"calories calendar"),l.a.createElement("div",{className:"block"},l.a.createElement("div",{className:"form__group field bmi caloriesCalendar"},l.a.createElement("input",{type:"text",className:"form__field bmiLabel rightCaloriesCalendar",placeholder:"Food",onChange:this.ateCaloriesChange,name:"ateCalories",id:"ateCalories"}),l.a.createElement("label",{for:"ateCalories",className:"form__label bmiLabel rightCaloriesCalendarInput"},"Calories you have to eat:")),l.a.createElement("div",{className:"calloriesToEat"},this.state.ateCalories),l.a.createElement("div",{className:"addAteBlock"},l.a.createElement("div",{className:"form__group field bmi caloriesCalendarAdd"},l.a.createElement("input",{type:"text",className:"form__field bmiLabel",placeholder:"Food",value:this.state.food,onChange:this.foodChange,name:"food",id:"food"}),l.a.createElement("label",{for:"food",className:"form__label bmiLabel"},"Food you have eaten:")),l.a.createElement("div",{className:"form__group field bmi caloriesCalendarAdd"},l.a.createElement("input",{type:"text",className:"form__field bmiLabel",placeholder:"Calories",onChange:this.foodCaloriesChange,name:"foodCalories",id:"foodCalories"}),l.a.createElement("label",{for:"foodCalories",className:"form__label bmiLabel"},"Calories in this food:")),l.a.createElement("button",{className:"addToCaloriesCalendar add",onClick:this.addAteFood,type:"submit",value:"Submit"},"Add"),l.a.createElement("button",{className:"addToCaloriesCalendar removeAll",onClick:this.deleteElemets},"Remove all")))),l.a.createElement("div",{className:"dataAboutEaten"},l.a.createElement(H,{data:this.state.data}))),l.a.createElement("div",{className:"calendarImg"}))}}]),a}(n.Component);a(112);var P=function(e){var t=Object(n.useState)(60),a=Object(m.a)(t,2),o=a[0],c=a[1],r=Object(n.useState)(!0),i=Object(m.a)(r,2),s=i[0],u=i[1],d=Object(n.useState)(!1),h=Object(m.a)(d,2),f=h[0],g=h[1];return s||(f?f&&setTimeout((function(){c(o+1)}),1e3):-1!==o&&setTimeout((function(){c(o-1)}),1e3)),l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null),l.a.createElement("div",{className:"timerFullPage"}),l.a.createElement("div",{className:"rightSide"},l.a.createElement("div",{className:"decoration"}),l.a.createElement("div",{className:"timerHeader"},"FEEL YOUR FIT",l.a.createElement("div",{className:"timerSubtitle"},"timer"))),l.a.createElement("div",{className:"buttonsTimer"},l.a.createElement("div",{className:"buttonTimer",onClick:function(){g(!0),u(!1)}},"RISING TIMER"),l.a.createElement("div",{className:"buttonTimer",onClick:function(){g(!1)}},"COUNTDOWN TIMER")),l.a.createElement("div",{className:"timer"},l.a.createElement("div",{className:"timeAddBlock"},l.a.createElement("button",{className:s?"addTime":"none",onClick:function(){return c(o+1)}},"+"),l.a.createElement("button",{className:s?"addTime less":"none",onClick:function(){return c(o-1)}},"-")),l.a.createElement("div",{className:s?"timerUp":"none"},o+1),o,l.a.createElement("div",{className:s?"timerDown":"none"},o-1),l.a.createElement("div",{onClick:function(){return u(!s)},className:"timerStart"},s?"start":"stop")))};var q=function(){var e=Object(n.useState)({token:void 0,user:void 0}),t=Object(m.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),t=""),e.next=4,g.a.post("https://peaceful-basin-44949.herokuapp.com//users/tokenIsValid",null,{headers:{"x-auth-token":t}});case 4:if(!e.sent.data){e.next=10;break}return e.next=8,g.a.get("https://peaceful-basin-44949.herokuapp.com//users/",{headers:{"x-auth-token":t}});case 8:a=e.sent,o({token:t,user:a.data});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement(h.a,null,l.a.createElement(E.Provider,{value:a},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:T}),l.a.createElement(d.a,{path:"/main",component:S}),l.a.createElement(d.a,{path:"/todo",component:F}),l.a.createElement(d.a,{path:"/bmi",component:A}),l.a.createElement(d.a,{path:"/calories-gender",component:D}),l.a.createElement(d.a,{path:"/calories-wish",component:B}),l.a.createElement(d.a,{path:"/calories-activity",component:G}),l.a.createElement(d.a,{path:"/calories-counter",component:R}),l.a.createElement(d.a,{path:"/calories-calendar",component:U}),l.a.createElement(d.a,{path:"/timer",component:P}))))},V=a(4),W={opened:!1,login:!1,registred_successfully:!0,loged_successfully:!0},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPENED_MODAL":return Object(V.a)(Object(V.a)({},e),{},{opened:!0});case"CLOSED_MODAL":return Object(V.a)(Object(V.a)({},e),{},{opened:!1});case"LOGIN":return Object(V.a)(Object(V.a)({},e),{},{login:!0});case"REGISTER":return Object(V.a)(Object(V.a)({},e),{},{login:!1});case"REGISTRED":return Object(V.a)(Object(V.a)({},e),{},{registred_successfully:!0});case"LOGED":return Object(V.a)(Object(V.a)({},e),{},{loged_successfully:!0});default:return e}},z={female_choosen:!1,male_choosen:!1,lose_weight:!1,get_weight:!1,no_activity:!1,low_activity:!1,mid_activity:!1,hight_activity:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FEMALE_CHOOSEN":return Object(V.a)(Object(V.a)({},e),{},{female_choosen:!0});case"MALE_CHOOSEN":return Object(V.a)(Object(V.a)({},e),{},{male_choosen:!0});case"LOSE_WEIGHT":return Object(V.a)(Object(V.a)({},e),{},{lose_weight:!0});case"GET_WEIGHT":return Object(V.a)(Object(V.a)({},e),{},{get_weight:!0});case"NO_ACTIVITY":return Object(V.a)(Object(V.a)({},e),{},{no_activity:!0});case"LOW_ACTIVITY":return Object(V.a)(Object(V.a)({},e),{},{low_activity:!0});case"MID_ACTIVITY":return Object(V.a)(Object(V.a)({},e),{},{mid_activity:!0});case"HIGHT_ACTIVITY":return Object(V.a)(Object(V.a)({},e),{},{hight_activity:!0});default:return e}},K=a(28),Z=Object(K.b)({modal:J,calories:Q}),X=Object(K.c)(Z);c.a.render(l.a.createElement(u.a,{store:X},l.a.createElement(q,null)),document.getElementById("root"))},53:function(e,t,a){e.exports=a(113)},59:function(e,t,a){},64:function(e,t,a){},81:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.f7549913.chunk.js.map