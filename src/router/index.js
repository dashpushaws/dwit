import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('../views/Board.vue'),
  },
  {
    path: '/board/view/:id',
    name: 'Board-view',
    component: () => import('../views/BoardView.vue'),
    props: true, //데이터를 $route.params.page말고도 props로도 받으려고
  },
  {
    path: '/board/write',
    name: 'Board-write',
    component: () => import('../views/BoardWrite.vue'),
  },
  {
    path: '/board/modify/:id',
    name: 'Board-modify',
    component: () => import('../views/BoardModify.vue'),
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('../views/Ranking.vue'),
  },
  {
    path: '/search/:id',
    name: 'Search',
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/Store.vue'),
  },
  {
    path: '/productMng',
    name: 'ProductMng',
    component: () => import('../views/storeMng/ProductMng.vue'),
  },
  {
    path: '/orderMng',
    name: 'OrderMng',
    component: () => import('../views/storeMng/OrderMng.vue'),
  },
  {
    path: '/sales-stat',
    name: 'sales-stat',
    component: () => import('../views/storeMng/SalesStat.vue'),
  },
  {
    path: '/product-stat',
    name: 'product-stat',
    component: () => import('../views/storeMng/ProductStat.vue'),
  },
  {
    path: '/cart-stat',
    name: 'cart-stat',
    component: () => import('../views/storeMng/CartStat.vue'),
  },
  {
    path: '/purchaseOrder',
    name: 'PurchaseOrder',
    component: () => import('../views/purchaseOrder/PurchaseOrder.vue'),
  },
  {
    path: '/finishOrder',
    name: 'FinishOrder',
    component: () => import('../views/purchaseOrder/FinishOrder.vue'),
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/purchaseOrder/Order.vue'),
  },
  {
    path: '/store/detail/:id',
    name: 'Detail',
    component: () => import('../views/store/Detail.vue'),
    // props: true
  },

];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;