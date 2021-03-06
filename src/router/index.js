import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },

  {
    path: '/clinic',
    component: Layout,
    redirect: '/clinic/clinicdata',
    name: '门诊信息',
    meta: { title: '门诊信息', icon: 'clinic' },
    children: [
      {
        path: 'clinicdata',
        name: '门诊资料',
        component: _import('clinicdata/index'),
        meta: { title: '门诊资料上传', icon: 'clinicMsg' }
      },
      {
        path: 'doctorUpload',
        name: '医生资料',
        component: _import('doctorUpload/index'),
        meta: { title: '医生资料上传', icon: 'doctorMsg' }
      },
      {
        path: 'project',
        name: '项目上传',
        component: _import('projectUpload/index'),
        meta: { title: '项目上传', icon: 'project' }
      },
      {
        path: 'brand',
        name: '品牌介绍',
        component: _import('brand/uploadBrand'),
        meta: { title: '品牌介绍', icon: 'brand' }
      },
    ]
  },
  {
    path: '/resource',
    component: Layout,
    redirect: '/resource/table',
    name: '资源管理',
    meta: { title: '资源管理', icon: 'example' },
    children: [
      {
        path: 'projectList',
        name: '项目管理',
        component: _import('projectList/index'),
        meta: { title: '项目管理', icon: 'projectList' }
      },
      {
        path: 'projectList/projectDetail',
        name: '项目详情',
        component: _import('projectList/projectDetail'),
        meta: { title: '项目详情', icon: 'projectList' },
        hidden: true
      },
      {
        path: 'doctorList',
        name: '医生管理',
        component: _import('doctorList/index'),
        meta: { title: '医生管理', icon: 'doctorList' },
      },
      {
        path: 'doctorList/doctorDetail',
        name: '医生详情',
        component: _import('doctorList/doctorDetail'),
        meta: { title: '医生详情', icon: 'doctorList' },
        hidden: true
      },
      {
        path: 'patientList',
        name: '患者管理',
        component: _import('patientList/index'),
        meta: { title: '患者管理', icon: 'patientList' }
      },
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
