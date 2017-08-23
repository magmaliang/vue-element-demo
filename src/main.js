import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';

import Contact from './pages/contact.vue';
import Layout from './component/layout.vue';

// 使用 element UI
Vue.use(ElementUI);
// 使用 vue router
Vue.use(VueRouter);

// 设置 router
const router = new VueRouter({
    routes: [{
        path: '/contact',
        component: Contact
    }, {
        path: '*',
        redirect: '/contact'
    }]
});

new Vue({
    router,
    render: h => h(Layout)
}).$mount("#app");