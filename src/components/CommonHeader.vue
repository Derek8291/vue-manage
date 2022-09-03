<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini"></el-button>
      <h3>首頁</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="userIcon" :src="imgUrl" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>個人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: require("../assets/spon.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: #fff;
}
.userIcon {
  width: 100px;
  height: 100px;
}
</style>