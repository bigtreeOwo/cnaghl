<template>
  <div>
    <el-footer>
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <ul>
              <li>
                <h3>AG交流群：945221882</h3>
              </li>
              <li> <router-link to="/index">主页</router-link> </li>
              <li> <router-link to="/server">服务器列表</router-link> </li>
              <li> <router-link to="/client">客户端下载</router-link> </li>
              <li> <router-link to="/matchvideo">demo</router-link> </li>
              <li> <router-link to="/basicskill">教程</router-link> </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">

          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">

          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <ul>
              <li>作者:</li>
              <li><a href="https://space.bilibili.com/185785265" target="_blank">sXLg</a></li>
              <li><a href="https://space.bilibili.com/43703259" target="_blank">meng</a></li>
              <li><a href="https://space.bilibili.com/20284055" target="_blank">bigtree</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">

          </div>
        </el-col>
      </el-row>
    </el-footer>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.el-footer {
  bottom: 0;
  height: 230px !important;
  background-color: #2e2e2e;
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: transparent;
}

.bg-purple ul {
  list-style: none;
}

.bg-purple ul li {
  margin: 10px auto 10px;
}

.bg-purple ul li a {
  text-decoration: none;
}

.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  color: white;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>