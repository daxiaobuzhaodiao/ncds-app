<template>
  <div class="login">
    <van-notice-bar scrollable="false" text="请输入患者档案中预留的手机号" />
    <van-cell-group>
      <van-field
        :error-message="phoneErr"
        label="手机号"
        required
        placeholder="请输入手机号"
        @change="onPhoneChanged"
      />
      <van-field
        label="验证码"
        required
        placeholder="请输入短信验证码"
        :error-message="codeErr"
        use-button-slot
        @change="onCodeChanged"
      >
        <van-button
          plain
          slot="button"
          :disabled="btnDisabled"
          @click="getCode"
          size="small"
          type="primary"
        >{{ btnText }}</van-button>
      </van-field>
      <van-field
        password="true"
        label="密码"
        placeholder="请输入密码"
        :error-message="pwdErr"
        required
        @change="onPwdChanged"
      />
      <van-field
        password="true"
        label="确认密码"
        placeholder="请确认密码"
        required
        @change="onRePwdChanged"
      />
    </van-cell-group>

    <van-button type="info" custom-class="login-btn" @click="login">登录</van-button>
    <!-- 弹框容器 -->
    <van-dialog id="van-dialog" />
    <!-- 弹窗容器 -->
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import Toast from "~/vant-weapp/dist/toast/toast";
import { Request, Login } from "@/utils/https";
import Dialog from "~/vant-weapp/dist/dialog/dialog";
export default {
  data() {
    return {
      phoneErr: "",
      codeErr: "",
      pwdErr: "",
      formData: {},
      btnText: "获取验证码",
      btnDisabled: false,
      verification_key: ''
    };
  },

  methods: {
    onPhoneChanged(e) {
      this.formData.mobile_phone = e.mp.detail;
      if (!this.formData.mobile_phone) {
        this.phoneErr = "手机号不为空";
      } else {
        this.phoneErr = "";
      }
    },
    onCodeChanged(e) {
      this.formData.code = e.mp.detail;
      if (!this.formData.code) {
        this.codeErr = "验证码不为空";
      } else {
        this.codeErr = "";
      }
    },
    onPwdChanged(e) {
      this.formData.password = e.mp.detail;
      if (!this.formData.password) {
        this.pwdErr = "密码不为空";
      } else {
        this.pwdErr = "";
      }
    },
    onRePwdChanged(e) {
      this.formData.rePassword = e.mp.detail;
    },
    /**
     * 登录
     */
    login() {
      // if (!this.formValidate()) {
      //   return false;
      // }

      console.log(this.formData);
      
      Login({
        url: this.$interfaces.welogin,
        method: "post",
        data: this.formData
      }).then(res => {
        if (res.statusCode == 422) {
          Toast.fail(res.data.message);
          return false;
        }
      });
    },
    /**
     * 获取验证码
     */
    getCode() {
      this.formData.verification_key = ''
      if (!this.formData.mobile_phone) {
        this.phoneErr = "请输入正确的手机号";
        return false;
      }
      // 频率控制
      if (this.btnDisabled) {
        return;
      }
      this.changeBtnText(); // 按钮倒计时
      Request({
        url: this.$interfaces.getCode,
        method: "post",
        data: {
          mobile_phone: this.formData.mobile_phone
        }
      }).then(res => {
        console.log(res);
        if (res.statusCode == 200) {
          this.formData.verification_key = res.data.key
          Toast.success('已發送');
        } else {
          // 返回 422
          Toast.fail(res.data.message);
          return false;
        }
      });
    },
    /**
     * 表单验证
     */
    formValidate() {
      if (!this.formData.mobile_phone) {
        this.phoneErr = "手机号不为空";
      }
      if (!this.formData.code) {
        this.codeErr = "验证码不为空";
      }
      if (this.formData.password != this.formData.rePassword) {
        this.pwdErr = "密碼不一致";
      }
      if (!this.formData.password || !this.formData.rePassword) {
        this.pwdErr = "密码不为空";
      }
      // 有任何一个错误 返回 false
      if (this.phoneErr || this.codeErr || this.pwdErr) {
        return false;
      }
    },
    /**
     * 获取验证码按钮倒计时
     */
    changeBtnText() {
      this.btnDisabled = true;
      this.btnText = 10;
      let count = setInterval(() => {
        this.btnText--;
        if (this.btnText <= 0) {
          clearInterval(count);
          this.btnText = "获取验证码";
          this.btnDisabled = false;
        }
      }, 1000);
    }
  }
};
</script> 
<style>
.login .login-btn {
  margin-top: 10px;
  width: 60%;
  margin-left: 20%;
  border-radius: 5px;
}
</style>