import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

let asyncMenuData = []
let asyncRoutes = []

function filterAsyncData(data) {
  let temp = []
  data.forEach(item => {
    const isMenuAdded = routes.every(route => route.name !== item.name)
    if (isMenuAdded) asyncMenuData.push(item)
    // 如果有子層，將子層暫存在 temp 裡
    if (item.children) {
      item.children.forEach(child => {
        temp.push(child)
      })
    }
  })

  if (temp.length >= 1) filterAsyncData(temp)
  return asyncMenuData ? asyncMenuData : []
}

function asyncMenusToRoutes(data) {
  data.forEach(item => {
    generateAsyncRoutes(item)
  })

  asyncRoutes.push({
    path: '*',
    name: 'not-found',
    component: NotFound
  })

  asyncRoutes.forEach(asyncRoute => router.addRoute(asyncRoute))

  return asyncRoutes ? asyncRoutes : []
}

function generateAsyncRoutes(item) {
  if (item.name) {
    asyncRoutes.push({
      path: '/'+item.path+'',
      name: item.name,
      component: () => import('../views/'+ item.component +'')
    })
  } 
}

const routes = [
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  },
]
const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

// router.beforeEach(async (to, from, next) => {
//   const { menu } = await store.dispatch('fetchHeader')
//   asyncMenuData = filterAsyncData(menu)
//   next()
// })

// 在路由完成初始導航時調用，如果有異步操作放置到這裡
router.onReady(async () => {
  const { menu } = await store.dispatch('fetchHeader')
  asyncMenuData = filterAsyncData(menu)
  asyncMenusToRoutes(asyncMenuData)
  console.log('asyncRoutes', asyncRoutes)
})
export default router
