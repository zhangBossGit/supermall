import {request} from './request.js'

export function getHomeMultidata() { //获取home多个数据
  return request({
    url: '/api/v1/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/api/v1/home/data',
    params: { //网址后面传值
      type,
      page
    }
  })
}
