<template>
  <div class="container">
    <BaseHeader :name="name"></BaseHeader>
    <System
        :list='list'
    ></System>
  </div>
</template>

<script>
import System from "../home/new/System"
export default {
  data() {
    return {
      name: this.$t("About us"),
      active:0,
      componentsName:'System',
      articlesName:[],
      allData:'',
      list:[]
    };
  },
  methods: {
      change(){
          this.list = this.allData[this.articlesName[this.active].objname].articles
      },
      // 獲取文章列表
      articles(){
        this.globalApi.api.index.articlesabout().then(value=>{
              if(value.data.code == 200){
                this.list = value.data.data;
                console.log(this.articlesName)
              }else{
              }
          })
      }
  },
  created() {},
  mounted() {
    this.articles();
  },
  components: {
      System
  }
};
</script>

<style scoped lang="scss">
.container {
  padding-top: 44px;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  padding-bottom: 50px;
}
.tab_list{
    /deep/ .van-tabs__nav{
        background:transparent;
            .van-tab{
                color: #999;
                span{
                    padding:10px 0;
                }
            }
            .van-tab--active {
                color: #0d9652;
                font-weight: 500;
            }
            .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
                border:none;
            }
            .van-tabs__line{
                background:#0d9652;
            }
    }
}

</style>