import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/welcome',
    children: [{
      path: 'welcome',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '后台管理系统', icon: 'dashboard' }
    }]
  },

  {
    path: '/goods',
    component: Layout,
    name: 'Goods',
    meta: { title: '商品管理', icon: 'el-icon-s-shop' },
    children: [
      {
        path: 'add',
        name: 'add',
        component: () => import('@/views/goods/addGoods/index'),
        meta: { title: '商品添加', icon: 'el-icon-edit-outline' }
      },
      {
        path: 'detial',
        name: 'detial',
        component: () => import('@/views/goods/detailGoods/index'),
        meta: { title: '商品详情', icon: 'el-icon-notebook-1' }
      }
    ]
  },
  {
    path: '/users',
    component: Layout,
    name: 'Users',
    redirect: 'order/addUsers',
    meta: { title: '用户管理', icon: 'el-icon-user-solid' },
    children: [
      {
        path: 'addUsers',
        name: 'addUsers',
        component: () => import('@/views/users/addUsers/index'),
        meta: { title: '添加用户', icon: 'el-icon-user' }
      },
      {
        path: 'userList',
        name: 'userList',
        component: () => import('@/views/users/userList/index'),
        meta: { title: '用户列表', icon: 'el-icon-notebook-2' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/orderList',
        component: () => import('@/views/order/index'), // Parent router-view
        name: 'orderList',
        meta: { title: '订单列表', icon: 'list' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    meta: { title: '特色功能', icon: 'example' },
    children: [
      {
        path: '/music',
        meta: { title: '音乐播放', icon: 'el-icon-service' },
        component: () => import('@/views/other/music/index') // Parent router-view
      },
      {
        path: '/game',
        meta: { title: '娱乐放松', icon: 'people' },
        component: () => import('@/views/other/game/index') // Parent router-view
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/showData',
        meta: { title: '数据可视化', icon: 'chart' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
