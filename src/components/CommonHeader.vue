<template>
  <header class="container">
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="toggleSideMenu"
        class="menu-btn"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tabsList"
          :key="item.path"
          :to="{ path: item.path }"
          :class="{ active: currentMenu === item.name }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
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
  created() {},
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
  computed: {
    tabsList() {
      return this.$store.state.tab.tabsList;
    },
    currentMenu() {
      return this.$store.state.tab.currentMenu;
    },
  },
  watch: {
    $route(val) {
      this.$store.commit("setMenu", val);
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
    .menu-btn {
      margin-right: 10px;
    }
    .title {
      color: #fff;
      margin-left: 10px;
    }
    ::v-deep .el-breadcrumb__item {
      &.active {
        .el-breadcrumb__inner {
          color: #fff;
          cursor: none;
          font-weight: 500;
        }
      }
      .el-breadcrumb__inner {
        color: #ccc;
        cursor: pointer;
        font-weight: normal;
      }
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