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
  name: "axios4",
  components: {
    HelloWorld
  },
  created() {
    let sourse = axios.CancelToken.source();
    axios
      .get("/data.json", {
        CancelToken: sourse.token
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    //取消请求
    sourse.cancel();
    //什么情况下取消请求
    //商城项目请求时间3-5s
  }
};
</script>
