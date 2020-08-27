<!--
 * @Author: your name
 * @Date: 2020-03-07 11:02:27
 * @LastEditTime: 2020-03-10 10:03:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bolg_webd:\私活\鸡-10K\chicken\src\components\views\register\register.vue
 -->
<template>
  <div>
      <!-- 头部 -->
      <BaseHeader
        :name='name'
      ></BaseHeader>
      <!--  -->
      <div class="register">
          <div class="registerForm">
              <ul>
                  <li class="form_li">
                      <input class="form-control" type="number" :placeholder="$t('login.PhoneNumber')" v-model="registers.PhoneNumber">
                  </li>
                  <li class="form_li">
                      <input class="form-control" type="number" :placeholder="$t('login.verificationCode')" v-model="registers.verificationCode">
                      <span class="getCode">{{$t('login.verificationCodeGet')}}</span>
                  </li>
                  <li class="form_li">
                      <input class="form-control" type="password" :placeholder="$t('login.password')" v-model="registers.password">
                  </li>
                  <li class="form_li">
                      <input class="form-control" type="password" :placeholder="$t('login.passwordAgain')" v-model="registers.passwordAgain">
                  </li>
              </ul>
              <div class="registerBtn" @click="register">
                  {{$t('info.submit')}}
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('info.changPassword'),
        registers:{
            PhoneNumber:'',
            verificationCode:'',
            password:'',
            passwordAgain:'',
            transactionPassword:'',
            transactionPasswordAgain:'',
            invitationCode:''
        }
    };
  },
  computed: {},
  watch: {},
  methods: {
    //   注册
    register(){
        // 进行校验
        for(let v in this.registers){
            if(v !='invitationCode'){
                if(this.isNil(this.registers[v])){
                        // 校验为空
                        this.$dialog.alert({
                            message: this.$t(`login.${v}`),
                        })
                        return
                }
                // 正则条件
                switch(v){
                    case 'phone':
                        let reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
                        if(!reg.test(this.registers[v])){
                            this.$dialog.alert({
                                    message: this.$t('login.currentphone'),
                                })
                            break
                        }
                    case 'passwordAgain':
                        if(this.registers[v] != this.registers['password']){
                            this.$dialog.alert({
                                    message: this.$t('login.inconsistent'),
                                })
                            break
                        }
                }     
                
            }
        }
         // 注册成功
        console.log('注册成功')
        this.$router.go(-1)
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
</style>