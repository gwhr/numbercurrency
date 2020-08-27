<template>
  <div class="container">
    <BaseHeader :name="name"></BaseHeader>
    <ul class="recordHeader">
        <li>{{$t('time')}}</li>
        <li>{{$t('amount of money')}}</li>
        <li>{{$t('status')}}</li>
    </ul>
    <ul>
        <li class="recordContent">
            <p>01-20 16:44</p>
            <p>01-20 16:44</p>
            <p class='status'>{{$t('Unpaid')}}</p>
        </li>
        <li class="recordContent">
            <p>01-20 16:44</p>
            <p>01-20 16:44</p>
            <p class='status'>{{$t('Unpaid')}}</p>
        </li>   
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('Exchange record')
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
    .status{
        color:#e56e52;
    }
}
</style>