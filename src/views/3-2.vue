<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "axios3",
  components: {
    HelloWorld
  },
  created() {
    axios.create({
        baseURL:'http:localhost:8080/',
        timeout:1000,
        url:'/data.json',
        method:'get,post,put,patch,delete',
        headers:{
            token:''
        },
        params:{},
        data:{},
    })
//axios全局配置
axios.defaults.timeout=1000;
axios.defaults.baseURL='http:localhost:8080/'
//axios实例配置
var instance=axios.create()
instance.defaults.timeout=3000;
//axios请求配置
instance.get('/data.json',{
    timeout:5000
})
//真实项目中的样子
var instance1=axios.create({
    timeout:3000,
    baseURL:'http:localhost:9090/'
})
var instance2=axios.create({
    timeout:5000,
    baseURL:'http:localhost:9091/'
})
instance1.get('/data.json',{
    timeout:5000,
    params:{

    }
}).then((res)=>{
    console.log(res);  
})
  }
};
</script>
