import axios from 'axios';
import  https from './api' 
import {Toast} from 'vant'

//循环遍历api
let instance = axios.create({
    baseURL: "http://localhost:9000/api",
    timeout: 2000
  });
  const http={};//包裹请求方法的容器
  for(var key in https){
    let api=  https[key]
    http[key]=async function(
        params,//请求参数
        isFormData=false,//是否是form-data请求
        config={},//配置参数
    ){
        let newparams=[];
        //判断是不是formData
        if(params && isFormData){
            newparams=new FormData()
            for(let key in params){
            newparams.append(key,params[key])
            }
        }else{
            newparams=params
        }
        //不同请求的判断
        if(api.methods==='post' ||api.methods==='patch'||api.methods==='put'){
            var response={}
            try{
                response=await instance[api.methods](api.url,newparams,config)
            }catch(err){
            response=err
            }
        }else if(api.methods==='delete'||api.methods==='get'){
            config.params=newparams
            try{
                response=await instance[api.methods](api.url,config)
            }catch(err){
            response=err
            }
        }
        return response
    }
  }

  //请求拦截器的添加
  instance.interceptors.request.use(config=>{
      Toast.loading({
          mask:false,//是否有阴影
          duration:0,//一直存在
          forbidClick:true,//禁止点击
          message:'加载中...'
      })
    return  config
  },()=>{
        Toast.clear()
        Toast('请求失败，请稍后再试')
  })
  //响应拦截器
  instance.interceptors.response.use(res=>{
      Toast.clear()
      return res.data
  },()=>{
      Toast.clear()
      Toast('请求失败')
  })
  export default http