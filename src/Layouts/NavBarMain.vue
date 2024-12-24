<template>
    <v-app-bar app color="white" dark class="button-bar" height="50" elevation="1">
        
        <v-row class="fill-height" align="center" justify="space-between"></v-row>
        <v-divider :thickness="1" color="black" vertical></v-divider>
        <v-img :src="abcd"  max-width="150" max-height="150" class="image-hover"></v-img>
        <v-divider :thickness="1" color="black" vertical></v-divider>
        
        <router-link to="/">
            <v-btn :class="{'active': isActive('/')}" >
                <v-icon left>mdi-home</v-icon> <div style="font-family: 'Poppins', sans-serif; font-weight: 400;">Home</div>
            </v-btn>
        </router-link>
    
        <v-divider :thickness="1" color="black" vertical></v-divider>
    
        <router-link to="/about">
            <v-btn :class="{'active': isActive('/about')}">
                <v-icon left>mdi-information</v-icon> <div style="font-family: 'Poppins', sans-serif; font-weight: 400;">About</div>
            </v-btn>
        </router-link>
    
        <v-divider :thickness="1" color="black" vertical></v-divider>
    
        <router-link to="/basin">
            <v-btn :class="{'active': isActive('/basin')}">
                <v-icon left>mdi-leaf</v-icon><div style="font-family: 'Poppins', sans-serif; font-weight: 400;">Ganga Basin</div>
            </v-btn>
        </router-link>
    
        <v-divider :thickness="1" color="black" vertical></v-divider>
    
        <router-link to="/quality">
        <v-btn :class="{'active': isActive('/quality')}">
            <v-icon left>mdi-water-check</v-icon><div style="font-family: 'Poppins', sans-serif; font-weight: 400;">Water Quality</div>
        </v-btn>
        </router-link>
    
        <v-divider :thickness="1" color="black" vertical></v-divider>

        <router-link to="/flood">
        <v-btn :class="{'active': isActive('/flood')}">
            <v-icon left>mdi-alert</v-icon><div style="font-family: 'Poppins', sans-serif; font-weight: 400;"> Flood Hazard</div>
        </v-btn>
    </router-link>

        <v-divider :thickness="1" color="black" vertical></v-divider>

        <router-link to="/solid">
        <v-btn :class="{'active': isActive('/solid')}">
            <v-icon left>mdi-recycle</v-icon><div style="font-family: 'Poppins', sans-serif; font-weight: 400;"> Solid Waste</div>
        </v-btn>
    </router-link>

        <v-divider :thickness="1" color="black" vertical></v-divider>
    
        <v-img :src="nmcg"  max-width="130" class="image-hover"></v-img>
        <v-divider :thickness="1" color="black" vertical></v-divider>
        <v-spacer></v-spacer>
    
    </v-app-bar>
    </template>
    
    <script>
    export default {
        name: 'NavBarMain',
    
        data() {
            return {
                nmcg:require('@/assets/img/nmcgGif.gif'),     
                abcd: require('@/assets/img/123.png'),
            }
        },
    
        methods: {
            isActive(route) {
                return this.$route.path === route;
            }
        }
    }
    </script> 
      
    <style scoped>
    .active {
        height: 60px; 
        background-color: rgba(172, 9, 9, 0.2);  
        color: rgb(172, 9, 9);
        font-size: 16px;
         
    }
    .image-hover {
      transition: 0.3s ease; 
    }
    .image-hover:hover {
      transform: scale(1.2); 
    }
    </style>
    