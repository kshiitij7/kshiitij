<template>
<v-main>
    <!-- Left Side Bar -->
    <v-navigation-drawer rail app color="#022a38">
        <v-list>
           
            <v-list-item @click="toggleLayerList">
                <v-list-item-title>
                    <v-icon>mdi-layers </v-icon>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>
                    <v-icon>mdi mdi-chart-timeline</v-icon>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer app v-model="LayerList" width="270">
        <v-container>
            <v-row>
                <v-col class="d-flex justify-center align-center">
                    <h2 class="font-weight-bold">Layers List</h2>
                </v-col>

            </v-row>
            <v-row>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" v-bind="props">
                            Basin Boundary
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                Ganga Basin
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" v-bind="props">
                            Administrative Boundary
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                States
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                Districts
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>
                                Sub-Distrcits
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-row>
        </v-container>
    </v-navigation-drawer>

    <!-- Right Side Bar -->
    <v-navigation-drawer rail app location="right" color="#022a38">
        <v-list>
            <v-list-item>
                <v-list-item-title>
                    <v-icon>mdi-magnify</v-icon>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>
                    <v-icon>mdi-information</v-icon>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>
                    <v-icon>mdi-ruler-square</v-icon>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>
                    <v-icon>mdi mdi-gesture-swipe</v-icon>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <div ref="MapRef" style="width: 100%; height: 100vh;">
        <MapPage />
    </div>

</v-main>
</template>

<script>
import MapPage from '@/components/MapPage.vue';

export default {
    name: 'BasinUi',
    components: {
        MapPage,
    },
    data() {
        return {
            LayerList: false,
            selectedBaseMap: null,
        };
    },
    methods: {
        toggleLayerList() {
            this.LayerList = !this.LayerList;
        },
    },
};
</script>

<style scoped>

</style>
