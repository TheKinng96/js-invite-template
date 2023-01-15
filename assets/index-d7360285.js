(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function p(){}const Z=t=>t;function H(t){return t()}function B(){return Object.create(null)}function T(t){t.forEach(H)}function D(t){return typeof t=="function"}function tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function et(t){return Object.keys(t).length===0}const J=typeof window<"u";let nt=J?()=>window.performance.now():()=>Date.now(),R=J?t=>requestAnimationFrame(t):p;const $=new Set;function Q(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&R(Q)}function rt(t){let e;return $.size===0&&R(Q),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}function ot(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function it(t){const e=q("style");return st(U(t),e),e.sheet}function st(t,e){return ot(t.head||t,e),e.sheet}function N(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function q(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function ct(){return V(" ")}function lt(){return V("")}function ut(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function ft(t){return Array.from(t.childNodes)}function at(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}const L=new Map;let j=0;function dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function mt(t,e){const n={stylesheet:it(e),rules:{}};return L.set(t,n),n}function ht(t,e,n,o,r,s,i,l=0){const f=16.666/o;let c=`{
`;for(let _=0;_<=1;_+=f){const g=e+(n-e)*s(_);c+=_*100+`%{${i(g,1-g)}}
`}const d=c+`100% {${i(n,1-n)}}
}`,u=`__svelte_${dt(d)}_${l}`,m=U(t),{stylesheet:a,rules:h}=L.get(m)||mt(m,t);h[u]||(h[u]=!0,a.insertRule(`@keyframes ${u} ${d}`,a.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${u} ${o}ms linear ${r}ms 1 both`,j+=1,u}function F(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=n.length-o.length;r&&(t.style.animation=o.join(", "),j-=r,j||_t())}function _t(){R(()=>{j||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),L.clear())})}let z;function x(t){z=t}const k=[],I=[],C=[],K=[],pt=Promise.resolve();let S=!1;function yt(){S||(S=!0,pt.then(W))}function v(t){C.push(t)}const P=new Set;let E=0;function W(){const t=z;do{for(;E<k.length;){const e=k[E];E++,x(e),gt(e.$$)}for(x(null),k.length=0,E=0;I.length;)I.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];P.has(n)||(P.add(n),n())}C.length=0}while(k.length);for(;K.length;)K.pop()();S=!1,P.clear(),x(t)}function gt(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}let w;function $t(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function X(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const bt=new Set;function O(t,e){t&&t.i&&(bt.delete(t),t.i(e))}const wt={duration:0};function kt(t,e,n){const o={direction:"in"};let r=e(t,n,o),s=!1,i,l,f=0;function c(){i&&F(t,i)}function d(){const{delay:m=0,duration:a=300,easing:h=Z,tick:y=p,css:_}=r||wt;_&&(i=ht(t,0,1,a,m,h,_,f++)),y(0,1);const g=nt()+m,Y=g+a;l&&l.abort(),s=!0,v(()=>X(t,!0,"start")),l=rt(A=>{if(s){if(A>=Y)return y(1,0),X(t,!0,"end"),c(),s=!1;if(A>=g){const M=h((A-g)/a);y(M,1-M)}}return s})}let u=!1;return{start(){u||(u=!0,F(t),D(r)?(r=r(o),$t().then(d)):d())},invalidate(){u=!1},end(){s&&(c(),s=!1)}}}function xt(t,e,n,o){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),o||v(()=>{const i=t.$$.on_mount.map(H).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...i):T(i),t.$$.on_mount=[]}),s.forEach(v)}function vt(t,e){const n=t.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(k.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Nt(t,e,n,o,r,s,i,l=[-1]){const f=z;x(t);const c=t.$$={fragment:null,ctx:[],props:s,update:p,not_equal:r,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:B(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};i&&i(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(u,m,...a)=>{const h=a.length?a[0]:m;return c.ctx&&r(c.ctx[u],c.ctx[u]=h)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](h),d&&Et(t,u)),m}):[],c.update(),d=!0,T(c.before_update),c.fragment=o?o(c.ctx):!1,e.target){if(e.hydrate){const u=ft(e.target);c.fragment&&c.fragment.l(u),u.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&O(t.$$.fragment),xt(t,e.target,e.anchor,e.customElement),W()}x(f)}class Ct{$destroy(){vt(this,1),this.$destroy=p}$on(e,n){if(!D(n))return p;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function G(t){let e,n;return{c(){e=q("p"),e.textContent="The quick brown fox jumps over the lazy dog"},m(o,r){N(o,e,r)},i(o){n||v(()=>{n=kt(e,Lt,{speed:1}),n.start()})},o:p,d(o){o&&b(e)}}}function Ot(t){let e,n,o,r,s,i=t[0]&&G();return{c(){e=q("button"),e.textContent="Click me",n=ct(),i&&i.c(),o=lt()},m(l,f){N(l,e,f),N(l,n,f),i&&i.m(l,f),N(l,o,f),r||(s=ut(e,"click",t[1]),r=!0)},p(l,[f]){l[0]?i?f&1&&O(i,1):(i=G(),i.c(),O(i,1),i.m(o.parentNode,o)):i&&(i.d(1),i=null)},i(l){O(i)},o:p,d(l){l&&b(e),l&&b(n),i&&i.d(l),l&&b(o),r=!1,s()}}}function Lt(t,{speed:e=1}){if(!(t.childNodes.length===1&&t.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node child");const o=t.textContent;return{duration:o.length/(e*.01),tick:s=>{const i=~~(o.length*s);t.textContent=o.slice(0,i)}}}function jt(t,e,n){let o=!1;return[o,()=>n(0,o=!o)]}class Tt extends Ct{constructor(e){super(),Nt(this,e,jt,Ot,tt,{})}}new Tt({target:document.getElementById("app")});
