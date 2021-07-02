<template>
  <div class="container green-border">
    <div class="row">
      <div class="col-md-4">
        <h1>To Do List</h1>
        <div class="pt-3 ">
          <app-input></app-input>
        </div>
      </div>
    </div>
    <div class="row pt-2">
      <div class="col-md-6">
        <ul class="list-group">
          <li v-for="(task, index) of tasks"  v-bind:key="index"
              class="list-group-item d-flex align-content-center">
            <div class="row">
              <div class="col-md-2 flex-and-center">
                <input type="checkbox" @input="updateTaskStatus(task)" :checked="task.checked"
                :disabled="task.checked === true" :title="task.checked?'Done':'Mark as done'">
              </div>
              <div class="col-md-8">
                <input type="text" class="p-2 form-control border-none" :id="task.id"
                       @keypress.enter="updateTaskValue($event,task)"
                       :value="task.name" />
              </div>
              <div class="col-md-2 flex-and-center">
                <button class="btn btn-danger"
                        title="Remove Task" @click="removeTask(task.id)">X
                </button>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>


</template>

<script>
import input from "@/components/input";

export default {
  data(){
    return{
      newTask : '',
      tasks: [
        {id: 1, name: 'Morning walk', checked: false},
        {id: 2, name: 'Breakfast', checked: false},
        {id: 3, name: 'Go to office', checked: false},
        {id: 4, name: 'Out for meeting', checked: false},
        {id: 5, name: 'Do groceries', checked: false},

      ]
    }
  },
  components: {
    'app-input': input
  },
  methods: {
    addNewTask: function(){
      if(this.newTask === ''){
        alert('Please enter a valid task name!');
        return;
      }
      const index = this.tasks.findIndex(t => t.name === this.newTask);
      if(index === -1){
        const id = this.tasks.length > 0 ? this.tasks[this.tasks.length-1].id+1: 1;
        this.tasks.push({id, name: this.newTask, checked: false});
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
      else{
        alert('Task is already in the queue!')
      }
    },
    updateTaskStatus: function(task){
      const index = this.tasks.findIndex(t => t.id === task.id);
      if(index !== -1){
        this.tasks[index].checked = true;
        // document.getElementById(task.id).style.textDecoration ='line-through';
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    },
    updateTaskValue: function(event, task){
      const index = this.tasks.findIndex(t => t.id === task.id);
      if(index !== -1){
        this.tasks[index].name =  event.target.value;
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        alert('Task updated');
      }
    },
    removeTask: function(id){
      const index = this.tasks.findIndex(t => t.id === id);
      if(index !== -1){
        this.tasks.splice(index, 1);
      }
    }
  },
  created() {
    this.$root.$on('addTask', (task) => {
      this.newTask = task;
      this.addNewTask();
    })

  },
  mounted() {
    if(!localStorage.getItem('tasks')){
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
    else{
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      // this.tasks.forEach(t => {
      //   if(t.checked){
      //     document.getElementById(t.id).style.textDecoration = 'line-through';
      //   }
      // })
    }

  }
}
</script>

<style scoped>
.flex-and-center{
  display: flex;
  align-items: center;
}
.border-none{
  border: none;
}
.green-border{
  border: 1px solid green;
}
</style>
