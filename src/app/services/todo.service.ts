import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from '../models/todos.model';
import { catchError, map, Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = "https://jsonplaceholder.typicode.com/todos";

  todos = [
    {id: 1, description: "Grocery shoppping", finished: false},
    {id: 2, description: "Workout", finished: false},
    {id: 3, description: "Study", finished: false},
  ]

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]>{
    let requestUrl = this.url;

    return this.http.get<Todo[]>(this.url).pipe(
      map((resp: any) => resp ? resp : []), 
      catchError(err => {
        console.error('Error fetching todos:', err);
        return of([]); 
      })
    );
  }


}
