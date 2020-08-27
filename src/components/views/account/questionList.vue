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
                    <li class="form_li" @click="tolink(item)" v-for="(item,index) in list" :key="index">
                        {{item.title}}
                        <img class="linl_item_more" :src="myyou" alt="">
                    </li>
                </ul>

            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import myyou from "../../../assets/image/myyou.png"
export default {
  data() {
    return {
        name:'反饋列表',
        userInfo:{},
        myyou,
        list:[],
        registers:{
            username:'',
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
    methods: {
    // 修改交易密碼
    tolink(item){
        this.$router.push({
            path:'/quertionDetails',
            query:{
                info:item
            }
        })
    },
    // 官网交流
    Feedback(){
        this.globalApi.api.user.Feedback().then(value=>{
              if(value.data.code == 1){
                 console.log(value)
                 this.list = value.data.data.splice(0,2)
                //  this.list
              }else{
                  this.$toast.fail(value.data.descrp)
              }
          })
    }
  },
  created() {

  },
  mounted() {
      this.Feedback();
  },
  components: {},
}
</script>

<style scoped lang='scss'>
.settinglayout{
    @include layout;
    padding-top: 44px;
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
            border-bottom: 1px solid #fff;
            color:#fff;
            line-height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width:10px;
                height:10px;
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