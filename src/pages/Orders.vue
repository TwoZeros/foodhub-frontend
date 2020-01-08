<template>
     <div class="container">
                 <h3>Заказы</h3> 
    <a class="waves-effect waves-light btn-small" href="#"><i class="material-icons left"></i>Добавить заказ </a>
                    <br>
                    <table>
                        <thead>
                          <tr>
                              <th>Наименование</th>
                              <th>Клиент</th>
                              <th>Оператор</th>
                              <th>Адрес доставки</th>
                              <th>Статус заказа</th>
                              <th>Сумма</th>
                           

 
                          </tr>
                        </thead>
                
                        <tbody>
                        
                          <tr v-for="info in data1" :key="info.id">
                            <td><a href="#">Заказ {{info.id}} от {{info.createOrder}}</a></td>
                            <td>{{info.client.fio}}</td>
                            <td>{{info.operator.username}}</td>
                            <td>{{info.deliveryAdress.adress}}</td>
                            <td>{{info.statusDelivery.name}}</td>
                            <td>{{info.totalSum}}</td>
                          </tr>
                         
                        </tbody>
                      </table>
                </div>   
      
</template>
<script>
const url ="https://apifoodhub.herokuapp.com/order/all/";
export default {
    data() {
    return {
      data1: ''
    }},
    mounted() {
        this.$http.get(url).then(response => {
        this.data1= response.data
             })}

}
</script>