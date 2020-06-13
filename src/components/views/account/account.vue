<template>
  <div style="height:100%;overflow:auto;padding-bottom:50px">
      <div class="myhear">
          <span class="setUp">
              <img :src="setup" alt="">
          </span>
          <div class="myaccout">
                <div class="logo">
                    <img :src="logo" alt="">
                </div>
                <p class="account_level">
                    代理帳號
                </p>
                <p class="account_name">
                    暱稱:YZWETM
                </p>
          </div>
          <ul class="account_tab">
              <li>
                  <div>
                      <img :src="myzzc" alt="">
                  </div>
                  <p class="account_tab_name">{{$t("total assets")}}</p>
              </li>
              <li>
                  <div>
                      <img :src="myzl" alt="">
                  </div>
                  <p class="account_tab_name">{{$t("My profit")}}</p>
              </li>
              <li>
                  <div>
                      <img :src="mylqzh" alt="">
                  </div>
                  <p class="account_tab_name">{{$t("total assets")}}</p>
              </li>
              <li>
                  <div>
                      <img :src="mytj" alt="">
                  </div>
                  <p class="account_tab_name">{{$t("total assets")}}</p>
              </li>
          </ul>
      </div>
      <div class="mylink_box">
          <ul class="mylink">
            <li class="linl_item" v-for="(item,index) in menuList" :key="index">
                <div class="linl_item_name">
                    <img :src="item.img" alt="">
                    <span>{{item.name}}</span>
                </div>
                <img class="linl_item_more" :src="myyou" alt="">
            </li>
        </ul>
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
        menuList:[
            {
                name:this.$t('My promotion'),
                img:icontg
            },
            {
                name:this.$t('Real name authentication'),
                img:iconrz
            },
            {
                name:this.$t('About us'),
                img:iconwe
            },
            {
                name:this.$t('Privacy policy'),
                img:iconys
            },
            {
                name:this.$t('Official communication'),
                img:icongf
            },
            {
                name:this.$t('Version update'),
                img:iconwm
            },
            {
                name:this.$t('Sign out'),
                img:icontc
            },
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
        img{
            width:22px;
            height:22px;
        }
    }
    .myaccout{
        width: 102px;
        margin: 0 auto;
        padding-top: 61px;
        text-align: center;
        .logo{
            
            img{
                width:76px;
                height:76px;
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
</style>