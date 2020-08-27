<template>
  <div class="container">
      <BaseHeader
        :name='name'
      >
      </BaseHeader>
          <!-- 表頭 -->
            <ul class="table_header">
                <li style="width:35%;">
                    {{$t('name')}}
                </li>
                <li style="width:10%;">
                    {{$t('direction')}}
                </li>
                <li style="width:10%;">
                    {{$t('Price')}}
                </li>
                <li style="width:20%;">
                    {{$t('number')}}
                </li>
                <li style="width:10%;">
                    {{$t('Yield')}}
                </li>
            </ul>
            <ul class="table_content" v-for="(item,index) in list" :key="index">
                <li style="width:35%;padding-left:10px;" >
                    <div class="content_name">
                        USDT
                        <p class="content_time">{{timestampToTime(item.price[0])}}</p>
                    </div>
                    
                </li>
                <li style="width:10%;" class="content_direction">
                    <span>
                        {{Math.random()>0.5?"賣出":"購買"}}
                    </span>
                </li>
                <li style="width:10%;">
                    {{item.price[1].toFixed(0)}}
                </li>
                <li style="width:20%;">
                    {{item.total_volumes[1].toFixed(0)}}
                </li>
                <li style="width:10%;" class="content_direction">
                    {{(item.profit+'').substring(0,4)}}%
                </li>
            </ul>
      
  </div>
</template>

<script>
let time;
export default {
  data() {
    return {
        name:this.$t('Transaction LIVE'),
        list:[],
    };
  },
  methods: {
      range(){
          var timestamp=new Date().getTime();
          timestamp = (timestamp/1000).toFixed(0);
          var timestamp2 = timestamp-86400
          console.log(timestamp,timestamp2)
          let params = {
              from:timestamp2,
              to:timestamp
          }
        this.globalApi.api.coin.range(params).then(value=>{
            console.log(value)
            value.data.prices.forEach((v,i)=>{
                let obj = {
                    price:v,
                    total_volumes:value.data.total_volumes[i],
                    market_caps:value.data.market_caps[i],
                    
                }
                if(i != 0){
                    obj.profit=(value.data.market_caps[i][1]/value.data.market_caps[i-1][1])
                }
                this.list.push(obj)
                
            })
            this.list.splice(0,1)
          })
    },
  },
  created() {

  },
  mounted() {
      this.range();
    time =   setInterval(()=>{
          this.range()
      },5000)
  },
  destroyed(){
      clearInterval(time)
  },
  components: {},
}
</script>

<style scoped lang="scss">
.container{
    padding-top:44px;
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
    padding-bottom:50px;
}
.table_header{
    background:#1f1f23;
    height:34px;
    line-height:34px;
    display:flex;
    width: 100%;
    justify-content: space-between;
    li{
        text-align: center;
    }
}
.table_content{
    height:34px;
    line-height:34px;
    display:flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom:30px;
    text-align: center;
    li{
        text-align: center;
        word-wrap:break-word;
    }
    .content_name{
        position: relative;
        height:auto;
        text-align: left;
        
        .content_time{
            position: absolute;
            left:0;
            bottom: -15px;
            width:100%;
        }
    }
    .content_direction{
        color:#0d9652;
    }
}
</style>