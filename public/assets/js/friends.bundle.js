(()=>{var e,t,o,r,c={296:(e,t,o)=>{"use strict";o.a(e,(async(e,r)=>{try{o.r(t);var c=o(534),n=o(342),l=o(972);const a=document.querySelectorAll(".logo.rotate"),u=document.getElementById("loader");async function s(e,t,o,r){const c=document.createElement("div");c.classList.add("container","search-friends","container-column-center");const a=document.createElement("div");a.classList.add("card","user","container","container-row-between");const u=document.createElement("div");u.classList.add("container","container-row-between");const s=document.createElement("img");s.classList.add("image","profile-small");const i=await(0,n.getUserImage)(t);"image/png"==i.type||"image/jpeg"==i.type?s.src=URL.createObjectURL(i):(s.src="./../../public/assets/images/user/user.png",console.clear()),u.appendChild(s);const m=document.createElement("div");m.classList.add("container","container-column-center");const y=document.createElement("div");y.classList.add("container","container-row"),m.appendChild(y);const f=document.createElement("p");f.classList.add("text","nick","text-bold"),"dark"==l.theme&&(f.style.color="#FFFFFF"),f.textContent=e,y.appendChild(f);const h=document.createElement("img");h.classList.add("image","checkmark"),h.src="./../../public/assets/images/user/checkmark_blue.png",y.appendChild(h),u.appendChild(m),a.appendChild(u);const p=document.createElement("div");p.classList.add("container","container-row");const S=d(o?"person_check":"person_add",o?"SEGUINDO":"SEGUIR",o?"check":"add",t,o?"seguindo":"seguir");S.addEventListener("mouseover",(()=>{if(o){const e=d("person_remove","REMOVENDO...","remove",t,"remover");S.replaceWith(e),e.addEventListener("mouseout",(()=>{e.replaceWith(S)})),e.addEventListener("click",(async()=>{try{const o=await fetch("https://sociallizze-api.up.railway.app/api/unfollow",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userIdToUnfollow:t,currentUserId:localStorage.getItem("userId")})});if(o.ok){const o=d("person_remove","REMOVIDO","removed",t,"removed");e.replaceWith(o)}else console.error("Erro ao remover o usuário:",o.statusText)}catch(e){console.log("Erro ao remover usuário",e)}}))}})),p.appendChild(S),a.appendChild(p),c.appendChild(a),r[4].appendChild(c)}function d(e,t,o,r,c){const n=document.createElement("button");n.classList.add("button",o,"button-primary");const l=document.createElement("span");return l.classList.add("icon","material-symbols-outlined"),l.textContent=e,n.appendChild(l),n.appendChild(document.createTextNode(t)),n.addEventListener("click",(async()=>{if("seguir"==c)try{const e=await fetch("https://sociallizze-api.up.railway.app/api/follow",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userIdToFollow:r,currentUserId:localStorage.getItem("userId")})});if(e.ok){const e=d("person_check","SEGUINDO","check",r,"seguindo");return void n.replaceWith(e)}console.error("Erro ao seguir o usuário:",e.statusText)}catch(e){console.error("Erro ao seguir o usuário:",e)}if("remover"==c)try{const e=await fetch("https://sociallizze-api.up.railway.app/api/unfollow",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userIdToUnfollow:r,currentUserId:localStorage.getItem("userId")})});e.ok||console.error("Erro ao remover o usuário:",e.statusText)}catch(e){console.log("Erro ao remover usuario",e)}})),n}u.style.display="none";const i=await f((async e=>{try{if("null"==e)return;u.style.display="flex",a[0].style.animation="rotate .3s infinite linear";const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUser?nickName=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}),o=await t.json();c.containers[4].innerHTML="";const r=await y();u.style.display="none",a[0].style.animation="none";for(const e of o)if(e._id!==r._id)if(m(r,e)){const t=await s(e.nickName,e._id,!0,c.containers);t instanceof Node&&c.containers[6].appendChild(t)}else{const t=await s(e.nickName,e._id,!1,c.containers);t instanceof Node&&c.containers[4].appendChild(t)}}catch(e){console.log("Erro ao obter dados",e)}}),1200);function m(e,t){return e.following&&e.following.some((e=>e===t._id))||!1}async function y(){const e=await fetch(`https://sociallizze-api.up.railway.app/api/getCurrentUser?currentUserId=${n.localUserId}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error("Erro ao obter usuário atual");return await e.json()}async function f(e,t){let o;return function(...r){clearTimeout(o),o=setTimeout((()=>e.apply(this,r)),t)}}c.inputs[0].addEventListener("input",(async()=>{const e=c.inputs[0].value.trim(),t=c.containers;if(0===e.length)return c.containers[4].innerHTML="",void(c.containers[6].innerHTML="");i(e,t)})),r()}catch(h){r(h)}}),1)},342:(e,t,o)=>{"use strict";o.d(t,{getUserImage:()=>c,localUserId:()=>r});let r=localStorage.getItem("userId");async function c(e){if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}localStorage.getItem("userLoggedIn")},355:(e,t,o)=>{const r=o(296);e.exports={friendsController:r}},972:(e,t,o)=>{"use strict";o.d(t,{theme:()=>n});var r=o(534);let c,n;function l(){"dark"===n?(r.body.style.background="#000000",document.querySelectorAll(".profile").forEach((function(e){e.style.background="#000000"})),document.querySelectorAll(".left-bar").forEach((function(e){e.style.background="#000000"})),document.querySelectorAll(".top").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".header").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".card").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".top").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".main").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".bottom").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".input").forEach((function(e){e.style.background="#2C2C2C",e.style.color="#FFFFFF"})),document.querySelectorAll(".select").forEach((function(e){e.style.background="#2C2C2C",e.style.color="rgba(255,255,255,.5)"})),document.querySelectorAll(".option").forEach((function(e){e.style.color="#FFFFFF"})),document.querySelectorAll(".date").forEach((function(e){e.style.background="#2C2C2C",e.style.color="#FFFFFF"})),document.querySelectorAll(".item").forEach((function(e){e.style.background="#2C2C2C",e.style.color="#FFFFFF"})),document.querySelectorAll(".user").forEach((function(e){e.style.background="#2C2C2C",e.style.color="#FFFFFF"})),document.querySelectorAll(".icon").forEach((function(e){e.style.color="#FFFFFF"})),document.querySelectorAll(".icon-input").forEach((function(e){e.style.background="#2C2C2C"})),document.querySelectorAll(".text").forEach((function(e){e.style.color="#FFFFFF"})),document.querySelectorAll(".text-error").forEach((function(e){e.style.color="#E05135"})),document.querySelectorAll(".text.nick").forEach((function(e){e.style.color="#FFFFFF"})),document.querySelectorAll(".text.title").forEach((function(e){e.style.color="#FFFFFF"})),document.querySelectorAll(".text.comment").forEach((function(e){e.style.color="#FFFFFF"}))):(r.body.style.background="",document.querySelectorAll(".profile").forEach((function(e){e.style.background=""})),document.querySelectorAll(".left-bar").forEach((function(e){e.style.background=""})),document.querySelectorAll(".top").forEach((function(e){e.style.background=""})),document.querySelectorAll(".header").forEach((function(e){e.style.background=""})),document.querySelectorAll(".card").forEach((function(e){e.style.background=""})),document.querySelectorAll(".top").forEach((function(e){e.style.background=""})),document.querySelectorAll(".main").forEach((function(e){e.style.background=""})),document.querySelectorAll(".bottom").forEach((function(e){e.style.background=""})),document.querySelectorAll(".input").forEach((function(e){e.style.background="",e.style.color=""})),document.querySelectorAll(".select").forEach((function(e){e.style.background="",e.style.color=""})),document.querySelectorAll(".date").forEach((function(e){e.style.background="",e.style.color=""})),document.querySelectorAll(".item").forEach((function(e){e.style.background="",e.style.color=""})),document.querySelectorAll(".user").forEach((function(e){e.style.background="",e.style.color=""})),document.querySelectorAll(".icon").forEach((function(e){e.style.color=""})),document.querySelectorAll(".icon-input").forEach((function(e){e.style.background=""})),document.querySelectorAll(".text").forEach((function(e){e.style.color=""})),document.querySelectorAll(".text-error").forEach((function(e){e.style.color=""})),document.querySelectorAll(".text.nick").forEach((function(e){e.style.color=""})),document.querySelectorAll(".text.title").forEach((function(e){e.style.color=""})),document.querySelectorAll(".text.comment").forEach((function(e){e.style.color=""})))}document.addEventListener("DOMContentLoaded",(function(){r.selects[0]&&r.selects[0].addEventListener("change",(function(){switch(c=this.value,c){case"Light":localStorage.setItem("themeSelected","light"),n=localStorage.getItem("themeSelected");break;case"Dark":localStorage.setItem("themeSelected","dark"),n=localStorage.getItem("themeSelected")}l()})),n=localStorage.getItem("themeSelected"),null===n&&(n="light"),l()}))},534:(e,t,o)=>{"use strict";o.d(t,{body:()=>r,containers:()=>c,inputs:()=>n,selects:()=>l});const r=document.querySelector("body"),c=(document.querySelector("p"),document.querySelectorAll(".icon-close"),document.querySelectorAll(".icon"),document.querySelectorAll(".modal"),document.querySelectorAll(".left-bar"),document.querySelectorAll(".card"),document.querySelectorAll(".container")),n=(document.querySelectorAll(".text-error"),document.querySelectorAll(".input")),l=(document.querySelectorAll(".checkbox"),document.querySelectorAll(".text-checkbox"),document.querySelectorAll(".text"),document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister"),document.querySelectorAll(".buttonSelect"),document.querySelectorAll(".button"),document.querySelectorAll(".buttonSubmit"),document.querySelectorAll(".text-success"),document.querySelectorAll(".modal.success"),document.querySelectorAll(".item"),document.querySelectorAll(".logo"),document.querySelectorAll(".nick"),document.querySelectorAll(".name"),document.querySelectorAll(".text.bio"),document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout"),document.querySelectorAll(".image.profile"),document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date"),document.querySelectorAll(".edit"),document.querySelectorAll(".select"));document.querySelectorAll(".text.nationality"),document.querySelectorAll(".text.birthday"),document.querySelectorAll(".text.number"),document.querySelectorAll(".text.email")}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return c[e](o,o.exports,l),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(c,n,l)=>{var a;l&&((a=[]).d=-1);var u,s,d,i=new Set,m=c.exports,y=new Promise(((e,t)=>{d=t,s=e}));y[t]=m,y[e]=e=>(a&&e(a),i.forEach(e),y.catch((e=>{}))),c.exports=y,n((c=>{var n;u=(c=>c.map((c=>{if(null!==c&&"object"==typeof c){if(c[e])return c;if(c.then){var n=[];n.d=0,c.then((e=>{l[t]=e,r(n)}),(e=>{l[o]=e,r(n)}));var l={};return l[e]=e=>e(n),l}}var a={};return a[e]=e=>{},a[t]=c,a})))(c);var l=()=>u.map((e=>{if(e[o])throw e[o];return e[t]})),s=new Promise((t=>{(n=()=>t(l)).r=0;var o=e=>e!==a&&!i.has(e)&&(i.add(e),e&&!e.d&&(n.r++,e.push(n)));u.map((t=>t[e](o)))}));return n.r?s:l()}),(e=>(e?d(y[o]=e):s(m),r(a)))),a&&a.d<0&&(a.d=0)},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(355)})();