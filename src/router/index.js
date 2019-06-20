import Router from  'vue-router';
import index from "@/views/index"

import Vue from "vue"

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:"/",
            component:index
        },
        {
            path:"/page2",
            component:() => import("@/views/page2.vue")
        }
    ]
})

export default router