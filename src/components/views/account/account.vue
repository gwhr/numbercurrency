<template>
  <div style="height:100%;overflow:auto;padding-bottom:50px">
      <div class="myhear">
          <span class="setUp" @click="tosetting">
              <img :src="setup" alt="">
          </span>
          <div class="myaccout">
                <div class="logo">
                    <img :src="userinfo.avatar" alt="">
                </div>
                <!-- <p class="account_level">
                    代理帳號
                </p> -->
                <p class="account_name">
                    暱稱:{{userinfo.user_nicename}}
                </p>
          </div>
          <ul class="account_tab">
              <li @click="toLink('/myassets')">
                  <div>
                      <img :src="myzzc" alt="" >
                  </div>
                  <p class="account_tab_name">{{$t("total assets")}}</p>
              </li>
              <li @click="toLink('/profitRecord')">
                  <div>
                      <img :src="myzl" alt="">
                  </div>
                  <p class="account_tab_name">{{$t("My profit")}}</p>
              </li>
              <li @click="toLink('/withdrawal')">
                  <div >
                      <img :src="mylqzh" alt="">
                  </div>
                  <p class="account_tab_name">{{$t("Withdrawal account")}}</p>
              </li>
              <li @click="toLink('/promote')">
                  <div >
                      <img :src="mytj" alt="">
                  </div>
                  <p class="account_tab_name">{{$t("Promote friends")}}</p>
              </li>
          </ul>
      </div>
      <div class="mylink_box">
          <ul class="mylink">
            <li class="linl_item" v-for="(item,index) in menuList" :key="index" @click="toLink(item.path)">
                <div class="linl_item_name">
                    <img :src="item.img" alt="">
                    <span>{{item.name}}</span>
                </div>
                <img class="linl_item_more" :src="myyou" alt="">
            </li>
        </ul>
      </div>
      <div>
          <van-dialog 
            v-model="show" 
            :title="$t('tips')" 
            :showConfirmButton = "false">
            <div class="tips_content">
                {{$t('Whether to exit the current login account')}}
            </div>
            <div class="dialog_control">
                <span class="dialog_cancle" @click="close">
                    取消
                </span>
                <span class="dialog_confirm" @click="confirm">
                    {{$t('confirm')}}
                </span>
            </div>
          </van-dialog>
      </div>
  </div>
</template>

<script>
import setup from "../../../assets/image/setup.png"
import logo from "../../../assets/image/logo.png"
import myzzc from "../../../assets/image/myzzc.png"
import myzl from "../../../assets/image/myzl.png"
import mylqzh from "../../../assets/image/mylqzh.png"
import mytj from "../../../assets/image/mytj.png"
import icontg from "../../../assets/image/icontg.png"
import iconrz from "../../../assets/image/iconrz.png"
import iconwe from "../../../assets/image/iconwe.png"
import iconys from "../../../assets/image/iconys.png"
import icongf from "../../../assets/image/icongf.png"
import iconwm from "../../../assets/image/iconwm.png"
import icontc from "../../../assets/image/icontc.png"
import myyou from "../../../assets/image/myyou.png"
export default {
  data() {
    return {
        setup,
        logo,
        myzzc,
        myzl,
        mylqzh,
        mytj,
        icontg,
        myyou,
        userinfo:{},
        show:false,
        menuList:[
            {
                name:this.$t('My promotion'),
                img:icontg,
                path:'/promote'
            },
            {
                name:this.$t('Real name authentication'),
                img:iconrz,
                path:'/authentication'
            },
            {
                name:this.$t('About us'),
                img:iconwe,
                path:'/aboutAs'
            },
            {
                name:this.$t('Privacy policy'),
                img:iconys,
                path:'/aboutAs'
            },
            {
                name:this.$t('Official communication'),
                img:icongf,
                path:'/communication'
            },
            // {
            //     name:this.$t('Version update'),
            //     img:iconwm,
            //     path:'/version'
            // },
            {
                name:this.$t('Sign out'),
                img:icontc,
                path:''
            },
        ]
    };
  },
  methods: {
    confirm(){
        this.$router.push({
            path:'/login'
        })
    },
    toLink(path){
        if(!path){
            this.show = true;
        }
        this.$router.push({
            path
        })
    },
    close(){
        this.show = false;
    },
    get_user_info(){
        this.globalApi.api.user.get_user_info().then(value=>{
              if(value.data.code == 200){
                  console.log(value)
                  this.userinfo = value.data.data;
              }else{
                  this.$toast.fail(value.data.descrp)
              }
          })
    },
    tosetting(){
        this.$router.push({
            path:'/setting'
        })
    }
  },
  created() {

  },
  mounted() {
      this.get_user_info();
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.myhear{
    width: 100%;
    height: 295px;
    background: url("../../../assets/image/myhear.png")no-repeat;
    background-size: 100% 100%;
    position: relative;
    .setUp{
        position: absolute;
        right: 6%;
        top: 15%;
        z-index: 999;
        width:22px;
            height:22px;
        img{
            width:22px;
            height:22px;
        }
    }
    .myaccout{
        width: 150px;
        margin: 0 auto;
        padding-top: 61px;
        text-align: center;
        .logo{
            
            img{
                width:76px;
                height:76px;
                border-radius:50%;
            }
        }
        .account_level{
            padding: 9px 0 7px;
            font-size: 16px;
        }
        .account_name{
            margin-top:5px;
            font-size:14px;
        }
    }
    .account_tab{
        padding-top:18px;
        display:flex;
        justify-content: space-around;
        font-size:14px;
        text-align: center;
        li{
            display: flex;
            justify-content: center;
            flex-direction: column;
            img{
                width:69px;
                height:59px;
            }
            .account_tab_name{
                margin-top:10px;
            }
        }
    }
}
.mylink_box{
    box-sizing: border-box;
    padding: 20px 12px 0px;
    .mylink{
        background: #1f1f23;
        border-radius: 10px;
        padding: 14px 5px 14px 12px;
        .linl_item{
            line-height: 49px;
            border-bottom: 1px solid #4e4e51;
            display:flex;
            justify-content: space-between;
            align-items: center;
            font-size:14px;
            .linl_item_name{
                img{
                    width:24px;
                    height:22px;
                    margin-right:5px;
                }
                
            }
        }
        .linl_item_more{
                width:10px;
                height:10px;
        }
}
} 
.van-dialog{
    background:#1f1f23;
}
.tips_content{
    text-align: center;
    padding:15px;
}
.dialog_control{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding:15px 50px;
    span{
        width: 130px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        border-radius: 5px;
        border:1px solid #3e434f;
    }
    .dialog_cancle{
        margin-right:5px;
    }
    .dialog_confirm{
        background:#0d9652;
    }
}
</style>