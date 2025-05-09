import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ExamDetails from '../views/ExamDetails.vue'
import Home from '../components/Home.vue'

const routes = [
    {path: '/', component: Home},
  { path: '/dashboard', component: Dashboard },
  { path: '/exame/:id', component: ExamDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
