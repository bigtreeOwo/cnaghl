<template>
  <div>
    <h1>武器使用</h1>

    <el-card class="box-card">
      <div slot="header">
        <h1>点击选择</h1>
        <div class="WeaponsSelBlock">
          <div class="WeaponsSlots">
            <el-image :src="require('@/assets/images/tutorial/weapons/slot_1.webp')" alt="slot1" lazy></el-image>
          </div>
          <div class="WeaponsSlots">
            <el-image :src="require('@/assets/images/tutorial/weapons/slot_2.webp')" alt="slot2" lazy></el-image>
          </div>
          <div class="WeaponsSlots">
            <el-image :src="require('@/assets/images/tutorial/weapons/slot_3.webp')" alt="slot3" lazy></el-image>
          </div>
          <div class="WeaponsSlots">
            <el-image :src="require('@/assets/images/tutorial/weapons/slot_4.webp')" alt="slot4" lazy></el-image>
          </div>
          <div class="WeaponsSlots">
            <el-image :src="require('@/assets/images/tutorial/weapons/slot_5.webp')" alt="slot5" lazy></el-image>
          </div>
          
          <router-link to="/weapon/weapon_crowbar"><el-button class="WpnTab tab1"></el-button></router-link>
          <router-link to="/weapon/weapon_9mmhandgun"><el-button class="WpnTab tab2"></el-button></router-link>
          <router-link to="/weapon/weapon_9mmAR"><el-button class="WpnTab tab3"></el-button></router-link>
          <router-link to="/weapon/weapon_rpg"><el-button class="WpnTab tab4"></el-button></router-link>
          <router-link to="/weapon/weapon_handgrenade"><el-button class="WpnTab tab5"></el-button></router-link>
          <router-link to="/weapon/weapon_357"><el-button class="WpnTab tab6" style="margin-left: 240px"></el-button></router-link>
          <router-link to="/weapon/weapon_shotgun"><el-button class="WpnTab tab7"></el-button></router-link>
          <router-link to="/weapon/weapon_gauss"><el-button class="WpnTab tab8"></el-button></router-link>
          <router-link to="/weapon/weapon_satchel"><el-button class="WpnTab tab9"></el-button></router-link>
          <router-link to="/weapon/weapon_crossbow"><el-button class="WpnTab tab10" style="margin-left: 480px"></el-button></router-link>
          <router-link to="/weapon/weapon_egon"><el-button class="WpnTab tab11"></el-button></router-link>
          <router-link to="/weapon/weapon_tripmine"><el-button class="WpnTab tab12"></el-button></router-link>
          <router-link to="/weapon/weapon_hornetgun"><el-button class="WpnTab tab13" style="margin-left: 720px"></el-button></router-link>
          <router-link to="/weapon/weapon_snark"><el-button class="WpnTab tab14"></el-button></router-link>
        
        </div>
      </div>
      <div>
        <router-view name="weapon"></router-view>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = "武器使用 - CN-AGHL";
  }
};
</script>

<style src="@/assets/css/tutorial.css" scoped>
</style>