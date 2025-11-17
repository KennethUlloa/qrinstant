import{r as m}from"./index.Cd_vQiNd.js";const $="modulepreload",P=function(e){return"/qrinstant/"+e},E={},T=function(t,r,c){let n=Promise.resolve();if(r&&r.length>0){let i=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),h=o?.nonce||o?.getAttribute("nonce");n=i(r.map(l=>{if(l=P(l),l in E)return;E[l]=!0;const d=l.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":$,d||(f.as="script"),f.crossOrigin="",f.href=l,h&&f.setAttribute("nonce",h),document.head.appendChild(f),d)return new Promise((v,w)=>{f.addEventListener("load",v),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return n.then(i=>{for(const o of i||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};var j={exports:{}},g={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C;function A(){if(C)return g;C=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(c,n,s){var i=null;if(s!==void 0&&(i=""+s),n.key!==void 0&&(i=""+n.key),"key"in n){s={};for(var o in n)o!=="key"&&(s[o]=n[o])}else s=n;return n=s.ref,{$$typeof:e,type:c,key:i,ref:n!==void 0?n:null,props:s}}return g.Fragment=t,g.jsx=r,g.jsxs=r,g}var _;function S(){return _||(_=1,j.exports=A()),j.exports}var a=S();/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,c)=>c?c.toUpperCase():r.toLowerCase()),N=e=>{const t=q(e);return t.charAt(0).toUpperCase()+t.slice(1)},M=(...e)=>e.filter((t,r,c)=>!!t&&t.trim()!==""&&c.indexOf(t)===r).join(" ").trim(),I=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:c,className:n="",children:s,iconNode:i,...o},h)=>m.createElement("svg",{ref:h,...D,width:t,height:t,stroke:e,strokeWidth:c?Number(r)*24/Number(t):r,className:M("lucide",n),...!s&&!I(o)&&{"aria-hidden":"true"},...o},[...i.map(([l,d])=>m.createElement(l,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(e,t)=>{const r=m.forwardRef(({className:c,...n},s)=>m.createElement(U,{ref:s,iconNode:t,className:M(`lucide-${L(N(e))}`,`lucide-${e}`,c),...n}));return r.displayName=N(e),r};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],G=b("download",O);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],Q=b("qr-code",H);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],z=b("trash",J),B=1048576;function V(){const e=m.useRef(null),t=m.useRef(null),[r,c]=m.useState(""),[n,s]=m.useState(null),[i,o]=m.useState(!1),[h,l]=m.useState(null),d=m.useRef(null);m.useEffect(()=>{async function u(){const x=(await T(async()=>{const{default:y}=await import("./qr-code-styling.PimvHidt.js").then(k=>k.q);return{default:y}},[])).default;d.current=new x({width:300,height:300,type:"svg",margin:10,dotsOptions:{color:"#000",type:"rounded"},backgroundOptions:{color:"#fff"},imageOptions:{crossOrigin:"anonymous",margin:10}}),e.current&&d.current.append(e.current)}u()},[]);const p=()=>{l(null),d.current.update({data:r,image:n||void 0}),o(!0)},f=u=>{const x=u.target.files?.[0];if(!x)return;if(x.size>B){l("Tamaño máximo 1MB");return}const y=new FileReader;y.onload=k=>s(k.target.result),y.readAsDataURL(x)},v=u=>{s(null),t.current&&(t.current.value=null)},w=()=>{const u=new Date,x=`${u.getDate()}-${u.getMonth()}-${u.getFullYear()}-${u.getHours()}${u.getMinutes()}${u.getSeconds()}`;d.current.download({name:"qr-code-"+x,extension:"png"}).catch(()=>{e.current&&(e.current.innerHTML="",o(!1)),l("No se pudo descargar el QR. Inténta crearlo nuevamente.")})},R=500;return a.jsxs("div",{className:"space-y-6 max-w-lg mx-auto w-full",children:[a.jsxs("div",{className:"flex flex-col space-y-2",children:[a.jsx("label",{className:"text-sm font-medium text-gray-200",children:"Texto o URL (500 caracteres máximo)"}),a.jsx("input",{type:"text",value:r,onChange:u=>c(u.target.value),placeholder:"Escribe el contenido del QR...",className:`
            w-full px-4 py-2 rounded-lg border border-gray-300
            focus:ring-3 focus:ring-blue-500 focus: outline-0
            transition
          `,maxLength:R}),a.jsxs("p",{className:"text-end",children:[r?r.length:0,"/",R]})]}),a.jsxs("div",{className:"flex flex-col space-y-2",children:[a.jsx("label",{className:"text-sm font-medium text-gray-200",children:"Imagen personalizada (opcional)"}),a.jsx("input",{ref:t,type:"file",accept:"image/*",onChange:f,className:`
            file:bg-gray-500 file:text-white file:border-0 file:px-4 file:py-2
            file:rounded-lg file:cursor-pointer
            hover:file:bg-gray-600
            cursor-pointer text-gray-400 text-sm
          `}),n&&a.jsxs("div",{className:"flex justify-center items-center flex-col gap-2",children:[a.jsx("img",{src:n,alt:"Preview",className:"w-20 h-20 object-cover rounded-md border"}),a.jsxs("button",{onClick:v,className:`py-2 px-4 rounded-lg bg-gray-800 text-white font-medium
              hover:bg-black transition flex items-center gap-2`,children:[a.jsx(z,{}),"Eliminar"]})]}),a.jsxs("button",{onClick:p,disabled:!r,className:`
          mt-4 flex items-center gap-2 justify-center
          w-full py-2 px-4 rounded-lg bg-blue-600 text-white font-medium
          hover:bg-blue-700 transition disabled:bg-gray-600 disabled:cursor-not-allowed
        `,children:[a.jsx(Q,{}),r?"Generar QR":"Ingresa un texto para generar"]}),a.jsx("div",{className:`flex justify-center ${i?"pt-4":""}`,children:a.jsx("div",{ref:e})}),i&&a.jsx("div",{className:"flex justify-center pt-4",children:a.jsxs("button",{onClick:w,className:`
              w-full py-2 px-4 rounded-lg bg-blue-600 text-white font-medium
              hover:bg-blue-700 transition flex items-center gap-2 justify-center
            `,children:[a.jsx(G,{size:20}),"Descargar"]})}),h&&a.jsx("p",{className:"text-center text-rose-950 bg-rose-400 rounded-sm p-2",children:h})]})]})}export{V as default};
