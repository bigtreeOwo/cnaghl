<template>
  <div>
    <h1>其他视频</h1>
    <el-card class="box-card">
      <div slot="header">
        <h2>AG Movies</h2>
      </div>
      <div class="flex-container">

      </div>
    </el-card>
    <br>
    <el-card>
      <div slot="header">半条命1速通</div>
    </el-card>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      AGMovies: [
        "BV1T4411C7eK",

      ],

    }
  },
  mounted() {
    // this.getVideoInfo();
  },
  methods: {
    // 获取视频信息
    async getVideoInfo() {
      for (let index = 0; index < this.AGMovies.length; index++) {
        await axios.get('/x/web-interface/view', { bvid: this.AGMovies[index] }).then((res) => {
          console.log(res)
        })
      }

    }
  }
}
</script>

<style src="@/assets/css/video.css" scoped>
</style>