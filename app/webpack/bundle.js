(()=>{var e={238:(e,t,l)=>{"use strict";l.r(t),l.d(t,{getUserData:()=>d,userEmail:()=>i,userId:()=>a,userName:()=>r});var o=l(534);let s=0;const n=localStorage.getItem("userLoggedIn"),a=localStorage.getItem("userId"),r=localStorage.getItem("userName"),i=localStorage.getItem("userEmail");function d(){return fetch(`http://localhost:3000/api/searchById?id=${localStorage.getItem("userId")}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e?e.json():(console.log("Erro ao pegar dados do usuário"),null))).then((e=>e)).catch((e=>(console.log("Erro ao pegar userData",e),null)))}document.addEventListener("DOMContentLoaded",(()=>{"true"==n&&null==localStorage.getItem("userId")&&localStorage.setItem("userLoggedIn","false"),"true"!==n?(0,o.LS)():(0,o.uO)()})),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),l=t.get("email"),s=t.get("password");fetch(`http://localhost:3000/api/usuarios?email=${l}&password=${s}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.error?(o.cJ[0].style.display="flex",o.cJ[0].querySelector(".text-error").innerHTML=e.error):(localStorage.setItem("userEmail",e.email),localStorage.setItem("userName",e.nickName),localStorage.setItem("userId",e._id),localStorage.setItem("userLoggedIn","true"),(0,o.uO)(),o.qk[3].style.display="flex",o.Up[0].innerHTML="Conta logada com sucesso!!!")}))})),o.n[0].addEventListener("change",(()=>{o.n[0].checked?o.FU[1].type="text":o.FU[1].type="password"})),o.n[1].addEventListener("change",(()=>{o.n[1].checked?o.FU[6].type="text":o.FU[6].type="password"})),o.XP[0].addEventListener("click",(()=>{(0,o.uO)()})),o.XP[1].addEventListener("click",(()=>{(0,o.A$)()})),o.Mh[1].addEventListener("click",(()=>{(0,o.A$)(),(0,o.LS)(),s=0})),o.Mh[0].addEventListener("click",(()=>{(0,o.uO)(),(0,o.xU)()})),o.HC[1].addEventListener("click",(()=>{s--,(0,o.TF)(s)})),o.HC[0].addEventListener("click",(()=>{s++,(0,o.F2)(s)})),0==s&&(o.HC[1].style.display="none",o.S1[1].style.display="none",o.FU[4].style.display="none",o.FU[5].style.display="none",o.FU[6].style.display="none",o.IY[1].style.display="none",o.cJ[1].style.display="none")},599:(e,t,l)=>{"use strict";l.r(t);var o=l(534),s=l(238);console.log(o.e3),o.e3[0].addEventListener("click",(async()=>{})),iconsClose[5].addEventListener("click",(()=>{})),buttonLogOut[0].addEventListener("click",(async()=>{await async function(){try{return await(0,s.getUserData)()}catch(e){console.log("Erro ao carregar dados: ",e)}}(),window.location.href="index.html"})),document.getElementById("avatarForm").addEventListener("submit",(async e=>{e.preventDefault();const t=new FormData;t.append("avatar",document.getElementById("avatarInput").files[0]);const l=localStorage.getItem("userId");await fetch(`http://localhost:3000/api/updateAvatar?userId=${l}`,{method:"PUT",body:t}).then((e=>(e.ok||alert("Erro ao atualizar usuário"),e.json()))).then((e=>{e.error&&console.log(e.error),alert("Foto de perfil atualizada com sucesso",e)})).catch((e=>{alert(e.message),console.log(e.error)}))}))},67:(e,t,l)=>{"use strict";l.r(t);var o=l(534);const s=document.querySelector(".date"),n=o.FU[2],a=o.FU[3],r=o.FU[4],i=o.FU[5],d=o.FU[6];let c;const y=localStorage.getItem("userLoggedIn");document.addEventListener("DOMContentLoaded",(()=>{"true"!==y&&void 0===c?(0,o.LS)():(0,o.uO)()})),o.ZY[1].addEventListener("click",(e=>{e.preventDefault();let t={nickName:n.value,userName:a.value,phoneNumber:r.value,email:i.value,password:d.value,birthDayData:s.value,type:"default"};fetch("http://localhost:3000/api/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(e.ok,e.json()))).then((e=>{e.error?(o.cJ[2].style.display="flex",o.Mn[1].innerHTML=e.error):(c=e._id,localStorage.setItem("userLoggedIn","true"),localStorage.setItem("userId",c),(0,o.A$)(),o.qk[3].style.display="flex",o.Up[0].innerHTML="Conta Registrada com sucesso!!!")}))})),o.XP[3].addEventListener("click",(()=>{o.qk[3].style.animation="closeOpacityModal .3s ease-in-out forwards",o._u[2].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{o.qk[3].style.display="none"}),300)}))},427:(e,t,l)=>{const o=l(238),s=l(67),n=l(599);e.exports={profileController:n,loginController:o,registerController:s}},534:(e,t,l)=>{"use strict";l.d(t,{A$:()=>I,F2:()=>x,FU:()=>i,HC:()=>u,IY:()=>c,LS:()=>S,Mh:()=>y,Mn:()=>r,S1:()=>m,TF:()=>L,Up:()=>g,XP:()=>o,ZY:()=>p,_u:()=>n,cJ:()=>a,e3:()=>f,n:()=>d,qk:()=>s,uO:()=>v,xU:()=>h});const o=document.querySelectorAll(".icon-close"),s=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),n=(document.querySelectorAll(".left-bar"),document.querySelectorAll(".card")),a=document.querySelectorAll(".container"),r=document.querySelectorAll(".text-error"),i=document.querySelectorAll(".input"),d=document.querySelectorAll(".checkbox"),c=document.querySelectorAll(".text-checkbox"),y=(document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister")),u=document.querySelectorAll(".buttonSelect"),p=document.querySelectorAll(".button"),m=document.querySelectorAll(".buttonSubmit"),g=document.querySelectorAll(".text-success"),f=document.querySelectorAll(".item");document.querySelectorAll(".logo"),document.querySelectorAll(".nick"),document.querySelectorAll(".bio"),document.querySelectorAll(".more"),document.querySelectorAll(".button.logout"),document.querySelectorAll(".image.profile");let S=()=>{s[0].style.display="flex",s[0].style.animation="opacityModal .3s ease-in-out forwards",n[0].style.animation="smoothUpCard .5s ease-in-out forwards"},h=()=>{s[1].style.display="flex",s[1].style.animation="opacityModal .3s ease-in-out forwards",n[1].style.animation="smoothUpCard .5s ease-in-out forwards"},v=()=>{n[0].style.animation="closeSmoothUpCard .5s ease-in-out forwards",s[0].style.animation="closeOpacityModal .3s ease-in-out forwards",setTimeout((()=>{s[0].style.display="none"}),300)},I=()=>{s[1].style.animation="closeOpacityModal .3s ease-in-out forwards",n[1].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{s[1].style.display="none"}),300)},x=e=>{1==e&&(u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="flex",i[5].style.display="flex",i[6].style.display="flex",c[1].style.display="flex",a[1].style.display="none"),2==e&&(u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",u[0].style.display="none",m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none",c[1].style.display="none",a[1].style.display="flex",a[1].style.flexDirection="column",a[1].style.justifyContent="center",a[1].style.alignItems="center")},L=e=>{0==e&&(u[1].style.display="none",m[1].style.display="none",i[2].style.display="flex",i[3].style.display="flex",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none",c[1].style.display="none",a[1].style.display="none"),1==e&&(u[0].style.display="flex",u[0].style.justifyContent="center",u[0].style.alignItems="center",u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",m[1].style.display="none",m[1].style.justifyContent="center",m[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="flex",i[5].style.display="flex",i[6].style.display="flex",c[1].style.display="flex",a[1].style.display="none")}}},t={};function l(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,l),n.exports}l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(427)})();