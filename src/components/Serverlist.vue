<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <h1>奔跑</h1>
      </el-col>
      <el-col :span="6">
        <h1>思考</h1>
      </el-col>
      <el-col :span="6">
        <h1>射击</h1>
      </el-col>
      <el-col :span="6">
        <h1>生存</h1>
      </el-col>
    </el-row>
    <div class="button">
      <el-button id="refresh" plain @click="
          queryServerList();
          reloadMessage();
        " :loading="loading">刷新</el-button>
    </div>

    <el-table :data="data" class="serverlist" v-loading="loading" element-loading-text="正在为您获取服务器信息" :header-cell-style="TABLE_HEADER_STYLE" :cell-style="TABLE_CELL_STYLE">
      <template #empty>
        <el-empty description="暂无服务器信息" :image-size="80"></el-empty>
      </template>
      <el-table-column prop="success" label="是否在线">
        <template #default="scope">
          <el-tag type="success" v-if="scope.row.data.map !== '访问超时'">{{
            "服务器在线"
          }}</el-tag>
          <el-tag type="danger" v-else>{{ "服务器离线" }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="data.visibility" label="密码"> </el-table-column>
      <el-table-column prop="data.name" label="服务器名" min-width="200">
      </el-table-column>
      <el-table-column prop="description" label="服务器描述" min-width="200">
      </el-table-column>
      <el-table-column prop="data.map" label="地图"> </el-table-column>
      <el-table-column prop="data.players" label="玩家数量"></el-table-column>
      <el-table-column prop="data.ip" label="玩家信息">
        <template #default="scope">
          <el-button v-if="scope.row.data.map !== '访问超时'" type="text" @click.stop="
              dialogTableVisible = true;
              queryServerInfo(scope.row.ip);
            ">
            查看</el-button>
          <el-button v-else disabled type="text" @click.stop="dialogTableVisible = true">
            查看</el-button>
          <el-dialog title="玩家信息" v-model="dialogTableVisible" :destroy-on-close="true" :before-close="stopTimer">
            <el-table :data="serverinfo.data" stripe :header-cell-style="TABLE_HEADER_STYLE" :cell-style="TABLE_CELL_STYLE" border>
              <el-table-column property="name" label="玩家名"></el-table-column>
              <el-table-column property="score" label="分数"></el-table-column>
              <el-table-column label="游玩时间"><template #default="scope">
                  <span>{{ formateTime(scope.row.time) }}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-dialog>
        </template>
      </el-table-column>
      <el-table-column label="加入游戏" prop="ip"><template #default="scope">
          <a :href="'steam://connect/' + scope.row.ip + '?appid=70'">
            <el-button v-if="scope.row.data.map !== '访问超时'" type="success" round>加入游戏</el-button>
            <el-button v-else disabled type="warning" round>无法加入</el-button>
          </a>
        </template></el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ElNotification } from "element-plus";
import request from "@/utils/request.js";
import { TABLE_HEADER_STYLE, TABLE_CELL_STYLE } from "@/utils/table-style.js";

const iplist = ref([]);

const data = ref([]);
const serverinfo = ref({ data: [] });
const dialogTableVisible = ref(false);
const loading = ref(true);
let timerid = null;

// 读取 public/site-content.json 中的服务器配置（ip + 描述），避免在代码里硬编码
async function loadServerConfig() {
  const res = await fetch(`${import.meta.env.BASE_URL}site-content.json`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const content = await res.json();
  if (!Array.isArray(content.servers)) throw new Error("配置格式错误");
  iplist.value = content.servers.map(({ ip, description }) => ({ ip, description }));
}

// 获取服务器列表（并发请求，避免串行等待）
async function queryServerList() {
  loading.value = true;
  data.value = [];
  const results = await Promise.allSettled(
    iplist.value.map(({ ip, description }) =>
      request.post("/servers", { ip }).then((res) => {
        res.data.ip = ip;
        res.data.description = description;
        return res.data;
      })
    )
  );
  data.value = results
    .filter((r) => r.status === "fulfilled")
    .map((r) => r.value);
  loading.value = false;
}

// 启动计时器
function enableTimer() {
  timerid = setInterval(() => {
    const players = serverinfo.value.data || [];
    for (let i = 0; i < players.length; i++) {
      players[i].time = Math.floor(players[i].time) + 1;
    }
  }, 1000);
}

// 停止计时器
function stopTimer(done) {
  clearInterval(timerid);
  done();
}

// 格式化时间
function formateTime(time) {
  const h = parseInt(time / 3600);
  const minute = parseInt((time / 60) % 60);
  const second = Math.ceil(time % 60);

  const hours = h < 10 ? "0" + h : h;
  const formatSecond = second > 59 ? 59 : second;
  return `${hours > 0 ? `${hours}时` : ""}${
    minute < 10 ? "0" + minute : minute
  }分${formatSecond < 10 ? "0" + formatSecond : formatSecond}秒`;
}

// 获取服务器玩家信息
async function queryServerInfo(ip) {
  serverinfo.value = { data: [] };
  const res = await request.post("/players", { ip });
  handleJsonSort(res.data.data, "score");
  serverinfo.value = res.data;
  enableTimer();
}

// 插入排序
function handleJsonSort(json, key) {
  for (let j = 1; j < json.length; j++) {
    const temp = json[j];
    const val = temp[key];
    let i = j - 1;
    while (i >= 0 && json[i][key] < val) {
      json[i + 1] = json[i];
      i = i - 1;
    }
    json[i + 1] = temp;
  }
  return json;
}

// 刷新消息
function reloadMessage() {
  ElNotification({
    title: "提示",
    message: "刷新成功",
    type: "success",
  });
}

onMounted(async () => {
  try {
    await loadServerConfig();
  } catch (error) {
    ElNotification({
      title: "提示",
      message: `服务器配置加载失败：${error.message}`,
      type: "error",
    });
  }
  await queryServerList();
});
</script>

<style src="@/assets/css/serverlist.css" scoped>
</style>