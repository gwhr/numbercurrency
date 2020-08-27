<template>
  <div class="container">
    <BaseHeader :name="name"></BaseHeader>
    <div class="form_label">
      <van-form>
        <van-field
          v-model="form.username"
          name="用户名"
          :label="$t('full name')"
          :placeholder="$t('Please fill in your name')"
        />
        <van-field v-model="form.username" name="用户名" :label="$t('sex')" />
        <van-field
          v-model="form.username"
          name="用户名"
          :label="$t('Certificate No')"
          :placeholder="$t('Please fill in the certificate number')"
        />
      </van-form>
    </div>
    <van-button round block type="info" native-type="submit" class="btn">{{$t('To be reviewed')}}</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$t("Real name authentication"),
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {},
  created() {},
  mounted() {},
  components: {}
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
.form_label {
  background: #1f1f23;
  padding-left: 15px;
  padding-bottom: 15px;
  .van-cell {
    background: transparent;
    color: #fff;
    /deep/.van-field__control {
      color: #fff;
    }
  }
  /deep/ .van-field__body {
    &::-webkit-input-placeholder {
      /* WebKit browsers */
      color: rgb(62, 67, 79);
      font-size: 16px;
    }

    &::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: rgb(62, 67, 79);
      font-size: 16px;
    }

    &::-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: rgb(62, 67, 79);
      font-size: 16px;
    }
  }
}
.btn {
  width: 80%;
  margin: 50px auto;
  background: #768ca8;
  color: #fff;
  border-color: #768ca8;
}
</style>