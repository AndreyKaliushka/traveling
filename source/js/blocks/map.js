import '../vendor/leaflet';

const map = L.map('map', {
  scrollWheelZoom: false,
}).setView([55.77507, 37.63268], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const leafletIcon = L.icon({
  iconUrl: ('./img/svg/map-pin.svg'),
  className: 'company-information__map-icon',
});

const marker = L.marker([55.77507, 37.63268], {icon: leafletIcon}).addTo(map);

export {marker, map};
