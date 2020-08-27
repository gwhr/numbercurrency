
<template>
  <div class="container">
       <!-- 头部 -->
      <BaseHeader
        :name='name'
      ></BaseHeader>
      <!--  -->
      <div class="register">
          <div class="registerForm">
              <ul>
                  <li class="form_li">
                      <input class="form-control"  :placeholder="$t('Please enter your mobile phone number')" v-model="registers.mobile_num">
                  </li>
                  <li class="form_li">
                      <input class="form-control"  :placeholder="$t('Please enter the Verification code')" v-model="registers.code">
                      <span class="getCode" v-if="codeFlag" @click='getCode'>{{$t('Get captcha')}}</span>
                      <span class="getCode" v-if="!codeFlag">{{time}}</span>
                  </li>
                  <li class="form_li">
                      <input class="form-control" type="password" :placeholder="$t('Please input a password')" v-model="registers.password">
                  </li>
                  <li class="form_li">
                      <input class="form-control" type="password" :placeholder="$t('Please enter the password again')" v-model="registers.repassword">
                  </li>
              </ul>
              <div class="registerBtn"  @click="forgetpwd">
                  {{$t('submit')}}
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        time:60,
        codeFlag:true,
        name:this.$t('Forget the password'),
        registers:{
            mobile_num:'',
            verificationCode:'',
            password:'',
            repassword:'',
            code:''
        }
    };
  },
  methods: {
      // 获取验证码
    getCode(){
        if(!this.registers.mobile_num){
            this.$toast.fail('請輸入手機號')
            return
        }
        this.sms_reg()
        
    },
    /*
        获取验证码 
     */
    sms_reg(){
        let params = {
            mobile:this.registers.mobile_num,
            type:'forget'
        }
        this.globalApi.api.login.get_phone_varcode(params).then(value=>{
              if(value.data.code == 200){
                  this.$toast.success(value.data.descrp)
                  this.codeFlag = false;
                    var timer = setInterval(() => {
                        this.time--;
                        if (this.time === 0) {
                            clearInterval(timer);
                            this.codeFlag = true;
                            this.time = 60;
                        }
                    }, 1000)
              }else{
                  this.$toast.fail(value.data.descrp)
              }
          })
    },
    /*
        找回密碼 
     */
    forgetpwd(){
        let params = {
            mobile_num:this.registers.mobile_num,
            code:this.registers.code,
            password:this.registers.password,
            repassword:this.registers.repassword
        }
        this.globalApi.api.login.forgot_password(params).then(value=>{
              if(value.data.code == 200){
                  this.$toast.success(value.data.descrp)
                  this.$router.go(-1)
              }else{
                  this.$toast.fail(value.data.descrp)
              }
          })
    },
    /* 
        修改密碼
    */
   confirm(){

   }
  },
  created() {

  },
  mounted() {

  },
  components: {},
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 44px;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  padding-bottom: 50px;
}
    .register{
        @include layout;
        .form_li{
            width:100%;
            position: relative;
            margin-bottom: 10px;
            .getCode{
                margin-top: 5px;
                position: absolute;
                right: 4px;
                bottom: 5px;
                background: #0d9652;
                color: #fff;
                padding: 3px 5px;
                border-radius: 4px;
                height:100%;
                height: 40px;
                line-height:40px;
                font-size: 16px;
            }
        }
        .form-control{
            display: block;
            width: 100%;
            height:55px;
            font-weight: 400;
            line-height: 1.5;
            background-color: transparent;
            padding: 6px 0;
            font-size: 12px;
            border:none;
            border-bottom:1px solid #3e536b;
            color:#fff;
            &::-webkit-input-placeholder{
                    color: #fff;
                }
            &::-moz-placeholder{  //不知道为何火狐的placeholder的颜色是粉红色，怎么改都不行，希望有大牛路过帮忙指点
                    color: #fff;        
            }
            &:-ms-input-placeholder{  //由于我的IE刚好是IE9，支持不了placeholder，所以也测试不了(⊙﹏⊙)，有IE10以上的娃可以帮我试试
                    color: #fff;        
            }
        }
        .registerBtn{
                background: #0d9652;
                color: #fff;
                width: 100%;
                font-size: 14px;
                margin-top: 35px;
                border-radius: 3px;
                padding: 8px 0;
                font-weight: 400;
                line-height: 1.5;
                text-align: center;
        }
    }
</style>