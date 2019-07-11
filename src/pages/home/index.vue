<template>
  <div class="home">
    <van-tabs :active="active">
      <van-tab index title="医嘱任务">
        <van-collapse :value="activeName" @change="onChange" accordion>
          <van-collapse-item content-class="pdd" name="1">
            <view slot="title">
              药品类医嘱
              <van-tag round type="danger">20</van-tag>
            </view>
            <van-row>
              <van-col custom-class="td" span="2">类别</van-col>
              <van-col custom-class="td" span="5">内容</van-col>
              <van-col custom-class="td" span="3">剂量</van-col>
              <van-col custom-class="td" span="3">单位</van-col>
              <van-col custom-class="td" span="5">频次</van-col>
              <van-col custom-class="td" span="3">用法</van-col>
              <van-col custom-class="td" span="3">备注</van-col>
            </van-row>
            <van-row>
              <van-col custom-class="td" span="2">中药</van-col>
              <van-col custom-class="td" span="5">肾炎舒片</van-col>
              <van-col custom-class="td" span="3">0.25</van-col>
              <van-col custom-class="td" span="3">mg</van-col>
              <van-col custom-class="td" span="5">早晚各一次</van-col>
              <van-col custom-class="td" span="3">口服</van-col>
              <van-col custom-class="td" span="3"></van-col>
            </van-row>
            <van-row>
              <van-col custom-class="td" span="2">西药</van-col>
              <van-col custom-class="td" span="5">肾炎康复片</van-col>
              <van-col custom-class="td" span="3">0.5</van-col>
              <van-col custom-class="td" span="3">mg</van-col>
              <van-col custom-class="td" span="5">每日三次</van-col>
              <van-col custom-class="td" span="3">口服</van-col>
              <van-col custom-class="td" span="3"></van-col>
            </van-row>
            <van-row>
              <van-col custom-class="td" span="2">西药</van-col>
              <van-col custom-class="td" span="5">肾炎康片</van-col>
              <van-col custom-class="td" span="3">0.25</van-col>
              <van-col custom-class="td" span="3">mg</van-col>
              <van-col custom-class="td" span="5">每日三次</van-col>
              <van-col custom-class="td" span="3">口服</van-col>
              <van-col custom-class="td" span="3"></van-col>
            </van-row>
            <van-row>
              <van-col custom-class="td" span="2">中药</van-col>
              <van-col custom-class="td" span="5">肾复康胶囊</van-col>
              <van-col custom-class="td" span="3">0.5</van-col>
              <van-col custom-class="td" span="3">mg</van-col>
              <van-col custom-class="td" span="5">每日三次</van-col>
              <van-col custom-class="td" span="3">口服</van-col>
              <van-col custom-class="td" span="3"></van-col>
            </van-row>
            <van-row>
              <van-col custom-class="td" span="2">中药</van-col>
              <van-col custom-class="td" span="5">肾炎四味片</van-col>
              <van-col custom-class="td" span="3">0.75</van-col>
              <van-col custom-class="td" span="3">mg</van-col>
              <van-col custom-class="td" span="5">每日三次</van-col>
              <van-col custom-class="td" span="3">口服</van-col>
              <van-col custom-class="td" span="3"></van-col>
            </van-row>
            <van-button size="small" custom-class="btn" type="info">执行</van-button>
          </van-collapse-item>
          <van-collapse-item title="嘱托类医嘱" name="2">吃完药后不得喝酒，早睡早起</van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab index title="推荐食谱" class="recipes">
        <view class="recipes-title">饮食健康</view>
        <ul class="advice">
          <li>1.请您记住一定要保持低钠优质低蛋白饮食。</li>
          <li>2.在口服α-酮酸的基础上，蛋白质的推荐量为0.6g/kg/d，能量的推荐量为35Kcal/kg/d。</li>
          <li>3.推荐每天进食蛋白总量约27克，要求50%以上的蛋白质必须是富含必需氨基酸的蛋白（即高生物价蛋白），如鸡蛋、瘦肉和牛奶等，尽量少食富含非优质蛋白的食物，如绿豆，红豆及其制品。</li>
          <li>4.每天保证进食能量总量约1575千卡，如摄入不足，需补充淀粉或其他不含蛋白质（或蛋白质含量较低）的能量补充剂。</li>
          <li>5.饮食方案和药物治疗同样重要，需长期坚持。</li>
        </ul>
        <view class="recipes-title">饮食注意事项</view>
        <van-row custom-class="diet">
          <van-col custom-class="diet-left" span="5">低钠饮食:</van-col>
          <van-col custom-class="diet-right" span="17">
            <p>1.请尽量清淡饮食，并减少高钠食物的摄入如食盐、酱油、味精、盐渍食品、腌制食品、烟熏食品、咸味零食、火腿或其他加工食品（如午餐肉、热狗）;</p>
            <p>2.尽量利用食物本身的味道进行烹饪（原汁蒸、炖等），可适当采用酸味、甜味等调味品（番茄汁、醋等）替代咸味，可适当利用葱、姜、蒜的特殊味道来减少食盐的使用逐步改变自己的饮食习惯，可使用无盐的烹饪方式，仅在烹饪后加入盐或少许酱汁;</p>
          </van-col>
        </van-row>
        <view class="classify">食物中可按照钠含量的不同分为三类</view>
        <van-row>
          <van-col custom-class="td" span="5">类别</van-col>
          <van-col custom-class="td" span="5">mg/100g</van-col>
          <van-col custom-class="td" span="14">食品</van-col>
        </van-row>
        <van-row>
          <van-col custom-class="tdd" span="5">高钠</van-col>
          <van-col custom-class="tdd" span="5">>1000mg</van-col>
          <van-col custom-class="tdd" span="14">酱油、味精、盐、鸡精、腐乳、咸菜、虾皮、火腿、香肠</van-col>
        </van-row>
        <van-row>
          <van-col custom-class="tdd" span="5">中钠</van-col>
          <van-col custom-class="tdd" span="5">10-1000mg</van-col>
          <van-col custom-class="tdd" span="14">猪肉、牛奶、豆腐、白菜、芹菜</van-col>
        </van-row>
        <van-row>
          <van-col custom-class="tdd" span="5">低钠</van-col>
          <van-col custom-class="tdd" span="5">{{xiaoyuhao}}10mg</van-col>
          <van-col custom-class="tdd" span="14">酱油、味精、盐、鸡精、腐乳、咸菜、虾皮、火腿、香肠</van-col>
        </van-row>
        <view class="recipes-title">推荐食谱</view>
        <van-row custom-class="diet">
          <van-col custom-class="diet-left" span="4">早餐:</van-col>
          <van-col custom-class="diet-right" span="18">
            <p>食谱1:鸡蛋1只(7克蛋白质、90千卡),麦淀粉食品1两(0克蛋白质、180千卡)</p>
            <p>食谱2:鸡蛋1只(7克蛋白质、90千卡),藕粉或凉粉1两(0克蛋白质、180千卡)</p>
          </van-col>
        </van-row>
        <van-row custom-class="diet">
          <van-col custom-class="diet-left" span="4">中餐:</van-col>
          <van-col custom-class="diet-right" span="18">
            <p>
              1:米饭：1碗≈生米1两(4克蛋白质、180千卡）;
              <br />2:猪肉或鸡肉或鸭肉或牛肉或鱼肉：1两(7克蛋白质、90千卡);
              <br />3:绿叶蔬菜：250克(4克蛋白质、50千卡)清炒或与粉丝做汤均可;
              <br />4:粉丝或凉粉：2两(0克蛋白质、360千卡)烧肉或与蔬菜做汤均可;
              <br />5:植物油或橄榄油20克(0克蛋白质、180千卡)，约2汤匙;
              <br />6:盐2克;
            </p>
          </van-col>
        </van-row>
        <van-row custom-class="diet">
          <van-col custom-class="diet-left" span="4">晚餐:</van-col>
          <van-col custom-class="diet-right" span="18">
            <p>
              1:米饭：半碗≈生米0.5两(2克蛋白质、90千卡);
              <br />2:猪肉或鸡肉或鸭肉或牛肉或鱼肉：0.5两(3.5克蛋白质、45千卡);
              <br />3:瓜类蔬菜：250克(1克蛋白质、50千卡)清炒或与粉丝做汤均可;
              <br />4:粉丝或凉粉：1两（0克蛋白质、135千卡)烧肉或与蔬菜做汤均可;
              <br />5:植物油或橄榄油20克(0克蛋白质、180千卡)，约2汤匙;
              <br />6:盐2克;
            </p>
          </van-col>
        </van-row>
        <van-row custom-class="suggest">
          <van-col custom-class="suggest-left" span="4">加餐:</van-col>
          <van-col custom-class="suggest-right" span="18">
            <p>加餐:可吃1个水果(1克蛋白质、90千卡);</p>
          </van-col>
        </van-row>
        <view class="recipes-title">营养成分</view>
        <van-row>
          <van-col custom-class="td" span="8">成分</van-col>
          <van-col custom-class="td" span="8">摄入</van-col>
          <van-col custom-class="td" span="8">推荐</van-col>
        </van-row>
        <van-row>
          <van-col custom-class="td" span="8">能量(KCal)</van-col>
          <van-col custom-class="td" span="8">1922</van-col>
          <van-col custom-class="td" span="8">1890~2205</van-col>
        </van-row>
        <van-row>
          <van-col custom-class="td" span="8">总蛋白质(g)</van-col>
          <van-col custom-class="td" span="8">59</van-col>
          <van-col custom-class="td" span="8">50~63</van-col>
        </van-row>
        <van-row>
          <van-col custom-class="td" span="8">Na(mg)</van-col>
          <van-col custom-class="td" span="8">2000</van-col>
          <van-col custom-class="td" span="8">1200~2000</van-col>
        </van-row>
        <view class="recipes-title">提示</view>
        <ul class="advice">
          <li>以上为营养治疗饮食方案建议，请遵医嘱定期复查、进行营养评估并根据结果做相应的方案的调整。</li>
        </ul>
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
      activeName: "1",
      xiaoyuhao: "<"
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
.home .recipes .recipes-title {
  font-size: 18px;
  margin: 10px 5px;
  letter-spacing: 3px;
}

.home .recipes .classify {
  font-size: 18px;
  text-align: center;
  border-top: 1px solid #aaa;
  margin: 10px 0 0 0;
  letter-spacing: 3px;
}

.home .recipes .diet-left {
  padding: 25% 10px 25% 0;
  font-size: 16px;
  border-right: 1px dotted #aaa;
  text-align: right;
}

.home .recipes .diet-right {
  font-size: 16px;
  margin-left: 10px;
  letter-spacing: 2px;
}

.home .recipes .suggest{
  border-bottom: 1px solid #aaa;
}

.home .recipes .suggest-left {
  padding: 15px 10px 0 0;
  font-size: 16px;
  border-right: 1px dotted #aaa;
  text-align: right;
}

.home .recipes .suggest-right {
  font-size: 16px;
  margin-left: 10px;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.home .recipes .diet-right p {
  margin-bottom: 20px;
}

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

.home .recipes .advice {
  font-size: 16px;
  padding: 0 20px;
  letter-spacing: 3px;
}
.home .recipes .advice > li {
  margin-bottom: 15px;
}
.td {
  border: 1px solid #aaa;
  text-align: center;
  height: 20px;
  font-size: 12px;
  overflow: hidden;
  letter-spacing: 3px;
}
.tdd {
  border: 1px solid #aaa;
  text-align: center;
  height: 35px;
  font-size: 12px;
  overflow: hidden;
  letter-spacing: 3px;
}
.btn {
  margin-top: 5px;
  margin-left: 80%;
}
.home .pdd {
  padding: 0;
}
</style>
