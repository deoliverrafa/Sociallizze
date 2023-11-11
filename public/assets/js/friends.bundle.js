(()=>{var e={931:(e,t,o)=>{"use strict";o.r(t),document.querySelectorAll(".icon-close"),document.querySelectorAll(".icon"),document.querySelectorAll(".modal"),document.querySelectorAll(".left-bar"),document.querySelectorAll(".card");const n=document.querySelectorAll(".container"),c=(document.querySelectorAll(".text-error"),document.querySelectorAll(".input"));async function r(e){if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}function l(e,t,o,n,c){const r=document.createElement("button");r.classList.add("button",o,"button-primary");const l=document.createElement("span");return l.classList.add("icon","material-symbols-outlined"),l.textContent=e,r.appendChild(l),r.appendChild(document.createTextNode(t)),r.addEventListener("click",(async()=>{if("seguir"==c){console.log("Clickado");try{const e=await fetch("https://sociallizze-api.up.railway.app/api/follow",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userIdToFollow:n._id,currentUserId:localStorage.getItem("userId")})});if(e.ok)return;console.error("Erro ao seguir o usuário:",e.statusText)}catch(e){console.error("Erro ao seguir o usuário:",e)}}if("remover"==c)try{const e=await fetch("https://sociallizze-api.up.railway.app/api/unfollow",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userIdToUnfollow:n._id,currentUserId:localStorage.getItem("userId")})});e.ok?console.log("Usuario removido com sucesso"):console.error("Erro ao remover o usuário:",e.statusText)}catch(e){console.log("Erro ao remover usuario",e)}})),r}document.querySelectorAll(".checkbox"),document.querySelectorAll(".text-checkbox"),document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister"),document.querySelectorAll(".buttonSelect"),document.querySelectorAll(".button"),document.querySelectorAll(".buttonSubmit"),document.querySelectorAll(".text-success"),document.querySelectorAll(".item"),document.querySelectorAll(".logo"),document.querySelectorAll(".nick"),document.querySelectorAll(".name"),document.querySelectorAll(".text.bio"),document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout"),document.querySelectorAll(".image.profile"),document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date"),document.querySelectorAll(".edit"),document.querySelectorAll(".select"),document.querySelectorAll(".text.nationality"),document.querySelectorAll(".text.birthday"),document.querySelectorAll(".text.number"),document.querySelectorAll(".text.email"),localStorage.getItem("userId"),localStorage.getItem("userLoggedIn");const a=function(e,t){let o;return function(...t){clearTimeout(o),o=setTimeout((()=>e.apply(this,t)),300)}}((async e=>{try{if("null"==e)return;const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUser?nickName=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}),o=await t.json();n[3].innerHTML="",n[5].innerHTML="";const c=await async function(){const e=await fetch(`https://sociallizze-api.up.railway.app/api/getCurrentUser?currentUserId=${localStorage.getItem("userId")}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error("Erro ao obter usuário atual");return await e.json()}();o.forEach((async e=>{if(e._id!==c._id)if(function(e,t){return e.following&&e.following.some((e=>e===t._id))||!1}(c,e)){const t=await async function(e){const t=document.createElement("div");t.classList.add("container","search-friends","container-column-center");const o=document.createElement("div");o.classList.add("card","user","container","container-row-between");const c=document.createElement("div");c.classList.add("container","container-row");const a=document.createElement("img");a.classList.add("image","profile-small");const s=await r(e._id);"image/png"==s.type?a.src=URL.createObjectURL(s):a.src="./../../public/assets/images/user/user.png",c.appendChild(a);const d=document.createElement("div");d.classList.add("container","container-column-center");const i=document.createElement("div");i.classList.add("container","container-row"),d.appendChild(i);const u=document.createElement("p");u.classList.add("text","nick","text-bold"),u.textContent=e.nickName,i.appendChild(u);const m=document.createElement("img");m.classList.add("image","checkmark"),m.src="./../../public/assets/images/user/checkmark_blue.png",i.appendChild(m),c.appendChild(d),o.appendChild(c);const p=document.createElement("div");p.classList.add("container","container-row");const h=l("person_remove","REMOVER","remove",e,"remover"),y=l("person_check","SEGUINDO","check",e,"seguindo");p.appendChild(y),p.appendChild(h),o.appendChild(p),t.appendChild(o),n[5].appendChild(t)}(e);t instanceof Node&&n[5].appendChild(t)}else{const t=await async function(e){const t=document.createElement("div");t.classList.add("container","search-friends","container-column-center");const o=document.createElement("div");o.classList.add("card","user","container","container-row-between");const c=document.createElement("div");c.classList.add("container","container-row");const a=document.createElement("img");a.classList.add("image","profile-small");const s=await r(e._id);"image/png"==s.type?a.src=URL.createObjectURL(s):a.src="./../../public/assets/images/user/user.png",c.appendChild(a);const d=document.createElement("div");d.classList.add("container","container-column-center");const i=document.createElement("div");i.classList.add("container","container-row"),d.appendChild(i);const u=document.createElement("p");u.classList.add("text","nick","text-bold"),u.textContent=e.nickName,i.appendChild(u);const m=document.createElement("img");m.classList.add("image","checkmark"),m.src="./../../public/assets/images/user/checkmark_blue.png",i.appendChild(m),c.appendChild(d),o.appendChild(c);const p=l("person_add","SEGUIR","add",e,"seguir"),h=document.createElement("div");h.classList.add("container","container-row"),h.appendChild(p),o.appendChild(h),t.appendChild(o),n[3].appendChild(t)}(e);t instanceof Node&&n[3].appendChild(t)}}))}catch(e){console.log("Erro ao obter dados",e)}}));c[0].addEventListener("input",(async()=>{const e=c[0].value.trim();if(0===e.length)return n[3].innerHTML="",void(n[5].innerHTML="");a(e)}))},355:(e,t,o)=>{const n=o(931);e.exports={friendsController:n}}},t={};function o(n){var c=t[n];if(void 0!==c)return c.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(355)})();