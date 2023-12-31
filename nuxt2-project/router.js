/* import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const component = (path) => {
  return {
    component: () => import("~/" + path + ".vue").then((m) => m.default || m),
  };
};
export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        ...component("pages/index"),
        // redirect: { name: "Inbox" },
      },
      {
        path: "/test",
        ...component("pages/test/test"),
        name: "test",
      },
    ],
  });
}
 */