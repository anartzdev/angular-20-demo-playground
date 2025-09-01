import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodosComponent} from './features/todos/todos.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app-angular-twenty');
}
