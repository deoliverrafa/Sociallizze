(()=>{var e={279:(e,t,l)=>{"use strict";l.r(t),document.querySelectorAll(".icon-close"),document.querySelectorAll(".icon"),document.querySelectorAll(".modal"),document.querySelectorAll(".left-bar"),document.querySelectorAll(".card"),document.querySelectorAll(".container"),document.querySelectorAll(".text-error"),document.querySelectorAll(".input"),document.querySelectorAll(".checkbox"),document.querySelectorAll(".text-checkbox"),document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister"),document.querySelectorAll(".buttonSelect"),document.querySelectorAll(".button"),document.querySelectorAll(".buttonSubmit"),document.querySelectorAll(".text-success");const c=document.querySelectorAll(".item"),o=(document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),a=(document.querySelectorAll(".name"),document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout")),s=document.querySelectorAll(".image.profile");document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date"),document.querySelectorAll(".select");let r=localStorage.getItem("userId"),n=localStorage.getItem("userLoggedIn");async function i(){let e;return e=null!=localStorage.getItem("userId")&&"false"!=n,e}let d=null;document.addEventListener("DOMContentLoaded",(async()=>{if(1==await i()){d=await async function(){return await fetch(`https://sociallizze-api.up.railway.app/api/searchById?id=${r}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e?e.json():(console.log("Erro ao pegar dados do usuário"),null))).then((e=>e)).catch((e=>(console.log("Erro ao pegar userData",e),null)))}(),d&&(o[0].innerHTML=`@${d.nickName}`);const e=await async function(){const e=localStorage.getItem("userId");if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}();if("image/png"==e.type){const t=URL.createObjectURL(e);s[0].src=t}else s[0].src="public/assets/images/user/user.png",s[1].src="public/assets/images/user/user.png"}}));const u=document.querySelectorAll(".card.post"),m=document.querySelectorAll(".card.photo"),y=document.querySelectorAll(".card.video"),L=document.querySelectorAll(".card.bio");c[0].addEventListener("click",(()=>{c[1].classList.remove("active"),c[2].classList.remove("active"),c[3].classList.remove("active"),c[0].classList.add("active"),m[0].classList.add("container-disable"),y[0].classList.add("container-disable"),L[0].classList.add("container-disable"),u[0].classList.remove("container-disable")})),c[1].addEventListener("click",(()=>{c[0].classList.remove("active"),c[2].classList.remove("active"),c[3].classList.remove("active"),c[1].classList.add("active"),u[0].classList.add("container-disable"),y[0].classList.add("container-disable"),L[0].classList.add("container-disable"),m[0].classList.remove("container-disable")})),c[2].addEventListener("click",(()=>{c[0].classList.remove("active"),c[1].classList.remove("active"),c[3].classList.remove("active"),c[2].classList.add("active"),u[0].classList.add("container-disable"),m[0].classList.add("container-disable"),L[0].classList.add("container-disable"),y[0].classList.remove("container-disable")})),c[3].addEventListener("click",(()=>{c[0].classList.remove("active"),c[1].classList.remove("active"),c[2].classList.remove("active"),c[3].classList.add("active"),u[0].classList.add("container-disable"),m[0].classList.add("container-disable"),y[0].classList.add("container-disable"),L[0].classList.remove("container-disable")})),document.addEventListener("DOMContentLoaded",(async()=>{if(1==await i())if(o[0].innerHTML=d?`@${d.nickName}`:"Usuario","image/png"==image.type){const e=URL.createObjectURL(image);s[0].src=e}else s[0].src="../../public/assets/images/user/user.png";else window.location.href="../../index.html"})),a[0].addEventListener("click",(()=>{!async function(){localStorage.setItem("userLoggedIn","false"),localStorage.setItem("userId","null")}(),window.location.href="../../index.html"}))},925:(e,t,l)=>{const c=l(279);e.exports={showProfileController:c}}},t={};function l(c){var o=t[c];if(void 0!==o)return o.exports;var a=t[c]={exports:{}};return e[c](a,a.exports,l),a.exports}l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(925)})();