<template>
          <div class="container">
                 <h3>Создать клиента</h3>  
                 <p style="color:red">{{error}}</p>
                    <br>
                   
                    <div class="row">
                     
                        <div class="row">
                          <div class="input-field col s6">
                            <input v-model="fio" id="fio" type="text" class="validate">
                            <label for="fio">ФИО</label>
                          </div>

                          <div class="input-field col s6">
                            <input v-model="telephone" value="+7" v-mask="'+7(###)-###-##-##'" id="telephone" type="text" class="validate">
                            <label for="telephone">Телефон</label>
                          </div>
                        </div>
                       
                        </div>
                        <div class="row">
                          <div class="input-field col s6">
                            <input v-model="email"  id="email" type="text" class="validate">
                            <label for="email">Email</label>
                          </div>

                          <div class="input-field col s6">
                            <select v-model="status_client"> 
                              <option value="" disabled selected>Выберите статус</option>
                              <option value="1">Постоянный</option>
                              <option value="2">Новый клиент</option>
                              
                            </select>
                            <label>Статус клиента</label>
                          </div>
                        
                        </div>
                    
                        <button @click="createClient()" class="waves-effect waves-light btn-small"><i class="material-icons left"></i>Сохранить </button>
                          <router-link to="/clients" class="waves-effect waves-light btn-small">Назад</router-link>

            </div>
              
</template>
<script>
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });
export default {
     data() {
    return {
      fio:'',
      telephone: '',
      email:'',
      status_client:'',
      error:'',

    }},
}
</script>