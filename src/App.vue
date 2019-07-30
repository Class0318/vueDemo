<template>
     <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
       <List :todos="todos" :deleteTodo ="deleteTodo"></List> 
      <Footer :todos="todos" :selectAll ="selectAll" :deleteCompleted="deleteCompleted"></Footer>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Header from './components/Header'
  import List from './components/List'
  import Footer from './components/Footer'
  
  
  export default {
     data(){
       return{
        todos:JSON.parse(localStorage.getItem('todos_key') || '[]')
       }
     },


    methods:{
       addTodo(todo){
         this.todos.unshift(todo)
       },

       deleteTodo(index){
         this.todos.splice(index, 1)
        
       },

       selectAll(isCheck){
         this.todos.forEach(todo => todo.complete = isCheck)
       },

       deleteCompleted(){
         this.todos = this.todos.filter(todo => !todo.complete)
       }
      },

       watch:{
         todos:{
           deep:true,//深度监视：内部发送任何变化都会回调
           handler:function(value){
             localStorage.setItem('todos_key',JSON.stringify(value))
           }
         }
       },

     
     components:{
        Header,
        List,
        Footer,
     }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
 
</style>
''