(()=>{var e={851:(e,t,o)=>{"use strict";o.r(t);var l=o(534),n=o(972);let a,s;const r=document.getElementById("avatarInput");r.addEventListener("change",(async()=>{if(a=r.files[0],a){const e=new FileReader;e.onload=function(e){l.imageProfile[0].src=e.target.result},e.readAsDataURL(a);const t=localStorage.getItem("userId"),o=new FormData;o.append("avatar",a),o.append("userId",t);try{const e=await fetch("http://localhost:3000/api/attProfilePhoto",{method:"PUT",body:o}),t=await e.json();t||alert(t.error)}catch(e){console.error(e),alert("Erro na solicitação")}}}));const i=document.querySelector("body");l.edits[0].addEventListener("click",(()=>{l.modals[0].style.display="flex",i.style.overflowY="hidden",window.scrollTo(0,0)})),l.iconsClose[1].addEventListener("click",(()=>{l.modals[0].style.display="none",i.style.overflowY="auto"})),l.inputs[0].addEventListener("input",(()=>{s=l.inputs[0].value})),l.buttons[5].addEventListener("click",(async()=>{try{const e=await fetch("http://localhost:3000/api/updateBio",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({bioData:s,localUserId:n.localUserId})}),t=await e.json();t?window.location.reload():alert(t.error)}catch(e){console.error(e),alert("Erro na solicitação")}}))},432:(e,t,o)=>{"use strict";o.r(t);var l=o(534),n=o(972);const a=document.querySelectorAll(".card.post"),s=document.querySelectorAll(".card.photo"),r=document.querySelectorAll(".card.video"),i=document.querySelectorAll(".card.bio"),c=document.querySelectorAll(".container.bio"),d=document.querySelectorAll(".container.no-bio"),u=document.querySelectorAll(".profile"),y=document.querySelectorAll(".logo.rotate");document.addEventListener("DOMContentLoaded",(async()=>{const e=document.getElementById("loader");if(u[1].style.display="none",y[0].style.animation="rotate .3s infinite linear",e.style.display="flex",1==await(0,n.verifyUserLogged)()){const t=await(0,n.getUserData)(n.localUserId,"userName,nickName,phoneNumber,birthDayData,email,nacionality,bio,_id,Nfollowers,Nfollowing,showEmail,showBirthDayData,showNacionality,showPhoneNumber");console.log(t),n.localUserId==t._id&&(l.buttons[0].style.display="none",l.buttons[1].style.display="none",l.buttons[2].style.display="none",l.buttons[3].style.display="none"),t?(l.textName[0].innerHTML=t.userName,l.textNick[0].innerHTML=`@${t.nickName}`,l.texts[5].innerHTML=t.Nfollowers,l.texts[7].innerHTML=t.Nfollowing,!0===t.showEmail?l.textEmail[0].innerHTML=t.email:l.containers[18].style.display="none",!0===t.showPhoneNumber?l.textNumber[0].innerHTML=t.phoneNumber:l.containers[16].style.display="none",!0===t.showNacionality?l.textNacionality[0].innerHTML=t.nacionality:l.containers[15].style.display="none",!0===t.showBirthDayData?l.textBirthDayData[0].innerHTML=t.birthDayData:l.containers[17].style.display="none",t.showBirthDayData||t.showEmail||t.showNacionality||t.showPhoneNumber||(l.containers[13].style.display="none"),t.bio?(d[0].style.display="none",l.textBio[0].innerHTML=t.bio):(c[1].style.display="none",d[0].style.display="flex")):window.location.href="../../index.html";const o=await(0,n.getUserImage)(n.localUserId);if("image/png"==o.type||"image/jpeg"==o.type){const e=URL.createObjectURL(o);l.imageProfile[0].src=e}else l.imageProfile[0].src="../../public/assets/images/user/user.png";return e.style.display="none",u[1].style.display="flex",!0}window.location.href="../../index.html"})),l.buttonLogOut[0].addEventListener("click",(()=>{(0,n.logOut)(),window.location.href="../../index.html"})),l.itens[0].addEventListener("click",(()=>{l.itens[1].classList.remove("active"),l.itens[2].classList.remove("active"),l.itens[3].classList.remove("active"),l.itens[0].classList.add("active"),s[0].classList.add("container-disable"),r[0].classList.add("container-disable"),i[0].classList.add("container-disable"),a[0].classList.remove("container-disable")})),l.itens[1].addEventListener("click",(()=>{l.itens[0].classList.remove("active"),l.itens[2].classList.remove("active"),l.itens[3].classList.remove("active"),l.itens[1].classList.add("active"),a[0].classList.add("container-disable"),r[0].classList.add("container-disable"),i[0].classList.add("container-disable"),s[0].classList.remove("container-disable")})),l.itens[2].addEventListener("click",(()=>{l.itens[0].classList.remove("active"),l.itens[1].classList.remove("active"),l.itens[3].classList.remove("active"),l.itens[2].classList.add("active"),a[0].classList.add("container-disable"),s[0].classList.add("container-disable"),i[0].classList.add("container-disable"),r[0].classList.remove("container-disable")})),l.itens[3].addEventListener("click",(()=>{l.itens[0].classList.remove("active"),l.itens[1].classList.remove("active"),l.itens[2].classList.remove("active"),l.itens[3].classList.add("active"),a[0].classList.add("container-disable"),s[0].classList.add("container-disable"),r[0].classList.add("container-disable"),i[0].classList.remove("container-disable")}))},972:(e,t,o)=>{"use strict";o.d(t,{getUserData:()=>i,getUserImage:()=>s,localUserId:()=>l,logOut:()=>r,verifyUserLogged:()=>a});let l=localStorage.getItem("userId"),n=localStorage.getItem("userLoggedIn");async function a(){let e;return e="null"!=l&&"false"!=n,e}async function s(e){if(!e)return null;try{const t=await fetch(`http://localhost:3000/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}async function r(){localStorage.setItem("userLoggedIn","false"),localStorage.setItem("userId","null")}async function i(e,t){const o=`http://localhost:3000/api/searchById?id=${e}&fields=${t}`;try{const e=await fetch(o,{method:"GET",headers:{"Content-Type":"application/json"}});return e.ok?await e.json():(console.log("Erro ao pegar dados do usuário"),null)}catch(e){return console.log("Erro ao pegar userData",e),null}}},925:(e,t,o)=>{const l=o(432),n=o(851);e.exports={showProfileController:l,editProfileController:n}},534:(e,t,o)=>{"use strict";o.d(t,{buttonLogOut:()=>m,buttons:()=>i,containers:()=>a,edits:()=>b,iconsClose:()=>l,imageProfile:()=>p,inputs:()=>s,itens:()=>c,modals:()=>n,textBio:()=>y,textBirthDayData:()=>g,textEmail:()=>S,textNacionality:()=>h,textName:()=>u,textNick:()=>d,textNumber:()=>L,texts:()=>r}),document.querySelector("body"),document.querySelector("p");const l=document.querySelectorAll(".icon-close"),n=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),a=(document.querySelectorAll(".left-bar"),document.querySelectorAll(".card"),document.querySelectorAll(".container")),s=(document.querySelectorAll(".text-error"),document.querySelectorAll(".input")),r=(document.querySelectorAll(".checkbox"),document.querySelectorAll(".text-checkbox"),document.querySelectorAll(".text")),i=(document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister"),document.querySelectorAll(".buttonSelect"),document.querySelectorAll(".button")),c=(document.querySelectorAll(".buttonSubmit"),document.querySelectorAll(".text-success"),document.querySelectorAll(".modal.success"),document.querySelectorAll(".item")),d=(document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),u=document.querySelectorAll(".name"),y=document.querySelectorAll(".text.bio"),m=(document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout")),p=document.querySelectorAll(".image.profile"),b=(document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date"),document.querySelectorAll(".edit")),h=(document.querySelectorAll(".select"),document.querySelectorAll(".text.nationality")),g=document.querySelectorAll(".text.birthday"),L=document.querySelectorAll(".text.number"),S=document.querySelectorAll(".text.email")}},t={};function o(l){var n=t[l];if(void 0!==n)return n.exports;var a=t[l]={exports:{}};return e[l](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(925)})();