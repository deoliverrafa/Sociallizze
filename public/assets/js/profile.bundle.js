(()=>{var e={851:(e,t,l)=>{"use strict";l.r(t);var o=l(534);let r,a;const c=document.getElementById("avatarInput"),n=document.querySelectorAll(".button.save");c.addEventListener("change",(function(){if(r=c.files[0],r){const e=new FileReader;e.onload=function(e){o.tz[0].src=e.target.result},e.readAsDataURL(r)}}));const s=document.querySelector("body");o.kb[0].addEventListener("click",(()=>{o.qk[0].style.display="flex",s.style.overflowY="hidden",window.scrollTo(0,0)})),o.XP[1].addEventListener("click",(()=>{o.qk[0].style.display="none",s.style.overflowY="auto"})),o.FU[0].addEventListener("input",(()=>{a=o.FU[0].value})),n[1].addEventListener("click",(async()=>{o.qk[0].style.display="none",s.style.overflowY="auto"})),n[0].addEventListener("click",(async()=>{const e=localStorage.getItem("userId"),t=new FormData;t.append("avatar",r),t.append("userId",e),t.append("bioData",a);try{const e=await fetch("https://sociallizze-api.up.railway.app/api/attProfile",{method:"PUT",body:t}),l=await e.json();l?window.location.reload():alert(l.error)}catch(e){console.error(e),alert("Erro na solicitação")}}))},106:(e,t,l)=>{"use strict";l.r(t);var o=l(534);let r=localStorage.getItem("userId"),a=localStorage.getItem("userLoggedIn");const c=document.querySelectorAll(".card.post"),n=document.querySelectorAll(".card.photo"),s=document.querySelectorAll(".card.video"),i=document.querySelectorAll(".card.bio"),d=document.querySelectorAll(".container.bio"),u=document.querySelectorAll(".container.no-bio");document.addEventListener("DOMContentLoaded",(async()=>{if(1==await async function(){let e;return e=null!=localStorage.getItem("userId")&&"false"!=a,e}()){const e=await async function(){return await fetch(`https://sociallizze-api.up.railway.app/api/searchById?id=${r}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e?e.json():(console.log("Erro ao pegar dados do usuário"),null))).then((e=>e)).catch((e=>(console.log("Erro ao pegar userData",e),null)))}();e?(o.OZ[0].innerHTML=e.userName,o.LM[0].innerHTML=`@${e.nickName}`,o.r6[0].innerHTML=e.phoneNumber,o.Ud[0].innerHTML=e.birthDayData,o.IH[0].innerHTML=e.email,o.rc[0].innerHTML=e.nacionality,e.bio?(u[0].style.display="none",o.u_[0].innerHTML=e.bio):(d[1].style.display="none",u[0].style.display="flex"),r==e._id&&(o.ZY[0].style.display="none",o.ZY[1].style.display="none",o.ZY[2].style.display="none",o.ZY[3].style.display="none")):o.LM[0].innerHTML="Usuario";const t=await async function(){const e=localStorage.getItem("userId");if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}();if("image/png"==t.type){const e=URL.createObjectURL(t);o.tz[0].src=e}else o.tz[0].src="../../public/assets/images/user/user.png"}else window.location.href="../../index.html"})),o.SV[0].addEventListener("click",(()=>{!async function(){localStorage.setItem("userLoggedIn","false"),localStorage.setItem("userId","null")}(),window.location.href="../../index.html"})),o.e3[0].addEventListener("click",(()=>{o.e3[1].classList.remove("active"),o.e3[2].classList.remove("active"),o.e3[3].classList.remove("active"),o.e3[0].classList.add("active"),n[0].classList.add("container-disable"),s[0].classList.add("container-disable"),i[0].classList.add("container-disable"),c[0].classList.remove("container-disable")})),o.e3[1].addEventListener("click",(()=>{o.e3[0].classList.remove("active"),o.e3[2].classList.remove("active"),o.e3[3].classList.remove("active"),o.e3[1].classList.add("active"),c[0].classList.add("container-disable"),s[0].classList.add("container-disable"),i[0].classList.add("container-disable"),n[0].classList.remove("container-disable")})),o.e3[2].addEventListener("click",(()=>{o.e3[0].classList.remove("active"),o.e3[1].classList.remove("active"),o.e3[3].classList.remove("active"),o.e3[2].classList.add("active"),c[0].classList.add("container-disable"),n[0].classList.add("container-disable"),i[0].classList.add("container-disable"),s[0].classList.remove("container-disable")})),o.e3[3].addEventListener("click",(()=>{o.e3[0].classList.remove("active"),o.e3[1].classList.remove("active"),o.e3[2].classList.remove("active"),o.e3[3].classList.add("active"),c[0].classList.add("container-disable"),n[0].classList.add("container-disable"),s[0].classList.add("container-disable"),i[0].classList.remove("container-disable")}))},925:(e,t,l)=>{const o=l(106),r=l(851);e.exports={showProfileController:o,editProfileController:r}},534:(e,t,l)=>{"use strict";l.d(t,{FU:()=>a,IH:()=>S,LM:()=>s,OZ:()=>i,SV:()=>u,Ud:()=>v,XP:()=>o,ZY:()=>c,e3:()=>n,kb:()=>m,qk:()=>r,r6:()=>L,rc:()=>p,tz:()=>y,u_:()=>d});const o=document.querySelectorAll(".icon-close"),r=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),a=(document.querySelectorAll(".left-bar"),document.querySelectorAll(".card"),document.querySelectorAll(".container"),document.querySelectorAll(".text-error"),document.querySelectorAll(".input")),c=(document.querySelectorAll(".checkbox"),document.querySelectorAll(".text-checkbox"),document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister"),document.querySelectorAll(".buttonSelect"),document.querySelectorAll(".button")),n=(document.querySelectorAll(".buttonSubmit"),document.querySelectorAll(".text-success"),document.querySelectorAll(".item")),s=(document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),i=document.querySelectorAll(".name"),d=document.querySelectorAll(".text.bio"),u=(document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout")),y=document.querySelectorAll(".image.profile"),m=(document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date"),document.querySelectorAll(".edit")),p=(document.querySelectorAll(".select"),document.querySelectorAll(".text.nationality")),v=document.querySelectorAll(".text.birthday"),L=document.querySelectorAll(".text.number"),S=document.querySelectorAll(".text.email")}},t={};function l(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,l),a.exports}l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(925)})();