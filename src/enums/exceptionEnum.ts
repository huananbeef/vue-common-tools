/*
 * @Author: huananbeef
 * @Date: 2021-06-02 17:02:07
 * @LastEditors: huananbeef
 * @LastEditTime: 2021-06-02 18:22:35
 * @Description: file content
 */
export enum ExceptionEnum {
  // page not access
  PAGE_NOT_ACCESS = 403,

  // page not fount
  PAGE_NOT_FOUND = 404,

  // error
  ERROR = 500,

  // net work error
  NET_WORK_ERROR = 10000,

  // No data on the page. In fact, it is not an exception page
  PAGE_NOT_DATA = 10100,

  // 
  PAGE_DEVELOPMENT = 10200,
}

export enum ErrorTypeEnum {
  VUE = 'vue',
  SCRIPT = 'script',
  RESOURCE = 'resource',
  AJAX = 'ajax',
  PROMISE = 'promise'
}
