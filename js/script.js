// ===== モバイルナビ トグル =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // ===== Leaflet マップ初期化(該当ページのみ) =====
  const mapEl = document.getElementById('map');
  if (mapEl && window.L && Array.isArray(window.MAP_PINS)) {
    const map = L.map('map', { scrollWheelZoom: false }).setView([20, 100], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);

    const bounds = [];
    window.MAP_PINS.forEach(pin => {
      const marker = L.circleMarker([pin.lat, pin.lng], {
        radius: 8,
        color: pin.color || '#a8382f',
        fillColor: pin.color || '#a8382f',
        fillOpacity: 0.85,
        weight: 2
      }).addTo(map);
      marker.bindPopup(`<strong>${pin.name}</strong><br>${pin.note || ''}`);
      bounds.push([pin.lat, pin.lng]);
    });
    if (bounds.length) map.fitBounds(bounds, { padding: [30, 30] });
  }
});
