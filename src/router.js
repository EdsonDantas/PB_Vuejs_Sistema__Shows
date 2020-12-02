import VueRouter from 'vue-router';
import Home from './components/Home'
import Shows from './components/Shows'
import Saude from './components/Saude'
import Seguranca from './components/Seguranca'
import Curiosidades from './components/Curiosidades'


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/shows',
            name: 'shows',
            component: Shows
        },
        {
            path: '/saude',
            name: 'saude',
            component: Saude

        },
        {
            path: '/seguranca',
            name: 'seguranca',
            component: Seguranca

        },
        {
            path: '/curiosidades',
            name: 'curiosidades',
            component: Curiosidades

        },

    ]
})

