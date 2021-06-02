/*
 * @Author: huananbeef
 * @Date: 2021-05-25 11:40:04
 * @LastEditors: huananbeef
 * @LastEditTime: 2021-05-26 16:50:36
 * @Description: file content
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';

// Do not introduce on-demand in local development?
// In the local development for on-demand introduction, the number of browser requests will increase by about 20%.
// Which may slow down the browser refresh
// Therefore, all are introduced in local development, and only introduced on demand in the production envirnoment

// import('ant-design-vue/dist/antd.less')

(async()=>{
    const app = createApp(App);
    app.use(router).mount('#app', true)
})()

