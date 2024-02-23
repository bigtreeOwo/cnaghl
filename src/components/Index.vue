<template>
  <div>
    <p id="welcome">欢迎来到AGHL中国！</p>
    <div id="ag">
      <p>什么是ag</p>
    </div>
    <iframe
      id="movie"
      src="//player.bilibili.com/player.html?bvid=BV1ob411e7Uf&cid=339262048&page=1&high_quality=1&danmaku=0"
      allowfullscreen="allowfullscreen"
      width="100%"
      height="500"
      scrolling="no"
      frameborder="0"
      sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
    ></iframe>
  </div>
</template>
<script>
export default {};
</script>

<style>
#welcome {
  margin-left: 20%;
  font-family: "微软雅黑";
  font-size: xx-large;
  color: white;
}
#movie {
  float: right;
  margin: auto;
  width: 50%;
}
#ag {
  background-color: #3f4537;
  width: 50%;
  border-color: #4c5844;
  border-top-width: 20px;
}
</style>