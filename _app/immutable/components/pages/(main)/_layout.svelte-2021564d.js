import{S as G,i as M,s as O,w as I,x,y as k,f as R,t as D,z as A,k as h,q as y,a as H,l as g,m as E,r as b,h as n,c as V,n as S,p as v,b as d,I as T,M as z,B as L,H as N,C as j,D as J,E as K,F as Q}from"../../../chunks/index-cb6f9799.js";import{H as U}from"../../../chunks/Header-30b09362.js";import{B as W}from"../../../chunks/Body-14f873fe.js";import{P as X}from"../../../chunks/PageTransition-9b0ff1b6.js";import{p as Z}from"../../../chunks/index-c7805623.js";function ee(i){let t,r,e,s,a,f,$,m,c,o,u=new Date().getFullYear()+"",p,w,B,P;return{c(){t=h("div"),r=y("You've Reached The End."),e=H(),s=h("div"),a=h("div"),f=h("div"),$=y("Go back to top"),m=H(),c=h("p"),o=y("© Teg Fox "),p=y(u),w=y(". All Rights Reserved."),this.h()},l(l){t=g(l,"DIV",{class:!0});var _=E(t);r=b(_,"You've Reached The End."),_.forEach(n),e=V(l),s=g(l,"DIV",{style:!0});var Y=E(s);a=g(Y,"DIV",{});var q=E(a);f=g(q,"DIV",{});var C=E(f);$=b(C,"Go back to top"),C.forEach(n),q.forEach(n),Y.forEach(n),m=V(l),c=g(l,"P",{});var F=E(c);o=b(F,"© Teg Fox "),p=b(F,u),w=b(F,". All Rights Reserved."),F.forEach(n),this.h()},h(){S(t,"class","h3"),v(f,"margin","0.5rem 0"),v(a,"text-decoration","none"),v(a,"color","grey"),v(a,"cursor","pointer"),v(a,"user-select","none"),v(s,"display","flex"),v(s,"flex-direction","row")},m(l,_){d(l,t,_),T(t,r),d(l,e,_),d(l,s,_),T(s,a),T(a,f),T(f,$),d(l,m,_),d(l,c,_),T(c,o),T(c,p),T(c,w),B||(P=z(a,"click",i[0]),B=!0)},p:L,d(l){l&&n(t),l&&n(e),l&&n(s),l&&n(m),l&&n(c),B=!1,P()}}}function te(i){let t,r;return t=new W({props:{color:"192231",$$slots:{default:[ee]},$$scope:{ctx:i}}}),{c(){I(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,s){k(t,e,s),r=!0},p(e,[s]){const a={};s&2&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){r||(R(t.$$.fragment,e),r=!0)},o(e){D(t.$$.fragment,e),r=!1},d(e){A(t,e)}}}function se(i){return[()=>{window.scrollTo({top:0,behavior:"smooth"})}]}class oe extends G{constructor(t){super(),M(this,t,se,te,O,{})}}function ae(i){let t;const r=i[1].default,e=j(r,i,i[2],null);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,a){e&&e.m(s,a),t=!0},p(s,a){e&&e.p&&(!t||a&4)&&J(e,r,s,s[2],t?Q(r,s[2],a,null):K(s[2]),null)},i(s){t||(R(e,s),t=!0)},o(s){D(e,s),t=!1},d(s){e&&e.d(s)}}}function re(i){let t,r,e,s,a,f,$,m,c;return r=new U({}),a=new X({props:{update:i[0].data,$$slots:{default:[ae]},$$scope:{ctx:i}}}),m=new oe({}),{c(){t=h("header"),I(r.$$.fragment),e=H(),s=h("main"),I(a.$$.fragment),f=H(),$=h("footer"),I(m.$$.fragment),this.h()},l(o){t=g(o,"HEADER",{});var u=E(t);x(r.$$.fragment,u),u.forEach(n),e=V(o),s=g(o,"MAIN",{});var p=E(s);x(a.$$.fragment,p),p.forEach(n),f=V(o),$=g(o,"FOOTER",{style:!0});var w=E($);x(m.$$.fragment,w),w.forEach(n),this.h()},h(){v($,"overflow-x","hidden")},m(o,u){d(o,t,u),k(r,t,null),d(o,e,u),d(o,s,u),k(a,s,null),d(o,f,u),d(o,$,u),k(m,$,null),c=!0},p(o,[u]){const p={};u&1&&(p.update=o[0].data),u&4&&(p.$$scope={dirty:u,ctx:o}),a.$set(p)},i(o){c||(R(r.$$.fragment,o),R(a.$$.fragment,o),R(m.$$.fragment,o),c=!0)},o(o){D(r.$$.fragment,o),D(a.$$.fragment,o),D(m.$$.fragment,o),c=!1},d(o){o&&n(t),A(r),o&&n(e),o&&n(s),A(a),o&&n(f),o&&n($),A(m)}}}function ne(i,t,r){let e;N(i,Z,f=>r(0,e=f));let{$$slots:s={},$$scope:a}=t;return i.$$set=f=>{"$$scope"in f&&r(2,a=f.$$scope)},[e,s,a]}class me extends G{constructor(t){super(),M(this,t,ne,re,O,{})}}export{me as default};
