(this.webpackJsonpEventPlanner=this.webpackJsonpEventPlanner||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),s=n(45),r=n.n(s),i=(n(57),n(58),n(46));n(60).config();Object(i.a)({apiKey:"AIzaSyAm9ibyX34gPrMAjw7auSoZ85CYJ1mT6bQ",authDomain:"eventplanner-19e70.firebaseapp.com",projectId:"eventplanner-19e70",storageBucket:"eventplanner-19e70.appspot.com",messagingSenderId:"650751464099",appId:"1:650751464099:web:b61b9b7edfd965317d6516"});var j=n(11),u=n(22);function o(){var e=Object(a.useState)({isLogIn:!1,userId:""}),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=Object(u.d)(Object(u.c)(),(function(e){return c({isLogIn:!!e,userId:e?e.uid:""})}));return function(){return e()}}),[]),n}var b=n(1),l=n(0),d=n.n(l),O=(n(64),n(51)),p=n(47),h=n(48),v=function(){for(var e=!0,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return n.forEach((function(t){(Object(h.a)(t)||t.length>50)&&(e=!1)})),e},x=n.p+"static/media/logo.c8c72d32.png",f=n(12),m=n(4),g=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(a.useState)(""),h=Object(j.a)(l,2),v=h[0],g=h[1],_=Object(a.useState)(""),k=Object(j.a)(_,2),N=k[0],w=k[1],y=Object(a.useState)(""),S=Object(j.a)(y,2),C=S[0],z=S[1],D=Object(a.useState)(""),I=Object(j.a)(D,2),E=I[0],L=I[1],U=Object(a.useState)(""),A=Object(j.a)(U,2),P=A[0],M=A[1],F=Object(a.useState)(!1),W=Object(j.a)(F,2),Z=W[0],H=W[1],B=Object(a.useState)(""),J=Object(j.a)(B,2),K=J[0],q=J[1],R=Object(u.c)(),V=function(e){e.preventDefault(),c((function(e){return!e})),z(""),L(""),M(""),H(!1),q(""),o(""),g(""),w("")};return Object(m.jsx)("div",{className:"log-box",children:Object(m.jsxs)("div",{className:"log-box__content",children:[Object(m.jsx)("div",{className:"log-box__bar"}),Object(m.jsxs)("div",{className:"log-box__logo",children:[Object(m.jsx)("img",{src:x,alt:"Event planner logo"}),Object(m.jsxs)("h1",{children:["Event",Object(m.jsx)("br",{}),"Planner"]})]}),Object(m.jsxs)("form",{className:"log-box__form",children:[Object(m.jsx)("p",{children:"Email:"}),Object(m.jsx)("input",{type:"email",value:i,onChange:function(e){return o(e.target.value)}}),Object(m.jsx)("p",{className:"log-box__wrong-input",children:C}),Object(m.jsx)("p",{children:"Has\u0142o:"}),Object(m.jsx)("input",{type:"password",value:v,onChange:function(e){return g(e.target.value)}}),Object(m.jsx)("p",{className:"log-box__wrong-input",children:E}),n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{className:"log-box__info-box",children:["Has\u0142o powinno mie\u0107:",Object(m.jsx)("br",{}),"min. 8 znak\xf3w, 1 du\u017c\u0105 liter\u0119,",Object(m.jsx)("br",{}),"1 cyfr\u0119 i 1 znak specjalny"]}),Object(m.jsx)("p",{children:"Potwierd\u017a has\u0142o:"}),Object(m.jsx)("input",{type:"password",value:N,onChange:function(e){return w(e.target.value)}}),Object(m.jsx)("p",{className:"log-box__wrong-input",children:P})]}),Z&&Object(m.jsx)("p",{className:"log-box__wrong-input",children:K}),Object(m.jsx)("div",{className:"log-box__buttons",children:n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),z(""),L(""),M("");var t=function(e,t,n){var a=!0,c="",s="",r="";return Object(O.a)(e)||(a=!1,c="Niepoprawny adres email"),t&&Object(p.a)(t)||(a=!1,s="Has\u0142o jest za s\u0142abe"),n&&n===t||(a=!1,r="Has\u0142a nie s\u0105 takie same"),{isValidate:a,errorLoginMessage:c,errorPasswordMessage:s,errorRepeatedPasswordMessage:r}}(i,v,N),n=t.isValidate,a=t.errorLoginMessage,c=t.errorPasswordMessage,s=t.errorRepeatedPasswordMessage;if(!n)return z(a),L(c),void M(s);Object(u.e)(R,u.a).then(Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.b)(Object(u.c)(),i,v);case 3:return t=e.sent,e.next=6,Object(f.i)(Object(f.f)(Object(f.h)(),"users","".concat(t.user.uid)),{});case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),H(!0),q("Wyst\u0105pi\u0142 b\u0142\u0105d. Sprubuj ponownie");case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))))},children:"Utw\xf3rz"}),Object(m.jsx)("button",{onClick:V,children:"Wr\xf3\u0107"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),Object(u.e)(R,u.a).then(Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.f)(R,i,v);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),H(!0),q("Niepoprawne dane");case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))))},children:"Zaloguj si\u0119"}),Object(m.jsx)("button",{onClick:V,children:"Za\u0142\xf3\u017c konto"})]})})]})]})})},_=n(18),k=n(15),N=(n(66),n(16)),w=n(30),y=n.p+"static/media/navLogo.24bfe863.png",S=(n(67),n(68),n(34)),C=n.n(S),z=function(e){var t=e.user,n=e.data,a=e.isActive,c=e.eventsUpdate,s=e.archiveUpdate,r=e.url,i=Object(f.h)(),j={name:n.name,place:n.place,date:n.date,guests:n.guests,tasks:n.tasks},u=function(e,t,n){e((function(e){return[].concat(Object(k.a)(e),[Object(_.a)(Object(_.a)({},t),{},{id:n})])}))},o=function(e,t){e((function(e){return e.filter((function(e){return e.id!==t}))}))},l=function(){var e=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)(Object(f.d)(i,"users",t,"archive"),j);case 2:return a=e.sent,u(s,j,a.id),e.next=6,Object(f.e)(Object(f.f)(i,"users",t,"events",n.id));case 6:o(c,n.id);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)(Object(f.d)(i,"users",t,"events"),j);case 2:return a=e.sent,u(c,j,a.id),e.next=6,Object(f.e)(Object(f.f)(i,"users",t,"archive",n.id));case 6:o(s,n.id);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(Object(f.f)(i,"users",t,"archive",n.id));case 2:o(s,n.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:C()("home-page__event",{"home-page__archive":!a}),children:[Object(m.jsx)("div",{className:"home-page__event-name",children:n.name}),Object(m.jsxs)("div",{className:"home-page__event-place",children:["Miejsce:",Object(m.jsx)("br",{}),n.place]}),Object(m.jsxs)("div",{className:"home-page__event-date",children:["Data:",Object(m.jsx)("br",{}),n.date]}),Object(m.jsxs)("div",{className:"home-page__event-guests",children:["Go\u015bcie:",Object(m.jsx)("br",{}),n.guests.length]}),Object(m.jsxs)("div",{className:"home-page__event-actions",children:[a?Object(m.jsx)(w.b,{to:"".concat(r,"/").concat(n.id),children:Object(m.jsx)("span",{className:"fas fa-edit home-page__event-edit-icon",title:"Edytuj"})}):Object(m.jsx)("span",{className:"fas fa-undo-alt",title:"Cofnij z archiwum",onClick:O}),Object(m.jsx)("span",{className:C()("fas",{"fa-archive":a,"fa-trash":!a}),title:a?"Do archiwum":"Usu\u0144",onClick:a?l:p})]})]})},D=(n(76),n(5)),I=(n(77),function(e){var t=e.user,n=e.eventId,c=e.name,s=e.place,r=e.date,i=e.updateEvent,u=Object(a.useState)(c),o=Object(j.a)(u,2),l=o[0],O=o[1],p=Object(a.useState)(s),h=Object(j.a)(p,2),x=h[0],g=h[1],k=Object(a.useState)("".concat(r.substr(6,4),"-").concat(r.substr(3,2),"-").concat(r.substr(0,2))),N=Object(j.a)(k,2),w=N[0],y=N[1],S=Object(a.useState)(!1),C=Object(j.a)(S,2),z=C[0],I=C[1],E=Object(a.useState)(!1),L=Object(j.a)(E,2),U=L[0],A=L[1],P=Object(a.useState)(!1),M=Object(j.a)(P,2),F=M[0],W=M[1],Z=function(){var e=Object(b.a)(d.a.mark((function e(t,n,a,c,s,r,i){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||c===s){e.next=4;break}return e.next=3,Object(f.j)(Object(f.f)(Object(f.h)(),"users",t,"events",n),Object(D.a)({},a,s));case 3:i((function(e){return e.map((function(e){return e.id===n&&(e=Object(_.a)(Object(_.a)({},e),{},Object(D.a)({},a,s))),e}))}));case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,c,s,r,i){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"event-page__content event-page__information",children:[Object(m.jsx)("div",{className:"event-page__bar"}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"event-page__information-title",children:[Object(m.jsx)("h3",{children:"Nazwa wydarzenia:"}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),v(l)&&(Z(t,n,"name",c,l,z,i),I((function(e){return!e})))},children:z?"Zapisz":"Edytuj"})]}),z?Object(m.jsx)("input",{type:"text",placeholder:"Wydarzenie musi mie\u0107 nazw\u0119",maxLength:50,value:l,onChange:function(e){return O(e.target.value)}}):Object(m.jsx)("h5",{children:l}),Object(m.jsxs)("div",{className:"event-page__information-title",children:[Object(m.jsx)("h3",{children:"Miejsce wydarzenia:"}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),v(x)&&(Z(t,n,"place",s,x,U,i),A((function(e){return!e})))},children:U?"Zapisz":"Edytuj"})]}),U?Object(m.jsx)("input",{type:"text",placeholder:"Wydarzenie musi mie\u0107 miejsce",maxLength:50,value:x,onChange:function(e){return g(e.target.value)}}):Object(m.jsx)("h5",{children:x}),Object(m.jsxs)("div",{className:"event-page__information-title",children:[Object(m.jsx)("h3",{children:"Data wydarzenia:"}),Object(m.jsx)("button",{onClick:function(e){e.preventDefault(),v(w)&&(Z(t,n,"date",r,"".concat(w.substr(8,2),".").concat(w.substr(5,2),".").concat(w.substr(0,4)),F,i),W((function(e){return!e})))},children:F?"Zapisz":"Edytuj"})]}),F?Object(m.jsx)("input",{type:"date",value:w,onChange:function(e){return y(e.target.value)}}):Object(m.jsx)("h5",{children:"".concat(w.substr(8,2),".").concat(w.substr(5,2),".").concat(w.substr(0,4))})]})]})}),E=(n(78),n(79),function(e){var t=e.userId,n=e.eventId,a=e.task,c=e.eventUpdate,s=function(){var e=Object(b.a)(d.a.mark((function e(){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(_.a)(Object(_.a)({},a),{},{isDone:!a.isDone}),e.next=3,Object(f.j)(Object(f.f)(Object(f.h)(),"users",t,"events",n),{tasks:Object(f.b)(a)});case 3:return e.next=5,Object(f.j)(Object(f.f)(Object(f.h)(),"users",t,"events",n),{tasks:Object(f.c)(s)});case 5:c((function(e){return e.map((function(e){return e.id===n&&(e.tasks=e.tasks.map((function(e){return e.id===a.id?s:e}))),e}))}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.j)(Object(f.f)(Object(f.h)(),"users",t,"events",n),{tasks:Object(f.b)(a)});case 2:c((function(e){return e.map((function(e){return e.id===n&&(e.tasks=e.tasks.filter((function(e){return e.id!==a.id}))),e}))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:C()("event-page__task",{"event-page__task--inActive":a.isDone}),children:[Object(m.jsxs)("div",{className:"event-page__task-info",children:[Object(m.jsx)("div",{className:"event-page__task-name",children:a.name}),Object(m.jsx)("div",{className:"event-page__task-description",children:a.description})]}),Object(m.jsxs)("div",{className:"event-page__task-actions",children:[Object(m.jsx)("span",{className:C()({fas:a.isDone,far:!a.isDone},"fa-check-square"),title:"Wykonane",onClick:s}),Object(m.jsx)("span",{className:"fas fa-trash",title:"Usu\u0144",onClick:r})]})]})}),L=function(e){var t=e.user,n=e.eventId,c=e.tasks,s=e.updateEvent,r=Object(a.useState)(!1),i=Object(j.a)(r,2),u=i[0],o=i[1],l=Object(a.useState)(""),O=Object(j.a)(l,2),p=O[0],h=O[1],x=Object(a.useState)(""),g=Object(j.a)(x,2),_=g[0],k=g[1],N=Object(a.useState)(""),w=Object(j.a)(N,2),y=w[0],S=w[1],C=Object(a.useState)(!0),z=Object(j.a)(C,2),D=z[0],I=z[1],L=function(){var e=Object(b.a)(d.a.mark((function e(a){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),v(p,_)){e.next=4;break}return I(!1),e.abrupt("return");case 4:return c={id:Date.now(),name:p,description:_,cost:y?parseFloat(parseFloat(y).toFixed(2)):0,isDone:!1},e.next=7,Object(f.j)(Object(f.f)(Object(f.h)(),"users",t,"events",n),{tasks:Object(f.c)(c)});case 7:s((function(e){return e.map((function(e){return e.id===n&&e.tasks.push(c),e}))})),o(!1),I(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"event-page__content event-page__tasks",children:[Object(m.jsx)("div",{className:"event-page__bar"}),Object(m.jsxs)("div",{className:"event-page__tasks-content",children:[Object(m.jsx)("button",{className:"event-page__tasks-add-task",onClick:function(){o((function(e){return!e})),h(""),k(""),S(""),!D&&I(!0)},children:"Dodaj zadanie"}),u&&Object(m.jsxs)("form",{className:"event-page__tasks-new",children:[Object(m.jsxs)("label",{className:"event-page__tasks-new-title",children:[Object(m.jsx)("h3",{children:"Nazwa:"}),Object(m.jsx)("input",{type:"text",maxLength:50,value:p,onChange:function(e){return h(e.target.value)}})]}),Object(m.jsxs)("label",{className:"event-page__tasks-new-title",children:[Object(m.jsx)("h3",{children:"Opis:"}),Object(m.jsx)("input",{type:"text",maxLength:50,value:_,onChange:function(e){return k(e.target.value)}})]}),Object(m.jsxs)("label",{className:"event-page__tasks-new-title",children:[Object(m.jsx)("h3",{children:"Kwota:"}),Object(m.jsx)("input",{type:"number",placeholder:"Opcjonalnie",maxLength:50,value:y,onChange:function(e){return S(e.target.value)}})]}),Object(m.jsx)("button",{className:"event-page__tasks-new-save-btn",onClick:L,children:"Dodaj"}),!D&&Object(m.jsx)("p",{className:"event-page__tasks-wrong-input",children:"Pola nazwy i opisu nie mog\u0105 by\u0107 puste!"})]}),Object(m.jsxs)("div",{className:"event-page__tasks-list",children:[Object(m.jsx)("h3",{className:"event-page__tasks-list-title",children:"Lista zada\u0144:"}),c.map((function(e){return Object(m.jsx)(E,{userId:t,eventId:n,task:e,eventUpdate:s},e.id)}))]})]})]})},U=(n(80),n(81),function(e){var t=e.userId,n=e.eventId,a=e.guest,c=e.eventUpdate,s=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.j)(Object(f.f)(Object(f.h)(),"users",t,"events",n),{guests:Object(f.b)(a)});case 2:c((function(e){return e.map((function(e){return e.id===n&&(e.guests=e.guests.filter((function(e){return e.id!==a.id}))),e}))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"event-page__guest",children:[Object(m.jsx)("h3",{children:a.name}),Object(m.jsx)("span",{className:"fas fa-trash",title:"Usu\u0144",onClick:s})]})}),A=function(e){var t=e.user,n=e.eventId,c=e.guests,s=e.updateEvent,r=Object(a.useState)(!1),i=Object(j.a)(r,2),u=i[0],o=i[1],l=Object(a.useState)(""),O=Object(j.a)(l,2),p=O[0],h=O[1],x=Object(a.useState)(!0),g=Object(j.a)(x,2),_=g[0],k=g[1],N=function(){var e=Object(b.a)(d.a.mark((function e(a){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),v(p)){e.next=4;break}return k(!1),e.abrupt("return");case 4:return c={id:Date.now(),name:p},e.next=7,Object(f.j)(Object(f.f)(Object(f.h)(),"users",t,"events",n),{guests:Object(f.c)(c)});case 7:s((function(e){return e.map((function(e){return e.id===n&&e.guests.push(c),e}))})),o(!1),h(""),!_&&k(!0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"event-page__content event-page__guests",children:[Object(m.jsx)("div",{className:"event-page__bar"}),Object(m.jsxs)("div",{className:"event-page__guests-content",children:[Object(m.jsx)("button",{className:"event-page__guests-add-guest",onClick:function(){o((function(e){return!e})),h(""),!_&&k(!0)},children:"Dodaj go\u015bcia"}),u&&Object(m.jsxs)("form",{className:"event-page__guests-new",children:[Object(m.jsxs)("div",{className:"event-page__guests-new-inputs",children:[Object(m.jsxs)("label",{className:"event-page__guests-new-tittle",children:[Object(m.jsx)("h3",{children:"Imi\u0119 i nazwisko:"}),Object(m.jsx)("input",{type:"text",maxLength:50,value:p,onChange:function(e){return h(e.target.value)}})]}),Object(m.jsx)("button",{className:"event-page__guests-new-btn",onClick:N,children:"Dodaj"})]}),!_&&Object(m.jsx)("p",{className:"event-page__guests-wrong-input",children:"Pole nie mo\u017ce by\u0107 puste!"})]}),Object(m.jsxs)("div",{className:"event-page__guests-list",children:[Object(m.jsxs)("h3",{className:"event-page__guests-list-tittle",children:["Lista go\u015bci (",c.length," ",c.length>4||c.length<2?1===c.length?"osoba":"os\xf3b":"osoby","):"]}),c.map((function(e){return Object(m.jsx)(U,{userId:t,eventId:n,guest:e,eventUpdate:s},e.id)}))]})]})]})},P=(n(82),function(e){var t=e.tasks;return Object(m.jsxs)("div",{className:"event-page__content event-page__cost",children:[Object(m.jsx)("div",{className:"event-page__bar"}),Object(m.jsxs)("div",{className:"event-page__cost-content",children:[Object(m.jsxs)("div",{className:"event-page__cost-main",children:[Object(m.jsx)("h3",{children:"Koszty:"}),Object(m.jsxs)("h3",{className:"event-page__cost-main-value",children:[t.reduce((function(e,t){return e+t.cost}),0)," z\u0142"]})]}),Object(m.jsx)("h3",{className:"event-page__cost-single-title",children:"Szczeg\xf3\u0142owe koszty:"}),Object(m.jsx)("ul",{className:"event-page__cost-single",children:t.map((function(e){var t=e.id,n=e.name,a=e.cost;return 0!==a&&Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"fas fa-caret-right"}),n," - ",Object(m.jsxs)("span",{className:"event-page__cost-single-value",children:[a," z\u0142"]})]},t)}))})]})]})}),M=function(e){var t=e.userId,n=e.id,a=e.name,c=e.place,s=e.date,r=e.tasks,i=e.guests,j=e.eventUpdate;return Object(m.jsxs)("div",{className:"event-page",children:[Object(m.jsxs)("div",{className:"event-page__left-content",children:[Object(m.jsx)(I,{user:t,eventId:n,name:a,place:c,date:s,updateEvent:j}),Object(m.jsx)(L,{user:t,eventId:n,tasks:r,updateEvent:j})]}),Object(m.jsxs)("div",{className:"event-page__right-content",children:[Object(m.jsx)(A,{user:t,eventId:n,guests:i,updateEvent:j}),Object(m.jsx)(P,{tasks:r})]})]})},F=function(e){var t=e.user,n=e.events,c=e.isArchive,s=e.updateEvents,r=e.updateArchive,i=Object(a.useState)(!1),u=Object(j.a)(i,2),o=u[0],l=u[1],O=Object(a.useState)(""),p=Object(j.a)(O,2),h=p[0],x=p[1],g=Object(a.useState)(""),w=Object(j.a)(g,2),y=w[0],S=w[1],C=Object(a.useState)(""),D=Object(j.a)(C,2),I=D[0],E=D[1],L=Object(a.useState)(!0),U=Object(j.a)(L,2),A=U[0],P=U[1],F=Object(N.g)(),W=F.path,Z=F.url,H=function(){var e=Object(b.a)(d.a.mark((function e(n){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),v(h,y,I)){e.next=4;break}return P(!1),e.abrupt("return");case 4:return a={name:h,place:y,date:"".concat(I.substr(8,2),".").concat(I.substr(5,2),".").concat(I.substr(0,4)),guests:[],tasks:[]},e.next=7,Object(f.a)(Object(f.d)(Object(f.h)(),"users",t,"events"),a);case 7:c=e.sent,s((function(e){return[].concat(Object(k.a)(e),[Object(_.a)(Object(_.a)({},a),{},{id:c.id})])})),x(""),S(""),E(""),P(!0),l(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(m.jsxs)("div",{className:"home-page__events",children:[n.map((function(e){return Object(m.jsx)(z,{user:t,data:e,isActive:!1,eventsUpdate:s,archiveUpdate:r},e.id)})),!n.length&&Object(m.jsx)("h2",{className:"home-page__events-null",children:"Brak wydarze\u0144 w archiwum"})]}):Object(m.jsxs)(N.d,{children:[Object(m.jsx)(N.b,{exact:!0,path:W,children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"home-page__add-event",children:[Object(m.jsxs)("div",{className:"home-page__add-event-btn",onClick:function(){l((function(e){return!e})),P(!0)},children:[Object(m.jsx)("span",{className:"far fa-plus-square"}),"Dodaj wydarzenie"]}),o&&Object(m.jsx)("div",{className:"home-page__add-event-box",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"home-page__add-event-input",children:[Object(m.jsx)("h3",{children:"Nazwa"}),Object(m.jsx)("input",{type:"text",maxLength:50,value:h,onChange:function(e){return x(e.target.value)}})]}),Object(m.jsxs)("div",{className:"home-page__add-event-input",children:[Object(m.jsx)("h3",{children:"Miejsce"}),Object(m.jsx)("input",{type:"text",maxLength:50,value:y,onChange:function(e){return S(e.target.value)}})]}),Object(m.jsxs)("div",{className:"home-page__add-event-input",children:[Object(m.jsx)("h3",{children:"Data"}),Object(m.jsx)("input",{type:"date",value:I,onChange:function(e){return E(e.target.value)}})]}),!A&&Object(m.jsx)("p",{children:"Pola nie mog\u0105 by\u0107 puste!"}),Object(m.jsx)("button",{onClick:H,children:"Dodaj"})]})})]}),Object(m.jsx)("div",{className:"home-page__events",children:n.map((function(e){return Object(m.jsx)(z,{user:t,data:e,isActive:!0,eventsUpdate:s,archiveUpdate:r,url:Z},e.id)}))})]})}),n.map((function(e){var n=e.id,a=e.name,c=e.place,r=e.date,i=e.tasks,j=e.guests;return Object(m.jsx)(N.b,{path:"".concat(W,"/").concat(n),children:Object(m.jsx)(M,{userId:t,id:n,name:a,place:c,date:r,tasks:i,guests:j,eventUpdate:s})},n)}))]})},W=function(){var e=o().userId,t=Object(N.g)(),n=t.path,c=t.url,s=Object(a.useState)(!1),r=Object(j.a)(s,2),i=r[0],l=r[1],O=Object(a.useState)([]),p=Object(j.a)(O,2),h=p[0],v=p[1],x=Object(a.useState)([]),g=Object(j.a)(x,2),S=g[0],C=g[1];Object(a.useEffect)((function(){if(e){var t=function(){var t=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(f.h)(),v([]),C([]),t.next=5,Object(f.g)(Object(f.d)(n,"users",e,"events"));case 5:return t.sent.forEach((function(e){v((function(t){return[].concat(Object(k.a)(t),[Object(_.a)(Object(_.a)({},e.data()),{},{id:e.id,tasks:e.data().tasks.sort((function(e,t){return e.id-t.id}))})])}))})),t.next=9,Object(f.g)(Object(f.d)(n,"users",e,"archive"));case 9:t.sent.forEach((function(e){C((function(t){return[].concat(Object(k.a)(t),[Object(_.a)(Object(_.a)({},e.data()),{},{id:e.id,tasks:e.data().tasks.sort((function(e,t){return e.id-t.id}))})])}))}));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[e]);var z=function(){l((function(e){return!e}))};return Object(m.jsxs)("div",{className:"home-page",children:[Object(m.jsxs)("header",{className:"home-page__header",children:[Object(m.jsxs)("div",{className:"home-page__logo",children:[Object(m.jsx)("img",{src:y,alt:"Event planner logo"}),Object(m.jsxs)("h1",{children:["Event",Object(m.jsx)("br",{}),"Planner"]})]}),Object(m.jsx)("input",{className:"home-page__menu-btn",id:"home-page__menu-btn",type:"checkbox",checked:i,onChange:z}),Object(m.jsx)("label",{className:"home-page__menu-icon",htmlFor:"home-page__menu-btn",children:Object(m.jsx)("span",{className:"home-page__nav-icon"})}),Object(m.jsx)("nav",{className:"home-page__nav",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)(w.b,{to:"".concat(c,"/events"),children:Object(m.jsx)("li",{onClick:z,children:"Wydarzenia"})}),Object(m.jsx)(w.b,{to:"".concat(c,"/archive"),children:Object(m.jsx)("li",{onClick:z,children:"Archiwum"})}),Object(m.jsx)("li",{onClick:function(){return Object(u.g)(Object(u.c)())},children:"Wyloguj"})]})})]}),Object(m.jsx)("main",{className:"home-page__main",children:Object(m.jsxs)(N.d,{children:[Object(m.jsx)(N.b,{exact:!0,path:n,children:Object(m.jsx)(N.a,{to:"".concat(n,"/events")})}),Object(m.jsx)(N.b,{path:"".concat(n,"/events"),children:Object(m.jsx)(F,{user:e,events:h,isArchive:!1,updateEvents:function(e){return v(e)},updateArchive:function(e){return C(e)}})}),Object(m.jsx)(N.b,{path:"".concat(n,"/archive"),children:Object(m.jsx)(F,{user:e,events:S,isArchive:!0,updateEvents:function(e){return v(e)},updateArchive:function(e){return C(e)}})})]})})]})},Z=function(){var e=o().isLogIn;return Object(m.jsx)(w.a,{basename:"/",children:Object(m.jsx)("div",{className:"app-container",children:Object(m.jsxs)(N.d,{children:[Object(m.jsx)(N.b,{path:"/home",children:e?Object(m.jsx)(W,{}):Object(m.jsx)(N.a,{to:"/"})}),Object(m.jsx)(N.b,{exact:!0,path:"/",children:e?Object(m.jsx)(N.a,{to:"/home"}):Object(m.jsx)(g,{})}),Object(m.jsx)(N.b,{path:"/*",children:Object(m.jsx)(N.a,{to:"/"})})]})})})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Z,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.b8d9c5ca.chunk.js.map