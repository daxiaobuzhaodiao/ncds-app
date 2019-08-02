<template>
  <div class="user">
    <view class="bg">
      <van-dialog
        use-slot
        :show="diaShow"
        @close="onDiaClose"
        title="登陆/注册"
        close-on-click-overlay="true"
        :show-confirm-button="test"
      >
        <van-button
          open-type="getUserInfo"
          @getuserinfo="getUserInfo"
          custom-class="s"
          block="true"
          type="primary"
        >
          <van-icon class="icon" size="13px" name="chat" />微信登陆
        </van-button>
        <van-button custom-class="s1" block="true" type="info" size>
          <van-icon class="icon" size="13px" name="phone" />密码登陆
        </van-button>
      </van-dialog>
      <van-row>
        <van-col custom-class="d1" span="12">
          <span class="color" v-if="islogin==false" @click="showDia">点击登录/注册</span>
          <span v-else>{{user.nickName}}</span>
        </van-col>
        <van-col span="12">
          <image v-if="islogin==false" src="/static/images/user.png" />
          <image v-else :src="user.avatarUrl" />
        </van-col>
      </van-row>
    </view>

    <van-cell-group v-if="patient">
      <van-cell title="姓名" :value="patient.name" />
      <van-cell title="性别" :value="gender[patient.sex]" />
      <van-cell title="年龄" :value="patient.age" />
      <van-cell title="体重" :value="patient.name" />
      <van-cell title="身高" :value="patient.stature" />
    </van-cell-group>
  </div>
</template>
<script>
import { Login } from "@/utils/https";
export default {
  data() {
    return {
      islogin: false,
      diaShow: false,
      test: false,
      user: {}, // 微信账号信息
      active: 0,
      patient: {}, // 患者信息
      gender: ["男", "女"]
    };
  },
  methods: {
    // 弹窗打开
    showDia() {
      this.diaShow = true;
    },
    // 将code发送到后台，后台获取 openid，然后查询数据是否有 openid 存在，存在则直接给登录并返回 access_token
    // 如果不存在 则说明是第一次登录，跳转到关联患者页面，验证手机登录
    getUserInfo(e) {
      this.user = e.mp.detail.userInfo;
      this.diaShow = false;
      Login().then(res => {
        if (res.statusCode == 201) {
          this.islogin = true;
          this.$store.dispatch("setPatient", res.data.patient);
          this.patient = res.data.patient;
          wx.setStorageSync("access_token", res.data.access_token);
          wx.setStorageSync(
            "access_token_expired_at",
            new Date().getTime() + res.data.expires_in
          );
        } else {
          // 返回 422
          wx.navigateTo({
            url: "/pages/login/main",
            success: function() {}
          });
        }
      });
    },
    // 弹窗关闭
    onClose() {
      this.show = false;
    }
  },
  onShow() {
    this.$root.$mp.page.getTabBar().setData({
      activeIndex: 0 //对应页面的index
    });
  }
};
</script>
<style>
.user .d1 .color {
  font-size: 20px;
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
.user .s {
  margin-top: 15px;
  margin-bottom: 10px;
  width: 80%;
  border-radius: 7px;
}

.user .s1 {
  margin-bottom: 30px;
  width: 80%;
  border-radius: 7px;
}
</style>