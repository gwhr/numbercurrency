<template>
  <div class="container">
      <BaseHeader :name="name"></BaseHeader>
      <!-- 内容 -->
      <div class="contents">
          
          <div class='content_details'>
            【国会议员：数字美元听证会“令人鼓舞”，但细节仍需讨论】在6月11日国会金融科技工作组的听证会上，每个人似乎都同意可以通过数字美元来改善金融普惠，而关于数字美元的具体细节可能引起了更大的争议。国会议员Warren Davidson是工作组的成员，也是知名加密倡导者，他对听证会的总体基调感到满意：“就人们在这个问题上的立场而言，这并不是真正的党派之争。会议没有因为它对美元构成威胁而直接拒绝，因为它就是美元，这无疑是令人鼓舞的。”在早些时候的谈话中，金融服务委员会的民主党成员特别关注加密技术对美国主权的威胁。Davidson提到全体委员会主席Maxine Waters起草了一项关于昨天谈话核心内容的法案。 
Davidson尤其担心，当谈到“数字美元”时，每个人都在谈论的内容并没有包括现有美元的一些关键优势，包括隐私和自主性：“这是现金的优势，你必须具备这一特点，即你没有真正过滤交易。”因此，Davidson认为，就数字美元的含义达成共识需要更多的时间。（Cointelegraph）
          </div>
          <p class="content_time">
            2020-06-13 14:32:13
          </p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('About us')
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
}
</style>