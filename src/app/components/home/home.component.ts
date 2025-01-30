import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { Todos } from '../../models/todos.model';
import { TodoService } from '../../services/todo.service';
import { NgFor, NgIf } from '@angular/common';
import { Todo } from '../../models/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TodoComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  todos: Todos = { items: [] };
  // todo: Todo | undefined;
  
  constructor(private todoService: TodoService){
    this.todos.items = [];
    this.getAllTodos();
  }

  getAllTodos(){
    this.todoService.getAllTodos().subscribe((resp: Todos) => {
      console.log("resp from call", resp)

      this.todos.items = resp.items;
    })
  }

  addTodo(){

  }

  editTodo(){

  }

  deleteTodo(){

  }

}
