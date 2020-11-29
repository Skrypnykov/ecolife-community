// mapbox gl 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2tyeXBueWtvdiIsImEiOiJja2kzYW50YnoxaGs0MnJxaDd5MWlrbWRvIn0.aYlAwqGiytkSA2FJSrbdpg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [31, 48.55],
    zoom: 5,
});

map.scrollZoom.disable();

// geolocateControl
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
        trackUserLocation: true
}));

// mapControl
map.addControl(new mapboxgl.NavigationControl());