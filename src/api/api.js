/* 接口统一管理 */
import { Get, POST } from './http'
// 接口 baseUrl 管理
let baseUrl = '';
let exclUrl = '';
if (process.env.NODE_ENV === 'production') {
  // baseUrl = 'http://118.24.85.227:7776'
  baseUrl = 'http://ay.dev.idaqi.com/';
  exclUrl = 'http://ay.dev.idaqi.com/';
} else if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://192.168.71.196';
  exclUrl = '/api'
}
export default {
  exclUrl,
  baseUrl,
  /* 登录部分开始 */
  // 登录接口
  loginUser (params) {
    // return Get(`${baseUrl}/test`, params)
    return Get(`${baseUrl}/test`, params)
  },

}
