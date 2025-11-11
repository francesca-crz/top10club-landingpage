// Filtri categorie: visualizza solo le card con data-cat corrispondente
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.benefit');

filters.forEach(btn=>{
  btn.addEventListener('click',()=>{
    filters.forEach(b=>{b.classList.remove('active'); b.setAttribute('aria-selected','false')});
    btn.classList.add('active'); btn.setAttribute('aria-selected','true');
    const cat = btn.dataset.filter;
    cards.forEach(c=>{
      c.style.display = (cat==='all' || c.dataset.cat===cat) ? '' : 'none';
    });
    const grid = document.getElementById('benefitGrid');
    if(grid){ grid.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// MAPA - Berlin Overview
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('club-map');
  if (!el || typeof L === 'undefined') return;

  const map = L.map('club-map', { zoomControl: true }).setView([52.5208, 13.4095], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  const partners = [
    { name: 'Liquidrom (Wellness)', pos: [52.5012, 13.3789] },
    { name: 'EvoGolf (Freizeit)', pos: [52.5137, 13.3499] },
    { name: 'Bonvivant (Essen)', pos: [52.4969, 13.3315] },
    { name: 'Saphire Bar (Nachtleben)', pos: [52.5256, 13.4013] },
    { name: 'Koll’garten (Shopping)', pos: [52.5486, 13.4128] },
    { name: 'Bergwerk (Familie)', pos: [52.4919, 13.4382] },
  ];

  partners.forEach(p => {
    L.marker(p.pos).addTo(map).bindPopup(p.name);
  });
});
