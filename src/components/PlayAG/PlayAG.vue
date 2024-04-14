<template>
  <div style="display: flex; align-items: center;flex-flow: column nowrap;justify-content: space-around;">
    <div style="flex: 1">
      <div style="flex: 1;">
        <el-descriptions class="custom-descriptions" title="我的信息" direction="vertical" :column="2" border margin :titleStyle="titleStyle">
          <el-descriptions-item label="玩家名" :label-style="labelStyle" :content-style="contentStyle">{{ user?.name }}</el-descriptions-item>
          <el-descriptions-item label="STEAMID" :label-style="labelStyle" :content-style="contentStyle">{{ user?.steamid }}</el-descriptions-item>
          <el-descriptions-item label="邮箱" :label-style="labelStyle" :content-style="contentStyle">{{ user?.email }}</el-descriptions-item>
          <el-descriptions-item label="注册时间" :label-style="labelStyle" :content-style="contentStyle">{{ user?.jointime }}</el-descriptions-item>
          <el-descriptions-item label="分数" :label-style="labelStyle" :content-style="contentStyle">{{ user?.score }}</el-descriptions-item>
          <el-descriptions-item label="我的排名" :label-style="labelStyle" :content-style="contentStyle">{{ user?.rank }}</el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
    <div style="flex: 1;display: flex; align-items: center;flex-flow: row nowrap;justify-content: space-around;width: 70%;min-width: 800px;">
      <div style="flex: 1;">
        <h2>服务器最近的10场比赛</h2>
        <el-table :data="recentmatches" v-loading="matchloading" element-loading-text="正在为您获取比赛信息" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
          <template slot="empty">
            <el-empty :image-size="100" description="信息为空或者用户未登录">
            </el-empty>
          </template>
          <el-table-column label="#" type="index">
          </el-table-column>
          <el-table-column prop="player1" label="玩家1">
            <template slot-scope="scope">
              <a :href="'https://steamid.io/lookup/' + scope.row.player1.steamid" target="_blank" style="text-decoration: none;">{{ scope.row.player1.name }}</a>
            </template>
          </el-table-column>
          <el-table-column prop="player2" label="玩家2">
            <template slot-scope="scope">
              <a :href="'https://steamid.io/lookup/' + scope.row.player2.steamid" target="_blank" style="text-decoration: none;">{{ scope.row.player2.name }}</a>
            </template>
          </el-table-column>
          <el-table-column prop="mapname" label="地图名"></el-table-column>
          <el-table-column prop="score1" label="玩家1游戏得分"></el-table-column>
          <el-table-column prop="score2" label="玩家2游戏得分"></el-table-column>
          <el-table-column prop="playtime" label="比赛时间">
            <template slot-scope="scope">
              <i class="el-icon-time">
                {{ scope.row.playtime }}
              </i>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div style="flex: 1;display: flex; flex-direction: column; align-items: center; justify-content: space-between;width: 80%; min-width: 800px;">
      <h2>总排行榜</h2>
      <div style="flex: 1; width: 70%;">
        <el-table :data="allplayers" v-loading="allplayersloading" element-loading-text="正在为您获取所有玩家信息" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
          <template slot="empty">
            <el-empty :image-size="100" description="信息为空或者用户未登录">

            </el-empty>
          </template>
          <el-table-column label="排名" type="index" :index="table_index">
          </el-table-column>
          <el-table-column prop="name" label="玩家名"></el-table-column>
          <el-table-column prop="steamid" label="steamid">
            <template slot-scope="scope">
              <a :href="'https://steamid.io/lookup/' + scope.row.steamid" target="_blank" style="text-decoration: none;">{{ scope.row.steamid }}</a>
            </template>
          </el-table-column>
          <el-table-column prop="score" label="分数"></el-table-column>
          <el-table-column prop="lastplaytime" label="上次游玩时间">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              {{ scope.row.lastplaytime }}
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="flex: 1">
        <el-pagination :hide-on-single-page="isPage" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="prev, pager, next, jumper" :total="allplayers.length">
        </el-pagination>
      </div>

    </div>

  </div>
</template>

<script>
import request from "@/utils/request.js";
import timeStampToDate from "@/utils/timestamptodate.js"


export default {
  data() {
    return {
      token: null,
      user: {
        name: '',
        steamid: '',
        email: '',
        jointime: '',
        score: '',
        rank: '',
      },
      allplayers: [],
      recentmatches: [],
      serverloading: false,
      allplayersloading: false,
      matchloading: false,
      currentPage: null,
      isPage: false,
      pageSize: 10,

      titleStyle: {
        'color': 'white'
      },
      labelStyle: {
        'color': 'white',
        'background-color': '#4c5847',
        'font-weight': 'bold'
      },
      contentStyle: {
        'color': 'white',
        'background-color': '#3e4537',
        'font-weight': 'bold'
      }
    }
  },
  methods: {
    async queryAllPlayers() {
      this.allplayersloading = true;
      // console.log("allplayers");
      await request.get("/allplayers").then((res) => {
        // console.log(res.data);
        if (res.data.code === "200") {
          this.allplayers.length = 0;
          this.allplayers = res.data.data;
        
        } else if (res.data.code === "401") {
          this.$message.error(res.data.msg);
          localStorage.removeItem["user-token"];
          this.$router.push("/login");
        } else {
          this.$message.error("系统错误");
        }
        // console.log(this.allplayers);
      }).catch((error) => {
        console.error("all players error" + error);
        this.allplayersloading = true;
      })

      // 最后游玩时间戳转换
      if (this.allplayers.length !== 0) {
        this.allplayers.forEach((value) => {
          value.lastplaytime = timeStampToDate(value.lastplaytime);
        });
      }

      // 所有用户数据获取结束后才能显示当前用户信息
      this.getMyinfo();

      setTimeout(() => {
        this.allplayersloading = false;
      }, 1000);
    },

    async queryRecentMatch() {
      this.matchloading = true;
      await request.get("/recentmatch").then((res) => {

        if (res.data.code === "200") {
          // console.log(res.data.data);
          this.recentmatches.length = 0;
          this.recentmatches = res.data.data;
        } else if (res.data.code === "401") {
          this.$message.error(res.data.msg);
          localStorage.removeItem["user-token"];
          this.$router.push("/login");
        } else {
          this.$message.error("系统错误");
        }
      }).catch((error) => {
        console.error("recent match error" + error);
        this.matchloading = true;
      })

      // 比赛时间转换
      if (this.recentmatches.length !== 0) {
        this.recentmatches.forEach((value) => {
          value.playtime = timeStampToDate(value.playtime);
        })
      }

      setTimeout(() => {
        this.matchloading = false;
      }, 1000);

    },

    getMyinfo() {
      this.token = localStorage.getItem("user-token");
      // console.log(this.token);
      this.user["name"] = JSON.parse(this.token)["name"];
      this.user["steamid"] = JSON.parse(this.token)["steamid"];
      this.user["email"] = JSON.parse(this.token)["email"];
      this.user["jointime"] = timeStampToDate(JSON.parse(this.token)["jointime"]);
      // this.user["score"] = JSON.parse(this.token)["score"];

      let temp = null;
      // console.log("allplayers" + this.allplayers);
      this.allplayers.forEach((value, index) => {
        if (value.steamid === this.user["steamid"]) {
          temp = value;

          // 更新分数，token中的分数是旧的分数，所以只要拿到新的分数就行
          this.user.score = value.score;
        }
      });
      // console.log(temp);
      this.user["rank"] = this.allplayers.indexOf(temp) + 1;
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    // 排行榜索引
    table_index(index) {
      return (this.currentPage - 1) * this.pageSize + index + 1
    },

    //刷新消息
    reloadMessage() {
      this.$notify({
        title: "提示",
        message: "刷新成功",
        type: "success",
      });
    },

  },
  mounted() {
    document.title = "开始玩AG - CN-AGHL";
    this.queryAllPlayers();
    this.queryRecentMatch();
  },
}
</script>

<style>
.custom-descriptions .el-descriptions__title {
  color: white;
}

.el-pagination .number,
.el-pagination button:disabled,
.el-pagination .btn-next,
.el-pagination .btn-prev,
.el-pagination .el-pager li {
  background: transparent;
  color: white;
}

.el-pagination .el-pager li:hover,
.el-pagination .btn-next:hover,
.el-pagination .btn-prev:hover,
.el-pagination .number:hover {
  color: #ffa500;
}

.el-pagination__jump {
  color: white;
}

.el-pager li.active {
  color: #ffa500;
}
</style>

<style src="@/assets/css/playag.css" scoped>
</style>