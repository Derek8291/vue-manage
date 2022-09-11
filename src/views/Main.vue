<template>
  <el-container>
    <el-aside width="auto">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <el-header> 
        <CommonHeader></CommonHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside";
import CommonHeader from "../components/CommonHeader";
export default {
  name: "Home",
  components: {
    CommonAside,
    CommonHeader,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  width: 100vw;
}
.el-header {
  width: 100%;
  background-color: #333;
}
</style>
