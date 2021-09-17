import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
todos: Todo[]
message: String
  // todos =[
  //   new Todo(1, 'playing cricket',false, new Date()),
  //   new Todo(2, 'watching movie',false, new Date()),
  //   new Todo(3, 'sleeping',false, new Date()),
  //   new Todo(4, 'wake uo early morinig',false, new Date()),
  //   new Todo(5, 'Do yoga',false, new Date()),
  //   new Todo(5, 'step-53',true, new Date())
  // ]

  // todos =[
  //   {id: 1, description :'playing cricket'},
  //   {id: 2, description :'watching movie'},
  //   {id: 3, description :'sleeping'},
  //   {id: 4, description :'wake uo early morinig'},
  //   {id: 4, description :'Do yoga'}
  // ]
  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  todosRefresh(){
    this.todoService.retrieveAllTodos('user').subscribe(
      response=>{
        console.log(response);
        this.todos = response;
      }
    )
  }
  ngOnInit() {
   this.todosRefresh();
  }

  deleteTodo(id){
    this.todoService.deleteTodo('amcarthick', id).subscribe(
      response =>{
        console.log(response);
        this.message =`Delete of Todo ${id} successfull `;
        this.todosRefresh();
      }
    )
  }

  updateTodo(id){
  console.log(`update${id}`);
  this.router.navigate(['todos', id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }
}
