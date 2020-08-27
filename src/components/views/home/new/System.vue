<template>
  <div>
      <ul class="news_list">
        <li @click="toDetails(item)" v-for="(item,index) in list" :key="index">
            <p class="title_bg">
                {{item.post_title}}
            </p>
            <div class="news_direscribe">
                {{item.post_excerpt}}
            </div>
            <div class="news_time">
                <span>{{item.post_date}}</span>
            </div>
            <div class="news_details">
                <span>
                    {{$t('View details')}}
                </span>
                <span>
                    <img src="../../../../assets/image/myyou.png" alt="">
                </span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
      toDetails(item){
          this.$router.push({
              path:'/acticleDetails',
              query:{
                  item
              }
          })
      }
  },
  created() {

  },
  mounted() {

  },
  components: {},
  props:['list']
}
</script>

<style scoped lang="scss">
.news_list{
    width:90%;
    margin:0 auto;
    margin-top:30px;
    li{
        background: #1f1f23;
        font-size:14px;
        color:#fff;
        .title_bg{
            width: 188px;
            height: 24px;
            line-height: 24px;
            padding-left: 25px;
            overflow: hidden;
            background: url("../../../../assets/image/titlebg.png") left center;
            background-size:100% 100%;
        }
        .news_direscribe{
            padding: 0px 15px;
            height: 37px;
            overflow: hidden;
            margin-bottom: 5px;
            margin-top: 10px;
            line-height:1.4;
        }
        .news_time{
            text-align: right;
            border-bottom: 1px solid rgb(153, 153, 153);
            padding-right: 15px;
            padding-bottom: 7px;
            span{
                color: rgb(153, 153, 153);
                position: relative;
                &::before{
                    content:"";
                    position:absolute;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: rgb(153, 153, 153);
                    left:-20px;
                    top:50%;
                    margin-top:-4px;
                }
            }
        }
        .news_details{
            padding: 10px 15px;
            margin-bottom: 15px;
            display:flex;
            justify-content: space-between;
            img{
                width:10px;
                height:10px;
            }
        }
    }
}
</style>