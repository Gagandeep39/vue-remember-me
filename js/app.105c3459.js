(function(e){function t(t){for(var r,i,u=t[0],a=t[1],s=t[2],d=0,b=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==c[a]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-remember-me/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d96":function(e,t,n){"use strict";n("7a19")},"16c0":function(e,t,n){},"3be6":function(e,t,n){"use strict";n("79f3")},"3bea":function(e,t,n){"use strict";n("16c0")},"49f6":function(e,t,n){"use strict";n("a0aa")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,o,i){var u=Object(r["n"])("the-header"),a=Object(r["n"])("the-resource");return Object(r["i"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(u,{title:"Remember Me"}),Object(r["h"])(a)],64)}var o=Object(r["s"])("data-v-76edf96b"),i=o((function(e,t,n,c,o,i){return Object(r["i"])(),Object(r["e"])("header",null,[Object(r["h"])("h1",null,Object(r["p"])(n.title),1)])})),u={props:["title"]};n("3bea");u.render=i,u.__scopeId="data-v-76edf96b";var a=u,s=Object(r["g"])("View"),l=Object(r["g"])("Add");function d(e,t,n,c,o,i){var u=Object(r["n"])("base-button"),a=Object(r["n"])("base-card");return Object(r["i"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(a,null,{default:Object(r["q"])((function(){return[Object(r["h"])(u,{onClick:t[1]||(t[1]=function(e){return i.setSelectedTab("stored-resource")}),mode:i.storedResButtonMode},{default:Object(r["q"])((function(){return[s]})),_:1},8,["mode"]),Object(r["h"])(u,{onClick:t[2]||(t[2]=function(e){return i.setSelectedTab("add-resource")}),mode:i.addResButtonMode},{default:Object(r["q"])((function(){return[l]})),_:1},8,["mode"])]})),_:1}),(Object(r["i"])(),Object(r["e"])(r["b"],null,[(Object(r["i"])(),Object(r["e"])(Object(r["o"])(o.selectedTab)))],1024))],64)}n("c740"),n("a434");var b=Object(r["s"])("data-v-1500bc1a");Object(r["k"])("data-v-1500bc1a");var f=Object(r["h"])("p",null,"Atleast one input value is required",-1),j=Object(r["h"])("p",null,"Please check all iputs and make sure none of them is empty",-1),O=Object(r["g"])("Okay"),p={class:"form-control"},h=Object(r["h"])("label",{for:"title"},"Title",-1),v={type:"text",id:"title",name:"title",ref:"titleInput"},m={class:"form-control"},g=Object(r["h"])("label",{for:"description"},null,-1),k={id:"description",name:"description",rows:"3",ref:"descInput"},_={class:"form-control"},R=Object(r["h"])("label",{for:"link"},"Link",-1),y={type:"url",id:"link",name:"link",ref:"linkInput"},I=Object(r["g"])("Add Resource");Object(r["j"])();var S=b((function(e,t,n,c,o,i){var u=Object(r["n"])("base-button"),a=Object(r["n"])("base-dialog"),s=Object(r["n"])("base-card");return Object(r["i"])(),Object(r["e"])(r["a"],null,[o.inputIsInvalid?(Object(r["i"])(),Object(r["e"])(a,{key:0,title:"Invalid Input",onClose:i.confirmError},{default:b((function(){return[f,j]})),actions:b((function(){return[Object(r["h"])(u,{onClick:i.confirmError},{default:b((function(){return[O]})),_:1},8,["onClick"])]})),_:1},8,["onClose"])):Object(r["f"])("",!0),Object(r["h"])(s,null,{default:b((function(){return[Object(r["h"])("form",{onSubmit:t[1]||(t[1]=Object(r["r"])((function(){return i.submitForm&&i.submitForm.apply(i,arguments)}),["prevent"]))},[Object(r["h"])("div",p,[h,Object(r["h"])("input",v,null,512)]),Object(r["h"])("div",m,[g,Object(r["h"])("textarea",k,null,512)]),Object(r["h"])("div",_,[R,Object(r["h"])("input",y,null,512)]),Object(r["h"])("div",null,[Object(r["h"])(u,{type:"submit"},{default:b((function(){return[I]})),_:1})])],32)]})),_:1})],64)})),w=(n("498a"),{data:function(){return{inputIsInvalid:!1}},methods:{submitForm:function(){var e=this.$refs.titleInput.value,t=this.$refs.descInput.value,n=this.$refs.linkInput.value;""===e.trim()||""===t.trim()||""===n.trim()?this.inputIsInvalid=!0:this.addResource(e,t,n)},confirmError:function(){this.inputIsInvalid=!1}},inject:["addResource"]});n("f06d");w.render=S,w.__scopeId="data-v-1500bc1a";var T=w,C=(n("a4d3"),n("e01a"),n("9911"),Object(r["s"])("data-v-055eec80")),$=C((function(e,t,n,c,o,i){var u=Object(r["n"])("learning-resource");return Object(r["i"])(),Object(r["e"])("ul",null,[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(i.storedResources,(function(e,t){return Object(r["i"])(),Object(r["e"])(u,{key:t,title:e.title,description:e.description,link:e.link,id:e.id},null,8,["title","description","link","id"])})),128))])})),x=Object(r["s"])("data-v-7a03b2e8");Object(r["k"])("data-v-7a03b2e8");var M=Object(r["g"])("Delete");Object(r["j"])();var P=x((function(e,t,n,c,o,i){var u=Object(r["n"])("base-button"),a=Object(r["n"])("base-card");return Object(r["i"])(),Object(r["e"])("li",null,[Object(r["h"])(a,null,{default:x((function(){return[Object(r["h"])("header",null,[Object(r["h"])("h3",null,Object(r["p"])(n.title),1),Object(r["h"])(u,{mode:"flat",onClick:t[1]||(t[1]=function(e){return i.deleteResource(n.id)})},{default:x((function(){return[M]})),_:1})]),Object(r["h"])("p",null,Object(r["p"])(n.description),1),Object(r["h"])("nav",null,[Object(r["h"])("a",{href:n.link,target:"_blank"},"View Resource",8,["href"])])]})),_:1})])})),q={props:["id","title","description","link"],inject:["deleteResource"]};n("885c");q.render=P,q.__scopeId="data-v-7a03b2e8";var A=q,B={inject:["storedResources"],components:{LearningResource:A}};n("9a5c");B.render=$,B.__scopeId="data-v-055eec80";var E=B,F={components:{StoredResource:E,AddResource:T},data:function(){return{selectedTab:"stored-resource",storedResources:[{id:"official-guide",title:"Official Guide",description:"Official VueJS documentation",link:"https://vuejs.org"},{id:"google",title:"Google",description:"Starting point for learning anything",link:"https://vuejs.org"}]}},methods:{setSelectedTab:function(e){this.selectedTab=e},addResource:function(e,t,n){var r={id:(new Date).toISOString(),title:e,description:t,link:n};this.storedResources.unshift(r),this.selectedTab="stored-resource"},deleteResource:function(e){var t=this.storedResources.findIndex((function(t){return t.id===e}));this.storedResources.splice(t,1)}},provide:function(){return{storedResources:this.storedResources,addResource:this.addResource,deleteResource:this.deleteResource}},computed:{storedResButtonMode:function(){return"stored-resource"===this.selectedTab?null:"flat"},addResButtonMode:function(){return"add-resource"===this.selectedTab?null:"flat"}}};F.render=d;var J=F,V={name:"App",data:function(){return{}},components:{TheHeader:a,TheResource:J}};n("0d96");V.render=c;var D=V,G=Object(r["s"])("data-v-71f28ec4"),L=G((function(e,t,n,c,o,i){return Object(r["i"])(),Object(r["e"])("div",null,[Object(r["m"])(e.$slots,"default")])})),H={};n("3be6");H.render=L,H.__scopeId="data-v-71f28ec4";var z=H,K=Object(r["s"])("data-v-4b730890"),N=K((function(e,t,n,c,o,i){return Object(r["i"])(),Object(r["e"])("button",{class:n.mode},[Object(r["m"])(e.$slots,"default")],2)})),Q={props:["mode"]};n("5fbd");Q.render=N,Q.__scopeId="data-v-4b730890";var U=Q,W=Object(r["s"])("data-v-87f89096");Object(r["k"])("data-v-87f89096");var X={open:""},Y=Object(r["g"])("Close");Object(r["j"])();var Z=W((function(e,t,n,c,o,i){var u=Object(r["n"])("base-button");return Object(r["i"])(),Object(r["e"])(r["c"],{to:"body"},[Object(r["h"])("div",{onClick:t[1]||(t[1]=function(t){return e.$emit("close")})}),Object(r["h"])("dialog",X,[Object(r["h"])("header",null,[Object(r["m"])(e.$slots,"header"),Object(r["h"])("h2",null,Object(r["p"])(n.title),1)]),Object(r["h"])("section",null,[Object(r["m"])(e.$slots,"default")]),Object(r["h"])("menu",null,[Object(r["m"])(e.$slots,"actions",{},(function(){return[Object(r["h"])(u,{onClick:t[2]||(t[2]=function(t){return e.$emit("close")})},{default:W((function(){return[Y]})),_:1})]}))])])])})),ee={props:{title:{required:!1,type:String}},emits:["close"]};n("49f6");ee.render=Z,ee.__scopeId="data-v-87f89096";var te=ee;Object(r["d"])(D).component("base-card",z).component("base-button",U).component("base-dialog",te).mount("#app")},"5fbd":function(e,t,n){"use strict";n("956d")},"79f3":function(e,t,n){},"7a19":function(e,t,n){},"7b5d":function(e,t,n){},"7f22":function(e,t,n){},"885c":function(e,t,n){"use strict";n("7b5d")},"956d":function(e,t,n){},"9a5c":function(e,t,n){"use strict";n("bd4b")},a0aa:function(e,t,n){},bd4b:function(e,t,n){},f06d:function(e,t,n){"use strict";n("7f22")}});
//# sourceMappingURL=app.105c3459.js.map