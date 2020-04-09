(function(t){function e(e){for(var n,s,c=e[0],u=e[1],o=e[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var u=a[c];0!==r[u]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var l=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},1499:function(t,e){},"216c":function(t,e,a){"use strict";var n=a("b0d5"),r=a("5033"),i=(a("5b49"),a("2877")),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},5033:function(t,e,a){"use strict";var n=a("97bf"),r=a.n(n);e["default"]=r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Nav"),a("router-view",{key:t.$route.fullPath}),a("Banner"),a("ProjectsList"),a("a",{attrs:{href:"#","uk-totop":"","uk-scroll":""}})],1)},s=[],c=a("216c"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-section"},[a("h2",{staticClass:"uk-article-title"},[t._v("/projects")]),t._m(0),a("div",{staticClass:"uk-grid-match uk-child-width-1-3@m",attrs:{"uk-grid":""}},t._l(t.fullList,(function(e){return a("router-link",{key:e.id,attrs:{to:{path:"/project/"+e.id}}},[a("div",{staticClass:"uk-card uk-card-default",attrs:{"uk-scrollspy":"target: > div; cls: uk-animation-fade; delay: 500"}},[a("div",{staticClass:"uk-card-media-top"},[a("img",{attrs:{src:e.image,alt:e.name,height:"100"}})]),a("div",{staticClass:"uk-card-body"},[t._l(e.technologies,(function(e){return a("span",{key:e.id,staticClass:"uk-label",attrs:{id:"category"}},[t._v(" "+t._s(e)+" ")])})),a("p",{staticClass:"uk-text-large",attrs:{id:"title"}},[t._v(t._s(e.title))])],2)])])})),1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-grid-small uk-child-width-auto",attrs:{"uk-grid":""}},[a("div",[a("a",{staticClass:"uk-button uk-button-text",attrs:{href:"#"}},[t._v("#React")])]),a("div",[a("a",{staticClass:"uk-button uk-button-text",attrs:{href:"#"}},[t._v("#TypeScript")])])])}],l=(a("d3b7"),{data:function(){return console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_API_URL),{api_url:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_API_URL||"https://secret-taiga-29398.herokuapp.com/api/v1/projects",projects:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;fetch(this.api_url).then((function(t){return t.json()})).then((function(e){t.projects=e.projects,console.log(t.projects)}))}},computed:{amount:function(){return this.projects.length},fullList:function(){return this.projects}}}),f=l,d=(a("8c7f"),a("2877")),p=Object(d["a"])(f,u,o,!1,null,null,null),v=p.exports,h=a("84af"),b={name:"App",components:{Nav:c["default"],Banner:h["default"],ProjectsList:v}},_=b,k=(a("034f"),Object(d["a"])(_,i,s,!1,null,null,null)),m=k.exports;n["a"].config.productionTip=!1,n["a"].use(r["a"]);var g=new r["a"]({mode:"history",routes:[{path:"/"},{path:"/project/:id"},{path:"/category/:id"}]});new n["a"]({router:g,render:function(t){return t(m)}}).$mount("#app")},"58de":function(t,e,a){},"5b49":function(t,e,a){"use strict";var n=a("58de"),r=a.n(n);r.a},"7f40":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"uk-section"},[a("h1",[t._v("Hi, I am a Fullstack Developer from Oslo.")]),a("p",{staticClass:"uk-text-lead"},[t._v(" Currently Consultant "),a("a",{attrs:{href:"https://www.bouvet.no/",target:"_blank"}},[t._v("@Bouvet")])]),a("p",{staticClass:"uk-text-lead"},[t._v(" Previously Front-end Developer "),a("a",{attrs:{href:"https://ludensgruppen.no/",target:"_blank"}},[t._v("@Ludens")])]),a("p",{staticClass:"uk-text-lead"},[t._v("Learns fast. Goal oriented. Thinks creatively.")]),a("div",{staticClass:"uk-grid-small uk-child-width-auto",attrs:{"uk-grid":""}},[a("div",[a("a",{attrs:{href:"mailto:litchacha@gmail.com",target:"_blank",rel:"noopener noreferrer"}},[a("span",{staticClass:"iconify",staticStyle:{"font-size":"48px"},attrs:{"data-inline":"false","data-icon":"ic:outline-email"}})])]),a("div",[a("a",{attrs:{href:"https://github.com/NancyBolstad",target:"_blank"}},[a("span",{staticClass:"iconify",staticStyle:{"font-size":"48px"},attrs:{"data-inline":"false","data-icon":"jam:github-square"}})])]),a("div",[a("a",{attrs:{href:"https://www.linkedin.com/in/nancy-bolstad/",target:"_blank"}},[a("span",{staticClass:"iconify",staticStyle:{"font-size":"48px"},attrs:{"data-inline":"false","data-icon":"ant-design:linkedin-outlined"}})])])])])}];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},"7fdb":function(t,e,a){},"84af":function(t,e,a){"use strict";var n=a("7f40"),r=a("95ca"),i=(a("f230"),a("2877")),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"85ec":function(t,e,a){},"8c7f":function(t,e,a){"use strict";var n=a("ece7"),r=a.n(n);r.a},"95ca":function(t,e,a){"use strict";var n=a("1499"),r=a.n(n);e["default"]=r.a},"97bf":function(t,e){},b0d5:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-section"},[a("nav",{staticClass:"uk-navbar-container",attrs:{"uk-navbar":""}},[a("div",{staticClass:"uk-navbar-left"},[a("ul",{staticClass:"uk-navbar-nav"},[a("li",[a("a",{attrs:{href:"/",id:"logo"}},[t._v("Nancy Bolstad")])])])])])])}];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},ece7:function(t,e,a){},f230:function(t,e,a){"use strict";var n=a("7fdb"),r=a.n(n);r.a}});
//# sourceMappingURL=app.cb65119b.js.map