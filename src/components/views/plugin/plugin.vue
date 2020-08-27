<template>
  <div class="waigua">
      <div class="title">
          {{$t('Purchase plug-in')}}
      </div>
      <div class="buypad">
          <div class="buyPlugin" @click="show = true">
              {{$t('Purchase plug-in')}}
          </div>
          <!-- <div class="applyPlugin">
              {{$t('Apply for experience plug-in')}}
          </div> -->
      </div>
      <van-dialog @confirm="confirm" class="dialog" :confirmButtonText="$t('confirm')" :cancelButtonText="$t('cancel')" v-model="show" :title="$t('Please enter the transaction password')" show-cancel-button>
        <div style="padding:20px;">
            <van-field class="password" v-model="password" :placeholder="$t('Please input a password')" type="password"/>
        </div>
        
      </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:false,
      password:""
    };
  },
  methods: {
    confirm(){
      this.buyMachine()
    },
    /*
        購買外掛
     */
    buyMachine(){
      let params = {
        pay_password:this.password
      }
        this.globalApi.api.index.buyMachine(params).then(value=>{
              if(value.data.code == 200){
                  console.log(value)
              }else{
                  this.$toast.fail(value.data.descrp)
              }
          })
    },
  },
  created() {

  },
  mounted() {

  },
  components: {},
}
</script>

<style scoped lang='scss'>
  .waigua{
    background:url("../../../assets/image/waigua.png") no-repeat left top;
    background-size:cover;
    height:100%;
    overflow: auto;
    color:#fff;
    .title{
      margin-top:35px;
      font-size:20px;
      text-align:center;
    }
    .buypad{
      padding-top:67%;
      .buyPlugin,.applyPlugin{
        width:80%;
        margin:15px auto;
        border-radius: 25px;
        font-size: 15px;
        padding: 15px 0;
        text-align:center;
      }
      .buyPlugin{
        background: #e56e52;
      }
      .applyPlugin{
        background: #0d9652;
      }
    }
  }
  .dialog{
    color:#000;
  }
  .password{
    border:1px solid #ccc;
   /deep/ .van-field__control{
      color:#000 !important;
    }
    
  }
</style>