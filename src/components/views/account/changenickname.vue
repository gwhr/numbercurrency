<template>
  <div>
       <!-- 头部 -->
      <BaseHeader
        :name='name'
      ></BaseHeader>
      <div class='settinglayout'>
          <div class="avator">
              <!-- <img :src="timg2" alt=""> -->
          </div>
          <div class="register">
          <div class="registerForm">
              <ul>
                  <li class="form_li">
                      <input  class="form-control" type="number" :placeholder="$t('PhoneNumber')" v-model="userInfo.user_nicename">
                  </li>
              </ul>
              <div class="registerBtn" @click="register">
                  {{$t('confirm')}}
              </div>

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
        name:'修改暱稱',
        userInfo:{},
        registers:{
            username:'',
            PhoneNumber:'',
            verificationCode:'',
            password:'',
            passwordAgain:'',
            transactionPassword:'',
            transactionPasswordAgain:'',
            invitationCode:'',
            mobile:''
        }
    };
  },
    methods: {
    //   注册
    register(){
        this.change_nickname()
        
    },
    /* 
        获取个人信息
      */
     get_user_info(){
         this.globalApi.api.user.get_user_info().then(value=>{
              if(value.data.code == 200){
                  this.userInfo = value.data.data;
                  console.log(this.userInfo)
              }
          })
     },
    /* 
        修改暱稱
    */
    change_nickname(){
        let params = {
            mobile_num:this.userInfo.mobile,
            nickname:this.userInfo.user_nicename
        }
         this.globalApi.api.user.change_nickname(params).then(value=>{
              if(value.data.code == 200){
                  this.$toast.success(value.data.descrp);
                  this.$router.go(-1)
              }else{
                  this.$toast.fail(value.data.descrp)
              }
          })
     },

  },
  created() {

  },
  mounted() {
      this.get_user_info();
  },
  components: {},
}
</script>

<style scoped lang='scss'>
.settinglayout{
    @include layout;
    padding-top:20px;
    .avator{
        text-align:center;
        img{
            width:80px;
            height:80px;
            border-radius:50%;
        }
        margin-bottom:30px;
    }
    .register{
        .form_li{
            width:100%;
            position: relative;
            margin-bottom: 10px;
            .getCode{
                margin-top: 5px;
                position: absolute;
                right: 4px;
                bottom: 5px;
                background: #1881d2;
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
                background: #1881d2;
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
}
</style>