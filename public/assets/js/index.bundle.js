(()=>{var e={238:(e,t,o)=>{"use strict";o.r(t),o.d(t,{userId:()=>a,userLoggedIn:()=>s});var n=o(534);let l=0;const s=localStorage.getItem("userLoggedIn"),a=localStorage.getItem("userId");document.addEventListener("DOMContentLoaded",(()=>{"true"==s&&null==localStorage.getItem("userId")&&localStorage.setItem("userLoggedIn","false"),"true"!==s?(0,n.showLoginMenu)():(0,n.closeLoginMenu)()})),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target),o=t.get("email"),l=t.get("password");fetch(`http://localhost:3000/api/login?email=${o}&password=${l}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.error?(n.containers[2].style.display="flex",n.containers[2].querySelector(".text-error").innerHTML=e.error):(localStorage.setItem("userEmail",e.email),localStorage.setItem("userName",e.nickName),localStorage.setItem("userId",e._id),localStorage.setItem("userLoggedIn","true"),(0,n.closeLoginMenu)(),n.modals[3].style.display="flex",n.textSuccess[0].innerHTML="Conta logada com sucesso!!!",setTimeout((()=>{window.location.href="index.html"}),1500))}))})),n.checkboxs[0].addEventListener("change",(()=>{n.checkboxs[0].checked?n.inputs[1].type="text":n.inputs[1].type="password"})),n.checkboxs[1].addEventListener("change",(()=>{n.checkboxs[1].checked?n.inputs[6].type="text":n.inputs[6].type="password"})),n.linksRegister[1].addEventListener("click",(()=>{(0,n.closeRegisterMenu)(),(0,n.showLoginMenu)(),l=0})),n.linksRegister[0].addEventListener("click",(()=>{(0,n.closeLoginMenu)(),(0,n.showRegisterMenu)()})),n.buttonsSelect[1].addEventListener("click",(()=>{l--,(0,n.previousButton)(l)})),n.buttonsSelect[0].addEventListener("click",(()=>{l++,(0,n.nextButton)(l)})),0==l&&(n.buttonsSelect[1].style.display="none",n.buttonsSubmit[1].style.display="none",n.inputs[4].style.display="none",n.inputs[5].style.display="none",n.inputs[6].style.display="none",n.textsCheckbox[1].style.display="none",n.containers[5].style.display="none",n.containers[6].style.display="none",n.containers[7].style.display="none",n.containers[8].style.display="none")},898:(e,t,o)=>{"use strict";o.r(t),o.d(t,{createPost:()=>l,getAllPosts:()=>s});var n=o(534);async function l(e,t,o,l){const s=new FormData;s.append("title",t),s.append("desc",o),s.append("userId",l),Object.keys(e).forEach((t=>{const o=e[t];s.append("images",o,t)}));try{const e=await fetch("http://localhost:3000/postagem/create",{method:"POST",body:s});await e.json()||alert("Erro ao criar postagem"),(0,n.showSuccessMessage)("Postagem Criada com sucesso")}catch(e){alert("Erro ao criar post",e)}}async function s(e,t){try{const o=await fetch(`http://localhost:3000/postagem/get?skip=${e}&limit=${t}`);return(await o.json()).posts}catch(e){return console.error("Erro ao obter posts:",e),[]}}},599:(e,t,o)=>{"use strict";o.r(t);var n=o(534),l=o(972);const s=document.querySelectorAll(".logo.rotate");n.containers[13].style.display="flex",n.containers[14].style.display="none",s[0].style.animation="rotate .3s infinite linear",document.addEventListener("DOMContentLoaded",(async()=>{if(1==await(0,l.verifyUserLogged)()){const e=await(0,l.getUserData)(l.localUserId,"nickName");e&&(n.textNick[0].innerHTML=`@${e.nickName}`);const t=await(0,l.getUserImage)(l.localUserId);if("image/png"==t.type||"image/jpeg"==t.type){const e=URL.createObjectURL(t);n.imageProfile[0].src=e}else n.imageProfile[0].src="public/assets/images/user/user.png",console.clear();n.containers[13].style.display="none",n.containers[14].style.display="flex"}}))},737:(e,t,o)=>{"use strict";o.r(t);var n=o(534);let l,s;function a(){"dark"===s?(n.body.style.background="#000000",document.querySelectorAll(".profile").forEach((function(e){e.style.background="#000000"})),document.querySelectorAll(".left-bar").forEach((function(e){e.style.background="#000000"})),document.querySelectorAll(".top").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".header").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".card").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".top").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".main").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".bottom").forEach((function(e){e.style.background="#1A1A1A"})),document.querySelectorAll(".input").forEach((function(e){e.style.background="#2C2C2C",e.style.color="#FFFFFF"})),document.querySelectorAll(".select").forEach((function(e){e.style.background="#2C2C2C",e.style.color="rgba(255,255,255,.5)"})),document.querySelectorAll(".option").forEach((function(e){e.style.color="#FFFFFF"})),document.querySelectorAll(".date").forEach((function(e){e.style.background="#2C2C2C",e.style.color="#FFFFFF"})),document.querySelectorAll(".item").forEach((function(e){e.style.background="#2C2C2C",e.style.color="#FFFFFF"})),document.querySelectorAll(".user").forEach((function(e){e.style.background="#2C2C2C",e.style.color="#FFFFFF"})),document.querySelectorAll(".icon").forEach((function(e){e.style.color="#FFFFFF"})),document.querySelectorAll(".icon-input").forEach((function(e){e.style.background="#2C2C2C"})),document.querySelectorAll(".text").forEach((function(e){e.style.color="#FFFFFF"})),document.querySelectorAll(".text-error").forEach((function(e){e.style.color="#E05135"}))):(n.body.style.background="",document.querySelectorAll(".profile").forEach((function(e){e.style.background=""})),document.querySelectorAll(".left-bar").forEach((function(e){e.style.background=""})),document.querySelectorAll(".top").forEach((function(e){e.style.background=""})),document.querySelectorAll(".header").forEach((function(e){e.style.background=""})),document.querySelectorAll(".card").forEach((function(e){e.style.background=""})),document.querySelectorAll(".top").forEach((function(e){e.style.background=""})),document.querySelectorAll(".main").forEach((function(e){e.style.background=""})),document.querySelectorAll(".bottom").forEach((function(e){e.style.background=""})),document.querySelectorAll(".input").forEach((function(e){e.style.background="",e.style.color=""})),document.querySelectorAll(".select").forEach((function(e){e.style.background="",e.style.color=""})),document.querySelectorAll(".date").forEach((function(e){e.style.background="",e.style.color=""})),document.querySelectorAll(".item").forEach((function(e){e.style.background="",e.style.color=""})),document.querySelectorAll(".user").forEach((function(e){e.style.background="",e.style.color=""})),document.querySelectorAll(".icon").forEach((function(e){e.style.color=""})),document.querySelectorAll(".icon-input").forEach((function(e){e.style.background=""})),document.querySelectorAll(".text").forEach((function(e){e.style.color=""})),document.querySelectorAll(".text-error").forEach((function(e){e.style.color=""})))}document.addEventListener("DOMContentLoaded",(function(){n.selects[0]&&n.selects[0].addEventListener("change",(function(){switch(l=this.value,l){case"Light":localStorage.setItem("themeSelected","light"),s=localStorage.getItem("themeSelected");break;case"Dark":localStorage.setItem("themeSelected","dark"),s=localStorage.getItem("themeSelected")}a()})),s=localStorage.getItem("themeSelected"),null===s&&(s="light"),a()}));let c="BRAZIL";const r=document.querySelector(".date"),i=n.inputs[2],d=n.inputs[3],u=n.inputs[4],y=n.inputs[5],m=n.inputs[6];let p;const g=localStorage.getItem("userLoggedIn");if(document.addEventListener("DOMContentLoaded",(()=>{"true"!==g&&void 0===p?(0,n.showLoginMenu)():(0,n.closeLoginMenu)()})),n.buttons[1].addEventListener("click",(e=>{e.preventDefault();let t={nickName:i.value,userName:d.value,phoneNumber:u.value,email:y.value,password:m.value,birthDayData:r.value,nacionality:c,type:"default"};console.log(t),fetch("http://localhost:3000/api/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(e.ok||(console.error("Erro na solicitação: "+e.status),res.status(e.status).json({error:"Erro na solicitação"})),e.json()))).then((e=>{e.error?(n.containers[2].style.display="flex",n.textError[1].innerHTML=e.error):(p=e._id,localStorage.setItem("userLoggedIn","true"),localStorage.setItem("userId",p),(0,n.closeRegisterMenu)(),n.modals[3].style.display="flex",n.textSuccess[0].innerHTML="Conta Registrada com sucesso!!!",setTimeout((()=>{window.location.href="./index.html"}),1500))}))})),n.iconsClose[2].addEventListener("click",(()=>{n.modals[3].style.animation="closeOpacityModal .3s ease-in-out forwards",n.cards[2].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{n.modals[3].style.display="none"}),300)})),n.dates[0]){const e=new Date;e.setFullYear(e.getFullYear()-14);const t=new Date;t.setFullYear(t.getFullYear()-100);const o=new Date(e);o.setDate(e.getDate());const l=new Date(t);l.setDate(t.getDate());const s=o.toISOString().split("T")[0],a=l.toISOString().split("T")[0];n.dates[0].setAttribute("max",s),n.dates[0].setAttribute("min",a),n.dates[0].addEventListener("input",(function(){n.dates[0].value}))}let f=/(\d{2})(\d{5})(\d{4})/,h="($1) $2-$3",S="13";n.selects[0].addEventListener("change",(function(){switch(c=this.value?this.value:"BRAZIL",c){case"BRAZIL":f=/(\d{2})(\d{5})(\d{4})/,h="($1) $2-$3",S="13";break;case"UNITED STATES":f=/(\d{3})(\d{3})(\d{4})/,h="($1) $2-$3",S="13"}})),u.addEventListener("input",(function(){!function(){if(f){let e=u.value.replace(f,h);u.value=e,u.setAttribute("maxlength",S)}}()})),d.addEventListener("input",(function(){!function(){let e=d.value.split(" ");for(let t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);let t=e.join(" ");d.value=t}()}))},944:(e,t,o)=>{const{getAllPosts:n}=o(898),{getUserData:l,getUserImage:s}=o(972),a=document.querySelectorAll(".principal");async function c(e,t,o,n,l){const s=document.createElement("div");s.classList.add("card","post","container","container-column");const a=document.createElement("div");a.classList.add("container","container-row-between");const c=document.createElement("div");c.classList.add("container","container-row");const i=document.createElement("img");i.classList.add("image","profile-small"),i.src=e;const d=document.createElement("p");d.classList.add("text","nick","text-bold"),d.textContent=t;const u=document.createElement("img");u.classList.add("image","checkmark"),u.src="./../../public/assets/images/user/checkmark_blue.png",c.appendChild(i);const y=document.createElement("div");y.classList.add("container","container-column-center");const m=document.createElement("div");m.classList.add("container","container-row"),m.appendChild(d),m.appendChild(u),y.appendChild(m),c.appendChild(y),a.appendChild(c),s.appendChild(a);const p=document.createElement("div");p.classList.add("swiper");const g=document.createElement("div");g.classList.add("swiper-wrapper");for(const e of l)try{console.log("Loop",l[0].image);const e=await r(l[0].image.data,"image/jpeg");if(console.log(e),"image/jpeg"===e.type||"image/png"===e.type){const t=URL.createObjectURL(e),o=document.createElement("div");o.classList.add("swiper-slide");const n=document.createElement("img");n.classList.add("image","image-full"),n.src=t,n.alt="post",o.appendChild(n),g.appendChild(o)}}catch(e){console.log("Erro ao gerar blob",e)}p.appendChild(g);const f=document.createElement("div");f.classList.add("swiper-pagination");const h=document.createElement("div");h.classList.add("swiper-button-prev");const S=document.createElement("div");S.classList.add("swiper-button-next"),p.appendChild(f),p.appendChild(h),p.appendChild(S),s.appendChild(p);const b=document.createElement("div");b.classList.add("container","container-column-center");const A=document.createElement("p");A.classList.add("text","title","text-wrap","text-bold"),A.textContent=o;const E=document.createElement("p");E.classList.add("text","comment","text-wrap"),E.textContent=n,b.appendChild(A),b.appendChild(E),s.appendChild(b);const L=document.createElement("div");L.classList.add("container","container-row-between");const x=document.createElement("div");x.classList.add("container","container-row");const q=document.createElement("span");q.classList.add("icon","like-add","icon-primary","material-symbols-outlined"),q.textContent="heart_plus",x.appendChild(q);const k=document.createElement("div");k.classList.add("container","container-row");const C=document.createElement("span");return C.classList.add("icon","favorite-add","icon-primary","material-symbols-outlined"),C.textContent="bookmark_add",k.appendChild(C),L.appendChild(x),L.appendChild(k),s.appendChild(L),s}async function r(e,t){return new Blob([e],{type:t})}document.addEventListener("DOMContentLoaded",(async()=>{try{const e=await n(0,0);for(const t of e){const{nickName:e}=await l(t.userId,"nickName"),o=await s(t.userId);let n;"image/png"!==o.type&&"image/jpeg"!==o.type||(n=URL.createObjectURL(o));const r=await c(n,e,t.title,t.desc,t.images);a[0].appendChild(r)}}catch(e){console.error("Erro ao carregar os posts:",e)}}))},972:(e,t,o)=>{"use strict";o.r(t),o.d(t,{getUserData:()=>r,getUserImage:()=>a,localUserId:()=>n,logOut:()=>c,setLocalUserId:()=>i,setLocalUserLoggedIn:()=>d,userLoggedIn:()=>l,verifyUserLogged:()=>s});let n=localStorage.getItem("userId"),l=localStorage.getItem("userLoggedIn");async function s(){let e;return e="null"!=n&&"false"!=l,e}async function a(e){if(!e)return null;try{const t=await fetch(`http://localhost:3000/api/getUserImage?userId=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return await t.blob()}catch(e){return alert(e.message),console.log(e),null}}async function c(){localStorage.setItem("userLoggedIn","false"),localStorage.setItem("userId","null")}async function r(e,t){const o=`http://localhost:3000/api/searchById?id=${e}&fields=${t}`;try{const e=await fetch(o,{method:"GET",headers:{"Content-Type":"application/json"}});return e.ok?await e.json():(console.log("Erro ao pegar dados do usuário"),null)}catch(e){return console.log("Erro ao pegar userData",e),null}}function i(e){localStorage.setItem("userId",`${e}`)}function d(e){localStorage.setItem("userLoggedIn",`${e}`)}},81:(e,t,o)=>{const n=o(944),l=o(599),s=o(238),a=o(737);e.exports={profileController:l,loginController:s,registerController:a,showPostsController:n}},534:(e,t,o)=>{"use strict";o.d(t,{body:()=>n,buttons:()=>p,buttonsSelect:()=>m,buttonsSubmit:()=>g,cards:()=>a,checkboxs:()=>d,closeLoginMenu:()=>q,closeRegisterMenu:()=>k,containers:()=>c,dates:()=>A,iconsClose:()=>l,imageProfile:()=>b,inputs:()=>i,linksRegister:()=>y,modals:()=>s,nextButton:()=>w,previousButton:()=>v,selects:()=>E,showLoginMenu:()=>L,showRegisterMenu:()=>x,showSuccessMessage:()=>C,textError:()=>r,textNick:()=>S,textSuccess:()=>f,textsCheckbox:()=>u});const n=document.querySelector("body"),l=(document.querySelector("p"),document.querySelectorAll(".icon-close")),s=(document.querySelectorAll(".icon"),document.querySelectorAll(".modal")),a=(document.querySelectorAll(".left-bar"),document.querySelectorAll(".card")),c=document.querySelectorAll(".container"),r=document.querySelectorAll(".text-error"),i=document.querySelectorAll(".input"),d=document.querySelectorAll(".checkbox"),u=document.querySelectorAll(".text-checkbox"),y=(document.querySelectorAll(".text"),document.querySelectorAll(".link"),document.querySelectorAll(".linkRegister")),m=document.querySelectorAll(".buttonSelect"),p=document.querySelectorAll(".button"),g=document.querySelectorAll(".buttonSubmit"),f=document.querySelectorAll(".text-success"),h=document.querySelectorAll(".modal.success"),S=(document.querySelectorAll(".item"),document.querySelectorAll(".logo"),document.querySelectorAll(".nick")),b=(document.querySelectorAll(".name"),document.querySelectorAll(".text.bio"),document.querySelectorAll(".bio"),document.querySelectorAll(".button.logout"),document.querySelectorAll(".image.profile")),A=(document.querySelectorAll(".fab"),document.querySelectorAll(".header"),document.querySelectorAll(".alt"),document.querySelectorAll(".cancel"),document.querySelectorAll(".save"),document.querySelectorAll(".date")),E=(document.querySelectorAll(".edit"),document.querySelectorAll(".select"));document.querySelectorAll(".text.nationality"),document.querySelectorAll(".text.birthday"),document.querySelectorAll(".text.number"),document.querySelectorAll(".text.email");let L=()=>{n.style.overflowY="hidden",s[0].style.display="flex",s[0].style.animation="opacityModal .3s ease-in-out forwards",a[0].style.animation="smoothUpCard .5s ease-in-out forwards"},x=()=>{n.style.overflowY="hidden",s[1].style.display="flex",s[1].style.animation="opacityModal .3s ease-in-out forwards",a[1].style.animation="smoothUpCard .5s ease-in-out forwards"},q=()=>{n.style.overflowY="auto",a[0].style.animation="closeSmoothUpCard .5s ease-in-out forwards",s[0].style.animation="closeOpacityModal .3s ease-in-out forwards",setTimeout((()=>{s[0].style.display="none"}),300)},k=()=>{n.style.overflowY="auto",s[1].style.animation="closeOpacityModal .3s ease-in-out forwards",a[1].style.animation="closeSmoothUpCard .5s ease-in-out forwards",setTimeout((()=>{s[1].style.display="none"}),300)},C=e=>{h[0].style.display="flex",f[0].innerHTML=e,setTimeout((()=>{h[0].style.display="none",window.location.reload()}),1500)},w=e=>{1==e&&(m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",u[1].style.display="none",c[2].style.display="none",c[3].style.display="none",c[4].style.display="none",c[5].style.display="none",c[6].style.display="none",c[7].style.display="none",c[8].style.display="flex",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none"),2==e&&(m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",m[0].style.display="none",g[1].style.display="flex",g[1].style.justifyContent="center",g[1].style.alignItems="center",u[1].style.display="flex",c[2].style.display="none",c[3].style.display="none",c[4].style.display="none",c[5].style.display="flex",c[6].style.display="flex",c[7].style.display="flex",c[8].style.display="none",i[4].style.display="flex",i[5].style.display="flex",i[6].style.display="flex")},v=e=>{0==e&&(m[1].style.display="none",g[1].style.display="none",u[1].style.display="none",c[3].style.display="flex",c[4].style.display="flex",c[5].style.display="none",c[6].style.display="none",c[7].style.display="none",c[8].style.display="none",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none"),1==e&&(m[0].style.display="flex",m[0].style.justifyContent="center",m[0].style.alignItems="center",m[1].style.display="flex",m[1].style.justifyContent="center",m[1].style.alignItems="center",g[1].style.display="none",g[1].style.justifyContent="center",g[1].style.alignItems="center",u[1].style.display="none",c[2].style.display="none",c[3].style.display="none",c[4].style.display="none",c[5].style.display="none",c[6].style.display="none",c[7].style.display="none",c[8].style.display="flex",i[4].style.display="none",i[5].style.display="none",i[6].style.display="none")}}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(81)})();