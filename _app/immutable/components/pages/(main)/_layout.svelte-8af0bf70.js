import{S as M,i as O,s as S,w as F,x as I,y as k,f as b,t as R,z as x,k as v,q as y,a as H,l as h,m as g,r as T,h as l,c as V,n as G,p as A,b as _,I as E,M as z,B as L,H as N,C as j,D as J,E as K,F as Q}from"../../../chunks/index-83c5a036.js";import{H as U}from"../../../chunks/Header-f04eb86c.js";import{B as W}from"../../../chunks/Body-2ab86e8b.js";import{P as X}from"../../../chunks/PageTransition-9a9b3699.js";import{p as Z}from"../../../chunks/index-6a62affd.js";function ee(i){let t,r,e,s,o,f,$,m,c,a,u=new Date().getFullYear()+"",p,w,B,P;return{c(){t=v("div"),r=y("You've Reached The End."),e=H(),s=v("div"),o=v("div"),f=v("div"),$=y("Go back to top"),m=H(),c=v("p"),a=y("© Teg Fox "),p=y(u),w=y(". All Rights Reserved."),this.h()},l(n){t=h(n,"DIV",{class:!0});var d=g(t);r=T(d,"You've Reached The End."),d.forEach(l),e=V(n),s=h(n,"DIV",{style:!0});var Y=g(s);o=h(Y,"DIV",{class:!0});var q=g(o);f=h(q,"DIV",{});var C=g(f);$=T(C,"Go back to top"),C.forEach(l),q.forEach(l),Y.forEach(l),m=V(n),c=h(n,"P",{});var D=g(c);a=T(D,"© Teg Fox "),p=T(D,u),w=T(D,". All Rights Reserved."),D.forEach(l),this.h()},h(){G(t,"class","h3"),A(f,"margin","0.5rem 0"),G(o,"class","hover svelte-dw99u5"),A(s,"display","flex"),A(s,"flex-direction","row")},m(n,d){_(n,t,d),E(t,r),_(n,e,d),_(n,s,d),E(s,o),E(o,f),E(f,$),_(n,m,d),_(n,c,d),E(c,a),E(c,p),E(c,w),B||(P=z(o,"click",i[0]),B=!0)},p:L,d(n){n&&l(t),n&&l(e),n&&l(s),n&&l(m),n&&l(c),B=!1,P()}}}function te(i){let t,r;return t=new W({props:{color:"192231",$$slots:{default:[ee]},$$scope:{ctx:i}}}),{c(){F(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){k(t,e,s),r=!0},p(e,[s]){const o={};s&2&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){R(t.$$.fragment,e),r=!1},d(e){x(t,e)}}}function se(i){return[()=>{window.scrollTo({top:0,behavior:"smooth"})}]}class ae extends M{constructor(t){super(),O(this,t,se,te,S,{})}}function oe(i){let t;const r=i[1].default,e=j(r,i,i[2],null);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,o){e&&e.m(s,o),t=!0},p(s,o){e&&e.p&&(!t||o&4)&&J(e,r,s,s[2],t?Q(r,s[2],o,null):K(s[2]),null)},i(s){t||(b(e,s),t=!0)},o(s){R(e,s),t=!1},d(s){e&&e.d(s)}}}function re(i){let t,r,e,s,o,f,$,m,c;return r=new U({}),o=new X({props:{update:i[0].data,$$slots:{default:[oe]},$$scope:{ctx:i}}}),m=new ae({}),{c(){t=v("header"),F(r.$$.fragment),e=H(),s=v("main"),F(o.$$.fragment),f=H(),$=v("footer"),F(m.$$.fragment),this.h()},l(a){t=h(a,"HEADER",{});var u=g(t);I(r.$$.fragment,u),u.forEach(l),e=V(a),s=h(a,"MAIN",{});var p=g(s);I(o.$$.fragment,p),p.forEach(l),f=V(a),$=h(a,"FOOTER",{style:!0});var w=g($);I(m.$$.fragment,w),w.forEach(l),this.h()},h(){A($,"overflow-x","hidden")},m(a,u){_(a,t,u),k(r,t,null),_(a,e,u),_(a,s,u),k(o,s,null),_(a,f,u),_(a,$,u),k(m,$,null),c=!0},p(a,[u]){const p={};u&1&&(p.update=a[0].data),u&4&&(p.$$scope={dirty:u,ctx:a}),o.$set(p)},i(a){c||(b(r.$$.fragment,a),b(o.$$.fragment,a),b(m.$$.fragment,a),c=!0)},o(a){R(r.$$.fragment,a),R(o.$$.fragment,a),R(m.$$.fragment,a),c=!1},d(a){a&&l(t),x(r),a&&l(e),a&&l(s),x(o),a&&l(f),a&&l($),x(m)}}}function le(i,t,r){let e;N(i,Z,f=>r(0,e=f));let{$$slots:s={},$$scope:o}=t;return i.$$set=f=>{"$$scope"in f&&r(2,o=f.$$scope)},[e,s,o]}class me extends M{constructor(t){super(),O(this,t,le,re,S,{})}}export{me as default};
