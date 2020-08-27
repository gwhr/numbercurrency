<template>
  <div class="container">
    <BaseHeader :name="name"></BaseHeader>
    <div class="logo">
        <img src="../../../assets/image/logo2.png" alt="">
    </div>
    <ul class="version_list">
        <li>
            <span>
                {{$t('current version')}}
            </span>
            <span>
                v
            </span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('Version update')
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
.logo{
    text-align:center;
    padding-top:80px;
    img{
        width:84px;
        height:131px;
    }
}
.version_list{
    width: 90%;
    margin: 71px auto 0;
    box-sizing: border-box;
    font-size: 14px;
    li{
        border-bottom: 1px solid #3e434f;
        height: 53px;
        line-height: 53px;
        display:flex;
        justify-content: space-between;
        color:#fff;
    }
}
</style>