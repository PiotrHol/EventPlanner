(this.webpackJsonpEventPlanner=this.webpackJsonpEventPlanner||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),s=n(43),i=n.n(s),j=(n(54),n(55),n(44));n(57).config();Object(j.a)({apiKey:"AIzaSyAm9ibyX34gPrMAjw7auSoZ85CYJ1mT6bQ",authDomain:"eventplanner-19e70.firebaseapp.com",projectId:"eventplanner-19e70",storageBucket:"eventplanner-19e70.appspot.com",messagingSenderId:"650751464099",appId:"1:650751464099:web:b61b9b7edfd965317d6516"});var r=n(11),u=n(21);function o(){var e=Object(c.useState)({isLogIn:!1,userId:""}),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=Object(u.d)(Object(u.c)(),(function(e){a(e?{isLogIn:!0,userId:e.uid}:{isLogIn:!1,userId:""})}));return function(){return e()}}),[]),n}n(61);var b=n(49),l=n(45),d=n(46),O=function(){for(var e=!0,t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return n.forEach((function(t){(Object(d.a)(t)||t.length>50)&&(e=!1)})),e},h=n.p+"static/media/logo.c8c72d32.png",v=n(12),x=n(4),g=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),j=i[0],o=i[1],d=Object(c.useState)(""),O=Object(r.a)(d,2),g=O[0],m=O[1],f=Object(c.useState)(""),p=Object(r.a)(f,2),N=p[0],P=p[1],_=Object(c.useState)(""),k=Object(r.a)(_,2),w=k[0],C=k[1],y=Object(c.useState)(""),I=Object(r.a)(y,2),S=I[0],E=I[1],z=Object(c.useState)(""),D=Object(r.a)(z,2),B=D[0],L=D[1],U=Object(c.useState)(!1),A=Object(r.a)(U,2),M=A[0],T=A[1],F=Object(c.useState)(""),W=Object(r.a)(F,2),Z=W[0],H=W[1],G=Object(u.c)(),J=function(e){e.preventDefault(),a((function(e){return!e})),C(""),E(""),L(""),T(!1),H(""),o(""),m(""),P("")};return Object(x.jsx)("div",{className:"logBox",children:Object(x.jsxs)("div",{className:"logBox--content",children:[Object(x.jsx)("div",{className:"logBox--bar"}),Object(x.jsxs)("div",{className:"logBox--logo",children:[Object(x.jsx)("img",{src:h,alt:"Event planner logo"}),Object(x.jsxs)("h1",{children:["Event",Object(x.jsx)("br",{}),"Planner"]})]}),Object(x.jsxs)("form",{className:"logBox--form",children:[Object(x.jsx)("p",{children:"Email:"}),Object(x.jsx)("input",{type:"email",value:j,onChange:function(e){return o(e.target.value)}}),Object(x.jsx)("p",{className:"logBox--wrongInput",children:w}),Object(x.jsx)("p",{children:"Has\u0142o:"}),Object(x.jsx)("input",{type:"password",value:g,onChange:function(e){return m(e.target.value)}}),Object(x.jsx)("p",{className:"logBox--wrongInput",children:S}),n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{className:"logBox--infoBox",children:["Has\u0142o powinno mie\u0107:",Object(x.jsx)("br",{}),"min. 8 znak\xf3w, 1 du\u017c\u0105 liter\u0119,",Object(x.jsx)("br",{}),"1 cyfr\u0119 i 1 znak specjalny"]}),Object(x.jsx)("p",{children:"Potwierd\u017a has\u0142o:"}),Object(x.jsx)("input",{type:"password",value:N,onChange:function(e){return P(e.target.value)}}),Object(x.jsx)("p",{className:"logBox--wrongInput",children:B})]}),M&&Object(x.jsx)("p",{className:"logBox--wrongInput",children:Z}),Object(x.jsx)("div",{className:"logBox--buttons",children:n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),C(""),E(""),L("");var t=function(e,t,n){var c=!0,a="",s="",i="";return Object(b.a)(e)||(c=!1,a="Niepoprawny adres email"),""!==t&&Object(l.a)(t)||(c=!1,s="Has\u0142o jest za s\u0142abe"),""!==n&&n===t||(c=!1,i="Has\u0142a nie s\u0105 takie same"),{isValidate:c,errorLoginMessage:a,errorPasswordMessage:s,errorRepeatedPasswordMessage:i}}(j,g,N),n=t.isValidate,c=t.errorLoginMessage,a=t.errorPasswordMessage,s=t.errorRepeatedPasswordMessage;if(!n)return C(c),E(a),void L(s);Object(u.e)(G,u.a).then((function(){return Object(u.b)(Object(u.c)(),j,g).then((function(e){Object(v.i)(Object(v.f)(Object(v.h)(),"users","".concat(e.user.uid)),{}).then()})).catch((function(){T(!0),H("Wyst\u0105pi\u0142 b\u0142\u0105d. Sprubuj ponownie")}))}))},children:"Utw\xf3rz"}),Object(x.jsx)("button",{onClick:J,children:"Wr\xf3\u0107"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),Object(u.e)(G,u.a).then((function(){return Object(u.f)(G,j,g).then().catch((function(){T(!0),H("Niepoprawne dane")}))}))},children:"Zaloguj si\u0119"}),Object(x.jsx)("button",{onClick:J,children:"Za\u0142\xf3\u017c konto"})]})})]})]})})},m=n(17),f=n(15),p=(n(63),n(16)),N=n(27),P=n.p+"static/media/navLogo.24bfe863.png",_=(n(64),n(65),function(e){var t=e.user,n=e.data,c=e.isActive,a=e.eventsUpdate,s=e.archiveUpdate,i=e.url,j=Object(v.h)(),r={name:n.name,place:n.place,date:n.date,guests:n.guests,tasks:n.tasks},u=function(e,t,n){e((function(e){return[].concat(Object(f.a)(e),[Object(m.a)(Object(m.a)({},t),{},{id:n})])}))},o=function(e,t){e((function(e){return e.filter((function(e){return e.id!==t}))}))};return Object(x.jsxs)("div",{className:"homePage--event ".concat(!c&&"homePage--archive"),children:[Object(x.jsx)("div",{className:"homePage--event__name",children:n.name}),Object(x.jsxs)("div",{className:"homePage--event__place",children:["Miejsce:",Object(x.jsx)("br",{}),n.place]}),Object(x.jsxs)("div",{className:"homePage--event__date",children:["Data:",Object(x.jsx)("br",{}),n.date]}),Object(x.jsxs)("div",{className:"homePage--event__guests",children:["Go\u015bcie:",Object(x.jsx)("br",{}),n.guests.length]}),Object(x.jsxs)("div",{className:"homePage--event__actions",children:[c?Object(x.jsx)(N.b,{to:"".concat(i,"/").concat(n.id),children:Object(x.jsx)("span",{className:"fas fa-edit homePage--event__editIcon",title:"Edytuj"})}):Object(x.jsx)("span",{className:"fas fa-undo-alt",title:"Cofnij z archiwum",onClick:function(){Object(v.a)(Object(v.d)(j,"users",t,"events"),r).then((function(e){u(a,r,e.id),Object(v.e)(Object(v.f)(j,"users",t,"archive",n.id)).then((function(){o(s,n.id)}))}))}}),Object(x.jsx)("span",{className:"fas fa-".concat(c?"archive":"trash"),title:c?"Do archiwum":"Usu\u0144",onClick:c?function(){Object(v.a)(Object(v.d)(j,"users",t,"archive"),r).then((function(e){u(s,r,e.id),Object(v.e)(Object(v.f)(j,"users",t,"events",n.id)).then((function(){o(a,n.id)}))}))}:function(){Object(v.e)(Object(v.f)(j,"users",t,"archive",n.id)).then((function(){o(s,n.id)}))}})]})]})}),k=(n(73),n(5)),w=(n(74),function(e){var t=e.user,n=e.eventId,a=e.name,s=e.place,i=e.date,j=e.updateEvent,u=Object(c.useState)(a),o=Object(r.a)(u,2),b=o[0],l=o[1],d=Object(c.useState)(s),h=Object(r.a)(d,2),g=h[0],f=h[1],p=Object(c.useState)("".concat(i.substr(6,4),"-").concat(i.substr(3,2),"-").concat(i.substr(0,2))),N=Object(r.a)(p,2),P=N[0],_=N[1],w=Object(c.useState)(!1),C=Object(r.a)(w,2),y=C[0],I=C[1],S=Object(c.useState)(!1),E=Object(r.a)(S,2),z=E[0],D=E[1],B=Object(c.useState)(!1),L=Object(r.a)(B,2),U=L[0],A=L[1],M=function(e,t,n,c,a,s,i){s&&c!==a&&Object(v.j)(Object(v.f)(Object(v.h)(),"users",e,"events",t),Object(k.a)({},n,a)).then((function(){i((function(e){return e.map((function(e){return e.id===t&&(e=Object(m.a)(Object(m.a)({},e),{},Object(k.a)({},n,a))),e}))}))}))};return Object(x.jsxs)("div",{className:"eventPage--content eventPage--information",children:[Object(x.jsx)("div",{className:"eventPage--bar"}),Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{className:"eventPage--information__tittle",children:[Object(x.jsx)("h3",{children:"Nazwa wydarzenia:"}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),O(b)&&(M(t,n,"name",a,b,y,j),I((function(e){return!e})))},children:y?"Zapisz":"Edytuj"})]}),y?Object(x.jsx)("input",{type:"text",placeholder:"Wydarzenie musi mie\u0107 nazw\u0119",maxLength:50,value:b,onChange:function(e){return l(e.target.value)}}):Object(x.jsx)("h5",{children:b}),Object(x.jsxs)("div",{className:"eventPage--information__tittle",children:[Object(x.jsx)("h3",{children:"Miejsce wydarzenia:"}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),O(g)&&(M(t,n,"place",s,g,z,j),D((function(e){return!e})))},children:z?"Zapisz":"Edytuj"})]}),z?Object(x.jsx)("input",{type:"text",placeholder:"Wydarzenie musi mie\u0107 miejsce",maxLength:50,value:g,onChange:function(e){return f(e.target.value)}}):Object(x.jsx)("h5",{children:g}),Object(x.jsxs)("div",{className:"eventPage--information__tittle",children:[Object(x.jsx)("h3",{children:"Data wydarzenia:"}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),O(P)&&(M(t,n,"date",i,"".concat(P.substr(8,2),".").concat(P.substr(5,2),".").concat(P.substr(0,4)),U,j),A((function(e){return!e})))},children:U?"Zapisz":"Edytuj"})]}),U?Object(x.jsx)("input",{type:"date",value:P,onChange:function(e){return _(e.target.value)}}):Object(x.jsx)("h5",{children:"".concat(P.substr(8,2),".").concat(P.substr(5,2),".").concat(P.substr(0,4))})]})]})}),C=(n(75),n(76),function(e){var t=e.userId,n=e.eventId,c=e.task,a=e.eventUpdate;return Object(x.jsxs)("div",{className:"eventPage--task ".concat(c.isDone&&"eventPage--task__inActive"),children:[Object(x.jsxs)("div",{className:"eventPage--task__info",children:[Object(x.jsx)("div",{className:"eventPage--task__name",children:c.name}),Object(x.jsx)("div",{className:"eventPage--task__description",children:c.description})]}),Object(x.jsx)("div",{className:"eventPage--task__cost",children:""!==c.cost&&c.cost}),Object(x.jsxs)("div",{className:"eventPage--task__actions",children:[Object(x.jsx)("span",{className:"".concat(c.isDone?"fas":"far"," fa-check-square"),title:"Wykonane",onClick:function(){var e=Object(m.a)(Object(m.a)({},c),{},{isDone:!c.isDone});Object(v.j)(Object(v.f)(Object(v.h)(),"users",t,"events",n),{tasks:Object(v.b)(c)}).then((function(){Object(v.j)(Object(v.f)(Object(v.h)(),"users",t,"events",n),{tasks:Object(v.c)(e)}).then((function(){a((function(t){return t.map((function(t){return t.id===n&&(t.tasks=t.tasks.map((function(t){return t.id===c.id?e:t}))),t}))}))}))}))}}),Object(x.jsx)("span",{className:"fas fa-trash",title:"Usu\u0144",onClick:function(){Object(v.j)(Object(v.f)(Object(v.h)(),"users",t,"events",n),{tasks:Object(v.b)(c)}).then((function(){a((function(e){return e.map((function(e){return e.id===n&&(e.tasks=e.tasks.filter((function(e){return e.id!==c.id}))),e}))}))}))}})]})]})}),y=function(e){var t=e.user,n=e.eventId,a=e.tasks,s=e.updateEvent,i=Object(c.useState)(!1),j=Object(r.a)(i,2),u=j[0],o=j[1],b=Object(c.useState)(""),l=Object(r.a)(b,2),d=l[0],h=l[1],g=Object(c.useState)(""),m=Object(r.a)(g,2),f=m[0],p=m[1],N=Object(c.useState)(""),P=Object(r.a)(N,2),_=P[0],k=P[1],w=Object(c.useState)(!0),y=Object(r.a)(w,2),I=y[0],S=y[1];return Object(x.jsxs)("div",{className:"eventPage--content eventPage--tasks",children:[Object(x.jsx)("div",{className:"eventPage--bar"}),Object(x.jsxs)("div",{className:"eventPage--tasksContent",children:[Object(x.jsx)("button",{className:"eventPage--tasks__addTask",onClick:function(){o((function(e){return!e})),h(""),p(""),k(""),I||S(!0)},children:"Dodaj zadanie"}),u&&Object(x.jsxs)("form",{className:"eventPage--tasks__new",children:[Object(x.jsxs)("label",{className:"eventPage--tasks__newTittle",children:[Object(x.jsx)("h3",{children:"Nazwa:"}),Object(x.jsx)("input",{type:"text",maxLength:50,value:d,onChange:function(e){return h(e.target.value)}})]}),Object(x.jsxs)("label",{className:"eventPage--tasks__newTittle",children:[Object(x.jsx)("h3",{children:"Opis:"}),Object(x.jsx)("input",{type:"text",maxLength:50,value:f,onChange:function(e){return p(e.target.value)}})]}),Object(x.jsxs)("label",{className:"eventPage--tasks__newTittle",children:[Object(x.jsx)("h3",{children:"Kwota:"}),Object(x.jsx)("input",{type:"number",placeholder:"Opcjonalnie",maxLength:50,value:_,onChange:function(e){return k(e.target.value)}})]}),Object(x.jsx)("button",{className:"eventPage--tasks__newSaveBtn",onClick:function(e){if(e.preventDefault(),O(d,f)){var c={id:Date.now(),name:d,description:f,cost:""===_?0:parseFloat(parseFloat(_).toFixed(2)),isDone:!1};Object(v.j)(Object(v.f)(Object(v.h)(),"users",t,"events",n),{tasks:Object(v.c)(c)}).then((function(){s((function(e){return e.map((function(e){return e.id===n&&e.tasks.push(c),e}))}))})),o(!1),S(!0)}else S(!1)},children:"Dodaj"}),!I&&Object(x.jsx)("p",{className:"eventPage--tasks__wrongInput",children:"Pola nazwy i opisu nie mog\u0105 by\u0107 puste!"})]}),Object(x.jsxs)("div",{className:"eventPage--tasks__list",children:[Object(x.jsx)("h3",{className:"eventPage--tasks__listTittle",children:"Lista zada\u0144:"}),a.map((function(e){return Object(x.jsx)(C,{userId:t,eventId:n,task:e,eventUpdate:s},e.id)}))]})]})]})},I=(n(77),n(78),function(e){var t=e.userId,n=e.eventId,c=e.guest,a=e.eventUpdate;return Object(x.jsxs)("div",{className:"eventPage--guest",children:[Object(x.jsx)("h3",{children:c.name}),Object(x.jsx)("span",{className:"fas fa-trash",title:"Usu\u0144",onClick:function(){Object(v.j)(Object(v.f)(Object(v.h)(),"users",t,"events",n),{guests:Object(v.b)(c)}).then((function(){a((function(e){return e.map((function(e){return e.id===n&&(e.guests=e.guests.filter((function(e){return e.id!==c.id}))),e}))}))}))}})]})}),S=function(e){var t=e.user,n=e.eventId,a=e.guests,s=e.updateEvent,i=Object(c.useState)(!1),j=Object(r.a)(i,2),u=j[0],o=j[1],b=Object(c.useState)(""),l=Object(r.a)(b,2),d=l[0],h=l[1],g=Object(c.useState)(!0),m=Object(r.a)(g,2),f=m[0],p=m[1];return Object(x.jsxs)("div",{className:"eventPage--content eventPage--guests",children:[Object(x.jsx)("div",{className:"eventPage--bar"}),Object(x.jsxs)("div",{className:"eventPage--guestsContent",children:[Object(x.jsx)("button",{className:"eventPage--guests__addGuest",onClick:function(){o((function(e){return!e})),h(""),!f&&p(!0)},children:"Dodaj go\u015bcia"}),u&&Object(x.jsxs)("form",{className:"eventPage--guests__new",children:[Object(x.jsxs)("div",{className:"eventPage--guestes__newInputs",children:[Object(x.jsxs)("label",{className:"eventPage--guests__newTittle",children:[Object(x.jsx)("h3",{children:"Imi\u0119 i nazwisko:"}),Object(x.jsx)("input",{type:"text",maxLength:50,value:d,onChange:function(e){return h(e.target.value)}})]}),Object(x.jsx)("button",{className:"eventPage--guests__newGuestBtn",onClick:function(e){if(e.preventDefault(),O(d)){var c={id:Date.now(),name:d};Object(v.j)(Object(v.f)(Object(v.h)(),"users",t,"events",n),{guests:Object(v.c)(c)}).then((function(){s((function(e){return e.map((function(e){return e.id===n&&e.guests.push(c),e}))}))})),o(!1),h(""),!f&&p(!0)}else p(!1)},children:"Dodaj"})]}),!f&&Object(x.jsx)("p",{className:"eventPage--guests__wrongInput",children:"Pole nie mo\u017ce by\u0107 puste!"})]}),Object(x.jsxs)("div",{className:"eventPage--guests__list",children:[Object(x.jsxs)("h3",{className:"eventPage--guests__listTittle",children:["Lista go\u015bci (",a.length," ",a.length>4||a.length<2?1===a.length?"osoba":"os\xf3b":"osoby","):"]}),a.map((function(e){return Object(x.jsx)(I,{userId:t,eventId:n,guest:e,eventUpdate:s},e.id)}))]})]})]})},E=(n(79),function(e){var t=e.tasks;return Object(x.jsxs)("div",{className:"eventPage--content eventPage--cost",children:[Object(x.jsx)("div",{className:"eventPage--bar"}),Object(x.jsxs)("div",{className:"eventPage--costContent",children:[Object(x.jsxs)("div",{className:"eventPage--cost__main",children:[Object(x.jsx)("h3",{children:"Koszty:"}),Object(x.jsxs)("h3",{className:"eventPage--cost__mainCost",children:[t.reduce((function(e,t){return e+t.cost}),0)," z\u0142"]})]}),Object(x.jsx)("h3",{className:"eventPage--cost__singleTitle",children:"Szczeg\xf3\u0142owe koszty:"}),Object(x.jsx)("ul",{className:"eventPage--cost__single",children:t.map((function(e){return 0!==e.cost&&Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{className:"fas fa-caret-right"}),e.name," - ",Object(x.jsxs)("span",{className:"eventPage--cost__singleCost",children:[e.cost," z\u0142"]})]},e.id)}))})]})]})}),z=function(e){var t=e.userId,n=e.id,c=e.name,a=e.place,s=e.date,i=e.tasks,j=e.guests,r=e.eventUpdate;return Object(x.jsxs)("div",{className:"eventPage",children:[Object(x.jsxs)("div",{className:"eventPage--leftContent",children:[Object(x.jsx)(w,{user:t,eventId:n,name:c,place:a,date:s,updateEvent:r}),Object(x.jsx)(y,{user:t,eventId:n,tasks:i,updateEvent:r})]}),Object(x.jsxs)("div",{className:"eventPage--rightContent",children:[Object(x.jsx)(S,{user:t,eventId:n,guests:j,updateEvent:r}),Object(x.jsx)(E,{tasks:i})]})]})},D=function(e){var t=e.user,n=e.events,a=e.isArchive,s=e.updateEvents,i=e.updateArchive,j=Object(c.useState)(!1),u=Object(r.a)(j,2),o=u[0],b=u[1],l=Object(c.useState)(""),d=Object(r.a)(l,2),h=d[0],g=d[1],N=Object(c.useState)(""),P=Object(r.a)(N,2),k=P[0],w=P[1],C=Object(c.useState)(""),y=Object(r.a)(C,2),I=y[0],S=y[1],E=Object(c.useState)(!0),D=Object(r.a)(E,2),B=D[0],L=D[1],U=Object(p.g)(),A=U.path,M=U.url;return a?Object(x.jsxs)("div",{className:"homePage--events",children:[n.map((function(e){return Object(x.jsx)(_,{user:t,data:e,isActive:!1,eventsUpdate:s,archiveUpdate:i},e.id)})),0===n.length&&Object(x.jsx)("h2",{className:"homePage--events__null",children:"Brak wydarze\u0144 w archiwum"})]}):Object(x.jsxs)(p.d,{children:[Object(x.jsx)(p.b,{exact:!0,path:A,children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"homePage--addEvent",children:[Object(x.jsxs)("div",{className:"homePage--addEvent__btn",onClick:function(){b((function(e){return!e})),L(!0)},children:[Object(x.jsx)("span",{className:"far fa-plus-square"}),"Dodaj wydarzenie"]}),o&&Object(x.jsx)("div",{className:"homePage--addEvent__box",children:Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{className:"homePage--addEvent__input",children:[Object(x.jsx)("h3",{children:"Nazwa"}),Object(x.jsx)("input",{type:"text",maxLength:50,value:h,onChange:function(e){return g(e.target.value)}})]}),Object(x.jsxs)("div",{className:"homePage--addEvent__input",children:[Object(x.jsx)("h3",{children:"Miejsce"}),Object(x.jsx)("input",{type:"text",maxLength:50,value:k,onChange:function(e){return w(e.target.value)}})]}),Object(x.jsxs)("div",{className:"homePage--addEvent__input",children:[Object(x.jsx)("h3",{children:"Data"}),Object(x.jsx)("input",{type:"date",value:I,onChange:function(e){return S(e.target.value)}})]}),!B&&Object(x.jsx)("p",{children:"Pola nie mog\u0105 by\u0107 puste!"}),Object(x.jsx)("button",{onClick:function(e){if(e.preventDefault(),O(h,k,I)){var n={name:h,place:k,date:"".concat(I.substr(8,2),".").concat(I.substr(5,2),".").concat(I.substr(0,4)),guests:[],tasks:[]};Object(v.a)(Object(v.d)(Object(v.h)(),"users",t,"events"),n).then((function(e){s((function(t){return[].concat(Object(f.a)(t),[Object(m.a)(Object(m.a)({},n),{},{id:e.id})])})),g(""),w(""),S(""),L(!0),b(!1)}))}else L(!1)},children:"Dodaj"})]})})]}),Object(x.jsx)("div",{className:"homePage--events",children:n.map((function(e){return Object(x.jsx)(_,{user:t,data:e,isActive:!0,eventsUpdate:s,archiveUpdate:i,url:M},e.id)}))})]})}),n.map((function(e){return Object(x.jsx)(p.b,{path:"".concat(A,"/").concat(e.id),children:Object(x.jsx)(z,{userId:t,id:e.id,name:e.name,place:e.place,date:e.date,tasks:e.tasks,guests:e.guests,eventUpdate:s})},e.id)}))]})},B=function(){var e=o().userId,t=Object(p.g)(),n=t.path,a=t.url,s=Object(c.useState)(!1),i=Object(r.a)(s,2),j=i[0],b=i[1],l=Object(c.useState)([]),d=Object(r.a)(l,2),O=d[0],h=d[1],g=Object(c.useState)([]),_=Object(r.a)(g,2),k=_[0],w=_[1];Object(c.useEffect)((function(){if(""!==e){var t=Object(v.h)();h([]),w([]),Object(v.g)(Object(v.d)(t,"users",e,"events")).then((function(e){e.forEach((function(e){h((function(t){return[].concat(Object(f.a)(t),[Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id,tasks:e.data().tasks.sort((function(e,t){return e.id-t.id}))})])}))}))})),Object(v.g)(Object(v.d)(t,"users",e,"archive")).then((function(e){e.forEach((function(e){w((function(t){return[].concat(Object(f.a)(t),[Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id,tasks:e.data().tasks.sort((function(e,t){return e.id-t.id}))})])}))}))}))}}),[e]);var C=function(){b((function(e){return!e}))};return Object(x.jsxs)("div",{className:"homePage",children:[Object(x.jsxs)("header",{className:"homePage--header",children:[Object(x.jsxs)("div",{className:"homePage--logo",children:[Object(x.jsx)("img",{src:P,alt:"Event planner logo"}),Object(x.jsxs)("h1",{children:["Event",Object(x.jsx)("br",{}),"Planner"]})]}),Object(x.jsx)("input",{className:"homePage--menuBtn",id:"homePage--menuBtn",type:"checkbox",checked:j,onChange:C}),Object(x.jsx)("label",{className:"homePage--menuIcon",htmlFor:"homePage--menuBtn",children:Object(x.jsx)("span",{className:"homePage--navIcon"})}),Object(x.jsx)("nav",{className:"homePage--nav",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)(N.b,{to:"".concat(a,"/events"),children:Object(x.jsx)("li",{onClick:C,children:"Wydarzenia"})}),Object(x.jsx)(N.b,{to:"".concat(a,"/archive"),children:Object(x.jsx)("li",{onClick:C,children:"Archiwum"})}),Object(x.jsx)("li",{onClick:function(){var e=Object(u.c)();Object(u.g)(e).then()},children:"Wyloguj"})]})})]}),Object(x.jsx)("main",{className:"homePage--main",children:Object(x.jsxs)(p.d,{children:[Object(x.jsx)(p.b,{exact:!0,path:n,children:Object(x.jsx)(p.a,{to:"".concat(n,"/events")})}),Object(x.jsx)(p.b,{path:"".concat(n,"/events"),children:Object(x.jsx)(D,{user:e,events:O,isArchive:!1,updateEvents:function(e){return h(e)},updateArchive:function(e){return w(e)}})}),Object(x.jsx)(p.b,{path:"".concat(n,"/archive"),children:Object(x.jsx)(D,{user:e,events:k,isArchive:!0,updateEvents:function(e){return h(e)},updateArchive:function(e){return w(e)}})})]})})]})},L=function(){var e=o().isLogIn;return Object(x.jsx)(N.a,{basename:"/",children:Object(x.jsx)("div",{className:"appContainer",children:Object(x.jsxs)(p.d,{children:[Object(x.jsx)(p.b,{path:"/home",children:e?Object(x.jsx)(B,{}):Object(x.jsx)(p.a,{to:"/"})}),Object(x.jsx)(p.b,{exact:!0,path:"/",children:e?Object(x.jsx)(p.a,{to:"/home"}):Object(x.jsx)(g,{})}),Object(x.jsx)(p.b,{path:"/*",children:Object(x.jsx)(p.a,{to:"/"})})]})})})};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.c064cce2.chunk.js.map