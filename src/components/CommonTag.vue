<template>
  <div class="tabs">
    <el-tag
      v-for="tag in tabsList"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="currentMenu === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
      size="small"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>
<script>
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    tabsList() {
      return this.$store.state.tab.tabsList;
    },
    currentMenu() {
      return this.$store.state.tab.currentMenu;
    },
  },
  methods: {
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    handleClose(tag) {
      this.$store.commit("deleteMenu", tag);
    },
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>