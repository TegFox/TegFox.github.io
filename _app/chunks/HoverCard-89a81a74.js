import{S as g,i as h,s as y,J as b,e as m,c as k,a as B,d as v,b as s,f as _,g as F,M as R,N as q,O as C,q as H,o as S}from"./index-3b7cb337.js";function w(t){let r,n,i;const d=t[7].default,a=b(d,t,t[6],null);return{c(){r=m("div"),a&&a.c(),this.h()},l(e){r=k(e,"DIV",{class:!0,style:!0});var o=B(r);a&&a.l(o),o.forEach(v),this.h()},h(){s(r,"class","hovercard svelte-wrqaz5"),s(r,"style",n=`--hovercard-background: ${t[0]};  --hovercard-overlay-background: ${t[1]};
     --hovercard-border-radius: ${t[4]}; --hovercard-filter: ${t[2]};
     --hovercard-overlay-filter: ${t[3]};`),_(r,"padding",t[5],!1)},m(e,o){F(e,r,o),a&&a.m(r,null),i=!0},p(e,[o]){a&&a.p&&(!i||o&64)&&R(a,d,e,e[6],i?C(d,e[6],o,null):q(e[6]),null),(!i||o&31&&n!==(n=`--hovercard-background: ${e[0]};  --hovercard-overlay-background: ${e[1]};
     --hovercard-border-radius: ${e[4]}; --hovercard-filter: ${e[2]};
     --hovercard-overlay-filter: ${e[3]};`))&&s(r,"style",n),o&32&&_(r,"padding",e[5],!1)},i(e){i||(H(a,e),i=!0)},o(e){S(a,e),i=!1},d(e){e&&v(r),a&&a.d(e)}}}function z(t,r,n){let{$$slots:i={},$$scope:d}=r,{background:a}=r,{overlayBackground:e}=r,{filter:o="none"}=r,{overlayFilter:u="none"}=r,{borderRadius:f="16px"}=r,{padding:c="3rem 2rem"}=r;return t.$$set=l=>{"background"in l&&n(0,a=l.background),"overlayBackground"in l&&n(1,e=l.overlayBackground),"filter"in l&&n(2,o=l.filter),"overlayFilter"in l&&n(3,u=l.overlayFilter),"borderRadius"in l&&n(4,f=l.borderRadius),"padding"in l&&n(5,c=l.padding),"$$scope"in l&&n(6,d=l.$$scope)},[a,e,o,u,f,c,d,i]}class E extends g{constructor(r){super();h(this,r,z,w,y,{background:0,overlayBackground:1,filter:2,overlayFilter:3,borderRadius:4,padding:5})}}export{E as H};