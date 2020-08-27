
<template>
  <div class='loginBg'>
       <!-- 头部 -->
      <BaseHeader
        :name='name'
        :backShow='false'
      ></BaseHeader>
      <!-- content -->
      <div class="login">
          <div class="logo">
              <!-- <img class="logoimg" :src="logo" alt=""> -->
          </div>
          <ul class="login_form">
              <li>
                  <van-field v-model="loginInfo.username" :placeholder="$t('Please enter the account number')" />
              </li>
              <li>
                  <van-field v-model="loginInfo.password" :placeholder="$t('Please input a password')" type="password"/>
              </li>
          </ul>
          <div class="loginBtn" @click="login">
                  {{$t('login')}}
          </div>
          <div class="forget_password" @click="forget_password">
              {{$t('Forget the password')}}
          </div>
          <div class="toregister">
              {{$t('Not yet registered')}}?<span @click="toregister">{{$t('registered')}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('login'),
        loginInfo:{
            username:'',//13800138000
            password:''
        },
    };
  },
  methods: {
      login(){
          let params = {
              user_string:this.loginInfo.username,
              password:this.loginInfo.password,
          }
          this.globalApi.api.login.login(params).then(value=>{
              if(value.data.code == 200){
                  this.$toast.success()
                  this.storeSession.save('token',value.data.data.api_token);
                  this.$router.push({
                      path:'/home'
                  })
              }else{
                  this.$toast.fail()
              }
          })
        
      },
      forget_password(){
          this.$router.push({
              path:'/seekword'
          })
      },
      toregister(){
          this.$router.push({
              path:'/register'
          })
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
    .login{
        @include layout;
        .logo{
            width:100%;
            margin-bottom: 35px;
            text-align: center;
            height:100px;
            .logoimg{
                width:100px;
                height:100px;
            }
            .login_form{
                li{
                    margin-bottom: 20px;

                }
            }
        }
        .loginBtn{
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
        .forget_password{
            color:#fff;
            margin-top:10px;
        }
        .toregister{
            color:#fff;
            margin-top:30px;
            span{
                color:#fff;
                margin-left:5px;
            }
        }
    }
    .loginBg{
        height:100%;
        overflow-y: scroll;
        // background:url('../../../assets/image/loginBg.jpg') no-repeat left center;
        // background-size: 100% 100%;
    }
</style>