import VueRouter from 'vue-router'
import Home from './pages/Home'
import Setings from './pages/Setings'
import Orders from './pages/Orders'
import Clients from './pages/Clients'
import AddClient from './pages/AddClient'
import ClientsList from './pages/ClientsList'
export default new VueRouter({
    mode: 'history',
    routes:[
    {
        path:'',
        component:Home
    },
    {
        path:'/clients',
        component: Clients,
        children: [
            {
                path: '',
                component: ClientsList
              },
            {
              path: 'add',
              component: AddClient
            },
           ]
    },
    {
        path:'/orders',
        component:Orders
    },
    {
        path:'/setings',
        component:Setings
    },
   
    ]
})