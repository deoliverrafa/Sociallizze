(()=>{var e={238:(e,t,l)=>{"use strict";l.r(t),l.d(t,{getUserData:()=>y,userEmail:()=>i,userId:()=>a,userName:()=>r});var s=l(534);let o=0;const n=localStorage.getItem("userLoggedIn"),a=localStorage.getItem("userId"),r=localStorage.getItem("userName"),i=localStorage.getItem("userEmail");function y(){return fetch(`http://localhost:3000/api/searchById?id=${localStorage.getItem("userId")}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e?e.json():(console.log("Erro ao pegar dados do usuário"),null))).then((e=>e)).catch((e=>(console.log("Erro ao pegar userData",e),null)))}document.addEventListener("DOMContentLoaded",(()=>{"true"!==n&&"undefined"==typeof id?(0,s.LS)():(0,s.uO)()})),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),l=t.get("email"),o=t.get("password");fetch(`http://localhost:3000/api/usuarios?email=${l}&password=${o}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.error?(s.cJ[0].style.display="flex",s.cJ[0].querySelector(".text-error").innerHTML=e.error):(localStorage.setItem("userEmail",e.email),localStorage.setItem("userName",e.nickName),localStorage.setItem("userId",e._id),localStorage.setItem("userLoggedIn","true"),(0,s.uO)(),s.qk[3].style.display="flex",s.Up[0].innerHTML="Conta logada com sucesso!!!")}))})),s.n[0].addEventListener("change",(()=>{s.n[0].checked?s.FU[1].type="text":s.FU[1].type="password"})),s.n[1].addEventListener("change",(()=>{s.n[1].checked?s.FU[6].type="text":s.FU[6].type="password"})),s.XP[0].addEventListener("click",(()=>{(0,s.uO)()})),s.XP[1].addEventListener("click",(()=>{(0,s.A$)()})),s.Mh[1].addEventListener("click",(()=>{(0,s.A$)(),(0,s.LS)(),o=0})),s.Mh[0].addEventListener("click",(()=>{(0,s.uO)(),(0,s.xU)()})),s.HC[1].addEventListener("click",(()=>{o--,(0,s.TF)(o)})),s.HC[0].addEventListener("click",(()=>{o++,(0,s.F2)(o)})),0==o&&(s.HC[1].style.display="none",s.S1[1].style.display="none",s.FU[4].style.display="none",s.FU[5].style.display="none",s.FU[6].style.display="none",s.IY[1].style.display="none",s.cJ[1].style.display="none")},67:(e,t,l)=>{"use strict";l.r(t);var s=l(534);const o=document.querySelector(".date"),n=s.FU[2],a=s.FU[3],r=s.FU[4],i=s.FU[5],y=s.FU[6];let d;const c=localStorage.getItem("userLoggedIn");document.addEventListener("DOMContentLoaded",(()=>{"true"!==c&&void 0===d?(0,s.LS)():(0,s.uO)()})),s.ZY[1].addEventListener("click",(e=>{e.preventDefault();let t={nickName:n.value,userName:a.value,phoneNumber:r.value,email:i.value,password:y.value,birthDayData:o.value,type:"default"};fetch("http://localhost:3000/api/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(e.ok,e.json()))).then((e=>{e.error?(s.cJ[2].style.display="flex",s.Mn[1].innerHTML=e.error):(d=e._id,localStorage.setItem("userLoggedIn","true"),localStorage.setItem("userId",d),(0,s.A$)(),s.qk[3].style.display="flex",s.Up[0].innerHTML="Conta Registrada com sucesso!!!")}))})),s.XP[3].addEventListener("click",(()=>{s.qk[3].style.animation="closeOpacityModal .3s ease-in-out forwards",s._u[2].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{s.qk[3].style.display="none"}),300)}))},427:(e,t,l)=>{const s=l(238),o=l(67),n=l(20);e.exports={profileController:n,loginController:s,registerController:o}},20:(e,t,l)=>{"use strict";l.r(t);var s=l(238),o=l(534);let n=!1;o.e3[0].addEventListener("click",(async()=>{const e=await async function(){try{return await(0,s.getUserData)()}catch(e){console.log("Erro ao carregar dados: ",e)}}();n||(o.qk[5].style.display="flex",o.qk[2].style.animation="closeOpacityModal .3s ease-in-out forwards",o.PH[0].style.animation="closeSmoothSideBar .5s ease-in-out forwards",o.IH[0].innerHTML=e.email,o.LM[0].innerHTML=e.nickName,setTimeout((()=>{o.qk[2].style.display="none"}),300),n=!0)})),o.XP[5].addEventListener("click",(()=>{n&&(o._u[4].style.animation="closeSmoothUpCard .5s ease-in-out forwards",o.qk[5].style.animation="closeOpacityModal .3s ease-in-out forwards",setTimeout((()=>{o.qk[5].style.display="none",o._u[4].style.animation="none",o.qk[5].style.animation="none",n=!1}),300))}))},534:(e,t,l)=>{"use strict";l.d(t,{A$:()=>L,F2:()=>k,FU:()=>y,HC:()=>p,IH:()=>x,IY:()=>c,LM:()=>h,LS:()=>q,Mh:()=>u,Mn:()=>i,PH:()=>n,S1:()=>f,TF:()=>C,Up:()=>g,XP:()=>s,ZY:()=>m,_u:()=>a,cJ:()=>r,e3:()=>S,n:()=>d,qk:()=>o,uO:()=>I,xU:()=>v});const s=document.querySelectorAll(".icon-close"),o=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),n=document.querySelectorAll(".left-bar"),a=document.querySelectorAll(".card"),r=document.querySelectorAll(".container"),i=document.querySelectorAll(".text-error"),y=document.querySelectorAll(".input"),d=document.querySelectorAll(".checkbox"),c=document.querySelectorAll(".text-checkbox"),u=(document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister")),p=document.querySelectorAll(".buttonSelect"),m=document.querySelectorAll(".button"),f=document.querySelectorAll(".buttonSubmit"),g=document.querySelectorAll(".text-success"),S=document.querySelectorAll(".item"),h=(document.querySelectorAll(".logo"),document.querySelectorAll(".text.nick")),x=document.querySelectorAll(".text.email");let q=()=>{o[0].style.display="flex",o[0].style.animation="opacityModal .3s ease-in-out forwards",a[0].style.animation="smoothUpCard .5s ease-in-out forwards"},v=()=>{o[1].style.display="flex",o[1].style.animation="opacityModal .3s ease-in-out forwards",a[1].style.animation="smoothUpCard .5s ease-in-out forwards"},I=()=>{a[0].style.animation="closeSmoothUpCard .5s ease-in-out forwards",o[0].style.animation="closeOpacityModal .3s ease-in-out forwards",setTimeout((()=>{o[0].style.display="none"}),300)},L=()=>{o[1].style.animation="closeOpacityModal .3s ease-in-out forwards",a[1].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{o[1].style.display="none"}),300)},k=e=>{1==e&&(p[1].style.display="flex",p[1].style.justifyContent="center",p[1].style.alignItems="center",y[2].style.display="none",y[3].style.display="none",y[4].style.display="flex",y[5].style.display="flex",y[6].style.display="flex",c[1].style.display="flex",r[1].style.display="none"),2==e&&(p[1].style.display="flex",p[1].style.justifyContent="center",p[1].style.alignItems="center",p[0].style.display="none",f[1].style.display="flex",f[1].style.justifyContent="center",f[1].style.alignItems="center",y[2].style.display="none",y[3].style.display="none",y[4].style.display="none",y[5].style.display="none",y[6].style.display="none",c[1].style.display="none",r[1].style.display="flex",r[1].style.flexDirection="column",r[1].style.justifyContent="center",r[1].style.alignItems="center")},C=e=>{0==e&&(p[1].style.display="none",f[1].style.display="none",y[2].style.display="flex",y[3].style.display="flex",y[4].style.display="none",y[5].style.display="none",y[6].style.display="none",c[1].style.display="none",r[1].style.display="none"),1==e&&(p[0].style.display="flex",p[0].style.justifyContent="center",p[0].style.alignItems="center",p[1].style.display="flex",p[1].style.justifyContent="center",p[1].style.alignItems="center",f[1].style.display="none",f[1].style.justifyContent="center",f[1].style.alignItems="center",y[2].style.display="none",y[3].style.display="none",y[4].style.display="flex",y[5].style.display="flex",y[6].style.display="flex",c[1].style.display="flex",r[1].style.display="none")}}},t={};function l(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,l),n.exports}l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(427)})();