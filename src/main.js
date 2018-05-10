import Vue from 'vue'
import App from './App.vue'
import TestPage from './pages/TestPage'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [

    {path:'/test',component: TestPage , name: 'test'},

]


const router = new VueRouter({
    routes,
    mode:'history'
});

new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
