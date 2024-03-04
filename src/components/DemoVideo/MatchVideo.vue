<template>
  <div>
    <h1>比赛视频</h1>
    <h2>经典视频</h2>
    <el-row :gutter="20">
      <el-col :span="8" v-for="item in Match" :key="item.id" :justify="center" style="flex-wrap: nowrap;">
        <div id="video">
          <a :href="item.videoURL" target="_blank"><el-image class="cover" :src="item.coverUrl" alt="cover" lazy></el-image></a>

          <a :href="item.videoURL" target="_blank">
            <p class="title">{{ item.title }}</p>
          </a>
        </div>
        <br>
        <br>
      </el-col>
    </el-row>

    <!-- <div v-if="Match.length % step === 0">
      <el-row v-for="i in Match.length / step" :key="i">
        <el-col :span="6">
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <el-row>
F
      </el-row>
    </div> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 3,
      Match: [
        {
          id: "BV1v94y1e72h",
          title: "半条命第一高手HR|Alex vs 中国L40_M3N9_crossfire",
          videoURL: "https://www.bilibili.com/video" + "/BV1v94y1e72h",
          coverUrl: require("@/assets/images/matchvideo/BV1v94y1e72h.webp"),
        },
        {
          id: "BV1Xw411Q72X",
          title: "半条命第一高手HR|Alex vs 中国L40_M3N9_crossfire（二）",
          videoURL: "https://www.bilibili.com/video" + "/BV1Xw411Q72X",
          coverUrl: require("@/assets/images/matchvideo/BV1Xw411Q72X.webp"),
        },
        {
          id: "BV1Ut411X7Pf",
          title: "半条命世界第一高手Alex vs Noktaa _ crossfire",
          videoURL: "https://www.bilibili.com/video" + "/BV1Ut411X7Pf",
          coverUrl: require("@/assets/images/matchvideo/BV1Ut411X7Pf.webp"),
        },
        {
          id: "BV1hp4y1A7hZ",
          title: "eXe.Reebok vs KingISuS_Crossfire",
          videoURL: "https://www.bilibili.com/video" + "/BV1hp4y1A7hZ",
          coverUrl: require("@/assets/images/matchvideo/BV1hp4y1A7hZ.webp"),
        },
        {
          id: "BV1XH4y127dU",
          title: "Alex vs Noi_1v1_stalkyard",
          videoURL: "https://www.bilibili.com/video" + "/BV1XH4y127dU",
          coverUrl: require("@/assets/images/matchvideo/BV1XH4y127dU.webp"),
        },
        {
          id: "BV1Rm4y1g7w2",
          title: "Alex vs eXe.Reebok_1v1_lost_village2",
          videoURL: "https://www.bilibili.com/video" + "/BV1Rm4y1g7w2",
          coverUrl: require("@/assets/images/matchvideo/BV1Rm4y1g7w2.webp"),
        },
        {
          id: "BV1E34y1z7tQ",
          title: "【原创126】RRTSC Chun vs [BCB]Real-HunterCn",
          videoURL: "https://www.bilibili.com/video" + "/BV1E34y1z7tQ",
          coverUrl: require("@/assets/images/matchvideo/BV1E34y1z7tQ.webp"),
        },
        {
          id: "BV1qt4y1S7kL",
          title: "[HLDM]L40_M3N9 VS RRTS_Chun Crossfire 20190212",
          videoURL: "https://www.bilibili.com/video" + "/BV1qt4y1S7kL",
          coverUrl: require("@/assets/images/matchvideo/BV1qt4y1S7kL.webp"),
        },
        {
          id: "BV1e6421g7GH",
          title: "AGHL1v1 | 高斯枪暴力穿墙+直射式打法 20分钟222分 by Méng | crossfire",
          videoURL: "https://www.bilibili.com/video" + "/BV1e6421g7GH",
          coverUrl: require("@/assets/images/matchvideo/BV1e6421g7GH.webp"),
        },
        {
          id: "BV1q4411y7um",
          title: "2019__HR|Alex vs KingISuS全程记录（1080p60HD）",
          videoURL: "https://www.bilibili.com/video" + "/BV1q4411y7um",
          coverUrl: require("@/assets/images/matchvideo/BV1q4411y7um.webp"),
        },
        {
          id: "BV1JJ411M7CZ",
          title: "半条命高手Alex vs week_stalkyard日期2019.09.23",
          videoURL: "https://www.bilibili.com/video" + "/BV1JJ411M7CZ",
          coverUrl: require("@/assets/images/matchvideo/BV1JJ411M7CZ.webp"),
        },
        {
          id: "BV1pJ411M7uD",
          title: "半条命高手Alex vs Mr.BadNAB_stalkx",
          videoURL: "https://www.bilibili.com/video" + "/BV1pJ411M7uD",
          coverUrl: require("@/assets/images/matchvideo/BV1pJ411M7uD.webp"),
        }
      ]
    }
  }
}
</script>

<style src="@/assets/css/video.css" scoped>
</style>