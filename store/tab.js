import Cookie from "js-cookie";
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
    sideMenu: [],
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    selectMenu(state, val) {
      if (val.name !== "home") {
        state.currentMenu = val;
        const e = state.tabsList.some((item) => item.name === val.name);
        if (!e) state.tabsList = [...state.tabsList, val];
      }
    },
    deleteMenu(state, val) {
      let e = state.tabsList.filter((item) => {
        return item.name !== val.name;
      });
      state.tabsList = e;
      let idx = state.tabsList.length;
      state.currentMenu = state.tabsList[idx - 1].name;
    },
    setMenu(state, val) {
      state.currentMenu = val.name;
    },
    setSideMenu(state, val) {
      state.sideMenu = val;
      Cookie.set("menu", JSON.stringify(val));
    },
    addMenu(state, router) {
      if (!Cookie.get("menu")) return;
      const menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      const menuArray = [];
      menu.forEach((item) => {
        if (item.children) {
          item.children = item.children.map((item) => {
            item.component = () => import(`../src/views/${item.url}`);
            return item;
          });
          menuArray.push(...item.children);
        } else {
          item.component = () => import(`../src/views/${item.url}`);
          menuArray.push(item);
        }
      });
      // 路由的动态添加
      menuArray.forEach((item) => {
        router.addRoute("Main", item);
      });
    },
  },
};
