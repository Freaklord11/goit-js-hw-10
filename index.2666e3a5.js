const e=document.querySelector(".breed-select"),s=document.querySelector(".loader"),t=document.querySelector(".error"),i=document.querySelector(".cat-info");function d(){t.classList.remove("is-hidden"),e.classList.add("is-hidden")}t.classList.add("is-hidden"),s.classList.replace("loader","is-hidden"),s.classList.remove("is-hidden"),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_3BgAJB4pC98G23ZaidS6M6FKMx68sUCqY7Coeztx7b2pb6JAbK6ptNECml17EUEF").then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((t=>{let i=t.map((({name:e,id:s})=>`<option value=${s}>${e}</option>`));e.insertAdjacentHTML("beforeend",i),e.classList.remove("is-hidden"),s.classList.add("is-hidden")})).catch(d),e.addEventListener("change",(function(t){e.classList.add("is-hidden"),i.classList.add("is-hidden"),s.classList.remove("is-hidden"),(n=t.target.value,fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_3BgAJB4pC98G23ZaidS6M6FKMx68sUCqY7Coeztx7b2pb6JAbK6ptNECml17EUEF&breed_ids=${n}`).then((e=>{if(e.ok)return e.json();throw new Error(e.status)}))).then((t=>{const{url:d,breeds:n}=t[0],{name:a,description:r,temperament:c}=n[0];i.innerHTML=`\n            <img src ='${d}' alt =${a} width ="400"/>\n            <div class='box'>\n                <h2>${a}</h2>\n                <p>${r}</p>\n                <p>${c}</p>\n            </div>\n        `,i.classList.remove("is-hidden"),e.classList.remove("is-hidden"),s.classList.add("is-hidden")})).catch(d);var n}));
//# sourceMappingURL=index.2666e3a5.js.map
