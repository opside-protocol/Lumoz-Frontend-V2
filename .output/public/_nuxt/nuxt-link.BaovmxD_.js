import{s as _,n as B,v as b,x as q,r as C,q as L,y as w,z as N,o as T,A as U,B as P,C as j,D,E,F,G as I,H as O,J as R,K as V,L as H,M as z}from"./entry.DWEB--NH.js";async function k(t,n=_()){const{path:o,matched:e}=n.resolve(t);if(!e.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(o)))return;const r=n._preloadPromises=n._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>k(t,n));n._routePreloaded.add(o);const i=e.map(s=>{var a;return(a=s.components)==null?void 0:a.default}).filter(s=>typeof s=="function");for(const s of i){const a=Promise.resolve(s()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}const M=(...t)=>t.find(n=>n!==void 0);function $(t){const n=t.componentName||"NuxtLink";function o(e,r){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return S(e,t.trailingSlash);const i="path"in e&&e.path!==void 0?e.path:r(e).path,s={...e,path:S(i,t.trailingSlash)};return"name"in s&&delete s.name,s}return B({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const i=_(),s=O(),a=b(()=>{const l=e.to||e.href||"";return o(l,i.resolve)}),f=b(()=>typeof a.value=="string"&&q(a.value,{acceptRelative:!0})),g=b(()=>e.target&&e.target!=="_self"),p=b(()=>e.external||g.value?!0:typeof a.value=="object"?!1:a.value===""||f.value),x=C(!1),v=C(null),A=l=>{var d;v.value=e.custom?(d=l==null?void 0:l.$el)==null?void 0:d.nextElementSibling:l==null?void 0:l.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!J()){const d=R();let h,u=null;L(()=>{const y=G();w(()=>{h=N(()=>{var c;(c=v==null?void 0:v.value)!=null&&c.tagName&&(u=y.observe(v.value,async()=>{u==null||u(),u=null;const m=typeof a.value=="string"?a.value:i.resolve(a.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",m).catch(()=>{}),!p.value&&k(a.value,i).catch(()=>{})]),x.value=!0}))})})}),T(()=>{h&&U(h),u==null||u(),u=null})}return()=>{var u,y;if(!p.value){const c={ref:A,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(x.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel||void 0),P(j("RouterLink"),c,r.default)}const l=typeof a.value=="object"?((u=i.resolve(a.value))==null?void 0:u.href)??null:a.value&&!e.external&&!f.value?o(D(s.app.baseURL,a.value),i.resolve):a.value||null,d=e.target||null,h=M(e.noRel?"":e.rel,t.externalRelAttribute,f.value||g.value?"noopener noreferrer":"")||null;if(e.custom){if(!r.default)return null;const c=()=>V(l,{replace:e.replace,external:e.external});return r.default({href:l,navigate:c,get route(){if(!l)return;const m=E(l);return{path:m.pathname,fullPath:m.pathname,get query(){return F(m.search)},hash:m.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l}},rel:h,target:d,isExternal:p.value,isActive:!1,isExactActive:!1})}return P("a",{ref:v,href:l,rel:h,target:d},(y=r.default)==null?void 0:y.call(r))}}})}const Q=$(I);function S(t,n){const o=n==="append"?H:z;return q(t)&&!t.startsWith("http")?t:o(t,!0)}function G(){const t=R();if(t._observer)return t._observer;let n=null;const o=new Map,e=(i,s)=>(n||(n=new IntersectionObserver(a=>{for(const f of a){const g=o.get(f.target);(f.isIntersecting||f.intersectionRatio>0)&&g&&g()}})),o.set(i,s),n.observe(i),()=>{o.delete(i),n.unobserve(i),o.size===0&&(n.disconnect(),n=null)});return t._observer={observe:e}}function J(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{Q as _};