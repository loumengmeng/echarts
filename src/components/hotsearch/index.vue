<template>
  <div>
    <div>
      <mycard :title="todayTitle" :list="todayList"></mycard>
      <mycard :title="studyTitle" :list="studyList"></mycard>
      <mycard :title="knowTitle" :list="knowList"></mycard>
      <mycard :title="layTitle" :list="layList"></mycard>
    </div>全民热搜
  </div>
</template>
<script>
// @ is an alias to c
import mycard from "./card";
import { getHotData } from "@/api";
export default {
  name: "hotsearch",
  data() {
    return {
      todayTitle: "",
      studyTitle: "",
      knowTitle: "",
      layTitle: "",
      todayList: [], //今日疫情
      studyList: [], //复工复课
      knowList: [], //"防疫知识热搜"
      layList: [] //谣言
    };
  },
  created() {
    getHotData().then(data => {
    //   console.log(data);
      this.todayTitle = data[0].list[0].title;
      this.studyTitle = data[0].list[3].title;
      this.knowTitle = data[0].list[1].title;
      this.layTitle = data[0].list[2].title;
      this.todayList = data[0].list[0].item;
      this.studyList = data[0].list[3].item;
      this.knowList = data[0].list[1].item;
      this.layList = data[0].list[2].item;
    });
  },
  components: {
    mycard
  }
};
</script>
<style lang="less">
</style>
