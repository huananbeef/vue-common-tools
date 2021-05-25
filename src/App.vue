<!--
 * @Author: huananbeef
 * @Date: 2021-05-25 11:18:46
 * @LastEditors: huananbeef
 * @LastEditTime: 2021-05-25 16:12:38
 * @Description: file content
-->
<template>
  <router-view />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'App',
  setup(){
    return {}
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
