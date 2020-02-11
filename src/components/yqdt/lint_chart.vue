<template>
  <div ref="lintBox" style="width:700px;height:500px;"></div>
</template>
<script>
import echarts from "echarts";
import "echarts/map/js/china";
// @ is an alias to /src
var option = {
  title: {
    text: "全国疫情新增趋势图",
    top: 0,
    left: 0,
    textStyle: {
      color: "#b0b0b0",
      fontStyle: "normal",
      fontWeight: "normal"
    }
  },
  tooltip: {
    trigger: "axis",
    backgroundColor: "#fff",
    textStyle: {
      color: "#333"
    },
    borderColor: "#333",
    borderWidth: 0.4
  },
  legend: {
    textStyle: {
      color: "rgb(128,128,128)",
      fontStyle: "normal"
    },
    itemWidth: 10,
    itemHight: 10,
    icon: "circle",
    backgroundColor: "rgb(128,128,128,0.1)",
    borderRadius: 5,
    right: 0,
    top: 0,
    data: ["新增确诊", "新增疑似"]
  },
  grid: {
    left: "0%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  textStyle: {
    color: "#b0b0b0",
    fontStyle: "normal",
    fontWeight: "normal"
  },
  toolbox: {}, //工具库 里面有是否可下载
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "1.28",
      "1.29",
      "1.30",
      "1.31",
      "2.1",
      "2.2",
      "2.3",
      "2.4",
      "2.5",
      "2.6",
      "2.7",
      "2.8",
      "2.9"
    ]
  },
  yAxis: {
    type: "value", //控制y轴的数值大小
    // position: "left",
    // boundaryGap: false,
    axisLine: {
      //设置坐标轴相关的设置
      show: false //设置是否显示y轴
    }
    // axisTick: {
    //   interval:500
    // }
    // nameLocation:'start'
  },
  series: [
    {
      name: "新增确诊",
      type: "line",
      stack: "新增确诊量",
      symbol: "circle",
      symbolSize: "5",
      itemStyle: {
        normal: {
          color: "#e83132", //折线点的颜色
          lineStyle: {
            color: "#e83132" //折线的颜色
          }
        }
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "新增疑似",
      type: "line",
      stack: "新增疑似量",
      symbol: "circle", //折现实心
      symbolSize: "5", //折现实心
      itemStyle: {
        normal: {
          color: "#ec9217", //折线点的颜色
          lineStyle: {
            color: "#ec9217" //折线的颜色
          }
        }
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
};
export default {
  name: "lint_chart",
  props: ["title", "data"],
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.getInitData();
    this.init();
  },

  methods: {
    init() {
      let history = this.$store.state.china_data.historylist || [];
      if (!history.length) {
        setTimeout(() => {
          this.getInitData();
          this.init();
        }, 100);
        return;
      }
      let list = history.slice(0, 10);
      option.xAxis.data = list.map(item => item.date).reverse();
      //  option.series[0].data =this.data[0].list;
      //   // list.map(
      //   //   (item, index) => item.cn_conNum - history[index + 1].cn_conNum
      //   // );
      //   //新增疑似
      //   option.series[1].data = this.data[1].list;
      // list.map(item => item.wjw_susNum);
      var echart = echarts.init(this.$refs.lintBox);
      echart.setOption(option);
    },
    getInitData() {
      option.title.text = this.title || "";
      option.legend.data = this.data.map(item => item.til);
      option.series.forEach((item, index) => {
        item.name = this.data[index].til;
        item.data = this.data[index].list;
        if (this.data[index].color) {
          item.itemStyle.normal.color = this.data[index].color;
          item.itemStyle.normal.lineStyle.color = this.data[index].color;
        }
      });
    }
  }
};
</script>
<style lang="less">
</style>