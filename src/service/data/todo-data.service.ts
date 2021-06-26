import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username){
    // console.log( this.http.get('http://localhost:8080/hello-world/path-variable/kumar'));
    console.log("todo");
    return this.http.get<Todo[]>(`http://localhost:8081/users/${username}/todos`);
  }
  
  deleteTodo(username, id){
    return this.http.delete(`http://localhost:8081/users/${username}/todos/${id}`)
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`http://localhost:8081/users/${username}/todos/${id}`)
  }
}

