<template>
  <div class="container">
      <BaseHeader :name="name"></BaseHeader>
      <div class='text_area'>
          <div class="text_area_content">
              <textarea name="" id="" v-model="content"></textarea>
          </div>
          <van-uploader style="width:80px" :after-read="afterRead" v-model="fileList" multiple  :max-count="1"/>
      </div>
      <van-button  block type="info" native-type="submit" class="btn" @click="submitFeedback">
        {{$t('confirm')}}
      </van-button>
      <div class="news_title">
          {{$t('Latest feedback')}}
      </div>
      <ul class="feedbackList">
          <li v-for="(item,index) in list" :key="index">
              {{item.title}}
          </li>
      </ul>
    <div class="lookMore" @click="toMore">
        查看全部
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('Official communication'),
        fileList:[],
        content:'',
        list:[]
    };
  },
  methods: {
      toMore(){
          this.$router.push({
              path:'/questionList'
          })
      },
      afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.fileList.push(file.file)
    },
    // 官网交流
    submitFeedback(){
      let params = {
            title:'',
            content:this.content,
            image:this.fileList[0]
        }
        this.globalApi.api.user.submitFeedback(params).then(value=>{
              if(value.data.code == 200){
                  this.$toast.success(value.data.descrp)
              }else{
                  this.$toast.fail(value.data.descrp)
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
      this.Feedback()
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
.text_area{
    background: #1f1f23;
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
    padding: 15px;
}
.text_area_content{
    color:#fff;
    width:275px;
    height:100px;
    textarea{
        width:100%;
        height:100%;
        background:transparent;
        border:none;
        line-height:1.2;
    }
}
.btn{
    width:80%;
    margin:50px auto;
    background:#0d9652;
    color:#fff;
    border-color:#0d9652;
}
.news_title{
    width:80%;
    margin:10px auto;
    color:#fff;
    font-size: 20px;
    padding-bottom: 20px;
    padding-top: 18px;
    font-weight: bold;
}
.feedbackList{
    color:#fff;
    font-size:14px;
    width:80%;
    margin:10px auto;
    li{
        margin-bottom: 20px;
    }
}
.lookMore{
    text-align: center;
    font-size:16px;
    color:#0d9652;
}
</style>