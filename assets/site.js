(function(){var k='fm-lang',h=document.documentElement,s=null;try{s=localStorage.getItem(k)}catch(e){}
var q=new URLSearchParams(location.search).get('lang');var l=q||s||h.getAttribute('data-lang')||'es';
function set(v){h.setAttribute('data-lang',v);h.setAttribute('lang',v);try{localStorage.setItem(k,v)}catch(e){}
document.querySelectorAll('.lang').forEach(function(b){b.textContent=v==='es'?'EN':'ES';b.setAttribute('aria-label',v==='es'?'Switch to English':'Cambiar a español')})}
set(l);document.addEventListener('click',function(e){if(e.target.classList.contains('lang')){set(h.getAttribute('data-lang')==='es'?'en':'es')}})})();
