<template>
  <div class="container">
      <BaseHeader :name="name"></BaseHeader>
      <div class="friends_logo">
          <img src="../../../assets/image/invher.png" alt="">
      </div>
      <div class="inTotal">
          <div class="inTotal_number">
              <span>{{$t('Number of invitees')}}</span>
              <span class="green">{{info.invite_num}}</span>
          </div>
          <div class="inTotal_profit">
              <span>{{$t('et rewards')}}</span>
              <span class="green">{{info.share_profit}}</span>
          </div>
      </div>
      <div class="invate_code">
          <div class="my_code">
              <span class="code">
                  {{info.share_code}}
              </span>
              <span class="copy">
                  {{$t('copy')}}
              </span>
          </div>
          <div class="invate_link">
              <span class="link_bg"></span>
              <span class="link">
                  {{url}}{{info.share_code}}
              </span>
              <div style="display:flex;justify-content:flex-end;">
                  <span class="copy">
                    {{$t('copy')}}
                </span>
              </div>
          </div>
      </div>
      <div class="invate_rules">
              <div class="invate_rules_tit">
                  <span></span>
              </div>
              <div class="active_rules">
                  <p>普通會員賬號：直推獎勵 1000</p>
                  <p>代理會員賬號：直推獎勵 1500； 並享有無限代500</p>
              </div>
              <div class="tips_rule">
                  <p>★ 請下線 7 天體驗過後第一次有效購買外掛 ，獎金直接分發到ENai 獲利部分</p>
                  <p class="red_tips">代理會員帳號申請資格請洽詢活動客服！（名額有限）</p>
              </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:"",
        info:{},
        url:global.url
    };
  },
  methods: {
      /* 
        邀请信息
    */
    get_my_share(){
        this.globalApi.api.user.get_my_share().then(value=>{
            console.log(value)
              if(value.data.code == 1){
                    this.info = value.data.data
              }else{
                  this.$toast.fail(value.data.descrp)
              }
          })
    },
  },
  created() {

  },
  mounted() {
      this.get_my_share();
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
  background:url("../../../assets/image/invbg.jpg") no-repeat left top;
  background-size:100% 100%;
}
.friends_logo{
    text-align:center;
    padding-top:20px;
    margin-bottom:70px;
    img{
        width:195px;
        height:45px;
    }
}
.inTotal{
    width:90%;
    margin:0 auto;
    background:#1f1f23;
    border-radius:10px;
    font-size:14px;
    height:90px;
    display:flex;
    box-sizing: border-box;
    padding:15px;
    position: relative;
    &::after{
        content:'';
        position: absolute;
        width:0;
        height:60px;
        border-right:1px solid #fff;
        left:50%;
        top:15px;
    }
    .inTotal_number,.inTotal_profit{
        color:#fff;
        flex:1;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        text-align: center;
    }
}
.green{
    color:#0d9652
}
.invate_code{
    border-radius: 10px;
    width: 90%;
    margin: 20px auto 20px;
    box-sizing: border-box;
    padding: 15px;
    font-size: 14px;
    background:#1f1f23;
    color:#fff;
    .my_code{
        margin-bottom:15px;
        display:flex;
        justify-content: space-between;
        .code{
            padding-left:102px;
            height:24px;
            background:url("../../../assets/image/myinv.png") no-repeat left center;
            background-size:102px 18px;
            line-height:24px;
        }
        .copy{
            width: 81px;
            background: #0d9652;
            border-radius: 5px;
            line-height: 24px;
            text-align: center;
        }
    }
    .invate_link{
        margin-bottom:15px;
        display: flex;
        flex-direction: column;
        .link_bg{
            margin-bottom: 15px;
            width: 87px;
            height: 17px;
            background:url("../../../assets/image/invjie.png") no-repeat left center;
            background-size:100% 100%;
        }
        .link{
            margin-bottom: 15px;
            word-wrap:break-all;
            font-size:15px;
            line-height:1.2;
        }
        .copy{
            width: 81px;
            background: #0d9652;
            border-radius: 5px;
            line-height: 24px;
            text-align: center;
        }
    }
}
.invate_rules{
    border-radius: 10px;
    width: 90%;
    margin: 20px auto 20px;
    box-sizing: border-box;
    padding: 15px;
    font-size: 14px;
    background:#1f1f23;
    color:#fff;
    .invate_rules_tit{
        display: flex;
        span{
            margin-bottom: 15px;
            width: 87px;
            height: 17px;
            background:url("../../../assets/image/hdgz.png") no-repeat left center;
            background-size:100% 100%;
        }
    }
    .active_rules{
        line-height:1.2;
        margin-bottom:15px;
    }
    .tips_rule{
        line-height:1.2;
        .red_tips{
            color:#e56e52;
        }
    }
}
</style>