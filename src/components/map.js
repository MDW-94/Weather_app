import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';

const map = new Map({
    basemap: "topo-vector"
});

const view = new MapView({
    container: "viewDiv",
    map: map
})


// npm install @arcgis/core