/*
 * @Author: huananbeef
 * @Date: 2021-05-25 15:02:16
 * @LastEditors: huananbeef
 * @LastEditTime: 2021-05-25 15:37:32
 * @Description: file content
 */
import type {RouteRecordRaw} from 'vue-router';
import {RoleEnum} from '@/enums/roleEnum';
import { defineComponent } from 'vue';
export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface RouteMeta{
    // title
    title: string;
    // whether to ignore permissions
    ignoreAuth?: boolean;
    // role info
    roles?: RoleEnum[];
    // whether not to cache
    ignoreKeepAlive?:boolean;
    // Is it fixed on tab
    affix?: boolean;
    // icon on tab
    icon?: string;

    frameSrc?:string;
    // current page transition
    transitionName?:string;
    // wheter the route has been dynamically added
    hideBreadcrumb?:boolean;
}
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'>{
    name: string;
    meta: RouteMeta;
    component?: Component | string;
    components?: Component;
    children?:AppRouteRecordRaw[];
    props?: string | any;
    fullPath?: string;
}

export type AppRouteModule = AppRouteRecordRaw;