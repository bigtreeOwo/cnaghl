<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><h1>奔跑</h1></el-col>
      <el-col :span="6"><h1>思考</h1></el-col>
      <el-col :span="6"><h1>射击</h1></el-col>
      <el-col :span="6"><h1>生存</h1></el-col>
    </el-row>
    <div class="button">
      <el-button
        id="refresh"
        plain
        @click="
          queryServerList();
          reloadMessage();
        "
        :loading="loading"
        >刷新</el-button
      >
    </div>

    <el-table
      :data="data"
      class="serverlist"
      empty-text=" "
      v-loading="loading"
      element-loading-text="正在为您获取服务器信息"
      :header-cell-style="{ background: '#4c5847', color: 'white' }"
      :cell-style="{ background: '#3e4537', color: 'white' }"
    >
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
          <el-button
            v-if="scope.row.data.map !== '访问超时'"
            type="text"
            @click.stop="
              dialogTableVisible = true;
              queryServerInfo(scope.row.ip);
            "
          >
            查看</el-button
          >
          <el-button
            v-else
            disabled
            type="text"
            @click.stop="dialogTableVisible = true"
          >
            查看</el-button
          >
          <el-dialog
            title="玩家信息"
            :visible.sync="dialogTableVisible"
            :destroy-on-close="true"
            :before-close="stopTimer"
          >
            <el-table
              :data="serverinfo.data"
              stripe
              :header-cell-style="{ background: '#4c5847', color: 'white' }"
              :cell-style="{ background: '#3e4537', color: 'white' }"
              border
            >
              <el-table-column property="name" label="玩家名"></el-table-column>
              <el-table-column property="score" label="分数"></el-table-column>
              <el-table-column label="游玩时间"
                ><template slot-scope="scope">
                  <span>{{ formateTime(scope.row.time) }}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-dialog>
        </template>
      </el-table-column>
      <el-table-column label="加入游戏" prop="ip"
        ><template slot-scope="scope">
          <a :href="'steam://connect/' + scope.row.ip + '?appid=70'">
            <el-button
              v-if="scope.row.data.map !== '访问超时'"
              type="success"
              round
              >加入游戏</el-button
            >
            <el-button v-else disabled type="warning" round>无法加入</el-button>
          </a>
        </template></el-table-column
      >
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Serverlist",
  components: {},
  data() {
    return {
      iplist: [
        "49.234.218.107:27018",
        "114.132.168.4:27022",
        "114.132.168.4:27016",
        "47.100.71.67:27015",
        "47.100.71.67:27018",
        "114.132.168.4:27016",
        "119.91.204.139:27017",
        "119.91.204.139:27018",
        "119.91.204.139:27019",
      ],
      data: [],
      serverinfo: [],
      dialogTableVisible: false,
      loading: true, //是否正在加载
      timerid: null,
    };
  },
  created: function () {
    this.queryServerList();
  },
  mounted: function () {},
  methods: {
    //获取服务器列表
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

    //启动计时器
    enableTimer() {
      this.timerid = setInterval(() => {
        for (let i = 0; i < this.serverinfo["data"].length; i++) {
          this.serverinfo["data"][i]["time"] =
            Math.floor(this.serverinfo["data"][i]["time"]) + 1;
          console.log("abcd", this.serverinfo);
          console.log(this.serverinfo["data"][i]["time"]);
        }
      }, 1000);
    },

    //停止计时器
    stopTimer(done) {
      clearInterval(this.timerid);
      done();
    },

    //格式化时间
    formateTime(time) {
      const h = parseInt(time / 3600);
      const minute = parseInt((time / 60) % 60);
      const second = Math.ceil(time % 60);

      const hours = h < 10 ? "0" + h : h;
      const formatSecond = second > 59 ? 59 : second;
      return `${hours > 0 ? `${hours}时` : ""}${
        minute < 10 ? "0" + minute : minute
      }分${formatSecond < 10 ? "0" + formatSecond : formatSecond}秒`;
    },

    //获取服务器玩家信息
    async queryServerInfo(ip) {
      this.serverinfo.length = 0;
      console.log("ip", ip);
      let res = await axios.post("/players", {
        ip: ip,
      });
      console.log("playerinfo", res.data);
      this.handleJsonSort(res.data.data, "score");
      this.serverinfo = res.data;
      this.enableTimer();
      console.log("data", this.serverinfo.data);
    },

    //插入排序
    handleJsonSort(json, key) {
      //console.log(json);
      for (let j = 1; j < json.length; j++) {
        let temp = json[j],
          val = temp[key],
          i = j - 1;
        while (i >= 0 && json[i][key] < val) {
          json[i + 1] = json[i];
          i = i - 1;
        }
        json[i + 1] = temp;
      }
      // console.log(json);
      return json;
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
};
</script>

<style src="@/assets/css/serverlist.css" scoped>

</style>