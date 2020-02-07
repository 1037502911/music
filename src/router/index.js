import Vue from "vue";
import Router from "vue-router";
import * as All from "../components/index/index"; //这种写法不推荐，一般用于路由较少的demo项目，建议还是按需引入

Vue.use(Router);

const newRouer = new Router({
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/singer",
      name: "singer",
      component: All.singer
    },
    {
      path: "/search",
      name: "search",
      component: All.search
    },
    {
      path: "/rank",
      name: "rank",
      component: All.rank
    },
    {
      path: "/recommend",
      name: "recommend",
      component: All.recommend
    }
  ]
});

export default newRouer;
