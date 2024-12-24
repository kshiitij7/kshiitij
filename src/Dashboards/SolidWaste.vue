<template>
    <div class="SolidWaste">
        <v-main>
            <div style="height: 86vh;">
                <MapComponent :center="[82.0662, 26.2648]" :zoom="10" :minZoom="5.5"/>
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
        name: 'SolidWaste',
        components: {
            MapComponent,
            RightSideBar,
        },
    
    };
    </script>
    