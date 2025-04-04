import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/ResourcesView.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('../views/QuizView.vue')
    },
    {
      path: '/learning/cyberbullying',
      name: 'cyberbullying',
      component: () => import('../views/learning/CyberbullyingView.vue')
    },
    {
      path: '/learning/cyberbullying-scenario',
      name: 'cyberbullying-scenario',
      component: () => import('../views/learning/CyberbullyingScenario.vue')
    },
    {
      path: '/learning/phishing',
      name: 'phishing',
      component: () => import('../views/learning/PhishingView.vue')
    },
    {
      path: '/quiz/question',
      name: 'question',
      component: () => import('../views/quiz/QuestionView.vue')
    }
  ]
})

export default router
