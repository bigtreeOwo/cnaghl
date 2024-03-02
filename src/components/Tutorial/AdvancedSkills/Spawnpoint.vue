<template>
  <div class="AGTricksContent">
    <h1>重生点</h1>
    <p>
      相信大家都一定看过一些高手在crossfire地图上预测玩家接下来重生的位置，从而形成压制。许多人认为下一个重生点的位置是随机的，确实如此，但它并不是完全的随机。熟悉重生点的机制可以帮助你决策下一步的移动位置，从而带来优势。
    </p>
    <p> <strong style="color: red">1、记住所有重生点。</strong><br>每张地图都有特定数量和特定位置的重生点。对于每张地图，重生点的数量和位置都是不同的，您需要牢记它们的顺序和位置。</p>
    <p>以下是部分地图的重生点位置<strong style="color: red">（点击下方图片，可翻页，可放大查看）</strong></p>
    <el-image :key="url" :src="url" :preview-src-list="urlList"></el-image>
    <p><strong style="color: red">2、掌握重生点之间的关联。</strong><br>在地图更改或比赛开始后，地图上的第一个重生的位置是随机的。但接下来的所有生成都不是完全随机的。下一个重生点的序号与当前重生点的序号大小之差不会超过5。例如，敌人在重生点 1 重生，然后下一个重生点只会在2到6的一个点，具体在这其中的哪一个点将会是完全随机。另一个例子是，如果你的敌人在15号出生点上重生，那么在你杀死他后，他只会在以下生成点之一重生：16、17、1、2、3。</p>
    <p>以下以crossfire的重生点作为例子，点击图片上的重生点，模仿正常游戏时的情景。</p>

    <p> <strong style="color: red">红色</strong>框代表当前位置，<strong style="color: green">绿色</strong>框代表下一个重生点可能的位置， <strong style="color: red">点击红框</strong>模仿刷点。</p>

    <div id="Spawnpointexample">
      <button class="point" @click="kill">1</button>
      <button class="point" @click="kill">2</button>
      <button class="point" @click="kill">3</button>
      <button class="point" @click="kill">4</button>
      <button class="point" @click="kill">5</button>
      <button class="point" @click="kill">6</button>
      <button class="point" @click="kill">7</button>
      <button class="point" @click="kill">8</button>
      <button class="point" @click="kill">9</button>
      <button class="point" @click="kill">10</button>
      <button class="point" @click="kill">11</button>
      <button class="point" @click="kill">12</button>
      <button class="point" @click="kill">13</button>
      <button class="point" @click="kill">14</button>
      <button class="point" @click="kill">15</button>
      <button class="point" @click="kill">16</button>
      <button class="point" @click="kill">17</button>
      <p id="currentspawn">当前重生点位在: <strong style="color: red">{{ spawnpoint[0] }}</strong></p>
      <p id="predictspawn">下一个重生点位可能在: <strong style="color: rgb(159, 255, 159)" v-for="i in 5" :key="i"> {{ spawnpoint[i] }} </strong></p>
    </div>

    <p><strong style="color: red">3、特殊情况。</strong><br>如果随机被选中的重生点已经被占用，那么游戏会选择该重生点的下一个作为新的重生点。如果仍然被占用，继续选择下一个点，重复此过程。如果所有重生点都被占用，那么最先被选中的重生点上的玩家将会被杀死，这在多人游戏中很常见。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: require('@/assets/images/tutorial/advancedskills/spawn/crossfire.png'),
      urlList: [
        require('@/assets/images/tutorial/advancedskills/spawn/crossfire.png'),
        require('@/assets/images/tutorial/advancedskills/spawn/stalkyard.png'),
        require('@/assets/images/tutorial/advancedskills/spawn/lost_village2.png'),
        require('@/assets/images/tutorial/advancedskills/spawn/stalkx.png'),
        require('@/assets/images/tutorial/advancedskills/spawn/rapidcore.png'),
        require('@/assets/images/tutorial/advancedskills/spawn/boot_camp.png'),
        require('@/assets/images/tutorial/advancedskills/spawn/datacore.png'),
        require('@/assets/images/tutorial/advancedskills/spawn/doublecross.png'),
        require('@/assets/images/tutorial/advancedskills/spawn/endcamp.png'),
      ],
      spawnpoint: [1,2,3,4,5,6],
    }
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      let points = document.getElementsByClassName("point");
      for (let i = 0; i < points.length; i++) {
        points[i].setAttribute("disabled", "true");
        this.spawnpoint[i] = i + 1;
      }
      // console.log("spawnpoint初始值", this.spawnpoint);
      points[0].classList.add("currentpos");
      points[0].removeAttribute("disabled")
      this.predict(1);
    },
    spawn() {
      /* 
      选取num之后的5个点中随机挑选一个点生成
      */

      // 获取所有的点
      let points = document.getElementsByClassName("point");
      // console.log(points);

      const random = Math.floor(Math.random() * 5) + 1;
      // console.log("获取的随机数random：", random);

      // 在num之后的五个点中随机挑选一个点生成
      const nextpos = this.spawnpoint[random];
      // console.log("下一个重生点", nextpos);

      // 重新排列spawnpoint 哈希表，使得重生位置是数组的第一个元素
      let arr = this.spawnpoint.splice(0, this.spawnpoint.indexOf(nextpos));
      // console.log("截断部分", arr);

      // 将截断的哈希表拼接到最后面
      this.spawnpoint.push(...arr);
      // console.log("-------------------------------------------");
      // console.log("新spawnpoint", this.spawnpoint);

      // 目标点按钮样式
      points[this.spawnpoint[0] - 1].classList.add("currentpos");
      // 目标点按钮激活
      points[this.spawnpoint[0] - 1].removeAttribute("disabled");

      // 预测点按钮样式
      this.predict(nextpos);
    },
    kill(e) {
      /*
        当前点被点击
      */
      let points = document.getElementsByClassName("point");
      let num = parseInt(e.target.innerText);
      // console.log("---------------------------------------");
      // console.log("kill pos :", num);
      for (let i = 0; i < points.length; i++) {
        // console.log("去除样式", i);
        points[i].classList.remove("predictpos");
        points[i].classList.remove("currentpos");
        points[i].setAttribute("disabled", "true");
      }
      // 生成下一个点
      this.spawn(num);

    },
    predict() {
      /*
      为num之后的5个点添加预测点按钮样式
      */
      // console.log("-------------------");
      // console.log("currentpos", this.spawnpoint[0]);

      let points = document.getElementsByClassName('point');
      for (let i = 1; i < 6; i++) {
        // console.log("预测点", this.spawnpoint[i]);
        points[this.spawnpoint[i] - 1].classList.add("predictpos");
      }
    }
  }
}
</script>

<style src="@/assets/css/advancedskill.css" scoped>
</style>