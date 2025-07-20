import{a as d,S as u,i}from"./assets/vendor-rOMtvQ2t.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const f="https://pixabay.com/api/";async function m(r){const s={key:"51405853-c477ae5482bbe39eb607a142d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(f,{params:s})).data}const c=document.querySelector(".gallery");document.querySelector(".loader");const p=new u(".gallery a");function y(r){const s=r.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",s),p.refresh()}function g(){c.innerHTML=""}function h(){const r=document.getElementById("loader");r&&r.classList.remove("hidden")}function L(){const r=document.getElementById("loader");r&&r.classList.add("hidden")}const l=document.querySelector(".form"),w=l.elements["search-text"];l.addEventListener("submit",async r=>{r.preventDefault();const s=w.value.trim();if(!s){i.warning({message:"Please enter a search term!"});return}g(),h();try{const t=await m(s);await new Promise(n=>setTimeout(n,2e3)),t.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):y(t.hits)}catch{i.error({message:"An error occurred while fetching images."})}finally{L()}});
//# sourceMappingURL=index.js.map
