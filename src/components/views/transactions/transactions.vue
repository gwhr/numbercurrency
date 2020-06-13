<template>
  <div class="container">
      <BaseHeader
        :name='name'
      >
      </BaseHeader>
          <!-- 表頭 -->
            <ul class="table_header">
                <li style="width:15%;">
                    {{$t('name')}}
                </li>
                <li style="width:10%;">
                    {{$t('direction')}}
                </li>
                <li style="width:20%;">
                    {{$t('Price')}}
                </li>
                <li style="width:25%;">
                    {{$t('number')}}
                </li>
                <li style="width:15%;">
                    {{$t('Yield')}}
                </li>
            </ul>
            <ul class="table_content" v-for="(item,index) in list" :key="index">
                <li style="width:15%;padding-left:10px;" >
                    <div class="content_name">
                        AAAA
                        <p class="content_time">21:45:18</p>
                    </div>
                    
                </li>
                <li style="width:10%;" class="content_direction">
                    {{$t('selled')}}
                </li>
                <li style="width:20%;">
                    2222.5
                </li>
                <li style="width:25%;">
                    0.000001
                </li>
                <li style="width:15%;" class="content_direction">
                    0.56%
                </li>
            </ul>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('Transaction LIVE'),
        list:[
            {
                name:"BTCUSDT",
                state:1,
                price:7742.76,
                number:0.009852,
                Yield:'0.56%'
            },{
                name:"BTCUSDT",
                state:1,
                price:7742.76,
                number:0.009852,
                Yield:'0.56%'
            },{
                name:"BTCUSDT",
                state:1,
                price:7742.76,
                number:0.009852,
                Yield:'0.56%'
            }
        ]
    };
  },
  methods: {

  },
  created() {

  },
  mounted() {

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
    li{
        text-align: center;
        
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