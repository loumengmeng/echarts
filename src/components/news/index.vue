<template>
    <div class="newsBox">
        <h2>实时播报</h2>
        <timeline v-for="(item,index) in list" :key="index"
       :url='item.eventUrl'
       :time='item.eventTime'
      >{{item.eventDescription}}
      </timeline>
      <el-button @click="fn">{{str}}</el-button>
    </div>
</template>
<script>
// @ is an alias to /src
import {getZbData} from '@/api'
import timeline from './timeline.vue'
export default {
    name: 'news',
    data() {
        return {
            str:"点击显示更多",
            alllist:[],
            list:[]
        }
    },
    created() {
        getZbData().then(data=>{
            // console.log(data)
            this.alllist = data.items
            this.list = this.alllist.slice(0,5)

        })
    },
    methods: {
        fn(){
            if(this.list.length>10){
                this.list = this.alllist.slice(0,10)
                this.str = '点击显示更多'
            }else{
                this.list = this.alllist.slice(0)
                 this.str = '点击收回'
            }
            
        }
    },
    components: {
        timeline
    }
}
</script>
<style lang="less">
.newsBox{
    width: 700px;
    height: 100%;
    margin: 20px auto;
    text-align: left
}
</style>