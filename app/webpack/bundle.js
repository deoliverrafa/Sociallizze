(()=>{var e={844:(e,t,l)=>{"use strict";l.r(t);var n=l(534);let o,s,a,i=!1;n.e3[0].addEventListener("click",(async()=>{i||(i=!0,n.qk[5].style.display="flex",n.qk[2].style.animation="closeOpacityModal .3s ease-in-out forwards",n.PH[0].style.animation="closeSmoothSideBar .5s ease-in-out forwards",n._u[6].style.animation="none",n._u[7].style.animation="none",n._u[11].style.animation="none",setTimeout((()=>{n.qk[2].style.display="none"}),300))})),n.XP[5].addEventListener("click",(()=>{i&&(n.qk[5].style.animation="closeOpacityModal .3s ease-in-out forwards",n._u[4].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{n.qk[5].style.display="none",n.qk[2].style.display="none",n._u[4].style.animation="smoothUpCard .5s ease-in-out forwards",n.qk[5].style.animation="opacityModal .3s ease-in-out forwards",i=!1}),300))})),n._u[8].style.animation="none",n._u[9].style.animation="none",n._u[10].style.animation="none";const r=document.getElementById("avatarInput"),d=document.getElementById("bioForm"),c=document.getElementById("cityForm");n.e3[11].addEventListener("click",(async()=>{n.qk[6].style.display="flex",n.qk[5].style.display="none"})),n.XP[6].addEventListener("click",(()=>{n.qk[6].style.display="none",i=!1})),n.cJ[37].style.display="none",n.cJ[38].style.display="none",n.Bj[0].addEventListener("click",(()=>{n.cJ[37].style.display="flex",n.cJ[38].style.display="none"})),n.Z[0].addEventListener("click",(()=>{window.location.href="index.html"})),console.log("Modais: ",n.qk),console.log("Profiles: ",n.tz),console.log("Cards: ",n._u),console.log("Iten: ",n.e3),console.log("Icones-X: ",n.XP),console.log("Icones: ",n.ci),console.log("Container: ",n.cJ),console.log("Header: ",n.A),r.addEventListener("change",(function(){if(o=r.files[0],o){const e=new FileReader;e.onload=function(e){n.tz[4].src=e.target.result},e.readAsDataURL(o)}})),c.addEventListener("change",(()=>{s=c.firstElementChild.value,console.log("Dados Cidade --\x3e",s)})),d.addEventListener("change",(()=>{a=d.firstElementChild.value,console.log("Dados bio --\x3e",a)})),n.sk[0].addEventListener("click",(async()=>{const e=localStorage.getItem("userId"),t=new FormData;t.append("avatar",o),void 0!==a&&t.append("bioData",a),void 0!==s&&t.append("cityData",s),t.append("userId",e),(await fetch("https://sociallizze-api.up.railway.app/api/attProfile",{method:"PUT",body:t})).ok?window.location.href="index.html":alert("Erro ao atualizar perfil")}))},238:(e,t,l)=>{"use strict";l.r(t),l.d(t,{getUserData:()=>i,userId:()=>a,userLoggedIn:()=>s});var n=l(534);let o=0;const s=localStorage.getItem("userLoggedIn"),a=localStorage.getItem("userId");async function i(){return await fetch(`https://sociallizze-api.up.railway.app/api/searchById?id=${a}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e?e.json():(console.log("Erro ao pegar dados do usuário"),null))).then((e=>e)).catch((e=>(console.log("Erro ao pegar userData",e),null)))}document.addEventListener("DOMContentLoaded",(()=>{"true"==s&&null==localStorage.getItem("userId")&&localStorage.setItem("userLoggedIn","false"),"true"!==s?(0,n.LS)():(0,n.uO)()})),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),l=t.get("email"),o=t.get("password");fetch(`https://sociallizze-api.up.railway.app/api/usuarios?email=${l}&password=${o}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.error?(n.cJ[0].style.display="flex",n.cJ[0].querySelector(".text-error").innerHTML=e.error):(localStorage.setItem("userEmail",e.email),localStorage.setItem("userName",e.nickName),localStorage.setItem("userId",e._id),localStorage.setItem("userLoggedIn","true"),(0,n.uO)(),n.qk[3].style.display="flex",n.Up[0].innerHTML="Conta logada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),n.n[0].addEventListener("change",(()=>{n.n[0].checked?n.FU[1].type="text":n.FU[1].type="password"})),n.n[1].addEventListener("change",(()=>{n.n[1].checked?n.FU[6].type="text":n.FU[6].type="password"})),n.XP[0].addEventListener("click",(()=>{(0,n.uO)()})),n.XP[1].addEventListener("click",(()=>{(0,n.A$)()})),n.Mh[1].addEventListener("click",(()=>{(0,n.A$)(),(0,n.LS)(),o=0})),n.Mh[0].addEventListener("click",(()=>{(0,n.uO)(),(0,n.xU)()})),n.HC[1].addEventListener("click",(()=>{o--,(0,n.TF)(o)})),n.HC[0].addEventListener("click",(()=>{o++,(0,n.F2)(o)})),0==o&&(n.HC[1].style.display="none",n.S1[1].style.display="none",n.FU[4].style.display="none",n.FU[5].style.display="none",n.FU[6].style.display="none",n.IY[1].style.display="none",n.cJ[1].style.display="none")},599:(e,t,l)=>{"use strict";l.r(t);var n=l(534),o=l(238);let s=null;document.addEventListener("DOMContentLoaded",(async()=>{if(1==await async function(){let e;return e=null!=o.userId&&"false"!=o.userLoggedIn,e}()){if(s=await(0,o.getUserData)(),n.m2[0].style.display="none",n.cJ[3].style.display="flex",n.m2[1].style.display="none",n.cJ[11].style.display="flex",n.m2[2].style.display="none",n.cJ[17].style.display="flex",n.m2[3].style.display="none",n.cJ[25].style.display="flex",s){n.LM[0].innerHTML=s.nickName,n.LM[1].innerHTML=s.nickName;let e=n.No[0].innerText=s.bio,t=!1;const l=22;if(e.length>l){const o=e.slice(0,l);n.No[0].innerText=o,n.yX[0].addEventListener("click",(()=>{t?(n.No[0].innerText=o,n.yX[0].innerText="MAIS"):(n.No[0].innerText=e,n.yX[0].innerText="MENOS"),t=!t}))}}const e=await async function(){const e=localStorage.getItem("userId");if(!e)return null;try{const t=await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}();if(e){const t=URL.createObjectURL(e);n.tz[0].src=t,n.tz[2].src=t,n.tz[4].src=t}}else n.m2[0].style.display="flex",n.cJ[3].style.display="none",n.m2[1].style.display="flex",n.cJ[11].style.display="none",n.m2[2].style.display="flex",n.cJ[17].style.display="none",n.m2[3].style.display="flex",n.cJ[25].style.display="none"})),n.SV[0].addEventListener("click",(async()=>{!async function(){localStorage.setItem("userLoggedIn","false"),localStorage.setItem("userId","null")}(),window.location.href="index.html"}))},67:(e,t,l)=>{"use strict";l.r(t);var n=l(534);const o=document.querySelector(".date"),s=n.FU[2],a=n.FU[3],i=n.FU[4],r=n.FU[5],d=n.FU[6];let c;const y=localStorage.getItem("userLoggedIn");document.addEventListener("DOMContentLoaded",(()=>{"true"!==y&&void 0===c?(0,n.LS)():(0,n.uO)()})),n.ZY[1].addEventListener("click",(e=>{e.preventDefault();let t={nickName:s.value,userName:a.value,phoneNumber:i.value,email:r.value,password:d.value,birthDayData:o.value,type:"default"};fetch("https://sociallizze-api.up.railway.app/api/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(e.ok,e.json()))).then((e=>{e.error?(n.cJ[2].style.display="flex",n.Mn[1].innerHTML=e.error):(c=e._id,localStorage.setItem("userLoggedIn","true"),localStorage.setItem("userId",c),(0,n.A$)(),n.qk[3].style.display="flex",n.Up[0].innerHTML="Conta Registrada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),n.XP[3].addEventListener("click",(()=>{n.qk[3].style.animation="closeOpacityModal .3s ease-in-out forwards",n._u[2].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{n.qk[3].style.display="none"}),300)}))},427:(e,t,l)=>{const n=l(238),o=l(67),s=l(599),a=l(844);e.exports={profileController:s,loginController:n,registerController:o,editProfileContoller:a}},534:(e,t,l)=>{"use strict";l.d(t,{A:()=>w,A$:()=>M,Bj:()=>E,F2:()=>O,FU:()=>c,HC:()=>m,IY:()=>u,LM:()=>x,LS:()=>T,Mh:()=>p,Mn:()=>d,No:()=>v,PH:()=>a,S1:()=>g,SV:()=>L,TF:()=>F,Up:()=>S,XP:()=>n,Z:()=>A,ZY:()=>f,_u:()=>i,cJ:()=>r,ci:()=>o,e3:()=>h,m2:()=>q,n:()=>y,qk:()=>s,sk:()=>C,tz:()=>k,uO:()=>b,xU:()=>U,yX:()=>I});const n=document.querySelectorAll(".icon-close"),o=document.querySelectorAll(".icon"),s=document.querySelectorAll(".modal"),a=document.querySelectorAll(".left-bar"),i=document.querySelectorAll(".card"),r=document.querySelectorAll(".container"),d=document.querySelectorAll(".text-error"),c=document.querySelectorAll(".input"),y=document.querySelectorAll(".checkbox"),u=document.querySelectorAll(".text-checkbox"),p=(document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister")),m=document.querySelectorAll(".buttonSelect"),f=document.querySelectorAll(".button"),g=document.querySelectorAll(".buttonSubmit"),S=document.querySelectorAll(".text-success"),h=document.querySelectorAll(".item"),x=(document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),v=document.querySelectorAll(".bio"),I=document.querySelectorAll(".more"),L=document.querySelectorAll(".button.logout"),k=document.querySelectorAll(".image.profile"),q=(document.querySelectorAll(".fab"),document.querySelectorAll(".load")),w=document.querySelectorAll(".header"),E=document.querySelectorAll(".alt"),A=document.querySelectorAll(".cancel"),C=document.querySelectorAll(".save");let T=()=>{s[0].style.display="flex",s[0].style.animation="opacityModal .3s ease-in-out forwards",i[0].style.animation="smoothUpCard .5s ease-in-out forwards"},U=()=>{s[1].style.display="flex",s[1].style.animation="opacityModal .3s ease-in-out forwards",i[1].style.animation="smoothUpCard .5s ease-in-out forwards"},b=()=>{i[0].style.animation="closeSmoothUpCard .5s ease-in-out forwards",s[0].style.animation="closeOpacityModal .3s ease-in-out forwards",setTimeout((()=>{s[0].style.display="none"}),300)},M=()=>{s[1].style.animation="closeOpacityModal .3s ease-in-out forwards",i[1].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{s[1].style.display="none"}),300)},O=e=>{1==e&&(m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",c[2].style.display="none",c[3].style.display="none",c[4].style.display="flex",c[5].style.display="flex",c[6].style.display="flex",u[1].style.display="flex",r[1].style.display="none"),2==e&&(m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",m[0].style.display="none",g[1].style.display="flex",g[1].style.justifyContent="center",g[1].style.alignItems="center",c[2].style.display="none",c[3].style.display="none",c[4].style.display="none",c[5].style.display="none",c[6].style.display="none",u[1].style.display="none",r[1].style.display="flex",r[1].style.flexDirection="column",r[1].style.justifyContent="center",r[1].style.alignItems="center")},F=e=>{0==e&&(m[1].style.display="none",g[1].style.display="none",c[2].style.display="flex",c[3].style.display="flex",c[4].style.display="none",c[5].style.display="none",c[6].style.display="none",u[1].style.display="none",r[1].style.display="none"),1==e&&(m[0].style.display="flex",m[0].style.justifyContent="center",m[0].style.alignItems="center",m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",g[1].style.display="none",g[1].style.justifyContent="center",g[1].style.alignItems="center",c[2].style.display="none",c[3].style.display="none",c[4].style.display="flex",c[5].style.display="flex",c[6].style.display="flex",u[1].style.display="flex",r[1].style.display="none")}}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,l),s.exports}l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(427)})();