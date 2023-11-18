(()=>{var e={851:(e,t,l)=>{"use strict";l.r(t);var o=l(534),a=l(972);let r,n;const s=document.getElementById("avatarInput");s.addEventListener("change",(async()=>{if(r=s.files[0],r){const e=new FileReader;e.onload=function(e){o.imageProfile[0].src=e.target.result},e.readAsDataURL(r);const t=localStorage.getItem("userId"),l=new FormData;l.append("avatar",r),l.append("userId",t);try{const e=await fetch("https://sociallizze-api.up.railway.app/api/attProfilePhoto",{method:"PUT",body:l}),t=await e.json();t||alert(t.error)}catch(e){console.error(e),alert("Erro na solicitação")}}}));const i=document.querySelector("body");o.edits[0].addEventListener("click",(()=>{o.modals[0].style.display="flex",i.style.overflowY="hidden",window.scrollTo(0,0)})),o.iconsClose[1].addEventListener("click",(()=>{o.modals[0].style.display="none",i.style.overflowY="auto"})),o.inputs[0].addEventListener("input",(()=>{n=o.inputs[0].value})),o.buttons[5].addEventListener("click",(async()=>{try{const e=await fetch("https://sociallizze-api.up.railway.app/api/updateBio",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({bioData:n,localUserId:a.localUserId})}),t=await e.json();t?window.location.reload():alert(t.error)}catch(e){console.error(e),alert("Erro na solicitação")}}))},432:(e,t,l)=>{"use strict";l.r(t);var o=l(534),a=l(972);const r=document.querySelectorAll(".card.post"),n=document.querySelectorAll(".card.photo"),s=document.querySelectorAll(".card.video"),i=document.querySelectorAll(".card.bio"),c=document.querySelectorAll(".container.bio"),d=document.querySelectorAll(".container.no-bio"),u=document.querySelectorAll(".profile"),y=document.querySelectorAll(".logo.rotate");document.addEventListener("DOMContentLoaded",(async()=>{const e=document.getElementById("loader");if(u[1].style.display="none",y[0].style.animation="rotate .3s infinite linear",e.style.display="flex",1==await(0,a.verifyUserLogged)()){const t=await(0,a.getUserData)(a.localUserId,"userName,nickName,phoneNumber,birthDayData,email,nacionality,bio,_id,Nfollowers,Nfollowing");a.localUserId==t._id&&(o.buttons[0].style.display="none",o.buttons[1].style.display="none",o.buttons[2].style.display="none",o.buttons[3].style.display="none"),t?(o.textName[0].innerHTML=t.userName,o.textNick[0].innerHTML=`@${t.nickName}`,o.textNumber[0].innerHTML=t.phoneNumber,o.textBirthDayData[0].innerHTML=t.birthDayData,o.textEmail[0].innerHTML=t.email,o.textNacionality[0].innerHTML=t.nacionality,o.texts[5].innerHTML=t.Nfollowers,o.texts[7].innerHTML=t.Nfollowing,t.bio?(d[0].style.display="none",o.textBio[0].innerHTML=t.bio):(c[1].style.display="none",d[0].style.display="flex")):o.textNick[0].innerHTML="Usuario";const l=await(0,a.getUserImage)(a.localUserId);if("image/png"==l.type||"image/jpeg"==l.type){const e=URL.createObjectURL(l);o.imageProfile[0].src=e}else o.imageProfile[0].src="../../public/assets/images/user/user.png";return e.style.display="none",u[1].style.display="flex",!0}window.location.href="../../index.html"})),o.buttonLogOut[0].addEventListener("click",(()=>{(0,a.logOut)(),window.location.href="../../index.html"})),o.itens[0].addEventListener("click",(()=>{o.itens[1].classList.remove("active"),o.itens[2].classList.remove("active"),o.itens[3].classList.remove("active"),o.itens[0].classList.add("active"),n[0].classList.add("container-disable"),s[0].classList.add("container-disable"),i[0].classList.add("container-disable"),r[0].classList.remove("container-disable")})),o.itens[1].addEventListener("click",(()=>{o.itens[0].classList.remove("active"),o.itens[2].classList.remove("active"),o.itens[3].classList.remove("active"),o.itens[1].classList.add("active"),r[0].classList.add("container-disable"),s[0].classList.add("container-disable"),i[0].classList.add("container-disable"),n[0].classList.remove("container-disable")})),o.itens[2].addEventListener("click",(()=>{o.itens[0].classList.remove("active"),o.itens[1].classList.remove("active"),o.itens[3].classList.remove("active"),o.itens[2].classList.add("active"),r[0].classList.add("container-disable"),n[0].classList.add("container-disable"),i[0].classList.add("container-disable"),s[0].classList.remove("container-disable")})),o.itens[3].addEventListener("click",(()=>{o.itens[0].classList.remove("active"),o.itens[1].classList.remove("active"),o.itens[2].classList.remove("active"),o.itens[3].classList.add("active"),r[0].classList.add("container-disable"),n[0].classList.add("container-disable"),s[0].classList.add("container-disable"),i[0].classList.remove("container-disable")}))},972:(e,t,l)=>{"use strict";l.d(t,{getUserData:()=>i,getUserImage:()=>n,localUserId:()=>o,logOut:()=>s,verifyUserLogged:()=>r});let o=localStorage.getItem("userId"),a=localStorage.getItem("userLoggedIn");async function r(){let e;return e=null!=localStorage.getItem("userId")&&"false"!=a,e}async function n(e){if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}async function s(){localStorage.setItem("userLoggedIn","false"),localStorage.setItem("userId","null")}async function i(e,t){const l=`https://sociallizze-api.up.railway.app/api/searchById?id=${e}&fields=${t}`;try{const e=await fetch(l,{method:"GET",headers:{"Content-Type":"application/json"}});return e.ok?await e.json():(console.log("Erro ao pegar dados do usuário"),null)}catch(e){return console.log("Erro ao pegar userData",e),null}}},925:(e,t,l)=>{const o=l(432),a=l(851);e.exports={showProfileController:o,editProfileController:a}},534:(e,t,l)=>{"use strict";l.d(t,{buttonLogOut:()=>y,buttons:()=>s,edits:()=>p,iconsClose:()=>o,imageProfile:()=>m,inputs:()=>r,itens:()=>i,modals:()=>a,textBio:()=>u,textBirthDayData:()=>g,textEmail:()=>S,textNacionality:()=>b,textName:()=>d,textNick:()=>c,textNumber:()=>L,texts:()=>n}),document.querySelector("body"),document.querySelector("p");const o=document.querySelectorAll(".icon-close"),a=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),r=(document.querySelectorAll(".left-bar"),document.querySelectorAll(".card"),document.querySelectorAll(".container"),document.querySelectorAll(".text-error"),document.querySelectorAll(".input")),n=(document.querySelectorAll(".checkbox"),document.querySelectorAll(".text-checkbox"),document.querySelectorAll(".text")),s=(document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister"),document.querySelectorAll(".buttonSelect"),document.querySelectorAll(".button")),i=(document.querySelectorAll(".buttonSubmit"),document.querySelectorAll(".text-success"),document.querySelectorAll(".item")),c=(document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),d=document.querySelectorAll(".name"),u=document.querySelectorAll(".text.bio"),y=(document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout")),m=document.querySelectorAll(".image.profile"),p=(document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date"),document.querySelectorAll(".edit")),b=(document.querySelectorAll(".select"),document.querySelectorAll(".text.nationality")),g=document.querySelectorAll(".text.birthday"),L=document.querySelectorAll(".text.number"),S=document.querySelectorAll(".text.email")}},t={};function l(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,l),r.exports}l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(925)})();