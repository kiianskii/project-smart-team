(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const r={showBtn:document.querySelector("[data-modal-show]"),closeBtn:document.querySelector("[data-modal-close]"),menu:document.getElementById("menuModal")};r.showBtn.addEventListener("click",a);r.closeBtn.addEventListener("click",i);function a(){r.menu.classList.add("is-open"),d("navList"),d("navLink")}function i(){r.menu.classList.remove("is-open"),l("navList"),l("navLink")}function d(o){document.getElementById(o).addEventListener("click",i)}function l(o){document.getElementById(o).removeEventListener("click",i)}
//# sourceMappingURL=commonHelpers.js.map