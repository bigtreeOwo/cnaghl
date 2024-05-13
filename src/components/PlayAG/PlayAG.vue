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
        <el-table :data="recentmatches" v-loading="matchLoading" element-loading-text="正在为您获取比赛信息" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
          <template slot="empty">
            <el-empty :image-size="100" description="信息为空或者用户未登录">
            </el-empty>
          </template>
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

    <div style="flex: 1;display: flex; flex-flow: column nowrap; align-items: center; justify-content: space-between;width: 80%; min-width: 800px;">
      <h2>总排行榜</h2>
      <div style="flex: 1;margin: 10px 0;">
        <el-input style="width: 200px;" v-model="playerName" placeholder="请输入玩家名"></el-input>
        <el-input style="width: 200px;margin: 0 10px;" v-model="steamid" placeholder="请输入steamid"></el-input>
        <el-button type="primary" @click="queryPlayers()">搜索</el-button>
        <el-button type="warning" @click="reset">重置</el-button>
      </div>
      <div style="flex: 1; width: 70%;">
        <el-table :data="playerList" v-loading="playerListLoading" element-loading-text="正在为您获取所有玩家信息" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
          <template slot="empty">
            <el-empty :image-size="100" description="信息为空或者用户未登录">

            </el-empty>
          </template>
          <el-table-column label="排名" type="index" v-if="isRankVisible" :index="table_index">
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
              {{ timeStampToDate(scope.row.lastplaytime) }}
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="flex: 1">
        <el-pagination :hide-on-single-page="isPage" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>

    </div>

  </div>
</template>

<script>
import request from "@/utils/request.js";
import timeStampToDate from "@/utils/timestamptodate.js";

export default {
  data() {
    return {
      currentPlayer: JSON.parse(localStorage.getItem("user-token")) || {},
      user: {
        name: "",
        steamid: "",
        email: "",
        jointime: "",
        score: "",
        rank: "",
      },
      playerList: [],
      recentmatches: [],
      playerListLoading: false,
      matchLoading: false,
      isPage: false,
      isRankVisible: true,

      // 分页
      pageSize: 10,
      pageNum: 1,
      total: 0,
      steamid: "",
      playerName: "",

      titleStyle: {
        color: "white",
      },
      labelStyle: {
        color: "white",
        "background-color": "#4c5847",
        "font-weight": "bold",
      },
      contentStyle: {
        color: "white",
        "background-color": "#3e4537",
        "font-weight": "bold",
      },
    };
  },
  methods: {
    async queryPlayers(pageNum) {
      this.playerListLoading = true;
      if (!pageNum) {
        this.isRankVisible = false;
      } else {
        this.pageNum = pageNum;
        this.isRankVisible = true;
      }
      // console.log("allplayers");
      await request
        .get("/user/selectByPage/", {
          params: {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            steamid: this.steamid,
            name: this.playerName,
          },
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.code === "200") {
            this.playerList = res.data.data.records;
            this.total = res.data.data.total;
          } else if (res.data.code === "401") {
            this.$message.error(res.data.msg);
            localStorage.removeItem("user-token");
            this.$router.push("/login");
          } else {
            this.$message.error("系统错误");
          }
          // console.log(this.allplayers);
        })
        .catch((error) => {
          console.error("all players error" + error);
          this.playerListLoading = true;
        });

      setTimeout(() => {
        this.playerListLoading = false;
      }, 1000);
    },

    async queryRecentMatch() {
      this.matchLoading = true;
      await request
        .get("/match/recentmatch/")
        .then((res) => {
          if (res.data.code === "200") {
            // console.log(res.data.data);
            this.recentmatches.length = 0;
            this.recentmatches = res.data.data;
          } else if (res.data.code === "401") {
            this.$message.error(res.data.msg);
            localStorage.removeItem("user-token");
            this.$router.push("/login");
          } else {
            this.$message.error("系统错误");
          }
        })
        .catch((error) => {
          console.error("recent match error" + error);
          this.matchLoading = true;
        });

      // 比赛时间转换
      if (this.recentmatches.length !== 0) {
        this.recentmatches.forEach((value) => {
          value.playtime = timeStampToDate(value.playtime);
        });
      }

      setTimeout(() => {
        this.matchLoading = false;
      }, 1000);
    },

    async getMyinfo() {
      // console.log(this.currentPlayer);
      await request
        .get("/user/select/" + this.currentPlayer.steamid)
        .then((res) => {
          // console.log(res);
          if (res.data.code === "200") {
            this.user["name"] = res.data.data.name;
            this.user["steamid"] = res.data.data.steamid;
            this.user["email"] = res.data.data.email;
            this.user["jointime"] = res.data.data.jointime;
            this.user["score"] = res.data.data.score;
            this.user["rank"] = res.data.data.rank;
            // console.log(this.user);
            // console.log(this.user.rank);
          } else if (res.data.code === "401") {
            this.$message.error(res.data.msg);
            localStorage.removeItem("user-token");
            this.$router.push("/login");
          } else {
            this.$message.error("系统错误");
          }
        });
    },
    handleCurrentChange(pageNum) {
      this.queryPlayers(pageNum);
    },

    reset() {
      this.steamid = "";
      this.playerName = "";
      this.queryPlayers(1);
    },

    // 排行榜索引
    table_index(index) {
      return (this.pageNum - 1) * this.pageSize + index + 1;
    },

    timeStampToDate(timeStamp) {
      return timeStampToDate(timeStamp);
    },
  },
  mounted() {
    document.title = "开始玩AG - CN-AGHL";
  },
  created() {
    this.queryPlayers(1);
    this.getMyinfo();
    this.queryRecentMatch();
  },
};
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