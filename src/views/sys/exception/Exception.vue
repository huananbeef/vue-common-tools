<!--
 * @Author: huananbeef
 * @Date: 2021-06-02 17:01:59
 * @LastEditors: huananbeef
 * @LastEditTime: 2021-06-02 18:38:04
 * @Description: file content
-->
<script lang="tsx">
import type {PropType} from 'vue';
import {defineComponent,ref,computed,unref} from 'vue';
import {ExceptionEnum} from '@/enums/exceptionEnum';

import {useRoute} from 'vue-router';
interface MapValue{
  title: string;
  subTitle: string;
  btnText?:string;
  icon?:string;
  handler?:Fn;
  status?: string;
}
export default defineComponent({
  name: 'ErrorPage',
  props:{
    // status code
    status:{
      type: Number as ProType<>
    }
  }
})
</script>
<style lang="less">

</style>
