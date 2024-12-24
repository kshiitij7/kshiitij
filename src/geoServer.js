import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import getProjection from 'ol/proj';

function createWMSLayer(layerName, title, visibility = true) {
  return new TileLayer({
    title: title,
    type: 'overlay',
    source: new TileWMS({
      url: 'http://192.168.17.37:8080/geoserver/Geo-Ganga/wms?',
      params: {'LAYERS': layerName, 'TILED': true, 'VERSION': '1.1.1', },
      serverType: 'geoserver',
      tileGrid: new TileWMS().getTileGridForProjection(getProjection('EPSG:4326')),
    }),
    visible: visibility,
  });
}

const createLayer = createWMSLayer();
export default createLayer