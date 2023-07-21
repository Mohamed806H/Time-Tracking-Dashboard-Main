import { createRouter, createWebHistory } from 'vue-router'

import MainDash from '../views/MainDash.vue'
import DailyDash from '../views/DailyDash.vue'
import WeeklyDash from '../views/WeeklyDash.vue'
import MonthlyDash from '../views/MonthlyDash.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'daily',
      component: DailyDash
  },
    {
      path: '/daily',
      name: 'DailyDash',
      component: DailyDash
    },
    {
      path: '/weekly',
      name: 'WeeklyDash',
      component: WeeklyDash
    },
    {
                path: '/monthly',
      name: 'MonthlyDash',
      component: MonthlyDash
    }

  ]
})

export default router
