<template>
    <div class="LeftSideBar">
        <v-main style="--v-layout-top: 0px;">
            <v-navigation-drawer rail color="black" >
            <v-list>
               <!-- Layers Button -->
               <v-list-item @click="openLeftDrawer('layers')" class="cursor-pointer">
                    <v-tooltip location="left">
                        <template v-slot:activator="{ props: tooltip }">
                            <v-icon v-bind="tooltip">mdi-layers-triple</v-icon>
                        </template>
                        <span>Layers</span>
                    </v-tooltip>
                </v-list-item>
                <v-divider :thickness="2" color="white"></v-divider>
                <!-- Time Series Button -->
                <v-list-item @click="openLeftDrawer('timeSeries')" class="cursor-pointer">
                    <v-tooltip location="left">
                        <template v-slot:activator="{ props: tooltip }">
                            <v-icon v-bind="tooltip">mdi-chart-timeline</v-icon>
                        </template>
                        <span>Time Series</span>
                    </v-tooltip>
                </v-list-item>
                <v-divider :thickness="2" color="white"></v-divider>
                <!-- Feature Info Button -->
                <v-list-item @click="openLeftDrawer('featureInfo')" class="cursor-pointer">
                    <v-list-item-title>
                        <v-tooltip location="right">
                            <template v-slot:activator="{ props: tooltip }">
                                <v-icon v-bind="tooltip">mdi-information</v-icon>
                            </template>
                            <span>Feature Info</span>
                        </v-tooltip>
                    </v-list-item-title>
                </v-list-item>
                <v-divider :thickness="2" color="white"></v-divider>
                <!-- Compare Button -->
                <v-list-item @click="openLeftDrawer('compare')" class="cursor-pointer">
                    <v-list-item-title>
                        <v-tooltip location="right">
                            <template v-slot:activator="{ props: tooltip }">
                                <v-icon v-bind="tooltip">mdi-compare</v-icon>
                            </template>
                            <span>Compare Tool</span>
                        </v-tooltip>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        
        <!-- Dynamic Drawer -->
        <v-navigation-drawer v-model="isLeftDrawerOpen" location="left" :width="250" >
            <!-- Layers Content -->
            <div v-if="activeLeftTab === 'layers'">
                <v-list-item>
                    <div class="text-h5" style="font-family: 'Poppins', sans-serif; font-weight:500; text-align: center;">Layer Switcher</div>
                </v-list-item>
                <v-divider :thickness="2" color="black"></v-divider>
                <v-title>
                    <div class="text-h7" style="font-family: 'Poppins', sans-serif; font-weight:500; margin-top: 20px; margin-left: 20px;">Base Maps</div>
                </v-title>
                <v-select v-model="baseMaps" :items="baseMapsLayers" label="Please Select a Map" required></v-select>
                <v-title>
                    <div class="text-h7" style="font-family: 'Poppins', sans-serif; font-weight:500; margin-top: 20px; margin-left: 20px;">Administrative Boundaries</div>
                </v-title>
                <v-select style="margin-bottom: 50px;" chips multiple clearable v-model="adminBoundary" :items="adminBoundaryLayers" label="Please Select a Layer" required></v-select>
                <v-divider :thickness="3"></v-divider>
              </div>
            <!-- Time Series Content -->
            <div v-else-if="activeLeftTab === 'timeSeries'">
                <v-list-item>
                    <div class="text-h5" style="font-family: 'Poppins', sans-serif; font-weight:500; text-align: center;">Time Series Data</div>
                </v-list-item>
                <v-divider :thickness="2" color="black"></v-divider>
                <v-select style="margin-top: 40px; margin-bottom: 30px;" v-model="timeSeries" :items="timeSeriesLayers" label="Please Select an Option" required></v-select>
                <v-divider :thickness="3"></v-divider>
            </div>
            <!-- Feature Info Content -->
            <div v-else-if="activeLeftTab === 'featureInfo'">
                    <v-card elevation="0">
                        <v-card-title>
                            <div class="text-h5" style="font-family: 'Poppins', sans-serif; font-weight:500; text-align: center;">Feature Info Tool</div>
                        </v-card-title>
                        <v-divider :thickness="2" color="black"></v-divider>
                        <v-card-text>
                            <v-switch color="blue" label="Enable Feature Info"></v-switch>
                          
                        </v-card-text>
                    </v-card>
                    <v-divider :thickness="3"></v-divider>
                    <v-img src="../assets/rightPng/feature_tool.png" style="margin-top: 70px;opacity: 0.8;" contain></v-img>
                </div>
                <!-- Compare Tool Content -->
          <div v-else-if="activeLeftTab === 'compare'">
                    <v-card elevation="0">
                        <v-card-title>
                            <div  class="text-h5" style="font-family: 'Poppins', sans-serif; font-weight:500; text-align: center;">Comparison Tool</div>
                        </v-card-title>
                        <v-divider :thickness="2" color="black"></v-divider>
                        <v-card-text>
                            <v-title>
                                <div class="text-h8 font-weight-bold">Left Side</div>
                            </v-title>
                            <v-select v-model="leftSelect" :items="leftMonths" label="Please Select a Layer"></v-select>
                            <v-title>
                                <div class="text-h8 font-weight-bold">Right Side</div>
                            </v-title>
                            <v-select v-model="rightSelect" :items="rightMonths" label="Please Select a Layer"></v-select>
                            <v-btn :disabled="!isBothSelected || showError" @click="handleCompare">Compare</v-btn>
                            <div v-if="showError" class="text-red text-caption mt-2">Please select different months.</div>
                        </v-card-text>
                    </v-card>
                    <v-divider :thickness="3"></v-divider>
                    <v-img src="../assets/rightPng/compare_tool.png" style="margin-top: 80px; opacity: 0.9;" max-height="300" contain></v-img>
                </div>
        </v-navigation-drawer>
        </v-main>
    </div>
</template>

<script>
export default {
    name: 'LeftSideBar',
    
    data() {
        return {
            // Left 
            isLeftDrawerOpen: false,
            activeLeftTab: null,
            leftSelect: null,
            rightSelect: null,
        };
    },
    computed: {
            isBothSelected() {
                return this.leftSelect && this.rightSelect;
            },
            showError() {
                return this.leftSelect === this.rightSelect;
            },
        },
    
    methods: {
        openLeftDrawer(leftTab) {
            if(this.activeLeftTab === leftTab && this.isLeftDrawerOpen){
                this.isLeftDrawerOpen = false;
                this.activeLeftTab = null;
            } else {
                this.activeLeftTab = leftTab;
                this.isLeftDrawerOpen = true;
            }
        },
        handleCompare() {
                if (!this.showError) {
                    alert('Comparison started!');
                }
            },
      },
};
</script>