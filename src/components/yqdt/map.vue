<template>
  <div ref="mapBox" style="width:700px;height:500px;"></div>
</template>
<script>
// @ is an alias to /src
import echarts from "echarts";
import jsonp from "jsonp";
import "echarts/map/js/china";
var data = [
  { name: "湖北", value: 13522 },
  { name: "浙江", value: 829 },
  { name: "广东", value: 813 },
  { name: "河南", value: 675 },
  { name: "湖南", value: 593 },
  { name: "安徽", value: 480 },
  { name: "江西", value: 476 },
  { name: "重庆", value: 344 },
  { name: "江苏", value: 308 },
  { name: "四川", value: 282 },
  { name: "山东", value: 275 },
  { name: "北京", value: 228 },
  { name: "上海", value: 219 },
  { name: "福建", value: 194 },
  { name: "黑龙江", value: 155 },
  { name: "陕西", value: 142 },
  { name: "广西", value: 139 },
  { name: "河北", value: 126 },
  { name: "云南", value: 119 },
  { name: "海南", value: 80 },
  { name: "辽宁", value: 77 },
  { name: "山西", value: 74 },
  { name: "天津", value: 66 },
  { name: "贵州", value: 56 },
  { name: "甘肃", value: 55 },
  { name: "吉林", value: 42 },
  { name: "内蒙古", value: 35 },
  { name: "宁夏", value: 34 },
  { name: "新疆", value: 29 },
  { name: "香港", value: 17 },
  { name: "青海", value: 15 },
  { name: "澳门", value: 10 },
  { name: "台湾", value: 10 },
  { name: "西藏", value: 1 }
];
var option = {
  tooltip: {
    trigger: "item"
  },
  visualMap: {
    show: true,
    type: "piecewise",
    min: 0,
    max: 2000,
    align: "right",
    top: "70%",
    right: "auto",
    left: 0,
    inRange: {
      color: ["#ffc0b1", "#ff8c71", "#ef1717", "#9c0505"]
    },
    pieces: [
      { min: 10000 },
      { min: 1000, max: 9999 },
      { min: 100, max: 999 },
      { min: 10, max: 99 },
      { min: 1, max: 9 }
    ],
    orient: "vertical",
    showLabel: true,
    itemWidth: 20,
    itemHeight: 5,
    textStyle: {
      fontSize: 10
    }
  },
  series: [
    {
      left: "center",
      type: "map",
      name: "确诊人数",
      label: {
        show: true,
        position: "inside",
        fontSize: 6,
        emphasis: {
          //对应的鼠标悬浮效果
          show: true,
          textStyle: { color: "#FFFFFF" }
        }
      },
      mapType: "china",
      data: data,
      zoom: 1.2,
      roam: false,
      showLegendSymbol: false,
      itemStyle: {
        emphasis: {
          areaColor: "#10aeb5"
        }
      },
      emphasis: {},
      rippleEffect: {
        show: true,
        brushType: "stroke",
        scale: 2.5,
        period: 4
      }
    }
  ]
};
export default {
  name: "MYMAP",
  data() {
    return {};
  },
  // methods: {
  //   // getData() {
  //   //   jsonp(
  //   //     "https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427",
  //   //     {},
  //   //     (err, data) => {
  //   //       let mydata = data.data.list;
  //   //       option.series[0].data = mydata;
  //   //       this.echart.setOption(option);
  //   //     }
  //   //   );
  //   // }
  // },
  mounted() {
    // this.echart.setOption(option);
    // this.getData();
   this.dataList();
  
  },
  methods: {
    dataList() {
      let list = this.$store.state.china_data.list || [];
      if (!list.length) {
        setTimeout(() => {
          this.dataList();
        }, 100);
        return;
      }
      let mydata = list.map(item => ({
        name: item.name,
        value: item.value / 1
      }));
      option.series[0].data = mydata;
      this.echart = echarts.init(this.$refs.mapBox);
      this.echart.setOption(option);
      return;
    }
  },
  components: {}
};
</script>
<style lang="less">
</style>