(this.webpackJsonpEventPlanner=this.webpackJsonpEventPlanner||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),s=n(40),r=n.n(s),i=(n(65),n(41)),o=n(51),u=n(5),j=n(14),b=n(7),l=n(1),d=n(0),O=n.n(d),v=n(13),p="events/setUser",h="events/setEvents",m="events/clearEvents",f="events/addEvent",x="events/moveToArchive",_="events/moveToEvents",g="events/deleteFromArchive",N="events/updateEventData",k="events/addNewTask",w="events/setIsDoneTask",y="events/deleteTask",S="events/addNewGuest",I="events/deleteGuest",z=function(e){return{type:p,payload:e}},C=function(e){return{type:x,payload:e}},D=function(e,t,n){return{type:N,payload:{id:e,variableName:t,value:n}}},E=function(e,t,n){return{type:w,payload:{eventId:e,taskId:t,task:n}}},A=function(e,t){return{type:y,payload:{eventId:e,taskId:t}}},F=function(e,t){return{type:I,payload:{eventId:e,guestId:t}}},L={user:"",events:[],archive:[]},P=function(){var e=Object(l.a)(O.a.mark((function e(t,n){var a,c,s,r,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(v.g)(),c=n().user,e.next=4,Object(v.f)(Object(v.c)(a,"users",c,"events"));case 4:return s=e.sent,e.next=7,Object(v.f)(Object(v.c)(a,"users",c,"archive"));case 7:r=e.sent,i=[],s.forEach((function(e){return i.push(Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id,tasks:e.data().tasks.sort((function(e,t){return e.id-t.id}))}))})),o=[],r.forEach((function(e){return o.push(Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id,tasks:e.data().tasks.sort((function(e,t){return e.id-t.id}))}))})),t({type:h,payload:{allEventsArray:i,allArchiveArray:o}});case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=n(52),W=Object(i.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case p:return Object(b.a)(Object(b.a)({},e),{},{user:a});case h:return Object(b.a)(Object(b.a)({},e),{},{events:a.allEventsArray.sort((function(e,t){return e.id-t.id})),archive:a.allArchiveArray.sort((function(e,t){return e.id-t.id}))});case m:return Object(b.a)(Object(b.a)({},e),{},{events:[],archive:[]});case f:return Object(b.a)(Object(b.a)({},e),{},{events:[].concat(Object(j.a)(e.events),[a]).sort((function(e,t){return e.id-t.id}))});case x:return Object(b.a)(Object(b.a)({},e),{},{events:e.events.filter((function(e){return e.id!==a.id})).sort((function(e,t){return e.id-t.id})),archive:[].concat(Object(j.a)(e.archive),[a]).sort((function(e,t){return e.id-t.id}))});case _:return Object(b.a)(Object(b.a)({},e),{},{events:[].concat(Object(j.a)(e.events),[a]).sort((function(e,t){return e.id-t.id})),archive:e.archive.filter((function(e){return e.id!==a.id})).sort((function(e,t){return e.id-t.id}))});case g:return Object(b.a)(Object(b.a)({},e),{},{archive:e.archive.filter((function(e){return e.id!==a})).sort((function(e,t){return e.id-t.id}))});case N:return Object(b.a)(Object(b.a)({},e),{},{events:e.events.map((function(e){return e.id===a.id?Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},a.variableName,a.value)):e}))});case k:return Object(b.a)(Object(b.a)({},e),{},{events:e.events.map((function(e){return e.id===a.id?Object(b.a)(Object(b.a)({},e),{},{tasks:[].concat(Object(j.a)(e.tasks),[a.task])}):e}))});case w:return Object(b.a)(Object(b.a)({},e),{},{events:e.events.map((function(e){return e.id===a.eventId?Object(b.a)(Object(b.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===a.taskId?a.task:e}))}):e}))});case y:return Object(b.a)(Object(b.a)({},e),{},{events:e.events.map((function(e){return e.id===a.eventId?Object(b.a)(Object(b.a)({},e),{},{tasks:e.tasks.filter((function(e){return e.id!==a.taskId}))}):e}))});case S:return Object(b.a)(Object(b.a)({},e),{},{events:e.events.map((function(e){return e.id===a.id?Object(b.a)(Object(b.a)({},e),{},{guests:[].concat(Object(j.a)(e.guests),[a.guest])}):e}))});case I:return Object(b.a)(Object(b.a)({},e),{},{events:e.events.map((function(e){return e.id===a.eventId?Object(b.a)(Object(b.a)({},e),{},{guests:e.guests.filter((function(e){return e.id!==a.guestId}))}):e}))});default:return e}}),Object(o.composeWithDevTools)(Object(i.applyMiddleware)(V.a))),Z=W,M=n(15),q=(n(72),n(55));n(73).config();Object(q.a)({apiKey:"AIzaSyAm9ibyX34gPrMAjw7auSoZ85CYJ1mT6bQ",authDomain:"eventplanner-19e70.firebaseapp.com",projectId:"eventplanner-19e70",storageBucket:"eventplanner-19e70.appspot.com",messagingSenderId:"650751464099",appId:"1:650751464099:web:b61b9b7edfd965317d6516"});var T=n(12),H=n(24);function B(){var e=Object(a.useState)({isLogIn:!1,userId:""}),t=Object(T.a)(e,2),n=t[0],c=t[1],s=Object(M.b)();return Object(a.useEffect)((function(){var e=Object(H.d)(Object(H.c)(),(function(e){c({isLogIn:!!e,userId:e?e.uid:""}),e?s(z(e.uid)):(s(z("")),s({type:m}))}));return function(){return e()}}),[]),n}n(77);var U=n.p+"static/media/logo.34886f0c.png",G=n(34),K=n(16),J=n.n(K),R=n(4),$=function(){var e=Object(a.useState)(!1),t=Object(T.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(T.a)(s,2),i=r[0],o=r[1],u=Object(a.useState)(""),j=Object(T.a)(u,2),d=j[0],p=j[1],h=Object(H.c)(),m=Object(G.a)(),f=m.register,x=m.handleSubmit,_=m.watch,g=m.formState.errors,N=m.clearErrors,k=m.reset;Object(a.useEffect)((function(){i&&setTimeout((function(){return o(!1)}),2e3)}),[i]);var w=function(e){e.preventDefault(),c((function(e){return!e})),o(!1),p(""),N(),k()};return Object(R.jsx)("div",{className:"log-box",children:Object(R.jsxs)("div",{className:"log-box__content",children:[Object(R.jsx)("div",{className:"log-box__bar"}),Object(R.jsxs)("div",{className:"log-box__logo",children:[Object(R.jsx)("img",{src:U,alt:"Event planner logo"}),Object(R.jsxs)("h1",{children:["Event",Object(R.jsx)("br",{}),"Planner"]})]}),Object(R.jsxs)("form",{className:"log-box__form",onSubmit:x((function(e){n?function(e){var t=e.emailValue,n=e.passwordValue;Object(H.e)(h,H.a).then(Object(l.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(H.b)(Object(H.c)(),t,n);case 3:return a=e.sent,e.next=6,Object(v.h)(Object(v.e)(Object(v.g)(),"users","".concat(a.user.uid)),{});case 6:e.next=18;break;case 8:e.prev=8,e.t0=e.catch(0),e.t1=e.t0.code,e.next="auth/email-already-in-use"===e.t1?13:15;break;case 13:return p("Podany email jest ju\u017c u\u017cywany!"),e.abrupt("break",17);case 15:return p("Niepoprawne dane!"),e.abrupt("break",17);case 17:o(!0);case 18:case"end":return e.stop()}}),e,null,[[0,8]])}))))}(e):function(e){var t=e.emailValue,n=e.passwordValue;Object(H.e)(h,H.a).then(Object(l.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(H.f)(h,t,n);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),e.t1=e.t0.code,e.next="auth/user-not-found"===e.t1?11:"auth/wrong-password"===e.t1?13:15;break;case 11:return p("Nie posiadasz jeszcze konta. Za\u0142\xf3\u017c je!"),e.abrupt("break",17);case 13:return p("Niepoprawne has\u0142o!"),e.abrupt("break",17);case 15:return p("Niepoprawne dane!"),e.abrupt("break",17);case 17:o(!0);case 18:case"end":return e.stop()}}),e,null,[[0,6]])}))))}(e)})),children:[Object(R.jsx)("p",{children:"Email:"}),Object(R.jsx)("input",Object(b.a)(Object(b.a)({type:"email"},f("emailValue",{required:"Podaj adres email!",pattern:{value:/^[\w\.]+@([\w]+\.)+[\w]{2,4}$/gm,message:"Podaj poprawny adres email!"}})),{},{className:J()({"log-box__form-error":g.emailValue})})),g.emailValue&&Object(R.jsx)("p",{className:"log-box__wrong-input",children:g.emailValue.message}),Object(R.jsx)("p",{children:"Has\u0142o:"}),Object(R.jsx)("input",Object(b.a)(Object(b.a)({type:"password"},f("passwordValue",{required:"Podaj has\u0142o!",pattern:{value:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,message:"Has\u0142o powinno mie\u0107:\n                min. 8 znak\xf3w, max. 16 znak\xf3w, 1 du\u017c\u0105 liter\u0119,\n                1 cyfr\u0119 i 1 znak specjalny"}})),{},{className:J()({"log-box__form-error":g.passwordValue})})),g.passwordValue&&Object(R.jsx)("p",{className:"log-box__wrong-input",children:g.passwordValue.message}),n&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("p",{children:"Potwierd\u017a has\u0142o:"}),Object(R.jsx)("input",Object(b.a)(Object(b.a)({type:"password"},f("repeatPasswordValue",{required:"Podaj has\u0142o jeszcze raz!",validate:{theSame:function(e){return _("passwordValue")===e||"Has\u0142a musz\u0105 by\u0107 takie same!"}}})),{},{className:J()({"log-box__form-error":g.repeatPasswordValue})})),g.repeatPasswordValue&&Object(R.jsx)("p",{className:"log-box__wrong-input",children:g.repeatPasswordValue.message})]}),i&&Object(R.jsx)("p",{className:"log-box__wrong-input",children:d}),Object(R.jsx)("div",{className:"log-box__buttons",children:n?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("button",{type:"submit",children:"Utw\xf3rz"}),Object(R.jsx)("button",{onClick:w,children:"Wr\xf3\u0107"})]}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("button",{type:"submit",children:"Zaloguj si\u0119"}),Object(R.jsx)("button",{onClick:w,children:"Za\u0142\xf3\u017c konto"})]})})]})]})})},Q=(n(79),n(20)),X=n(31),Y=(n(80),n(81),function(e){var t=e.data,n=e.isActive,c=e.url,s=Object(a.useState)(!1),r=Object(T.a)(s,2),i=r[0],o=r[1],u=Object(v.g)(),j={name:t.name,place:t.place,date:t.date,guests:t.guests,tasks:t.tasks},b=Object(M.b)(),d=Object(M.c)((function(e){return e.user})),p=function(){var e=Object(l.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.h)(Object(v.e)(u,"users",d,"archive",t.id),j);case 2:return e.next=4,Object(v.d)(Object(v.e)(u,"users",d,"events",t.id));case 4:b(C(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.h)(Object(v.e)(u,"users",d,"events",t.id),j);case 2:return e.next=4,Object(v.d)(Object(v.e)(u,"users",d,"archive",t.id));case 4:b({type:_,payload:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(Object(v.e)(u,"users",d,"archive",t.id));case 2:b({type:g,payload:t.id});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{className:J()("home-page__event",{"home-page__archive":!n}),onClick:function(){return o((function(e){return!e}))},onMouseLeave:function(){return o(!1)},children:[Object(R.jsx)("div",{className:"home-page__event-name",children:t.name}),Object(R.jsxs)("div",{className:"home-page__event-place",children:[Object(R.jsx)("span",{className:"home-page__event-label",children:"Miejsce:"}),Object(R.jsx)("br",{}),t.place]}),Object(R.jsxs)("div",{className:"home-page__event-date",children:[Object(R.jsx)("span",{className:"home-page__event-label",children:"Data:"}),Object(R.jsx)("br",{}),t.date]}),Object(R.jsxs)("div",{className:"home-page__event-guests",children:[Object(R.jsx)("span",{className:"home-page__event-label",children:"Go\u015bcie:"}),Object(R.jsx)("br",{}),t.guests.length]}),Object(R.jsx)("div",{className:J()("home-page__event-actions",{"home-page__event-actions--hide":!i}),children:Object(R.jsxs)("div",{className:"home-page__event-actions-box",children:[n?Object(R.jsx)(X.b,{to:"".concat(c,"/").concat(t.id),children:Object(R.jsxs)("span",{className:"home-page__event-actions-link",children:[Object(R.jsx)("span",{className:"fas fa-edit home-page__event-actions-icon"}),"Edytuj"]})}):Object(R.jsxs)("span",{className:"home-page__event-actions-link",onClick:h,children:[Object(R.jsx)("span",{className:"fas fa-undo-alt home-page__event-actions-icon"}),"Przywr\xf3\u0107"]}),Object(R.jsxs)("span",{className:"home-page__event-actions-link",onClick:n?p:m,children:[Object(R.jsx)("span",{className:J()("fas home-page__event-actions-icon",{"fa-archive":n,"fa-trash":!n})}),n?"Archiwizuj":"Usu\u0144"]})]})})]})}),ee=(n(87),n(88),n(59),n(57),n(58)),te=function(){for(var e=!0,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return n.forEach((function(t){(Object(ee.a)(t)||t.length>50)&&(e=!1)})),e},ne=function(e){var t=e.eventId,n=(e.name,e.place),c=e.date,s=Object(a.useState)(n),r=Object(T.a)(s,2),i=r[0],o=r[1],j=Object(a.useState)("".concat(c.substr(6,4),"-").concat(c.substr(3,2),"-").concat(c.substr(0,2))),b=Object(T.a)(j,2),d=b[0],p=b[1],h=Object(a.useState)(!1),m=Object(T.a)(h,2),f=m[0],x=m[1],_=Object(a.useState)(!1),g=Object(T.a)(_,2),N=g[0],k=g[1],w=Object(a.useState)(!1),y=Object(T.a)(w,2),S=y[0],I=y[1],z=Object(a.useState)(!1),C=Object(T.a)(z,2),E=C[0],A=C[1],F=Object(M.c)((function(e){return e.user})),L=Object(M.b)(),P=function(){var e=Object(l.a)(O.a.mark((function e(t,n,a,c,s,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||c===s){e.next=4;break}return e.next=3,Object(v.i)(Object(v.e)(Object(v.g)(),"users",t,"events",n),Object(u.a)({},a,s));case 3:L(D(n,a,s));case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,c,s,r){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{className:"event-page__content event-page__information",children:[Object(R.jsx)("div",{className:"event-page__bar"}),Object(R.jsx)("div",{className:"event-page__information-content",children:Object(R.jsxs)("form",{className:"event-page__information-form",children:[Object(R.jsxs)("div",{className:"event-page__information-column",children:[Object(R.jsxs)("div",{className:"event-page__information-title",children:[Object(R.jsx)("h3",{children:"Gdzie:"}),Object(R.jsx)("button",{onClick:function(e){e.preventDefault(),f?te(i)?(P(F,t,"place",n,i,f),x((function(e){return!e})),I(!1)):I(!0):x((function(e){return!e}))},children:Object(R.jsx)("span",{className:J()("far",{"fa-save":f,"fa-edit":!f}),title:f?"Zapisz":"Edytuj"})})]}),f?Object(R.jsx)("textarea",{type:"text",className:J()({"event-page__information-form--error":S}),placeholder:n,maxLength:50,value:i,onChange:function(e){return o(e.target.value)}}):Object(R.jsx)("h5",{children:i})]}),Object(R.jsxs)("div",{className:"event-page__information-column",children:[Object(R.jsxs)("div",{className:"event-page__information-title",children:[Object(R.jsx)("h3",{children:"Kiedy:"}),Object(R.jsx)("button",{onClick:function(e){e.preventDefault(),N?te(d)?(P(F,t,"date",c,"".concat(d.substr(8,2),".").concat(d.substr(5,2),".").concat(d.substr(0,4)),N),k((function(e){return!e})),A(!1)):A(!0):k((function(e){return!e}))},children:Object(R.jsx)("span",{className:J()("far",{"fa-save":N,"fa-edit":!N}),title:N?"Zapisz":"Edytuj"})})]}),N?Object(R.jsx)("input",{type:"date",className:J()({"event-page__information-form--error":E}),value:d,onChange:function(e){return p(e.target.value)}}):Object(R.jsx)("h5",{children:"".concat(d.substr(8,2),".").concat(d.substr(5,2),".").concat(d.substr(0,4))})]})]})})]})},ae=(n(89),n(90),n(91),function(e){var t=e.onClickFunction,n=e.icon,c=e.text,s=e.isActive,r=Object(a.useState)(!1),i=Object(T.a)(r,2),o=i[0],u=i[1],j=Object(a.useState)(""),b=Object(T.a)(j,2),l=b[0],d=b[1],O=Object(a.useRef)();Object(a.useEffect)((function(){l||(d("".concat(O.current.offsetWidth,"px")),u(!0))}),[l]);var v={width:l,transition:"width .5s ease-out"};return Object(R.jsxs)("button",{className:J()("mini-button",{"mini-button--inactive":!s}),type:"submit",ref:O,onClick:t,style:o?{width:"44px",transition:"width .5s ease-out"}:v,onMouseEnter:function(){return window.innerWidth>=768&&u(!1)},onMouseLeave:function(){return window.innerWidth>=768&&u(!0)},title:c,children:[Object(R.jsx)("span",{className:"fas ".concat(n," mini-button__icon")}),!o&&Object(R.jsx)("span",{className:"mini-button__text",children:c})]})}),ce=function(e){var t=e.eventId,n=e.task,a=Object(M.b)(),c=Object(M.c)((function(e){return e.user})),s=function(){var e=Object(l.a)(O.a.mark((function e(){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(b.a)(Object(b.a)({},n),{},{isDone:!n.isDone}),e.next=3,Object(v.i)(Object(v.e)(Object(v.g)(),"users",c,"events",t),{tasks:Object(v.a)(n)});case 3:return e.next=5,Object(v.i)(Object(v.e)(Object(v.g)(),"users",c,"events",t),{tasks:Object(v.b)(s)});case 5:a(E(t,n.id,s));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(l.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.i)(Object(v.e)(Object(v.g)(),"users",c,"events",t),{tasks:Object(v.a)(n)});case 2:a(A(t,n.id));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{className:J()("event-page__task",{"event-page__task--inActive":n.isDone}),children:[Object(R.jsxs)("div",{className:"event-page__task-info",children:[Object(R.jsx)("div",{className:"event-page__task-name",children:n.name}),Object(R.jsx)("div",{className:"event-page__task-description",children:n.description})]}),Object(R.jsxs)("div",{className:"event-page__task-actions",children:[n.isDone?Object(R.jsx)(ae,{onClickFunction:s,icon:"fa-undo",text:"Przywr\xf3\u0107",isActive:!n.isDone}):Object(R.jsx)(ae,{onClickFunction:s,icon:"fa-check",text:"Zrobione",isActive:!n.isDone}),Object(R.jsx)(ae,{onClickFunction:r,icon:"fa-trash",text:"Usu\u0144",isActive:!n.isDone})]})]})},se=(n(92),function(e){var t=e.onClickFunction,n=e.icon,c=e.text,s=e.isStatic,r=Object(a.useState)(0),i=Object(T.a)(r,2),o=i[0],u=i[1],j=Object(a.useState)("fit-content"),b=Object(T.a)(j,2),l=b[0],d=b[1],O=Object(a.useState)(0),v=Object(T.a)(O,2),p=v[0],h=v[1],m=Object(a.useState)(null),f=Object(T.a)(m,2),x=f[0],_=f[1],g=Object(a.useState)(null),N=Object(T.a)(g,2),k=N[0],w=N[1],y=Object(a.useState)(window.innerWidth),S=Object(T.a)(y,2),I=S[0],z=S[1],C=Object(a.useRef)();Object(a.useEffect)((function(){if(!s)return u(C.current.offsetWidth),d(C.current.offsetHeight),h(C.current.offsetHeight),z(window.innerWidth),function(){clearInterval(x),clearInterval(k)}}),[]),Object(a.useEffect)((function(){if(!s){var e=function(){d("fit-content"),u(C.current.offsetWidth),d(C.current.offsetHeight),h(C.current.offsetHeight)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}}),[I]);return Object(R.jsxs)("button",{className:"button",ref:C,style:{width:l},onMouseEnter:function(){if(!s&&window.innerWidth>=768){C.current.offsetWidth<o&&clearInterval(k);var e=setInterval((function(){C.current.offsetWidth<o?d((function(e){return e+2})):clearInterval(e)}),5);_(e)}},onMouseLeave:function(){if(!s&&window.innerWidth>=768){C.current&&C.current.offsetWidth>p&&clearInterval(x);var e=setInterval((function(){C.current&&C.current.offsetWidth>p?d((function(e){return e-2})):clearInterval(e)}),5);w(e)}},onClick:t&&t,type:"submit",children:[Object(R.jsx)("span",{className:"".concat(n,s?" button__icon button__icon--static":" button__icon")}),Object(R.jsx)("span",{className:s?"button__text button__text--static":"button__text",children:c})]})}),re=(n(93),function(e){var t=e.isShow,n=e.setIsShow,c=e.children,s=Object(a.useState)(!1),r=Object(T.a)(s,2),i=r[0],o=r[1];Object(a.useEffect)((function(){o(t)}),[t]);return i?Object(R.jsx)("div",{className:"popup",children:Object(R.jsxs)("div",{className:"popup__content",children:[Object(R.jsx)("div",{className:"popup__close",children:Object(R.jsx)("span",{className:"fas fa-times popup__close-btn",onClick:function(){o(!1),n(!1)}})}),c]})}):null}),ie=(n(94),function(e){var t=e.setIsShow,n=e.eventId,a=Object(G.a)(),c=a.register,s=a.handleSubmit,r=a.watch,i=a.formState.errors,o=Object(M.c)((function(e){return e.user})),u=Object(M.b)(),j=function(){var e=Object(l.a)(O.a.mark((function e(a){var c,s,r,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.taskName,s=a.taskDescription,r=a.taskCost,i={id:Date.now(),name:c,description:s,cost:r?parseFloat(parseFloat(r).toFixed(2)):0,isDone:!1},e.next=4,Object(v.i)(Object(v.e)(Object(v.g)(),"users",o,"events",n),{tasks:Object(v.b)(i)});case 4:u({type:k,payload:{id:n,task:i}}),t(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{className:"add-task",children:[Object(R.jsx)("h2",{className:"add-task__title",children:"Dodaj zadanie"}),Object(R.jsxs)("form",{onSubmit:s(j),children:[Object(R.jsxs)("div",{className:"add-task__input-box",children:[Object(R.jsx)("input",Object(b.a)(Object(b.a)({type:"text"},c("taskName",{required:!0,maxLength:50})),{},{className:J()("add-task__input",{"add-task__input--error":i.taskName}),maxLength:50,id:"new-task-name"})),Object(R.jsx)("label",{className:J()("add-task__label",{"add-task__label--focus":r("taskName")}),htmlFor:"new-task-name",children:"Nazwa"})]}),Object(R.jsxs)("div",{className:"add-task__input-box",children:[Object(R.jsx)("input",Object(b.a)(Object(b.a)({type:"text"},c("taskDescription",{required:!0,maxLength:80})),{},{className:J()("add-task__input",{"add-task__input--error":i.taskDescription}),maxLength:80,id:"new-task-description"})),Object(R.jsx)("label",{className:J()("add-task__label",{"add-task__label--focus":r("taskDescription")}),htmlFor:"new-task-description",children:"Opis"})]}),Object(R.jsxs)("div",{className:"add-task__input-box",children:[Object(R.jsx)("input",Object(b.a)(Object(b.a)({type:"number"},c("taskCost",{max:1e8})),{},{className:J()("add-task__input",{"add-task__input--error":i.taskCost}),id:"new-task-cost"})),Object(R.jsxs)("label",{className:J()("add-task__label",{"add-task__label--focus":r("taskCost")}),htmlFor:"new-task-cost",children:["Kwota"," ",!r("taskCost")&&Object(R.jsx)("span",{className:"add-task__label--additional",children:"(Opcjonalnie)"})]})]}),Object(R.jsx)(se,{icon:"far fa-save",text:"Zapisz",isStatic:!0})]})]})}),oe=function(e){var t=e.eventId,n=e.tasks,c=Object(a.useState)(!1),s=Object(T.a)(c,2),r=s[0],i=s[1];return Object(R.jsxs)("div",{className:"event-page__content event-page__tasks",children:[Object(R.jsx)("div",{className:"event-page__bar"}),Object(R.jsxs)("div",{className:"event-page__tasks-content",children:[Object(R.jsxs)("div",{className:"event-page__tasks-header",children:[Object(R.jsx)("h3",{className:"event-page__tasks-list-title",children:"Lista zada\u0144:"}),Object(R.jsx)(se,{onClickFunction:function(){return i(!0)},icon:"fas fa-folder-plus",text:"Dodaj",isStatic:!0})]}),Object(R.jsx)(re,{isShow:r,setIsShow:function(e){return i(e)},children:Object(R.jsx)(ie,{setIsShow:function(e){return i(e)},eventId:t})}),Object(R.jsx)("div",{className:"event-page__tasks-list",children:n.length>0?n.map((function(e){return Object(R.jsx)(ce,{eventId:t,task:e},e.id)})):Object(R.jsx)("h3",{className:"event-page__tasks-list-small-title",children:"Brak zada\u0144"})})]})]})},ue=(n(95),n(96),function(e){var t=e.eventId,n=e.guest,a=Object(M.b)(),c=Object(M.c)((function(e){return e.user})),s=function(){var e=Object(l.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.i)(Object(v.e)(Object(v.g)(),"users",c,"events",t),{guests:Object(v.a)(n)});case 2:a(F(t,n.id));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{className:"event-page__guest",children:[Object(R.jsx)("h3",{className:"event-page__guest-title",children:n.name}),Object(R.jsx)(ae,{onClickFunction:s,icon:"fa-trash",text:"Usu\u0144",isActive:!0})]})}),je=(n(97),function(e){var t=e.setIsShow,n=e.eventId,a=Object(M.b)(),c=Object(M.c)((function(e){return e.user})),s=Object(G.a)(),r=s.register,i=s.handleSubmit,o=s.watch,u=s.formState.errors,j=function(){var e=Object(l.a)(O.a.mark((function e(s){var r,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.guestName,i={id:Date.now(),name:r},e.next=4,Object(v.i)(Object(v.e)(Object(v.g)(),"users",c,"events",n),{guests:Object(v.b)(i)});case 4:a({type:S,payload:{id:n,guest:i}}),t(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{className:"add-guest",children:[Object(R.jsx)("h2",{className:"add-guest__title",children:"Dodaj go\u015bcia"}),Object(R.jsxs)("form",{onSubmit:i(j),children:[Object(R.jsxs)("div",{className:"add-guest__input-box",children:[Object(R.jsx)("input",Object(b.a)(Object(b.a)({type:"text"},r("guestName",{required:!0,maxLength:50})),{},{className:J()("add-guest__input",{"add-guest__input--error":u.guestName}),maxLength:50,id:"new-guest-name"})),Object(R.jsx)("label",{className:J()("add-guest__label",{"add-guest__label--focus":o("guestName")}),htmlFor:"new-guest-name",children:"Imi\u0119 i nazwisko"})]}),Object(R.jsx)(se,{icon:"far fa-save",text:"Zapisz",isStatic:!0})]})]})}),be=function(e){var t=e.eventId,n=e.guests,c=Object(a.useState)(!1),s=Object(T.a)(c,2),r=s[0],i=s[1];return Object(R.jsxs)("div",{className:"event-page__content event-page__guests",children:[Object(R.jsx)("div",{className:"event-page__bar"}),Object(R.jsxs)("div",{className:"event-page__guests-content",children:[Object(R.jsxs)("div",{className:"event-page__guests-header",children:[Object(R.jsxs)("h3",{className:"event-page__guests-title",children:["Lista go\u015bci:",n.length?Object(R.jsx)("br",{}):"",Object(R.jsx)("span",{children:n.length?" (".concat(n.length," ").concat(n.length>4||n.length<2?1===n.length?"osoba":"os\xf3b":"osoby",")"):""})]}),Object(R.jsx)(se,{onClickFunction:function(){return i(!0)},icon:"fas fa-user-plus",text:"Dodaj",isStatic:!0})]}),Object(R.jsx)(re,{isShow:r,setIsShow:function(e){return i(e)},children:Object(R.jsx)(je,{setIsShow:function(e){return i(e)},eventId:t})}),Object(R.jsx)("div",{className:"event-page__guests-list",children:n.length>0?n.map((function(e){return Object(R.jsx)(ue,{eventId:t,guest:e},e.id)})):Object(R.jsx)("h3",{className:"event-page__guests-list-small-title",children:"Bez go\u015bci"})})]})]})},le=(n(98),n(99),function(e){var t=e.name,n=e.cost;return Object(R.jsxs)("div",{className:"event-page__cost",children:[Object(R.jsx)("h3",{className:"event-page__cost-title",children:t}),Object(R.jsxs)("h3",{className:"event-page__cost-value",children:[n," z\u0142"]})]})}),de=function(e){var t=e.tasks;return Object(R.jsxs)("div",{className:"event-page__content event-page__costs",children:[Object(R.jsx)("div",{className:"event-page__bar"}),Object(R.jsxs)("div",{className:"event-page__costs-content",children:[Object(R.jsxs)("div",{className:"event-page__costs-main",children:[Object(R.jsx)("h3",{className:"event-page__costs-title",children:"Koszty:"}),Object(R.jsxs)("h3",{className:"event-page__costs-main-value",children:[t.reduce((function(e,t){return e+t.cost}),0)," ","z\u0142"]})]}),Object(R.jsx)("h3",{className:"event-page__costs-list-title",children:"Szczeg\xf3\u0142owe koszty:"}),Object(R.jsx)("ul",{className:"event-page__costs-list",children:t.some((function(e){return 0!==e.cost}))?t.map((function(e){var t=e.id,n=e.name,a=e.cost;return 0!==a&&Object(R.jsx)(le,{name:n,cost:a},t)})):Object(R.jsx)("h3",{className:"event-page__costs-small-title",children:"Brak koszt\xf3w"})})]})]})},Oe=function(e){var t=e.id,n=e.name,c=e.place,s=e.date,r=e.tasks,i=e.guests,o=Object(a.useState)(n),u=Object(T.a)(o,2),j=u[0],d=u[1],p=Object(a.useState)(!1),h=Object(T.a)(p,2),m=h[0],f=h[1],x=Object(a.useState)(!1),_=Object(T.a)(x,2),g=_[0],N=_[1],k=Object(Q.g)(),w=Object(v.g)(),y=Object(M.b)(),S=Object(M.c)((function(e){return e.user})),I=function(){var e=Object(l.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g||n===j){e.next=10;break}if(j){e.next=6;break}return f(!0),e.abrupt("return");case 6:return f(!1),e.next=9,Object(v.i)(Object(v.e)(Object(v.g)(),"users",S,"events",t),{name:j});case 9:y(D(t,"name",j));case 10:N((function(e){return!e}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:n,place:c,date:s,guests:i,tasks:r},e.next=3,Object(v.h)(Object(v.e)(w,"users",S,"archive",t),a);case 3:return e.next=5,Object(v.d)(Object(v.e)(w,"users",S,"events",t));case 5:a=Object(b.a)(Object(b.a)({},a),{},{id:t}),y(C(a)),k.push("/home/events");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{className:"event-page",children:[Object(R.jsxs)("div",{className:"event-page__nav-bar",children:[Object(R.jsxs)("div",{className:"event-page__nav-bar-title",children:[g?Object(R.jsx)("input",{type:"text",className:J()("event-page__nav-bar-input",{"event-page__nav-bar-input--error":m}),placeholder:n,maxLength:50,value:j,onChange:function(e){return d(e.target.value)}}):Object(R.jsx)("h1",{children:n}),Object(R.jsx)("span",{className:J()("event-page__nav-bar-title-icon far",{"fa-edit":!g,"fa-save":g}),onClick:I,title:g?"Zapisz":"Edytuj"})]}),Object(R.jsxs)("div",{className:"event-page__nav-bar-icons",children:[Object(R.jsx)(se,{onClickFunction:function(){return k.push("/home/events")},icon:"fas fa-chevron-left",text:"Powr\xf3t",isStatic:!1}),Object(R.jsx)(se,{onClickFunction:z,icon:"fas fa-archive",text:"Archiwizuj",isStatic:!1})]})]}),Object(R.jsxs)("div",{className:"event-page__main-content",children:[Object(R.jsxs)("div",{className:"event-page__left-content",children:[Object(R.jsx)(ne,{eventId:t,name:n,place:c,date:s}),Object(R.jsx)(oe,{eventId:t,tasks:r})]}),Object(R.jsxs)("div",{className:"event-page__right-content",children:[Object(R.jsx)(be,{eventId:t,guests:i}),Object(R.jsx)(de,{tasks:r})]})]})]})},ve=(n(100),function(e){var t=e.setIsShow,n=Object(M.b)(),a=Object(M.c)((function(e){return e.user})),c=Object(G.a)(),s=c.register,r=c.handleSubmit,i=c.watch,o=c.formState.errors,u=function(){var e=Object(l.a)(O.a.mark((function e(c){var s,r,i,o,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.eventName,r=c.eventDate,i=c.eventPlace,o={name:s,place:i,date:"".concat(r.substr(8,2),".").concat(r.substr(5,2),".").concat(r.substr(0,4)),guests:[],tasks:[]},u=Date.now().toString(),e.next=5,Object(v.h)(Object(v.e)(Object(v.g)(),"users",a,"events",u),o);case 5:n((j=Object(b.a)(Object(b.a)({},o),{},{id:u}),{type:f,payload:j})),t(!1);case 7:case"end":return e.stop()}var j}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{className:"add-event",children:[Object(R.jsx)("h2",{className:"add-event__title",children:"Dodaj wydarzenie"}),Object(R.jsxs)("form",{onSubmit:r(u),children:[Object(R.jsxs)("div",{className:"add-event__input-box",children:[Object(R.jsx)("input",Object(b.a)(Object(b.a)({type:"text"},s("eventName",{required:!0,maxLength:50})),{},{className:J()("add-event__input",{"add-event__input--error":o.eventName}),maxLength:50,id:"new-event-name"})),Object(R.jsx)("label",{className:J()("add-event__label",{"add-event__label--focus":i("eventName")}),htmlFor:"new-event-name",children:"Nazwa"})]}),Object(R.jsxs)("div",{className:"add-event__input-box",children:[Object(R.jsx)("input",Object(b.a)(Object(b.a)({type:"text"},s("eventPlace",{required:!0,maxLength:50})),{},{className:J()("add-event__input",{"add-event__input--error":o.eventPlace}),maxLength:50,id:"new-event-place"})),Object(R.jsx)("label",{className:J()("add-event__label",{"add-event__label--focus":i("eventPlace")}),htmlFor:"new-event-place",children:"Miejsce"})]}),Object(R.jsxs)("div",{className:"add-event__input-box",children:[Object(R.jsx)("input",Object(b.a)(Object(b.a)({type:"date"},s("eventDate",{required:!0})),{},{className:J()("add-event__input","add-event__input--date",{"add-event__input--focus":i("eventDate")},{"add-event__input--error":o.eventDate}),id:"new-event-date"})),Object(R.jsx)("label",{className:J()("add-event__label",{"add-event__label--focus":i("eventDate")}),htmlFor:"new-event-date",children:"Data"})]}),Object(R.jsx)(se,{icon:"far fa-save",text:"Zapisz",isStatic:!0})]})]})}),pe=function(e){var t=e.events,n=e.isArchive,c=Object(a.useState)(!1),s=Object(T.a)(c,2),r=s[0],i=s[1],o=Object(Q.h)(),u=o.path,j=o.url;return n?Object(R.jsxs)("div",{className:"home-page__events",children:[Object(R.jsx)("h2",{className:"home-page__content-title",children:"Archiwum wydarze\u0144:"}),t.map((function(e){return Object(R.jsx)(Y,{data:e,isActive:!1},e.id)})),!t.length&&Object(R.jsx)("h2",{className:"home-page__events-null",children:"Brak wydarze\u0144 w archiwum"})]}):Object(R.jsxs)(Q.d,{children:[Object(R.jsx)(Q.b,{exact:!0,path:u,children:Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("div",{className:"home-page__content-header",children:[Object(R.jsx)("h2",{className:"home-page__content-title",children:"Moje wydarzenia:"}),Object(R.jsx)(se,{onClickFunction:function(){return i(!0)},icon:"far fa-plus-square",text:"Dodaj wydarzenie",isStatic:!1})]}),Object(R.jsx)(re,{isShow:r,setIsShow:function(e){return i(e)},children:Object(R.jsx)(ve,{setIsShow:function(e){return i(e)}})}),Object(R.jsx)("div",{className:"home-page__events",children:t.map((function(e){return Object(R.jsx)(Y,{data:e,isActive:!0,url:j},e.id)}))})]})}),t.map((function(e){var t=e.id,n=e.name,a=e.place,c=e.date,s=e.tasks,r=e.guests;return Object(R.jsx)(Q.b,{path:"".concat(u,"/").concat(t),children:Object(R.jsx)(Oe,{id:t,name:n,place:a,date:c,tasks:s,guests:r})},t)}))]})},he=function(){var e=B().userId,t=Object(Q.h)(),n=t.path,c=t.url,s=Object(a.useState)(!1),r=Object(T.a)(s,2),i=r[0],o=r[1],u=Object(M.b)(),j=Object(M.c)((function(e){return e.events})),b=Object(M.c)((function(e){return e.archive})),l=Object(a.useState)(!1),d=Object(T.a)(l,2),O=d[0],v=d[1];Object(a.useEffect)((function(){e&&u(P)}),[e]);var p=function(){o((function(e){return!e}))};return Object(R.jsxs)("div",{className:"home-page",children:[Object(R.jsxs)("header",{className:"home-page__header",children:[Object(R.jsxs)("div",{className:"home-page__logo",children:[Object(R.jsx)("img",{src:U,alt:"Event planner logo"}),Object(R.jsxs)("h1",{children:["Event",Object(R.jsx)("br",{}),"Planner"]})]}),Object(R.jsx)("input",{className:"home-page__menu-btn",id:"home-page__menu-btn",type:"checkbox",checked:i,onChange:p}),Object(R.jsx)("label",{className:"home-page__menu-icon",htmlFor:"home-page__menu-btn",children:Object(R.jsx)("span",{className:"home-page__nav-icon"})}),Object(R.jsx)("nav",{className:"home-page__nav",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)(X.b,{to:"".concat(c,"/events"),children:Object(R.jsx)("li",{className:O?"":"home-page__active-menu-item",onClick:function(){v(!1),p()},children:"Wydarzenia"})}),Object(R.jsx)(X.b,{to:"".concat(c,"/archive"),children:Object(R.jsx)("li",{className:O?"home-page__active-menu-item":"",onClick:function(){v(!0),p()},children:"Archiwum"})}),Object(R.jsx)("li",{onClick:function(){return Object(H.g)(Object(H.c)())},children:"Wyloguj"})]})})]}),Object(R.jsx)("main",{className:"home-page__main",children:Object(R.jsxs)(Q.d,{children:[Object(R.jsx)(Q.b,{exact:!0,path:n,children:Object(R.jsx)(Q.a,{to:"".concat(n,"/events")})}),Object(R.jsx)(Q.b,{path:"".concat(n,"/events"),children:Object(R.jsx)(pe,{events:j,isArchive:!1})}),Object(R.jsx)(Q.b,{path:"".concat(n,"/archive"),children:Object(R.jsx)(pe,{events:b,isArchive:!0})})]})})]})},me=function(){var e=B().isLogIn;return Object(R.jsx)(X.a,{basename:"/",children:Object(R.jsx)("div",{className:"app-container",children:Object(R.jsxs)(Q.d,{children:[Object(R.jsx)(Q.b,{path:"/home",children:e?Object(R.jsx)(he,{}):Object(R.jsx)(Q.a,{to:"/"})}),Object(R.jsx)(Q.b,{exact:!0,path:"/",children:e?Object(R.jsx)(Q.a,{to:"/home"}):Object(R.jsx)($,{})}),Object(R.jsx)(Q.b,{path:"/*",children:Object(R.jsx)(Q.a,{to:"/"})})]})})})};r.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(M.a,{store:Z,children:Object(R.jsx)(me,{})})}),document.getElementById("root"))},65:function(e,t,n){},72:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.714d576c.chunk.js.map