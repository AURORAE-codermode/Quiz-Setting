import QuestionView from '@/views/element/QuestionView.vue'
import UserView from '@/views/element/UserView.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:'/user',
    name:'user',
    component:UserView
  },
  {
    path:'/question',
    name:'question',
    component:QuestionView
  },
  {
    path:'/',
    redirect: '/user'
  }
  // 已移除关于页 (AboutView.vue 已删除)
]

const router = new VueRouter({
  routes
})

export default router






