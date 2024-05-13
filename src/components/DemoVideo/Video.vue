<template>
  <div>
    <h1>其他视频</h1>
    <el-card class="box-card">
      <div slot="header">
        <h2>AG Movies</h2>
      </div>
      <div class="flex-container">
        <div class="box" v-for="item in AGMovies" :key="item.id">
          <a :href="biliBaseUrl + item.id" target="_blank"><el-image class="cover" :src="item.cover" alt="cover" lazy referrer="no-referrer|origin|unsafe-url"></el-image></a>
          <a :href="biliBaseUrl + item.id" target="_blank">
            <p class="title">{{ item.title }}</p>
          </a>
        </div>
      </div>
    </el-card>

  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      biliBaseUrl: "https://www.bilibili.com/video/",
      AGMoviesBvid: [
        "BV1T4411C7eK",
        "BV1t4411k7Aq",
        "BV1u4411C7wg",
        "BV1ob411e7Uf",
        "BV1t4411k7wK",
        "BV1aJ411N7tf",
        "BV1q4411y7zA",
        "BV1B4411y7K7",
        "BV19J411N7PK",
        "BV19J411N7gr",
        "BV19g4y1b7AU",
        "BV1z54y1a7aV",
      ],
      AGMovies: [],
    };
  },
  created() {
    this.getVideoInfo();
  },
  mounted() {
    document.title = "其他视频 - CN-AGHL";
  },
  methods: {
    // 获取视频信息
    async getVideoInfo() {
      for (let index = 0; index < this.AGMoviesBvid.length; index++) {
        await axios
          .get("/videos", { params: { bvid: this.AGMoviesBvid[index] } })
          .then((res) => {
            // console.log(res.data)
            const agmovie = {
              id: res.data.data.bvid,
              title: res.data.data.title,
              cover: res.data.data.pic,
            };
            this.AGMovies.push(agmovie);
          });
      }
    },
  },
};
</script>

<style src="@/assets/css/video.css" scoped>
</style>