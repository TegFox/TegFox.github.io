import{U as v,S as C,i as S,s as y,e as _,b as p,g as I,t as u,B as P,d as V,f as c,h as f,C as q,k as B,l as D,m as E,G,H,I as N,Q as O,V as Q}from"./index-6779f09a.js";function k(s){const e=s-1;return e*e*e+1}function z(s,{delay:e=0,duration:o=400,easing:i=v}={}){const n=+getComputedStyle(s).opacity;return{delay:e,duration:o,easing:i,css:t=>`opacity: ${t*n}`}}function T(s,{delay:e=0,duration:o=400,easing:i=k,x:n=0,y:t=0,opacity:a=0}={}){const l=getComputedStyle(s),r=+l.opacity,g=l.transform==="none"?"":l.transform,b=r*(1-a);return{delay:e,duration:o,easing:i,css:(d,h)=>`
			transform: ${g} translate(${(1-d)*n}px, ${(1-d)*t}px);
			opacity: ${r-b*h}`}}function m(s){let e,o,i;const n=s[4].default,t=q(n,s,s[3],null);return{c(){e=B("div"),t&&t.c()},l(a){e=D(a,"DIV",{});var l=E(e);t&&t.l(l),l.forEach(f)},m(a,l){p(a,e,l),t&&t.m(e,null),i=!0},p(a,l){s=a,t&&t.p&&(!i||l&8)&&G(t,n,s,s[3],i?N(n,s[3],l,null):H(s[3]),null)},i(a){i||(c(t,a),o||O(()=>{o=Q(e,T,{y:s[1]*-1,duration:s[2],easing:k}),o.start()}),i=!0)},o(a){u(t,a),i=!1},d(a){a&&f(e),t&&t.d(a)}}}function U(s){let e=s[0],o,i,n=m(s);return{c(){n.c(),o=_()},l(t){n.l(t),o=_()},m(t,a){n.m(t,a),p(t,o,a),i=!0},p(t,[a]){a&1&&y(e,e=t[0])?(I(),u(n,1,1,P),V(),n=m(t),n.c(),c(n,1),n.m(o.parentNode,o)):n.p(t,a)},i(t){i||(c(n),i=!0)},o(t){u(n),i=!1},d(t){t&&f(o),n.d(t)}}}function j(s,e,o){let{$$slots:i={},$$scope:n}=e,{update:t=void 0}=e,{dist:a=35}=e,{duration:l=300}=e;return s.$$set=r=>{"update"in r&&o(0,t=r.update),"dist"in r&&o(1,a=r.dist),"duration"in r&&o(2,l=r.duration),"$$scope"in r&&o(3,n=r.$$scope)},[t,a,l,n,i]}class A extends C{constructor(e){super(),S(this,e,j,U,y,{update:0,dist:1,duration:2})}}export{A as P,z as a,T as f};