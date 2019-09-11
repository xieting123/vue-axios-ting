<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
//拦截器
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "axios3",
  components: {
    HelloWorld
  },
  created() {
    //请求拦截器
    axios.interceptors.request.use(
      config => {
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );
    axios.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        return Promise.reject(err);
      }
    );
    //取消拦截器
    let interceptors = axios.interceptors.request.use(config => {
      config.headers = {
        auth: true
      };
      return config
    });
    axios.interceptors.request.eject(interceptors);
    //注册
    //需要登录
    let instance=axios.create({})
    instance.interceptors.request.use(config=>{
        config.headers.token='';
        return config
    })
    //不需要登录的接口
    let instance2=axios.create({})

    //移动端体验
    let instance_phone=axios.create()
    instance_phone.interceptors.request.use(config=>{
        $('#model').show
        return config
    })
    instance_phone.interceptors.response.use(config=>{
        $('#model').hide
        return config
    })
  }
};
</script>
