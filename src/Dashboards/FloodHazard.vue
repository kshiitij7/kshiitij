<template>
<div class="FloodHazard">
    <v-main>
        <div style="height: 86vh;">
            <MapComponent :center="[82.5644, 25.1441]" :zoom="10" :minZoom="5.5"/>
        </div>

        <div>
            <RightSideBar />
        </div>
    </v-main>
</div>
</template>

<script>
import MapComponent from '@/components/MapComponent.vue';
import RightSideBar from '@/Layouts/RightSideBar.vue';

export default {
    name: 'FloodHazard',
    components: {
        MapComponent,
        RightSideBar,
    },

};
</script>
