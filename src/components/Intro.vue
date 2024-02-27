<template>
  <div id="screen">
    <div class="menu">
      <h1>H λ l f - L i f e <sup>1</sup><br>A d r e n a l i n e&nbsp;&nbsp;G a m e r</h1>
      <ul>
        <li><a href="/index">主页</a></li>
        <li><a href="/server">我们的服务器</a></li>
        <li><a href="/client">下载客户端</a></li>
        <li><a href="/weapon">游戏基础教程</a></li>
        <li><a href="/matchvideo">DEMO</a></li>
        <li><a href="/tournament">赛事</a></li>
        <li><a href="https://www.bilibili.com/video/BV1GJ411x7h7">退出</a></li>
      </ul>
    </div>

    <div>

    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
#screen {
  height: 900px;
  overflow: hidden;
}

.menu {
  float: left;
  bottom: 0;
}

.menu h1 {
  text-align: left;
  color: white;
  margin: 250px 40px 40px;
  font-size: 4rem;
}

.menu a {
  color: #fe7e21;
}

.menu a:hover {
  color: #ffeee3;
}

.menu ul {
  list-style-type: none;
}
.menu li {
  margin-top: 10px;
  font-size: 2rem;
  font-weight: bolder;
}
</style>