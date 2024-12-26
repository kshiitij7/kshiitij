<template>
<div class="GangaBasin">
    <v-main>
        <div style="height: 86vh;">
            <MapComponent :dashLayers="mapLayers" :center="[82.0662, 26.2648]" :zoom="6.5" :minZoom="6.5" />
        </div>

        <div ref="RightRef">
            <RightSideBar />
        </div>

        <div ref="LeftRef">
          <LeftSideBar />
        </div>

    </v-main>
</div>
</template>

  
  
<script>
import MapComponent from '@/components/MapComponent.vue';
import RightSideBar from '@/Layouts/RightSideBar.vue';
import LeftSideBar from '@/Layouts/LeftSideBar.vue';
import TileLayer from 'ol/layer/Tile';
import { get as getProjection} from 'ol/proj';
import { TileWMS } from 'ol/source';


export default {
    name: 'GangaBasin',
    components: {
        MapComponent,
        RightSideBar,
        LeftSideBar,
    },
    data() {
        return {
            mapLayers: [],
            // Left 
            isLeftDrawerOpen: false,
            activeLeftTab: null,
            leftSelect: null,
            rightSelect: null,
        };
    },
    
    mounted() {
        const basinBoundary = new TileLayer({
            title: 'Ganga Basin',
            type: 'overlay',
            source: new TileWMS({
                url: 'http://192.168.17.37:8080/geoserver/Geo-Ganga/wms?',
                params: {'LAYERS': 'Ganga_Basin_v4','TILED': true,'VERSION': '1.1.1',},
                serverType: 'geoserver',
                tileGrid: new TileWMS().getTileGridForProjection(getProjection('EPSG:4326')),
            }),
            visible: true,
        });
        this.mapLayers.push(basinBoundary);
        
    },
  
};
</script>

<style>
.GangaBasin{
  overflow: hidden;
}
</style>