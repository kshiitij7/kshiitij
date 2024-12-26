<template>
<div class="WaterQuality">
    <v-main>
        <div style="height: 86vh;">
            <MapComponent :dashLayers= "mapLayers" :center="[80.3319, 26.4499]" :zoom="10" :minZoom="5.5"/>
        </div>

        <div>
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
import LeftSideBar from '@/Layouts/LeftSideBar.vue';
import RightSideBar from '@/Layouts/RightSideBar.vue';

export default {
    name: 'WaterQuality',
    components: {
        MapComponent,
        RightSideBar,
        LeftSideBar,
    },
    data(){
        return {
            mapLayers : [],
        }
    },

};
</script>
