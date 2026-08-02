
document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.navlinks').classList.toggle('open'));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.style.cssText+='opacity:1;transform:translateY(0)'}),{threshold:.12});
document.querySelectorAll('.card,.stat,.sector').forEach(e=>{e.style.cssText+='opacity:0;transform:translateY(18px);transition:.55s';obs.observe(e)});
