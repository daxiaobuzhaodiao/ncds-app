<template>
  <div>
    <van-button open-type="getUserInfo" @getuserinfo="getUserInfo">哈哈</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getUserInfo(e) {
      console.log(e.mp.detail.userInfo);
      this.$store.dispatch("setIsAuthenticated", true);
      // this.$store.dispatch("setUser", e.mp.detail.userInfo);
      this.getCode();
    },
    getCode() {
      wx.login({
        success: res => {
          if (res.code) {
            this.$https
              .request({
                url: this.$interfaces.getOpenId,
                method: "POST",
                data: {
                  code: res.code
                }
              })
              .then(res => {
                console.log(res);
              });
          } else {
            console.log("登陆失败" + res.errMsg);
          }
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
