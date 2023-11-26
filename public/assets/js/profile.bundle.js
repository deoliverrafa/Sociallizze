(()=>{var e={851:(e,t,o)=>{"use strict";o.r(t);var l=o(534),a=o(972);let n,r;const s=document.getElementById("avatarInput");s.addEventListener("change",(async()=>{if(n=s.files[0],n){const e=new FileReader;e.onload=function(e){l.imageProfile[0].src=e.target.result},e.readAsDataURL(n);const t=localStorage.getItem("userId"),o=new FormData;o.append("avatar",n),o.append("userId",t);try{const e=await fetch("https://sociallizze-api.up.railway.app/api/attProfilePhoto",{method:"PUT",body:o}),t=await e.json();t||alert(t.error)}catch(e){console.error(e),alert("Erro na solicitação")}}}));const i=document.querySelector("body");l.edits[0].addEventListener("click",(()=>{l.modals[0].style.display="flex",i.style.overflowY="hidden",window.scrollTo(0,0)})),l.iconsClose[1].addEventListener("click",(()=>{l.modals[0].style.display="none",i.style.overflowY="auto"})),l.inputs[0].addEventListener("input",(()=>{r=l.inputs[0].value})),l.buttons[5].addEventListener("click",(async()=>{try{const e=await fetch("https://sociallizze-api.up.railway.app/api/updateBio",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({bioData:r,localUserId:a.localUserId})}),t=await e.json();t?window.location.reload():alert(t.error)}catch(e){console.error(e),alert("Erro na solicitação")}}))},432:(e,t,o)=>{"use strict";o.r(t);var l=o(534),a=o(972);const n=document.querySelectorAll(".card.post"),r=document.querySelectorAll(".card.photo"),s=document.querySelectorAll(".card.video"),i=document.querySelectorAll(".card.bio"),c=document.querySelectorAll(".container.bio"),d=document.querySelectorAll(".container.no-bio"),u=document.querySelectorAll(".profile"),y=document.querySelectorAll(".logo.rotate");document.addEventListener("DOMContentLoaded",(async()=>{const e=document.getElementById("loader");if(u[1].style.display="none",y[0].style.animation="rotate .3s infinite linear",e.style.display="flex",1==await(0,a.verifyUserLogged)()){const t=await(0,a.getUserData)(a.localUserId,"userName,nickName,phoneNumber,birthDayData,email,nacionality,bio,_id,Nfollowers,Nfollowing,showEmail,showBirthDayData,showNacionality,showPhoneNumber");a.localUserId==t._id&&(l.buttons[0].style.display="none",l.buttons[1].style.display="none",l.buttons[2].style.display="none",l.buttons[3].style.display="none"),t?(l.textName[0].innerHTML=t.userName,l.textNick[0].innerHTML=`@${t.nickName}`,l.texts[5].innerHTML=t.Nfollowers,l.texts[7].innerHTML=t.Nfollowing,!0===t.showNacionality?l.textNacionality[0].innerHTML=t.nacionality:l.containers[15].style.display="none",!0===t.showBirthDayData?l.textBirthDayData[0].innerHTML=t.birthDayData:l.containers[16].style.display="none",!0===t.showPhoneNumber?l.textNumber[0].innerHTML=t.phoneNumber:l.containers[17].style.display="none",!0===t.showEmail?l.textEmail[0].innerHTML=t.email:l.containers[18].style.display="none",t.showBirthDayData||t.showEmail||t.showNacionality||t.showPhoneNumber||(l.containers[13].style.display="none"),t.bio?(d[0].style.display="none",l.textBio[0].innerHTML=t.bio):(c[1].style.display="none",d[0].style.display="flex")):window.location.href="../../index.html";const o=await(0,a.getUserImage)(a.localUserId);if("image/png"==o.type||"image/jpeg"==o.type){const e=URL.createObjectURL(o);l.imageProfile[0].src=e}return e.style.display="none",u[1].style.display="flex",!0}window.location.href="../../index.html"})),l.buttonLogOut[0].addEventListener("click",(()=>{(0,a.logOut)(),window.location.href="../../index.html"})),l.itens[0].addEventListener("click",(()=>{l.itens[1].classList.remove("active"),l.itens[2].classList.remove("active"),l.itens[3].classList.remove("active"),l.itens[0].classList.add("active"),r[0].classList.add("container-disable"),s[0].classList.add("container-disable"),i[0].classList.add("container-disable"),n[0].classList.remove("container-disable")})),l.itens[1].addEventListener("click",(()=>{l.itens[0].classList.remove("active"),l.itens[2].classList.remove("active"),l.itens[3].classList.remove("active"),l.itens[1].classList.add("active"),n[0].classList.add("container-disable"),s[0].classList.add("container-disable"),i[0].classList.add("container-disable"),r[0].classList.remove("container-disable")})),l.itens[2].addEventListener("click",(()=>{l.itens[0].classList.remove("active"),l.itens[1].classList.remove("active"),l.itens[3].classList.remove("active"),l.itens[2].classList.add("active"),n[0].classList.add("container-disable"),r[0].classList.add("container-disable"),i[0].classList.add("container-disable"),s[0].classList.remove("container-disable")})),l.itens[3].addEventListener("click",(()=>{l.itens[0].classList.remove("active"),l.itens[1].classList.remove("active"),l.itens[2].classList.remove("active"),l.itens[3].classList.add("active"),n[0].classList.add("container-disable"),r[0].classList.add("container-disable"),s[0].classList.add("container-disable"),i[0].classList.remove("container-disable")}))},972:(e,t,o)=>{"use strict";o.d(t,{getUserData:()=>i,getUserImage:()=>r,localUserId:()=>l,logOut:()=>s,verifyUserLogged:()=>n});let l=localStorage.getItem("userId"),a=localStorage.getItem("userLoggedIn");async function n(){let e;return e="null"!=l&&"false"!=a,e}async function r(e){if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}async function s(){localStorage.setItem("userLoggedIn","false"),localStorage.setItem("userId","null")}async function i(e,t){const o=`https://sociallizze-api.up.railway.app/api/searchById?id=${e}&fields=${t}`;try{const e=await fetch(o,{method:"GET",headers:{"Content-Type":"application/json"}});return e.ok?await e.json():(console.log("Erro ao pegar dados do usuário"),null)}catch(e){return console.log("Erro ao pegar userData",e),null}}},925:(e,t,o)=>{const l=o(432),a=o(851);e.exports={showProfileController:l,editProfileController:a}},534:(e,t,o)=>{"use strict";o.d(t,{buttonLogOut:()=>m,buttons:()=>i,containers:()=>n,edits:()=>b,iconsClose:()=>l,imageProfile:()=>p,inputs:()=>r,itens:()=>c,modals:()=>a,textBio:()=>y,textBirthDayData:()=>S,textEmail:()=>h,textNacionality:()=>L,textName:()=>u,textNick:()=>d,textNumber:()=>v,texts:()=>s}),document.querySelector("body"),document.querySelector("p");const l=document.querySelectorAll(".icon-close"),a=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),n=(document.querySelectorAll(".left-bar"),document.querySelectorAll(".card"),document.querySelectorAll(".container")),r=(document.querySelectorAll(".text-error"),document.querySelectorAll(".input")),s=(document.querySelectorAll(".checkbox"),document.querySelectorAll(".text-checkbox"),document.querySelectorAll(".text")),i=(document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister"),document.querySelectorAll(".buttonSelect"),document.querySelectorAll(".button")),c=(document.querySelectorAll(".buttonSubmit"),document.querySelectorAll(".text-success"),document.querySelectorAll(".modal.success"),document.querySelectorAll(".item")),d=(document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),u=document.querySelectorAll(".name"),y=document.querySelectorAll(".text.bio"),m=(document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout")),p=document.querySelectorAll(".image.profile"),b=(document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date"),document.querySelectorAll(".edit")),L=(document.querySelectorAll(".select"),document.querySelectorAll(".text.nationality")),S=document.querySelectorAll(".text.birthday"),v=document.querySelectorAll(".text.number"),h=document.querySelectorAll(".text.email")}},t={};function o(l){var a=t[l];if(void 0!==a)return a.exports;var n=t[l]={exports:{}};return e[l](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(925)})();