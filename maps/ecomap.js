// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps

var map = L.map( 'ecomap', {
  style: 'mapbox://styles/osmua/ck4wswg1w00c81clktu2l8ekz',
  center: [48.5, 30.8],
  minZoom: 6,
  zoom: 6,
  scrollWheelZoom: false,  
  zoomControl: false
});

// legent and control 
new L.Control.Zoom({ 
  position: 'bottomright' 
}).addTo(map);

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a','b','c']
}).addTo( map );
