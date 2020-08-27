<template>
  <div class="container">
    <BaseHeader :name="name"></BaseHeader>
    <ul class="recordHeader">
        <li>{{$t('time')}}</li>
        <li>{{$t('amount of money')}}</li>
        <li>{{$t('status')}}</li>
    </ul>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loading-text='載入中...' loosing-text='放開後更新資訊'>
        <van-list v-model="loading" :finished="finished" loading-text='載入中...' finished-text="沒有更多了" @load="onLoad">
    <ul>
        <li class="recordContent" v-for="(item,index) in list" :key='index'>
            <p class="time">{{item.create_time}}</p>
            <p>{{item.amount}}</p>
            <p class='status'>{{$t('Unpaid')}}</p>
        </li>   
    </ul>
    </van-list>
      </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('Deposit record'),
        page_size:10,
        page_num:1,
        list:[],
        total:0,
        loading: false,
        finished: false,
        isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      this.page_num = 1;
      this.finished = false;
      this.isLoading = true;
      this.twd_log().then(value=>{
        this.isLoading = false;
      })
    },
    onLoad() {
      this.twd_log(2).then(value => {
         this.loading = false;
        if(this.total < this.page_num){
          this.finished = true;
        }
      });
      
    },
    /*
        收益明細
     */
    twd_log(type=1){
      let params = {
          page_size:this.page_size,
        page_num:this.page_num
      }
      return  this.globalApi.api.record.twd_log(params).then(value=>{
              if(value.data.code == 1){
                  this.total = value.data.data.total_page;
                if(type == 1){
                  this.list = value.data.data.page_data
                }else{
                  if(this.total >this.page_num || this.total ==this.page_num){
                      this.list = this.list.concat(value.data.data.page_data);
                  }
                }
                  this.page_num++;
              }else{
                  this.$toast.fail(value.data.descrp)
              }
          })
    },
  },
  created() {

  },
  mounted() {
    // this.twd_log()
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
.recordHeader{
    display:flex;
    text-align: center;
    color:#fff;
    padding-top:10px;
    font-size:14px;
}
.recordContent{
    display:flex;
    text-align: center;
    color:#999;
    height:50px;
    line-height:50px;
    font-size:14px;
    p{
      flex:1;
    }
    .time{
        color:#e56e52;
        flex:2;
    }
}
</style>