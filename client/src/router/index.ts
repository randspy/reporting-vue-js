import { createRouter, createWebHistory } from 'vue-router'
import PageReporting from '@/features/reporting/components/ReportingsPage.vue'
import PageNewReporting from '@/features/reporting/components/NewReportingPage.vue'
import MainLayout from '@/layout/MainLayout.vue'
import PageNotFound from '@/layout/PageNotFound.vue'
import { DefaultRoute } from './routes.config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: DefaultRoute,
    },
    {
      path: '/app',
      name: 'app',
      component: MainLayout,
      redirect: DefaultRoute,
      children: [
        {
          path: 'reporting',
          name: 'reporting',
          component: PageReporting,
        },
        {
          path: 'reporting/new',
          name: 'new-reporting',
          component: PageNewReporting,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFound,
    },
  ],
})

export default router
