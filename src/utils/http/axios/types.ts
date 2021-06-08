export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

export interface RequestOptions {
  // Splicing request parameters to url
  joinPramsToUrl?:boolean;
  // Format request paramter time
  formatDate?:boolean;
  // Whether to process the request result
  isTransformRequestResult?:boolean;
  // Whether to join url
  joinPreix?:boolean;
  // Interface address, use the default apiUrl if you leave it blank
  apiUrl?:boolean;
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode;
  // Whether to add a timestamp
  joinTime?:boolean;
  ignoreCancelToken?:boolean;
}

export interface Result<T = any>{
  code: string;
  errcode: number;
  type: 'success' | 'error' | 'warning';
  msg: string;
  message: string;
  result: T;
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Recordable;
  // File parameter interface field name
  name?:string;
  // file name
  filename?:string;
  [key: string]:any
}
