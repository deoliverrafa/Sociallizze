(()=>{var e={238:(e,t,l)=>{"use strict";l.r(t),l.d(t,{userId:()=>a,userLoggedIn:()=>o});var n=l(534);let s=0;const o=localStorage.getItem("userLoggedIn"),a=localStorage.getItem("userId");document.addEventListener("DOMContentLoaded",(()=>{"true"==o&&null==localStorage.getItem("userId")&&localStorage.setItem("userLoggedIn","false"),"true"!==o?(0,n.showLoginMenu)():(0,n.closeLoginMenu)()})),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),l=t.get("email"),s=t.get("password");fetch(`https://sociallizze-api.up.railway.app/api/login?email=${l}&password=${s}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.error?(n.containers[2].style.display="flex",n.containers[2].querySelector(".text-error").innerHTML=e.error):(localStorage.setItem("userEmail",e.email),localStorage.setItem("userName",e.nickName),localStorage.setItem("userId",e._id),localStorage.setItem("userLoggedIn","true"),(0,n.closeLoginMenu)(),n.modals[3].style.display="flex",n.textSuccess[0].innerHTML="Conta logada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),n.checkboxs[0].addEventListener("change",(()=>{n.checkboxs[0].checked?n.inputs[1].type="text":n.inputs[1].type="password"})),n.checkboxs[1].addEventListener("change",(()=>{n.checkboxs[1].checked?n.inputs[6].type="text":n.inputs[6].type="password"})),n.linksRegister[1].addEventListener("click",(()=>{(0,n.closeRegisterMenu)(),(0,n.showLoginMenu)(),s=0})),n.linksRegister[0].addEventListener("click",(()=>{(0,n.closeLoginMenu)(),(0,n.showRegisterMenu)()})),n.buttonsSelect[1].addEventListener("click",(()=>{s--,(0,n.previousButton)(s)})),n.buttonsSelect[0].addEventListener("click",(()=>{s++,(0,n.nextButton)(s)})),0==s&&(n.buttonsSelect[1].style.display="none",n.buttonsSubmit[1].style.display="none",n.inputs[4].style.display="none",n.inputs[5].style.display="none",n.inputs[6].style.display="none",n.textsCheckbox[1].style.display="none",n.containers[5].style.display="none",n.containers[6].style.display="none",n.containers[7].style.display="none",n.containers[8].style.display="none")},652:(e,t,l)=>{"use strict";l.r(t);var n=l(534);let s=localStorage.getItem("userId"),o=localStorage.getItem("userLoggedIn");const a=document.querySelectorAll(".logo.rotate");n.containers[13].style.display="flex",n.containers[14].style.display="none",a[0].style.animation="rotate .3s infinite linear",document.addEventListener("DOMContentLoaded",(async()=>{if(1==await async function(){let e;return e="null"!=s&&"false"!=o,e}()){const e=await async function(e,t){const l=`https://sociallizze-api.up.railway.app/api/searchById?id=${e}&fields=nickName`;try{const e=await fetch(l,{method:"GET",headers:{"Content-Type":"application/json"}});return e.ok?await e.json():(console.log("Erro ao pegar dados do usuário"),null)}catch(e){return console.log("Erro ao pegar userData",e),null}}(s);e&&(n.textNick[0].innerHTML=`@${e.nickName}`);const t=await async function(e){if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}(s);if("image/png"==t.type||"image/jpeg"==t.type){const e=URL.createObjectURL(t);n.imageProfile[0].src=e}else n.imageProfile[0].src="public/assets/images/user/user.png";n.containers[13].style.display="none",n.containers[14].style.display="flex"}}))},67:(e,t,l)=>{"use strict";l.r(t);var n=l(534);let s="BR";const o=document.querySelector(".date"),a=n.inputs[2],r=n.inputs[3],i=n.inputs[4],c=n.inputs[5],d=n.inputs[6];let u;const y=localStorage.getItem("userLoggedIn");if(document.addEventListener("DOMContentLoaded",(()=>{"true"!==y&&void 0===u?(0,n.showLoginMenu)():(0,n.closeLoginMenu)()})),n.buttons[1].addEventListener("click",(e=>{e.preventDefault();let t={nickName:a.value,userName:r.value,phoneNumber:i.value,email:c.value,password:d.value,birthDayData:o.value,nacionality:s,type:"default"};console.log(t),fetch("https://sociallizze-api.up.railway.app/api/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(e.ok||(console.error("Erro na solicitação: "+e.status),res.status(e.status).json({error:"Erro na solicitação"})),e.json()))).then((e=>{e.error?(n.containers[2].style.display="flex",n.textError[1].innerHTML=e.error):(u=e._id,localStorage.setItem("userLoggedIn","true"),localStorage.setItem("userId",u),(0,n.closeRegisterMenu)(),n.modals[3].style.display="flex",n.textSuccess[0].innerHTML="Conta Registrada com sucesso!!!",setTimeout((()=>{window.location.href="./index.html"}),1500))}))})),n.iconsClose[2].addEventListener("click",(()=>{n.modals[3].style.animation="closeOpacityModal .3s ease-in-out forwards",n.cards[2].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{n.modals[3].style.display="none"}),300)})),n.dates[0]){const e=new Date;e.setFullYear(e.getFullYear()-14);const t=new Date;t.setFullYear(t.getFullYear()-100);const l=new Date(e);l.setDate(e.getDate());const s=new Date(t);s.setDate(t.getDate());const o=l.toISOString().split("T")[0],a=s.toISOString().split("T")[0];n.dates[0].setAttribute("max",o),n.dates[0].setAttribute("min",a),n.dates[0].addEventListener("input",(function(){n.dates[0].value}))}let p=/(\d{2})(\d{5})(\d{4})/,m="($1) $2-$3",g="13";n.selects[0].addEventListener("change",(function(){switch(s=this.value?this.value:"BR",s){case"BR":p=/(\d{2})(\d{5})(\d{4})/,m="($1) $2-$3",g="13";break;case"USA":p=/(\d{3})(\d{3})(\d{4})/,m="($1) $2-$3",g="13"}})),i.addEventListener("input",(function(){!function(){if(p){let e=i.value.replace(p,m);i.value=e,i.setAttribute("maxlength",g)}}()})),r.addEventListener("input",(function(){!function(){let e=r.value.split(" ");for(let t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);let t=e.join(" ");r.value=t}()}))},81:(e,t,l)=>{const n=l(652),s=l(238),o=l(67);e.exports={profileController:n,loginController:s,registerController:o}},534:(e,t,l)=>{"use strict";l.d(t,{buttons:()=>p,buttonsSelect:()=>y,buttonsSubmit:()=>m,cards:()=>o,checkboxs:()=>c,closeLoginMenu:()=>q,closeRegisterMenu:()=>A,containers:()=>a,dates:()=>x,iconsClose:()=>n,imageProfile:()=>S,inputs:()=>i,linksRegister:()=>u,modals:()=>s,nextButton:()=>w,previousButton:()=>L,selects:()=>h,showLoginMenu:()=>b,showRegisterMenu:()=>v,textError:()=>r,textNick:()=>f,textSuccess:()=>g,textsCheckbox:()=>d}),document.querySelector("body"),document.querySelector("p");const n=document.querySelectorAll(".icon-close"),s=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),o=(document.querySelectorAll(".left-bar"),document.querySelectorAll(".card")),a=document.querySelectorAll(".container"),r=document.querySelectorAll(".text-error"),i=document.querySelectorAll(".input"),c=document.querySelectorAll(".checkbox"),d=document.querySelectorAll(".text-checkbox"),u=(document.querySelectorAll(".text"),document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister")),y=document.querySelectorAll(".buttonSelect"),p=document.querySelectorAll(".button"),m=document.querySelectorAll(".buttonSubmit"),g=document.querySelectorAll(".text-success"),f=(document.querySelectorAll(".modal.success"),document.querySelectorAll(".item"),document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),S=(document.querySelectorAll(".name"),document.querySelectorAll(".text.bio"),document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout"),document.querySelectorAll(".image.profile")),x=(document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date")),h=(document.querySelectorAll(".edit"),document.querySelectorAll(".select"));document.querySelectorAll(".text.nationality"),document.querySelectorAll(".text.birthday"),document.querySelectorAll(".text.number"),document.querySelectorAll(".text.email");let b=()=>{s[0].style.display="flex",s[0].style.animation="opacityModal .3s ease-in-out forwards",o[0].style.animation="smoothUpCard .5s ease-in-out forwards"},v=()=>{s[1].style.display="flex",s[1].style.animation="opacityModal .3s ease-in-out forwards",o[1].style.animation="smoothUpCard .5s ease-in-out forwards"},q=()=>{o[0].style.animation="closeSmoothUpCard .5s ease-in-out forwards",s[0].style.animation="closeOpacityModal .3s ease-in-out forwards",setTimeout((()=>{s[0].style.display="none"}),300)},A=()=>{s[1].style.animation="closeOpacityModal .3s ease-in-out forwards",o[1].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{s[1].style.display="none"}),300)},w=e=>{1==e&&(y[1].style.display="flex",y[1].style.justifyContent="center",y[1].style.alignItems="center",d[1].style.display="none",a[2].style.display="none",a[3].style.display="none",a[4].style.display="none",a[5].style.display="none",a[6].style.display="none",a[7].style.display="none",a[8].style.display="flex",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none"),2==e&&(y[1].style.display="flex",y[1].style.justifyContent="center",y[1].style.alignItems="center",y[0].style.display="none",m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",d[1].style.display="flex",a[2].style.display="none",a[3].style.display="none",a[4].style.display="none",a[5].style.display="flex",a[6].style.display="flex",a[7].style.display="flex",a[8].style.display="none",i[4].style.display="flex",i[5].style.display="flex",i[6].style.display="flex")},L=e=>{0==e&&(y[1].style.display="none",m[1].style.display="none",d[1].style.display="none",a[3].style.display="flex",a[4].style.display="flex",a[5].style.display="none",a[6].style.display="none",a[7].style.display="none",a[8].style.display="none",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none"),1==e&&(y[0].style.display="flex",y[0].style.justifyContent="center",y[0].style.alignItems="center",y[1].style.display="flex",y[1].style.justifyContent="center",y[1].style.alignItems="center",m[1].style.display="none",m[1].style.justifyContent="center",m[1].style.alignItems="center",d[1].style.display="none",a[2].style.display="none",a[3].style.display="none",a[4].style.display="none",a[5].style.display="none",a[6].style.display="none",a[7].style.display="none",a[8].style.display="flex",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none")}}},t={};function l(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,l),o.exports}l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(81)})();