/*
 * @Author: huananbeef
 * @Date: 2021-05-25 15:38:52
 * @LastEditors: huananbeef
 * @LastEditTime: 2021-05-25 16:13:14
 * @Description: file content
 */
import type{ AppRouteRecordRaw,AppRouteModule} from '@/router/types';
export const RootRoute: AppRouteRecordRaw = {
    path: '/',
    name: 'Root',
    meta: {
        title: 'Root'
    },
    component: () => import('@/views/dashboard/workbench/index.vue')
};

// Basic routing without permission
export const basicRoutes = [RootRoute];