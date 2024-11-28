import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import BasinUi from '@/views/BasinUi.vue'


    const routes = [
      { path : '/', name : 'HomePage', component : HomePage,  },
      { path : '/about', name : 'AboutPage', component : AboutPage,  },
      { path : '/ui', name : 'BasinUi', component : BasinUi,  },
      
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
