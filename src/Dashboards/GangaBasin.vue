<template>
<div class="GangaBasin">
    <v-main>
        <div style="height: 86vh;">
          <MapComponent :layers="mapLayers" :center="[82.0662, 26.2648]" :zoom="6.5" :minZoom="5.5"/> 
  </div>

  <div ref="RightRef">
    <RightSideBar />
  </div>
    </v-main>
</div>


</template>

<script>
import MapComponent from '@/components/MapComponent.vue';
import RightSideBar from '@/Layouts/RightSideBar.vue';
import createLayer from '@/geoServer';

export default {
  name: 'GangaBasin',
  components: {
    MapComponent,
    RightSideBar,
  },
  data() {
    return {
      mapLayers: [
        createLayer('Ganga_Basin_v4', 'Ganga Basin Boundary', true),    
      ],
    };
  },
 
};
</script>