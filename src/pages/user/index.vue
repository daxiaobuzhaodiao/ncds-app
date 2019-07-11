<template>
  <div class="user">
    <view class="bg">
      <van-dialog
        use-slot
        :show="show"
        @close="onClose"
        title="登陆/注册"
        close-on-click-overlay="true"
        :show-confirm-button="test"
      >
        <van-button
          open-type="getUserInfo"
          @getuserinfo="getUserInfo"
          custom-class="s1"
          block="true"
          type="primary"
        >
          <van-icon class="icon" size="13px" name="chat" />微信登陆
        </van-button>
        <van-button custom-class="s1" block="true" type="info">
          <van-icon class="icon" size="13px" name="phone" />手机登陆
        </van-button>
      </van-dialog>
      <van-row>
        <van-col custom-class="d1" span="12">
          <span class="color" v-if="islogin==false" @click="dia">登陆/注册</span>
          <span v-else>{{userInfo.nickName}}</span>
        </van-col>
        <van-col span="12">
          <image v-if="islogin==false" src="/static/images/user.png" />
          <image v-else :src="userInfo.avatarUrl" />
        </van-col>
      </van-row>
    </view>

    <van-cell-group>
      <van-cell title="姓名" value="内容" />
      <van-cell title="性别" value="内容" />
      <van-cell title="年龄" value="内容" />
      <van-cell title="体重" value="内容" />
      <van-cell title="身高" value="内容" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      islogin: false,
      show: false,
      test: false,
      userInfo: ""
    };
  },
  methods: {
    dia() {
      this.show = true;
    },

    getUserInfo(e) {
      console.log(e.mp.detail.userInfo);
      this.islogin = true;
      this.userInfo = e.mp.detail.userInfo;
      this.show = false;
    },

    onClose() {
      this.show = false;
    }
  }
};
</script>
<style>
.user .d1 .color {
  font-size: 28px;
}
.bg {
  height: 150px;
  background-color: #aaccdd;
}
.user .d1 {
  padding-top: 60px;
  padding-left: 40px;
}
image {
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 40px;
  width: 100px;
  height: 100px;
}
.icon {
  margin-right: 5px;
  margin-top: 5px;
}
.user .s1 {
  margin-top: 5px;
  margin-bottom: 10px;
  width: 80%;
}
</style>