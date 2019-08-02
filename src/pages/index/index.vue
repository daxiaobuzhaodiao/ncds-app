<template>
  <div class="index">
    <van-tabs :active="active">
      <van-tab title="血压">
        <div class="pressure">
          <van-tag custom-class="blood" color="#ffd700" size="medium">舒</van-tag>
          <span class="content-size">60~90</span>
          <van-tag custom-class="blood" color="lightgreen" size="medium">收</van-tag>
          <span class="content-size">90~140</span>
          <span class="content-unit">单位:mmHg</span>
        </div>
        <div class="content-all">
          <h5>早上：88/126</h5>
          <h5>
            中午：
            <span style="color:red">58</span>/129
          </h5>
          <h5>下午：73/112</h5>
          <h5>晚上：67/98</h5>
        </div>
        <div class="hr"></div>
        <div class="content-day">
          历史记录
          <van-button size="small" class="content-right" @click="dia" type="default">点击筛选</van-button>
          <van-popup :show="show" position="bottom" @click="se">
            <van-picker :columns="columns" @change="onChange" />
          </van-popup>
        </div>
        <van-row>
          <van-col custom-class="td" span="6">日期</van-col>
          <van-col custom-class="td" span="6">时间段</van-col>
          <van-col custom-class="td" span="6">高压/低压</van-col>
          <van-col custom-class="td" span="6">单位</van-col>
        </van-row>
        <van-row>
          <van-col custom-class="td" span="6">2019/04/22</van-col>
          <van-col custom-class="td" span="6">早上</van-col>
          <van-col custom-class="td" span="6">101/88</van-col>
          <van-col custom-class="td" span="6">mmHg</van-col>
        </van-row>
        <van-row>
          <van-col custom-class="td" span="6">2019/04/21</van-col>
          <van-col custom-class="td" span="6">中午</van-col>
          <van-col custom-class="td" span="6">110/68</van-col>
          <van-col custom-class="td" span="6">mmHg</van-col>
        </van-row>
        <van-row>
          <van-col custom-class="td" span="6">2019/04/18</van-col>
          <van-col custom-class="td" span="6">中午</van-col>
          <van-col custom-class="td" span="6">129/75</van-col>
          <van-col custom-class="td" span="6">mmHg</van-col>
        </van-row>
        <van-row>
          <van-col custom-class="td" span="6">2019/04/01</van-col>
          <van-col custom-class="td" span="6">晚上</van-col>
          <van-col custom-class="td" span="6">120/88</van-col>
          <van-col custom-class="td" span="6">mmHg</van-col>
        </van-row>
      </van-tab>
      <van-tab title="血糖"></van-tab>
      <van-tab title="用药"></van-tab>
      <van-tab title="任务"></van-tab>
      <van-tab title="膳食"></van-tab>
      <van-tab title="检验查询"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Toast from "~/vant-weapp/dist/toast/toast";
export default {
  data() {
    return {
      show: false,
      active: 1,
      columns: ["早上", "中午", "下午", "晚上"]
    };
  },

  // 页面显示
  onShow() {
    this.$root.$mp.page.getTabBar().setData({
      activeIndex: 2 //对应页面的index
    });
  },
  methods: {
    dia() {
      this.show = true;
    },
    onChange(event) {
      console.log(event);
      const { picker, value, index } = event.mp.detail;
    },
    se() {
      this.show = false;
    }
  }
};
</script>

<style>
.pressure {
  border-bottom: 1px solid #e6e6e6;
}
.pressure .blood {
  margin: 15px 5px 15px 20px;
}
.pressure .content-size {
  font-size: 14px;
}
.pressure .content-unit {
  margin-left: 9px;
  font-size: 14px;
}
.content-all {
  text-align: center;
  margin: 16px;
  font-size: 18px;
}
.content-day {
  float: left;
  padding: 15px 30px;
  font-size: 18px;
}
.content-right {
  margin-left: 150px;
}
.hr {
  border-bottom: 1px solid #e6e6e6;
}
.td {
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  border-right: 1px solid #aaa;
  text-align: center;
  height: 25px;
  font-size: 16px;
  overflow: hidden;
}
</style>
