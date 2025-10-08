
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e => { const id=a.getAttribute('href').slice(1); const el=document.getElementById(id); if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); } });
});
// Lightbox
(function(){
  const imgs=document.querySelectorAll('.gallery img'); if(!imgs.length) return;
  const backdrop=document.createElement('div'); backdrop.className='lb-backdrop';
  const big=document.createElement('img'); const close=document.createElement('button'); close.className='lb-close'; close.textContent='✕';
  backdrop.appendChild(big); backdrop.appendChild(close); document.body.appendChild(backdrop);
  imgs.forEach(img=>img.addEventListener('click',()=>{ big.src=img.src; backdrop.classList.add('active'); }));
  close.addEventListener('click',()=>backdrop.classList.remove('active'));
  backdrop.addEventListener('click',e=>{ if(e.target===backdrop) backdrop.classList.remove('active'); });
})();
// Hamburger drawer
(function(){
  const toggle=document.getElementById('menuToggle'); const drawer=document.getElementById('drawer'); const backdrop=document.getElementById('drawerBackdrop'); const close=document.getElementById('drawerClose');
  if(!toggle||!drawer) return; const open=()=>{drawer.style.transform='translateX(0)'; backdrop.style.display='block'}; const hide=()=>{drawer.style.transform='translateX(100%)'; backdrop.style.display='none'};
  toggle.textContent='☰'; toggle.addEventListener('click',open); backdrop&&backdrop.addEventListener('click',hide); close&&close.addEventListener('click',hide); drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',hide));
})();
// Appointment date min = today
(function(){ var d=document.getElementById('rdv-date'); if(!d) return; var t=new Date(); var yyyy=t.getFullYear(); var mm=('0'+(t.getMonth()+1)).slice(-2); var dd=('0'+t.getDate()).slice(-2); d.min=yyyy+'-'+mm+'-'+dd; })();
