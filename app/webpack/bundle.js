(()=>{var e={734:(e,t,l)=>{"use strict";l.r(t);var o=l(534);let n=!1;o.e3[0].addEventListener("click",(async()=>{n||(n=!0,o.qk[5].style.display="flex",o.qk[2].style.animation="closeOpacityModal .3s ease-in-out forwards",o.PH[0].style.animation="closeSmoothSideBar .5s ease-in-out forwards",o._u[6].style.animation="none",o._u[7].style.animation="none",o._u[11].style.animation="none",setTimeout((()=>{o.qk[2].style.display="none"}),300))})),o.XP[5].addEventListener("click",(()=>{n&&(o.qk[5].style.animation="closeOpacityModal .3s ease-in-out forwards",o._u[4].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{o.qk[5].style.display="none",o.qk[2].style.display="none",o._u[4].style.animation="smoothUpCard .5s ease-in-out forwards",o.qk[5].style.animation="opacityModal .3s ease-in-out forwards",n=!1}),300))})),o._u[8].style.animation="none",o._u[9].style.animation="none",o._u[10].style.animation="none",o.e3[11].addEventListener("click",(async()=>{o.qk[6].style.display="flex",o.qk[5].style.display="none"})),o.XP[6].addEventListener("click",(()=>{o.qk[6].style.display="none",n=!1})),console.log("Modais: ",o.qk),console.log("Cards: ",o._u),console.log("Iten: ",o.e3),console.log("Icones-X: ",o.XP),console.log("Icones: ",o.ci),console.log("Container: ",o.cJ),console.log("Header: ",o.A)},238:(e,t,l)=>{"use strict";l.r(t),l.d(t,{getUserData:()=>r,userId:()=>a,userLoggedIn:()=>s});var o=l(534);let n=0;const s=localStorage.getItem("userLoggedIn"),a=localStorage.getItem("userId");function r(){return fetch(`http://localhost:3000/api/searchById?id=${a}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e?e.json():(console.log("Erro ao pegar dados do usuário"),null))).then((e=>e)).catch((e=>(console.log("Erro ao pegar userData",e),null)))}document.addEventListener("DOMContentLoaded",(()=>{"true"==s&&null==localStorage.getItem("userId")&&localStorage.setItem("userLoggedIn","false"),"true"!==s?(0,o.LS)():(0,o.uO)()})),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),l=t.get("email"),n=t.get("password");fetch(`http://localhost:3000/api/usuarios?email=${l}&password=${n}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.error?(o.cJ[0].style.display="flex",o.cJ[0].querySelector(".text-error").innerHTML=e.error):(localStorage.setItem("userEmail",e.email),localStorage.setItem("userName",e.nickName),localStorage.setItem("userId",e._id),localStorage.setItem("userLoggedIn","true"),(0,o.uO)(),o.qk[3].style.display="flex",o.Up[0].innerHTML="Conta logada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),o.n[0].addEventListener("change",(()=>{o.n[0].checked?o.FU[1].type="text":o.FU[1].type="password"})),o.n[1].addEventListener("change",(()=>{o.n[1].checked?o.FU[6].type="text":o.FU[6].type="password"})),o.XP[0].addEventListener("click",(()=>{(0,o.uO)()})),o.XP[1].addEventListener("click",(()=>{(0,o.A$)()})),o.Mh[1].addEventListener("click",(()=>{(0,o.A$)(),(0,o.LS)(),n=0})),o.Mh[0].addEventListener("click",(()=>{(0,o.uO)(),(0,o.xU)()})),o.HC[1].addEventListener("click",(()=>{n--,(0,o.TF)(n)})),o.HC[0].addEventListener("click",(()=>{n++,(0,o.F2)(n)})),0==n&&(o.HC[1].style.display="none",o.S1[1].style.display="none",o.FU[4].style.display="none",o.FU[5].style.display="none",o.FU[6].style.display="none",o.IY[1].style.display="none",o.cJ[1].style.display="none")},599:(e,t,l)=>{"use strict";l.r(t);var o=l(534),n=l(238);let s;console.log("Image profile --\x3e",o.tz),document.addEventListener("DOMContentLoaded",(async()=>{if(1==await async function(){let e;return e=null!=n.userId&&"false"!=n.userLoggedIn,e}()){if(s=await(0,n.getUserData)(),s){o.LM[0].innerHTML=s.nickName,o.LM[1].innerHTML=s.nickName;let e=o.No[0].innerText=s.bio,t=!1;const l=22;if(e.length>l){const n=e.slice(0,l);o.No[0].innerText=n,o.yX[0].addEventListener("click",(()=>{t?(o.No[0].innerText=n,o.yX[0].innerText="MAIS"):(o.No[0].innerText=e,o.yX[0].innerText="MENOS"),t=!t}))}o.m2[0].style.display="none",o.cJ[3].style.display="flex",o.m2[1].style.display="none",o.cJ[11].style.display="flex",o.m2[2].style.display="none",o.cJ[17].style.display="flex",o.m2[3].style.display="none",o.cJ[25].style.display="flex"}const e=await async function(){const e=localStorage.getItem("userId");if(!e)return null;try{const t=await fetch(`http://localhost:3000/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}();if(e){const t=URL.createObjectURL(e);o.tz[0].src=t,o.tz[2].src=t,o.tz[4].src=t}}})),o.SV[0].addEventListener("click",(async()=>{!async function(){localStorage.setItem("userLoggedIn","false"),localStorage.setItem("userId","null")}(),window.location.href="index.html"})),document.getElementById("avatarForm").addEventListener("submit",(async e=>{e.preventDefault();const t=new FormData;t.append("avatar",document.getElementById("avatarInput").files[0]);const l=localStorage.getItem("userId");await fetch(`http://localhost:3000/api/updateAvatar?userId=${l}`,{method:"PUT",body:t}).then((e=>(e.ok||alert("Erro ao atualizar a imagem de perfil"),e.json()))).then((e=>{e.error?(alert("Erro ao pegar dados"),console.log(e.error)):alert("Foto de perfil atualizada com sucesso")})).catch((e=>{alert(e.message),console.log(e.error)}))}))},67:(e,t,l)=>{"use strict";l.r(t);var o=l(534);const n=document.querySelector(".date"),s=o.FU[2],a=o.FU[3],r=o.FU[4],i=o.FU[5],d=o.FU[6];let c;const y=localStorage.getItem("userLoggedIn");document.addEventListener("DOMContentLoaded",(()=>{"true"!==y&&void 0===c?(0,o.LS)():(0,o.uO)()})),o.ZY[1].addEventListener("click",(e=>{e.preventDefault();let t={nickName:s.value,userName:a.value,phoneNumber:r.value,email:i.value,password:d.value,birthDayData:n.value,type:"default"};fetch("http://localhost:3000/api/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(e.ok,e.json()))).then((e=>{e.error?(o.cJ[2].style.display="flex",o.Mn[1].innerHTML=e.error):(c=e._id,localStorage.setItem("userLoggedIn","true"),localStorage.setItem("userId",c),(0,o.A$)(),o.qk[3].style.display="flex",o.Up[0].innerHTML="Conta Registrada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),o.XP[3].addEventListener("click",(()=>{o.qk[3].style.animation="closeOpacityModal .3s ease-in-out forwards",o._u[2].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{o.qk[3].style.display="none"}),300)}))},427:(e,t,l)=>{const o=l(238),n=l(67),s=l(599),a=l(734);e.exports={profileController:s,loginController:o,registerController:n,editPerfilContoller:a}},534:(e,t,l)=>{"use strict";l.d(t,{A:()=>w,A$:()=>T,F2:()=>U,FU:()=>c,HC:()=>m,IY:()=>u,LM:()=>x,LS:()=>A,Mh:()=>p,Mn:()=>d,No:()=>I,PH:()=>a,S1:()=>g,SV:()=>v,TF:()=>M,Up:()=>S,XP:()=>o,ZY:()=>f,_u:()=>r,cJ:()=>i,ci:()=>n,e3:()=>h,m2:()=>k,n:()=>y,qk:()=>s,tz:()=>q,uO:()=>E,xU:()=>C,yX:()=>L});const o=document.querySelectorAll(".icon-close"),n=document.querySelectorAll(".icon"),s=document.querySelectorAll(".modal"),a=document.querySelectorAll(".left-bar"),r=document.querySelectorAll(".card"),i=document.querySelectorAll(".container"),d=document.querySelectorAll(".text-error"),c=document.querySelectorAll(".input"),y=document.querySelectorAll(".checkbox"),u=document.querySelectorAll(".text-checkbox"),p=(document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister")),m=document.querySelectorAll(".buttonSelect"),f=document.querySelectorAll(".button"),g=document.querySelectorAll(".buttonSubmit"),S=document.querySelectorAll(".text-success"),h=document.querySelectorAll(".item"),x=(document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),I=document.querySelectorAll(".bio"),L=document.querySelectorAll(".more"),v=document.querySelectorAll(".button.logout"),q=document.querySelectorAll(".image.profile"),k=(document.querySelectorAll(".fab"),document.querySelectorAll(".load")),w=document.querySelectorAll(".header");let A=()=>{s[0].style.display="flex",s[0].style.animation="opacityModal .3s ease-in-out forwards",r[0].style.animation="smoothUpCard .5s ease-in-out forwards"},C=()=>{s[1].style.display="flex",s[1].style.animation="opacityModal .3s ease-in-out forwards",r[1].style.animation="smoothUpCard .5s ease-in-out forwards"},E=()=>{r[0].style.animation="closeSmoothUpCard .5s ease-in-out forwards",s[0].style.animation="closeOpacityModal .3s ease-in-out forwards",setTimeout((()=>{s[0].style.display="none"}),300)},T=()=>{s[1].style.animation="closeOpacityModal .3s ease-in-out forwards",r[1].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{s[1].style.display="none"}),300)},U=e=>{1==e&&(m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",c[2].style.display="none",c[3].style.display="none",c[4].style.display="flex",c[5].style.display="flex",c[6].style.display="flex",u[1].style.display="flex",i[1].style.display="none"),2==e&&(m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",m[0].style.display="none",g[1].style.display="flex",g[1].style.justifyContent="center",g[1].style.alignItems="center",c[2].style.display="none",c[3].style.display="none",c[4].style.display="none",c[5].style.display="none",c[6].style.display="none",u[1].style.display="none",i[1].style.display="flex",i[1].style.flexDirection="column",i[1].style.justifyContent="center",i[1].style.alignItems="center")},M=e=>{0==e&&(m[1].style.display="none",g[1].style.display="none",c[2].style.display="flex",c[3].style.display="flex",c[4].style.display="none",c[5].style.display="none",c[6].style.display="none",u[1].style.display="none",i[1].style.display="none"),1==e&&(m[0].style.display="flex",m[0].style.justifyContent="center",m[0].style.alignItems="center",m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",g[1].style.display="none",g[1].style.justifyContent="center",g[1].style.alignItems="center",c[2].style.display="none",c[3].style.display="none",c[4].style.display="flex",c[5].style.display="flex",c[6].style.display="flex",u[1].style.display="flex",i[1].style.display="none")}}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,l),s.exports}l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(427)})();