(()=>{var e={238:(e,t,l)=>{"use strict";l.r(t),l.d(t,{userId:()=>o,userLoggedIn:()=>n});var s=l(534);let a=0;const n=localStorage.getItem("userLoggedIn"),o=localStorage.getItem("userId");document.addEventListener("DOMContentLoaded",(()=>{"true"==n&&null==localStorage.getItem("userId")&&localStorage.setItem("userLoggedIn","false"),"true"!==n?(0,s.LS)():(0,s.uO)()})),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),l=t.get("email"),a=t.get("password");fetch(`https://sociallizze-api.up.railway.app/api/usuarios?email=${l}&password=${a}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.error?(s.cJ[0].style.display="flex",s.cJ[0].querySelector(".text-error").innerHTML=e.error):(localStorage.setItem("userEmail",e.email),localStorage.setItem("userName",e.nickName),localStorage.setItem("userId",e._id),localStorage.setItem("userLoggedIn","true"),(0,s.uO)(),s.qk[3].style.display="flex",s.Up[0].innerHTML="Conta logada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),s.n[0].addEventListener("change",(()=>{s.n[0].checked?s.FU[1].type="text":s.FU[1].type="password"})),s.n[1].addEventListener("change",(()=>{s.n[1].checked?s.FU[6].type="text":s.FU[6].type="password"})),s.Mh[1].addEventListener("click",(()=>{(0,s.A$)(),(0,s.LS)(),a=0})),s.Mh[0].addEventListener("click",(()=>{(0,s.uO)(),(0,s.xU)()})),s.HC[1].addEventListener("click",(()=>{a--,(0,s.TF)(a)})),s.HC[0].addEventListener("click",(()=>{a++,(0,s.F2)(a)})),0==a&&(s.HC[1].style.display="none",s.S1[1].style.display="none",s.FU[4].style.display="none",s.FU[5].style.display="none",s.FU[6].style.display="none",s.IY[1].style.display="none",s.cJ[1].style.display="none")},599:(e,t,l)=>{"use strict";l.r(t),l.d(t,{dadosUser:()=>n});var s=l(534),a=l(972);let n=null;document.addEventListener("DOMContentLoaded",(async()=>{if(1==await(0,a.I6)()){n=await(0,a.is)(),n&&(s.LM[0].innerHTML=`@${n.nickName}`);const e=await(0,a.HK)();if("image/png"==e.type){const t=URL.createObjectURL(e);s.tz[0].src=t}else s.tz[0].src="public/assets/images/user/user.png",s.tz[1].src="public/assets/images/user/user.png"}}));const o=document.querySelectorAll(".card.post"),r=document.querySelectorAll(".card.photo"),i=document.querySelectorAll(".card.video"),c=document.querySelectorAll(".card.bio");s.e3[0].addEventListener("click",(()=>{s.e3[1].classList.remove("active"),s.e3[2].classList.remove("active"),s.e3[3].classList.remove("active"),s.e3[0].classList.add("active"),r[0].classList.add("container-disable"),i[0].classList.add("container-disable"),c[0].classList.add("container-disable"),o[0].classList.remove("container-disable")})),s.e3[1].addEventListener("click",(()=>{s.e3[0].classList.remove("active"),s.e3[2].classList.remove("active"),s.e3[3].classList.remove("active"),s.e3[1].classList.add("active"),o[0].classList.add("container-disable"),i[0].classList.add("container-disable"),c[0].classList.add("container-disable"),r[0].classList.remove("container-disable")})),s.e3[2].addEventListener("click",(()=>{s.e3[0].classList.remove("active"),s.e3[1].classList.remove("active"),s.e3[3].classList.remove("active"),s.e3[2].classList.add("active"),o[0].classList.add("container-disable"),r[0].classList.add("container-disable"),c[0].classList.add("container-disable"),i[0].classList.remove("container-disable")})),s.e3[3].addEventListener("click",(()=>{s.e3[0].classList.remove("active"),s.e3[1].classList.remove("active"),s.e3[2].classList.remove("active"),s.e3[3].classList.add("active"),o[0].classList.add("container-disable"),r[0].classList.add("container-disable"),i[0].classList.add("container-disable"),c[0].classList.remove("container-disable")}))},67:(e,t,l)=>{"use strict";l.r(t);var s=l(534);const a=document.querySelector(".date"),n=s.FU[2],o=s.FU[3],r=s.FU[4],i=s.FU[5],c=s.FU[6];let d;const u=localStorage.getItem("userLoggedIn");if(document.addEventListener("DOMContentLoaded",(()=>{"true"!==u&&void 0===d?(0,s.LS)():(0,s.uO)()})),s.ZY[1].addEventListener("click",(e=>{e.preventDefault();let t={nickName:n.value,userName:o.value,phoneNumber:r.value,email:i.value,password:c.value,birthDayData:a.value,type:"default"};fetch("https://sociallizze-api.up.railway.app/api/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(e.ok,e.json()))).then((e=>{e.error?(s.cJ[2].style.display="flex",s.Mn[1].innerHTML=e.error):(d=e._id,localStorage.setItem("userLoggedIn","true"),localStorage.setItem("userId",d),(0,s.A$)(),s.qk[3].style.display="flex",s.Up[0].innerHTML="Conta Registrada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),s.XP[2].addEventListener("click",(()=>{s.qk[3].style.animation="closeOpacityModal .3s ease-in-out forwards",s._u[2].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{s.qk[3].style.display="none"}),300)})),s.pf[0]){const e=new Date;e.setFullYear(e.getFullYear()-14);const t=new Date;t.setFullYear(t.getFullYear()-100);const l=new Date(e);l.setDate(e.getDate());const a=new Date(t);a.setDate(t.getDate());const n=l.toISOString().split("T")[0],o=a.toISOString().split("T")[0];s.pf[0].setAttribute("max",n),s.pf[0].setAttribute("min",o),s.pf[0].addEventListener("input",(function(){s.pf[0].value}))}let y="",p="",m="";s.zG[0].addEventListener("change",(function(){switch(this.value){case"BR":y=/(\d{2})(\d{5})(\d{4})/,p="($1) $2-$3",m="13";break;case"US":y=/(\d{3})(\d{3})(\d{4})/,p="($1) $2-$3",m="13"}})),r.addEventListener("input",(function(){!function(){if(y){let e=r.value.replace(y,p);r.value=e,r.setAttribute("maxlength",m)}}()})),o.addEventListener("input",(function(){!function(){let e=o.value.split(" ");for(let t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);let t=e.join(" ");o.value=t}()}))},972:(e,t,l)=>{"use strict";l.d(t,{is:()=>r,I6:()=>n,HK:()=>o});let s=localStorage.getItem("userId"),a=localStorage.getItem("userLoggedIn");async function n(){let e;return e=null!=localStorage.getItem("userId")&&"false"!=a,e}async function o(){const e=localStorage.getItem("userId");if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}async function r(){return await fetch(`https://sociallizze-api.up.railway.app/api/searchById?id=${s}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e?e.json():(console.log("Erro ao pegar dados do usuário"),null))).then((e=>e)).catch((e=>(console.log("Erro ao pegar userData",e),null)))}},81:(e,t,l)=>{const s=l(238),a=l(67),n=l(599);e.exports={profileController:n,loginController:s,registerController:a}},534:(e,t,l)=>{"use strict";l.d(t,{XP:()=>s,qk:()=>a,_u:()=>n,cJ:()=>o,Mn:()=>r,LS:()=>b,xU:()=>I,uO:()=>q,A$:()=>A,Up:()=>g,FU:()=>i,n:()=>c,Mh:()=>u,HC:()=>y,ZY:()=>p,IY:()=>d,TF:()=>w,F2:()=>x,S1:()=>m,e3:()=>f,LM:()=>v,tz:()=>L,pf:()=>S,zG:()=>h});const s=document.querySelectorAll(".icon-close"),a=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),n=(document.querySelectorAll(".left-bar"),document.querySelectorAll(".card")),o=document.querySelectorAll(".container"),r=document.querySelectorAll(".text-error"),i=document.querySelectorAll(".input"),c=document.querySelectorAll(".checkbox"),d=document.querySelectorAll(".text-checkbox"),u=(document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister")),y=document.querySelectorAll(".buttonSelect"),p=document.querySelectorAll(".button"),m=document.querySelectorAll(".buttonSubmit"),g=document.querySelectorAll(".text-success"),f=document.querySelectorAll(".item"),v=(document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),L=(document.querySelectorAll(".name"),document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout"),document.querySelectorAll(".image.profile")),S=(document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date")),h=document.querySelectorAll(".select");let b=()=>{a[0].style.display="flex",a[0].style.animation="opacityModal .3s ease-in-out forwards",n[0].style.animation="smoothUpCard .5s ease-in-out forwards"},I=()=>{a[1].style.display="flex",a[1].style.animation="opacityModal .3s ease-in-out forwards",n[1].style.animation="smoothUpCard .5s ease-in-out forwards"},q=()=>{n[0].style.animation="closeSmoothUpCard .5s ease-in-out forwards",a[0].style.animation="closeOpacityModal .3s ease-in-out forwards",setTimeout((()=>{a[0].style.display="none"}),300)},A=()=>{a[1].style.animation="closeOpacityModal .3s ease-in-out forwards",n[1].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{a[1].style.display="none"}),300)},x=e=>{1==e&&(y[1].style.display="flex",y[1].style.justifyContent="center",y[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none",d[1].style.display="none",o[1].style.display="flex",o[1].style.flexDirection="column",o[1].style.justifyContent="center",o[1].style.alignItems="center"),2==e&&(y[1].style.display="flex",y[1].style.justifyContent="center",y[1].style.alignItems="center",y[0].style.display="none",m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="flex",i[5].style.display="flex",i[6].style.display="flex",d[1].style.display="flex",o[1].style.display="none")},w=e=>{0==e&&(y[1].style.display="none",m[1].style.display="none",i[2].style.display="flex",i[3].style.display="flex",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none",d[1].style.display="none",o[1].style.display="none"),1==e&&(y[0].style.display="flex",y[0].style.justifyContent="center",y[0].style.alignItems="center",y[1].style.display="flex",y[1].style.justifyContent="center",y[1].style.alignItems="center",m[1].style.display="none",m[1].style.justifyContent="center",m[1].style.alignItems="center",i[2].style.display="none",i[3].style.display="none",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none",d[1].style.display="none",o[1].style.display="flex",o[1].style.flexDirection="column",o[1].style.justifyContent="center",o[1].style.alignItems="center")}}},t={};function l(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,l),n.exports}l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(81)})();