import{s as ne,o as ce,e as b,a as U,f as k,j as w,c as Y,d as m,w as h,z as S,i as T,k as p,A as F,u as de,p as me,q as _e,b as $e,t as G,l as X,g as he,n as re,B as ae,Z as pe,G as oe,x as C,_ as fe,r as J,v as ve}from"./scheduler.LO_MRueC.js";import{S as se,i as le,t as H,b as q,c as O,a as L,m as B,d as P,h as ue,g as ge,e as be,j}from"./index.cGsg7NVX.js";import{p as ke,f as N}from"./index.JaBzfOc_.js";import{R as Ee}from"./ReactiveComp.lYQnKwK1.js";const we=""+new URL("../assets/logo.87hM3iPx.png",import.meta.url).href;function Ie(s){let e,t,n,a,f,u;const l=s[5].default,i=ce(l,s,s[4],null);return{c(){e=b("a"),i&&i.c(),t=U(),n=b("div"),this.h()},l(o){e=k(o,"A",{href:!0,class:!0});var r=w(e);i&&i.l(r),t=Y(r),n=k(r,"DIV",{class:!0}),w(n).forEach(m),r.forEach(m),this.h()},h(){h(n,"class","hover bar svelte-1qlciym"),S(n,"open",s[3](s[2].url.pathname,s[1])),h(e,"href",s[1]),h(e,"class","hover svelte-1qlciym"),S(e,"active",s[3](s[2].url.pathname,s[1]))},m(o,r){T(o,e,r),i&&i.m(e,null),p(e,t),p(e,n),a=!0,f||(u=F(e,"click",s[6]),f=!0)},p(o,[r]){i&&i.p&&(!a||r&16)&&de(i,l,o,o[4],a?_e(l,o[4],r,null):me(o[4]),null),(!a||r&14)&&S(n,"open",o[3](o[2].url.pathname,o[1])),(!a||r&2)&&h(e,"href",o[1]),(!a||r&14)&&S(e,"active",o[3](o[2].url.pathname,o[1]))},i(o){a||(H(i,o),a=!0)},o(o){q(i,o),a=!1},d(o){o&&m(e),i&&i.d(o),f=!1,u()}}}function Ve(s,e,t){let n;$e(s,ke,r=>t(2,n=r));let{$$slots:a={},$$scope:f}=e,{href:u}=e,{open:l}=e;const i=(r,c)=>c==="/"&&r==="/"?!0:c!=="/"&&r.substring(0,c.length)===c,o=()=>{t(0,l=!1)};return s.$$set=r=>{"href"in r&&t(1,u=r.href),"open"in r&&t(0,l=r.open),"$$scope"in r&&t(4,f=r.$$scope)},[l,u,n,i,f,a,o]}class Q extends se{constructor(e){super(),le(this,e,Ve,Ie,ne,{href:1,open:0})}}function De(s){let e;return{c(){e=G("HOME")},l(t){e=X(t,"HOME")},m(t,n){T(t,e,n)},d(t){t&&m(e)}}}function Te(s){let e;return{c(){e=G("PRICES")},l(t){e=X(t,"PRICES")},m(t,n){T(t,e,n)},d(t){t&&m(e)}}}function He(s){let e;return{c(){e=G("YCH")},l(t){e=X(t,"YCH")},m(t,n){T(t,e,n)},d(t){t&&m(e)}}}function qe(s){let e;return{c(){e=G("TERMS/FAQ")},l(t){e=X(t,"TERMS/FAQ")},m(t,n){T(t,e,n)},d(t){t&&m(e)}}}function Ae(s){let e;return{c(){e=G("ABOUT")},l(t){e=X(t,"ABOUT")},m(t,n){T(t,e,n)},d(t){t&&m(e)}}}function Me(s){let e,t,n,a,f,u,l,i,o,r,c;return t=new Q({props:{href:"/",$$slots:{default:[De]},$$scope:{ctx:s}}}),a=new Q({props:{href:"/prices",$$slots:{default:[Te]},$$scope:{ctx:s}}}),u=new Q({props:{href:"/ych",$$slots:{default:[He]},$$scope:{ctx:s}}}),i=new Q({props:{href:"/terms",$$slots:{default:[qe]},$$scope:{ctx:s}}}),r=new Q({props:{href:"/about",$$slots:{default:[Ae]},$$scope:{ctx:s}}}),{c(){e=b("div"),O(t.$$.fragment),n=U(),O(a.$$.fragment),f=U(),O(u.$$.fragment),l=U(),O(i.$$.fragment),o=U(),O(r.$$.fragment),this.h()},l(d){e=k(d,"DIV",{class:!0});var _=w(e);L(t.$$.fragment,_),n=Y(_),L(a.$$.fragment,_),f=Y(_),L(u.$$.fragment,_),l=Y(_),L(i.$$.fragment,_),o=Y(_),L(r.$$.fragment,_),_.forEach(m),this.h()},h(){h(e,"class","flex-out svelte-1t0ofrk")},m(d,_){T(d,e,_),B(t,e,null),p(e,n),B(a,e,null),p(e,f),B(u,e,null),p(e,l),B(i,e,null),p(e,o),B(r,e,null),c=!0},p(d,[_]){const D={};_&1&&(D.$$scope={dirty:_,ctx:d}),t.$set(D);const I={};_&1&&(I.$$scope={dirty:_,ctx:d}),a.$set(I);const V={};_&1&&(V.$$scope={dirty:_,ctx:d}),u.$set(V);const M={};_&1&&(M.$$scope={dirty:_,ctx:d}),i.$set(M);const R={};_&1&&(R.$$scope={dirty:_,ctx:d}),r.$set(R)},i(d){c||(H(t.$$.fragment,d),H(a.$$.fragment,d),H(u.$$.fragment,d),H(i.$$.fragment,d),H(r.$$.fragment,d),c=!0)},o(d){q(t.$$.fragment,d),q(a.$$.fragment,d),q(u.$$.fragment,d),q(i.$$.fragment,d),q(r.$$.fragment,d),c=!1},d(d){d&&m(e),P(t),P(a),P(u),P(i),P(r)}}}class Re extends se{constructor(e){super(),le(this,e,null,Me,ne,{})}}function Se(s){let e,t,n='<span class="hamburger-inner svelte-jas1sv"></span>',a,f,u;return{c(){e=b("button"),t=b("span"),t.innerHTML=n,this.h()},l(l){e=k(l,"BUTTON",{class:!0,"aria-label":!0});var i=w(e);t=k(i,"SPAN",{class:!0,"data-svelte-h":!0}),he(t)!=="svelte-kk1wi2"&&(t.innerHTML=n),i.forEach(m),this.h()},h(){h(t,"class","hamburger-box svelte-jas1sv"),h(e,"class",a="hamburger hamburger--"+s[1]+" svelte-jas1sv"),h(e,"aria-label",s[2]),S(e,"is-active",s[0])},m(l,i){T(l,e,i),p(e,t),f||(u=[F(e,"click",s[3]),F(e,"click",s[4])],f=!0)},p(l,[i]){i&2&&a!==(a="hamburger hamburger--"+l[1]+" svelte-jas1sv")&&h(e,"class",a),i&4&&h(e,"aria-label",l[2]),i&3&&S(e,"is-active",l[0])},i:re,o:re,d(l){l&&m(e),f=!1,ae(u)}}}function Ce(s,e,t){let{open:n=!1}=e,{type:a="spin"}=e,{ariaLabel:f="Hamburger menu"}=e;function u(i){pe.call(this,s,i)}const l=()=>t(0,n=!n);return s.$$set=i=>{"open"in i&&t(0,n=i.open),"type"in i&&t(1,a=i.type),"ariaLabel"in i&&t(2,f=i.ariaLabel)},[n,a,f,u,l]}class Oe extends se{constructor(e){super(),le(this,e,Ce,Se,ne,{open:0,type:1,ariaLabel:2})}}function ie(s){let e,t,n,a,f,u,l,i,o,r,c,d,_,D,I,V,M,R,z,g,E,A,Z,K;return n=new Q({props:{href:"/",$$slots:{default:[Le]},$$scope:{ctx:s}}}),l=new Q({props:{href:"/prices",$$slots:{default:[Be]},$$scope:{ctx:s}}}),c=new Q({props:{href:"/ych",$$slots:{default:[Pe]},$$scope:{ctx:s}}}),I=new Q({props:{href:"/terms",$$slots:{default:[je]},$$scope:{ctx:s}}}),z=new Q({props:{href:"/about",$$slots:{default:[Ne]},$$scope:{ctx:s}}}),{c(){e=b("div"),t=b("div"),O(n.$$.fragment),f=U(),u=b("div"),O(l.$$.fragment),o=U(),r=b("div"),O(c.$$.fragment),_=U(),D=b("div"),O(I.$$.fragment),M=U(),R=b("div"),O(z.$$.fragment),this.h()},l($){e=k($,"DIV",{class:!0});var v=w(e);t=k(v,"DIV",{});var y=w(t);L(n.$$.fragment,y),y.forEach(m),f=Y(v),u=k(v,"DIV",{});var W=w(u);L(l.$$.fragment,W),W.forEach(m),o=Y(v),r=k(v,"DIV",{});var x=w(r);L(c.$$.fragment,x),x.forEach(m),_=Y(v),D=k(v,"DIV",{});var ee=w(D);L(I.$$.fragment,ee),ee.forEach(m),M=Y(v),R=k(v,"DIV",{});var te=w(R);L(z.$$.fragment,te),te.forEach(m),v.forEach(m),this.h()},h(){h(e,"class","mobile-menu mobilemenu-out svelte-d959dp")},m($,v){T($,e,v),p(e,t),B(n,t,null),p(e,f),p(e,u),B(l,u,null),p(e,o),p(e,r),B(c,r,null),p(e,_),p(e,D),B(I,D,null),p(e,M),p(e,R),B(z,R,null),A=!0,Z||(K=[F(t,"click",s[1]),F(u,"click",s[2]),F(r,"click",s[3]),F(D,"click",s[4]),F(R,"click",s[5])],Z=!0)},p($,v){const y={};v&128&&(y.$$scope={dirty:v,ctx:$}),n.$set(y);const W={};v&128&&(W.$$scope={dirty:v,ctx:$}),l.$set(W);const x={};v&128&&(x.$$scope={dirty:v,ctx:$}),c.$set(x);const ee={};v&128&&(ee.$$scope={dirty:v,ctx:$}),I.$set(ee);const te={};v&128&&(te.$$scope={dirty:v,ctx:$}),z.$set(te)},i($){A||(H(n.$$.fragment,$),J(()=>{A&&(a||(a=j(t,N,{x:15,delay:80*1},!0)),a.run(1))}),H(l.$$.fragment,$),J(()=>{A&&(i||(i=j(u,N,{x:15,delay:80*2},!0)),i.run(1))}),H(c.$$.fragment,$),J(()=>{A&&(d||(d=j(r,N,{x:15,delay:80*3},!0)),d.run(1))}),H(I.$$.fragment,$),J(()=>{A&&(V||(V=j(D,N,{x:15,delay:80*4},!0)),V.run(1))}),H(z.$$.fragment,$),J(()=>{A&&(g||(g=j(R,N,{x:15,delay:80*5},!0)),g.run(1))}),J(()=>{A&&(E||(E=j(e,N,{x:150},!0)),E.run(1))}),A=!0)},o($){q(n.$$.fragment,$),a||(a=j(t,N,{x:15,delay:80*1},!1)),a.run(0),q(l.$$.fragment,$),i||(i=j(u,N,{x:15,delay:80*2},!1)),i.run(0),q(c.$$.fragment,$),d||(d=j(r,N,{x:15,delay:80*3},!1)),d.run(0),q(I.$$.fragment,$),V||(V=j(D,N,{x:15,delay:80*4},!1)),V.run(0),q(z.$$.fragment,$),g||(g=j(R,N,{x:15,delay:80*5},!1)),g.run(0),E||(E=j(e,N,{x:150},!1)),E.run(0),A=!1},d($){$&&m(e),P(n),$&&a&&a.end(),P(l),$&&i&&i.end(),P(c),$&&d&&d.end(),P(I),$&&V&&V.end(),P(z),$&&g&&g.end(),$&&E&&E.end(),Z=!1,ae(K)}}}function Le(s){let e;return{c(){e=G("HOME")},l(t){e=X(t,"HOME")},m(t,n){T(t,e,n)},d(t){t&&m(e)}}}function Be(s){let e;return{c(){e=G("PRICES")},l(t){e=X(t,"PRICES")},m(t,n){T(t,e,n)},d(t){t&&m(e)}}}function Pe(s){let e;return{c(){e=G("YCH")},l(t){e=X(t,"YCH")},m(t,n){T(t,e,n)},d(t){t&&m(e)}}}function je(s){let e;return{c(){e=G("TERMS/FAQ")},l(t){e=X(t,"TERMS/FAQ")},m(t,n){T(t,e,n)},d(t){t&&m(e)}}}function Ne(s){let e;return{c(){e=G("ABOUT")},l(t){e=X(t,"ABOUT")},m(t,n){T(t,e,n)},d(t){t&&m(e)}}}function Ue(s){let e,t,n,a,f,u,l=s[0]&&ie(s);function i(r){s[6](r)}let o={type:"spin-r"};return s[0]!==void 0&&(o.open=s[0]),n=new Oe({props:o}),oe.push(()=>ue(n,"open",i)),{c(){l&&l.c(),e=U(),t=b("div"),a=b("div"),O(n.$$.fragment),this.h()},l(r){l&&l.l(r),e=Y(r),t=k(r,"DIV",{});var c=w(t);a=k(c,"DIV",{style:!0});var d=w(a);L(n.$$.fragment,d),c.forEach(m),this.h()},h(){C(a,"display","contents"),C(a,"--color","white"),C(a,"--border-radius","2px"),C(a,"--layer-height","2px"),C(t,"position","relative"),C(t,"z-index","12")},m(r,c){l&&l.m(r,c),T(r,e,c),T(r,t,c),p(t,a),B(n,a,null),u=!0},p(r,[c]){r[0]?l?(l.p(r,c),c&1&&H(l,1)):(l=ie(r),l.c(),H(l,1),l.m(e.parentNode,e)):l&&(ge(),q(l,1,1,()=>{l=null}),be());const d={};!f&&c&1&&(f=!0,d.open=r[0],fe(()=>f=!1)),n.$set(d)},i(r){u||(H(l),H(n.$$.fragment,r),u=!0)},o(r){q(l),q(n.$$.fragment,r),u=!1},d(r){r&&(m(e),m(t)),l&&l.d(r),P(n)}}}function Ye(s,e,t){let{open:n}=e;const a=()=>t(0,n=!1),f=()=>t(0,n=!1),u=()=>t(0,n=!1),l=()=>t(0,n=!1),i=()=>t(0,n=!1);function o(r){n=r,t(0,n)}return s.$$set=r=>{"open"in r&&t(0,n=r.open)},[n,a,f,u,l,i,o]}class ze extends se{constructor(e){super(),le(this,e,Ye,Ue,ne,{open:0})}}function Fe(s){let e,t,n;return t=new Re({}),{c(){e=b("div"),O(t.$$.fragment),this.h()},l(a){e=k(a,"DIV",{slot:!0,class:!0});var f=w(e);L(t.$$.fragment,f),f.forEach(m),this.h()},h(){h(e,"slot","main"),h(e,"class","svelte-17u0ndq")},m(a,f){T(a,e,f),B(t,e,null),n=!0},p:re,i(a){n||(H(t.$$.fragment,a),n=!0)},o(a){q(t.$$.fragment,a),n=!1},d(a){a&&m(e),P(t)}}}function Qe(s){let e,t,n,a;function f(l){s[8](l)}let u={};return s[3]!==void 0&&(u.open=s[3]),t=new ze({props:u}),oe.push(()=>ue(t,"open",f)),{c(){e=b("div"),O(t.$$.fragment),this.h()},l(l){e=k(l,"DIV",{slot:!0,class:!0});var i=w(e);L(t.$$.fragment,i),i.forEach(m),this.h()},h(){h(e,"slot","alt"),h(e,"class","svelte-17u0ndq")},m(l,i){T(l,e,i),B(t,e,null),a=!0},p(l,i){const o={};!n&&i&8&&(n=!0,o.open=l[3],fe(()=>n=!1)),t.$set(o)},i(l){a||(H(t.$$.fragment,l),a=!0)},o(l){q(t.$$.fragment,l),a=!1},d(l){l&&m(e),P(t)}}}function Ge(s){let e=!1,t=()=>{e=!1},n,a,f,u,l,i,o,r,c,d,_,D,I,V,M,R,z;return J(s[5]),J(s[6]),V=new Ee({props:{$$slots:{alt:[Qe],main:[Fe]},$$scope:{ctx:s}}}),{c(){a=b("header"),f=b("div"),u=U(),l=b("div"),i=b("div"),o=b("div"),r=b("a"),c=b("img"),_=U(),D=b("div"),I=b("div"),O(V.$$.fragment),this.h()},l(g){a=k(g,"HEADER",{class:!0});var E=w(a);f=k(E,"DIV",{class:!0}),w(f).forEach(m),u=Y(E),l=k(E,"DIV",{class:!0});var A=w(l);i=k(A,"DIV",{class:!0});var Z=w(i);o=k(Z,"DIV",{class:!0});var K=w(o);r=k(K,"A",{href:!0,class:!0});var $=w(r);c=k($,"IMG",{src:!0,alt:!0,class:!0,id:!0}),$.forEach(m),K.forEach(m),_=Y(Z),D=k(Z,"DIV",{class:!0});var v=w(D);I=k(v,"DIV",{class:!0});var y=w(I);L(V.$$.fragment,y),y.forEach(m),v.forEach(m),Z.forEach(m),A.forEach(m),E.forEach(m),this.h()},h(){h(f,"class","title-dim header-effects svelte-17u0ndq"),S(f,"scrolled",s[2]),ve(c.src,d=we)||h(c,"src",d),h(c,"alt","Site Logo"),h(c,"class","logo-img svelte-17u0ndq"),h(c,"id","logo"),S(c,"scrolled",s[2]),h(r,"href","/"),h(r,"class","svelte-17u0ndq"),C(r,"display","flex"),h(o,"class","svelte-17u0ndq"),C(o,"grid-column","1"),C(o,"text-align","left"),C(o,"width","100%"),C(o,"display","flex"),h(I,"class","svelte-17u0ndq"),C(I,"display","flex"),C(I,"flex-direction","row-reverse"),h(D,"class","svelte-17u0ndq"),C(D,"grid-column","2"),h(i,"class","container svelte-17u0ndq"),S(i,"scrolled",s[2]),h(l,"class","title title-dim svelte-17u0ndq"),S(l,"scrolled",s[2]),h(a,"class","col-center svelte-17u0ndq")},m(g,E){T(g,a,E),p(a,f),p(a,u),p(a,l),p(l,i),p(i,o),p(o,r),p(r,c),p(i,_),p(i,D),p(D,I),B(V,I,null),M=!0,R||(z=[F(window,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(t,100),s[5]()}),F(window,"resize",s[6]),F(r,"click",s[7])],R=!0)},p(g,[E]){E&1&&!e&&(e=!0,clearTimeout(n),scrollTo(window.pageXOffset,g[0]),n=setTimeout(t,100)),(!M||E&4)&&S(f,"scrolled",g[2]),(!M||E&4)&&S(c,"scrolled",g[2]);const A={};E&1032&&(A.$$scope={dirty:E,ctx:g}),V.$set(A),(!M||E&4)&&S(i,"scrolled",g[2]),(!M||E&4)&&S(l,"scrolled",g[2])},i(g){M||(H(V.$$.fragment,g),M=!0)},o(g){q(V.$$.fragment,g),M=!1},d(g){g&&m(a),P(V),R=!1,ae(z)}}}function Xe(s,e,t){let{breakpointVh:n=20}=e,a,f,u,l=!1;const i=_=>_*a/100;function o(){t(0,f=window.pageYOffset)}function r(){t(1,a=window.outerHeight)}const c=()=>{t(3,l=!1)};function d(_){l=_,t(3,l)}return s.$$set=_=>{"breakpointVh"in _&&t(4,n=_.breakpointVh)},s.$$.update=()=>{s.$$.dirty&17&&t(2,u=f>i(n))},[f,a,u,l,n,o,r,c,d]}class We extends se{constructor(e){super(),le(this,e,Xe,Ge,ne,{breakpointVh:4})}}export{We as H};