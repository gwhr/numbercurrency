import axios from 'axios';
import qs from 'qs';
import {_that} from '../main'
import store from '@/store'
// 拦截器
axios.interceptors.request.use(
  config => {
    store.commit('showLoading')
    return config
  },
  err => {
    store.commit('showLoading')
    return Promise.reject(err)
  })
  axios.interceptors.response.use(
    config => {
      store.commit('hideLoading')
      if(config.data.code == 405){
        _that.$toast.fail(config.data.descrp)
        _that.$router.replace({
          path:'/login'
        })
      }
      return config
    },
    err => {
      store.commit('hideLoading')
      return Promise.reject(err)
    })
export default{
    request(url,method,data={},baseURL='http://mwakuang.test.nbtest.net/'){
        let options = {
            url,
            method,
            baseURL
        }
        if(method == 'get' || method == 'delete' ){
            options.params = data
        }
        if(method !== 'get' || method !== 'delete' ){
            if(data.type == "formData"){
              options.headers= {'Content-Type': 'multipart/form-data;charset=UTF-8'}
              options.data=data.formData;
            }else{
              if(sessionStorage.getItem('token')){
                data.token = JSON.parse(sessionStorage.getItem('token'))
              }
              options.data = qs.stringify(data);
              options.headers= {'Content-Type': 'application/x-www-form-urlencoded'}
            }
          }
        // if(sessionStorage.getItem('token')){
        //   options.url = `${options.url}?token=${JSON.parse(sessionStorage.getItem('token'))}`
        // }
        return axios(options).then(res => {
          return res
        }).catch( (error)=> {
            return error
        });
    }
}