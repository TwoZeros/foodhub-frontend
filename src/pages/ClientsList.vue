<template>
<div class="container">
    <h3>Список клиентов</h3>
    <router-link to="/clients/add" class="waves-effect waves-light btn-small">Добавить клиента</router-link>
                
                    <br>
                    <table>
                        <thead>
                          <tr>
                              <th>FIO</th>
                              <th>Номер телефона</th>
                              <th>Почта</th>
                              <th>Статус клиента</th>
                          </tr>
                        </thead>
                
                        <tbody>
                        
                          <tr v-for="info in data1" :key="info.id">
                            <td>{{info.fio}}</td>
                            <td>{{info.telephone}}</td>
                            <td>{{info.email}}</td>
                            <td>{{info.status_client.name}}</td>
                          </tr>
                         
                        </tbody>
                      </table>
                </div>   
       
</template>
<script>
 const url ="http://cybernightdev.pythonanywhere.com/client/all/";
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