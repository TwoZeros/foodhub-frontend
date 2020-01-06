<template>
    <div class="container">
                 <h3>Настройки</h3> 
    
                    <br>
                   

                    <div class="row">
                      <div class="col s12">
                        <ul class="tabs">
                       
                          <li class="tab col s3"><a class="active" href="/setings/#test2">Меню</a></li>
                          <li class="tab col s3 "><a href="/setings/#test3">Категории</a></li>
                        </ul>
                      </div>
                     
                      <div id="test2" class="col s12">
                       


                        <table>
                          <thead>
                            <tr>
                                <th>Наименование</th>
                                <th>Категория</th>
                                <th>Стоимость</th>
                             </tr>
                          </thead>
                  
                          <tbody>

                            <tr v-for="info in goods" :key="info.id">
                              <td>{{info.name}}</td>
                              <td>{{info.category.name}}</td>
                              <td>{{info.price}}</td>
                         
                            </tr>
                           
                          </tbody>
                        </table>
                        </div>
                      <div id="test3" class="col s12">

                        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Добавить категорию</a>

                        <ul class="collection"  v-for="info in category" :key="info.id">
                          <li class="collection-item">{{info.name}}</li>
                         
                        </ul>
                      </div>
                      </div>



                         <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <div class="row">
       
          <div class="row">
            <h3>Добавить категорию</h3>
            <p>{{status}}</p>
            <div class="input-field col s6">
              <input v-model="nameCat" id="nameCat" required type="text" class="validate">
              <label for="nameCat">Название</label>
            </div>

            <div class="input-field col s12">
              <p>
                <label>
                  <input v-model="isAchogol" type="checkbox" />
                  <span>Алкоголь</span>
                </label>
              </p>
              <p>
                <label>
                  <input v-model="isHealth" type="checkbox" />
                  <span>Здоровое питание</span>
                </label>
              </p>
            </div>
          </div>
         
          </div>
          
     </div>
     
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Закрыть</a>
    
      
    </div>
  </div>


   
  </div>
            
       
        <!-- Modal Trigger -->
 

  
</template>
<script>
 M.AutoInit();
document.addEventListener('DOMContentLoaded', function() {
    var modaladd = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modaladd)
     var el =document.querySelectorAll('.tabs');
    var instanceTab = M.Tabs.init(el);
   
  });

   const urlGoods ="http://cybernightdev.pythonanywhere.com/goods/all";
  const urlCategory= "http://cybernightdev.pythonanywhere.com/goods/category/all"
  const urlAddCategory = "http://cybernightdev.pythonanywhere.com/goods/category/add"
export default {
    data() {
    return {
       goods:'',
                        category: '',
                        nameCat:'',
                        isAchogol:'',
                        isHealth:'',
                        status:'',
                        price:'',
                        changeCat:''
    }},
    methods: {
                        addCategory() {
                          axios.post(urlGoods, {
                            name:this.nameCat,
                            isHealth:this.isHealth,
                            isAchogol:this.isAchogol
                          }).then(response => {
                        this.status= "Успешно добавлено"
                    })
                        }
                    },
                mounted() {
                    axios.get(urlGoods).then(response => {
                        this.goods= response.data
                    })
                    axios.get(urlCategory).then(response => {
                        this.category= response.data
                    })
                }}

</script>