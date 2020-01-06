<template>
    <div class="row">

            <nav style="background-color: #1d278a;">
                <a href="#" data-target="slide-out"  class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
                <a href="#" class="brand-logo">        
                    FoodHub</a>
            </nav >
                <div class="nav-wrapper">
                    
                  
                  <ul id="slide-out" class="sidenav">
                    <li>
                      <router-link to="/">Рабочий стол</router-link>
                      </li>
                    <li>
                      <router-link to="/clients">Клиенты</router-link>
                      </li>
                    <li><router-link to="/orders">Заказы</router-link></li>
                    <li><router-link to="/setings">Настройки</router-link></li>
                      
                    
                  </ul>
                  

                </div>
            
            <router-view></router-view>
            </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>