<template>
<div class="FloodHazard">
    <v-main>
        <LeftSideBar />
        <div style="height: 86vh;">
            <MapComponent :dashLayers="mapLayers" :center="[82.5644, 25.1441]" :zoom="10" :minZoom="5.5" />
        </div>
        <RightSideBar />
    </v-main>
</div>
</template>

<script>
import MapComponent from '@/components/MapComponent.vue';
import LeftSideBar from '@/Layouts/LeftSideBar.vue';
import RightSideBar from '@/Layouts/RightSideBar.vue';

export default {
    name: 'FloodHazard',
    components: {
        MapComponent,
        RightSideBar,
        LeftSideBar,
    },
    data() {
        return {
            mapLayers: [],
        }
    },

};
</script>
