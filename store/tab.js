export default {
  state: {
    isCollapse: false,
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ],
    currentMenu: null,
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    selectMenu(state, val) {
      if(val.name !== "home") {
        state.currentMenu = val;
        const e = state.tabsList.some(item => item.name === val.name);
        if(!e) state.tabsList = [...state.tabsList, val];
      }
    },
    deleteMenu(state, val) {
      let e = state.tabsList.filter(item => {
        return item.name !== val.name;
      })
      state.tabsList = e;
      let idx = state.tabsList.length;
      console.log(idx, "idx");
      state.currentMenu = state.tabsList[idx - 1].name;
    },
    setMenu(state, val) {
      state.currentMenu = val.name;
    }
  },
};
