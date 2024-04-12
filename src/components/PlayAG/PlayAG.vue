<template>
  <div>
    <div>
      <h1>开始玩AG</h1>
      <el-button @click="queryServerList">刷新</el-button>
      <el-table :data="data" class="serverlist" empty-text=" " v-loading="loading" element-loading-text="正在为您获取服务器信息" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
        <el-table-column prop="success" label="是否在线">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.data.map !== '访问超时'">{{
            "服务器在线"
          }}</el-tag>
            <el-tag type="danger" v-else>{{ "服务器离线" }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="data.visibility" label="密码"> </el-table-column>
        <el-table-column prop="data.name" label="服务器名" min-width="200">
        </el-table-column>
        <el-table-column prop="data.map" label="地图"> </el-table-column>
        <el-table-column prop="data.players" label="玩家数量"></el-table-column>
        <el-table-column prop="data.ip" label="玩家信息">
          <template slot-scope="scope">
            <el-button v-if="scope.row.data.map !== '访问超时'" type="text" @click.stop="
              dialogTableVisible = true;
              queryServerInfo(scope.row.ip);
            ">
              查看</el-button>
            <el-button v-else disabled type="text" @click.stop="dialogTableVisible = true">
              查看</el-button>
            <el-dialog title="玩家信息" :visible.sync="dialogTableVisible" :destroy-on-close="true" :before-close="stopTimer">
              <el-table :data="serverinfo.data" stripe :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }" border>
                <el-table-column property="name" label="玩家名"></el-table-column>
                <el-table-column property="score" label="分数"></el-table-column>
                <el-table-column label="游玩时间"><template slot-scope="scope">
                    <span>{{ formateTime(scope.row.time) }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-dialog>
          </template>
        </el-table-column>
        <el-table-column label="加入游戏" prop="ip"><template slot-scope="scope">
            <a :href="'steam://connect/' + scope.row.ip + '?appid=70'">
              <el-button v-if="scope.row.data.map !== '访问超时'" type="success" round>加入游戏</el-button>
              <el-button v-else disabled type="warning" round>无法加入</el-button>
            </a>
          </template></el-table-column>
      </el-table>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iplist: [],
      data: [],
      loading: false,
    }
  },
  methods: {
    async queryServerList() {
      this.data.length = 0;
      this.loading = true;
      for (let index = 0; index < this.iplist.length; index++) {
        await axios
          .post("/servers", {
            ip: this.iplist[index],
          })
          .then((res) => {
            console.log(res.data);
            res.data.ip = this.iplist[index];
            // if (res.data.success) {
            //   res.data.success = "服务器在线";
            // } else {
            //   res.data.success = "服务器离线";
            // }
            this.data.push(res.data);
          })
          .catch((error) => {
            console.error(error);
            this.loading = true;
          });
      }
      // console.log(this.data);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  mounted() {
    document.title = "开始玩AG - CN-AGHL"
  }
}
</script>

<style src="@/assets/css/playag.css" scoped>
</style>