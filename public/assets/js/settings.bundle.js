(()=>{var e={785:(e,t,o)=>{"use strict";o.r(t),document.querySelector("body"),document.querySelector("p"),document.querySelectorAll(".icon-close"),document.querySelectorAll(".icon"),document.querySelectorAll(".modal"),document.querySelectorAll(".left-bar"),document.querySelectorAll(".card");const l=document.querySelectorAll(".container"),n=document.querySelectorAll(".text-error"),r=document.querySelectorAll(".input"),c=document.querySelectorAll(".checkbox"),a=(document.querySelectorAll(".text-checkbox"),document.querySelectorAll(".text"),document.querySelectorAll(".link")),i=(document.querySelectorAll(".linkRegister"),document.querySelectorAll(".buttonSelect"),document.querySelectorAll(".button"));document.querySelectorAll(".buttonSubmit"),document.querySelectorAll(".text-success"),document.querySelectorAll(".item"),document.querySelectorAll(".logo"),document.querySelectorAll(".nick"),document.querySelectorAll(".name"),document.querySelectorAll(".text.bio"),document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout"),document.querySelectorAll(".image.profile"),document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date"),document.querySelectorAll(".edit"),document.querySelectorAll(".select"),document.querySelectorAll(".text.nationality"),document.querySelectorAll(".text.birthday"),document.querySelectorAll(".text.number"),document.querySelectorAll(".text.email");let s,d,y,u=localStorage.getItem("userId"),p=localStorage.getItem("userLoggedIn");const m=document.querySelectorAll(".logo.rotate"),h=document.getElementById("loader"),S=document.querySelectorAll(".card");i[0].style.display="none",i[1].style.display="none",l[5].style.display="none",l[6].style.display="none",l[7].style.display="none",document.addEventListener("DOMContentLoaded",(async()=>{S[0].style.display="none",h.style.display="flex",m[0].style.animation="rotate .3s infinite linear",loader.style.display="flex",1==await async function(){let e;return e=null!=localStorage.getItem("userId")&&"false"!=p,e}()?(s=await async function(e,t){const o=`https://sociallizze-api.up.railway.app/api/searchById?id=${e}&fields=showEmail,showBirthDayData,showNacionality,showPhoneNumber`;try{const e=await fetch(o,{method:"GET",headers:{"Content-Type":"application/json"}});return e.ok?await e.json():(console.log("Erro ao pegar dados do usuário"),null)}catch(e){return console.log("Erro ao pegar userData",e),null}}(u),c[0].checked=s.showNacionality,c[1].checked=s.showBirthDayData,c[2].checked=s.showPhoneNumber,c[3].checked=s.showEmail,S[0].style.display="flex",h.style.display="none",m[0].style.animation="none",loader.style.display="none"):window.location.href="index.html"})),c[0].addEventListener("change",(async()=>{const e=c[0].checked;try{const t=await fetch("https://sociallizze-api.up.railway.app/api/modifySettings",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({nacionality:e,localUserId:u})}),o=await t.json();o.error&&console.log("Erro",o.error)}catch(e){console.log("Erro na requisição:",e)}})),c[1].addEventListener("change",(async()=>{const e=c[1].checked;try{const t=await fetch("https://sociallizze-api.up.railway.app/api/modifySettings",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({birthDayData:e,localUserId:u})}),o=await t.json();o.error&&console.log("Erro",o.error)}catch(e){console.log("Erro na requisição:",e)}})),c[2].addEventListener("change",(async()=>{const e=c[2].checked;try{const t=await fetch("https://sociallizze-api.up.railway.app/api/modifySettings",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:e,localUserId:u})}),o=await t.json();o.error&&console.log("Erro",o.error)}catch(e){console.log("Erro na requisição:",e)}})),c[3].addEventListener("change",(async()=>{const e=c[3].checked;try{const t=await fetch("https://sociallizze-api.up.railway.app/api/modifySettings",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,localUserId:u})}),o=await t.json();o.error&&console.log("Erro",o.error)}catch(e){console.log("Erro na requisição:",e)}})),a[0].addEventListener("click",(async()=>{l[5].style.display="flex",l[6].style.display="flex",i[0].style.display="flex",i[1].style.display="none",r[0].addEventListener("input",(function(){d=this.value,console.log(d)})),r[1].addEventListener("input",(function(){y=this.value,console.log(y)})),i[0].addEventListener("click",(async()=>{console.log("Clickado"),d!==y&&(l[7].style.display,n[0].innerHTML="Credenciais não batem")}))})),a[1].addEventListener("click",(async()=>{l[5].style.display="flex",l[6].style.display="none",i[0].style.display="none",i[1].style.display="flex"}))},5:(e,t,o)=>{const l=o(785);e.exports={settingsController:l}}},t={};function o(l){var n=t[l];if(void 0!==n)return n.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,o),r.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(5)})();