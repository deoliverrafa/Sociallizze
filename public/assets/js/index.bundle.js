(()=>{var e={238:(e,t,l)=>{"use strict";l.r(t),l.d(t,{getUserData:()=>r,userId:()=>a,userLoggedIn:()=>s});var o=l(534);let n=0;const s=localStorage.getItem("userLoggedIn"),a=localStorage.getItem("userId");async function r(){return await fetch(`https://sociallizze-api.up.railway.app/api/searchById?id=${a}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e?e.json():(console.log("Erro ao pegar dados do usuário"),null))).then((e=>e)).catch((e=>(console.log("Erro ao pegar userData",e),null)))}document.addEventListener("DOMContentLoaded",(()=>{"true"==s&&null==localStorage.getItem("userId")&&localStorage.setItem("userLoggedIn","false"),"true"!==s?(0,o.LS)():(0,o.uO)()})),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),l=t.get("email"),n=t.get("password");fetch(`https://sociallizze-api.up.railway.app/api/usuarios?email=${l}&password=${n}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.error?(o.cJ[0].style.display="flex",o.cJ[0].querySelector(".text-error").innerHTML=e.error):(localStorage.setItem("userEmail",e.email),localStorage.setItem("userName",e.nickName),localStorage.setItem("userId",e._id),localStorage.setItem("userLoggedIn","true"),(0,o.uO)(),o.qk[3].style.display="flex",o.Up[0].innerHTML="Conta logada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),o.n[0].addEventListener("change",(()=>{o.n[0].checked?o.FU[1].type="text":o.FU[1].type="password"})),o.n[1].addEventListener("change",(()=>{o.n[1].checked?o.FU[6].type="text":o.FU[6].type="password"})),o.Mh[1].addEventListener("click",(()=>{(0,o.A$)(),(0,o.LS)(),n=0})),o.Mh[0].addEventListener("click",(()=>{(0,o.uO)(),(0,o.xU)()})),o.HC[1].addEventListener("click",(()=>{n--,(0,o.TF)(n)})),o.HC[0].addEventListener("click",(()=>{n++,(0,o.F2)(n)})),0==n&&(o.HC[1].style.display="none",o.S1[1].style.display="none",o.FU[4].style.display="none",o.FU[5].style.display="none",o.FU[6].style.display="none",o.IY[1].style.display="none",o.cJ[1].style.display="none")},599:(e,t,l)=>{"use strict";l.r(t),l.d(t,{getUserData:()=>n.getUserData,getUserImage:()=>i,logOut:()=>a,verifyUserLogged:()=>r});var o=l(534),n=l(238);let s=null;async function a(){localStorage.setItem("userLoggedIn","false"),localStorage.setItem("userId","null")}async function r(){let e;return e=null!=n.userId&&"false"!=n.userLoggedIn,e}async function i(){const e=localStorage.getItem("userId");if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}document.addEventListener("DOMContentLoaded",(async()=>{if(1==await r()){s=await(0,n.getUserData)(),s&&(o.LM[0].innerHTML=s.nickName);const e=await i();if(e){const t=URL.createObjectURL(e);o.tz[0].src=t,o.tz[1].src=t}}else window.location.href="index.html"})),"profile.html"==window.location.href&&o.SV[0].addEventListener("click",(async()=>{a(),window.location.href="index.html"}))},67:(e,t,l)=>{"use strict";l.r(t);var o=l(534);const n=document.querySelector(".date"),s=o.FU[2],a=o.FU[3],r=o.FU[4],i=o.FU[5],c=o.FU[6];let d;const y=localStorage.getItem("userLoggedIn");document.addEventListener("DOMContentLoaded",(()=>{"true"!==y&&void 0===d?(0,o.LS)():(0,o.uO)()})),o.ZY[1].addEventListener("click",(e=>{e.preventDefault();let t={nickName:s.value,userName:a.value,phoneNumber:r.value,email:i.value,password:c.value,birthDayData:n.value,type:"default"};fetch("https://sociallizze-api.up.railway.app/api/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(e.ok,e.json()))).then((e=>{e.error?(o.cJ[2].style.display="flex",o.Mn[1].innerHTML=e.error):(d=e._id,localStorage.setItem("userLoggedIn","true"),localStorage.setItem("userId",d),(0,o.A$)(),o.qk[3].style.display="flex",o.Up[0].innerHTML="Conta Registrada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),o.XP[3].addEventListener("click",(()=>{o.qk[3].style.animation="closeOpacityModal .3s ease-in-out forwards",o._u[2].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{o.qk[3].style.display="none"}),300)}))},81:(e,t,l)=>{const o=l(238),n=l(67),s=l(599);e.exports={profileController:s,loginController:o,registerController:n}},534:(e,t,l)=>{"use strict";l.d(t,{A$:()=>w,F2:()=>q,FU:()=>i,HC:()=>u,IY:()=>d,LM:()=>g,LS:()=>I,Mh:()=>y,Mn:()=>r,S1:()=>m,SV:()=>S,TF:()=>v,Up:()=>f,XP:()=>o,ZY:()=>p,_u:()=>s,cJ:()=>a,n:()=>c,qk:()=>n,tz:()=>h,uO:()=>L,xU:()=>x});const o=document.querySelectorAll(".icon-close"),n=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),s=(document.querySelectorAll(".left-bar"),document.querySelectorAll(".card")),a=document.querySelectorAll(".container"),r=document.querySelectorAll(".text-error"),i=document.querySelectorAll(".input"),c=document.querySelectorAll(".checkbox"),d=document.querySelectorAll(".text-checkbox"),y=(document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister")),u=document.querySelectorAll(".buttonSelect"),p=document.querySelectorAll(".button"),m=document.querySelectorAll(".buttonSubmit"),f=document.querySelectorAll(".text-success"),g=(document.querySelectorAll(".item"),document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),S=(document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout")),h=document.querySelectorAll(".image.profile");document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save");let I=()=>{n[0].style.display="flex",n[0].style.animation="opacityModal .3s ease-in-out forwards",s[0].style.animation="smoothUpCard .5s ease-in-out forwards"},x=()=>{n[1].style.display="flex",n[1].style.animation="opacityModal .3s ease-in-out forwards",s[1].style.animation="smoothUpCard .5s ease-in-out forwards"},L=()=>{s[0].style.animation="closeSmoothUpCard .5s ease-in-out forwards",n[0].style.animation="closeOpacityModal .3s ease-in-out forwards",setTimeout((()=>{n[0].style.display="none"}),300)},w=()=>{n[1].style.animation="closeOpacityModal .3s ease-in-out forwards",s[1].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{n[1].style.display="none"}),300)},q=e=>{1==e&&(u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="flex",i[5].style.display="flex",i[6].style.display="flex",d[1].style.display="flex",a[1].style.display="none"),2==e&&(u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",u[0].style.display="none",m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none",d[1].style.display="none",a[1].style.display="flex",a[1].style.flexDirection="column",a[1].style.justifyContent="center",a[1].style.alignItems="center")},v=e=>{0==e&&(u[1].style.display="none",m[1].style.display="none",i[2].style.display="flex",i[3].style.display="flex",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none",d[1].style.display="none",a[1].style.display="none"),1==e&&(u[0].style.display="flex",u[0].style.justifyContent="center",u[0].style.alignItems="center",u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",m[1].style.display="none",m[1].style.justifyContent="center",m[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="flex",i[5].style.display="flex",i[6].style.display="flex",d[1].style.display="flex",a[1].style.display="none")}}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,l),s.exports}l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(81)})();