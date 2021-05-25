/*
 * @Author: huananbeef
 * @Date: 2021-05-25 11:40:04
 * @LastEditors: huananbeef
 * @LastEditTime: 2021-05-25 16:10:58
 * @Description: file content
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
(async()=>{
    const app = createApp(App);
    app.use(router).mount('#app', true)
})()

