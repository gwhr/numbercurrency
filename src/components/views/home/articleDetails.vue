<template>
  <div class="container">
      <BaseHeader :name="name"></BaseHeader>
      <!-- 内容 -->
      <div class="contents">
          <div class='content_title'>{{title}}</div>
          <div class='content_details' v-html="content"></div>
          <p class="content_time">
            {{time}}
          </p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('About us'),
        content:'',
        title:'',
        time:''
    };
  },
  methods: {

  },
  created() {

  },
  mounted() {
      this.title = this.$route.query.item.post_title;
      this.content = this.$route.query.item.post_content;
      this.time = this.$route.query.item.post_date;
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
.contents{
    width: 84%;
    margin: 0 auto;
    border-radius: 5px;
    background: #1f1f23;
    padding: 10px 15px;
    .content_time{
      text-align:right;
      color:#3e434f;
      margin-bottom: 10px;
    }
    .content_details{
      color:#fff;
      line-height:1.5;
      font-size:14px;
    }
    .content_title{
      color:#fff;
      line-height:1.5;
      font-size:14px;
      text-align:center;
    }
}
</style>