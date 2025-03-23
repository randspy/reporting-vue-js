import { createRouter, createWebHistory } from 'vue-router'
import PageReporting from '@/features/reporting/components/ReportingsPage.vue'
import PageNewReporting from '@/features/reporting/components/NewReportingPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'reporting',
      component: PageReporting,
    },
    {
      path: '/new',
      name: 'new-reporting',
      component: PageNewReporting,
    },
  ],
})

export default router
