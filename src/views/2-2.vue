<template>
<div>111</div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "axios2",
  created() {
    axios.get("/data.json").then(res => {
      console.log(res);
    });
    axios({
        url:"/data.json",
        method:'GET',
        params:{
            id:12
        }
    }).then((res)=>{
        console.log(res,24)
    })
  }
};
</script>
