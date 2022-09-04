<template>
  <header class="container">
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="toggleSideMenu"
      ></el-button>
      <h3 class="title">首頁</h3>
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
  methods: {
    toggleSideMenu() {
      this.$store.commit("collapseMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .l-content {
    display: flex;
    align-items: center;
    .title {
      color: #fff;
      margin-left: 10px;
    }
  }
  .r-content {
    .userIcon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>