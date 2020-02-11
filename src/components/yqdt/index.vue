<template>
  <div class="btn">
    <china_domestic></china_domestic>
    <div class="pad20">
      <i class="el-icon-info"></i>
      数据说明
    </div>
    <div class="btn_box">
      <el-button>同城查询</el-button>
      <el-button>全国发热门诊</el-button>
      <el-button>肺炎权威解读</el-button>
      <el-button>免费问医生</el-button>
    </div>
    <div>
      <mymap></mymap>
    </div>
    <div>
      <lint_chart title="全国新增疫情图" :data="dataList"></lint_chart>
    </div>
    <div>
      <lint_chart title="确诊疑似疫情图" :data="dataList2"></lint_chart>
    </div>
    <div>
      <lint_chart title="治愈死亡疫情图" :data="dataList3"></lint_chart>
    </div>
    <div>
      <mytable></mytable>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import china_domestic from "./china_domestic";
import mymap from "./map";
import lint_chart from "./lint_chart";
import mytable from "./mytable";
import { getChinaData } from "@/api";
export default {
  name: "yqdt",
  data() {
    return {
      //   dataList: [
      //     { til: "新增病例", list: [1, 2, 3, 4] },
      //     { til: "新增疑似病例", list: [3, 4, 5, 6] }
      //   ]
    };
  },
  created() {
    getChinaData().then(data => {
      this.$store.dispatch("getChinaData", data);
      // console.log(data);
    });
  },
  computed: {
    dataList() {
      let history = this.$store.state.china_data.historylist || [];
      let list = history.slice(0, 10);
      let sureList = list.map(
        (item, index) => item.cn_conNum - history[index + 1].cn_conNum
      );
      let notSureList = list.map(item => item.wjw_susNum);
      return [
        { til: "新增病例",color:"", list: sureList.reverse() },
        { til: "新增疑似病例",color:"#ec9217", list: notSureList.reverse() }
      ];
    },
    dataList2() {
      let history = this.$store.state.china_data.historylist || [];
      let list = history.slice(0, 10).reverse();
      let sureList = list.map(item => item.cn_conNum);
      let notSureList = list.map(item => item.cn_susNum);
      return [
        { til: "确诊", list: sureList },
        { til: "疑似", list: notSureList }
      ];
    },
    dataList3() {
      let history = this.$store.state.china_data.historylist || [];
      let list = history.slice(0, 10).reverse();
      let sureList = list.map(item => item.cn_cureNum);
      let notSureList = list.map(item => item.cn_deathNum);
      return [
        { til: "治愈", list: sureList },
        { til: "死亡", list: notSureList }
      ];
    }
  },
  components: {
    china_domestic,
    mymap,
    lint_chart,
    mytable
  }
};
</script>
<style lang="less">
.pad20 {
  text-align: left;
  padding: 20px 40px /*  */;
}

.btn .btn_box {
  > button {
    width: 300px;
    margin-left: 0;
    margin: 10px 20px;
  }
}
</style>