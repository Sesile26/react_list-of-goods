(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s=n(5),o=n.n(s),r=n(3),c=n(6),i=n(7),a=n(9),u=n(8),l=n(2),b=n.n(l),h=n(1),d=n.n(h),j=(n(14),n(15),n(0)),g=function(t){var e=t.goods;return Object(j.jsx)("ul",{className:"list",children:e.map((function(t){return Object(j.jsx)("li",{className:"list__item",children:t},t)}))})},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={goods:p,isVisible:!1},t.start=function(){t.setState((function(t){return{isVisible:!t.isVisible}}))},t.reverse=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).reverse()}}))},t.sortByAlphabet=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLength=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t.reset=function(){t.setState({goods:[].concat(p)})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isVisible,n=t.goods;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("button",{type:"button",onClick:this.start,className:d()("button",{"button-hidden":!0===e}),children:"Start"}),Object(j.jsx)("button",{type:"button",onClick:this.reverse,className:d()("button"),children:"Reverse"}),Object(j.jsx)("button",{type:"button",onClick:this.sortByAlphabet,className:d()("button"),children:"sortByAlphabet"}),Object(j.jsx)("button",{type:"button",onClick:this.sortByLength,className:d()("button"),children:"sortByLength"}),Object(j.jsx)("button",{type:"button",onClick:this.reset,className:d()("button"),children:"reset"}),e&&Object(j.jsx)(g,{goods:n})]})}}]),n}(b.a.Component),m=f;o.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.252322ae.chunk.js.map