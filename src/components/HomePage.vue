<template>
    <v-main class="slider-container">
        <div class="image-row">
            <v-img :src="logo" class="logo-image"></v-img>
            <v-img :src="nmcg" class="nmcg-image"></v-img>
        </div>
        <v-app-bar color="black" height="80" location="bottom">
            <h5 style="font-size: 15px; text-align: justify; font-family: 'Poppins', sans-serif; font-weight: 300;">Copyright © 2024 All Rights Reserved</h5>
        </v-app-bar>
    </v-main>

    </template> 
      
    <script>
    export default {
        name: 'HomePage',
        data() {
            return {
                logo: require('@/assets/img/ganga_logo.png'),
                nmcg: require('@/assets/img/nmcgGif.gif'),
            };
        },
    };
    </script> 
      
    <style scoped>
    .slider-container {
        background-color: white;
    }
    
    .image-row {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .nmcg-image {
        max-width: 800px;
        max-height: 800px;
    }
    </style>
    
