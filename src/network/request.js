import axios from 'axios'

export function request(config){
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/w6",
    timeout: 5000
  })  

  //2.拦截设置

  //3.发送请求
  return instance(config)
}