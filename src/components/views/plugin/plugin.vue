<template>
  <div class="waigua">
      <div class="title">
          {{$t('Purchase plug-in')}}
      </div>
      <div class="buypad">
          <div class="buyPlugin">
              {{$t('Purchase plug-in')}}
          </div>
          <div class="applyPlugin">
              {{$t('Apply for experience plug-in')}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

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

<style scoped lang='scss'>
  .waigua{
    background:url("../../../assets/image/waigua.png") no-repeat left top;
    background-size:cover;
    height:100%;
    overflow: auto;
    color:#fff;
    .title{
      margin-top:35px;
      font-size:20px;
      text-align:center;
    }
    .buypad{
      padding-top:67%;
      .buyPlugin,.applyPlugin{
        width:80%;
        margin:15px auto;
        border-radius: 25px;
        font-size: 15px;
        padding: 15px 0;
        text-align:center;
      }
      .buyPlugin{
        background: #e56e52;
      }
      .applyPlugin{
        background: #0d9652;
      }
    }
  }
</style>