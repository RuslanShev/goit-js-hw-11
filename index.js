import{a as d,S as u,i as a}from"./assets/vendor-rOMtvQ2t.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="https://pixabay.com/api/";async function m(t){const s={key:"51405853-c477ae5482bbe39eb607a142d",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(f,{params:s})).data}const c=document.querySelector(".gallery");document.querySelector(".loader");const p=new u(".gallery a");function y(t){const s=t.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",s),p.refresh()}function g(){c.innerHTML=""}function h(){const t=document.getElementById("loader");t&&t.classList.remove("hidden")}function L(){const t=document.getElementById("loader");t&&t.classList.add("hidden")}const l=document.querySelector(".form"),b=l.elements["search-text"];l.addEventListener("submit",async t=>{t.preventDefault();const s=b.value.trim();if(!s){a.warning({message:"Please enter a search term!"});return}g(),h();try{const r=await m(s);r.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!"}):y(r.hits)}catch{a.error({message:"An error occurred while fetching images."})}finally{L()}});
//# sourceMappingURL=index.js.map
