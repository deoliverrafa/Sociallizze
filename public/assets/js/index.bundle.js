(()=>{var e={238:(e,t,l)=>{"use strict";l.r(t),l.d(t,{userId:()=>a,userLoggedIn:()=>s});var n=l(534);let o=0;const s=localStorage.getItem("userLoggedIn"),a=localStorage.getItem("userId");document.addEventListener("DOMContentLoaded",(()=>{"true"==s&&null==localStorage.getItem("userId")&&localStorage.setItem("userLoggedIn","false"),"true"!==s?(0,n.LS)():(0,n.uO)()})),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),l=t.get("email"),o=t.get("password");fetch(`https://sociallizze-api.up.railway.app/api/login?email=${l}&password=${o}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.error?(n.cJ[2].style.display="flex",n.cJ[2].querySelector(".text-error").innerHTML=e.error):(localStorage.setItem("userEmail",e.email),localStorage.setItem("userName",e.nickName),localStorage.setItem("userId",e._id),localStorage.setItem("userLoggedIn","true"),(0,n.uO)(),n.qk[3].style.display="flex",n.Up[0].innerHTML="Conta logada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),n.n[0].addEventListener("change",(()=>{n.n[0].checked?n.FU[1].type="text":n.FU[1].type="password"})),n.n[1].addEventListener("change",(()=>{n.n[1].checked?n.FU[6].type="text":n.FU[6].type="password"})),n.Mh[1].addEventListener("click",(()=>{(0,n.A$)(),(0,n.LS)(),o=0})),n.Mh[0].addEventListener("click",(()=>{(0,n.uO)(),(0,n.xU)()})),n.HC[1].addEventListener("click",(()=>{o--,(0,n.TF)(o)})),n.HC[0].addEventListener("click",(()=>{o++,(0,n.F2)(o)})),0==o&&(n.HC[1].style.display="none",n.S1[1].style.display="none",n.FU[4].style.display="none",n.FU[5].style.display="none",n.FU[6].style.display="none",n.IY[1].style.display="none",n.cJ[5].style.display="none",n.cJ[6].style.display="none",n.cJ[7].style.display="none",n.cJ[8].style.display="none")},652:(e,t,l)=>{"use strict";l.r(t);var n=l(534);let o=localStorage.getItem("userId"),s=localStorage.getItem("userLoggedIn");document.addEventListener("DOMContentLoaded",(async()=>{if(1==await async function(){let e;return e=null!=localStorage.getItem("userId")&&"false"!=s,e}()){const e=await async function(e){return await fetch(`https://sociallizze-api.up.railway.app/api/searchById?id=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e?e.json():(console.log("Erro ao pegar dados do usuário"),null))).then((e=>e)).catch((e=>(console.log("Erro ao pegar userData",e),null)))}(o);e&&(n.LM[0].innerHTML=`@${e.nickName}`);const t=await async function(e){if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}(o);if("image/png"==t.type){const e=URL.createObjectURL(t);n.tz[0].src=e}else n.tz[0].src="public/assets/images/user/user.png"}}))},67:(e,t,l)=>{"use strict";l.r(t);var n=l(534);const o=document.querySelector(".date"),s=n.zG[0],a=n.FU[2],r=n.FU[3],i=n.FU[4],y=n.FU[5],c=n.FU[6];let d;const u=localStorage.getItem("userLoggedIn");if(document.addEventListener("DOMContentLoaded",(()=>{"true"!==u&&void 0===d?(0,n.LS)():(0,n.uO)()})),n.ZY[1].addEventListener("click",(e=>{e.preventDefault();let t={nickName:a.value,userName:r.value,phoneNumber:i.value,email:y.value,password:c.value,birthDayData:o.value,nacionality:s.value,type:"default"};fetch("https://sociallizze-api.up.railway.app/api/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(e.ok||(console.error("Erro na solicitação: "+e.status),res.status(e.status).json({error:"Erro na solicitação"})),e.json()))).then((e=>{e.error?(n.cJ[2].style.display="flex",n.Mn[1].innerHTML=e.error):(d=e._id,localStorage.setItem("userLoggedIn","true"),localStorage.setItem("userId",d),(0,n.A$)(),n.qk[3].style.display="flex",n.Up[0].innerHTML="Conta Registrada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),n.XP[2].addEventListener("click",(()=>{n.qk[3].style.animation="closeOpacityModal .3s ease-in-out forwards",n._u[2].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{n.qk[3].style.display="none"}),300)})),n.pf[0]){const e=new Date;e.setFullYear(e.getFullYear()-14);const t=new Date;t.setFullYear(t.getFullYear()-100);const l=new Date(e);l.setDate(e.getDate());const o=new Date(t);o.setDate(t.getDate());const s=l.toISOString().split("T")[0],a=o.toISOString().split("T")[0];n.pf[0].setAttribute("max",s),n.pf[0].setAttribute("min",a),n.pf[0].addEventListener("input",(function(){n.pf[0].value}))}let p="",m="",f="";n.zG[0].addEventListener("change",(function(){switch(this.value){case"BR":p=/(\d{2})(\d{5})(\d{4})/,m="($1) $2-$3",f="13";break;case"USA":p=/(\d{3})(\d{3})(\d{4})/,m="($1) $2-$3",f="13"}})),i.addEventListener("input",(function(){!function(){if(p){let e=i.value.replace(p,m);i.value=e,i.setAttribute("maxlength",f)}}()})),r.addEventListener("input",(function(){!function(){let e=r.value.split(" ");for(let t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);let t=e.join(" ");r.value=t}()}))},81:(e,t,l)=>{const n=l(238),o=l(67),s=l(652);e.exports={profileController:s,loginController:n,registerController:o}},534:(e,t,l)=>{"use strict";l.d(t,{A$:()=>I,F2:()=>L,FU:()=>i,HC:()=>u,IY:()=>c,LM:()=>g,LS:()=>q,Mh:()=>d,Mn:()=>r,S1:()=>m,TF:()=>w,Up:()=>f,XP:()=>n,ZY:()=>p,_u:()=>s,cJ:()=>a,n:()=>y,pf:()=>h,qk:()=>o,tz:()=>S,uO:()=>v,xU:()=>A,zG:()=>x});const n=document.querySelectorAll(".icon-close"),o=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),s=(document.querySelectorAll(".left-bar"),document.querySelectorAll(".card")),a=document.querySelectorAll(".container"),r=document.querySelectorAll(".text-error"),i=document.querySelectorAll(".input"),y=document.querySelectorAll(".checkbox"),c=document.querySelectorAll(".text-checkbox"),d=(document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister")),u=document.querySelectorAll(".buttonSelect"),p=document.querySelectorAll(".button"),m=document.querySelectorAll(".buttonSubmit"),f=document.querySelectorAll(".text-success"),g=(document.querySelectorAll(".item"),document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),S=(document.querySelectorAll(".name"),document.querySelectorAll(".text.bio"),document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout"),document.querySelectorAll(".image.profile")),h=(document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date")),x=(document.querySelectorAll(".edit"),document.querySelectorAll(".select"));document.querySelectorAll(".text.nationality"),document.querySelectorAll(".text.birthday"),document.querySelectorAll(".text.number"),document.querySelectorAll(".text.email");let q=()=>{o[0].style.display="flex",o[0].style.animation="opacityModal .3s ease-in-out forwards",s[0].style.animation="smoothUpCard .5s ease-in-out forwards"},A=()=>{o[1].style.display="flex",o[1].style.animation="opacityModal .3s ease-in-out forwards",s[1].style.animation="smoothUpCard .5s ease-in-out forwards"},v=()=>{s[0].style.animation="closeSmoothUpCard .5s ease-in-out forwards",o[0].style.animation="closeOpacityModal .3s ease-in-out forwards",setTimeout((()=>{o[0].style.display="none"}),300)},I=()=>{o[1].style.animation="closeOpacityModal .3s ease-in-out forwards",s[1].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{o[1].style.display="none"}),300)},L=e=>{1==e&&(u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",c[1].style.display="none",a[2].style.display="none",a[3].style.display="none",a[4].style.display="none",a[5].style.display="none",a[6].style.display="none",a[7].style.display="none",a[8].style.display="flex",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none"),2==e&&(u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",u[0].style.display="none",m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",c[1].style.display="flex",a[2].style.display="none",a[3].style.display="none",a[4].style.display="none",a[5].style.display="flex",a[6].style.display="flex",a[7].style.display="flex",a[8].style.display="none",i[4].style.display="flex",i[5].style.display="flex",i[6].style.display="flex")},w=e=>{0==e&&(u[1].style.display="none",m[1].style.display="none",c[1].style.display="none",a[3].style.display="flex",a[4].style.display="flex",a[5].style.display="none",a[6].style.display="none",a[7].style.display="none",a[8].style.display="none",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none"),1==e&&(u[0].style.display="flex",u[0].style.justifyContent="center",u[0].style.alignItems="center",u[1].style.display="flex",u[1].style.justifyContent="center",u[1].style.alignItems="center",m[1].style.display="none",m[1].style.justifyContent="center",m[1].style.alignItems="center",c[1].style.display="none",a[2].style.display="none",a[3].style.display="none",a[4].style.display="none",a[5].style.display="none",a[6].style.display="none",a[7].style.display="none",a[8].style.display="flex",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none")}}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,l),s.exports}l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(81)})();