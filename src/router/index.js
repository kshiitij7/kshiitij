import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import GangaBasin from '@/Dashboards/GangaBasin.vue';
import WaterQuality from '@/Dashboards/WaterQuality.vue';
import FloodHazard from '@/Dashboards/FloodHazard.vue';
import SolidWaste from '@/Dashboards/SolidWaste.vue';


const routes = [
  { path : '/', name : 'HomePage', component : HomePage,  },
  { path : '/about', name : 'AboutPage', component : AboutPage,  },
  { path : '/basin', name : 'GangaBasin', component : GangaBasin,  },
  { path : '/quality', name : 'WaterQuality', component : WaterQuality,  },
  { path : '/flood', name : 'FloodHazard', component : FloodHazard,  },
  { path : '/solid', name : 'SolidWaste', component : SolidWaste,  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
