(()=>{var e={238:(e,t,l)=>{"use strict";l.r(t),l.d(t,{userId:()=>a,userLoggedIn:()=>s});var n=l(534);let o=0;const s=localStorage.getItem("userLoggedIn"),a=localStorage.getItem("userId");document.addEventListener("DOMContentLoaded",(()=>{"true"==s&&null==localStorage.getItem("userId")&&localStorage.setItem("userLoggedIn","false"),"true"!==s?(0,n.LS)():(0,n.uO)()})),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),l=t.get("email"),o=t.get("password");fetch(`https://sociallizze-api.up.railway.app/api/usuarios?email=${l}&password=${o}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.error?(n.cJ[0].style.display="flex",n.cJ[0].querySelector(".text-error").innerHTML=e.error):(localStorage.setItem("userEmail",e.email),localStorage.setItem("userName",e.nickName),localStorage.setItem("userId",e._id),localStorage.setItem("userLoggedIn","true"),(0,n.uO)(),n.qk[3].style.display="flex",n.Up[0].innerHTML="Conta logada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),n.n[0].addEventListener("change",(()=>{n.n[0].checked?n.FU[1].type="text":n.FU[1].type="password"})),n.n[1].addEventListener("change",(()=>{n.n[1].checked?n.FU[6].type="text":n.FU[6].type="password"})),n.Mh[1].addEventListener("click",(()=>{(0,n.A$)(),(0,n.LS)(),o=0})),n.Mh[0].addEventListener("click",(()=>{(0,n.uO)(),(0,n.xU)()})),n.HC[1].addEventListener("click",(()=>{o--,(0,n.TF)(o)})),n.HC[0].addEventListener("click",(()=>{o++,(0,n.F2)(o)})),0==o&&(n.HC[1].style.display="none",n.S1[1].style.display="none",n.FU[4].style.display="none",n.FU[5].style.display="none",n.FU[6].style.display="none",n.IY[1].style.display="none",n.cJ[1].style.display="none")},652:(e,t,l)=>{"use strict";l.r(t);var n=l(534);let o=localStorage.getItem("userId"),s=localStorage.getItem("userLoggedIn"),a=null;document.addEventListener("DOMContentLoaded",(async()=>{if(1==await async function(){let e;return e=null!=localStorage.getItem("userId")&&"false"!=s,e}()){a=await async function(){return await fetch(`https://sociallizze-api.up.railway.app/api/searchById?id=${o}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e?e.json():(console.log("Erro ao pegar dados do usuário"),null))).then((e=>e)).catch((e=>(console.log("Erro ao pegar userData",e),null)))}(),a&&(n.LM[0].innerHTML=a.nickName);const e=await async function(){const e=localStorage.getItem("userId");if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}();if("image/png"==e.type){const t=URL.createObjectURL(e);n.tz[0].src=t,n.tz[1].src=t}else n.tz[0].src="public/assets/images/user/user.png",n.tz[1].src="public/assets/images/user/user.png"}else window.location.href="index.html"}))},67:(e,t,l)=>{"use strict";l.r(t);var n=l(534);const o=document.querySelector(".date"),s=n.FU[2],a=n.FU[3],r=n.FU[4],i=n.FU[5],c=n.FU[6];let d;r.addEventListener("input",(function(){!function(){let e=r.value.replace(/(\d{2})(\d{5})(\d{4})/,"($1) $2-$3");r.value=e}()})),a.addEventListener("input",(function(){!function(){let e=a.value.split(" ");for(let t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);let t=e.join(" ");a.value=t}()}));const y=localStorage.getItem("userLoggedIn");document.addEventListener("DOMContentLoaded",(()=>{"true"!==y&&void 0===d?(0,n.LS)():(0,n.uO)()})),n.ZY[1].addEventListener("click",(e=>{e.preventDefault();let t={nickName:s.value,userName:a.value,phoneNumber:r.value,email:i.value,password:c.value,birthDayData:o.value,type:"default"};fetch("https://sociallizze-api.up.railway.app/api/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(e.ok,e.json()))).then((e=>{e.error?(n.cJ[2].style.display="flex",n.Mn[1].innerHTML=e.error):(d=e._id,localStorage.setItem("userLoggedIn","true"),localStorage.setItem("userId",d),(0,n.A$)(),n.qk[3].style.display="flex",n.Up[0].innerHTML="Conta Registrada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),n.XP[3].addEventListener("click",(()=>{n.qk[3].style.animation="closeOpacityModal .3s ease-in-out forwards",n._u[2].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{n.qk[3].style.display="none"}),300)}))},81:(e,t,l)=>{const n=l(238),o=l(67),s=l(652);e.exports={profileController:s,loginController:n,registerController:o}},534:(e,t,l)=>{"use strict";l.d(t,{A$:()=>v,F2:()=>L,FU:()=>i,HC:()=>u,IY:()=>d,LM:()=>g,LS:()=>h,Mh:()=>y,Mn:()=>r,S1:()=>m,TF:()=>q,Up:()=>f,XP:()=>n,ZY:()=>p,_u:()=>s,cJ:()=>a,n:()=>c,qk:()=>o,tz:()=>S,uO:()=>x,xU:()=>I});const n=document.querySelectorAll(".icon-close"),o=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),s=(document.querySelectorAll(".left-bar"),document.querySelectorAll(".card")),a=document.querySelectorAll(".container"),r=document.querySelectorAll(".text-error"),i=document.querySelectorAll(".input"),c=document.querySelectorAll(".checkbox"),d=document.querySelectorAll(".text-checkbox"),y=(document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister")),u=document.querySelectorAll(".buttonSelect"),p=document.querySelectorAll(".button"),m=document.querySelectorAll(".buttonSubmit"),f=document.querySelectorAll(".text-success"),g=(document.querySelectorAll(".item"),document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),S=(document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout"),document.querySelectorAll(".image.profile"));document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save");let h=()=>{o[0].style.display="flex",o[0].style.animation="opacityModal .3s ease-in-out forwards",s[0].style.animation="smoothUpCard .5s ease-in-out forwards"},I=()=>{o[1].style.display="flex",o[1].style.animation="opacityModal .3s ease-in-out forwards",s[1].style.animation="smoothUpCard .5s ease-in-out forwards"},x=()=>{s[0].style.animation="closeSmoothUpCard .5s ease-in-out forwards",o[0].style.animation="closeOpacityModal .3s ease-in-out forwards",setTimeout((()=>{o[0].style.display="none"}),300)},v=()=>{o[1].style.animation="closeOpacityModal .3s ease-in-out forwards",s[1].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{o[1].style.display="none"}),300)},L=e=>{1==e&&(u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="flex",i[5].style.display="flex",i[6].style.display="flex",d[1].style.display="flex",a[1].style.display="none"),2==e&&(u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",u[0].style.display="none",m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none",d[1].style.display="none",a[1].style.display="flex",a[1].style.flexDirection="column",a[1].style.justifyContent="center",a[1].style.alignItems="center")},q=e=>{0==e&&(u[1].style.display="none",m[1].style.display="none",i[2].style.display="flex",i[3].style.display="flex",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none",d[1].style.display="none",a[1].style.display="none"),1==e&&(u[0].style.display="flex",u[0].style.justifyContent="center",u[0].style.alignItems="center",u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",m[1].style.display="none",m[1].style.justifyContent="center",m[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="flex",i[5].style.display="flex",i[6].style.display="flex",d[1].style.display="flex",a[1].style.display="none")}}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,l),s.exports}l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(81)})();