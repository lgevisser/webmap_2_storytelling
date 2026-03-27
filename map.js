'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoibGdldmlzc2VyIiwiYSI6ImNtbjdlY3kybjAwMjQycXNkcW5wb2diaWkifQ.snhtV7KYMJlGpHsk7W9K-w'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [12.5683, 55.6761],
    zoom: 11
});

var noise_url = "./Data/Noise2022_Denmark.geojson"
var bike_url = "./Data/BikeDataFree.geojson"

map.on('load', function(){
  map.addSource('noise_data', {
    'type': 'geojson',
    'data': noise_url,
  });
  map.addLayer({
    'id': 'noise',
    'type': 'fill',
    'source': 'noise_data',
    'paint': {
      'fill-color': 
        ['step', ['get', 'isov1'],
          '#d9ef8b',
          53, '#fee08b',
          58, '#fc8d59',
          63, '#d73027',
          68, '#a50026'
        ],
      'fill-outline-color': '#000000',
      'fill-opacity': 0.45
    }
  })
  map.addSource('bike_data', {
    'type': 'geojson',
    'data': bike_url
  });
  map.addLayer({
    'id': 'bike',
    'type': 'line',
    'source': 'bike_data',
    'paint': {
      'line-color': '#2ecc40',
      'line-opacity': 1.0,
      'line-width': 2
    }
  })
});

map.on('click', 'bike', function(e) {
  var coordinates = e.features[0].geometry.coordinates[0].slice();
  var infraType = e.features[0].properties.fclass || 'Bike infrastructure';

  new mapboxgl.Popup()
  .setLngLat(coordinates)
  .setHTML(infraType)
  .addTo(map);
});

map.on('mouseenter', 'bike', function() {
  map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'bike', function() {
  map.getCanvas().style.cursor = '';
});