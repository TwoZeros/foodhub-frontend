<template>
          <div class="container">
                 <h3>Создать клиента</h3>  
                 <p style="color:red">{{error}}</p>
                    <br>
                   
                    <div class="row">
                     
                        <div class="row">
                          <div class="input-field col s6">
                            <input
                             autocomplete="off"
                             v-model="fio" id="fio" type="text" class="validate">
                            <label for="fio">ФИО</label>
                             <span class="helper-text" v-if="!$v.fio.required && $v.fio.minLength" data-error="wrong">Заполните поле</span>
                             <span class="helper-text" v-if="!$v.fio.minLength" data-error="wrong">Кажется, тут ошибка</span>

                          </div>

                          <div class="input-field col s6">
                            
                            <input v-model="telephone" 
                            value="+7" 
                            autocomplete="off"
                            v-mask="'+7(###)-###-##-##'" 
                            id="telephone"
                             type="text" 
                             
                             class="validate">
                            <label for="telephone">Телефон</label>
                               <span class="helper-text" v-if="!$v.telephone.required" data-error="wrong">Укажите контактный номер</span>
                            <span class="helper-text" v-if="!$v.telephone.validFormat  && $v.telephone.required" data-error="wrong">Не верный формат</span>
                            
                          </div>
                        </div>
                      
                        </div>
                        <div class="row">
                          <div class="input-field col s6">
                            <span v-if="$v.email.$error">Не верный еmail
                       </span>
                            <input v-model="email"  id="email" type="email" class="validate">
                            <label for="email">Email</label>
                             <span class="helper-text" data-error="Не верный формат" data-success="Отлично">Если есть</span>
                          </div>
                         
                          <div class="input-field col s6">
                            <select v-model="status_client" required> 
                              <option  value="client.id" disabled selected>Выберите статус</option>
                              <option v-for="status in statusList" :value="status.id" :key="status.id" >{{status.name}}</option>
                            
                              
                            </select>
                            <label>Статус клиента</label>
                             <span class="helper-text" data-success="ok" data-error="wrong">Укажите статус</span>
                          </div>
                        
                        </div>
                    
                        <button @click="createClient()" 
                        class="waves-effect waves-light btn-small"
                        :disabled="$v.$invalid"
                        ><i class="material-icons left"></i>Сохранить </button>
                          <router-link to="/clients" class="waves-effect waves-light btn-small">Назад</router-link>

            </div>
              
</template>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

<script>

  const url ="https://apifoodhub.herokuapp.com/client/create/";
  const statusUrl = "https://apifoodhub.herokuapp.com/client/allstatus/";
  import { required, minLength, between, email  } from 'vuelidate/lib/validators'

export default {
    created() {
          axios.get(statusUrl).then(
            (response) => { this.statusList= response.data;
            
            },
            (error) => { this.error = "Упс ошибка" });
    },
    mounted() {
      setTimeout(function(){
         var elems = document.querySelectorAll('select');
             var instances = M.FormSelect.init(elems);
       },500);
    
      
      
      
        
    },
    
    data() {
    return {
      fio:'',
      telephone: '',
      email:'',
      status_client:'',
      error:'',
      statusList:[],
      list:[]
      
    }},
    validations: {
    email: {
      email,
    
    },
    fio: {
      required,
      minLength: minLength(2)
    },
     status_client: {
       required
     },
    telephone: {
      required,
      validFormat: val => /^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(val),
    }
  },
   methods: {
          createClient() {
            axios.post(url, {
            fio: this.fio,
            telephone: this.telephone,
            email:this.email,
            status_client:this.status_client
            }).then(
            (response) => { window.location.href = "#/clients" },
            (error) => { this.error = "Упс ошибка" })
            }
          }
}
</script>