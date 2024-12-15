(function(){var t={1406:function(t,e,n){"use strict";n.r(e);var s=n(5130),i=n(9903);(0,s.Ef)(i["default"]).mount("#app")},9903:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var s=n(6768);function i(t,e,i,o,r,u){const c=(0,s.g2)("MyHeader"),a=(0,s.g2)("ClientList"),l=(0,s.g2)("SubjectList"),d=(0,s.g2)("ClientNotes"),p=(0,s.g2)("MyFooter");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(c,{pictureURL:n(1407)(`${r.pictureURL}`),name:r.name,birthday:r.birthday,ssn:r.ssn,status:r.status,dependants:r.dependants},null,8,["pictureURL","name","birthday","ssn","status","dependants"]),(0,s.Lk)("main",null,[(0,s.Lk)("aside",null,[(0,s.bF)(a,{clients:r.clients,onShowClient:u.displayClient},null,8,["clients","onShowClient"]),(0,s.bF)(l,{clients:r.clients,name:r.name,onShowNote:u.displayNote},null,8,["clients","name","onShowNote"])]),(0,s.bF)(d,{subject:r.selectSubject},null,8,["subject"])]),(0,s.bF)(p)],64)}var o=n(825),r=n(1582),u=n(8528),c=n(1113),a=n(1590),l={name:"App",components:{MyHeader:o["default"],ClientList:r["default"],SubjectList:u["default"],ClientNotes:c["default"],MyFooter:a["default"]},data(){return{clients:[],selectSubject:null,name:"",birthday:"",ssn:"",status:"",dependants:null,pictureURL:"./assets/blank-photo-icon.jpg"}},methods:{async fetchclients(){const t=await fetch("http://localhost:5555/clients "),e=await t.json();return console.log(e),e},displayNote(t){console.log("TEST"),this.selectSubject=t},displayClient(t){this.name=t.name,this.birthday=t.dob,this.ssn=t.ssn,this.status=t.status,this.dependants=t.dependants,this.pictureURL=t.pictureURL}},async created(){this.clients=await this.fetchclients(),this.clients.length>0&&(console.log("tes test test"),this.name=this.clients[0].name,this.ssn=this.clients[0].ssn,this.status=this.clients[0].status,this.dependants=this.clients[0].dependants,this.birthday=this.clients[0].dob,this.pictureURL=this.clients[0].pictureURL)}},d=n(1241);const p=(0,d.A)(l,[["render",i]]);var f=p},1582:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var s=n(6768),i=n(4232);const o={id:"client-list"},r={class:"client"},u=["onClick"];function c(t,e,n,c,a,l){return(0,s.uX)(),(0,s.CE)("section",o,[e[0]||(e[0]=(0,s.Lk)("h2",null,"Client List",-1)),(0,s.Lk)("div",r,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.clients,(t=>((0,s.uX)(),(0,s.CE)("p",{key:t.name,onClick:e=>l.displayClient(t)},(0,i.v_)(t.name),9,u)))),128))])])}var a={name:"ClientList",props:{clients:Array},methods:{displayClient(t){this.$emit("show-client",t)}}},l=n(1241);const d=(0,l.A)(a,[["render",c],["__scopeId","data-v-7aa86bc6"]]);var p=d},1113:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var s=n(6768),i=n(4232);const o={key:0,class:"Note"};function r(t,e,n,r,u,c){return n.subject?((0,s.uX)(),(0,s.CE)("section",o,[e[0]||(e[0]=(0,s.Lk)("h1",null,"Note",-1)),(0,s.Lk)("h2",null,(0,i.v_)(n.subject.subject),1),(0,s.Lk)("h3",null,(0,i.v_)(n.subject.date),1),(0,s.Lk)("p",null,(0,i.v_)(n.subject.note),1)])):(0,s.Q3)("",!0)}var u={props:{subject:Object}},c=n(1241);const a=(0,c.A)(u,[["render",r]]);var l=a},1590:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var s=n(6768);function i(t,e){return(0,s.uX)(),(0,s.CE)("footer")}var o=n(1241);const r={},u=(0,o.A)(r,[["render",i],["__scopeId","data-v-8bba8270"]]);var c=u},825:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return b}});var s=n(6768),i=n(4232);const o={id:"profile"},r=["src"],u={id:"birthday"},c={id:"ssn"},a={id:"status"},l={id:"depenants"};function d(t,e,n,d,p,f){return(0,s.uX)(),(0,s.CE)(s.FK,null,[e[4]||(e[4]=(0,s.Lk)("header",null,"Tax Client CRM",-1)),(0,s.Lk)("div",o,[(0,s.Lk)("img",{src:n.pictureURL,alt:""},null,8,r),(0,s.Lk)("h1",null,(0,i.v_)(n.name),1),(0,s.Lk)("article",u,[e[0]||(e[0]=(0,s.Lk)("h3",null,"DOB:",-1)),(0,s.Lk)("p",null,(0,i.v_)(n.birthday),1)]),(0,s.Lk)("article",c,[e[1]||(e[1]=(0,s.Lk)("h3",null,"SSN:",-1)),(0,s.Lk)("p",null,(0,i.v_)(n.ssn),1)]),(0,s.Lk)("article",a,[e[2]||(e[2]=(0,s.Lk)("h3",null,"STATUS:",-1)),(0,s.Lk)("p",null,(0,i.v_)(n.status),1)]),(0,s.Lk)("article",l,[e[3]||(e[3]=(0,s.Lk)("h3",null,"DEPENDANTS:",-1)),(0,s.Lk)("p",null,(0,i.v_)(n.dependants),1)])])],64)}var p={name:"MyHeader",props:{pictureURL:String,name:String,birthday:String,ssn:String,status:String,dependants:Number}},f=n(1241);const h=(0,f.A)(p,[["render",d],["__scopeId","data-v-678a30de"]]);var b=h},8528:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var s=n(6768),i=n(4232);const o={id:"subject-list"},r={class:"subject"},u=["onClick"];function c(t,e,n,c,a,l){return(0,s.uX)(),(0,s.CE)("section",o,[e[0]||(e[0]=(0,s.Lk)("h2",null,"Subjects",-1)),(0,s.Lk)("div",r,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.getSubject,(t=>((0,s.uX)(),(0,s.CE)("p",{key:t.subject,onClick:e=>l.showNote(t)},(0,i.v_)(t.subject),9,u)))),128))])])}n(8992),n(2577);var a={name:"SubjectList",props:{clients:Array,name:String},computed:{getSubject(){const t=this.clients.find((t=>t.name===this.name));return this.showNote(t?.notes[0]),t?t.notes:[]}},methods:{showNote(t){this.$emit("show-note",t),console.log(t)}}},l=n(1241);const d=(0,l.A)(a,[["render",c],["__scopeId","data-v-18f2cf30"]]);var p=d},1407:function(t,e,n){var s={"./App":9903,"./App.vue":9903,"./assets/Image1.jpg":7624,"./assets/Image2.jpg":2375,"./assets/Image3.jpg":8538,"./assets/Image4.jpg":9225,"./assets/Image5.jpg":1180,"./assets/blank-photo-icon.jpg":3413,"./components/ClientList":1582,"./components/ClientList.vue":1582,"./components/ClientNotes":1113,"./components/ClientNotes.vue":1113,"./components/MyFooter":1590,"./components/MyFooter.vue":1590,"./components/MyHeader":825,"./components/MyHeader.vue":825,"./components/SubjectList":8528,"./components/SubjectList.vue":8528,"./main":1406,"./main.js":1406};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=o,t.exports=i,i.id=1407},7624:function(t,e,n){"use strict";t.exports=n.p+"img/Image1.b9fae2a5.jpg"},2375:function(t,e,n){"use strict";t.exports=n.p+"img/Image2.61b425d5.jpg"},8538:function(t,e,n){"use strict";t.exports=n.p+"img/Image3.815226ae.jpg"},9225:function(t,e,n){"use strict";t.exports=n.p+"img/Image4.bcc3c9bf.jpg"},1180:function(t,e,n){"use strict";t.exports=n.p+"img/Image5.7efa393c.jpg"},3413:function(t,e,n){"use strict";t.exports=n.p+"img/blank-photo-icon.95942860.jpg"}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,s,i,o){if(!s){var r=1/0;for(l=0;l<t.length;l++){s=t[l][0],i=t[l][1],o=t[l][2];for(var u=!0,c=0;c<s.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](s[c])}))?s.splice(c--,1):(u=!1,o<r&&(r=o));if(u){t.splice(l--,1);var a=i();void 0!==a&&(e=a)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[s,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,o,r=s[0],u=s[1],c=s[2],a=0;if(r.some((function(e){return 0!==t[e]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(c)var l=c(n)}for(e&&e(s);a<r.length;a++)o=r[a],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},s=self["webpackChunktaxclient"]=self["webpackChunktaxclient"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[504],(function(){return n(1406)}));s=n.O(s)})();
//# sourceMappingURL=app.8fc584d0.js.map