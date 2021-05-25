/*
 * @Author: huananbeef
 * @Date: 2021-05-25 11:52:13
 * @LastEditors: huananbeef
 * @LastEditTime: 2021-05-25 15:44:30
 * @Description: router
 */
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import type{App} from 'vue';
import { basicRoutes } from './routes';

// app router
const router = createRouter({
    history:createWebHistory(),
    routes: (basicRoutes as unknown) as RouteRecordRaw[],
    strict: true,
    scrollBehavior: ()=>({left:0,top:0})
})
// config router
export function setupRouter(app:App<Element>){
    app.use(router)
}
export default router