<template>
  <div class="container">
    <BaseHeader :name="name">
        <div slot="operation" @click="toRecord()">
            {{$t('Money filling record')}}
      </div>
    </BaseHeader>
    <div class="erweima">
        <img src="../../../assets/image/erweima.png" alt="">
    </div>
    <van-button round block type="info" native-type="submit" class="btn">
        {{$t('Save picture')}}
    </van-button>
    <div class="links">
        0x248d9331977d52457563f75ef887426416182d07
    </div>
    <van-button 
        round 
        block 
        type="info" 
        native-type="submit" 
        class="btn" 
        id="copy"
        :data-clipboard-text="inviteUrl"
        @click="newCopy">
        {{$t('Copy address')}}
    </van-button>
    <div class="filling_tips">
        請無向上述地址充值任何非USDT資產，否則資產將不可找回。您充值至上述地址后，需要整個網絡節點的確認，12次網絡確認到帳，
				12次網絡確認后可提幣。您的充值地址不會經常改變，可以重複充值；如有更改，
				我們會盡量通過網站公告或郵件通知您。請務必確認電腦及瀏覽器安全，防止信息被篡改或泄露。
    </div>
    <van-dialog v-model="show" class="fill_dialog" :showConfirmButton="false">
        <div class="dialog_img">
            <img src="../../../assets/image/dianma.png" alt="">
        </div>
        <div class="dialog_text">
            默認顯示ERC20 /USDT網絡充值地址，暫不支持USDT-OMNI充值地址。
        </div>
        <div style="text-align:center;">
            <van-button @click="close" plain type="primary" class="btn2">我已知曉，確認使用我已知曉</van-button>
        </div>
        
    </van-dialog>
  </div>
</template>

<script>
import clipboard from "clipboard";
export default {
  data() {
    return {
        name:this.$t('Money filling'),
        inviteUrl:'2222',
        show:true
    };
  },
  methods: {
    newCopy() {
        new clipboard("#copy");
        this.$toast.success("複製成功");
    },
    toRecord(){
        this.$router.push({
            path:"/moneyFillRecord"
        })
    },
    close(){
        this.show = false;
    }
    
  },
  created() {

  },
  mounted() {

  },
  components: {},
}
</script>

<style scoped lang="scss">
.container {
  padding-top: 44px;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  padding-bottom: 50px;
}
.erweima{
    text-align:center;
    padding-top:20px;
    img{
        width:125px;
        height:125px;
    }
}
.btn{
    width:80%;
    margin:20px auto;
    background:#0d9652;
    color:#fff;
    border-color:#0d9652;
    
}
.btn2{
    width:80%;
    margin:20px auto;
    background:transparent;
    color:#fff;
    border-color:#0d9652;
    border:1px solid #0d9652 !important;
}
.links{
    width: 90%;
    color:#fff;
    text-align:center;
}
.filling_tips{
    width: 90%;
    margin: 20px auto 0;
    color: #0d9652;
    font-size: 15px;
    line-height:1.3;
}
.fill_dialog{
    background:#1f1f23;
    font-size:14px;
    color:#fff;
    .dialog_img{
        text-align:center;
        padding-top:10px;
        padding-bottom: 10px;
        img{
            width:100px;
            height:132px;
        }
    }
    .dialog_text{
        width:90%;
        margin:20px auto;
        line-height:1.3;
    }
}
</style>