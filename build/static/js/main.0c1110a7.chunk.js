(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c(26),i=c.n(s),n=c(10),r=(c(46),c(18)),o=c(9),l=(c(47),c(38)),j=c.n(l),d=c(39),u=c.n(d),h=c(2),m=Object(a.createContext)(),b=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(h.jsx)(m.Provider,{value:Object(a.useReducer)(t,c),children:s})},O=function(){return Object(a.useContext)(m)},_=c(33),p=(_.a.initializeApp({apiKey:"AIzaSyDY9HayAZLwnGkhQrcfr5cSAnuY8NVURQM",authDomain:"fir-e1a35.firebaseapp.com",projectId:"fir-e1a35",storageBucket:"fir-e1a35.appspot.com",messagingSenderId:"157436184665",appId:"1:157436184665:web:7607e01668d42d961ec948",measurementId:"G-X52J3MM379"}),_.a.auth());var g=function(){var e=O(),t=Object(n.a)(e,1)[0],c=t.basket,a=t.user;return console.log(c),Object(h.jsxs)("nav",{className:"header",children:[Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("img",{className:"header__logo",src:"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png",alt:""})}),Object(h.jsxs)("div",{className:"header__search",children:[Object(h.jsx)("input",{type:"text",className:"header__searchinput"}),Object(h.jsx)(j.a,{className:"header__searchIcon"})]}),Object(h.jsxs)("div",{className:"header__nav",children:[Object(h.jsx)(r.b,{to:!a&&"/login",className:"header__link",children:Object(h.jsxs)("div",{onClick:function(){a&&p.signOut()},className:"header__option",children:[Object(h.jsxs)("span",{className:"header__optionLineOne",children:["Hello,",null===a||void 0===a?void 0:a.email]}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:a?"Sign Out":"Sign In"})]})}),Object(h.jsx)(r.b,{to:"/",className:"header__link",children:Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:" & Orders"})]})}),Object(h.jsx)(r.b,{to:"/",className:"header__link",children:Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(h.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]})}),Object(h.jsx)(r.b,{to:"/checkout",className:"header__link",children:Object(h.jsxs)("div",{className:"header__optionBasket",children:[Object(h.jsx)(u.a,{}),Object(h.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===c||void 0===c?void 0:c.length})]})})]})]})},x=(c(61),c(40));c(62);var v=function(e){var t=e.id,c=e.title,a=e.price,s=e.rating,i=e.image,r=O(),o=Object(n.a)(r,2);Object(x.a)(o[0]);var l=o[1];return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product__info",children:[Object(h.jsx)("p",{children:c}),Object(h.jsxs)("p",{className:"product__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:a})]}),Object(h.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e){return Object(h.jsx)("p",{children:"\u2b50"})}))})]}),Object(h.jsx)("img",{src:i,alt:"image"}),Object(h.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:i,price:a,rating:s}})},children:"Add to Busket"})]})};var f=function(){return Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"banner"}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(v,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(h.jsx)(v,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(v,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(h.jsx)(v,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(h.jsx)(v,{id:"3254345345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(h.jsx)("div",{className:"home__row",children:Object(h.jsx)(v,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})},k=(c(63),c(30)),N=c.n(k);c(65);var S=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,i=e.rating,r=O(),o=Object(n.a)(r,2),l=(o[0].basket,o[1]);return Object(h.jsxs)("div",{className:"checkoutProduct",children:[Object(h.jsx)("img",{className:"checkoutProduct__image",src:a,alt:""}),Object(h.jsxs)("div",{className:"checkoutProduct__info",children:[Object(h.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(h.jsxs)("p",{className:"checkoutProduct__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:s})]}),Object(h.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e){return Object(h.jsx)("p",{children:"\u2b50"})}))}),Object(h.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})},A=(c(66),c(22)),C=c(23),y=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)};var w=function(e,t){switch(console.log(t),t.type){case"SET__USER":return Object(C.a)(Object(C.a)({},e),{},{user:t.user});case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(A.a)(e.basket),a=e.basket.findIndex((function(e){return e.id===t.id}));return a>=0?c.splice(a,1):console.warn("cant remove product (id: ".concat(t.id,") as it now")),Object(C.a)(Object(C.a)({},e),{},{basket:c});default:return e}};var E=function(){var e=O(),t=Object(n.a)(e,2),c=t[0].basket;return t[1],Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(N.a,{renderText:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Subtotal (",c.length," items):",Object(h.jsx)("strong",{children:e})]}),Object(h.jsxs)("small",{className:"subtotal__gift",children:[Object(h.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:y(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(h.jsx)("button",{children:"Proceed to checkout"})]})};var B=function(){var e=O(),t=Object(n.a)(e,1)[0].basket;return Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsxs)("div",{className:"checkout__left",children:[Object(h.jsx)("img",{className:"checkout__ads",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===(null===t||void 0===t?void 0:t.length)?Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Your Shopping Basket is empty"}),Object(h.jsx)("p",{children:'You have no items in your basket. To buy one or more,click "Add to basket" next to the item.'})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),t.map((function(e){return Object(h.jsx)(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),t.length>0&&Object(h.jsx)("div",{className:"checkout__right",children:Object(h.jsx)(E,{})})]})};c(67);var L=function(){var e=Object(o.f)(),t=Object(a.useState)(""),c=Object(n.a)(t,2),s=c[0],i=c[1],l=Object(a.useState)(""),j=Object(n.a)(l,2),d=j[0],u=j[1];return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(h.jsxs)("div",{className:"login__container",children:[Object(h.jsx)("h1",{children:"Sign In"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h5",{children:"E-mail"}),Object(h.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},type:"email"}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{value:d,onChange:function(e){return u(e.target.value)},type:"password"}),Object(h.jsx)("button",{onClick:function(t){t.preventDefault(),p.signInWithEmailAndPassword(s,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton",children:"Sign In"})]}),Object(h.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(h.jsx)("button",{onClick:function(t){t.preventDefault(),p.createUserWithEmailAndPassword(s,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})};var I=function(){var e=O(),t=Object(n.a)(e,2),c=t[0].user,s=t[1];return Object(a.useEffect)((function(){var e=p.onAuthStateChanged((function(e){s(e?{type:"SET__USER",user:e}:{type:"SET__USER",user:null})}));return function(){e()}}),[]),console.log(c),Object(h.jsx)(r.a,{children:Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(o.c,{children:[Object(h.jsxs)(o.a,{path:"/checkout",children:[Object(h.jsx)(g,{}),Object(h.jsx)(B,{})]}),Object(h.jsx)(o.a,{path:"/login",children:Object(h.jsx)(L,{})}),Object(h.jsxs)(o.a,{path:"/",children:[Object(h.jsx)(g,{}),Object(h.jsx)(f,{})]})]})})})};c(68);i.a.render(Object(h.jsx)(b,{initialState:{basket:[],user:null},reducer:w,children:Object(h.jsx)(I,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.0c1110a7.chunk.js.map