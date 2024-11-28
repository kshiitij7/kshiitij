<template>
    <div ref="map" class="map"></div>
    
    </template>
    
    <script>
    import 'ol/ol.css';
    import {Map} from 'ol';
    import BingMaps from 'ol/source/BingMaps';
    import View from 'ol/View';
    import TileLayer from 'ol/layer/Tile';
    import OSM from 'ol/source/OSM';
    import LayerSwitcher from 'ol-layerswitcher';
    import 'ol-layerswitcher/dist/ol-layerswitcher.css';
    import TileWMS from 'ol/source/TileWMS';
    import {get as getProjection} from 'ol/proj';
    import FullScreen from 'ol/control/FullScreen';
    
    export default {
        name: 'BasinComponent',
        mounted() {
            const osmLayer = new TileLayer({
                title: 'Open Street Map',
                type: 'overlay',
                source: new OSM(),
                visible: false,
            });
            const bingLayer = new TileLayer({
                title: 'Bing',
                type: 'overlay',
                source: new BingMaps({
                    key: "ArIdKOW0eb8TRcLZdt0l2cG8kHA_uW92yIvx1aFzsQ1xHxpnVRMGmO0N0neY8P90",
                    imagerySet: 'AerialWithLabels',
                }),
                visible: true,
            });
            const bhuvanLayer = new TileLayer({
                title: 'Bhuvan',
                type: 'overlay',
                source: new TileWMS({
                    params: {FORMAT: "image/jpeg",VERSION: "1.1.1",tiled: true,LAYERS: "bhuvan_imagery",exceptions: "application/vnd.ogc.se_inimage",},
                    url: "https://bhuvan-ras2.nrsc.gov.in/tilecache/tilecache.py",
                }),
                visible: false,
            });
            const basinBoundary = new TileLayer({
                title: 'Ganga Basin',
                type: 'overlay',
                source: new TileWMS({
                  url: 'http://192.168.17.37:8080/geoserver/Geo-Ganga/wms?',
                    params: {'LAYERS': 'Ganga_Basin_v4',  'TILED': true, 'VERSION': '1.1.1', },
                    serverType: 'geoserver',
                    tileGrid: new TileWMS().getTileGridForProjection(getProjection('EPSG:4326')),
                }),
                visible: true,
            });
            const basinStatesBoundary = new TileLayer({
                title: 'State Boundary',
                type: 'overlay',
                source: new TileWMS({
                    url: 'http://192.168.17.37:8080/geoserver/Geo-Ganga/wms?',
                    params: { 'LAYERS': 'states_boundary_ganga', 'TILED': true,'VERSION': '1.1.1', },
                    serverType: 'geoserver',
                    tileGrid: new TileWMS().getTileGridForProjection(getProjection('EPSG:4326')),
                }),
                visible: false,
            });
            const basinDistrictsBoundary = new TileLayer({
                title: 'District Boundary',
                type: 'overlay',
                source: new TileWMS({
                    url: 'http://192.168.17.37:8080/geoserver/Geo-Ganga/wms?',
                    params: { 'LAYERS': 'district_touch', 'TILED': true,'VERSION': '1.1.1', },
                    serverType: 'geoserver',
                    tileGrid: new TileWMS().getTileGridForProjection(getProjection('EPSG:4326')),
                }),
                visible: false,
            });
            const basinSubDistrictsBoundary = new TileLayer({
                title: 'Sub-District Boundary',
                type: 'overlay',
                source: new TileWMS({
                    url: 'http://192.168.17.37:8080/geoserver/Geo-Ganga/wms?',
                    params: { 'LAYERS': 'subdistrict_touch', 'TILED': true,'VERSION': '1.1.1', },
                    serverType: 'geoserver',
                    tileGrid: new TileWMS().getTileGridForProjection(getProjection('EPSG:4326')),
                }),
                visible: false,
            });
            const map = new Map({
                target: this.$refs.map,
                layers: [bhuvanLayer, osmLayer, bingLayer, basinSubDistrictsBoundary, basinDistrictsBoundary, basinStatesBoundary, basinBoundary],
                view: new View({ projection: 'EPSG:4326', center: [78.9629, 20.5937], zoom: 5.4,}),
            });       
            // LayerSwitcher
            const layerSwitcher = new LayerSwitcher({
                activationMode: 'click',
                startActive: false,
                tipLabel: 'Layers',
                collapseLabel: '\u00BB',
                expandLabel: '\u00AB',
                showRoot: false,
            });
            map.addControl(layerSwitcher);
            // FullScreen 
            const fullScreenControl = new FullScreen({
                tipLabel: 'Fullscreen',
            });
            map.addControl(fullScreenControl);
    
            this.map = map; 
        },      
    
      }
    </script>
    
    <style scoped>
    .map {
        width: 100%;
        height: 100%;
        z-index: 1000;
    }
    </style>
    