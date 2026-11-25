<template>
  <footer class="ag-footer">
    <div class="ag-footer__inner">
      <div class="ag-footer__brand">
        <div class="ag-footer__logo">
          <el-avatar
            :size="36"
            :src="$asset('images/header/lambda1.webp')"
          />
          <strong>CN-AGHL</strong>
        </div>
        <p>Half-Life 1 · Adrenaline Gamer 中文社区</p>
        <p class="ag-footer__qq">AG 交流群：945221882</p>
      </div>

      <div class="ag-footer__col">
        <h3>快速链接</h3>
        <ul>
          <li><router-link to="/index">主页</router-link></li>
          <li><router-link to="/server">服务器列表</router-link></li>
          <li><router-link to="/client">客户端下载</router-link></li>
          <li><router-link to="/matchvideo">比赛 DEMO</router-link></li>
          <li><router-link to="/basicskill">游戏教程</router-link></li>
        </ul>
      </div>

      <div class="ag-footer__col">
        <h3>作者</h3>
        <ul>
          <li>
            <a href="https://space.bilibili.com/185785265" target="_blank" rel="noopener">sXLg</a>
          </li>
          <li>
            <a href="https://space.bilibili.com/43703259" target="_blank" rel="noopener">meng</a>
          </li>
          <li>
            <a href="https://space.bilibili.com/20284055" target="_blank" rel="noopener">bigtree</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="ag-footer__bottom">
      © {{ year }} CN-AGHL · 本站为玩家社区站点，与 Valve 无隶属关系；Half-Life 为 Valve 的商标
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.ag-footer {
  background: rgba(11, 13, 9, 0.92);
  border-top: 1px solid var(--ag-border);
  color: var(--ag-text-muted);
}

.ag-footer__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(20px, 4vw, 56px);
  width: 100%;
  max-width: var(--ag-container);
  margin: 0 auto;
  padding: clamp(28px, 4vw, 48px) clamp(14px, 3vw, 28px) 24px;
}

.ag-footer__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.ag-footer__logo strong {
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: #fff;
}

.ag-footer__brand p {
  margin: 0 0 6px;
  font-size: 0.9rem;
}

.ag-footer__qq {
  color: var(--ag-primary);
  font-weight: 600;
}

.ag-footer__col h3 {
  margin: 0 0 12px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ag-hazard);
}

.ag-footer__col ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.ag-footer__col li {
  margin-bottom: 8px;
  font-size: 0.92rem;
}

.ag-footer__col a {
  color: var(--ag-text-muted);
  text-decoration: none;
}

.ag-footer__col a:hover {
  color: var(--ag-primary);
}

.ag-footer__bottom {
  padding: 14px clamp(14px, 3vw, 28px) 20px;
  border-top: 1px solid var(--ag-border);
  text-align: center;
  font-size: 0.8rem;
  color: var(--ag-text-dim);
}

@media (max-width: 860px) {
  .ag-footer__inner {
    grid-template-columns: 1fr 1fr;
  }

  .ag-footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 520px) {
  .ag-footer__inner {
    grid-template-columns: 1fr;
  }
}
</style>
