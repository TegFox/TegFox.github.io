import{S as W,i as F,s as H,w as R,x as T,y as B,q as D,o as I,B as C,J as U,e as g,k as P,c as p,a as b,d as c,m as j,b as v,f as A,g as w,T as _,M as q,N as L,O as M,n as re,p as ae,Q as oe,l as z,t as S,h as y,E as O,_ as ne}from"../../chunks/index-a55990bb.js";import{g as ie}from"../../chunks/PageTransition-4d4d9b2f.js";import{i as ce}from"../../chunks/prices-7b5e27c8.js";import{C as fe,T as ue}from"../../chunks/Card-fa5957b3.js";import{B as K}from"../../chunks/Body-86e31cf7.js";import{C as me}from"../../chunks/Comms-b0240a92.js";import{S as J}from"../../chunks/StackPanel-068db40f.js";import{R as he,S as de}from"../../chunks/ReactiveComp825-4350eeb7.js";import{c as k}from"../../chunks/commtypes-02d399d7.js";import"../../chunks/stores-6557de0f.js";/* empty css                                                            */var _e="/_app/assets/rarrow-433f56ab.svg";const $e=i=>({}),X=i=>({}),ve=i=>({}),Y=i=>({}),ge=i=>({}),Z=i=>({});function pe(i){let e,l,t,s,o,n,a,r;const f=i[4].above,h=U(f,i,i[5],Z),u=i[4].hidden,d=U(u,i,i[5],Y),$=i[4].below,E=U($,i,i[5],X);return{c(){e=g("div"),l=g("div"),t=g("div"),h&&h.c(),s=P(),o=g("div"),d&&d.c(),n=P(),a=g("div"),E&&E.c(),this.h()},l(m){e=p(m,"DIV",{class:!0,style:!0});var V=b(e);l=p(V,"DIV",{class:!0});var N=b(l);t=p(N,"DIV",{class:!0});var G=b(t);h&&h.l(G),G.forEach(c),s=j(N),o=p(N,"DIV",{class:!0});var Q=b(o);d&&d.l(Q),Q.forEach(c),n=j(N),a=p(N,"DIV",{class:!0});var x=b(a);E&&E.l(x),x.forEach(c),N.forEach(c),V.forEach(c),this.h()},h(){v(t,"class","above svelte-149f7jh"),v(o,"class","hidden svelte-149f7jh"),v(a,"class","below svelte-149f7jh"),v(l,"class","container svelte-149f7jh"),v(e,"class","grad svelte-149f7jh"),A(e,"--gradrevealdetails-max-height-delta",i[3]),A(e,"--gradrevealdetails-border-radius","calc("+i[0]+" - 1px)")},m(m,V){w(m,e,V),_(e,l),_(l,t),h&&h.m(t,null),_(l,s),_(l,o),d&&d.m(o,null),_(l,n),_(l,a),E&&E.m(a,null),r=!0},p(m,V){h&&h.p&&(!r||V&32)&&q(h,f,m,m[5],r?M(f,m[5],V,ge):L(m[5]),Z),d&&d.p&&(!r||V&32)&&q(d,u,m,m[5],r?M(u,m[5],V,ve):L(m[5]),Y),E&&E.p&&(!r||V&32)&&q(E,$,m,m[5],r?M($,m[5],V,$e):L(m[5]),X),(!r||V&8)&&A(e,"--gradrevealdetails-max-height-delta",m[3]),(!r||V&1)&&A(e,"--gradrevealdetails-border-radius","calc("+m[0]+" - 1px)")},i(m){r||(D(h,m),D(d,m),D(E,m),r=!0)},o(m){I(h,m),I(d,m),I(E,m),r=!1},d(m){m&&c(e),h&&h.d(m),d&&d.d(m),E&&E.d(m)}}}function be(i){let e,l;return e=new fe({props:{padding:"0",img:i[1],height:i[2],borderRadius:i[0],$$slots:{default:[pe]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){B(e,t,s),l=!0},p(t,[s]){const o={};s&2&&(o.img=t[1]),s&4&&(o.height=t[2]),s&1&&(o.borderRadius=t[0]),s&41&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function Ee(i,e,l){let{$$slots:t={},$$scope:s}=e,{borderRadius:o="16px"}=e,{img:n}=e,{height:a="auto"}=e,{maxHeightDelta:r}=e;return i.$$set=f=>{"borderRadius"in f&&l(0,o=f.borderRadius),"img"in f&&l(1,n=f.img),"height"in f&&l(2,a=f.height),"maxHeightDelta"in f&&l(3,r=f.maxHeightDelta),"$$scope"in f&&l(5,s=f.$$scope)},[o,n,a,r,t,s]}class we extends W{constructor(e){super();F(this,e,Ee,be,H,{borderRadius:0,img:1,height:2,maxHeightDelta:3})}}function ee(i,e,l){const t=i.slice();return t[2]=e[l],t}function te(i,e,l){const t=i.slice();return t[2]=e[l],t}function De(i){let e,l=k[i[2]].name+"",t;return{c(){e=g("div"),t=S(l),this.h()},l(s){e=p(s,"DIV",{slot:!0,class:!0});var o=b(e);t=y(o,l),o.forEach(c),this.h()},h(){v(e,"slot","above"),v(e,"class","allcaps wide h3 half-ls")},m(s,o){w(s,e,o),_(e,t)},p:O,d(s){s&&c(e)}}}function Ie(i){let e,l=k[i[2]].desc+"",t;return{c(){e=g("div"),t=S(l),this.h()},l(s){e=p(s,"DIV",{slot:!0,class:!0});var o=b(e);t=y(o,l),o.forEach(c),this.h()},h(){v(e,"slot","hidden"),v(e,"class","text half-ls")},m(s,o){w(s,e,o),_(e,t)},p:O,d(s){s&&c(e)}}}function ke(i){let e,l,t,s=k[i[2]].start+"",o;return{c(){e=S("Starting at "),l=g("strong"),t=S("US$"),o=S(s)},l(n){e=y(n,"Starting at "),l=p(n,"STRONG",{});var a=b(l);t=y(a,"US$"),o=y(a,s),a.forEach(c)},m(n,a){w(n,e,a),w(n,l,a),_(l,t),_(l,o)},p:O,d(n){n&&c(e),n&&c(l)}}}function Ve(i){let e,l=k[i[2]].start&&ke(i);return{c(){e=g("div"),l&&l.c(),this.h()},l(t){e=p(t,"DIV",{slot:!0,class:!0});var s=b(e);l&&l.l(s),s.forEach(c),this.h()},h(){v(e,"slot","below"),v(e,"class","text half-ls")},m(t,s){w(t,e,s),l&&l.m(e,null)},p(t,s){k[t[2]].start&&l.p(t,s)},d(t){t&&c(e),l&&l.d()}}}function se(i){let e,l,t,s,o,n;return t=new we({props:{img:k[i[2]].img,height:"100%",maxHeightDelta:"3rem",$$slots:{below:[Ve],hidden:[Ie],above:[De]},$$scope:{ctx:i}}}),{c(){e=g("a"),l=g("div"),R(t.$$.fragment),s=P(),this.h()},l(a){e=p(a,"A",{class:!0,href:!0,style:!0});var r=b(e);l=p(r,"DIV",{class:!0});var f=b(l);T(t.$$.fragment,f),f.forEach(c),s=j(r),r.forEach(c),this.h()},h(){v(l,"class","item-main svelte-14urrel"),v(e,"class","commtypes-grid-item svelte-14urrel"),v(e,"href",o=`${i[0]}${k[i[2]].link}`),A(e,"text-decoration","none"),A(e,"color","white")},m(a,r){w(a,e,r),_(e,l),B(t,l,null),_(e,s),n=!0},p(a,r){const f={};r&128&&(f.$$scope={dirty:r,ctx:a}),t.$set(f),(!n||r&1&&o!==(o=`${a[0]}${k[a[2]].link}`))&&v(e,"href",o)},i(a){n||(D(t.$$.fragment,a),n=!0)},o(a){I(t.$$.fragment,a),n=!1},d(a){a&&c(e),C(t)}}}function Se(i){let e,l,t=Object.keys(k),s=[];for(let n=0;n<t.length;n+=1)s[n]=se(ee(i,t,n));const o=n=>I(s[n],1,1,()=>{s[n]=null});return{c(){e=g("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=p(n,"DIV",{slot:!0,class:!0});var a=b(e);for(let r=0;r<s.length;r+=1)s[r].l(a);a.forEach(c),this.h()},h(){v(e,"slot","main"),v(e,"class","commtypes-grid-outer svelte-14urrel")},m(n,a){w(n,e,a);for(let r=0;r<s.length;r+=1)s[r].m(e,null);l=!0},p(n,a){if(a&1){t=Object.keys(k);let r;for(r=0;r<t.length;r+=1){const f=ee(n,t,r);s[r]?(s[r].p(f,a),D(s[r],1)):(s[r]=se(f),s[r].c(),D(s[r],1),s[r].m(e,null))}for(re(),r=t.length;r<s.length;r+=1)o(r);ae()}},i(n){if(!l){for(let a=0;a<t.length;a+=1)D(s[a]);l=!0}},o(n){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)I(s[a]);l=!1},d(n){n&&c(e),oe(s,n)}}}function ye(i){let e,l,t,s,o=k[i[2]].start+"",n,a,r,f;return{c(){e=g("div"),l=S("Starting at "),t=g("strong"),s=S("US$"),n=S(o),a=P(),r=g("div"),f=S("|"),this.h()},l(h){e=p(h,"DIV",{class:!0});var u=b(e);l=y(u,"Starting at "),t=p(u,"STRONG",{});var d=b(t);s=y(d,"US$"),n=y(d,o),d.forEach(c),u.forEach(c),a=j(h),r=p(h,"DIV",{class:!0});var $=b(r);f=y($,"|"),$.forEach(c),this.h()},h(){v(e,"class","cap"),v(r,"class","cap")},m(h,u){w(h,e,u),_(e,l),_(e,t),_(t,s),_(t,n),w(h,a,u),w(h,r,u),_(r,f)},p:O,d(h){h&&c(e),h&&c(a),h&&c(r)}}}function Re(i){let e,l,t,s,o,n,a=k[i[2]].start&&ye(i);return{c(){a&&a.c(),e=P(),l=g("div"),t=S("Expand"),s=P(),o=g("img"),this.h()},l(r){a&&a.l(r),e=j(r),l=p(r,"DIV",{class:!0});var f=b(l);t=y(f,"Expand"),f.forEach(c),s=j(r),o=p(r,"IMG",{src:!0}),this.h()},h(){v(l,"class","cap"),ne(o.src,n=_e)||v(o,"src",n),A(o,"height","1rem",!1)},m(r,f){a&&a.m(r,f),w(r,e,f),w(r,l,f),_(l,t),w(r,s,f),w(r,o,f)},p(r,f){k[r[2]].start&&a.p(r,f)},d(r){a&&a.d(r),r&&c(e),r&&c(l),r&&c(s),r&&c(o)}}}function Te(i){let e,l,t,s=k[i[2]].name+"",o,n,a,r=k[i[2]].desc+"",f,h,u,d;return u=new J({props:{gap:"4px",align:"center",$$slots:{default:[Re]},$$scope:{ctx:i}}}),{c(){e=g("div"),l=g("div"),t=g("div"),o=S(s),n=P(),a=g("div"),f=S(r),h=P(),R(u.$$.fragment),this.h()},l($){e=p($,"DIV",{class:!0});var E=b(e);l=p(E,"DIV",{class:!0});var m=b(l);t=p(m,"DIV",{class:!0});var V=b(t);o=y(V,s),V.forEach(c),n=j(m),a=p(m,"DIV",{class:!0});var N=b(a);f=y(N,r),N.forEach(c),h=j(m),T(u.$$.fragment,m),m.forEach(c),E.forEach(c),this.h()},h(){v(t,"class","h3 allcaps wide half-ls"),v(a,"class","text half-ls"),v(l,"class","container svelte-14urrel"),v(e,"class","grad svelte-14urrel")},m($,E){w($,e,E),_(e,l),_(l,t),_(t,o),_(l,n),_(l,a),_(a,f),_(l,h),B(u,l,null),d=!0},p($,E){const m={};E&128&&(m.$$scope={dirty:E,ctx:$}),u.$set(m)},i($){d||(D(u.$$.fragment,$),d=!0)},o($){I(u.$$.fragment,$),d=!1},d($){$&&c(e),C(u)}}}function le(i){let e,l,t,s,o,n;return t=new fe({props:{padding:"0",img:k[i[2]].img,height:"100%",$$slots:{default:[Te]},$$scope:{ctx:i}}}),{c(){e=g("a"),l=g("div"),R(t.$$.fragment),s=P(),this.h()},l(a){e=p(a,"A",{href:!0,style:!0});var r=b(e);l=p(r,"DIV",{class:!0});var f=b(l);T(t.$$.fragment,f),f.forEach(c),s=j(r),r.forEach(c),this.h()},h(){v(l,"class","item-alt svelte-14urrel"),v(e,"href",o=`${i[0]}${k[i[2]].link}`),A(e,"text-decoration","none"),A(e,"color","white")},m(a,r){w(a,e,r),_(e,l),B(t,l,null),_(e,s),n=!0},p(a,r){const f={};r&128&&(f.$$scope={dirty:r,ctx:a}),t.$set(f),(!n||r&1&&o!==(o=`${a[0]}${k[a[2]].link}`))&&v(e,"href",o)},i(a){n||(D(t.$$.fragment,a),n=!0)},o(a){I(t.$$.fragment,a),n=!1},d(a){a&&c(e),C(t)}}}function Be(i){let e,l,t=Object.keys(k),s=[];for(let n=0;n<t.length;n+=1)s[n]=le(te(i,t,n));const o=n=>I(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();e=z()},l(n){for(let a=0;a<s.length;a+=1)s[a].l(n);e=z()},m(n,a){for(let r=0;r<s.length;r+=1)s[r].m(n,a);w(n,e,a),l=!0},p(n,a){if(a&1){t=Object.keys(k);let r;for(r=0;r<t.length;r+=1){const f=te(n,t,r);s[r]?(s[r].p(f,a),D(s[r],1)):(s[r]=le(f),s[r].c(),D(s[r],1),s[r].m(e.parentNode,e))}for(re(),r=t.length;r<s.length;r+=1)o(r);ae()}},i(n){if(!l){for(let a=0;a<t.length;a+=1)D(s[a]);l=!0}},o(n){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)I(s[a]);l=!1},d(n){oe(s,n),n&&c(e)}}}function Ce(i){let e,l;return e=new J({props:{slot:"alt",direction:"column",gap:"2rem",$$slots:{default:[Be]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){B(e,t,s),l=!0},p(t,s){const o={};s&129&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function Pe(i){let e,l;return e=new he({props:{$$slots:{alt:[Ce],main:[Se]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){B(e,t,s),l=!0},p(t,[s]){const o={};s&129&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function je(i,e,l){let{routeBase:t}=e;return i.$$set=s=>{"routeBase"in s&&l(0,t=s.routeBase)},[t]}class Ne extends W{constructor(e){super();F(this,e,je,Pe,H,{routeBase:0})}}var Ae="/_app/assets/teg-bffa6ff9.png";function Oe(i){let e,l,t;return{c(){e=g("div"),l=g("img"),this.h()},l(s){e=p(s,"DIV",{slot:!0});var o=b(e);l=p(o,"IMG",{src:!0,class:!0}),o.forEach(c),this.h()},h(){ne(l.src,t=Ae)||v(l,"src",t),v(l,"class","img svelte-18ts1hi"),v(e,"slot","left")},m(s,o){w(s,e,o),_(e,l)},p:O,d(s){s&&c(e)}}}function Ge(i){let e,l,t,s,o,n,a,r,f,h,u;return{c(){e=g("div"),l=g("p"),t=S(`Adult art?\r
            `),s=g("p"),o=S(`I do offer NSFW commissions! While no NSFW art is on this site, I do have some information about the\r
                commission process that may be helpful!\r
            `),n=g("p"),a=g("strong"),r=S("This is only for people 18 and over."),f=P(),h=g("a"),u=S("Learn more!"),this.h()},l(d){e=p(d,"DIV",{slot:!0,class:!0});var $=b(e);l=p($,"P",{class:!0});var E=b(l);t=y(E,`Adult art?\r
            `),E.forEach(c),s=p($,"P",{});var m=b(s);o=y(m,`I do offer NSFW commissions! While no NSFW art is on this site, I do have some information about the\r
                commission process that may be helpful!\r
            `),m.forEach(c),n=p($,"P",{});var V=b(n);a=p(V,"STRONG",{});var N=b(a);r=y(N,"This is only for people 18 and over."),N.forEach(c),V.forEach(c),f=j($),h=p($,"A",{class:!0,href:!0});var G=b(h);u=y(G,"Learn more!"),G.forEach(c),$.forEach(c),this.h()},h(){v(l,"class","h3 allcaps wide"),v(h,"class","text link"),v(h,"href","/nsfw"),v(e,"slot","right"),v(e,"class","text")},m(d,$){w(d,e,$),_(e,l),_(l,t),_(e,s),_(s,o),_(e,n),_(n,a),_(a,r),_(e,f),_(e,h),_(h,u)},p:O,d(d){d&&c(e)}}}function We(i){let e,l,t;return l=new de({props:{leftWidth:"256px",width:"800px",$$slots:{right:[Ge],left:[Oe]},$$scope:{ctx:i}}}),{c(){e=g("div"),R(l.$$.fragment),this.h()},l(s){e=p(s,"DIV",{class:!0});var o=b(e);T(l.$$.fragment,o),o.forEach(c),this.h()},h(){v(e,"class","col-center")},m(s,o){w(s,e,o),B(l,e,null),t=!0},p(s,[o]){const n={};o&1&&(n.$$scope={dirty:o,ctx:s}),l.$set(n)},i(s){t||(D(l.$$.fragment,s),t=!0)},o(s){I(l.$$.fragment,s),t=!1},d(s){s&&c(e),C(l)}}}class Fe extends W{constructor(e){super();F(this,e,null,We,H,{})}}function He(i){let e;return{c(){e=S("Price estimates for my art!")},l(l){e=y(l,"Price estimates for my art!")},m(l,t){w(l,e,t)},d(l){l&&c(e)}}}function Ue(i){let e,l,t,s;return e=new me({props:{status:ie.comms,large:!1}}),t=new Ne({props:{routeBase:"/prices/"}}),{c(){R(e.$$.fragment),l=P(),R(t.$$.fragment)},l(o){T(e.$$.fragment,o),l=j(o),T(t.$$.fragment,o)},m(o,n){B(e,o,n),w(o,l,n),B(t,o,n),s=!0},p:O,i(o){s||(D(e.$$.fragment,o),D(t.$$.fragment,o),s=!0)},o(o){I(e.$$.fragment,o),I(t.$$.fragment,o),s=!1},d(o){C(e,o),o&&c(l),C(t,o)}}}function qe(i){let e,l;return e=new J({props:{direction:"column",gap:"2rem",$$slots:{default:[Ue]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){B(e,t,s),l=!0},p(t,s){const o={};s&1&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function Le(i){let e,l;return e=new Fe({}),{c(){R(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){B(e,t,s),l=!0},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function Me(i){let e,l,t,s,o,n,a,r,f,h;return o=new ue({props:{img:ce,title:"Commission Prices",$$slots:{default:[He]},$$scope:{ctx:i}}}),a=new K({props:{$$slots:{default:[qe]},$$scope:{ctx:i}}}),f=new K({props:{color:ie.colors.teg_grey,$$slots:{default:[Le]},$$scope:{ctx:i}}}),{c(){e=g("title"),l=S("Prices - Teg Fox"),t=P(),s=g("div"),R(o.$$.fragment),n=P(),R(a.$$.fragment),r=P(),R(f.$$.fragment)},l(u){e=p(u,"TITLE",{});var d=b(e);l=y(d,"Prices - Teg Fox"),d.forEach(c),t=j(u),s=p(u,"DIV",{});var $=b(s);T(o.$$.fragment,$),n=j($),T(a.$$.fragment,$),r=j($),T(f.$$.fragment,$),$.forEach(c)},m(u,d){w(u,e,d),_(e,l),w(u,t,d),w(u,s,d),B(o,s,null),_(s,n),B(a,s,null),_(s,r),B(f,s,null),h=!0},p(u,[d]){const $={};d&1&&($.$$scope={dirty:d,ctx:u}),o.$set($);const E={};d&1&&(E.$$scope={dirty:d,ctx:u}),a.$set(E);const m={};d&1&&(m.$$scope={dirty:d,ctx:u}),f.$set(m)},i(u){h||(D(o.$$.fragment,u),D(a.$$.fragment,u),D(f.$$.fragment,u),h=!0)},o(u){I(o.$$.fragment,u),I(a.$$.fragment,u),I(f.$$.fragment,u),h=!1},d(u){u&&c(e),u&&c(t),u&&c(s),C(o),C(a),C(f)}}}class lt extends W{constructor(e){super();F(this,e,null,Me,H,{})}}export{lt as default};
