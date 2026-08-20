(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const _r=!1;var rt=Array.isArray,os=Array.prototype.indexOf,Lt=Array.from,ss=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Cr=Object.getOwnPropertyDescriptors,is=Object.prototype,as=Array.prototype,Bt=Object.getPrototypeOf,mr=Object.isExtensible;function En(e){return typeof e=="function"}function ls(e){return e()}function Tt(e){for(var n=0;n<e.length;n++)e[n]()}const Ee=2,Ar=4,ot=8,zt=16,Ve=32,mn=64,Gn=128,he=256,Kn=512,fe=1024,Ae=2048,Je=4096,Be=8192,st=16384,cs=32768,Vt=65536,fs=1<<17,ds=1<<19,Pr=1<<20,kt=1<<21,nn=Symbol("$state"),Ir=Symbol("legacy props"),us=Symbol("");function Or(e){return e===this.v}function _s(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function qt(e){return!_s(e,this.v)}function ms(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ps(e){throw new Error("https://svelte.dev/e/effect_orphan")}function gs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hs(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function bs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ys(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ds(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ws(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Cn=!1,Es=!1;function Rs(){Cn=!0}const jt=1,$t=2,Lr=4,Fs=8,xs=16,Ms=1,Ns=2,Br=4,Ts=8,ks=16,Ss=1,Cs=2,_e=Symbol(),As="http://www.w3.org/1999/xhtml",Ps="@attach";function zr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let K=null;function vr(e){K=e}function vn(e,n=!1,t){var r=K={p:K,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Cn&&!n&&(K.l={s:null,u:null,r1:[],r2:dn(!1)}),Vs(()=>{r.d=!0})}function pn(e){const n=K;if(n!==null){const a=n.e;if(a!==null){var t=j,r=$;n.e=null;try{for(var o=0;o<a.length;o++){var s=a[o];We(s.effect),Pe(s.reaction),Gt(s.fn)}}finally{We(t),Pe(r)}}K=n.p,n.m=!0}return{}}function An(){return!Cn||K!==null&&K.l===null}function Le(e){if(typeof e!="object"||e===null||nn in e)return e;const n=Bt(e);if(n!==is&&n!==as)return e;var t=new Map,r=rt(e),o=ge(0),s=$,a=c=>{var l=$;Pe(s);var f=c();return Pe(l),f};return r&&t.set("length",ge(e.length)),new Proxy(e,{defineProperty(c,l,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ys();var v=t.get(l);return v===void 0?(v=a(()=>ge(f.value)),t.set(l,v)):Z(v,a(()=>Le(f.value))),!0},deleteProperty(c,l){var f=t.get(l);if(f===void 0)l in c&&(t.set(l,a(()=>ge(_e))),Et(o));else{if(r&&typeof l=="string"){var v=t.get("length"),_=Number(l);Number.isInteger(_)&&_<v.v&&Z(v,_)}Z(f,_e),Et(o)}return!0},get(c,l,f){var h;if(l===nn)return e;var v=t.get(l),_=l in c;if(v===void 0&&(!_||(h=Xe(c,l))!=null&&h.writable)&&(v=a(()=>ge(Le(_?c[l]:_e))),t.set(l,v)),v!==void 0){var d=E(v);return d===_e?void 0:d}return Reflect.get(c,l,f)},getOwnPropertyDescriptor(c,l){var f=Reflect.getOwnPropertyDescriptor(c,l);if(f&&"value"in f){var v=t.get(l);v&&(f.value=E(v))}else if(f===void 0){var _=t.get(l),d=_==null?void 0:_.v;if(_!==void 0&&d!==_e)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return f},has(c,l){var d;if(l===nn)return!0;var f=t.get(l),v=f!==void 0&&f.v!==_e||Reflect.has(c,l);if(f!==void 0||j!==null&&(!v||(d=Xe(c,l))!=null&&d.writable)){f===void 0&&(f=a(()=>ge(v?Le(c[l]):_e)),t.set(l,f));var _=E(f);if(_===_e)return!1}return v},set(c,l,f,v){var L;var _=t.get(l),d=l in c;if(r&&l==="length")for(var h=f;h<_.v;h+=1){var b=t.get(h+"");b!==void 0?Z(b,_e):h in c&&(b=a(()=>ge(_e)),t.set(h+"",b))}_===void 0?(!d||(L=Xe(c,l))!=null&&L.writable)&&(_=a(()=>ge(void 0)),Z(_,a(()=>Le(f))),t.set(l,_)):(d=_.v!==_e,Z(_,a(()=>Le(f))));var x=Reflect.getOwnPropertyDescriptor(c,l);if(x!=null&&x.set&&x.set.call(v,f),!d){if(r&&typeof l=="string"){var k=t.get("length"),B=Number(l);Number.isInteger(B)&&B>=k.v&&Z(k,B+1)}Et(o)}return!0},ownKeys(c){E(o);var l=Reflect.ownKeys(c).filter(_=>{var d=t.get(_);return d===void 0||d.v!==_e});for(var[f,v]of t)v.v!==_e&&!(f in c)&&l.push(f);return l},setPrototypeOf(){Ds()}})}function Et(e,n=1){Z(e,e.v+n)}function fn(e){var n=Ee|Ae,t=$!==null&&($.f&Ee)!==0?$:null;return j===null||t!==null&&(t.f&he)!==0?n|=he:j.f|=Pr,{ctx:K,deps:null,effects:null,equals:Or,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:t??j}}function ln(e){const n=fn(e);return eo(n),n}function Ut(e){const n=fn(e);return n.equals=qt,n}function Vr(e){var n=e.effects;if(n!==null){e.effects=null;for(var t=0;t<n.length;t+=1)ze(n[t])}}function Is(e){for(var n=e.parent;n!==null;){if((n.f&Ee)===0)return n;n=n.parent}return null}function qr(e){var n,t=j;We(Is(e));try{Vr(e),n=oo(e)}finally{We(t)}return n}function jr(e){var n=qr(e),t=(Ge||(e.f&he)!==0)&&e.deps!==null?Je:fe;ye(e,t),e.equals(n)||(e.v=n,e.wv=to())}const Tn=new Map;function dn(e,n){var t={f:0,v:e,reactions:null,equals:Or,rv:0,wv:0};return t}function ge(e,n){const t=dn(e);return eo(t),t}function Ht(e,n=!1){var r;const t=dn(e);return n||(t.equals=qt),Cn&&K!==null&&K.l!==null&&((r=K.l).s??(r.s=[])).push(t),t}function Z(e,n,t=!1){$!==null&&!ke&&An()&&($.f&(Ee|zt))!==0&&!(ce!=null&&ce.includes(e))&&ws();let r=t?Le(n):n;return St(e,r)}function St(e,n){if(!e.equals(n)){var t=e.v;Pn?Tn.set(e,n):Tn.set(e,t),e.v=n,(e.f&Ee)!==0&&((e.f&Ae)!==0&&qr(e),ye(e,(e.f&he)===0?fe:Je)),e.wv=to(),$r(e,Ae),An()&&j!==null&&(j.f&fe)!==0&&(j.f&(Ve|mn))===0&&(be===null?Ks([e]):be.push(e))}return n}function pr(e,n=1){var t=E(e),r=n===1?t++:t--;return Z(e,t),r}function $r(e,n){var t=e.reactions;if(t!==null)for(var r=An(),o=t.length,s=0;s<o;s++){var a=t[s],c=a.f;(c&Ae)===0&&(!r&&a===j||(ye(a,n),(c&(fe|he))!==0&&((c&Ee)!==0?$r(a,Je):ut(a))))}}let Os=!1;var gr,Ur,Hr,Gr;function Ls(){if(gr===void 0){gr=window,Ur=/Firefox/.test(navigator.userAgent);var e=Element.prototype,n=Node.prototype,t=Text.prototype;Hr=Xe(n,"firstChild").get,Gr=Xe(n,"nextSibling").get,mr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),mr(t)&&(t.__t=void 0)}}function it(e=""){return document.createTextNode(e)}function Se(e){return Hr.call(e)}function at(e){return Gr.call(e)}function z(e,n){return Se(e)}function cn(e,n){{var t=Se(e);return t instanceof Comment&&t.data===""?at(t):t}}function re(e,n=1,t=!1){let r=e;for(;n--;)r=at(r);return r}function Bs(e){e.textContent=""}function Kr(e){j===null&&$===null&&ps(),$!==null&&($.f&he)!==0&&j===null&&vs(),Pn&&ms()}function zs(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function gn(e,n,t,r=!0){var o=j,s={ctx:K,deps:null,nodes_start:null,nodes_end:null,f:e|Ae,first:null,fn:n,last:null,next:null,parent:o,prev:null,teardown:null,transitions:null,wv:0};if(t)try{dt(s),s.f|=cs}catch(l){throw ze(s),l}else n!==null&&ut(s);var a=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Pr|Gn))===0;if(!a&&r&&(o!==null&&zs(s,o),$!==null&&($.f&Ee)!==0)){var c=$;(c.effects??(c.effects=[])).push(s)}return s}function Vs(e){const n=gn(ot,null,!1);return ye(n,fe),n.teardown=e,n}function hr(e){Kr();var n=j!==null&&(j.f&Ve)!==0&&K!==null&&!K.m;if(n){var t=K;(t.e??(t.e=[])).push({fn:e,effect:j,reaction:$})}else{var r=Gt(e);return r}}function qs(e){return Kr(),lt(e)}function js(e){const n=gn(mn,e,!0);return(t={})=>new Promise(r=>{t.outro?Xn(n,()=>{ze(n),r(void 0)}):(ze(n),r(void 0))})}function Gt(e){return gn(Ar,e,!1)}function $s(e,n){var t=K,r={effect:null,ran:!1};t.l.r1.push(r),r.effect=lt(()=>{e(),!r.ran&&(r.ran=!0,Z(t.l.r2,!0),kn(n))})}function Us(){var e=K;lt(()=>{if(E(e.l.r2)){for(var n of e.l.r1){var t=n.effect;(t.f&fe)!==0&&ye(t,Je),hn(t)&&dt(t),n.ran=!1}e.l.r2.v=!1}})}function lt(e){return gn(ot,e,!0)}function me(e,n=[],t=fn){const r=n.map(t);return ct(()=>e(...r.map(E)))}function ct(e,n=0){return gn(ot|zt|n,e,!0)}function un(e,n=!0){return gn(ot|Ve,e,!0,n)}function Xr(e){var n=e.teardown;if(n!==null){const t=Pn,r=$;br(!0),Pe(null);try{n.call(null)}finally{br(t),Pe(r)}}}function Wr(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var r=t.next;(t.f&mn)!==0?t.parent=null:ze(t,n),t=r}}function Hs(e){for(var n=e.first;n!==null;){var t=n.next;(n.f&Ve)===0&&ze(n),n=t}}function ze(e,n=!0){var t=!1;(n||(e.f&ds)!==0)&&e.nodes_start!==null&&(Jr(e.nodes_start,e.nodes_end),t=!0),Wr(e,n&&!t),Qn(e,0),ye(e,st);var r=e.transitions;if(r!==null)for(const s of r)s.stop();Xr(e);var o=e.parent;o!==null&&o.first!==null&&Yr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Jr(e,n){for(;e!==null;){var t=e===n?null:at(e);e.remove(),e=t}}function Yr(e){var n=e.parent,t=e.prev,r=e.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),n!==null&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Xn(e,n){var t=[];Kt(e,t,!0),Zr(t,()=>{ze(e),n&&n()})}function Zr(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var o of e)o.out(r)}else n()}function Kt(e,n,t){if((e.f&Be)===0){if(e.f^=Be,e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&n.push(a);for(var r=e.first;r!==null;){var o=r.next,s=(r.f&Vt)!==0||(r.f&Ve)!==0;Kt(r,n,s?t:!1),r=o}}}function Wn(e){Qr(e,!0)}function Qr(e,n){if((e.f&Be)!==0){e.f^=Be,(e.f&fe)===0&&(e.f^=fe),hn(e)&&(ye(e,Ae),ut(e));for(var t=e.first;t!==null;){var r=t.next,o=(t.f&Vt)!==0||(t.f&Ve)!==0;Qr(t,o?n:!1),t=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&s.in()}}let Jn=[];function Gs(){var e=Jn;Jn=[],Tt(e)}function Xt(e){Jn.length===0&&queueMicrotask(Gs),Jn.push(e)}let Un=!1,Ct=!1,Yn=null,tn=!1,Pn=!1;function br(e){Pn=e}let Hn=[];let $=null,ke=!1;function Pe(e){$=e}let j=null;function We(e){j=e}let ce=null;function eo(e){$!==null&&$.f&kt&&(ce===null?ce=[e]:ce.push(e))}let le=null,pe=0,be=null;function Ks(e){be=e}let no=1,Zn=0,Ge=!1;function to(){return++no}function hn(e){var _;var n=e.f;if((n&Ae)!==0)return!0;if((n&Je)!==0){var t=e.deps,r=(n&he)!==0;if(t!==null){var o,s,a=(n&Kn)!==0,c=r&&j!==null&&!Ge,l=t.length;if(a||c){var f=e,v=f.parent;for(o=0;o<l;o++)s=t[o],(a||!((_=s==null?void 0:s.reactions)!=null&&_.includes(f)))&&(s.reactions??(s.reactions=[])).push(f);a&&(f.f^=Kn),c&&v!==null&&(v.f&he)===0&&(f.f^=he)}for(o=0;o<l;o++)if(s=t[o],hn(s)&&jr(s),s.wv>e.wv)return!0}(!r||j!==null&&!Ge)&&ye(e,fe)}return!1}function Xs(e,n){for(var t=n;t!==null;){if((t.f&Gn)!==0)try{t.fn(e);return}catch{t.f^=Gn}t=t.parent}throw Un=!1,e}function yr(e){return(e.f&st)===0&&(e.parent===null||(e.parent.f&Gn)===0)}function ft(e,n,t,r){if(Un){if(t===null&&(Un=!1),yr(n))throw e;return}if(t!==null&&(Un=!0),Xs(e,n),yr(n))throw e}function ro(e,n,t=!0){var r=e.reactions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];ce!=null&&ce.includes(e)||((s.f&Ee)!==0?ro(s,n,!1):n===s&&(t?ye(s,Ae):(s.f&fe)!==0&&ye(s,Je),ut(s)))}}function oo(e){var h;var n=le,t=pe,r=be,o=$,s=Ge,a=ce,c=K,l=ke,f=e.f;le=null,pe=0,be=null,Ge=(f&he)!==0&&(ke||!tn||$===null),$=(f&(Ve|mn))===0?e:null,ce=null,vr(e.ctx),ke=!1,Zn++,e.f|=kt;try{var v=(0,e.fn)(),_=e.deps;if(le!==null){var d;if(Qn(e,pe),_!==null&&pe>0)for(_.length=pe+le.length,d=0;d<le.length;d++)_[pe+d]=le[d];else e.deps=_=le;if(!Ge)for(d=pe;d<_.length;d++)((h=_[d]).reactions??(h.reactions=[])).push(e)}else _!==null&&pe<_.length&&(Qn(e,pe),_.length=pe);if(An()&&be!==null&&!ke&&_!==null&&(e.f&(Ee|Je|Ae))===0)for(d=0;d<be.length;d++)ro(be[d],e);return o!==null&&o!==e&&(Zn++,be!==null&&(r===null?r=be:r.push(...be))),v}finally{le=n,pe=t,be=r,$=o,Ge=s,ce=a,vr(c),ke=l,e.f^=kt}}function Ws(e,n){let t=n.reactions;if(t!==null){var r=os.call(t,e);if(r!==-1){var o=t.length-1;o===0?t=n.reactions=null:(t[r]=t[o],t.pop())}}t===null&&(n.f&Ee)!==0&&(le===null||!le.includes(n))&&(ye(n,Je),(n.f&(he|Kn))===0&&(n.f^=Kn),Vr(n),Qn(n,0))}function Qn(e,n){var t=e.deps;if(t!==null)for(var r=n;r<t.length;r++)Ws(e,t[r])}function dt(e){var n=e.f;if((n&st)===0){ye(e,fe);var t=j,r=K,o=tn;j=e,tn=!0;try{(n&zt)!==0?Hs(e):Wr(e),Xr(e);var s=oo(e);e.teardown=typeof s=="function"?s:null,e.wv=no;var a=e.deps,c;_r&&Es&&e.f&Ae}catch(l){ft(l,e,t,r||e.ctx)}finally{tn=o,j=t}}}function Js(){try{gs()}catch(e){if(Yn!==null)ft(e,Yn,null);else throw e}}function Ys(){var e=tn;try{var n=0;for(tn=!0;Hn.length>0;){n++>1e3&&Js();var t=Hn,r=t.length;Hn=[];for(var o=0;o<r;o++){var s=Qs(t[o]);Zs(s)}Tn.clear()}}finally{Ct=!1,tn=e,Yn=null}}function Zs(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var r=e[t];if((r.f&(st|Be))===0)try{hn(r)&&(dt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Yr(r):r.fn=null))}catch(o){ft(o,r,null,r.ctx)}}}function ut(e){Ct||(Ct=!0,queueMicrotask(Ys));for(var n=Yn=e;n.parent!==null;){n=n.parent;var t=n.f;if((t&(mn|Ve))!==0){if((t&fe)===0)return;n.f^=fe}}Hn.push(n)}function Qs(e){for(var n=[],t=e;t!==null;){var r=t.f,o=(r&(Ve|mn))!==0,s=o&&(r&fe)!==0;if(!s&&(r&Be)===0){if((r&Ar)!==0)n.push(t);else if(o)t.f^=fe;else try{hn(t)&&dt(t)}catch(l){ft(l,t,null,t.ctx)}var a=t.first;if(a!==null){t=a;continue}}var c=t.parent;for(t=t.next;t===null&&c!==null;)t=c.next,c=c.parent}return n}function E(e){var n=e.f,t=(n&Ee)!==0;if($!==null&&!ke){if(!(ce!=null&&ce.includes(e))){var r=$.deps;e.rv<Zn&&(e.rv=Zn,le===null&&r!==null&&r[pe]===e?pe++:le===null?le=[e]:(!Ge||!le.includes(e))&&le.push(e))}}else if(t&&e.deps===null&&e.effects===null){var o=e,s=o.parent;s!==null&&(s.f&he)===0&&(o.f^=he)}return t&&(o=e,hn(o)&&jr(o)),Pn&&Tn.has(e)?Tn.get(e):e.v}function kn(e){var n=ke;try{return ke=!0,e()}finally{ke=n}}const ei=-7169;function ye(e,n){e.f=e.f&ei|n}function At(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(nn in e)Pt(e);else if(!Array.isArray(e))for(let n in e){const t=e[n];typeof t=="object"&&t&&nn in t&&Pt(t)}}}function Pt(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Pt(e[r],n)}catch{}const t=Bt(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Cr(t);for(let o in r){const s=r[o].get;if(s)try{s.call(e)}catch{}}}}}function ni(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ti=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ri(e){return ti.includes(e)}const oi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function si(e){return e=e.toLowerCase(),oi[e]??e}const ii=["touchstart","touchmove"];function ai(e){return ii.includes(e)}function li(e,n){if(n){const t=document.body;e.autofocus=!0,Xt(()=>{document.activeElement===t&&e.focus()})}}let Dr=!1;function ci(){Dr||(Dr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function so(e){var n=$,t=j;Pe(null),We(null);try{return e()}finally{Pe(n),We(t)}}function fi(e,n,t,r=t){e.addEventListener(n,()=>so(t));const o=e.__on_r;o?e.__on_r=()=>{o(),r(!0)}:e.__on_r=()=>r(!0),ci()}const io=new Set,It=new Set;function di(e,n,t,r={}){function o(s){if(r.capture||Fn.call(n,s),!s.cancelBubble)return so(()=>t==null?void 0:t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Xt(()=>{n.addEventListener(e,o,r)}):n.addEventListener(e,o,r),o}function _t(e){for(var n=0;n<e.length;n++)io.add(e[n]);for(var t of It)t(e)}function Fn(e){var L;var n=this,t=n.ownerDocument,r=e.type,o=((L=e.composedPath)==null?void 0:L.call(e))||[],s=o[0]||e.target,a=0,c=e.__root;if(c){var l=o.indexOf(c);if(l!==-1&&(n===document||n===window)){e.__root=n;return}var f=o.indexOf(n);if(f===-1)return;l<=f&&(a=l)}if(s=o[a]||e.target,s!==n){ss(e,"currentTarget",{configurable:!0,get(){return s||t}});var v=$,_=j;Pe(null),We(null);try{for(var d,h=[];s!==null;){var b=s.assignedSlot||s.parentNode||s.host||null;try{var x=s["__"+r];if(x!=null&&(!s.disabled||e.target===s))if(rt(x)){var[k,...B]=x;k.apply(s,[e,...B])}else x.call(s,e)}catch(T){d?h.push(T):d=T}if(e.cancelBubble||b===n||b===null)break;s=b}if(d){for(let T of h)queueMicrotask(()=>{throw T});throw d}}finally{e.__root=n,delete e.currentTarget,Pe(v),We(_)}}}function Wt(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function _n(e,n){var t=j;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function de(e,n){var t=(n&Ss)!==0,r=(n&Cs)!==0,o,s=!e.startsWith("<!>");return()=>{o===void 0&&(o=Wt(s?e:"<!>"+e),t||(o=Se(o)));var a=r||Ur?document.importNode(o,!0):o.cloneNode(!0);if(t){var c=Se(a),l=a.lastChild;_n(c,l)}else _n(a,a);return a}}function mt(e,n,t="svg"){var r=!e.startsWith("<!>"),o=`<${t}>${r?e:"<!>"+e}</${t}>`,s;return()=>{if(!s){var a=Wt(o),c=Se(a);s=Se(c)}var l=s.cloneNode(!0);return _n(l,l),l}}function Ot(e=""){{var n=it(e+"");return _n(n,n),n}}function et(){var e=document.createDocumentFragment(),n=document.createComment(""),t=it();return e.append(n,t),_n(n,t),e}function G(e,n){e!==null&&e.before(n)}function Ce(e,n){var t=n==null?"":typeof n=="object"?n+"":n;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function ui(e,n){return _i(e,n)}const an=new Map;function _i(e,{target:n,anchor:t,props:r={},events:o,context:s,intro:a=!0}){Ls();var c=new Set,l=_=>{for(var d=0;d<_.length;d++){var h=_[d];if(!c.has(h)){c.add(h);var b=ai(h);n.addEventListener(h,Fn,{passive:b});var x=an.get(h);x===void 0?(document.addEventListener(h,Fn,{passive:b}),an.set(h,1)):an.set(h,x+1)}}};l(Lt(io)),It.add(l);var f=void 0,v=js(()=>{var _=t??n.appendChild(it());return un(()=>{if(s){vn({});var d=K;d.c=s}o&&(r.$$events=o),f=e(_,r)||{},s&&pn()}),()=>{var b;for(var d of c){n.removeEventListener(d,Fn);var h=an.get(d);--h===0?(document.removeEventListener(d,Fn),an.delete(d)):an.set(d,h)}It.delete(l),_!==t&&((b=_.parentNode)==null||b.removeChild(_))}});return mi.set(f,v),f}let mi=new WeakMap;function Ue(e,n,[t,r]=[0,0]){var o=e,s=null,a=null,c=_e,l=t>0?Vt:0,f=!1;const v=(d,h=!0)=>{f=!0,_(h,d)},_=(d,h)=>{c!==(c=d)&&(c?(s?Wn(s):h&&(s=un(()=>h(o))),a&&Xn(a,()=>{a=null})):(a?Wn(a):h&&(a=un(()=>h(o,[t+1,r]))),s&&Xn(s,()=>{s=null})))};ct(()=>{f=!1,n(v),f||_(null,null)},l)}function Mn(e,n){return n}function vi(e,n,t,r){for(var o=[],s=n.length,a=0;a<s;a++)Kt(n[a].e,o,!0);var c=s>0&&o.length===0&&t!==null;if(c){var l=t.parentNode;Bs(l),l.append(t),r.clear(),He(e,n[0].prev,n[s-1].next)}Zr(o,()=>{for(var f=0;f<s;f++){var v=n[f];c||(r.delete(v.k),He(e,v.prev,v.next)),ze(v.e,!c)}})}function Nn(e,n,t,r,o,s=null){var a=e,c={flags:n,items:new Map,first:null},l=(n&Lr)!==0;if(l){var f=e;a=f.appendChild(it())}var v=null,_=!1,d=Ut(()=>{var h=t();return rt(h)?h:h==null?[]:Lt(h)});ct(()=>{var h=E(d),b=h.length;_&&b===0||(_=b===0,pi(h,c,a,o,n,r,t),s!==null&&(b===0?v?Wn(v):v=un(()=>s(a)):v!==null&&Xn(v,()=>{v=null})),E(d))})}function pi(e,n,t,r,o,s,a){var ue,Re,qe,Fe;var c=(o&Fs)!==0,l=(o&(jt|$t))!==0,f=e.length,v=n.items,_=n.first,d=_,h,b=null,x,k=[],B=[],L,T,p,y;if(c)for(y=0;y<f;y+=1)L=e[y],T=s(L,y),p=v.get(T),p!==void 0&&((ue=p.a)==null||ue.measure(),(x??(x=new Set)).add(p));for(y=0;y<f;y+=1){if(L=e[y],T=s(L,y),p=v.get(T),p===void 0){var V=d?d.e.nodes_start:t;b=hi(V,n,b,b===null?n.first:b.next,L,T,y,r,o,a),v.set(T,b),k=[],B=[],d=b.next;continue}if(l&&gi(p,L,y,o),(p.e.f&Be)!==0&&(Wn(p.e),c&&((Re=p.a)==null||Re.unfix(),(x??(x=new Set)).delete(p))),p!==d){if(h!==void 0&&h.has(p)){if(k.length<B.length){var M=B[0],I;b=M.prev;var X=k[0],oe=k[k.length-1];for(I=0;I<k.length;I+=1)wr(k[I],M,t);for(I=0;I<B.length;I+=1)h.delete(B[I]);He(n,X.prev,oe.next),He(n,b,X),He(n,oe,M),d=M,b=oe,y-=1,k=[],B=[]}else h.delete(p),wr(p,d,t),He(n,p.prev,p.next),He(n,p,b===null?n.first:b.next),He(n,b,p),b=p;continue}for(k=[],B=[];d!==null&&d.k!==T;)(d.e.f&Be)===0&&(h??(h=new Set)).add(d),B.push(d),d=d.next;if(d===null)continue;p=d}k.push(p),b=p,d=p.next}if(d!==null||h!==void 0){for(var Q=h===void 0?[]:Lt(h);d!==null;)(d.e.f&Be)===0&&Q.push(d),d=d.next;var De=Q.length;if(De>0){var Ie=(o&Lr)!==0&&f===0?t:null;if(c){for(y=0;y<De;y+=1)(qe=Q[y].a)==null||qe.measure();for(y=0;y<De;y+=1)(Fe=Q[y].a)==null||Fe.fix()}vi(n,Q,Ie,v)}}c&&Xt(()=>{var se;if(x!==void 0)for(p of x)(se=p.a)==null||se.apply()}),j.first=n.first&&n.first.e,j.last=b&&b.e}function gi(e,n,t,r){(r&jt)!==0&&St(e.v,n),(r&$t)!==0?St(e.i,t):e.i=t}function hi(e,n,t,r,o,s,a,c,l,f){var v=(l&jt)!==0,_=(l&xs)===0,d=v?_?Ht(o):dn(o):o,h=(l&$t)===0?a:dn(a),b={i:h,v:d,k:s,a:null,e:null,prev:t,next:r};try{return b.e=un(()=>c(e,d,h,f),Os),b.e.prev=t&&t.e,b.e.next=r&&r.e,t===null?n.first=b:(t.next=b,t.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{}}function wr(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,o=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==r;){var a=at(s);o.before(s),s=a}}function He(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function bi(e,n,t=!1,r=!1,o=!1){var s=e,a="";me(()=>{var c=j;if(a!==(a=n()??"")&&(c.nodes_start!==null&&(Jr(c.nodes_start,c.nodes_end),c.nodes_start=c.nodes_end=null),a!=="")){var l=a+"";t?l=`<svg>${l}</svg>`:r&&(l=`<math>${l}</math>`);var f=Wt(l);if((t||r)&&(f=Se(f)),_n(Se(f),f.lastChild),t||r)for(;Se(f);)s.before(Se(f));else s.before(f)}})}function yi(e,n,t,r,o){var c;var s=(c=n.$$slots)==null?void 0:c[t],a=!1;s===!0&&(s=n.children,a=!0),s===void 0?o!==null&&o(e):s(e,a?()=>r:r)}function Di(e,n){var t=void 0,r;ct(()=>{t!==(t=n())&&(r&&(ze(r),r=null),t&&(r=un(()=>{Gt(()=>t(e))})))})}function ao(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=ao(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function wi(){for(var e,n,t=0,r="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=ao(e))&&(r&&(r+=" "),r+=n);return r}function lo(e){return typeof e=="object"?wi(e):e??""}const Er=[...` 	
\r\f \v\uFEFF`];function Ei(e,n,t){var r=e==null?"":""+e;if(n&&(r=r?r+" "+n:n),t){for(var o in t)if(t[o])r=r?r+" "+o:o;else if(r.length)for(var s=o.length,a=0;(a=r.indexOf(o,a))>=0;){var c=a+s;(a===0||Er.includes(r[a-1]))&&(c===r.length||Er.includes(r[c]))?r=(a===0?"":r.substring(0,a))+r.substring(c+1):a=c}}return r===""?null:r}function Rr(e,n=!1){var t=n?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function Rt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ri(e,n){if(n){var t="",r,o;if(Array.isArray(n)?(r=n[0],o=n[1]):r=n,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,c=!1,l=[];r&&l.push(...Object.keys(r).map(Rt)),o&&l.push(...Object.keys(o).map(Rt));var f=0,v=-1;const x=e.length;for(var _=0;_<x;_++){var d=e[_];if(c?d==="/"&&e[_-1]==="*"&&(c=!1):s?s===d&&(s=!1):d==="/"&&e[_+1]==="*"?c=!0:d==='"'||d==="'"?s=d:d==="("?a++:d===")"&&a--,!c&&s===!1&&a===0){if(d===":"&&v===-1)v=_;else if(d===";"||_===x-1){if(v!==-1){var h=Rt(e.substring(f,v).trim());if(!l.includes(h)){d!==";"&&_++;var b=e.substring(f,_).trim();t+=" "+b+";"}}f=_+1,v=-1}}}}return r&&(t+=Rr(r)),o&&(t+=Rr(o,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Sn(e,n,t,r,o,s){var a=e.__className;if(a!==t||a===void 0){var c=Ei(t,r,s);c==null?e.removeAttribute("class"):n?e.className=c:e.setAttribute("class",c),e.__className=t}else if(s&&o!==s)for(var l in s){var f=!!s[l];(o==null||f!==!!o[l])&&e.classList.toggle(l,f)}return s}function Ft(e,n={},t,r){for(var o in t){var s=t[o];n[o]!==s&&(t[o]==null?e.style.removeProperty(o):e.style.setProperty(o,s,r))}}function Jt(e,n,t,r){var o=e.__style;if(o!==n){var s=Ri(n,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=n}else r&&(Array.isArray(r)?(Ft(e,t==null?void 0:t[0],r[0]),Ft(e,t==null?void 0:t[1],r[1],"important")):Ft(e,t,r));return r}const xn=Symbol("class"),Rn=Symbol("style"),co=Symbol("is custom element"),fo=Symbol("is html");function Fi(e,n){n?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function nt(e,n,t,r){var o=uo(e);o[n]!==(o[n]=t)&&(n==="loading"&&(e[us]=t),t==null?e.removeAttribute(n):typeof t!="string"&&_o(e).includes(n)?e[n]=t:e.setAttribute(n,t))}function xi(e,n,t,r,o=!1){var s=uo(e),a=s[co],c=!s[fo],l=n||{},f=e.tagName==="OPTION";for(var v in n)v in t||(t[v]=null);t.class?t.class=lo(t.class):t.class=null,t[Rn]&&(t.style??(t.style=null));var _=_o(e);for(const T in t){let p=t[T];if(f&&T==="value"&&p==null){e.value=e.__value="",l[T]=p;continue}if(T==="class"){var d=e.namespaceURI==="http://www.w3.org/1999/xhtml";Sn(e,d,p,r,n==null?void 0:n[xn],t[xn]),l[T]=p,l[xn]=t[xn];continue}if(T==="style"){Jt(e,p,n==null?void 0:n[Rn],t[Rn]),l[T]=p,l[Rn]=t[Rn];continue}var h=l[T];if(p!==h){l[T]=p;var b=T[0]+T[1];if(b!=="$$")if(b==="on"){const y={},V="$$"+T;let M=T.slice(2);var x=ri(M);if(ni(M)&&(M=M.slice(0,-7),y.capture=!0),!x&&h){if(p!=null)continue;e.removeEventListener(M,l[V],y),l[V]=null}if(p!=null)if(x)e[`__${M}`]=p,_t([M]);else{let I=function(X){l[T].call(this,X)};var L=I;l[V]=di(M,e,I,y)}else x&&(e[`__${M}`]=void 0)}else if(T==="style")nt(e,T,p);else if(T==="autofocus")li(e,!!p);else if(!a&&(T==="__value"||T==="value"&&p!=null))e.value=e.__value=p;else if(T==="selected"&&f)Fi(e,p);else{var k=T;c||(k=si(k));var B=k==="defaultValue"||k==="defaultChecked";if(p==null&&!a&&!B)if(s[T]=null,k==="value"||k==="checked"){let y=e;const V=n===void 0;if(k==="value"){let M=y.defaultValue;y.removeAttribute(k),y.defaultValue=M,y.value=y.__value=V?M:null}else{let M=y.defaultChecked;y.removeAttribute(k),y.defaultChecked=M,y.checked=V?M:!1}}else e.removeAttribute(T);else B||_.includes(k)&&(a||typeof p!="string")?e[k]=p:typeof p!="function"&&nt(e,k,p)}}}for(let T of Object.getOwnPropertySymbols(t))T.description===Ps&&Di(e,()=>t[T]);return l}function uo(e){return e.__attributes??(e.__attributes={[co]:e.nodeName.includes("-"),[fo]:e.namespaceURI===As})}var Fr=new Map;function _o(e){var n=Fr.get(e.nodeName);if(n)return n;Fr.set(e.nodeName,n=[]);for(var t,r=e,o=Element.prototype;o!==r;){t=Cr(r);for(var s in t)t[s].set&&n.push(s);r=Bt(r)}return n}function Mi(e,n,t=n){var r=An();fi(e,"input",o=>{var s=o?e.defaultValue:e.value;if(s=xt(e)?Mt(s):s,t(s),r&&s!==(s=n())){var a=e.selectionStart,c=e.selectionEnd;e.value=s??"",c!==null&&(e.selectionStart=a,e.selectionEnd=Math.min(c,e.value.length))}}),kn(n)==null&&e.value&&t(xt(e)?Mt(e.value):e.value),lt(()=>{var o=n();xt(e)&&o===Mt(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function xt(e){var n=e.type;return n==="number"||n==="range"}function Mt(e){return e===""?null:+e}function mo(e=!1){const n=K,t=n.l.u;if(!t)return;let r=()=>At(n.s);if(e){let o=0,s={};const a=fn(()=>{let c=!1;const l=n.s;for(const f in l)l[f]!==s[f]&&(s[f]=l[f],c=!0);return c&&o++,o});r=()=>E(a)}t.b.length&&qs(()=>{xr(n,r),Tt(t.b)}),hr(()=>{const o=kn(()=>t.m.map(ls));return()=>{for(const s of o)typeof s=="function"&&s()}}),t.a.length&&hr(()=>{xr(n,r),Tt(t.a)})}function xr(e,n){if(e.l.s)for(const t of e.l.s)E(t);n()}let $n=!1;function Ni(e){var n=$n;try{return $n=!1,[e(),$n]}finally{$n=n}}const Ti={get(e,n){if(!e.exclude.includes(n))return E(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=Ke({get[n](){return e.props[n]}},n,Br)),e.special[n](t),pr(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),pr(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function tt(e,n){return new Proxy({props:e,exclude:n,special:{},version:dn(0)},Ti)}const ki={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(En(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let o=e.props[r];En(o)&&(o=o());const s=Xe(o,n);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(En(r)&&(r=r()),typeof r=="object"&&r!==null&&n in r){const o=Xe(r,n);return o&&!o.configurable&&(o.configurable=!0),o}}},has(e,n){if(n===nn||n===Ir)return!1;for(let t of e.props)if(En(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props)if(En(t)&&(t=t()),!!t){for(const r in t)n.includes(r)||n.push(r);for(const r of Object.getOwnPropertySymbols(t))n.includes(r)||n.push(r)}return n}};function Si(...e){return new Proxy({props:e},ki)}function Mr(e){var n;return((n=e.ctx)==null?void 0:n.d)??!1}function Ke(e,n,t,r){var V;var o=(t&Ms)!==0,s=!Cn||(t&Ns)!==0,a=(t&Ts)!==0,c=(t&ks)!==0,l=!1,f;a?[f,l]=Ni(()=>e[n]):f=e[n];var v=nn in e||Ir in e,_=a&&(((V=Xe(e,n))==null?void 0:V.set)??(v&&n in e&&(M=>e[n]=M)))||void 0,d=r,h=!0,b=!1,x=()=>(b=!0,h&&(h=!1,c?d=kn(r):d=r),d);f===void 0&&r!==void 0&&(_&&s&&bs(),f=x(),_&&_(f));var k;if(s)k=()=>{var M=e[n];return M===void 0?x():(h=!0,b=!1,M)};else{var B=(o?fn:Ut)(()=>e[n]);B.f|=fs,k=()=>{var M=E(B);return M!==void 0&&(d=void 0),M===void 0?d:M}}if((t&Br)===0)return k;if(_){var L=e.$$legacy;return function(M,I){return arguments.length>0?((!s||!I||L||l)&&_(I?k():M),M):k()}}var T=!1,p=Ht(f),y=fn(()=>{var M=k(),I=E(p);return T?(T=!1,I):p.v=M});return a&&E(y),o||(y.equals=qt),function(M,I){if(arguments.length>0){const X=I?E(y):s&&a?Le(M):M;if(!y.equals(X)){if(T=!0,Z(p,X),b&&d!==void 0&&(d=X),Mr(y))return M;kn(()=>E(y))}return M}return Mr(y)?y.v:E(y)}}function Ci(e,n,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:r})}function Ai(){const e=K;return e===null&&zr(),(n,t,r)=>{var s;const o=(s=e.s.$$events)==null?void 0:s[n];if(o){const a=rt(o)?o.slice():[o],c=Ci(n,t,r);for(const l of a)l.call(e.x,c);return!c.defaultPrevented}return!0}}function Pi(e){K===null&&zr(),K.l===null&&hs(),Ii(K).a.push(e)}function Ii(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}const Oi="5";var Sr;typeof window<"u"&&((Sr=window.__svelte??(window.__svelte={})).v??(Sr.v=new Set)).add(Oi);const Li={__category__:"External libraries",__dim__:7,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:"error",EnzymeRvs:"error",FiniteDifferences:89.55708969498833,ForwardDiff:1.7138080468114123,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error"},Bi={__category__:"Distributions",__dim__:1,DifferFwd:3.7588162846390696,DifferRvs:4.437263169730703,EnzymeFwd:3.1525632796265226,EnzymeRvs:2.1280759162303666,FiniteDifferences:31.889238046967396,ForwardDiff:2.021897810218978,MooncakeFwd:5.0626327075266495,MooncakeRvs:3.877874741242846,ReverseDiff:72.80705723450954,ReverseDiffCompiled:7.44071110237838},zi={__category__:"Distributions",__dim__:1,DifferFwd:4.3498115010885146,DifferRvs:"error",EnzymeFwd:7.211542099925835,EnzymeRvs:10.181018613213336,FiniteDifferences:26.179378482591332,ForwardDiff:1.2596013885157664,MooncakeFwd:4.534044012368703,MooncakeRvs:7.161055450965953,ReverseDiff:28.364485981308412,ReverseDiffCompiled:4.829632258761439},Vi={__category__:"Distributions",__dim__:10,DifferFwd:28.025661777103352,DifferRvs:"error",EnzymeFwd:3.6494426526339607,EnzymeRvs:15.901793696599333,FiniteDifferences:152.06949806949805,ForwardDiff:2.010492250042582,MooncakeFwd:27.3862292841278,MooncakeRvs:6.864799824983591,ReverseDiff:83.09593412249099,ReverseDiffCompiled:10.60575172182093},qi={__category__:"Distributions",__dim__:2,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:"error",EnzymeRvs:4.098456763514097,FiniteDifferences:43.05952980688497,ForwardDiff:.8623258273613222,MooncakeFwd:19.67094395584025,MooncakeRvs:14.520548672409776,ReverseDiff:15.488285526603896,ReverseDiffCompiled:2.663057209332834},ji={__category__:"Distributions",__dim__:1,DifferFwd:17.450372353551348,DifferRvs:14.297894658948982,EnzymeFwd:48.93387380828226,EnzymeRvs:8.290451570885232,FiniteDifferences:536.99953897002,ForwardDiff:13.59985944054408,MooncakeFwd:50.23661295370295,MooncakeRvs:35.70472078052389,ReverseDiff:876.0385307346328,ReverseDiffCompiled:116.43693364532578},$i={__category__:"Core Turing syntax",__dim__:2,DifferFwd:18.435469840461764,DifferRvs:12.301458675001589,EnzymeFwd:35.11612065898338,EnzymeRvs:6.57508117041937,FiniteDifferences:724.7292028079236,ForwardDiff:15.24005832819032,MooncakeFwd:75.38645126270963,MooncakeRvs:41.87020215279601,ReverseDiff:1110.4238085678726,ReverseDiffCompiled:139.78631491186277},Ui={__category__:"Distributions",__dim__:3,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:12.439194076115033,EnzymeRvs:"error",FiniteDifferences:47.85777287761852,ForwardDiff:1.031948518193051,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:53.40234119469789,ReverseDiffCompiled:5.543453569215942},Hi={__category__:"Core Turing syntax",__dim__:2,DifferFwd:6.347980844487827,DifferRvs:"error",EnzymeFwd:2.4770025314992195,EnzymeRvs:1.4206639310984805,FiniteDifferences:76.7562628600823,ForwardDiff:1.9031892437591778,MooncakeFwd:9.149572199638712,MooncakeRvs:6.144025785689762,ReverseDiff:121.19891175702057,ReverseDiffCompiled:20.41976577257272},Gi={__category__:"Base Julia features",__dim__:2,DifferFwd:11.595651300672284,DifferRvs:44.58370408514859,EnzymeFwd:19.063947173658814,EnzymeRvs:3.775846467133885,FiniteDifferences:373.92539780946476,ForwardDiff:7.308508148057459,MooncakeFwd:51.99284436493739,MooncakeRvs:28.289492940890963,ReverseDiff:605.752869388348,ReverseDiffCompiled:73.94413818962647},Ki={__category__:"External libraries",__dim__:5,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:"wrong",EnzymeRvs:"error",FiniteDifferences:63.09771139478075,ForwardDiff:1.1306991881473996,MooncakeFwd:"error",MooncakeRvs:12.817035190299304,ReverseDiff:"error",ReverseDiffCompiled:"error"},Xi={__category__:"DynamicPPL demo models",__dim__:2,DifferFwd:6.785941251339961,DifferRvs:"error",EnzymeFwd:3.4522027260646118,EnzymeRvs:1.305161622387576,FiniteDifferences:66.91660996768158,ForwardDiff:2.6497547688276835,MooncakeFwd:9.874664526430221,MooncakeRvs:6.32728232946914,ReverseDiff:203.66116468842728,ReverseDiffCompiled:20.579898218829513},Wi={__category__:"DynamicPPL demo models",__dim__:2,DifferFwd:7.88337390932367,DifferRvs:"error",EnzymeFwd:4.497506858501707,EnzymeRvs:1.6079870762053439,FiniteDifferences:91.45035641836375,ForwardDiff:3.573628311120304,MooncakeFwd:13.088423343762754,MooncakeRvs:9.389182518732467,ReverseDiff:244.486514558737,ReverseDiffCompiled:26.44336095733189},Ji={__category__:"DynamicPPL demo models",__dim__:4,DifferFwd:17.467528388499634,DifferRvs:"error",EnzymeFwd:8.318149902337518,EnzymeRvs:27.88313685289595,FiniteDifferences:93.18446198587452,ForwardDiff:2.133126358533631,MooncakeFwd:19.365869034576868,MooncakeRvs:7.888450353136684,ReverseDiff:128.02456286427977,ReverseDiffCompiled:13.884384408302406},Yi={__category__:"DynamicPPL demo models",__dim__:4,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:10.443664677231254,EnzymeRvs:16.88382026311293,FiniteDifferences:79.21640091116173,ForwardDiff:1.516039010174664,MooncakeFwd:19.957644771559504,MooncakeRvs:9.792279979413278,ReverseDiff:90.16570723684211,ReverseDiffCompiled:8.619401363345228},Zi={__category__:"DynamicPPL demo models",__dim__:4,DifferFwd:13.228170173892345,DifferRvs:"error",EnzymeFwd:13.898789328952537,EnzymeRvs:20.714663643235074,FiniteDifferences:83.5444020895101,ForwardDiff:1.652483275417819,MooncakeFwd:19.00726122906594,MooncakeRvs:8.837604874582366,ReverseDiff:88.7739954964464,ReverseDiffCompiled:11.41257404539577},Qi={__category__:"DynamicPPL demo models",__dim__:4,DifferFwd:11.984014689578716,DifferRvs:"error",EnzymeFwd:14.727597696500451,EnzymeRvs:16.849716891687898,FiniteDifferences:84.77029445828799,ForwardDiff:1.6145250396087345,MooncakeFwd:17.881809015566976,MooncakeRvs:8.43562864586936,ReverseDiff:116.73765367784955,ReverseDiffCompiled:10.412760416666668},ea={__category__:"DynamicPPL demo models",__dim__:2,DifferFwd:7.886986978378693,DifferRvs:"error",EnzymeFwd:5.496007407554317,EnzymeRvs:1.8671418345332111,FiniteDifferences:104.72767383227176,ForwardDiff:2.0214857398417916,MooncakeFwd:14.654425595890578,MooncakeRvs:7.946641229039061,ReverseDiff:350.00825185493375,ReverseDiffCompiled:28.903799538936163},na={__category__:"DynamicPPL demo models",__dim__:4,DifferFwd:17.72884931506849,DifferRvs:"error",EnzymeFwd:5.488563316197412,EnzymeRvs:6.796927008742904,FiniteDifferences:92.52421052631578,ForwardDiff:1.5080239792168728,MooncakeFwd:14.981136527028744,MooncakeRvs:6.61180390709227,ReverseDiff:74.98329648734953,ReverseDiffCompiled:12.504073817481403},ta={__category__:"DynamicPPL demo models",__dim__:4,DifferFwd:26.68306401058717,DifferRvs:"error",EnzymeFwd:11.545550310033823,EnzymeRvs:20.388834658113698,FiniteDifferences:81.56420669374037,ForwardDiff:1.53393968429579,MooncakeFwd:18.954485751813145,MooncakeRvs:9.499529700223523,ReverseDiff:117.07498962799059,ReverseDiffCompiled:11.541466366937575},ra={__category__:"DynamicPPL demo models",__dim__:4,DifferFwd:26.737645781529086,DifferRvs:"error",EnzymeFwd:7.696053925010532,EnzymeRvs:12.620168067226892,FiniteDifferences:83.37553332867036,ForwardDiff:2.1333555110081917,MooncakeFwd:16.78811628228145,MooncakeRvs:7.769889498000276,ReverseDiff:125.28356967028394,ReverseDiffCompiled:13.232263734748742},oa={__category__:"DynamicPPL demo models",__dim__:4,DifferFwd:26.921266035824075,DifferRvs:"error",EnzymeFwd:8.63561814040174,EnzymeRvs:10.240886962393404,FiniteDifferences:87.07257840688315,ForwardDiff:1.7003829404852424,MooncakeFwd:17.399707304531834,MooncakeRvs:7.932805416881849,ReverseDiff:142.48374686761022,ReverseDiffCompiled:14.192500173046309},sa={__category__:"DynamicPPL demo models",__dim__:4,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:12.391925833453529,EnzymeRvs:18.983849752048677,FiniteDifferences:79.78096803525216,ForwardDiff:1.5506535460628805,MooncakeFwd:22.451909770274007,MooncakeRvs:11.073679461372944,ReverseDiff:104.35887026213558,ReverseDiffCompiled:10.021964904645705},ia={__category__:"DynamicPPL demo models",__dim__:4,DifferFwd:26.073083205894616,DifferRvs:"error",EnzymeFwd:11.009468408666212,EnzymeRvs:19.43831066671328,FiniteDifferences:81.66231303981462,ForwardDiff:1.4702721174872069,MooncakeFwd:18.869217900460058,MooncakeRvs:8.898836559290057,ReverseDiff:102.99238009861048,ReverseDiffCompiled:10.879587723640478},aa={__category__:"Core Turing syntax",__dim__:5,DifferFwd:19.69061205204623,DifferRvs:"error",EnzymeFwd:2.755253741470472,EnzymeRvs:.8598749195538694,FiniteDifferences:178.80572239816536,ForwardDiff:2.4481019734413403,MooncakeFwd:28.011963588275005,MooncakeRvs:7.784527088701665,ReverseDiff:157.8410633484163,ReverseDiffCompiled:20.359944532488118},la={__category__:"Core Turing syntax",__dim__:1,DifferFwd:6.854670597907534,DifferRvs:"error",EnzymeFwd:9.108250620347395,EnzymeRvs:1.809775524552468,FiniteDifferences:99.66874460087318,ForwardDiff:3.627500492077316,MooncakeFwd:11.4067400850352,MooncakeRvs:15.42848529239186,ReverseDiff:516.5453246436414,ReverseDiffCompiled:54.45942918129178},ca={__category__:"DynamicPPL arXiV paper",__dim__:2,DifferFwd:8.73641326489041,DifferRvs:"error",EnzymeFwd:3.7313823642664614,EnzymeRvs:6.364720652856246,FiniteDifferences:18.391532336375995,ForwardDiff:2.473196558570483,MooncakeFwd:4.099336949969861,MooncakeRvs:12.837660761950984,ReverseDiff:1221.7403284671534,ReverseDiffCompiled:220.16160377358491},fa={__category__:"DynamicPPL arXiV paper",__dim__:13,DifferFwd:26.148945262421815,DifferRvs:"error",EnzymeFwd:5.895254367307088,EnzymeRvs:2.3092850139801735,FiniteDifferences:166.36406495547408,ForwardDiff:5.44774093465193,MooncakeFwd:29.85186842694115,MooncakeRvs:8.182425313530231,ReverseDiff:91.02512424075097,ReverseDiffCompiled:9.946098248193065},da={__category__:"DynamicPPL arXiV paper",__dim__:1e4,DifferFwd:62950.01168565586,DifferRvs:"error",EnzymeFwd:56417.58102513554,EnzymeRvs:7.129409630905958,FiniteDifferences:255349.3693678825,ForwardDiff:42092.28381679389,MooncakeFwd:28166.639319929833,MooncakeRvs:24.982196684250187,ReverseDiff:811.7796012269939,ReverseDiffCompiled:180.63680754335746},ua={__category__:"DynamicPPL arXiV paper",__dim__:115,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:64.15459815151364,EnzymeRvs:9.997840684294113,FiniteDifferences:"NaN",ForwardDiff:23.57563667651298,MooncakeFwd:3961.9110558154944,MooncakeRvs:7.15863828309643,ReverseDiff:66.471878964037,ReverseDiffCompiled:15.152098379855552},_a={__category__:"DynamicPPL arXiV paper",__dim__:535,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:401.4884525359685,EnzymeRvs:3.2739392517196366,FiniteDifferences:8744.825805974198,ForwardDiff:481.917921158645,MooncakeFwd:1546.926583773014,MooncakeRvs:11.318657360666052,ReverseDiff:198.11247551480633,ReverseDiffCompiled:37.08944187348693},ma={__category__:"DynamicPPL arXiV paper",__dim__:100,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:51.51868757085107,EnzymeRvs:8.376449180929214,FiniteDifferences:1223.6684548161418,ForwardDiff:106.32088100945232,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:72.56457401524933,ReverseDiffCompiled:17.959469419626025},va={__category__:"DynamicPPL arXiV paper",__dim__:400,DifferFwd:1891.1890596940411,DifferRvs:"error",EnzymeFwd:396.5512679701194,EnzymeRvs:2.1885990055790985,FiniteDifferences:6406.268974276358,ForwardDiff:375.3907407616659,MooncakeFwd:1029.915737128107,MooncakeRvs:11.083130776575725,ReverseDiff:323.37810779273906,ReverseDiffCompiled:83.4672903709452},pa={__category__:"DynamicPPL arXiV paper",__dim__:503,DifferFwd:1908.8342047562828,DifferRvs:"error",EnzymeFwd:86.18108573651165,EnzymeRvs:3.080215945032174,FiniteDifferences:6035.068407471812,ForwardDiff:127.2156731786052,MooncakeFwd:1683.8300995163172,MooncakeRvs:6.6168691922802,ReverseDiff:210.3720867061444,ReverseDiffCompiled:27.812398499187992},ga={__category__:"Core Turing syntax",__dim__:2,DifferFwd:7.54866211313966,DifferRvs:5.198067014648931,EnzymeFwd:3.3920807453416146,EnzymeRvs:2.381998109484213,FiniteDifferences:61.18753161355589,ForwardDiff:1.778596709970639,MooncakeFwd:9.803031483284649,MooncakeRvs:5.528572711499708,ReverseDiff:119.51138959817229,ReverseDiffCompiled:15.78376063327032},ha={__category__:"External libraries",__dim__:20,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:"error",EnzymeRvs:19.972391433929896,FiniteDifferences:232.54157404626017,ForwardDiff:3.237013469715441,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:53.05050235618387,ReverseDiffCompiled:"wrong"},ba={__category__:"Core Turing syntax",__dim__:4,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:3.2834772559566283,EnzymeRvs:4.205192176776876,FiniteDifferences:59.47702501242338,ForwardDiff:1.1511913576092079,MooncakeFwd:15.307516625243501,MooncakeRvs:6.444825302202351,ReverseDiff:33.9733859043864,ReverseDiffCompiled:3.875261163288845},ya={__category__:"Effect of model size",__dim__:10,DifferFwd:31.17835115131579,DifferRvs:"error",EnzymeFwd:2.121349424497509,EnzymeRvs:.7211327034602699,FiniteDifferences:211.7695332535476,ForwardDiff:3.310357679195852,MooncakeFwd:51.620588738661645,MooncakeRvs:7.2652317425388535,ReverseDiff:154.51760261033832,ReverseDiffCompiled:21.212780537947573},Da={__category__:"Effect of model size",__dim__:50,DifferFwd:130.78074099368277,DifferRvs:"error",EnzymeFwd:8.092944737659112,EnzymeRvs:.5468033622007132,FiniteDifferences:702.3773630888138,ForwardDiff:16.83981294060166,MooncakeFwd:213.90686274509804,MooncakeRvs:6.93026464060099,ReverseDiff:147.2686044535101,ReverseDiffCompiled:22.67587438294297},wa={__category__:"Effect of model size",__dim__:100,DifferFwd:275.59618071727994,DifferRvs:"error",EnzymeFwd:14.387565574932655,EnzymeRvs:.5944505317965744,FiniteDifferences:1377.9821312429397,ForwardDiff:19.329954800712233,MooncakeFwd:448.7261260026051,MooncakeRvs:7.390559704048777,ReverseDiff:139.64088378922926,ReverseDiffCompiled:22.101082043555678},Ea={__category__:"Effect of model size",__dim__:500,DifferFwd:1369.5425883221103,DifferRvs:"error",EnzymeFwd:113.4203743058888,EnzymeRvs:.8760753827165042,FiniteDifferences:5790.760665787504,ForwardDiff:87.35393522706713,MooncakeFwd:1764.8867702018106,MooncakeRvs:7.377805713151496,ReverseDiff:139.96232619651857,ReverseDiffCompiled:22.48929407244402},Ra={__category__:"Distributions",__dim__:1,DifferFwd:4.027321828917346,DifferRvs:"error",EnzymeFwd:2.6613225084249454,EnzymeRvs:2.746096009253904,FiniteDifferences:29.078502532652788,ForwardDiff:1.6790979292180532,MooncakeFwd:4.767167352220733,MooncakeRvs:4.8462175224972635,ReverseDiff:68.59738803878706,ReverseDiffCompiled:7.897093382807668},Fa={__category__:"Distributions",__dim__:1,DifferFwd:3.6936514656667065,DifferRvs:"error",EnzymeFwd:1.8244667658730158,EnzymeRvs:7.356299510918234,FiniteDifferences:19.032719522591645,ForwardDiff:1.146824919871795,MooncakeFwd:4.013784931371581,MooncakeRvs:8.58015937883122,ReverseDiff:22.790746508942007,ReverseDiffCompiled:5.000279171247939},xa={__category__:"Core Turing syntax",__dim__:1,DifferFwd:6.526854404722434,DifferRvs:"error",EnzymeFwd:8.237714756967014,EnzymeRvs:2.4776275499990996,FiniteDifferences:90.1714482151174,ForwardDiff:3.3453631767906,MooncakeFwd:11.849265304224502,MooncakeRvs:13.155334043591482,ReverseDiff:446.9113902092079,ReverseDiffCompiled:63.8248030640281},Ma={__category__:"Core Turing syntax",__dim__:1,DifferFwd:14.656776695285393,DifferRvs:12.731753646270821,EnzymeFwd:37.978191535261736,EnzymeRvs:7.435932268182684,FiniteDifferences:467.01532652756873,ForwardDiff:10.682074827443234,MooncakeFwd:46.766796034591856,MooncakeRvs:29.312670965272716,ReverseDiff:1469.402637860582,ReverseDiffCompiled:125.87702519254252},Na={__category__:"Core Turing syntax",__dim__:3,DifferFwd:13.486233784156775,DifferRvs:"error",EnzymeFwd:3.5588863467468705,EnzymeRvs:18.20172946929383,FiniteDifferences:89.12708959921662,ForwardDiff:1.5344189911019606,MooncakeFwd:15.19216280984028,MooncakeRvs:6.916511031298103,ReverseDiff:136.2949335719694,ReverseDiffCompiled:14.334914251562514},Ta={__category__:"Core Turing syntax",__dim__:1,DifferFwd:15.505751862001775,DifferRvs:13.281681870630285,EnzymeFwd:44.17875626371584,EnzymeRvs:7.427909264268514,FiniteDifferences:455.5630147881533,ForwardDiff:12.687341927470689,MooncakeFwd:40.58177482495039,MooncakeRvs:30.674512007429495,ReverseDiff:1235.8452764253182,ReverseDiffCompiled:131.14812796780072},ka={__category__:"Distributions",__dim__:1,DifferFwd:3.9544557151610045,DifferRvs:4.68724755321851,EnzymeFwd:3.189908444295875,EnzymeRvs:2.974250153314378,FiniteDifferences:24.09278235063553,ForwardDiff:"NaN",MooncakeFwd:4.654761194919802,MooncakeRvs:3.757883853918653,ReverseDiff:"NaN",ReverseDiffCompiled:6.468771395968049},Sa={__category__:"External libraries",__dim__:5,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:"wrong",EnzymeRvs:305.78237191189,FiniteDifferences:59.49653560739617,ForwardDiff:7.608335127046114,MooncakeFwd:"error",MooncakeRvs:7.719350841427828,ReverseDiff:"error",ReverseDiffCompiled:"error"},Ca={__category__:"PosteriorDB",__dim__:4,DifferFwd:9.675065924406681,DifferRvs:"error",EnzymeFwd:2.134819064430715,EnzymeRvs:2.8922624645366253,FiniteDifferences:55.42437099161322,ForwardDiff:2.774946721825248,MooncakeFwd:7.999649675950253,MooncakeRvs:11.89713259219089,ReverseDiff:361.3976178408515,ReverseDiffCompiled:59.60672549487241},Aa={__category__:"PosteriorDB",__dim__:3,DifferFwd:19.297698449976515,DifferRvs:"error",EnzymeFwd:9.965260545905707,EnzymeRvs:13.933860999674724,FiniteDifferences:39.17365019804045,ForwardDiff:2.485089463220676,MooncakeFwd:9.439316618593299,MooncakeRvs:42.149978635522004,ReverseDiff:685.5865231259969,ReverseDiffCompiled:135.7061011904762},Pa={__category__:"PosteriorDB",__dim__:4,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:6.505055302978897,EnzymeRvs:7.144957018177045,FiniteDifferences:47.97077071556597,ForwardDiff:2.704495210022108,MooncakeFwd:10.172241863838275,MooncakeRvs:34.57043935052531,ReverseDiff:487.5182508462172,ReverseDiffCompiled:85.05705177531054},Ia={__category__:"PosteriorDB",__dim__:10,DifferFwd:28.339988019852814,DifferRvs:"error",EnzymeFwd:5.659908978071989,EnzymeRvs:2.815714633508561,FiniteDifferences:238.6802241128865,ForwardDiff:3.8254439166971137,MooncakeFwd:40.70846781042976,MooncakeRvs:8.345960129493951,ReverseDiff:259.03913699663855,ReverseDiffCompiled:27.687142043837177},Oa={__category__:"PosteriorDB",__dim__:10,DifferFwd:25.134268234489735,DifferRvs:"error",EnzymeFwd:4.231328539429471,EnzymeRvs:2.3275241415925403,FiniteDifferences:246.57560615714814,ForwardDiff:5.317160022952037,MooncakeFwd:34.27951084812623,MooncakeRvs:7.018296169239566,ReverseDiff:130.89888689565933,ReverseDiffCompiled:25.072366941567548},La={__category__:"PosteriorDB",__dim__:4,DifferFwd:6.549687053914571,DifferRvs:"error",EnzymeFwd:1.2113244528329281,EnzymeRvs:1.8482864562378847,FiniteDifferences:50.56664233576642,ForwardDiff:2.215485756026297,MooncakeFwd:6.286985052861829,MooncakeRvs:4.737855579868709,ReverseDiff:221.73385078524538,ReverseDiffCompiled:30.82541073384447},Ba={__category__:"PosteriorDB",__dim__:3,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:7.012844081079773,EnzymeRvs:12.513005780346822,FiniteDifferences:41.24861129928195,ForwardDiff:2.836820809248555,MooncakeFwd:10.485376389774094,MooncakeRvs:31.449147883452447,ReverseDiff:333.21316931982636,ReverseDiffCompiled:77.21280864197531},za={__category__:"PosteriorDB",__dim__:90,DifferFwd:235.2505905511811,DifferRvs:"error",EnzymeFwd:28.37226827430294,EnzymeRvs:2.093513178590153,FiniteDifferences:1084.0976860126048,ForwardDiff:39.24128470744052,MooncakeFwd:160.30431712254602,MooncakeRvs:11.215980144145865,ReverseDiff:396.49452179321554,ReverseDiffCompiled:51.10440263494622},Va={__category__:"PosteriorDB",__dim__:65,DifferFwd:147.59936108892668,DifferRvs:"error",EnzymeFwd:40.23928545703378,EnzymeRvs:2.9893204552429986,FiniteDifferences:862.868152631931,ForwardDiff:33.97322119428091,MooncakeFwd:136.43923812043252,MooncakeRvs:12.908093186102882,ReverseDiff:377.47691373025515,ReverseDiffCompiled:64.00810978368324},qa={__category__:"PosteriorDB",__dim__:6,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:7.0776824430298,EnzymeRvs:6.27776936950572,FiniteDifferences:108.76829824675747,ForwardDiff:6.214207524341765,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:258.8934691832303,ReverseDiffCompiled:59.08571071071071},ja={__category__:"PosteriorDB",__dim__:6,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:7.293448189134807,EnzymeRvs:6.011892071162911,FiniteDifferences:113.27383758302979,ForwardDiff:8.964149738086114,MooncakeFwd:"error",MooncakeRvs:"error",ReverseDiff:245.39609236234458,ReverseDiffCompiled:50.70173002990175},$a={__category__:"Base Julia features",__dim__:50,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:34.701089617054876,EnzymeRvs:11.707442734243347,FiniteDifferences:829.7654692448741,ForwardDiff:3.340148890184912,MooncakeFwd:274.53888362348476,MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error"},Ua={__category__:"Base Julia features",__dim__:1,DifferFwd:"error",DifferRvs:"error",EnzymeFwd:5.744458682898504,EnzymeRvs:15.078906632703047,FiniteDifferences:10.144462504765919,ForwardDiff:.9933863643290359,MooncakeFwd:8.396782680296427,MooncakeRvs:"error",ReverseDiff:"error",ReverseDiffCompiled:"error"},Ha={abstractgps:Li,assume_beta:Bi,assume_dirichlet:zi,assume_lkjcholu:Vi,assume_mvnormal:qi,assume_normal:ji,assume_submodel:$i,assume_wishart:Ui,broadcast_macro:Hi,control_flow:Gi,delaydiffeq:Ki,demo_assume_dot_observe:Xi,demo_assume_dot_observe_literal:Wi,demo_assume_index_observe:Ji,demo_assume_matrix_observe_matrix_index:Yi,demo_assume_multivariate_observe:Zi,demo_assume_multivariate_observe_literal:Qi,demo_assume_observe_literal:ea,demo_assume_submodel_observe_index_literal:na,demo_dot_assume_observe:ta,demo_dot_assume_observe_index:ra,demo_dot_assume_observe_index_literal:oa,demo_dot_assume_observe_matrix_index:sa,demo_dot_assume_observe_submodel:ia,dot_assume:aa,dot_observe:la,dppl_gauss_unknown:ca,dppl_hier_poisson:fa,dppl_high_dim_gauss:da,dppl_hmm_semisup:ua,dppl_lda:_a,dppl_logistic_regression:ma,dppl_naive_bayes:va,dppl_sto_volatility:pa,dynamic_constraint:ga,lux_nn:ha,multiple_constraints_same_var:ba,n010:ya,n050:Da,n100:wa,n500:Ea,observe_bernoulli:Ra,observe_categorical:Fa,observe_index:xa,observe_literal:Ma,observe_multivariate:Na,observe_submodel:Ta,observe_von_mises:ka,ordinarydiffeq:Sa,pdb_arma11:Ca,pdb_earnings:Aa,pdb_earnings_male:Pa,pdb_eightsch_centered:Ia,pdb_eightsch_noncentered:Oa,pdb_garch11:La,pdb_kidiq:Ba,pdb_radon:za,pdb_rats:Va,pdb_sblrc:qa,pdb_sblri:ja,threaded_assume:$a,threaded_observe:Ua},Ga=`#=
This is an implementation of using AbstractGPs.jl with Turing to model a Gaussian process.
The model is adapted from the Turing documentation:
https://turinglang.org/docs/tutorials/gaussian-processes-introduction/
=#

using AbstractGPs
using LogExpFunctions

# Load data
distance = [2.0, 3.0, 4.0, 5.0, 6.0]
n = [1443, 694, 455, 353, 272]
y = [1346, 577, 337, 208, 149]

# Make Turing model
@model function abstractgps(d, n, y; jitter = 1e-4)
    v ~ Gamma(2, 1)
    l ~ Gamma(4, 1)
    f = GP(v * with_lengthscale(SEKernel(), l))
    f_latent ~ f(d, jitter)
    y ~ product_distribution(Binomial.(n, logistic.(f_latent)))
    return (fx = f(d, jitter), f_latent = f_latent, y = y)
end

model = abstractgps(distance, n, y)`,Ka=`@model function assume_beta()
    a ~ Beta(2, 2)
end

model = assume_beta()`,Xa=`@model function assume_dirichlet()
    a ~ Dirichlet([1.0, 5.0])
end

model = assume_dirichlet()`,Wa=`@model function assume_lkjcholu()
    a ~ LKJCholesky(5, 1.0, 'U')
end

model = assume_lkjcholu()`,Ja=`@model function assume_mvnormal()
    a ~ MvNormal([0.0, 0.0], [1.0 0.5; 0.5 1.0])
end

model = assume_mvnormal()`,Ya=`@model function assume_normal()
    a ~ Normal()
end

model = assume_normal()`,Za=`@model function inner1()
    return a ~ Normal()
end
@model function assume_submodel()
    a ~ to_submodel(inner1())
    x ~ Normal(a)
end

model = assume_submodel()`,Qa=`@model function assume_wishart()
    a ~ Wishart(7, [1.0 0.5; 0.5 1.0])
end

model = assume_wishart()`,el=`@model function broadcast_macro(x = [1.5, 2.0], ::Type{TV} = Vector{Float64}) where {TV}
    a ~ Normal(0, 1)
    b ~ InverseGamma(2, 3)
    @. x ~ Normal(a, $(sqrt(b)))
end

model = broadcast_macro()`,nl=`#= 
This model illustrates dynamic control flow inside a model that depends on the
value of a random variable. This will cause problems with ReverseDiff's
compiled tapes, as a tape compiled at a given value of \`a\` may not be
appropriate for a different value of \`a\`.

To make sure that the table correctly reflects this issue, the preparation for
the gradient is carried out at a value of \`a > 0\`, and the gradient is
evaluated at a value of \`a < 0\`. See \`main.jl\` for more information.
=#

@model function control_flow()
    a ~ Normal()
    if a > 0
        b ~ Normal()
    else
        b ~ Beta(2, 2)
    end
end

model = control_flow()`,tl=`#=
This is an example of using DifferentialEquations.jl with Turing to model a delayed Lotka–Volterra equations (predator-prey model).
The model is adapted from the Turing documentation:
https://turinglang.org/docs/tutorials/bayesian-differential-equations/ 
=#
using DelayDiffEq: DDEProblem, solve, MethodOfSteps
using OrdinaryDiffEqTsit5: Tsit5

# SciMLSensitivity is needed for reverse-mode AD on differential equations
import SciMLSensitivity

function delay_lotka_volterra(du, u, h, p, t)
    α, β, γ, δ = p
    x, y = u
    du[1] = α * h(p, t - 1; idxs = 1) - β * x * y
    du[2] = -γ * y + δ * x * y
    return nothing
end
p = (1.5, 1.0, 3.0, 1.0)
u0 = [1.0; 1.0]
tspan = (0.0, 10.0)
h(p, t; idxs::Int) = 1.0
prob_dde = DDEProblem(delay_lotka_volterra, u0, h, tspan, p)
sol_dde = solve(prob_dde; saveat = 0.1)
q = 1.7
ddedata = rand.(Poisson.(q .* Array(sol_dde)))

@model function delaydiffeq(data, prob)
    α ~ truncated(Normal(1.5, 0.2); lower = 0.5, upper = 2.5)
    β ~ truncated(Normal(1.1, 0.2); lower = 0, upper = 2)
    γ ~ truncated(Normal(3.0, 0.2); lower = 1, upper = 4)
    δ ~ truncated(Normal(1.0, 0.2); lower = 0, upper = 2)
    q ~ truncated(Normal(1.7, 0.2); lower = 0, upper = 3)
    p = [α, β, γ, δ]
    predicted = solve(
        prob,
        MethodOfSteps(Tsit5());
        p = p,
        saveat = 0.1,
        abstol = 1e-6,
        reltol = 1e-6,
    )
    ϵ = 1e-5
    for i in eachindex(predicted.u)
        data[:, i] ~ product_distribution(Poisson.(q .* predicted.u[i] .+ ϵ))
    end
    return nothing
end

model = delaydiffeq(ddedata, prob_dde)`,rl=`@model function demo_assume_dot_observe(x = [1.5, 2.0])
    # \`assume\` and \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    x .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe()`,ol=`@model function demo_assume_dot_observe_literal()
    # \`assume\` and literal \`dot_observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    [1.5, 2.0] .~ Normal(m, sqrt(s))
end

model = demo_assume_dot_observe_literal()`,sl=`using LinearAlgebra: Diagonal

@model function demo_assume_index_observe(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    # \`assume\` with indexing and \`observe\`
    s = TV(undef, length(x))
    for i in eachindex(s)
        s[i] ~ InverseGamma(2, 3)
    end
    m = TV(undef, length(x))
    for i in eachindex(m)
        m[i] ~ Normal(0, sqrt(s[i]))
    end
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_index_observe()`,il=`using FillArrays
using LinearAlgebra: Diagonal

@model function demo_assume_matrix_observe_matrix_index(
    x = transpose([1.5 2.0;]),
    ::Type{TV} = Array{Float64},
) where {TV}
    n = length(x)
    d = n ÷ 2
    s ~ reshape(product_distribution(Fill(InverseGamma(2, 3), n)), d, 2)
    s_vec = vec(s)
    m ~ MvNormal(zeros(n), Diagonal(s_vec))
    x[:, 1] ~ MvNormal(m, Diagonal(s_vec))
end

model = demo_assume_matrix_observe_matrix_index()`,al=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe(x = [1.5, 2.0])
    # Multivariate \`assume\` and \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zero(x), Diagonal(s))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe()`,ll=`using LinearAlgebra: Diagonal

@model function demo_assume_multivariate_observe_literal()
    # multivariate \`assume\` and literal \`observe\`
    s ~ product_distribution([InverseGamma(2, 3), InverseGamma(2, 3)])
    m ~ MvNormal(zeros(2), Diagonal(s))
    [1.5, 2.0] ~ MvNormal(m, Diagonal(s))
end

model = demo_assume_multivariate_observe_literal()`,cl=`@model function demo_assume_observe_literal()
    # univariate \`assume\` and literal \`observe\`
    s ~ InverseGamma(2, 3)
    m ~ Normal(0, sqrt(s))
    1.5 ~ Normal(m, sqrt(s))
    2.0 ~ Normal(m, sqrt(s))
end

model = demo_assume_observe_literal()`,fl=`@model function _prior_dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    s = TV(undef, 2)
    s .~ InverseGamma(2, 3)
    m = TV(undef, 2)
    m ~ product_distribution(Normal.(0, sqrt.(s)))
    return s, m
end

@model function demo_assume_submodel_observe_index_literal()
    # Submodel prior
    priors ~ to_submodel(_prior_dot_assume(), false)
    s, m = priors
    1.5 ~ Normal(m[1], sqrt(s[1]))
    2.0 ~ Normal(m[2], sqrt(s[2]))
end

model = demo_assume_submodel_observe_index_literal()`,dl=`using LinearAlgebra: Diagonal

@model function demo_dot_assume_observe(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    # \`dot_assume\` and \`observe\`
    s = TV(undef, length(x))
    m = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m ~ product_distribution(Normal.(0, sqrt.(s)))
    x ~ MvNormal(m, Diagonal(s))
end

model = demo_dot_assume_observe()`,ul=`@model function demo_dot_assume_observe_index(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    # \`dot_assume\` and \`observe\` with indexing
    s = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m = TV(undef, length(x))
    m ~ product_distribution(Normal.(0, sqrt.(s)))
    for i in eachindex(x)
        x[i] ~ Normal(m[i], sqrt(s[i]))
    end
end

model = demo_dot_assume_observe_index()`,_l=`@model function demo_dot_assume_observe_index_literal(
    ::Type{TV} = Vector{Float64},
) where {TV}
    # \`dot_assume\` and literal \`observe\` with indexing
    s = TV(undef, 2)
    m = TV(undef, 2)
    s .~ InverseGamma(2, 3)
    m ~ product_distribution(Normal.(0, sqrt.(s)))

    1.5 ~ Normal(m[1], sqrt(s[1]))
    2.0 ~ Normal(m[2], sqrt(s[2]))
end

model = demo_dot_assume_observe_index_literal()`,ml=`using LinearAlgebra: Diagonal

@model function demo_dot_assume_observe_matrix_index(
    x = transpose([1.5 2.0;]),
    ::Type{TV} = Vector{Float64},
) where {TV}
    s = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m = TV(undef, length(x))
    m ~ product_distribution(Normal.(0, sqrt.(s)))
    x[:, 1] ~ MvNormal(m, Diagonal(s))
end

model = demo_dot_assume_observe_matrix_index()`,vl=`using LinearAlgebra: Diagonal

@model function _likelihood_multivariate_observe(s, m, x)
    return x ~ MvNormal(m, Diagonal(s))
end

@model function demo_dot_assume_observe_submodel(
    x = [1.5, 2.0],
    ::Type{TV} = Vector{Float64},
) where {TV}
    s = TV(undef, length(x))
    s .~ InverseGamma(2, 3)
    m = TV(undef, length(x))
    m ~ product_distribution(Normal.(0, sqrt.(s)))

    # Submodel likelihood
    # With to_submodel, we have to have a left-hand side variable to
    # capture the result, so we just use a dummy variable
    _ignore ~ to_submodel(_likelihood_multivariate_observe(s, m, x))
end

model = demo_dot_assume_observe_submodel()`,pl=`@model function dot_assume(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 5)
    a .~ Normal()
end

model = dot_assume()`,gl=`@model function dot_observe(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    x .~ Normal(a)
end

model = dot_observe()`,hl=`using FillArrays

n = 10_000
s = abs(rand()) + 0.5
y = randn() .+ s * randn(n)

@model function dppl_gauss_unknown(y)
    N = length(y)
    m ~ Normal(0, 1)
    s ~ truncated(Cauchy(0, 5); lower = 0)
    y ~ product_distribution(Fill(Normal(m, s), N))
end

model = dppl_gauss_unknown(y)`,bl=`using FillArrays
using Turing: LogPoisson

nd, ns = 5, 10
a0, a1, a0_sig = 1.0, 0.5, 0.3
n = nd * ns
# simulate group level parameters
a0s = rand(Normal(0, a0_sig), ns)
logpop = rand(Normal(9, 1.5), ns)
λ = exp.(a0 .+ a0s + (a1 * logpop))
# and individual data
y = mapreduce(λi -> rand(Poisson(λi), nd), vcat, λ)
x = repeat(logpop, inner = nd)
idx = repeat(collect(1:ns), inner = nd)

@model function dppl_hier_poisson(y, x, idx, ns)
    a0 ~ Normal(0, 10)
    a1 ~ Normal(0, 1)
    a0_sig ~ truncated(Cauchy(0, 1); lower = 0)
    a0s ~ product_distribution(Fill(Normal(0, a0_sig), ns))
    alpha = a0 .+ a0s[idx] .+ a1 * x
    y ~ product_distribution(LogPoisson.(alpha))
end

model = dppl_hier_poisson(y, x, idx, ns)`,yl=`using FillArrays

@model function dppl_high_dim_gauss(D)
    m ~ product_distribution(Fill(Normal(0, 1), D))
end

model = dppl_high_dim_gauss(10_000)`,Dl=`using FillArrays
using StatsFuns: logsumexp

# Set up hyperparameters
K, v, T, T_unsup = 5, 20, 100, 200
alpha = fill(1.0, K)
beta = fill(0.1, v)
theta = rand(Dirichlet(alpha), K)
phi = rand(Dirichlet(beta), K)

# Simulate data (supervised)
w = Vector{Int}(undef, T)
z = Vector{Int}(undef, T)
z[1] = rand(1:K)
w[1] = rand(Categorical(phi[:, z[1]]))
for t = 2:T
    z[t] = rand(Categorical(theta[:, z[t-1]]))
    w[t] = rand(Categorical(phi[:, z[t]]))
end

# Unsupervised
u = Vector{Int}(undef, T_unsup)
y = Vector{Int}(undef, T_unsup)
y[1] = rand(1:K)
u[1] = rand(Categorical(phi[:, y[1]]))
for t = 2:T_unsup
    y[t] = rand(Categorical(theta[:, y[t-1]]))
    u[t] = rand(Categorical(phi[:, y[t]]))
end

@model function dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)
    theta ~ product_distribution(Fill(Dirichlet(alpha), K))
    phi ~ product_distribution(Fill(Dirichlet(beta), K))
    for t = 1:T
        w[t] ~ Categorical(phi[:, z[t]])
    end
    for t = 2:T
        z[t] ~ Categorical(theta[:, z[t-1]])
    end

    TF = eltype(theta)
    acc = similar(alpha, TF, K)
    gamma = similar(alpha, TF, K)
    temp_gamma = similar(alpha, TF, K)
    for k = 1:K
        gamma[k] = log(phi[u[1], k])
    end
    for t = 2:T_unsup
        for k = 1:K
            for j = 1:K
                acc[j] = gamma[j] + log(theta[k, j]) + log(phi[u[t], k])
            end
            temp_gamma[k] = logsumexp(acc)
        end
        gamma .= temp_gamma
    end
    @addlogprob! logsumexp(gamma)
end

model = dppl_hmm_semisup(K, T, T_unsup, w, z, u, alpha, beta)`,wl=`using FillArrays

v = 100      # words
k = 5        # topics
m = 10       # number of docs
alpha = ones(k)
beta = ones(v)

phi = rand(Dirichlet(beta), k)
theta = rand(Dirichlet(alpha), m)
doc_lengths = rand(Poisson(1_000), m)
n = sum(doc_lengths)

w = Vector{Int}(undef, n)
doc = Vector{Int}(undef, n)
for i = 1:m
    local idx = sum(doc_lengths[1:i-1]) # starting index for inner loop
    for j = 1:doc_lengths[i]
        z = rand(Categorical(theta[:, i]))
        w[idx+j] = rand(Categorical(phi[:, z]))
        doc[idx+j] = i
    end
end

@model function dppl_lda(k, m, w, doc, alpha, beta)
    theta ~ product_distribution(Fill(Dirichlet(alpha), m))
    phi ~ product_distribution(Fill(Dirichlet(beta), k))
    log_phi_dot_theta = log.(phi * theta)
    @addlogprob! sum(log_phi_dot_theta[CartesianIndex.(w, doc)])
end

model = dppl_lda(k, m, w, doc, alpha, beta)`,El=`using Random: Xoshiro
using StatsFuns: logistic

function safelogistic(x::T) where {T}
    logistic(x) * (1 - 2 * eps(T)) + eps(T)
end

d, n = 100, 10_000
X = randn(Xoshiro(468), d, n)
w = randn(Xoshiro(468), d)
y = Int.(logistic.(X' * w) .> 0.5)

@model function dppl_logistic_regression(Xt, y)
    N, D = size(Xt)
    w ~ product_distribution(Normal.(zeros(D)))
    y ~ product_distribution(Bernoulli.(safelogistic.(Xt * w)))
end

model = dppl_logistic_regression(X', y)`,Rl=`using DelimitedFiles
using FillArrays

# Load pre-computed PCA-reduced MNIST data. There are 1000 images,
# each of which have been compressed to 40 dimensions via PCA.
#
# See scripts/generate_naive_bayes_data.jl for details.

path = "$(@__DIR__)/../data/dppl_naive_bayes.csv"
data, _ = readdlm(path, ',', header = true)

labels = Int.(data[:, 1])
image_vec = data[:, 2:end]
C = 10 # Number of labels
D = size(image_vec, 2)

@model function dppl_naive_bayes(image_vec, labels, C, D)
    m ~ product_distribution(Fill(Normal(0, 10), C, D))
    image_vec ~ product_distribution(Normal.(m[labels, :]))
end

model = dppl_naive_bayes(image_vec, labels, C, D)`,Fl=`using DelimitedFiles: readdlm

path = "$(@__DIR__)/../data/dppl_sto_volatility.csv"
data, _ = readdlm(path, ',', header = true)
to_num(x) = x isa Number ? x : 0.1
y = map(to_num, data[1:500, 2])

@model function dppl_sto_volatility(y, ::Type{Tv} = Vector{Float64}) where {Tv}
    T = length(y)
    μ ~ Cauchy(0, 10)
    ϕ ~ Uniform(-1, 1)
    σ ~ truncated(Cauchy(0, 5); lower = 0)

    h = Tv(undef, T)
    h[1] ~ Normal(μ, σ / sqrt(1 - ϕ^2))
    y[1] ~ Normal(0, exp(h[1] / 2))
    for t = 2:T
        h[t] ~ Normal(μ + ϕ * (h[t-1] - μ), σ)
        y[t] ~ Normal(0, exp(h[t] / 2))
    end
end

model = dppl_sto_volatility(y)`,xl=`@model function dynamic_constraint()
    a ~ Normal()
    b ~ truncated(Normal(); lower = a)
end

model = dynamic_constraint()`,Ml=`#=
This is an implementation of using Lux.jl with Turing to implement a Bayesian neural network.
The model is adapted from the Turing documentation:
https://turinglang.org/docs/tutorials/bayesian-neural-networks/
=#
using Lux
using Random
using LinearAlgebra
using Functors

## Simulate data ##
# Number of points to generate
N = 80
M = round(Int, N / 4)
rng = Random.default_rng()
Random.seed!(rng, 1234)

# Generate artificial data
x1s = rand(Float32, M) * 4.5f0;
x2s = rand(Float32, M) * 4.5f0;
xt1s = Array([[x1s[i] + 0.5f0; x2s[i] + 0.5f0] for i = 1:M])
x1s = rand(Float32, M) * 4.5f0;
x2s = rand(Float32, M) * 4.5f0;
append!(xt1s, Array([[x1s[i] - 5.0f0; x2s[i] - 5.0f0] for i = 1:M]))

x1s = rand(Float32, M) * 4.5f0;
x2s = rand(Float32, M) * 4.5f0;
xt0s = Array([[x1s[i] + 0.5f0; x2s[i] - 5.0f0] for i = 1:M])
x1s = rand(Float32, M) * 4.5f0;
x2s = rand(Float32, M) * 4.5f0;
append!(xt0s, Array([[x1s[i] - 5.0f0; x2s[i] + 0.5f0] for i = 1:M]))

# Store all the data for later
xs = [xt1s; xt0s]
ts = [ones(2 * M); zeros(2 * M)]

## Create neural network ##
# Construct a neural network using Lux
nn_initial = Chain(Dense(2 => 3, tanh), Dense(3 => 2, tanh), Dense(2 => 1, σ))

# Initialize the model weights and state
ps, st = Lux.setup(rng, nn_initial)

# Create a regularization term and a Gaussian prior variance term.
alpha = 0.09
sigma = sqrt(1.0 / alpha)

function vector_to_parameters(ps_new::AbstractVector, ps::NamedTuple)
    @assert length(ps_new) == Lux.parameterlength(ps)
    i = 1
    function get_ps(x)
        z = reshape(view(ps_new, i:(i+length(x)-1)), size(x))
        i += length(x)
        return z
    end
    return fmap(get_ps, ps)
end

const nn = StatefulLuxLayer{true}(nn_initial, nothing, st)

## Create Turing model ##
# Specify the probabilistic model.
@model function lux_nn(xs, ts; sigma = sigma, ps = ps, nn = nn)
    # Sample the parameters
    nparameters = Lux.parameterlength(nn_initial)
    parameters ~ MvNormal(zeros(nparameters), Diagonal(abs2.(sigma .* ones(nparameters))))

    # Forward NN to make predictions
    preds = Lux.apply(nn, xs, f32(vector_to_parameters(parameters, ps)))

    # Observe each prediction.
    for i in eachindex(ts)
        ts[i] ~ Bernoulli(preds[i])
    end
end

model = lux_nn(reduce(hcat, xs), ts)`,Nl=`@model function multiple_constraints_same_var(::Type{TV} = Vector{Float64}) where {TV}
    x = TV(undef, 5)
    x[1] ~ Normal()
    x[2] ~ InverseGamma(2, 3)
    x[3] ~ truncated(Normal(), -5, 20)
    x[4:5] ~ Dirichlet([1.0, 2.0])
end

model = multiple_constraints_same_var()`,Tl=`@model function n010(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 10)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n010()`,kl=`@model function n050(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 50)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n050()`,Sl=`@model function n100(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 100)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n100()`,Cl=`@model function n500(::Type{TV} = Vector{Float64}) where {TV}
    a = TV(undef, 500)
    for i in eachindex(a)
        a[i] ~ Normal()
    end
end

model = n500()`,Al=`@model function observe_bernoulli(x = [true, false, true])
    a ~ Beta(2, 2)
    for i in eachindex(x)
        x[i] ~ Bernoulli(a)
    end
end

model = observe_bernoulli()`,Pl=`@model function observe_categorical(x = [1, 2, 1, 2, 2])
    a ~ Dirichlet(2, 3)
    for i in eachindex(x)
        x[i] ~ Categorical(a)
    end
end

model = observe_categorical()`,Il=`@model function observe_index(x = [1.5, 2.0, 2.5])
    a ~ Normal()
    for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

model = observe_index()`,Ol=`@model function observe_literal()
    a ~ Normal()
    1.5 ~ Normal(a)
end

model = observe_literal()`,Ll=`@model function observe_multivariate(
    x = [1.5, 2.0, 2.5],
    ::Type{TV} = Vector{Float64},
) where {TV}
    a = TV(undef, length(x))
    a .~ Normal()
    x ~ MvNormal(a, I)
end

model = observe_multivariate()`,Bl=`@model function inner2(x, a)
    x ~ Normal(a)
end
@model function observe_submodel(x = 1.5)
    a ~ Normal()
    _ignore ~ to_submodel(inner2(x, a))
end

model = observe_submodel()`,zl=`@model function observe_von_mises(x)
    a ~ InverseGamma(2, 3)
    x ~ VonMises(0, a)
end

model = observe_von_mises(0.4)`,Vl=`# See https://turinglang.org/docs/tutorials/bayesian-differential-equations/.

using OrdinaryDiffEq: ODEProblem, solve, Tsit5

# SciMLSensitivity is needed for reverse-mode AD on differential equations
import SciMLSensitivity

function lotka_volterra(du, u, p, t)
    α, β, γ, δ = p
    x, y = u
    du[1] = (α - β * y) * x # prey
    du[2] = (δ * x - γ) * y # predator
    return nothing
end
u0 = [1.0, 1.0]
p = [1.5, 1.0, 3.0, 1.0]
tspan = (0.0, 10.0)
prob = ODEProblem(lotka_volterra, u0, tspan, p)
sol = solve(prob, Tsit5(); saveat = 0.1)
q = 1.7
odedata = rand.(Poisson.(q * Array(sol)))

@model function ordinarydiffeq(data, prob)
    α ~ truncated(Normal(1.5, 0.2); lower = 0.5, upper = 2.5)
    β ~ truncated(Normal(1.1, 0.2); lower = 0, upper = 2)
    γ ~ truncated(Normal(3.0, 0.2); lower = 1, upper = 4)
    δ ~ truncated(Normal(1.0, 0.2); lower = 0, upper = 2)
    q ~ truncated(Normal(1.7, 0.2); lower = 0, upper = 3)
    p = [α, β, γ, δ]
    predicted = solve(prob, Tsit5(); p = p, saveat = 0.1, abstol = 1e-6, reltol = 1e-6)
    for i in eachindex(predicted.u)
        data[:, i] ~ product_distribution(Poisson.(q .* predicted.u[i] .+ 1e-5))
    end
    return nothing
end

model = ordinarydiffeq(odedata, prob)`,ql=`# PosteriorDB: arma-arma11
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "arma-arma11")
data = PosteriorDB.load(PosteriorDB.dataset(post))

T = data["T"]
y = Float64.(data["y"])

@model function pdb_arma11(T, y)
    mu ~ Normal(0, 10)
    phi ~ Normal(0, 2)
    theta ~ Normal(0, 2)
    sigma ~ truncated(Cauchy(0, 2.5); lower = 0)

    nu = Vector{typeof(mu)}(undef, T)
    err = Vector{typeof(mu)}(undef, T)
    nu[1] = mu + (phi * mu)
    err[1] = y[1] - nu[1]
    for t = 2:T
        nu[t] = mu + (phi * y[t-1]) + (theta * err[t-1])
        err[t] = y[t] - nu[t]
    end
    y ~ MvNormal(nu, sigma^2 * I)
end

model = pdb_arma11(T, y)`,jl=`# PosteriorDB: earnings-logearn_height
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "earnings-logearn_height")
data = PosteriorDB.load(PosteriorDB.dataset(post))

log_earn = log.(Float64.(data["earn"]))
height = Float64.(data["height"])
N = data["N"]

@model function pdb_earnings(log_earn, height, N)
    beta ~ filldist(Flat(), 2)
    sigma ~ FlatPos(0.0)
    log_earn ~ MvNormal(beta[1] .+ beta[2] .* height, sigma^2 * I)
end

model = pdb_earnings(log_earn, height, N)`,$l=`# PosteriorDB: earnings-logearn_height_male
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "earnings-logearn_height_male")
data = PosteriorDB.load(PosteriorDB.dataset(post))

log_earn = log.(Float64.(data["earn"]))
height = Float64.(data["height"])
male = Bool.(data["male"])
N = data["N"]

@model function pdb_earnings_male(log_earn, height, male, N)
    beta ~ filldist(Flat(), 3)
    sigma ~ FlatPos(0.0)
    log_earn ~ MvNormal(beta[1] .+ beta[2] .* height .+ beta[3] .* male, sigma^2 * I)
end

model = pdb_earnings_male(log_earn, height, male, N)`,Ul=`# PosteriorDB: eight_schools-eight_schools_centered
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "eight_schools-eight_schools_centered")
data = PosteriorDB.load(PosteriorDB.dataset(post))

J = data["J"]
y = Float64.(data["y"])
sigma = Float64.(data["sigma"])

@model function pdb_eightsch_centered(J, y, sigma)
    mu ~ Normal(0, 5)
    tau ~ truncated(Cauchy(0, 5); lower = 0)
    theta ~ filldist(Normal(mu, tau), J)
    for i = 1:J
        y[i] ~ Normal(theta[i], sigma[i])
    end
end

model = pdb_eightsch_centered(J, y, sigma)`,Hl=`# PosteriorDB: eight_schools-eight_schools_noncentered
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "eight_schools-eight_schools_noncentered")
data = PosteriorDB.load(PosteriorDB.dataset(post))

J = data["J"]
y = Float64.(data["y"])
sigma = Float64.(data["sigma"])

@model function pdb_eightsch_noncentered(J, y, sigma)
    mu ~ Normal(0, 5)
    tau ~ truncated(Cauchy(0, 5); lower = 0)
    theta_raw ~ filldist(Normal(0, 1), J)
    for i = 1:J
        theta = mu + tau * theta_raw[i]
        y[i] ~ Normal(theta, sigma[i])
    end
end

model = pdb_eightsch_noncentered(J, y, sigma)`,Gl=`# PosteriorDB: garch-garch11
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "garch-garch11")
data = PosteriorDB.load(PosteriorDB.dataset(post))

T = data["T"]
y = Float64.(data["y"])
sigma1 = Float64(data["sigma1"])

@model function pdb_garch11(T, y, sigma1)
    mu ~ Flat()
    alpha0 ~ FlatPos(0.0)
    alpha1 ~ Uniform(0, 1)
    beta1 ~ Uniform(0, 1 - alpha1 + eps())

    sigma = Vector{typeof(mu)}(undef, T)
    sigma[1] = sigma1
    for t = 2:T
        sigma[t] = sqrt(alpha0 + alpha1 * (y[t-1] - mu)^2 + beta1 * sigma[t-1]^2)
    end
    for t = 1:T
        y[t] ~ Normal(mu, sigma[t])
    end
end

model = pdb_garch11(T, y, sigma1)`,Kl=`# PosteriorDB: kidiq-kidscore_momhs
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "kidiq-kidscore_momhs")
data = PosteriorDB.load(PosteriorDB.dataset(post))

kid_score = Float64.(data["kid_score"])
mom_hs = Bool.(data["mom_hs"])
N = data["N"]

@model function pdb_kidiq(kid_score, mom_hs, N)
    beta ~ filldist(Flat(), 2)
    sigma ~ truncated(Cauchy(0, 2.5); lower = 0)
    kid_score ~ MvNormal(beta[1] .+ beta[2] .* mom_hs, sigma^2 * I)
end

model = pdb_kidiq(kid_score, mom_hs, N)`,Xl=`# PosteriorDB: radon_mn-radon_hierarchical_intercept_noncentered
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "radon_mn-radon_hierarchical_intercept_noncentered")
data = PosteriorDB.load(PosteriorDB.dataset(post))

J = data["J"]
N = data["N"]
county_idx = Int.(data["county_idx"])
log_uppm = Float64.(data["log_uppm"])
floor_measure = Float64.(data["floor_measure"])
log_radon = Float64.(data["log_radon"])

@model function pdb_radon(J, N, county_idx, log_uppm, floor_measure, log_radon)
    sigma_alpha ~ truncated(Normal(); lower = 0)
    sigma_y ~ truncated(Normal(); lower = 0)
    mu_alpha ~ Normal(0, 10)
    beta ~ filldist(Normal(0, 10), 2)
    alpha_raw ~ filldist(Normal(0, 1), J)
    alpha = mu_alpha .+ sigma_alpha .* alpha_raw

    mu = Vector{typeof(mu_alpha)}(undef, N)
    muj = Vector{typeof(mu_alpha)}(undef, N)
    for n = 1:N
        muj[n] = alpha[county_idx[n]] + (log_uppm[n] * beta[1])
        mu[n] = muj[n] + (floor_measure[n] * beta[2])
        log_radon[n] ~ Normal(mu[n], sigma_y)
    end
end

model = pdb_radon(J, N, county_idx, log_uppm, floor_measure, log_radon)`,Wl=`# PosteriorDB: rats_data-rats_model
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "rats_data-rats_model")
data = PosteriorDB.load(PosteriorDB.dataset(post))

N = data["N"]
Npts = data["Npts"]
rat = Int.(data["rat"])
x = Float64.(data["x"])
y = Float64.(data["y"])
xbar = Float64(data["xbar"])

@model function pdb_rats(N, Npts, rat, x, y, xbar)
    mu_alpha ~ Normal(0, 100)
    mu_beta ~ Normal(0, 100)
    sigma_y ~ FlatPos(0.0)
    sigma_alpha ~ FlatPos(0.0)
    sigma_beta ~ FlatPos(0.0)
    alpha ~ filldist(Normal(mu_alpha, sigma_alpha), N)
    beta ~ filldist(Normal(mu_beta, sigma_beta), N)
    for n = 1:Npts
        irat = rat[n]
        mu = alpha[irat] + (beta[irat] * (x[n] - xbar))
        y[n] ~ Normal(mu, sigma_y)
    end
end

model = pdb_rats(N, Npts, rat, x, y, xbar)`,Jl=`# PosteriorDB: sblrc-blr
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "sblrc-blr")
data = PosteriorDB.load(PosteriorDB.dataset(post))

X = Float64.(data["X"])
y = Float64.(data["y"])
D = data["D"]

@model function pdb_sblrc(X, y, D)
    beta ~ filldist(Normal(0, 10), D)
    sigma ~ truncated(Normal(0, 10); lower = 0)
    y ~ MvNormal(X * beta, sigma^2 * I)
end

model = pdb_sblrc(X, y, D)`,Yl=`# PosteriorDB: sblri-blr
using PosteriorDB

pdb = PosteriorDB.database()
post = PosteriorDB.posterior(pdb, "sblri-blr")
data = PosteriorDB.load(PosteriorDB.dataset(post))

X = Float64.(data["X"])
y = Float64.(data["y"])
D = data["D"]

@model function pdb_sblri(X, y, D)
    beta ~ filldist(Normal(0, 10), D)
    sigma ~ truncated(Normal(0, 10); lower = 0)
    y ~ MvNormal(X * beta, sigma^2 * I)
end

model = pdb_sblri(X, y, D)`,Zl=`#=
Note: this example is run with 4 threads
=#

@model function threaded_assume(x)
    a = Vector{Float64}(undef, length(x))
    Threads.@threads for i in eachindex(x)
        a[i] ~ Normal()
        x[i] ~ Normal(a[i])
    end
end

x = randn(50)
model = setthreadsafe(threaded_assume(x), true)`,Ql=`#=
Note: this model is run with 4 threads
=#

@model function threaded_observe(x)
    a ~ Normal()
    Threads.@threads for i in eachindex(x)
        x[i] ~ Normal(a)
    end
end

x = randn(100)
model = setthreadsafe(threaded_observe(x), true)`,ec={abstractgps:Ga,assume_beta:Ka,assume_dirichlet:Xa,assume_lkjcholu:Wa,assume_mvnormal:Ja,assume_normal:Ya,assume_submodel:Za,assume_wishart:Qa,broadcast_macro:el,control_flow:nl,delaydiffeq:tl,demo_assume_dot_observe:rl,demo_assume_dot_observe_literal:ol,demo_assume_index_observe:sl,demo_assume_matrix_observe_matrix_index:il,demo_assume_multivariate_observe:al,demo_assume_multivariate_observe_literal:ll,demo_assume_observe_literal:cl,demo_assume_submodel_observe_index_literal:fl,demo_dot_assume_observe:dl,demo_dot_assume_observe_index:ul,demo_dot_assume_observe_index_literal:_l,demo_dot_assume_observe_matrix_index:ml,demo_dot_assume_observe_submodel:vl,dot_assume:pl,dot_observe:gl,dppl_gauss_unknown:hl,dppl_hier_poisson:bl,dppl_high_dim_gauss:yl,dppl_hmm_semisup:Dl,dppl_lda:wl,dppl_logistic_regression:El,dppl_naive_bayes:Rl,dppl_sto_volatility:Fl,dynamic_constraint:xl,lux_nn:Ml,multiple_constraints_same_var:Nl,n010:Tl,n050:kl,n100:Sl,n500:Cl,observe_bernoulli:Al,observe_categorical:Pl,observe_index:Il,observe_literal:Ol,observe_multivariate:Ll,observe_submodel:Bl,observe_von_mises:zl,ordinarydiffeq:Vl,pdb_arma11:ql,pdb_earnings:jl,pdb_earnings_male:$l,pdb_eightsch_centered:Ul,pdb_eightsch_noncentered:Hl,pdb_garch11:Gl,pdb_kidiq:Kl,pdb_radon:Xl,pdb_rats:Wl,pdb_sblrc:Jl,pdb_sblri:Yl,threaded_assume:Zl,threaded_observe:Ql};Rs();const nc="1.23.0",tc="0.5.3",rc="1.5.0",oc="0.5.24",sc="5.16.0",ic="0.14.2",ac="0.4.5",lc="0.1.45",cc="4.7.0",fc="0.8.6",dc="0.8.10",uc="0.7.2",_c="0.6.2",mc="1.1.3",vc="2.5.0",pc="1.1.2",gc="7.30.0",hc="1.11.0",bc="1.1.3",yc="0.6.1",Dc="0.4.9",wc="1.11.0",Ec="0.15.24",Rc="1.0.4",Fc="1.12.5",xc="0.5.0",Mc="0.2.7",Nc="1.73.0",Tc="1.26.1",kc="1.3.1",Sc="0.1.11",Cc="0.2.13",Ac="0.3.1",Pc="1.1.2",Ic="4.18.1",Oc="1.5.5+2",Lc="0.1.2",Bc="0.2.7",zc="0.1.2",Vc="1.6.0",qc="0.1.0",jc="0.3.1",$c="4.2.0",Uc="1.16.0",Hc="0.19.6",Gc="1.0.0",Kc="1.11.0",Xc="6.1.2",Wc="1.9.1",Jc="0.4.0",Yc="7.18.0",Zc="4.19.2",Qc="5.35.0",ef="1.1.0",nf="1.16.0",tf="0.1.0",rf="0.1.0",of="0.1.0",sf="0.1.0",af="0.7.21",lf="0.30.1",cf="0.4.28",ff="0.10.12",df="1.11.0",uf="0.25.131",_f="0.9.5",mf="1.7.0",vf="0.41.8",pf="2.0.0",gf="1.0.7",hf="0.13.199",bf="0.8.21",yf="0.0.290+0",Df="0.1.11",wf="1.1.5",Ef="0.1.6",Rf="1.3.6",Ff="0.3.2",xf="1.4.1",Mf="1.11.0",Nf="1.17.0",Tf="3.2.1",kf="2.33.0",Sf="0.12.34",Cf="0.6.37",Af="1.4.5",Pf="1.1.1",If="1.1.3",Of="1.13.0",Lf="0.5.3",Bf="1.11.0",zf="0.2.0",Vf="1.23.0",qf="1.1.0",jf="0.2.0",$f="0.3.30",Uf="0.4.20",Hf="0.1.1",Gf="0.3.1",Kf="2025.2.0+0",Xf="1.11.0",Wf="0.3.2",Jf="0.7.14",Yf="0.1.17",Zf="1.3.1",Qf="0.2.6",ed="1.0.0",nd="1.8.0",td="1.14.3",rd="1.12.0",od="0.9.42",sd="0.10.67",id="0.10.9",ad="2.0.0",ld="9.13.0",cd="0.0.46+0",fd="1.4.1",dd="1.11.0",ud="0.3.0",_d="1.0.0",md="8.18.0+1",vd="1.11.0",pd="1.9.1+0",gd="1.11.103+0",hd="0.13.1+0",bd="1.11.0",yd="0.9.18",Dd="0.1.15",wd="7.7.1",Ed="1.13.0",Rd="5.12.0",Fd="2.2.0",xd="1.13.1",Md="0.3.29",Nd="1.11.0",Td="1.2.0",kd="1.31.4",Sd="1.5.3",Cd="1.15.9",Ad="0.3.19",Pd="2025.2.0+0",Id="1.17.10",Od="1.12.1",Ld="0.5.16",Bd="0.4.3",zd="1.11.0",Vd="0.1.7",qd="1.2.0",jd="2.1.0",$d="1.11.0",Ud="0.5.46",Hd="2026.7.16",Gd="0.2.7",Kd="8.0.1",Xd="0.9.44",Wd="1.1.4",Jd="1.3.0",Yd="4.27.0",Zd="2.46.0",Qd="2.4.0",eu="1.15.1",nu="1.8.0",tu="0.5.1",ru="0.3.30+0",ou="0.8.7+0",su="3.5.6+0",iu="0.5.6+0",au="2.2.2",lu="0.4.9",cu="5.7.1",fu="5.3.0",du="0.4.18",uu="1.8.2",_u="7.6.0",mu="2.4.3",vu="4.14.3",pu="2.4.5",gu="3.9.0",hu="2.2.1",bu="2.8.0",yu="2.6.6",Du="2.4.1",wu="2.8.2",Eu="2.1.3",Ru="2.3.0",Fu="10.46.0+0",xu="0.11.41",Mu="2.8.7",Nu="0.0.1",Tu="1.13.0",ku="0.4.13",Su="0.2.4",Cu="0.6.2",Au="1.5.0",Pu="1.3.4",Iu="1.5.2",Ou="3.4.8",Lu="1.11.0",Bu="0.1.6",zu="1.11.0",Vu="1.4.0",qu="1.4.1",ju="2.11.3",$u="1.11.0",Uu="1.11.0",Hu="1.7.1",Gu="1.6.0",Ku="0.1.21",Xu="0.1.0",Wu="1.3.4",Ju="4.5.0",Yu="1.2.2",Zu="1.3.1",Qu="1.3.0",e_="1.2.0",n_="1.17.0",t_="1.4.3",r_="0.9.0",o_="0.5.2+0",s_="3.0.6",i_="0.5.24",a_="1.0.0",l_="0.6.1",c_="3.49.1",f_="0.1.17",d_="2.0.4",u_="1.28.0",__="1.2.4",m_="7.118.0",v_="1.10.4",p_="3.1.0",g_="1.6.2",h_="1.3.0",b_="1.11.0",y_="1.1.2",D_="2.14.0",w_="1.11.0",E_="1.2.3",R_="1.13.0",F_="2.1.6",x_="1.2.2",M_="0.1.3",N_="0.4.27",T_="2.9.0",k_="1.4.6",S_="1.9.19",C_="1.4.4",A_="3.5.0",P_="1.11.1",I_="1.8.0",O_="0.34.12",L_="1.5.2",B_="0.5.0",z_="0.7.3",V_="0.3.1",q_="1.11.0",j_="2.8.5",$_="1.11.0",U_=null,H_="7.10.1+0",G_="0.3.54",K_="1.0.3",X_="1.0.1",W_="1.13.0",J_="1.10.0",Y_="0.1.1",Z_="0.1.8",Q_="1.11.0",e1="1.2.0",n1="0.2.38",t1="0.1.6",r1="1.4.0",o1="0.45.0",s1="1.11.0",i1="1.11.0",a1="0.3.2",l1="1.3.4",c1="0.10.1",f1="1.3.1+2",d1="1.5.7+1",u1="0.7.12",_1="0.2.8",m1="5.15.0+0",v1="1.67.1+0",p1="2022.3.0+0",g1="17.7.0+0",h1={ADTypes:nc,AMD:tc,AbstractFFTs:rc,AbstractGPs:oc,AbstractMCMC:sc,AbstractPPL:ic,AbstractTrees:ac,Accessors:lc,Adapt:cc,AdvancedHMC:fc,AdvancedMH:dc,AdvancedPS:uc,AdvancedVI:_c,AliasTables:mc,ArgCheck:vc,ArgTools:pc,ArrayInterface:gc,Artifacts:hc,Atomix:bc,BFloat16s:yc,BangBang:Dc,Base64:wc,Bijectors:Ec,BinaryHeaps:Rc,BracketingNonlinearSolve:Fc,CEnum:xc,CPUSummary:Mc,ChainRules:Nc,ChainRulesCore:Tc,Chairmarks:kc,ChangesOfVariables:Sc,CommonSolve:Cc,CommonSubexpressions:Ac,CommonWorldInvalidations:Pc,Compat:Ic,CompilerSupportLibraries_jll:Oc,CompositionsBase:Lc,ConcreteStructs:Bc,ConsoleProgressMonitor:zc,ConstructionBase:Vc,Contextual:qc,CpuId:jc,Crayons:$c,DataAPI:Uc,DataStructures:Hc,DataValueInterfaces:Gc,Dates:Kc,DelayDiffEq:Xc,DelimitedFiles:Wc,DensityInterface:Jc,DiffEqBase:Yc,DiffEqCallbacks:Zc,DiffEqNoiseProcess:Qc,DiffResults:ef,DiffRules:nf,Differ:tf,DifferCore:rf,DifferForwards:of,DifferReverse:sf,DifferentiationInterface:af,DimensionalData:lf,DispatchDoctor:cf,Distances:ff,Distributed:df,Distributions:uf,DocStringExtensions:_f,Downloads:mf,DynamicPPL:vf,EllipticalSliceSampling:pf,EnumX:gf,Enzyme:hf,EnzymeCore:bf,Enzyme_jll:yf,ExprTools:Df,ExpressionExplorer:wf,Extents:Ef,FastBroadcast:Rf,FastClosures:Ff,FastPower:xf,FileWatching:Mf,FillArrays:Nf,FindFirstFunctions:Tf,FiniteDiff:kf,FiniteDifferences:Sf,FlexiChains:Cf,ForwardDiff:Af,FunctionProperties:Pf,FunctionWrappers:If,FunctionWrappersWrappers:Of,Functors:Lf,Future:Bf,GPUArraysCore:zf,GPUCompiler:Vf,Gamma:qf,HashArrayMappedTries:jf,HypergeometricFunctions:$f,IRTools:Uf,IfElse:Hf,InitialValues:Gf,IntelOpenMP_jll:Kf,InteractiveUtils:Xf,Interfaces:Wf,IntervalSets:Jf,InverseFunctions:Yf,InvertedIndices:Zf,IrrationalConstants:Qf,IteratorInterfaceExtensions:ed,JLLWrappers:nd,JSON:"1.7.1",JSON3:td,JuliaSyntaxHighlighting:rd,KernelAbstractions:od,KernelFunctions:sd,Krylov:id,LHLFactorization:ad,LLVM:ld,LLVMExtra_jll:cd,LaTeXStrings:fd,LazyArtifacts:dd,LeftChildRightSiblingTrees:ud,LibCURL:_d,LibCURL_jll:md,LibGit2:vd,LibGit2_jll:pd,LibSSH2_jll:gd,LibTracyClient_jll:hd,Libdl:bd,Libtask:yd,LineSearch:Dd,LineSearches:wd,LinearAlgebra:Ed,LinearSolve:Rd,LogDensityProblems:Fd,LogDensityProblemsAD:xd,LogExpFunctions:Md,Logging:Nd,LoggingExtras:Td,Lux:kd,LuxCore:Sd,LuxLib:Cd,MCMCDiagnosticTools:Ad,MKL_jll:Pd,MLDataDevices:Id,MLJModelInterface:Od,MacroTools:Ld,MappedArrays:Bd,Markdown:zd,MaybeInplace:Vd,Missings:qd,MistyClosures:jd,Mmap:$d,Mooncake:Ud,MozillaCACerts_jll:Hd,MuladdMacro:Gd,NLSolversBase:Kd,NNlib:Xd,NaNMath:Wd,NetworkOptions:Jd,NonlinearSolve:Yd,NonlinearSolveBase:Zd,NonlinearSolveFirstOrder:Qd,NonlinearSolveQuasiNewton:eu,NonlinearSolveSpectralMethods:nu,ObjectFile:tu,OpenBLAS_jll:ru,OpenLibm_jll:ou,OpenSSL_jll:su,OpenSpecFun_jll:iu,Optim:au,Optimisers:lu,Optimization:cu,OptimizationBase:fu,OptimizationOptimJL:du,OrderedCollections:uu,OrdinaryDiffEq:_u,OrdinaryDiffEqBDF:mu,OrdinaryDiffEqCore:vu,OrdinaryDiffEqDefault:pu,OrdinaryDiffEqDifferentiation:gu,OrdinaryDiffEqFunctionMap:hu,OrdinaryDiffEqNonlinearSolve:bu,OrdinaryDiffEqRosenbrock:yu,OrdinaryDiffEqRosenbrockTableaus:Du,OrdinaryDiffEqSDIRK:wu,OrdinaryDiffEqTsit5:Eu,OrdinaryDiffEqVerner:Ru,PCRE2_jll:Fu,PDMats:xu,Parsers:Mu,PartitionedDistributions:Nu,Pkg:Tu,PoissonRandom:ku,PositiveFactorizations:Su,PosteriorDB:Cu,PreallocationTools:Au,PrecompileTools:Pu,Preferences:Iu,PrettyTables:Ou,Printf:Lu,ProgressLogging:Bu,ProgressMeter:zu,PtrArrays:Vu,PureKLU:qu,QuadGK:ju,REPL:$u,Random:Uu,Random123:Hu,RandomNumbers:Gu,ReactantCore:Ku,RealDot:Xu,RecipesBase:Wu,RecursiveArrayTools:Ju,Reexport:Yu,Requires:Zu,ResettableStacks:Qu,RespecializeParams:e_,ReverseDiff:n_,Richardson:t_,Rmath:r_,Rmath_jll:o_,Roots:s_,RuntimeGeneratedFunctions:i_,SHA:a_,SSMProblems:l_,SciMLBase:c_,SciMLJacobianOperators:f_,SciMLLogging:d_,SciMLOperators:u_,SciMLPublic:__,SciMLSensitivity:m_,SciMLStructures:v_,ScientificTypesBase:p_,ScopedValues:g_,Scratch:h_,Serialization:b_,Setfield:y_,SimpleNonlinearSolve:D_,Sockets:w_,SortingAlgorithms:E_,SparseArrays:R_,SparseColumnPivotedQR:F_,SparseConnectivityTracer:x_,SparseInverseSubset:M_,SparseMatrixColorings:N_,SpecialFunctions:T_,Static:k_,StaticArrays:S_,StaticArraysCore:C_,StatisticalTraits:A_,Statistics:P_,StatsAPI:I_,StatsBase:O_,StatsFuns:L_,StringManipulation:B_,StructArrays:z_,StructIO:V_,StructTypes:q_,StructUtils:j_,StyledStrings:$_,SuiteSparse:U_,SuiteSparse_jll:H_,SymbolicIndexingInterface:G_,TOML:K_,TableTraits:X_,Tables:W_,Tar:J_,TensorCore:Y_,TerminalLoggers:Z_,Test:Q_,TimerOutputs:e1,Tracker:n1,Tracy:t1,TruncatedStacktraces:r1,Turing:o1,UUIDs:s1,Unicode:i1,UnsafeAtomics:a1,WeightInitializers:l1,ZipFile:c1,Zlib_jll:f1,Zstd_jll:d1,Zygote:u1,ZygoteRules:_1,libblastrampoline_jll:m1,nghttp2_jll:v1,oneTBB_jll:p1,p7zip_jll:g1},Nr={FiniteDifferences:1,ForwardDiff:11,EnzymeFwd:12,DifferFwd:13,MooncakeFwd:14,ReverseDiff:21,ReverseDiffCompiled:22,EnzymeRvs:23,DifferRvs:24,MooncakeRvs:25};function vo(e,n){return(Nr[e]??500)-(Nr[n]??500)||e.localeCompare(n)}function b1(e){const n=e.values().next().value;return n?[...n.results.keys()].sort(vo):[]}function y1(e){return[...e.entries()].sort(([n],[t])=>vo(n,t))}function po(e){return[...e.entries()].sort(([n],[t])=>n.localeCompare(t))}function D1(e,n){const t=po(e);if(!n.column||!n.direction)return t;const r=n.column,o=n.direction==="asc"?1:-1;return t.sort(([,s],[,a])=>{const c=s.results.get(r),l=a.results.get(r);return typeof c!="number"&&typeof l!="number"?0:typeof c!="number"?1:typeof l!="number"?-1:o*(c-l)})}var w1=de('<tr><td class="svelte-yinbl0"> </td><td class="version svelte-yinbl0"> </td></tr>'),E1=de('<table class="svelte-yinbl0"><thead><tr><th class="svelte-yinbl0">Package</th><th class="svelte-yinbl0">Version</th></tr></thead><tbody></tbody></table>');function R1(e,n){vn(n,!1);let t=new Map;for(const[a,c]of Object.entries(h1))t.set(a,c===""?null:c);const r=po(t);mo();var o=E1(),s=re(z(o));Nn(s,5,()=>r,Mn,(a,c,l)=>{let f=()=>E(c)[0],v=()=>E(c)[1];var _=w1();Sn(_,1,"svelte-yinbl0",null,{},{alt:l%2===1});var d=z(_),h=z(d),b=re(d),x=z(b);me(()=>{Ce(h,f()),Ce(x,v()===null?"":`v${v()}`)}),G(a,_)}),G(e,o),pn()}var F1=de('<td class="model-name svelte-73y89f"> </td>');function x1(e,n){var t=F1();t.__click=function(...o){var s;(s=n.onToggle)==null||s.apply(this,o)};var r=z(t);me(()=>Ce(r,n.name)),G(e,t)}_t(["click"]);function M1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nt,Tr;function N1(){if(Tr)return Nt;Tr=1;function e(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(u=>{const g=i[u],C=typeof g;(C==="object"||C==="function")&&!Object.isFrozen(g)&&e(g)}),i}class n{constructor(u){u.data===void 0&&(u.data={}),this.data=u.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(i,...u){const g=Object.create(null);for(const C in i)g[C]=i[C];return u.forEach(function(C){for(const W in C)g[W]=C[W]}),g}const o="</span>",s=i=>!!i.scope,a=(i,{prefix:u})=>{if(i.startsWith("language:"))return i.replace("language:","language-");if(i.includes(".")){const g=i.split(".");return[`${u}${g.shift()}`,...g.map((C,W)=>`${C}${"_".repeat(W+1)}`)].join(" ")}return`${u}${i}`};class c{constructor(u,g){this.buffer="",this.classPrefix=g.classPrefix,u.walk(this)}addText(u){this.buffer+=t(u)}openNode(u){if(!s(u))return;const g=a(u.scope,{prefix:this.classPrefix});this.span(g)}closeNode(u){s(u)&&(this.buffer+=o)}value(){return this.buffer}span(u){this.buffer+=`<span class="${u}">`}}const l=(i={})=>{const u={children:[]};return Object.assign(u,i),u};class f{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(u){this.top.children.push(u)}openNode(u){const g=l({scope:u});this.add(g),this.stack.push(g)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(u){return this.constructor._walk(u,this.rootNode)}static _walk(u,g){return typeof g=="string"?u.addText(g):g.children&&(u.openNode(g),g.children.forEach(C=>this._walk(u,C)),u.closeNode(g)),u}static _collapse(u){typeof u!="string"&&u.children&&(u.children.every(g=>typeof g=="string")?u.children=[u.children.join("")]:u.children.forEach(g=>{f._collapse(g)}))}}class v extends f{constructor(u){super(),this.options=u}addText(u){u!==""&&this.add(u)}startScope(u){this.openNode(u)}endScope(){this.closeNode()}__addSublanguage(u,g){const C=u.root;g&&(C.scope=`language:${g}`),this.add(C)}toHTML(){return new c(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function _(i){return i?typeof i=="string"?i:i.source:null}function d(i){return x("(?=",i,")")}function h(i){return x("(?:",i,")*")}function b(i){return x("(?:",i,")?")}function x(...i){return i.map(g=>_(g)).join("")}function k(i){const u=i[i.length-1];return typeof u=="object"&&u.constructor===Object?(i.splice(i.length-1,1),u):{}}function B(...i){return"("+(k(i).capture?"":"?:")+i.map(C=>_(C)).join("|")+")"}function L(i){return new RegExp(i.toString()+"|").exec("").length-1}function T(i,u){const g=i&&i.exec(u);return g&&g.index===0}const p=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(i,{joinWith:u}){let g=0;return i.map(C=>{g+=1;const W=g;let J=_(C),R="";for(;J.length>0;){const w=p.exec(J);if(!w){R+=J;break}R+=J.substring(0,w.index),J=J.substring(w.index+w[0].length),w[0][0]==="\\"&&w[1]?R+="\\"+String(Number(w[1])+W):(R+=w[0],w[0]==="("&&g++)}return R}).map(C=>`(${C})`).join(u)}const V=/\b\B/,M="[a-zA-Z]\\w*",I="[a-zA-Z_]\\w*",X="\\b\\d+(\\.\\d+)?",oe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Q="\\b(0b[01]+)",De="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ie=(i={})=>{const u=/^#![ ]*\//;return i.binary&&(i.begin=x(u,/.*\b/,i.binary,/\b.*/)),r({scope:"meta",begin:u,end:/$/,relevance:0,"on:begin":(g,C)=>{g.index!==0&&C.ignoreMatch()}},i)},ue={begin:"\\\\[\\s\\S]",relevance:0},Re={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ue]},qe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ue]},Fe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},se=function(i,u,g={}){const C=r({scope:"comment",begin:i,end:u,contains:[]},g);C.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const W=B("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return C.contains.push({begin:x(/[ ]+/,"(",W,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),C},Ye=se("//","$"),bn=se("/\\*","\\*/"),yn=se("#","$"),xe={scope:"number",begin:X,relevance:0},ae={scope:"number",begin:oe,relevance:0},Me={scope:"number",begin:Q,relevance:0},rn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ue,{begin:/\[/,end:/\]/,relevance:0,contains:[ue]}]},Dn={scope:"title",begin:M,relevance:0},In={scope:"title",begin:I,relevance:0},vt={begin:"\\.\\s*"+I,relevance:0};var Ze=Object.freeze({__proto__:null,APOS_STRING_MODE:Re,BACKSLASH_ESCAPE:ue,BINARY_NUMBER_MODE:Me,BINARY_NUMBER_RE:Q,COMMENT:se,C_BLOCK_COMMENT_MODE:bn,C_LINE_COMMENT_MODE:Ye,C_NUMBER_MODE:ae,C_NUMBER_RE:oe,END_SAME_AS_BEGIN:function(i){return Object.assign(i,{"on:begin":(u,g)=>{g.data._beginMatch=u[1]},"on:end":(u,g)=>{g.data._beginMatch!==u[1]&&g.ignoreMatch()}})},HASH_COMMENT_MODE:yn,IDENT_RE:M,MATCH_NOTHING_RE:V,METHOD_GUARD:vt,NUMBER_MODE:xe,NUMBER_RE:X,PHRASAL_WORDS_MODE:Fe,QUOTE_STRING_MODE:qe,REGEXP_MODE:rn,RE_STARTERS_RE:De,SHEBANG:Ie,TITLE_MODE:Dn,UNDERSCORE_IDENT_RE:I,UNDERSCORE_TITLE_MODE:In});function yo(i,u){i.input[i.index-1]==="."&&u.ignoreMatch()}function Do(i,u){i.className!==void 0&&(i.scope=i.className,delete i.className)}function wo(i,u){u&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=yo,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function Eo(i,u){Array.isArray(i.illegal)&&(i.illegal=B(...i.illegal))}function Ro(i,u){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function Fo(i,u){i.relevance===void 0&&(i.relevance=1)}const xo=(i,u)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const g=Object.assign({},i);Object.keys(i).forEach(C=>{delete i[C]}),i.keywords=g.keywords,i.begin=x(g.beforeMatch,d(g.begin)),i.starts={relevance:0,contains:[Object.assign(g,{endsParent:!0})]},i.relevance=0,delete g.beforeMatch},Mo=["of","and","for","in","not","or","if","then","parent","list","value"],No="keyword";function Yt(i,u,g=No){const C=Object.create(null);return typeof i=="string"?W(g,i.split(" ")):Array.isArray(i)?W(g,i):Object.keys(i).forEach(function(J){Object.assign(C,Yt(i[J],u,J))}),C;function W(J,R){u&&(R=R.map(w=>w.toLowerCase())),R.forEach(function(w){const S=w.split("|");C[S[0]]=[J,To(S[0],S[1])]})}}function To(i,u){return u?Number(u):ko(i)?0:1}function ko(i){return Mo.includes(i.toLowerCase())}const Zt={},Qe=i=>{console.error(i)},Qt=(i,...u)=>{console.log(`WARN: ${i}`,...u)},on=(i,u)=>{Zt[`${i}/${u}`]||(console.log(`Deprecated as of ${i}. ${u}`),Zt[`${i}/${u}`]=!0)},Ln=new Error;function er(i,u,{key:g}){let C=0;const W=i[g],J={},R={};for(let w=1;w<=u.length;w++)R[w+C]=W[w],J[w+C]=!0,C+=L(u[w-1]);i[g]=R,i[g]._emit=J,i[g]._multi=!0}function So(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw Qe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ln;if(typeof i.beginScope!="object"||i.beginScope===null)throw Qe("beginScope must be object"),Ln;er(i,i.begin,{key:"beginScope"}),i.begin=y(i.begin,{joinWith:""})}}function Co(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw Qe("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ln;if(typeof i.endScope!="object"||i.endScope===null)throw Qe("endScope must be object"),Ln;er(i,i.end,{key:"endScope"}),i.end=y(i.end,{joinWith:""})}}function Ao(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function Po(i){Ao(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),So(i),Co(i)}function Io(i){function u(R,w){return new RegExp(_(R),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(w?"g":""))}class g{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(w,S){S.position=this.position++,this.matchIndexes[this.matchAt]=S,this.regexes.push([S,w]),this.matchAt+=L(w)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const w=this.regexes.map(S=>S[1]);this.matcherRe=u(y(w,{joinWith:"|"}),!0),this.lastIndex=0}exec(w){this.matcherRe.lastIndex=this.lastIndex;const S=this.matcherRe.exec(w);if(!S)return null;const ne=S.findIndex((wn,gt)=>gt>0&&wn!==void 0),Y=this.matchIndexes[ne];return S.splice(0,ne),Object.assign(S,Y)}}class C{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(w){if(this.multiRegexes[w])return this.multiRegexes[w];const S=new g;return this.rules.slice(w).forEach(([ne,Y])=>S.addRule(ne,Y)),S.compile(),this.multiRegexes[w]=S,S}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(w,S){this.rules.push([w,S]),S.type==="begin"&&this.count++}exec(w){const S=this.getMatcher(this.regexIndex);S.lastIndex=this.lastIndex;let ne=S.exec(w);if(this.resumingScanAtSamePosition()&&!(ne&&ne.index===this.lastIndex)){const Y=this.getMatcher(0);Y.lastIndex=this.lastIndex+1,ne=Y.exec(w)}return ne&&(this.regexIndex+=ne.position+1,this.regexIndex===this.count&&this.considerAll()),ne}}function W(R){const w=new C;return R.contains.forEach(S=>w.addRule(S.begin,{rule:S,type:"begin"})),R.terminatorEnd&&w.addRule(R.terminatorEnd,{type:"end"}),R.illegal&&w.addRule(R.illegal,{type:"illegal"}),w}function J(R,w){const S=R;if(R.isCompiled)return S;[Do,Ro,Po,xo].forEach(Y=>Y(R,w)),i.compilerExtensions.forEach(Y=>Y(R,w)),R.__beforeBegin=null,[wo,Eo,Fo].forEach(Y=>Y(R,w)),R.isCompiled=!0;let ne=null;return typeof R.keywords=="object"&&R.keywords.$pattern&&(R.keywords=Object.assign({},R.keywords),ne=R.keywords.$pattern,delete R.keywords.$pattern),ne=ne||/\w+/,R.keywords&&(R.keywords=Yt(R.keywords,i.case_insensitive)),S.keywordPatternRe=u(ne,!0),w&&(R.begin||(R.begin=/\B|\b/),S.beginRe=u(S.begin),!R.end&&!R.endsWithParent&&(R.end=/\B|\b/),R.end&&(S.endRe=u(S.end)),S.terminatorEnd=_(S.end)||"",R.endsWithParent&&w.terminatorEnd&&(S.terminatorEnd+=(R.end?"|":"")+w.terminatorEnd)),R.illegal&&(S.illegalRe=u(R.illegal)),R.contains||(R.contains=[]),R.contains=[].concat(...R.contains.map(function(Y){return Oo(Y==="self"?R:Y)})),R.contains.forEach(function(Y){J(Y,S)}),R.starts&&J(R.starts,w),S.matcher=W(S),S}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=r(i.classNameAliases||{}),J(i)}function nr(i){return i?i.endsWithParent||nr(i.starts):!1}function Oo(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(u){return r(i,{variants:null},u)})),i.cachedVariants?i.cachedVariants:nr(i)?r(i,{starts:i.starts?r(i.starts):null}):Object.isFrozen(i)?r(i):i}var Lo="11.11.1";class Bo extends Error{constructor(u,g){super(u),this.name="HTMLInjectionError",this.html=g}}const pt=t,tr=r,rr=Symbol("nomatch"),zo=7,or=function(i){const u=Object.create(null),g=Object.create(null),C=[];let W=!0;const J="Could not find the language '{}', did you forget to load/include a language module?",R={disableAutodetect:!0,name:"Plain text",contains:[]};let w={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:v};function S(m){return w.noHighlightRe.test(m)}function ne(m){let N=m.className+" ";N+=m.parentNode?m.parentNode.className:"";const O=w.languageDetectRe.exec(N);if(O){const U=je(O[1]);return U||(Qt(J.replace("{}",O[1])),Qt("Falling back to no-highlight mode for this block.",m)),U?O[1]:"no-highlight"}return N.split(/\s+/).find(U=>S(U)||je(U))}function Y(m,N,O){let U="",ee="";typeof N=="object"?(U=m,O=N.ignoreIllegals,ee=N.language):(on("10.7.0","highlight(lang, code, ...args) has been deprecated."),on("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ee=m,U=N),O===void 0&&(O=!0);const we={code:U,language:ee};zn("before:highlight",we);const $e=we.result?we.result:wn(we.language,we.code,O);return $e.code=we.code,zn("after:highlight",$e),$e}function wn(m,N,O,U){const ee=Object.create(null);function we(D,F){return D.keywords[F]}function $e(){if(!A.keywords){te.addText(H);return}let D=0;A.keywordPatternRe.lastIndex=0;let F=A.keywordPatternRe.exec(H),P="";for(;F;){P+=H.substring(D,F.index);const q=Te.case_insensitive?F[0].toLowerCase():F[0],ie=we(A,q);if(ie){const[Oe,ts]=ie;if(te.addText(P),P="",ee[q]=(ee[q]||0)+1,ee[q]<=zo&&(jn+=ts),Oe.startsWith("_"))P+=F[0];else{const rs=Te.classNameAliases[Oe]||Oe;Ne(F[0],rs)}}else P+=F[0];D=A.keywordPatternRe.lastIndex,F=A.keywordPatternRe.exec(H)}P+=H.substring(D),te.addText(P)}function Vn(){if(H==="")return;let D=null;if(typeof A.subLanguage=="string"){if(!u[A.subLanguage]){te.addText(H);return}D=wn(A.subLanguage,H,!0,ur[A.subLanguage]),ur[A.subLanguage]=D._top}else D=ht(H,A.subLanguage.length?A.subLanguage:null);A.relevance>0&&(jn+=D.relevance),te.__addSublanguage(D._emitter,D.language)}function ve(){A.subLanguage!=null?Vn():$e(),H=""}function Ne(D,F){D!==""&&(te.startScope(F),te.addText(D),te.endScope())}function lr(D,F){let P=1;const q=F.length-1;for(;P<=q;){if(!D._emit[P]){P++;continue}const ie=Te.classNameAliases[D[P]]||D[P],Oe=F[P];ie?Ne(Oe,ie):(H=Oe,$e(),H=""),P++}}function cr(D,F){return D.scope&&typeof D.scope=="string"&&te.openNode(Te.classNameAliases[D.scope]||D.scope),D.beginScope&&(D.beginScope._wrap?(Ne(H,Te.classNameAliases[D.beginScope._wrap]||D.beginScope._wrap),H=""):D.beginScope._multi&&(lr(D.beginScope,F),H="")),A=Object.create(D,{parent:{value:A}}),A}function fr(D,F,P){let q=T(D.endRe,P);if(q){if(D["on:end"]){const ie=new n(D);D["on:end"](F,ie),ie.isMatchIgnored&&(q=!1)}if(q){for(;D.endsParent&&D.parent;)D=D.parent;return D}}if(D.endsWithParent)return fr(D.parent,F,P)}function Yo(D){return A.matcher.regexIndex===0?(H+=D[0],1):(wt=!0,0)}function Zo(D){const F=D[0],P=D.rule,q=new n(P),ie=[P.__beforeBegin,P["on:begin"]];for(const Oe of ie)if(Oe&&(Oe(D,q),q.isMatchIgnored))return Yo(F);return P.skip?H+=F:(P.excludeBegin&&(H+=F),ve(),!P.returnBegin&&!P.excludeBegin&&(H=F)),cr(P,D),P.returnBegin?0:F.length}function Qo(D){const F=D[0],P=N.substring(D.index),q=fr(A,D,P);if(!q)return rr;const ie=A;A.endScope&&A.endScope._wrap?(ve(),Ne(F,A.endScope._wrap)):A.endScope&&A.endScope._multi?(ve(),lr(A.endScope,D)):ie.skip?H+=F:(ie.returnEnd||ie.excludeEnd||(H+=F),ve(),ie.excludeEnd&&(H=F));do A.scope&&te.closeNode(),!A.skip&&!A.subLanguage&&(jn+=A.relevance),A=A.parent;while(A!==q.parent);return q.starts&&cr(q.starts,D),ie.returnEnd?0:F.length}function es(){const D=[];for(let F=A;F!==Te;F=F.parent)F.scope&&D.unshift(F.scope);D.forEach(F=>te.openNode(F))}let qn={};function dr(D,F){const P=F&&F[0];if(H+=D,P==null)return ve(),0;if(qn.type==="begin"&&F.type==="end"&&qn.index===F.index&&P===""){if(H+=N.slice(F.index,F.index+1),!W){const q=new Error(`0 width match regex (${m})`);throw q.languageName=m,q.badRule=qn.rule,q}return 1}if(qn=F,F.type==="begin")return Zo(F);if(F.type==="illegal"&&!O){const q=new Error('Illegal lexeme "'+P+'" for mode "'+(A.scope||"<unnamed>")+'"');throw q.mode=A,q}else if(F.type==="end"){const q=Qo(F);if(q!==rr)return q}if(F.type==="illegal"&&P==="")return H+=`
`,1;if(Dt>1e5&&Dt>F.index*3)throw new Error("potential infinite loop, way more iterations than matches");return H+=P,P.length}const Te=je(m);if(!Te)throw Qe(J.replace("{}",m)),new Error('Unknown language: "'+m+'"');const ns=Io(Te);let yt="",A=U||ns;const ur={},te=new w.__emitter(w);es();let H="",jn=0,en=0,Dt=0,wt=!1;try{if(Te.__emitTokens)Te.__emitTokens(N,te);else{for(A.matcher.considerAll();;){Dt++,wt?wt=!1:A.matcher.considerAll(),A.matcher.lastIndex=en;const D=A.matcher.exec(N);if(!D)break;const F=N.substring(en,D.index),P=dr(F,D);en=D.index+P}dr(N.substring(en))}return te.finalize(),yt=te.toHTML(),{language:m,value:yt,relevance:jn,illegal:!1,_emitter:te,_top:A}}catch(D){if(D.message&&D.message.includes("Illegal"))return{language:m,value:pt(N),illegal:!0,relevance:0,_illegalBy:{message:D.message,index:en,context:N.slice(en-100,en+100),mode:D.mode,resultSoFar:yt},_emitter:te};if(W)return{language:m,value:pt(N),illegal:!1,relevance:0,errorRaised:D,_emitter:te,_top:A};throw D}}function gt(m){const N={value:pt(m),illegal:!1,relevance:0,_top:R,_emitter:new w.__emitter(w)};return N._emitter.addText(m),N}function ht(m,N){N=N||w.languages||Object.keys(u);const O=gt(m),U=N.filter(je).filter(ar).map(ve=>wn(ve,m,!1));U.unshift(O);const ee=U.sort((ve,Ne)=>{if(ve.relevance!==Ne.relevance)return Ne.relevance-ve.relevance;if(ve.language&&Ne.language){if(je(ve.language).supersetOf===Ne.language)return 1;if(je(Ne.language).supersetOf===ve.language)return-1}return 0}),[we,$e]=ee,Vn=we;return Vn.secondBest=$e,Vn}function Vo(m,N,O){const U=N&&g[N]||O;m.classList.add("hljs"),m.classList.add(`language-${U}`)}function bt(m){let N=null;const O=ne(m);if(S(O))return;if(zn("before:highlightElement",{el:m,language:O}),m.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",m);return}if(m.children.length>0&&(w.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(m)),w.throwUnescapedHTML))throw new Bo("One of your code blocks includes unescaped HTML.",m.innerHTML);N=m;const U=N.textContent,ee=O?Y(U,{language:O,ignoreIllegals:!0}):ht(U);m.innerHTML=ee.value,m.dataset.highlighted="yes",Vo(m,O,ee.language),m.result={language:ee.language,re:ee.relevance,relevance:ee.relevance},ee.secondBest&&(m.secondBest={language:ee.secondBest.language,relevance:ee.secondBest.relevance}),zn("after:highlightElement",{el:m,result:ee,text:U})}function qo(m){w=tr(w,m)}const jo=()=>{Bn(),on("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function $o(){Bn(),on("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let sr=!1;function Bn(){function m(){Bn()}if(document.readyState==="loading"){sr||window.addEventListener("DOMContentLoaded",m,!1),sr=!0;return}document.querySelectorAll(w.cssSelector).forEach(bt)}function Uo(m,N){let O=null;try{O=N(i)}catch(U){if(Qe("Language definition for '{}' could not be registered.".replace("{}",m)),W)Qe(U);else throw U;O=R}O.name||(O.name=m),u[m]=O,O.rawDefinition=N.bind(null,i),O.aliases&&ir(O.aliases,{languageName:m})}function Ho(m){delete u[m];for(const N of Object.keys(g))g[N]===m&&delete g[N]}function Go(){return Object.keys(u)}function je(m){return m=(m||"").toLowerCase(),u[m]||u[g[m]]}function ir(m,{languageName:N}){typeof m=="string"&&(m=[m]),m.forEach(O=>{g[O.toLowerCase()]=N})}function ar(m){const N=je(m);return N&&!N.disableAutodetect}function Ko(m){m["before:highlightBlock"]&&!m["before:highlightElement"]&&(m["before:highlightElement"]=N=>{m["before:highlightBlock"](Object.assign({block:N.el},N))}),m["after:highlightBlock"]&&!m["after:highlightElement"]&&(m["after:highlightElement"]=N=>{m["after:highlightBlock"](Object.assign({block:N.el},N))})}function Xo(m){Ko(m),C.push(m)}function Wo(m){const N=C.indexOf(m);N!==-1&&C.splice(N,1)}function zn(m,N){const O=m;C.forEach(function(U){U[O]&&U[O](N)})}function Jo(m){return on("10.7.0","highlightBlock will be removed entirely in v12.0"),on("10.7.0","Please use highlightElement now."),bt(m)}Object.assign(i,{highlight:Y,highlightAuto:ht,highlightAll:Bn,highlightElement:bt,highlightBlock:Jo,configure:qo,initHighlighting:jo,initHighlightingOnLoad:$o,registerLanguage:Uo,unregisterLanguage:Ho,listLanguages:Go,getLanguage:je,registerAliases:ir,autoDetection:ar,inherit:tr,addPlugin:Xo,removePlugin:Wo}),i.debugMode=function(){W=!1},i.safeMode=function(){W=!0},i.versionString=Lo,i.regex={concat:x,lookahead:d,either:B,optional:b,anyNumberOfTimes:h};for(const m in Ze)typeof Ze[m]=="object"&&e(Ze[m]);return Object.assign(i,Ze),i},sn=or({});return sn.newInstance=()=>or({}),Nt=sn,sn.HighlightJS=sn,sn.default=sn,Nt}var T1=N1();const kr=M1(T1);var k1=de("<pre><code><!></code></pre>");function S1(e,n){const t=tt(n,["children","$$slots","$$events","$$legacy"]),r=tt(t,["code","highlighted","languageName","langtag"]);let o=Ke(n,"code",8),s=Ke(n,"highlighted",8),a=Ke(n,"languageName",8,"plaintext"),c=Ke(n,"langtag",8,!1);var l=k1();let f;var v=z(l);Sn(v,1,"",null,{},{hljs:!0});var _=z(v);{var d=b=>{var x=et(),k=cn(x);bi(k,s),G(b,x)},h=b=>{var x=Ot();me(()=>Ce(x,o())),G(b,x)};Ue(_,b=>{s()?b(d):b(h,!1)})}me(b=>f=xi(l,f,{"data-language":a(),...r,[xn]:b},"svelte-1w9vok"),[()=>({langtag:c()})],Ut),G(e,l)}function C1(e,n){const t=tt(n,["children","$$slots","$$events","$$legacy"]),r=tt(t,["language","code","langtag"]);vn(n,!1);let o=Ke(n,"language",8),s=Ke(n,"code",8),a=Ke(n,"langtag",8,!1);const c=Ai();let l=Ht("");Pi(()=>{E(l)&&c("highlight",{highlighted:E(l)})}),$s(()=>(At(o()),At(s())),()=>{kr.registerLanguage(o().name,o().register),Z(l,kr.highlight(s(),{language:o().name}).value)}),Us(),mo();var f=et(),v=cn(f);yi(v,n,"default",{get highlighted(){return E(l)}},_=>{S1(_,Si(()=>r,{get languageName(){return o().name},get langtag(){return a()},get highlighted(){return E(l)},get code(){return s()}}))}),G(e,f),pn()}function A1(e){const n="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",s={$pattern:n,keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","π","ℯ"],built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]},a={keywords:s,illegal:/<\//},c={className:"number",begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,relevance:0},l={className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},f={className:"subst",begin:/\$\(/,end:/\)/,keywords:s},v={className:"variable",begin:"\\$"+n},_={className:"string",contains:[e.BACKSLASH_ESCAPE,f,v],variants:[{begin:/\w*"""/,end:/"""\w*/,relevance:10},{begin:/\w*"/,end:/"\w*/}]},d={className:"string",contains:[e.BACKSLASH_ESCAPE,f,v],begin:"`",end:"`"},h={className:"meta",begin:"@"+n},b={className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",end:"$"}]};return a.name="Julia",a.contains=[c,l,_,d,h,b,e.HASH_COMMENT_MODE,{className:"keyword",begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/}],f.contains=a.contains,a}const P1={name:"julia",register:A1};function go(e){let n,t,r;if(e<.5){const o=e*2;n=Math.round(34+o*166),t=Math.round(197+o*-17),r=Math.round(94+o*-94)}else{const o=(e-.5)*2;n=Math.round(200+o*20),t=Math.round(180-o*180),r=Math.round(0+o*30)}return[n,t,r]}function I1(e,n,t){if(typeof e!="number")return"";const r=[...n.values()].filter(b=>typeof b=="number");if(r.length<2)return"";const o=Math.min(...r),s=Math.max(...r),a=Math.log(Math.max(o,.001)),c=Math.log(Math.max(s,.001));if(c===a)return"";const l=Math.log(Math.max(e,.001)),f=Math.max(0,Math.min(1,(l-a)/(c-a))),[v,_,d]=go(f);return`background-color: rgba(${v}, ${_}, ${d}, ${t==="dark"?.3:.25})`}function O1(e,n=10){const t=e==="dark"?.5:.4,r=[];for(let o=0;o<=n;o++){const s=o/n,[a,c,l]=go(s);r.push(`rgba(${a}, ${c}, ${l}, ${t})`)}return r}const L1=[{url:"https://github.com/EnzymeAD/Enzyme.jl/issues/1995",affects:[["assume_mvnormal","EnzymeFwd"]]},{url:"https://github.com/EnzymeAD/Enzyme.jl/issues/3464",affects:[["assume_wishart","EnzymeRvs"]]},{url:"https://github.com/chalk-lab/Mooncake.jl/issues/570",affects:[["threaded_assume","MooncakeRvs"],["threaded_observe","MooncakeRvs"]]}],B1=[{value:"wrong",affects:[["control_flow","ReverseDiffCompiled"]]}],ho=new Map;for(const e of L1)for(const[n,t]of e.affects)ho.set(`${n}__${t}`,e.url);const bo=new Map;for(const e of B1)for(const[n,t]of e.affects)bo.set(`${n}__${t}`,e.value);function z1(e,n){return ho.get(`${e}__${n}`)}function V1(e,n){return bo.get(`${e}__${n}`)}var q1=(e,n,t)=>n(E(t)),j1=de('<th class="sortable svelte-9laac1" title="Click to sort"> <span class="sort-indicator svelte-9laac1"><!></span></th>'),$1=de('<td class="svelte-9laac1"> </td>'),U1=de('<a class="issue svelte-9laac1" target="_blank">(?)</a>'),H1=de('<td class="svelte-9laac1"><!> <span> </span></td>'),G1=(e,n,t,r)=>n(t.modelDefinitions[r()]),K1=mt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'),X1=mt('<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'),W1=de('<tr class="definition-row svelte-9laac1"><td class="svelte-9laac1"><div class="definition-content svelte-9laac1"><div class="code-wrapper svelte-9laac1"><!></div> <button class="copy-btn svelte-9laac1" aria-label="Copy to clipboard" title="Copy code"><!></button></div></td></tr>'),J1=de('<tr><!><td class="dim-cell svelte-9laac1"> </td><!></tr> <!>',1),Y1=de('<div class="table-scroll svelte-9laac1"><table class="svelte-9laac1"><thead><tr class="svelte-9laac1"><th class="model-col-header svelte-9laac1">Model</th><th class="dim-col-header svelte-9laac1">Dim</th><!></tr></thead><tbody></tbody></table></div>');function Z1(e,n){vn(n,!0);const t=ln(()=>b1(n.data));let r=ge(Le({column:null,direction:null})),o=ge(null),s=ge(!1);function a(x){navigator.clipboard.writeText(x),Z(s,!0),setTimeout(()=>{Z(s,!1)},2e3)}function c(x){E(r).column!==x?Z(r,{column:x,direction:"asc"},!0):E(r).direction==="asc"?Z(r,{column:x,direction:"desc"},!0):Z(r,{column:null,direction:null},!0)}const l=ln(()=>D1(n.data,E(r)));var f=Y1(),v=z(f),_=z(v),d=z(_),h=re(z(d),2);Nn(h,17,()=>E(t),Mn,(x,k)=>{var B=j1();B.__click=[q1,c,k];var L=z(B),T=re(L),p=z(T);{var y=V=>{var M=et(),I=cn(M);{var X=Q=>{var De=Ot("▲");G(Q,De)},oe=Q=>{var De=Ot("▼");G(Q,De)};Ue(I,Q=>{E(r).direction==="asc"?Q(X):Q(oe,!1)})}G(V,M)};Ue(p,V=>{E(r).column===E(k)&&V(y)})}me(()=>Ce(L,`${E(k)??""} `)),G(x,B)});var b=re(_);Nn(b,21,()=>E(l),Mn,(x,k,B)=>{let L=()=>E(k)[0],T=()=>E(k)[1].dim,p=()=>E(k)[1].results;var y=J1(),V=cn(y);Sn(V,1,"svelte-9laac1",null,{},{alt:B%2===1});var M=z(V);x1(M,{get name(){return L()},onToggle:()=>Z(o,E(o)===L()?null:L(),!0)});var I=re(M),X=z(I),oe=re(I);Nn(oe,17,()=>y1(p()),Mn,(Ie,ue)=>{let Re=()=>E(ue)[0],qe=()=>E(ue)[1];var Fe=et();const se=ln(()=>V1(L(),Re())??qe());var Ye=cn(Fe);{var bn=xe=>{var ae=$1(),Me=z(ae);me((rn,Dn)=>{Jt(ae,rn),Ce(Me,Dn)},[()=>I1(E(se),p(),n.theme),()=>E(se).toFixed(3)]),G(xe,ae)},yn=xe=>{var ae=H1();const Me=ln(()=>z1(L(),Re()));var rn=z(ae);{var Dn=On=>{var Ze=U1();me(()=>nt(Ze,"href",E(Me))),G(On,Ze)};Ue(rn,On=>{E(Me)&&On(Dn)})}var In=re(rn,2),vt=z(In);me(()=>{Sn(In,1,lo(E(se)==="NaN"?"nan":E(se)),"svelte-9laac1"),Ce(vt,E(se))}),G(xe,ae)};Ue(Ye,xe=>{typeof E(se)=="number"?xe(bn):xe(yn,!1)})}G(Ie,Fe)});var Q=re(V,2);{var De=Ie=>{var ue=W1(),Re=z(ue),qe=z(Re),Fe=z(qe),se=z(Fe);C1(se,{language:P1,get code(){return n.modelDefinitions[L()]}});var Ye=re(Fe,2);Ye.__click=[G1,a,n,L];var bn=z(Ye);{var yn=ae=>{var Me=K1();G(ae,Me)},xe=ae=>{var Me=X1();G(ae,Me)};Ue(bn,ae=>{E(s)?ae(yn):ae(xe,!1)})}me(()=>{nt(Re,"colspan",E(t).length+2),Ye.disabled=E(s)}),G(Ie,ue)};Ue(Q,Ie=>{E(o)===L()&&Ie(De)})}me(()=>Ce(X,T())),G(x,y)}),G(e,f),pn()}_t(["click"]);var Q1=de('<div class="legend svelte-10rqhbc"><div class="gradient-section svelte-10rqhbc"><span class="label svelte-10rqhbc">Faster</span> <div class="gradient-bar svelte-10rqhbc"></div> <span class="label svelte-10rqhbc">Slower</span></div> <div class="divider svelte-10rqhbc"></div> <div class="status-labels svelte-10rqhbc"><span class="status error svelte-10rqhbc">error</span> <span class="status wrong svelte-10rqhbc">wrong</span> <span class="status nan svelte-10rqhbc">NaN</span></div></div>');function e0(e,n){vn(n,!0);const t=ln(()=>()=>`linear-gradient(to right, ${O1(n.theme).join(", ")})`);var r=Q1(),o=z(r),s=re(z(o),2);me(a=>Jt(s,`background: ${a??""}`),[()=>E(t)()]),G(e,r),pn()}function n0(e,n){Z(n,E(n)==="light"?"dark":"light",!0),document.documentElement.setAttribute("data-theme",E(n)),localStorage.setItem("theme",E(n))}var t0=mt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'),r0=mt('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'),o0=de('<h3 class="category-heading svelte-1wqfdel"> </h3> <!>',1),s0=de('<p class="no-results svelte-1wqfdel"> </p>'),i0=de(`<div id="main-wrapper" class="svelte-1wqfdel"><main class="svelte-1wqfdel"><div class="header svelte-1wqfdel"><div class="title-area svelte-1wqfdel"><h1 class="svelte-1wqfdel">Turing AD tests</h1> <nav class="nav-links svelte-1wqfdel"><a href="https://turinglang.org/docs" class="svelte-1wqfdel">Turing.jl Docs</a> <a href="https://github.com/TuringLang/Turing.jl" class="svelte-1wqfdel">Turing.jl GitHub</a> <a href="https://github.com/JuliaBayes/ADTests" class="svelte-1wqfdel">ADTests GitHub</a></nav></div> <button class="theme-toggle svelte-1wqfdel" aria-label="Toggle Dark Mode" title="Toggle theme"><!></button></div> <p class="intro svelte-1wqfdel">A comparison of how different AD backends perform on <a href="https://turinglang.org/docs">Turing.jl</a> models.
            This does not imply any endorsement; for general AD comparisons see <a href="https://github.com/gradbench/gradbench" target="_blank">GradBench</a>.</p> <div class="info-card svelte-1wqfdel"><h4 class="svelte-1wqfdel">Reading the table</h4> <ul class="svelte-1wqfdel"><li class="svelte-1wqfdel">Click model names to see their definitions.</li> <li class="svelte-1wqfdel"><b>Numbers</b> = gradient time / primal time. <b>Smaller is faster.</b></li> <li class="svelte-1wqfdel"><span class="wrong svelte-1wqfdel">wrong</span> = AD ran but gave an incorrect result
                    (compared against FiniteDifferences).</li> <li class="svelte-1wqfdel"><span class="error svelte-1wqfdel">error</span> = AD failed to run.</li> <li class="svelte-1wqfdel"><span class="issue-example svelte-1wqfdel">(?)</span> links to a GitHub issue describing the problem.</li></ul></div> <div class="warning svelte-1wqfdel">Note: Results are from Julia 1.13.</div> <div class="results-header svelte-1wqfdel"><h2 class="svelte-1wqfdel">Results</h2> <a class="download-link svelte-1wqfdel" href="adtests.json" target="_blank" download=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> JSON</a></div> <div class="controls svelte-1wqfdel"><input type="search" class="search-input svelte-1wqfdel" placeholder="Filter models..."> <!></div> <!> <h2>Manifest</h2> <p class="secondary-text svelte-1wqfdel">Package versions used for the tests above:</p> <!></main></div>`);function a0(e,n){vn(n,!0);const t=typeof document<"u"&&(localStorage.getItem("theme")||document.documentElement.getAttribute("data-theme"))||"light";typeof document<"u"&&document.documentElement.setAttribute("data-theme",t);let r=ge(Le(t)),o=new Map;for(const[p,y]of Object.entries(Ha)){let V=y.__category__;delete y.__category__;let M=y.__dim__;delete y.__dim__;let I=new Map;for(const[X,oe]of Object.entries(y))I.set(X,oe);o.has(V)||o.set(V,new Map),o.get(V).set(p,{dim:M,results:I})}let s=new Map([...o.entries()].sort()),a=ge("");const c=ln(()=>{const p=E(a).trim().toLowerCase();if(!p)return s;const y=new Map;for(const[V,M]of s){const I=new Map;for(const[X,oe]of M)X.toLowerCase().includes(p)&&I.set(X,oe);I.size>0&&y.set(V,I)}return y});var l=i0(),f=z(l),v=z(f),_=re(z(v),2);_.__click=[n0,r];var d=z(_);{var h=p=>{var y=t0();G(p,y)},b=p=>{var y=r0();G(p,y)};Ue(d,p=>{E(r)==="dark"?p(h):p(b,!1)})}var x=re(v,10),k=z(x),B=re(k,2);e0(B,{get theme(){return E(r)}});var L=re(x,2);Nn(L,17,()=>E(c).entries(),Mn,(p,y)=>{let V=()=>E(y)[0],M=()=>E(y)[1];var I=o0(),X=cn(I),oe=z(X),Q=re(X,2);Z1(Q,{get data(){return M()},modelDefinitions:ec,get theme(){return E(r)}}),me(()=>Ce(oe,V())),G(p,I)},p=>{var y=s0(),V=z(y);me(()=>Ce(V,`No models match "${E(a)??""}".`)),G(p,y)});var T=re(L,6);R1(T,{}),Mi(k,()=>E(a),p=>Z(a,p)),G(e,l),pn()}_t(["click"]);ui(a0,{target:document.getElementById("app")});
