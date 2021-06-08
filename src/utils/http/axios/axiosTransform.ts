/**
 * Data processing class, can be configured according to the project
*/
import { AnyTypeAnnotation } from '@babel/types';
import type { AxiosRequestConfig,AxiosResponse, AxiosTransformer} from 'axios';
import type {RequestOptions,Result} from './types';

export interface CreateAxiosOptions extends AxiosRequestConfig{
  prefixUrl?:string;
  transform?:AxiosTransformer;
  requestOptions?:RequestOptions;
}

export abstract class AxiosTransform {
  /**
   * @description: Process configuration before request
  */
 beforeRequestHook?:(config: AxiosRequestConfig,options: RequestOptions) => AxiosRequestConfig;
  /**
    * @description: Request successfully processed
  */
 transformRequestHook?:(res: AxiosResponse<Result>, options: RequestOptions) => any;
 /**
  * @description: Request fail processed
 */
  requestCatchHook?:(e: Error)=> Promise<any>;
  /**
   * @description: Request before
  */
   requestInterceptors?:(config: AxiosRequestConfig) => AxiosRequestConfig;
   /**
   * @description: 请求之后的拦截器
   */
    responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

    /**
     * @description: 请求之前的拦截器错误处理
     */
    requestInterceptorsCatch?: (error: Error) => void;
  
    /**
     * @description: 请求之后的拦截器错误处理
     */
    responseInterceptorsCatch?: (error: Error) => void;
}
