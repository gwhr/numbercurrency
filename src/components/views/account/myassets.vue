<template>
  <div class="container">
      <BaseHeader :name="name"></BaseHeader>
      <div class='asset_container'>
          <div class='asset_card'>
              <p style="margin-bottom:15px;">{{$t('Available balance')}}</p>
              <p>{{userinfo.twd}}</p>
              <div class="asset_profit">
                  <span>
                      {{$t('Profit amount')}}:{{userinfo.sum_income-0}}
                  </span>
                  <!-- <span>
                      {{$t('Experience gold amount')}}:0.00
                  </span> -->
              </div>
          </div>
          <!-- 表頭 -->
          <div class='profit_header'>
              <span class="profit_header_left">
                  {{$t('Fund details')}}
              </span>
              <span class="profit_header_right">
                  {{$t('Profit transfer')}}
              </span>
          </div>
          <!-- 列表 -->
          <ul>
              <li class="profit_list">
                  <div class="profit_list_name">
                      <span>TWD</span>
                      <span class="out" @click="toDetails('/payment')">{{$t('Gold out')}}</span>
                  </div>
                  <div class="profit_list_cash">
                      <span>
                          <span>
                              {{$t('Available balance')}}
                          </span>
                          <span class="balance">
                              {{userinfo.twd}}
                          </span>

                      </span>
                      <span></span>
                  </div>
                  <div class="profit_list_name">
                      <span>
                              {{$t('Profit earning')}}
                              <span class="balance">
                                5793.16
                            </span>
                        </span>
                          
                      <span class="cb" @click="toDetails('/deposit')">{{$t('Gold deposit')}}</span>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        name:this.$t('myassets'),
        userinfo:""
    };
  },
  methods: {
      toDetails(path){
          this.$router.push({
              path
          })
      },
      get_user_info(){
        this.globalApi.api.user.get_user_info().then(value=>{
              if(value.data.code == 200){
                  console.log(value)
                  this.userinfo = value.data.data;
              }else{
                  this.$toast.fail()
              }
          })
    },
  },
  created() {

  },
  mounted() {
      this.get_user_info()
  },
  components: {},
}
</script>

<style scoped lang="scss">
.container{
     padding-top: 44px;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  padding-bottom: 50px;
}
.asset_container{
    border-top: 1px solid rgb(62, 67, 79);
    padding-top:30px;
    .asset_card{
        width:94%;
        margin:0 auto;
        height:130px;
        background:url('../../../assets/image/assetBg.png') no-repeat;
        background-size:100% 100%; 
        box-sizing: border-box;
        padding: 15px 25px 0px;
        color:#fff;
        font-size:16px;
        .asset_profit{
            display:flex;
            margin-top: 30px;
            justify-content: space-between;
        }
    }
    .profit_header{
        margin-top:20px;
        height:48px;
        line-height: 48px;
        border-bottom: 1px solid #3e434f;
        display:flex;
        justify-content: space-between;
        font-size:14px;
        .profit_header_left{
            // padding: 0 17px;
            margin-left:17px;
            color: #0d9652;
            border-bottom: 2px solid #0d9652;
            
        }
        .profit_header_right{
            padding: 0 17px;
            color: #0d9652;
            padding-left:32px;
            background:url("../../../assets/image/huazhuan.png") no-repeat left center;
            background-size:29px 24px;
        }
    }
    .profit_list{
        padding: 20px 10px;
        border-bottom: 1px solid #3e434f;
        font-size:14px;
        .profit_list_name{
            color:#fff;
            display:flex;
            justify-content: space-between;
            font-size:14px;
            margin-bottom: 14px;
            .out{
                background:url("../../../assets/image/tb.png") no-repeat left center;
                background-size:18px 18px;
                padding-left:20px;
            }
            .cb{
                background:url("../../../assets/image/cb.png") no-repeat left center;
                background-size:18px 18px;
                padding-left:20px;
            }
            .balance{
                margin-left:25px;
                color:#3e434f;
            }
        }
        .profit_list_cash{
            color:#fff;
            margin-bottom: 14px;
            .balance{
                margin-left:25px;
                color:#3e434f;
            }
        }
    }
}
</style>