<template>
  <div class="playag-wrap">
    <div class="playag-section">
      <div class="playag-section">
        <el-descriptions class="custom-descriptions" title="我的信息" direction="vertical" :column="2" border>
          <el-descriptions-item label="玩家名">{{ user?.name }}</el-descriptions-item>
          <el-descriptions-item label="STEAMID">{{ user?.steamid }}</el-descriptions-item>
          <el-descriptions-item label="邮箱">{{ user?.email }}</el-descriptions-item>
          <el-descriptions-item label="注册时间">{{ user?.jointime }}</el-descriptions-item>
          <el-descriptions-item label="分数">{{ user?.score }}</el-descriptions-item>
          <el-descriptions-item label="我的排名">{{ user?.rank }}</el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
    <div class="playag-section playag-section--row">
      <div class="playag-section">
        <h2>服务器最近的10场比赛</h2>
        <el-table :data="recentmatches" v-loading="matchLoading" element-loading-text="正在为您获取比赛信息" :header-cell-style="TABLE_HEADER_STYLE" :cell-style="TABLE_CELL_STYLE">
          <template #empty>
            <el-empty :image-size="100" description="信息为空或者用户未登录">
            </el-empty>
          </template>
          <el-table-column prop="player1" label="玩家1">
            <template #default="scope">
              <a :href="'https://steamid.io/lookup/' + scope.row.player1.steamid" target="_blank" class="playag-link">{{ scope.row.player1.name }}</a>
            </template>
          </el-table-column>
          <el-table-column prop="player2" label="玩家2">
            <template #default="scope">
              <a :href="'https://steamid.io/lookup/' + scope.row.player2.steamid" target="_blank" class="playag-link">{{ scope.row.player2.name }}</a>
            </template>
          </el-table-column>
          <el-table-column prop="mapname" label="地图名"></el-table-column>
          <el-table-column prop="score1" label="玩家1游戏得分"></el-table-column>
          <el-table-column prop="score2" label="玩家2游戏得分"></el-table-column>
          <el-table-column prop="playtime" label="比赛时间">
            <template #default="scope">
              <el-icon><Clock /></el-icon>
                {{ scope.row.playtime }}
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="playag-section playag-section--col">
      <h2>总排行榜</h2>
      <div class="playag-toolbar">
        <el-input v-model="playerName" placeholder="请输入玩家名"></el-input>
        <el-input v-model="steamid" placeholder="请输入steamid"></el-input>
        <el-button type="primary" @click="queryPlayers()">搜索</el-button>
        <el-button type="warning" @click="reset">重置</el-button>
      </div>
      <div class="playag-table-wrap">
        <el-table :data="playerList" v-loading="playerListLoading" element-loading-text="正在为您获取所有玩家信息" :header-cell-style="TABLE_HEADER_STYLE" :cell-style="TABLE_CELL_STYLE">
          <template #empty>
            <el-empty :image-size="100" description="信息为空或者用户未登录">

            </el-empty>
          </template>
          <el-table-column label="排名" type="index" v-if="isRankVisible" :index="table_index">
          </el-table-column>
          <el-table-column prop="name" label="玩家名"></el-table-column>
          <el-table-column prop="steamid" label="steamid">
            <template #default="scope">
              <a :href="'https://steamid.io/lookup/' + scope.row.steamid" target="_blank" class="playag-link">{{ scope.row.steamid }}</a>
            </template>
          </el-table-column>
          <el-table-column prop="score" label="分数"></el-table-column>
          <el-table-column prop="lastplaytime" label="上次游玩时间">
            <template #default="scope">
              <el-icon><Clock /></el-icon>
              {{ timeStampToDate(scope.row.lastplaytime) }}
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="playag-pagination">
        <el-pagination :hide-on-single-page="isPage" @current-change="handleCurrentChange" v-model:current-page="pageNum" :page-size="pageSize" layout="prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import request from "@/utils/request.js";
import timeStampToDate from "@/utils/timestamptodate.js";
import { TABLE_HEADER_STYLE, TABLE_CELL_STYLE } from "@/utils/table-style.js";

const currentPlayer = JSON.parse(localStorage.getItem("user-token")) || {};

const user = ref({
  name: "",
  steamid: "",
  email: "",
  jointime: "",
  score: "",
  rank: "",
});
const playerList = ref([]);
const recentmatches = ref([]);
const playerListLoading = ref(false);
const matchLoading = ref(false);
const isPage = false;
const isRankVisible = ref(true);

// 分页
const pageSize = 10;
const pageNum = ref(1);
const total = ref(0);
const steamid = ref("");
const playerName = ref("");

async function queryPlayers(page) {
  playerListLoading.value = true;
  if (!page) {
    isRankVisible.value = false;
  } else {
    pageNum.value = page;
    isRankVisible.value = true;
  }
  await request
    .get("/user/selectByPage/", {
      params: {
        pageNum: pageNum.value,
        pageSize,
        steamid: steamid.value,
        name: playerName.value,
      },
    })
    .then((res) => {
      if (res.data.code === "200") {
        playerList.value = res.data.data.records;
        total.value = res.data.data.total;
      } else {
        ElMessage.error("系统错误");
      }
    })
    .catch((error) => {
      console.error("all players error" + error);
    })
    .finally(() => {
      playerListLoading.value = false;
    });
}

async function queryRecentMatch() {
  matchLoading.value = true;
  await request
    .get("/match/recentmatch/")
    .then((res) => {
      if (res.data.code === "200") {
        recentmatches.value = res.data.data || [];
        recentmatches.value.forEach((value) => {
          value.playtime = timeStampToDate(value.playtime);
        });
      } else {
        ElMessage.error("系统错误");
      }
    })
    .catch((error) => {
      console.error("recent match error" + error);
    })
    .finally(() => {
      matchLoading.value = false;
    });
}

async function getMyinfo() {
  await request
    .get("/user/select/" + currentPlayer.steamid)
    .then((res) => {
      if (res.data.code === "200") {
        user.value["name"] = res.data.data.name;
        user.value["steamid"] = res.data.data.steamid;
        user.value["email"] = res.data.data.email;
        user.value["jointime"] = res.data.data.jointime;
        user.value["score"] = res.data.data.score;
        user.value["rank"] = res.data.data.rank;
      } else {
        ElMessage.error("系统错误");
      }
    })
    .catch((error) => {
      console.error("my info error" + error);
    });
}

function handleCurrentChange(page) {
  queryPlayers(page);
}

function reset() {
  steamid.value = "";
  playerName.value = "";
  queryPlayers(1);
}

// 排行榜索引
function table_index(index) {
  return (pageNum.value - 1) * pageSize + index + 1;
}

// 等价于原 created 钩子
queryPlayers(1);
getMyinfo();
queryRecentMatch();
</script>

<style src="@/assets/css/playag.css" scoped>
</style>