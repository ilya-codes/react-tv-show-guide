(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{30:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var r,a,i,c,o,s,l,d,m,b,j,h,u,p,x,g,f,O=t(1),w=t.n(O),v=t(19),y=t.n(v),k=(t(30),t(9)),S=t.n(k),N=t(11),C=t(6),z=t(3),A=t(2),D=t(5),T=t(0),B=A.default.div(r||(r=Object(z.a)(["\n  font-size: 1.4rem;\n  cursor: pointer;\n\n  .link {\n    text-decoration: none;\n  }\n\n  h1 {\n    color: #667eea;\n  }\n\n  @media screen and (min-width: 900px) {\n    position: absolute;\n    left: 4rem;\n    font-size: 2rem;\n  }\n"]))),R=function(n){var e=n.handleReset;return Object(T.jsx)(B,{onClick:e,children:Object(T.jsx)(D.b,{className:"link",to:"/",children:Object(T.jsx)("h1",{children:"TVShow Guide"})})})},I=A.default.nav(a||(a=Object(z.a)(["\n  position: fixed;\n  top: 0;\n  height: 7rem;\n  width: inherit;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0 2rem;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 3;\n\n  button {\n    background-color: transparent;\n    color: rgba(255, 255, 255, 0.3);\n    font-size: 1.6rem;\n    margin: 0 2rem;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    border-radius: 10px;\n    padding: 0 1rem;\n    user-select: none;\n\n    &:hover {\n      color: #667eea;\n      border-color: #667eea;\n    }\n  }\n\n  @media screen and (min-width: 900px) {\n    height: 5rem;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n"]))),L=function(n){var e=n.handleReset,t=n.dates,r=n.filterDate,a=n.filterDateHandler;return Object(T.jsxs)(I,{children:[Object(T.jsx)(R,{handleReset:e}),Object(T.jsx)("button",{onClick:a,children:"On Air \n      ".concat(r===t.today?"Today":"Tomorrow")})]})},J=A.default.header(i||(i=Object(z.a)(["\n  width: 100%;\n  height: 7rem;\n  padding-top: 5rem;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: linear-gradient(to right bottom, #434343 0%, black 100%);\n\n  @media screen and (min-width: 900px) {\n    height: 5rem;\n  }\n"]))),E=function(){return Object(T.jsx)(J,{})},F=A.default.select(c||(c=Object(z.a)(["\n  width: 13rem;\n  margin: 0.8rem;\n  height: 1.8rem;\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  background-color: transparent;\n  background-image: linear-gradient(135deg, #667eea90 0%, #764ba290 100%);\n  color: #fff;\n  font-size: 1.1rem;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n  text-align: center;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  @media screen and (min-width: 900px) {\n    width: 9rem;\n    margin: 1.5rem;\n  }\n"]))),M=function(n){return Object(T.jsxs)(F,{onChange:n.onChange,name:n.name,value:n.value,children:[Object(T.jsx)("option",{hidden:!0,children:n.placeholder}),n.children]})},U=A.default.button(o||(o=Object(z.a)(["\n  width: 9rem;\n  margin: 1.5rem;\n  height: 1.8rem;\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  background-color: transparent;\n  background-image: linear-gradient(135deg, #667eea90 0%, #764ba290 100%);\n  color: #fff;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n"]))),G=function(n){return Object(T.jsx)(U,{onClick:n.onClick,children:n.children})},H=Object(O.createContext)({clickedShow:null}),P=function(n){var e=Object(O.useState)(JSON.parse(window.localStorage.getItem("savedShow"))),t=Object(C.a)(e,2),r=t[0],a=t[1],i=Object(O.useState)(JSON.parse(window.localStorage.getItem("savedActor"))),c=Object(C.a)(i,2),o=c[0],s=c[1],l={clickedShow:r,clickedActor:o,handleShowSave:function(n){a(n),window.localStorage.setItem("savedShow",JSON.stringify(n))},handleActor:function(n){s(n)}};return Object(T.jsx)(H.Provider,{value:l,children:n.children})},_=H,K=A.default.div(s||(s=Object(z.a)(["\n  padding: 5rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: space-between;\n  overflow: hidden;\n\n  .img-desc {\n    width: 100%;\n    border: 1px solid #667eeab5;\n    align-self: flex-start;\n\n    img {\n      display: block;\n      width: 100%;\n      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.5);\n    }\n  }\n\n  .text-desc {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    color: gray;\n\n    .upper-plank {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 2rem;\n\n      .rating {\n        width: 25rem;\n        font-size: 1.5rem;\n        font-weight: 600;\n        border-top: 1px solid gray;\n      }\n    }\n\n    .sub-info {\n      display: flex;\n      justify-content: space-between;\n    }\n\n    /* button {\n      margin: 0;\n    } */\n\n    .summary {\n      text-align: justify;\n      margin: 3rem 0;\n    }\n\n    .schedule,\n    .show-name,\n    .network-name {\n      color: #fff;\n      font-size: 1.1rem;\n      letter-spacing: 0.1rem;\n    }\n\n    .show-name {\n      margin-bottom: 1rem;\n    }\n\n    .schedule {\n      margin: 2rem 0;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      line-height: 2rem;\n    }\n\n    .network-name {\n      /* margin-bottom: 2rem; */\n      margin: 2rem 0;\n    }\n\n    .links-btns {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 2rem;\n      margin-top: 1.5rem;\n\n      a {\n        text-decoration: none;\n        color: #fff;\n        margin: 1rem;\n\n        button {\n          margin: 0;\n          width: 13rem;\n        }\n      }\n    }\n  }\n\n  @media screen and (min-width: 900px) {\n    flex-direction: row;\n\n    .img-desc {\n      width: 25rem;\n    }\n\n    .text-desc {\n      width: 40rem;\n      margin-left: 5rem;\n\n      .links-btns {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        margin-bottom: 2rem;\n        margin-top: 0;\n\n        a {\n          margin: 0;\n\n          button {\n            margin: 0;\n            width: 9rem;\n          }\n        }\n      }\n    }\n  }\n"]))),W=function(){var n,e,t,r,a,i,c,o=Object(O.useContext)(_).clickedShow,s=(null===(n=o.show.rating)||void 0===n?void 0:n.average)<3?"red":(null===(e=o.show.rating)||void 0===e?void 0:e.average)<5?"orange":(null===(t=o.show.rating)||void 0===t?void 0:t.average)<8?"yellow":"green";return Object(T.jsxs)(K,{children:[Object(T.jsx)("div",{className:"img-desc",children:Object(T.jsx)("img",{src:null===(r=o.show.image)||void 0===r?void 0:r.original,alt:""})}),Object(T.jsxs)("div",{className:"text-desc",children:[Object(T.jsxs)("div",{className:"links-btns",children:[o.show.officialSite&&Object(T.jsx)("a",{href:o.show.officialSite,children:Object(T.jsx)(G,{children:"To Website"})}),Object(T.jsx)(D.b,{to:"/description/show",children:Object(T.jsx)(G,{children:"About Show"})}),Object(T.jsx)(D.b,{to:"/description/cast",children:Object(T.jsx)(G,{children:"Cast"})}),Object(T.jsx)(D.b,{to:"/",className:"back-btn",children:Object(T.jsx)(G,{children:"Back"})})]}),Object(T.jsx)("div",{className:"upper-plank",children:Object(T.jsx)("div",{className:"rating",style:{color:s},children:null===(a=o.show.rating)||void 0===a?void 0:a.average})}),Object(T.jsx)("div",{className:"show-name",children:Object(T.jsxs)("span",{children:['"',o.name,'"']})}),Object(T.jsxs)("div",{className:"show-numbers",children:[Object(T.jsxs)("span",{children:["Season: ",o.season," "]}),Object(T.jsxs)("span",{children:["Ep: ",o.number]})]}),o.summary&&Object(T.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:o.summary}}),Object(T.jsxs)("div",{className:"network-name",children:[Object(T.jsx)("span",{children:null===(i=o.show.schedule)||void 0===i?void 0:i.time})," ",o.show.network&&"on"," ",null===(c=o.show.network)||void 0===c?void 0:c.name]})]})]})},V=A.default.div(l||(l=Object(z.a)(["\n  padding: 5rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: space-between;\n  overflow: hidden;\n\n  .img-desc {\n    width: 100%;\n    border: 1px solid #667eeab5;\n    align-self: flex-start;\n\n    img {\n      display: block;\n      width: 100%;\n      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.5);\n    }\n  }\n\n  .text-desc {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    color: gray;\n\n    .upper-plank {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 2rem;\n\n      .rating {\n        width: 25rem;\n        font-size: 1.5rem;\n        font-weight: 600;\n        border-top: 1px solid gray;\n      }\n    }\n\n    .sub-info {\n      display: flex;\n      justify-content: space-between;\n    }\n\n    Button {\n      margin: 0;\n    }\n\n    .summary {\n      text-align: justify;\n      margin: 3rem 0;\n    }\n\n    .schedule,\n    .show-name,\n    .network-name {\n      color: #fff;\n      font-size: 1.1rem;\n      letter-spacing: 0.1rem;\n    }\n\n    .schedule {\n      margin: 2rem 0;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      line-height: 2rem;\n    }\n\n    .network-name {\n      /* margin-bottom: 2rem; */\n      margin: 2rem 0;\n    }\n\n    .links-btns {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 2rem;\n      margin-top: 1.5rem;\n\n      a {\n        text-decoration: none;\n        color: #fff;\n        margin: 1rem;\n\n        button {\n          margin: 0;\n          width: 13rem;\n        }\n      }\n    }\n  }\n\n  @media screen and (min-width: 900px) {\n    flex-direction: row;\n\n    .img-desc {\n      width: 25rem;\n    }\n\n    .text-desc {\n      width: 40rem;\n      margin-left: 5rem;\n\n      .links-btns {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        margin-bottom: 2rem;\n        margin-top: 0;\n\n        a {\n          margin: 0;\n\n          button {\n            margin: 0;\n            width: 9rem;\n          }\n        }\n      }\n    }\n  }\n"]))),Y=function(){var n,e,t,r,a,i,c,o,s=Object(O.useContext)(_).clickedShow,l=(null===(n=s.show.rating)||void 0===n?void 0:n.average)<3?"red":(null===(e=s.show.rating)||void 0===e?void 0:e.average)<5?"orange":(null===(t=s.show.rating)||void 0===t?void 0:t.average)<8?"yellow":"green";return Object(T.jsxs)(V,{children:[Object(T.jsx)("div",{className:"img-desc",children:Object(T.jsx)("img",{src:null===(r=s.show.image)||void 0===r?void 0:r.original,alt:""})}),Object(T.jsxs)("div",{className:"text-desc",children:[Object(T.jsxs)("div",{className:"links-btns",children:[s.show.officialSite&&Object(T.jsx)("a",{href:s.show.officialSite,children:Object(T.jsx)(G,{children:"To Website"})}),Object(T.jsx)(D.b,{to:"/description/cast",children:Object(T.jsx)(G,{children:"Cast"})}),Object(T.jsx)(D.b,{to:"/description",className:"back-btn",children:Object(T.jsx)(G,{children:"Back"})})]}),Object(T.jsx)("div",{className:"upper-plank",children:Object(T.jsx)("div",{className:"rating",style:{color:l},children:null===(a=s.show.rating)||void 0===a?void 0:a.average})}),Object(T.jsx)("div",{className:"show-name",children:s.show.name}),Object(T.jsxs)("div",{className:"sub-info",children:[Object(T.jsx)("span",{children:s.show.type}),Object(T.jsxs)("span",{children:["Premiered: ",s.show.premiered]})]}),Object(T.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:s.show.summary}}),Object(T.jsxs)("div",{className:"schedule",children:[Object(T.jsx)("span",{children:null===(i=s.show.schedule)||void 0===i?void 0:i.days.join(", ")})," ",Object(T.jsx)("span",{className:"time",children:null===(c=s.show.schedule)||void 0===c?void 0:c.time})]}),Object(T.jsxs)("div",{className:"network-name",children:[s.show.network&&"On"," ",null===(o=s.show.network)||void 0===o?void 0:o.name]})]})]})},q=t(4),Q=A.default.div(d||(d=Object(z.a)(["\n  margin-top: 5rem;\n  display: flex;\n  justify-content: center;\n\n  .lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n\n    div {\n      box-sizing: border-box;\n      display: block;\n      position: absolute;\n      width: 64px;\n      height: 64px;\n      margin: 8px;\n      border: 8px solid #fff;\n      border-radius: 50%;\n      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n      border-color: #667eea transparent transparent transparent;\n\n      &:nth-child(1) {\n        animation-delay: -0.45s;\n      }\n      &:nth-child(2) {\n        animation-delay: -0.3s;\n      }\n      &:nth-child(3) {\n        animation-delay: -0.15s;\n      }\n    }\n\n    @keyframes lds-ring {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n  }\n\n  @media screen and (min-width: 900px) {\n    margin-top: 8rem;\n  }\n"]))),X=function(){return Object(T.jsx)(Q,{children:Object(T.jsxs)("div",{className:"lds-ring",children:[Object(T.jsx)("div",{}),Object(T.jsx)("div",{}),Object(T.jsx)("div",{}),Object(T.jsx)("div",{})]})})},Z=A.default.div(m||(m=Object(z.a)(["\n  .top-bar {\n    margin: auto;\n    max-width: 75rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 3.5rem 0 0;\n\n    .show-name {\n      margin: 0 1.5rem 0.5rem;\n      color: gray;\n      font-size: 1.5rem;\n    }\n\n    .back-btn {\n      button {\n        width: 13rem;\n      }\n    }\n  }\n\n  .replacer {\n    margin-top: 5rem;\n    width: 100%;\n    text-align: center;\n\n    .replacer-text {\n      color: #667eea;\n      font-size: 2rem;\n    }\n  }\n\n  @media screen and (min-width: 900px) {\n    .top-bar {\n      flex-direction: row;\n      padding: 1.5rem 0;\n\n      .show-name {\n        margin: 0 1.5rem;\n        color: gray;\n        font-size: 2rem;\n      }\n\n      .back-btn {\n        button {\n          width: 9rem;\n        }\n      }\n    }\n  }\n"]))),$=A.default.div(b||(b=Object(z.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n\n  .cast-box {\n    margin: 1rem;\n    padding: 1rem;\n    height: 12rem;\n    width: 22rem;\n    display: flex;\n    color: #fff;\n    border-radius: 8px;\n    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.5);\n\n    .cast-img-box {\n      /* min-width: 7rem; */\n      margin-right: 2rem;\n      background-color: #000;\n      border-radius: 8px;\n      border: 1px solid #667eeab5;\n    }\n\n    .cast-img {\n      height: 100%;\n      /* width: 100%; */\n      display: block;\n      border-radius: 8px;\n    }\n\n    .replacer {\n      height: 100%;\n      width: 7.1rem;\n      background-color: #000;\n      border-radius: 8px;\n    }\n\n    .wrapper {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n\n      .name-box {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        font-size: 0.8rem;\n\n        .name {\n          font-size: 1rem;\n          font-weight: 600;\n          margin-bottom: 1rem;\n        }\n      }\n\n      Button {\n        margin: 0;\n      }\n    }\n  }\n"]))),nn=function(){var n=Object(O.useState)([]),e=Object(C.a)(n,2),t=e[0],r=e[1],a=Object(O.useState)(!0),i=Object(C.a)(a,2),c=i[0],o=i[1],s=Object(q.f)(),l=Object(O.useContext)(_),d=l.clickedShow.show.name,m=JSON.parse(window.localStorage.getItem("savedShow")).show.id;return Object(O.useEffect)((function(){(function(){var n=Object(N.a)(S.a.mark((function n(){var e,t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,fetch("https://api.tvmaze.com/shows/".concat(m,"/cast"));case 4:return e=n.sent,n.next=7,e.json();case 7:t=n.sent,r(t),o(!1),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}})()()}),[m]),Object(T.jsxs)(Z,{children:[Object(T.jsxs)("div",{className:"top-bar",children:[Object(T.jsx)("h1",{className:"show-name",children:d}),Object(T.jsx)("span",{className:"back-btn",children:Object(T.jsx)(G,{onClick:s.goBack,children:"Back"})})]}),c?Object(T.jsx)(X,{}):t.length||c?Object(T.jsx)($,{children:t.map((function(n,e){return Object(T.jsxs)("div",{className:"cast-box",children:[Object(T.jsx)("div",{className:"cast-img-box",children:n.person.image?Object(T.jsx)("img",{src:n.person.image.medium,className:"cast-img",alt:""}):Object(T.jsx)("div",{className:"replacer"})}),Object(T.jsxs)("p",{className:"wrapper",children:[Object(T.jsxs)("span",{className:"name-box",children:[Object(T.jsx)("span",{className:"name",children:n.person.name})," ",n.character.name&&"as ".concat(n.character.name)]}),Object(T.jsx)(D.b,{to:"/actor",onClick:function(){l.handleActor(n.person.id)},children:Object(T.jsx)(G,{children:"About"})})]})]},e)}))}):Object(T.jsx)("div",{className:"replacer",children:Object(T.jsx)("span",{className:"replacer-text",children:"Nothing Found"})})]})},en=A.default.div(j||(j=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .back-btn {\n    margin-left: auto;\n    align-self: flex-start;\n    Button {\n      margin: 0;\n    }\n  }\n  .actor-box {\n    margin: auto;\n    padding-top: 3rem;\n    display: flex;\n\n    .actor-info {\n      width: 20rem;\n      margin: 0 3rem;\n      display: flex;\n      flex-direction: column;\n      color: #fff;\n      border-top: 1px solid gray;\n      border-bottom: 1px solid gray;\n\n      .actor-name {\n        font-size: 1.1rem;\n        letter-spacing: 0.1rem;\n        padding: 1rem 0;\n      }\n\n      .actor-desc {\n        margin-bottom: 0.5rem;\n      }\n    }\n\n    .actor-img-box {\n      width: 18rem;\n      border: 1px solid #667eeab5;\n      background-color: #000;\n      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.5);\n      align-self: flex-start;\n\n      .actor-img {\n        width: 100%;\n        display: block;\n      }\n\n      .replacer {\n        width: 100%;\n        height: 20rem;\n        background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      }\n    }\n  }\n"]))),tn=function(){var n,e=Object(O.useContext)(_),t=Object(q.f)(),r=Object(O.useState)(e.clickedActor),a=Object(C.a)(r,2),i=a[0],c=a[1];return Object(O.useEffect)((function(){(function(){var n=Object(N.a)(S.a.mark((function n(){var e,t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.tvmaze.com/people/".concat(i));case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,c(t),window.localStorage.setItem("savedActor",JSON.stringify(t)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}})()()}),[i]),Object(T.jsx)(en,{children:Object(T.jsxs)("div",{className:"actor-box",children:[Object(T.jsx)("div",{className:"actor-img-box",children:i.image?Object(T.jsx)("img",{src:i.image.original,alt:"",className:"actor-img"}):Object(T.jsx)("div",{className:"replacer"})}),Object(T.jsxs)("div",{className:"actor-info",children:[Object(T.jsx)("p",{className:"actor-name",children:i.name}),Object(T.jsx)("p",{className:"actor-desc",children:null===(n=i.country)||void 0===n?void 0:n.name}),Object(T.jsx)("p",{className:"actor-desc",children:i.gender}),Object(T.jsx)("p",{className:"actor-desc",children:i.birthday})]}),Object(T.jsx)("span",{className:"back-btn",onClick:t.goBack,children:Object(T.jsx)(G,{children:"Back"})})]})})},rn=A.default.form(h||(h=Object(z.a)(["\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  button {\n    margin: 2.5rem;\n    width: 13rem;\n  }\n\n  input {\n    margin-top: 2.5rem;\n    width: 18rem;\n    padding-left: 0.8rem;\n    outline: none;\n    height: 1.8rem;\n    border-radius: 10px;\n    /* border: 1px solid rgba(255, 255, 255, 0.3); */\n    border: 1px solid #667eeab5;\n    background-color: transparent;\n    color: #fff;\n    font-size: 1.1rem;\n    transition: all 0.2s ease-in-out;\n    &:hover {\n      background-color: rgba(255, 255, 255, 0.1);\n    }\n  }\n\n  @media screen and (min-width: 900px) {\n    margin: 1.5rem;\n    margin-left: auto;\n    flex-direction: row;\n\n    button {\n      margin: 0 0 0 2rem;\n      width: 9rem;\n    }\n\n    input {\n      margin-top: 0;\n      width: 20rem;\n    }\n  }\n"]))),an=A.default.main(u||(u=Object(z.a)(["\n  background-image: linear-gradient(to right bottom, #434343 0%, black 100%);\n  width: 100%;\n  min-height: 100vh;\n  padding: 0 3rem 3rem 3rem;\n\n  .replacer {\n    margin-top: 5rem;\n    width: 100%;\n    text-align: center;\n\n    .replacer-text {\n      color: #667eea;\n      font-size: 2rem;\n    }\n  }\n\n  @media screen and (min-width: 900px) {\n    .replacer {\n      margin-top: 8rem;\n    }\n  }\n"]))),cn=A.default.div(p||(p=Object(z.a)(["\n  margin: 0 auto 2rem;\n  display: flex;\n  flex-flow: column-reverse wrap;\n  align-items: center;\n\n  @media screen and (min-width: 900px) {\n    max-width: 75rem;\n    margin: 2rem auto;\n    display: flex;\n    flex-flow: row wrap;\n  }\n"]))),on=A.default.div(x||(x=Object(z.a)(["\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 210px);\n  justify-content: center;\n  gap: 2rem;\n  overflow: visible;\n\n  .link {\n    text-decoration: none;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    justify-content: flex-start;\n    align-items: center;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    &:hover {\n      transform: scale(108%);\n    }\n    p {\n      margin-top: 0.4rem;\n      font-size: 0.8rem;\n      color: #fff;\n\n      .accentend-info {\n        font-size: 1rem;\n        font-weight: 600;\n      }\n    }\n  }\n\n  img {\n    display: block;\n    border-radius: 8px;\n    background-color: #000;\n  }\n"]))),sn=function(n){var e=n.isLoading,t=n.type,r=n.genre,a=n.search,i=n.handleSearch,c=n.handleSubmit,o=n.showMovies,s=n.handleFilter,l=n.handleCountry,d=Object(O.useContext)(_);return Object(T.jsx)(an,{children:Object(T.jsxs)(q.c,{children:[Object(T.jsxs)(q.a,{path:"/",exact:!0,children:[Object(T.jsxs)(cn,{children:[Object(T.jsxs)(M,{as:!0,select:!0,value:t,name:"type",placeholder:"Type",onChange:s,children:[Object(T.jsx)("option",{value:"All",children:"All"}),Object(T.jsx)("option",{value:"Talk Show",children:"Talk Show"}),Object(T.jsx)("option",{value:"Game Show",children:"Game Show"}),Object(T.jsx)("option",{value:"Scripted",children:"Scripted"}),Object(T.jsx)("option",{value:"Documentary",children:"Documentary"}),Object(T.jsx)("option",{value:"Reality",children:"Reality"}),Object(T.jsx)("option",{value:"News",children:"News"}),Object(T.jsx)("option",{value:"Sports",children:"Sports"})]}),Object(T.jsxs)(M,{value:r,name:"genre",placeholder:"Genre",onChange:s,children:[Object(T.jsx)("option",{value:"All",children:"All"}),Object(T.jsx)("option",{value:"Drama",children:"Drama"}),Object(T.jsx)("option",{value:"Comedy",children:"Comedy"}),Object(T.jsx)("option",{value:"Family",children:"Family"}),Object(T.jsx)("option",{value:"Romance",children:"Romance"}),Object(T.jsx)("option",{value:"Sports",children:"Sports"}),Object(T.jsx)("option",{value:"Music",children:"Music"}),Object(T.jsx)("option",{value:"Action",children:"Action"}),Object(T.jsx)("option",{value:"Adventure",children:"Adventure"})]}),Object(T.jsxs)(M,{placeholder:"Country",onChange:l,children:[Object(T.jsx)("option",{value:"US",children:"US"}),Object(T.jsx)("option",{value:"GB",children:"UK"}),Object(T.jsx)("option",{value:"RU",children:"Russia"}),Object(T.jsx)("option",{value:"JP",children:"Japan"}),Object(T.jsx)("option",{value:"KR",children:"South Korea"})]}),Object(T.jsxs)(rn,{onSubmit:c,children:[Object(T.jsx)("input",{type:"text",value:a,onChange:i}),Object(T.jsx)(G,{type:"submit",children:"Search"})]})]}),e?Object(T.jsx)(X,{}):o.length||e?Object(T.jsx)(on,{children:o.map((function(n){var e;return n.show.image&&Object(T.jsxs)(D.b,{to:"/description",onClick:function(){d.handleShowSave(n)},className:"link",children:[Object(T.jsx)("img",{src:n.show.image.medium,alt:""}),Object(T.jsxs)("p",{children:[n.airdate?"Today":n.show.schedule.days.join(", ")," ",Object(T.jsx)("span",{className:"accentend-info",children:n.airtime||n.show.schedule.time})," ",n.show.network&&"on"," ",Object(T.jsx)("span",{className:"accentend-info",children:null===(e=n.show.network)||void 0===e?void 0:e.name})]})]},n.id||n.show.id)}))}):Object(T.jsx)("div",{className:"replacer",children:Object(T.jsx)("span",{className:"replacer-text",children:"Nothing Found"})})]}),Object(T.jsx)(q.a,{path:"/description",exact:!0,children:Object(T.jsx)(W,{})}),Object(T.jsx)(q.a,{path:"/description/show",exact:!0,children:Object(T.jsx)(Y,{})}),Object(T.jsx)(q.a,{path:"/description/cast",exact:!0,children:Object(T.jsx)(nn,{})}),Object(T.jsx)(q.a,{path:"/actor",children:Object(T.jsx)(tn,{})})]})})},ln=A.default.footer(g||(g=Object(z.a)(["\n  height: 8rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.3);\n  background-image: linear-gradient(to right bottom, #434343 0%, black 100%);\n"]))),dn=function(){return Object(T.jsx)(ln,{children:Object(T.jsxs)("p",{children:["Copyright \xa9 ",(new Date).getFullYear()]})})},mn=t(24),bn=t.n(mn),jn=t(25),hn=Object(A.default)(bn.a)(f||(f=Object(z.a)(["\n  background-color: red;\n  border-radius: 50%;\n  width: 5rem;\n  height: 5rem;\n  border: 1px solid #000;\n  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #000;\n  font-size: 1.3rem;\n  font-weight: 600;\n\n  .icon {\n    font-size: 3.5rem;\n  }\n"]))),un=function(){return Object(T.jsx)(hn,{text:"UP",distance:1100,breakpoint:768,speed:500,target:0,icon:Object(T.jsx)(jn.a,{className:"icon"})})},pn=function(){var n=Object(O.useState)([]),e=Object(C.a)(n,2),t=e[0],r=e[1],a=Object(O.useState)([]),i=Object(C.a)(a,2),c=i[0],o=i[1],s=Object(O.useState)(""),l=Object(C.a)(s,2),d=l[0],m=l[1],b=Object(O.useState)(""),j=Object(C.a)(b,2),h=j[0],u=j[1],p=Object(O.useState)("US"),x=Object(C.a)(p,2),g=x[0],f=x[1],w=Object(O.useState)(""),v=Object(C.a)(w,2),y=v[0],k=v[1],z=Object(O.useState)(""),A=Object(C.a)(z,2),D=A[0],B=A[1],R=Object(O.useState)(!0),I=Object(C.a)(R,2),J=I[0],F=I[1];function M(n){var e=new Date;return n?(e.setDate(e.getDate()+n),e.toISOString().slice(0,10)):e.toISOString().slice(0,10)}var U={today:M(0),tomorrow:M(1)},G=Object(O.useState)(U.today),H=Object(C.a)(G,2),P=H[0],_=H[1];Object(O.useEffect)((function(){(function(){var n=Object(N.a)(S.a.mark((function n(){var e,t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,F(!0),n.next=4,fetch("https://api.tvmaze.com/schedule?country=".concat(g,"&date=").concat(P));case 4:return e=n.sent,n.next=7,e.json();case 7:t=n.sent,setTimeout((function(){r(t),F(!1)}),2e3),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}})()()}),[g,P]);Object(O.useEffect)((function(){var n=t.filter((function(n){return y?y.includes(n.show.type):n})).filter((function(n){return D?n.show.genres.includes(D):n})).filter((function(n){var e,t,r;return h?(null===(e=n.show.name)||void 0===e?void 0:e.toLowerCase().includes(h.toLowerCase()))||(null===(t=n.show.network)||void 0===t?void 0:t.name.toLowerCase().includes(h.toLowerCase()))||(null===(r=n.name)||void 0===r?void 0:r.toLowerCase().includes(h.toLowerCase())):n}));o(n)}),[y,D,t,h]);return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(L,{handleReset:function(){f("US"),u(""),k(""),B(""),_(U.today)},dates:U,filterDate:P,filterDateHandler:function(){_(P===U.today?U.tomorrow:U.today),F(!0)}}),Object(T.jsx)(E,{}),Object(T.jsx)(sn,{isLoading:J,type:y,genre:D,search:d,handleSearch:function(n){m(n.target.value)},handleSubmit:function(n){n.preventDefault(),u(d),m("")},showMovies:c,handleFilter:function(n){"type"===n.target.name&&k(n.target.value),"genre"===n.target.name&&B(n.target.value),"All"===n.target.value&&("type"===n.target.name&&k(""),"genre"===n.target.name&&B(""))},handleCountry:function(n){f(n.target.value),F(!0)}}),Object(T.jsx)(un,{}),Object(T.jsx)(dn,{})]})},xn=function(){var n=Object(q.g)().pathname;return Object(O.useEffect)((function(){"/"!==n&&window.scrollTo(0,0)}),[n]),null};y.a.render(Object(T.jsx)(w.a.StrictMode,{children:Object(T.jsx)(P,{children:Object(T.jsxs)(D.a,{children:[Object(T.jsx)(xn,{}),Object(T.jsx)(pn,{})]})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3d66baf4.chunk.js.map