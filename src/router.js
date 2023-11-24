import { createRouter, createWebHistory } from "vue-router"
import Home from "./pages/Home.vue";
import BlogDetail from "./pages/blog/BlogDetail.vue";

const routeInfos = [
    {
        name: 'home',
        path: "/",
        component: () => Home
    },
    {
        name: 'blogDetail',
        path: "/blog/:slug",
        component: () => BlogDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routeInfos
})

export default router;