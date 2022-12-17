import{S as nt,i as at,s as ot,a as it,e as B,c as st,b as z,g as de,t as F,d as pe,f as G,h as J,j as lt,o as Ie,k as ct,l as ft,m as ut,n as be,p as C,q as dt,r as pt,u as ht,v as W,w as Y,x as Te,y as X,z as Z,A as ce}from"./chunks/index-3e526574.js";import{S as tt,I as q,g as ze,f as He,a as Ee,b as fe,s as M,i as We,c as ue,P as Ye,d as mt,e as _t,h as gt}from"./chunks/singletons-81fa3f20.js";function yt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function wt(n){return n.split("%25").map(decodeURI).join("%25")}function vt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const bt=["href","pathname","search","searchParams","toString","toJSON"];function Et(n,e){const r=new URL(n);for(const s of bt){let i=r[s];Object.defineProperty(r,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return kt(r),r}function kt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Lt(n){return n.replace(/\/$/,"")+Rt}function Ot(n){let e=5381;if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let s=r.length;for(;s;)e=e*33^r[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(n,e)=>((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(De(n)),he(n,e));const te=new Map;function It(n,e){const r=De(n,e),s=document.querySelector(r);if(s!=null&&s.textContent){const{body:i,...u}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(r,{body:i,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,u))}return he(n,e)}function St(n,e,r){if(te.size>0){const s=De(n,r),i=te.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(r==null?void 0:r.cache))return new Response(i.body,i.init);te.delete(s)}}return he(e,r)}function De(n,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Ot(e.body)}"]`),s}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${Dt(n).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,d)=>{if(d%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map(T=>parseInt(T,16))));const g=At.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,R,$,j]=g;return e.push({name:$,matcher:j,optional:!!w,rest:!!R,chained:R?d===1&&t[0]==="":!1}),R?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function Tt(n){return!/^\([^)]+\)$/.test(n)}function Dt(n){return n.slice(1).split("/").filter(Tt)}function Nt(n,e,r){const s={},i=n.slice(1);let u="";for(let t=0;t<e.length;t+=1){const f=e[t];let _=i[t];if(f.chained&&f.rest&&u&&(_=_?u+"/"+_:u),u="",_===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!r[f.matcher](_)){if(f.optional&&f.chained){let d=i.indexOf(void 0,t);if(d===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)u=_;else return}for(;d>=t;)i[d]=i[d-1],d-=1;continue}return}s[f.name]=_}}if(!u)return s}function ke(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(n,e,r,s){const i=new Set(e);return Object.entries(r).map(([f,[_,d,g]])=>{const{pattern:w,params:R}=Pt(f),$={id:f,exec:j=>{const T=w.exec(j);if(T)return Nt(T,R,s)},errors:[1,...g||[]].map(j=>n[j]),layouts:[0,...d||[]].map(t),leaf:u(_)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function u(f){const _=f<0;return _&&(f=~f),[_,n[f]]}function t(f){return f===void 0?f:[i.has(f),n[f]]}}function $t(n){let e,r,s;var i=n[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=W(i,u(n))),{c(){e&&Y(e.$$.fragment),r=B()},l(t){e&&Te(e.$$.fragment,t),r=B()},m(t,f){e&&X(e,t,f),z(t,r,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),i!==(i=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,r.parentNode,r)):e=null}else i&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(r),e&&Z(e,t)}}}function jt(n){let e,r,s;var i=n[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return i&&(e=W(i,u(n))),{c(){e&&Y(e.$$.fragment),r=B()},l(t){e&&Te(e.$$.fragment,t),r=B()},m(t,f){e&&X(e,t,f),z(t,r,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),i!==(i=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,r.parentNode,r)):e=null}else i&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(r),e&&Z(e,t)}}}function Vt(n){let e,r,s;var i=n[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=W(i,u(n))),{c(){e&&Y(e.$$.fragment),r=B()},l(t){e&&Te(e.$$.fragment,t),r=B()},m(t,f){e&&X(e,t,f),z(t,r,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),i!==(i=t[0][1])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}i?(e=W(i,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,r.parentNode,r)):e=null}else i&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(r),e&&Z(e,t)}}}function Xe(n){let e,r=n[5]&&Ze(n);return{c(){e=ct("div"),r&&r.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=ut(e);r&&r.l(i),i.forEach(J),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,i){z(s,e,i),r&&r.m(e,null)},p(s,i){s[5]?r?r.p(s,i):(r=Ze(s),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(s){s&&J(e),r&&r.d()}}}function Ze(n){let e;return{c(){e=dt(n[6])},l(r){e=pt(r,n[6])},m(r,s){z(r,e,s)},p(r,s){s&64&&ht(e,r[6])},d(r){r&&J(e)}}}function Ct(n){let e,r,s,i,u;const t=[jt,$t],f=[];function _(g,w){return g[0][1]?0:1}e=_(n),r=f[e]=t[e](n);let d=n[4]&&Xe(n);return{c(){r.c(),s=it(),d&&d.c(),i=B()},l(g){r.l(g),s=st(g),d&&d.l(g),i=B()},m(g,w){f[e].m(g,w),z(g,s,w),d&&d.m(g,w),z(g,i,w),u=!0},p(g,[w]){let R=e;e=_(g),e===R?f[e].p(g,w):(de(),F(f[R],1,1,()=>{f[R]=null}),pe(),r=f[e],r?r.p(g,w):(r=f[e]=t[e](g),r.c()),G(r,1),r.m(s.parentNode,s)),g[4]?d?d.p(g,w):(d=Xe(g),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},i(g){u||(G(r),u=!0)},o(g){F(r),u=!1},d(g){f[e].d(g),g&&J(s),d&&d.d(g),g&&J(i)}}}function qt(n,e,r){let{stores:s}=e,{page:i}=e,{components:u}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;lt(s.page.notify);let d=!1,g=!1,w=null;return Ie(()=>{const R=s.page.subscribe(()=>{d&&(r(5,g=!0),r(6,w=document.title||"untitled page"))});return r(4,d=!0),R}),n.$$set=R=>{"stores"in R&&r(7,s=R.stores),"page"in R&&r(8,i=R.page),"components"in R&&r(0,u=R.components),"form"in R&&r(1,t=R.form),"data_0"in R&&r(2,f=R.data_0),"data_1"in R&&r(3,_=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(i)},[u,t,f,_,d,g,w,s,i]}class Bt extends nt{constructor(e){super(),at(this,e,qt,Ct,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Gt=function(n,e){return new URL(n,e).href},Qe={},S=function(e,r,s){if(!r||r.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(r.map(u=>{if(u=Gt(u,s),u in Qe)return;Qe[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let g=i.length-1;g>=0;g--){const w=i[g];if(w.href===u&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":Ft,t||(d.as="script",d.crossOrigin=""),d.href=u,document.head.appendChild(d),t)return new Promise((g,w)=>{d.addEventListener("load",g),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Jt={},me=[()=>S(()=>import("./chunks/0-bd1b9d52.js"),["./chunks\\0-bd1b9d52.js","./chunks\\_layout-da46b06b.js","./components\\pages\\_layout.svelte-38faa1df.js","./chunks\\index-3e526574.js","./chunks\\Header-c3362e48.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\GlobalVars-7b71abb1.js","./assets\\Header-259fa824.css","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\PageTransition-bc150e82.js"],import.meta.url),()=>S(()=>import("./chunks/1-41c13e58.js"),["./chunks\\1-41c13e58.js","./components\\pages\\_error.svelte-1fa9d352.js","./chunks\\index-3e526574.js","./chunks\\Error-57ab4bd9.js","./chunks\\notdone-6024d517.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\SideBySideUneven-10e27c22.js","./assets\\ReactiveComp825-f6439cad.css","./chunks\\StackPanel-63eb0327.js","./assets\\StackPanel-d65a0e7d.css","./chunks\\ReactiveComp-116f5297.js","./assets\\ReactiveComp-f3759f45.css","./assets\\Error-c0a8fdda.css","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\Header-c3362e48.js","./chunks\\GlobalVars-7b71abb1.js","./assets\\Header-259fa824.css"],import.meta.url),()=>S(()=>import("./chunks/2-5add43bc.js"),["./chunks\\2-5add43bc.js","./components\\pages\\_page.svelte-ac5a7555.js","./chunks\\index-3e526574.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\Title-e3d92d00.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\PageTransition-bc150e82.js","./assets\\Title-8ec4fb3e.css","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\Comms-9ae42be5.js","./chunks\\StackPanel-63eb0327.js","./assets\\StackPanel-d65a0e7d.css","./chunks\\Card-e5f98b7f.js","./chunks\\HoverCard-075a0469.js","./assets\\HoverCard-b909f606.css","./chunks\\ReactiveComp-116f5297.js","./assets\\ReactiveComp-f3759f45.css","./assets\\Comms-af7ce16f.css","./assets\\SideBySide-1edefaa0.css","./chunks\\prices-2f6f2777.js","./chunks\\ych-90f1038c.js","./chunks\\terms-dae409b5.js","./chunks\\about-19f04270.js","./assets\\_page-3c64d9f4.css"],import.meta.url),()=>S(()=>import("./chunks/3-2d4d65f5.js"),["./chunks\\3-2d4d65f5.js","./components\\pages\\404\\_page.svelte-41686fce.js","./chunks\\index-3e526574.js","./chunks\\Error-57ab4bd9.js","./chunks\\notdone-6024d517.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\SideBySideUneven-10e27c22.js","./assets\\ReactiveComp825-f6439cad.css","./chunks\\StackPanel-63eb0327.js","./assets\\StackPanel-d65a0e7d.css","./chunks\\ReactiveComp-116f5297.js","./assets\\ReactiveComp-f3759f45.css","./assets\\Error-c0a8fdda.css","./chunks\\Header-c3362e48.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\GlobalVars-7b71abb1.js","./assets\\Header-259fa824.css"],import.meta.url),()=>S(()=>import("./chunks/4-b7665db8.js"),["./chunks\\4-b7665db8.js","./components\\pages\\about\\_page.svelte-5381ad24.js","./chunks\\index-3e526574.js","./chunks\\about-19f04270.js","./chunks\\Title-e3d92d00.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\PageTransition-bc150e82.js","./assets\\Title-8ec4fb3e.css","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\Card-e5f98b7f.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\ReactiveComp825-3aabec41.js","./assets\\ReactiveComp825-f6439cad.css","./chunks\\app-2417c957.js","./assets\\app-031a5f51.css","./assets\\SideBySide-1edefaa0.css","./chunks\\StackPanel-63eb0327.js","./assets\\StackPanel-d65a0e7d.css","./chunks\\SideBySideUneven-10e27c22.js","./assets\\_page-0140265b.css"],import.meta.url),()=>S(()=>import("./chunks/5-07ae4003.js"),["./chunks\\5-07ae4003.js","./components\\pages\\chars\\alex\\_page.svelte-65922970.js","./chunks\\index-3e526574.js","./chunks\\NotDone-b2f1aeca.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\notdone-6024d517.js","./chunks\\Card-e5f98b7f.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css"],import.meta.url),()=>S(()=>import("./chunks/6-ddefc8ff.js"),["./chunks\\6-ddefc8ff.js","./components\\pages\\chars\\edge_husky\\_page.svelte-65922970.js","./chunks\\index-3e526574.js","./chunks\\NotDone-b2f1aeca.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\notdone-6024d517.js","./chunks\\Card-e5f98b7f.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css"],import.meta.url),()=>S(()=>import("./chunks/7-4ade1184.js"),["./chunks\\7-4ade1184.js","./components\\pages\\chars\\kai\\_page.svelte-65922970.js","./chunks\\index-3e526574.js","./chunks\\NotDone-b2f1aeca.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\notdone-6024d517.js","./chunks\\Card-e5f98b7f.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css"],import.meta.url),()=>S(()=>import("./chunks/8-407068f1.js"),["./chunks\\8-407068f1.js","./components\\pages\\chars\\piper\\_page.svelte-65922970.js","./chunks\\index-3e526574.js","./chunks\\NotDone-b2f1aeca.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\notdone-6024d517.js","./chunks\\Card-e5f98b7f.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css"],import.meta.url),()=>S(()=>import("./chunks/9-26c73be4.js"),["./chunks\\9-26c73be4.js","./components\\pages\\chars\\richard\\_page.svelte-65922970.js","./chunks\\index-3e526574.js","./chunks\\NotDone-b2f1aeca.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\notdone-6024d517.js","./chunks\\Card-e5f98b7f.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css"],import.meta.url),()=>S(()=>import("./chunks/10-0ff398a9.js"),["./chunks\\10-0ff398a9.js","./components\\pages\\chars\\teg\\_page.svelte-65922970.js","./chunks\\index-3e526574.js","./chunks\\NotDone-b2f1aeca.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\notdone-6024d517.js","./chunks\\Card-e5f98b7f.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css"],import.meta.url),()=>S(()=>import("./chunks/11-1c0729ce.js"),["./chunks\\11-1c0729ce.js","./components\\pages\\dev\\_page.svelte-3f4c6c60.js","./chunks\\index-3e526574.js","./chunks\\Header-c3362e48.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\GlobalVars-7b71abb1.js","./assets\\Header-259fa824.css"],import.meta.url),()=>S(()=>import("./chunks/12-d52e0fbc.js"),["./chunks\\12-d52e0fbc.js","./components\\pages\\nsfw\\_page.svelte-ecf85e5e.js","./chunks\\index-3e526574.js","./chunks\\Title-e3d92d00.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\PageTransition-bc150e82.js","./assets\\Title-8ec4fb3e.css","./chunks\\NotDone-b2f1aeca.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\notdone-6024d517.js","./chunks\\Card-e5f98b7f.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\Comms-9ae42be5.js","./chunks\\StackPanel-63eb0327.js","./assets\\StackPanel-d65a0e7d.css","./chunks\\HoverCard-075a0469.js","./assets\\HoverCard-b909f606.css","./chunks\\ReactiveComp-116f5297.js","./assets\\ReactiveComp-f3759f45.css","./assets\\Comms-af7ce16f.css","./assets\\SideBySide-1edefaa0.css"],import.meta.url),()=>S(()=>import("./chunks/13-4ecebd15.js"),["./chunks\\13-4ecebd15.js","./components\\pages\\prices\\_page.svelte-8e1fd743.js","./chunks\\index-3e526574.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\prices-2f6f2777.js","./chunks\\Title-e3d92d00.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\PageTransition-bc150e82.js","./assets\\Title-8ec4fb3e.css","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\Comms-9ae42be5.js","./chunks\\StackPanel-63eb0327.js","./assets\\StackPanel-d65a0e7d.css","./chunks\\Card-e5f98b7f.js","./chunks\\HoverCard-075a0469.js","./assets\\HoverCard-b909f606.css","./chunks\\ReactiveComp-116f5297.js","./assets\\ReactiveComp-f3759f45.css","./assets\\Comms-af7ce16f.css","./assets\\SideBySide-1edefaa0.css","./chunks\\ReactiveComp825-3aabec41.js","./assets\\ReactiveComp825-f6439cad.css","./chunks\\SideBySideUneven-10e27c22.js","./assets\\_page-51a5e80a.css"],import.meta.url),()=>S(()=>import("./chunks/14-e4ec4aac.js"),["./chunks\\14-e4ec4aac.js","./components\\pages\\prices\\headshot\\_page.svelte-d0f4560a.js","./chunks\\index-3e526574.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\InfoPage-833f3b61.js","./chunks\\Title-e3d92d00.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\PageTransition-bc150e82.js","./assets\\Title-8ec4fb3e.css","./chunks\\HoverCard-075a0469.js","./assets\\HoverCard-b909f606.css","./chunks\\app-2417c957.js","./assets\\app-031a5f51.css","./assets\\SideBySide-1edefaa0.css","./chunks\\ReactiveComp825-3aabec41.js","./assets\\ReactiveComp825-f6439cad.css","./assets\\InfoPage-0d238ac8.css","./assets\\StackPanel-d65a0e7d.css"],import.meta.url),()=>S(()=>import("./chunks/15-4af56414.js"),["./chunks\\15-4af56414.js","./components\\pages\\prices\\illustration\\_page.svelte-72a79ffe.js","./chunks\\index-3e526574.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\InfoPage-833f3b61.js","./chunks\\Title-e3d92d00.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\PageTransition-bc150e82.js","./assets\\Title-8ec4fb3e.css","./chunks\\HoverCard-075a0469.js","./assets\\HoverCard-b909f606.css","./chunks\\app-2417c957.js","./assets\\app-031a5f51.css","./assets\\SideBySide-1edefaa0.css","./chunks\\ReactiveComp825-3aabec41.js","./assets\\ReactiveComp825-f6439cad.css","./assets\\InfoPage-0d238ac8.css","./assets\\StackPanel-d65a0e7d.css"],import.meta.url),()=>S(()=>import("./chunks/16-20dd1e9a.js"),["./chunks\\16-20dd1e9a.js","./components\\pages\\prices\\more\\_page.svelte-3d1309ec.js","./chunks\\index-3e526574.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\Title-e3d92d00.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\PageTransition-bc150e82.js","./assets\\Title-8ec4fb3e.css","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\InfoPage-833f3b61.js","./chunks\\HoverCard-075a0469.js","./assets\\HoverCard-b909f606.css","./chunks\\app-2417c957.js","./assets\\app-031a5f51.css","./assets\\SideBySide-1edefaa0.css","./chunks\\ReactiveComp825-3aabec41.js","./assets\\ReactiveComp825-f6439cad.css","./assets\\InfoPage-0d238ac8.css","./assets\\StackPanel-d65a0e7d.css"],import.meta.url),()=>S(()=>import("./chunks/17-b6e49e69.js"),["./chunks\\17-b6e49e69.js","./components\\pages\\prices\\refsheet\\_page.svelte-2ae4737d.js","./chunks\\index-3e526574.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\InfoPage-833f3b61.js","./chunks\\Title-e3d92d00.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\PageTransition-bc150e82.js","./assets\\Title-8ec4fb3e.css","./chunks\\HoverCard-075a0469.js","./assets\\HoverCard-b909f606.css","./chunks\\app-2417c957.js","./assets\\app-031a5f51.css","./assets\\SideBySide-1edefaa0.css","./chunks\\ReactiveComp825-3aabec41.js","./assets\\ReactiveComp825-f6439cad.css","./assets\\InfoPage-0d238ac8.css","./assets\\StackPanel-d65a0e7d.css"],import.meta.url),()=>S(()=>import("./chunks/18-b485c95c.js"),["./chunks\\18-b485c95c.js","./components\\pages\\prices\\stickers\\_page.svelte-30382119.js","./chunks\\index-3e526574.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\InfoPage-833f3b61.js","./chunks\\Title-e3d92d00.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\PageTransition-bc150e82.js","./assets\\Title-8ec4fb3e.css","./chunks\\HoverCard-075a0469.js","./assets\\HoverCard-b909f606.css","./chunks\\app-2417c957.js","./assets\\app-031a5f51.css","./assets\\SideBySide-1edefaa0.css","./chunks\\ReactiveComp825-3aabec41.js","./assets\\ReactiveComp825-f6439cad.css","./assets\\InfoPage-0d238ac8.css","./assets\\StackPanel-d65a0e7d.css"],import.meta.url),()=>S(()=>import("./chunks/19-c13f0561.js"),["./chunks\\19-c13f0561.js","./components\\pages\\terms\\_page.svelte-f604bf6b.js","./chunks\\index-3e526574.js","./chunks\\Title-e3d92d00.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\PageTransition-bc150e82.js","./assets\\Title-8ec4fb3e.css","./chunks\\terms-dae409b5.js","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\Card-e5f98b7f.js","./chunks\\GlobalVars-7b71abb1.js","./assets\\_page-7a702405.css"],import.meta.url),()=>S(()=>import("./chunks/20-8b236d34.js"),["./chunks\\20-8b236d34.js","./components\\pages\\ych\\_page.svelte-01fced2b.js","./chunks\\index-3e526574.js","./chunks\\GlobalVars-7b71abb1.js","./chunks\\ych-90f1038c.js","./chunks\\Title-e3d92d00.js","./chunks\\index-37897ebf.js","./chunks\\singletons-81fa3f20.js","./chunks\\PageTransition-bc150e82.js","./assets\\Title-8ec4fb3e.css","./chunks\\Body-42f789e4.js","./assets\\Body-590815ab.css","./chunks\\NotDone-b2f1aeca.js","./chunks\\notdone-6024d517.js","./chunks\\Card-e5f98b7f.js","./chunks\\Comms-9ae42be5.js","./chunks\\StackPanel-63eb0327.js","./assets\\StackPanel-d65a0e7d.css","./chunks\\HoverCard-075a0469.js","./assets\\HoverCard-b909f606.css","./chunks\\ReactiveComp-116f5297.js","./assets\\ReactiveComp-f3759f45.css","./assets\\Comms-af7ce16f.css","./assets\\SideBySide-1edefaa0.css"],import.meta.url)],Kt=[],Mt={"/":[2],"/404":[3],"/about":[4],"/chars/alex":[5],"/chars/edge_husky":[6],"/chars/kai":[7],"/chars/piper":[8],"/chars/richard":[9],"/chars/teg":[10],"/dev":[11],"/nsfw":[12],"/prices":[13],"/prices/headshot":[14],"/prices/illustration":[15],"/prices/more":[16],"/prices/refsheet":[17],"/prices/stickers":[18],"/terms":[19],"/ych":[20]},zt={handleError:({error:n})=>{console.error(n)}};class Se{constructor(e,r){this.status=e,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,r){this.status=e,this.location=r}}async function Ht(n){var e;for(const r in n)if(typeof((e=n[r])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,i])=>[s,await i])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function er(n){if(typeof n=="number")return s(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,r=Array(e.length);function s(i,u=!1){if(i===Wt)return;if(i===Xt)return NaN;if(i===Zt)return 1/0;if(i===Qt)return-1/0;if(i===xt)return-0;if(u)throw new Error("Invalid input");if(i in r)return r[i];const t=e[i];if(!t||typeof t!="object")r[i]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":r[i]=new Date(t[1]);break;case"Set":const _=new Set;r[i]=_;for(let w=1;w<t.length;w+=1)_.add(s(t[w]));break;case"Map":const d=new Map;r[i]=d;for(let w=1;w<t.length;w+=2)d.set(s(t[w]),s(t[w+1]));break;case"RegExp":r[i]=new RegExp(t[1],t[2]);break;case"Object":r[i]=Object(t[1]);break;case"BigInt":r[i]=BigInt(t[1]);break;case"null":const g=Object.create(null);r[i]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=s(t[w+1]);break}else{const f=new Array(t.length);r[i]=f;for(let _=0;_<t.length;_+=1){const d=t[_];d!==Yt&&(f[_]=s(d))}}else{const f={};r[i]=f;for(const _ in t){const d=t[_];f[_]=s(d)}}return r[i]}return s(0)}const Re=Ut(me,Kt,Mt,Jt),Ae=me[0],Pe=me[1];Ae();Pe();let re={};try{re=JSON.parse(sessionStorage[tt])}catch{}function Le(n){re[n]=ue()}function tr({target:n,base:e}){var Je;const r=document.documentElement,s=[];let i=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,d=!0,g=!1,w=!1,R=!1,$=!1,j,T=(Je=history.state)==null?void 0:Je[q];T||(T=Date.now(),history.replaceState({...history.state,[q]:T},"",location.href));const _e=re[T];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let K,Ne,ne;async function Ue(){ne=ne||Promise.resolve(),await ne,ne=null;const a=new URL(location.href),o=ie(a,!0);i=null,await je(o,a,[])}async function ge(a,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:h=!1},m,b){return typeof a=="string"&&(a=new URL(a,ze(document))),se({url:a,scroll:o?ue():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:b,accepted:()=>{h&&($=!0)},blocked:()=>{},type:"goto"})}async function $e(a){const o=ie(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return i={id:o.id,promise:qe(o).then(c=>(c.type==="loaded"&&c.state.error&&(i=null),c))},i.promise}async function ae(...a){const c=Re.filter(l=>a.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function je(a,o,c,l,p={},h){var b,v;Ne=p;let m=a&&await qe(a);if(m||(m=await Ge(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Ne!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(o.pathname))m=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(m.location,o).href,{},[...c,o.pathname],p),!1;else((v=(b=m.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await M.updated.check()&&await le(o);if(s.length=0,$=!1,g=!0,l&&l.details){const{details:y}=l,L=y.replaceState?0:1;y.state[q]=T+=L,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(i=null,_?(t=m.state,m.props.page&&(m.props.page.url=o),j.$set(m.props)):Ve(m),l){const{scroll:y,keepfocus:L}=l;if(L||Oe(),await ce(),d){const O=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await ce();d=!0,m.props.page&&(K=m.props.page),h&&h(),g=!1}function Ve(a){var l;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),K=a.props.page,j=new Bt({target:n,props:{...a.props,stores:M},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(p=>p(c)),_=!0}async function Q({url:a,params:o,branch:c,status:l,error:p,route:h,form:m}){const b=c.filter(Boolean);let v="never";for(const I of c)(I==null?void 0:I.slash)!==void 0&&(v=I.slash);a.pathname=yt(a.pathname,v),a.search=a.search;const y={type:"loaded",state:{url:a,params:o,branch:c,error:p,route:h},props:{components:b.map(I=>I.node.component)}};m!==void 0&&(y.props.form=m);let L={},O=!K;for(let I=0;I<b.length;I+=1){const E=b[I];L={...L,...E.data},(O||!t.branch.some(N=>N===E))&&(y.props[`data_${I}`]=L,O=O||Object.keys(E.data??{}).length>0)}return O||(O=Object.keys(K.data).length!==Object.keys(L).length),(!t.url||a.href!==t.url.href||t.error!==p||m!==void 0||O)&&(y.props.page={error:p,params:o,route:h,status:l,url:new URL(a),form:m??null,data:O?L:K.data}),y}async function ye({loader:a,parent:o,url:c,params:l,route:p,server_data_node:h}){var y,L,O;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((y=v.universal)!=null&&y.load){let V=function(...E){for(const N of E){const{href:U}=new URL(N,c);b.dependencies.add(U)}};const I={route:{get id(){return b.route=!0,p.id}},params:new Proxy(l,{get:(E,N)=>(b.params.add(N),E[N])}),data:(h==null?void 0:h.data)??null,url:Et(c,()=>{b.url=!0}),async fetch(E,N){let U;E instanceof Request?(U=E.url,N={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...N}):U=E;const k=new URL(U,c).href;return V(k),_?St(U,k,N):It(U,N)},setHeaders:()=>{},depends:V,parent(){return b.parent=!0,o()}};m=await v.universal.load.call(null,I)??null,m=m?await Ht(m):null}return{node:v,loader:a,server:h,universal:(L=v.universal)!=null&&L.load?{type:"data",data:m,uses:b}:null,data:m??(h==null?void 0:h.data)??null,slash:((O=v.universal)==null?void 0:O.trailingSlash)??(h==null?void 0:h.slash)}}function Ce(a,o,c,l,p){if($)return!0;if(!l)return!1;if(l.parent&&a||l.route&&o||l.url&&c)return!0;for(const h of l.params)if(p[h]!==t.params[h])return!0;for(const h of l.dependencies)if(s.some(m=>m(new URL(h))))return!0;return!1}function we(a,o){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?o??null:null}async function qe({id:a,invalidating:o,url:c,params:l,route:p}){if((i==null?void 0:i.id)===a)return i.promise;const{errors:h,layouts:m,leaf:b}=p,v=[...m,b];h.forEach(k=>k==null?void 0:k().catch(()=>{})),v.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const L=t.url?a!==t.url.pathname+t.url.search:!1,O=t.route?a!==t.route.id:!1,V=v.reduce((k,P,D)=>{var x;const A=t.branch[D],H=!!(P!=null&&P[0])&&((A==null?void 0:A.loader)!==P[1]||Ce(k.some(Boolean),O,L,(x=A.server)==null?void 0:x.uses,l));return k.push(H),k},[]);if(V.some(Boolean)){try{y=await et(c,V)}catch(k){return oe({status:500,error:await ee(k,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const I=y==null?void 0:y.nodes;let E=!1;const N=v.map(async(k,P)=>{var x;if(!k)return;const D=t.branch[P],A=I==null?void 0:I[P];if((!A||A.type==="skip")&&k[1]===(D==null?void 0:D.loader)&&!Ce(E,O,L,(x=D.universal)==null?void 0:x.uses,l))return D;if(E=!0,(A==null?void 0:A.type)==="error")throw A;return ye({loader:k[1],url:c,params:l,route:p,parent:async()=>{var Me;const Ke={};for(let ve=0;ve<P;ve+=1)Object.assign(Ke,(Me=await N[ve])==null?void 0:Me.data);return Ke},server_data_node:we(A===void 0&&k[0]?{type:"skip"}:A??null,D==null?void 0:D.server)})});for(const k of N)k.catch(()=>{});const U=[];for(let k=0;k<v.length;k+=1)if(v[k])try{U.push(await N[k])}catch(P){if(P instanceof xe)return{type:"redirect",location:P.location};let D=500,A;I!=null&&I.includes(P)?(D=P.status??D,A=P.error):P instanceof Se?(D=P.status,A=P.body):A=await ee(P,{params:l,url:c,route:{id:p.id}});const H=await Be(k,U,h);return H?await Q({url:c,params:l,branch:U.slice(0,H.idx).concat(H.node),status:D,error:A,route:p}):await Ge(c,{id:p.id},A,D)}else U.push(void 0);return await Q({url:c,params:l,branch:U,status:200,error:null,route:p,form:o?void 0:null})}async function Be(a,o,c){for(;a--;)if(c[a]){let l=a;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:a,error:o,url:c,route:l}){const p={},h=await Ae();let m=null;if(h.server)try{const y=await et(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const b=await ye({loader:Ae,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:we(m)}),v={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:c,params:p,branch:[b,v],status:a,error:o,route:null})}function ie(a,o){if(We(a,e))return;const c=wt(a.pathname.slice(e.length)||"/");for(const l of Re){const p=l.exec(c);if(p)return{id:a.pathname+a.search,invalidating:o,route:l,params:vt(p),url:a}}}function Fe({url:a,type:o,intent:c,delta:l}){var b,v;let p=!1;const h={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:a},willUnload:!c,type:o};l!==void 0&&(h.delta=l);const m={...h,cancel:()=>{p=!0}};return w||u.before_navigate.forEach(y=>y(m)),p?null:h}async function se({url:a,scroll:o,keepfocus:c,redirect_chain:l,details:p,type:h,delta:m,nav_token:b,accepted:v,blocked:y}){const L=ie(a,!1),O=Fe({url:a,type:h,delta:m,intent:L});if(!O){y();return}Le(T),v(),w=!0,_&&M.navigating.set(O),await je(L,a,l,{scroll:o,keepfocus:c,details:p},b,()=>{w=!1,u.after_navigate.forEach(V=>V(O)),M.navigating.set(null)})}async function Ge(a,o,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await oe({status:l,error:c,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function rt(){let a;r.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(a),a=setTimeout(()=>{l(m,2)},20)});function o(h){l(h.composedPath()[0],1)}r.addEventListener("mousedown",o),r.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(ae(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(h,m){const b=He(h,r);if(!b)return;const{url:v,external:y}=Ee(b,e);if(y)return;const L=fe(b);L.reload||(m<=L.preload_data?$e(v):m<=L.preload_code&&ae(v.pathname))}function p(){c.disconnect();for(const h of r.querySelectorAll("a")){const{url:m,external:b}=Ee(h,e);if(b)continue;const v=fe(h);v.reload||(v.preload_code===Ye.viewport&&c.observe(h),v.preload_code===Ye.eager&&ae(m.pathname))}}u.after_navigate.push(p),p()}return{after_navigate:a=>{Ie(()=>(u.after_navigate.push(a),()=>{const o=u.after_navigate.indexOf(a);u.after_navigate.splice(o,1)}))},before_navigate:a=>{Ie(()=>(u.before_navigate.push(a),()=>{const o=u.before_navigate.indexOf(a);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!_)&&(d=!1)},goto:(a,o={})=>ge(a,o,[]),invalidate:a=>{if(typeof a=="function")s.push(a);else{const{href:o}=new URL(a,location.href);s.push(c=>c.href===o)}return Ue()},invalidateAll:()=>($=!0,Ue()),preload_data:async a=>{const o=new URL(a,ze(document));await $e(o)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Be(t.branch.length,c,l.errors);if(p){const h=await Q({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:a.status??500,error:a.error,route:l});t=h.state,j.$set(h.props),ce().then(Oe)}}else if(a.type==="redirect")ge(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...K,form:a.data,status:a.status}};j.$set(o),a.type==="success"&&ce().then(Oe)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!w){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(h=>h(p))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(T);try{sessionStorage[tt]=JSON.stringify(re)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||rt(),r.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=He(o.composedPath()[0],r);if(!c)return;const{url:l,external:p,has:h}=Ee(c,e),m=fe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||h.download)return;if(p||m.reload){Fe({url:l,type:"link"})||o.preventDefault(),w=!0;return}const[v,y]=l.href.split("#");if(y!==void 0&&v===location.href.split("#")[0]){R=!0,Le(T),t.url=l,M.page.set({...K,url:l}),M.page.notify();return}se({url:l,scroll:m.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),r.addEventListener("submit",o=>{var v;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL(((v=o.submitter)==null?void 0:v.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(h,e))return;const{noscroll:m,reload:b}=fe(o.target);b||(o.preventDefault(),o.stopPropagation(),h.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:h,scroll:m?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[q]){if(o.state[q]===T)return;const l=o.state[q]-T;se({url:new URL(location.href),scroll:re[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=o.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[q]:++T},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&M.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:c,params:l,route:p,data:h,form:m})=>{f=!0;const b=new URL(location.href);({params:l={},route:p={id:null}}=ie(b,!1)||{});let v;try{const y=c.map(async(L,O)=>{const V=h[O];return ye({loader:me[L],url:b,params:l,route:p,parent:async()=>{const I={};for(let E=0;E<O;E+=1)Object.assign(I,(await y[E]).data);return I},server_data_node:we(V)})});v=await Q({url:b,params:l,branch:await Promise.all(y),status:a,error:o,form:m,route:Re.find(({id:L})=>L===p.id)??null})}catch(y){if(y instanceof xe){await le(new URL(y.location,location.href));return}v=await oe({status:y instanceof Se?y.status:500,error:await ee(y,{url:b,params:l,route:p}),url:b,route:p})}Ve(v)}}}async function et(n,e){var u;const r=new URL(n);r.pathname=Lt(n.pathname),r.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await he(r.href),i=await s.json();if(!s.ok)throw new Error(i);return(u=i.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=er(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function ee(n,e){return n instanceof Se?n.body:zt.handleError({error:n,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Oe(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,r=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),r!==null?e.setAttribute("tabindex",r):e.removeAttribute("tabindex")}}async function ar({env:n,hydrate:e,paths:r,target:s,version:i}){mt(r),gt(i);const u=tr({target:s,base:r.base});_t({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{ar as start};