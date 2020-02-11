<template>
  <div class="timeline_box">
    <div class="timebox">{{time|formatTime}}</div>
    <div class="textbox">
      <a :href="url">
        <slot></slot>
      </a>
    </div>
  </div>
</template>
<script>
// @ is an alias to c
export default {
  name: "TIMELINE",
  props: ["time", "url"],
  data() {
    return {};
  },
  filters: {
    formatTime(val){
      let t = new Date((val+'000')/1)
      function f(val){return val >9 ? val : '0'+val}
      return f(t.getMonth()+1)+'月'+f(t.getDate())+'日'+'  '+f(t.getHours())+':'+f(t.getMinutes());
    }
  },
  components: {}
};
</script>
<style lang="less">
.timeline_box {
  padding-left: 20px;
  //   margin: 2px 0px;
  padding-bottom: 10px;
  // padding-top: 6px;
  .timebox {
    color: #999;
    font-size: 14px;
    position: relative;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      left: -15.5px;
      top: 7px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgb(28, 180, 240);
      box-shadow: 0 0 0 3px rgb(149, 229, 243);
    }
  }
  .textbox {
    //   width: 680px;
    height: 45px;
    line-height: 45px;
    border-radius: 5px;
    background: rgb(218, 214, 218);
    padding-left: 10px;
    box-sizing: border-box;
    margin: 5px 0;
    position: relative;
    a {
      color: #333;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      display: block;
    }
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      height: 65px;
      background: #f1f1f1;
      top: -7px;
      left: -14px;
    }
  }
}
</style>
