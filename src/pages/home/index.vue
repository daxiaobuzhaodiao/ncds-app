<template>
  <div>
    <van-tabs :active="active">
      <van-tab index title="医嘱任务">
        <van-collapse :value="activeName" @change="onChange" accordion>
          <van-collapse-item name="1">
            <view slot="title">
              药品类医嘱
              <van-tag round type="primary">20</van-tag>
            </view>
            <view>
              <table class="layui-table">
                <thead>
                  <tr>
                    <th>类别</th>
                    <th>内容</th>
                    <th>剂量</th>
                    <th>单位</th>
                    <th>频次</th>
                    <th>用法</th>
                    <th>备注</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>中药</td>
                    <td>肾炎舒片</td>
                    <td>0.25</td>
                    <td>mg</td>
                    <td>早晚各一次</td>
                    <td>口服</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>西药</td>
                    <td>肾炎康复片</td>
                    <td>0.5</td>
                    <td>mg</td>
                    <td>每日三次</td>
                    <td>口服</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>西药</td>
                    <td>肾炎康片</td>
                    <td>0.25</td>
                    <td>mg</td>
                    <td>每日三次</td>
                    <td>口服</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>中药</td>
                    <td>肾复康胶囊</td>
                    <td>0.5</td>
                    <td>mg</td>
                    <td>每日三次</td>
                    <td>口服</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>中药</td>
                    <td>肾炎四味片</td>
                    <td>0.75</td>
                    <td>mg</td>
                    <td>每日三次</td>
                    <td>口服</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </view>
          </van-collapse-item>
          <van-collapse-item title="嘱托类医嘱" name="2">吃完药后不得喝酒，早睡早起</van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab index title="推荐食谱">
        <view style="font-size:1.2rem; margin:10px 0px">饮食健康</view>
        <view style="margin-left: 2rem">
          <ul class="advice" style="font-size:0.9rem;">
            <li>1.请您记住一定要保持低钠优质低蛋白饮食。</li>
            <li>2.在口服α-酮酸的基础上，蛋白质的推荐量为0.6g/kg/d，能量的推荐量为35Kcal/kg/d。</li>
            <li>3.推荐每天进食蛋白总量约27克，要求50%以上的蛋白质必须是富含必需氨基酸的蛋白（即高生物价蛋白），如鸡蛋、瘦肉和牛奶等，尽量少食富含非优质蛋白的食物，如绿豆，红豆及其制品。</li>
            <li>4.每天保证进食能量总量约1575千卡，如摄入不足，需补充淀粉或其他不含蛋白质（或蛋白质含量较低）的能量补充剂。</li>
            <li>5.饮食方案和药物治疗同样重要，需长期坚持。</li>
          </ul>
        </view>
        <view style="font-size:1.2rem; margin:10px 0px">饮食注意事项</view>
        <table style="border:none">
          <tbody>
            <tr style="border-bottom: 1px solid gray">
              <td width="25%" style="text-align: right">低钠饮食：</td>
              <td>
                <p>1.请尽量清淡饮食，并减少高钠食物的摄入如食盐、酱油、味精、盐渍食品、腌制食品、烟熏食品、咸味零食、火腿或其他加工食品（如午餐肉、热狗）；</p>
              </td>
              <td>
                <p>2.尽量利用食物本身的味道进行烹饪（原汁蒸、炖等），可适当采用酸味、甜味等调味品（番茄汁、醋等）替代咸味，可适当利用葱、姜、蒜的特殊味道来减少食盐的使用逐步改变自己的饮食习惯，可使用无盐的烹饪方式，仅在烹饪后加入盐或少许酱汁；</p>
              </td>
            </tr>
          </tbody>
        </table>
      </van-tab>
      <van-tab index title="健康任务">
        <van-collapse :value="activeName" @change="onChange" accordion>
          <van-collapse-item name="1">
            <view slot="title">
              每天血压测量和记录
              <van-tag round type="primary">20</van-tag>
            </view>内容
          </van-collapse-item>
          <van-collapse-item title="每天血糖测量和记录" name="2">吃完药后不得喝酒，早睡早起</van-collapse-item>
          <van-collapse-item title="每天运动记录" name="3">吃完药后不得喝酒，早睡早起</van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab index title="行程提醒">
        <view class="mm">下次本院复诊时间</view>
        <hr />
        <view class="mm">2019年5月11号</view>
        <hr />
        <view class="mm">
          <h2>距今天还有</h2>
          <h1 style="margin-top:1rem; margin-bottom:1rem; font-size:3rem">14</h1>
          <h2>天</h2>
        </view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      activeName: "1"
    };
  },
  methods: {
    onChange(event) {
      this.activeName = event.mp.detail;
    }
  }
};
</script>

<style>
.mm {
  text-align: center;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
}
hr {
  height: 3px;
  margin: 10px 0;
  clear: both;
  background-color: #e6e6e6;
}
.advice > li {
  margin-bottom: 0.5rem;
}
.layui-table tr th {
  border-width: 1px;
  border-style: solid;
  border-color: #e6e6e6;
  font-weight: bold;
  padding: 5px 10px;
  text-align: center;
  background-color: white;
  position: relative;
  line-height: 20px;
  font-size: 14px;
  display: inline-block;
}
.layui-table tr td {
  display: inline-block;
  text-align: center;
  background-color: white;
  position: relative;
  padding: 5px 8px;
  line-height: 20px;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  border-color: #e6e6e6;
}
</style>
