import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/moves',
      name: 'moves',
      // route level code-splitting
      // this generates a separate chunk (move.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "move" */
          './views/Moves.vue'
        ),
    },
    {
      path: '/move/:mid',
      name: 'move',
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "move" */
          './views/Move.vue'
        ),
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () =>
        import(
          /* webpackChunkName: "pokemon" */
          './views/Pokemons.vue'
        ),
    },
    {
      path: '/pokemon/:pid',
      name: 'pokemon',
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "pokemon" */
          './views/Pokemon.vue'
        ),
    },
  ],
});
