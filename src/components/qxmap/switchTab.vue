<template>
  <div class="switchBox" @click="move">
    <ul>
      <!-- <li>热门迁入地<> -->
      <!-- <li>热门迁出地<>
      -->
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
    <div class="tabBor" :style="{transform:`translateX(${x}px)`}">{{list[index]}}</div>
  </div>
</template>
<script>
// @ is an alias to c

export default {
  name: "SWITCHTABLE",
  props: ["list"],
  data() {
    return {
      x: 0,
      //   tabAry: ["热门迁入地", "热门迁出地"],
      index: 0
    };
  },
  components: {},
  methods: {
    move() {
      if (this.x) {
        this.x = 0;
        this.index = 0;
      } else {
        this.x = 324;
        this.index = 1;
      }
      this.$emit("change", this.index, this.list[this.index]);
    }
  }
};
</script>
<style lang="less">
.switchBox {
  width: 650px;
  box-sizing: border-box;
  height: 46px;
  background: #e3e6eb;
  border-radius: 5px;
  position: relative;
  margin: auto;
  cursor: pointer;
  user-select: none;
  ul {
    list-style: none;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      line-height: 46px;
      font-size: 18px;
    }
  }
  .tabBor {
    position: absolute;
    top: 3px;
    left: 3px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-weight: 600;
    width: 320px;
    background: #fff;
    border-radius: 5px;
    transition: all 0.2s;
  }
}
</style>
