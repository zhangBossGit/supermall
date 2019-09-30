import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
    headers: {}
  });

  // 1.请求拦截   use()中有两个函数 成功函数和失败函数
  instance.interceptors.request.use(config => {//拦截成功返回一个配置对象
    // console.log(config);

    //拦截之后 要返回出去
    return config;
  }, err => {
    // console.log(err);
  });

  // 2.响应拦截   (拦截获取到的所有信息)
  instance.interceptors.response.use(res => {
    // console.log(res);

    //拦截成功要返回 可直接返回data数据
    return res
  }, err => {
    // console.log(err);
  });

  // 3.发送真正的网络请求
  return instance(config)
}
