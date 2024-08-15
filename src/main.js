import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import './index.css'
import './assets/css/progress.css'

// Configure NProgress (optional)
NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'WISCOPREC'
    next()
})


createApp(App).use(router).mount("#app");
